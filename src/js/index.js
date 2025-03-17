import * as THREE from 'three'
import '../css/base.css'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { OutlineEffect } from 'three/addons/effects/OutlineEffect.js'
import { MMDLoader } from 'three/addons/loaders/MMDLoader.js'
import { MMDAnimationHelper } from './modules/CustomMMDAnimationHelper'

let mesh,
  camera,
  scene,
  physicsWorld,
  AmmoLib,
  renderer,
  effect,
  control,
  loadedCount = 0
let helper

let ready = false

const clock = new THREE.Clock()

const startButton = document.querySelector('.start')
document.body.addEventListener(
  'click',
  function () {
    Ammo().then((ammoLib) => {
      AmmoLib = ammoLib
      init()
      animate()
    })
  },
  { once: true },
)

const container = document.querySelector('#app')

function init() {
  camera = new THREE.PerspectiveCamera(
    60,
    container.clientWidth / container.clientHeight,
    1,
    1000,
  )
  camera.position.set(0, 20, 20)

  // scene

  scene = new THREE.Scene()

  // // Physics Debugger
  // const debugDrawer = new AmmoDebugDrawer(scene, physicsWorld, physicsWorld);
  // debugDrawer.enable();

  const listener = new THREE.AudioListener()
  camera.add(listener)
  scene.add(camera)

  const geometry = new THREE.PlaneGeometry(50, 50)
  geometry.rotateX(-Math.PI / 2)

  const material = new THREE.ShadowMaterial()
  material.opacity = 0.2

  const plane = new THREE.Mesh(geometry, material)
  plane.receiveShadow = true
  plane.castShadow = false
  scene.add(plane)

  const directionalLight = new THREE.DirectionalLight(0xfef1f1, 4)
  directionalLight.position.set(0, 35, 40)
  directionalLight.castShadow = true
  directionalLight.shadow.camera.near = 1
  directionalLight.shadow.camera.far = 1000
  directionalLight.shadow.camera.right = 25
  directionalLight.shadow.camera.left = -25
  directionalLight.shadow.camera.top = 25
  directionalLight.shadow.camera.bottom = -25
  directionalLight.shadow.mapSize.width = 256
  directionalLight.shadow.mapSize.height = 256
  scene.add(directionalLight)

  //

  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    logarithmicDepthBuffer: true,
  })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(container.clientWidth, container.clientHeight)
  renderer.shadowMap.enabled = !0
  renderer.shadowMap.type = 1
  container.appendChild(renderer.domElement)

  effect = new OutlineEffect(renderer)

  control = new OrbitControls(camera, document.querySelector('.helper'))
  control.target.set(0, 15, 0)
  control.enablePan = !1
  control.screenSpacePanning = !1
  control.minDistance = 20
  control.maxDistance = 400
  control.maxPolarAngle = Math.PI / 2

  // model

  function onProgress(xhr) {
    if (xhr.lengthComputable) {
      if (xhr.loaded / xhr.total === 1) loadedCount++
      const percentComplete = Math.round((xhr.loaded / xhr.total) * 100, 2)
      startButton.innerText =
        percentComplete.toFixed(2) + '% / ' + loadedCount + ' - 6' // 6 is number of files to load
      if (loadedCount === 6)
        setTimeout(() => document.querySelector('.loader').remove(), 500)
    }
  }

  // Model 1
  // let modelFile1 = "../../assets/models/mmd/Ling/ling_Apose.pmx";
  // let modelFile1 = '../../assets/models/mmd/Elysia Dreamy Euphony/Elysia.pmx';
  let modelFile1 = '../../assets/models/mmd/Elysia HOHE/爱莉希雅 3.0.pmx'
  // let modelFile1 = '../../assets/models/mmd/Elysia/粉色妖精小姐1.0.pmx'
  // let modelFile1 = '../../assets/models/mmd/Elysia Maid/Elysia-Maid.pmx';
  // let modelFile1 = '../../assets/models/mmd/Elysia Summer/爱莉希雅泳装 1.0.pmx';
  // const vmdFiles_1 = ['../../assets/models/mmd/vmds/wavefile_v2.vmd'];
  const vmdFiles_1 = ['../../assets/models/mmd/vmds/model 1.vmd']

  // Model 2
  // let modelFile2 = "../../assets/models/mmd/Ling/ling_Apose.pmx";
  // let modelFile2 = '../../assets/models/mmd/Elysia Dreamy Euphony/Elysia.pmx';
  // let modelFile2 = '../../assets/models/mmd/Elysia HOHE/爱莉希雅 3.0.pmx'
  let modelFile2 = '../../assets/models/mmd/Elysia/粉色妖精小姐1.0.pmx'
  // let modelFile2 = '../../assets/models/mmd/Elysia Maid/Elysia-Maid.pmx';
  // let modelFile2 = '../../assets/models/mmd/Elysia Summer/爱莉希雅泳装 1.0.pmx';
  // const vmdFiles_2 = ['../../assets/models/mmd/vmds/wavefile_v2.vmd'];
  const vmdFiles_2 = ['../../assets/models/mmd/vmds/model 2.vmd']

  const cameraVmdFile = '../../assets/models/mmd/vmds/camera 2.vmd'
  // const audioFile = '../../assets/media/audios/wavefile_short.mp3';
  const audioFile =
    '../../assets/media/audios/yt1z.net - MMD - Cry Cry ( T-ARA) ( Motion Camera DL) (128 KBps).mp3'
  const audioParams = { delayTime: 0 }

  helper = new MMDAnimationHelper({
    afterglow: 2,
    pmxAnimation: true,
  })

  const loader = new MMDLoader()

  // load model and vmd
  loader.loadWithAnimation(
    modelFile1,
    vmdFiles_1,
    function (mmd) {
      mesh = mmd.mesh
      mesh.castShadow = true
      mesh.receiveShadow = false

      helper.add(mesh, {
        animation: mmd.animation,
        physics: true,
        loop: true,
      })

      // load model 2
      loader.loadWithAnimation(
        modelFile2,
        vmdFiles_2,
        function (mmd2) {
          const mesh2 = mmd2.mesh // Model 2
          mesh2.castShadow = true
          mesh2.receiveShadow = false

          helper.add(mesh2, {
            animation: mmd2.animation,
            physics: true,
            loop: true,
          })

          // load camera vmd
          loader.loadAnimation(
            cameraVmdFile,
            camera,
            function (cameraAnimation) {
              helper.add(camera, {
                animation: cameraAnimation,
                loop: true,
              })

              // load audio
              new THREE.AudioLoader().load(
                audioFile,
                function (buffer) {
                  const audio = new THREE.Audio(listener).setBuffer(buffer)

                  // Create physics world
                  const collisionConfiguration =
                    new AmmoLib.btDefaultCollisionConfiguration()
                  const dispatcher = new AmmoLib.btCollisionDispatcher(
                    collisionConfiguration,
                  )
                  const overlappingPairCache = new AmmoLib.btDbvtBroadphase()
                  const solver =
                    new AmmoLib.btSequentialImpulseConstraintSolver()

                  physicsWorld = new AmmoLib.btDiscreteDynamicsWorld(
                    dispatcher,
                    overlappingPairCache,
                    solver,
                    collisionConfiguration,
                  )

                  physicsWorld.setGravity(new AmmoLib.btVector3(0, -9.8, 0))

                  // Physics for model 1
                  const meshShape1 = new Ammo.btConvexHullShape()
                  const mass1 = 1
                  const startTransform1 = new Ammo.btTransform()
                  const localInertia1 = new Ammo.btVector3(0, 0, 0)
                  meshShape1.calculateLocalInertia(mass1, localInertia1)
                  const motionState1 = new Ammo.btDefaultMotionState(
                    startTransform1,
                  )
                  const rbInfo1 = new Ammo.btRigidBodyConstructionInfo(
                    mass1,
                    motionState1,
                    meshShape1,
                    localInertia1,
                  )
                  const meshBody1 = new Ammo.btRigidBody(rbInfo1)
                  physicsWorld.addRigidBody(meshBody1, 1, 1)

                  // Physics for model 2
                  const meshShape2 = new Ammo.btConvexHullShape()
                  const mass2 = 1
                  const startTransform2 = new Ammo.btTransform()
                  const localInertia2 = new Ammo.btVector3(0, 0, 0)
                  meshShape2.calculateLocalInertia(mass2, localInertia2)
                  const motionState2 = new Ammo.btDefaultMotionState(
                    startTransform2,
                  )
                  const rbInfo2 = new Ammo.btRigidBodyConstructionInfo(
                    mass2,
                    motionState2,
                    meshShape2,
                    localInertia2,
                  )
                  const meshBody2 = new Ammo.btRigidBody(rbInfo2)
                  physicsWorld.addRigidBody(meshBody2, 1, 1)

                  // Set physics to model 1 and model 2
                  mesh.geometry.computeBoundingSphere()
                  mesh2.geometry.computeBoundingSphere()
                  const collisionMargin1 = mesh.geometry.boundingSphere
                  const collisionMargin2 = mesh2.geometry.boundingSphere
                  mesh.geometry.boundingSphere.radius += collisionMargin1.radius
                  mesh2.geometry.boundingSphere.radius +=
                    collisionMargin2.radius

                  helper.add(audio, audioParams)
                  scene.add(mesh) // Model 1
                  scene.add(mesh2) // Model 2

                  ready = true
                },
                onProgress,
                null,
              )
            },
            onProgress,
            null,
          )
        },
        onProgress,
        null,
      )
    },
    onProgress,
    null,
  )

  window.addEventListener('resize', onWindowResize)
}

function onWindowResize() {
  camera.aspect = container.clientWidth / container.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.clientWidth, container.clientHeight)
  effect.setSize(container.clientWidth, container.clientHeight)
}

//
function animate() {
  requestAnimationFrame(animate)
  render()
}

function render() {
  if (ready) {
    helper.update(clock.getDelta())
  }
  control.update()
  effect.render(scene, camera)
}
