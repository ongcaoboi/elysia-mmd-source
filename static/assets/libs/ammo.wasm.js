var Ammo = (function () {
  var t =
    'undefined' != typeof document && document.currentScript
      ? document.currentScript.src
      : void 0
  return (
    'undefined' != typeof __filename && (t = t || __filename),
    function (e) {
      var n, o
      ;(e = e || {}),
        n || (n = void 0 !== e ? e : {}),
        (n.ready = new Promise(function (t) {
          o = t
        }))
      var _,
        i = {}
      for (_ in n) n.hasOwnProperty(_) && (i[_] = n[_])
      var r, p, s, c
      ;(r = 'object' == typeof window),
        (p = 'function' == typeof importScripts),
        (s =
          'object' == typeof process &&
          'object' == typeof process.versions &&
          'string' == typeof process.versions.node),
        (c = !r && !s && !p)
      var a,
        y,
        l,
        u,
        b = ''
      s
        ? ((b = p ? require('path').dirname(b) + '/' : __dirname + '/'),
          (a = function (t, e) {
            return (
              l || (l = require('fs')),
              u || (u = require('path')),
              (t = u.normalize(t)),
              l.readFileSync(t, e ? null : 'utf8')
            )
          }),
          (y = function (t) {
            return (
              (t = a(t, !0)).buffer || (t = new Uint8Array(t)), j(t.buffer), t
            )
          }),
          1 < process.argv.length && process.argv[1].replace(/\\/g, '/'),
          process.argv.slice(2),
          process.on('uncaughtException', function (t) {
            throw t
          }),
          process.on('unhandledRejection', V),
          (n.inspect = function () {
            return '[Emscripten Module object]'
          }))
        : c
          ? ('undefined' != typeof read &&
              (a = function (t) {
                return read(t)
              }),
            (y = function (t) {
              return 'function' == typeof readbuffer
                ? new Uint8Array(readbuffer(t))
                : (j('object' == typeof (t = read(t, 'binary'))), t)
            }),
            'undefined' != typeof print &&
              ('undefined' == typeof console && (console = {}),
              (console.log = print),
              (console.warn = console.error =
                'undefined' != typeof printErr ? printErr : print)))
          : (r || p) &&
            (p
              ? (b = self.location.href)
              : document.currentScript && (b = document.currentScript.src),
            t && (b = t),
            (b =
              0 !== b.indexOf('blob:')
                ? b.substr(0, b.lastIndexOf('/') + 1)
                : ''),
            (a = function (t) {
              var e = new XMLHttpRequest()
              return e.open('GET', t, !1), e.send(null), e.responseText
            }),
            p &&
              (y = function (t) {
                var e = new XMLHttpRequest()
                return (
                  e.open('GET', t, !1),
                  (e.responseType = 'arraybuffer'),
                  e.send(null),
                  new Uint8Array(e.response)
                )
              }))
      var m,
        d = n.print || console.log.bind(console),
        h = n.printErr || console.warn.bind(console)
      for (_ in i) i.hasOwnProperty(_) && (n[_] = i[_])
      ;(i = null),
        n.wasmBinary && (m = n.wasmBinary),
        n.noExitRuntime && n.noExitRuntime,
        'object' != typeof WebAssembly && h('no native wasm support detected')
      var f,
        g = new WebAssembly.Table({
          initial: 930,
          maximum: 930,
          element: 'anyfunc',
        }),
        C = !1
      function j(t, e) {
        t || V('Assertion failed: ' + e)
      }
      var S,
        v,
        R,
        D,
        I,
        P,
        O =
          'undefined' != typeof TextDecoder ? new TextDecoder('utf8') : void 0,
        W = n.INITIAL_MEMORY || 67108864
      ;(f = n.wasmMemory
        ? n.wasmMemory
        : new WebAssembly.Memory({ initial: W / 65536, maximum: W / 65536 })) &&
        (S = f.buffer),
        (W = S.byteLength)
      var B = S
      function T(t) {
        for (; 0 < t.length; ) {
          var e = t.shift()
          if ('function' == typeof e) e(n)
          else {
            var o = e.Xy
            'number' == typeof o
              ? void 0 === e.Ey
                ? n.dynCall_v(o)
                : n.dynCall_vi(o, e.Ey)
              : o(void 0 === e.Ey ? null : e.Ey)
          }
        }
      }
      ;(S = B),
        (n.HEAP8 = v = new Int8Array(B)),
        (n.HEAP16 = new Int16Array(B)),
        (n.HEAP32 = D = new Int32Array(B)),
        (n.HEAPU8 = R = new Uint8Array(B)),
        (n.HEAPU16 = new Uint16Array(B)),
        (n.HEAPU32 = new Uint32Array(B)),
        (n.HEAPF32 = I = new Float32Array(B)),
        (n.HEAPF64 = P = new Float64Array(B)),
        (D[7848] = 5274432)
      var A = [],
        k = [],
        x = [],
        L = [],
        w = !1
      function F() {
        var t = n.preRun.shift()
        A.unshift(t)
      }
      var M = 0,
        H = null,
        G = null
      function V(t) {
        throw (
          (n.onAbort && n.onAbort(t),
          d((t += '')),
          h(t),
          (C = !0),
          new WebAssembly.RuntimeError(
            'abort(' + t + '). Build with -s ASSERTIONS=1 for more info.',
          ))
        )
      }
      function z(t) {
        var e = U
        return String.prototype.startsWith
          ? e.startsWith(t)
          : 0 === e.indexOf(t)
      }
      function N() {
        return z('data:application/octet-stream;base64,')
      }
      ;(n.preloadedImages = {}), (n.preloadedAudios = {})
      var U = 'ammo.wasm.wasm'
      if (!N()) {
        var E = U
        U = n.locateFile ? n.locateFile(E, b) : b + E
      }
      function q() {
        try {
          if (m) return new Uint8Array(m)
          if (y) return y(U)
          throw 'both async and sync fetching of the wasm failed'
        } catch (t) {
          V(t)
        }
      }
      var K = {
        1960: function (t, e, o, _, i, r, p, s) {
          if (
            !(t = n.getCache(n.ConcreteContactResultCallback)[
              t
            ]).hasOwnProperty('addSingleResult')
          )
            throw 'a JSImplementation must implement all functions, you forgot ConcreteContactResultCallback::addSingleResult.'
          return t.addSingleResult(e, o, _, i, r, p, s)
        },
        2520: function (t, e, o, _) {
          if (!(t = n.getCache(n.DebugDrawer)[t]).hasOwnProperty('drawLine'))
            throw 'a JSImplementation must implement all functions, you forgot DebugDrawer::drawLine.'
          t.drawLine(e, o, _)
        },
        2745: function (t, e, o, _, i, r) {
          if (
            !(t = n.getCache(n.DebugDrawer)[t]).hasOwnProperty(
              'drawContactPoint',
            )
          )
            throw 'a JSImplementation must implement all functions, you forgot DebugDrawer::drawContactPoint.'
          t.drawContactPoint(e, o, _, i, r)
        },
        3002: function (t, e) {
          if (
            !(t = n.getCache(n.DebugDrawer)[t]).hasOwnProperty(
              'reportErrorWarning',
            )
          )
            throw 'a JSImplementation must implement all functions, you forgot DebugDrawer::reportErrorWarning.'
          t.reportErrorWarning(e)
        },
        3249: function (t, e, o) {
          if (!(t = n.getCache(n.DebugDrawer)[t]).hasOwnProperty('draw3dText'))
            throw 'a JSImplementation must implement all functions, you forgot DebugDrawer::draw3dText.'
          t.draw3dText(e, o)
        },
        3476: function (t, e) {
          if (
            !(t = n.getCache(n.DebugDrawer)[t]).hasOwnProperty('setDebugMode')
          )
            throw 'a JSImplementation must implement all functions, you forgot DebugDrawer::setDebugMode.'
          t.setDebugMode(e)
        },
        3705: function (t) {
          if (
            !(t = n.getCache(n.DebugDrawer)[t]).hasOwnProperty('getDebugMode')
          )
            throw 'a JSImplementation must implement all functions, you forgot DebugDrawer::getDebugMode.'
          return t.getDebugMode()
        },
      }
      k.push({
        Xy: function () {
          Y()
        },
      })
      var Q = []
      function X(t, e) {
        var n
        for (Q.length = 0, e >>= 2; (n = R[t++]); )
          Q.push(105 > n ? P[++e >> 1] : D[e]), ++e
        return Q
      }
      var Z = {
        f: function () {
          V()
        },
        c: function (t, e, n) {
          return (e = X(e, n)), K[t].apply(null, e)
        },
        a: function (t, e, n) {
          return (e = X(e, n)), K[t].apply(null, e)
        },
        d: function (t, e, n) {
          R.copyWithin(t, e, e + n)
        },
        e: function () {
          V('OOM')
        },
        b: function (t) {
          var e = Date.now()
          return (
            (D[t >> 2] = (e / 1e3) | 0),
            (D[(t + 4) >> 2] = ((e % 1e3) * 1e3) | 0),
            0
          )
        },
        memory: f,
        table: g,
      }
      !(function () {
        function t(t) {
          ;(n.asm = t.exports),
            M--,
            n.monitorRunDependencies && n.monitorRunDependencies(M),
            0 == M &&
              (null !== H && (clearInterval(H), (H = null)),
              G && ((t = G), (G = null), t()))
        }
        function e(e) {
          t(e.instance)
        }
        function o(t) {
          return (
            m || (!r && !p) || 'function' != typeof fetch || z('file://')
              ? new Promise(function (t) {
                  t(q())
                })
              : fetch(U, { credentials: 'same-origin' })
                  .then(function (t) {
                    if (!t.ok)
                      throw "failed to load wasm binary file at '" + U + "'"
                    return t.arrayBuffer()
                  })
                  .catch(function () {
                    return q()
                  })
          )
            .then(function (t) {
              return WebAssembly.instantiate(t, _)
            })
            .then(t, function (t) {
              h('failed to asynchronously prepare wasm: ' + t), V(t)
            })
        }
        var _ = { a: Z }
        if (
          (M++,
          n.monitorRunDependencies && n.monitorRunDependencies(M),
          n.instantiateWasm)
        )
          try {
            return n.instantiateWasm(_, t)
          } catch (t) {
            return (
              h('Module.instantiateWasm callback failed with error: ' + t), !1
            )
          }
        ;(function () {
          if (
            m ||
            'function' != typeof WebAssembly.instantiateStreaming ||
            N() ||
            z('file://') ||
            'function' != typeof fetch
          )
            return o(e)
          fetch(U, { credentials: 'same-origin' }).then(function (t) {
            return WebAssembly.instantiateStreaming(t, _).then(e, function (t) {
              return (
                h('wasm streaming compile failed: ' + t),
                h('falling back to ArrayBuffer instantiation'),
                o(e)
              )
            })
          })
        })()
      })()
      var Y = (n.___wasm_call_ctors = function () {
        return (Y = n.___wasm_call_ctors = n.asm.g).apply(null, arguments)
      })
      n.___em_js__array_bounds_check_error = function () {
        return (n.___em_js__array_bounds_check_error = n.asm.h).apply(
          null,
          arguments,
        )
      }
      var J,
        $ = (n._emscripten_bind_btCollisionWorld_getDispatcher_0 = function () {
          return ($ = n._emscripten_bind_btCollisionWorld_getDispatcher_0 =
            n.asm.i).apply(null, arguments)
        }),
        tt = (n._emscripten_bind_btCollisionWorld_rayTest_3 = function () {
          return (tt = n._emscripten_bind_btCollisionWorld_rayTest_3 =
            n.asm.j).apply(null, arguments)
        }),
        et = (n._emscripten_bind_btCollisionWorld_getPairCache_0 = function () {
          return (et = n._emscripten_bind_btCollisionWorld_getPairCache_0 =
            n.asm.k).apply(null, arguments)
        }),
        nt = (n._emscripten_bind_btCollisionWorld_getDispatchInfo_0 =
          function () {
            return (nt = n._emscripten_bind_btCollisionWorld_getDispatchInfo_0 =
              n.asm.l).apply(null, arguments)
          }),
        ot = (n._emscripten_bind_btCollisionWorld_addCollisionObject_1 =
          function () {
            return (ot =
              n._emscripten_bind_btCollisionWorld_addCollisionObject_1 =
                n.asm.m).apply(null, arguments)
          }),
        _t = (n._emscripten_bind_btCollisionWorld_addCollisionObject_2 =
          function () {
            return (_t =
              n._emscripten_bind_btCollisionWorld_addCollisionObject_2 =
                n.asm.n).apply(null, arguments)
          }),
        it = (n._emscripten_bind_btCollisionWorld_addCollisionObject_3 =
          function () {
            return (it =
              n._emscripten_bind_btCollisionWorld_addCollisionObject_3 =
                n.asm.o).apply(null, arguments)
          }),
        rt = (n._emscripten_bind_btCollisionWorld_removeCollisionObject_1 =
          function () {
            return (rt =
              n._emscripten_bind_btCollisionWorld_removeCollisionObject_1 =
                n.asm.p).apply(null, arguments)
          }),
        pt = (n._emscripten_bind_btCollisionWorld_getBroadphase_0 =
          function () {
            return (pt = n._emscripten_bind_btCollisionWorld_getBroadphase_0 =
              n.asm.q).apply(null, arguments)
          }),
        st = (n._emscripten_bind_btCollisionWorld_convexSweepTest_5 =
          function () {
            return (st = n._emscripten_bind_btCollisionWorld_convexSweepTest_5 =
              n.asm.r).apply(null, arguments)
          }),
        ct = (n._emscripten_bind_btCollisionWorld_contactPairTest_3 =
          function () {
            return (ct = n._emscripten_bind_btCollisionWorld_contactPairTest_3 =
              n.asm.s).apply(null, arguments)
          }),
        at = (n._emscripten_bind_btCollisionWorld_contactTest_2 = function () {
          return (at = n._emscripten_bind_btCollisionWorld_contactTest_2 =
            n.asm.t).apply(null, arguments)
        }),
        yt = (n._emscripten_bind_btCollisionWorld_updateSingleAabb_1 =
          function () {
            return (yt =
              n._emscripten_bind_btCollisionWorld_updateSingleAabb_1 =
                n.asm.u).apply(null, arguments)
          }),
        lt = (n._emscripten_bind_btCollisionWorld_setDebugDrawer_1 =
          function () {
            return (lt = n._emscripten_bind_btCollisionWorld_setDebugDrawer_1 =
              n.asm.v).apply(null, arguments)
          }),
        ut = (n._emscripten_bind_btCollisionWorld_getDebugDrawer_0 =
          function () {
            return (ut = n._emscripten_bind_btCollisionWorld_getDebugDrawer_0 =
              n.asm.w).apply(null, arguments)
          }),
        bt = (n._emscripten_bind_btCollisionWorld_debugDrawWorld_0 =
          function () {
            return (bt = n._emscripten_bind_btCollisionWorld_debugDrawWorld_0 =
              n.asm.x).apply(null, arguments)
          }),
        mt = (n._emscripten_bind_btCollisionWorld_debugDrawObject_3 =
          function () {
            return (mt = n._emscripten_bind_btCollisionWorld_debugDrawObject_3 =
              n.asm.y).apply(null, arguments)
          }),
        dt = (n._emscripten_bind_btCollisionWorld___destroy___0 = function () {
          return (dt = n._emscripten_bind_btCollisionWorld___destroy___0 =
            n.asm.z).apply(null, arguments)
        }),
        ht = (n._emscripten_bind_btCollisionShape_setLocalScaling_1 =
          function () {
            return (ht = n._emscripten_bind_btCollisionShape_setLocalScaling_1 =
              n.asm.A).apply(null, arguments)
          }),
        ft = (n._emscripten_bind_btCollisionShape_getLocalScaling_0 =
          function () {
            return (ft = n._emscripten_bind_btCollisionShape_getLocalScaling_0 =
              n.asm.B).apply(null, arguments)
          }),
        gt = (n._emscripten_bind_btCollisionShape_calculateLocalInertia_2 =
          function () {
            return (gt =
              n._emscripten_bind_btCollisionShape_calculateLocalInertia_2 =
                n.asm.C).apply(null, arguments)
          }),
        Ct = (n._emscripten_bind_btCollisionShape_setMargin_1 = function () {
          return (Ct = n._emscripten_bind_btCollisionShape_setMargin_1 =
            n.asm.D).apply(null, arguments)
        }),
        jt = (n._emscripten_bind_btCollisionShape_getMargin_0 = function () {
          return (jt = n._emscripten_bind_btCollisionShape_getMargin_0 =
            n.asm.E).apply(null, arguments)
        }),
        St = (n._emscripten_bind_btCollisionShape___destroy___0 = function () {
          return (St = n._emscripten_bind_btCollisionShape___destroy___0 =
            n.asm.F).apply(null, arguments)
        }),
        vt = (n._emscripten_bind_btCollisionObject_setAnisotropicFriction_2 =
          function () {
            return (vt =
              n._emscripten_bind_btCollisionObject_setAnisotropicFriction_2 =
                n.asm.G).apply(null, arguments)
          }),
        Rt = (n._emscripten_bind_btCollisionObject_getCollisionShape_0 =
          function () {
            return (Rt =
              n._emscripten_bind_btCollisionObject_getCollisionShape_0 =
                n.asm.H).apply(null, arguments)
          }),
        Dt =
          (n._emscripten_bind_btCollisionObject_setContactProcessingThreshold_1 =
            function () {
              return (Dt =
                n._emscripten_bind_btCollisionObject_setContactProcessingThreshold_1 =
                  n.asm.I).apply(null, arguments)
            }),
        It = (n._emscripten_bind_btCollisionObject_setActivationState_1 =
          function () {
            return (It =
              n._emscripten_bind_btCollisionObject_setActivationState_1 =
                n.asm.J).apply(null, arguments)
          }),
        Pt = (n._emscripten_bind_btCollisionObject_forceActivationState_1 =
          function () {
            return (Pt =
              n._emscripten_bind_btCollisionObject_forceActivationState_1 =
                n.asm.K).apply(null, arguments)
          }),
        Ot = (n._emscripten_bind_btCollisionObject_activate_0 = function () {
          return (Ot = n._emscripten_bind_btCollisionObject_activate_0 =
            n.asm.L).apply(null, arguments)
        }),
        Wt = (n._emscripten_bind_btCollisionObject_activate_1 = function () {
          return (Wt = n._emscripten_bind_btCollisionObject_activate_1 =
            n.asm.M).apply(null, arguments)
        }),
        Bt = (n._emscripten_bind_btCollisionObject_isActive_0 = function () {
          return (Bt = n._emscripten_bind_btCollisionObject_isActive_0 =
            n.asm.N).apply(null, arguments)
        }),
        Tt = (n._emscripten_bind_btCollisionObject_isKinematicObject_0 =
          function () {
            return (Tt =
              n._emscripten_bind_btCollisionObject_isKinematicObject_0 =
                n.asm.O).apply(null, arguments)
          }),
        At = (n._emscripten_bind_btCollisionObject_isStaticObject_0 =
          function () {
            return (At = n._emscripten_bind_btCollisionObject_isStaticObject_0 =
              n.asm.P).apply(null, arguments)
          }),
        kt = (n._emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0 =
          function () {
            return (kt =
              n._emscripten_bind_btCollisionObject_isStaticOrKinematicObject_0 =
                n.asm.Q).apply(null, arguments)
          }),
        xt = (n._emscripten_bind_btCollisionObject_getRestitution_0 =
          function () {
            return (xt = n._emscripten_bind_btCollisionObject_getRestitution_0 =
              n.asm.R).apply(null, arguments)
          }),
        Lt = (n._emscripten_bind_btCollisionObject_getFriction_0 = function () {
          return (Lt = n._emscripten_bind_btCollisionObject_getFriction_0 =
            n.asm.S).apply(null, arguments)
        }),
        wt = (n._emscripten_bind_btCollisionObject_getRollingFriction_0 =
          function () {
            return (wt =
              n._emscripten_bind_btCollisionObject_getRollingFriction_0 =
                n.asm.T).apply(null, arguments)
          }),
        Ft = (n._emscripten_bind_btCollisionObject_setRestitution_1 =
          function () {
            return (Ft = n._emscripten_bind_btCollisionObject_setRestitution_1 =
              n.asm.U).apply(null, arguments)
          }),
        Mt = (n._emscripten_bind_btCollisionObject_setFriction_1 = function () {
          return (Mt = n._emscripten_bind_btCollisionObject_setFriction_1 =
            n.asm.V).apply(null, arguments)
        }),
        Ht = (n._emscripten_bind_btCollisionObject_setRollingFriction_1 =
          function () {
            return (Ht =
              n._emscripten_bind_btCollisionObject_setRollingFriction_1 =
                n.asm.W).apply(null, arguments)
          }),
        Gt = (n._emscripten_bind_btCollisionObject_getWorldTransform_0 =
          function () {
            return (Gt =
              n._emscripten_bind_btCollisionObject_getWorldTransform_0 =
                n.asm.X).apply(null, arguments)
          }),
        Vt = (n._emscripten_bind_btCollisionObject_getCollisionFlags_0 =
          function () {
            return (Vt =
              n._emscripten_bind_btCollisionObject_getCollisionFlags_0 =
                n.asm.Y).apply(null, arguments)
          }),
        zt = (n._emscripten_bind_btCollisionObject_setCollisionFlags_1 =
          function () {
            return (zt =
              n._emscripten_bind_btCollisionObject_setCollisionFlags_1 =
                n.asm.Z).apply(null, arguments)
          }),
        Nt = (n._emscripten_bind_btCollisionObject_setWorldTransform_1 =
          function () {
            return (Nt =
              n._emscripten_bind_btCollisionObject_setWorldTransform_1 =
                n.asm._).apply(null, arguments)
          }),
        Ut = (n._emscripten_bind_btCollisionObject_setCollisionShape_1 =
          function () {
            return (Ut =
              n._emscripten_bind_btCollisionObject_setCollisionShape_1 =
                n.asm.$).apply(null, arguments)
          }),
        Et = (n._emscripten_bind_btCollisionObject_setCcdMotionThreshold_1 =
          function () {
            return (Et =
              n._emscripten_bind_btCollisionObject_setCcdMotionThreshold_1 =
                n.asm.aa).apply(null, arguments)
          }),
        qt = (n._emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1 =
          function () {
            return (qt =
              n._emscripten_bind_btCollisionObject_setCcdSweptSphereRadius_1 =
                n.asm.ba).apply(null, arguments)
          }),
        Kt = (n._emscripten_bind_btCollisionObject_getUserIndex_0 =
          function () {
            return (Kt = n._emscripten_bind_btCollisionObject_getUserIndex_0 =
              n.asm.ca).apply(null, arguments)
          }),
        Qt = (n._emscripten_bind_btCollisionObject_setUserIndex_1 =
          function () {
            return (Qt = n._emscripten_bind_btCollisionObject_setUserIndex_1 =
              n.asm.da).apply(null, arguments)
          }),
        Xt = (n._emscripten_bind_btCollisionObject_getUserPointer_0 =
          function () {
            return (Xt = n._emscripten_bind_btCollisionObject_getUserPointer_0 =
              n.asm.ea).apply(null, arguments)
          }),
        Zt = (n._emscripten_bind_btCollisionObject_setUserPointer_1 =
          function () {
            return (Zt = n._emscripten_bind_btCollisionObject_setUserPointer_1 =
              n.asm.fa).apply(null, arguments)
          }),
        Yt = (n._emscripten_bind_btCollisionObject_getBroadphaseHandle_0 =
          function () {
            return (Yt =
              n._emscripten_bind_btCollisionObject_getBroadphaseHandle_0 =
                n.asm.ga).apply(null, arguments)
          }),
        Jt = (n._emscripten_bind_btCollisionObject___destroy___0 = function () {
          return (Jt = n._emscripten_bind_btCollisionObject___destroy___0 =
            n.asm.ha).apply(null, arguments)
        }),
        $t = (n._emscripten_bind_btDynamicsWorld_addAction_1 = function () {
          return ($t = n._emscripten_bind_btDynamicsWorld_addAction_1 =
            n.asm.ia).apply(null, arguments)
        }),
        te = (n._emscripten_bind_btDynamicsWorld_removeAction_1 = function () {
          return (te = n._emscripten_bind_btDynamicsWorld_removeAction_1 =
            n.asm.ja).apply(null, arguments)
        }),
        ee = (n._emscripten_bind_btDynamicsWorld_getSolverInfo_0 = function () {
          return (ee = n._emscripten_bind_btDynamicsWorld_getSolverInfo_0 =
            n.asm.ka).apply(null, arguments)
        }),
        ne = (n._emscripten_bind_btDynamicsWorld_setInternalTickCallback_1 =
          function () {
            return (ne =
              n._emscripten_bind_btDynamicsWorld_setInternalTickCallback_1 =
                n.asm.la).apply(null, arguments)
          }),
        oe = (n._emscripten_bind_btDynamicsWorld_setInternalTickCallback_2 =
          function () {
            return (oe =
              n._emscripten_bind_btDynamicsWorld_setInternalTickCallback_2 =
                n.asm.ma).apply(null, arguments)
          }),
        _e = (n._emscripten_bind_btDynamicsWorld_setInternalTickCallback_3 =
          function () {
            return (_e =
              n._emscripten_bind_btDynamicsWorld_setInternalTickCallback_3 =
                n.asm.na).apply(null, arguments)
          }),
        ie = (n._emscripten_bind_btDynamicsWorld_getDispatcher_0 = function () {
          return (ie = n._emscripten_bind_btDynamicsWorld_getDispatcher_0 =
            n.asm.oa).apply(null, arguments)
        }),
        re = (n._emscripten_bind_btDynamicsWorld_rayTest_3 = function () {
          return (re = n._emscripten_bind_btDynamicsWorld_rayTest_3 =
            n.asm.pa).apply(null, arguments)
        }),
        pe = (n._emscripten_bind_btDynamicsWorld_getPairCache_0 = function () {
          return (pe = n._emscripten_bind_btDynamicsWorld_getPairCache_0 =
            n.asm.qa).apply(null, arguments)
        }),
        se = (n._emscripten_bind_btDynamicsWorld_getDispatchInfo_0 =
          function () {
            return (se = n._emscripten_bind_btDynamicsWorld_getDispatchInfo_0 =
              n.asm.ra).apply(null, arguments)
          }),
        ce = (n._emscripten_bind_btDynamicsWorld_addCollisionObject_1 =
          function () {
            return (ce =
              n._emscripten_bind_btDynamicsWorld_addCollisionObject_1 =
                n.asm.sa).apply(null, arguments)
          }),
        ae = (n._emscripten_bind_btDynamicsWorld_addCollisionObject_2 =
          function () {
            return (ae =
              n._emscripten_bind_btDynamicsWorld_addCollisionObject_2 =
                n.asm.ta).apply(null, arguments)
          }),
        ye = (n._emscripten_bind_btDynamicsWorld_addCollisionObject_3 =
          function () {
            return (ye =
              n._emscripten_bind_btDynamicsWorld_addCollisionObject_3 =
                n.asm.ua).apply(null, arguments)
          }),
        le = (n._emscripten_bind_btDynamicsWorld_removeCollisionObject_1 =
          function () {
            return (le =
              n._emscripten_bind_btDynamicsWorld_removeCollisionObject_1 =
                n.asm.va).apply(null, arguments)
          }),
        ue = (n._emscripten_bind_btDynamicsWorld_getBroadphase_0 = function () {
          return (ue = n._emscripten_bind_btDynamicsWorld_getBroadphase_0 =
            n.asm.wa).apply(null, arguments)
        }),
        be = (n._emscripten_bind_btDynamicsWorld_convexSweepTest_5 =
          function () {
            return (be = n._emscripten_bind_btDynamicsWorld_convexSweepTest_5 =
              n.asm.xa).apply(null, arguments)
          }),
        me = (n._emscripten_bind_btDynamicsWorld_contactPairTest_3 =
          function () {
            return (me = n._emscripten_bind_btDynamicsWorld_contactPairTest_3 =
              n.asm.ya).apply(null, arguments)
          }),
        de = (n._emscripten_bind_btDynamicsWorld_contactTest_2 = function () {
          return (de = n._emscripten_bind_btDynamicsWorld_contactTest_2 =
            n.asm.za).apply(null, arguments)
        }),
        he = (n._emscripten_bind_btDynamicsWorld_updateSingleAabb_1 =
          function () {
            return (he = n._emscripten_bind_btDynamicsWorld_updateSingleAabb_1 =
              n.asm.Aa).apply(null, arguments)
          }),
        fe = (n._emscripten_bind_btDynamicsWorld_setDebugDrawer_1 =
          function () {
            return (fe = n._emscripten_bind_btDynamicsWorld_setDebugDrawer_1 =
              n.asm.Ba).apply(null, arguments)
          }),
        ge = (n._emscripten_bind_btDynamicsWorld_getDebugDrawer_0 =
          function () {
            return (ge = n._emscripten_bind_btDynamicsWorld_getDebugDrawer_0 =
              n.asm.Ca).apply(null, arguments)
          }),
        Ce = (n._emscripten_bind_btDynamicsWorld_debugDrawWorld_0 =
          function () {
            return (Ce = n._emscripten_bind_btDynamicsWorld_debugDrawWorld_0 =
              n.asm.Da).apply(null, arguments)
          }),
        je = (n._emscripten_bind_btDynamicsWorld_debugDrawObject_3 =
          function () {
            return (je = n._emscripten_bind_btDynamicsWorld_debugDrawObject_3 =
              n.asm.Ea).apply(null, arguments)
          }),
        Se = (n._emscripten_bind_btDynamicsWorld___destroy___0 = function () {
          return (Se = n._emscripten_bind_btDynamicsWorld___destroy___0 =
            n.asm.Fa).apply(null, arguments)
        }),
        ve = (n._emscripten_bind_btTypedConstraint_enableFeedback_1 =
          function () {
            return (ve = n._emscripten_bind_btTypedConstraint_enableFeedback_1 =
              n.asm.Ga).apply(null, arguments)
          }),
        Re =
          (n._emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0 =
            function () {
              return (Re =
                n._emscripten_bind_btTypedConstraint_getBreakingImpulseThreshold_0 =
                  n.asm.Ha).apply(null, arguments)
            }),
        De =
          (n._emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1 =
            function () {
              return (De =
                n._emscripten_bind_btTypedConstraint_setBreakingImpulseThreshold_1 =
                  n.asm.Ia).apply(null, arguments)
            }),
        Ie = (n._emscripten_bind_btTypedConstraint_getParam_2 = function () {
          return (Ie = n._emscripten_bind_btTypedConstraint_getParam_2 =
            n.asm.Ja).apply(null, arguments)
        }),
        Pe = (n._emscripten_bind_btTypedConstraint_setParam_3 = function () {
          return (Pe = n._emscripten_bind_btTypedConstraint_setParam_3 =
            n.asm.Ka).apply(null, arguments)
        }),
        Oe = (n._emscripten_bind_btTypedConstraint___destroy___0 = function () {
          return (Oe = n._emscripten_bind_btTypedConstraint___destroy___0 =
            n.asm.La).apply(null, arguments)
        }),
        We = (n._emscripten_bind_btConcaveShape_setLocalScaling_1 =
          function () {
            return (We = n._emscripten_bind_btConcaveShape_setLocalScaling_1 =
              n.asm.Ma).apply(null, arguments)
          }),
        Be = (n._emscripten_bind_btConcaveShape_getLocalScaling_0 =
          function () {
            return (Be = n._emscripten_bind_btConcaveShape_getLocalScaling_0 =
              n.asm.Na).apply(null, arguments)
          }),
        Te = (n._emscripten_bind_btConcaveShape_calculateLocalInertia_2 =
          function () {
            return (Te =
              n._emscripten_bind_btConcaveShape_calculateLocalInertia_2 =
                n.asm.Oa).apply(null, arguments)
          }),
        Ae = (n._emscripten_bind_btConcaveShape___destroy___0 = function () {
          return (Ae = n._emscripten_bind_btConcaveShape___destroy___0 =
            n.asm.Pa).apply(null, arguments)
        }),
        ke = (n._emscripten_bind_btCapsuleShape_btCapsuleShape_2 = function () {
          return (ke = n._emscripten_bind_btCapsuleShape_btCapsuleShape_2 =
            n.asm.Qa).apply(null, arguments)
        }),
        xe = (n._emscripten_bind_btCapsuleShape_setMargin_1 = function () {
          return (xe = n._emscripten_bind_btCapsuleShape_setMargin_1 =
            n.asm.Ra).apply(null, arguments)
        }),
        Le = (n._emscripten_bind_btCapsuleShape_getMargin_0 = function () {
          return (Le = n._emscripten_bind_btCapsuleShape_getMargin_0 =
            n.asm.Sa).apply(null, arguments)
        }),
        we = (n._emscripten_bind_btCapsuleShape_getUpAxis_0 = function () {
          return (we = n._emscripten_bind_btCapsuleShape_getUpAxis_0 =
            n.asm.Ta).apply(null, arguments)
        }),
        Fe = (n._emscripten_bind_btCapsuleShape_getRadius_0 = function () {
          return (Fe = n._emscripten_bind_btCapsuleShape_getRadius_0 =
            n.asm.Ua).apply(null, arguments)
        }),
        Me = (n._emscripten_bind_btCapsuleShape_getHalfHeight_0 = function () {
          return (Me = n._emscripten_bind_btCapsuleShape_getHalfHeight_0 =
            n.asm.Va).apply(null, arguments)
        }),
        He = (n._emscripten_bind_btCapsuleShape_setLocalScaling_1 =
          function () {
            return (He = n._emscripten_bind_btCapsuleShape_setLocalScaling_1 =
              n.asm.Wa).apply(null, arguments)
          }),
        Ge = (n._emscripten_bind_btCapsuleShape_getLocalScaling_0 =
          function () {
            return (Ge = n._emscripten_bind_btCapsuleShape_getLocalScaling_0 =
              n.asm.Xa).apply(null, arguments)
          }),
        Ve = (n._emscripten_bind_btCapsuleShape_calculateLocalInertia_2 =
          function () {
            return (Ve =
              n._emscripten_bind_btCapsuleShape_calculateLocalInertia_2 =
                n.asm.Ya).apply(null, arguments)
          }),
        ze = (n._emscripten_bind_btCapsuleShape___destroy___0 = function () {
          return (ze = n._emscripten_bind_btCapsuleShape___destroy___0 =
            n.asm.Za).apply(null, arguments)
        }),
        Ne = (n._emscripten_bind_btIDebugDraw_drawLine_3 = function () {
          return (Ne = n._emscripten_bind_btIDebugDraw_drawLine_3 =
            n.asm._a).apply(null, arguments)
        }),
        Ue = (n._emscripten_bind_btIDebugDraw_drawContactPoint_5 = function () {
          return (Ue = n._emscripten_bind_btIDebugDraw_drawContactPoint_5 =
            n.asm.$a).apply(null, arguments)
        }),
        Ee = (n._emscripten_bind_btIDebugDraw_reportErrorWarning_1 =
          function () {
            return (Ee = n._emscripten_bind_btIDebugDraw_reportErrorWarning_1 =
              n.asm.ab).apply(null, arguments)
          }),
        qe = (n._emscripten_bind_btIDebugDraw_draw3dText_2 = function () {
          return (qe = n._emscripten_bind_btIDebugDraw_draw3dText_2 =
            n.asm.bb).apply(null, arguments)
        }),
        Ke = (n._emscripten_bind_btIDebugDraw_setDebugMode_1 = function () {
          return (Ke = n._emscripten_bind_btIDebugDraw_setDebugMode_1 =
            n.asm.cb).apply(null, arguments)
        }),
        Qe = (n._emscripten_bind_btIDebugDraw_getDebugMode_0 = function () {
          return (Qe = n._emscripten_bind_btIDebugDraw_getDebugMode_0 =
            n.asm.db).apply(null, arguments)
        }),
        Xe = (n._emscripten_bind_btIDebugDraw___destroy___0 = function () {
          return (Xe = n._emscripten_bind_btIDebugDraw___destroy___0 =
            n.asm.eb).apply(null, arguments)
        }),
        Ze =
          (n._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0 =
            function () {
              return (Ze =
                n._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_0 =
                  n.asm.fb).apply(null, arguments)
            }),
        Ye =
          (n._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1 =
            function () {
              return (Ye =
                n._emscripten_bind_btDefaultCollisionConfiguration_btDefaultCollisionConfiguration_1 =
                  n.asm.gb).apply(null, arguments)
            }),
        Je = (n._emscripten_bind_btDefaultCollisionConfiguration___destroy___0 =
          function () {
            return (Je =
              n._emscripten_bind_btDefaultCollisionConfiguration___destroy___0 =
                n.asm.hb).apply(null, arguments)
          }),
        $e = (n._emscripten_bind_btTriangleMeshShape_setLocalScaling_1 =
          function () {
            return ($e =
              n._emscripten_bind_btTriangleMeshShape_setLocalScaling_1 =
                n.asm.ib).apply(null, arguments)
          }),
        tn = (n._emscripten_bind_btTriangleMeshShape_getLocalScaling_0 =
          function () {
            return (tn =
              n._emscripten_bind_btTriangleMeshShape_getLocalScaling_0 =
                n.asm.jb).apply(null, arguments)
          }),
        en = (n._emscripten_bind_btTriangleMeshShape_calculateLocalInertia_2 =
          function () {
            return (en =
              n._emscripten_bind_btTriangleMeshShape_calculateLocalInertia_2 =
                n.asm.kb).apply(null, arguments)
          }),
        nn = (n._emscripten_bind_btTriangleMeshShape___destroy___0 =
          function () {
            return (nn = n._emscripten_bind_btTriangleMeshShape___destroy___0 =
              n.asm.lb).apply(null, arguments)
          }),
        on = (n._emscripten_bind_btGhostObject_btGhostObject_0 = function () {
          return (on = n._emscripten_bind_btGhostObject_btGhostObject_0 =
            n.asm.mb).apply(null, arguments)
        }),
        _n = (n._emscripten_bind_btGhostObject_getNumOverlappingObjects_0 =
          function () {
            return (_n =
              n._emscripten_bind_btGhostObject_getNumOverlappingObjects_0 =
                n.asm.nb).apply(null, arguments)
          }),
        rn = (n._emscripten_bind_btGhostObject_getOverlappingObject_1 =
          function () {
            return (rn =
              n._emscripten_bind_btGhostObject_getOverlappingObject_1 =
                n.asm.ob).apply(null, arguments)
          }),
        pn = (n._emscripten_bind_btGhostObject_setAnisotropicFriction_2 =
          function () {
            return (pn =
              n._emscripten_bind_btGhostObject_setAnisotropicFriction_2 =
                n.asm.pb).apply(null, arguments)
          }),
        sn = (n._emscripten_bind_btGhostObject_getCollisionShape_0 =
          function () {
            return (sn = n._emscripten_bind_btGhostObject_getCollisionShape_0 =
              n.asm.qb).apply(null, arguments)
          }),
        cn = (n._emscripten_bind_btGhostObject_setContactProcessingThreshold_1 =
          function () {
            return (cn =
              n._emscripten_bind_btGhostObject_setContactProcessingThreshold_1 =
                n.asm.rb).apply(null, arguments)
          }),
        an = (n._emscripten_bind_btGhostObject_setActivationState_1 =
          function () {
            return (an = n._emscripten_bind_btGhostObject_setActivationState_1 =
              n.asm.sb).apply(null, arguments)
          }),
        yn = (n._emscripten_bind_btGhostObject_forceActivationState_1 =
          function () {
            return (yn =
              n._emscripten_bind_btGhostObject_forceActivationState_1 =
                n.asm.tb).apply(null, arguments)
          }),
        ln = (n._emscripten_bind_btGhostObject_activate_0 = function () {
          return (ln = n._emscripten_bind_btGhostObject_activate_0 =
            n.asm.ub).apply(null, arguments)
        }),
        un = (n._emscripten_bind_btGhostObject_activate_1 = function () {
          return (un = n._emscripten_bind_btGhostObject_activate_1 =
            n.asm.vb).apply(null, arguments)
        }),
        bn = (n._emscripten_bind_btGhostObject_isActive_0 = function () {
          return (bn = n._emscripten_bind_btGhostObject_isActive_0 =
            n.asm.wb).apply(null, arguments)
        }),
        mn = (n._emscripten_bind_btGhostObject_isKinematicObject_0 =
          function () {
            return (mn = n._emscripten_bind_btGhostObject_isKinematicObject_0 =
              n.asm.xb).apply(null, arguments)
          }),
        dn = (n._emscripten_bind_btGhostObject_isStaticObject_0 = function () {
          return (dn = n._emscripten_bind_btGhostObject_isStaticObject_0 =
            n.asm.yb).apply(null, arguments)
        }),
        hn = (n._emscripten_bind_btGhostObject_isStaticOrKinematicObject_0 =
          function () {
            return (hn =
              n._emscripten_bind_btGhostObject_isStaticOrKinematicObject_0 =
                n.asm.zb).apply(null, arguments)
          }),
        fn = (n._emscripten_bind_btGhostObject_getRestitution_0 = function () {
          return (fn = n._emscripten_bind_btGhostObject_getRestitution_0 =
            n.asm.Ab).apply(null, arguments)
        }),
        gn = (n._emscripten_bind_btGhostObject_getFriction_0 = function () {
          return (gn = n._emscripten_bind_btGhostObject_getFriction_0 =
            n.asm.Bb).apply(null, arguments)
        }),
        Cn = (n._emscripten_bind_btGhostObject_getRollingFriction_0 =
          function () {
            return (Cn = n._emscripten_bind_btGhostObject_getRollingFriction_0 =
              n.asm.Cb).apply(null, arguments)
          }),
        jn = (n._emscripten_bind_btGhostObject_setRestitution_1 = function () {
          return (jn = n._emscripten_bind_btGhostObject_setRestitution_1 =
            n.asm.Db).apply(null, arguments)
        }),
        Sn = (n._emscripten_bind_btGhostObject_setFriction_1 = function () {
          return (Sn = n._emscripten_bind_btGhostObject_setFriction_1 =
            n.asm.Eb).apply(null, arguments)
        }),
        vn = (n._emscripten_bind_btGhostObject_setRollingFriction_1 =
          function () {
            return (vn = n._emscripten_bind_btGhostObject_setRollingFriction_1 =
              n.asm.Fb).apply(null, arguments)
          }),
        Rn = (n._emscripten_bind_btGhostObject_getWorldTransform_0 =
          function () {
            return (Rn = n._emscripten_bind_btGhostObject_getWorldTransform_0 =
              n.asm.Gb).apply(null, arguments)
          }),
        Dn = (n._emscripten_bind_btGhostObject_getCollisionFlags_0 =
          function () {
            return (Dn = n._emscripten_bind_btGhostObject_getCollisionFlags_0 =
              n.asm.Hb).apply(null, arguments)
          }),
        In = (n._emscripten_bind_btGhostObject_setCollisionFlags_1 =
          function () {
            return (In = n._emscripten_bind_btGhostObject_setCollisionFlags_1 =
              n.asm.Ib).apply(null, arguments)
          }),
        Pn = (n._emscripten_bind_btGhostObject_setWorldTransform_1 =
          function () {
            return (Pn = n._emscripten_bind_btGhostObject_setWorldTransform_1 =
              n.asm.Jb).apply(null, arguments)
          }),
        On = (n._emscripten_bind_btGhostObject_setCollisionShape_1 =
          function () {
            return (On = n._emscripten_bind_btGhostObject_setCollisionShape_1 =
              n.asm.Kb).apply(null, arguments)
          }),
        Wn = (n._emscripten_bind_btGhostObject_setCcdMotionThreshold_1 =
          function () {
            return (Wn =
              n._emscripten_bind_btGhostObject_setCcdMotionThreshold_1 =
                n.asm.Lb).apply(null, arguments)
          }),
        Bn = (n._emscripten_bind_btGhostObject_setCcdSweptSphereRadius_1 =
          function () {
            return (Bn =
              n._emscripten_bind_btGhostObject_setCcdSweptSphereRadius_1 =
                n.asm.Mb).apply(null, arguments)
          }),
        Tn = (n._emscripten_bind_btGhostObject_getUserIndex_0 = function () {
          return (Tn = n._emscripten_bind_btGhostObject_getUserIndex_0 =
            n.asm.Nb).apply(null, arguments)
        }),
        An = (n._emscripten_bind_btGhostObject_setUserIndex_1 = function () {
          return (An = n._emscripten_bind_btGhostObject_setUserIndex_1 =
            n.asm.Ob).apply(null, arguments)
        }),
        kn = (n._emscripten_bind_btGhostObject_getUserPointer_0 = function () {
          return (kn = n._emscripten_bind_btGhostObject_getUserPointer_0 =
            n.asm.Pb).apply(null, arguments)
        }),
        xn = (n._emscripten_bind_btGhostObject_setUserPointer_1 = function () {
          return (xn = n._emscripten_bind_btGhostObject_setUserPointer_1 =
            n.asm.Qb).apply(null, arguments)
        }),
        Ln = (n._emscripten_bind_btGhostObject_getBroadphaseHandle_0 =
          function () {
            return (Ln =
              n._emscripten_bind_btGhostObject_getBroadphaseHandle_0 =
                n.asm.Rb).apply(null, arguments)
          }),
        wn = (n._emscripten_bind_btGhostObject___destroy___0 = function () {
          return (wn = n._emscripten_bind_btGhostObject___destroy___0 =
            n.asm.Sb).apply(null, arguments)
        }),
        Fn = (n._emscripten_bind_btConeShape_btConeShape_2 = function () {
          return (Fn = n._emscripten_bind_btConeShape_btConeShape_2 =
            n.asm.Tb).apply(null, arguments)
        }),
        Mn = (n._emscripten_bind_btConeShape_setLocalScaling_1 = function () {
          return (Mn = n._emscripten_bind_btConeShape_setLocalScaling_1 =
            n.asm.Ub).apply(null, arguments)
        }),
        Hn = (n._emscripten_bind_btConeShape_getLocalScaling_0 = function () {
          return (Hn = n._emscripten_bind_btConeShape_getLocalScaling_0 =
            n.asm.Vb).apply(null, arguments)
        }),
        Gn = (n._emscripten_bind_btConeShape_calculateLocalInertia_2 =
          function () {
            return (Gn =
              n._emscripten_bind_btConeShape_calculateLocalInertia_2 =
                n.asm.Wb).apply(null, arguments)
          }),
        Vn = (n._emscripten_bind_btConeShape___destroy___0 = function () {
          return (Vn = n._emscripten_bind_btConeShape___destroy___0 =
            n.asm.Xb).apply(null, arguments)
        }),
        zn = (n._emscripten_bind_btActionInterface_updateAction_2 =
          function () {
            return (zn = n._emscripten_bind_btActionInterface_updateAction_2 =
              n.asm.Yb).apply(null, arguments)
          }),
        Nn = (n._emscripten_bind_btActionInterface___destroy___0 = function () {
          return (Nn = n._emscripten_bind_btActionInterface___destroy___0 =
            n.asm.Zb).apply(null, arguments)
        }),
        Un = (n._emscripten_bind_btVector3_btVector3_0 = function () {
          return (Un = n._emscripten_bind_btVector3_btVector3_0 =
            n.asm._b).apply(null, arguments)
        }),
        En = (n._emscripten_bind_btVector3_btVector3_3 = function () {
          return (En = n._emscripten_bind_btVector3_btVector3_3 =
            n.asm.$b).apply(null, arguments)
        }),
        qn = (n._emscripten_bind_btVector3_length_0 = function () {
          return (qn = n._emscripten_bind_btVector3_length_0 = n.asm.ac).apply(
            null,
            arguments,
          )
        }),
        Kn = (n._emscripten_bind_btVector3_x_0 = function () {
          return (Kn = n._emscripten_bind_btVector3_x_0 = n.asm.bc).apply(
            null,
            arguments,
          )
        }),
        Qn = (n._emscripten_bind_btVector3_y_0 = function () {
          return (Qn = n._emscripten_bind_btVector3_y_0 = n.asm.cc).apply(
            null,
            arguments,
          )
        }),
        Xn = (n._emscripten_bind_btVector3_z_0 = function () {
          return (Xn = n._emscripten_bind_btVector3_z_0 = n.asm.dc).apply(
            null,
            arguments,
          )
        }),
        Zn = (n._emscripten_bind_btVector3_setX_1 = function () {
          return (Zn = n._emscripten_bind_btVector3_setX_1 = n.asm.ec).apply(
            null,
            arguments,
          )
        }),
        Yn = (n._emscripten_bind_btVector3_setY_1 = function () {
          return (Yn = n._emscripten_bind_btVector3_setY_1 = n.asm.fc).apply(
            null,
            arguments,
          )
        }),
        Jn = (n._emscripten_bind_btVector3_setZ_1 = function () {
          return (Jn = n._emscripten_bind_btVector3_setZ_1 = n.asm.gc).apply(
            null,
            arguments,
          )
        }),
        $n = (n._emscripten_bind_btVector3_setValue_3 = function () {
          return ($n = n._emscripten_bind_btVector3_setValue_3 =
            n.asm.hc).apply(null, arguments)
        }),
        to = (n._emscripten_bind_btVector3_normalize_0 = function () {
          return (to = n._emscripten_bind_btVector3_normalize_0 =
            n.asm.ic).apply(null, arguments)
        }),
        eo = (n._emscripten_bind_btVector3_rotate_2 = function () {
          return (eo = n._emscripten_bind_btVector3_rotate_2 = n.asm.jc).apply(
            null,
            arguments,
          )
        }),
        no = (n._emscripten_bind_btVector3_dot_1 = function () {
          return (no = n._emscripten_bind_btVector3_dot_1 = n.asm.kc).apply(
            null,
            arguments,
          )
        }),
        oo = (n._emscripten_bind_btVector3_op_mul_1 = function () {
          return (oo = n._emscripten_bind_btVector3_op_mul_1 = n.asm.lc).apply(
            null,
            arguments,
          )
        }),
        _o = (n._emscripten_bind_btVector3_op_add_1 = function () {
          return (_o = n._emscripten_bind_btVector3_op_add_1 = n.asm.mc).apply(
            null,
            arguments,
          )
        }),
        io = (n._emscripten_bind_btVector3_op_sub_1 = function () {
          return (io = n._emscripten_bind_btVector3_op_sub_1 = n.asm.nc).apply(
            null,
            arguments,
          )
        }),
        ro = (n._emscripten_bind_btVector3___destroy___0 = function () {
          return (ro = n._emscripten_bind_btVector3___destroy___0 =
            n.asm.oc).apply(null, arguments)
        }),
        po = (n._emscripten_bind_btVehicleRaycaster_castRay_3 = function () {
          return (po = n._emscripten_bind_btVehicleRaycaster_castRay_3 =
            n.asm.pc).apply(null, arguments)
        }),
        so = (n._emscripten_bind_btVehicleRaycaster___destroy___0 =
          function () {
            return (so = n._emscripten_bind_btVehicleRaycaster___destroy___0 =
              n.asm.qc).apply(null, arguments)
          }),
        co = (n._emscripten_bind_btQuadWord_x_0 = function () {
          return (co = n._emscripten_bind_btQuadWord_x_0 = n.asm.rc).apply(
            null,
            arguments,
          )
        }),
        ao = (n._emscripten_bind_btQuadWord_y_0 = function () {
          return (ao = n._emscripten_bind_btQuadWord_y_0 = n.asm.sc).apply(
            null,
            arguments,
          )
        }),
        yo = (n._emscripten_bind_btQuadWord_z_0 = function () {
          return (yo = n._emscripten_bind_btQuadWord_z_0 = n.asm.tc).apply(
            null,
            arguments,
          )
        }),
        lo = (n._emscripten_bind_btQuadWord_w_0 = function () {
          return (lo = n._emscripten_bind_btQuadWord_w_0 = n.asm.uc).apply(
            null,
            arguments,
          )
        }),
        uo = (n._emscripten_bind_btQuadWord_setX_1 = function () {
          return (uo = n._emscripten_bind_btQuadWord_setX_1 = n.asm.vc).apply(
            null,
            arguments,
          )
        }),
        bo = (n._emscripten_bind_btQuadWord_setY_1 = function () {
          return (bo = n._emscripten_bind_btQuadWord_setY_1 = n.asm.wc).apply(
            null,
            arguments,
          )
        }),
        mo = (n._emscripten_bind_btQuadWord_setZ_1 = function () {
          return (mo = n._emscripten_bind_btQuadWord_setZ_1 = n.asm.xc).apply(
            null,
            arguments,
          )
        }),
        ho = (n._emscripten_bind_btQuadWord_setW_1 = function () {
          return (ho = n._emscripten_bind_btQuadWord_setW_1 = n.asm.yc).apply(
            null,
            arguments,
          )
        }),
        fo = (n._emscripten_bind_btQuadWord___destroy___0 = function () {
          return (fo = n._emscripten_bind_btQuadWord___destroy___0 =
            n.asm.zc).apply(null, arguments)
        }),
        go = (n._emscripten_bind_btCylinderShape_btCylinderShape_1 =
          function () {
            return (go = n._emscripten_bind_btCylinderShape_btCylinderShape_1 =
              n.asm.Ac).apply(null, arguments)
          }),
        Co = (n._emscripten_bind_btCylinderShape_setMargin_1 = function () {
          return (Co = n._emscripten_bind_btCylinderShape_setMargin_1 =
            n.asm.Bc).apply(null, arguments)
        }),
        jo = (n._emscripten_bind_btCylinderShape_getMargin_0 = function () {
          return (jo = n._emscripten_bind_btCylinderShape_getMargin_0 =
            n.asm.Cc).apply(null, arguments)
        }),
        So = (n._emscripten_bind_btCylinderShape_setLocalScaling_1 =
          function () {
            return (So = n._emscripten_bind_btCylinderShape_setLocalScaling_1 =
              n.asm.Dc).apply(null, arguments)
          }),
        vo = (n._emscripten_bind_btCylinderShape_getLocalScaling_0 =
          function () {
            return (vo = n._emscripten_bind_btCylinderShape_getLocalScaling_0 =
              n.asm.Ec).apply(null, arguments)
          }),
        Ro = (n._emscripten_bind_btCylinderShape_calculateLocalInertia_2 =
          function () {
            return (Ro =
              n._emscripten_bind_btCylinderShape_calculateLocalInertia_2 =
                n.asm.Fc).apply(null, arguments)
          }),
        Do = (n._emscripten_bind_btCylinderShape___destroy___0 = function () {
          return (Do = n._emscripten_bind_btCylinderShape___destroy___0 =
            n.asm.Gc).apply(null, arguments)
        }),
        Io =
          (n._emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4 =
            function () {
              return (Io =
                n._emscripten_bind_btDiscreteDynamicsWorld_btDiscreteDynamicsWorld_4 =
                  n.asm.Hc).apply(null, arguments)
            }),
        Po = (n._emscripten_bind_btDiscreteDynamicsWorld_setGravity_1 =
          function () {
            return (Po =
              n._emscripten_bind_btDiscreteDynamicsWorld_setGravity_1 =
                n.asm.Ic).apply(null, arguments)
          }),
        Oo = (n._emscripten_bind_btDiscreteDynamicsWorld_getGravity_0 =
          function () {
            return (Oo =
              n._emscripten_bind_btDiscreteDynamicsWorld_getGravity_0 =
                n.asm.Jc).apply(null, arguments)
          }),
        Wo = (n._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1 =
          function () {
            return (Wo =
              n._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_1 =
                n.asm.Kc).apply(null, arguments)
          }),
        Bo = (n._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3 =
          function () {
            return (Bo =
              n._emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_3 =
                n.asm.Lc).apply(null, arguments)
          }),
        To = (n._emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1 =
          function () {
            return (To =
              n._emscripten_bind_btDiscreteDynamicsWorld_removeRigidBody_1 =
                n.asm.Mc).apply(null, arguments)
          }),
        Ao = (n._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1 =
          function () {
            return (Ao =
              n._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_1 =
                n.asm.Nc).apply(null, arguments)
          }),
        ko = (n._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2 =
          function () {
            return (ko =
              n._emscripten_bind_btDiscreteDynamicsWorld_addConstraint_2 =
                n.asm.Oc).apply(null, arguments)
          }),
        xo = (n._emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1 =
          function () {
            return (xo =
              n._emscripten_bind_btDiscreteDynamicsWorld_removeConstraint_1 =
                n.asm.Pc).apply(null, arguments)
          }),
        Lo = (n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1 =
          function () {
            return (Lo =
              n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_1 =
                n.asm.Qc).apply(null, arguments)
          }),
        wo = (n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2 =
          function () {
            return (wo =
              n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_2 =
                n.asm.Rc).apply(null, arguments)
          }),
        Fo = (n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3 =
          function () {
            return (Fo =
              n._emscripten_bind_btDiscreteDynamicsWorld_stepSimulation_3 =
                n.asm.Sc).apply(null, arguments)
          }),
        Mo =
          (n._emscripten_bind_btDiscreteDynamicsWorld_setContactAddedCallback_1 =
            function () {
              return (Mo =
                n._emscripten_bind_btDiscreteDynamicsWorld_setContactAddedCallback_1 =
                  n.asm.Tc).apply(null, arguments)
            }),
        Ho =
          (n._emscripten_bind_btDiscreteDynamicsWorld_setContactProcessedCallback_1 =
            function () {
              return (Ho =
                n._emscripten_bind_btDiscreteDynamicsWorld_setContactProcessedCallback_1 =
                  n.asm.Uc).apply(null, arguments)
            }),
        Go =
          (n._emscripten_bind_btDiscreteDynamicsWorld_setContactDestroyedCallback_1 =
            function () {
              return (Go =
                n._emscripten_bind_btDiscreteDynamicsWorld_setContactDestroyedCallback_1 =
                  n.asm.Vc).apply(null, arguments)
            }),
        Vo = (n._emscripten_bind_btDiscreteDynamicsWorld_getDispatcher_0 =
          function () {
            return (Vo =
              n._emscripten_bind_btDiscreteDynamicsWorld_getDispatcher_0 =
                n.asm.Wc).apply(null, arguments)
          }),
        zo = (n._emscripten_bind_btDiscreteDynamicsWorld_rayTest_3 =
          function () {
            return (zo = n._emscripten_bind_btDiscreteDynamicsWorld_rayTest_3 =
              n.asm.Xc).apply(null, arguments)
          }),
        No = (n._emscripten_bind_btDiscreteDynamicsWorld_getPairCache_0 =
          function () {
            return (No =
              n._emscripten_bind_btDiscreteDynamicsWorld_getPairCache_0 =
                n.asm.Yc).apply(null, arguments)
          }),
        Uo = (n._emscripten_bind_btDiscreteDynamicsWorld_getDispatchInfo_0 =
          function () {
            return (Uo =
              n._emscripten_bind_btDiscreteDynamicsWorld_getDispatchInfo_0 =
                n.asm.Zc).apply(null, arguments)
          }),
        Eo = (n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1 =
          function () {
            return (Eo =
              n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_1 =
                n.asm._c).apply(null, arguments)
          }),
        qo = (n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2 =
          function () {
            return (qo =
              n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_2 =
                n.asm.$c).apply(null, arguments)
          }),
        Ko = (n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3 =
          function () {
            return (Ko =
              n._emscripten_bind_btDiscreteDynamicsWorld_addCollisionObject_3 =
                n.asm.ad).apply(null, arguments)
          }),
        Qo =
          (n._emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1 =
            function () {
              return (Qo =
                n._emscripten_bind_btDiscreteDynamicsWorld_removeCollisionObject_1 =
                  n.asm.bd).apply(null, arguments)
            }),
        Xo = (n._emscripten_bind_btDiscreteDynamicsWorld_getBroadphase_0 =
          function () {
            return (Xo =
              n._emscripten_bind_btDiscreteDynamicsWorld_getBroadphase_0 =
                n.asm.cd).apply(null, arguments)
          }),
        Zo = (n._emscripten_bind_btDiscreteDynamicsWorld_convexSweepTest_5 =
          function () {
            return (Zo =
              n._emscripten_bind_btDiscreteDynamicsWorld_convexSweepTest_5 =
                n.asm.dd).apply(null, arguments)
          }),
        Yo = (n._emscripten_bind_btDiscreteDynamicsWorld_contactPairTest_3 =
          function () {
            return (Yo =
              n._emscripten_bind_btDiscreteDynamicsWorld_contactPairTest_3 =
                n.asm.ed).apply(null, arguments)
          }),
        Jo = (n._emscripten_bind_btDiscreteDynamicsWorld_contactTest_2 =
          function () {
            return (Jo =
              n._emscripten_bind_btDiscreteDynamicsWorld_contactTest_2 =
                n.asm.fd).apply(null, arguments)
          }),
        $o = (n._emscripten_bind_btDiscreteDynamicsWorld_updateSingleAabb_1 =
          function () {
            return ($o =
              n._emscripten_bind_btDiscreteDynamicsWorld_updateSingleAabb_1 =
                n.asm.gd).apply(null, arguments)
          }),
        t_ = (n._emscripten_bind_btDiscreteDynamicsWorld_setDebugDrawer_1 =
          function () {
            return (t_ =
              n._emscripten_bind_btDiscreteDynamicsWorld_setDebugDrawer_1 =
                n.asm.hd).apply(null, arguments)
          }),
        e_ = (n._emscripten_bind_btDiscreteDynamicsWorld_getDebugDrawer_0 =
          function () {
            return (e_ =
              n._emscripten_bind_btDiscreteDynamicsWorld_getDebugDrawer_0 =
                n.asm.id).apply(null, arguments)
          }),
        n_ = (n._emscripten_bind_btDiscreteDynamicsWorld_debugDrawWorld_0 =
          function () {
            return (n_ =
              n._emscripten_bind_btDiscreteDynamicsWorld_debugDrawWorld_0 =
                n.asm.jd).apply(null, arguments)
          }),
        o_ = (n._emscripten_bind_btDiscreteDynamicsWorld_debugDrawObject_3 =
          function () {
            return (o_ =
              n._emscripten_bind_btDiscreteDynamicsWorld_debugDrawObject_3 =
                n.asm.kd).apply(null, arguments)
          }),
        __ = (n._emscripten_bind_btDiscreteDynamicsWorld_addAction_1 =
          function () {
            return (__ =
              n._emscripten_bind_btDiscreteDynamicsWorld_addAction_1 =
                n.asm.ld).apply(null, arguments)
          }),
        i_ = (n._emscripten_bind_btDiscreteDynamicsWorld_removeAction_1 =
          function () {
            return (i_ =
              n._emscripten_bind_btDiscreteDynamicsWorld_removeAction_1 =
                n.asm.md).apply(null, arguments)
          }),
        r_ = (n._emscripten_bind_btDiscreteDynamicsWorld_getSolverInfo_0 =
          function () {
            return (r_ =
              n._emscripten_bind_btDiscreteDynamicsWorld_getSolverInfo_0 =
                n.asm.nd).apply(null, arguments)
          }),
        p_ =
          (n._emscripten_bind_btDiscreteDynamicsWorld_setInternalTickCallback_1 =
            function () {
              return (p_ =
                n._emscripten_bind_btDiscreteDynamicsWorld_setInternalTickCallback_1 =
                  n.asm.od).apply(null, arguments)
            }),
        s_ =
          (n._emscripten_bind_btDiscreteDynamicsWorld_setInternalTickCallback_2 =
            function () {
              return (s_ =
                n._emscripten_bind_btDiscreteDynamicsWorld_setInternalTickCallback_2 =
                  n.asm.pd).apply(null, arguments)
            }),
        c_ =
          (n._emscripten_bind_btDiscreteDynamicsWorld_setInternalTickCallback_3 =
            function () {
              return (c_ =
                n._emscripten_bind_btDiscreteDynamicsWorld_setInternalTickCallback_3 =
                  n.asm.qd).apply(null, arguments)
            }),
        a_ = (n._emscripten_bind_btDiscreteDynamicsWorld___destroy___0 =
          function () {
            return (a_ =
              n._emscripten_bind_btDiscreteDynamicsWorld___destroy___0 =
                n.asm.rd).apply(null, arguments)
          }),
        y_ = (n._emscripten_bind_btConvexShape_setLocalScaling_1 = function () {
          return (y_ = n._emscripten_bind_btConvexShape_setLocalScaling_1 =
            n.asm.sd).apply(null, arguments)
        }),
        l_ = (n._emscripten_bind_btConvexShape_getLocalScaling_0 = function () {
          return (l_ = n._emscripten_bind_btConvexShape_getLocalScaling_0 =
            n.asm.td).apply(null, arguments)
        }),
        u_ = (n._emscripten_bind_btConvexShape_calculateLocalInertia_2 =
          function () {
            return (u_ =
              n._emscripten_bind_btConvexShape_calculateLocalInertia_2 =
                n.asm.ud).apply(null, arguments)
          }),
        b_ = (n._emscripten_bind_btConvexShape_setMargin_1 = function () {
          return (b_ = n._emscripten_bind_btConvexShape_setMargin_1 =
            n.asm.vd).apply(null, arguments)
        }),
        m_ = (n._emscripten_bind_btConvexShape_getMargin_0 = function () {
          return (m_ = n._emscripten_bind_btConvexShape_getMargin_0 =
            n.asm.wd).apply(null, arguments)
        }),
        d_ = (n._emscripten_bind_btConvexShape___destroy___0 = function () {
          return (d_ = n._emscripten_bind_btConvexShape___destroy___0 =
            n.asm.xd).apply(null, arguments)
        }),
        h_ = (n._emscripten_bind_btDispatcher_getNumManifolds_0 = function () {
          return (h_ = n._emscripten_bind_btDispatcher_getNumManifolds_0 =
            n.asm.yd).apply(null, arguments)
        }),
        f_ = (n._emscripten_bind_btDispatcher_getManifoldByIndexInternal_1 =
          function () {
            return (f_ =
              n._emscripten_bind_btDispatcher_getManifoldByIndexInternal_1 =
                n.asm.zd).apply(null, arguments)
          }),
        g_ = (n._emscripten_bind_btDispatcher___destroy___0 = function () {
          return (g_ = n._emscripten_bind_btDispatcher___destroy___0 =
            n.asm.Ad).apply(null, arguments)
        }),
        C_ =
          (n._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_3 =
            function () {
              return (C_ =
                n._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_3 =
                  n.asm.Bd).apply(null, arguments)
            }),
        j_ =
          (n._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_5 =
            function () {
              return (j_ =
                n._emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_5 =
                  n.asm.Cd).apply(null, arguments)
            }),
        S_ = (n._emscripten_bind_btGeneric6DofConstraint_setLinearLowerLimit_1 =
          function () {
            return (S_ =
              n._emscripten_bind_btGeneric6DofConstraint_setLinearLowerLimit_1 =
                n.asm.Dd).apply(null, arguments)
          }),
        v_ = (n._emscripten_bind_btGeneric6DofConstraint_setLinearUpperLimit_1 =
          function () {
            return (v_ =
              n._emscripten_bind_btGeneric6DofConstraint_setLinearUpperLimit_1 =
                n.asm.Ed).apply(null, arguments)
          }),
        R_ =
          (n._emscripten_bind_btGeneric6DofConstraint_setAngularLowerLimit_1 =
            function () {
              return (R_ =
                n._emscripten_bind_btGeneric6DofConstraint_setAngularLowerLimit_1 =
                  n.asm.Fd).apply(null, arguments)
            }),
        D_ =
          (n._emscripten_bind_btGeneric6DofConstraint_setAngularUpperLimit_1 =
            function () {
              return (D_ =
                n._emscripten_bind_btGeneric6DofConstraint_setAngularUpperLimit_1 =
                  n.asm.Gd).apply(null, arguments)
            }),
        I_ = (n._emscripten_bind_btGeneric6DofConstraint_getFrameOffsetA_0 =
          function () {
            return (I_ =
              n._emscripten_bind_btGeneric6DofConstraint_getFrameOffsetA_0 =
                n.asm.Hd).apply(null, arguments)
          }),
        P_ = (n._emscripten_bind_btGeneric6DofConstraint_enableFeedback_1 =
          function () {
            return (P_ =
              n._emscripten_bind_btGeneric6DofConstraint_enableFeedback_1 =
                n.asm.Id).apply(null, arguments)
          }),
        O_ =
          (n._emscripten_bind_btGeneric6DofConstraint_getBreakingImpulseThreshold_0 =
            function () {
              return (O_ =
                n._emscripten_bind_btGeneric6DofConstraint_getBreakingImpulseThreshold_0 =
                  n.asm.Jd).apply(null, arguments)
            }),
        W_ =
          (n._emscripten_bind_btGeneric6DofConstraint_setBreakingImpulseThreshold_1 =
            function () {
              return (W_ =
                n._emscripten_bind_btGeneric6DofConstraint_setBreakingImpulseThreshold_1 =
                  n.asm.Kd).apply(null, arguments)
            }),
        B_ = (n._emscripten_bind_btGeneric6DofConstraint_getParam_2 =
          function () {
            return (B_ = n._emscripten_bind_btGeneric6DofConstraint_getParam_2 =
              n.asm.Ld).apply(null, arguments)
          }),
        T_ = (n._emscripten_bind_btGeneric6DofConstraint_setParam_3 =
          function () {
            return (T_ = n._emscripten_bind_btGeneric6DofConstraint_setParam_3 =
              n.asm.Md).apply(null, arguments)
          }),
        A_ = (n._emscripten_bind_btGeneric6DofConstraint___destroy___0 =
          function () {
            return (A_ =
              n._emscripten_bind_btGeneric6DofConstraint___destroy___0 =
                n.asm.Nd).apply(null, arguments)
          }),
        k_ = (n._emscripten_bind_btStridingMeshInterface_setScaling_1 =
          function () {
            return (k_ =
              n._emscripten_bind_btStridingMeshInterface_setScaling_1 =
                n.asm.Od).apply(null, arguments)
          }),
        x_ = (n._emscripten_bind_btStridingMeshInterface___destroy___0 =
          function () {
            return (x_ =
              n._emscripten_bind_btStridingMeshInterface___destroy___0 =
                n.asm.Pd).apply(null, arguments)
          }),
        L_ = (n._emscripten_bind_btMotionState_getWorldTransform_1 =
          function () {
            return (L_ = n._emscripten_bind_btMotionState_getWorldTransform_1 =
              n.asm.Qd).apply(null, arguments)
          }),
        w_ = (n._emscripten_bind_btMotionState_setWorldTransform_1 =
          function () {
            return (w_ = n._emscripten_bind_btMotionState_setWorldTransform_1 =
              n.asm.Rd).apply(null, arguments)
          }),
        F_ = (n._emscripten_bind_btMotionState___destroy___0 = function () {
          return (F_ = n._emscripten_bind_btMotionState___destroy___0 =
            n.asm.Sd).apply(null, arguments)
        }),
        M_ = (n._emscripten_bind_ConvexResultCallback_hasHit_0 = function () {
          return (M_ = n._emscripten_bind_ConvexResultCallback_hasHit_0 =
            n.asm.Td).apply(null, arguments)
        }),
        H_ =
          (n._emscripten_bind_ConvexResultCallback_get_m_collisionFilterGroup_0 =
            function () {
              return (H_ =
                n._emscripten_bind_ConvexResultCallback_get_m_collisionFilterGroup_0 =
                  n.asm.Ud).apply(null, arguments)
            }),
        G_ =
          (n._emscripten_bind_ConvexResultCallback_set_m_collisionFilterGroup_1 =
            function () {
              return (G_ =
                n._emscripten_bind_ConvexResultCallback_set_m_collisionFilterGroup_1 =
                  n.asm.Vd).apply(null, arguments)
            }),
        V_ =
          (n._emscripten_bind_ConvexResultCallback_get_m_collisionFilterMask_0 =
            function () {
              return (V_ =
                n._emscripten_bind_ConvexResultCallback_get_m_collisionFilterMask_0 =
                  n.asm.Wd).apply(null, arguments)
            }),
        z_ =
          (n._emscripten_bind_ConvexResultCallback_set_m_collisionFilterMask_1 =
            function () {
              return (z_ =
                n._emscripten_bind_ConvexResultCallback_set_m_collisionFilterMask_1 =
                  n.asm.Xd).apply(null, arguments)
            }),
        N_ =
          (n._emscripten_bind_ConvexResultCallback_get_m_closestHitFraction_0 =
            function () {
              return (N_ =
                n._emscripten_bind_ConvexResultCallback_get_m_closestHitFraction_0 =
                  n.asm.Yd).apply(null, arguments)
            }),
        U_ =
          (n._emscripten_bind_ConvexResultCallback_set_m_closestHitFraction_1 =
            function () {
              return (U_ =
                n._emscripten_bind_ConvexResultCallback_set_m_closestHitFraction_1 =
                  n.asm.Zd).apply(null, arguments)
            }),
        E_ = (n._emscripten_bind_ConvexResultCallback___destroy___0 =
          function () {
            return (E_ = n._emscripten_bind_ConvexResultCallback___destroy___0 =
              n.asm._d).apply(null, arguments)
          }),
        q_ = (n._emscripten_bind_ContactResultCallback_addSingleResult_7 =
          function () {
            return (q_ =
              n._emscripten_bind_ContactResultCallback_addSingleResult_7 =
                n.asm.$d).apply(null, arguments)
          }),
        K_ = (n._emscripten_bind_ContactResultCallback___destroy___0 =
          function () {
            return (K_ =
              n._emscripten_bind_ContactResultCallback___destroy___0 =
                n.asm.ae).apply(null, arguments)
          }),
        Q_ = (n._emscripten_bind_btSoftBodySolver___destroy___0 = function () {
          return (Q_ = n._emscripten_bind_btSoftBodySolver___destroy___0 =
            n.asm.be).apply(null, arguments)
        }),
        X_ = (n._emscripten_bind_RayResultCallback_hasHit_0 = function () {
          return (X_ = n._emscripten_bind_RayResultCallback_hasHit_0 =
            n.asm.ce).apply(null, arguments)
        }),
        Z_ =
          (n._emscripten_bind_RayResultCallback_get_m_collisionFilterGroup_0 =
            function () {
              return (Z_ =
                n._emscripten_bind_RayResultCallback_get_m_collisionFilterGroup_0 =
                  n.asm.de).apply(null, arguments)
            }),
        Y_ =
          (n._emscripten_bind_RayResultCallback_set_m_collisionFilterGroup_1 =
            function () {
              return (Y_ =
                n._emscripten_bind_RayResultCallback_set_m_collisionFilterGroup_1 =
                  n.asm.ee).apply(null, arguments)
            }),
        J_ = (n._emscripten_bind_RayResultCallback_get_m_collisionFilterMask_0 =
          function () {
            return (J_ =
              n._emscripten_bind_RayResultCallback_get_m_collisionFilterMask_0 =
                n.asm.fe).apply(null, arguments)
          }),
        $_ = (n._emscripten_bind_RayResultCallback_set_m_collisionFilterMask_1 =
          function () {
            return ($_ =
              n._emscripten_bind_RayResultCallback_set_m_collisionFilterMask_1 =
                n.asm.ge).apply(null, arguments)
          }),
        ti = (n._emscripten_bind_RayResultCallback_get_m_closestHitFraction_0 =
          function () {
            return (ti =
              n._emscripten_bind_RayResultCallback_get_m_closestHitFraction_0 =
                n.asm.he).apply(null, arguments)
          }),
        ei = (n._emscripten_bind_RayResultCallback_set_m_closestHitFraction_1 =
          function () {
            return (ei =
              n._emscripten_bind_RayResultCallback_set_m_closestHitFraction_1 =
                n.asm.ie).apply(null, arguments)
          }),
        ni = (n._emscripten_bind_RayResultCallback_get_m_collisionObject_0 =
          function () {
            return (ni =
              n._emscripten_bind_RayResultCallback_get_m_collisionObject_0 =
                n.asm.je).apply(null, arguments)
          }),
        oi = (n._emscripten_bind_RayResultCallback_set_m_collisionObject_1 =
          function () {
            return (oi =
              n._emscripten_bind_RayResultCallback_set_m_collisionObject_1 =
                n.asm.ke).apply(null, arguments)
          }),
        _i = (n._emscripten_bind_RayResultCallback___destroy___0 = function () {
          return (_i = n._emscripten_bind_RayResultCallback___destroy___0 =
            n.asm.le).apply(null, arguments)
        }),
        ii = (n._emscripten_bind_btMatrix3x3_setEulerZYX_3 = function () {
          return (ii = n._emscripten_bind_btMatrix3x3_setEulerZYX_3 =
            n.asm.me).apply(null, arguments)
        }),
        ri = (n._emscripten_bind_btMatrix3x3_getRotation_1 = function () {
          return (ri = n._emscripten_bind_btMatrix3x3_getRotation_1 =
            n.asm.ne).apply(null, arguments)
        }),
        pi = (n._emscripten_bind_btMatrix3x3_getRow_1 = function () {
          return (pi = n._emscripten_bind_btMatrix3x3_getRow_1 =
            n.asm.oe).apply(null, arguments)
        }),
        si = (n._emscripten_bind_btMatrix3x3___destroy___0 = function () {
          return (si = n._emscripten_bind_btMatrix3x3___destroy___0 =
            n.asm.pe).apply(null, arguments)
        }),
        ci = (n._emscripten_bind_btScalarArray_size_0 = function () {
          return (ci = n._emscripten_bind_btScalarArray_size_0 =
            n.asm.qe).apply(null, arguments)
        }),
        ai = (n._emscripten_bind_btScalarArray_at_1 = function () {
          return (ai = n._emscripten_bind_btScalarArray_at_1 = n.asm.re).apply(
            null,
            arguments,
          )
        }),
        yi = (n._emscripten_bind_btScalarArray___destroy___0 = function () {
          return (yi = n._emscripten_bind_btScalarArray___destroy___0 =
            n.asm.se).apply(null, arguments)
        }),
        li = (n._emscripten_bind_Material_get_m_kLST_0 = function () {
          return (li = n._emscripten_bind_Material_get_m_kLST_0 =
            n.asm.te).apply(null, arguments)
        }),
        ui = (n._emscripten_bind_Material_set_m_kLST_1 = function () {
          return (ui = n._emscripten_bind_Material_set_m_kLST_1 =
            n.asm.ue).apply(null, arguments)
        }),
        bi = (n._emscripten_bind_Material_get_m_kAST_0 = function () {
          return (bi = n._emscripten_bind_Material_get_m_kAST_0 =
            n.asm.ve).apply(null, arguments)
        }),
        mi = (n._emscripten_bind_Material_set_m_kAST_1 = function () {
          return (mi = n._emscripten_bind_Material_set_m_kAST_1 =
            n.asm.we).apply(null, arguments)
        }),
        di = (n._emscripten_bind_Material_get_m_kVST_0 = function () {
          return (di = n._emscripten_bind_Material_get_m_kVST_0 =
            n.asm.xe).apply(null, arguments)
        }),
        hi = (n._emscripten_bind_Material_set_m_kVST_1 = function () {
          return (hi = n._emscripten_bind_Material_set_m_kVST_1 =
            n.asm.ye).apply(null, arguments)
        }),
        fi = (n._emscripten_bind_Material_get_m_flags_0 = function () {
          return (fi = n._emscripten_bind_Material_get_m_flags_0 =
            n.asm.ze).apply(null, arguments)
        }),
        gi = (n._emscripten_bind_Material_set_m_flags_1 = function () {
          return (gi = n._emscripten_bind_Material_set_m_flags_1 =
            n.asm.Ae).apply(null, arguments)
        }),
        Ci = (n._emscripten_bind_Material___destroy___0 = function () {
          return (Ci = n._emscripten_bind_Material___destroy___0 =
            n.asm.Be).apply(null, arguments)
        }),
        ji = (n._emscripten_bind_btDispatcherInfo_get_m_timeStep_0 =
          function () {
            return (ji = n._emscripten_bind_btDispatcherInfo_get_m_timeStep_0 =
              n.asm.Ce).apply(null, arguments)
          }),
        Si = (n._emscripten_bind_btDispatcherInfo_set_m_timeStep_1 =
          function () {
            return (Si = n._emscripten_bind_btDispatcherInfo_set_m_timeStep_1 =
              n.asm.De).apply(null, arguments)
          }),
        vi = (n._emscripten_bind_btDispatcherInfo_get_m_stepCount_0 =
          function () {
            return (vi = n._emscripten_bind_btDispatcherInfo_get_m_stepCount_0 =
              n.asm.Ee).apply(null, arguments)
          }),
        Ri = (n._emscripten_bind_btDispatcherInfo_set_m_stepCount_1 =
          function () {
            return (Ri = n._emscripten_bind_btDispatcherInfo_set_m_stepCount_1 =
              n.asm.Fe).apply(null, arguments)
          }),
        Di = (n._emscripten_bind_btDispatcherInfo_get_m_dispatchFunc_0 =
          function () {
            return (Di =
              n._emscripten_bind_btDispatcherInfo_get_m_dispatchFunc_0 =
                n.asm.Ge).apply(null, arguments)
          }),
        Ii = (n._emscripten_bind_btDispatcherInfo_set_m_dispatchFunc_1 =
          function () {
            return (Ii =
              n._emscripten_bind_btDispatcherInfo_set_m_dispatchFunc_1 =
                n.asm.He).apply(null, arguments)
          }),
        Pi = (n._emscripten_bind_btDispatcherInfo_get_m_timeOfImpact_0 =
          function () {
            return (Pi =
              n._emscripten_bind_btDispatcherInfo_get_m_timeOfImpact_0 =
                n.asm.Ie).apply(null, arguments)
          }),
        Oi = (n._emscripten_bind_btDispatcherInfo_set_m_timeOfImpact_1 =
          function () {
            return (Oi =
              n._emscripten_bind_btDispatcherInfo_set_m_timeOfImpact_1 =
                n.asm.Je).apply(null, arguments)
          }),
        Wi = (n._emscripten_bind_btDispatcherInfo_get_m_useContinuous_0 =
          function () {
            return (Wi =
              n._emscripten_bind_btDispatcherInfo_get_m_useContinuous_0 =
                n.asm.Ke).apply(null, arguments)
          }),
        Bi = (n._emscripten_bind_btDispatcherInfo_set_m_useContinuous_1 =
          function () {
            return (Bi =
              n._emscripten_bind_btDispatcherInfo_set_m_useContinuous_1 =
                n.asm.Le).apply(null, arguments)
          }),
        Ti = (n._emscripten_bind_btDispatcherInfo_get_m_enableSatConvex_0 =
          function () {
            return (Ti =
              n._emscripten_bind_btDispatcherInfo_get_m_enableSatConvex_0 =
                n.asm.Me).apply(null, arguments)
          }),
        Ai = (n._emscripten_bind_btDispatcherInfo_set_m_enableSatConvex_1 =
          function () {
            return (Ai =
              n._emscripten_bind_btDispatcherInfo_set_m_enableSatConvex_1 =
                n.asm.Ne).apply(null, arguments)
          }),
        ki = (n._emscripten_bind_btDispatcherInfo_get_m_enableSPU_0 =
          function () {
            return (ki = n._emscripten_bind_btDispatcherInfo_get_m_enableSPU_0 =
              n.asm.Oe).apply(null, arguments)
          }),
        xi = (n._emscripten_bind_btDispatcherInfo_set_m_enableSPU_1 =
          function () {
            return (xi = n._emscripten_bind_btDispatcherInfo_set_m_enableSPU_1 =
              n.asm.Pe).apply(null, arguments)
          }),
        Li = (n._emscripten_bind_btDispatcherInfo_get_m_useEpa_0 = function () {
          return (Li = n._emscripten_bind_btDispatcherInfo_get_m_useEpa_0 =
            n.asm.Qe).apply(null, arguments)
        }),
        wi = (n._emscripten_bind_btDispatcherInfo_set_m_useEpa_1 = function () {
          return (wi = n._emscripten_bind_btDispatcherInfo_set_m_useEpa_1 =
            n.asm.Re).apply(null, arguments)
        }),
        Fi =
          (n._emscripten_bind_btDispatcherInfo_get_m_allowedCcdPenetration_0 =
            function () {
              return (Fi =
                n._emscripten_bind_btDispatcherInfo_get_m_allowedCcdPenetration_0 =
                  n.asm.Se).apply(null, arguments)
            }),
        Mi =
          (n._emscripten_bind_btDispatcherInfo_set_m_allowedCcdPenetration_1 =
            function () {
              return (Mi =
                n._emscripten_bind_btDispatcherInfo_set_m_allowedCcdPenetration_1 =
                  n.asm.Te).apply(null, arguments)
            }),
        Hi =
          (n._emscripten_bind_btDispatcherInfo_get_m_useConvexConservativeDistanceUtil_0 =
            function () {
              return (Hi =
                n._emscripten_bind_btDispatcherInfo_get_m_useConvexConservativeDistanceUtil_0 =
                  n.asm.Ue).apply(null, arguments)
            }),
        Gi =
          (n._emscripten_bind_btDispatcherInfo_set_m_useConvexConservativeDistanceUtil_1 =
            function () {
              return (Gi =
                n._emscripten_bind_btDispatcherInfo_set_m_useConvexConservativeDistanceUtil_1 =
                  n.asm.Ve).apply(null, arguments)
            }),
        Vi =
          (n._emscripten_bind_btDispatcherInfo_get_m_convexConservativeDistanceThreshold_0 =
            function () {
              return (Vi =
                n._emscripten_bind_btDispatcherInfo_get_m_convexConservativeDistanceThreshold_0 =
                  n.asm.We).apply(null, arguments)
            }),
        zi =
          (n._emscripten_bind_btDispatcherInfo_set_m_convexConservativeDistanceThreshold_1 =
            function () {
              return (zi =
                n._emscripten_bind_btDispatcherInfo_set_m_convexConservativeDistanceThreshold_1 =
                  n.asm.Xe).apply(null, arguments)
            }),
        Ni = (n._emscripten_bind_btDispatcherInfo___destroy___0 = function () {
          return (Ni = n._emscripten_bind_btDispatcherInfo___destroy___0 =
            n.asm.Ye).apply(null, arguments)
        }),
        Ui =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_chassisConnectionCS_0 =
            function () {
              return (Ui =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_chassisConnectionCS_0 =
                  n.asm.Ze).apply(null, arguments)
            }),
        Ei =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_chassisConnectionCS_1 =
            function () {
              return (Ei =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_chassisConnectionCS_1 =
                  n.asm._e).apply(null, arguments)
            }),
        qi =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelDirectionCS_0 =
            function () {
              return (qi =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelDirectionCS_0 =
                  n.asm.$e).apply(null, arguments)
            }),
        Ki =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelDirectionCS_1 =
            function () {
              return (Ki =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelDirectionCS_1 =
                  n.asm.af).apply(null, arguments)
            }),
        Qi =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelAxleCS_0 =
            function () {
              return (Qi =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelAxleCS_0 =
                  n.asm.bf).apply(null, arguments)
            }),
        Xi =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelAxleCS_1 =
            function () {
              return (Xi =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelAxleCS_1 =
                  n.asm.cf).apply(null, arguments)
            }),
        Zi =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_suspensionRestLength_0 =
            function () {
              return (Zi =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_suspensionRestLength_0 =
                  n.asm.df).apply(null, arguments)
            }),
        Yi =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_suspensionRestLength_1 =
            function () {
              return (Yi =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_suspensionRestLength_1 =
                  n.asm.ef).apply(null, arguments)
            }),
        Ji =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_maxSuspensionTravelCm_0 =
            function () {
              return (Ji =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_maxSuspensionTravelCm_0 =
                  n.asm.ff).apply(null, arguments)
            }),
        $i =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_maxSuspensionTravelCm_1 =
            function () {
              return ($i =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_maxSuspensionTravelCm_1 =
                  n.asm.gf).apply(null, arguments)
            }),
        tr =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelRadius_0 =
            function () {
              return (tr =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelRadius_0 =
                  n.asm.hf).apply(null, arguments)
            }),
        er =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelRadius_1 =
            function () {
              return (er =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelRadius_1 =
                  n.asm.jf).apply(null, arguments)
            }),
        nr =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_suspensionStiffness_0 =
            function () {
              return (nr =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_suspensionStiffness_0 =
                  n.asm.kf).apply(null, arguments)
            }),
        or =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_suspensionStiffness_1 =
            function () {
              return (or =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_suspensionStiffness_1 =
                  n.asm.lf).apply(null, arguments)
            }),
        _r =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelsDampingCompression_0 =
            function () {
              return (_r =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelsDampingCompression_0 =
                  n.asm.mf).apply(null, arguments)
            }),
        ir =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelsDampingCompression_1 =
            function () {
              return (ir =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelsDampingCompression_1 =
                  n.asm.nf).apply(null, arguments)
            }),
        rr =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelsDampingRelaxation_0 =
            function () {
              return (rr =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_wheelsDampingRelaxation_0 =
                  n.asm.of).apply(null, arguments)
            }),
        pr =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelsDampingRelaxation_1 =
            function () {
              return (pr =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_wheelsDampingRelaxation_1 =
                  n.asm.pf).apply(null, arguments)
            }),
        sr =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_frictionSlip_0 =
            function () {
              return (sr =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_frictionSlip_0 =
                  n.asm.qf).apply(null, arguments)
            }),
        cr =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_frictionSlip_1 =
            function () {
              return (cr =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_frictionSlip_1 =
                  n.asm.rf).apply(null, arguments)
            }),
        ar =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_maxSuspensionForce_0 =
            function () {
              return (ar =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_maxSuspensionForce_0 =
                  n.asm.sf).apply(null, arguments)
            }),
        yr =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_maxSuspensionForce_1 =
            function () {
              return (yr =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_maxSuspensionForce_1 =
                  n.asm.tf).apply(null, arguments)
            }),
        lr =
          (n._emscripten_bind_btWheelInfoConstructionInfo_get_m_bIsFrontWheel_0 =
            function () {
              return (lr =
                n._emscripten_bind_btWheelInfoConstructionInfo_get_m_bIsFrontWheel_0 =
                  n.asm.uf).apply(null, arguments)
            }),
        ur =
          (n._emscripten_bind_btWheelInfoConstructionInfo_set_m_bIsFrontWheel_1 =
            function () {
              return (ur =
                n._emscripten_bind_btWheelInfoConstructionInfo_set_m_bIsFrontWheel_1 =
                  n.asm.vf).apply(null, arguments)
            }),
        br = (n._emscripten_bind_btWheelInfoConstructionInfo___destroy___0 =
          function () {
            return (br =
              n._emscripten_bind_btWheelInfoConstructionInfo___destroy___0 =
                n.asm.wf).apply(null, arguments)
          }),
        mr =
          (n._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1 =
            function () {
              return (mr =
                n._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_1 =
                  n.asm.xf).apply(null, arguments)
            }),
        dr =
          (n._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2 =
            function () {
              return (dr =
                n._emscripten_bind_btConvexTriangleMeshShape_btConvexTriangleMeshShape_2 =
                  n.asm.yf).apply(null, arguments)
            }),
        hr = (n._emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1 =
          function () {
            return (hr =
              n._emscripten_bind_btConvexTriangleMeshShape_setLocalScaling_1 =
                n.asm.zf).apply(null, arguments)
          }),
        fr = (n._emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0 =
          function () {
            return (fr =
              n._emscripten_bind_btConvexTriangleMeshShape_getLocalScaling_0 =
                n.asm.Af).apply(null, arguments)
          }),
        gr =
          (n._emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2 =
            function () {
              return (gr =
                n._emscripten_bind_btConvexTriangleMeshShape_calculateLocalInertia_2 =
                  n.asm.Bf).apply(null, arguments)
            }),
        Cr = (n._emscripten_bind_btConvexTriangleMeshShape_setMargin_1 =
          function () {
            return (Cr =
              n._emscripten_bind_btConvexTriangleMeshShape_setMargin_1 =
                n.asm.Cf).apply(null, arguments)
          }),
        jr = (n._emscripten_bind_btConvexTriangleMeshShape_getMargin_0 =
          function () {
            return (jr =
              n._emscripten_bind_btConvexTriangleMeshShape_getMargin_0 =
                n.asm.Df).apply(null, arguments)
          }),
        Sr = (n._emscripten_bind_btConvexTriangleMeshShape___destroy___0 =
          function () {
            return (Sr =
              n._emscripten_bind_btConvexTriangleMeshShape___destroy___0 =
                n.asm.Ef).apply(null, arguments)
          }),
        vr =
          (n._emscripten_bind_btBroadphaseInterface_getOverlappingPairCache_0 =
            function () {
              return (vr =
                n._emscripten_bind_btBroadphaseInterface_getOverlappingPairCache_0 =
                  n.asm.Ff).apply(null, arguments)
            }),
        Rr = (n._emscripten_bind_btBroadphaseInterface___destroy___0 =
          function () {
            return (Rr =
              n._emscripten_bind_btBroadphaseInterface___destroy___0 =
                n.asm.Gf).apply(null, arguments)
          }),
        Dr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3 =
            function () {
              return (Dr =
                n._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_3 =
                  n.asm.Hf).apply(null, arguments)
            }),
        Ir =
          (n._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4 =
            function () {
              return (Ir =
                n._emscripten_bind_btRigidBodyConstructionInfo_btRigidBodyConstructionInfo_4 =
                  n.asm.If).apply(null, arguments)
            }),
        Pr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0 =
            function () {
              return (Pr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearDamping_0 =
                  n.asm.Jf).apply(null, arguments)
            }),
        Or =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1 =
            function () {
              return (Or =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearDamping_1 =
                  n.asm.Kf).apply(null, arguments)
            }),
        Wr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0 =
            function () {
              return (Wr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularDamping_0 =
                  n.asm.Lf).apply(null, arguments)
            }),
        Br =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1 =
            function () {
              return (Br =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularDamping_1 =
                  n.asm.Mf).apply(null, arguments)
            }),
        Tr = (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0 =
          function () {
            return (Tr =
              n._emscripten_bind_btRigidBodyConstructionInfo_get_m_friction_0 =
                n.asm.Nf).apply(null, arguments)
          }),
        Ar = (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1 =
          function () {
            return (Ar =
              n._emscripten_bind_btRigidBodyConstructionInfo_set_m_friction_1 =
                n.asm.Of).apply(null, arguments)
          }),
        kr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0 =
            function () {
              return (kr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_rollingFriction_0 =
                  n.asm.Pf).apply(null, arguments)
            }),
        xr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1 =
            function () {
              return (xr =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_rollingFriction_1 =
                  n.asm.Qf).apply(null, arguments)
            }),
        Lr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0 =
            function () {
              return (Lr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_restitution_0 =
                  n.asm.Rf).apply(null, arguments)
            }),
        wr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1 =
            function () {
              return (wr =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_restitution_1 =
                  n.asm.Sf).apply(null, arguments)
            }),
        Fr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0 =
            function () {
              return (Fr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_linearSleepingThreshold_0 =
                  n.asm.Tf).apply(null, arguments)
            }),
        Mr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1 =
            function () {
              return (Mr =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_linearSleepingThreshold_1 =
                  n.asm.Uf).apply(null, arguments)
            }),
        Hr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0 =
            function () {
              return (Hr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_angularSleepingThreshold_0 =
                  n.asm.Vf).apply(null, arguments)
            }),
        Gr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1 =
            function () {
              return (Gr =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_angularSleepingThreshold_1 =
                  n.asm.Wf).apply(null, arguments)
            }),
        Vr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDamping_0 =
            function () {
              return (Vr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDamping_0 =
                  n.asm.Xf).apply(null, arguments)
            }),
        zr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDamping_1 =
            function () {
              return (zr =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDamping_1 =
                  n.asm.Yf).apply(null, arguments)
            }),
        Nr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDampingFactor_0 =
            function () {
              return (Nr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalDampingFactor_0 =
                  n.asm.Zf).apply(null, arguments)
            }),
        Ur =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDampingFactor_1 =
            function () {
              return (Ur =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalDampingFactor_1 =
                  n.asm._f).apply(null, arguments)
            }),
        Er =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalLinearDampingThresholdSqr_0 =
            function () {
              return (Er =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalLinearDampingThresholdSqr_0 =
                  n.asm.$f).apply(null, arguments)
            }),
        qr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalLinearDampingThresholdSqr_1 =
            function () {
              return (qr =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalLinearDampingThresholdSqr_1 =
                  n.asm.ag).apply(null, arguments)
            }),
        Kr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingThresholdSqr_0 =
            function () {
              return (Kr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingThresholdSqr_0 =
                  n.asm.bg).apply(null, arguments)
            }),
        Qr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingThresholdSqr_1 =
            function () {
              return (Qr =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingThresholdSqr_1 =
                  n.asm.cg).apply(null, arguments)
            }),
        Xr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingFactor_0 =
            function () {
              return (Xr =
                n._emscripten_bind_btRigidBodyConstructionInfo_get_m_additionalAngularDampingFactor_0 =
                  n.asm.dg).apply(null, arguments)
            }),
        Zr =
          (n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingFactor_1 =
            function () {
              return (Zr =
                n._emscripten_bind_btRigidBodyConstructionInfo_set_m_additionalAngularDampingFactor_1 =
                  n.asm.eg).apply(null, arguments)
            }),
        Yr = (n._emscripten_bind_btRigidBodyConstructionInfo___destroy___0 =
          function () {
            return (Yr =
              n._emscripten_bind_btRigidBodyConstructionInfo___destroy___0 =
                n.asm.fg).apply(null, arguments)
          }),
        Jr = (n._emscripten_bind_btCollisionConfiguration___destroy___0 =
          function () {
            return (Jr =
              n._emscripten_bind_btCollisionConfiguration___destroy___0 =
                n.asm.gg).apply(null, arguments)
          }),
        $r = (n._emscripten_bind_btPersistentManifold_btPersistentManifold_0 =
          function () {
            return ($r =
              n._emscripten_bind_btPersistentManifold_btPersistentManifold_0 =
                n.asm.hg).apply(null, arguments)
          }),
        tp = (n._emscripten_bind_btPersistentManifold_getBody0_0 = function () {
          return (tp = n._emscripten_bind_btPersistentManifold_getBody0_0 =
            n.asm.ig).apply(null, arguments)
        }),
        ep = (n._emscripten_bind_btPersistentManifold_getBody1_0 = function () {
          return (ep = n._emscripten_bind_btPersistentManifold_getBody1_0 =
            n.asm.jg).apply(null, arguments)
        }),
        np = (n._emscripten_bind_btPersistentManifold_getNumContacts_0 =
          function () {
            return (np =
              n._emscripten_bind_btPersistentManifold_getNumContacts_0 =
                n.asm.kg).apply(null, arguments)
          }),
        op = (n._emscripten_bind_btPersistentManifold_getContactPoint_1 =
          function () {
            return (op =
              n._emscripten_bind_btPersistentManifold_getContactPoint_1 =
                n.asm.lg).apply(null, arguments)
          }),
        _p = (n._emscripten_bind_btPersistentManifold___destroy___0 =
          function () {
            return (_p = n._emscripten_bind_btPersistentManifold___destroy___0 =
              n.asm.mg).apply(null, arguments)
          }),
        ip = (n._emscripten_bind_btCompoundShape_btCompoundShape_0 =
          function () {
            return (ip = n._emscripten_bind_btCompoundShape_btCompoundShape_0 =
              n.asm.ng).apply(null, arguments)
          }),
        rp = (n._emscripten_bind_btCompoundShape_btCompoundShape_1 =
          function () {
            return (rp = n._emscripten_bind_btCompoundShape_btCompoundShape_1 =
              n.asm.og).apply(null, arguments)
          }),
        pp = (n._emscripten_bind_btCompoundShape_addChildShape_2 = function () {
          return (pp = n._emscripten_bind_btCompoundShape_addChildShape_2 =
            n.asm.pg).apply(null, arguments)
        }),
        sp = (n._emscripten_bind_btCompoundShape_removeChildShape_1 =
          function () {
            return (sp = n._emscripten_bind_btCompoundShape_removeChildShape_1 =
              n.asm.qg).apply(null, arguments)
          }),
        cp = (n._emscripten_bind_btCompoundShape_removeChildShapeByIndex_1 =
          function () {
            return (cp =
              n._emscripten_bind_btCompoundShape_removeChildShapeByIndex_1 =
                n.asm.rg).apply(null, arguments)
          }),
        ap = (n._emscripten_bind_btCompoundShape_getNumChildShapes_0 =
          function () {
            return (ap =
              n._emscripten_bind_btCompoundShape_getNumChildShapes_0 =
                n.asm.sg).apply(null, arguments)
          }),
        yp = (n._emscripten_bind_btCompoundShape_getChildShape_1 = function () {
          return (yp = n._emscripten_bind_btCompoundShape_getChildShape_1 =
            n.asm.tg).apply(null, arguments)
        }),
        lp = (n._emscripten_bind_btCompoundShape_updateChildTransform_2 =
          function () {
            return (lp =
              n._emscripten_bind_btCompoundShape_updateChildTransform_2 =
                n.asm.ug).apply(null, arguments)
          }),
        up = (n._emscripten_bind_btCompoundShape_updateChildTransform_3 =
          function () {
            return (up =
              n._emscripten_bind_btCompoundShape_updateChildTransform_3 =
                n.asm.vg).apply(null, arguments)
          }),
        bp = (n._emscripten_bind_btCompoundShape_setMargin_1 = function () {
          return (bp = n._emscripten_bind_btCompoundShape_setMargin_1 =
            n.asm.wg).apply(null, arguments)
        }),
        mp = (n._emscripten_bind_btCompoundShape_getMargin_0 = function () {
          return (mp = n._emscripten_bind_btCompoundShape_getMargin_0 =
            n.asm.xg).apply(null, arguments)
        }),
        dp = (n._emscripten_bind_btCompoundShape_setLocalScaling_1 =
          function () {
            return (dp = n._emscripten_bind_btCompoundShape_setLocalScaling_1 =
              n.asm.yg).apply(null, arguments)
          }),
        hp = (n._emscripten_bind_btCompoundShape_getLocalScaling_0 =
          function () {
            return (hp = n._emscripten_bind_btCompoundShape_getLocalScaling_0 =
              n.asm.zg).apply(null, arguments)
          }),
        fp = (n._emscripten_bind_btCompoundShape_calculateLocalInertia_2 =
          function () {
            return (fp =
              n._emscripten_bind_btCompoundShape_calculateLocalInertia_2 =
                n.asm.Ag).apply(null, arguments)
          }),
        gp = (n._emscripten_bind_btCompoundShape___destroy___0 = function () {
          return (gp = n._emscripten_bind_btCompoundShape___destroy___0 =
            n.asm.Bg).apply(null, arguments)
        }),
        Cp =
          (n._emscripten_bind_ClosestConvexResultCallback_ClosestConvexResultCallback_2 =
            function () {
              return (Cp =
                n._emscripten_bind_ClosestConvexResultCallback_ClosestConvexResultCallback_2 =
                  n.asm.Cg).apply(null, arguments)
            }),
        jp = (n._emscripten_bind_ClosestConvexResultCallback_hasHit_0 =
          function () {
            return (jp =
              n._emscripten_bind_ClosestConvexResultCallback_hasHit_0 =
                n.asm.Dg).apply(null, arguments)
          }),
        Sp =
          (n._emscripten_bind_ClosestConvexResultCallback_get_m_convexFromWorld_0 =
            function () {
              return (Sp =
                n._emscripten_bind_ClosestConvexResultCallback_get_m_convexFromWorld_0 =
                  n.asm.Eg).apply(null, arguments)
            }),
        vp =
          (n._emscripten_bind_ClosestConvexResultCallback_set_m_convexFromWorld_1 =
            function () {
              return (vp =
                n._emscripten_bind_ClosestConvexResultCallback_set_m_convexFromWorld_1 =
                  n.asm.Fg).apply(null, arguments)
            }),
        Rp =
          (n._emscripten_bind_ClosestConvexResultCallback_get_m_convexToWorld_0 =
            function () {
              return (Rp =
                n._emscripten_bind_ClosestConvexResultCallback_get_m_convexToWorld_0 =
                  n.asm.Gg).apply(null, arguments)
            }),
        Dp =
          (n._emscripten_bind_ClosestConvexResultCallback_set_m_convexToWorld_1 =
            function () {
              return (Dp =
                n._emscripten_bind_ClosestConvexResultCallback_set_m_convexToWorld_1 =
                  n.asm.Hg).apply(null, arguments)
            }),
        Ip =
          (n._emscripten_bind_ClosestConvexResultCallback_get_m_hitNormalWorld_0 =
            function () {
              return (Ip =
                n._emscripten_bind_ClosestConvexResultCallback_get_m_hitNormalWorld_0 =
                  n.asm.Ig).apply(null, arguments)
            }),
        Pp =
          (n._emscripten_bind_ClosestConvexResultCallback_set_m_hitNormalWorld_1 =
            function () {
              return (Pp =
                n._emscripten_bind_ClosestConvexResultCallback_set_m_hitNormalWorld_1 =
                  n.asm.Jg).apply(null, arguments)
            }),
        Op =
          (n._emscripten_bind_ClosestConvexResultCallback_get_m_hitPointWorld_0 =
            function () {
              return (Op =
                n._emscripten_bind_ClosestConvexResultCallback_get_m_hitPointWorld_0 =
                  n.asm.Kg).apply(null, arguments)
            }),
        Wp =
          (n._emscripten_bind_ClosestConvexResultCallback_set_m_hitPointWorld_1 =
            function () {
              return (Wp =
                n._emscripten_bind_ClosestConvexResultCallback_set_m_hitPointWorld_1 =
                  n.asm.Lg).apply(null, arguments)
            }),
        Bp =
          (n._emscripten_bind_ClosestConvexResultCallback_get_m_collisionFilterGroup_0 =
            function () {
              return (Bp =
                n._emscripten_bind_ClosestConvexResultCallback_get_m_collisionFilterGroup_0 =
                  n.asm.Mg).apply(null, arguments)
            }),
        Tp =
          (n._emscripten_bind_ClosestConvexResultCallback_set_m_collisionFilterGroup_1 =
            function () {
              return (Tp =
                n._emscripten_bind_ClosestConvexResultCallback_set_m_collisionFilterGroup_1 =
                  n.asm.Ng).apply(null, arguments)
            }),
        Ap =
          (n._emscripten_bind_ClosestConvexResultCallback_get_m_collisionFilterMask_0 =
            function () {
              return (Ap =
                n._emscripten_bind_ClosestConvexResultCallback_get_m_collisionFilterMask_0 =
                  n.asm.Og).apply(null, arguments)
            }),
        kp =
          (n._emscripten_bind_ClosestConvexResultCallback_set_m_collisionFilterMask_1 =
            function () {
              return (kp =
                n._emscripten_bind_ClosestConvexResultCallback_set_m_collisionFilterMask_1 =
                  n.asm.Pg).apply(null, arguments)
            }),
        xp =
          (n._emscripten_bind_ClosestConvexResultCallback_get_m_closestHitFraction_0 =
            function () {
              return (xp =
                n._emscripten_bind_ClosestConvexResultCallback_get_m_closestHitFraction_0 =
                  n.asm.Qg).apply(null, arguments)
            }),
        Lp =
          (n._emscripten_bind_ClosestConvexResultCallback_set_m_closestHitFraction_1 =
            function () {
              return (Lp =
                n._emscripten_bind_ClosestConvexResultCallback_set_m_closestHitFraction_1 =
                  n.asm.Rg).apply(null, arguments)
            }),
        wp = (n._emscripten_bind_ClosestConvexResultCallback___destroy___0 =
          function () {
            return (wp =
              n._emscripten_bind_ClosestConvexResultCallback___destroy___0 =
                n.asm.Sg).apply(null, arguments)
          }),
        Fp =
          (n._emscripten_bind_AllHitsRayResultCallback_AllHitsRayResultCallback_2 =
            function () {
              return (Fp =
                n._emscripten_bind_AllHitsRayResultCallback_AllHitsRayResultCallback_2 =
                  n.asm.Tg).apply(null, arguments)
            }),
        Mp = (n._emscripten_bind_AllHitsRayResultCallback_hasHit_0 =
          function () {
            return (Mp = n._emscripten_bind_AllHitsRayResultCallback_hasHit_0 =
              n.asm.Ug).apply(null, arguments)
          }),
        Hp =
          (n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObjects_0 =
            function () {
              return (Hp =
                n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObjects_0 =
                  n.asm.Vg).apply(null, arguments)
            }),
        Gp =
          (n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObjects_1 =
            function () {
              return (Gp =
                n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObjects_1 =
                  n.asm.Wg).apply(null, arguments)
            }),
        Vp = (n._emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0 =
          function () {
            return (Vp =
              n._emscripten_bind_AllHitsRayResultCallback_get_m_rayFromWorld_0 =
                n.asm.Xg).apply(null, arguments)
          }),
        zp = (n._emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1 =
          function () {
            return (zp =
              n._emscripten_bind_AllHitsRayResultCallback_set_m_rayFromWorld_1 =
                n.asm.Yg).apply(null, arguments)
          }),
        Np = (n._emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0 =
          function () {
            return (Np =
              n._emscripten_bind_AllHitsRayResultCallback_get_m_rayToWorld_0 =
                n.asm.Zg).apply(null, arguments)
          }),
        Up = (n._emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1 =
          function () {
            return (Up =
              n._emscripten_bind_AllHitsRayResultCallback_set_m_rayToWorld_1 =
                n.asm._g).apply(null, arguments)
          }),
        Ep =
          (n._emscripten_bind_AllHitsRayResultCallback_get_m_hitNormalWorld_0 =
            function () {
              return (Ep =
                n._emscripten_bind_AllHitsRayResultCallback_get_m_hitNormalWorld_0 =
                  n.asm.$g).apply(null, arguments)
            }),
        qp =
          (n._emscripten_bind_AllHitsRayResultCallback_set_m_hitNormalWorld_1 =
            function () {
              return (qp =
                n._emscripten_bind_AllHitsRayResultCallback_set_m_hitNormalWorld_1 =
                  n.asm.ah).apply(null, arguments)
            }),
        Kp =
          (n._emscripten_bind_AllHitsRayResultCallback_get_m_hitPointWorld_0 =
            function () {
              return (Kp =
                n._emscripten_bind_AllHitsRayResultCallback_get_m_hitPointWorld_0 =
                  n.asm.bh).apply(null, arguments)
            }),
        Qp =
          (n._emscripten_bind_AllHitsRayResultCallback_set_m_hitPointWorld_1 =
            function () {
              return (Qp =
                n._emscripten_bind_AllHitsRayResultCallback_set_m_hitPointWorld_1 =
                  n.asm.ch).apply(null, arguments)
            }),
        Xp = (n._emscripten_bind_AllHitsRayResultCallback_get_m_hitFractions_0 =
          function () {
            return (Xp =
              n._emscripten_bind_AllHitsRayResultCallback_get_m_hitFractions_0 =
                n.asm.dh).apply(null, arguments)
          }),
        Zp = (n._emscripten_bind_AllHitsRayResultCallback_set_m_hitFractions_1 =
          function () {
            return (Zp =
              n._emscripten_bind_AllHitsRayResultCallback_set_m_hitFractions_1 =
                n.asm.eh).apply(null, arguments)
          }),
        Yp =
          (n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterGroup_0 =
            function () {
              return (Yp =
                n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterGroup_0 =
                  n.asm.fh).apply(null, arguments)
            }),
        Jp =
          (n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterGroup_1 =
            function () {
              return (Jp =
                n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterGroup_1 =
                  n.asm.gh).apply(null, arguments)
            }),
        $p =
          (n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterMask_0 =
            function () {
              return ($p =
                n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionFilterMask_0 =
                  n.asm.hh).apply(null, arguments)
            }),
        ts =
          (n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterMask_1 =
            function () {
              return (ts =
                n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionFilterMask_1 =
                  n.asm.ih).apply(null, arguments)
            }),
        es =
          (n._emscripten_bind_AllHitsRayResultCallback_get_m_closestHitFraction_0 =
            function () {
              return (es =
                n._emscripten_bind_AllHitsRayResultCallback_get_m_closestHitFraction_0 =
                  n.asm.jh).apply(null, arguments)
            }),
        ns =
          (n._emscripten_bind_AllHitsRayResultCallback_set_m_closestHitFraction_1 =
            function () {
              return (ns =
                n._emscripten_bind_AllHitsRayResultCallback_set_m_closestHitFraction_1 =
                  n.asm.kh).apply(null, arguments)
            }),
        os =
          (n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObject_0 =
            function () {
              return (os =
                n._emscripten_bind_AllHitsRayResultCallback_get_m_collisionObject_0 =
                  n.asm.lh).apply(null, arguments)
            }),
        _s =
          (n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObject_1 =
            function () {
              return (_s =
                n._emscripten_bind_AllHitsRayResultCallback_set_m_collisionObject_1 =
                  n.asm.mh).apply(null, arguments)
            }),
        is = (n._emscripten_bind_AllHitsRayResultCallback___destroy___0 =
          function () {
            return (is =
              n._emscripten_bind_AllHitsRayResultCallback___destroy___0 =
                n.asm.nh).apply(null, arguments)
          }),
        rs = (n._emscripten_bind_tMaterialArray_size_0 = function () {
          return (rs = n._emscripten_bind_tMaterialArray_size_0 =
            n.asm.oh).apply(null, arguments)
        }),
        ps = (n._emscripten_bind_tMaterialArray_at_1 = function () {
          return (ps = n._emscripten_bind_tMaterialArray_at_1 = n.asm.ph).apply(
            null,
            arguments,
          )
        }),
        ss = (n._emscripten_bind_tMaterialArray___destroy___0 = function () {
          return (ss = n._emscripten_bind_tMaterialArray___destroy___0 =
            n.asm.qh).apply(null, arguments)
        }),
        cs =
          (n._emscripten_bind_btDefaultVehicleRaycaster_btDefaultVehicleRaycaster_1 =
            function () {
              return (cs =
                n._emscripten_bind_btDefaultVehicleRaycaster_btDefaultVehicleRaycaster_1 =
                  n.asm.rh).apply(null, arguments)
            }),
        as = (n._emscripten_bind_btDefaultVehicleRaycaster_castRay_3 =
          function () {
            return (as =
              n._emscripten_bind_btDefaultVehicleRaycaster_castRay_3 =
                n.asm.sh).apply(null, arguments)
          }),
        ys = (n._emscripten_bind_btDefaultVehicleRaycaster___destroy___0 =
          function () {
            return (ys =
              n._emscripten_bind_btDefaultVehicleRaycaster___destroy___0 =
                n.asm.th).apply(null, arguments)
          }),
        ls = (n._emscripten_bind_btEmptyShape_btEmptyShape_0 = function () {
          return (ls = n._emscripten_bind_btEmptyShape_btEmptyShape_0 =
            n.asm.uh).apply(null, arguments)
        }),
        us = (n._emscripten_bind_btEmptyShape_setLocalScaling_1 = function () {
          return (us = n._emscripten_bind_btEmptyShape_setLocalScaling_1 =
            n.asm.vh).apply(null, arguments)
        }),
        bs = (n._emscripten_bind_btEmptyShape_getLocalScaling_0 = function () {
          return (bs = n._emscripten_bind_btEmptyShape_getLocalScaling_0 =
            n.asm.wh).apply(null, arguments)
        }),
        ms = (n._emscripten_bind_btEmptyShape_calculateLocalInertia_2 =
          function () {
            return (ms =
              n._emscripten_bind_btEmptyShape_calculateLocalInertia_2 =
                n.asm.xh).apply(null, arguments)
          }),
        ds = (n._emscripten_bind_btEmptyShape___destroy___0 = function () {
          return (ds = n._emscripten_bind_btEmptyShape___destroy___0 =
            n.asm.yh).apply(null, arguments)
        }),
        hs = (n._emscripten_bind_btConstraintSetting_btConstraintSetting_0 =
          function () {
            return (hs =
              n._emscripten_bind_btConstraintSetting_btConstraintSetting_0 =
                n.asm.zh).apply(null, arguments)
          }),
        fs = (n._emscripten_bind_btConstraintSetting_get_m_tau_0 = function () {
          return (fs = n._emscripten_bind_btConstraintSetting_get_m_tau_0 =
            n.asm.Ah).apply(null, arguments)
        }),
        gs = (n._emscripten_bind_btConstraintSetting_set_m_tau_1 = function () {
          return (gs = n._emscripten_bind_btConstraintSetting_set_m_tau_1 =
            n.asm.Bh).apply(null, arguments)
        }),
        Cs = (n._emscripten_bind_btConstraintSetting_get_m_damping_0 =
          function () {
            return (Cs =
              n._emscripten_bind_btConstraintSetting_get_m_damping_0 =
                n.asm.Ch).apply(null, arguments)
          }),
        js = (n._emscripten_bind_btConstraintSetting_set_m_damping_1 =
          function () {
            return (js =
              n._emscripten_bind_btConstraintSetting_set_m_damping_1 =
                n.asm.Dh).apply(null, arguments)
          }),
        Ss = (n._emscripten_bind_btConstraintSetting_get_m_impulseClamp_0 =
          function () {
            return (Ss =
              n._emscripten_bind_btConstraintSetting_get_m_impulseClamp_0 =
                n.asm.Eh).apply(null, arguments)
          }),
        vs = (n._emscripten_bind_btConstraintSetting_set_m_impulseClamp_1 =
          function () {
            return (vs =
              n._emscripten_bind_btConstraintSetting_set_m_impulseClamp_1 =
                n.asm.Fh).apply(null, arguments)
          }),
        Rs = (n._emscripten_bind_btConstraintSetting___destroy___0 =
          function () {
            return (Rs = n._emscripten_bind_btConstraintSetting___destroy___0 =
              n.asm.Gh).apply(null, arguments)
          }),
        Ds = (n._emscripten_bind_LocalShapeInfo_get_m_shapePart_0 =
          function () {
            return (Ds = n._emscripten_bind_LocalShapeInfo_get_m_shapePart_0 =
              n.asm.Hh).apply(null, arguments)
          }),
        Is = (n._emscripten_bind_LocalShapeInfo_set_m_shapePart_1 =
          function () {
            return (Is = n._emscripten_bind_LocalShapeInfo_set_m_shapePart_1 =
              n.asm.Ih).apply(null, arguments)
          }),
        Ps = (n._emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0 =
          function () {
            return (Ps =
              n._emscripten_bind_LocalShapeInfo_get_m_triangleIndex_0 =
                n.asm.Jh).apply(null, arguments)
          }),
        Os = (n._emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1 =
          function () {
            return (Os =
              n._emscripten_bind_LocalShapeInfo_set_m_triangleIndex_1 =
                n.asm.Kh).apply(null, arguments)
          }),
        Ws = (n._emscripten_bind_LocalShapeInfo___destroy___0 = function () {
          return (Ws = n._emscripten_bind_LocalShapeInfo___destroy___0 =
            n.asm.Lh).apply(null, arguments)
        }),
        Bs = (n._emscripten_bind_btRigidBody_btRigidBody_1 = function () {
          return (Bs = n._emscripten_bind_btRigidBody_btRigidBody_1 =
            n.asm.Mh).apply(null, arguments)
        }),
        Ts = (n._emscripten_bind_btRigidBody_getCenterOfMassTransform_0 =
          function () {
            return (Ts =
              n._emscripten_bind_btRigidBody_getCenterOfMassTransform_0 =
                n.asm.Nh).apply(null, arguments)
          }),
        As = (n._emscripten_bind_btRigidBody_setCenterOfMassTransform_1 =
          function () {
            return (As =
              n._emscripten_bind_btRigidBody_setCenterOfMassTransform_1 =
                n.asm.Oh).apply(null, arguments)
          }),
        ks = (n._emscripten_bind_btRigidBody_setSleepingThresholds_2 =
          function () {
            return (ks =
              n._emscripten_bind_btRigidBody_setSleepingThresholds_2 =
                n.asm.Ph).apply(null, arguments)
          }),
        xs = (n._emscripten_bind_btRigidBody_getLinearDamping_0 = function () {
          return (xs = n._emscripten_bind_btRigidBody_getLinearDamping_0 =
            n.asm.Qh).apply(null, arguments)
        }),
        Ls = (n._emscripten_bind_btRigidBody_getAngularDamping_0 = function () {
          return (Ls = n._emscripten_bind_btRigidBody_getAngularDamping_0 =
            n.asm.Rh).apply(null, arguments)
        }),
        ws = (n._emscripten_bind_btRigidBody_setDamping_2 = function () {
          return (ws = n._emscripten_bind_btRigidBody_setDamping_2 =
            n.asm.Sh).apply(null, arguments)
        }),
        Fs = (n._emscripten_bind_btRigidBody_setMassProps_2 = function () {
          return (Fs = n._emscripten_bind_btRigidBody_setMassProps_2 =
            n.asm.Th).apply(null, arguments)
        }),
        Ms = (n._emscripten_bind_btRigidBody_getLinearFactor_0 = function () {
          return (Ms = n._emscripten_bind_btRigidBody_getLinearFactor_0 =
            n.asm.Uh).apply(null, arguments)
        }),
        Hs = (n._emscripten_bind_btRigidBody_setLinearFactor_1 = function () {
          return (Hs = n._emscripten_bind_btRigidBody_setLinearFactor_1 =
            n.asm.Vh).apply(null, arguments)
        }),
        Gs = (n._emscripten_bind_btRigidBody_applyTorque_1 = function () {
          return (Gs = n._emscripten_bind_btRigidBody_applyTorque_1 =
            n.asm.Wh).apply(null, arguments)
        }),
        Vs = (n._emscripten_bind_btRigidBody_applyLocalTorque_1 = function () {
          return (Vs = n._emscripten_bind_btRigidBody_applyLocalTorque_1 =
            n.asm.Xh).apply(null, arguments)
        }),
        zs = (n._emscripten_bind_btRigidBody_applyForce_2 = function () {
          return (zs = n._emscripten_bind_btRigidBody_applyForce_2 =
            n.asm.Yh).apply(null, arguments)
        }),
        Ns = (n._emscripten_bind_btRigidBody_applyCentralForce_1 = function () {
          return (Ns = n._emscripten_bind_btRigidBody_applyCentralForce_1 =
            n.asm.Zh).apply(null, arguments)
        }),
        Us = (n._emscripten_bind_btRigidBody_applyCentralLocalForce_1 =
          function () {
            return (Us =
              n._emscripten_bind_btRigidBody_applyCentralLocalForce_1 =
                n.asm._h).apply(null, arguments)
          }),
        Es = (n._emscripten_bind_btRigidBody_applyTorqueImpulse_1 =
          function () {
            return (Es = n._emscripten_bind_btRigidBody_applyTorqueImpulse_1 =
              n.asm.$h).apply(null, arguments)
          }),
        qs = (n._emscripten_bind_btRigidBody_applyImpulse_2 = function () {
          return (qs = n._emscripten_bind_btRigidBody_applyImpulse_2 =
            n.asm.ai).apply(null, arguments)
        }),
        Ks = (n._emscripten_bind_btRigidBody_applyCentralImpulse_1 =
          function () {
            return (Ks = n._emscripten_bind_btRigidBody_applyCentralImpulse_1 =
              n.asm.bi).apply(null, arguments)
          }),
        Qs = (n._emscripten_bind_btRigidBody_updateInertiaTensor_0 =
          function () {
            return (Qs = n._emscripten_bind_btRigidBody_updateInertiaTensor_0 =
              n.asm.ci).apply(null, arguments)
          }),
        Xs = (n._emscripten_bind_btRigidBody_getLinearVelocity_0 = function () {
          return (Xs = n._emscripten_bind_btRigidBody_getLinearVelocity_0 =
            n.asm.di).apply(null, arguments)
        }),
        Zs = (n._emscripten_bind_btRigidBody_getAngularVelocity_0 =
          function () {
            return (Zs = n._emscripten_bind_btRigidBody_getAngularVelocity_0 =
              n.asm.ei).apply(null, arguments)
          }),
        Ys = (n._emscripten_bind_btRigidBody_setLinearVelocity_1 = function () {
          return (Ys = n._emscripten_bind_btRigidBody_setLinearVelocity_1 =
            n.asm.fi).apply(null, arguments)
        }),
        Js = (n._emscripten_bind_btRigidBody_setAngularVelocity_1 =
          function () {
            return (Js = n._emscripten_bind_btRigidBody_setAngularVelocity_1 =
              n.asm.gi).apply(null, arguments)
          }),
        $s = (n._emscripten_bind_btRigidBody_getMotionState_0 = function () {
          return ($s = n._emscripten_bind_btRigidBody_getMotionState_0 =
            n.asm.hi).apply(null, arguments)
        }),
        tc = (n._emscripten_bind_btRigidBody_setMotionState_1 = function () {
          return (tc = n._emscripten_bind_btRigidBody_setMotionState_1 =
            n.asm.ii).apply(null, arguments)
        }),
        ec = (n._emscripten_bind_btRigidBody_getAngularFactor_0 = function () {
          return (ec = n._emscripten_bind_btRigidBody_getAngularFactor_0 =
            n.asm.ji).apply(null, arguments)
        }),
        nc = (n._emscripten_bind_btRigidBody_setAngularFactor_1 = function () {
          return (nc = n._emscripten_bind_btRigidBody_setAngularFactor_1 =
            n.asm.ki).apply(null, arguments)
        }),
        oc = (n._emscripten_bind_btRigidBody_upcast_1 = function () {
          return (oc = n._emscripten_bind_btRigidBody_upcast_1 =
            n.asm.li).apply(null, arguments)
        }),
        _c = (n._emscripten_bind_btRigidBody_getAabb_2 = function () {
          return (_c = n._emscripten_bind_btRigidBody_getAabb_2 =
            n.asm.mi).apply(null, arguments)
        }),
        ic = (n._emscripten_bind_btRigidBody_applyGravity_0 = function () {
          return (ic = n._emscripten_bind_btRigidBody_applyGravity_0 =
            n.asm.ni).apply(null, arguments)
        }),
        rc = (n._emscripten_bind_btRigidBody_getGravity_0 = function () {
          return (rc = n._emscripten_bind_btRigidBody_getGravity_0 =
            n.asm.oi).apply(null, arguments)
        }),
        pc = (n._emscripten_bind_btRigidBody_setGravity_1 = function () {
          return (pc = n._emscripten_bind_btRigidBody_setGravity_1 =
            n.asm.pi).apply(null, arguments)
        }),
        sc = (n._emscripten_bind_btRigidBody_getBroadphaseProxy_0 =
          function () {
            return (sc = n._emscripten_bind_btRigidBody_getBroadphaseProxy_0 =
              n.asm.qi).apply(null, arguments)
          }),
        cc = (n._emscripten_bind_btRigidBody_clearForces_0 = function () {
          return (cc = n._emscripten_bind_btRigidBody_clearForces_0 =
            n.asm.ri).apply(null, arguments)
        }),
        ac = (n._emscripten_bind_btRigidBody_setAnisotropicFriction_2 =
          function () {
            return (ac =
              n._emscripten_bind_btRigidBody_setAnisotropicFriction_2 =
                n.asm.si).apply(null, arguments)
          }),
        yc = (n._emscripten_bind_btRigidBody_getCollisionShape_0 = function () {
          return (yc = n._emscripten_bind_btRigidBody_getCollisionShape_0 =
            n.asm.ti).apply(null, arguments)
        }),
        lc = (n._emscripten_bind_btRigidBody_setContactProcessingThreshold_1 =
          function () {
            return (lc =
              n._emscripten_bind_btRigidBody_setContactProcessingThreshold_1 =
                n.asm.ui).apply(null, arguments)
          }),
        uc = (n._emscripten_bind_btRigidBody_setActivationState_1 =
          function () {
            return (uc = n._emscripten_bind_btRigidBody_setActivationState_1 =
              n.asm.vi).apply(null, arguments)
          }),
        bc = (n._emscripten_bind_btRigidBody_forceActivationState_1 =
          function () {
            return (bc = n._emscripten_bind_btRigidBody_forceActivationState_1 =
              n.asm.wi).apply(null, arguments)
          }),
        mc = (n._emscripten_bind_btRigidBody_activate_0 = function () {
          return (mc = n._emscripten_bind_btRigidBody_activate_0 =
            n.asm.xi).apply(null, arguments)
        }),
        dc = (n._emscripten_bind_btRigidBody_activate_1 = function () {
          return (dc = n._emscripten_bind_btRigidBody_activate_1 =
            n.asm.yi).apply(null, arguments)
        }),
        hc = (n._emscripten_bind_btRigidBody_isActive_0 = function () {
          return (hc = n._emscripten_bind_btRigidBody_isActive_0 =
            n.asm.zi).apply(null, arguments)
        }),
        fc = (n._emscripten_bind_btRigidBody_isKinematicObject_0 = function () {
          return (fc = n._emscripten_bind_btRigidBody_isKinematicObject_0 =
            n.asm.Ai).apply(null, arguments)
        }),
        gc = (n._emscripten_bind_btRigidBody_isStaticObject_0 = function () {
          return (gc = n._emscripten_bind_btRigidBody_isStaticObject_0 =
            n.asm.Bi).apply(null, arguments)
        }),
        Cc = (n._emscripten_bind_btRigidBody_isStaticOrKinematicObject_0 =
          function () {
            return (Cc =
              n._emscripten_bind_btRigidBody_isStaticOrKinematicObject_0 =
                n.asm.Ci).apply(null, arguments)
          }),
        jc = (n._emscripten_bind_btRigidBody_getRestitution_0 = function () {
          return (jc = n._emscripten_bind_btRigidBody_getRestitution_0 =
            n.asm.Di).apply(null, arguments)
        }),
        Sc = (n._emscripten_bind_btRigidBody_getFriction_0 = function () {
          return (Sc = n._emscripten_bind_btRigidBody_getFriction_0 =
            n.asm.Ei).apply(null, arguments)
        }),
        vc = (n._emscripten_bind_btRigidBody_getRollingFriction_0 =
          function () {
            return (vc = n._emscripten_bind_btRigidBody_getRollingFriction_0 =
              n.asm.Fi).apply(null, arguments)
          }),
        Rc = (n._emscripten_bind_btRigidBody_setRestitution_1 = function () {
          return (Rc = n._emscripten_bind_btRigidBody_setRestitution_1 =
            n.asm.Gi).apply(null, arguments)
        }),
        Dc = (n._emscripten_bind_btRigidBody_setFriction_1 = function () {
          return (Dc = n._emscripten_bind_btRigidBody_setFriction_1 =
            n.asm.Hi).apply(null, arguments)
        }),
        Ic = (n._emscripten_bind_btRigidBody_setRollingFriction_1 =
          function () {
            return (Ic = n._emscripten_bind_btRigidBody_setRollingFriction_1 =
              n.asm.Ii).apply(null, arguments)
          }),
        Pc = (n._emscripten_bind_btRigidBody_getWorldTransform_0 = function () {
          return (Pc = n._emscripten_bind_btRigidBody_getWorldTransform_0 =
            n.asm.Ji).apply(null, arguments)
        }),
        Oc = (n._emscripten_bind_btRigidBody_getCollisionFlags_0 = function () {
          return (Oc = n._emscripten_bind_btRigidBody_getCollisionFlags_0 =
            n.asm.Ki).apply(null, arguments)
        }),
        Wc = (n._emscripten_bind_btRigidBody_setCollisionFlags_1 = function () {
          return (Wc = n._emscripten_bind_btRigidBody_setCollisionFlags_1 =
            n.asm.Li).apply(null, arguments)
        }),
        Bc = (n._emscripten_bind_btRigidBody_setWorldTransform_1 = function () {
          return (Bc = n._emscripten_bind_btRigidBody_setWorldTransform_1 =
            n.asm.Mi).apply(null, arguments)
        }),
        Tc = (n._emscripten_bind_btRigidBody_setCollisionShape_1 = function () {
          return (Tc = n._emscripten_bind_btRigidBody_setCollisionShape_1 =
            n.asm.Ni).apply(null, arguments)
        }),
        Ac = (n._emscripten_bind_btRigidBody_setCcdMotionThreshold_1 =
          function () {
            return (Ac =
              n._emscripten_bind_btRigidBody_setCcdMotionThreshold_1 =
                n.asm.Oi).apply(null, arguments)
          }),
        kc = (n._emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1 =
          function () {
            return (kc =
              n._emscripten_bind_btRigidBody_setCcdSweptSphereRadius_1 =
                n.asm.Pi).apply(null, arguments)
          }),
        xc = (n._emscripten_bind_btRigidBody_getUserIndex_0 = function () {
          return (xc = n._emscripten_bind_btRigidBody_getUserIndex_0 =
            n.asm.Qi).apply(null, arguments)
        }),
        Lc = (n._emscripten_bind_btRigidBody_setUserIndex_1 = function () {
          return (Lc = n._emscripten_bind_btRigidBody_setUserIndex_1 =
            n.asm.Ri).apply(null, arguments)
        }),
        wc = (n._emscripten_bind_btRigidBody_getUserPointer_0 = function () {
          return (wc = n._emscripten_bind_btRigidBody_getUserPointer_0 =
            n.asm.Si).apply(null, arguments)
        }),
        Fc = (n._emscripten_bind_btRigidBody_setUserPointer_1 = function () {
          return (Fc = n._emscripten_bind_btRigidBody_setUserPointer_1 =
            n.asm.Ti).apply(null, arguments)
        }),
        Mc = (n._emscripten_bind_btRigidBody_getBroadphaseHandle_0 =
          function () {
            return (Mc = n._emscripten_bind_btRigidBody_getBroadphaseHandle_0 =
              n.asm.Ui).apply(null, arguments)
          }),
        Hc = (n._emscripten_bind_btRigidBody___destroy___0 = function () {
          return (Hc = n._emscripten_bind_btRigidBody___destroy___0 =
            n.asm.Vi).apply(null, arguments)
        }),
        Gc = (n._emscripten_bind_btIndexedMeshArray_size_0 = function () {
          return (Gc = n._emscripten_bind_btIndexedMeshArray_size_0 =
            n.asm.Wi).apply(null, arguments)
        }),
        Vc = (n._emscripten_bind_btIndexedMeshArray_at_1 = function () {
          return (Vc = n._emscripten_bind_btIndexedMeshArray_at_1 =
            n.asm.Xi).apply(null, arguments)
        }),
        zc = (n._emscripten_bind_btIndexedMeshArray___destroy___0 =
          function () {
            return (zc = n._emscripten_bind_btIndexedMeshArray___destroy___0 =
              n.asm.Yi).apply(null, arguments)
          }),
        Nc = (n._emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0 =
          function () {
            return (Nc =
              n._emscripten_bind_btDbvtBroadphase_btDbvtBroadphase_0 =
                n.asm.Zi).apply(null, arguments)
          }),
        Uc = (n._emscripten_bind_btDbvtBroadphase___destroy___0 = function () {
          return (Uc = n._emscripten_bind_btDbvtBroadphase___destroy___0 =
            n.asm._i).apply(null, arguments)
        }),
        Ec =
          (n._emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9 =
            function () {
              return (Ec =
                n._emscripten_bind_btHeightfieldTerrainShape_btHeightfieldTerrainShape_9 =
                  n.asm.$i).apply(null, arguments)
            }),
        qc = (n._emscripten_bind_btHeightfieldTerrainShape_setMargin_1 =
          function () {
            return (qc =
              n._emscripten_bind_btHeightfieldTerrainShape_setMargin_1 =
                n.asm.aj).apply(null, arguments)
          }),
        Kc = (n._emscripten_bind_btHeightfieldTerrainShape_getMargin_0 =
          function () {
            return (Kc =
              n._emscripten_bind_btHeightfieldTerrainShape_getMargin_0 =
                n.asm.bj).apply(null, arguments)
          }),
        Qc = (n._emscripten_bind_btHeightfieldTerrainShape_setLocalScaling_1 =
          function () {
            return (Qc =
              n._emscripten_bind_btHeightfieldTerrainShape_setLocalScaling_1 =
                n.asm.cj).apply(null, arguments)
          }),
        Xc = (n._emscripten_bind_btHeightfieldTerrainShape_getLocalScaling_0 =
          function () {
            return (Xc =
              n._emscripten_bind_btHeightfieldTerrainShape_getLocalScaling_0 =
                n.asm.dj).apply(null, arguments)
          }),
        Zc =
          (n._emscripten_bind_btHeightfieldTerrainShape_calculateLocalInertia_2 =
            function () {
              return (Zc =
                n._emscripten_bind_btHeightfieldTerrainShape_calculateLocalInertia_2 =
                  n.asm.ej).apply(null, arguments)
            }),
        Yc = (n._emscripten_bind_btHeightfieldTerrainShape___destroy___0 =
          function () {
            return (Yc =
              n._emscripten_bind_btHeightfieldTerrainShape___destroy___0 =
                n.asm.fj).apply(null, arguments)
          }),
        Jc =
          (n._emscripten_bind_btDefaultSoftBodySolver_btDefaultSoftBodySolver_0 =
            function () {
              return (Jc =
                n._emscripten_bind_btDefaultSoftBodySolver_btDefaultSoftBodySolver_0 =
                  n.asm.gj).apply(null, arguments)
            }),
        $c = (n._emscripten_bind_btDefaultSoftBodySolver___destroy___0 =
          function () {
            return ($c =
              n._emscripten_bind_btDefaultSoftBodySolver___destroy___0 =
                n.asm.hj).apply(null, arguments)
          }),
        ta = (n._emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1 =
          function () {
            return (ta =
              n._emscripten_bind_btCollisionDispatcher_btCollisionDispatcher_1 =
                n.asm.ij).apply(null, arguments)
          }),
        ea = (n._emscripten_bind_btCollisionDispatcher_getNumManifolds_0 =
          function () {
            return (ea =
              n._emscripten_bind_btCollisionDispatcher_getNumManifolds_0 =
                n.asm.jj).apply(null, arguments)
          }),
        na =
          (n._emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1 =
            function () {
              return (na =
                n._emscripten_bind_btCollisionDispatcher_getManifoldByIndexInternal_1 =
                  n.asm.kj).apply(null, arguments)
            }),
        oa = (n._emscripten_bind_btCollisionDispatcher___destroy___0 =
          function () {
            return (oa =
              n._emscripten_bind_btCollisionDispatcher___destroy___0 =
                n.asm.lj).apply(null, arguments)
          }),
        _a = (n._emscripten_bind_btAxisSweep3_btAxisSweep3_2 = function () {
          return (_a = n._emscripten_bind_btAxisSweep3_btAxisSweep3_2 =
            n.asm.mj).apply(null, arguments)
        }),
        ia = (n._emscripten_bind_btAxisSweep3_btAxisSweep3_3 = function () {
          return (ia = n._emscripten_bind_btAxisSweep3_btAxisSweep3_3 =
            n.asm.nj).apply(null, arguments)
        }),
        ra = (n._emscripten_bind_btAxisSweep3_btAxisSweep3_4 = function () {
          return (ra = n._emscripten_bind_btAxisSweep3_btAxisSweep3_4 =
            n.asm.oj).apply(null, arguments)
        }),
        pa = (n._emscripten_bind_btAxisSweep3_btAxisSweep3_5 = function () {
          return (pa = n._emscripten_bind_btAxisSweep3_btAxisSweep3_5 =
            n.asm.pj).apply(null, arguments)
        }),
        sa = (n._emscripten_bind_btAxisSweep3___destroy___0 = function () {
          return (sa = n._emscripten_bind_btAxisSweep3___destroy___0 =
            n.asm.qj).apply(null, arguments)
        }),
        ca = (n._emscripten_bind_VoidPtr___destroy___0 = function () {
          return (ca = n._emscripten_bind_VoidPtr___destroy___0 =
            n.asm.rj).apply(null, arguments)
        }),
        aa = (n._emscripten_bind_btSoftBodyWorldInfo_btSoftBodyWorldInfo_0 =
          function () {
            return (aa =
              n._emscripten_bind_btSoftBodyWorldInfo_btSoftBodyWorldInfo_0 =
                n.asm.sj).apply(null, arguments)
          }),
        ya = (n._emscripten_bind_btSoftBodyWorldInfo_get_air_density_0 =
          function () {
            return (ya =
              n._emscripten_bind_btSoftBodyWorldInfo_get_air_density_0 =
                n.asm.tj).apply(null, arguments)
          }),
        la = (n._emscripten_bind_btSoftBodyWorldInfo_set_air_density_1 =
          function () {
            return (la =
              n._emscripten_bind_btSoftBodyWorldInfo_set_air_density_1 =
                n.asm.uj).apply(null, arguments)
          }),
        ua = (n._emscripten_bind_btSoftBodyWorldInfo_get_water_density_0 =
          function () {
            return (ua =
              n._emscripten_bind_btSoftBodyWorldInfo_get_water_density_0 =
                n.asm.vj).apply(null, arguments)
          }),
        ba = (n._emscripten_bind_btSoftBodyWorldInfo_set_water_density_1 =
          function () {
            return (ba =
              n._emscripten_bind_btSoftBodyWorldInfo_set_water_density_1 =
                n.asm.wj).apply(null, arguments)
          }),
        ma = (n._emscripten_bind_btSoftBodyWorldInfo_get_water_offset_0 =
          function () {
            return (ma =
              n._emscripten_bind_btSoftBodyWorldInfo_get_water_offset_0 =
                n.asm.xj).apply(null, arguments)
          }),
        da = (n._emscripten_bind_btSoftBodyWorldInfo_set_water_offset_1 =
          function () {
            return (da =
              n._emscripten_bind_btSoftBodyWorldInfo_set_water_offset_1 =
                n.asm.yj).apply(null, arguments)
          }),
        ha = (n._emscripten_bind_btSoftBodyWorldInfo_get_m_maxDisplacement_0 =
          function () {
            return (ha =
              n._emscripten_bind_btSoftBodyWorldInfo_get_m_maxDisplacement_0 =
                n.asm.zj).apply(null, arguments)
          }),
        fa = (n._emscripten_bind_btSoftBodyWorldInfo_set_m_maxDisplacement_1 =
          function () {
            return (fa =
              n._emscripten_bind_btSoftBodyWorldInfo_set_m_maxDisplacement_1 =
                n.asm.Aj).apply(null, arguments)
          }),
        ga = (n._emscripten_bind_btSoftBodyWorldInfo_get_water_normal_0 =
          function () {
            return (ga =
              n._emscripten_bind_btSoftBodyWorldInfo_get_water_normal_0 =
                n.asm.Bj).apply(null, arguments)
          }),
        Ca = (n._emscripten_bind_btSoftBodyWorldInfo_set_water_normal_1 =
          function () {
            return (Ca =
              n._emscripten_bind_btSoftBodyWorldInfo_set_water_normal_1 =
                n.asm.Cj).apply(null, arguments)
          }),
        ja = (n._emscripten_bind_btSoftBodyWorldInfo_get_m_broadphase_0 =
          function () {
            return (ja =
              n._emscripten_bind_btSoftBodyWorldInfo_get_m_broadphase_0 =
                n.asm.Dj).apply(null, arguments)
          }),
        Sa = (n._emscripten_bind_btSoftBodyWorldInfo_set_m_broadphase_1 =
          function () {
            return (Sa =
              n._emscripten_bind_btSoftBodyWorldInfo_set_m_broadphase_1 =
                n.asm.Ej).apply(null, arguments)
          }),
        va = (n._emscripten_bind_btSoftBodyWorldInfo_get_m_dispatcher_0 =
          function () {
            return (va =
              n._emscripten_bind_btSoftBodyWorldInfo_get_m_dispatcher_0 =
                n.asm.Fj).apply(null, arguments)
          }),
        Ra = (n._emscripten_bind_btSoftBodyWorldInfo_set_m_dispatcher_1 =
          function () {
            return (Ra =
              n._emscripten_bind_btSoftBodyWorldInfo_set_m_dispatcher_1 =
                n.asm.Gj).apply(null, arguments)
          }),
        Da = (n._emscripten_bind_btSoftBodyWorldInfo_get_m_gravity_0 =
          function () {
            return (Da =
              n._emscripten_bind_btSoftBodyWorldInfo_get_m_gravity_0 =
                n.asm.Hj).apply(null, arguments)
          }),
        Ia = (n._emscripten_bind_btSoftBodyWorldInfo_set_m_gravity_1 =
          function () {
            return (Ia =
              n._emscripten_bind_btSoftBodyWorldInfo_set_m_gravity_1 =
                n.asm.Ij).apply(null, arguments)
          }),
        Pa = (n._emscripten_bind_btSoftBodyWorldInfo___destroy___0 =
          function () {
            return (Pa = n._emscripten_bind_btSoftBodyWorldInfo___destroy___0 =
              n.asm.Jj).apply(null, arguments)
          }),
        Oa = (n._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_2 =
          function () {
            return (Oa =
              n._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_2 =
                n.asm.Kj).apply(null, arguments)
          }),
        Wa = (n._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_4 =
          function () {
            return (Wa =
              n._emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_4 =
                n.asm.Lj).apply(null, arguments)
          }),
        Ba = (n._emscripten_bind_btConeTwistConstraint_setLimit_2 =
          function () {
            return (Ba = n._emscripten_bind_btConeTwistConstraint_setLimit_2 =
              n.asm.Mj).apply(null, arguments)
          }),
        Ta = (n._emscripten_bind_btConeTwistConstraint_setAngularOnly_1 =
          function () {
            return (Ta =
              n._emscripten_bind_btConeTwistConstraint_setAngularOnly_1 =
                n.asm.Nj).apply(null, arguments)
          }),
        Aa = (n._emscripten_bind_btConeTwistConstraint_setDamping_1 =
          function () {
            return (Aa = n._emscripten_bind_btConeTwistConstraint_setDamping_1 =
              n.asm.Oj).apply(null, arguments)
          }),
        ka = (n._emscripten_bind_btConeTwistConstraint_enableMotor_1 =
          function () {
            return (ka =
              n._emscripten_bind_btConeTwistConstraint_enableMotor_1 =
                n.asm.Pj).apply(null, arguments)
          }),
        xa = (n._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulse_1 =
          function () {
            return (xa =
              n._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulse_1 =
                n.asm.Qj).apply(null, arguments)
          }),
        La =
          (n._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulseNormalized_1 =
            function () {
              return (La =
                n._emscripten_bind_btConeTwistConstraint_setMaxMotorImpulseNormalized_1 =
                  n.asm.Rj).apply(null, arguments)
            }),
        wa = (n._emscripten_bind_btConeTwistConstraint_setMotorTarget_1 =
          function () {
            return (wa =
              n._emscripten_bind_btConeTwistConstraint_setMotorTarget_1 =
                n.asm.Sj).apply(null, arguments)
          }),
        Fa =
          (n._emscripten_bind_btConeTwistConstraint_setMotorTargetInConstraintSpace_1 =
            function () {
              return (Fa =
                n._emscripten_bind_btConeTwistConstraint_setMotorTargetInConstraintSpace_1 =
                  n.asm.Tj).apply(null, arguments)
            }),
        Ma = (n._emscripten_bind_btConeTwistConstraint_enableFeedback_1 =
          function () {
            return (Ma =
              n._emscripten_bind_btConeTwistConstraint_enableFeedback_1 =
                n.asm.Uj).apply(null, arguments)
          }),
        Ha =
          (n._emscripten_bind_btConeTwistConstraint_getBreakingImpulseThreshold_0 =
            function () {
              return (Ha =
                n._emscripten_bind_btConeTwistConstraint_getBreakingImpulseThreshold_0 =
                  n.asm.Vj).apply(null, arguments)
            }),
        Ga =
          (n._emscripten_bind_btConeTwistConstraint_setBreakingImpulseThreshold_1 =
            function () {
              return (Ga =
                n._emscripten_bind_btConeTwistConstraint_setBreakingImpulseThreshold_1 =
                  n.asm.Wj).apply(null, arguments)
            }),
        Va = (n._emscripten_bind_btConeTwistConstraint_getParam_2 =
          function () {
            return (Va = n._emscripten_bind_btConeTwistConstraint_getParam_2 =
              n.asm.Xj).apply(null, arguments)
          }),
        za = (n._emscripten_bind_btConeTwistConstraint_setParam_3 =
          function () {
            return (za = n._emscripten_bind_btConeTwistConstraint_setParam_3 =
              n.asm.Yj).apply(null, arguments)
          }),
        Na = (n._emscripten_bind_btConeTwistConstraint___destroy___0 =
          function () {
            return (Na =
              n._emscripten_bind_btConeTwistConstraint___destroy___0 =
                n.asm.Zj).apply(null, arguments)
          }),
        Ua = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_2 =
          function () {
            return (Ua =
              n._emscripten_bind_btHingeConstraint_btHingeConstraint_2 =
                n.asm._j).apply(null, arguments)
          }),
        Ea = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_3 =
          function () {
            return (Ea =
              n._emscripten_bind_btHingeConstraint_btHingeConstraint_3 =
                n.asm.$j).apply(null, arguments)
          }),
        qa = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_4 =
          function () {
            return (qa =
              n._emscripten_bind_btHingeConstraint_btHingeConstraint_4 =
                n.asm.ak).apply(null, arguments)
          }),
        Ka = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_5 =
          function () {
            return (Ka =
              n._emscripten_bind_btHingeConstraint_btHingeConstraint_5 =
                n.asm.bk).apply(null, arguments)
          }),
        Qa = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_6 =
          function () {
            return (Qa =
              n._emscripten_bind_btHingeConstraint_btHingeConstraint_6 =
                n.asm.ck).apply(null, arguments)
          }),
        Xa = (n._emscripten_bind_btHingeConstraint_btHingeConstraint_7 =
          function () {
            return (Xa =
              n._emscripten_bind_btHingeConstraint_btHingeConstraint_7 =
                n.asm.dk).apply(null, arguments)
          }),
        Za = (n._emscripten_bind_btHingeConstraint_setLimit_4 = function () {
          return (Za = n._emscripten_bind_btHingeConstraint_setLimit_4 =
            n.asm.ek).apply(null, arguments)
        }),
        Ya = (n._emscripten_bind_btHingeConstraint_setLimit_5 = function () {
          return (Ya = n._emscripten_bind_btHingeConstraint_setLimit_5 =
            n.asm.fk).apply(null, arguments)
        }),
        Ja = (n._emscripten_bind_btHingeConstraint_enableAngularMotor_3 =
          function () {
            return (Ja =
              n._emscripten_bind_btHingeConstraint_enableAngularMotor_3 =
                n.asm.gk).apply(null, arguments)
          }),
        $a = (n._emscripten_bind_btHingeConstraint_setAngularOnly_1 =
          function () {
            return ($a = n._emscripten_bind_btHingeConstraint_setAngularOnly_1 =
              n.asm.hk).apply(null, arguments)
          }),
        ty = (n._emscripten_bind_btHingeConstraint_enableMotor_1 = function () {
          return (ty = n._emscripten_bind_btHingeConstraint_enableMotor_1 =
            n.asm.ik).apply(null, arguments)
        }),
        ey = (n._emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1 =
          function () {
            return (ey =
              n._emscripten_bind_btHingeConstraint_setMaxMotorImpulse_1 =
                n.asm.jk).apply(null, arguments)
          }),
        ny = (n._emscripten_bind_btHingeConstraint_setMotorTarget_2 =
          function () {
            return (ny = n._emscripten_bind_btHingeConstraint_setMotorTarget_2 =
              n.asm.kk).apply(null, arguments)
          }),
        oy = (n._emscripten_bind_btHingeConstraint_enableFeedback_1 =
          function () {
            return (oy = n._emscripten_bind_btHingeConstraint_enableFeedback_1 =
              n.asm.lk).apply(null, arguments)
          }),
        _y =
          (n._emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0 =
            function () {
              return (_y =
                n._emscripten_bind_btHingeConstraint_getBreakingImpulseThreshold_0 =
                  n.asm.mk).apply(null, arguments)
            }),
        iy =
          (n._emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1 =
            function () {
              return (iy =
                n._emscripten_bind_btHingeConstraint_setBreakingImpulseThreshold_1 =
                  n.asm.nk).apply(null, arguments)
            }),
        ry = (n._emscripten_bind_btHingeConstraint_getParam_2 = function () {
          return (ry = n._emscripten_bind_btHingeConstraint_getParam_2 =
            n.asm.ok).apply(null, arguments)
        }),
        py = (n._emscripten_bind_btHingeConstraint_setParam_3 = function () {
          return (py = n._emscripten_bind_btHingeConstraint_setParam_3 =
            n.asm.pk).apply(null, arguments)
        }),
        sy = (n._emscripten_bind_btHingeConstraint___destroy___0 = function () {
          return (sy = n._emscripten_bind_btHingeConstraint___destroy___0 =
            n.asm.qk).apply(null, arguments)
        }),
        cy = (n._emscripten_bind_btConeShapeZ_btConeShapeZ_2 = function () {
          return (cy = n._emscripten_bind_btConeShapeZ_btConeShapeZ_2 =
            n.asm.rk).apply(null, arguments)
        }),
        ay = (n._emscripten_bind_btConeShapeZ_setLocalScaling_1 = function () {
          return (ay = n._emscripten_bind_btConeShapeZ_setLocalScaling_1 =
            n.asm.sk).apply(null, arguments)
        }),
        yy = (n._emscripten_bind_btConeShapeZ_getLocalScaling_0 = function () {
          return (yy = n._emscripten_bind_btConeShapeZ_getLocalScaling_0 =
            n.asm.tk).apply(null, arguments)
        }),
        ly = (n._emscripten_bind_btConeShapeZ_calculateLocalInertia_2 =
          function () {
            return (ly =
              n._emscripten_bind_btConeShapeZ_calculateLocalInertia_2 =
                n.asm.uk).apply(null, arguments)
          }),
        uy = (n._emscripten_bind_btConeShapeZ___destroy___0 = function () {
          return (uy = n._emscripten_bind_btConeShapeZ___destroy___0 =
            n.asm.vk).apply(null, arguments)
        }),
        by = (n._emscripten_bind_btConeShapeX_btConeShapeX_2 = function () {
          return (by = n._emscripten_bind_btConeShapeX_btConeShapeX_2 =
            n.asm.wk).apply(null, arguments)
        }),
        my = (n._emscripten_bind_btConeShapeX_setLocalScaling_1 = function () {
          return (my = n._emscripten_bind_btConeShapeX_setLocalScaling_1 =
            n.asm.xk).apply(null, arguments)
        }),
        dy = (n._emscripten_bind_btConeShapeX_getLocalScaling_0 = function () {
          return (dy = n._emscripten_bind_btConeShapeX_getLocalScaling_0 =
            n.asm.yk).apply(null, arguments)
        }),
        hy = (n._emscripten_bind_btConeShapeX_calculateLocalInertia_2 =
          function () {
            return (hy =
              n._emscripten_bind_btConeShapeX_calculateLocalInertia_2 =
                n.asm.zk).apply(null, arguments)
          }),
        fy = (n._emscripten_bind_btConeShapeX___destroy___0 = function () {
          return (fy = n._emscripten_bind_btConeShapeX___destroy___0 =
            n.asm.Ak).apply(null, arguments)
        }),
        gy = (n._emscripten_bind_btTriangleMesh_btTriangleMesh_0 = function () {
          return (gy = n._emscripten_bind_btTriangleMesh_btTriangleMesh_0 =
            n.asm.Bk).apply(null, arguments)
        }),
        Cy = (n._emscripten_bind_btTriangleMesh_btTriangleMesh_1 = function () {
          return (Cy = n._emscripten_bind_btTriangleMesh_btTriangleMesh_1 =
            n.asm.Ck).apply(null, arguments)
        }),
        jy = (n._emscripten_bind_btTriangleMesh_btTriangleMesh_2 = function () {
          return (jy = n._emscripten_bind_btTriangleMesh_btTriangleMesh_2 =
            n.asm.Dk).apply(null, arguments)
        }),
        Sy = (n._emscripten_bind_btTriangleMesh_addTriangle_3 = function () {
          return (Sy = n._emscripten_bind_btTriangleMesh_addTriangle_3 =
            n.asm.Ek).apply(null, arguments)
        }),
        vy = (n._emscripten_bind_btTriangleMesh_addTriangle_4 = function () {
          return (vy = n._emscripten_bind_btTriangleMesh_addTriangle_4 =
            n.asm.Fk).apply(null, arguments)
        }),
        Ry = (n._emscripten_bind_btTriangleMesh_findOrAddVertex_2 =
          function () {
            return (Ry = n._emscripten_bind_btTriangleMesh_findOrAddVertex_2 =
              n.asm.Gk).apply(null, arguments)
          }),
        Dy = (n._emscripten_bind_btTriangleMesh_addIndex_1 = function () {
          return (Dy = n._emscripten_bind_btTriangleMesh_addIndex_1 =
            n.asm.Hk).apply(null, arguments)
        }),
        Iy = (n._emscripten_bind_btTriangleMesh_getIndexedMeshArray_0 =
          function () {
            return (Iy =
              n._emscripten_bind_btTriangleMesh_getIndexedMeshArray_0 =
                n.asm.Ik).apply(null, arguments)
          }),
        Py = (n._emscripten_bind_btTriangleMesh_setScaling_1 = function () {
          return (Py = n._emscripten_bind_btTriangleMesh_setScaling_1 =
            n.asm.Jk).apply(null, arguments)
        }),
        Oy = (n._emscripten_bind_btTriangleMesh___destroy___0 = function () {
          return (Oy = n._emscripten_bind_btTriangleMesh___destroy___0 =
            n.asm.Kk).apply(null, arguments)
        }),
        Wy = (n._emscripten_bind_btConvexHullShape_btConvexHullShape_0 =
          function () {
            return (Wy =
              n._emscripten_bind_btConvexHullShape_btConvexHullShape_0 =
                n.asm.Lk).apply(null, arguments)
          }),
        By = (n._emscripten_bind_btConvexHullShape_btConvexHullShape_1 =
          function () {
            return (By =
              n._emscripten_bind_btConvexHullShape_btConvexHullShape_1 =
                n.asm.Mk).apply(null, arguments)
          }),
        Ty = (n._emscripten_bind_btConvexHullShape_btConvexHullShape_2 =
          function () {
            return (Ty =
              n._emscripten_bind_btConvexHullShape_btConvexHullShape_2 =
                n.asm.Nk).apply(null, arguments)
          }),
        Ay = (n._emscripten_bind_btConvexHullShape_addPoint_1 = function () {
          return (Ay = n._emscripten_bind_btConvexHullShape_addPoint_1 =
            n.asm.Ok).apply(null, arguments)
        }),
        ky = (n._emscripten_bind_btConvexHullShape_addPoint_2 = function () {
          return (ky = n._emscripten_bind_btConvexHullShape_addPoint_2 =
            n.asm.Pk).apply(null, arguments)
        }),
        xy = (n._emscripten_bind_btConvexHullShape_setMargin_1 = function () {
          return (xy = n._emscripten_bind_btConvexHullShape_setMargin_1 =
            n.asm.Qk).apply(null, arguments)
        }),
        Ly = (n._emscripten_bind_btConvexHullShape_getMargin_0 = function () {
          return (Ly = n._emscripten_bind_btConvexHullShape_getMargin_0 =
            n.asm.Rk).apply(null, arguments)
        }),
        wy = (n._emscripten_bind_btConvexHullShape_getNumVertices_0 =
          function () {
            return (wy = n._emscripten_bind_btConvexHullShape_getNumVertices_0 =
              n.asm.Sk).apply(null, arguments)
          }),
        Fy =
          (n._emscripten_bind_btConvexHullShape_initializePolyhedralFeatures_1 =
            function () {
              return (Fy =
                n._emscripten_bind_btConvexHullShape_initializePolyhedralFeatures_1 =
                  n.asm.Tk).apply(null, arguments)
            }),
        My = (n._emscripten_bind_btConvexHullShape_recalcLocalAabb_0 =
          function () {
            return (My =
              n._emscripten_bind_btConvexHullShape_recalcLocalAabb_0 =
                n.asm.Uk).apply(null, arguments)
          }),
        Hy = (n._emscripten_bind_btConvexHullShape_getConvexPolyhedron_0 =
          function () {
            return (Hy =
              n._emscripten_bind_btConvexHullShape_getConvexPolyhedron_0 =
                n.asm.Vk).apply(null, arguments)
          }),
        Gy = (n._emscripten_bind_btConvexHullShape_setLocalScaling_1 =
          function () {
            return (Gy =
              n._emscripten_bind_btConvexHullShape_setLocalScaling_1 =
                n.asm.Wk).apply(null, arguments)
          }),
        Vy = (n._emscripten_bind_btConvexHullShape_getLocalScaling_0 =
          function () {
            return (Vy =
              n._emscripten_bind_btConvexHullShape_getLocalScaling_0 =
                n.asm.Xk).apply(null, arguments)
          }),
        zy = (n._emscripten_bind_btConvexHullShape_calculateLocalInertia_2 =
          function () {
            return (zy =
              n._emscripten_bind_btConvexHullShape_calculateLocalInertia_2 =
                n.asm.Yk).apply(null, arguments)
          }),
        Ny = (n._emscripten_bind_btConvexHullShape___destroy___0 = function () {
          return (Ny = n._emscripten_bind_btConvexHullShape___destroy___0 =
            n.asm.Zk).apply(null, arguments)
        }),
        Uy = (n._emscripten_bind_btVehicleTuning_btVehicleTuning_0 =
          function () {
            return (Uy = n._emscripten_bind_btVehicleTuning_btVehicleTuning_0 =
              n.asm._k).apply(null, arguments)
          }),
        Ey = (n._emscripten_bind_btVehicleTuning_get_m_suspensionStiffness_0 =
          function () {
            return (Ey =
              n._emscripten_bind_btVehicleTuning_get_m_suspensionStiffness_0 =
                n.asm.$k).apply(null, arguments)
          }),
        qy = (n._emscripten_bind_btVehicleTuning_set_m_suspensionStiffness_1 =
          function () {
            return (qy =
              n._emscripten_bind_btVehicleTuning_set_m_suspensionStiffness_1 =
                n.asm.al).apply(null, arguments)
          }),
        Ky = (n._emscripten_bind_btVehicleTuning_get_m_suspensionCompression_0 =
          function () {
            return (Ky =
              n._emscripten_bind_btVehicleTuning_get_m_suspensionCompression_0 =
                n.asm.bl).apply(null, arguments)
          }),
        Qy = (n._emscripten_bind_btVehicleTuning_set_m_suspensionCompression_1 =
          function () {
            return (Qy =
              n._emscripten_bind_btVehicleTuning_set_m_suspensionCompression_1 =
                n.asm.cl).apply(null, arguments)
          }),
        Xy = (n._emscripten_bind_btVehicleTuning_get_m_suspensionDamping_0 =
          function () {
            return (Xy =
              n._emscripten_bind_btVehicleTuning_get_m_suspensionDamping_0 =
                n.asm.dl).apply(null, arguments)
          }),
        Zy = (n._emscripten_bind_btVehicleTuning_set_m_suspensionDamping_1 =
          function () {
            return (Zy =
              n._emscripten_bind_btVehicleTuning_set_m_suspensionDamping_1 =
                n.asm.el).apply(null, arguments)
          }),
        Yy = (n._emscripten_bind_btVehicleTuning_get_m_maxSuspensionTravelCm_0 =
          function () {
            return (Yy =
              n._emscripten_bind_btVehicleTuning_get_m_maxSuspensionTravelCm_0 =
                n.asm.fl).apply(null, arguments)
          }),
        Jy = (n._emscripten_bind_btVehicleTuning_set_m_maxSuspensionTravelCm_1 =
          function () {
            return (Jy =
              n._emscripten_bind_btVehicleTuning_set_m_maxSuspensionTravelCm_1 =
                n.asm.gl).apply(null, arguments)
          }),
        $y = (n._emscripten_bind_btVehicleTuning_get_m_frictionSlip_0 =
          function () {
            return ($y =
              n._emscripten_bind_btVehicleTuning_get_m_frictionSlip_0 =
                n.asm.hl).apply(null, arguments)
          }),
        tl = (n._emscripten_bind_btVehicleTuning_set_m_frictionSlip_1 =
          function () {
            return (tl =
              n._emscripten_bind_btVehicleTuning_set_m_frictionSlip_1 =
                n.asm.il).apply(null, arguments)
          }),
        el = (n._emscripten_bind_btVehicleTuning_get_m_maxSuspensionForce_0 =
          function () {
            return (el =
              n._emscripten_bind_btVehicleTuning_get_m_maxSuspensionForce_0 =
                n.asm.jl).apply(null, arguments)
          }),
        nl = (n._emscripten_bind_btVehicleTuning_set_m_maxSuspensionForce_1 =
          function () {
            return (nl =
              n._emscripten_bind_btVehicleTuning_set_m_maxSuspensionForce_1 =
                n.asm.kl).apply(null, arguments)
          }),
        ol = (n._emscripten_bind_btCollisionObjectWrapper_getWorldTransform_0 =
          function () {
            return (ol =
              n._emscripten_bind_btCollisionObjectWrapper_getWorldTransform_0 =
                n.asm.ll).apply(null, arguments)
          }),
        _l = (n._emscripten_bind_btCollisionObjectWrapper_getCollisionObject_0 =
          function () {
            return (_l =
              n._emscripten_bind_btCollisionObjectWrapper_getCollisionObject_0 =
                n.asm.ml).apply(null, arguments)
          }),
        il = (n._emscripten_bind_btCollisionObjectWrapper_getCollisionShape_0 =
          function () {
            return (il =
              n._emscripten_bind_btCollisionObjectWrapper_getCollisionShape_0 =
                n.asm.nl).apply(null, arguments)
          }),
        rl = (n._emscripten_bind_btShapeHull_btShapeHull_1 = function () {
          return (rl = n._emscripten_bind_btShapeHull_btShapeHull_1 =
            n.asm.ol).apply(null, arguments)
        }),
        pl = (n._emscripten_bind_btShapeHull_buildHull_1 = function () {
          return (pl = n._emscripten_bind_btShapeHull_buildHull_1 =
            n.asm.pl).apply(null, arguments)
        }),
        sl = (n._emscripten_bind_btShapeHull_numVertices_0 = function () {
          return (sl = n._emscripten_bind_btShapeHull_numVertices_0 =
            n.asm.ql).apply(null, arguments)
        }),
        cl = (n._emscripten_bind_btShapeHull_getVertexPointer_0 = function () {
          return (cl = n._emscripten_bind_btShapeHull_getVertexPointer_0 =
            n.asm.rl).apply(null, arguments)
        }),
        al = (n._emscripten_bind_btShapeHull___destroy___0 = function () {
          return (al = n._emscripten_bind_btShapeHull___destroy___0 =
            n.asm.sl).apply(null, arguments)
        }),
        yl = (n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_0 =
          function () {
            return (yl =
              n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_0 =
                n.asm.tl).apply(null, arguments)
          }),
        ll = (n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_1 =
          function () {
            return (ll =
              n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_1 =
                n.asm.ul).apply(null, arguments)
          }),
        ul = (n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_2 =
          function () {
            return (ul =
              n._emscripten_bind_btDefaultMotionState_btDefaultMotionState_2 =
                n.asm.vl).apply(null, arguments)
          }),
        bl = (n._emscripten_bind_btDefaultMotionState_getWorldTransform_1 =
          function () {
            return (bl =
              n._emscripten_bind_btDefaultMotionState_getWorldTransform_1 =
                n.asm.wl).apply(null, arguments)
          }),
        ml = (n._emscripten_bind_btDefaultMotionState_setWorldTransform_1 =
          function () {
            return (ml =
              n._emscripten_bind_btDefaultMotionState_setWorldTransform_1 =
                n.asm.xl).apply(null, arguments)
          }),
        dl =
          (n._emscripten_bind_btDefaultMotionState_get_m_graphicsWorldTrans_0 =
            function () {
              return (dl =
                n._emscripten_bind_btDefaultMotionState_get_m_graphicsWorldTrans_0 =
                  n.asm.yl).apply(null, arguments)
            }),
        hl =
          (n._emscripten_bind_btDefaultMotionState_set_m_graphicsWorldTrans_1 =
            function () {
              return (hl =
                n._emscripten_bind_btDefaultMotionState_set_m_graphicsWorldTrans_1 =
                  n.asm.zl).apply(null, arguments)
            }),
        fl = (n._emscripten_bind_btDefaultMotionState___destroy___0 =
          function () {
            return (fl = n._emscripten_bind_btDefaultMotionState___destroy___0 =
              n.asm.Al).apply(null, arguments)
          }),
        gl = (n._emscripten_bind_btWheelInfo_btWheelInfo_1 = function () {
          return (gl = n._emscripten_bind_btWheelInfo_btWheelInfo_1 =
            n.asm.Bl).apply(null, arguments)
        }),
        Cl = (n._emscripten_bind_btWheelInfo_getSuspensionRestLength_0 =
          function () {
            return (Cl =
              n._emscripten_bind_btWheelInfo_getSuspensionRestLength_0 =
                n.asm.Cl).apply(null, arguments)
          }),
        jl = (n._emscripten_bind_btWheelInfo_updateWheel_2 = function () {
          return (jl = n._emscripten_bind_btWheelInfo_updateWheel_2 =
            n.asm.Dl).apply(null, arguments)
        }),
        Sl = (n._emscripten_bind_btWheelInfo_get_m_suspensionStiffness_0 =
          function () {
            return (Sl =
              n._emscripten_bind_btWheelInfo_get_m_suspensionStiffness_0 =
                n.asm.El).apply(null, arguments)
          }),
        vl = (n._emscripten_bind_btWheelInfo_set_m_suspensionStiffness_1 =
          function () {
            return (vl =
              n._emscripten_bind_btWheelInfo_set_m_suspensionStiffness_1 =
                n.asm.Fl).apply(null, arguments)
          }),
        Rl = (n._emscripten_bind_btWheelInfo_get_m_frictionSlip_0 =
          function () {
            return (Rl = n._emscripten_bind_btWheelInfo_get_m_frictionSlip_0 =
              n.asm.Gl).apply(null, arguments)
          }),
        Dl = (n._emscripten_bind_btWheelInfo_set_m_frictionSlip_1 =
          function () {
            return (Dl = n._emscripten_bind_btWheelInfo_set_m_frictionSlip_1 =
              n.asm.Hl).apply(null, arguments)
          }),
        Il = (n._emscripten_bind_btWheelInfo_get_m_engineForce_0 = function () {
          return (Il = n._emscripten_bind_btWheelInfo_get_m_engineForce_0 =
            n.asm.Il).apply(null, arguments)
        }),
        Pl = (n._emscripten_bind_btWheelInfo_set_m_engineForce_1 = function () {
          return (Pl = n._emscripten_bind_btWheelInfo_set_m_engineForce_1 =
            n.asm.Jl).apply(null, arguments)
        }),
        Ol = (n._emscripten_bind_btWheelInfo_get_m_rollInfluence_0 =
          function () {
            return (Ol = n._emscripten_bind_btWheelInfo_get_m_rollInfluence_0 =
              n.asm.Kl).apply(null, arguments)
          }),
        Wl = (n._emscripten_bind_btWheelInfo_set_m_rollInfluence_1 =
          function () {
            return (Wl = n._emscripten_bind_btWheelInfo_set_m_rollInfluence_1 =
              n.asm.Ll).apply(null, arguments)
          }),
        Bl = (n._emscripten_bind_btWheelInfo_get_m_suspensionRestLength1_0 =
          function () {
            return (Bl =
              n._emscripten_bind_btWheelInfo_get_m_suspensionRestLength1_0 =
                n.asm.Ml).apply(null, arguments)
          }),
        Tl = (n._emscripten_bind_btWheelInfo_set_m_suspensionRestLength1_1 =
          function () {
            return (Tl =
              n._emscripten_bind_btWheelInfo_set_m_suspensionRestLength1_1 =
                n.asm.Nl).apply(null, arguments)
          }),
        Al = (n._emscripten_bind_btWheelInfo_get_m_wheelsRadius_0 =
          function () {
            return (Al = n._emscripten_bind_btWheelInfo_get_m_wheelsRadius_0 =
              n.asm.Ol).apply(null, arguments)
          }),
        kl = (n._emscripten_bind_btWheelInfo_set_m_wheelsRadius_1 =
          function () {
            return (kl = n._emscripten_bind_btWheelInfo_set_m_wheelsRadius_1 =
              n.asm.Pl).apply(null, arguments)
          }),
        xl = (n._emscripten_bind_btWheelInfo_get_m_wheelsDampingCompression_0 =
          function () {
            return (xl =
              n._emscripten_bind_btWheelInfo_get_m_wheelsDampingCompression_0 =
                n.asm.Ql).apply(null, arguments)
          }),
        Ll = (n._emscripten_bind_btWheelInfo_set_m_wheelsDampingCompression_1 =
          function () {
            return (Ll =
              n._emscripten_bind_btWheelInfo_set_m_wheelsDampingCompression_1 =
                n.asm.Rl).apply(null, arguments)
          }),
        wl = (n._emscripten_bind_btWheelInfo_get_m_wheelsDampingRelaxation_0 =
          function () {
            return (wl =
              n._emscripten_bind_btWheelInfo_get_m_wheelsDampingRelaxation_0 =
                n.asm.Sl).apply(null, arguments)
          }),
        Fl = (n._emscripten_bind_btWheelInfo_set_m_wheelsDampingRelaxation_1 =
          function () {
            return (Fl =
              n._emscripten_bind_btWheelInfo_set_m_wheelsDampingRelaxation_1 =
                n.asm.Tl).apply(null, arguments)
          }),
        Ml = (n._emscripten_bind_btWheelInfo_get_m_steering_0 = function () {
          return (Ml = n._emscripten_bind_btWheelInfo_get_m_steering_0 =
            n.asm.Ul).apply(null, arguments)
        }),
        Hl = (n._emscripten_bind_btWheelInfo_set_m_steering_1 = function () {
          return (Hl = n._emscripten_bind_btWheelInfo_set_m_steering_1 =
            n.asm.Vl).apply(null, arguments)
        }),
        Gl = (n._emscripten_bind_btWheelInfo_get_m_maxSuspensionForce_0 =
          function () {
            return (Gl =
              n._emscripten_bind_btWheelInfo_get_m_maxSuspensionForce_0 =
                n.asm.Wl).apply(null, arguments)
          }),
        Vl = (n._emscripten_bind_btWheelInfo_set_m_maxSuspensionForce_1 =
          function () {
            return (Vl =
              n._emscripten_bind_btWheelInfo_set_m_maxSuspensionForce_1 =
                n.asm.Xl).apply(null, arguments)
          }),
        zl = (n._emscripten_bind_btWheelInfo_get_m_maxSuspensionTravelCm_0 =
          function () {
            return (zl =
              n._emscripten_bind_btWheelInfo_get_m_maxSuspensionTravelCm_0 =
                n.asm.Yl).apply(null, arguments)
          }),
        Nl = (n._emscripten_bind_btWheelInfo_set_m_maxSuspensionTravelCm_1 =
          function () {
            return (Nl =
              n._emscripten_bind_btWheelInfo_set_m_maxSuspensionTravelCm_1 =
                n.asm.Zl).apply(null, arguments)
          }),
        Ul = (n._emscripten_bind_btWheelInfo_get_m_wheelsSuspensionForce_0 =
          function () {
            return (Ul =
              n._emscripten_bind_btWheelInfo_get_m_wheelsSuspensionForce_0 =
                n.asm._l).apply(null, arguments)
          }),
        El = (n._emscripten_bind_btWheelInfo_set_m_wheelsSuspensionForce_1 =
          function () {
            return (El =
              n._emscripten_bind_btWheelInfo_set_m_wheelsSuspensionForce_1 =
                n.asm.$l).apply(null, arguments)
          }),
        ql = (n._emscripten_bind_btWheelInfo_get_m_bIsFrontWheel_0 =
          function () {
            return (ql = n._emscripten_bind_btWheelInfo_get_m_bIsFrontWheel_0 =
              n.asm.am).apply(null, arguments)
          }),
        Kl = (n._emscripten_bind_btWheelInfo_set_m_bIsFrontWheel_1 =
          function () {
            return (Kl = n._emscripten_bind_btWheelInfo_set_m_bIsFrontWheel_1 =
              n.asm.bm).apply(null, arguments)
          }),
        Ql = (n._emscripten_bind_btWheelInfo_get_m_raycastInfo_0 = function () {
          return (Ql = n._emscripten_bind_btWheelInfo_get_m_raycastInfo_0 =
            n.asm.cm).apply(null, arguments)
        }),
        Xl = (n._emscripten_bind_btWheelInfo_set_m_raycastInfo_1 = function () {
          return (Xl = n._emscripten_bind_btWheelInfo_set_m_raycastInfo_1 =
            n.asm.dm).apply(null, arguments)
        }),
        Zl = (n._emscripten_bind_btWheelInfo_get_m_chassisConnectionPointCS_0 =
          function () {
            return (Zl =
              n._emscripten_bind_btWheelInfo_get_m_chassisConnectionPointCS_0 =
                n.asm.em).apply(null, arguments)
          }),
        Yl = (n._emscripten_bind_btWheelInfo_set_m_chassisConnectionPointCS_1 =
          function () {
            return (Yl =
              n._emscripten_bind_btWheelInfo_set_m_chassisConnectionPointCS_1 =
                n.asm.fm).apply(null, arguments)
          }),
        Jl = (n._emscripten_bind_btWheelInfo_get_m_worldTransform_0 =
          function () {
            return (Jl = n._emscripten_bind_btWheelInfo_get_m_worldTransform_0 =
              n.asm.gm).apply(null, arguments)
          }),
        $l = (n._emscripten_bind_btWheelInfo_set_m_worldTransform_1 =
          function () {
            return ($l = n._emscripten_bind_btWheelInfo_set_m_worldTransform_1 =
              n.asm.hm).apply(null, arguments)
          }),
        tu = (n._emscripten_bind_btWheelInfo_get_m_wheelDirectionCS_0 =
          function () {
            return (tu =
              n._emscripten_bind_btWheelInfo_get_m_wheelDirectionCS_0 =
                n.asm.im).apply(null, arguments)
          }),
        eu = (n._emscripten_bind_btWheelInfo_set_m_wheelDirectionCS_1 =
          function () {
            return (eu =
              n._emscripten_bind_btWheelInfo_set_m_wheelDirectionCS_1 =
                n.asm.jm).apply(null, arguments)
          }),
        nu = (n._emscripten_bind_btWheelInfo_get_m_wheelAxleCS_0 = function () {
          return (nu = n._emscripten_bind_btWheelInfo_get_m_wheelAxleCS_0 =
            n.asm.km).apply(null, arguments)
        }),
        ou = (n._emscripten_bind_btWheelInfo_set_m_wheelAxleCS_1 = function () {
          return (ou = n._emscripten_bind_btWheelInfo_set_m_wheelAxleCS_1 =
            n.asm.lm).apply(null, arguments)
        }),
        _u = (n._emscripten_bind_btWheelInfo_get_m_rotation_0 = function () {
          return (_u = n._emscripten_bind_btWheelInfo_get_m_rotation_0 =
            n.asm.mm).apply(null, arguments)
        }),
        iu = (n._emscripten_bind_btWheelInfo_set_m_rotation_1 = function () {
          return (iu = n._emscripten_bind_btWheelInfo_set_m_rotation_1 =
            n.asm.nm).apply(null, arguments)
        }),
        ru = (n._emscripten_bind_btWheelInfo_get_m_deltaRotation_0 =
          function () {
            return (ru = n._emscripten_bind_btWheelInfo_get_m_deltaRotation_0 =
              n.asm.om).apply(null, arguments)
          }),
        pu = (n._emscripten_bind_btWheelInfo_set_m_deltaRotation_1 =
          function () {
            return (pu = n._emscripten_bind_btWheelInfo_set_m_deltaRotation_1 =
              n.asm.pm).apply(null, arguments)
          }),
        su = (n._emscripten_bind_btWheelInfo_get_m_brake_0 = function () {
          return (su = n._emscripten_bind_btWheelInfo_get_m_brake_0 =
            n.asm.qm).apply(null, arguments)
        }),
        cu = (n._emscripten_bind_btWheelInfo_set_m_brake_1 = function () {
          return (cu = n._emscripten_bind_btWheelInfo_set_m_brake_1 =
            n.asm.rm).apply(null, arguments)
        }),
        au =
          (n._emscripten_bind_btWheelInfo_get_m_clippedInvContactDotSuspension_0 =
            function () {
              return (au =
                n._emscripten_bind_btWheelInfo_get_m_clippedInvContactDotSuspension_0 =
                  n.asm.sm).apply(null, arguments)
            }),
        yu =
          (n._emscripten_bind_btWheelInfo_set_m_clippedInvContactDotSuspension_1 =
            function () {
              return (yu =
                n._emscripten_bind_btWheelInfo_set_m_clippedInvContactDotSuspension_1 =
                  n.asm.tm).apply(null, arguments)
            }),
        lu =
          (n._emscripten_bind_btWheelInfo_get_m_suspensionRelativeVelocity_0 =
            function () {
              return (lu =
                n._emscripten_bind_btWheelInfo_get_m_suspensionRelativeVelocity_0 =
                  n.asm.um).apply(null, arguments)
            }),
        uu =
          (n._emscripten_bind_btWheelInfo_set_m_suspensionRelativeVelocity_1 =
            function () {
              return (uu =
                n._emscripten_bind_btWheelInfo_set_m_suspensionRelativeVelocity_1 =
                  n.asm.vm).apply(null, arguments)
            }),
        bu = (n._emscripten_bind_btWheelInfo_get_m_skidInfo_0 = function () {
          return (bu = n._emscripten_bind_btWheelInfo_get_m_skidInfo_0 =
            n.asm.wm).apply(null, arguments)
        }),
        mu = (n._emscripten_bind_btWheelInfo_set_m_skidInfo_1 = function () {
          return (mu = n._emscripten_bind_btWheelInfo_set_m_skidInfo_1 =
            n.asm.xm).apply(null, arguments)
        }),
        du = (n._emscripten_bind_btWheelInfo___destroy___0 = function () {
          return (du = n._emscripten_bind_btWheelInfo___destroy___0 =
            n.asm.ym).apply(null, arguments)
        }),
        hu = (n._emscripten_bind_btVector4_btVector4_0 = function () {
          return (hu = n._emscripten_bind_btVector4_btVector4_0 =
            n.asm.zm).apply(null, arguments)
        }),
        fu = (n._emscripten_bind_btVector4_btVector4_4 = function () {
          return (fu = n._emscripten_bind_btVector4_btVector4_4 =
            n.asm.Am).apply(null, arguments)
        }),
        gu = (n._emscripten_bind_btVector4_w_0 = function () {
          return (gu = n._emscripten_bind_btVector4_w_0 = n.asm.Bm).apply(
            null,
            arguments,
          )
        }),
        Cu = (n._emscripten_bind_btVector4_setValue_4 = function () {
          return (Cu = n._emscripten_bind_btVector4_setValue_4 =
            n.asm.Cm).apply(null, arguments)
        }),
        ju = (n._emscripten_bind_btVector4_length_0 = function () {
          return (ju = n._emscripten_bind_btVector4_length_0 = n.asm.Dm).apply(
            null,
            arguments,
          )
        }),
        Su = (n._emscripten_bind_btVector4_x_0 = function () {
          return (Su = n._emscripten_bind_btVector4_x_0 = n.asm.Em).apply(
            null,
            arguments,
          )
        }),
        vu = (n._emscripten_bind_btVector4_y_0 = function () {
          return (vu = n._emscripten_bind_btVector4_y_0 = n.asm.Fm).apply(
            null,
            arguments,
          )
        }),
        Ru = (n._emscripten_bind_btVector4_z_0 = function () {
          return (Ru = n._emscripten_bind_btVector4_z_0 = n.asm.Gm).apply(
            null,
            arguments,
          )
        }),
        Du = (n._emscripten_bind_btVector4_setX_1 = function () {
          return (Du = n._emscripten_bind_btVector4_setX_1 = n.asm.Hm).apply(
            null,
            arguments,
          )
        }),
        Iu = (n._emscripten_bind_btVector4_setY_1 = function () {
          return (Iu = n._emscripten_bind_btVector4_setY_1 = n.asm.Im).apply(
            null,
            arguments,
          )
        }),
        Pu = (n._emscripten_bind_btVector4_setZ_1 = function () {
          return (Pu = n._emscripten_bind_btVector4_setZ_1 = n.asm.Jm).apply(
            null,
            arguments,
          )
        }),
        Ou = (n._emscripten_bind_btVector4_normalize_0 = function () {
          return (Ou = n._emscripten_bind_btVector4_normalize_0 =
            n.asm.Km).apply(null, arguments)
        }),
        Wu = (n._emscripten_bind_btVector4_rotate_2 = function () {
          return (Wu = n._emscripten_bind_btVector4_rotate_2 = n.asm.Lm).apply(
            null,
            arguments,
          )
        }),
        Bu = (n._emscripten_bind_btVector4_dot_1 = function () {
          return (Bu = n._emscripten_bind_btVector4_dot_1 = n.asm.Mm).apply(
            null,
            arguments,
          )
        }),
        Tu = (n._emscripten_bind_btVector4_op_mul_1 = function () {
          return (Tu = n._emscripten_bind_btVector4_op_mul_1 = n.asm.Nm).apply(
            null,
            arguments,
          )
        }),
        Au = (n._emscripten_bind_btVector4_op_add_1 = function () {
          return (Au = n._emscripten_bind_btVector4_op_add_1 = n.asm.Om).apply(
            null,
            arguments,
          )
        }),
        ku = (n._emscripten_bind_btVector4_op_sub_1 = function () {
          return (ku = n._emscripten_bind_btVector4_op_sub_1 = n.asm.Pm).apply(
            null,
            arguments,
          )
        }),
        xu = (n._emscripten_bind_btVector4___destroy___0 = function () {
          return (xu = n._emscripten_bind_btVector4___destroy___0 =
            n.asm.Qm).apply(null, arguments)
        }),
        Lu =
          (n._emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0 =
            function () {
              return (Lu =
                n._emscripten_bind_btDefaultCollisionConstructionInfo_btDefaultCollisionConstructionInfo_0 =
                  n.asm.Rm).apply(null, arguments)
            }),
        wu =
          (n._emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0 =
            function () {
              return (wu =
                n._emscripten_bind_btDefaultCollisionConstructionInfo___destroy___0 =
                  n.asm.Sm).apply(null, arguments)
            }),
        Fu = (n._emscripten_bind_Anchor_get_m_node_0 = function () {
          return (Fu = n._emscripten_bind_Anchor_get_m_node_0 = n.asm.Tm).apply(
            null,
            arguments,
          )
        }),
        Mu = (n._emscripten_bind_Anchor_set_m_node_1 = function () {
          return (Mu = n._emscripten_bind_Anchor_set_m_node_1 = n.asm.Um).apply(
            null,
            arguments,
          )
        }),
        Hu = (n._emscripten_bind_Anchor_get_m_local_0 = function () {
          return (Hu = n._emscripten_bind_Anchor_get_m_local_0 =
            n.asm.Vm).apply(null, arguments)
        }),
        Gu = (n._emscripten_bind_Anchor_set_m_local_1 = function () {
          return (Gu = n._emscripten_bind_Anchor_set_m_local_1 =
            n.asm.Wm).apply(null, arguments)
        }),
        Vu = (n._emscripten_bind_Anchor_get_m_body_0 = function () {
          return (Vu = n._emscripten_bind_Anchor_get_m_body_0 = n.asm.Xm).apply(
            null,
            arguments,
          )
        }),
        zu = (n._emscripten_bind_Anchor_set_m_body_1 = function () {
          return (zu = n._emscripten_bind_Anchor_set_m_body_1 = n.asm.Ym).apply(
            null,
            arguments,
          )
        }),
        Nu = (n._emscripten_bind_Anchor_get_m_influence_0 = function () {
          return (Nu = n._emscripten_bind_Anchor_get_m_influence_0 =
            n.asm.Zm).apply(null, arguments)
        }),
        Uu = (n._emscripten_bind_Anchor_set_m_influence_1 = function () {
          return (Uu = n._emscripten_bind_Anchor_set_m_influence_1 =
            n.asm._m).apply(null, arguments)
        }),
        Eu = (n._emscripten_bind_Anchor_get_m_c0_0 = function () {
          return (Eu = n._emscripten_bind_Anchor_get_m_c0_0 = n.asm.$m).apply(
            null,
            arguments,
          )
        }),
        qu = (n._emscripten_bind_Anchor_set_m_c0_1 = function () {
          return (qu = n._emscripten_bind_Anchor_set_m_c0_1 = n.asm.an).apply(
            null,
            arguments,
          )
        }),
        Ku = (n._emscripten_bind_Anchor_get_m_c1_0 = function () {
          return (Ku = n._emscripten_bind_Anchor_get_m_c1_0 = n.asm.bn).apply(
            null,
            arguments,
          )
        }),
        Qu = (n._emscripten_bind_Anchor_set_m_c1_1 = function () {
          return (Qu = n._emscripten_bind_Anchor_set_m_c1_1 = n.asm.cn).apply(
            null,
            arguments,
          )
        }),
        Xu = (n._emscripten_bind_Anchor_get_m_c2_0 = function () {
          return (Xu = n._emscripten_bind_Anchor_get_m_c2_0 = n.asm.dn).apply(
            null,
            arguments,
          )
        }),
        Zu = (n._emscripten_bind_Anchor_set_m_c2_1 = function () {
          return (Zu = n._emscripten_bind_Anchor_set_m_c2_1 = n.asm.en).apply(
            null,
            arguments,
          )
        }),
        Yu = (n._emscripten_bind_Anchor___destroy___0 = function () {
          return (Yu = n._emscripten_bind_Anchor___destroy___0 =
            n.asm.fn).apply(null, arguments)
        }),
        Ju =
          (n._emscripten_bind_btVehicleRaycasterResult_get_m_hitPointInWorld_0 =
            function () {
              return (Ju =
                n._emscripten_bind_btVehicleRaycasterResult_get_m_hitPointInWorld_0 =
                  n.asm.gn).apply(null, arguments)
            }),
        $u =
          (n._emscripten_bind_btVehicleRaycasterResult_set_m_hitPointInWorld_1 =
            function () {
              return ($u =
                n._emscripten_bind_btVehicleRaycasterResult_set_m_hitPointInWorld_1 =
                  n.asm.hn).apply(null, arguments)
            }),
        tb =
          (n._emscripten_bind_btVehicleRaycasterResult_get_m_hitNormalInWorld_0 =
            function () {
              return (tb =
                n._emscripten_bind_btVehicleRaycasterResult_get_m_hitNormalInWorld_0 =
                  n.asm.jn).apply(null, arguments)
            }),
        eb =
          (n._emscripten_bind_btVehicleRaycasterResult_set_m_hitNormalInWorld_1 =
            function () {
              return (eb =
                n._emscripten_bind_btVehicleRaycasterResult_set_m_hitNormalInWorld_1 =
                  n.asm.kn).apply(null, arguments)
            }),
        nb = (n._emscripten_bind_btVehicleRaycasterResult_get_m_distFraction_0 =
          function () {
            return (nb =
              n._emscripten_bind_btVehicleRaycasterResult_get_m_distFraction_0 =
                n.asm.ln).apply(null, arguments)
          }),
        ob = (n._emscripten_bind_btVehicleRaycasterResult_set_m_distFraction_1 =
          function () {
            return (ob =
              n._emscripten_bind_btVehicleRaycasterResult_set_m_distFraction_1 =
                n.asm.mn).apply(null, arguments)
          }),
        _b = (n._emscripten_bind_btVehicleRaycasterResult___destroy___0 =
          function () {
            return (_b =
              n._emscripten_bind_btVehicleRaycasterResult___destroy___0 =
                n.asm.nn).apply(null, arguments)
          }),
        ib = (n._emscripten_bind_btVector3Array_size_0 = function () {
          return (ib = n._emscripten_bind_btVector3Array_size_0 =
            n.asm.on).apply(null, arguments)
        }),
        rb = (n._emscripten_bind_btVector3Array_at_1 = function () {
          return (rb = n._emscripten_bind_btVector3Array_at_1 = n.asm.pn).apply(
            null,
            arguments,
          )
        }),
        pb = (n._emscripten_bind_btVector3Array___destroy___0 = function () {
          return (pb = n._emscripten_bind_btVector3Array___destroy___0 =
            n.asm.qn).apply(null, arguments)
        }),
        sb = (n._emscripten_bind_btConstraintSolver___destroy___0 =
          function () {
            return (sb = n._emscripten_bind_btConstraintSolver___destroy___0 =
              n.asm.rn).apply(null, arguments)
          }),
        cb = (n._emscripten_bind_btRaycastVehicle_btRaycastVehicle_3 =
          function () {
            return (cb =
              n._emscripten_bind_btRaycastVehicle_btRaycastVehicle_3 =
                n.asm.sn).apply(null, arguments)
          }),
        ab = (n._emscripten_bind_btRaycastVehicle_applyEngineForce_2 =
          function () {
            return (ab =
              n._emscripten_bind_btRaycastVehicle_applyEngineForce_2 =
                n.asm.tn).apply(null, arguments)
          }),
        yb = (n._emscripten_bind_btRaycastVehicle_setSteeringValue_2 =
          function () {
            return (yb =
              n._emscripten_bind_btRaycastVehicle_setSteeringValue_2 =
                n.asm.un).apply(null, arguments)
          }),
        lb = (n._emscripten_bind_btRaycastVehicle_getWheelTransformWS_1 =
          function () {
            return (lb =
              n._emscripten_bind_btRaycastVehicle_getWheelTransformWS_1 =
                n.asm.vn).apply(null, arguments)
          }),
        ub = (n._emscripten_bind_btRaycastVehicle_updateWheelTransform_2 =
          function () {
            return (ub =
              n._emscripten_bind_btRaycastVehicle_updateWheelTransform_2 =
                n.asm.wn).apply(null, arguments)
          }),
        bb = (n._emscripten_bind_btRaycastVehicle_addWheel_7 = function () {
          return (bb = n._emscripten_bind_btRaycastVehicle_addWheel_7 =
            n.asm.xn).apply(null, arguments)
        }),
        mb = (n._emscripten_bind_btRaycastVehicle_getNumWheels_0 = function () {
          return (mb = n._emscripten_bind_btRaycastVehicle_getNumWheels_0 =
            n.asm.yn).apply(null, arguments)
        }),
        db = (n._emscripten_bind_btRaycastVehicle_getRigidBody_0 = function () {
          return (db = n._emscripten_bind_btRaycastVehicle_getRigidBody_0 =
            n.asm.zn).apply(null, arguments)
        }),
        hb = (n._emscripten_bind_btRaycastVehicle_getWheelInfo_1 = function () {
          return (hb = n._emscripten_bind_btRaycastVehicle_getWheelInfo_1 =
            n.asm.An).apply(null, arguments)
        }),
        fb = (n._emscripten_bind_btRaycastVehicle_setBrake_2 = function () {
          return (fb = n._emscripten_bind_btRaycastVehicle_setBrake_2 =
            n.asm.Bn).apply(null, arguments)
        }),
        gb = (n._emscripten_bind_btRaycastVehicle_setCoordinateSystem_3 =
          function () {
            return (gb =
              n._emscripten_bind_btRaycastVehicle_setCoordinateSystem_3 =
                n.asm.Cn).apply(null, arguments)
          }),
        Cb = (n._emscripten_bind_btRaycastVehicle_getCurrentSpeedKmHour_0 =
          function () {
            return (Cb =
              n._emscripten_bind_btRaycastVehicle_getCurrentSpeedKmHour_0 =
                n.asm.Dn).apply(null, arguments)
          }),
        jb = (n._emscripten_bind_btRaycastVehicle_getChassisWorldTransform_0 =
          function () {
            return (jb =
              n._emscripten_bind_btRaycastVehicle_getChassisWorldTransform_0 =
                n.asm.En).apply(null, arguments)
          }),
        Sb = (n._emscripten_bind_btRaycastVehicle_rayCast_1 = function () {
          return (Sb = n._emscripten_bind_btRaycastVehicle_rayCast_1 =
            n.asm.Fn).apply(null, arguments)
        }),
        vb = (n._emscripten_bind_btRaycastVehicle_updateVehicle_1 =
          function () {
            return (vb = n._emscripten_bind_btRaycastVehicle_updateVehicle_1 =
              n.asm.Gn).apply(null, arguments)
          }),
        Rb = (n._emscripten_bind_btRaycastVehicle_resetSuspension_0 =
          function () {
            return (Rb = n._emscripten_bind_btRaycastVehicle_resetSuspension_0 =
              n.asm.Hn).apply(null, arguments)
          }),
        Db = (n._emscripten_bind_btRaycastVehicle_getSteeringValue_1 =
          function () {
            return (Db =
              n._emscripten_bind_btRaycastVehicle_getSteeringValue_1 =
                n.asm.In).apply(null, arguments)
          }),
        Ib = (n._emscripten_bind_btRaycastVehicle_updateWheelTransformsWS_1 =
          function () {
            return (Ib =
              n._emscripten_bind_btRaycastVehicle_updateWheelTransformsWS_1 =
                n.asm.Jn).apply(null, arguments)
          }),
        Pb = (n._emscripten_bind_btRaycastVehicle_updateWheelTransformsWS_2 =
          function () {
            return (Pb =
              n._emscripten_bind_btRaycastVehicle_updateWheelTransformsWS_2 =
                n.asm.Kn).apply(null, arguments)
          }),
        Ob = (n._emscripten_bind_btRaycastVehicle_setPitchControl_1 =
          function () {
            return (Ob = n._emscripten_bind_btRaycastVehicle_setPitchControl_1 =
              n.asm.Ln).apply(null, arguments)
          }),
        Wb = (n._emscripten_bind_btRaycastVehicle_updateSuspension_1 =
          function () {
            return (Wb =
              n._emscripten_bind_btRaycastVehicle_updateSuspension_1 =
                n.asm.Mn).apply(null, arguments)
          }),
        Bb = (n._emscripten_bind_btRaycastVehicle_updateFriction_1 =
          function () {
            return (Bb = n._emscripten_bind_btRaycastVehicle_updateFriction_1 =
              n.asm.Nn).apply(null, arguments)
          }),
        Tb = (n._emscripten_bind_btRaycastVehicle_getRightAxis_0 = function () {
          return (Tb = n._emscripten_bind_btRaycastVehicle_getRightAxis_0 =
            n.asm.On).apply(null, arguments)
        }),
        Ab = (n._emscripten_bind_btRaycastVehicle_getUpAxis_0 = function () {
          return (Ab = n._emscripten_bind_btRaycastVehicle_getUpAxis_0 =
            n.asm.Pn).apply(null, arguments)
        }),
        kb = (n._emscripten_bind_btRaycastVehicle_getForwardAxis_0 =
          function () {
            return (kb = n._emscripten_bind_btRaycastVehicle_getForwardAxis_0 =
              n.asm.Qn).apply(null, arguments)
          }),
        xb = (n._emscripten_bind_btRaycastVehicle_getForwardVector_0 =
          function () {
            return (xb =
              n._emscripten_bind_btRaycastVehicle_getForwardVector_0 =
                n.asm.Rn).apply(null, arguments)
          }),
        Lb = (n._emscripten_bind_btRaycastVehicle_getUserConstraintType_0 =
          function () {
            return (Lb =
              n._emscripten_bind_btRaycastVehicle_getUserConstraintType_0 =
                n.asm.Sn).apply(null, arguments)
          }),
        wb = (n._emscripten_bind_btRaycastVehicle_setUserConstraintType_1 =
          function () {
            return (wb =
              n._emscripten_bind_btRaycastVehicle_setUserConstraintType_1 =
                n.asm.Tn).apply(null, arguments)
          }),
        Fb = (n._emscripten_bind_btRaycastVehicle_setUserConstraintId_1 =
          function () {
            return (Fb =
              n._emscripten_bind_btRaycastVehicle_setUserConstraintId_1 =
                n.asm.Un).apply(null, arguments)
          }),
        Mb = (n._emscripten_bind_btRaycastVehicle_getUserConstraintId_0 =
          function () {
            return (Mb =
              n._emscripten_bind_btRaycastVehicle_getUserConstraintId_0 =
                n.asm.Vn).apply(null, arguments)
          }),
        Hb = (n._emscripten_bind_btRaycastVehicle_updateAction_2 = function () {
          return (Hb = n._emscripten_bind_btRaycastVehicle_updateAction_2 =
            n.asm.Wn).apply(null, arguments)
        }),
        Gb = (n._emscripten_bind_btRaycastVehicle___destroy___0 = function () {
          return (Gb = n._emscripten_bind_btRaycastVehicle___destroy___0 =
            n.asm.Xn).apply(null, arguments)
        }),
        Vb = (n._emscripten_bind_btCylinderShapeX_btCylinderShapeX_1 =
          function () {
            return (Vb =
              n._emscripten_bind_btCylinderShapeX_btCylinderShapeX_1 =
                n.asm.Yn).apply(null, arguments)
          }),
        zb = (n._emscripten_bind_btCylinderShapeX_setMargin_1 = function () {
          return (zb = n._emscripten_bind_btCylinderShapeX_setMargin_1 =
            n.asm.Zn).apply(null, arguments)
        }),
        Nb = (n._emscripten_bind_btCylinderShapeX_getMargin_0 = function () {
          return (Nb = n._emscripten_bind_btCylinderShapeX_getMargin_0 =
            n.asm._n).apply(null, arguments)
        }),
        Ub = (n._emscripten_bind_btCylinderShapeX_setLocalScaling_1 =
          function () {
            return (Ub = n._emscripten_bind_btCylinderShapeX_setLocalScaling_1 =
              n.asm.$n).apply(null, arguments)
          }),
        Eb = (n._emscripten_bind_btCylinderShapeX_getLocalScaling_0 =
          function () {
            return (Eb = n._emscripten_bind_btCylinderShapeX_getLocalScaling_0 =
              n.asm.ao).apply(null, arguments)
          }),
        qb = (n._emscripten_bind_btCylinderShapeX_calculateLocalInertia_2 =
          function () {
            return (qb =
              n._emscripten_bind_btCylinderShapeX_calculateLocalInertia_2 =
                n.asm.bo).apply(null, arguments)
          }),
        Kb = (n._emscripten_bind_btCylinderShapeX___destroy___0 = function () {
          return (Kb = n._emscripten_bind_btCylinderShapeX___destroy___0 =
            n.asm.co).apply(null, arguments)
        }),
        Qb = (n._emscripten_bind_btCylinderShapeZ_btCylinderShapeZ_1 =
          function () {
            return (Qb =
              n._emscripten_bind_btCylinderShapeZ_btCylinderShapeZ_1 =
                n.asm.eo).apply(null, arguments)
          }),
        Xb = (n._emscripten_bind_btCylinderShapeZ_setMargin_1 = function () {
          return (Xb = n._emscripten_bind_btCylinderShapeZ_setMargin_1 =
            n.asm.fo).apply(null, arguments)
        }),
        Zb = (n._emscripten_bind_btCylinderShapeZ_getMargin_0 = function () {
          return (Zb = n._emscripten_bind_btCylinderShapeZ_getMargin_0 =
            n.asm.go).apply(null, arguments)
        }),
        Yb = (n._emscripten_bind_btCylinderShapeZ_setLocalScaling_1 =
          function () {
            return (Yb = n._emscripten_bind_btCylinderShapeZ_setLocalScaling_1 =
              n.asm.ho).apply(null, arguments)
          }),
        Jb = (n._emscripten_bind_btCylinderShapeZ_getLocalScaling_0 =
          function () {
            return (Jb = n._emscripten_bind_btCylinderShapeZ_getLocalScaling_0 =
              n.asm.io).apply(null, arguments)
          }),
        $b = (n._emscripten_bind_btCylinderShapeZ_calculateLocalInertia_2 =
          function () {
            return ($b =
              n._emscripten_bind_btCylinderShapeZ_calculateLocalInertia_2 =
                n.asm.jo).apply(null, arguments)
          }),
        tm = (n._emscripten_bind_btCylinderShapeZ___destroy___0 = function () {
          return (tm = n._emscripten_bind_btCylinderShapeZ___destroy___0 =
            n.asm.ko).apply(null, arguments)
        }),
        em = (n._emscripten_bind_btConvexPolyhedron_get_m_vertices_0 =
          function () {
            return (em =
              n._emscripten_bind_btConvexPolyhedron_get_m_vertices_0 =
                n.asm.lo).apply(null, arguments)
          }),
        nm = (n._emscripten_bind_btConvexPolyhedron_set_m_vertices_1 =
          function () {
            return (nm =
              n._emscripten_bind_btConvexPolyhedron_set_m_vertices_1 =
                n.asm.mo).apply(null, arguments)
          }),
        om = (n._emscripten_bind_btConvexPolyhedron_get_m_faces_0 =
          function () {
            return (om = n._emscripten_bind_btConvexPolyhedron_get_m_faces_0 =
              n.asm.no).apply(null, arguments)
          }),
        _m = (n._emscripten_bind_btConvexPolyhedron_set_m_faces_1 =
          function () {
            return (_m = n._emscripten_bind_btConvexPolyhedron_set_m_faces_1 =
              n.asm.oo).apply(null, arguments)
          }),
        im = (n._emscripten_bind_btConvexPolyhedron___destroy___0 =
          function () {
            return (im = n._emscripten_bind_btConvexPolyhedron___destroy___0 =
              n.asm.po).apply(null, arguments)
          }),
        rm =
          (n._emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0 =
            function () {
              return (rm =
                n._emscripten_bind_btSequentialImpulseConstraintSolver_btSequentialImpulseConstraintSolver_0 =
                  n.asm.qo).apply(null, arguments)
            }),
        pm =
          (n._emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0 =
            function () {
              return (pm =
                n._emscripten_bind_btSequentialImpulseConstraintSolver___destroy___0 =
                  n.asm.ro).apply(null, arguments)
            }),
        sm = (n._emscripten_bind_tAnchorArray_size_0 = function () {
          return (sm = n._emscripten_bind_tAnchorArray_size_0 = n.asm.so).apply(
            null,
            arguments,
          )
        }),
        cm = (n._emscripten_bind_tAnchorArray_at_1 = function () {
          return (cm = n._emscripten_bind_tAnchorArray_at_1 = n.asm.to).apply(
            null,
            arguments,
          )
        }),
        am = (n._emscripten_bind_tAnchorArray_clear_0 = function () {
          return (am = n._emscripten_bind_tAnchorArray_clear_0 =
            n.asm.uo).apply(null, arguments)
        }),
        ym = (n._emscripten_bind_tAnchorArray_push_back_1 = function () {
          return (ym = n._emscripten_bind_tAnchorArray_push_back_1 =
            n.asm.vo).apply(null, arguments)
        }),
        lm = (n._emscripten_bind_tAnchorArray_pop_back_0 = function () {
          return (lm = n._emscripten_bind_tAnchorArray_pop_back_0 =
            n.asm.wo).apply(null, arguments)
        }),
        um = (n._emscripten_bind_tAnchorArray___destroy___0 = function () {
          return (um = n._emscripten_bind_tAnchorArray___destroy___0 =
            n.asm.xo).apply(null, arguments)
        }),
        bm = (n._emscripten_bind_RaycastInfo_get_m_contactNormalWS_0 =
          function () {
            return (bm =
              n._emscripten_bind_RaycastInfo_get_m_contactNormalWS_0 =
                n.asm.yo).apply(null, arguments)
          }),
        mm = (n._emscripten_bind_RaycastInfo_set_m_contactNormalWS_1 =
          function () {
            return (mm =
              n._emscripten_bind_RaycastInfo_set_m_contactNormalWS_1 =
                n.asm.zo).apply(null, arguments)
          }),
        dm = (n._emscripten_bind_RaycastInfo_get_m_contactPointWS_0 =
          function () {
            return (dm = n._emscripten_bind_RaycastInfo_get_m_contactPointWS_0 =
              n.asm.Ao).apply(null, arguments)
          }),
        hm = (n._emscripten_bind_RaycastInfo_set_m_contactPointWS_1 =
          function () {
            return (hm = n._emscripten_bind_RaycastInfo_set_m_contactPointWS_1 =
              n.asm.Bo).apply(null, arguments)
          }),
        fm = (n._emscripten_bind_RaycastInfo_get_m_suspensionLength_0 =
          function () {
            return (fm =
              n._emscripten_bind_RaycastInfo_get_m_suspensionLength_0 =
                n.asm.Co).apply(null, arguments)
          }),
        gm = (n._emscripten_bind_RaycastInfo_set_m_suspensionLength_1 =
          function () {
            return (gm =
              n._emscripten_bind_RaycastInfo_set_m_suspensionLength_1 =
                n.asm.Do).apply(null, arguments)
          }),
        Cm = (n._emscripten_bind_RaycastInfo_get_m_hardPointWS_0 = function () {
          return (Cm = n._emscripten_bind_RaycastInfo_get_m_hardPointWS_0 =
            n.asm.Eo).apply(null, arguments)
        }),
        jm = (n._emscripten_bind_RaycastInfo_set_m_hardPointWS_1 = function () {
          return (jm = n._emscripten_bind_RaycastInfo_set_m_hardPointWS_1 =
            n.asm.Fo).apply(null, arguments)
        }),
        Sm = (n._emscripten_bind_RaycastInfo_get_m_wheelDirectionWS_0 =
          function () {
            return (Sm =
              n._emscripten_bind_RaycastInfo_get_m_wheelDirectionWS_0 =
                n.asm.Go).apply(null, arguments)
          }),
        vm = (n._emscripten_bind_RaycastInfo_set_m_wheelDirectionWS_1 =
          function () {
            return (vm =
              n._emscripten_bind_RaycastInfo_set_m_wheelDirectionWS_1 =
                n.asm.Ho).apply(null, arguments)
          }),
        Rm = (n._emscripten_bind_RaycastInfo_get_m_wheelAxleWS_0 = function () {
          return (Rm = n._emscripten_bind_RaycastInfo_get_m_wheelAxleWS_0 =
            n.asm.Io).apply(null, arguments)
        }),
        Dm = (n._emscripten_bind_RaycastInfo_set_m_wheelAxleWS_1 = function () {
          return (Dm = n._emscripten_bind_RaycastInfo_set_m_wheelAxleWS_1 =
            n.asm.Jo).apply(null, arguments)
        }),
        Im = (n._emscripten_bind_RaycastInfo_get_m_isInContact_0 = function () {
          return (Im = n._emscripten_bind_RaycastInfo_get_m_isInContact_0 =
            n.asm.Ko).apply(null, arguments)
        }),
        Pm = (n._emscripten_bind_RaycastInfo_set_m_isInContact_1 = function () {
          return (Pm = n._emscripten_bind_RaycastInfo_set_m_isInContact_1 =
            n.asm.Lo).apply(null, arguments)
        }),
        Om = (n._emscripten_bind_RaycastInfo_get_m_groundObject_0 =
          function () {
            return (Om = n._emscripten_bind_RaycastInfo_get_m_groundObject_0 =
              n.asm.Mo).apply(null, arguments)
          }),
        Wm = (n._emscripten_bind_RaycastInfo_set_m_groundObject_1 =
          function () {
            return (Wm = n._emscripten_bind_RaycastInfo_set_m_groundObject_1 =
              n.asm.No).apply(null, arguments)
          }),
        Bm = (n._emscripten_bind_RaycastInfo___destroy___0 = function () {
          return (Bm = n._emscripten_bind_RaycastInfo___destroy___0 =
            n.asm.Oo).apply(null, arguments)
        }),
        Tm = (n._emscripten_bind_btMultiSphereShape_btMultiSphereShape_3 =
          function () {
            return (Tm =
              n._emscripten_bind_btMultiSphereShape_btMultiSphereShape_3 =
                n.asm.Po).apply(null, arguments)
          }),
        Am = (n._emscripten_bind_btMultiSphereShape_setLocalScaling_1 =
          function () {
            return (Am =
              n._emscripten_bind_btMultiSphereShape_setLocalScaling_1 =
                n.asm.Qo).apply(null, arguments)
          }),
        km = (n._emscripten_bind_btMultiSphereShape_getLocalScaling_0 =
          function () {
            return (km =
              n._emscripten_bind_btMultiSphereShape_getLocalScaling_0 =
                n.asm.Ro).apply(null, arguments)
          }),
        xm = (n._emscripten_bind_btMultiSphereShape_calculateLocalInertia_2 =
          function () {
            return (xm =
              n._emscripten_bind_btMultiSphereShape_calculateLocalInertia_2 =
                n.asm.So).apply(null, arguments)
          }),
        Lm = (n._emscripten_bind_btMultiSphereShape___destroy___0 =
          function () {
            return (Lm = n._emscripten_bind_btMultiSphereShape___destroy___0 =
              n.asm.To).apply(null, arguments)
          }),
        wm = (n._emscripten_bind_btSoftBody_btSoftBody_4 = function () {
          return (wm = n._emscripten_bind_btSoftBody_btSoftBody_4 =
            n.asm.Uo).apply(null, arguments)
        }),
        Fm = (n._emscripten_bind_btSoftBody_checkLink_2 = function () {
          return (Fm = n._emscripten_bind_btSoftBody_checkLink_2 =
            n.asm.Vo).apply(null, arguments)
        }),
        Mm = (n._emscripten_bind_btSoftBody_checkFace_3 = function () {
          return (Mm = n._emscripten_bind_btSoftBody_checkFace_3 =
            n.asm.Wo).apply(null, arguments)
        }),
        Hm = (n._emscripten_bind_btSoftBody_appendMaterial_0 = function () {
          return (Hm = n._emscripten_bind_btSoftBody_appendMaterial_0 =
            n.asm.Xo).apply(null, arguments)
        }),
        Gm = (n._emscripten_bind_btSoftBody_appendNode_2 = function () {
          return (Gm = n._emscripten_bind_btSoftBody_appendNode_2 =
            n.asm.Yo).apply(null, arguments)
        }),
        Vm = (n._emscripten_bind_btSoftBody_appendLink_4 = function () {
          return (Vm = n._emscripten_bind_btSoftBody_appendLink_4 =
            n.asm.Zo).apply(null, arguments)
        }),
        zm = (n._emscripten_bind_btSoftBody_appendFace_4 = function () {
          return (zm = n._emscripten_bind_btSoftBody_appendFace_4 =
            n.asm._o).apply(null, arguments)
        }),
        Nm = (n._emscripten_bind_btSoftBody_appendTetra_5 = function () {
          return (Nm = n._emscripten_bind_btSoftBody_appendTetra_5 =
            n.asm.$o).apply(null, arguments)
        }),
        Um = (n._emscripten_bind_btSoftBody_appendAnchor_4 = function () {
          return (Um = n._emscripten_bind_btSoftBody_appendAnchor_4 =
            n.asm.ap).apply(null, arguments)
        }),
        Em = (n._emscripten_bind_btSoftBody_addForce_1 = function () {
          return (Em = n._emscripten_bind_btSoftBody_addForce_1 =
            n.asm.bp).apply(null, arguments)
        }),
        qm = (n._emscripten_bind_btSoftBody_addForce_2 = function () {
          return (qm = n._emscripten_bind_btSoftBody_addForce_2 =
            n.asm.cp).apply(null, arguments)
        }),
        Km = (n._emscripten_bind_btSoftBody_addAeroForceToNode_2 = function () {
          return (Km = n._emscripten_bind_btSoftBody_addAeroForceToNode_2 =
            n.asm.dp).apply(null, arguments)
        }),
        Qm = (n._emscripten_bind_btSoftBody_getTotalMass_0 = function () {
          return (Qm = n._emscripten_bind_btSoftBody_getTotalMass_0 =
            n.asm.ep).apply(null, arguments)
        }),
        Xm = (n._emscripten_bind_btSoftBody_setTotalMass_2 = function () {
          return (Xm = n._emscripten_bind_btSoftBody_setTotalMass_2 =
            n.asm.fp).apply(null, arguments)
        }),
        Zm = (n._emscripten_bind_btSoftBody_setMass_2 = function () {
          return (Zm = n._emscripten_bind_btSoftBody_setMass_2 =
            n.asm.gp).apply(null, arguments)
        }),
        Ym = (n._emscripten_bind_btSoftBody_transform_1 = function () {
          return (Ym = n._emscripten_bind_btSoftBody_transform_1 =
            n.asm.hp).apply(null, arguments)
        }),
        Jm = (n._emscripten_bind_btSoftBody_translate_1 = function () {
          return (Jm = n._emscripten_bind_btSoftBody_translate_1 =
            n.asm.ip).apply(null, arguments)
        }),
        $m = (n._emscripten_bind_btSoftBody_rotate_1 = function () {
          return ($m = n._emscripten_bind_btSoftBody_rotate_1 = n.asm.jp).apply(
            null,
            arguments,
          )
        }),
        td = (n._emscripten_bind_btSoftBody_scale_1 = function () {
          return (td = n._emscripten_bind_btSoftBody_scale_1 = n.asm.kp).apply(
            null,
            arguments,
          )
        }),
        ed = (n._emscripten_bind_btSoftBody_generateClusters_1 = function () {
          return (ed = n._emscripten_bind_btSoftBody_generateClusters_1 =
            n.asm.lp).apply(null, arguments)
        }),
        nd = (n._emscripten_bind_btSoftBody_generateClusters_2 = function () {
          return (nd = n._emscripten_bind_btSoftBody_generateClusters_2 =
            n.asm.mp).apply(null, arguments)
        }),
        od = (n._emscripten_bind_btSoftBody_generateBendingConstraints_2 =
          function () {
            return (od =
              n._emscripten_bind_btSoftBody_generateBendingConstraints_2 =
                n.asm.np).apply(null, arguments)
          }),
        _d = (n._emscripten_bind_btSoftBody_upcast_1 = function () {
          return (_d = n._emscripten_bind_btSoftBody_upcast_1 = n.asm.op).apply(
            null,
            arguments,
          )
        }),
        id = (n._emscripten_bind_btSoftBody_setAnisotropicFriction_2 =
          function () {
            return (id =
              n._emscripten_bind_btSoftBody_setAnisotropicFriction_2 =
                n.asm.pp).apply(null, arguments)
          }),
        rd = (n._emscripten_bind_btSoftBody_getCollisionShape_0 = function () {
          return (rd = n._emscripten_bind_btSoftBody_getCollisionShape_0 =
            n.asm.qp).apply(null, arguments)
        }),
        pd = (n._emscripten_bind_btSoftBody_setContactProcessingThreshold_1 =
          function () {
            return (pd =
              n._emscripten_bind_btSoftBody_setContactProcessingThreshold_1 =
                n.asm.rp).apply(null, arguments)
          }),
        sd = (n._emscripten_bind_btSoftBody_setActivationState_1 = function () {
          return (sd = n._emscripten_bind_btSoftBody_setActivationState_1 =
            n.asm.sp).apply(null, arguments)
        }),
        cd = (n._emscripten_bind_btSoftBody_forceActivationState_1 =
          function () {
            return (cd = n._emscripten_bind_btSoftBody_forceActivationState_1 =
              n.asm.tp).apply(null, arguments)
          }),
        ad = (n._emscripten_bind_btSoftBody_activate_0 = function () {
          return (ad = n._emscripten_bind_btSoftBody_activate_0 =
            n.asm.up).apply(null, arguments)
        }),
        yd = (n._emscripten_bind_btSoftBody_activate_1 = function () {
          return (yd = n._emscripten_bind_btSoftBody_activate_1 =
            n.asm.vp).apply(null, arguments)
        }),
        ld = (n._emscripten_bind_btSoftBody_isActive_0 = function () {
          return (ld = n._emscripten_bind_btSoftBody_isActive_0 =
            n.asm.wp).apply(null, arguments)
        }),
        ud = (n._emscripten_bind_btSoftBody_isKinematicObject_0 = function () {
          return (ud = n._emscripten_bind_btSoftBody_isKinematicObject_0 =
            n.asm.xp).apply(null, arguments)
        }),
        bd = (n._emscripten_bind_btSoftBody_isStaticObject_0 = function () {
          return (bd = n._emscripten_bind_btSoftBody_isStaticObject_0 =
            n.asm.yp).apply(null, arguments)
        }),
        md = (n._emscripten_bind_btSoftBody_isStaticOrKinematicObject_0 =
          function () {
            return (md =
              n._emscripten_bind_btSoftBody_isStaticOrKinematicObject_0 =
                n.asm.zp).apply(null, arguments)
          }),
        dd = (n._emscripten_bind_btSoftBody_getRestitution_0 = function () {
          return (dd = n._emscripten_bind_btSoftBody_getRestitution_0 =
            n.asm.Ap).apply(null, arguments)
        }),
        hd = (n._emscripten_bind_btSoftBody_getFriction_0 = function () {
          return (hd = n._emscripten_bind_btSoftBody_getFriction_0 =
            n.asm.Bp).apply(null, arguments)
        }),
        fd = (n._emscripten_bind_btSoftBody_getRollingFriction_0 = function () {
          return (fd = n._emscripten_bind_btSoftBody_getRollingFriction_0 =
            n.asm.Cp).apply(null, arguments)
        }),
        gd = (n._emscripten_bind_btSoftBody_setRestitution_1 = function () {
          return (gd = n._emscripten_bind_btSoftBody_setRestitution_1 =
            n.asm.Dp).apply(null, arguments)
        }),
        Cd = (n._emscripten_bind_btSoftBody_setFriction_1 = function () {
          return (Cd = n._emscripten_bind_btSoftBody_setFriction_1 =
            n.asm.Ep).apply(null, arguments)
        }),
        jd = (n._emscripten_bind_btSoftBody_setRollingFriction_1 = function () {
          return (jd = n._emscripten_bind_btSoftBody_setRollingFriction_1 =
            n.asm.Fp).apply(null, arguments)
        }),
        Sd = (n._emscripten_bind_btSoftBody_getWorldTransform_0 = function () {
          return (Sd = n._emscripten_bind_btSoftBody_getWorldTransform_0 =
            n.asm.Gp).apply(null, arguments)
        }),
        vd = (n._emscripten_bind_btSoftBody_getCollisionFlags_0 = function () {
          return (vd = n._emscripten_bind_btSoftBody_getCollisionFlags_0 =
            n.asm.Hp).apply(null, arguments)
        }),
        Rd = (n._emscripten_bind_btSoftBody_setCollisionFlags_1 = function () {
          return (Rd = n._emscripten_bind_btSoftBody_setCollisionFlags_1 =
            n.asm.Ip).apply(null, arguments)
        }),
        Dd = (n._emscripten_bind_btSoftBody_setWorldTransform_1 = function () {
          return (Dd = n._emscripten_bind_btSoftBody_setWorldTransform_1 =
            n.asm.Jp).apply(null, arguments)
        }),
        Id = (n._emscripten_bind_btSoftBody_setCollisionShape_1 = function () {
          return (Id = n._emscripten_bind_btSoftBody_setCollisionShape_1 =
            n.asm.Kp).apply(null, arguments)
        }),
        Pd = (n._emscripten_bind_btSoftBody_setCcdMotionThreshold_1 =
          function () {
            return (Pd = n._emscripten_bind_btSoftBody_setCcdMotionThreshold_1 =
              n.asm.Lp).apply(null, arguments)
          }),
        Od = (n._emscripten_bind_btSoftBody_setCcdSweptSphereRadius_1 =
          function () {
            return (Od =
              n._emscripten_bind_btSoftBody_setCcdSweptSphereRadius_1 =
                n.asm.Mp).apply(null, arguments)
          }),
        Wd = (n._emscripten_bind_btSoftBody_getUserIndex_0 = function () {
          return (Wd = n._emscripten_bind_btSoftBody_getUserIndex_0 =
            n.asm.Np).apply(null, arguments)
        }),
        Bd = (n._emscripten_bind_btSoftBody_setUserIndex_1 = function () {
          return (Bd = n._emscripten_bind_btSoftBody_setUserIndex_1 =
            n.asm.Op).apply(null, arguments)
        }),
        Td = (n._emscripten_bind_btSoftBody_getUserPointer_0 = function () {
          return (Td = n._emscripten_bind_btSoftBody_getUserPointer_0 =
            n.asm.Pp).apply(null, arguments)
        }),
        Ad = (n._emscripten_bind_btSoftBody_setUserPointer_1 = function () {
          return (Ad = n._emscripten_bind_btSoftBody_setUserPointer_1 =
            n.asm.Qp).apply(null, arguments)
        }),
        kd = (n._emscripten_bind_btSoftBody_getBroadphaseHandle_0 =
          function () {
            return (kd = n._emscripten_bind_btSoftBody_getBroadphaseHandle_0 =
              n.asm.Rp).apply(null, arguments)
          }),
        xd = (n._emscripten_bind_btSoftBody_get_m_cfg_0 = function () {
          return (xd = n._emscripten_bind_btSoftBody_get_m_cfg_0 =
            n.asm.Sp).apply(null, arguments)
        }),
        Ld = (n._emscripten_bind_btSoftBody_set_m_cfg_1 = function () {
          return (Ld = n._emscripten_bind_btSoftBody_set_m_cfg_1 =
            n.asm.Tp).apply(null, arguments)
        }),
        wd = (n._emscripten_bind_btSoftBody_get_m_nodes_0 = function () {
          return (wd = n._emscripten_bind_btSoftBody_get_m_nodes_0 =
            n.asm.Up).apply(null, arguments)
        }),
        Fd = (n._emscripten_bind_btSoftBody_set_m_nodes_1 = function () {
          return (Fd = n._emscripten_bind_btSoftBody_set_m_nodes_1 =
            n.asm.Vp).apply(null, arguments)
        }),
        Md = (n._emscripten_bind_btSoftBody_get_m_faces_0 = function () {
          return (Md = n._emscripten_bind_btSoftBody_get_m_faces_0 =
            n.asm.Wp).apply(null, arguments)
        }),
        Hd = (n._emscripten_bind_btSoftBody_set_m_faces_1 = function () {
          return (Hd = n._emscripten_bind_btSoftBody_set_m_faces_1 =
            n.asm.Xp).apply(null, arguments)
        }),
        Gd = (n._emscripten_bind_btSoftBody_get_m_materials_0 = function () {
          return (Gd = n._emscripten_bind_btSoftBody_get_m_materials_0 =
            n.asm.Yp).apply(null, arguments)
        }),
        Vd = (n._emscripten_bind_btSoftBody_set_m_materials_1 = function () {
          return (Vd = n._emscripten_bind_btSoftBody_set_m_materials_1 =
            n.asm.Zp).apply(null, arguments)
        }),
        zd = (n._emscripten_bind_btSoftBody_get_m_anchors_0 = function () {
          return (zd = n._emscripten_bind_btSoftBody_get_m_anchors_0 =
            n.asm._p).apply(null, arguments)
        }),
        Nd = (n._emscripten_bind_btSoftBody_set_m_anchors_1 = function () {
          return (Nd = n._emscripten_bind_btSoftBody_set_m_anchors_1 =
            n.asm.$p).apply(null, arguments)
        }),
        Ud = (n._emscripten_bind_btSoftBody___destroy___0 = function () {
          return (Ud = n._emscripten_bind_btSoftBody___destroy___0 =
            n.asm.aq).apply(null, arguments)
        }),
        Ed = (n._emscripten_bind_btIntArray_size_0 = function () {
          return (Ed = n._emscripten_bind_btIntArray_size_0 = n.asm.bq).apply(
            null,
            arguments,
          )
        }),
        qd = (n._emscripten_bind_btIntArray_at_1 = function () {
          return (qd = n._emscripten_bind_btIntArray_at_1 = n.asm.cq).apply(
            null,
            arguments,
          )
        }),
        Kd = (n._emscripten_bind_btIntArray___destroy___0 = function () {
          return (Kd = n._emscripten_bind_btIntArray___destroy___0 =
            n.asm.dq).apply(null, arguments)
        }),
        Qd = (n._emscripten_bind_Config_get_kVCF_0 = function () {
          return (Qd = n._emscripten_bind_Config_get_kVCF_0 = n.asm.eq).apply(
            null,
            arguments,
          )
        }),
        Xd = (n._emscripten_bind_Config_set_kVCF_1 = function () {
          return (Xd = n._emscripten_bind_Config_set_kVCF_1 = n.asm.fq).apply(
            null,
            arguments,
          )
        }),
        Zd = (n._emscripten_bind_Config_get_kDP_0 = function () {
          return (Zd = n._emscripten_bind_Config_get_kDP_0 = n.asm.gq).apply(
            null,
            arguments,
          )
        }),
        Yd = (n._emscripten_bind_Config_set_kDP_1 = function () {
          return (Yd = n._emscripten_bind_Config_set_kDP_1 = n.asm.hq).apply(
            null,
            arguments,
          )
        }),
        Jd = (n._emscripten_bind_Config_get_kDG_0 = function () {
          return (Jd = n._emscripten_bind_Config_get_kDG_0 = n.asm.iq).apply(
            null,
            arguments,
          )
        }),
        $d = (n._emscripten_bind_Config_set_kDG_1 = function () {
          return ($d = n._emscripten_bind_Config_set_kDG_1 = n.asm.jq).apply(
            null,
            arguments,
          )
        }),
        th = (n._emscripten_bind_Config_get_kLF_0 = function () {
          return (th = n._emscripten_bind_Config_get_kLF_0 = n.asm.kq).apply(
            null,
            arguments,
          )
        }),
        eh = (n._emscripten_bind_Config_set_kLF_1 = function () {
          return (eh = n._emscripten_bind_Config_set_kLF_1 = n.asm.lq).apply(
            null,
            arguments,
          )
        }),
        nh = (n._emscripten_bind_Config_get_kPR_0 = function () {
          return (nh = n._emscripten_bind_Config_get_kPR_0 = n.asm.mq).apply(
            null,
            arguments,
          )
        }),
        oh = (n._emscripten_bind_Config_set_kPR_1 = function () {
          return (oh = n._emscripten_bind_Config_set_kPR_1 = n.asm.nq).apply(
            null,
            arguments,
          )
        }),
        _h = (n._emscripten_bind_Config_get_kVC_0 = function () {
          return (_h = n._emscripten_bind_Config_get_kVC_0 = n.asm.oq).apply(
            null,
            arguments,
          )
        }),
        ih = (n._emscripten_bind_Config_set_kVC_1 = function () {
          return (ih = n._emscripten_bind_Config_set_kVC_1 = n.asm.pq).apply(
            null,
            arguments,
          )
        }),
        rh = (n._emscripten_bind_Config_get_kDF_0 = function () {
          return (rh = n._emscripten_bind_Config_get_kDF_0 = n.asm.qq).apply(
            null,
            arguments,
          )
        }),
        ph = (n._emscripten_bind_Config_set_kDF_1 = function () {
          return (ph = n._emscripten_bind_Config_set_kDF_1 = n.asm.rq).apply(
            null,
            arguments,
          )
        }),
        sh = (n._emscripten_bind_Config_get_kMT_0 = function () {
          return (sh = n._emscripten_bind_Config_get_kMT_0 = n.asm.sq).apply(
            null,
            arguments,
          )
        }),
        ch = (n._emscripten_bind_Config_set_kMT_1 = function () {
          return (ch = n._emscripten_bind_Config_set_kMT_1 = n.asm.tq).apply(
            null,
            arguments,
          )
        }),
        ah = (n._emscripten_bind_Config_get_kCHR_0 = function () {
          return (ah = n._emscripten_bind_Config_get_kCHR_0 = n.asm.uq).apply(
            null,
            arguments,
          )
        }),
        yh = (n._emscripten_bind_Config_set_kCHR_1 = function () {
          return (yh = n._emscripten_bind_Config_set_kCHR_1 = n.asm.vq).apply(
            null,
            arguments,
          )
        }),
        lh = (n._emscripten_bind_Config_get_kKHR_0 = function () {
          return (lh = n._emscripten_bind_Config_get_kKHR_0 = n.asm.wq).apply(
            null,
            arguments,
          )
        }),
        uh = (n._emscripten_bind_Config_set_kKHR_1 = function () {
          return (uh = n._emscripten_bind_Config_set_kKHR_1 = n.asm.xq).apply(
            null,
            arguments,
          )
        }),
        bh = (n._emscripten_bind_Config_get_kSHR_0 = function () {
          return (bh = n._emscripten_bind_Config_get_kSHR_0 = n.asm.yq).apply(
            null,
            arguments,
          )
        }),
        mh = (n._emscripten_bind_Config_set_kSHR_1 = function () {
          return (mh = n._emscripten_bind_Config_set_kSHR_1 = n.asm.zq).apply(
            null,
            arguments,
          )
        }),
        dh = (n._emscripten_bind_Config_get_kAHR_0 = function () {
          return (dh = n._emscripten_bind_Config_get_kAHR_0 = n.asm.Aq).apply(
            null,
            arguments,
          )
        }),
        hh = (n._emscripten_bind_Config_set_kAHR_1 = function () {
          return (hh = n._emscripten_bind_Config_set_kAHR_1 = n.asm.Bq).apply(
            null,
            arguments,
          )
        }),
        fh = (n._emscripten_bind_Config_get_kSRHR_CL_0 = function () {
          return (fh = n._emscripten_bind_Config_get_kSRHR_CL_0 =
            n.asm.Cq).apply(null, arguments)
        }),
        gh = (n._emscripten_bind_Config_set_kSRHR_CL_1 = function () {
          return (gh = n._emscripten_bind_Config_set_kSRHR_CL_1 =
            n.asm.Dq).apply(null, arguments)
        }),
        Ch = (n._emscripten_bind_Config_get_kSKHR_CL_0 = function () {
          return (Ch = n._emscripten_bind_Config_get_kSKHR_CL_0 =
            n.asm.Eq).apply(null, arguments)
        }),
        jh = (n._emscripten_bind_Config_set_kSKHR_CL_1 = function () {
          return (jh = n._emscripten_bind_Config_set_kSKHR_CL_1 =
            n.asm.Fq).apply(null, arguments)
        }),
        Sh = (n._emscripten_bind_Config_get_kSSHR_CL_0 = function () {
          return (Sh = n._emscripten_bind_Config_get_kSSHR_CL_0 =
            n.asm.Gq).apply(null, arguments)
        }),
        vh = (n._emscripten_bind_Config_set_kSSHR_CL_1 = function () {
          return (vh = n._emscripten_bind_Config_set_kSSHR_CL_1 =
            n.asm.Hq).apply(null, arguments)
        }),
        Rh = (n._emscripten_bind_Config_get_kSR_SPLT_CL_0 = function () {
          return (Rh = n._emscripten_bind_Config_get_kSR_SPLT_CL_0 =
            n.asm.Iq).apply(null, arguments)
        }),
        Dh = (n._emscripten_bind_Config_set_kSR_SPLT_CL_1 = function () {
          return (Dh = n._emscripten_bind_Config_set_kSR_SPLT_CL_1 =
            n.asm.Jq).apply(null, arguments)
        }),
        Ih = (n._emscripten_bind_Config_get_kSK_SPLT_CL_0 = function () {
          return (Ih = n._emscripten_bind_Config_get_kSK_SPLT_CL_0 =
            n.asm.Kq).apply(null, arguments)
        }),
        Ph = (n._emscripten_bind_Config_set_kSK_SPLT_CL_1 = function () {
          return (Ph = n._emscripten_bind_Config_set_kSK_SPLT_CL_1 =
            n.asm.Lq).apply(null, arguments)
        }),
        Oh = (n._emscripten_bind_Config_get_kSS_SPLT_CL_0 = function () {
          return (Oh = n._emscripten_bind_Config_get_kSS_SPLT_CL_0 =
            n.asm.Mq).apply(null, arguments)
        }),
        Wh = (n._emscripten_bind_Config_set_kSS_SPLT_CL_1 = function () {
          return (Wh = n._emscripten_bind_Config_set_kSS_SPLT_CL_1 =
            n.asm.Nq).apply(null, arguments)
        }),
        Bh = (n._emscripten_bind_Config_get_maxvolume_0 = function () {
          return (Bh = n._emscripten_bind_Config_get_maxvolume_0 =
            n.asm.Oq).apply(null, arguments)
        }),
        Th = (n._emscripten_bind_Config_set_maxvolume_1 = function () {
          return (Th = n._emscripten_bind_Config_set_maxvolume_1 =
            n.asm.Pq).apply(null, arguments)
        }),
        Ah = (n._emscripten_bind_Config_get_timescale_0 = function () {
          return (Ah = n._emscripten_bind_Config_get_timescale_0 =
            n.asm.Qq).apply(null, arguments)
        }),
        kh = (n._emscripten_bind_Config_set_timescale_1 = function () {
          return (kh = n._emscripten_bind_Config_set_timescale_1 =
            n.asm.Rq).apply(null, arguments)
        }),
        xh = (n._emscripten_bind_Config_get_viterations_0 = function () {
          return (xh = n._emscripten_bind_Config_get_viterations_0 =
            n.asm.Sq).apply(null, arguments)
        }),
        Lh = (n._emscripten_bind_Config_set_viterations_1 = function () {
          return (Lh = n._emscripten_bind_Config_set_viterations_1 =
            n.asm.Tq).apply(null, arguments)
        }),
        wh = (n._emscripten_bind_Config_get_piterations_0 = function () {
          return (wh = n._emscripten_bind_Config_get_piterations_0 =
            n.asm.Uq).apply(null, arguments)
        }),
        Fh = (n._emscripten_bind_Config_set_piterations_1 = function () {
          return (Fh = n._emscripten_bind_Config_set_piterations_1 =
            n.asm.Vq).apply(null, arguments)
        }),
        Mh = (n._emscripten_bind_Config_get_diterations_0 = function () {
          return (Mh = n._emscripten_bind_Config_get_diterations_0 =
            n.asm.Wq).apply(null, arguments)
        }),
        Hh = (n._emscripten_bind_Config_set_diterations_1 = function () {
          return (Hh = n._emscripten_bind_Config_set_diterations_1 =
            n.asm.Xq).apply(null, arguments)
        }),
        Gh = (n._emscripten_bind_Config_get_citerations_0 = function () {
          return (Gh = n._emscripten_bind_Config_get_citerations_0 =
            n.asm.Yq).apply(null, arguments)
        }),
        Vh = (n._emscripten_bind_Config_set_citerations_1 = function () {
          return (Vh = n._emscripten_bind_Config_set_citerations_1 =
            n.asm.Zq).apply(null, arguments)
        }),
        zh = (n._emscripten_bind_Config_get_collisions_0 = function () {
          return (zh = n._emscripten_bind_Config_get_collisions_0 =
            n.asm._q).apply(null, arguments)
        }),
        Nh = (n._emscripten_bind_Config_set_collisions_1 = function () {
          return (Nh = n._emscripten_bind_Config_set_collisions_1 =
            n.asm.$q).apply(null, arguments)
        }),
        Uh = (n._emscripten_bind_Config___destroy___0 = function () {
          return (Uh = n._emscripten_bind_Config___destroy___0 =
            n.asm.ar).apply(null, arguments)
        }),
        Eh = (n._emscripten_bind_Node_get_m_x_0 = function () {
          return (Eh = n._emscripten_bind_Node_get_m_x_0 = n.asm.br).apply(
            null,
            arguments,
          )
        }),
        qh = (n._emscripten_bind_Node_set_m_x_1 = function () {
          return (qh = n._emscripten_bind_Node_set_m_x_1 = n.asm.cr).apply(
            null,
            arguments,
          )
        }),
        Kh = (n._emscripten_bind_Node_get_m_q_0 = function () {
          return (Kh = n._emscripten_bind_Node_get_m_q_0 = n.asm.dr).apply(
            null,
            arguments,
          )
        }),
        Qh = (n._emscripten_bind_Node_set_m_q_1 = function () {
          return (Qh = n._emscripten_bind_Node_set_m_q_1 = n.asm.er).apply(
            null,
            arguments,
          )
        }),
        Xh = (n._emscripten_bind_Node_get_m_v_0 = function () {
          return (Xh = n._emscripten_bind_Node_get_m_v_0 = n.asm.fr).apply(
            null,
            arguments,
          )
        }),
        Zh = (n._emscripten_bind_Node_set_m_v_1 = function () {
          return (Zh = n._emscripten_bind_Node_set_m_v_1 = n.asm.gr).apply(
            null,
            arguments,
          )
        }),
        Yh = (n._emscripten_bind_Node_get_m_f_0 = function () {
          return (Yh = n._emscripten_bind_Node_get_m_f_0 = n.asm.hr).apply(
            null,
            arguments,
          )
        }),
        Jh = (n._emscripten_bind_Node_set_m_f_1 = function () {
          return (Jh = n._emscripten_bind_Node_set_m_f_1 = n.asm.ir).apply(
            null,
            arguments,
          )
        }),
        $h = (n._emscripten_bind_Node_get_m_n_0 = function () {
          return ($h = n._emscripten_bind_Node_get_m_n_0 = n.asm.jr).apply(
            null,
            arguments,
          )
        }),
        tf = (n._emscripten_bind_Node_set_m_n_1 = function () {
          return (tf = n._emscripten_bind_Node_set_m_n_1 = n.asm.kr).apply(
            null,
            arguments,
          )
        }),
        ef = (n._emscripten_bind_Node_get_m_im_0 = function () {
          return (ef = n._emscripten_bind_Node_get_m_im_0 = n.asm.lr).apply(
            null,
            arguments,
          )
        }),
        nf = (n._emscripten_bind_Node_set_m_im_1 = function () {
          return (nf = n._emscripten_bind_Node_set_m_im_1 = n.asm.mr).apply(
            null,
            arguments,
          )
        }),
        of = (n._emscripten_bind_Node_get_m_area_0 = function () {
          return (of = n._emscripten_bind_Node_get_m_area_0 = n.asm.nr).apply(
            null,
            arguments,
          )
        }),
        _f = (n._emscripten_bind_Node_set_m_area_1 = function () {
          return (_f = n._emscripten_bind_Node_set_m_area_1 = n.asm.or).apply(
            null,
            arguments,
          )
        }),
        rf = (n._emscripten_bind_Node___destroy___0 = function () {
          return (rf = n._emscripten_bind_Node___destroy___0 = n.asm.pr).apply(
            null,
            arguments,
          )
        }),
        pf = (n._emscripten_bind_btGhostPairCallback_btGhostPairCallback_0 =
          function () {
            return (pf =
              n._emscripten_bind_btGhostPairCallback_btGhostPairCallback_0 =
                n.asm.qr).apply(null, arguments)
          }),
        sf = (n._emscripten_bind_btGhostPairCallback___destroy___0 =
          function () {
            return (sf = n._emscripten_bind_btGhostPairCallback___destroy___0 =
              n.asm.rr).apply(null, arguments)
          }),
        cf = (n._emscripten_bind_btOverlappingPairCallback___destroy___0 =
          function () {
            return (cf =
              n._emscripten_bind_btOverlappingPairCallback___destroy___0 =
                n.asm.sr).apply(null, arguments)
          }),
        af =
          (n._emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_3 =
            function () {
              return (af =
                n._emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_3 =
                  n.asm.tr).apply(null, arguments)
            }),
        yf =
          (n._emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_4 =
            function () {
              return (yf =
                n._emscripten_bind_btKinematicCharacterController_btKinematicCharacterController_4 =
                  n.asm.ur).apply(null, arguments)
            }),
        lf = (n._emscripten_bind_btKinematicCharacterController_setUpAxis_1 =
          function () {
            return (lf =
              n._emscripten_bind_btKinematicCharacterController_setUpAxis_1 =
                n.asm.vr).apply(null, arguments)
          }),
        uf =
          (n._emscripten_bind_btKinematicCharacterController_setWalkDirection_1 =
            function () {
              return (uf =
                n._emscripten_bind_btKinematicCharacterController_setWalkDirection_1 =
                  n.asm.wr).apply(null, arguments)
            }),
        bf =
          (n._emscripten_bind_btKinematicCharacterController_setVelocityForTimeInterval_2 =
            function () {
              return (bf =
                n._emscripten_bind_btKinematicCharacterController_setVelocityForTimeInterval_2 =
                  n.asm.xr).apply(null, arguments)
            }),
        mf = (n._emscripten_bind_btKinematicCharacterController_warp_1 =
          function () {
            return (mf =
              n._emscripten_bind_btKinematicCharacterController_warp_1 =
                n.asm.yr).apply(null, arguments)
          }),
        df = (n._emscripten_bind_btKinematicCharacterController_preStep_1 =
          function () {
            return (df =
              n._emscripten_bind_btKinematicCharacterController_preStep_1 =
                n.asm.zr).apply(null, arguments)
          }),
        hf = (n._emscripten_bind_btKinematicCharacterController_playerStep_2 =
          function () {
            return (hf =
              n._emscripten_bind_btKinematicCharacterController_playerStep_2 =
                n.asm.Ar).apply(null, arguments)
          }),
        ff = (n._emscripten_bind_btKinematicCharacterController_setFallSpeed_1 =
          function () {
            return (ff =
              n._emscripten_bind_btKinematicCharacterController_setFallSpeed_1 =
                n.asm.Br).apply(null, arguments)
          }),
        gf = (n._emscripten_bind_btKinematicCharacterController_setJumpSpeed_1 =
          function () {
            return (gf =
              n._emscripten_bind_btKinematicCharacterController_setJumpSpeed_1 =
                n.asm.Cr).apply(null, arguments)
          }),
        Cf =
          (n._emscripten_bind_btKinematicCharacterController_setMaxJumpHeight_1 =
            function () {
              return (Cf =
                n._emscripten_bind_btKinematicCharacterController_setMaxJumpHeight_1 =
                  n.asm.Dr).apply(null, arguments)
            }),
        jf = (n._emscripten_bind_btKinematicCharacterController_canJump_0 =
          function () {
            return (jf =
              n._emscripten_bind_btKinematicCharacterController_canJump_0 =
                n.asm.Er).apply(null, arguments)
          }),
        Sf = (n._emscripten_bind_btKinematicCharacterController_jump_0 =
          function () {
            return (Sf =
              n._emscripten_bind_btKinematicCharacterController_jump_0 =
                n.asm.Fr).apply(null, arguments)
          }),
        vf = (n._emscripten_bind_btKinematicCharacterController_setGravity_1 =
          function () {
            return (vf =
              n._emscripten_bind_btKinematicCharacterController_setGravity_1 =
                n.asm.Gr).apply(null, arguments)
          }),
        Rf = (n._emscripten_bind_btKinematicCharacterController_getGravity_0 =
          function () {
            return (Rf =
              n._emscripten_bind_btKinematicCharacterController_getGravity_0 =
                n.asm.Hr).apply(null, arguments)
          }),
        Df = (n._emscripten_bind_btKinematicCharacterController_setMaxSlope_1 =
          function () {
            return (Df =
              n._emscripten_bind_btKinematicCharacterController_setMaxSlope_1 =
                n.asm.Ir).apply(null, arguments)
          }),
        If = (n._emscripten_bind_btKinematicCharacterController_getMaxSlope_0 =
          function () {
            return (If =
              n._emscripten_bind_btKinematicCharacterController_getMaxSlope_0 =
                n.asm.Jr).apply(null, arguments)
          }),
        Pf =
          (n._emscripten_bind_btKinematicCharacterController_getGhostObject_0 =
            function () {
              return (Pf =
                n._emscripten_bind_btKinematicCharacterController_getGhostObject_0 =
                  n.asm.Kr).apply(null, arguments)
            }),
        Of =
          (n._emscripten_bind_btKinematicCharacterController_setUseGhostSweepTest_1 =
            function () {
              return (Of =
                n._emscripten_bind_btKinematicCharacterController_setUseGhostSweepTest_1 =
                  n.asm.Lr).apply(null, arguments)
            }),
        Wf = (n._emscripten_bind_btKinematicCharacterController_onGround_0 =
          function () {
            return (Wf =
              n._emscripten_bind_btKinematicCharacterController_onGround_0 =
                n.asm.Mr).apply(null, arguments)
          }),
        Bf =
          (n._emscripten_bind_btKinematicCharacterController_setUpInterpolate_1 =
            function () {
              return (Bf =
                n._emscripten_bind_btKinematicCharacterController_setUpInterpolate_1 =
                  n.asm.Nr).apply(null, arguments)
            }),
        Tf = (n._emscripten_bind_btKinematicCharacterController_updateAction_2 =
          function () {
            return (Tf =
              n._emscripten_bind_btKinematicCharacterController_updateAction_2 =
                n.asm.Or).apply(null, arguments)
          }),
        Af = (n._emscripten_bind_btKinematicCharacterController___destroy___0 =
          function () {
            return (Af =
              n._emscripten_bind_btKinematicCharacterController___destroy___0 =
                n.asm.Pr).apply(null, arguments)
          }),
        kf = (n._emscripten_bind_btSoftBodyArray_size_0 = function () {
          return (kf = n._emscripten_bind_btSoftBodyArray_size_0 =
            n.asm.Qr).apply(null, arguments)
        }),
        xf = (n._emscripten_bind_btSoftBodyArray_at_1 = function () {
          return (xf = n._emscripten_bind_btSoftBodyArray_at_1 =
            n.asm.Rr).apply(null, arguments)
        }),
        Lf = (n._emscripten_bind_btSoftBodyArray___destroy___0 = function () {
          return (Lf = n._emscripten_bind_btSoftBodyArray___destroy___0 =
            n.asm.Sr).apply(null, arguments)
        }),
        wf = (n._emscripten_bind_btFaceArray_size_0 = function () {
          return (wf = n._emscripten_bind_btFaceArray_size_0 = n.asm.Tr).apply(
            null,
            arguments,
          )
        }),
        Ff = (n._emscripten_bind_btFaceArray_at_1 = function () {
          return (Ff = n._emscripten_bind_btFaceArray_at_1 = n.asm.Ur).apply(
            null,
            arguments,
          )
        }),
        Mf = (n._emscripten_bind_btFaceArray___destroy___0 = function () {
          return (Mf = n._emscripten_bind_btFaceArray___destroy___0 =
            n.asm.Vr).apply(null, arguments)
        }),
        Hf = (n._emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2 =
          function () {
            return (Hf =
              n._emscripten_bind_btStaticPlaneShape_btStaticPlaneShape_2 =
                n.asm.Wr).apply(null, arguments)
          }),
        Gf = (n._emscripten_bind_btStaticPlaneShape_setLocalScaling_1 =
          function () {
            return (Gf =
              n._emscripten_bind_btStaticPlaneShape_setLocalScaling_1 =
                n.asm.Xr).apply(null, arguments)
          }),
        Vf = (n._emscripten_bind_btStaticPlaneShape_getLocalScaling_0 =
          function () {
            return (Vf =
              n._emscripten_bind_btStaticPlaneShape_getLocalScaling_0 =
                n.asm.Yr).apply(null, arguments)
          }),
        zf = (n._emscripten_bind_btStaticPlaneShape_calculateLocalInertia_2 =
          function () {
            return (zf =
              n._emscripten_bind_btStaticPlaneShape_calculateLocalInertia_2 =
                n.asm.Zr).apply(null, arguments)
          }),
        Nf = (n._emscripten_bind_btStaticPlaneShape___destroy___0 =
          function () {
            return (Nf = n._emscripten_bind_btStaticPlaneShape___destroy___0 =
              n.asm._r).apply(null, arguments)
          }),
        Uf =
          (n._emscripten_bind_btOverlappingPairCache_setInternalGhostPairCallback_1 =
            function () {
              return (Uf =
                n._emscripten_bind_btOverlappingPairCache_setInternalGhostPairCallback_1 =
                  n.asm.$r).apply(null, arguments)
            }),
        Ef =
          (n._emscripten_bind_btOverlappingPairCache_getNumOverlappingPairs_0 =
            function () {
              return (Ef =
                n._emscripten_bind_btOverlappingPairCache_getNumOverlappingPairs_0 =
                  n.asm.as).apply(null, arguments)
            }),
        qf = (n._emscripten_bind_btOverlappingPairCache___destroy___0 =
          function () {
            return (qf =
              n._emscripten_bind_btOverlappingPairCache___destroy___0 =
                n.asm.bs).apply(null, arguments)
          }),
        Kf = (n._emscripten_bind_btIndexedMesh_get_m_numTriangles_0 =
          function () {
            return (Kf = n._emscripten_bind_btIndexedMesh_get_m_numTriangles_0 =
              n.asm.cs).apply(null, arguments)
          }),
        Qf = (n._emscripten_bind_btIndexedMesh_set_m_numTriangles_1 =
          function () {
            return (Qf = n._emscripten_bind_btIndexedMesh_set_m_numTriangles_1 =
              n.asm.ds).apply(null, arguments)
          }),
        Xf = (n._emscripten_bind_btIndexedMesh___destroy___0 = function () {
          return (Xf = n._emscripten_bind_btIndexedMesh___destroy___0 =
            n.asm.es).apply(null, arguments)
        }),
        Zf =
          (n._emscripten_bind_btSoftRigidDynamicsWorld_btSoftRigidDynamicsWorld_5 =
            function () {
              return (Zf =
                n._emscripten_bind_btSoftRigidDynamicsWorld_btSoftRigidDynamicsWorld_5 =
                  n.asm.fs).apply(null, arguments)
            }),
        Yf = (n._emscripten_bind_btSoftRigidDynamicsWorld_addSoftBody_3 =
          function () {
            return (Yf =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addSoftBody_3 =
                n.asm.gs).apply(null, arguments)
          }),
        Jf = (n._emscripten_bind_btSoftRigidDynamicsWorld_removeSoftBody_1 =
          function () {
            return (Jf =
              n._emscripten_bind_btSoftRigidDynamicsWorld_removeSoftBody_1 =
                n.asm.hs).apply(null, arguments)
          }),
        $f =
          (n._emscripten_bind_btSoftRigidDynamicsWorld_removeCollisionObject_1 =
            function () {
              return ($f =
                n._emscripten_bind_btSoftRigidDynamicsWorld_removeCollisionObject_1 =
                  n.asm.is).apply(null, arguments)
            }),
        tg = (n._emscripten_bind_btSoftRigidDynamicsWorld_getWorldInfo_0 =
          function () {
            return (tg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getWorldInfo_0 =
                n.asm.js).apply(null, arguments)
          }),
        eg = (n._emscripten_bind_btSoftRigidDynamicsWorld_getSoftBodyArray_0 =
          function () {
            return (eg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getSoftBodyArray_0 =
                n.asm.ks).apply(null, arguments)
          }),
        ng = (n._emscripten_bind_btSoftRigidDynamicsWorld_getDispatcher_0 =
          function () {
            return (ng =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getDispatcher_0 =
                n.asm.ls).apply(null, arguments)
          }),
        og = (n._emscripten_bind_btSoftRigidDynamicsWorld_rayTest_3 =
          function () {
            return (og = n._emscripten_bind_btSoftRigidDynamicsWorld_rayTest_3 =
              n.asm.ms).apply(null, arguments)
          }),
        _g = (n._emscripten_bind_btSoftRigidDynamicsWorld_getPairCache_0 =
          function () {
            return (_g =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getPairCache_0 =
                n.asm.ns).apply(null, arguments)
          }),
        ig = (n._emscripten_bind_btSoftRigidDynamicsWorld_getDispatchInfo_0 =
          function () {
            return (ig =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getDispatchInfo_0 =
                n.asm.os).apply(null, arguments)
          }),
        rg = (n._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_1 =
          function () {
            return (rg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_1 =
                n.asm.ps).apply(null, arguments)
          }),
        pg = (n._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_2 =
          function () {
            return (pg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_2 =
                n.asm.qs).apply(null, arguments)
          }),
        sg = (n._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_3 =
          function () {
            return (sg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addCollisionObject_3 =
                n.asm.rs).apply(null, arguments)
          }),
        cg = (n._emscripten_bind_btSoftRigidDynamicsWorld_getBroadphase_0 =
          function () {
            return (cg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getBroadphase_0 =
                n.asm.ss).apply(null, arguments)
          }),
        ag = (n._emscripten_bind_btSoftRigidDynamicsWorld_convexSweepTest_5 =
          function () {
            return (ag =
              n._emscripten_bind_btSoftRigidDynamicsWorld_convexSweepTest_5 =
                n.asm.ts).apply(null, arguments)
          }),
        yg = (n._emscripten_bind_btSoftRigidDynamicsWorld_contactPairTest_3 =
          function () {
            return (yg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_contactPairTest_3 =
                n.asm.us).apply(null, arguments)
          }),
        lg = (n._emscripten_bind_btSoftRigidDynamicsWorld_contactTest_2 =
          function () {
            return (lg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_contactTest_2 =
                n.asm.vs).apply(null, arguments)
          }),
        ug = (n._emscripten_bind_btSoftRigidDynamicsWorld_updateSingleAabb_1 =
          function () {
            return (ug =
              n._emscripten_bind_btSoftRigidDynamicsWorld_updateSingleAabb_1 =
                n.asm.ws).apply(null, arguments)
          }),
        bg = (n._emscripten_bind_btSoftRigidDynamicsWorld_setDebugDrawer_1 =
          function () {
            return (bg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_setDebugDrawer_1 =
                n.asm.xs).apply(null, arguments)
          }),
        mg = (n._emscripten_bind_btSoftRigidDynamicsWorld_getDebugDrawer_0 =
          function () {
            return (mg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getDebugDrawer_0 =
                n.asm.ys).apply(null, arguments)
          }),
        dg = (n._emscripten_bind_btSoftRigidDynamicsWorld_debugDrawWorld_0 =
          function () {
            return (dg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_debugDrawWorld_0 =
                n.asm.zs).apply(null, arguments)
          }),
        hg = (n._emscripten_bind_btSoftRigidDynamicsWorld_debugDrawObject_3 =
          function () {
            return (hg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_debugDrawObject_3 =
                n.asm.As).apply(null, arguments)
          }),
        fg = (n._emscripten_bind_btSoftRigidDynamicsWorld_setGravity_1 =
          function () {
            return (fg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_setGravity_1 =
                n.asm.Bs).apply(null, arguments)
          }),
        gg = (n._emscripten_bind_btSoftRigidDynamicsWorld_getGravity_0 =
          function () {
            return (gg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getGravity_0 =
                n.asm.Cs).apply(null, arguments)
          }),
        Cg = (n._emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_1 =
          function () {
            return (Cg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_1 =
                n.asm.Ds).apply(null, arguments)
          }),
        jg = (n._emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_3 =
          function () {
            return (jg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_3 =
                n.asm.Es).apply(null, arguments)
          }),
        Sg = (n._emscripten_bind_btSoftRigidDynamicsWorld_removeRigidBody_1 =
          function () {
            return (Sg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_removeRigidBody_1 =
                n.asm.Fs).apply(null, arguments)
          }),
        vg = (n._emscripten_bind_btSoftRigidDynamicsWorld_addConstraint_1 =
          function () {
            return (vg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addConstraint_1 =
                n.asm.Gs).apply(null, arguments)
          }),
        Rg = (n._emscripten_bind_btSoftRigidDynamicsWorld_addConstraint_2 =
          function () {
            return (Rg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addConstraint_2 =
                n.asm.Hs).apply(null, arguments)
          }),
        Dg = (n._emscripten_bind_btSoftRigidDynamicsWorld_removeConstraint_1 =
          function () {
            return (Dg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_removeConstraint_1 =
                n.asm.Is).apply(null, arguments)
          }),
        Ig = (n._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_1 =
          function () {
            return (Ig =
              n._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_1 =
                n.asm.Js).apply(null, arguments)
          }),
        Pg = (n._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_2 =
          function () {
            return (Pg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_2 =
                n.asm.Ks).apply(null, arguments)
          }),
        Og = (n._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_3 =
          function () {
            return (Og =
              n._emscripten_bind_btSoftRigidDynamicsWorld_stepSimulation_3 =
                n.asm.Ls).apply(null, arguments)
          }),
        Wg =
          (n._emscripten_bind_btSoftRigidDynamicsWorld_setContactAddedCallback_1 =
            function () {
              return (Wg =
                n._emscripten_bind_btSoftRigidDynamicsWorld_setContactAddedCallback_1 =
                  n.asm.Ms).apply(null, arguments)
            }),
        Bg =
          (n._emscripten_bind_btSoftRigidDynamicsWorld_setContactProcessedCallback_1 =
            function () {
              return (Bg =
                n._emscripten_bind_btSoftRigidDynamicsWorld_setContactProcessedCallback_1 =
                  n.asm.Ns).apply(null, arguments)
            }),
        Tg =
          (n._emscripten_bind_btSoftRigidDynamicsWorld_setContactDestroyedCallback_1 =
            function () {
              return (Tg =
                n._emscripten_bind_btSoftRigidDynamicsWorld_setContactDestroyedCallback_1 =
                  n.asm.Os).apply(null, arguments)
            }),
        Ag = (n._emscripten_bind_btSoftRigidDynamicsWorld_addAction_1 =
          function () {
            return (Ag =
              n._emscripten_bind_btSoftRigidDynamicsWorld_addAction_1 =
                n.asm.Ps).apply(null, arguments)
          }),
        kg = (n._emscripten_bind_btSoftRigidDynamicsWorld_removeAction_1 =
          function () {
            return (kg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_removeAction_1 =
                n.asm.Qs).apply(null, arguments)
          }),
        xg = (n._emscripten_bind_btSoftRigidDynamicsWorld_getSolverInfo_0 =
          function () {
            return (xg =
              n._emscripten_bind_btSoftRigidDynamicsWorld_getSolverInfo_0 =
                n.asm.Rs).apply(null, arguments)
          }),
        Lg =
          (n._emscripten_bind_btSoftRigidDynamicsWorld_setInternalTickCallback_1 =
            function () {
              return (Lg =
                n._emscripten_bind_btSoftRigidDynamicsWorld_setInternalTickCallback_1 =
                  n.asm.Ss).apply(null, arguments)
            }),
        wg =
          (n._emscripten_bind_btSoftRigidDynamicsWorld_setInternalTickCallback_2 =
            function () {
              return (wg =
                n._emscripten_bind_btSoftRigidDynamicsWorld_setInternalTickCallback_2 =
                  n.asm.Ts).apply(null, arguments)
            }),
        Fg =
          (n._emscripten_bind_btSoftRigidDynamicsWorld_setInternalTickCallback_3 =
            function () {
              return (Fg =
                n._emscripten_bind_btSoftRigidDynamicsWorld_setInternalTickCallback_3 =
                  n.asm.Us).apply(null, arguments)
            }),
        Mg = (n._emscripten_bind_btSoftRigidDynamicsWorld___destroy___0 =
          function () {
            return (Mg =
              n._emscripten_bind_btSoftRigidDynamicsWorld___destroy___0 =
                n.asm.Vs).apply(null, arguments)
          }),
        Hg = (n._emscripten_bind_btFixedConstraint_btFixedConstraint_4 =
          function () {
            return (Hg =
              n._emscripten_bind_btFixedConstraint_btFixedConstraint_4 =
                n.asm.Ws).apply(null, arguments)
          }),
        Gg = (n._emscripten_bind_btFixedConstraint_enableFeedback_1 =
          function () {
            return (Gg = n._emscripten_bind_btFixedConstraint_enableFeedback_1 =
              n.asm.Xs).apply(null, arguments)
          }),
        Vg =
          (n._emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0 =
            function () {
              return (Vg =
                n._emscripten_bind_btFixedConstraint_getBreakingImpulseThreshold_0 =
                  n.asm.Ys).apply(null, arguments)
            }),
        zg =
          (n._emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1 =
            function () {
              return (zg =
                n._emscripten_bind_btFixedConstraint_setBreakingImpulseThreshold_1 =
                  n.asm.Zs).apply(null, arguments)
            }),
        Ng = (n._emscripten_bind_btFixedConstraint_getParam_2 = function () {
          return (Ng = n._emscripten_bind_btFixedConstraint_getParam_2 =
            n.asm._s).apply(null, arguments)
        }),
        Ug = (n._emscripten_bind_btFixedConstraint_setParam_3 = function () {
          return (Ug = n._emscripten_bind_btFixedConstraint_setParam_3 =
            n.asm.$s).apply(null, arguments)
        }),
        Eg = (n._emscripten_bind_btFixedConstraint___destroy___0 = function () {
          return (Eg = n._emscripten_bind_btFixedConstraint___destroy___0 =
            n.asm.at).apply(null, arguments)
        }),
        qg = (n._emscripten_bind_btTransform_btTransform_0 = function () {
          return (qg = n._emscripten_bind_btTransform_btTransform_0 =
            n.asm.bt).apply(null, arguments)
        }),
        Kg = (n._emscripten_bind_btTransform_btTransform_2 = function () {
          return (Kg = n._emscripten_bind_btTransform_btTransform_2 =
            n.asm.ct).apply(null, arguments)
        }),
        Qg = (n._emscripten_bind_btTransform_setIdentity_0 = function () {
          return (Qg = n._emscripten_bind_btTransform_setIdentity_0 =
            n.asm.dt).apply(null, arguments)
        }),
        Xg = (n._emscripten_bind_btTransform_setOrigin_1 = function () {
          return (Xg = n._emscripten_bind_btTransform_setOrigin_1 =
            n.asm.et).apply(null, arguments)
        }),
        Zg = (n._emscripten_bind_btTransform_setRotation_1 = function () {
          return (Zg = n._emscripten_bind_btTransform_setRotation_1 =
            n.asm.ft).apply(null, arguments)
        }),
        Yg = (n._emscripten_bind_btTransform_getOrigin_0 = function () {
          return (Yg = n._emscripten_bind_btTransform_getOrigin_0 =
            n.asm.gt).apply(null, arguments)
        }),
        Jg = (n._emscripten_bind_btTransform_getRotation_0 = function () {
          return (Jg = n._emscripten_bind_btTransform_getRotation_0 =
            n.asm.ht).apply(null, arguments)
        }),
        $g = (n._emscripten_bind_btTransform_getBasis_0 = function () {
          return ($g = n._emscripten_bind_btTransform_getBasis_0 =
            n.asm.it).apply(null, arguments)
        }),
        tC = (n._emscripten_bind_btTransform_setFromOpenGLMatrix_1 =
          function () {
            return (tC = n._emscripten_bind_btTransform_setFromOpenGLMatrix_1 =
              n.asm.jt).apply(null, arguments)
          }),
        eC = (n._emscripten_bind_btTransform_inverse_0 = function () {
          return (eC = n._emscripten_bind_btTransform_inverse_0 =
            n.asm.kt).apply(null, arguments)
        }),
        nC = (n._emscripten_bind_btTransform_op_mul_1 = function () {
          return (nC = n._emscripten_bind_btTransform_op_mul_1 =
            n.asm.lt).apply(null, arguments)
        }),
        oC = (n._emscripten_bind_btTransform___destroy___0 = function () {
          return (oC = n._emscripten_bind_btTransform___destroy___0 =
            n.asm.mt).apply(null, arguments)
        }),
        _C =
          (n._emscripten_bind_ClosestRayResultCallback_ClosestRayResultCallback_2 =
            function () {
              return (_C =
                n._emscripten_bind_ClosestRayResultCallback_ClosestRayResultCallback_2 =
                  n.asm.nt).apply(null, arguments)
            }),
        iC = (n._emscripten_bind_ClosestRayResultCallback_hasHit_0 =
          function () {
            return (iC = n._emscripten_bind_ClosestRayResultCallback_hasHit_0 =
              n.asm.ot).apply(null, arguments)
          }),
        rC = (n._emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0 =
          function () {
            return (rC =
              n._emscripten_bind_ClosestRayResultCallback_get_m_rayFromWorld_0 =
                n.asm.pt).apply(null, arguments)
          }),
        pC = (n._emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1 =
          function () {
            return (pC =
              n._emscripten_bind_ClosestRayResultCallback_set_m_rayFromWorld_1 =
                n.asm.qt).apply(null, arguments)
          }),
        sC = (n._emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0 =
          function () {
            return (sC =
              n._emscripten_bind_ClosestRayResultCallback_get_m_rayToWorld_0 =
                n.asm.rt).apply(null, arguments)
          }),
        cC = (n._emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1 =
          function () {
            return (cC =
              n._emscripten_bind_ClosestRayResultCallback_set_m_rayToWorld_1 =
                n.asm.st).apply(null, arguments)
          }),
        aC =
          (n._emscripten_bind_ClosestRayResultCallback_get_m_hitNormalWorld_0 =
            function () {
              return (aC =
                n._emscripten_bind_ClosestRayResultCallback_get_m_hitNormalWorld_0 =
                  n.asm.tt).apply(null, arguments)
            }),
        yC =
          (n._emscripten_bind_ClosestRayResultCallback_set_m_hitNormalWorld_1 =
            function () {
              return (yC =
                n._emscripten_bind_ClosestRayResultCallback_set_m_hitNormalWorld_1 =
                  n.asm.ut).apply(null, arguments)
            }),
        lC =
          (n._emscripten_bind_ClosestRayResultCallback_get_m_hitPointWorld_0 =
            function () {
              return (lC =
                n._emscripten_bind_ClosestRayResultCallback_get_m_hitPointWorld_0 =
                  n.asm.vt).apply(null, arguments)
            }),
        uC =
          (n._emscripten_bind_ClosestRayResultCallback_set_m_hitPointWorld_1 =
            function () {
              return (uC =
                n._emscripten_bind_ClosestRayResultCallback_set_m_hitPointWorld_1 =
                  n.asm.wt).apply(null, arguments)
            }),
        bC =
          (n._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterGroup_0 =
            function () {
              return (bC =
                n._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterGroup_0 =
                  n.asm.xt).apply(null, arguments)
            }),
        mC =
          (n._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterGroup_1 =
            function () {
              return (mC =
                n._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterGroup_1 =
                  n.asm.yt).apply(null, arguments)
            }),
        dC =
          (n._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterMask_0 =
            function () {
              return (dC =
                n._emscripten_bind_ClosestRayResultCallback_get_m_collisionFilterMask_0 =
                  n.asm.zt).apply(null, arguments)
            }),
        hC =
          (n._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterMask_1 =
            function () {
              return (hC =
                n._emscripten_bind_ClosestRayResultCallback_set_m_collisionFilterMask_1 =
                  n.asm.At).apply(null, arguments)
            }),
        fC =
          (n._emscripten_bind_ClosestRayResultCallback_get_m_closestHitFraction_0 =
            function () {
              return (fC =
                n._emscripten_bind_ClosestRayResultCallback_get_m_closestHitFraction_0 =
                  n.asm.Bt).apply(null, arguments)
            }),
        gC =
          (n._emscripten_bind_ClosestRayResultCallback_set_m_closestHitFraction_1 =
            function () {
              return (gC =
                n._emscripten_bind_ClosestRayResultCallback_set_m_closestHitFraction_1 =
                  n.asm.Ct).apply(null, arguments)
            }),
        CC =
          (n._emscripten_bind_ClosestRayResultCallback_get_m_collisionObject_0 =
            function () {
              return (CC =
                n._emscripten_bind_ClosestRayResultCallback_get_m_collisionObject_0 =
                  n.asm.Dt).apply(null, arguments)
            }),
        jC =
          (n._emscripten_bind_ClosestRayResultCallback_set_m_collisionObject_1 =
            function () {
              return (jC =
                n._emscripten_bind_ClosestRayResultCallback_set_m_collisionObject_1 =
                  n.asm.Et).apply(null, arguments)
            }),
        SC = (n._emscripten_bind_ClosestRayResultCallback___destroy___0 =
          function () {
            return (SC =
              n._emscripten_bind_ClosestRayResultCallback___destroy___0 =
                n.asm.Ft).apply(null, arguments)
          }),
        vC =
          (n._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration_btSoftBodyRigidBodyCollisionConfiguration_0 =
            function () {
              return (vC =
                n._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration_btSoftBodyRigidBodyCollisionConfiguration_0 =
                  n.asm.Gt).apply(null, arguments)
            }),
        RC =
          (n._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration_btSoftBodyRigidBodyCollisionConfiguration_1 =
            function () {
              return (RC =
                n._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration_btSoftBodyRigidBodyCollisionConfiguration_1 =
                  n.asm.Ht).apply(null, arguments)
            }),
        DC =
          (n._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration___destroy___0 =
            function () {
              return (DC =
                n._emscripten_bind_btSoftBodyRigidBodyCollisionConfiguration___destroy___0 =
                  n.asm.It).apply(null, arguments)
            }),
        IC =
          (n._emscripten_bind_ConcreteContactResultCallback_ConcreteContactResultCallback_0 =
            function () {
              return (IC =
                n._emscripten_bind_ConcreteContactResultCallback_ConcreteContactResultCallback_0 =
                  n.asm.Jt).apply(null, arguments)
            }),
        PC =
          (n._emscripten_bind_ConcreteContactResultCallback_addSingleResult_7 =
            function () {
              return (PC =
                n._emscripten_bind_ConcreteContactResultCallback_addSingleResult_7 =
                  n.asm.Kt).apply(null, arguments)
            }),
        OC = (n._emscripten_bind_ConcreteContactResultCallback___destroy___0 =
          function () {
            return (OC =
              n._emscripten_bind_ConcreteContactResultCallback___destroy___0 =
                n.asm.Lt).apply(null, arguments)
          }),
        WC =
          (n._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2 =
            function () {
              return (WC =
                n._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_2 =
                  n.asm.Mt).apply(null, arguments)
            }),
        BC =
          (n._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3 =
            function () {
              return (BC =
                n._emscripten_bind_btBvhTriangleMeshShape_btBvhTriangleMeshShape_3 =
                  n.asm.Nt).apply(null, arguments)
            }),
        TC = (n._emscripten_bind_btBvhTriangleMeshShape_setLocalScaling_1 =
          function () {
            return (TC =
              n._emscripten_bind_btBvhTriangleMeshShape_setLocalScaling_1 =
                n.asm.Ot).apply(null, arguments)
          }),
        AC = (n._emscripten_bind_btBvhTriangleMeshShape_getLocalScaling_0 =
          function () {
            return (AC =
              n._emscripten_bind_btBvhTriangleMeshShape_getLocalScaling_0 =
                n.asm.Pt).apply(null, arguments)
          }),
        kC =
          (n._emscripten_bind_btBvhTriangleMeshShape_calculateLocalInertia_2 =
            function () {
              return (kC =
                n._emscripten_bind_btBvhTriangleMeshShape_calculateLocalInertia_2 =
                  n.asm.Qt).apply(null, arguments)
            }),
        xC = (n._emscripten_bind_btBvhTriangleMeshShape___destroy___0 =
          function () {
            return (xC =
              n._emscripten_bind_btBvhTriangleMeshShape___destroy___0 =
                n.asm.Rt).apply(null, arguments)
          }),
        LC = (n._emscripten_bind_btConstCollisionObjectArray_size_0 =
          function () {
            return (LC = n._emscripten_bind_btConstCollisionObjectArray_size_0 =
              n.asm.St).apply(null, arguments)
          }),
        wC = (n._emscripten_bind_btConstCollisionObjectArray_at_1 =
          function () {
            return (wC = n._emscripten_bind_btConstCollisionObjectArray_at_1 =
              n.asm.Tt).apply(null, arguments)
          }),
        FC = (n._emscripten_bind_btConstCollisionObjectArray___destroy___0 =
          function () {
            return (FC =
              n._emscripten_bind_btConstCollisionObjectArray___destroy___0 =
                n.asm.Ut).apply(null, arguments)
          }),
        MC = (n._emscripten_bind_btSliderConstraint_btSliderConstraint_3 =
          function () {
            return (MC =
              n._emscripten_bind_btSliderConstraint_btSliderConstraint_3 =
                n.asm.Vt).apply(null, arguments)
          }),
        HC = (n._emscripten_bind_btSliderConstraint_btSliderConstraint_5 =
          function () {
            return (HC =
              n._emscripten_bind_btSliderConstraint_btSliderConstraint_5 =
                n.asm.Wt).apply(null, arguments)
          }),
        GC = (n._emscripten_bind_btSliderConstraint_setLowerLinLimit_1 =
          function () {
            return (GC =
              n._emscripten_bind_btSliderConstraint_setLowerLinLimit_1 =
                n.asm.Xt).apply(null, arguments)
          }),
        VC = (n._emscripten_bind_btSliderConstraint_setUpperLinLimit_1 =
          function () {
            return (VC =
              n._emscripten_bind_btSliderConstraint_setUpperLinLimit_1 =
                n.asm.Yt).apply(null, arguments)
          }),
        zC = (n._emscripten_bind_btSliderConstraint_setLowerAngLimit_1 =
          function () {
            return (zC =
              n._emscripten_bind_btSliderConstraint_setLowerAngLimit_1 =
                n.asm.Zt).apply(null, arguments)
          }),
        NC = (n._emscripten_bind_btSliderConstraint_setUpperAngLimit_1 =
          function () {
            return (NC =
              n._emscripten_bind_btSliderConstraint_setUpperAngLimit_1 =
                n.asm._t).apply(null, arguments)
          }),
        UC = (n._emscripten_bind_btSliderConstraint_enableFeedback_1 =
          function () {
            return (UC =
              n._emscripten_bind_btSliderConstraint_enableFeedback_1 =
                n.asm.$t).apply(null, arguments)
          }),
        EC =
          (n._emscripten_bind_btSliderConstraint_getBreakingImpulseThreshold_0 =
            function () {
              return (EC =
                n._emscripten_bind_btSliderConstraint_getBreakingImpulseThreshold_0 =
                  n.asm.au).apply(null, arguments)
            }),
        qC =
          (n._emscripten_bind_btSliderConstraint_setBreakingImpulseThreshold_1 =
            function () {
              return (qC =
                n._emscripten_bind_btSliderConstraint_setBreakingImpulseThreshold_1 =
                  n.asm.bu).apply(null, arguments)
            }),
        KC = (n._emscripten_bind_btSliderConstraint_getParam_2 = function () {
          return (KC = n._emscripten_bind_btSliderConstraint_getParam_2 =
            n.asm.cu).apply(null, arguments)
        }),
        QC = (n._emscripten_bind_btSliderConstraint_setParam_3 = function () {
          return (QC = n._emscripten_bind_btSliderConstraint_setParam_3 =
            n.asm.du).apply(null, arguments)
        }),
        XC = (n._emscripten_bind_btSliderConstraint___destroy___0 =
          function () {
            return (XC = n._emscripten_bind_btSliderConstraint___destroy___0 =
              n.asm.eu).apply(null, arguments)
          }),
        ZC =
          (n._emscripten_bind_btPairCachingGhostObject_btPairCachingGhostObject_0 =
            function () {
              return (ZC =
                n._emscripten_bind_btPairCachingGhostObject_btPairCachingGhostObject_0 =
                  n.asm.fu).apply(null, arguments)
            }),
        YC =
          (n._emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_2 =
            function () {
              return (YC =
                n._emscripten_bind_btPairCachingGhostObject_setAnisotropicFriction_2 =
                  n.asm.gu).apply(null, arguments)
            }),
        JC = (n._emscripten_bind_btPairCachingGhostObject_getCollisionShape_0 =
          function () {
            return (JC =
              n._emscripten_bind_btPairCachingGhostObject_getCollisionShape_0 =
                n.asm.hu).apply(null, arguments)
          }),
        $C =
          (n._emscripten_bind_btPairCachingGhostObject_setContactProcessingThreshold_1 =
            function () {
              return ($C =
                n._emscripten_bind_btPairCachingGhostObject_setContactProcessingThreshold_1 =
                  n.asm.iu).apply(null, arguments)
            }),
        tj = (n._emscripten_bind_btPairCachingGhostObject_setActivationState_1 =
          function () {
            return (tj =
              n._emscripten_bind_btPairCachingGhostObject_setActivationState_1 =
                n.asm.ju).apply(null, arguments)
          }),
        ej =
          (n._emscripten_bind_btPairCachingGhostObject_forceActivationState_1 =
            function () {
              return (ej =
                n._emscripten_bind_btPairCachingGhostObject_forceActivationState_1 =
                  n.asm.ku).apply(null, arguments)
            }),
        nj = (n._emscripten_bind_btPairCachingGhostObject_activate_0 =
          function () {
            return (nj =
              n._emscripten_bind_btPairCachingGhostObject_activate_0 =
                n.asm.lu).apply(null, arguments)
          }),
        oj = (n._emscripten_bind_btPairCachingGhostObject_activate_1 =
          function () {
            return (oj =
              n._emscripten_bind_btPairCachingGhostObject_activate_1 =
                n.asm.mu).apply(null, arguments)
          }),
        _j = (n._emscripten_bind_btPairCachingGhostObject_isActive_0 =
          function () {
            return (_j =
              n._emscripten_bind_btPairCachingGhostObject_isActive_0 =
                n.asm.nu).apply(null, arguments)
          }),
        ij = (n._emscripten_bind_btPairCachingGhostObject_isKinematicObject_0 =
          function () {
            return (ij =
              n._emscripten_bind_btPairCachingGhostObject_isKinematicObject_0 =
                n.asm.ou).apply(null, arguments)
          }),
        rj = (n._emscripten_bind_btPairCachingGhostObject_isStaticObject_0 =
          function () {
            return (rj =
              n._emscripten_bind_btPairCachingGhostObject_isStaticObject_0 =
                n.asm.pu).apply(null, arguments)
          }),
        pj =
          (n._emscripten_bind_btPairCachingGhostObject_isStaticOrKinematicObject_0 =
            function () {
              return (pj =
                n._emscripten_bind_btPairCachingGhostObject_isStaticOrKinematicObject_0 =
                  n.asm.qu).apply(null, arguments)
            }),
        sj = (n._emscripten_bind_btPairCachingGhostObject_getRestitution_0 =
          function () {
            return (sj =
              n._emscripten_bind_btPairCachingGhostObject_getRestitution_0 =
                n.asm.ru).apply(null, arguments)
          }),
        cj = (n._emscripten_bind_btPairCachingGhostObject_getFriction_0 =
          function () {
            return (cj =
              n._emscripten_bind_btPairCachingGhostObject_getFriction_0 =
                n.asm.su).apply(null, arguments)
          }),
        aj = (n._emscripten_bind_btPairCachingGhostObject_getRollingFriction_0 =
          function () {
            return (aj =
              n._emscripten_bind_btPairCachingGhostObject_getRollingFriction_0 =
                n.asm.tu).apply(null, arguments)
          }),
        yj = (n._emscripten_bind_btPairCachingGhostObject_setRestitution_1 =
          function () {
            return (yj =
              n._emscripten_bind_btPairCachingGhostObject_setRestitution_1 =
                n.asm.uu).apply(null, arguments)
          }),
        lj = (n._emscripten_bind_btPairCachingGhostObject_setFriction_1 =
          function () {
            return (lj =
              n._emscripten_bind_btPairCachingGhostObject_setFriction_1 =
                n.asm.vu).apply(null, arguments)
          }),
        uj = (n._emscripten_bind_btPairCachingGhostObject_setRollingFriction_1 =
          function () {
            return (uj =
              n._emscripten_bind_btPairCachingGhostObject_setRollingFriction_1 =
                n.asm.wu).apply(null, arguments)
          }),
        bj = (n._emscripten_bind_btPairCachingGhostObject_getWorldTransform_0 =
          function () {
            return (bj =
              n._emscripten_bind_btPairCachingGhostObject_getWorldTransform_0 =
                n.asm.xu).apply(null, arguments)
          }),
        mj = (n._emscripten_bind_btPairCachingGhostObject_getCollisionFlags_0 =
          function () {
            return (mj =
              n._emscripten_bind_btPairCachingGhostObject_getCollisionFlags_0 =
                n.asm.yu).apply(null, arguments)
          }),
        dj = (n._emscripten_bind_btPairCachingGhostObject_setCollisionFlags_1 =
          function () {
            return (dj =
              n._emscripten_bind_btPairCachingGhostObject_setCollisionFlags_1 =
                n.asm.zu).apply(null, arguments)
          }),
        hj = (n._emscripten_bind_btPairCachingGhostObject_setWorldTransform_1 =
          function () {
            return (hj =
              n._emscripten_bind_btPairCachingGhostObject_setWorldTransform_1 =
                n.asm.Au).apply(null, arguments)
          }),
        fj = (n._emscripten_bind_btPairCachingGhostObject_setCollisionShape_1 =
          function () {
            return (fj =
              n._emscripten_bind_btPairCachingGhostObject_setCollisionShape_1 =
                n.asm.Bu).apply(null, arguments)
          }),
        gj =
          (n._emscripten_bind_btPairCachingGhostObject_setCcdMotionThreshold_1 =
            function () {
              return (gj =
                n._emscripten_bind_btPairCachingGhostObject_setCcdMotionThreshold_1 =
                  n.asm.Cu).apply(null, arguments)
            }),
        Cj =
          (n._emscripten_bind_btPairCachingGhostObject_setCcdSweptSphereRadius_1 =
            function () {
              return (Cj =
                n._emscripten_bind_btPairCachingGhostObject_setCcdSweptSphereRadius_1 =
                  n.asm.Du).apply(null, arguments)
            }),
        jj = (n._emscripten_bind_btPairCachingGhostObject_getUserIndex_0 =
          function () {
            return (jj =
              n._emscripten_bind_btPairCachingGhostObject_getUserIndex_0 =
                n.asm.Eu).apply(null, arguments)
          }),
        Sj = (n._emscripten_bind_btPairCachingGhostObject_setUserIndex_1 =
          function () {
            return (Sj =
              n._emscripten_bind_btPairCachingGhostObject_setUserIndex_1 =
                n.asm.Fu).apply(null, arguments)
          }),
        vj = (n._emscripten_bind_btPairCachingGhostObject_getUserPointer_0 =
          function () {
            return (vj =
              n._emscripten_bind_btPairCachingGhostObject_getUserPointer_0 =
                n.asm.Gu).apply(null, arguments)
          }),
        Rj = (n._emscripten_bind_btPairCachingGhostObject_setUserPointer_1 =
          function () {
            return (Rj =
              n._emscripten_bind_btPairCachingGhostObject_setUserPointer_1 =
                n.asm.Hu).apply(null, arguments)
          }),
        Dj =
          (n._emscripten_bind_btPairCachingGhostObject_getBroadphaseHandle_0 =
            function () {
              return (Dj =
                n._emscripten_bind_btPairCachingGhostObject_getBroadphaseHandle_0 =
                  n.asm.Iu).apply(null, arguments)
            }),
        Ij =
          (n._emscripten_bind_btPairCachingGhostObject_getNumOverlappingObjects_0 =
            function () {
              return (Ij =
                n._emscripten_bind_btPairCachingGhostObject_getNumOverlappingObjects_0 =
                  n.asm.Ju).apply(null, arguments)
            }),
        Pj =
          (n._emscripten_bind_btPairCachingGhostObject_getOverlappingObject_1 =
            function () {
              return (Pj =
                n._emscripten_bind_btPairCachingGhostObject_getOverlappingObject_1 =
                  n.asm.Ku).apply(null, arguments)
            }),
        Oj = (n._emscripten_bind_btPairCachingGhostObject___destroy___0 =
          function () {
            return (Oj =
              n._emscripten_bind_btPairCachingGhostObject___destroy___0 =
                n.asm.Lu).apply(null, arguments)
          }),
        Wj = (n._emscripten_bind_btManifoldPoint_getPositionWorldOnA_0 =
          function () {
            return (Wj =
              n._emscripten_bind_btManifoldPoint_getPositionWorldOnA_0 =
                n.asm.Mu).apply(null, arguments)
          }),
        Bj = (n._emscripten_bind_btManifoldPoint_getPositionWorldOnB_0 =
          function () {
            return (Bj =
              n._emscripten_bind_btManifoldPoint_getPositionWorldOnB_0 =
                n.asm.Nu).apply(null, arguments)
          }),
        Tj = (n._emscripten_bind_btManifoldPoint_getAppliedImpulse_0 =
          function () {
            return (Tj =
              n._emscripten_bind_btManifoldPoint_getAppliedImpulse_0 =
                n.asm.Ou).apply(null, arguments)
          }),
        Aj = (n._emscripten_bind_btManifoldPoint_getDistance_0 = function () {
          return (Aj = n._emscripten_bind_btManifoldPoint_getDistance_0 =
            n.asm.Pu).apply(null, arguments)
        }),
        kj = (n._emscripten_bind_btManifoldPoint_get_m_localPointA_0 =
          function () {
            return (kj =
              n._emscripten_bind_btManifoldPoint_get_m_localPointA_0 =
                n.asm.Qu).apply(null, arguments)
          }),
        xj = (n._emscripten_bind_btManifoldPoint_set_m_localPointA_1 =
          function () {
            return (xj =
              n._emscripten_bind_btManifoldPoint_set_m_localPointA_1 =
                n.asm.Ru).apply(null, arguments)
          }),
        Lj = (n._emscripten_bind_btManifoldPoint_get_m_localPointB_0 =
          function () {
            return (Lj =
              n._emscripten_bind_btManifoldPoint_get_m_localPointB_0 =
                n.asm.Su).apply(null, arguments)
          }),
        wj = (n._emscripten_bind_btManifoldPoint_set_m_localPointB_1 =
          function () {
            return (wj =
              n._emscripten_bind_btManifoldPoint_set_m_localPointB_1 =
                n.asm.Tu).apply(null, arguments)
          }),
        Fj = (n._emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0 =
          function () {
            return (Fj =
              n._emscripten_bind_btManifoldPoint_get_m_positionWorldOnB_0 =
                n.asm.Uu).apply(null, arguments)
          }),
        Mj = (n._emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1 =
          function () {
            return (Mj =
              n._emscripten_bind_btManifoldPoint_set_m_positionWorldOnB_1 =
                n.asm.Vu).apply(null, arguments)
          }),
        Hj = (n._emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0 =
          function () {
            return (Hj =
              n._emscripten_bind_btManifoldPoint_get_m_positionWorldOnA_0 =
                n.asm.Wu).apply(null, arguments)
          }),
        Gj = (n._emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1 =
          function () {
            return (Gj =
              n._emscripten_bind_btManifoldPoint_set_m_positionWorldOnA_1 =
                n.asm.Xu).apply(null, arguments)
          }),
        Vj = (n._emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0 =
          function () {
            return (Vj =
              n._emscripten_bind_btManifoldPoint_get_m_normalWorldOnB_0 =
                n.asm.Yu).apply(null, arguments)
          }),
        zj = (n._emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1 =
          function () {
            return (zj =
              n._emscripten_bind_btManifoldPoint_set_m_normalWorldOnB_1 =
                n.asm.Zu).apply(null, arguments)
          }),
        Nj = (n._emscripten_bind_btManifoldPoint_get_m_userPersistentData_0 =
          function () {
            return (Nj =
              n._emscripten_bind_btManifoldPoint_get_m_userPersistentData_0 =
                n.asm._u).apply(null, arguments)
          }),
        Uj = (n._emscripten_bind_btManifoldPoint_set_m_userPersistentData_1 =
          function () {
            return (Uj =
              n._emscripten_bind_btManifoldPoint_set_m_userPersistentData_1 =
                n.asm.$u).apply(null, arguments)
          }),
        Ej = (n._emscripten_bind_btManifoldPoint___destroy___0 = function () {
          return (Ej = n._emscripten_bind_btManifoldPoint___destroy___0 =
            n.asm.av).apply(null, arguments)
        }),
        qj =
          (n._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2 =
            function () {
              return (qj =
                n._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_2 =
                  n.asm.bv).apply(null, arguments)
            }),
        Kj =
          (n._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4 =
            function () {
              return (Kj =
                n._emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_4 =
                  n.asm.cv).apply(null, arguments)
            }),
        Qj = (n._emscripten_bind_btPoint2PointConstraint_setPivotA_1 =
          function () {
            return (Qj =
              n._emscripten_bind_btPoint2PointConstraint_setPivotA_1 =
                n.asm.dv).apply(null, arguments)
          }),
        Xj = (n._emscripten_bind_btPoint2PointConstraint_setPivotB_1 =
          function () {
            return (Xj =
              n._emscripten_bind_btPoint2PointConstraint_setPivotB_1 =
                n.asm.ev).apply(null, arguments)
          }),
        Zj = (n._emscripten_bind_btPoint2PointConstraint_getPivotInA_0 =
          function () {
            return (Zj =
              n._emscripten_bind_btPoint2PointConstraint_getPivotInA_0 =
                n.asm.fv).apply(null, arguments)
          }),
        Yj = (n._emscripten_bind_btPoint2PointConstraint_getPivotInB_0 =
          function () {
            return (Yj =
              n._emscripten_bind_btPoint2PointConstraint_getPivotInB_0 =
                n.asm.gv).apply(null, arguments)
          }),
        Jj = (n._emscripten_bind_btPoint2PointConstraint_enableFeedback_1 =
          function () {
            return (Jj =
              n._emscripten_bind_btPoint2PointConstraint_enableFeedback_1 =
                n.asm.hv).apply(null, arguments)
          }),
        $j =
          (n._emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0 =
            function () {
              return ($j =
                n._emscripten_bind_btPoint2PointConstraint_getBreakingImpulseThreshold_0 =
                  n.asm.iv).apply(null, arguments)
            }),
        tS =
          (n._emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1 =
            function () {
              return (tS =
                n._emscripten_bind_btPoint2PointConstraint_setBreakingImpulseThreshold_1 =
                  n.asm.jv).apply(null, arguments)
            }),
        eS = (n._emscripten_bind_btPoint2PointConstraint_getParam_2 =
          function () {
            return (eS = n._emscripten_bind_btPoint2PointConstraint_getParam_2 =
              n.asm.kv).apply(null, arguments)
          }),
        nS = (n._emscripten_bind_btPoint2PointConstraint_setParam_3 =
          function () {
            return (nS = n._emscripten_bind_btPoint2PointConstraint_setParam_3 =
              n.asm.lv).apply(null, arguments)
          }),
        oS = (n._emscripten_bind_btPoint2PointConstraint_get_m_setting_0 =
          function () {
            return (oS =
              n._emscripten_bind_btPoint2PointConstraint_get_m_setting_0 =
                n.asm.mv).apply(null, arguments)
          }),
        _S = (n._emscripten_bind_btPoint2PointConstraint_set_m_setting_1 =
          function () {
            return (_S =
              n._emscripten_bind_btPoint2PointConstraint_set_m_setting_1 =
                n.asm.nv).apply(null, arguments)
          }),
        iS = (n._emscripten_bind_btPoint2PointConstraint___destroy___0 =
          function () {
            return (iS =
              n._emscripten_bind_btPoint2PointConstraint___destroy___0 =
                n.asm.ov).apply(null, arguments)
          }),
        rS = (n._emscripten_bind_btSoftBodyHelpers_btSoftBodyHelpers_0 =
          function () {
            return (rS =
              n._emscripten_bind_btSoftBodyHelpers_btSoftBodyHelpers_0 =
                n.asm.pv).apply(null, arguments)
          }),
        pS = (n._emscripten_bind_btSoftBodyHelpers_CreateRope_5 = function () {
          return (pS = n._emscripten_bind_btSoftBodyHelpers_CreateRope_5 =
            n.asm.qv).apply(null, arguments)
        }),
        sS = (n._emscripten_bind_btSoftBodyHelpers_CreatePatch_9 = function () {
          return (sS = n._emscripten_bind_btSoftBodyHelpers_CreatePatch_9 =
            n.asm.rv).apply(null, arguments)
        }),
        cS = (n._emscripten_bind_btSoftBodyHelpers_CreatePatchUV_10 =
          function () {
            return (cS = n._emscripten_bind_btSoftBodyHelpers_CreatePatchUV_10 =
              n.asm.sv).apply(null, arguments)
          }),
        aS = (n._emscripten_bind_btSoftBodyHelpers_CreateEllipsoid_4 =
          function () {
            return (aS =
              n._emscripten_bind_btSoftBodyHelpers_CreateEllipsoid_4 =
                n.asm.tv).apply(null, arguments)
          }),
        yS = (n._emscripten_bind_btSoftBodyHelpers_CreateFromTriMesh_5 =
          function () {
            return (yS =
              n._emscripten_bind_btSoftBodyHelpers_CreateFromTriMesh_5 =
                n.asm.uv).apply(null, arguments)
          }),
        lS = (n._emscripten_bind_btSoftBodyHelpers_CreateFromConvexHull_4 =
          function () {
            return (lS =
              n._emscripten_bind_btSoftBodyHelpers_CreateFromConvexHull_4 =
                n.asm.vv).apply(null, arguments)
          }),
        uS = (n._emscripten_bind_btSoftBodyHelpers___destroy___0 = function () {
          return (uS = n._emscripten_bind_btSoftBodyHelpers___destroy___0 =
            n.asm.wv).apply(null, arguments)
        }),
        bS =
          (n._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0 =
            function () {
              return (bS =
                n._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterGroup_0 =
                  n.asm.xv).apply(null, arguments)
            }),
        mS =
          (n._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1 =
            function () {
              return (mS =
                n._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterGroup_1 =
                  n.asm.yv).apply(null, arguments)
            }),
        dS = (n._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0 =
          function () {
            return (dS =
              n._emscripten_bind_btBroadphaseProxy_get_m_collisionFilterMask_0 =
                n.asm.zv).apply(null, arguments)
          }),
        hS = (n._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1 =
          function () {
            return (hS =
              n._emscripten_bind_btBroadphaseProxy_set_m_collisionFilterMask_1 =
                n.asm.Av).apply(null, arguments)
          }),
        fS = (n._emscripten_bind_btBroadphaseProxy___destroy___0 = function () {
          return (fS = n._emscripten_bind_btBroadphaseProxy___destroy___0 =
            n.asm.Bv).apply(null, arguments)
        }),
        gS = (n._emscripten_bind_tNodeArray_size_0 = function () {
          return (gS = n._emscripten_bind_tNodeArray_size_0 = n.asm.Cv).apply(
            null,
            arguments,
          )
        }),
        CS = (n._emscripten_bind_tNodeArray_at_1 = function () {
          return (CS = n._emscripten_bind_tNodeArray_at_1 = n.asm.Dv).apply(
            null,
            arguments,
          )
        }),
        jS = (n._emscripten_bind_tNodeArray___destroy___0 = function () {
          return (jS = n._emscripten_bind_tNodeArray___destroy___0 =
            n.asm.Ev).apply(null, arguments)
        }),
        SS = (n._emscripten_bind_btBoxShape_btBoxShape_1 = function () {
          return (SS = n._emscripten_bind_btBoxShape_btBoxShape_1 =
            n.asm.Fv).apply(null, arguments)
        }),
        vS = (n._emscripten_bind_btBoxShape_setMargin_1 = function () {
          return (vS = n._emscripten_bind_btBoxShape_setMargin_1 =
            n.asm.Gv).apply(null, arguments)
        }),
        RS = (n._emscripten_bind_btBoxShape_getMargin_0 = function () {
          return (RS = n._emscripten_bind_btBoxShape_getMargin_0 =
            n.asm.Hv).apply(null, arguments)
        }),
        DS = (n._emscripten_bind_btBoxShape_setLocalScaling_1 = function () {
          return (DS = n._emscripten_bind_btBoxShape_setLocalScaling_1 =
            n.asm.Iv).apply(null, arguments)
        }),
        IS = (n._emscripten_bind_btBoxShape_getLocalScaling_0 = function () {
          return (IS = n._emscripten_bind_btBoxShape_getLocalScaling_0 =
            n.asm.Jv).apply(null, arguments)
        }),
        PS = (n._emscripten_bind_btBoxShape_calculateLocalInertia_2 =
          function () {
            return (PS = n._emscripten_bind_btBoxShape_calculateLocalInertia_2 =
              n.asm.Kv).apply(null, arguments)
          }),
        OS = (n._emscripten_bind_btBoxShape___destroy___0 = function () {
          return (OS = n._emscripten_bind_btBoxShape___destroy___0 =
            n.asm.Lv).apply(null, arguments)
        }),
        WS = (n._emscripten_bind_btFace_get_m_indices_0 = function () {
          return (WS = n._emscripten_bind_btFace_get_m_indices_0 =
            n.asm.Mv).apply(null, arguments)
        }),
        BS = (n._emscripten_bind_btFace_set_m_indices_1 = function () {
          return (BS = n._emscripten_bind_btFace_set_m_indices_1 =
            n.asm.Nv).apply(null, arguments)
        }),
        TS = (n._emscripten_bind_btFace_get_m_plane_1 = function () {
          return (TS = n._emscripten_bind_btFace_get_m_plane_1 =
            n.asm.Ov).apply(null, arguments)
        }),
        AS = (n._emscripten_bind_btFace_set_m_plane_2 = function () {
          return (AS = n._emscripten_bind_btFace_set_m_plane_2 =
            n.asm.Pv).apply(null, arguments)
        }),
        kS = (n._emscripten_bind_btFace___destroy___0 = function () {
          return (kS = n._emscripten_bind_btFace___destroy___0 =
            n.asm.Qv).apply(null, arguments)
        }),
        xS = (n._emscripten_bind_DebugDrawer_DebugDrawer_0 = function () {
          return (xS = n._emscripten_bind_DebugDrawer_DebugDrawer_0 =
            n.asm.Rv).apply(null, arguments)
        }),
        LS = (n._emscripten_bind_DebugDrawer_drawLine_3 = function () {
          return (LS = n._emscripten_bind_DebugDrawer_drawLine_3 =
            n.asm.Sv).apply(null, arguments)
        }),
        wS = (n._emscripten_bind_DebugDrawer_drawContactPoint_5 = function () {
          return (wS = n._emscripten_bind_DebugDrawer_drawContactPoint_5 =
            n.asm.Tv).apply(null, arguments)
        }),
        FS = (n._emscripten_bind_DebugDrawer_reportErrorWarning_1 =
          function () {
            return (FS = n._emscripten_bind_DebugDrawer_reportErrorWarning_1 =
              n.asm.Uv).apply(null, arguments)
          }),
        MS = (n._emscripten_bind_DebugDrawer_draw3dText_2 = function () {
          return (MS = n._emscripten_bind_DebugDrawer_draw3dText_2 =
            n.asm.Vv).apply(null, arguments)
        }),
        HS = (n._emscripten_bind_DebugDrawer_setDebugMode_1 = function () {
          return (HS = n._emscripten_bind_DebugDrawer_setDebugMode_1 =
            n.asm.Wv).apply(null, arguments)
        }),
        GS = (n._emscripten_bind_DebugDrawer_getDebugMode_0 = function () {
          return (GS = n._emscripten_bind_DebugDrawer_getDebugMode_0 =
            n.asm.Xv).apply(null, arguments)
        }),
        VS = (n._emscripten_bind_DebugDrawer___destroy___0 = function () {
          return (VS = n._emscripten_bind_DebugDrawer___destroy___0 =
            n.asm.Yv).apply(null, arguments)
        }),
        zS = (n._emscripten_bind_btCapsuleShapeX_btCapsuleShapeX_2 =
          function () {
            return (zS = n._emscripten_bind_btCapsuleShapeX_btCapsuleShapeX_2 =
              n.asm.Zv).apply(null, arguments)
          }),
        NS = (n._emscripten_bind_btCapsuleShapeX_setMargin_1 = function () {
          return (NS = n._emscripten_bind_btCapsuleShapeX_setMargin_1 =
            n.asm._v).apply(null, arguments)
        }),
        US = (n._emscripten_bind_btCapsuleShapeX_getMargin_0 = function () {
          return (US = n._emscripten_bind_btCapsuleShapeX_getMargin_0 =
            n.asm.$v).apply(null, arguments)
        }),
        ES = (n._emscripten_bind_btCapsuleShapeX_getUpAxis_0 = function () {
          return (ES = n._emscripten_bind_btCapsuleShapeX_getUpAxis_0 =
            n.asm.aw).apply(null, arguments)
        }),
        qS = (n._emscripten_bind_btCapsuleShapeX_getRadius_0 = function () {
          return (qS = n._emscripten_bind_btCapsuleShapeX_getRadius_0 =
            n.asm.bw).apply(null, arguments)
        }),
        KS = (n._emscripten_bind_btCapsuleShapeX_getHalfHeight_0 = function () {
          return (KS = n._emscripten_bind_btCapsuleShapeX_getHalfHeight_0 =
            n.asm.cw).apply(null, arguments)
        }),
        QS = (n._emscripten_bind_btCapsuleShapeX_setLocalScaling_1 =
          function () {
            return (QS = n._emscripten_bind_btCapsuleShapeX_setLocalScaling_1 =
              n.asm.dw).apply(null, arguments)
          }),
        XS = (n._emscripten_bind_btCapsuleShapeX_getLocalScaling_0 =
          function () {
            return (XS = n._emscripten_bind_btCapsuleShapeX_getLocalScaling_0 =
              n.asm.ew).apply(null, arguments)
          }),
        ZS = (n._emscripten_bind_btCapsuleShapeX_calculateLocalInertia_2 =
          function () {
            return (ZS =
              n._emscripten_bind_btCapsuleShapeX_calculateLocalInertia_2 =
                n.asm.fw).apply(null, arguments)
          }),
        YS = (n._emscripten_bind_btCapsuleShapeX___destroy___0 = function () {
          return (YS = n._emscripten_bind_btCapsuleShapeX___destroy___0 =
            n.asm.gw).apply(null, arguments)
        }),
        JS = (n._emscripten_bind_btQuaternion_btQuaternion_4 = function () {
          return (JS = n._emscripten_bind_btQuaternion_btQuaternion_4 =
            n.asm.hw).apply(null, arguments)
        }),
        $S = (n._emscripten_bind_btQuaternion_setValue_4 = function () {
          return ($S = n._emscripten_bind_btQuaternion_setValue_4 =
            n.asm.iw).apply(null, arguments)
        }),
        tv = (n._emscripten_bind_btQuaternion_setEulerZYX_3 = function () {
          return (tv = n._emscripten_bind_btQuaternion_setEulerZYX_3 =
            n.asm.jw).apply(null, arguments)
        }),
        ev = (n._emscripten_bind_btQuaternion_setRotation_2 = function () {
          return (ev = n._emscripten_bind_btQuaternion_setRotation_2 =
            n.asm.kw).apply(null, arguments)
        }),
        nv = (n._emscripten_bind_btQuaternion_normalize_0 = function () {
          return (nv = n._emscripten_bind_btQuaternion_normalize_0 =
            n.asm.lw).apply(null, arguments)
        }),
        ov = (n._emscripten_bind_btQuaternion_length2_0 = function () {
          return (ov = n._emscripten_bind_btQuaternion_length2_0 =
            n.asm.mw).apply(null, arguments)
        }),
        _v = (n._emscripten_bind_btQuaternion_length_0 = function () {
          return (_v = n._emscripten_bind_btQuaternion_length_0 =
            n.asm.nw).apply(null, arguments)
        }),
        iv = (n._emscripten_bind_btQuaternion_dot_1 = function () {
          return (iv = n._emscripten_bind_btQuaternion_dot_1 = n.asm.ow).apply(
            null,
            arguments,
          )
        }),
        rv = (n._emscripten_bind_btQuaternion_normalized_0 = function () {
          return (rv = n._emscripten_bind_btQuaternion_normalized_0 =
            n.asm.pw).apply(null, arguments)
        }),
        pv = (n._emscripten_bind_btQuaternion_getAxis_0 = function () {
          return (pv = n._emscripten_bind_btQuaternion_getAxis_0 =
            n.asm.qw).apply(null, arguments)
        }),
        sv = (n._emscripten_bind_btQuaternion_inverse_0 = function () {
          return (sv = n._emscripten_bind_btQuaternion_inverse_0 =
            n.asm.rw).apply(null, arguments)
        }),
        cv = (n._emscripten_bind_btQuaternion_getAngle_0 = function () {
          return (cv = n._emscripten_bind_btQuaternion_getAngle_0 =
            n.asm.sw).apply(null, arguments)
        }),
        av = (n._emscripten_bind_btQuaternion_getAngleShortestPath_0 =
          function () {
            return (av =
              n._emscripten_bind_btQuaternion_getAngleShortestPath_0 =
                n.asm.tw).apply(null, arguments)
          }),
        yv = (n._emscripten_bind_btQuaternion_angle_1 = function () {
          return (yv = n._emscripten_bind_btQuaternion_angle_1 =
            n.asm.uw).apply(null, arguments)
        }),
        lv = (n._emscripten_bind_btQuaternion_angleShortestPath_1 =
          function () {
            return (lv = n._emscripten_bind_btQuaternion_angleShortestPath_1 =
              n.asm.vw).apply(null, arguments)
          }),
        uv = (n._emscripten_bind_btQuaternion_op_add_1 = function () {
          return (uv = n._emscripten_bind_btQuaternion_op_add_1 =
            n.asm.ww).apply(null, arguments)
        }),
        bv = (n._emscripten_bind_btQuaternion_op_sub_1 = function () {
          return (bv = n._emscripten_bind_btQuaternion_op_sub_1 =
            n.asm.xw).apply(null, arguments)
        }),
        mv = (n._emscripten_bind_btQuaternion_op_mul_1 = function () {
          return (mv = n._emscripten_bind_btQuaternion_op_mul_1 =
            n.asm.yw).apply(null, arguments)
        }),
        dv = (n._emscripten_bind_btQuaternion_op_mulq_1 = function () {
          return (dv = n._emscripten_bind_btQuaternion_op_mulq_1 =
            n.asm.zw).apply(null, arguments)
        }),
        hv = (n._emscripten_bind_btQuaternion_op_div_1 = function () {
          return (hv = n._emscripten_bind_btQuaternion_op_div_1 =
            n.asm.Aw).apply(null, arguments)
        }),
        fv = (n._emscripten_bind_btQuaternion_x_0 = function () {
          return (fv = n._emscripten_bind_btQuaternion_x_0 = n.asm.Bw).apply(
            null,
            arguments,
          )
        }),
        gv = (n._emscripten_bind_btQuaternion_y_0 = function () {
          return (gv = n._emscripten_bind_btQuaternion_y_0 = n.asm.Cw).apply(
            null,
            arguments,
          )
        }),
        Cv = (n._emscripten_bind_btQuaternion_z_0 = function () {
          return (Cv = n._emscripten_bind_btQuaternion_z_0 = n.asm.Dw).apply(
            null,
            arguments,
          )
        }),
        jv = (n._emscripten_bind_btQuaternion_w_0 = function () {
          return (jv = n._emscripten_bind_btQuaternion_w_0 = n.asm.Ew).apply(
            null,
            arguments,
          )
        }),
        Sv = (n._emscripten_bind_btQuaternion_setX_1 = function () {
          return (Sv = n._emscripten_bind_btQuaternion_setX_1 = n.asm.Fw).apply(
            null,
            arguments,
          )
        }),
        vv = (n._emscripten_bind_btQuaternion_setY_1 = function () {
          return (vv = n._emscripten_bind_btQuaternion_setY_1 = n.asm.Gw).apply(
            null,
            arguments,
          )
        }),
        Rv = (n._emscripten_bind_btQuaternion_setZ_1 = function () {
          return (Rv = n._emscripten_bind_btQuaternion_setZ_1 = n.asm.Hw).apply(
            null,
            arguments,
          )
        }),
        Dv = (n._emscripten_bind_btQuaternion_setW_1 = function () {
          return (Dv = n._emscripten_bind_btQuaternion_setW_1 = n.asm.Iw).apply(
            null,
            arguments,
          )
        }),
        Iv = (n._emscripten_bind_btQuaternion___destroy___0 = function () {
          return (Iv = n._emscripten_bind_btQuaternion___destroy___0 =
            n.asm.Jw).apply(null, arguments)
        }),
        Pv = (n._emscripten_bind_btCapsuleShapeZ_btCapsuleShapeZ_2 =
          function () {
            return (Pv = n._emscripten_bind_btCapsuleShapeZ_btCapsuleShapeZ_2 =
              n.asm.Kw).apply(null, arguments)
          }),
        Ov = (n._emscripten_bind_btCapsuleShapeZ_setMargin_1 = function () {
          return (Ov = n._emscripten_bind_btCapsuleShapeZ_setMargin_1 =
            n.asm.Lw).apply(null, arguments)
        }),
        Wv = (n._emscripten_bind_btCapsuleShapeZ_getMargin_0 = function () {
          return (Wv = n._emscripten_bind_btCapsuleShapeZ_getMargin_0 =
            n.asm.Mw).apply(null, arguments)
        }),
        Bv = (n._emscripten_bind_btCapsuleShapeZ_getUpAxis_0 = function () {
          return (Bv = n._emscripten_bind_btCapsuleShapeZ_getUpAxis_0 =
            n.asm.Nw).apply(null, arguments)
        }),
        Tv = (n._emscripten_bind_btCapsuleShapeZ_getRadius_0 = function () {
          return (Tv = n._emscripten_bind_btCapsuleShapeZ_getRadius_0 =
            n.asm.Ow).apply(null, arguments)
        }),
        Av = (n._emscripten_bind_btCapsuleShapeZ_getHalfHeight_0 = function () {
          return (Av = n._emscripten_bind_btCapsuleShapeZ_getHalfHeight_0 =
            n.asm.Pw).apply(null, arguments)
        }),
        kv = (n._emscripten_bind_btCapsuleShapeZ_setLocalScaling_1 =
          function () {
            return (kv = n._emscripten_bind_btCapsuleShapeZ_setLocalScaling_1 =
              n.asm.Qw).apply(null, arguments)
          }),
        xv = (n._emscripten_bind_btCapsuleShapeZ_getLocalScaling_0 =
          function () {
            return (xv = n._emscripten_bind_btCapsuleShapeZ_getLocalScaling_0 =
              n.asm.Rw).apply(null, arguments)
          }),
        Lv = (n._emscripten_bind_btCapsuleShapeZ_calculateLocalInertia_2 =
          function () {
            return (Lv =
              n._emscripten_bind_btCapsuleShapeZ_calculateLocalInertia_2 =
                n.asm.Sw).apply(null, arguments)
          }),
        wv = (n._emscripten_bind_btCapsuleShapeZ___destroy___0 = function () {
          return (wv = n._emscripten_bind_btCapsuleShapeZ___destroy___0 =
            n.asm.Tw).apply(null, arguments)
        }),
        Fv = (n._emscripten_bind_btContactSolverInfo_get_m_splitImpulse_0 =
          function () {
            return (Fv =
              n._emscripten_bind_btContactSolverInfo_get_m_splitImpulse_0 =
                n.asm.Uw).apply(null, arguments)
          }),
        Mv = (n._emscripten_bind_btContactSolverInfo_set_m_splitImpulse_1 =
          function () {
            return (Mv =
              n._emscripten_bind_btContactSolverInfo_set_m_splitImpulse_1 =
                n.asm.Vw).apply(null, arguments)
          }),
        Hv =
          (n._emscripten_bind_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0 =
            function () {
              return (Hv =
                n._emscripten_bind_btContactSolverInfo_get_m_splitImpulsePenetrationThreshold_0 =
                  n.asm.Ww).apply(null, arguments)
            }),
        Gv =
          (n._emscripten_bind_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1 =
            function () {
              return (Gv =
                n._emscripten_bind_btContactSolverInfo_set_m_splitImpulsePenetrationThreshold_1 =
                  n.asm.Xw).apply(null, arguments)
            }),
        Vv = (n._emscripten_bind_btContactSolverInfo_get_m_numIterations_0 =
          function () {
            return (Vv =
              n._emscripten_bind_btContactSolverInfo_get_m_numIterations_0 =
                n.asm.Yw).apply(null, arguments)
          }),
        zv = (n._emscripten_bind_btContactSolverInfo_set_m_numIterations_1 =
          function () {
            return (zv =
              n._emscripten_bind_btContactSolverInfo_set_m_numIterations_1 =
                n.asm.Zw).apply(null, arguments)
          }),
        Nv = (n._emscripten_bind_btContactSolverInfo___destroy___0 =
          function () {
            return (Nv = n._emscripten_bind_btContactSolverInfo___destroy___0 =
              n.asm._w).apply(null, arguments)
          }),
        Uv =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_3 =
            function () {
              return (Uv =
                n._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_3 =
                  n.asm.$w).apply(null, arguments)
            }),
        Ev =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_5 =
            function () {
              return (Ev =
                n._emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_5 =
                  n.asm.ax).apply(null, arguments)
            }),
        qv = (n._emscripten_bind_btGeneric6DofSpringConstraint_enableSpring_2 =
          function () {
            return (qv =
              n._emscripten_bind_btGeneric6DofSpringConstraint_enableSpring_2 =
                n.asm.bx).apply(null, arguments)
          }),
        Kv = (n._emscripten_bind_btGeneric6DofSpringConstraint_setStiffness_2 =
          function () {
            return (Kv =
              n._emscripten_bind_btGeneric6DofSpringConstraint_setStiffness_2 =
                n.asm.cx).apply(null, arguments)
          }),
        Qv = (n._emscripten_bind_btGeneric6DofSpringConstraint_setDamping_2 =
          function () {
            return (Qv =
              n._emscripten_bind_btGeneric6DofSpringConstraint_setDamping_2 =
                n.asm.dx).apply(null, arguments)
          }),
        Xv =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_0 =
            function () {
              return (Xv =
                n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_0 =
                  n.asm.ex).apply(null, arguments)
            }),
        Zv =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_1 =
            function () {
              return (Zv =
                n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_1 =
                  n.asm.fx).apply(null, arguments)
            }),
        Yv =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_2 =
            function () {
              return (Yv =
                n._emscripten_bind_btGeneric6DofSpringConstraint_setEquilibriumPoint_2 =
                  n.asm.gx).apply(null, arguments)
            }),
        Jv =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_setLinearLowerLimit_1 =
            function () {
              return (Jv =
                n._emscripten_bind_btGeneric6DofSpringConstraint_setLinearLowerLimit_1 =
                  n.asm.hx).apply(null, arguments)
            }),
        $v =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_setLinearUpperLimit_1 =
            function () {
              return ($v =
                n._emscripten_bind_btGeneric6DofSpringConstraint_setLinearUpperLimit_1 =
                  n.asm.ix).apply(null, arguments)
            }),
        tR =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_setAngularLowerLimit_1 =
            function () {
              return (tR =
                n._emscripten_bind_btGeneric6DofSpringConstraint_setAngularLowerLimit_1 =
                  n.asm.jx).apply(null, arguments)
            }),
        eR =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_setAngularUpperLimit_1 =
            function () {
              return (eR =
                n._emscripten_bind_btGeneric6DofSpringConstraint_setAngularUpperLimit_1 =
                  n.asm.kx).apply(null, arguments)
            }),
        nR =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetA_0 =
            function () {
              return (nR =
                n._emscripten_bind_btGeneric6DofSpringConstraint_getFrameOffsetA_0 =
                  n.asm.lx).apply(null, arguments)
            }),
        oR =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_enableFeedback_1 =
            function () {
              return (oR =
                n._emscripten_bind_btGeneric6DofSpringConstraint_enableFeedback_1 =
                  n.asm.mx).apply(null, arguments)
            }),
        _R =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_getBreakingImpulseThreshold_0 =
            function () {
              return (_R =
                n._emscripten_bind_btGeneric6DofSpringConstraint_getBreakingImpulseThreshold_0 =
                  n.asm.nx).apply(null, arguments)
            }),
        iR =
          (n._emscripten_bind_btGeneric6DofSpringConstraint_setBreakingImpulseThreshold_1 =
            function () {
              return (iR =
                n._emscripten_bind_btGeneric6DofSpringConstraint_setBreakingImpulseThreshold_1 =
                  n.asm.ox).apply(null, arguments)
            }),
        rR = (n._emscripten_bind_btGeneric6DofSpringConstraint_getParam_2 =
          function () {
            return (rR =
              n._emscripten_bind_btGeneric6DofSpringConstraint_getParam_2 =
                n.asm.px).apply(null, arguments)
          }),
        pR = (n._emscripten_bind_btGeneric6DofSpringConstraint_setParam_3 =
          function () {
            return (pR =
              n._emscripten_bind_btGeneric6DofSpringConstraint_setParam_3 =
                n.asm.qx).apply(null, arguments)
          }),
        sR = (n._emscripten_bind_btGeneric6DofSpringConstraint___destroy___0 =
          function () {
            return (sR =
              n._emscripten_bind_btGeneric6DofSpringConstraint___destroy___0 =
                n.asm.rx).apply(null, arguments)
          }),
        cR = (n._emscripten_bind_btSphereShape_btSphereShape_1 = function () {
          return (cR = n._emscripten_bind_btSphereShape_btSphereShape_1 =
            n.asm.sx).apply(null, arguments)
        }),
        aR = (n._emscripten_bind_btSphereShape_setMargin_1 = function () {
          return (aR = n._emscripten_bind_btSphereShape_setMargin_1 =
            n.asm.tx).apply(null, arguments)
        }),
        yR = (n._emscripten_bind_btSphereShape_getMargin_0 = function () {
          return (yR = n._emscripten_bind_btSphereShape_getMargin_0 =
            n.asm.ux).apply(null, arguments)
        }),
        lR = (n._emscripten_bind_btSphereShape_setLocalScaling_1 = function () {
          return (lR = n._emscripten_bind_btSphereShape_setLocalScaling_1 =
            n.asm.vx).apply(null, arguments)
        }),
        uR = (n._emscripten_bind_btSphereShape_getLocalScaling_0 = function () {
          return (uR = n._emscripten_bind_btSphereShape_getLocalScaling_0 =
            n.asm.wx).apply(null, arguments)
        }),
        bR = (n._emscripten_bind_btSphereShape_calculateLocalInertia_2 =
          function () {
            return (bR =
              n._emscripten_bind_btSphereShape_calculateLocalInertia_2 =
                n.asm.xx).apply(null, arguments)
          }),
        mR = (n._emscripten_bind_btSphereShape___destroy___0 = function () {
          return (mR = n._emscripten_bind_btSphereShape___destroy___0 =
            n.asm.yx).apply(null, arguments)
        }),
        dR = (n._emscripten_bind_Face_get_m_n_1 = function () {
          return (dR = n._emscripten_bind_Face_get_m_n_1 = n.asm.zx).apply(
            null,
            arguments,
          )
        }),
        hR = (n._emscripten_bind_Face_set_m_n_2 = function () {
          return (hR = n._emscripten_bind_Face_set_m_n_2 = n.asm.Ax).apply(
            null,
            arguments,
          )
        }),
        fR = (n._emscripten_bind_Face_get_m_normal_0 = function () {
          return (fR = n._emscripten_bind_Face_get_m_normal_0 = n.asm.Bx).apply(
            null,
            arguments,
          )
        }),
        gR = (n._emscripten_bind_Face_set_m_normal_1 = function () {
          return (gR = n._emscripten_bind_Face_set_m_normal_1 = n.asm.Cx).apply(
            null,
            arguments,
          )
        }),
        CR = (n._emscripten_bind_Face_get_m_ra_0 = function () {
          return (CR = n._emscripten_bind_Face_get_m_ra_0 = n.asm.Dx).apply(
            null,
            arguments,
          )
        }),
        jR = (n._emscripten_bind_Face_set_m_ra_1 = function () {
          return (jR = n._emscripten_bind_Face_set_m_ra_1 = n.asm.Ex).apply(
            null,
            arguments,
          )
        }),
        SR = (n._emscripten_bind_Face___destroy___0 = function () {
          return (SR = n._emscripten_bind_Face___destroy___0 = n.asm.Fx).apply(
            null,
            arguments,
          )
        }),
        vR = (n._emscripten_bind_tFaceArray_size_0 = function () {
          return (vR = n._emscripten_bind_tFaceArray_size_0 = n.asm.Gx).apply(
            null,
            arguments,
          )
        }),
        RR = (n._emscripten_bind_tFaceArray_at_1 = function () {
          return (RR = n._emscripten_bind_tFaceArray_at_1 = n.asm.Hx).apply(
            null,
            arguments,
          )
        }),
        DR = (n._emscripten_bind_tFaceArray___destroy___0 = function () {
          return (DR = n._emscripten_bind_tFaceArray___destroy___0 =
            n.asm.Ix).apply(null, arguments)
        }),
        IR = (n._emscripten_bind_LocalConvexResult_LocalConvexResult_5 =
          function () {
            return (IR =
              n._emscripten_bind_LocalConvexResult_LocalConvexResult_5 =
                n.asm.Jx).apply(null, arguments)
          }),
        PR = (n._emscripten_bind_LocalConvexResult_get_m_hitCollisionObject_0 =
          function () {
            return (PR =
              n._emscripten_bind_LocalConvexResult_get_m_hitCollisionObject_0 =
                n.asm.Kx).apply(null, arguments)
          }),
        OR = (n._emscripten_bind_LocalConvexResult_set_m_hitCollisionObject_1 =
          function () {
            return (OR =
              n._emscripten_bind_LocalConvexResult_set_m_hitCollisionObject_1 =
                n.asm.Lx).apply(null, arguments)
          }),
        WR = (n._emscripten_bind_LocalConvexResult_get_m_localShapeInfo_0 =
          function () {
            return (WR =
              n._emscripten_bind_LocalConvexResult_get_m_localShapeInfo_0 =
                n.asm.Mx).apply(null, arguments)
          }),
        BR = (n._emscripten_bind_LocalConvexResult_set_m_localShapeInfo_1 =
          function () {
            return (BR =
              n._emscripten_bind_LocalConvexResult_set_m_localShapeInfo_1 =
                n.asm.Nx).apply(null, arguments)
          }),
        TR = (n._emscripten_bind_LocalConvexResult_get_m_hitNormalLocal_0 =
          function () {
            return (TR =
              n._emscripten_bind_LocalConvexResult_get_m_hitNormalLocal_0 =
                n.asm.Ox).apply(null, arguments)
          }),
        AR = (n._emscripten_bind_LocalConvexResult_set_m_hitNormalLocal_1 =
          function () {
            return (AR =
              n._emscripten_bind_LocalConvexResult_set_m_hitNormalLocal_1 =
                n.asm.Px).apply(null, arguments)
          }),
        kR = (n._emscripten_bind_LocalConvexResult_get_m_hitPointLocal_0 =
          function () {
            return (kR =
              n._emscripten_bind_LocalConvexResult_get_m_hitPointLocal_0 =
                n.asm.Qx).apply(null, arguments)
          }),
        xR = (n._emscripten_bind_LocalConvexResult_set_m_hitPointLocal_1 =
          function () {
            return (xR =
              n._emscripten_bind_LocalConvexResult_set_m_hitPointLocal_1 =
                n.asm.Rx).apply(null, arguments)
          }),
        LR = (n._emscripten_bind_LocalConvexResult_get_m_hitFraction_0 =
          function () {
            return (LR =
              n._emscripten_bind_LocalConvexResult_get_m_hitFraction_0 =
                n.asm.Sx).apply(null, arguments)
          }),
        wR = (n._emscripten_bind_LocalConvexResult_set_m_hitFraction_1 =
          function () {
            return (wR =
              n._emscripten_bind_LocalConvexResult_set_m_hitFraction_1 =
                n.asm.Tx).apply(null, arguments)
          }),
        FR = (n._emscripten_bind_LocalConvexResult___destroy___0 = function () {
          return (FR = n._emscripten_bind_LocalConvexResult___destroy___0 =
            n.asm.Ux).apply(null, arguments)
        }),
        MR = (n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP =
          function () {
            return (MR =
              n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_ERP =
                n.asm.Vx).apply(null, arguments)
          }),
        HR = (n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP =
          function () {
            return (HR =
              n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_ERP =
                n.asm.Wx).apply(null, arguments)
          }),
        GR = (n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM =
          function () {
            return (GR =
              n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_CFM =
                n.asm.Xx).apply(null, arguments)
          }),
        VR = (n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM =
          function () {
            return (VR =
              n._emscripten_enum_btConstraintParams_BT_CONSTRAINT_STOP_CFM =
                n.asm.Yx).apply(null, arguments)
          }),
        zR = (n._emscripten_enum_PHY_ScalarType_PHY_FLOAT = function () {
          return (zR = n._emscripten_enum_PHY_ScalarType_PHY_FLOAT =
            n.asm.Zx).apply(null, arguments)
        }),
        NR = (n._emscripten_enum_PHY_ScalarType_PHY_DOUBLE = function () {
          return (NR = n._emscripten_enum_PHY_ScalarType_PHY_DOUBLE =
            n.asm._x).apply(null, arguments)
        }),
        UR = (n._emscripten_enum_PHY_ScalarType_PHY_INTEGER = function () {
          return (UR = n._emscripten_enum_PHY_ScalarType_PHY_INTEGER =
            n.asm.$x).apply(null, arguments)
        }),
        ER = (n._emscripten_enum_PHY_ScalarType_PHY_SHORT = function () {
          return (ER = n._emscripten_enum_PHY_ScalarType_PHY_SHORT =
            n.asm.ay).apply(null, arguments)
        }),
        qR = (n._emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88 = function () {
          return (qR = n._emscripten_enum_PHY_ScalarType_PHY_FIXEDPOINT88 =
            n.asm.by).apply(null, arguments)
        }),
        KR = (n._emscripten_enum_PHY_ScalarType_PHY_UCHAR = function () {
          return (KR = n._emscripten_enum_PHY_ScalarType_PHY_UCHAR =
            n.asm.cy).apply(null, arguments)
        })
      function QR() {
        function t() {
          if (!J && ((J = !0), (n.calledRun = !0), !C)) {
            if (
              ((w = !0),
              T(k),
              T(x),
              o(n),
              n.onRuntimeInitialized && n.onRuntimeInitialized(),
              n.postRun)
            )
              for (
                'function' == typeof n.postRun && (n.postRun = [n.postRun]);
                n.postRun.length;

              ) {
                var t = n.postRun.shift()
                L.unshift(t)
              }
            T(L)
          }
        }
        if (!(0 < M)) {
          if (n.preRun)
            for (
              'function' == typeof n.preRun && (n.preRun = [n.preRun]);
              n.preRun.length;

            )
              F()
          T(A),
            0 < M ||
              (n.setStatus
                ? (n.setStatus('Running...'),
                  setTimeout(function () {
                    setTimeout(function () {
                      n.setStatus('')
                    }, 1),
                      t()
                  }, 1))
                : t())
        }
      }
      if (
        ((n._malloc = function () {
          return (n._malloc = n.asm.dy).apply(null, arguments)
        }),
        (n._free = function () {
          return (n._free = n.asm.ey).apply(null, arguments)
        }),
        (n.dynCall_vi = function () {
          return (n.dynCall_vi = n.asm.fy).apply(null, arguments)
        }),
        (n.dynCall_v = function () {
          return (n.dynCall_v = n.asm.gy).apply(null, arguments)
        }),
        (n.UTF8ToString = function (t, e) {
          if (t) {
            var n = t + e
            for (e = t; R[e] && !(e >= n); ) ++e
            if (16 < e - t && R.subarray && O) t = O.decode(R.subarray(t, e))
            else {
              for (n = ''; t < e; ) {
                var o = R[t++]
                if (128 & o) {
                  var _ = 63 & R[t++]
                  if (192 == (224 & o))
                    n += String.fromCharCode(((31 & o) << 6) | _)
                  else {
                    var i = 63 & R[t++]
                    65536 >
                    (o =
                      224 == (240 & o)
                        ? ((15 & o) << 12) | (_ << 6) | i
                        : ((7 & o) << 18) |
                          (_ << 12) |
                          (i << 6) |
                          (63 & R[t++]))
                      ? (n += String.fromCharCode(o))
                      : ((o -= 65536),
                        (n += String.fromCharCode(
                          55296 | (o >> 10),
                          56320 | (1023 & o),
                        )))
                  }
                } else n += String.fromCharCode(o)
              }
              t = n
            }
          } else t = ''
          return t
        }),
        (G = function t() {
          J || QR(), J || (G = t)
        }),
        (n.run = QR),
        n.preInit)
      )
        for (
          'function' == typeof n.preInit && (n.preInit = [n.preInit]);
          0 < n.preInit.length;

        )
          n.preInit.pop()()
      function XR() {}
      function ZR(t) {
        return (t || XR).jy
      }
      function YR(t, e) {
        var n = ZR(e),
          o = n[t]
        return (
          o || (((o = Object.create((e || XR).prototype)).hy = t), (n[t] = o))
        )
      }
      QR(),
        (XR.prototype = Object.create(XR.prototype)),
        (XR.prototype.constructor = XR),
        (XR.prototype.iy = XR),
        (XR.jy = {}),
        (n.WrapperObject = XR),
        (n.getCache = ZR),
        (n.wrapPointer = YR),
        (n.castObject = function (t, e) {
          return YR(t.hy, e)
        }),
        (n.NULL = YR(0)),
        (n.destroy = function (t) {
          if (!t.__destroy__)
            throw 'Error: Cannot destroy object. (Did you create it yourself?)'
          t.__destroy__(), delete ZR(t.iy)[t.hy]
        }),
        (n.compare = function (t, e) {
          return t.hy === e.hy
        }),
        (n.getPointer = function (t) {
          return t.hy
        }),
        (n.getClass = function (t) {
          return t.iy
        })
      var JR = 0,
        $R = 0,
        tD = 0,
        eD = [],
        nD = 0
      function oD() {
        if (nD) {
          for (var t = 0; t < eD.length; t++) n._free(eD[t])
          ;(eD.length = 0), n._free(JR), (JR = 0), ($R += nD), (nD = 0)
        }
        JR || (($R += 128), j((JR = n._malloc($R)))), (tD = 0)
      }
      function _D(t, e) {
        return (
          j(JR),
          (t = t.length * e.BYTES_PER_ELEMENT),
          tD + (t = (t + 7) & -8) >= $R
            ? (j(0 < t), (nD += t), (e = n._malloc(t)), eD.push(e))
            : ((e = JR + tD), (tD += t)),
          e
        )
      }
      function iD(t, e, n) {
        switch (((n >>>= 0), e.BYTES_PER_ELEMENT)) {
          case 2:
            n >>>= 1
            break
          case 4:
            n >>>= 2
            break
          case 8:
            n >>>= 3
        }
        for (var o = 0; o < t.length; o++) e[n + o] = t[o]
      }
      function rD(t) {
        if ('string' == typeof t) {
          for (var e = 0, n = 0; n < t.length; ++n) {
            var o = t.charCodeAt(n)
            55296 <= o &&
              57343 >= o &&
              (o = (65536 + ((1023 & o) << 10)) | (1023 & t.charCodeAt(++n))),
              127 >= o
                ? ++e
                : (e = 2047 >= o ? e + 2 : 65535 >= o ? e + 3 : e + 4)
          }
          if (((n = 0), 0 < (o = (e = Array(e + 1)).length))) {
            o = n + o - 1
            for (var _ = 0; _ < t.length; ++_) {
              var i = t.charCodeAt(_)
              if (55296 <= i && 57343 >= i)
                i = (65536 + ((1023 & i) << 10)) | (1023 & t.charCodeAt(++_))
              if (127 >= i) {
                if (n >= o) break
                e[n++] = i
              } else {
                if (2047 >= i) {
                  if (n + 1 >= o) break
                  e[n++] = 192 | (i >> 6)
                } else {
                  if (65535 >= i) {
                    if (n + 2 >= o) break
                    e[n++] = 224 | (i >> 12)
                  } else {
                    if (n + 3 >= o) break
                    ;(e[n++] = 240 | (i >> 18)),
                      (e[n++] = 128 | ((i >> 12) & 63))
                  }
                  e[n++] = 128 | ((i >> 6) & 63)
                }
                e[n++] = 128 | (63 & i)
              }
            }
            e[n] = 0
          }
          ;(t = _D(e, v)), iD(e, v, t)
        }
        return t
      }
      function pD(t) {
        if ('object' == typeof t) {
          var e = _D(t, I)
          return iD(t, I, e), e
        }
        return t
      }
      function sD() {
        throw 'cannot construct a btCollisionWorld, no constructor in IDL'
      }
      function cD() {
        throw 'cannot construct a btCollisionShape, no constructor in IDL'
      }
      function aD() {
        throw 'cannot construct a btCollisionObject, no constructor in IDL'
      }
      function yD() {
        throw 'cannot construct a btDynamicsWorld, no constructor in IDL'
      }
      function lD() {
        throw 'cannot construct a btTypedConstraint, no constructor in IDL'
      }
      function uD() {
        throw 'cannot construct a btConcaveShape, no constructor in IDL'
      }
      function bD(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = ke(t, e)),
          (ZR(bD)[this.hy] = this)
      }
      function mD() {
        throw 'cannot construct a btIDebugDraw, no constructor in IDL'
      }
      function dD(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = void 0 === t ? Ze() : Ye(t)),
          (ZR(dD)[this.hy] = this)
      }
      function hD() {
        throw 'cannot construct a btTriangleMeshShape, no constructor in IDL'
      }
      function fD() {
        ;(this.hy = on()), (ZR(fD)[this.hy] = this)
      }
      function gD(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = Fn(t, e)),
          (ZR(gD)[this.hy] = this)
      }
      function CD() {
        throw 'cannot construct a btActionInterface, no constructor in IDL'
      }
      function jD(t, e, n) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          (this.hy =
            void 0 === t
              ? Un()
              : void 0 === e
                ? _emscripten_bind_btVector3_btVector3_1(t)
                : void 0 === n
                  ? _emscripten_bind_btVector3_btVector3_2(t, e)
                  : En(t, e, n)),
          (ZR(jD)[this.hy] = this)
      }
      function SD() {
        throw 'cannot construct a btVehicleRaycaster, no constructor in IDL'
      }
      function vD() {
        throw 'cannot construct a btQuadWord, no constructor in IDL'
      }
      function RD(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = go(t)),
          (ZR(RD)[this.hy] = this)
      }
      function DD(t, e, n, o) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          (this.hy = Io(t, e, n, o)),
          (ZR(DD)[this.hy] = this)
      }
      function ID() {
        throw 'cannot construct a btConvexShape, no constructor in IDL'
      }
      function PD() {
        throw 'cannot construct a btDispatcher, no constructor in IDL'
      }
      function OD(t, e, n, o, _) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          _ && 'object' == typeof _ && (_ = _.hy),
          (this.hy =
            void 0 === o
              ? C_(t, e, n)
              : void 0 === _
                ? _emscripten_bind_btGeneric6DofConstraint_btGeneric6DofConstraint_4(
                    t,
                    e,
                    n,
                    o,
                  )
                : j_(t, e, n, o, _)),
          (ZR(OD)[this.hy] = this)
      }
      function WD() {
        throw 'cannot construct a btStridingMeshInterface, no constructor in IDL'
      }
      function BD() {
        throw 'cannot construct a btMotionState, no constructor in IDL'
      }
      function TD() {
        throw 'cannot construct a ConvexResultCallback, no constructor in IDL'
      }
      function AD() {
        throw 'cannot construct a ContactResultCallback, no constructor in IDL'
      }
      function kD() {
        throw 'cannot construct a btSoftBodySolver, no constructor in IDL'
      }
      function xD() {
        throw 'cannot construct a RayResultCallback, no constructor in IDL'
      }
      function LD() {
        throw 'cannot construct a btMatrix3x3, no constructor in IDL'
      }
      function wD() {
        throw 'cannot construct a btScalarArray, no constructor in IDL'
      }
      function FD() {
        throw 'cannot construct a Material, no constructor in IDL'
      }
      function MD() {
        throw 'cannot construct a btDispatcherInfo, no constructor in IDL'
      }
      function HD() {
        throw 'cannot construct a btWheelInfoConstructionInfo, no constructor in IDL'
      }
      function GD(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = void 0 === e ? mr(t) : dr(t, e)),
          (ZR(GD)[this.hy] = this)
      }
      function VD() {
        throw 'cannot construct a btBroadphaseInterface, no constructor in IDL'
      }
      function zD(t, e, n, o) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          (this.hy = void 0 === o ? Dr(t, e, n) : Ir(t, e, n, o)),
          (ZR(zD)[this.hy] = this)
      }
      function ND() {
        throw 'cannot construct a btCollisionConfiguration, no constructor in IDL'
      }
      function UD() {
        ;(this.hy = $r()), (ZR(UD)[this.hy] = this)
      }
      function ED(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = void 0 === t ? ip() : rp(t)),
          (ZR(ED)[this.hy] = this)
      }
      function qD(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = Cp(t, e)),
          (ZR(qD)[this.hy] = this)
      }
      function KD(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = Fp(t, e)),
          (ZR(KD)[this.hy] = this)
      }
      function QD() {
        throw 'cannot construct a tMaterialArray, no constructor in IDL'
      }
      function XD(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = cs(t)),
          (ZR(XD)[this.hy] = this)
      }
      function ZD() {
        ;(this.hy = ls()), (ZR(ZD)[this.hy] = this)
      }
      function YD() {
        ;(this.hy = hs()), (ZR(YD)[this.hy] = this)
      }
      function JD() {
        throw 'cannot construct a LocalShapeInfo, no constructor in IDL'
      }
      function $D(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = Bs(t)),
          (ZR($D)[this.hy] = this)
      }
      function tI() {
        throw 'cannot construct a btIndexedMeshArray, no constructor in IDL'
      }
      function eI() {
        ;(this.hy = Nc()), (ZR(eI)[this.hy] = this)
      }
      function nI(t, e, n, o, _, i, r, p, s) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          _ && 'object' == typeof _ && (_ = _.hy),
          i && 'object' == typeof i && (i = i.hy),
          r && 'object' == typeof r && (r = r.hy),
          p && 'object' == typeof p && (p = p.hy),
          s && 'object' == typeof s && (s = s.hy),
          (this.hy = Ec(t, e, n, o, _, i, r, p, s)),
          (ZR(nI)[this.hy] = this)
      }
      function oI() {
        ;(this.hy = Jc()), (ZR(oI)[this.hy] = this)
      }
      function _I(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = ta(t)),
          (ZR(_I)[this.hy] = this)
      }
      function iI(t, e, n, o, _) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          _ && 'object' == typeof _ && (_ = _.hy),
          (this.hy =
            void 0 === n
              ? _a(t, e)
              : void 0 === o
                ? ia(t, e, n)
                : void 0 === _
                  ? ra(t, e, n, o)
                  : pa(t, e, n, o, _)),
          (ZR(iI)[this.hy] = this)
      }
      function rI() {
        throw 'cannot construct a VoidPtr, no constructor in IDL'
      }
      function pI() {
        ;(this.hy = aa()), (ZR(pI)[this.hy] = this)
      }
      function sI(t, e, n, o) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          (this.hy =
            void 0 === n
              ? Oa(t, e)
              : void 0 === o
                ? _emscripten_bind_btConeTwistConstraint_btConeTwistConstraint_3(
                    t,
                    e,
                    n,
                  )
                : Wa(t, e, n, o)),
          (ZR(sI)[this.hy] = this)
      }
      function cI(t, e, n, o, _, i, r) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          _ && 'object' == typeof _ && (_ = _.hy),
          i && 'object' == typeof i && (i = i.hy),
          r && 'object' == typeof r && (r = r.hy),
          (this.hy =
            void 0 === n
              ? Ua(t, e)
              : void 0 === o
                ? Ea(t, e, n)
                : void 0 === _
                  ? qa(t, e, n, o)
                  : void 0 === i
                    ? Ka(t, e, n, o, _)
                    : void 0 === r
                      ? Qa(t, e, n, o, _, i)
                      : Xa(t, e, n, o, _, i, r)),
          (ZR(cI)[this.hy] = this)
      }
      function aI(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = cy(t, e)),
          (ZR(aI)[this.hy] = this)
      }
      function yI(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = by(t, e)),
          (ZR(yI)[this.hy] = this)
      }
      function lI(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = void 0 === t ? gy() : void 0 === e ? Cy(t) : jy(t, e)),
          (ZR(lI)[this.hy] = this)
      }
      function uI(t, e) {
        oD(),
          'object' == typeof t && (t = pD(t)),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = void 0 === t ? Wy() : void 0 === e ? By(t) : Ty(t, e)),
          (ZR(uI)[this.hy] = this)
      }
      function bI() {
        ;(this.hy = Uy()), (ZR(bI)[this.hy] = this)
      }
      function mI() {
        throw 'cannot construct a btCollisionObjectWrapper, no constructor in IDL'
      }
      function dI(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = rl(t)),
          (ZR(dI)[this.hy] = this)
      }
      function hI(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = void 0 === t ? yl() : void 0 === e ? ll(t) : ul(t, e)),
          (ZR(hI)[this.hy] = this)
      }
      function fI(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = gl(t)),
          (ZR(fI)[this.hy] = this)
      }
      function gI(t, e, n, o) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          (this.hy =
            void 0 === t
              ? hu()
              : void 0 === e
                ? _emscripten_bind_btVector4_btVector4_1(t)
                : void 0 === n
                  ? _emscripten_bind_btVector4_btVector4_2(t, e)
                  : void 0 === o
                    ? _emscripten_bind_btVector4_btVector4_3(t, e, n)
                    : fu(t, e, n, o)),
          (ZR(gI)[this.hy] = this)
      }
      function CI() {
        ;(this.hy = Lu()), (ZR(CI)[this.hy] = this)
      }
      function jI() {
        throw 'cannot construct a Anchor, no constructor in IDL'
      }
      function SI() {
        throw 'cannot construct a btVehicleRaycasterResult, no constructor in IDL'
      }
      function vI() {
        throw 'cannot construct a btVector3Array, no constructor in IDL'
      }
      function RI() {
        throw 'cannot construct a btConstraintSolver, no constructor in IDL'
      }
      function DI(t, e, n) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          (this.hy = cb(t, e, n)),
          (ZR(DI)[this.hy] = this)
      }
      function II(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = Vb(t)),
          (ZR(II)[this.hy] = this)
      }
      function PI(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = Qb(t)),
          (ZR(PI)[this.hy] = this)
      }
      function OI() {
        throw 'cannot construct a btConvexPolyhedron, no constructor in IDL'
      }
      function WI() {
        ;(this.hy = rm()), (ZR(WI)[this.hy] = this)
      }
      function BI() {
        throw 'cannot construct a tAnchorArray, no constructor in IDL'
      }
      function TI() {
        throw 'cannot construct a RaycastInfo, no constructor in IDL'
      }
      function AI(t, e, n) {
        oD(),
          t && 'object' == typeof t && (t = t.hy),
          'object' == typeof e && (e = pD(e)),
          n && 'object' == typeof n && (n = n.hy),
          (this.hy = Tm(t, e, n)),
          (ZR(AI)[this.hy] = this)
      }
      function kI(t, e, n, o) {
        oD(),
          t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          'object' == typeof o && (o = pD(o)),
          (this.hy = wm(t, e, n, o)),
          (ZR(kI)[this.hy] = this)
      }
      function xI() {
        throw 'cannot construct a btIntArray, no constructor in IDL'
      }
      function LI() {
        throw 'cannot construct a Config, no constructor in IDL'
      }
      function wI() {
        throw 'cannot construct a Node, no constructor in IDL'
      }
      function FI() {
        ;(this.hy = pf()), (ZR(FI)[this.hy] = this)
      }
      function MI() {
        throw 'cannot construct a btOverlappingPairCallback, no constructor in IDL'
      }
      function HI(t, e, n, o) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          (this.hy = void 0 === o ? af(t, e, n) : yf(t, e, n, o)),
          (ZR(HI)[this.hy] = this)
      }
      function GI() {
        throw 'cannot construct a btSoftBodyArray, no constructor in IDL'
      }
      function VI() {
        throw 'cannot construct a btFaceArray, no constructor in IDL'
      }
      function zI(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = Hf(t, e)),
          (ZR(zI)[this.hy] = this)
      }
      function NI() {
        throw 'cannot construct a btOverlappingPairCache, no constructor in IDL'
      }
      function UI() {
        throw 'cannot construct a btIndexedMesh, no constructor in IDL'
      }
      function EI(t, e, n, o, _) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          _ && 'object' == typeof _ && (_ = _.hy),
          (this.hy = Zf(t, e, n, o, _)),
          (ZR(EI)[this.hy] = this)
      }
      function qI(t, e, n, o) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          (this.hy = Hg(t, e, n, o)),
          (ZR(qI)[this.hy] = this)
      }
      function KI(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy =
            void 0 === t
              ? qg()
              : void 0 === e
                ? _emscripten_bind_btTransform_btTransform_1(t)
                : Kg(t, e)),
          (ZR(KI)[this.hy] = this)
      }
      function QI(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = _C(t, e)),
          (ZR(QI)[this.hy] = this)
      }
      function XI(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = void 0 === t ? vC() : RC(t)),
          (ZR(XI)[this.hy] = this)
      }
      function ZI() {
        ;(this.hy = IC()), (ZR(ZI)[this.hy] = this)
      }
      function YI(t, e, n) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          (this.hy = void 0 === n ? WC(t, e) : BC(t, e, n)),
          (ZR(YI)[this.hy] = this)
      }
      function JI() {
        throw 'cannot construct a btConstCollisionObjectArray, no constructor in IDL'
      }
      function $I(t, e, n, o, _) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          _ && 'object' == typeof _ && (_ = _.hy),
          (this.hy =
            void 0 === o
              ? MC(t, e, n)
              : void 0 === _
                ? _emscripten_bind_btSliderConstraint_btSliderConstraint_4(
                    t,
                    e,
                    n,
                    o,
                  )
                : HC(t, e, n, o, _)),
          (ZR($I)[this.hy] = this)
      }
      function tP() {
        ;(this.hy = ZC()), (ZR(tP)[this.hy] = this)
      }
      function eP() {
        throw 'cannot construct a btManifoldPoint, no constructor in IDL'
      }
      function nP(t, e, n, o) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          (this.hy =
            void 0 === n
              ? qj(t, e)
              : void 0 === o
                ? _emscripten_bind_btPoint2PointConstraint_btPoint2PointConstraint_3(
                    t,
                    e,
                    n,
                  )
                : Kj(t, e, n, o)),
          (ZR(nP)[this.hy] = this)
      }
      function oP() {
        ;(this.hy = rS()), (ZR(oP)[this.hy] = this)
      }
      function _P() {
        throw 'cannot construct a btBroadphaseProxy, no constructor in IDL'
      }
      function iP() {
        throw 'cannot construct a tNodeArray, no constructor in IDL'
      }
      function rP(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = SS(t)),
          (ZR(rP)[this.hy] = this)
      }
      function pP() {
        throw 'cannot construct a btFace, no constructor in IDL'
      }
      function sP() {
        ;(this.hy = xS()), (ZR(sP)[this.hy] = this)
      }
      function cP(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = zS(t, e)),
          (ZR(cP)[this.hy] = this)
      }
      function aP(t, e, n, o) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          (this.hy = JS(t, e, n, o)),
          (ZR(aP)[this.hy] = this)
      }
      function yP(t, e) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          (this.hy = Pv(t, e)),
          (ZR(yP)[this.hy] = this)
      }
      function lP() {
        throw 'cannot construct a btContactSolverInfo, no constructor in IDL'
      }
      function uP(t, e, n, o, _) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          _ && 'object' == typeof _ && (_ = _.hy),
          (this.hy =
            void 0 === o
              ? Uv(t, e, n)
              : void 0 === _
                ? _emscripten_bind_btGeneric6DofSpringConstraint_btGeneric6DofSpringConstraint_4(
                    t,
                    e,
                    n,
                    o,
                  )
                : Ev(t, e, n, o, _)),
          (ZR(uP)[this.hy] = this)
      }
      function bP(t) {
        t && 'object' == typeof t && (t = t.hy),
          (this.hy = cR(t)),
          (ZR(bP)[this.hy] = this)
      }
      function mP() {
        throw 'cannot construct a Face, no constructor in IDL'
      }
      function dP() {
        throw 'cannot construct a tFaceArray, no constructor in IDL'
      }
      function hP(t, e, n, o, _) {
        t && 'object' == typeof t && (t = t.hy),
          e && 'object' == typeof e && (e = e.hy),
          n && 'object' == typeof n && (n = n.hy),
          o && 'object' == typeof o && (o = o.hy),
          _ && 'object' == typeof _ && (_ = _.hy),
          (this.hy = IR(t, e, n, o, _)),
          (ZR(hP)[this.hy] = this)
      }
      return (
        (sD.prototype = Object.create(XR.prototype)),
        (sD.prototype.constructor = sD),
        (sD.prototype.iy = sD),
        (sD.jy = {}),
        (n.btCollisionWorld = sD),
        (sD.prototype.getDispatcher = function () {
          return YR($(this.hy), PD)
        }),
        (sD.prototype.rayTest = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            tt(o, t, e, n)
        }),
        (sD.prototype.getPairCache = function () {
          return YR(et(this.hy), NI)
        }),
        (sD.prototype.getDispatchInfo = function () {
          return YR(nt(this.hy), MD)
        }),
        (sD.prototype.addCollisionObject = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? ot(o, t)
              : void 0 === n
                ? _t(o, t, e)
                : it(o, t, e, n)
        }),
        (sD.prototype.removeCollisionObject = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), rt(e, t)
        }),
        (sD.prototype.getBroadphase = function () {
          return YR(pt(this.hy), VD)
        }),
        (sD.prototype.convexSweepTest = function (t, e, n, o, _) {
          var i = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            st(i, t, e, n, o, _)
        }),
        (sD.prototype.contactPairTest = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            ct(o, t, e, n)
        }),
        (sD.prototype.contactTest = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            at(n, t, e)
        }),
        (sD.prototype.updateSingleAabb = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), yt(e, t)
        }),
        (sD.prototype.setDebugDrawer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), lt(e, t)
        }),
        (sD.prototype.getDebugDrawer = function () {
          return YR(ut(this.hy), mD)
        }),
        (sD.prototype.debugDrawWorld = function () {
          bt(this.hy)
        }),
        (sD.prototype.debugDrawObject = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            mt(o, t, e, n)
        }),
        (sD.prototype.__destroy__ = function () {
          dt(this.hy)
        }),
        (cD.prototype = Object.create(XR.prototype)),
        (cD.prototype.constructor = cD),
        (cD.prototype.iy = cD),
        (cD.jy = {}),
        (n.btCollisionShape = cD),
        (cD.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ht(e, t)
        }),
        (cD.prototype.getLocalScaling = function () {
          return YR(ft(this.hy), jD)
        }),
        (cD.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            gt(n, t, e)
        }),
        (cD.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ct(e, t)
        }),
        (cD.prototype.getMargin = function () {
          return jt(this.hy)
        }),
        (cD.prototype.__destroy__ = function () {
          St(this.hy)
        }),
        (aD.prototype = Object.create(XR.prototype)),
        (aD.prototype.constructor = aD),
        (aD.prototype.iy = aD),
        (aD.jy = {}),
        (n.btCollisionObject = aD),
        (aD.prototype.setAnisotropicFriction = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            vt(n, t, e)
        }),
        (aD.prototype.getCollisionShape = function () {
          return YR(Rt(this.hy), cD)
        }),
        (aD.prototype.setContactProcessingThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Dt(e, t)
        }),
        (aD.prototype.setActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), It(e, t)
        }),
        (aD.prototype.forceActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Pt(e, t)
        }),
        (aD.prototype.activate = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy),
            void 0 === t ? Ot(e) : Wt(e, t)
        }),
        (aD.prototype.isActive = function () {
          return !!Bt(this.hy)
        }),
        (aD.prototype.isKinematicObject = function () {
          return !!Tt(this.hy)
        }),
        (aD.prototype.isStaticObject = function () {
          return !!At(this.hy)
        }),
        (aD.prototype.isStaticOrKinematicObject = function () {
          return !!kt(this.hy)
        }),
        (aD.prototype.getRestitution = function () {
          return xt(this.hy)
        }),
        (aD.prototype.getFriction = function () {
          return Lt(this.hy)
        }),
        (aD.prototype.getRollingFriction = function () {
          return wt(this.hy)
        }),
        (aD.prototype.setRestitution = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ft(e, t)
        }),
        (aD.prototype.setFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Mt(e, t)
        }),
        (aD.prototype.setRollingFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ht(e, t)
        }),
        (aD.prototype.getWorldTransform = function () {
          return YR(Gt(this.hy), KI)
        }),
        (aD.prototype.getCollisionFlags = function () {
          return Vt(this.hy)
        }),
        (aD.prototype.setCollisionFlags = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), zt(e, t)
        }),
        (aD.prototype.setWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Nt(e, t)
        }),
        (aD.prototype.setCollisionShape = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ut(e, t)
        }),
        (aD.prototype.setCcdMotionThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Et(e, t)
        }),
        (aD.prototype.setCcdSweptSphereRadius = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), qt(e, t)
        }),
        (aD.prototype.getUserIndex = function () {
          return Kt(this.hy)
        }),
        (aD.prototype.setUserIndex = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Qt(e, t)
        }),
        (aD.prototype.getUserPointer = function () {
          return YR(Xt(this.hy), rI)
        }),
        (aD.prototype.setUserPointer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Zt(e, t)
        }),
        (aD.prototype.getBroadphaseHandle = function () {
          return YR(Yt(this.hy), _P)
        }),
        (aD.prototype.__destroy__ = function () {
          Jt(this.hy)
        }),
        (yD.prototype = Object.create(sD.prototype)),
        (yD.prototype.constructor = yD),
        (yD.prototype.iy = yD),
        (yD.jy = {}),
        (n.btDynamicsWorld = yD),
        (yD.prototype.addAction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), $t(e, t)
        }),
        (yD.prototype.removeAction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), te(e, t)
        }),
        (yD.prototype.getSolverInfo = function () {
          return YR(ee(this.hy), lP)
        }),
        (yD.prototype.setInternalTickCallback = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? ne(o, t)
              : void 0 === n
                ? oe(o, t, e)
                : _e(o, t, e, n)
        }),
        (yD.prototype.getDispatcher = function () {
          return YR(ie(this.hy), PD)
        }),
        (yD.prototype.rayTest = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            re(o, t, e, n)
        }),
        (yD.prototype.getPairCache = function () {
          return YR(pe(this.hy), NI)
        }),
        (yD.prototype.getDispatchInfo = function () {
          return YR(se(this.hy), MD)
        }),
        (yD.prototype.addCollisionObject = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? ce(o, t)
              : void 0 === n
                ? ae(o, t, e)
                : ye(o, t, e, n)
        }),
        (yD.prototype.removeCollisionObject = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), le(e, t)
        }),
        (yD.prototype.getBroadphase = function () {
          return YR(ue(this.hy), VD)
        }),
        (yD.prototype.convexSweepTest = function (t, e, n, o, _) {
          var i = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            be(i, t, e, n, o, _)
        }),
        (yD.prototype.contactPairTest = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            me(o, t, e, n)
        }),
        (yD.prototype.contactTest = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            de(n, t, e)
        }),
        (yD.prototype.updateSingleAabb = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), he(e, t)
        }),
        (yD.prototype.setDebugDrawer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), fe(e, t)
        }),
        (yD.prototype.getDebugDrawer = function () {
          return YR(ge(this.hy), mD)
        }),
        (yD.prototype.debugDrawWorld = function () {
          Ce(this.hy)
        }),
        (yD.prototype.debugDrawObject = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            je(o, t, e, n)
        }),
        (yD.prototype.__destroy__ = function () {
          Se(this.hy)
        }),
        (lD.prototype = Object.create(XR.prototype)),
        (lD.prototype.constructor = lD),
        (lD.prototype.iy = lD),
        (lD.jy = {}),
        (n.btTypedConstraint = lD),
        (lD.prototype.enableFeedback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ve(e, t)
        }),
        (lD.prototype.getBreakingImpulseThreshold = function () {
          return Re(this.hy)
        }),
        (lD.prototype.setBreakingImpulseThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), De(e, t)
        }),
        (lD.prototype.getParam = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Ie(n, t, e)
          )
        }),
        (lD.prototype.setParam = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            Pe(o, t, e, n)
        }),
        (lD.prototype.__destroy__ = function () {
          Oe(this.hy)
        }),
        (uD.prototype = Object.create(cD.prototype)),
        (uD.prototype.constructor = uD),
        (uD.prototype.iy = uD),
        (uD.jy = {}),
        (n.btConcaveShape = uD),
        (uD.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), We(e, t)
        }),
        (uD.prototype.getLocalScaling = function () {
          return YR(Be(this.hy), jD)
        }),
        (uD.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Te(n, t, e)
        }),
        (uD.prototype.__destroy__ = function () {
          Ae(this.hy)
        }),
        (bD.prototype = Object.create(cD.prototype)),
        (bD.prototype.constructor = bD),
        (bD.prototype.iy = bD),
        (bD.jy = {}),
        (n.btCapsuleShape = bD),
        (bD.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), xe(e, t)
        }),
        (bD.prototype.getMargin = function () {
          return Le(this.hy)
        }),
        (bD.prototype.getUpAxis = function () {
          return we(this.hy)
        }),
        (bD.prototype.getRadius = function () {
          return Fe(this.hy)
        }),
        (bD.prototype.getHalfHeight = function () {
          return Me(this.hy)
        }),
        (bD.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), He(e, t)
        }),
        (bD.prototype.getLocalScaling = function () {
          return YR(Ge(this.hy), jD)
        }),
        (bD.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Ve(n, t, e)
        }),
        (bD.prototype.__destroy__ = function () {
          ze(this.hy)
        }),
        (mD.prototype = Object.create(XR.prototype)),
        (mD.prototype.constructor = mD),
        (mD.prototype.iy = mD),
        (mD.jy = {}),
        (n.btIDebugDraw = mD),
        (mD.prototype.drawLine = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            Ne(o, t, e, n)
        }),
        (mD.prototype.drawContactPoint = function (t, e, n, o, _) {
          var i = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            Ue(i, t, e, n, o, _)
        }),
        (mD.prototype.reportErrorWarning = function (t) {
          var e = this.hy
          oD(), (t = t && 'object' == typeof t ? t.hy : rD(t)), Ee(e, t)
        }),
        (mD.prototype.draw3dText = function (t, e) {
          var n = this.hy
          oD(),
            t && 'object' == typeof t && (t = t.hy),
            (e = e && 'object' == typeof e ? e.hy : rD(e)),
            qe(n, t, e)
        }),
        (mD.prototype.setDebugMode = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ke(e, t)
        }),
        (mD.prototype.getDebugMode = function () {
          return Qe(this.hy)
        }),
        (mD.prototype.__destroy__ = function () {
          Xe(this.hy)
        }),
        (dD.prototype = Object.create(XR.prototype)),
        (dD.prototype.constructor = dD),
        (dD.prototype.iy = dD),
        (dD.jy = {}),
        (n.btDefaultCollisionConfiguration = dD),
        (dD.prototype.__destroy__ = function () {
          Je(this.hy)
        }),
        (hD.prototype = Object.create(uD.prototype)),
        (hD.prototype.constructor = hD),
        (hD.prototype.iy = hD),
        (hD.jy = {}),
        (n.btTriangleMeshShape = hD),
        (hD.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), $e(e, t)
        }),
        (hD.prototype.getLocalScaling = function () {
          return YR(tn(this.hy), jD)
        }),
        (hD.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            en(n, t, e)
        }),
        (hD.prototype.__destroy__ = function () {
          nn(this.hy)
        }),
        (fD.prototype = Object.create(aD.prototype)),
        (fD.prototype.constructor = fD),
        (fD.prototype.iy = fD),
        (fD.jy = {}),
        (n.btGhostObject = fD),
        (fD.prototype.getNumOverlappingObjects = function () {
          return _n(this.hy)
        }),
        (fD.prototype.getOverlappingObject = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(rn(e, t), aD)
        }),
        (fD.prototype.setAnisotropicFriction = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            pn(n, t, e)
        }),
        (fD.prototype.getCollisionShape = function () {
          return YR(sn(this.hy), cD)
        }),
        (fD.prototype.setContactProcessingThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), cn(e, t)
        }),
        (fD.prototype.setActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), an(e, t)
        }),
        (fD.prototype.forceActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), yn(e, t)
        }),
        (fD.prototype.activate = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy),
            void 0 === t ? ln(e) : un(e, t)
        }),
        (fD.prototype.isActive = function () {
          return !!bn(this.hy)
        }),
        (fD.prototype.isKinematicObject = function () {
          return !!mn(this.hy)
        }),
        (fD.prototype.isStaticObject = function () {
          return !!dn(this.hy)
        }),
        (fD.prototype.isStaticOrKinematicObject = function () {
          return !!hn(this.hy)
        }),
        (fD.prototype.getRestitution = function () {
          return fn(this.hy)
        }),
        (fD.prototype.getFriction = function () {
          return gn(this.hy)
        }),
        (fD.prototype.getRollingFriction = function () {
          return Cn(this.hy)
        }),
        (fD.prototype.setRestitution = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), jn(e, t)
        }),
        (fD.prototype.setFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Sn(e, t)
        }),
        (fD.prototype.setRollingFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), vn(e, t)
        }),
        (fD.prototype.getWorldTransform = function () {
          return YR(Rn(this.hy), KI)
        }),
        (fD.prototype.getCollisionFlags = function () {
          return Dn(this.hy)
        }),
        (fD.prototype.setCollisionFlags = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), In(e, t)
        }),
        (fD.prototype.setWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Pn(e, t)
        }),
        (fD.prototype.setCollisionShape = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), On(e, t)
        }),
        (fD.prototype.setCcdMotionThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Wn(e, t)
        }),
        (fD.prototype.setCcdSweptSphereRadius = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Bn(e, t)
        }),
        (fD.prototype.getUserIndex = function () {
          return Tn(this.hy)
        }),
        (fD.prototype.setUserIndex = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), An(e, t)
        }),
        (fD.prototype.getUserPointer = function () {
          return YR(kn(this.hy), rI)
        }),
        (fD.prototype.setUserPointer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), xn(e, t)
        }),
        (fD.prototype.getBroadphaseHandle = function () {
          return YR(Ln(this.hy), _P)
        }),
        (fD.prototype.__destroy__ = function () {
          wn(this.hy)
        }),
        (gD.prototype = Object.create(cD.prototype)),
        (gD.prototype.constructor = gD),
        (gD.prototype.iy = gD),
        (gD.jy = {}),
        (n.btConeShape = gD),
        (gD.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Mn(e, t)
        }),
        (gD.prototype.getLocalScaling = function () {
          return YR(Hn(this.hy), jD)
        }),
        (gD.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Gn(n, t, e)
        }),
        (gD.prototype.__destroy__ = function () {
          Vn(this.hy)
        }),
        (CD.prototype = Object.create(XR.prototype)),
        (CD.prototype.constructor = CD),
        (CD.prototype.iy = CD),
        (CD.jy = {}),
        (n.btActionInterface = CD),
        (CD.prototype.updateAction = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            zn(n, t, e)
        }),
        (CD.prototype.__destroy__ = function () {
          Nn(this.hy)
        }),
        (jD.prototype = Object.create(XR.prototype)),
        (jD.prototype.constructor = jD),
        (jD.prototype.iy = jD),
        (jD.jy = {}),
        (n.btVector3 = jD),
        (jD.prototype.length = jD.prototype.length =
          function () {
            return qn(this.hy)
          }),
        (jD.prototype.x = jD.prototype.x =
          function () {
            return Kn(this.hy)
          }),
        (jD.prototype.y = jD.prototype.y =
          function () {
            return Qn(this.hy)
          }),
        (jD.prototype.z = jD.prototype.z =
          function () {
            return Xn(this.hy)
          }),
        (jD.prototype.setX = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Zn(e, t)
        }),
        (jD.prototype.setY = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Yn(e, t)
        }),
        (jD.prototype.setZ = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Jn(e, t)
        }),
        (jD.prototype.setValue = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            $n(o, t, e, n)
        }),
        (jD.prototype.normalize = jD.prototype.normalize =
          function () {
            to(this.hy)
          }),
        (jD.prototype.rotate = jD.prototype.rotate =
          function (t, e) {
            var n = this.hy
            return (
              t && 'object' == typeof t && (t = t.hy),
              e && 'object' == typeof e && (e = e.hy),
              YR(eo(n, t, e), jD)
            )
          }),
        (jD.prototype.dot = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), no(e, t)
        }),
        (jD.prototype.op_mul = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(oo(e, t), jD)
        }),
        (jD.prototype.op_add = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(_o(e, t), jD)
        }),
        (jD.prototype.op_sub = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(io(e, t), jD)
        }),
        (jD.prototype.__destroy__ = function () {
          ro(this.hy)
        }),
        (SD.prototype = Object.create(XR.prototype)),
        (SD.prototype.constructor = SD),
        (SD.prototype.iy = SD),
        (SD.jy = {}),
        (n.btVehicleRaycaster = SD),
        (SD.prototype.castRay = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            po(o, t, e, n)
        }),
        (SD.prototype.__destroy__ = function () {
          so(this.hy)
        }),
        (vD.prototype = Object.create(XR.prototype)),
        (vD.prototype.constructor = vD),
        (vD.prototype.iy = vD),
        (vD.jy = {}),
        (n.btQuadWord = vD),
        (vD.prototype.x = vD.prototype.x =
          function () {
            return co(this.hy)
          }),
        (vD.prototype.y = vD.prototype.y =
          function () {
            return ao(this.hy)
          }),
        (vD.prototype.z = vD.prototype.z =
          function () {
            return yo(this.hy)
          }),
        (vD.prototype.w = function () {
          return lo(this.hy)
        }),
        (vD.prototype.setX = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), uo(e, t)
        }),
        (vD.prototype.setY = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), bo(e, t)
        }),
        (vD.prototype.setZ = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), mo(e, t)
        }),
        (vD.prototype.setW = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ho(e, t)
        }),
        (vD.prototype.__destroy__ = function () {
          fo(this.hy)
        }),
        (RD.prototype = Object.create(cD.prototype)),
        (RD.prototype.constructor = RD),
        (RD.prototype.iy = RD),
        (RD.jy = {}),
        (n.btCylinderShape = RD),
        (RD.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Co(e, t)
        }),
        (RD.prototype.getMargin = function () {
          return jo(this.hy)
        }),
        (RD.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), So(e, t)
        }),
        (RD.prototype.getLocalScaling = function () {
          return YR(vo(this.hy), jD)
        }),
        (RD.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Ro(n, t, e)
        }),
        (RD.prototype.__destroy__ = function () {
          Do(this.hy)
        }),
        (DD.prototype = Object.create(yD.prototype)),
        (DD.prototype.constructor = DD),
        (DD.prototype.iy = DD),
        (DD.jy = {}),
        (n.btDiscreteDynamicsWorld = DD),
        (DD.prototype.setGravity = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Po(e, t)
        }),
        (DD.prototype.getGravity = function () {
          return YR(Oo(this.hy), jD)
        }),
        (DD.prototype.addRigidBody = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? Wo(o, t)
              : void 0 === n
                ? _emscripten_bind_btDiscreteDynamicsWorld_addRigidBody_2(
                    o,
                    t,
                    e,
                  )
                : Bo(o, t, e, n)
        }),
        (DD.prototype.removeRigidBody = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), To(e, t)
        }),
        (DD.prototype.addConstraint = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            void 0 === e ? Ao(n, t) : ko(n, t, e)
        }),
        (DD.prototype.removeConstraint = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), xo(e, t)
        }),
        (DD.prototype.stepSimulation = function (t, e, n) {
          var o = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? Lo(o, t)
              : void 0 === n
                ? wo(o, t, e)
                : Fo(o, t, e, n)
          )
        }),
        (DD.prototype.setContactAddedCallback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Mo(e, t)
        }),
        (DD.prototype.setContactProcessedCallback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ho(e, t)
        }),
        (DD.prototype.setContactDestroyedCallback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Go(e, t)
        }),
        (DD.prototype.getDispatcher = function () {
          return YR(Vo(this.hy), PD)
        }),
        (DD.prototype.rayTest = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            zo(o, t, e, n)
        }),
        (DD.prototype.getPairCache = function () {
          return YR(No(this.hy), NI)
        }),
        (DD.prototype.getDispatchInfo = function () {
          return YR(Uo(this.hy), MD)
        }),
        (DD.prototype.addCollisionObject = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? Eo(o, t)
              : void 0 === n
                ? qo(o, t, e)
                : Ko(o, t, e, n)
        }),
        (DD.prototype.removeCollisionObject = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Qo(e, t)
        }),
        (DD.prototype.getBroadphase = function () {
          return YR(Xo(this.hy), VD)
        }),
        (DD.prototype.convexSweepTest = function (t, e, n, o, _) {
          var i = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            Zo(i, t, e, n, o, _)
        }),
        (DD.prototype.contactPairTest = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            Yo(o, t, e, n)
        }),
        (DD.prototype.contactTest = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Jo(n, t, e)
        }),
        (DD.prototype.updateSingleAabb = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), $o(e, t)
        }),
        (DD.prototype.setDebugDrawer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), t_(e, t)
        }),
        (DD.prototype.getDebugDrawer = function () {
          return YR(e_(this.hy), mD)
        }),
        (DD.prototype.debugDrawWorld = function () {
          n_(this.hy)
        }),
        (DD.prototype.debugDrawObject = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o_(o, t, e, n)
        }),
        (DD.prototype.addAction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), __(e, t)
        }),
        (DD.prototype.removeAction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), i_(e, t)
        }),
        (DD.prototype.getSolverInfo = function () {
          return YR(r_(this.hy), lP)
        }),
        (DD.prototype.setInternalTickCallback = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? p_(o, t)
              : void 0 === n
                ? s_(o, t, e)
                : c_(o, t, e, n)
        }),
        (DD.prototype.__destroy__ = function () {
          a_(this.hy)
        }),
        (ID.prototype = Object.create(cD.prototype)),
        (ID.prototype.constructor = ID),
        (ID.prototype.iy = ID),
        (ID.jy = {}),
        (n.btConvexShape = ID),
        (ID.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), y_(e, t)
        }),
        (ID.prototype.getLocalScaling = function () {
          return YR(l_(this.hy), jD)
        }),
        (ID.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            u_(n, t, e)
        }),
        (ID.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), b_(e, t)
        }),
        (ID.prototype.getMargin = function () {
          return m_(this.hy)
        }),
        (ID.prototype.__destroy__ = function () {
          d_(this.hy)
        }),
        (PD.prototype = Object.create(XR.prototype)),
        (PD.prototype.constructor = PD),
        (PD.prototype.iy = PD),
        (PD.jy = {}),
        (n.btDispatcher = PD),
        (PD.prototype.getNumManifolds = function () {
          return h_(this.hy)
        }),
        (PD.prototype.getManifoldByIndexInternal = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(f_(e, t), UD)
        }),
        (PD.prototype.__destroy__ = function () {
          g_(this.hy)
        }),
        (OD.prototype = Object.create(lD.prototype)),
        (OD.prototype.constructor = OD),
        (OD.prototype.iy = OD),
        (OD.jy = {}),
        (n.btGeneric6DofConstraint = OD),
        (OD.prototype.setLinearLowerLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), S_(e, t)
        }),
        (OD.prototype.setLinearUpperLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), v_(e, t)
        }),
        (OD.prototype.setAngularLowerLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), R_(e, t)
        }),
        (OD.prototype.setAngularUpperLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), D_(e, t)
        }),
        (OD.prototype.getFrameOffsetA = function () {
          return YR(I_(this.hy), KI)
        }),
        (OD.prototype.enableFeedback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), P_(e, t)
        }),
        (OD.prototype.getBreakingImpulseThreshold = function () {
          return O_(this.hy)
        }),
        (OD.prototype.setBreakingImpulseThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), W_(e, t)
        }),
        (OD.prototype.getParam = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            B_(n, t, e)
          )
        }),
        (OD.prototype.setParam = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            T_(o, t, e, n)
        }),
        (OD.prototype.__destroy__ = function () {
          A_(this.hy)
        }),
        (WD.prototype = Object.create(XR.prototype)),
        (WD.prototype.constructor = WD),
        (WD.prototype.iy = WD),
        (WD.jy = {}),
        (n.btStridingMeshInterface = WD),
        (WD.prototype.setScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), k_(e, t)
        }),
        (WD.prototype.__destroy__ = function () {
          x_(this.hy)
        }),
        (BD.prototype = Object.create(XR.prototype)),
        (BD.prototype.constructor = BD),
        (BD.prototype.iy = BD),
        (BD.jy = {}),
        (n.btMotionState = BD),
        (BD.prototype.getWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), L_(e, t)
        }),
        (BD.prototype.setWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), w_(e, t)
        }),
        (BD.prototype.__destroy__ = function () {
          F_(this.hy)
        }),
        (TD.prototype = Object.create(XR.prototype)),
        (TD.prototype.constructor = TD),
        (TD.prototype.iy = TD),
        (TD.jy = {}),
        (n.ConvexResultCallback = TD),
        (TD.prototype.hasHit = function () {
          return !!M_(this.hy)
        }),
        (TD.prototype.get_m_collisionFilterGroup = TD.prototype.ky =
          function () {
            return H_(this.hy)
          }),
        (TD.prototype.set_m_collisionFilterGroup = TD.prototype.my =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), G_(e, t)
          }),
        Object.defineProperty(TD.prototype, 'm_collisionFilterGroup', {
          get: TD.prototype.ky,
          set: TD.prototype.my,
        }),
        (TD.prototype.get_m_collisionFilterMask = TD.prototype.ly =
          function () {
            return V_(this.hy)
          }),
        (TD.prototype.set_m_collisionFilterMask = TD.prototype.ny =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), z_(e, t)
          }),
        Object.defineProperty(TD.prototype, 'm_collisionFilterMask', {
          get: TD.prototype.ly,
          set: TD.prototype.ny,
        }),
        (TD.prototype.get_m_closestHitFraction = TD.prototype.oy =
          function () {
            return N_(this.hy)
          }),
        (TD.prototype.set_m_closestHitFraction = TD.prototype.py =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), U_(e, t)
          }),
        Object.defineProperty(TD.prototype, 'm_closestHitFraction', {
          get: TD.prototype.oy,
          set: TD.prototype.py,
        }),
        (TD.prototype.__destroy__ = function () {
          E_(this.hy)
        }),
        (AD.prototype = Object.create(XR.prototype)),
        (AD.prototype.constructor = AD),
        (AD.prototype.iy = AD),
        (AD.jy = {}),
        (n.ContactResultCallback = AD),
        (AD.prototype.addSingleResult = function (t, e, n, o, _, i, r) {
          var p = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            i && 'object' == typeof i && (i = i.hy),
            r && 'object' == typeof r && (r = r.hy),
            q_(p, t, e, n, o, _, i, r)
          )
        }),
        (AD.prototype.__destroy__ = function () {
          K_(this.hy)
        }),
        (kD.prototype = Object.create(XR.prototype)),
        (kD.prototype.constructor = kD),
        (kD.prototype.iy = kD),
        (kD.jy = {}),
        (n.btSoftBodySolver = kD),
        (kD.prototype.__destroy__ = function () {
          Q_(this.hy)
        }),
        (xD.prototype = Object.create(XR.prototype)),
        (xD.prototype.constructor = xD),
        (xD.prototype.iy = xD),
        (xD.jy = {}),
        (n.RayResultCallback = xD),
        (xD.prototype.hasHit = function () {
          return !!X_(this.hy)
        }),
        (xD.prototype.get_m_collisionFilterGroup = xD.prototype.ky =
          function () {
            return Z_(this.hy)
          }),
        (xD.prototype.set_m_collisionFilterGroup = xD.prototype.my =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Y_(e, t)
          }),
        Object.defineProperty(xD.prototype, 'm_collisionFilterGroup', {
          get: xD.prototype.ky,
          set: xD.prototype.my,
        }),
        (xD.prototype.get_m_collisionFilterMask = xD.prototype.ly =
          function () {
            return J_(this.hy)
          }),
        (xD.prototype.set_m_collisionFilterMask = xD.prototype.ny =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), $_(e, t)
          }),
        Object.defineProperty(xD.prototype, 'm_collisionFilterMask', {
          get: xD.prototype.ly,
          set: xD.prototype.ny,
        }),
        (xD.prototype.get_m_closestHitFraction = xD.prototype.oy =
          function () {
            return ti(this.hy)
          }),
        (xD.prototype.set_m_closestHitFraction = xD.prototype.py =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ei(e, t)
          }),
        Object.defineProperty(xD.prototype, 'm_closestHitFraction', {
          get: xD.prototype.oy,
          set: xD.prototype.py,
        }),
        (xD.prototype.get_m_collisionObject = xD.prototype.qy =
          function () {
            return YR(ni(this.hy), aD)
          }),
        (xD.prototype.set_m_collisionObject = xD.prototype.xy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), oi(e, t)
          }),
        Object.defineProperty(xD.prototype, 'm_collisionObject', {
          get: xD.prototype.qy,
          set: xD.prototype.xy,
        }),
        (xD.prototype.__destroy__ = function () {
          _i(this.hy)
        }),
        (LD.prototype = Object.create(XR.prototype)),
        (LD.prototype.constructor = LD),
        (LD.prototype.iy = LD),
        (LD.jy = {}),
        (n.btMatrix3x3 = LD),
        (LD.prototype.setEulerZYX = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            ii(o, t, e, n)
        }),
        (LD.prototype.getRotation = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ri(e, t)
        }),
        (LD.prototype.getRow = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(pi(e, t), jD)
        }),
        (LD.prototype.__destroy__ = function () {
          si(this.hy)
        }),
        (wD.prototype = Object.create(XR.prototype)),
        (wD.prototype.constructor = wD),
        (wD.prototype.iy = wD),
        (wD.jy = {}),
        (n.btScalarArray = wD),
        (wD.prototype.size = wD.prototype.size =
          function () {
            return ci(this.hy)
          }),
        (wD.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), ai(e, t)
        }),
        (wD.prototype.__destroy__ = function () {
          yi(this.hy)
        }),
        (FD.prototype = Object.create(XR.prototype)),
        (FD.prototype.constructor = FD),
        (FD.prototype.iy = FD),
        (FD.jy = {}),
        (n.Material = FD),
        (FD.prototype.get_m_kLST = FD.prototype.vA =
          function () {
            return li(this.hy)
          }),
        (FD.prototype.set_m_kLST = FD.prototype.bD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ui(e, t)
          }),
        Object.defineProperty(FD.prototype, 'm_kLST', {
          get: FD.prototype.vA,
          set: FD.prototype.bD,
        }),
        (FD.prototype.get_m_kAST = FD.prototype.uA =
          function () {
            return bi(this.hy)
          }),
        (FD.prototype.set_m_kAST = FD.prototype.aD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), mi(e, t)
          }),
        Object.defineProperty(FD.prototype, 'm_kAST', {
          get: FD.prototype.uA,
          set: FD.prototype.aD,
        }),
        (FD.prototype.get_m_kVST = FD.prototype.wA =
          function () {
            return di(this.hy)
          }),
        (FD.prototype.set_m_kVST = FD.prototype.cD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), hi(e, t)
          }),
        Object.defineProperty(FD.prototype, 'm_kVST', {
          get: FD.prototype.wA,
          set: FD.prototype.cD,
        }),
        (FD.prototype.get_m_flags = FD.prototype.cA =
          function () {
            return fi(this.hy)
          }),
        (FD.prototype.set_m_flags = FD.prototype.JC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), gi(e, t)
          }),
        Object.defineProperty(FD.prototype, 'm_flags', {
          get: FD.prototype.cA,
          set: FD.prototype.JC,
        }),
        (FD.prototype.__destroy__ = function () {
          Ci(this.hy)
        }),
        (MD.prototype = Object.create(XR.prototype)),
        (MD.prototype.constructor = MD),
        (MD.prototype.iy = MD),
        (MD.jy = {}),
        (n.btDispatcherInfo = MD),
        (MD.prototype.get_m_timeStep = MD.prototype.jB =
          function () {
            return ji(this.hy)
          }),
        (MD.prototype.set_m_timeStep = MD.prototype.QD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Si(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_timeStep', {
          get: MD.prototype.jB,
          set: MD.prototype.QD,
        }),
        (MD.prototype.get_m_stepCount = MD.prototype.aB =
          function () {
            return vi(this.hy)
          }),
        (MD.prototype.set_m_stepCount = MD.prototype.HD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ri(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_stepCount', {
          get: MD.prototype.aB,
          set: MD.prototype.HD,
        }),
        (MD.prototype.get_m_dispatchFunc = MD.prototype.Wz =
          function () {
            return Di(this.hy)
          }),
        (MD.prototype.set_m_dispatchFunc = MD.prototype.CC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ii(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_dispatchFunc', {
          get: MD.prototype.Wz,
          set: MD.prototype.CC,
        }),
        (MD.prototype.get_m_timeOfImpact = MD.prototype.iB =
          function () {
            return Pi(this.hy)
          }),
        (MD.prototype.set_m_timeOfImpact = MD.prototype.PD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Oi(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_timeOfImpact', {
          get: MD.prototype.iB,
          set: MD.prototype.PD,
        }),
        (MD.prototype.get_m_useContinuous = MD.prototype.lB =
          function () {
            return !!Wi(this.hy)
          }),
        (MD.prototype.set_m_useContinuous = MD.prototype.SD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Bi(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_useContinuous', {
          get: MD.prototype.lB,
          set: MD.prototype.SD,
        }),
        (MD.prototype.get_m_enableSatConvex = MD.prototype.$z =
          function () {
            return !!Ti(this.hy)
          }),
        (MD.prototype.set_m_enableSatConvex = MD.prototype.GC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ai(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_enableSatConvex', {
          get: MD.prototype.$z,
          set: MD.prototype.GC,
        }),
        (MD.prototype.get_m_enableSPU = MD.prototype.Zz =
          function () {
            return !!ki(this.hy)
          }),
        (MD.prototype.set_m_enableSPU = MD.prototype.FC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), xi(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_enableSPU', {
          get: MD.prototype.Zz,
          set: MD.prototype.FC,
        }),
        (MD.prototype.get_m_useEpa = MD.prototype.nB =
          function () {
            return !!Li(this.hy)
          }),
        (MD.prototype.set_m_useEpa = MD.prototype.UD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), wi(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_useEpa', {
          get: MD.prototype.nB,
          set: MD.prototype.UD,
        }),
        (MD.prototype.get_m_allowedCcdPenetration = MD.prototype.zz =
          function () {
            return Fi(this.hy)
          }),
        (MD.prototype.set_m_allowedCcdPenetration = MD.prototype.fC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Mi(e, t)
          }),
        Object.defineProperty(MD.prototype, 'm_allowedCcdPenetration', {
          get: MD.prototype.zz,
          set: MD.prototype.fC,
        }),
        (MD.prototype.get_m_useConvexConservativeDistanceUtil =
          MD.prototype.mB =
            function () {
              return !!Hi(this.hy)
            }),
        (MD.prototype.set_m_useConvexConservativeDistanceUtil =
          MD.prototype.TD =
            function (t) {
              var e = this.hy
              t && 'object' == typeof t && (t = t.hy), Gi(e, t)
            }),
        Object.defineProperty(
          MD.prototype,
          'm_useConvexConservativeDistanceUtil',
          { get: MD.prototype.mB, set: MD.prototype.TD },
        ),
        (MD.prototype.get_m_convexConservativeDistanceThreshold =
          MD.prototype.Rz =
            function () {
              return Vi(this.hy)
            }),
        (MD.prototype.set_m_convexConservativeDistanceThreshold =
          MD.prototype.xC =
            function (t) {
              var e = this.hy
              t && 'object' == typeof t && (t = t.hy), zi(e, t)
            }),
        Object.defineProperty(
          MD.prototype,
          'm_convexConservativeDistanceThreshold',
          { get: MD.prototype.Rz, set: MD.prototype.xC },
        ),
        (MD.prototype.__destroy__ = function () {
          Ni(this.hy)
        }),
        (HD.prototype = Object.create(XR.prototype)),
        (HD.prototype.constructor = HD),
        (HD.prototype.iy = HD),
        (HD.jy = {}),
        (n.btWheelInfoConstructionInfo = HD),
        (HD.prototype.get_m_chassisConnectionCS = HD.prototype.Lz =
          function () {
            return YR(Ui(this.hy), jD)
          }),
        (HD.prototype.set_m_chassisConnectionCS = HD.prototype.rC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ei(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_chassisConnectionCS', {
          get: HD.prototype.Lz,
          set: HD.prototype.rC,
        }),
        (HD.prototype.get_m_wheelDirectionCS = HD.prototype.Ly =
          function () {
            return YR(qi(this.hy), jD)
          }),
        (HD.prototype.set_m_wheelDirectionCS = HD.prototype.Uy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ki(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_wheelDirectionCS', {
          get: HD.prototype.Ly,
          set: HD.prototype.Uy,
        }),
        (HD.prototype.get_m_wheelAxleCS = HD.prototype.Ky =
          function () {
            return YR(Qi(this.hy), jD)
          }),
        (HD.prototype.set_m_wheelAxleCS = HD.prototype.Ty =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Xi(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_wheelAxleCS', {
          get: HD.prototype.Ky,
          set: HD.prototype.Ty,
        }),
        (HD.prototype.get_m_suspensionRestLength = HD.prototype.fB =
          function () {
            return Zi(this.hy)
          }),
        (HD.prototype.set_m_suspensionRestLength = HD.prototype.MD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Yi(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_suspensionRestLength', {
          get: HD.prototype.fB,
          set: HD.prototype.MD,
        }),
        (HD.prototype.get_m_maxSuspensionTravelCm = HD.prototype.vy =
          function () {
            return Ji(this.hy)
          }),
        (HD.prototype.set_m_maxSuspensionTravelCm = HD.prototype.Cy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), $i(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_maxSuspensionTravelCm', {
          get: HD.prototype.vy,
          set: HD.prototype.Cy,
        }),
        (HD.prototype.get_m_wheelRadius = HD.prototype.tB =
          function () {
            return tr(this.hy)
          }),
        (HD.prototype.set_m_wheelRadius = HD.prototype.$D =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), er(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_wheelRadius', {
          get: HD.prototype.tB,
          set: HD.prototype.$D,
        }),
        (HD.prototype.get_m_suspensionStiffness = HD.prototype.wy =
          function () {
            return nr(this.hy)
          }),
        (HD.prototype.set_m_suspensionStiffness = HD.prototype.Dy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), or(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_suspensionStiffness', {
          get: HD.prototype.wy,
          set: HD.prototype.Dy,
        }),
        (HD.prototype.get_m_wheelsDampingCompression = HD.prototype.My =
          function () {
            return _r(this.hy)
          }),
        (HD.prototype.set_m_wheelsDampingCompression = HD.prototype.Vy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ir(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_wheelsDampingCompression', {
          get: HD.prototype.My,
          set: HD.prototype.Vy,
        }),
        (HD.prototype.get_m_wheelsDampingRelaxation = HD.prototype.Ny =
          function () {
            return rr(this.hy)
          }),
        (HD.prototype.set_m_wheelsDampingRelaxation = HD.prototype.Wy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), pr(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_wheelsDampingRelaxation', {
          get: HD.prototype.Ny,
          set: HD.prototype.Wy,
        }),
        (HD.prototype.get_m_frictionSlip = HD.prototype.ry =
          function () {
            return sr(this.hy)
          }),
        (HD.prototype.set_m_frictionSlip = HD.prototype.yy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), cr(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_frictionSlip', {
          get: HD.prototype.ry,
          set: HD.prototype.yy,
        }),
        (HD.prototype.get_m_maxSuspensionForce = HD.prototype.uy =
          function () {
            return ar(this.hy)
          }),
        (HD.prototype.set_m_maxSuspensionForce = HD.prototype.By =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), yr(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_maxSuspensionForce', {
          get: HD.prototype.uy,
          set: HD.prototype.By,
        }),
        (HD.prototype.get_m_bIsFrontWheel = HD.prototype.Fy =
          function () {
            return !!lr(this.hy)
          }),
        (HD.prototype.set_m_bIsFrontWheel = HD.prototype.Oy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ur(e, t)
          }),
        Object.defineProperty(HD.prototype, 'm_bIsFrontWheel', {
          get: HD.prototype.Fy,
          set: HD.prototype.Oy,
        }),
        (HD.prototype.__destroy__ = function () {
          br(this.hy)
        }),
        (GD.prototype = Object.create(ID.prototype)),
        (GD.prototype.constructor = GD),
        (GD.prototype.iy = GD),
        (GD.jy = {}),
        (n.btConvexTriangleMeshShape = GD),
        (GD.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), hr(e, t)
        }),
        (GD.prototype.getLocalScaling = function () {
          return YR(fr(this.hy), jD)
        }),
        (GD.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            gr(n, t, e)
        }),
        (GD.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Cr(e, t)
        }),
        (GD.prototype.getMargin = function () {
          return jr(this.hy)
        }),
        (GD.prototype.__destroy__ = function () {
          Sr(this.hy)
        }),
        (VD.prototype = Object.create(XR.prototype)),
        (VD.prototype.constructor = VD),
        (VD.prototype.iy = VD),
        (VD.jy = {}),
        (n.btBroadphaseInterface = VD),
        (VD.prototype.getOverlappingPairCache = function () {
          return YR(vr(this.hy), NI)
        }),
        (VD.prototype.__destroy__ = function () {
          Rr(this.hy)
        }),
        (zD.prototype = Object.create(XR.prototype)),
        (zD.prototype.constructor = zD),
        (zD.prototype.iy = zD),
        (zD.jy = {}),
        (n.btRigidBodyConstructionInfo = zD),
        (zD.prototype.get_m_linearDamping = zD.prototype.xA =
          function () {
            return Pr(this.hy)
          }),
        (zD.prototype.set_m_linearDamping = zD.prototype.dD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Or(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_linearDamping', {
          get: zD.prototype.xA,
          set: zD.prototype.dD,
        }),
        (zD.prototype.get_m_angularDamping = zD.prototype.Bz =
          function () {
            return Wr(this.hy)
          }),
        (zD.prototype.set_m_angularDamping = zD.prototype.hC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Br(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_angularDamping', {
          get: zD.prototype.Bz,
          set: zD.prototype.hC,
        }),
        (zD.prototype.get_m_friction = zD.prototype.dA =
          function () {
            return Tr(this.hy)
          }),
        (zD.prototype.set_m_friction = zD.prototype.KC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ar(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_friction', {
          get: zD.prototype.dA,
          set: zD.prototype.KC,
        }),
        (zD.prototype.get_m_rollingFriction = zD.prototype.TA =
          function () {
            return kr(this.hy)
          }),
        (zD.prototype.set_m_rollingFriction = zD.prototype.zD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), xr(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_rollingFriction', {
          get: zD.prototype.TA,
          set: zD.prototype.zD,
        }),
        (zD.prototype.get_m_restitution = zD.prototype.RA =
          function () {
            return Lr(this.hy)
          }),
        (zD.prototype.set_m_restitution = zD.prototype.xD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), wr(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_restitution', {
          get: zD.prototype.RA,
          set: zD.prototype.xD,
        }),
        (zD.prototype.get_m_linearSleepingThreshold = zD.prototype.yA =
          function () {
            return Fr(this.hy)
          }),
        (zD.prototype.set_m_linearSleepingThreshold = zD.prototype.eD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Mr(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_linearSleepingThreshold', {
          get: zD.prototype.yA,
          set: zD.prototype.eD,
        }),
        (zD.prototype.get_m_angularSleepingThreshold = zD.prototype.Cz =
          function () {
            return Hr(this.hy)
          }),
        (zD.prototype.set_m_angularSleepingThreshold = zD.prototype.iC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Gr(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_angularSleepingThreshold', {
          get: zD.prototype.Cz,
          set: zD.prototype.iC,
        }),
        (zD.prototype.get_m_additionalDamping = zD.prototype.wz =
          function () {
            return !!Vr(this.hy)
          }),
        (zD.prototype.set_m_additionalDamping = zD.prototype.cC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), zr(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_additionalDamping', {
          get: zD.prototype.wz,
          set: zD.prototype.cC,
        }),
        (zD.prototype.get_m_additionalDampingFactor = zD.prototype.xz =
          function () {
            return Nr(this.hy)
          }),
        (zD.prototype.set_m_additionalDampingFactor = zD.prototype.dC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ur(e, t)
          }),
        Object.defineProperty(zD.prototype, 'm_additionalDampingFactor', {
          get: zD.prototype.xz,
          set: zD.prototype.dC,
        }),
        (zD.prototype.get_m_additionalLinearDampingThresholdSqr =
          zD.prototype.yz =
            function () {
              return Er(this.hy)
            }),
        (zD.prototype.set_m_additionalLinearDampingThresholdSqr =
          zD.prototype.eC =
            function (t) {
              var e = this.hy
              t && 'object' == typeof t && (t = t.hy), qr(e, t)
            }),
        Object.defineProperty(
          zD.prototype,
          'm_additionalLinearDampingThresholdSqr',
          { get: zD.prototype.yz, set: zD.prototype.eC },
        ),
        (zD.prototype.get_m_additionalAngularDampingThresholdSqr =
          zD.prototype.vz =
            function () {
              return Kr(this.hy)
            }),
        (zD.prototype.set_m_additionalAngularDampingThresholdSqr =
          zD.prototype.bC =
            function (t) {
              var e = this.hy
              t && 'object' == typeof t && (t = t.hy), Qr(e, t)
            }),
        Object.defineProperty(
          zD.prototype,
          'm_additionalAngularDampingThresholdSqr',
          { get: zD.prototype.vz, set: zD.prototype.bC },
        ),
        (zD.prototype.get_m_additionalAngularDampingFactor = zD.prototype.uz =
          function () {
            return Xr(this.hy)
          }),
        (zD.prototype.set_m_additionalAngularDampingFactor = zD.prototype.aC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Zr(e, t)
          }),
        Object.defineProperty(
          zD.prototype,
          'm_additionalAngularDampingFactor',
          { get: zD.prototype.uz, set: zD.prototype.aC },
        ),
        (zD.prototype.__destroy__ = function () {
          Yr(this.hy)
        }),
        (ND.prototype = Object.create(XR.prototype)),
        (ND.prototype.constructor = ND),
        (ND.prototype.iy = ND),
        (ND.jy = {}),
        (n.btCollisionConfiguration = ND),
        (ND.prototype.__destroy__ = function () {
          Jr(this.hy)
        }),
        (UD.prototype = Object.create(XR.prototype)),
        (UD.prototype.constructor = UD),
        (UD.prototype.iy = UD),
        (UD.jy = {}),
        (n.btPersistentManifold = UD),
        (UD.prototype.getBody0 = function () {
          return YR(tp(this.hy), aD)
        }),
        (UD.prototype.getBody1 = function () {
          return YR(ep(this.hy), aD)
        }),
        (UD.prototype.getNumContacts = function () {
          return np(this.hy)
        }),
        (UD.prototype.getContactPoint = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(op(e, t), eP)
        }),
        (UD.prototype.__destroy__ = function () {
          _p(this.hy)
        }),
        (ED.prototype = Object.create(cD.prototype)),
        (ED.prototype.constructor = ED),
        (ED.prototype.iy = ED),
        (ED.jy = {}),
        (n.btCompoundShape = ED),
        (ED.prototype.addChildShape = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            pp(n, t, e)
        }),
        (ED.prototype.removeChildShape = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), sp(e, t)
        }),
        (ED.prototype.removeChildShapeByIndex = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), cp(e, t)
        }),
        (ED.prototype.getNumChildShapes = function () {
          return ap(this.hy)
        }),
        (ED.prototype.getChildShape = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(yp(e, t), cD)
        }),
        (ED.prototype.updateChildTransform = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === n ? lp(o, t, e) : up(o, t, e, n)
        }),
        (ED.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), bp(e, t)
        }),
        (ED.prototype.getMargin = function () {
          return mp(this.hy)
        }),
        (ED.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), dp(e, t)
        }),
        (ED.prototype.getLocalScaling = function () {
          return YR(hp(this.hy), jD)
        }),
        (ED.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            fp(n, t, e)
        }),
        (ED.prototype.__destroy__ = function () {
          gp(this.hy)
        }),
        (qD.prototype = Object.create(TD.prototype)),
        (qD.prototype.constructor = qD),
        (qD.prototype.iy = qD),
        (qD.jy = {}),
        (n.ClosestConvexResultCallback = qD),
        (qD.prototype.hasHit = function () {
          return !!jp(this.hy)
        }),
        (qD.prototype.get_m_convexFromWorld = qD.prototype.Sz =
          function () {
            return YR(Sp(this.hy), jD)
          }),
        (qD.prototype.set_m_convexFromWorld = qD.prototype.yC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), vp(e, t)
          }),
        Object.defineProperty(qD.prototype, 'm_convexFromWorld', {
          get: qD.prototype.Sz,
          set: qD.prototype.yC,
        }),
        (qD.prototype.get_m_convexToWorld = qD.prototype.Tz =
          function () {
            return YR(Rp(this.hy), jD)
          }),
        (qD.prototype.set_m_convexToWorld = qD.prototype.zC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Dp(e, t)
          }),
        Object.defineProperty(qD.prototype, 'm_convexToWorld', {
          get: qD.prototype.Tz,
          set: qD.prototype.zC,
        }),
        (qD.prototype.get_m_hitNormalWorld = qD.prototype.sy =
          function () {
            return YR(Ip(this.hy), jD)
          }),
        (qD.prototype.set_m_hitNormalWorld = qD.prototype.zy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Pp(e, t)
          }),
        Object.defineProperty(qD.prototype, 'm_hitNormalWorld', {
          get: qD.prototype.sy,
          set: qD.prototype.zy,
        }),
        (qD.prototype.get_m_hitPointWorld = qD.prototype.ty =
          function () {
            return YR(Op(this.hy), jD)
          }),
        (qD.prototype.set_m_hitPointWorld = qD.prototype.Ay =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Wp(e, t)
          }),
        Object.defineProperty(qD.prototype, 'm_hitPointWorld', {
          get: qD.prototype.ty,
          set: qD.prototype.Ay,
        }),
        (qD.prototype.get_m_collisionFilterGroup = qD.prototype.ky =
          function () {
            return Bp(this.hy)
          }),
        (qD.prototype.set_m_collisionFilterGroup = qD.prototype.my =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Tp(e, t)
          }),
        Object.defineProperty(qD.prototype, 'm_collisionFilterGroup', {
          get: qD.prototype.ky,
          set: qD.prototype.my,
        }),
        (qD.prototype.get_m_collisionFilterMask = qD.prototype.ly =
          function () {
            return Ap(this.hy)
          }),
        (qD.prototype.set_m_collisionFilterMask = qD.prototype.ny =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), kp(e, t)
          }),
        Object.defineProperty(qD.prototype, 'm_collisionFilterMask', {
          get: qD.prototype.ly,
          set: qD.prototype.ny,
        }),
        (qD.prototype.get_m_closestHitFraction = qD.prototype.oy =
          function () {
            return xp(this.hy)
          }),
        (qD.prototype.set_m_closestHitFraction = qD.prototype.py =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Lp(e, t)
          }),
        Object.defineProperty(qD.prototype, 'm_closestHitFraction', {
          get: qD.prototype.oy,
          set: qD.prototype.py,
        }),
        (qD.prototype.__destroy__ = function () {
          wp(this.hy)
        }),
        (KD.prototype = Object.create(xD.prototype)),
        (KD.prototype.constructor = KD),
        (KD.prototype.iy = KD),
        (KD.jy = {}),
        (n.AllHitsRayResultCallback = KD),
        (KD.prototype.hasHit = function () {
          return !!Mp(this.hy)
        }),
        (KD.prototype.get_m_collisionObjects = KD.prototype.Oz =
          function () {
            return YR(Hp(this.hy), JI)
          }),
        (KD.prototype.set_m_collisionObjects = KD.prototype.uC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Gp(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_collisionObjects', {
          get: KD.prototype.Oz,
          set: KD.prototype.uC,
        }),
        (KD.prototype.get_m_rayFromWorld = KD.prototype.Iy =
          function () {
            return YR(Vp(this.hy), jD)
          }),
        (KD.prototype.set_m_rayFromWorld = KD.prototype.Ry =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), zp(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_rayFromWorld', {
          get: KD.prototype.Iy,
          set: KD.prototype.Ry,
        }),
        (KD.prototype.get_m_rayToWorld = KD.prototype.Jy =
          function () {
            return YR(Np(this.hy), jD)
          }),
        (KD.prototype.set_m_rayToWorld = KD.prototype.Sy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Up(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_rayToWorld', {
          get: KD.prototype.Jy,
          set: KD.prototype.Sy,
        }),
        (KD.prototype.get_m_hitNormalWorld = KD.prototype.sy =
          function () {
            return YR(Ep(this.hy), vI)
          }),
        (KD.prototype.set_m_hitNormalWorld = KD.prototype.zy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), qp(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_hitNormalWorld', {
          get: KD.prototype.sy,
          set: KD.prototype.zy,
        }),
        (KD.prototype.get_m_hitPointWorld = KD.prototype.ty =
          function () {
            return YR(Kp(this.hy), vI)
          }),
        (KD.prototype.set_m_hitPointWorld = KD.prototype.Ay =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Qp(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_hitPointWorld', {
          get: KD.prototype.ty,
          set: KD.prototype.Ay,
        }),
        (KD.prototype.get_m_hitFractions = KD.prototype.kA =
          function () {
            return YR(Xp(this.hy), wD)
          }),
        (KD.prototype.set_m_hitFractions = KD.prototype.RC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Zp(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_hitFractions', {
          get: KD.prototype.kA,
          set: KD.prototype.RC,
        }),
        (KD.prototype.get_m_collisionFilterGroup = KD.prototype.ky =
          function () {
            return Yp(this.hy)
          }),
        (KD.prototype.set_m_collisionFilterGroup = KD.prototype.my =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Jp(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_collisionFilterGroup', {
          get: KD.prototype.ky,
          set: KD.prototype.my,
        }),
        (KD.prototype.get_m_collisionFilterMask = KD.prototype.ly =
          function () {
            return $p(this.hy)
          }),
        (KD.prototype.set_m_collisionFilterMask = KD.prototype.ny =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ts(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_collisionFilterMask', {
          get: KD.prototype.ly,
          set: KD.prototype.ny,
        }),
        (KD.prototype.get_m_closestHitFraction = KD.prototype.oy =
          function () {
            return es(this.hy)
          }),
        (KD.prototype.set_m_closestHitFraction = KD.prototype.py =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ns(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_closestHitFraction', {
          get: KD.prototype.oy,
          set: KD.prototype.py,
        }),
        (KD.prototype.get_m_collisionObject = KD.prototype.qy =
          function () {
            return YR(os(this.hy), aD)
          }),
        (KD.prototype.set_m_collisionObject = KD.prototype.xy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), _s(e, t)
          }),
        Object.defineProperty(KD.prototype, 'm_collisionObject', {
          get: KD.prototype.qy,
          set: KD.prototype.xy,
        }),
        (KD.prototype.__destroy__ = function () {
          is(this.hy)
        }),
        (QD.prototype = Object.create(XR.prototype)),
        (QD.prototype.constructor = QD),
        (QD.prototype.iy = QD),
        (QD.jy = {}),
        (n.tMaterialArray = QD),
        (QD.prototype.size = QD.prototype.size =
          function () {
            return rs(this.hy)
          }),
        (QD.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(ps(e, t), FD)
        }),
        (QD.prototype.__destroy__ = function () {
          ss(this.hy)
        }),
        (XD.prototype = Object.create(SD.prototype)),
        (XD.prototype.constructor = XD),
        (XD.prototype.iy = XD),
        (XD.jy = {}),
        (n.btDefaultVehicleRaycaster = XD),
        (XD.prototype.castRay = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            as(o, t, e, n)
        }),
        (XD.prototype.__destroy__ = function () {
          ys(this.hy)
        }),
        (ZD.prototype = Object.create(uD.prototype)),
        (ZD.prototype.constructor = ZD),
        (ZD.prototype.iy = ZD),
        (ZD.jy = {}),
        (n.btEmptyShape = ZD),
        (ZD.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), us(e, t)
        }),
        (ZD.prototype.getLocalScaling = function () {
          return YR(bs(this.hy), jD)
        }),
        (ZD.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ms(n, t, e)
        }),
        (ZD.prototype.__destroy__ = function () {
          ds(this.hy)
        }),
        (YD.prototype = Object.create(XR.prototype)),
        (YD.prototype.constructor = YD),
        (YD.prototype.iy = YD),
        (YD.jy = {}),
        (n.btConstraintSetting = YD),
        (YD.prototype.get_m_tau = YD.prototype.hB =
          function () {
            return fs(this.hy)
          }),
        (YD.prototype.set_m_tau = YD.prototype.OD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), gs(e, t)
          }),
        Object.defineProperty(YD.prototype, 'm_tau', {
          get: YD.prototype.hB,
          set: YD.prototype.OD,
        }),
        (YD.prototype.get_m_damping = YD.prototype.Uz =
          function () {
            return Cs(this.hy)
          }),
        (YD.prototype.set_m_damping = YD.prototype.AC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), js(e, t)
          }),
        Object.defineProperty(YD.prototype, 'm_damping', {
          get: YD.prototype.Uz,
          set: YD.prototype.AC,
        }),
        (YD.prototype.get_m_impulseClamp = YD.prototype.qA =
          function () {
            return Ss(this.hy)
          }),
        (YD.prototype.set_m_impulseClamp = YD.prototype.XC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), vs(e, t)
          }),
        Object.defineProperty(YD.prototype, 'm_impulseClamp', {
          get: YD.prototype.qA,
          set: YD.prototype.XC,
        }),
        (YD.prototype.__destroy__ = function () {
          Rs(this.hy)
        }),
        (JD.prototype = Object.create(XR.prototype)),
        (JD.prototype.constructor = JD),
        (JD.prototype.iy = JD),
        (JD.jy = {}),
        (n.LocalShapeInfo = JD),
        (JD.prototype.get_m_shapePart = JD.prototype.WA =
          function () {
            return Ds(this.hy)
          }),
        (JD.prototype.set_m_shapePart = JD.prototype.CD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Is(e, t)
          }),
        Object.defineProperty(JD.prototype, 'm_shapePart', {
          get: JD.prototype.WA,
          set: JD.prototype.CD,
        }),
        (JD.prototype.get_m_triangleIndex = JD.prototype.kB =
          function () {
            return Ps(this.hy)
          }),
        (JD.prototype.set_m_triangleIndex = JD.prototype.RD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Os(e, t)
          }),
        Object.defineProperty(JD.prototype, 'm_triangleIndex', {
          get: JD.prototype.kB,
          set: JD.prototype.RD,
        }),
        (JD.prototype.__destroy__ = function () {
          Ws(this.hy)
        }),
        ($D.prototype = Object.create(aD.prototype)),
        ($D.prototype.constructor = $D),
        ($D.prototype.iy = $D),
        ($D.jy = {}),
        (n.btRigidBody = $D),
        ($D.prototype.getCenterOfMassTransform = function () {
          return YR(Ts(this.hy), KI)
        }),
        ($D.prototype.setCenterOfMassTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), As(e, t)
        }),
        ($D.prototype.setSleepingThresholds = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ks(n, t, e)
        }),
        ($D.prototype.getLinearDamping = function () {
          return xs(this.hy)
        }),
        ($D.prototype.getAngularDamping = function () {
          return Ls(this.hy)
        }),
        ($D.prototype.setDamping = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ws(n, t, e)
        }),
        ($D.prototype.setMassProps = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Fs(n, t, e)
        }),
        ($D.prototype.getLinearFactor = function () {
          return YR(Ms(this.hy), jD)
        }),
        ($D.prototype.setLinearFactor = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Hs(e, t)
        }),
        ($D.prototype.applyTorque = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Gs(e, t)
        }),
        ($D.prototype.applyLocalTorque = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Vs(e, t)
        }),
        ($D.prototype.applyForce = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            zs(n, t, e)
        }),
        ($D.prototype.applyCentralForce = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ns(e, t)
        }),
        ($D.prototype.applyCentralLocalForce = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Us(e, t)
        }),
        ($D.prototype.applyTorqueImpulse = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Es(e, t)
        }),
        ($D.prototype.applyImpulse = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            qs(n, t, e)
        }),
        ($D.prototype.applyCentralImpulse = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ks(e, t)
        }),
        ($D.prototype.updateInertiaTensor = function () {
          Qs(this.hy)
        }),
        ($D.prototype.getLinearVelocity = function () {
          return YR(Xs(this.hy), jD)
        }),
        ($D.prototype.getAngularVelocity = function () {
          return YR(Zs(this.hy), jD)
        }),
        ($D.prototype.setLinearVelocity = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ys(e, t)
        }),
        ($D.prototype.setAngularVelocity = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Js(e, t)
        }),
        ($D.prototype.getMotionState = function () {
          return YR($s(this.hy), BD)
        }),
        ($D.prototype.setMotionState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), tc(e, t)
        }),
        ($D.prototype.getAngularFactor = function () {
          return YR(ec(this.hy), jD)
        }),
        ($D.prototype.setAngularFactor = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), nc(e, t)
        }),
        ($D.prototype.upcast = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(oc(e, t), $D)
        }),
        ($D.prototype.getAabb = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            _c(n, t, e)
        }),
        ($D.prototype.applyGravity = function () {
          ic(this.hy)
        }),
        ($D.prototype.getGravity = function () {
          return YR(rc(this.hy), jD)
        }),
        ($D.prototype.setGravity = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), pc(e, t)
        }),
        ($D.prototype.getBroadphaseProxy = function () {
          return YR(sc(this.hy), _P)
        }),
        ($D.prototype.clearForces = function () {
          cc(this.hy)
        }),
        ($D.prototype.setAnisotropicFriction = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ac(n, t, e)
        }),
        ($D.prototype.getCollisionShape = function () {
          return YR(yc(this.hy), cD)
        }),
        ($D.prototype.setContactProcessingThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), lc(e, t)
        }),
        ($D.prototype.setActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), uc(e, t)
        }),
        ($D.prototype.forceActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), bc(e, t)
        }),
        ($D.prototype.activate = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy),
            void 0 === t ? mc(e) : dc(e, t)
        }),
        ($D.prototype.isActive = function () {
          return !!hc(this.hy)
        }),
        ($D.prototype.isKinematicObject = function () {
          return !!fc(this.hy)
        }),
        ($D.prototype.isStaticObject = function () {
          return !!gc(this.hy)
        }),
        ($D.prototype.isStaticOrKinematicObject = function () {
          return !!Cc(this.hy)
        }),
        ($D.prototype.getRestitution = function () {
          return jc(this.hy)
        }),
        ($D.prototype.getFriction = function () {
          return Sc(this.hy)
        }),
        ($D.prototype.getRollingFriction = function () {
          return vc(this.hy)
        }),
        ($D.prototype.setRestitution = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Rc(e, t)
        }),
        ($D.prototype.setFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Dc(e, t)
        }),
        ($D.prototype.setRollingFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ic(e, t)
        }),
        ($D.prototype.getWorldTransform = function () {
          return YR(Pc(this.hy), KI)
        }),
        ($D.prototype.getCollisionFlags = function () {
          return Oc(this.hy)
        }),
        ($D.prototype.setCollisionFlags = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Wc(e, t)
        }),
        ($D.prototype.setWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Bc(e, t)
        }),
        ($D.prototype.setCollisionShape = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Tc(e, t)
        }),
        ($D.prototype.setCcdMotionThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ac(e, t)
        }),
        ($D.prototype.setCcdSweptSphereRadius = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), kc(e, t)
        }),
        ($D.prototype.getUserIndex = function () {
          return xc(this.hy)
        }),
        ($D.prototype.setUserIndex = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Lc(e, t)
        }),
        ($D.prototype.getUserPointer = function () {
          return YR(wc(this.hy), rI)
        }),
        ($D.prototype.setUserPointer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Fc(e, t)
        }),
        ($D.prototype.getBroadphaseHandle = function () {
          return YR(Mc(this.hy), _P)
        }),
        ($D.prototype.__destroy__ = function () {
          Hc(this.hy)
        }),
        (tI.prototype = Object.create(XR.prototype)),
        (tI.prototype.constructor = tI),
        (tI.prototype.iy = tI),
        (tI.jy = {}),
        (n.btIndexedMeshArray = tI),
        (tI.prototype.size = tI.prototype.size =
          function () {
            return Gc(this.hy)
          }),
        (tI.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(Vc(e, t), UI)
        }),
        (tI.prototype.__destroy__ = function () {
          zc(this.hy)
        }),
        (eI.prototype = Object.create(XR.prototype)),
        (eI.prototype.constructor = eI),
        (eI.prototype.iy = eI),
        (eI.jy = {}),
        (n.btDbvtBroadphase = eI),
        (eI.prototype.__destroy__ = function () {
          Uc(this.hy)
        }),
        (nI.prototype = Object.create(uD.prototype)),
        (nI.prototype.constructor = nI),
        (nI.prototype.iy = nI),
        (nI.jy = {}),
        (n.btHeightfieldTerrainShape = nI),
        (nI.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), qc(e, t)
        }),
        (nI.prototype.getMargin = function () {
          return Kc(this.hy)
        }),
        (nI.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Qc(e, t)
        }),
        (nI.prototype.getLocalScaling = function () {
          return YR(Xc(this.hy), jD)
        }),
        (nI.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Zc(n, t, e)
        }),
        (nI.prototype.__destroy__ = function () {
          Yc(this.hy)
        }),
        (oI.prototype = Object.create(kD.prototype)),
        (oI.prototype.constructor = oI),
        (oI.prototype.iy = oI),
        (oI.jy = {}),
        (n.btDefaultSoftBodySolver = oI),
        (oI.prototype.__destroy__ = function () {
          $c(this.hy)
        }),
        (_I.prototype = Object.create(PD.prototype)),
        (_I.prototype.constructor = _I),
        (_I.prototype.iy = _I),
        (_I.jy = {}),
        (n.btCollisionDispatcher = _I),
        (_I.prototype.getNumManifolds = function () {
          return ea(this.hy)
        }),
        (_I.prototype.getManifoldByIndexInternal = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(na(e, t), UD)
        }),
        (_I.prototype.__destroy__ = function () {
          oa(this.hy)
        }),
        (iI.prototype = Object.create(XR.prototype)),
        (iI.prototype.constructor = iI),
        (iI.prototype.iy = iI),
        (iI.jy = {}),
        (n.btAxisSweep3 = iI),
        (iI.prototype.__destroy__ = function () {
          sa(this.hy)
        }),
        (rI.prototype = Object.create(XR.prototype)),
        (rI.prototype.constructor = rI),
        (rI.prototype.iy = rI),
        (rI.jy = {}),
        (n.VoidPtr = rI),
        (rI.prototype.__destroy__ = function () {
          ca(this.hy)
        }),
        (pI.prototype = Object.create(XR.prototype)),
        (pI.prototype.constructor = pI),
        (pI.prototype.iy = pI),
        (pI.jy = {}),
        (n.btSoftBodyWorldInfo = pI),
        (pI.prototype.get_air_density = pI.prototype.Yy =
          function () {
            return ya(this.hy)
          }),
        (pI.prototype.set_air_density = pI.prototype.FB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), la(e, t)
          }),
        Object.defineProperty(pI.prototype, 'air_density', {
          get: pI.prototype.Yy,
          set: pI.prototype.FB,
        }),
        (pI.prototype.get_water_density = pI.prototype.CB =
          function () {
            return ua(this.hy)
          }),
        (pI.prototype.set_water_density = pI.prototype.iE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ba(e, t)
          }),
        Object.defineProperty(pI.prototype, 'water_density', {
          get: pI.prototype.CB,
          set: pI.prototype.iE,
        }),
        (pI.prototype.get_water_offset = pI.prototype.EB =
          function () {
            return ma(this.hy)
          }),
        (pI.prototype.set_water_offset = pI.prototype.kE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), da(e, t)
          }),
        Object.defineProperty(pI.prototype, 'water_offset', {
          get: pI.prototype.EB,
          set: pI.prototype.kE,
        }),
        (pI.prototype.get_m_maxDisplacement = pI.prototype.EA =
          function () {
            return ha(this.hy)
          }),
        (pI.prototype.set_m_maxDisplacement = pI.prototype.kD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), fa(e, t)
          }),
        Object.defineProperty(pI.prototype, 'm_maxDisplacement', {
          get: pI.prototype.EA,
          set: pI.prototype.kD,
        }),
        (pI.prototype.get_water_normal = pI.prototype.DB =
          function () {
            return YR(ga(this.hy), jD)
          }),
        (pI.prototype.set_water_normal = pI.prototype.jE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ca(e, t)
          }),
        Object.defineProperty(pI.prototype, 'water_normal', {
          get: pI.prototype.DB,
          set: pI.prototype.jE,
        }),
        (pI.prototype.get_m_broadphase = pI.prototype.Gz =
          function () {
            return YR(ja(this.hy), VD)
          }),
        (pI.prototype.set_m_broadphase = pI.prototype.mC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Sa(e, t)
          }),
        Object.defineProperty(pI.prototype, 'm_broadphase', {
          get: pI.prototype.Gz,
          set: pI.prototype.mC,
        }),
        (pI.prototype.get_m_dispatcher = pI.prototype.Xz =
          function () {
            return YR(va(this.hy), PD)
          }),
        (pI.prototype.set_m_dispatcher = pI.prototype.DC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ra(e, t)
          }),
        Object.defineProperty(pI.prototype, 'm_dispatcher', {
          get: pI.prototype.Xz,
          set: pI.prototype.DC,
        }),
        (pI.prototype.get_m_gravity = pI.prototype.fA =
          function () {
            return YR(Da(this.hy), jD)
          }),
        (pI.prototype.set_m_gravity = pI.prototype.MC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ia(e, t)
          }),
        Object.defineProperty(pI.prototype, 'm_gravity', {
          get: pI.prototype.fA,
          set: pI.prototype.MC,
        }),
        (pI.prototype.__destroy__ = function () {
          Pa(this.hy)
        }),
        (sI.prototype = Object.create(lD.prototype)),
        (sI.prototype.constructor = sI),
        (sI.prototype.iy = sI),
        (sI.jy = {}),
        (n.btConeTwistConstraint = sI),
        (sI.prototype.setLimit = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Ba(n, t, e)
        }),
        (sI.prototype.setAngularOnly = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ta(e, t)
        }),
        (sI.prototype.setDamping = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Aa(e, t)
        }),
        (sI.prototype.enableMotor = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ka(e, t)
        }),
        (sI.prototype.setMaxMotorImpulse = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), xa(e, t)
        }),
        (sI.prototype.setMaxMotorImpulseNormalized = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), La(e, t)
        }),
        (sI.prototype.setMotorTarget = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), wa(e, t)
        }),
        (sI.prototype.setMotorTargetInConstraintSpace = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Fa(e, t)
        }),
        (sI.prototype.enableFeedback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ma(e, t)
        }),
        (sI.prototype.getBreakingImpulseThreshold = function () {
          return Ha(this.hy)
        }),
        (sI.prototype.setBreakingImpulseThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ga(e, t)
        }),
        (sI.prototype.getParam = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Va(n, t, e)
          )
        }),
        (sI.prototype.setParam = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            za(o, t, e, n)
        }),
        (sI.prototype.__destroy__ = function () {
          Na(this.hy)
        }),
        (cI.prototype = Object.create(lD.prototype)),
        (cI.prototype.constructor = cI),
        (cI.prototype.iy = cI),
        (cI.jy = {}),
        (n.btHingeConstraint = cI),
        (cI.prototype.setLimit = function (t, e, n, o, _) {
          var i = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            void 0 === _ ? Za(i, t, e, n, o) : Ya(i, t, e, n, o, _)
        }),
        (cI.prototype.enableAngularMotor = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            Ja(o, t, e, n)
        }),
        (cI.prototype.setAngularOnly = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), $a(e, t)
        }),
        (cI.prototype.enableMotor = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ty(e, t)
        }),
        (cI.prototype.setMaxMotorImpulse = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ey(e, t)
        }),
        (cI.prototype.setMotorTarget = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ny(n, t, e)
        }),
        (cI.prototype.enableFeedback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), oy(e, t)
        }),
        (cI.prototype.getBreakingImpulseThreshold = function () {
          return _y(this.hy)
        }),
        (cI.prototype.setBreakingImpulseThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), iy(e, t)
        }),
        (cI.prototype.getParam = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ry(n, t, e)
          )
        }),
        (cI.prototype.setParam = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            py(o, t, e, n)
        }),
        (cI.prototype.__destroy__ = function () {
          sy(this.hy)
        }),
        (aI.prototype = Object.create(gD.prototype)),
        (aI.prototype.constructor = aI),
        (aI.prototype.iy = aI),
        (aI.jy = {}),
        (n.btConeShapeZ = aI),
        (aI.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ay(e, t)
        }),
        (aI.prototype.getLocalScaling = function () {
          return YR(yy(this.hy), jD)
        }),
        (aI.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ly(n, t, e)
        }),
        (aI.prototype.__destroy__ = function () {
          uy(this.hy)
        }),
        (yI.prototype = Object.create(gD.prototype)),
        (yI.prototype.constructor = yI),
        (yI.prototype.iy = yI),
        (yI.jy = {}),
        (n.btConeShapeX = yI),
        (yI.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), my(e, t)
        }),
        (yI.prototype.getLocalScaling = function () {
          return YR(dy(this.hy), jD)
        }),
        (yI.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            hy(n, t, e)
        }),
        (yI.prototype.__destroy__ = function () {
          fy(this.hy)
        }),
        (lI.prototype = Object.create(WD.prototype)),
        (lI.prototype.constructor = lI),
        (lI.prototype.iy = lI),
        (lI.jy = {}),
        (n.btTriangleMesh = lI),
        (lI.prototype.addTriangle = function (t, e, n, o) {
          var _ = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            void 0 === o ? Sy(_, t, e, n) : vy(_, t, e, n, o)
        }),
        (lI.prototype.findOrAddVertex = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Ry(n, t, e)
          )
        }),
        (lI.prototype.addIndex = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Dy(e, t)
        }),
        (lI.prototype.getIndexedMeshArray = function () {
          return YR(Iy(this.hy), tI)
        }),
        (lI.prototype.setScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Py(e, t)
        }),
        (lI.prototype.__destroy__ = function () {
          Oy(this.hy)
        }),
        (uI.prototype = Object.create(cD.prototype)),
        (uI.prototype.constructor = uI),
        (uI.prototype.iy = uI),
        (uI.jy = {}),
        (n.btConvexHullShape = uI),
        (uI.prototype.addPoint = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            void 0 === e ? Ay(n, t) : ky(n, t, e)
        }),
        (uI.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), xy(e, t)
        }),
        (uI.prototype.getMargin = function () {
          return Ly(this.hy)
        }),
        (uI.prototype.getNumVertices = function () {
          return wy(this.hy)
        }),
        (uI.prototype.initializePolyhedralFeatures = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), !!Fy(e, t)
        }),
        (uI.prototype.recalcLocalAabb = function () {
          My(this.hy)
        }),
        (uI.prototype.getConvexPolyhedron = function () {
          return YR(Hy(this.hy), OI)
        }),
        (uI.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Gy(e, t)
        }),
        (uI.prototype.getLocalScaling = function () {
          return YR(Vy(this.hy), jD)
        }),
        (uI.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            zy(n, t, e)
        }),
        (uI.prototype.__destroy__ = function () {
          Ny(this.hy)
        }),
        (bI.prototype = Object.create(XR.prototype)),
        (bI.prototype.constructor = bI),
        (bI.prototype.iy = bI),
        (bI.jy = {}),
        (n.btVehicleTuning = bI),
        (bI.prototype.get_m_suspensionStiffness = bI.prototype.wy =
          function () {
            return Ey(this.hy)
          }),
        (bI.prototype.set_m_suspensionStiffness = bI.prototype.Dy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), qy(e, t)
          }),
        Object.defineProperty(bI.prototype, 'm_suspensionStiffness', {
          get: bI.prototype.wy,
          set: bI.prototype.Dy,
        }),
        (bI.prototype.get_m_suspensionCompression = bI.prototype.bB =
          function () {
            return Ky(this.hy)
          }),
        (bI.prototype.set_m_suspensionCompression = bI.prototype.ID =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Qy(e, t)
          }),
        Object.defineProperty(bI.prototype, 'm_suspensionCompression', {
          get: bI.prototype.bB,
          set: bI.prototype.ID,
        }),
        (bI.prototype.get_m_suspensionDamping = bI.prototype.cB =
          function () {
            return Xy(this.hy)
          }),
        (bI.prototype.set_m_suspensionDamping = bI.prototype.JD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Zy(e, t)
          }),
        Object.defineProperty(bI.prototype, 'm_suspensionDamping', {
          get: bI.prototype.cB,
          set: bI.prototype.JD,
        }),
        (bI.prototype.get_m_maxSuspensionTravelCm = bI.prototype.vy =
          function () {
            return Yy(this.hy)
          }),
        (bI.prototype.set_m_maxSuspensionTravelCm = bI.prototype.Cy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Jy(e, t)
          }),
        Object.defineProperty(bI.prototype, 'm_maxSuspensionTravelCm', {
          get: bI.prototype.vy,
          set: bI.prototype.Cy,
        }),
        (bI.prototype.get_m_frictionSlip = bI.prototype.ry =
          function () {
            return $y(this.hy)
          }),
        (bI.prototype.set_m_frictionSlip = bI.prototype.yy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), tl(e, t)
          }),
        Object.defineProperty(bI.prototype, 'm_frictionSlip', {
          get: bI.prototype.ry,
          set: bI.prototype.yy,
        }),
        (bI.prototype.get_m_maxSuspensionForce = bI.prototype.uy =
          function () {
            return el(this.hy)
          }),
        (bI.prototype.set_m_maxSuspensionForce = bI.prototype.By =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), nl(e, t)
          }),
        Object.defineProperty(bI.prototype, 'm_maxSuspensionForce', {
          get: bI.prototype.uy,
          set: bI.prototype.By,
        }),
        (mI.prototype = Object.create(XR.prototype)),
        (mI.prototype.constructor = mI),
        (mI.prototype.iy = mI),
        (mI.jy = {}),
        (n.btCollisionObjectWrapper = mI),
        (mI.prototype.getWorldTransform = function () {
          return YR(ol(this.hy), KI)
        }),
        (mI.prototype.getCollisionObject = function () {
          return YR(_l(this.hy), aD)
        }),
        (mI.prototype.getCollisionShape = function () {
          return YR(il(this.hy), cD)
        }),
        (dI.prototype = Object.create(XR.prototype)),
        (dI.prototype.constructor = dI),
        (dI.prototype.iy = dI),
        (dI.jy = {}),
        (n.btShapeHull = dI),
        (dI.prototype.buildHull = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), !!pl(e, t)
        }),
        (dI.prototype.numVertices = function () {
          return sl(this.hy)
        }),
        (dI.prototype.getVertexPointer = function () {
          return YR(cl(this.hy), jD)
        }),
        (dI.prototype.__destroy__ = function () {
          al(this.hy)
        }),
        (hI.prototype = Object.create(BD.prototype)),
        (hI.prototype.constructor = hI),
        (hI.prototype.iy = hI),
        (hI.jy = {}),
        (n.btDefaultMotionState = hI),
        (hI.prototype.getWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), bl(e, t)
        }),
        (hI.prototype.setWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ml(e, t)
        }),
        (hI.prototype.get_m_graphicsWorldTrans = hI.prototype.eA =
          function () {
            return YR(dl(this.hy), KI)
          }),
        (hI.prototype.set_m_graphicsWorldTrans = hI.prototype.LC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), hl(e, t)
          }),
        Object.defineProperty(hI.prototype, 'm_graphicsWorldTrans', {
          get: hI.prototype.eA,
          set: hI.prototype.LC,
        }),
        (hI.prototype.__destroy__ = function () {
          fl(this.hy)
        }),
        (fI.prototype = Object.create(XR.prototype)),
        (fI.prototype.constructor = fI),
        (fI.prototype.iy = fI),
        (fI.jy = {}),
        (n.btWheelInfo = fI),
        (fI.prototype.getSuspensionRestLength = function () {
          return Cl(this.hy)
        }),
        (fI.prototype.updateWheel = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            jl(n, t, e)
        }),
        (fI.prototype.get_m_suspensionStiffness = fI.prototype.wy =
          function () {
            return Sl(this.hy)
          }),
        (fI.prototype.set_m_suspensionStiffness = fI.prototype.Dy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), vl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_suspensionStiffness', {
          get: fI.prototype.wy,
          set: fI.prototype.Dy,
        }),
        (fI.prototype.get_m_frictionSlip = fI.prototype.ry =
          function () {
            return Rl(this.hy)
          }),
        (fI.prototype.set_m_frictionSlip = fI.prototype.yy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Dl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_frictionSlip', {
          get: fI.prototype.ry,
          set: fI.prototype.yy,
        }),
        (fI.prototype.get_m_engineForce = fI.prototype.aA =
          function () {
            return Il(this.hy)
          }),
        (fI.prototype.set_m_engineForce = fI.prototype.HC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Pl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_engineForce', {
          get: fI.prototype.aA,
          set: fI.prototype.HC,
        }),
        (fI.prototype.get_m_rollInfluence = fI.prototype.SA =
          function () {
            return Ol(this.hy)
          }),
        (fI.prototype.set_m_rollInfluence = fI.prototype.yD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Wl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_rollInfluence', {
          get: fI.prototype.SA,
          set: fI.prototype.yD,
        }),
        (fI.prototype.get_m_suspensionRestLength1 = fI.prototype.gB =
          function () {
            return Bl(this.hy)
          }),
        (fI.prototype.set_m_suspensionRestLength1 = fI.prototype.ND =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Tl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_suspensionRestLength1', {
          get: fI.prototype.gB,
          set: fI.prototype.ND,
        }),
        (fI.prototype.get_m_wheelsRadius = fI.prototype.uB =
          function () {
            return Al(this.hy)
          }),
        (fI.prototype.set_m_wheelsRadius = fI.prototype.aE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), kl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_wheelsRadius', {
          get: fI.prototype.uB,
          set: fI.prototype.aE,
        }),
        (fI.prototype.get_m_wheelsDampingCompression = fI.prototype.My =
          function () {
            return xl(this.hy)
          }),
        (fI.prototype.set_m_wheelsDampingCompression = fI.prototype.Vy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ll(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_wheelsDampingCompression', {
          get: fI.prototype.My,
          set: fI.prototype.Vy,
        }),
        (fI.prototype.get_m_wheelsDampingRelaxation = fI.prototype.Ny =
          function () {
            return wl(this.hy)
          }),
        (fI.prototype.set_m_wheelsDampingRelaxation = fI.prototype.Wy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Fl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_wheelsDampingRelaxation', {
          get: fI.prototype.Ny,
          set: fI.prototype.Wy,
        }),
        (fI.prototype.get_m_steering = fI.prototype.$A =
          function () {
            return Ml(this.hy)
          }),
        (fI.prototype.set_m_steering = fI.prototype.GD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Hl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_steering', {
          get: fI.prototype.$A,
          set: fI.prototype.GD,
        }),
        (fI.prototype.get_m_maxSuspensionForce = fI.prototype.uy =
          function () {
            return Gl(this.hy)
          }),
        (fI.prototype.set_m_maxSuspensionForce = fI.prototype.By =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Vl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_maxSuspensionForce', {
          get: fI.prototype.uy,
          set: fI.prototype.By,
        }),
        (fI.prototype.get_m_maxSuspensionTravelCm = fI.prototype.vy =
          function () {
            return zl(this.hy)
          }),
        (fI.prototype.set_m_maxSuspensionTravelCm = fI.prototype.Cy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Nl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_maxSuspensionTravelCm', {
          get: fI.prototype.vy,
          set: fI.prototype.Cy,
        }),
        (fI.prototype.get_m_wheelsSuspensionForce = fI.prototype.vB =
          function () {
            return Ul(this.hy)
          }),
        (fI.prototype.set_m_wheelsSuspensionForce = fI.prototype.bE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), El(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_wheelsSuspensionForce', {
          get: fI.prototype.vB,
          set: fI.prototype.bE,
        }),
        (fI.prototype.get_m_bIsFrontWheel = fI.prototype.Fy =
          function () {
            return !!ql(this.hy)
          }),
        (fI.prototype.set_m_bIsFrontWheel = fI.prototype.Oy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Kl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_bIsFrontWheel', {
          get: fI.prototype.Fy,
          set: fI.prototype.Oy,
        }),
        (fI.prototype.get_m_raycastInfo = fI.prototype.QA =
          function () {
            return YR(Ql(this.hy), TI)
          }),
        (fI.prototype.set_m_raycastInfo = fI.prototype.wD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Xl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_raycastInfo', {
          get: fI.prototype.QA,
          set: fI.prototype.wD,
        }),
        (fI.prototype.get_m_chassisConnectionPointCS = fI.prototype.Mz =
          function () {
            return YR(Zl(this.hy), jD)
          }),
        (fI.prototype.set_m_chassisConnectionPointCS = fI.prototype.sC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Yl(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_chassisConnectionPointCS', {
          get: fI.prototype.Mz,
          set: fI.prototype.sC,
        }),
        (fI.prototype.get_m_worldTransform = fI.prototype.wB =
          function () {
            return YR(Jl(this.hy), KI)
          }),
        (fI.prototype.set_m_worldTransform = fI.prototype.cE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), $l(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_worldTransform', {
          get: fI.prototype.wB,
          set: fI.prototype.cE,
        }),
        (fI.prototype.get_m_wheelDirectionCS = fI.prototype.Ly =
          function () {
            return YR(tu(this.hy), jD)
          }),
        (fI.prototype.set_m_wheelDirectionCS = fI.prototype.Uy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), eu(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_wheelDirectionCS', {
          get: fI.prototype.Ly,
          set: fI.prototype.Uy,
        }),
        (fI.prototype.get_m_wheelAxleCS = fI.prototype.Ky =
          function () {
            return YR(nu(this.hy), jD)
          }),
        (fI.prototype.set_m_wheelAxleCS = fI.prototype.Ty =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ou(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_wheelAxleCS', {
          get: fI.prototype.Ky,
          set: fI.prototype.Ty,
        }),
        (fI.prototype.get_m_rotation = fI.prototype.UA =
          function () {
            return _u(this.hy)
          }),
        (fI.prototype.set_m_rotation = fI.prototype.AD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), iu(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_rotation', {
          get: fI.prototype.UA,
          set: fI.prototype.AD,
        }),
        (fI.prototype.get_m_deltaRotation = fI.prototype.Vz =
          function () {
            return ru(this.hy)
          }),
        (fI.prototype.set_m_deltaRotation = fI.prototype.BC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), pu(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_deltaRotation', {
          get: fI.prototype.Vz,
          set: fI.prototype.BC,
        }),
        (fI.prototype.get_m_brake = fI.prototype.Fz =
          function () {
            return su(this.hy)
          }),
        (fI.prototype.set_m_brake = fI.prototype.lC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), cu(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_brake', {
          get: fI.prototype.Fz,
          set: fI.prototype.lC,
        }),
        (fI.prototype.get_m_clippedInvContactDotSuspension = fI.prototype.Nz =
          function () {
            return au(this.hy)
          }),
        (fI.prototype.set_m_clippedInvContactDotSuspension = fI.prototype.tC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), yu(e, t)
          }),
        Object.defineProperty(
          fI.prototype,
          'm_clippedInvContactDotSuspension',
          { get: fI.prototype.Nz, set: fI.prototype.tC },
        ),
        (fI.prototype.get_m_suspensionRelativeVelocity = fI.prototype.eB =
          function () {
            return lu(this.hy)
          }),
        (fI.prototype.set_m_suspensionRelativeVelocity = fI.prototype.LD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), uu(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_suspensionRelativeVelocity', {
          get: fI.prototype.eB,
          set: fI.prototype.LD,
        }),
        (fI.prototype.get_m_skidInfo = fI.prototype.XA =
          function () {
            return bu(this.hy)
          }),
        (fI.prototype.set_m_skidInfo = fI.prototype.DD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), mu(e, t)
          }),
        Object.defineProperty(fI.prototype, 'm_skidInfo', {
          get: fI.prototype.XA,
          set: fI.prototype.DD,
        }),
        (fI.prototype.__destroy__ = function () {
          du(this.hy)
        }),
        (gI.prototype = Object.create(jD.prototype)),
        (gI.prototype.constructor = gI),
        (gI.prototype.iy = gI),
        (gI.jy = {}),
        (n.btVector4 = gI),
        (gI.prototype.w = function () {
          return gu(this.hy)
        }),
        (gI.prototype.setValue = function (t, e, n, o) {
          var _ = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            Cu(_, t, e, n, o)
        }),
        (gI.prototype.length = gI.prototype.length =
          function () {
            return ju(this.hy)
          }),
        (gI.prototype.x = gI.prototype.x =
          function () {
            return Su(this.hy)
          }),
        (gI.prototype.y = gI.prototype.y =
          function () {
            return vu(this.hy)
          }),
        (gI.prototype.z = gI.prototype.z =
          function () {
            return Ru(this.hy)
          }),
        (gI.prototype.setX = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Du(e, t)
        }),
        (gI.prototype.setY = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Iu(e, t)
        }),
        (gI.prototype.setZ = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Pu(e, t)
        }),
        (gI.prototype.normalize = gI.prototype.normalize =
          function () {
            Ou(this.hy)
          }),
        (gI.prototype.rotate = gI.prototype.rotate =
          function (t, e) {
            var n = this.hy
            return (
              t && 'object' == typeof t && (t = t.hy),
              e && 'object' == typeof e && (e = e.hy),
              YR(Wu(n, t, e), jD)
            )
          }),
        (gI.prototype.dot = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), Bu(e, t)
        }),
        (gI.prototype.op_mul = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(Tu(e, t), jD)
        }),
        (gI.prototype.op_add = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(Au(e, t), jD)
        }),
        (gI.prototype.op_sub = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(ku(e, t), jD)
        }),
        (gI.prototype.__destroy__ = function () {
          xu(this.hy)
        }),
        (CI.prototype = Object.create(XR.prototype)),
        (CI.prototype.constructor = CI),
        (CI.prototype.iy = CI),
        (CI.jy = {}),
        (n.btDefaultCollisionConstructionInfo = CI),
        (CI.prototype.__destroy__ = function () {
          wu(this.hy)
        }),
        (jI.prototype = Object.create(XR.prototype)),
        (jI.prototype.constructor = jI),
        (jI.prototype.iy = jI),
        (jI.jy = {}),
        (n.Anchor = jI),
        (jI.prototype.get_m_node = jI.prototype.FA =
          function () {
            return YR(Fu(this.hy), wI)
          }),
        (jI.prototype.set_m_node = jI.prototype.lD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Mu(e, t)
          }),
        Object.defineProperty(jI.prototype, 'm_node', {
          get: jI.prototype.FA,
          set: jI.prototype.lD,
        }),
        (jI.prototype.get_m_local = jI.prototype.zA =
          function () {
            return YR(Hu(this.hy), jD)
          }),
        (jI.prototype.set_m_local = jI.prototype.fD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Gu(e, t)
          }),
        Object.defineProperty(jI.prototype, 'm_local', {
          get: jI.prototype.zA,
          set: jI.prototype.fD,
        }),
        (jI.prototype.get_m_body = jI.prototype.Ez =
          function () {
            return YR(Vu(this.hy), $D)
          }),
        (jI.prototype.set_m_body = jI.prototype.kC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), zu(e, t)
          }),
        Object.defineProperty(jI.prototype, 'm_body', {
          get: jI.prototype.Ez,
          set: jI.prototype.kC,
        }),
        (jI.prototype.get_m_influence = jI.prototype.sA =
          function () {
            return Nu(this.hy)
          }),
        (jI.prototype.set_m_influence = jI.prototype.ZC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Uu(e, t)
          }),
        Object.defineProperty(jI.prototype, 'm_influence', {
          get: jI.prototype.sA,
          set: jI.prototype.ZC,
        }),
        (jI.prototype.get_m_c0 = jI.prototype.Hz =
          function () {
            return YR(Eu(this.hy), LD)
          }),
        (jI.prototype.set_m_c0 = jI.prototype.nC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), qu(e, t)
          }),
        Object.defineProperty(jI.prototype, 'm_c0', {
          get: jI.prototype.Hz,
          set: jI.prototype.nC,
        }),
        (jI.prototype.get_m_c1 = jI.prototype.Iz =
          function () {
            return YR(Ku(this.hy), jD)
          }),
        (jI.prototype.set_m_c1 = jI.prototype.oC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Qu(e, t)
          }),
        Object.defineProperty(jI.prototype, 'm_c1', {
          get: jI.prototype.Iz,
          set: jI.prototype.oC,
        }),
        (jI.prototype.get_m_c2 = jI.prototype.Jz =
          function () {
            return Xu(this.hy)
          }),
        (jI.prototype.set_m_c2 = jI.prototype.pC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Zu(e, t)
          }),
        Object.defineProperty(jI.prototype, 'm_c2', {
          get: jI.prototype.Jz,
          set: jI.prototype.pC,
        }),
        (jI.prototype.__destroy__ = function () {
          Yu(this.hy)
        }),
        (SI.prototype = Object.create(XR.prototype)),
        (SI.prototype.constructor = SI),
        (SI.prototype.iy = SI),
        (SI.jy = {}),
        (n.btVehicleRaycasterResult = SI),
        (SI.prototype.get_m_hitPointInWorld = SI.prototype.nA =
          function () {
            return YR(Ju(this.hy), jD)
          }),
        (SI.prototype.set_m_hitPointInWorld = SI.prototype.UC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), $u(e, t)
          }),
        Object.defineProperty(SI.prototype, 'm_hitPointInWorld', {
          get: SI.prototype.nA,
          set: SI.prototype.UC,
        }),
        (SI.prototype.get_m_hitNormalInWorld = SI.prototype.lA =
          function () {
            return YR(tb(this.hy), jD)
          }),
        (SI.prototype.set_m_hitNormalInWorld = SI.prototype.SC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), eb(e, t)
          }),
        Object.defineProperty(SI.prototype, 'm_hitNormalInWorld', {
          get: SI.prototype.lA,
          set: SI.prototype.SC,
        }),
        (SI.prototype.get_m_distFraction = SI.prototype.Yz =
          function () {
            return nb(this.hy)
          }),
        (SI.prototype.set_m_distFraction = SI.prototype.EC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ob(e, t)
          }),
        Object.defineProperty(SI.prototype, 'm_distFraction', {
          get: SI.prototype.Yz,
          set: SI.prototype.EC,
        }),
        (SI.prototype.__destroy__ = function () {
          _b(this.hy)
        }),
        (vI.prototype = Object.create(XR.prototype)),
        (vI.prototype.constructor = vI),
        (vI.prototype.iy = vI),
        (vI.jy = {}),
        (n.btVector3Array = vI),
        (vI.prototype.size = vI.prototype.size =
          function () {
            return ib(this.hy)
          }),
        (vI.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(rb(e, t), jD)
        }),
        (vI.prototype.__destroy__ = function () {
          pb(this.hy)
        }),
        (RI.prototype = Object.create(XR.prototype)),
        (RI.prototype.constructor = RI),
        (RI.prototype.iy = RI),
        (RI.jy = {}),
        (n.btConstraintSolver = RI),
        (RI.prototype.__destroy__ = function () {
          sb(this.hy)
        }),
        (DI.prototype = Object.create(CD.prototype)),
        (DI.prototype.constructor = DI),
        (DI.prototype.iy = DI),
        (DI.jy = {}),
        (n.btRaycastVehicle = DI),
        (DI.prototype.applyEngineForce = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ab(n, t, e)
        }),
        (DI.prototype.setSteeringValue = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            yb(n, t, e)
        }),
        (DI.prototype.getWheelTransformWS = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(lb(e, t), KI)
        }),
        (DI.prototype.updateWheelTransform = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ub(n, t, e)
        }),
        (DI.prototype.addWheel = function (t, e, n, o, _, i, r) {
          var p = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            i && 'object' == typeof i && (i = i.hy),
            r && 'object' == typeof r && (r = r.hy),
            YR(bb(p, t, e, n, o, _, i, r), fI)
          )
        }),
        (DI.prototype.getNumWheels = function () {
          return mb(this.hy)
        }),
        (DI.prototype.getRigidBody = function () {
          return YR(db(this.hy), $D)
        }),
        (DI.prototype.getWheelInfo = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(hb(e, t), fI)
        }),
        (DI.prototype.setBrake = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            fb(n, t, e)
        }),
        (DI.prototype.setCoordinateSystem = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            gb(o, t, e, n)
        }),
        (DI.prototype.getCurrentSpeedKmHour = function () {
          return Cb(this.hy)
        }),
        (DI.prototype.getChassisWorldTransform = function () {
          return YR(jb(this.hy), KI)
        }),
        (DI.prototype.rayCast = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), Sb(e, t)
        }),
        (DI.prototype.updateVehicle = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), vb(e, t)
        }),
        (DI.prototype.resetSuspension = function () {
          Rb(this.hy)
        }),
        (DI.prototype.getSteeringValue = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), Db(e, t)
        }),
        (DI.prototype.updateWheelTransformsWS = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            void 0 === e ? Ib(n, t) : Pb(n, t, e)
        }),
        (DI.prototype.setPitchControl = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ob(e, t)
        }),
        (DI.prototype.updateSuspension = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Wb(e, t)
        }),
        (DI.prototype.updateFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Bb(e, t)
        }),
        (DI.prototype.getRightAxis = function () {
          return Tb(this.hy)
        }),
        (DI.prototype.getUpAxis = function () {
          return Ab(this.hy)
        }),
        (DI.prototype.getForwardAxis = function () {
          return kb(this.hy)
        }),
        (DI.prototype.getForwardVector = function () {
          return YR(xb(this.hy), jD)
        }),
        (DI.prototype.getUserConstraintType = function () {
          return Lb(this.hy)
        }),
        (DI.prototype.setUserConstraintType = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), wb(e, t)
        }),
        (DI.prototype.setUserConstraintId = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Fb(e, t)
        }),
        (DI.prototype.getUserConstraintId = function () {
          return Mb(this.hy)
        }),
        (DI.prototype.updateAction = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Hb(n, t, e)
        }),
        (DI.prototype.__destroy__ = function () {
          Gb(this.hy)
        }),
        (II.prototype = Object.create(RD.prototype)),
        (II.prototype.constructor = II),
        (II.prototype.iy = II),
        (II.jy = {}),
        (n.btCylinderShapeX = II),
        (II.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), zb(e, t)
        }),
        (II.prototype.getMargin = function () {
          return Nb(this.hy)
        }),
        (II.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ub(e, t)
        }),
        (II.prototype.getLocalScaling = function () {
          return YR(Eb(this.hy), jD)
        }),
        (II.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            qb(n, t, e)
        }),
        (II.prototype.__destroy__ = function () {
          Kb(this.hy)
        }),
        (PI.prototype = Object.create(RD.prototype)),
        (PI.prototype.constructor = PI),
        (PI.prototype.iy = PI),
        (PI.jy = {}),
        (n.btCylinderShapeZ = PI),
        (PI.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Xb(e, t)
        }),
        (PI.prototype.getMargin = function () {
          return Zb(this.hy)
        }),
        (PI.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Yb(e, t)
        }),
        (PI.prototype.getLocalScaling = function () {
          return YR(Jb(this.hy), jD)
        }),
        (PI.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            $b(n, t, e)
        }),
        (PI.prototype.__destroy__ = function () {
          tm(this.hy)
        }),
        (OI.prototype = Object.create(XR.prototype)),
        (OI.prototype.constructor = OI),
        (OI.prototype.iy = OI),
        (OI.jy = {}),
        (n.btConvexPolyhedron = OI),
        (OI.prototype.get_m_vertices = OI.prototype.qB =
          function () {
            return YR(em(this.hy), vI)
          }),
        (OI.prototype.set_m_vertices = OI.prototype.XD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), nm(e, t)
          }),
        Object.defineProperty(OI.prototype, 'm_vertices', {
          get: OI.prototype.qB,
          set: OI.prototype.XD,
        }),
        (OI.prototype.get_m_faces = OI.prototype.Gy =
          function () {
            return YR(om(this.hy), VI)
          }),
        (OI.prototype.set_m_faces = OI.prototype.Py =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), _m(e, t)
          }),
        Object.defineProperty(OI.prototype, 'm_faces', {
          get: OI.prototype.Gy,
          set: OI.prototype.Py,
        }),
        (OI.prototype.__destroy__ = function () {
          im(this.hy)
        }),
        (WI.prototype = Object.create(XR.prototype)),
        (WI.prototype.constructor = WI),
        (WI.prototype.iy = WI),
        (WI.jy = {}),
        (n.btSequentialImpulseConstraintSolver = WI),
        (WI.prototype.__destroy__ = function () {
          pm(this.hy)
        }),
        (BI.prototype = Object.create(XR.prototype)),
        (BI.prototype.constructor = BI),
        (BI.prototype.iy = BI),
        (BI.jy = {}),
        (n.tAnchorArray = BI),
        (BI.prototype.size = BI.prototype.size =
          function () {
            return sm(this.hy)
          }),
        (BI.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(cm(e, t), jI)
        }),
        (BI.prototype.clear = BI.prototype.clear =
          function () {
            am(this.hy)
          }),
        (BI.prototype.push_back = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ym(e, t)
        }),
        (BI.prototype.pop_back = function () {
          lm(this.hy)
        }),
        (BI.prototype.__destroy__ = function () {
          um(this.hy)
        }),
        (TI.prototype = Object.create(XR.prototype)),
        (TI.prototype.constructor = TI),
        (TI.prototype.iy = TI),
        (TI.jy = {}),
        (n.RaycastInfo = TI),
        (TI.prototype.get_m_contactNormalWS = TI.prototype.Pz =
          function () {
            return YR(bm(this.hy), jD)
          }),
        (TI.prototype.set_m_contactNormalWS = TI.prototype.vC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), mm(e, t)
          }),
        Object.defineProperty(TI.prototype, 'm_contactNormalWS', {
          get: TI.prototype.Pz,
          set: TI.prototype.vC,
        }),
        (TI.prototype.get_m_contactPointWS = TI.prototype.Qz =
          function () {
            return YR(dm(this.hy), jD)
          }),
        (TI.prototype.set_m_contactPointWS = TI.prototype.wC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), hm(e, t)
          }),
        Object.defineProperty(TI.prototype, 'm_contactPointWS', {
          get: TI.prototype.Qz,
          set: TI.prototype.wC,
        }),
        (TI.prototype.get_m_suspensionLength = TI.prototype.dB =
          function () {
            return fm(this.hy)
          }),
        (TI.prototype.set_m_suspensionLength = TI.prototype.KD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), gm(e, t)
          }),
        Object.defineProperty(TI.prototype, 'm_suspensionLength', {
          get: TI.prototype.dB,
          set: TI.prototype.KD,
        }),
        (TI.prototype.get_m_hardPointWS = TI.prototype.hA =
          function () {
            return YR(Cm(this.hy), jD)
          }),
        (TI.prototype.set_m_hardPointWS = TI.prototype.OC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), jm(e, t)
          }),
        Object.defineProperty(TI.prototype, 'm_hardPointWS', {
          get: TI.prototype.hA,
          set: TI.prototype.OC,
        }),
        (TI.prototype.get_m_wheelDirectionWS = TI.prototype.sB =
          function () {
            return YR(Sm(this.hy), jD)
          }),
        (TI.prototype.set_m_wheelDirectionWS = TI.prototype.ZD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), vm(e, t)
          }),
        Object.defineProperty(TI.prototype, 'm_wheelDirectionWS', {
          get: TI.prototype.sB,
          set: TI.prototype.ZD,
        }),
        (TI.prototype.get_m_wheelAxleWS = TI.prototype.rB =
          function () {
            return YR(Rm(this.hy), jD)
          }),
        (TI.prototype.set_m_wheelAxleWS = TI.prototype.YD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Dm(e, t)
          }),
        Object.defineProperty(TI.prototype, 'm_wheelAxleWS', {
          get: TI.prototype.rB,
          set: TI.prototype.YD,
        }),
        (TI.prototype.get_m_isInContact = TI.prototype.tA =
          function () {
            return !!Im(this.hy)
          }),
        (TI.prototype.set_m_isInContact = TI.prototype.$C =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Pm(e, t)
          }),
        Object.defineProperty(TI.prototype, 'm_isInContact', {
          get: TI.prototype.tA,
          set: TI.prototype.$C,
        }),
        (TI.prototype.get_m_groundObject = TI.prototype.gA =
          function () {
            return Om(this.hy)
          }),
        (TI.prototype.set_m_groundObject = TI.prototype.NC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Wm(e, t)
          }),
        Object.defineProperty(TI.prototype, 'm_groundObject', {
          get: TI.prototype.gA,
          set: TI.prototype.NC,
        }),
        (TI.prototype.__destroy__ = function () {
          Bm(this.hy)
        }),
        (AI.prototype = Object.create(cD.prototype)),
        (AI.prototype.constructor = AI),
        (AI.prototype.iy = AI),
        (AI.jy = {}),
        (n.btMultiSphereShape = AI),
        (AI.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Am(e, t)
        }),
        (AI.prototype.getLocalScaling = function () {
          return YR(km(this.hy), jD)
        }),
        (AI.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            xm(n, t, e)
        }),
        (AI.prototype.__destroy__ = function () {
          Lm(this.hy)
        }),
        (kI.prototype = Object.create(aD.prototype)),
        (kI.prototype.constructor = kI),
        (kI.prototype.iy = kI),
        (kI.jy = {}),
        (n.btSoftBody = kI),
        (kI.prototype.checkLink = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            !!Fm(n, t, e)
          )
        }),
        (kI.prototype.checkFace = function (t, e, n) {
          var o = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            !!Mm(o, t, e, n)
          )
        }),
        (kI.prototype.appendMaterial = function () {
          return YR(Hm(this.hy), FD)
        }),
        (kI.prototype.appendNode = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Gm(n, t, e)
        }),
        (kI.prototype.appendLink = function (t, e, n, o) {
          var _ = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            Vm(_, t, e, n, o)
        }),
        (kI.prototype.appendFace = function (t, e, n, o) {
          var _ = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            zm(_, t, e, n, o)
        }),
        (kI.prototype.appendTetra = function (t, e, n, o, _) {
          var i = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            Nm(i, t, e, n, o, _)
        }),
        (kI.prototype.appendAnchor = function (t, e, n, o) {
          var _ = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            Um(_, t, e, n, o)
        }),
        (kI.prototype.addForce = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            void 0 === e ? Em(n, t) : qm(n, t, e)
        }),
        (kI.prototype.addAeroForceToNode = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Km(n, t, e)
        }),
        (kI.prototype.getTotalMass = function () {
          return Qm(this.hy)
        }),
        (kI.prototype.setTotalMass = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Xm(n, t, e)
        }),
        (kI.prototype.setMass = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Zm(n, t, e)
        }),
        (kI.prototype.transform = kI.prototype.transform =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ym(e, t)
          }),
        (kI.prototype.translate = kI.prototype.translate =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Jm(e, t)
          }),
        (kI.prototype.rotate = kI.prototype.rotate =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), $m(e, t)
          }),
        (kI.prototype.scale = kI.prototype.scale =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), td(e, t)
          }),
        (kI.prototype.generateClusters = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            void 0 === e ? ed(n, t) : nd(n, t, e)
          )
        }),
        (kI.prototype.generateBendingConstraints = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            od(n, t, e)
          )
        }),
        (kI.prototype.upcast = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(_d(e, t), kI)
        }),
        (kI.prototype.setAnisotropicFriction = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            id(n, t, e)
        }),
        (kI.prototype.getCollisionShape = function () {
          return YR(rd(this.hy), cD)
        }),
        (kI.prototype.setContactProcessingThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), pd(e, t)
        }),
        (kI.prototype.setActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), sd(e, t)
        }),
        (kI.prototype.forceActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), cd(e, t)
        }),
        (kI.prototype.activate = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy),
            void 0 === t ? ad(e) : yd(e, t)
        }),
        (kI.prototype.isActive = function () {
          return !!ld(this.hy)
        }),
        (kI.prototype.isKinematicObject = function () {
          return !!ud(this.hy)
        }),
        (kI.prototype.isStaticObject = function () {
          return !!bd(this.hy)
        }),
        (kI.prototype.isStaticOrKinematicObject = function () {
          return !!md(this.hy)
        }),
        (kI.prototype.getRestitution = function () {
          return dd(this.hy)
        }),
        (kI.prototype.getFriction = function () {
          return hd(this.hy)
        }),
        (kI.prototype.getRollingFriction = function () {
          return fd(this.hy)
        }),
        (kI.prototype.setRestitution = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), gd(e, t)
        }),
        (kI.prototype.setFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Cd(e, t)
        }),
        (kI.prototype.setRollingFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), jd(e, t)
        }),
        (kI.prototype.getWorldTransform = function () {
          return YR(Sd(this.hy), KI)
        }),
        (kI.prototype.getCollisionFlags = function () {
          return vd(this.hy)
        }),
        (kI.prototype.setCollisionFlags = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Rd(e, t)
        }),
        (kI.prototype.setWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Dd(e, t)
        }),
        (kI.prototype.setCollisionShape = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Id(e, t)
        }),
        (kI.prototype.setCcdMotionThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Pd(e, t)
        }),
        (kI.prototype.setCcdSweptSphereRadius = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Od(e, t)
        }),
        (kI.prototype.getUserIndex = function () {
          return Wd(this.hy)
        }),
        (kI.prototype.setUserIndex = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Bd(e, t)
        }),
        (kI.prototype.getUserPointer = function () {
          return YR(Td(this.hy), rI)
        }),
        (kI.prototype.setUserPointer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ad(e, t)
        }),
        (kI.prototype.getBroadphaseHandle = function () {
          return YR(kd(this.hy), _P)
        }),
        (kI.prototype.get_m_cfg = kI.prototype.Kz =
          function () {
            return YR(xd(this.hy), LI)
          }),
        (kI.prototype.set_m_cfg = kI.prototype.qC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ld(e, t)
          }),
        Object.defineProperty(kI.prototype, 'm_cfg', {
          get: kI.prototype.Kz,
          set: kI.prototype.qC,
        }),
        (kI.prototype.get_m_nodes = kI.prototype.GA =
          function () {
            return YR(wd(this.hy), iP)
          }),
        (kI.prototype.set_m_nodes = kI.prototype.mD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Fd(e, t)
          }),
        Object.defineProperty(kI.prototype, 'm_nodes', {
          get: kI.prototype.GA,
          set: kI.prototype.mD,
        }),
        (kI.prototype.get_m_faces = kI.prototype.Gy =
          function () {
            return YR(Md(this.hy), dP)
          }),
        (kI.prototype.set_m_faces = kI.prototype.Py =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Hd(e, t)
          }),
        Object.defineProperty(kI.prototype, 'm_faces', {
          get: kI.prototype.Gy,
          set: kI.prototype.Py,
        }),
        (kI.prototype.get_m_materials = kI.prototype.DA =
          function () {
            return YR(Gd(this.hy), QD)
          }),
        (kI.prototype.set_m_materials = kI.prototype.jD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Vd(e, t)
          }),
        Object.defineProperty(kI.prototype, 'm_materials', {
          get: kI.prototype.DA,
          set: kI.prototype.jD,
        }),
        (kI.prototype.get_m_anchors = kI.prototype.Az =
          function () {
            return YR(zd(this.hy), BI)
          }),
        (kI.prototype.set_m_anchors = kI.prototype.gC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Nd(e, t)
          }),
        Object.defineProperty(kI.prototype, 'm_anchors', {
          get: kI.prototype.Az,
          set: kI.prototype.gC,
        }),
        (kI.prototype.__destroy__ = function () {
          Ud(this.hy)
        }),
        (xI.prototype = Object.create(XR.prototype)),
        (xI.prototype.constructor = xI),
        (xI.prototype.iy = xI),
        (xI.jy = {}),
        (n.btIntArray = xI),
        (xI.prototype.size = xI.prototype.size =
          function () {
            return Ed(this.hy)
          }),
        (xI.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), qd(e, t)
        }),
        (xI.prototype.__destroy__ = function () {
          Kd(this.hy)
        }),
        (LI.prototype = Object.create(XR.prototype)),
        (LI.prototype.constructor = LI),
        (LI.prototype.iy = LI),
        (LI.jy = {}),
        (n.Config = LI),
        (LI.prototype.get_kVCF = LI.prototype.sz =
          function () {
            return Qd(this.hy)
          }),
        (LI.prototype.set_kVCF = LI.prototype.$B =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Xd(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kVCF', {
          get: LI.prototype.sz,
          set: LI.prototype.$B,
        }),
        (LI.prototype.get_kDP = LI.prototype.fz =
          function () {
            return Zd(this.hy)
          }),
        (LI.prototype.set_kDP = LI.prototype.NB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Yd(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kDP', {
          get: LI.prototype.fz,
          set: LI.prototype.NB,
        }),
        (LI.prototype.get_kDG = LI.prototype.ez =
          function () {
            return Jd(this.hy)
          }),
        (LI.prototype.set_kDG = LI.prototype.MB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), $d(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kDG', {
          get: LI.prototype.ez,
          set: LI.prototype.MB,
        }),
        (LI.prototype.get_kLF = LI.prototype.hz =
          function () {
            return th(this.hy)
          }),
        (LI.prototype.set_kLF = LI.prototype.PB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), eh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kLF', {
          get: LI.prototype.hz,
          set: LI.prototype.PB,
        }),
        (LI.prototype.get_kPR = LI.prototype.jz =
          function () {
            return nh(this.hy)
          }),
        (LI.prototype.set_kPR = LI.prototype.RB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), oh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kPR', {
          get: LI.prototype.jz,
          set: LI.prototype.RB,
        }),
        (LI.prototype.get_kVC = LI.prototype.rz =
          function () {
            return _h(this.hy)
          }),
        (LI.prototype.set_kVC = LI.prototype.ZB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ih(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kVC', {
          get: LI.prototype.rz,
          set: LI.prototype.ZB,
        }),
        (LI.prototype.get_kDF = LI.prototype.dz =
          function () {
            return rh(this.hy)
          }),
        (LI.prototype.set_kDF = LI.prototype.LB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ph(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kDF', {
          get: LI.prototype.dz,
          set: LI.prototype.LB,
        }),
        (LI.prototype.get_kMT = LI.prototype.iz =
          function () {
            return sh(this.hy)
          }),
        (LI.prototype.set_kMT = LI.prototype.QB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), ch(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kMT', {
          get: LI.prototype.iz,
          set: LI.prototype.QB,
        }),
        (LI.prototype.get_kCHR = LI.prototype.cz =
          function () {
            return ah(this.hy)
          }),
        (LI.prototype.set_kCHR = LI.prototype.KB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), yh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kCHR', {
          get: LI.prototype.cz,
          set: LI.prototype.KB,
        }),
        (LI.prototype.get_kKHR = LI.prototype.gz =
          function () {
            return lh(this.hy)
          }),
        (LI.prototype.set_kKHR = LI.prototype.OB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), uh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kKHR', {
          get: LI.prototype.gz,
          set: LI.prototype.OB,
        }),
        (LI.prototype.get_kSHR = LI.prototype.kz =
          function () {
            return bh(this.hy)
          }),
        (LI.prototype.set_kSHR = LI.prototype.SB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), mh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kSHR', {
          get: LI.prototype.kz,
          set: LI.prototype.SB,
        }),
        (LI.prototype.get_kAHR = LI.prototype.bz =
          function () {
            return dh(this.hy)
          }),
        (LI.prototype.set_kAHR = LI.prototype.JB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), hh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kAHR', {
          get: LI.prototype.bz,
          set: LI.prototype.JB,
        }),
        (LI.prototype.get_kSRHR_CL = LI.prototype.nz =
          function () {
            return fh(this.hy)
          }),
        (LI.prototype.set_kSRHR_CL = LI.prototype.VB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), gh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kSRHR_CL', {
          get: LI.prototype.nz,
          set: LI.prototype.VB,
        }),
        (LI.prototype.get_kSKHR_CL = LI.prototype.lz =
          function () {
            return Ch(this.hy)
          }),
        (LI.prototype.set_kSKHR_CL = LI.prototype.TB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), jh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kSKHR_CL', {
          get: LI.prototype.lz,
          set: LI.prototype.TB,
        }),
        (LI.prototype.get_kSSHR_CL = LI.prototype.pz =
          function () {
            return Sh(this.hy)
          }),
        (LI.prototype.set_kSSHR_CL = LI.prototype.XB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), vh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kSSHR_CL', {
          get: LI.prototype.pz,
          set: LI.prototype.XB,
        }),
        (LI.prototype.get_kSR_SPLT_CL = LI.prototype.oz =
          function () {
            return Rh(this.hy)
          }),
        (LI.prototype.set_kSR_SPLT_CL = LI.prototype.WB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Dh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kSR_SPLT_CL', {
          get: LI.prototype.oz,
          set: LI.prototype.WB,
        }),
        (LI.prototype.get_kSK_SPLT_CL = LI.prototype.mz =
          function () {
            return Ih(this.hy)
          }),
        (LI.prototype.set_kSK_SPLT_CL = LI.prototype.UB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Ph(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kSK_SPLT_CL', {
          get: LI.prototype.mz,
          set: LI.prototype.UB,
        }),
        (LI.prototype.get_kSS_SPLT_CL = LI.prototype.qz =
          function () {
            return Oh(this.hy)
          }),
        (LI.prototype.set_kSS_SPLT_CL = LI.prototype.YB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Wh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'kSS_SPLT_CL', {
          get: LI.prototype.qz,
          set: LI.prototype.YB,
        }),
        (LI.prototype.get_maxvolume = LI.prototype.yB =
          function () {
            return Bh(this.hy)
          }),
        (LI.prototype.set_maxvolume = LI.prototype.eE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Th(e, t)
          }),
        Object.defineProperty(LI.prototype, 'maxvolume', {
          get: LI.prototype.yB,
          set: LI.prototype.eE,
        }),
        (LI.prototype.get_timescale = LI.prototype.AB =
          function () {
            return Ah(this.hy)
          }),
        (LI.prototype.set_timescale = LI.prototype.gE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), kh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'timescale', {
          get: LI.prototype.AB,
          set: LI.prototype.gE,
        }),
        (LI.prototype.get_viterations = LI.prototype.BB =
          function () {
            return xh(this.hy)
          }),
        (LI.prototype.set_viterations = LI.prototype.hE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Lh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'viterations', {
          get: LI.prototype.BB,
          set: LI.prototype.hE,
        }),
        (LI.prototype.get_piterations = LI.prototype.zB =
          function () {
            return wh(this.hy)
          }),
        (LI.prototype.set_piterations = LI.prototype.fE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Fh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'piterations', {
          get: LI.prototype.zB,
          set: LI.prototype.fE,
        }),
        (LI.prototype.get_diterations = LI.prototype.az =
          function () {
            return Mh(this.hy)
          }),
        (LI.prototype.set_diterations = LI.prototype.IB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Hh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'diterations', {
          get: LI.prototype.az,
          set: LI.prototype.IB,
        }),
        (LI.prototype.get_citerations = LI.prototype.Zy =
          function () {
            return Gh(this.hy)
          }),
        (LI.prototype.set_citerations = LI.prototype.GB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Vh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'citerations', {
          get: LI.prototype.Zy,
          set: LI.prototype.GB,
        }),
        (LI.prototype.get_collisions = LI.prototype.$y =
          function () {
            return zh(this.hy)
          }),
        (LI.prototype.set_collisions = LI.prototype.HB =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Nh(e, t)
          }),
        Object.defineProperty(LI.prototype, 'collisions', {
          get: LI.prototype.$y,
          set: LI.prototype.HB,
        }),
        (LI.prototype.__destroy__ = function () {
          Uh(this.hy)
        }),
        (wI.prototype = Object.create(XR.prototype)),
        (wI.prototype.constructor = wI),
        (wI.prototype.iy = wI),
        (wI.jy = {}),
        (n.Node = wI),
        (wI.prototype.get_m_x = wI.prototype.xB =
          function () {
            return YR(Eh(this.hy), jD)
          }),
        (wI.prototype.set_m_x = wI.prototype.dE =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), qh(e, t)
          }),
        Object.defineProperty(wI.prototype, 'm_x', {
          get: wI.prototype.xB,
          set: wI.prototype.dE,
        }),
        (wI.prototype.get_m_q = wI.prototype.OA =
          function () {
            return YR(Kh(this.hy), jD)
          }),
        (wI.prototype.set_m_q = wI.prototype.uD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Qh(e, t)
          }),
        Object.defineProperty(wI.prototype, 'm_q', {
          get: wI.prototype.OA,
          set: wI.prototype.uD,
        }),
        (wI.prototype.get_m_v = wI.prototype.pB =
          function () {
            return YR(Xh(this.hy), jD)
          }),
        (wI.prototype.set_m_v = wI.prototype.WD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Zh(e, t)
          }),
        Object.defineProperty(wI.prototype, 'm_v', {
          get: wI.prototype.pB,
          set: wI.prototype.WD,
        }),
        (wI.prototype.get_m_f = wI.prototype.bA =
          function () {
            return YR(Yh(this.hy), jD)
          }),
        (wI.prototype.set_m_f = wI.prototype.IC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Jh(e, t)
          }),
        Object.defineProperty(wI.prototype, 'm_f', {
          get: wI.prototype.bA,
          set: wI.prototype.IC,
        }),
        (wI.prototype.get_m_n = wI.prototype.Hy =
          function () {
            return YR($h(this.hy), jD)
          }),
        (wI.prototype.set_m_n = wI.prototype.Qy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), tf(e, t)
          }),
        Object.defineProperty(wI.prototype, 'm_n', {
          get: wI.prototype.Hy,
          set: wI.prototype.Qy,
        }),
        (wI.prototype.get_m_im = wI.prototype.pA =
          function () {
            return ef(this.hy)
          }),
        (wI.prototype.set_m_im = wI.prototype.WC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), nf(e, t)
          }),
        Object.defineProperty(wI.prototype, 'm_im', {
          get: wI.prototype.pA,
          set: wI.prototype.WC,
        }),
        (wI.prototype.get_m_area = wI.prototype.Dz =
          function () {
            return of(this.hy)
          }),
        (wI.prototype.set_m_area = wI.prototype.jC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), _f(e, t)
          }),
        Object.defineProperty(wI.prototype, 'm_area', {
          get: wI.prototype.Dz,
          set: wI.prototype.jC,
        }),
        (wI.prototype.__destroy__ = function () {
          rf(this.hy)
        }),
        (FI.prototype = Object.create(XR.prototype)),
        (FI.prototype.constructor = FI),
        (FI.prototype.iy = FI),
        (FI.jy = {}),
        (n.btGhostPairCallback = FI),
        (FI.prototype.__destroy__ = function () {
          sf(this.hy)
        }),
        (MI.prototype = Object.create(XR.prototype)),
        (MI.prototype.constructor = MI),
        (MI.prototype.iy = MI),
        (MI.jy = {}),
        (n.btOverlappingPairCallback = MI),
        (MI.prototype.__destroy__ = function () {
          cf(this.hy)
        }),
        (HI.prototype = Object.create(CD.prototype)),
        (HI.prototype.constructor = HI),
        (HI.prototype.iy = HI),
        (HI.jy = {}),
        (n.btKinematicCharacterController = HI),
        (HI.prototype.setUpAxis = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), lf(e, t)
        }),
        (HI.prototype.setWalkDirection = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), uf(e, t)
        }),
        (HI.prototype.setVelocityForTimeInterval = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            bf(n, t, e)
        }),
        (HI.prototype.warp = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), mf(e, t)
        }),
        (HI.prototype.preStep = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), df(e, t)
        }),
        (HI.prototype.playerStep = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            hf(n, t, e)
        }),
        (HI.prototype.setFallSpeed = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ff(e, t)
        }),
        (HI.prototype.setJumpSpeed = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), gf(e, t)
        }),
        (HI.prototype.setMaxJumpHeight = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Cf(e, t)
        }),
        (HI.prototype.canJump = function () {
          return !!jf(this.hy)
        }),
        (HI.prototype.jump = function () {
          Sf(this.hy)
        }),
        (HI.prototype.setGravity = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), vf(e, t)
        }),
        (HI.prototype.getGravity = function () {
          return Rf(this.hy)
        }),
        (HI.prototype.setMaxSlope = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Df(e, t)
        }),
        (HI.prototype.getMaxSlope = function () {
          return If(this.hy)
        }),
        (HI.prototype.getGhostObject = function () {
          return YR(Pf(this.hy), tP)
        }),
        (HI.prototype.setUseGhostSweepTest = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Of(e, t)
        }),
        (HI.prototype.onGround = function () {
          return !!Wf(this.hy)
        }),
        (HI.prototype.setUpInterpolate = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Bf(e, t)
        }),
        (HI.prototype.updateAction = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Tf(n, t, e)
        }),
        (HI.prototype.__destroy__ = function () {
          Af(this.hy)
        }),
        (GI.prototype = Object.create(XR.prototype)),
        (GI.prototype.constructor = GI),
        (GI.prototype.iy = GI),
        (GI.jy = {}),
        (n.btSoftBodyArray = GI),
        (GI.prototype.size = GI.prototype.size =
          function () {
            return kf(this.hy)
          }),
        (GI.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(xf(e, t), kI)
        }),
        (GI.prototype.__destroy__ = function () {
          Lf(this.hy)
        }),
        (VI.prototype = Object.create(XR.prototype)),
        (VI.prototype.constructor = VI),
        (VI.prototype.iy = VI),
        (VI.jy = {}),
        (n.btFaceArray = VI),
        (VI.prototype.size = VI.prototype.size =
          function () {
            return wf(this.hy)
          }),
        (VI.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(Ff(e, t), pP)
        }),
        (VI.prototype.__destroy__ = function () {
          Mf(this.hy)
        }),
        (zI.prototype = Object.create(uD.prototype)),
        (zI.prototype.constructor = zI),
        (zI.prototype.iy = zI),
        (zI.jy = {}),
        (n.btStaticPlaneShape = zI),
        (zI.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Gf(e, t)
        }),
        (zI.prototype.getLocalScaling = function () {
          return YR(Vf(this.hy), jD)
        }),
        (zI.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            zf(n, t, e)
        }),
        (zI.prototype.__destroy__ = function () {
          Nf(this.hy)
        }),
        (NI.prototype = Object.create(XR.prototype)),
        (NI.prototype.constructor = NI),
        (NI.prototype.iy = NI),
        (NI.jy = {}),
        (n.btOverlappingPairCache = NI),
        (NI.prototype.setInternalGhostPairCallback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Uf(e, t)
        }),
        (NI.prototype.getNumOverlappingPairs = function () {
          return Ef(this.hy)
        }),
        (NI.prototype.__destroy__ = function () {
          qf(this.hy)
        }),
        (UI.prototype = Object.create(XR.prototype)),
        (UI.prototype.constructor = UI),
        (UI.prototype.iy = UI),
        (UI.jy = {}),
        (n.btIndexedMesh = UI),
        (UI.prototype.get_m_numTriangles = UI.prototype.KA =
          function () {
            return Kf(this.hy)
          }),
        (UI.prototype.set_m_numTriangles = UI.prototype.qD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Qf(e, t)
          }),
        Object.defineProperty(UI.prototype, 'm_numTriangles', {
          get: UI.prototype.KA,
          set: UI.prototype.qD,
        }),
        (UI.prototype.__destroy__ = function () {
          Xf(this.hy)
        }),
        (EI.prototype = Object.create(DD.prototype)),
        (EI.prototype.constructor = EI),
        (EI.prototype.iy = EI),
        (EI.jy = {}),
        (n.btSoftRigidDynamicsWorld = EI),
        (EI.prototype.addSoftBody = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            Yf(o, t, e, n)
        }),
        (EI.prototype.removeSoftBody = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Jf(e, t)
        }),
        (EI.prototype.removeCollisionObject = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), $f(e, t)
        }),
        (EI.prototype.getWorldInfo = function () {
          return YR(tg(this.hy), pI)
        }),
        (EI.prototype.getSoftBodyArray = function () {
          return YR(eg(this.hy), GI)
        }),
        (EI.prototype.getDispatcher = function () {
          return YR(ng(this.hy), PD)
        }),
        (EI.prototype.rayTest = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            og(o, t, e, n)
        }),
        (EI.prototype.getPairCache = function () {
          return YR(_g(this.hy), NI)
        }),
        (EI.prototype.getDispatchInfo = function () {
          return YR(ig(this.hy), MD)
        }),
        (EI.prototype.addCollisionObject = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? rg(o, t)
              : void 0 === n
                ? pg(o, t, e)
                : sg(o, t, e, n)
        }),
        (EI.prototype.getBroadphase = function () {
          return YR(cg(this.hy), VD)
        }),
        (EI.prototype.convexSweepTest = function (t, e, n, o, _) {
          var i = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            ag(i, t, e, n, o, _)
        }),
        (EI.prototype.contactPairTest = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            yg(o, t, e, n)
        }),
        (EI.prototype.contactTest = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            lg(n, t, e)
        }),
        (EI.prototype.updateSingleAabb = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ug(e, t)
        }),
        (EI.prototype.setDebugDrawer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), bg(e, t)
        }),
        (EI.prototype.getDebugDrawer = function () {
          return YR(mg(this.hy), mD)
        }),
        (EI.prototype.debugDrawWorld = function () {
          dg(this.hy)
        }),
        (EI.prototype.debugDrawObject = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            hg(o, t, e, n)
        }),
        (EI.prototype.setGravity = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), fg(e, t)
        }),
        (EI.prototype.getGravity = function () {
          return YR(gg(this.hy), jD)
        }),
        (EI.prototype.addRigidBody = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? Cg(o, t)
              : void 0 === n
                ? _emscripten_bind_btSoftRigidDynamicsWorld_addRigidBody_2(
                    o,
                    t,
                    e,
                  )
                : jg(o, t, e, n)
        }),
        (EI.prototype.removeRigidBody = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Sg(e, t)
        }),
        (EI.prototype.addConstraint = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            void 0 === e ? vg(n, t) : Rg(n, t, e)
        }),
        (EI.prototype.removeConstraint = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Dg(e, t)
        }),
        (EI.prototype.stepSimulation = function (t, e, n) {
          var o = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? Ig(o, t)
              : void 0 === n
                ? Pg(o, t, e)
                : Og(o, t, e, n)
          )
        }),
        (EI.prototype.setContactAddedCallback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Wg(e, t)
        }),
        (EI.prototype.setContactProcessedCallback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Bg(e, t)
        }),
        (EI.prototype.setContactDestroyedCallback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Tg(e, t)
        }),
        (EI.prototype.addAction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ag(e, t)
        }),
        (EI.prototype.removeAction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), kg(e, t)
        }),
        (EI.prototype.getSolverInfo = function () {
          return YR(xg(this.hy), lP)
        }),
        (EI.prototype.setInternalTickCallback = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            void 0 === e
              ? Lg(o, t)
              : void 0 === n
                ? wg(o, t, e)
                : Fg(o, t, e, n)
        }),
        (EI.prototype.__destroy__ = function () {
          Mg(this.hy)
        }),
        (qI.prototype = Object.create(lD.prototype)),
        (qI.prototype.constructor = qI),
        (qI.prototype.iy = qI),
        (qI.jy = {}),
        (n.btFixedConstraint = qI),
        (qI.prototype.enableFeedback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Gg(e, t)
        }),
        (qI.prototype.getBreakingImpulseThreshold = function () {
          return Vg(this.hy)
        }),
        (qI.prototype.setBreakingImpulseThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), zg(e, t)
        }),
        (qI.prototype.getParam = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Ng(n, t, e)
          )
        }),
        (qI.prototype.setParam = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            Ug(o, t, e, n)
        }),
        (qI.prototype.__destroy__ = function () {
          Eg(this.hy)
        }),
        (KI.prototype = Object.create(XR.prototype)),
        (KI.prototype.constructor = KI),
        (KI.prototype.iy = KI),
        (KI.jy = {}),
        (n.btTransform = KI),
        (KI.prototype.setIdentity = function () {
          Qg(this.hy)
        }),
        (KI.prototype.setOrigin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Xg(e, t)
        }),
        (KI.prototype.setRotation = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Zg(e, t)
        }),
        (KI.prototype.getOrigin = function () {
          return YR(Yg(this.hy), jD)
        }),
        (KI.prototype.getRotation = function () {
          return YR(Jg(this.hy), aP)
        }),
        (KI.prototype.getBasis = function () {
          return YR($g(this.hy), LD)
        }),
        (KI.prototype.setFromOpenGLMatrix = function (t) {
          var e = this.hy
          oD(), 'object' == typeof t && (t = pD(t)), tC(e, t)
        }),
        (KI.prototype.inverse = KI.prototype.inverse =
          function () {
            return YR(eC(this.hy), KI)
          }),
        (KI.prototype.op_mul = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(nC(e, t), KI)
        }),
        (KI.prototype.__destroy__ = function () {
          oC(this.hy)
        }),
        (QI.prototype = Object.create(xD.prototype)),
        (QI.prototype.constructor = QI),
        (QI.prototype.iy = QI),
        (QI.jy = {}),
        (n.ClosestRayResultCallback = QI),
        (QI.prototype.hasHit = function () {
          return !!iC(this.hy)
        }),
        (QI.prototype.get_m_rayFromWorld = QI.prototype.Iy =
          function () {
            return YR(rC(this.hy), jD)
          }),
        (QI.prototype.set_m_rayFromWorld = QI.prototype.Ry =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), pC(e, t)
          }),
        Object.defineProperty(QI.prototype, 'm_rayFromWorld', {
          get: QI.prototype.Iy,
          set: QI.prototype.Ry,
        }),
        (QI.prototype.get_m_rayToWorld = QI.prototype.Jy =
          function () {
            return YR(sC(this.hy), jD)
          }),
        (QI.prototype.set_m_rayToWorld = QI.prototype.Sy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), cC(e, t)
          }),
        Object.defineProperty(QI.prototype, 'm_rayToWorld', {
          get: QI.prototype.Jy,
          set: QI.prototype.Sy,
        }),
        (QI.prototype.get_m_hitNormalWorld = QI.prototype.sy =
          function () {
            return YR(aC(this.hy), jD)
          }),
        (QI.prototype.set_m_hitNormalWorld = QI.prototype.zy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), yC(e, t)
          }),
        Object.defineProperty(QI.prototype, 'm_hitNormalWorld', {
          get: QI.prototype.sy,
          set: QI.prototype.zy,
        }),
        (QI.prototype.get_m_hitPointWorld = QI.prototype.ty =
          function () {
            return YR(lC(this.hy), jD)
          }),
        (QI.prototype.set_m_hitPointWorld = QI.prototype.Ay =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), uC(e, t)
          }),
        Object.defineProperty(QI.prototype, 'm_hitPointWorld', {
          get: QI.prototype.ty,
          set: QI.prototype.Ay,
        }),
        (QI.prototype.get_m_collisionFilterGroup = QI.prototype.ky =
          function () {
            return bC(this.hy)
          }),
        (QI.prototype.set_m_collisionFilterGroup = QI.prototype.my =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), mC(e, t)
          }),
        Object.defineProperty(QI.prototype, 'm_collisionFilterGroup', {
          get: QI.prototype.ky,
          set: QI.prototype.my,
        }),
        (QI.prototype.get_m_collisionFilterMask = QI.prototype.ly =
          function () {
            return dC(this.hy)
          }),
        (QI.prototype.set_m_collisionFilterMask = QI.prototype.ny =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), hC(e, t)
          }),
        Object.defineProperty(QI.prototype, 'm_collisionFilterMask', {
          get: QI.prototype.ly,
          set: QI.prototype.ny,
        }),
        (QI.prototype.get_m_closestHitFraction = QI.prototype.oy =
          function () {
            return fC(this.hy)
          }),
        (QI.prototype.set_m_closestHitFraction = QI.prototype.py =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), gC(e, t)
          }),
        Object.defineProperty(QI.prototype, 'm_closestHitFraction', {
          get: QI.prototype.oy,
          set: QI.prototype.py,
        }),
        (QI.prototype.get_m_collisionObject = QI.prototype.qy =
          function () {
            return YR(CC(this.hy), aD)
          }),
        (QI.prototype.set_m_collisionObject = QI.prototype.xy =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), jC(e, t)
          }),
        Object.defineProperty(QI.prototype, 'm_collisionObject', {
          get: QI.prototype.qy,
          set: QI.prototype.xy,
        }),
        (QI.prototype.__destroy__ = function () {
          SC(this.hy)
        }),
        (XI.prototype = Object.create(dD.prototype)),
        (XI.prototype.constructor = XI),
        (XI.prototype.iy = XI),
        (XI.jy = {}),
        (n.btSoftBodyRigidBodyCollisionConfiguration = XI),
        (XI.prototype.__destroy__ = function () {
          DC(this.hy)
        }),
        (ZI.prototype = Object.create(AD.prototype)),
        (ZI.prototype.constructor = ZI),
        (ZI.prototype.iy = ZI),
        (ZI.jy = {}),
        (n.ConcreteContactResultCallback = ZI),
        (ZI.prototype.addSingleResult = function (t, e, n, o, _, i, r) {
          var p = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            i && 'object' == typeof i && (i = i.hy),
            r && 'object' == typeof r && (r = r.hy),
            PC(p, t, e, n, o, _, i, r)
          )
        }),
        (ZI.prototype.__destroy__ = function () {
          OC(this.hy)
        }),
        (YI.prototype = Object.create(hD.prototype)),
        (YI.prototype.constructor = YI),
        (YI.prototype.iy = YI),
        (YI.jy = {}),
        (n.btBvhTriangleMeshShape = YI),
        (YI.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), TC(e, t)
        }),
        (YI.prototype.getLocalScaling = function () {
          return YR(AC(this.hy), jD)
        }),
        (YI.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            kC(n, t, e)
        }),
        (YI.prototype.__destroy__ = function () {
          xC(this.hy)
        }),
        (JI.prototype = Object.create(XR.prototype)),
        (JI.prototype.constructor = JI),
        (JI.prototype.iy = JI),
        (JI.jy = {}),
        (n.btConstCollisionObjectArray = JI),
        (JI.prototype.size = JI.prototype.size =
          function () {
            return LC(this.hy)
          }),
        (JI.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(wC(e, t), aD)
        }),
        (JI.prototype.__destroy__ = function () {
          FC(this.hy)
        }),
        ($I.prototype = Object.create(lD.prototype)),
        ($I.prototype.constructor = $I),
        ($I.prototype.iy = $I),
        ($I.jy = {}),
        (n.btSliderConstraint = $I),
        ($I.prototype.setLowerLinLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), GC(e, t)
        }),
        ($I.prototype.setUpperLinLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), VC(e, t)
        }),
        ($I.prototype.setLowerAngLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), zC(e, t)
        }),
        ($I.prototype.setUpperAngLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), NC(e, t)
        }),
        ($I.prototype.enableFeedback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), UC(e, t)
        }),
        ($I.prototype.getBreakingImpulseThreshold = function () {
          return EC(this.hy)
        }),
        ($I.prototype.setBreakingImpulseThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), qC(e, t)
        }),
        ($I.prototype.getParam = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            KC(n, t, e)
          )
        }),
        ($I.prototype.setParam = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            QC(o, t, e, n)
        }),
        ($I.prototype.__destroy__ = function () {
          XC(this.hy)
        }),
        (tP.prototype = Object.create(fD.prototype)),
        (tP.prototype.constructor = tP),
        (tP.prototype.iy = tP),
        (tP.jy = {}),
        (n.btPairCachingGhostObject = tP),
        (tP.prototype.setAnisotropicFriction = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            YC(n, t, e)
        }),
        (tP.prototype.getCollisionShape = function () {
          return YR(JC(this.hy), cD)
        }),
        (tP.prototype.setContactProcessingThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), $C(e, t)
        }),
        (tP.prototype.setActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), tj(e, t)
        }),
        (tP.prototype.forceActivationState = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), ej(e, t)
        }),
        (tP.prototype.activate = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy),
            void 0 === t ? nj(e) : oj(e, t)
        }),
        (tP.prototype.isActive = function () {
          return !!_j(this.hy)
        }),
        (tP.prototype.isKinematicObject = function () {
          return !!ij(this.hy)
        }),
        (tP.prototype.isStaticObject = function () {
          return !!rj(this.hy)
        }),
        (tP.prototype.isStaticOrKinematicObject = function () {
          return !!pj(this.hy)
        }),
        (tP.prototype.getRestitution = function () {
          return sj(this.hy)
        }),
        (tP.prototype.getFriction = function () {
          return cj(this.hy)
        }),
        (tP.prototype.getRollingFriction = function () {
          return aj(this.hy)
        }),
        (tP.prototype.setRestitution = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), yj(e, t)
        }),
        (tP.prototype.setFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), lj(e, t)
        }),
        (tP.prototype.setRollingFriction = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), uj(e, t)
        }),
        (tP.prototype.getWorldTransform = function () {
          return YR(bj(this.hy), KI)
        }),
        (tP.prototype.getCollisionFlags = function () {
          return mj(this.hy)
        }),
        (tP.prototype.setCollisionFlags = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), dj(e, t)
        }),
        (tP.prototype.setWorldTransform = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), hj(e, t)
        }),
        (tP.prototype.setCollisionShape = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), fj(e, t)
        }),
        (tP.prototype.setCcdMotionThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), gj(e, t)
        }),
        (tP.prototype.setCcdSweptSphereRadius = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Cj(e, t)
        }),
        (tP.prototype.getUserIndex = function () {
          return jj(this.hy)
        }),
        (tP.prototype.setUserIndex = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Sj(e, t)
        }),
        (tP.prototype.getUserPointer = function () {
          return YR(vj(this.hy), rI)
        }),
        (tP.prototype.setUserPointer = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Rj(e, t)
        }),
        (tP.prototype.getBroadphaseHandle = function () {
          return YR(Dj(this.hy), _P)
        }),
        (tP.prototype.getNumOverlappingObjects = function () {
          return Ij(this.hy)
        }),
        (tP.prototype.getOverlappingObject = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(Pj(e, t), aD)
        }),
        (tP.prototype.__destroy__ = function () {
          Oj(this.hy)
        }),
        (eP.prototype = Object.create(XR.prototype)),
        (eP.prototype.constructor = eP),
        (eP.prototype.iy = eP),
        (eP.jy = {}),
        (n.btManifoldPoint = eP),
        (eP.prototype.getPositionWorldOnA = function () {
          return YR(Wj(this.hy), jD)
        }),
        (eP.prototype.getPositionWorldOnB = function () {
          return YR(Bj(this.hy), jD)
        }),
        (eP.prototype.getAppliedImpulse = function () {
          return Tj(this.hy)
        }),
        (eP.prototype.getDistance = function () {
          return Aj(this.hy)
        }),
        (eP.prototype.get_m_localPointA = eP.prototype.AA =
          function () {
            return YR(kj(this.hy), jD)
          }),
        (eP.prototype.set_m_localPointA = eP.prototype.gD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), xj(e, t)
          }),
        Object.defineProperty(eP.prototype, 'm_localPointA', {
          get: eP.prototype.AA,
          set: eP.prototype.gD,
        }),
        (eP.prototype.get_m_localPointB = eP.prototype.BA =
          function () {
            return YR(Lj(this.hy), jD)
          }),
        (eP.prototype.set_m_localPointB = eP.prototype.hD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), wj(e, t)
          }),
        Object.defineProperty(eP.prototype, 'm_localPointB', {
          get: eP.prototype.BA,
          set: eP.prototype.hD,
        }),
        (eP.prototype.get_m_positionWorldOnB = eP.prototype.NA =
          function () {
            return YR(Fj(this.hy), jD)
          }),
        (eP.prototype.set_m_positionWorldOnB = eP.prototype.tD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Mj(e, t)
          }),
        Object.defineProperty(eP.prototype, 'm_positionWorldOnB', {
          get: eP.prototype.NA,
          set: eP.prototype.tD,
        }),
        (eP.prototype.get_m_positionWorldOnA = eP.prototype.MA =
          function () {
            return YR(Hj(this.hy), jD)
          }),
        (eP.prototype.set_m_positionWorldOnA = eP.prototype.sD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Gj(e, t)
          }),
        Object.defineProperty(eP.prototype, 'm_positionWorldOnA', {
          get: eP.prototype.MA,
          set: eP.prototype.sD,
        }),
        (eP.prototype.get_m_normalWorldOnB = eP.prototype.IA =
          function () {
            return YR(Vj(this.hy), jD)
          }),
        (eP.prototype.set_m_normalWorldOnB = eP.prototype.oD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), zj(e, t)
          }),
        Object.defineProperty(eP.prototype, 'm_normalWorldOnB', {
          get: eP.prototype.IA,
          set: eP.prototype.oD,
        }),
        (eP.prototype.get_m_userPersistentData = eP.prototype.oB =
          function () {
            return Nj(this.hy)
          }),
        (eP.prototype.set_m_userPersistentData = eP.prototype.VD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Uj(e, t)
          }),
        Object.defineProperty(eP.prototype, 'm_userPersistentData', {
          get: eP.prototype.oB,
          set: eP.prototype.VD,
        }),
        (eP.prototype.__destroy__ = function () {
          Ej(this.hy)
        }),
        (nP.prototype = Object.create(lD.prototype)),
        (nP.prototype.constructor = nP),
        (nP.prototype.iy = nP),
        (nP.jy = {}),
        (n.btPoint2PointConstraint = nP),
        (nP.prototype.setPivotA = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Qj(e, t)
        }),
        (nP.prototype.setPivotB = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Xj(e, t)
        }),
        (nP.prototype.getPivotInA = function () {
          return YR(Zj(this.hy), jD)
        }),
        (nP.prototype.getPivotInB = function () {
          return YR(Yj(this.hy), jD)
        }),
        (nP.prototype.enableFeedback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Jj(e, t)
        }),
        (nP.prototype.getBreakingImpulseThreshold = function () {
          return $j(this.hy)
        }),
        (nP.prototype.setBreakingImpulseThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), tS(e, t)
        }),
        (nP.prototype.getParam = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            eS(n, t, e)
          )
        }),
        (nP.prototype.setParam = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            nS(o, t, e, n)
        }),
        (nP.prototype.get_m_setting = nP.prototype.VA =
          function () {
            return YR(oS(this.hy), YD)
          }),
        (nP.prototype.set_m_setting = nP.prototype.BD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), _S(e, t)
          }),
        Object.defineProperty(nP.prototype, 'm_setting', {
          get: nP.prototype.VA,
          set: nP.prototype.BD,
        }),
        (nP.prototype.__destroy__ = function () {
          iS(this.hy)
        }),
        (oP.prototype = Object.create(XR.prototype)),
        (oP.prototype.constructor = oP),
        (oP.prototype.iy = oP),
        (oP.jy = {}),
        (n.btSoftBodyHelpers = oP),
        (oP.prototype.CreateRope = function (t, e, n, o, _) {
          var i = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            YR(pS(i, t, e, n, o, _), kI)
          )
        }),
        (oP.prototype.CreatePatch = function (t, e, n, o, _, i, r, p, s) {
          var c = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            i && 'object' == typeof i && (i = i.hy),
            r && 'object' == typeof r && (r = r.hy),
            p && 'object' == typeof p && (p = p.hy),
            s && 'object' == typeof s && (s = s.hy),
            YR(sS(c, t, e, n, o, _, i, r, p, s), kI)
          )
        }),
        (oP.prototype.CreatePatchUV = function (t, e, n, o, _, i, r, p, s, c) {
          var a = this.hy
          return (
            oD(),
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            i && 'object' == typeof i && (i = i.hy),
            r && 'object' == typeof r && (r = r.hy),
            p && 'object' == typeof p && (p = p.hy),
            s && 'object' == typeof s && (s = s.hy),
            'object' == typeof c && (c = pD(c)),
            YR(cS(a, t, e, n, o, _, i, r, p, s, c), kI)
          )
        }),
        (oP.prototype.CreateEllipsoid = function (t, e, n, o) {
          var _ = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            YR(aS(_, t, e, n, o), kI)
          )
        }),
        (oP.prototype.CreateFromTriMesh = function (t, e, n, o, _) {
          var i = this.hy
          if (
            (oD(),
            t && 'object' == typeof t && (t = t.hy),
            'object' == typeof e && (e = pD(e)),
            'object' == typeof n && 'object' == typeof n)
          ) {
            var r = _D(n, D)
            iD(n, D, r), (n = r)
          }
          return (
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            YR(yS(i, t, e, n, o, _), kI)
          )
        }),
        (oP.prototype.CreateFromConvexHull = function (t, e, n, o) {
          var _ = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            YR(lS(_, t, e, n, o), kI)
          )
        }),
        (oP.prototype.__destroy__ = function () {
          uS(this.hy)
        }),
        (_P.prototype = Object.create(XR.prototype)),
        (_P.prototype.constructor = _P),
        (_P.prototype.iy = _P),
        (_P.jy = {}),
        (n.btBroadphaseProxy = _P),
        (_P.prototype.get_m_collisionFilterGroup = _P.prototype.ky =
          function () {
            return bS(this.hy)
          }),
        (_P.prototype.set_m_collisionFilterGroup = _P.prototype.my =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), mS(e, t)
          }),
        Object.defineProperty(_P.prototype, 'm_collisionFilterGroup', {
          get: _P.prototype.ky,
          set: _P.prototype.my,
        }),
        (_P.prototype.get_m_collisionFilterMask = _P.prototype.ly =
          function () {
            return dS(this.hy)
          }),
        (_P.prototype.set_m_collisionFilterMask = _P.prototype.ny =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), hS(e, t)
          }),
        Object.defineProperty(_P.prototype, 'm_collisionFilterMask', {
          get: _P.prototype.ly,
          set: _P.prototype.ny,
        }),
        (_P.prototype.__destroy__ = function () {
          fS(this.hy)
        }),
        (iP.prototype = Object.create(XR.prototype)),
        (iP.prototype.constructor = iP),
        (iP.prototype.iy = iP),
        (iP.jy = {}),
        (n.tNodeArray = iP),
        (iP.prototype.size = iP.prototype.size =
          function () {
            return gS(this.hy)
          }),
        (iP.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(CS(e, t), wI)
        }),
        (iP.prototype.__destroy__ = function () {
          jS(this.hy)
        }),
        (rP.prototype = Object.create(cD.prototype)),
        (rP.prototype.constructor = rP),
        (rP.prototype.iy = rP),
        (rP.jy = {}),
        (n.btBoxShape = rP),
        (rP.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), vS(e, t)
        }),
        (rP.prototype.getMargin = function () {
          return RS(this.hy)
        }),
        (rP.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), DS(e, t)
        }),
        (rP.prototype.getLocalScaling = function () {
          return YR(IS(this.hy), jD)
        }),
        (rP.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            PS(n, t, e)
        }),
        (rP.prototype.__destroy__ = function () {
          OS(this.hy)
        }),
        (pP.prototype = Object.create(XR.prototype)),
        (pP.prototype.constructor = pP),
        (pP.prototype.iy = pP),
        (pP.jy = {}),
        (n.btFace = pP),
        (pP.prototype.get_m_indices = pP.prototype.rA =
          function () {
            return YR(WS(this.hy), xI)
          }),
        (pP.prototype.set_m_indices = pP.prototype.YC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), BS(e, t)
          }),
        Object.defineProperty(pP.prototype, 'm_indices', {
          get: pP.prototype.rA,
          set: pP.prototype.YC,
        }),
        (pP.prototype.get_m_plane = pP.prototype.LA =
          function (t) {
            var e = this.hy
            return t && 'object' == typeof t && (t = t.hy), TS(e, t)
          }),
        (pP.prototype.set_m_plane = pP.prototype.rD =
          function (t, e) {
            var n = this.hy
            oD(),
              t && 'object' == typeof t && (t = t.hy),
              e && 'object' == typeof e && (e = e.hy),
              AS(n, t, e)
          }),
        Object.defineProperty(pP.prototype, 'm_plane', {
          get: pP.prototype.LA,
          set: pP.prototype.rD,
        }),
        (pP.prototype.__destroy__ = function () {
          kS(this.hy)
        }),
        (sP.prototype = Object.create(mD.prototype)),
        (sP.prototype.constructor = sP),
        (sP.prototype.iy = sP),
        (sP.jy = {}),
        (n.DebugDrawer = sP),
        (sP.prototype.drawLine = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            LS(o, t, e, n)
        }),
        (sP.prototype.drawContactPoint = function (t, e, n, o, _) {
          var i = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            _ && 'object' == typeof _ && (_ = _.hy),
            wS(i, t, e, n, o, _)
        }),
        (sP.prototype.reportErrorWarning = function (t) {
          var e = this.hy
          oD(), (t = t && 'object' == typeof t ? t.hy : rD(t)), FS(e, t)
        }),
        (sP.prototype.draw3dText = function (t, e) {
          var n = this.hy
          oD(),
            t && 'object' == typeof t && (t = t.hy),
            (e = e && 'object' == typeof e ? e.hy : rD(e)),
            MS(n, t, e)
        }),
        (sP.prototype.setDebugMode = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), HS(e, t)
        }),
        (sP.prototype.getDebugMode = function () {
          return GS(this.hy)
        }),
        (sP.prototype.__destroy__ = function () {
          VS(this.hy)
        }),
        (cP.prototype = Object.create(bD.prototype)),
        (cP.prototype.constructor = cP),
        (cP.prototype.iy = cP),
        (cP.jy = {}),
        (n.btCapsuleShapeX = cP),
        (cP.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), NS(e, t)
        }),
        (cP.prototype.getMargin = function () {
          return US(this.hy)
        }),
        (cP.prototype.getUpAxis = function () {
          return ES(this.hy)
        }),
        (cP.prototype.getRadius = function () {
          return qS(this.hy)
        }),
        (cP.prototype.getHalfHeight = function () {
          return KS(this.hy)
        }),
        (cP.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), QS(e, t)
        }),
        (cP.prototype.getLocalScaling = function () {
          return YR(XS(this.hy), jD)
        }),
        (cP.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ZS(n, t, e)
        }),
        (cP.prototype.__destroy__ = function () {
          YS(this.hy)
        }),
        (aP.prototype = Object.create(vD.prototype)),
        (aP.prototype.constructor = aP),
        (aP.prototype.iy = aP),
        (aP.jy = {}),
        (n.btQuaternion = aP),
        (aP.prototype.setValue = function (t, e, n, o) {
          var _ = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            o && 'object' == typeof o && (o = o.hy),
            $S(_, t, e, n, o)
        }),
        (aP.prototype.setEulerZYX = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            tv(o, t, e, n)
        }),
        (aP.prototype.setRotation = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            ev(n, t, e)
        }),
        (aP.prototype.normalize = aP.prototype.normalize =
          function () {
            nv(this.hy)
          }),
        (aP.prototype.length2 = function () {
          return ov(this.hy)
        }),
        (aP.prototype.length = aP.prototype.length =
          function () {
            return _v(this.hy)
          }),
        (aP.prototype.dot = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), iv(e, t)
        }),
        (aP.prototype.normalized = function () {
          return YR(rv(this.hy), aP)
        }),
        (aP.prototype.getAxis = function () {
          return YR(pv(this.hy), jD)
        }),
        (aP.prototype.inverse = aP.prototype.inverse =
          function () {
            return YR(sv(this.hy), aP)
          }),
        (aP.prototype.getAngle = function () {
          return cv(this.hy)
        }),
        (aP.prototype.getAngleShortestPath = function () {
          return av(this.hy)
        }),
        (aP.prototype.angle = aP.prototype.angle =
          function (t) {
            var e = this.hy
            return t && 'object' == typeof t && (t = t.hy), yv(e, t)
          }),
        (aP.prototype.angleShortestPath = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), lv(e, t)
        }),
        (aP.prototype.op_add = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(uv(e, t), aP)
        }),
        (aP.prototype.op_sub = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(bv(e, t), aP)
        }),
        (aP.prototype.op_mul = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(mv(e, t), aP)
        }),
        (aP.prototype.op_mulq = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(dv(e, t), aP)
        }),
        (aP.prototype.op_div = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(hv(e, t), aP)
        }),
        (aP.prototype.x = aP.prototype.x =
          function () {
            return fv(this.hy)
          }),
        (aP.prototype.y = aP.prototype.y =
          function () {
            return gv(this.hy)
          }),
        (aP.prototype.z = aP.prototype.z =
          function () {
            return Cv(this.hy)
          }),
        (aP.prototype.w = function () {
          return jv(this.hy)
        }),
        (aP.prototype.setX = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Sv(e, t)
        }),
        (aP.prototype.setY = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), vv(e, t)
        }),
        (aP.prototype.setZ = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Rv(e, t)
        }),
        (aP.prototype.setW = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Dv(e, t)
        }),
        (aP.prototype.__destroy__ = function () {
          Iv(this.hy)
        }),
        (yP.prototype = Object.create(bD.prototype)),
        (yP.prototype.constructor = yP),
        (yP.prototype.iy = yP),
        (yP.jy = {}),
        (n.btCapsuleShapeZ = yP),
        (yP.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Ov(e, t)
        }),
        (yP.prototype.getMargin = function () {
          return Wv(this.hy)
        }),
        (yP.prototype.getUpAxis = function () {
          return Bv(this.hy)
        }),
        (yP.prototype.getRadius = function () {
          return Tv(this.hy)
        }),
        (yP.prototype.getHalfHeight = function () {
          return Av(this.hy)
        }),
        (yP.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), kv(e, t)
        }),
        (yP.prototype.getLocalScaling = function () {
          return YR(xv(this.hy), jD)
        }),
        (yP.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Lv(n, t, e)
        }),
        (yP.prototype.__destroy__ = function () {
          wv(this.hy)
        }),
        (lP.prototype = Object.create(XR.prototype)),
        (lP.prototype.constructor = lP),
        (lP.prototype.iy = lP),
        (lP.jy = {}),
        (n.btContactSolverInfo = lP),
        (lP.prototype.get_m_splitImpulse = lP.prototype.YA =
          function () {
            return !!Fv(this.hy)
          }),
        (lP.prototype.set_m_splitImpulse = lP.prototype.ED =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Mv(e, t)
          }),
        Object.defineProperty(lP.prototype, 'm_splitImpulse', {
          get: lP.prototype.YA,
          set: lP.prototype.ED,
        }),
        (lP.prototype.get_m_splitImpulsePenetrationThreshold = lP.prototype.ZA =
          function () {
            return Hv(this.hy)
          }),
        (lP.prototype.set_m_splitImpulsePenetrationThreshold = lP.prototype.FD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), Gv(e, t)
          }),
        Object.defineProperty(
          lP.prototype,
          'm_splitImpulsePenetrationThreshold',
          { get: lP.prototype.ZA, set: lP.prototype.FD },
        ),
        (lP.prototype.get_m_numIterations = lP.prototype.JA =
          function () {
            return Vv(this.hy)
          }),
        (lP.prototype.set_m_numIterations = lP.prototype.pD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), zv(e, t)
          }),
        Object.defineProperty(lP.prototype, 'm_numIterations', {
          get: lP.prototype.JA,
          set: lP.prototype.pD,
        }),
        (lP.prototype.__destroy__ = function () {
          Nv(this.hy)
        }),
        (uP.prototype = Object.create(OD.prototype)),
        (uP.prototype.constructor = uP),
        (uP.prototype.iy = uP),
        (uP.jy = {}),
        (n.btGeneric6DofSpringConstraint = uP),
        (uP.prototype.enableSpring = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            qv(n, t, e)
        }),
        (uP.prototype.setStiffness = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Kv(n, t, e)
        }),
        (uP.prototype.setDamping = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            Qv(n, t, e)
        }),
        (uP.prototype.setEquilibriumPoint = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            void 0 === t ? Xv(n) : void 0 === e ? Zv(n, t) : Yv(n, t, e)
        }),
        (uP.prototype.setLinearLowerLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), Jv(e, t)
        }),
        (uP.prototype.setLinearUpperLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), $v(e, t)
        }),
        (uP.prototype.setAngularLowerLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), tR(e, t)
        }),
        (uP.prototype.setAngularUpperLimit = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), eR(e, t)
        }),
        (uP.prototype.getFrameOffsetA = function () {
          return YR(nR(this.hy), KI)
        }),
        (uP.prototype.enableFeedback = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), oR(e, t)
        }),
        (uP.prototype.getBreakingImpulseThreshold = function () {
          return _R(this.hy)
        }),
        (uP.prototype.setBreakingImpulseThreshold = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), iR(e, t)
        }),
        (uP.prototype.getParam = function (t, e) {
          var n = this.hy
          return (
            t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            rR(n, t, e)
          )
        }),
        (uP.prototype.setParam = function (t, e, n) {
          var o = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            n && 'object' == typeof n && (n = n.hy),
            pR(o, t, e, n)
        }),
        (uP.prototype.__destroy__ = function () {
          sR(this.hy)
        }),
        (bP.prototype = Object.create(cD.prototype)),
        (bP.prototype.constructor = bP),
        (bP.prototype.iy = bP),
        (bP.jy = {}),
        (n.btSphereShape = bP),
        (bP.prototype.setMargin = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), aR(e, t)
        }),
        (bP.prototype.getMargin = function () {
          return yR(this.hy)
        }),
        (bP.prototype.setLocalScaling = function (t) {
          var e = this.hy
          t && 'object' == typeof t && (t = t.hy), lR(e, t)
        }),
        (bP.prototype.getLocalScaling = function () {
          return YR(uR(this.hy), jD)
        }),
        (bP.prototype.calculateLocalInertia = function (t, e) {
          var n = this.hy
          t && 'object' == typeof t && (t = t.hy),
            e && 'object' == typeof e && (e = e.hy),
            bR(n, t, e)
        }),
        (bP.prototype.__destroy__ = function () {
          mR(this.hy)
        }),
        (mP.prototype = Object.create(XR.prototype)),
        (mP.prototype.constructor = mP),
        (mP.prototype.iy = mP),
        (mP.jy = {}),
        (n.Face = mP),
        (mP.prototype.get_m_n = mP.prototype.Hy =
          function (t) {
            var e = this.hy
            return t && 'object' == typeof t && (t = t.hy), YR(dR(e, t), wI)
          }),
        (mP.prototype.set_m_n = mP.prototype.Qy =
          function (t, e) {
            var n = this.hy
            oD(),
              t && 'object' == typeof t && (t = t.hy),
              e && 'object' == typeof e && (e = e.hy),
              hR(n, t, e)
          }),
        Object.defineProperty(mP.prototype, 'm_n', {
          get: mP.prototype.Hy,
          set: mP.prototype.Qy,
        }),
        (mP.prototype.get_m_normal = mP.prototype.HA =
          function () {
            return YR(fR(this.hy), jD)
          }),
        (mP.prototype.set_m_normal = mP.prototype.nD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), gR(e, t)
          }),
        Object.defineProperty(mP.prototype, 'm_normal', {
          get: mP.prototype.HA,
          set: mP.prototype.nD,
        }),
        (mP.prototype.get_m_ra = mP.prototype.PA =
          function () {
            return CR(this.hy)
          }),
        (mP.prototype.set_m_ra = mP.prototype.vD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), jR(e, t)
          }),
        Object.defineProperty(mP.prototype, 'm_ra', {
          get: mP.prototype.PA,
          set: mP.prototype.vD,
        }),
        (mP.prototype.__destroy__ = function () {
          SR(this.hy)
        }),
        (dP.prototype = Object.create(XR.prototype)),
        (dP.prototype.constructor = dP),
        (dP.prototype.iy = dP),
        (dP.jy = {}),
        (n.tFaceArray = dP),
        (dP.prototype.size = dP.prototype.size =
          function () {
            return vR(this.hy)
          }),
        (dP.prototype.at = function (t) {
          var e = this.hy
          return t && 'object' == typeof t && (t = t.hy), YR(RR(e, t), mP)
        }),
        (dP.prototype.__destroy__ = function () {
          DR(this.hy)
        }),
        (hP.prototype = Object.create(XR.prototype)),
        (hP.prototype.constructor = hP),
        (hP.prototype.iy = hP),
        (hP.jy = {}),
        (n.LocalConvexResult = hP),
        (hP.prototype.get_m_hitCollisionObject = hP.prototype.iA =
          function () {
            return YR(PR(this.hy), aD)
          }),
        (hP.prototype.set_m_hitCollisionObject = hP.prototype.PC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), OR(e, t)
          }),
        Object.defineProperty(hP.prototype, 'm_hitCollisionObject', {
          get: hP.prototype.iA,
          set: hP.prototype.PC,
        }),
        (hP.prototype.get_m_localShapeInfo = hP.prototype.CA =
          function () {
            return YR(WR(this.hy), JD)
          }),
        (hP.prototype.set_m_localShapeInfo = hP.prototype.iD =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), BR(e, t)
          }),
        Object.defineProperty(hP.prototype, 'm_localShapeInfo', {
          get: hP.prototype.CA,
          set: hP.prototype.iD,
        }),
        (hP.prototype.get_m_hitNormalLocal = hP.prototype.mA =
          function () {
            return YR(TR(this.hy), jD)
          }),
        (hP.prototype.set_m_hitNormalLocal = hP.prototype.TC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), AR(e, t)
          }),
        Object.defineProperty(hP.prototype, 'm_hitNormalLocal', {
          get: hP.prototype.mA,
          set: hP.prototype.TC,
        }),
        (hP.prototype.get_m_hitPointLocal = hP.prototype.oA =
          function () {
            return YR(kR(this.hy), jD)
          }),
        (hP.prototype.set_m_hitPointLocal = hP.prototype.VC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), xR(e, t)
          }),
        Object.defineProperty(hP.prototype, 'm_hitPointLocal', {
          get: hP.prototype.oA,
          set: hP.prototype.VC,
        }),
        (hP.prototype.get_m_hitFraction = hP.prototype.jA =
          function () {
            return LR(this.hy)
          }),
        (hP.prototype.set_m_hitFraction = hP.prototype.QC =
          function (t) {
            var e = this.hy
            t && 'object' == typeof t && (t = t.hy), wR(e, t)
          }),
        Object.defineProperty(hP.prototype, 'm_hitFraction', {
          get: hP.prototype.jA,
          set: hP.prototype.QC,
        }),
        (hP.prototype.__destroy__ = function () {
          FR(this.hy)
        }),
        (function () {
          function t() {
            ;(n.BT_CONSTRAINT_ERP = MR()),
              (n.BT_CONSTRAINT_STOP_ERP = HR()),
              (n.BT_CONSTRAINT_CFM = GR()),
              (n.BT_CONSTRAINT_STOP_CFM = VR()),
              (n.PHY_FLOAT = zR()),
              (n.PHY_DOUBLE = NR()),
              (n.PHY_INTEGER = UR()),
              (n.PHY_SHORT = ER()),
              (n.PHY_FIXEDPOINT88 = qR()),
              (n.PHY_UCHAR = KR())
          }
          w ? t() : x.unshift(t)
        })(),
        (this.Ammo = n),
        e.ready
      )
    }
  )
})()
'object' == typeof exports && 'object' == typeof module
  ? (module.exports = Ammo)
  : 'function' == typeof define && define.amd
    ? define([], function () {
        return Ammo
      })
    : 'object' == typeof exports && (exports.Ammo = Ammo)
