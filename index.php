<?php
// Check if the authkey parameter is missing in the URL
if (!isset($_GET['authkey'])) {
    // Add the authkey parameter with a default value
    $url = $_SERVER['REQUEST_URI'];
    if (strpos($url, '?') !== false) {
        $url .= '&authkey=ignore_this';
    } else {
        $url .= '?authkey=ignore_this';
    }

    // Redirect the user to the updated URL
    header('Location: ' . $url);
    exit;
}

// Rest of your PHP code...
?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="cache-control" content="no-cache" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="applicable-device" content="mobile" />
    <meta name="renderer" content="webkit" />
    <meta name="force-rendering" content="webkit" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,viewport-fit=cover"
    />
    <meta name="Copyright" content="miHoYo" />
    <meta name="Description" content="" />
    <meta name="Keywords" content="" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="email=no" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta
      name="apple-mobile-web-status-bar-style"
      content="black-translucent"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta property="twitter:title" content="" />
    <meta property="twitter:description" content="" />
    <meta property="twitter:image" content="" />
    <meta property="og:title" content="" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="" />
    <link
      id="icon"
      rel="shortcut icon"
      href="favicon.ico"
    />
    <title></title>
    <script>
      const urlParams = new URLSearchParams(window.location.search);
      const entries = urlParams.entries();
      window.doSeeleCG = false;
      for (const entry of entries) {
        if (entry[0] == "doCG" && entry[1] == "true") {
          window.doSeeleCG = true;
        }
      }      
    </script>
    <script>
      !(function () {
        "use strict";
        var e,
          n = {},
          r = {};
        function t(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var i = (r[e] = { id: e, loaded: !1, exports: {} });
          return (
            n[e].call(i.exports, i, i.exports, t), (i.loaded = !0), i.exports
          );
        }
        (t.m = n),
          (e = []),
          (t.O = function (n, r, o, i) {
            if (!r) {
              var u = 1 / 0;
              for (l = 0; l < e.length; l++) {
                (r = e[l][0]), (o = e[l][1]), (i = e[l][2]);
                for (var f = !0, c = 0; c < r.length; c++)
                  (!1 & i || u >= i) &&
                  Object.keys(t.O).every(function (e) {
                    return t.O[e](r[c]);
                  })
                    ? r.splice(c--, 1)
                    : ((f = !1), i < u && (u = i));
                if (f) {
                  e.splice(l--, 1);
                  var a = o();
                  void 0 !== a && (n = a);
                }
              }
              return n;
            }
            i = i || 0;
            for (var l = e.length; l > 0 && e[l - 1][2] > i; l--)
              e[l] = e[l - 1];
            e[l] = [r, o, i];
          }),
          (t.n = function (e) {
            var n =
              e && e.__esModule
                ? function () {
                    return e.default;
                  }
                : function () {
                    return e;
                  };
            return t.d(n, { a: n }), n;
          }),
          (t.d = function (e, n) {
            for (var r in n)
              t.o(n, r) &&
                !t.o(e, r) &&
                Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
          }),
          (t.g = (function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
              return this || new Function("return this")();
            } catch (e) {
              if ("object" == typeof window) return window;
            }
          })()),
          (t.o = function (e, n) {
            return Object.prototype.hasOwnProperty.call(e, n);
          }),
          (t.r = function (e) {
            "undefined" != typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          }),
          (t.nmd = function (e) {
            return (e.paths = []), e.children || (e.children = []), e;
          }),
          (t.p = ""),
          (function () {
            var e = { 700: 0 };
            t.O.j = function (n) {
              return 0 === e[n];
            };
            var n = function (n, r) {
                var o,
                  i,
                  u = r[0],
                  f = r[1],
                  c = r[2],
                  a = 0;
                if (
                  u.some(function (n) {
                    return 0 !== e[n];
                  })
                ) {
                  for (o in f) t.o(f, o) && (t.m[o] = f[o]);
                  if (c) var l = c(t);
                }
                for (n && n(r); a < u.length; a++)
                  (i = u[a]), t.o(e, i) && e[i] && e[i][0](), (e[i] = 0);
                return t.O(l);
              },
              r = (self.webpackChunke20230626preheating_fe =
                self.webpackChunke20230626preheating_fe || []);
            r.forEach(n.bind(null, 0)), (r.push = n.bind(null, r.push.bind(r)));
          })();
      })();
    </script>
    <script
      defer="defer"
      src="./Seele&#39;s Amazing Kitchen!_files/vendors_587d813a2d6d20ae113c.js"
    ></script>
    <script
      defer="defer"
      src="./Seele&#39;s Amazing Kitchen!_files/styles_4c1d41ef18f6ffd46d97.js"
    ></script>
    <script
      defer="defer"
      src="./Seele&#39;s Amazing Kitchen!_files/index_65ce6ac4fb230ddcf28e.js"
    ></script>
    <link
      href="styles_f7a376af325356e9babf.css"
      rel="stylesheet"
    />
  </head>
  <body>
    <div id="app"></div>
    <script src="./Seele&#39;s Amazing Kitchen!_files/vue.min.js" crossorigin=""></script>
    <script src="./Seele&#39;s Amazing Kitchen!_files/main.js"></script>
    <script>
      window.miHoYoBrowserTips.init({
        isSea: true,
      });
    </script>
    <script src="./Seele&#39;s Amazing Kitchen!_files/sentry-vue.tracing.es5.min.js"></script>
    <script>
      // window.Sentry.init({
      //   dsn: "https://42579f7e784a4f14980a2fdb7a3e1d89@sentry.eks.hoyoverse.com/6",
      //   environment: "production",
      //   tracesSampleRate: 0.2,
      //   release: "1.0.0",
      //   integrations: [new window.Sentry.Integrations.BrowserTracing()],
      //   ignoreErrors: [
      //     "Non-Error promise rejection captured with",
      //     "Non-Error exception captured",
      //     "Network Error",
      //   ],
      // });
    </script>
    <script src="./Seele&#39;s Amazing Kitchen!_files/main.1.js"></script>
    <script src="./Seele&#39;s Amazing Kitchen!_files/main.2.js"></script>
    <script src="./Seele&#39;s Amazing Kitchen!_files/main.3.js"></script>
  </body>
</html>
