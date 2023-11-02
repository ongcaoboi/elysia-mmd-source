import '../css/base.css';
import * as THREE from 'three';

import { OutlineEffect } from 'three/addons/effects/OutlineEffect.js';
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { MMDAnimationHelper } from './modules/CustomMMDAnimationHelper';

let mesh,
  camera,
  scene,
  renderer,
  effect,
  control,
  loadedCount = 0;
let helper;

let ready = false;

const clock = new THREE.Clock();

const startButton = document.querySelector('.start');
startButton.addEventListener(
  'click',
  function () {
    Ammo().then(function () {
      init();
      animate();
    });
  },
  { once: true }
);

const container = document.querySelector('#app');

function init() {
  camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 1, 1000);
  camera.position.set(0, 20, 20);

  // scene

  scene = new THREE.Scene();

  const listener = new THREE.AudioListener();
  camera.add(listener);
  scene.add(camera);

  const ambient = new THREE.AmbientLight(0xaaaaaa, 3);
  scene.add(ambient);

  const geometry = new THREE.PlaneGeometry(container.clientWidth, container.clientHeight);
  geometry.rotateX(-Math.PI / 2);

  const material = new THREE.ShadowMaterial();
  material.opacity = 0.2;

  const plane = new THREE.Mesh(geometry, material);
  plane.receiveShadow = true;
  plane.castShadow = false
  scene.add(plane);

  const directionalLight = new THREE.DirectionalLight(0xfef1f1, 4);
  directionalLight.position.set(0, 35, 40);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 2000;
  directionalLight.shadow.camera.right = 25;
  directionalLight.shadow.camera.left = -25;
  directionalLight.shadow.camera.top = 25;
  directionalLight.shadow.camera.bottom = -25;
  directionalLight.shadow.mapSize.width = 1024;
  directionalLight.shadow.mapSize.height = 1024;
  scene.add(directionalLight);

  //

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.shadowMap.enabled = !0;
  renderer.shadowMap.type = 1
  container.appendChild(renderer.domElement);

  effect = new OutlineEffect(renderer);

  control = new OrbitControls(camera, document.querySelector('.helper'));
  control.target.set(0, 15, 0);
  control.enablePan = !1;
  control.screenSpacePanning = !1;
  control.minDistance = 20;
  control.maxDistance = 400;
  control.maxPolarAngle = Math.PI / 2;

  // model

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      if (xhr.loaded / xhr.total === 1) loadedCount++;
      const percentComplete = Math.round((xhr.loaded / xhr.total) * 100, 2);
      startButton.innerText = percentComplete.toFixed(2) + '% / ' + loadedCount;
      if (loadedCount === 3) setTimeout(() => document.querySelector('.loader').remove(), 500);
    }
  }

  const modelFile = '../../assets/models/mmd/Ling/ling_Apose.pmx';
  const vmdFiles = ['../../assets/models/mmd/vmds/wavefile_v2.vmd'];
  const audioFile = '../../assets/media/audios/wavefile_short.mp3';
  const audioParams = { delayTime: (160 * 1) / 30 };

  helper = new MMDAnimationHelper({
    afterglow: 2,
    pmxAnimation: true,
  });

  const loader = new MMDLoader();

  loader.loadWithAnimation(
    modelFile,
    vmdFiles,
    function (mmd) {
      mesh = mmd.mesh;
      mesh.castShadow = true;
      mesh.receiveShadow = false;

      helper.add(mesh, {
        animation: mmd.animation,
        physics: true,
      });

      new THREE.AudioLoader().load(
        audioFile,
        function (buffer) {
          const audio = new THREE.Audio(listener).setBuffer(buffer);

          helper.add(audio, audioParams);
          scene.add(mesh);

          ready = true;
        },
        onProgress,
        null
      );
    },
    onProgress,
    null
  );

  //

  window.addEventListener('resize', onWindowResize);
}

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(container.clientWidth, container.clientHeight);
  effect.setSize(container.clientWidth, container.clientHeight);
}

//

function animate() {
  requestAnimationFrame(animate);
  render();
}

function render() {
  if (ready) {
    helper.update(clock.getDelta());
  }
  control.update();
  effect.render(scene, camera);
}
