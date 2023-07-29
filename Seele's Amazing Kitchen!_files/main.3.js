/*! Copyright © 2011 - 2023 miHoYo. All Rights Reserved */
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.miHoYoAnalysis = e())
    : (t.miHoYoAnalysis = e());
})(window, function () {
  return (function (t) {
    var e = {};
    function n(r) {
      if (e[r]) return e[r].exports;
      var i = (e[r] = { i: r, l: !1, exports: {} });
      return t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
      }),
      (n.r = function (t) {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(t, "__esModule", { value: !0 });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (
          (n.r(r),
          Object.defineProperty(r, "default", { enumerable: !0, value: t }),
          2 & e && "string" != typeof t)
        )
          for (var i in t)
            n.d(
              r,
              i,
              function (e) {
                return t[e];
              }.bind(null, i)
            );
        return r;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, "a", e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ""),
      n((n.s = 3))
    );
  })([
    function (t, e) {
      var n = {
        utf8: {
          stringToBytes: function (t) {
            return n.bin.stringToBytes(unescape(encodeURIComponent(t)));
          },
          bytesToString: function (t) {
            return decodeURIComponent(escape(n.bin.bytesToString(t)));
          },
        },
        bin: {
          stringToBytes: function (t) {
            for (var e = [], n = 0; n < t.length; n++)
              e.push(255 & t.charCodeAt(n));
            return e;
          },
          bytesToString: function (t) {
            for (var e = [], n = 0; n < t.length; n++)
              e.push(String.fromCharCode(t[n]));
            return e.join("");
          },
        },
      };
      t.exports = n;
    },
    function (t, e, n) {
      var r, i;
      /*!
       * JavaScript Cookie v2.2.1
       * https://github.com/js-cookie/js-cookie
       *
       * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
       * Released under the MIT license
       */ !(function (o) {
        if (
          (void 0 ===
            (i = "function" == typeof (r = o) ? r.call(e, n, e, t) : r) ||
            (t.exports = i),
          !0,
          (t.exports = o()),
          !!0)
        ) {
          var u = window.Cookies,
            a = (window.Cookies = o());
          a.noConflict = function () {
            return (window.Cookies = u), a;
          };
        }
      })(function () {
        function t() {
          for (var t = 0, e = {}; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) e[r] = n[r];
          }
          return e;
        }
        function e(t) {
          return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
        }
        return (function n(r) {
          function i() {}
          function o(e, n, o) {
            if ("undefined" != typeof document) {
              "number" ==
                typeof (o = t({ path: "/" }, i.defaults, o)).expires &&
                (o.expires = new Date(1 * new Date() + 864e5 * o.expires)),
                (o.expires = o.expires ? o.expires.toUTCString() : "");
              try {
                var u = JSON.stringify(n);
                /^[\{\[]/.test(u) && (n = u);
              } catch (t) {}
              (n = r.write
                ? r.write(n, e)
                : encodeURIComponent(String(n)).replace(
                    /%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,
                    decodeURIComponent
                  )),
                (e = encodeURIComponent(String(e))
                  .replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)
                  .replace(/[\(\)]/g, escape));
              var a = "";
              for (var s in o)
                o[s] &&
                  ((a += "; " + s),
                  !0 !== o[s] && (a += "=" + o[s].split(";")[0]));
              return (document.cookie = e + "=" + n + a);
            }
          }
          function u(t, n) {
            if ("undefined" != typeof document) {
              for (
                var i = {},
                  o = document.cookie ? document.cookie.split("; ") : [],
                  u = 0;
                u < o.length;
                u++
              ) {
                var a = o[u].split("="),
                  s = a.slice(1).join("=");
                n || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                try {
                  var f = e(a[0]);
                  if (((s = (r.read || r)(s, f) || e(s)), n))
                    try {
                      s = JSON.parse(s);
                    } catch (t) {}
                  if (((i[f] = s), t === f)) break;
                } catch (t) {}
              }
              return t ? i[t] : i;
            }
          }
          return (
            (i.set = o),
            (i.get = function (t) {
              return u(t, !1);
            }),
            (i.getJSON = function (t) {
              return u(t, !0);
            }),
            (i.remove = function (e, n) {
              o(e, "", t(n, { expires: -1 }));
            }),
            (i.defaults = {}),
            (i.withConverter = n),
            i
          );
        })(function () {});
      });
    },
    function (t, e) {
      var n, r;
      (n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"),
        (r = {
          rotl: function (t, e) {
            return (t << e) | (t >>> (32 - e));
          },
          rotr: function (t, e) {
            return (t << (32 - e)) | (t >>> e);
          },
          endian: function (t) {
            if (t.constructor == Number)
              return (16711935 & r.rotl(t, 8)) | (4278255360 & r.rotl(t, 24));
            for (var e = 0; e < t.length; e++) t[e] = r.endian(t[e]);
            return t;
          },
          randomBytes: function (t) {
            for (var e = []; t > 0; t--)
              e.push(Math.floor(256 * Math.random()));
            return e;
          },
          bytesToWords: function (t) {
            for (var e = [], n = 0, r = 0; n < t.length; n++, r += 8)
              e[r >>> 5] |= t[n] << (24 - (r % 32));
            return e;
          },
          wordsToBytes: function (t) {
            for (var e = [], n = 0; n < 32 * t.length; n += 8)
              e.push((t[n >>> 5] >>> (24 - (n % 32))) & 255);
            return e;
          },
          bytesToHex: function (t) {
            for (var e = [], n = 0; n < t.length; n++)
              e.push((t[n] >>> 4).toString(16)),
                e.push((15 & t[n]).toString(16));
            return e.join("");
          },
          hexToBytes: function (t) {
            for (var e = [], n = 0; n < t.length; n += 2)
              e.push(parseInt(t.substr(n, 2), 16));
            return e;
          },
          bytesToBase64: function (t) {
            for (var e = [], r = 0; r < t.length; r += 3)
              for (
                var i = (t[r] << 16) | (t[r + 1] << 8) | t[r + 2], o = 0;
                o < 4;
                o++
              )
                8 * r + 6 * o <= 8 * t.length
                  ? e.push(n.charAt((i >>> (6 * (3 - o))) & 63))
                  : e.push("=");
            return e.join("");
          },
          base64ToBytes: function (t) {
            t = t.replace(/[^A-Z0-9+\/]/gi, "");
            for (var e = [], r = 0, i = 0; r < t.length; i = ++r % 4)
              0 != i &&
                e.push(
                  ((n.indexOf(t.charAt(r - 1)) &
                    (Math.pow(2, -2 * i + 8) - 1)) <<
                    (2 * i)) |
                    (n.indexOf(t.charAt(r)) >>> (6 - 2 * i))
                );
            return e;
          },
        }),
        (t.exports = r);
    },
    function (t, e, n) {
      "use strict";
      function r(t, e, n, r) {
        return i(r - -964, t);
      }
      function i(t, e) {
        var n = w();
        return (i = function (e, r) {
          var o = n[(e -= 260)];
          if (void 0 === i.vsYbGF) {
            var u = function (t) {
              for (
                var e, n, r = "", i = "", o = 0, u = 0;
                (n = t.charAt(u++));
                ~n && ((e = o % 4 ? 64 * e + n : n), o++ % 4)
                  ? (r += String.fromCharCode(255 & (e >> ((-2 * o) & 6))))
                  : 0
              )
                n =
                  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(
                    n
                  );
              for (var a = 0, s = r.length; a < s; a++)
                i += "%" + ("00" + r.charCodeAt(a).toString(16)).slice(-2);
              return decodeURIComponent(i);
            };
            (i.Dfrzkx = u), (t = arguments), (i.vsYbGF = !0);
          }
          var a = n[0],
            s = e + a,
            f = t[s];
          return f ? (o = f) : ((o = i.Dfrzkx(o)), (t[s] = o)), o;
        })(t, e);
      }
      !(function (t, e) {
        var n = t();
        function r(t, e, n, r) {
          return i(e - 14, r);
        }
        function o(t, e, n, r) {
          return i(n - 806, t);
        }
        for (;;)
          try {
            if (
              742044 ===
              (parseInt(o(1518, 0, 1392)) / 1) *
                (-parseInt(o(1357, 0, 1340)) / 2) +
                parseInt(o(1534, 0, 1342)) / 3 +
                (parseInt(o(1304, 0, 1330)) / 4) *
                  (-parseInt(r(0, 325, 0, 374)) / 5) +
                (parseInt(o(1266, 0, 1386)) / 6) *
                  (-parseInt(o(1355, 0, 1387)) / 7) +
                (-parseInt(r(0, 511, 0, 585)) / 8) *
                  (parseInt(o(1025, 0, 1153)) / 9) +
                -parseInt(o(1243, 0, 1262)) / 10 +
                (parseInt(r(0, 388, 0, 549)) / 11) *
                  (parseInt(r(0, 650, 0, 710)) / 12)
            )
              break;
            n.push(n.shift());
          } catch (t) {
            n.push(n.shift());
          }
      })(w);
      var o = {};
      (o[r(-311, 0, 0, -340)] = !0),
        Object[r(-251, 0, 0, -370) + s(856, 848, 860, 789)](
          e,
          s(621, 502, 652, 586),
          o
        );      
      var u =
          Object[s(928, 696, 778, 819)] ||
          function (t) {
            var e = {};
            function n(t, e, n, i) {
              return r(i, 0, 0, t - 1568);
            }
            function i(t, e, n, r) {
              return s(t - 476, e, t - -606, r - 419);
            }
            (e.ioxms = n(1192, 0, 0, 1222)),
              (e[i(162, 143, 64, 57)] = n(1235, 0, 0, 1045)),
              (e[i(58, -28, 233, -50)] = i(25, 11, -15, 198)),
              (e[i(219, 364, 369, 146)] =
                i(-32, 30, 134, -116) +
                n(942, 0, 0, 753) +
                n(1064, 0, 0, 1090) +
                n(954, 0, 0, 768)),
              (e[i(176, 179, 216, 115)] =
                "https://de" +
                i(97, 87, 172, 81) +
                n(902, 0, 0, 897) +
                "om/h5/upload"),
              (e[i(152, -17, 78, 240)] =
                n(898, 0, 0, 875) +
                n(1038, 0, 0, 936) +
                n(1217, 0, 0, 1031) +
                "erse.com/h" +
                i(143, 215, 261, 178)),
              (e[n(960, 0, 0, 855)] = function (t, e) {
                return t < e;
              }),
              (e[i(-59, -27, 0, -139)] = function (t, e) {
                return t === e;
              }),
              (e[i(218, 337, 0, 335)] = n(1181, 0, 0, 1001));
            for (
              var o = e, u = 1;
              o.BYLJP(u, arguments[i(288, 171, 0, 230)]);
              u++
            )
              if (
                o[n(882, 0, 0, 743)](
                  o[i(218, 245, 0, 168)],
                  o[i(218, 279, 0, 23)]
                )
              ) {
                var a = arguments[u];
                for (var f in a)
                  Object[i(94, 202, 0, 94)][
                    "hasOwnProp" + i(254, 351, 0, 427)
                  ].call(a, f) && (t[f] = a[f]);
              } else {
                _0x5db540(this, _0xfb064e),
                  (this[n(1020, 0, 0, 977)] = ""),
                  (this[n(1178, 0, 0, 1152) + "g"] = ""),
                  (this[n(880, 0, 0, 688)] = ""),
                  (this[i(194, 175, 0, 169)] = ""),
                  (this.game_region = ""),
                  (this[n(1182, 0, 0, 1152)] = !1),
                  (this[n(901, 0, 0, 787) + "id"] = !1),
                  (this[n(1023, 0, 0, 1029)] =
                    _0x5bb9a8.default[i(-68, -197, 0, 5)]() || "");
                var c = {};
                (c[n(1206, 0, 0, 1337) + "ory"] = o[n(1078, 0, 0, 1256)]),
                  (c[i(105, 110, 0, 184) + "n"] = o[i(162, 353, 0, 266)]),
                  (c[i(72, 55, 0, 52)] = ""),
                  (c.eventValue = ""),
                  (this.pvParams = c),
                  (this[i(74, 239, 0, 202)] = _0x4e0087),
                  (this[i(36, 28, 0, -116)] = _0x444519),
                  (this[i(69, 142, 0, 128)] = o[n(999, 0, 0, 966)]),
                  (this[n(957, 0, 0, 1013)] = _0x3a651d),
                  (this[n(919, 0, 0, 1112)] = ""),
                  (this[i(-2, -53, 0, 51) + "nfo"] = _0x2c2265),
                  (this["userExtrai" + n(892, 0, 0, 1061)] = _0x3ef64a),
                  (this[i(203, 350, 0, 215) + i(76, -84, 0, -30)] = _0x1d42c4),
                  (this[n(1139, 0, 0, 1014)] = !1);
                var h = {};
                (h[n(881, 0, 0, 1031)] = o.lYoAU),
                  (h[n(881, 0, 0, 842) + ".sea"] =
                    n(909, 0, 0, 888) +
                    i(91, 34, 0, 254) +
                    i(158, 18, 0, 311) +
                    i(153, 32, 0, 238) +
                    n(1034, 0, 0, 1130)),
                  (h[i(293, 99, 0, 218)] = o[i(176, 57, 0, 45)]),
                  (h[i(-77, 0, 0, -236)] = o[n(1093, 0, 0, 988)]),
                  (h[n(1082, 0, 0, 1234) + "t"] = o[i(176, 224, 0, 85)]),
                  (this.apis = h),
                  (this[i(-42, -9, 0, -216)] = []),
                  (this[n(1056, 0, 0, 1031)] = !1),
                  (this[n(1016, 0, 0, 1207)] = (0,
                  _0x5b0b20[i(39, 80, 0, -146) + "m"])()),
                  (this[n(1116, 0, 0, 1106)] = (0,
                  _0x36b0cb[i(4, 168, 0, -10)])()),
                  (this[n(1067, 0, 0, 998) + "t"] = this.getEnv()),
                  (this[i(275, 383, 0, 155)] = this.getIsSea()),
                  (this[n(1130, 0, 0, 1301) + i(96, -83, 0, 142)] =
                    n(1170, 0, 0, 1135) + "ON_ID"),
                  (this[n(1238, 0, 0, 1380) + n(1089, 0, 0, 1202)] =
                    n(1170, 0, 0, 991) + "ON_STEP"),
                  (this[n(1188, 0, 0, 1190) + n(1223, 0, 0, 1366)] = "v2");
              }
            
            return t;
          },
        a = (function () {
          function t(t, e, n, i) {
            return r(e, 0, 0, i - 1051);
          }
          var e = {
            eaHXw: function (t, e) {
              return t < e;
            },
            gaXRI: t(0, 526, 0, 374),
            HBVpW: function (t, e) {
              return t in e;
            },
            fMIsu: t(0, 549, 0, 729),
            uFBCy: t(0, 472, 0, 481) + i(-264, -244, -317, -320),
            vJuvh: i(-318, -151, -512, -431),
            WgupP: function (t, e, n) {
              return t(e, n);
            },
          };
          function n(n, r) {
            function o(e, n, r, i) {
              return t(0, i, 0, e - -945);
            }
            function u(t, e, n, r) {
              return i(r - 1659, t, n - 184, r - 386);
            }
            for (var a = 0; e.eaHXw(a, r[u(1237, 0, 1491, 1404)]); a++)
              for (var s = e.gaXRI[o(-418, 0, 0, -294)]("|"), f = 0; ; ) {
                switch (s[f++]) {
                  case "0":
                    c.configurable = !0;
                    continue;
                  case "1":
                    e[o(-527, 0, 0, -426)](u(1492, 0, 1545, 1403), c) &&
                      (c.writable = !0);
                    continue;
                  case "2":
                    Object[o(-264, 0, 0, -415) + "erty"](
                      n,
                      c[o(-503, 0, 0, -685)],
                      c
                    );
                    continue;
                  case "3":
                    c[u(1430, 0, 1330, 1328)] = c[o(-309, 0, 0, -346)] || !1;
                    continue;
                  case "4":
                    var c = r[a];
                    continue;
                }
                break;
              }
          }
          function i(t, e, n, r) {
            return s(t - 362, e, t - -1149, r - 251);
          }
          return function (r, o, u) {
            var a = {};
            function s(t, e, n, r) {
              return i(e - 509, t, 0, r - 115);
            }
            function f(e, n, r, i) {
              return t(0, e, 0, n - 504);
            }
            (a.tfqKu = e[f(1189, 1084, 1252, 1108)]),
              (a[f(1032, 1189, 1366, 1081)] = e[f(781, 891, 889, 980)]);
            var c = a;
            if (f(1055, 987) !== e[s(-30, 46, 0, -143)])
              return (
                o && e[f(966, 1036)](n, r[s(104, 60, 0, -103)], o),
                u && n(r, u),
                r
              );
            var h = c[f(1052, 939)],
              l = c[f(1067, 1189)],
              p = (0, _0xc82497[s(299, 246, 0, 127)])(_0x1fb0d3),
              v = {};
            v[f(992, 997)] = l;
            var d = new _0x66b27f([_0x526e54], v).size,
              y = _0xde212(_0x2db442[f(960, 972)]() / 1e3, 10),
              g =
                f(1168, 1145) +
                s(67, 117, 0, 202) +
                s(-143, -25, 0, -124) +
                "c5",
              w = (0, _0xabfe6b.default)(
                [h, p, l, d, y, g][f(1267, 1236)]("\n")
              ),
              b = {};
            return (
              (b[f(916, 996) + "pe"] = l),
              (b["Content-MD5"] = p),
              (b.Timestamp = y),
              (b[f(1072, 1212) + "on"] = w),
              b
            );
          };
        })();
      function s(t, e, n, r) {
        return i(n - 269, e);
      }
      var f = d(n(4)),
        c = d(n(1)),
        h = d(n(5)),
        l = d(n(7)),
        p = n(13),
        v = n(15);
      function d(t) {
        return t && t.__esModule ? t : { default: t };
      }
      function y(t, e) {
        var n = {};
        function r(t, e, n, r) {
          return s(0, t, r - 45);
        }
        function i(t, e, n, r) {
          return s(0, e, t - -876);
        }
        (n.LkvZM = function (t, e) {
          return t instanceof e;
        }),
          (n.ALYrZ = function (t, e) {
            return t !== e;
          }),
          (n[r(635, 0, 0, 603)] = r(805, 0, 0, 831)),
          (n[i(-241, -88)] =
            i(-207, -167) +
            r(752, 0, 0, 889) +
            i(-152, 30) +
            r(1032, 0, 0, 844));
        var o = n;
        if (!o[r(797, 0, 0, 761)](t, e)) {
          if (!o[i(-120, -248)](o.tSICM, o.tSICM))
            throw new TypeError(o[i(-241, -167)]);
          this[i(-234, -347)] = _0x59c013;
        }
      }
      var g = (function () {
        function t(t, e, n, r) {
          return s(0, t, r - -318);
        }
        var e = {
          FYsSM:
            "27|28|18|5" +
            t(237, 0, 0, 225) +
            t(419, 0, 0, 375) +
            t(438, 0, 0, 437) +
            o(470, 526, 332, 707) +
            o(532, 537, 487, 503) +
            o(556, 659, 558, 528) +
            o(828, 823, 934, 888),
          suXQX: o(723, 784, 885, 881) + "ON_ID",
          qJrzR: o(805, 806, 700, 619),
          WalGe:
            t(425, 0, 0, 256) +
            o(563, 556, 430, 386) +
            o(784, 678, 662, 758) +
            o(585, 568, 572, 704),
          UnUYJ:
            t(293, 0, 0, 256) +
            "g-upload-o" +
            t(484, 0, 0, 446) +
            o(584, 708, 700, 903) +
            o(477, 648, 483, 569),
          YZbve:
            t(83, 0, 0, 245) +
            o(652, 652, 597, 649) +
            o(504, 516, 454, 495) +
            "om/h5/upload",
          MHicW:
            "https://de" +
            t(339, 0, 0, 385) +
            "d-os.hoyov" +
            t(462, 0, 0, 578) +
            t(295, 0, 0, 431),
          RkMuk: function (t, e, n) {
            return t(e, n);
          },
          blxkZ: function (t, e) {
            return t + e;
          },
          qlljV: function (t, e) {
            return t + e;
          },
          kXyHb: function (t, e) {
            return t + e;
          },
          MKoBW: t(339, 0, 0, 376) + "=",
          TcTcP: o(367, 503, 509, 502) + o(860, 811, 949, 746),
          QqeCF: function (t, e) {
            return t !== e;
          },
          JvEyq: t(383, 0, 0, 278),
          lemtt: "webstatic-" + t(496, 0, 0, 343),
          pMlOP: t(719, 0, 0, 594),
          QKzCH: "account_id",
          GtAcU: t(271, 0, 0, 340),
          bFlUI: "ltuid",
          oESNN: function (t, e) {
            return t > e;
          },
          TuRPW: o(878, 778, 658, 958) + o(521, 716, 624, 794),
          maPXf: function (t, e) {
            return t === e;
          },
          aHAPJ: t(372, 0, 0, 322),
          HOqlJ: o(611, 495, 538, 564),
          UesGQ: o(479, 547, 722, 574),
          wzkLM: function (t, e) {
            return t === e;
          },
          PwTIm: o(551, 478, 304, 360),
          wziwT: function (t, e) {
            return t !== e;
          },
          VEjLY: o(726, 534, 608, 395),
          eZwQI: "test",
          kGKAH: o(573, 481, 321, 587),
          PTBmT: t(555, 0, 0, 496),
          WUtie: "utm_campaign",
          vfzPX: t(561, 0, 0, 546),
          PXGDs: t(378, 0, 0, 244) + o(749, 621, 775, 561),
          lVhNw: t(430, 0, 0, 366) + "d",
          qMxvi: t(581, 0, 0, 598),
          NEyfX: o(777, 687, 732, 639),
          tmzcS: function (t, e) {
            return t + e;
          },
          uiSPd: function (t, e) {
            return t + e;
          },
          qgafw: function (t, e) {
            return t(e);
          },
          uAESy: "utm_source",
          FDXcJ: function (t, e) {
            return t !== e;
          },
          xgSly: "authkey",
          GsXKf: t(444, 0, 0, 395) + "r",
          gCnHB: t(283, 0, 0, 288),
          Ddmgj: t(462, 0, 0, 408),
          VotCU: function (t, e) {
            return t !== e;
          },
          KUUgL: "POST",
          JzwPL: t(489, 0, 0, 426),
          uFryY: o(896, 745, 789, 615) + o(686, 578, 576, 742),
          ICNbP: "NhvpD",
          asxGK: o(638, 822, 714, 674),
          HXtTS: function (t, e) {
            return t === e;
          },
          XCLGX: t(581, 0, 0, 524),
          pZqwj: function (t, e) {
            return t > e;
          },
          EWtZD: function (t, e) {
            return t !== e;
          },
          yFjLF: function (t, e) {
            return t > e;
          },
          EPLnh: function (t, e) {
            return t > e;
          },
          bLtTp: function (t, e) {
            return t > e;
          },
          tMLoQ: function (t, e) {
            return t === e;
          },
          vbDvs: o(622, 702, 691, 732) + o(580, 726, 659, 793),
          BMmyz: t(434, 0, 0, 592),
          sqJrW: "uHxee",
          iwegt: function (t, e) {
            return t > e;
          },
          EAlQE: function (t, e) {
            return t !== e;
          },
          hRMGY: t(408, 0, 0, 321),
          KcMqu: function (t, e) {
            return t === e;
          },
          enVZL: "igyZk",
          VZECj: o(661, 519, 395, 543),
          AtEJE: function (t, e) {
            return t < e;
          },
          OKeAt: o(513, 528, 614, 666),
          RdKUu: t(520, 0, 0, 575),
          GXqOc: "SbsAx",
          Nijsb: t(654, 0, 0, 510),
          HPbIa: function (t, e) {
            return t > e;
          },
          RPjKg: function (t, e) {
            return t !== e;
          },
          CLzpp: "5|4|3|1|7|" + o(857, 718, 673, 876),
          bRHAK: function (t, e) {
            return t / e;
          },
          ClxCk: t(260, 0, 0, 345) + o(979, 834, 848, 719),
          xCRmm: o(630, 508, 436, 339),
          qWKIO: "IBbDf",
          CvizE: function (t, e) {
            return t > e;
          },
          DorKV: function (t, e) {
            return t !== e;
          },
          ANJpk: function (t, e) {
            return t + e;
          },
          kCsit: t(325, 0, 0, 309),
          KsqGv: function (t, e) {
            return t !== e;
          },
          qRgZy: o(472, 538, 360, 417),
          ERZxI: function (t, e) {
            return t * e;
          },
          tYCWQ: t(473, 0, 0, 533),
          ItGpX: function (t, e) {
            return t === e;
          },
          DHKAz: t(443, 0, 0, 320),
          SQQDJ: t(291, 0, 0, 399),
          ZGszt: function (t, e) {
            return t > e;
          },
          LOYzK: function (t, e, n) {
            return t(e, n);
          },
          JcuDu: function (t, e) {
            return t === e;
          },
          Driim: function (t, e) {
            return t === e;
          },
          KKXIG: t(455, 0, 0, 276),
          jBwOU: t(458, 0, 0, 501),
          Fqzpg: t(279, 0, 0, 453),
          RvMGd: function (t, e) {
            return t > e;
          },
          vUayI: function (t, e) {
            return t !== e;
          },
          rxYSC: function (t, e, n, r) {
            return t(e, n, r);
          },
          atEpq: "getEnv",
          FUnZG: "getBh3SeaAccountid",
          IdeZL: "isHash",
          VXXpk: o(712, 650, 504, 661) + "Info",
          DXyKV: "getPageInfo",
          sYOxo: o(695, 619, 681, 796) + "fo",
          FRSTX: o(766, 677, 798, 852) + "ms",
          uhwed: t(231, 0, 0, 394),
          EZVDP: o(956, 807, 915, 926) + "Headers",
          NLqMD: t(505, 0, 0, 509),
          ATFxn: o(680, 866, 868, 720) + "vents",
          UlJSI: "startStash",
          mBJFz: o(669, 484, 347, 308),
          InTzr: t(364, 0, 0, 413),
          BvdWt: t(464, 0, 0, 371),
        };
        function n() {
          var r = e[u(17, -154, 104, 160)].split("|"),
            i = 0;
          function u(t, e, n, r) {
            return o(t - 387, t - -534, n - 293, e);
          }
          function a(e, n, r, i) {
            return t(i, 0, 0, r - -402);
          }
          for (;;) {
            switch (r[i++]) {
              case "0":
                this[a(0, 0, 161, 45)] = this.getIsSea();
                continue;
              case "1":
                this[a(0, 0, 75, -98) + a(0, 0, -18, -80)] =
                  e[a(0, 0, -37, -113)];
                continue;
              case "2":
                this[u(-2, 126, -6) + "n"] = "";
                continue;
              case "3":
                this.device = (0, v[u(25, -83, 11)])();
                continue;
              case "4":
                this[u(96, 77, 93)] = (0, v[u(60, -14, -114) + "m"])();
                continue;
              case "5":
                this.lang = "";
                continue;
              case "6":
                this[a(0, 0, -154, -134) + "id"] = !1;
                continue;
              case "7":
                this[u(215, 380, 253)] = "";
                continue;
              case "8":
                this[u(224, 70, 265) + a(0, 0, -38, -140)] = void 0;
                continue;
              case "9":
                this[u(-1, -151, 20)] = "";
                continue;
              case "10":
                this.pagename = void 0;
                continue;
              case "11":
                this[a(0, 0, -53, -91) + u(-28, 59, 142)] = void 0;
                continue;
              case "12":
                this[a(0, 0, 1, -6)] = !1;
                continue;
              case "13":
                var s = {};
                (s[u(286, 308, 162) + "ory"] = e[a(0, 0, 181, 94)]),
                  (s[a(0, 0, -9, -61) + "n"] = u(315, 488, 229)),
                  (s[u(93, -26, 20)] = ""),
                  (s[u(190, 288, 277)] = ""),
                  (this.pvParams = s);
                continue;
              case "14":
                this[u(318, 500, 132) + "pCookieKey"] =
                  a(0, 0, 115, 205) + u(163, 160, 132);
                continue;
              case "15":
                this[a(0, 0, 12, 63) + "t"] = this.getEnv();
                continue;
              case "16":
                var c = {};
                (c[u(-39, -133, 59)] = e[u(206, 45, 30)]),
                  (c[u(-39, -98, -28) + u(5, -166, -58)] = e[u(287, 180, 120)]),
                  (c[a(0, 0, 179, -1)] = e.YZbve),
                  (c[u(-56, 73, -191)] = e.MHicW),
                  (c.development = e.YZbve),
                  (this.apis = c);
                continue;
              case "17":
                this[u(-21, 162, -186)] = [];
                continue;
              case "18":
                this[a(0, 0, 123, -45) + "g"] = "";
                continue;
              case "19":
                this.pageurl = void 0;
                continue;
              case "20":
                this[a(0, 0, 127, 145)] = !1;
                continue;
              case "21":
                this.analysisVersion = "v2";
                continue;
              case "22":
                this.type = a(0, 0, -89, -58);
                continue;
              case "23":
                this[a(0, 0, -116, -199) + "nfo"] = void 0;
                continue;
              case "24":
                this[a(0, 0, 84, -80)] = !1;
                continue;
              case "25":
                this[a(0, 0, -32, 136)] = f.default[u(-47, -67, 20)]() || "";
                continue;
              case "26":
                this[u(37, 136, -11)] = void 0;
                continue;
              case "27":
                e[a(0, 0, -63, -233)](y, this, n);
                continue;
              case "28":
                this[u(100, 49, 246)] = "";
                continue;
            }
            break;
          }
        }
        function o(t, e, n, i) {
          return r(i, 0, 0, e - 1182);
        }
        return (
          e[o(0, 590, 0, 600)](
            a,
            n,
            [
              {
                key: o(0, 682, 0, 871),
                value: function () {
                  var t = {
                    jaPEj: function (t, n) {
                      return e.blxkZ(t, n);
                    },
                    jwVxV: function (t, n) {
                      return e.qlljV(t, n);
                    },
                    joYQu: function (t, n) {
                      return e[((r = 1315), (o = 1438), i(r - 783, o))](t, n);
                      var r, o;
                    },
                    lwzjF: function (t, n) {
                      return e[((r = -35), (o = -197), i(o - -688, r))](t, n);
                      var r, o;
                    },
                    QqXpb: e.MKoBW,
                    mrsSO: e[r(538, 708, 722, 803)],
                  };
                  function n(t, e, n, r) {
                    return o(0, t - 430, 0, r);
                  }
                  function r(t, e, n, r) {
                    return o(0, e - 166, 0, n);
                  }
                  if (!e[r(0, 851, 849)](n(975, 0, 0, 1128), e.JvEyq)) {
                    for (
                      var u = window[n(916, 0, 0, 1032)][r(0, 759, 851)],
                        a = [
                          e[r(0, 723, 532)],
                          e[r(0, 932, 1097)],
                          r(0, 899, 877),
                        ],
                        s = 0;
                      s < a[n(1273, 0, 0, 1312)];
                      s++
                    )
                      if (u[n(947, 0, 0, 817)](a[s]) > -1) return !0;
                    return !1;
                  }
                  var f = _0x1aa31b.Timestamp,
                    c = _0x16c15c.Verification,
                    h = t.jaPEj(
                      t[n(1199, 0, 0, 1224)](
                        t[r(0, 930, 946)](
                          t[n(1187, 0, 0, 1269)](_0x4d858f, t.QqXpb),
                          f
                        ),
                        t.mrsSO
                      ),
                      c
                    );
                  _0x985f2f[r(0, 852, 701)](h, _0x2b7483);
                },
              },
              {
                key: e[o(0, 510, 0, 413)],
                value: function () {
                  var n = window.location[i(973, 1110, 1092, 1002)];
                  if (
                    e.oESNN(
                      n[r(-450, -571, -594, -621)](
                        e[r(-565, -563, -370, -473)]
                      ),
                      -1
                    )
                  )
                    return e[r(-374, -350, -427, -298)](
                      r(-305, -303, -195, -432),
                      e.aHAPJ
                    )
                      ? _0x2a0756[i(1215, 1114, 1322, 1357)][
                          r(-556, -534, -350, -657)
                        ](i(891, 972, 951, 1021) + "_v2") ||
                          _0x5ae71b[i(1215, 1339, 1122, 1348)][
                            i(934, 1102, 838, 768)
                          ](e[r(-713, -519, -570, -691)]) ||
                          _0x46b7d4.default[i(934, 874, 1046, 905)](
                            e[i(911, 1045, 783, 1081)]
                          ) ||
                          _0x3f0c07[r(-354, -253, -353, -175)][
                            i(934, 1081, 881, 1047)
                          ](e[i(1019, 1105, 910, 996)])
                      : e[r(-429, -590, -688, -635)];
                  function r(e, n, r, i) {
                    return t(e, 0, 0, n - -821);
                  }
                  if (
                    e.oESNN(
                      n[i(897, 785, 825, 802)](i(957, 968, 1023, 795) + "sea."),
                      -1
                    )
                  )
                    return i(875, 954, 806, 708) + i(919, 775, 1071, 939);
                  if (
                    e[i(920, 1101, 759, 728)](
                      n.indexOf(e[i(930, 890, 1125, 818)]),
                      -1
                    )
                  ) {
                    if (
                      e[i(952, 860, 961, 772)](
                        i(1190, 1133, 1328, 1120),
                        i(1190, 1276, 1110, 1148)
                      )
                    )
                      return e[i(1116, 1182, 940, 1212)];
                    _0x2e2a32[i(1194, 1140, 1290, 1071)](_0x4250b0);
                  }
                  function i(t, e, n, r) {
                    return o(0, t - 380, 0, r);
                  }
                  if (
                    e[i(920, 0, 0, 1013)](
                      n[r(-714, -571)](i(1174, 0, 0, 1361)),
                      -1
                    )
                  ) {
                    if (!e[r(-140, -255)](e[i(1208, 0, 0, 1303)], e.VEjLY))
                      return e.eZwQI;
                    this[i(893, 0, 0, 803)] = [];
                  }
                  return r(-657, -593);
                },
              },
              {
                key: o(0, 732, 0, 792),
                value: function () {
                  function n(e, n, r, i) {
                    return t(i, 0, 0, e - 837);
                  }
                  function r(e, n, r, i) {
                    return t(n, 0, 0, i - -323);
                  }
                  if (
                    e[n(1142, 0, 0, 1067)](
                      e[n(1427, 0, 0, 1457)],
                      e[r(0, 121, 0, 267)]
                    )
                  )
                    return (
                      this[r(0, -35, 0, -96)] ||
                      c.default[n(1124, 0, 0, 1003)](n(1370, 0, 0, 1348))
                    );
                  var i =
                      e[n(1110, 0, 0, 1016)](arguments.length, 0) &&
                      e[r(0, 170, 0, 243)](arguments[0], _0x8c3108)
                        ? arguments[0]
                        : {},
                    o = i[r(0, 389, 0, 230) + r(0, 430, 0, 237)],
                    u = i.eventAction,
                    a = i.eventLabel,
                    s = i[n(1294, 0, 0, 1283)],
                    f = i.extraInfo,
                    h = e[n(1308, 0, 0, 1156)](f, _0x35084a) ? {} : f,
                    l = {
                      eventCategory: o,
                      eventAction: u,
                      eventLabel: a,
                      eventValue: s,
                      timestamp: new _0x17bfb7()[r(0, 64, 0, 135)](),
                      extra_info: _0x3d5fc1(
                        {},
                        this[n(1328, 0, 0, 1223) + r(0, 29, 0, 41)] || {},
                        h
                      ),
                    };
                  return l;
                },
              },
              {
                key: o(0, 832, 0, 887) + "id",
                value: function () {
                  var n = {};
                  function r(e, n, r, i) {
                    return t(n, 0, 0, i - 696);
                  }
                  function i(e, n, r, i) {
                    return t(r, 0, 0, n - 531);
                  }
                  (n.rMGfj = r(0, 986, 0, 1105)),
                    (n[r(0, 1319, 0, 1158)] = e[r(0, 859, 0, 911)]),
                    (n[r(0, 1015, 0, 1189)] = e[i(0, 1015, 1003)]);
                  var o = n;
                  if (
                    e[r(0, 1348, 0, 1167)](i(0, 786, 607), e[i(0, 920, 946)])
                  ) {
                    var u = this.isHash()
                      ? _0x3af712[i(0, 750, 678)][i(0, 1110, 973)].replace(
                          "#",
                          ""
                        )
                      : _0x2b82f0[i(0, 750, 620)][r(0, 886, 0, 1025)];
                    return {
                      app_id: this[r(0, 1101, 0, 1063)],
                      page_url: this.pageurl || u,
                      page_name: this[i(0, 893, 897)] || u,
                      page_fullurl:
                        _0x46fc07[i(0, 750, 888)][r(0, 921, 0, 919)],
                      utm_source: (0,
                      _0x11ebfd[i(0, 864, 1029) + r(0, 1143, 0, 1038)])(
                        o[r(0, 984, 0, 1044)]
                      ),
                      utm_medium: (0, _0x2d6c31[r(0, 923, 0, 1029) + "Name"])(
                        o[i(0, 993, 907)]
                      ),
                      utm_campaign: (0,
                      _0x374009["getParamBy" + i(0, 873, 941)])(
                        o[r(0, 1182, 0, 1189)]
                      ),
                      document_referrer: _0x3b8e36[r(0, 1222, 0, 1166)],
                      extra_info: this["pageExtrai" + i(0, 770, 954)],
                    };
                  }
                  return (
                    c[r(0, 1330, 0, 1264)][i(0, 818, 968)](e.PXGDs) ||
                    c[i(0, 1099, 1164)][r(0, 941, 0, 983)]("account_id") ||
                    c[i(0, 1099, 1008)][r(0, 888, 0, 983)](i(0, 871, 897)) ||
                    c[r(0, 1358, 0, 1264)][r(0, 934, 0, 983)](e[i(0, 903, 949)])
                  );
                },
              },
              {
                key: e[o(0, 541, 0, 671)],
                value: function () {
                  function n(e, n, r, i) {
                    return t(n, 0, 0, e - 117);
                  }
                  return c[n(685, 740)][n(404, 507)](e[n(519, 641)]);
                },
              },
              {
                key: e[o(0, 641, 0, 755)],
                value: function () {
                  function t(t, e, n, r) {
                    return o(0, r - -975, 0, e);
                  }
                  return e[t(0, -348, 0, -435)](
                    window.location[t(0, -470, 0, -485)].indexOf("#/"),
                    -1
                  );
                },
              },
              {
                key: e.VXXpk,
                value: function () {
                  function n(e, n, r, i) {
                    return t(n, 0, 0, e - -17);
                  }
                  var r = {};
                  function i(e, n, r, i) {
                    return t(n, 0, 0, e - -366);
                  }
                  r.spQFX =
                    n(334, 523) + "l a class " + n(389, 240) + n(464, 331);
                  var o = r;
                  if (n(373, 381) !== n(524, 350)) {
                    if (!this["needSessio" + i(55, 53)]) {
                      var u = { sessionId: "", sessionStep: "" };
                      return u;
                    }
                    var a = c[n(551, 430)][n(270, 372)](
                        this[n(460, 485) + n(367, 502)]
                      ),
                      s = c[i(202, 396)][n(270, 156)](
                        this[n(568, 403) + "pCookieKey"]
                      );
                    if (!a)
                      if (e.qMxvi === e[i(220, 387)]) {
                        var f = arguments[_0x92a1d4];
                        for (var h in f)
                          _0x4bdf61.prototype[n(426, 315) + i(176, 95)][
                            n(541, 715)
                          ](f, h) && (_0x43dbce[h] = f[h]);
                      } else
                        (s = 0),
                          (a = e[n(297, 143)](
                            e.uiSPd(this[i(4, 175)], "_"),
                            (0, p[n(291, 193)])()
                          )),
                          c[i(202, 14)][i(-148, 0)](
                            this[n(460, 289) + i(18, -170)],
                            a,
                            { expires: this[n(220, 177) + "oExpires"] }
                          );
                    !(s = e.qgafw(Number, s)) && (s = 0),
                      (s += 1),
                      c[i(202, 121)].set(this[n(568, 717) + n(419, 357)], s, {
                        expires: this["sessionInf" + n(481, 426)],
                      });
                    var l = {};
                    return (l.sessionId = a), (l[n(568, 677) + "p"] = s), l;
                  }
                  throw new _0x4f8f2e(o.spQFX);
                },
              },
              {
                key: e[t(290, 0, 0, 378)],
                value: function () {
                  var t = this[n(1432, 1506, 1399, 1342)]()
                    ? window.location[n(1617, 1680, 1601, 1594)][
                        r(371, 193, 214, 211)
                      ]("#", "")
                    : window.location.pathname;
                  function n(t, e, n, r) {
                    return o(0, n - 755, 0, e);
                  }
                  function r(t, e, n, r) {
                    return o(0, e - -578, 0, r);
                  }
                  return {
                    app_id: this[n(0, 1270, 1389)],
                    page_url: this[r(0, 13, 0, 61)] || t,
                    page_name: this[r(0, 51, 0, -49)] || t,
                    page_fullurl: window[r(0, -92, 0, -283)][r(0, -88, 0, -4)],
                    utm_source: (0, p["getParamBy" + n(0, 1418, 1364)])(
                      e.uAESy
                    ),
                    utm_medium: (0, p[r(0, 22, 0, 3) + r(0, 31, 0, 123)])(
                      n(0, 1625, 1518)
                    ),
                    utm_campaign: (0, p.getParamByName)(e[r(0, 173, 0, 33)]),
                    document_referrer: document[r(0, 159, 0, 82)],
                    extra_info: this[r(0, -25, 0, -192) + n(0, 1289, 1261)],
                  };
                },
              },
              {
                key: "getUserInfo",
                value: function () {
                  function n(e, n, r, i) {
                    return t(i, 0, 0, r - -921);
                  }
                  function r(t, e, n, r) {
                    return o(0, r - -620, 0, e);
                  }
                  return e.FDXcJ(n(0, 0, -402, -403), r(0, 150, 0, 94))
                    ? {
                        lang: this[r(0, 300, 0, 112)]() || "",
                        platform: this[n(0, 0, -558, -461)],
                        device: this[r(0, 280, 0, 110)],
                        auth_key:
                          (0, p[n(0, 0, -588, -468) + n(0, 0, -579, -761)])(
                            e[n(0, 0, -509, -471)]
                          ) || "",
                        authkey_ver: (0,
                        p[r(0, 143, 0, -20) + n(0, 0, -579, -633)])(e.GsXKf),
                        game_biz:
                          (0, p.getParamByName)(e[n(0, 0, -498, -388)]) || "",
                        account_id: this[r(0, 171, 0, 212) + "id"]() || "",
                        bh3_sea_account_id:
                          this[r(0, 144, 0, 185) + n(0, 0, -406, -254)](),
                        game_uid: this[r(0, 323, 0, 129)],
                        game_region: this[r(0, -181, 0, -88) + "n"],
                        uuid: this.uuid,
                        device_id: this[r(0, -265, 0, -87)],
                        extra_info: this["userExtrai" + r(0, -209, 0, -114)],
                      }
                    : void _0x2bafe5[r(0, -284, 0, -136)](_0x364cf3);
                },
              },
              {
                key: e.sYOxo,
                value: function () {
                  function n(e, n, r, i) {
                    return t(n, 0, 0, r - -17);
                  }
                  var r = {};
                  function i(e, n, r, i) {
                    return t(e, 0, 0, n - 1048);
                  }
                  r[i(1467, 1503)] = function (t, e) {
                    return t + e;
                  };
                  var o = r;
                  if (e[n(0, 541, 454)](e.Ddmgj, e[i(1328, 1436)])) {
                    var a =
                        e[i(1421, 1321)](arguments.length, 0) &&
                        e[n(0, 378, 535)](arguments[0], void 0)
                          ? arguments[0]
                          : {},
                      s = a[i(1547, 1601) + i(1522, 1608)],
                      f = a[i(1546, 1441) + "n"],
                      c = a.eventLabel,
                      h = a.eventValue,
                      l = a[n(0, 322, 428)],
                      p = void 0 === l ? {} : l,
                      v = {
                        eventCategory: s,
                        eventAction: f,
                        eventLabel: c,
                        eventValue: h,
                        timestamp: new Date().getTime(),
                        extra_info: u(
                          {},
                          this[i(1385, 1539) + i(1512, 1412)] || {},
                          p
                        ),
                      };
                    return v;
                  }
                  if (!this[i(1458, 1421) + i(1290, 1469)]) {
                    var d = {};
                    return (
                      (d[n(0, 446, 333)] = ""),
                      (d[n(0, 660, 568) + "p"] = ""),
                      d
                    );
                  }
                  var y = _0x198b64[i(1650, 1616)].get(
                      this[n(0, 408, 460) + i(1277, 1432)]
                    ),
                    g = _0x4a9a65.default[i(1396, 1335)](
                      this.sessionStepCookieKey
                    );
                  !y &&
                    ((g = 0),
                    (y = o[n(0, 289, 438)](
                      o.GQfDI(this[n(0, 450, 353)], "_"),
                      (0, _0x2c2f70[i(1358, 1356)])()
                    )),
                    _0x387d18[i(1528, 1616)][n(0, 225, 201)](
                      this[i(1370, 1525) + n(0, 562, 367)],
                      y,
                      { expires: this[i(1426, 1285) + n(0, 584, 481)] }
                    )),
                    !(g = _0x25e421(g)) && (g = 0),
                    (g += 1),
                    _0x4c6ba3[n(0, 385, 551)][n(0, 357, 201)](
                      this["sessionSte" + n(0, 231, 419)],
                      g,
                      { expires: this[n(0, 375, 220) + n(0, 404, 481)] }
                    );
                  var w = {};
                  return (
                    (w[i(1386, 1398)] = y), (w[n(0, 749, 568) + "p"] = g), w
                  );
                },
              },
              {
                key: e[o(0, 502, 0, 598)],
                value: function () {
                  function t(t, e, n, r) {
                    return o(0, t - -557, 0, e);
                  }
                  var n = {
                    rppbn: e[r(544, 523, 392, 571)],
                    sRIkR: function (t, n) {
                      return e.qlljV(t, n);
                    },
                    elvfU: e[t(-5, -170)],
                    LAjUZ: r(429, 464, 467, 588),
                    vaXJK: e.uFryY,
                    bHzZc: function (t, n) {
                      return e[
                        ((i = 1331),
                        (o = 1369),
                        (u = 1200),
                        r(i - 43, i, o - 387, u - 741))
                      ](t, n);
                      var i, o, u;
                    },
                    uqZRd: e[r(324, 401, 241, 408)],
                    bjbGW: e.asxGK,
                    mzJAo: t(291, 203),
                    GBboa: function (t, n) {
                      return e.HXtTS(t, n);
                    },
                    NqaBN: e[t(46, 29)],
                    MiBBi: function (t, e) {
                      return t(e);
                    },
                  };
                  function r(t, e, n, r) {
                    return o(0, r - -113, 0, e);
                  }
                  if ("zirXg" !== t(260, 365)) {
                    var i = this,
                      u =
                        e[t(-64, 27)](arguments.length, 0) &&
                        void 0 !== arguments[0]
                          ? arguments[0]
                          : {},
                      a = this[t(93, 32) + t(205, 400)](),
                      s = a[t(60, -27)],
                      f = a[t(295, 183) + "p"],
                      c = {
                        page_info: this[r(0, 392, 0, 558) + "o"](),
                        user_info: this.getUserInfo(),
                        event_info: this[t(62, 42) + "fo"](u),
                        type: this[t(67, 176)],
                        data_belong: this[r(0, 509, 0, 679) + "g"],
                        mia_session_id: s,
                        mia_session_step: f,
                        analysis_version: this["analysisVe" + t(280, 124)],
                      };
                    return new Promise(function (t) {
                      var e = {};
                      function o(t, e, n, i) {
                        return r(0, t, 0, e - 28);
                      }
                      e.GUoLO = n[o(747, 762)];
                      var u = e;
                      function a(t, e, n, i) {
                        return r(0, t, 0, i - 183);
                      }
                      if (a(729, 0, 0, 840) !== o(661, 685)) return u.GUoLO;
                      i.bbsApp &&
                      i[o(586, 486)][o(509, 609)] &&
                      !i[a(604, 0, 0, 603)]
                        ? n[o(366, 540)](a(944, 0, 0, 861), n[o(261, 442)])
                          ? i[o(438, 486)]
                              [a(933, 0, 0, 825) + "uestHeaders"]()
                              [o(468, 395)](function (e) {
                                var r = {
                                  WhvmM: n[m(-590, -489, -598, -445)],
                                  JZhmp: function (t, e) {
                                    return n[
                                      ((r = 1072),
                                      (i = 1220),
                                      (o = 1234),
                                      m(r, o - 1761, i - 477, o - 145))
                                    ](t, e);
                                    var r, i, o;
                                  },
                                  eZyJN: n[m(-667, -488, -438, -414)],
                                  cFHwR: "&verificat" + b(950, 994, 1039, 913),
                                  oRBxV: n[m(-563, -501, -693, -680)],
                                };
                                if (
                                  e &&
                                  e[m(-428, -473, -301, -591)] &&
                                  e.data[n[b(1098, 966, 788, 1055)]]
                                )
                                  if (
                                    n.bHzZc(
                                      n[b(851, 926, 953, 967)],
                                      n[b(779, 743, 620, 679)]
                                    )
                                  )
                                    for (
                                      var u =
                                          r[m(-555, -469, -437, -340)][
                                            b(1027, 841, 895, 928)
                                          ]("|"),
                                        a = 0;
                                      ;

                                    ) {
                                      switch (u[a++]) {
                                        case "0":
                                          var s =
                                            _0x4c1c77[b(923, 750, 821, 598)](
                                              _0x271581
                                            );
                                          continue;
                                        case "1":
                                          var f =
                                            this.apis[
                                              this[
                                                m(-470, -390, -217, -478) + "t"
                                              ]
                                            ];
                                          continue;
                                        case "2":
                                          var h =
                                            this[
                                              b(968, 990, 970, 833) +
                                                m(-614, -583, -606, -697)
                                            ](s);
                                          continue;
                                        case "3":
                                          if (this[b(1036, 936, 787, 1069)]) {
                                            var l = h.Timestamp,
                                              p = h.Verification,
                                              v = r[b(845, 911, 1004, 923)](
                                                r[b(911, 911, 1067, 727)](
                                                  r[m(-531, -343, -435, -189)](
                                                    r[b(1071, 911, 926, 804)](
                                                      f,
                                                      r[
                                                        m(
                                                          -403,
                                                          -466,
                                                          -569,
                                                          -603
                                                        )
                                                      ]
                                                    ),
                                                    l
                                                  ),
                                                  r.cFHwR
                                                ),
                                                p
                                              );
                                            _0x44ff8a[
                                              m(-251, -385, -398, -430)
                                            ](v, s);
                                          } else
                                            for (
                                              var d =
                                                  r[b(589, 744, 600, 612)][
                                                    b(910, 841, 846, 850)
                                                  ]("|"),
                                                y = 0;
                                              ;

                                            ) {
                                              switch (d[y++]) {
                                                case "0":
                                                  var g = new _0x6b7525();
                                                  continue;
                                                case "1":
                                                  g[
                                                    "withCreden" +
                                                      b(763, 683, 768, 643)
                                                  ] = !0;
                                                  continue;
                                                case "2":
                                                  g.open(
                                                    b(1211, 1043, 1115, 1198),
                                                    f,
                                                    !0
                                                  );
                                                  continue;
                                                case "3":
                                                  g.send(s);
                                                  continue;
                                                case "4":
                                                  _0xb67b6f[
                                                    m(-500, -388, -206, -426)
                                                  ](h)[b(1001, 904, 784, 993)](
                                                    function (t) {
                                                      var e, n;
                                                      g[
                                                        ((e = 452),
                                                        (n = 610),
                                                        m(
                                                          n,
                                                          e - 776,
                                                          e - 203,
                                                          n - 164
                                                        ) + "Header")
                                                      ](t, h[t]);
                                                    }
                                                  );
                                                  continue;
                                              }
                                              break;
                                            }
                                          continue;
                                        case "4":
                                          if (!f) return;
                                          continue;
                                      }
                                      break;
                                    }
                                  else {
                                    var w =
                                      e[b(655, 781, 975, 769)][
                                        n[b(1036, 966, 989, 1159)]
                                      ];
                                    (i[b(522, 716, 687, 666)] = w),
                                      (c[m(-393, -352, -539, -269)][
                                        b(535, 716, 685, 568)
                                      ] = w);
                                  }
                                function b(t, e, n, r) {
                                  return o(t, e - 268);
                                }
                                function m(t, e, n, r) {
                                  return o(t, e - -986);
                                }
                                t(c);
                              })
                          : _0x4c79a7.post(_0x59f838)
                        : n.MiBBi(t, c);
                    });
                  }
                  for (var h = r(0, 555, 0, 555)[t(101, 30)]("|"), l = 0; ; ) {
                    switch (h[l++]) {
                      case "0":
                        p[t(287, 427)](_0x18d580);
                        continue;
                      case "1":
                        var p = new _0x47a14e();
                        continue;
                      case "2":
                        p[t(79, 172)](e[t(258, 389)], _0x4f5894, !0);
                        continue;
                      case "3":
                        p["withCreden" + r(0, 509, 0, 387)] = !0;
                        continue;
                      case "4":
                        _0x283f6f[r(0, 584, 0, 570)](_0x559f85)[t(164, 335)](
                          function (e) {
                            function n(e, n, r, i) {
                              return t(r - 1175, n);
                            }
                            p[n(0, 1171, 1365) + n(0, 1302, 1119)](
                              e,
                              _0x353f8a[e]
                            );
                          }
                        );
                        continue;
                    }
                    break;
                  }
                },
              },
              {
                key: o(0, 548, 0, 598),
                value: function () {
                  function n(e, n, r, i) {
                    return t(i, 0, 0, e - 1005);
                  }
                  var r = {
                      jBYaK: function (t, n) {
                        return e[((r = 454), (o = 289), i(o - -13, r))](t, n);
                        var r, o;
                      },
                      ediVr: "YXSRZ",
                    },
                    o =
                      e.yFjLF(arguments[n(1581, 0, 0, 1466)], 0) &&
                      e[c(1259, 1126, 1165, 1318)](arguments[0], void 0)
                        ? arguments[0]
                        : "",
                    u =
                      e[n(1273, 0, 0, 1317)](
                        arguments[c(1269, 1426, 1204, 1332)],
                        1
                      ) && void 0 !== arguments[1]
                        ? arguments[1]
                        : "",
                    a =
                      e[c(961, 1136, 1063, 809)](
                        arguments[n(1581, 0, 0, 1577)],
                        2
                      ) && void 0 !== arguments[2]
                        ? arguments[2]
                        : "",
                    s = this,
                    f =
                      e.oESNN(arguments.length, 3) &&
                      e.QqeCF(arguments[3], void 0)
                        ? arguments[3]
                        : "";
                  function c(e, n, r, i) {
                    return t(r, 0, 0, e - 693);
                  }
                  var h =
                    e.bLtTp(arguments.length, 4) &&
                    e[c(1115, 0, 1054)](arguments[4], void 0)
                      ? arguments[4]
                      : {};
                  try {
                    var l = {
                      eventCategory: o,
                      eventAction: u,
                      eventLabel: a,
                      eventValue: f,
                      extraInfo: e[n(1497, 0, 0, 1491)](
                        Object.prototype.toString[n(1563, 0, 0, 1421)](h),
                        e[c(1229, 0, 1274)]
                      )
                        ? h
                        : {},
                    };
                    this[c(1103, 0, 1072) + "ms"](l).then(function (t) {
                      function e(t, e, r, i) {
                        return n(i - -1680, 0, 0, r);
                      }
                      if (s[e(0, 0, -333, -272)]) {
                        if (
                          r[i(1569, 1243, 1240, 1391)](
                            i(1481, 1727, 1754, 1564),
                            r.ediVr
                          )
                        )
                          return void s[e(0, 0, -406, -458)](t);
                        _0x41a852[e(0, 0, -322, -357)](_0x1a2846);
                      }
                      function i(t, e, r, i) {
                        return n(i - 25, 0, 0, t);
                      }
                      s.post(t);
                    });
                  } catch (t) {
                    console[c(1011, 0, 878)](t);
                  }
                },
              },
              {
                key: o(0, 586, 0, 761) + o(0, 789, 0, 690),
                value: function () {
                  var n = {
                    wgKyv: function (t, n) {
                      return e.wziwT(t, n);
                    },
                    Puhjx: function (t, e, n) {
                      return t(e, n);
                    },
                  };
                  function r(e, n, r, i) {
                    return t(i, 0, 0, e - -610);
                  }
                  function i(e, n, r, i) {
                    return t(i, 0, 0, e - -179);
                  }
                  if (e[r(-13, 0, 0, 174)] === i(218, 0, 0, 49))
                    return (
                      _0x4673b6 &&
                        n[r(-182, 0, 0, 3)](
                          _0x3e2538,
                          _0x5d63b6[r(-228, 0, 0, -173)],
                          _0x4c1bd1
                        ),
                      _0x1b67c3 && _0xd4ebe8(_0x103975, _0x400b78),
                      _0x269162
                    );
                  var o = this,
                    u =
                      e[r(-269, 0, 0, -106)](
                        arguments[r(-34, 0, 0, -147)],
                        0
                      ) && e.EAlQE(arguments[0], void 0)
                        ? arguments[0]
                        : {};
                  try {
                    if (!e.QqeCF(e.hRMGY, "FyDYS")) {
                      var a =
                          arguments.length > 0 &&
                          n[i(37, 0, 0, 214)](arguments[0], _0xb19868)
                            ? arguments[0]
                            : {},
                        s = new this();
                      return (0, _0x26b00e.initInstance)(s, a);
                    }
                    var f = u[i(342, 0, 0, 364)],
                      c = u.name;
                    if ((f && (this[i(145, 0, 0, 131)] = f), c))
                      if (
                        e[i(410, 0, 0, 227)](
                          e[i(341, 0, 0, 240)],
                          i(405, 0, 0, 531)
                        )
                      )
                        this[r(-248, 0, 0, -62)] = c;
                      else {
                        if (
                          _0x53b4ce &&
                          _0x3f7a30.data &&
                          _0x48cdf1.data[e[i(351, 0, 0, 411)]]
                        ) {
                          var h =
                            _0x29b35a[i(152, 0, 0, -18)][e[r(-80, 0, 0, -48)]];
                          (_0x4b6d4f[r(-344, 0, 0, -264)] = h),
                            (_0xa90f2f.user_info.device_id = h);
                        }
                        e[i(277, 0, 0, 164)](_0x5e6df9, _0x9f065e);
                      }
                    this[i(231, 0, 0, 155) + "ms"](this[r(-59, 0, 0, 31)]).then(
                      function (t) {
                        function n(t, e, n, r) {
                          return i(t - -281, 0, 0, n);
                        }
                        if (n(132, 0, 74) !== e[n(-169, 0, -314)])
                          _0x32ba88(_0x139940);
                        else {
                          if (o.isStash)
                            return void o[
                              ((r = 417), (u = 348), i(u - 310, 0, 0, r))
                            ](t);
                          o[n(49, 0, 151)](t);
                        }
                        var r, u;
                      }
                    );
                  } catch (t) {
                    if (!e[i(410, 0, 0, 600)](e.VZECj, e[r(-143, 0, 0, -253)]))
                      return e[r(-141, 0, 0, -13)];
                    console.log(t);
                  }
                },
              },
              {
                key: e[t(726, 0, 0, 557)],
                value: function () {
                  function n(t, e, n, r) {
                    return o(0, r - -636, 0, n);
                  }
                  function r(e, n, r, i) {
                    return t(i, 0, 0, n - 848);
                  }
                  if ("SbsAx" === e[n(0, 0, -164, -147)])
                    for (
                      var i = e[n(0, 0, -87, 105)][n(0, 0, 109, 22)]("|"),
                        u = 0;
                      ;

                    ) {
                      switch (i[u++]) {
                        case "0":
                          this.game_region = s;
                          continue;
                        case "1":
                          var a = f[n(0, 0, 109, 202)],
                            s = f[n(0, 0, 175, 110)];
                          continue;
                        case "2":
                          this[n(0, 0, 215, 113)] = a;
                          continue;
                        case "3":
                          var f =
                            e[n(0, 0, -37, -74)](arguments.length, 0) &&
                            e[n(0, 0, -97, 36)](arguments[0], void 0)
                              ? arguments[0]
                              : {};
                          continue;
                        case "4":
                          this[n(0, 0, -142, -121) + "id"] = !0;
                          continue;
                      }
                      break;
                    }
                  else
                    for (
                      var c = 0;
                      e[r(0, 1117, 0, 1198)](c, _0x575e9f[r(0, 1424, 0, 1304)]);
                      c++
                    )
                      for (
                        var h = e[n(0, 0, -277, -122)].split("|"), l = 0;
                        ;

                      ) {
                        switch (h[l++]) {
                          case "0":
                            e[n(0, 0, 110, -57)] in p &&
                              (p[r(0, 1439, 0, 1614)] = !0);
                            continue;
                          case "1":
                            p[r(0, 1348, 0, 1511)] = p.enumerable || !1;
                            continue;
                          case "2":
                            p[n(0, 0, 321, 145) + "le"] = !0;
                            continue;
                          case "3":
                            _0x4b3d86[r(0, 1393, 0, 1536) + "erty"](
                              _0x29cdf6,
                              p.key,
                              p
                            );
                            continue;
                          case "4":
                            var p = _0x541a38[c];
                            continue;
                        }
                        break;
                      }
                },
              },
              {
                key: e.EZVDP,
                value: function (n) {
                  function r(e, n, r, i) {
                    return t(r, 0, 0, i - -186);
                  }
                  function i(e, n, r, i) {
                    return t(n, 0, 0, r - -824);
                  }
                  for (
                    var o = e[r(0, 0, 230, 402)][r(0, 0, 381, 205)]("|"), u = 0;
                    ;

                  ) {
                    switch (o[u++]) {
                      case "0":
                        var a =
                          "114e9f56fb" +
                          r(0, 0, 165, 253) +
                          r(0, 0, 79, 111) +
                          "c5";
                        continue;
                      case "1":
                        var s = {};
                        s[i(0, -328, -467)] = v;
                        var f = new Blob([n], s);
                        continue;
                      case "2":
                        var c = e.RkMuk(
                          parseInt,
                          e[i(0, -428, -255)](Date[r(0, 0, 95, 146)](), 1e3),
                          10
                        );
                        continue;
                      case "3":
                        var p = (0, h.default)(n);
                        continue;
                      case "4":
                        var v = e[r(0, 0, 134, 46)];
                        continue;
                      case "5":
                        var d = e[r(0, 0, 477, 362)];
                        continue;
                      case "6":
                        var y = (0, l[r(0, 0, 380, 382)])(
                          [d, p, v, g, c, a].join("\n")
                        );
                        continue;
                      case "7":
                        var g = f[r(0, 0, 523, 388)];
                        continue;
                      case "8":
                        var w = {};
                        return (
                          (w[i(0, -451, -468) + "pe"] = v),
                          (w[i(0, -374, -400) + "5"] = p),
                          (w[r(0, 0, -24, 77)] = c),
                          (w[r(0, 0, 471, 386) + "on"] = y),
                          w
                        );
                    }
                    break;
                  }
                },
              },
              {
                key: e[t(510, 0, 0, 359)],
                value: function () {
                  function n(e, n, r, i) {
                    return t(n, 0, 0, r - 838);
                  }
                  function r(e, n, r, i) {
                    return t(i, 0, 0, r - -479);
                  }
                  var i = {
                    KrAIw: function (t, n) {
                      return e.qlljV(t, n);
                    },
                    EojWi: e[n(0, 1400, 1250)],
                    LdujQ: n(0, 1189, 1233) + "r",
                    SfzDk: e[n(0, 1156, 1261)],
                  };
                  if (e[r(0, 0, -149, -234)] === e.qWKIO)
                    (_0x444ec4 = 0),
                      (_0xba0652 = i.KrAIw(
                        i[r(0, 0, -46, -151)](this[r(0, 0, -109, -59)], "_"),
                        (0, _0x2dd46f[r(0, 0, -171, -327)])()
                      )),
                      _0x26e195[n(0, 1481, 1406)][r(0, 0, -261, -231)](
                        this["sessionIdC" + n(0, 1303, 1222)],
                        _0x833d23,
                        {
                          expires:
                            this[r(0, 0, -242, -336) + r(0, 0, 19, -137)],
                        }
                      );
                  else {
                    var o =
                      e[r(0, 0, 80, 97)](arguments[n(0, 1529, 1414)], 0) &&
                      e.DorKV(arguments[0], void 0)
                        ? arguments[0]
                        : {};
                    try {
                      var u =
                        this[r(0, 0, -126, -149)][
                          this[r(0, 0, -65, 118) + "t"]
                        ];
                      if (!u) return;
                      var a = JSON[r(0, 0, -179, -305)](o),
                        s = this[r(0, 0, 61, 64) + "Headers"](a);
                      if (this[n(0, 1171, 1324)]) {
                        var f = s[r(0, 0, -216, -377)],
                          c = s.Verification,
                          h = e[r(0, 0, -93, -186)](
                            e[n(0, 1378, 1224)](
                              e[r(0, 0, -37, -135)](u + e[n(0, 1155, 1123)], f),
                              e[r(0, 0, -204, -45)]
                            ),
                            c
                          );
                        navigator[r(0, 0, -60, -54)](h, a);
                      } else {
                        if (
                          e[r(0, 0, -57, -98)](
                            e[n(0, 1493, 1400)],
                            e[n(0, 1362, 1400)]
                          )
                        ) {
                          var l = {
                            lang: this.getLang() || "",
                            platform: this[r(0, 0, -116, 26)],
                            device: this.device,
                            auth_key:
                              (0, _0x2fdbf7[n(0, 1049, 1171) + "Name"])(
                                i[n(0, 1120, 1238)]
                              ) || "",
                            authkey_ver: (0,
                            _0x198256[
                              r(0, 0, -146, -174) + r(0, 0, -137, -78)
                            ])(i[r(0, 0, 15, -170)]),
                            game_biz:
                              (0,
                              _0x45fd96[r(0, 0, -146, 22) + r(0, 0, -137, 51)])(
                                i.SfzDk
                              ) || "",
                            account_id: this[n(0, 1379, 1403) + "id"]() || "",
                            bh3_sea_account_id:
                              this["getBh3SeaA" + r(0, 0, 36, 9)](),
                            game_uid: this[r(0, 0, 3, -168)],
                            game_region: this.game_region,
                            uuid: this[n(0, 1392, 1208)],
                            device_id: this[n(0, 1133, 1104)],
                            extra_info:
                              this[n(0, 1041, 1187) + r(0, 0, -240, -205)],
                          };
                          return l;
                        }
                        for (
                          var p = n(0, 1363, 1348)[r(0, 0, -88, -104)]("|"),
                            v = 0;
                          ;

                        ) {
                          switch (p[v++]) {
                            case "0":
                              //d[r(0, 0, 98, 142)](a);
                              continue;
                            case "1":
                              d[n(0, 1104, 1207)](r(0, 0, 114, 265), u, !0);
                              continue;
                            case "2":
                              Object[r(0, 0, -63, -144)](s)[r(0, 0, -25, -170)](
                                function (t) {
                                  d.setRequestHeader(t, s[t]);
                                }
                              );
                              continue;
                            case "3":
                              var d = new XMLHttpRequest();
                              continue;
                            case "4":
                              d["withCreden" + n(0, 1041, 1071)] = !0;
                              continue;
                          }
                          break;
                        }
                      }
                    } catch (t) {
                      e.KsqGv(e[n(0, 1041, 1068)], e[r(0, 0, -249, -115)])
                        ? (_0x2ebe6e[_0x55feb6] = _0x5460be[_0x36678f])
                        : console.error(t);
                    }
                  }
                },
              },
              {
                key: e[o(0, 622, 0, 795)],
                value: function () {
                  var t = {
                    MbBDo: function (t, n) {
                      return e[((r = -108), (o = -300), i(r - -752, o))](t, n);
                      var r, o;
                    },
                  };
                  function n(t, e, n, r) {
                    return o(0, r - -301, 0, t);
                  }
                  var r = this;
                  this[n(262, 0, 0, 212)][n(399, 0, 0, 420)](function (e, o) {
                    var u, a;
                    o > 10 ||
                      setTimeout(function () {
                        var t, n;
                        r[((t = 25), (n = -126), i(t - -533, n))](e);
                      }, t[((u = 992), (a = 1181), n(a, 0, 0, u - 518))](
                        o,
                        100
                      ));
                  });
                },
              },
              {
                key: e[o(0, 756, 0, 820)],
                value: function () {
                  function n(e, n, r, i) {
                    return t(r, 0, 0, e - -948);
                  }
                  function r(e, n, r, i) {
                    return t(i, 0, 0, n - -594);
                  }
                  if (e[r(0, -122, 0, 70)](e[r(0, -162, 0, -261)], e.SQQDJ))
                    return (
                      this[r(0, -367, 0, -254)] ||
                      _0x362dda[n(-380, 0, -526)].get(e[n(-652, 0, -574)])
                    );
                  this[n(-545, 0, -490)] = !0;
                },
              },
              {
                key: e.mBJFz,
                value: function (e) {
                  var n, r, i, u;
                  this[((i = 979), (u = 1048), o(0, u - 535, 0, i))][
                    ((n = 1040), (r = 973), t(r, 0, 0, n - 798))
                  ](e);
                },
              },
              {
                key: o(0, 524, 0, 584),
                value: function () {
                  function n(t, e, n, r) {
                    return o(0, t - 208, 0, n);
                  }
                  if (
                    ((this[a(837, 811, 677, 828)] = !1),
                    e[a(658, 690, 668, 633)](
                      this.eventList[a(1010, 1005, 1164, 936)],
                      0
                    ))
                  ) {
                    if (!e[n(812, 0, 742)]("hpohr", e.KKXIG)) return;
                    var r =
                        e[a(646, 771, 698, 619)](
                          arguments[a(1010, 1055, 988, 1032)],
                          1
                        ) && e.FDXcJ(arguments[1], _0x3a9dea)
                          ? arguments[1]
                          : {},
                      i = new this(),
                      u = {};
                    (u[a(957, 1099, 1034, 1024)] = _0x4d546a),
                      (0, _0x268304.initInstance)(
                        i,
                        e[n(819, 0, 788)](_0x4d66c, u, r)
                      );
                  }
                  function a(e, n, r, i) {
                    return t(i, 0, 0, e - 434);
                  }
                  this[a(1033, 0, 0, 1006) + n(855, 0, 754)](),
                    this[n(888, 0, 932)]();
                },
              },
              {
                key: e[o(0, 595, 0, 689)],
                value: function () {
                  function n(e, n, r, i) {
                    return t(i, 0, 0, e - 142);
                  }
                  if (e[n(447, 0, 0, 473)](e[n(654, 0, 0, 548)], e.Fqzpg)) {
                    if (_0x5429bd.indexOf(_0x5832a8[_0x107979]) > -1) return !0;
                  } else
                    this[((r = -42), (i = -136), o(0, r - -555, 0, i))] = [];
                  var r, i;
                },
              },
            ],
            [
              {
                key: e[t(403, 0, 0, 573)],
                value: function (n) {
                  var r =
                      e.ZGszt(arguments.length, 1) &&
                      e[s(833, 630, 721, 900)](arguments[1], void 0)
                        ? arguments[1]
                        : {},
                    i = new this(),
                    a = {};
                  function s(e, n, r, i) {
                    return t(i, 0, 0, r - 468);
                  }
                  function f(t, e, n, r) {
                    return o(0, t - -974, 0, r);
                  }
                  (a[f(-184, -276, -285, -197)] = n),
                    (0, p.initInstance)(i, e[s(0, 0, 812, 985)](u, a, r));
                },
              },
              {
                key: o(0, 654, 0, 576),
                value: function () {
                  var n =
                      e.RvMGd(arguments[i(814, 752, 673, 719)], 0) &&
                      e.vUayI(arguments[0], void 0)
                        ? arguments[0]
                        : {},
                    r = new this();
                  function i(e, n, r, i) {
                    return t(n, 0, 0, i - 143);
                  }
                  return (0, p[i(0, 428, 0, 422) + "ce"])(r, n);
                },
              },
            ]
          ),
          n
        );
      })();
      function w() {
        var t = [
          "r1HXt2m",
          "AhjLzG",
          "sMn1rhu",
          "FdD8mNWYmhW2Fa",
          "CfPXD2O",
          "BgfUzW",
          "ChjVzhvJDgLVBG",
          "uxnfuwm",
          "CvjNwNK",
          "se9XBeO",
          "q2X4q2S",
          "DgLHBhm",
          "sgvHzgvY",
          "rLjtvfG",
          "jNzLCMLMAwnHDa",
          "C2vZC2LVBKLUzG",
          "nhWZFdb8mxWY",
          "BMzV",
          "Dfnjq00",
          "y1rAtNG",
          "ChvZAa",
          "yxrfChe",
          "ywnJB3vUDf9Pza",
          "Ahr0Chm6lY9Kzq",
          "zxzLBNrmAxn0",
          "t0TLqxq",
          "AgfZvxbKyxrLvq",
          "zc5TAwHVEw8UyW",
          "Aw5KzxHpzG",
          "Duzcq3K",
          "vMnxEMq",
          "rvD0wKq",
          "sunoyLa",
          "rNrXBM0",
          "Ahr0Chm6lY9SBW",
          "Cg9Wu3rHC2G",
          "vhvsufC",
          "mJn8mtf8ohWYna",
          "tNfHqK4",
          "nhWXFdj8mhWZ",
          "ndiWCMrYzun6",
          "vgLTzxn0yw1W",
          "r3rby1u",
          "z2fTzv9YzwDPBW",
          "zgv2AwnLx2LK",
          "vKvWyuS",
          "rvbmBMG",
          "qxrfsKu",
          "Fde2Fde3FdeYFa",
          "qKjXugy",
          "lNnLyq",
          "B0vttK4",
          "rLvUwKC",
          "vgnuy1a",
          "u09gDeO",
          "C1jjA1i",
          "EfzHEfa",
          "Aw5PDeLUC3rHBG",
          "lxnLys10zxn0lG",
          "DhjHy2TfDMvUDa",
          "sejwCfC",
          "vwvZr1e",
          "rLLZu00",
          "tuTVqLC",
          "CgfNzuv4DhjHAq",
          "z2v0",
          "z2fTzv9IAxO",
          "zY11CgXVywqUBq",
          "BgvTDhq",
          "qK1TExO",
          "z2v0rgv2AwnL",
          "yMPIr1C",
          "B1jcEfy",
          "sfbIswe",
          "DfLdv1e",
          "otbIyZm4zMrKnW",
          "ow9bBLneta",
          "DgzXs3u",
          "C3rYAw5NAwz5",
          "AduVDxbSB2fK",
          "uuT6q0G",
          "tefQvvO",
          "yMjZqxbW",
          "D3PRte0",
          "A2v5",
          "qLLmsLa",
          "CMfUzg9Tswq",
          "Dgj0q1a",
          "D2vIC3rHDgLJlq",
          "y2vFAwq",
          "uMrlvxu",
          "Dg9VBa",
          "Dg16y1m",
          "CNbWyM4",
          "zwX2zLu",
          "rMXxsxK",
          "Bg9N",
          "DhjHy2TqywDLDG",
          "tw51rue",
          "ExLvrxC",
          "AMTpu0m",
          "CNHzu0m",
          "CgfNzxvYBa",
          "mJq1m0nSyNj2uG",
          "Ag9ZDa",
          "z2v0ugXHDgzVCG",
          "sw5uENi",
          "Cgf0Ag5HBwu",
          "EensBw0",
          "zgf0yq",
          "BM93",
          "z2v0ugfYyw1cEq",
          "x19LC01VzhvSzq",
          "v2H2Bu0",
          "wenmr1G",
          "rhjPAw0",
          "zvP5sK4",
          "uMTnDwS",
          "Bhr1AwrFDJi",
          "AxDLz3q",
          "tMfTzq",
          "C2vH",
          "te9zEKS",
          "yxbWBgLJyxrPBW",
          "tejTvLu",
          "wg9rEvK",
          "CK1hzMO",
          "DxnLCKv4DhjHAq",
          "C2vZC2LVBKLK",
          "q2fUBM90ignHBa",
          "z2v0rxzLBNrjBG",
          "yxbPCW",
          "x3yY",
          "qvrgEg4",
          "q29UDgvUDc1uEq",
          "DhLWzq",
          "r0jIB2e",
          "tKXXtuq",
          "zxzLBNrmywjLBa",
          "AKjzyuS",
          "CgfNzw5HBwu",
          "CgXHDgzVCM0",
          "Aw5MBW",
          "C3vyuvG",
          "yMGZtg9NAw5vAq",
          "yxbWx2LK",
          "DKP1DMG",
          "B3bLBG",
          "DxvPza",
          "Aw5ZDgfSBa",
          "yKzSvuK",
          "BMvLzfnLC3nPBW",
          "swrLwKW",
          "mJv8mtn8mtb8mq",
          "p3rPBwvZDgfTCa",
          "AxniyxnO",
          "rfH5s1y",
          "zY11CgXVywqTBW",
          "DMvUDhm",
          "CgXVywq",
          "ChjVDg90ExbL",
          "z2v0u2vZC2LVBG",
          "B29RAwvlzxK",
          "DMXVzY11CgXVyq",
          "qu5kCgS",
          "Aw5PDa",
          "rgrTz2O",
          "DMz6ufG",
          "EeXmrNC",
          "C3bSAxq",
          "nhWZFde1Fdb8mq",
          "zxzLBNrby3rPBW",
          "DxbKyxrLvwLK",
          "yxv0AgTLEv92zq",
          "v2D1Cfa",
          "vujJvxu",
          "tgT2wK0",
          "uwLwAwq",
          "rw9Qv2K",
          "mxWZFdj8nhWW",
          "BfzOtNC",
          "AxntDgfZAa",
          "z2v0ugfNzuLUzG",
          "uLbQs2C",
          "yxmGysbMDw5JDa",
          "nZq4ndq1mfLdu0XRwq",
          "seXTq1u",
          "DxrTx3nVDxjJzq",
          "z2v0qwXSugfYyq",
          "AwHVEw8Uy29TlW",
          "EgDtBhK",
          "y2XLyxjtDgfZAa",
          "zw52AxjVBM1LBG",
          "z2v0sxntzwe",
          "A2v5CW",
          "sNP3ueW",
          "uxfLq0y",
          "C2vUzejLywnVBG",
          "uvv2t1i",
          "BKLUzM8",
          "rKryy0O",
          "z0nUsei",
          "q29UDgvUDc1nra",
          "Aw94Bxm",
          "mxW0Fdb8mNWZ",
          "yxbWvMvYC2LVBG",
          "uhvOANG",
          "zgv2zwXVCg1LBG",
          "t05Fu1rfua",
          "ns91CgXVywq",
          "reHlqxO",
          "s3jbsxC",
          "mhWXFdj8nhWZ",
          "w29IAMvJDcbpyG",
          "CenVB2TPzuTLEq",
          "oxWYmNWYnNW5Fa",
          "quXzCLO",
          "mJa1ntmWowm5yG",
          "A2Pgzvy",
          "zs5JB20VAduVDq",
          "yMX4A1O",
          "AgfZt3DUuhjVCa",
          "zK1jC3u",
          "zxH0CMfjBMzV",
          "CY5OB3LVDMvYCW",
          "whPtDxu",
          "otG1ndi0ogjbBgXWBq",
          "BwLOB3LVlMnVBq",
          "swrfAwi",
          "mNWWFdz8oa",
          "DxnLCL9PBMzV",
          "uvPmAfa",
          "zM9YrwfJAa",
          "r1fMreK",
          "CwDHzNC",
          "zxzLBNrwywX1zq",
          "z2v0vgLTzq",
          "AMvJDf0",
          "yxnZAwDU",
          "sLPOBxa",
          "sujRC0C",
          "zgv2AwnL",
          "z1LYr3a",
          "z2v0tgfUzW",
          "Ag95B2XHyI4",
          "vLPfq2O",
          "u29Wr04",
          "uhDusw0",
          "CMvMzxjYzxi",
          "Bwfqwgy",
          "sxrhCfG",
          "v2fSr2u",
          "tMLQC2i",
          "mta5mZjSEhzLzu0",
          "DxfAuMq",
          "C2vZC2LVBKLKqW",
          "Ec1YCgmTzgv2Aq",
          "CMvNAw9U",
          "C2v0uMvXDwvZDa",
          "Aw9U",
          "z2fTzv91Awq",
          "A1H5sgi",
          "v1v0Awu",
          "mtbvCLvnuxG",
          "DxnLqMvHy29U",
          "mZy5odu5mKviyM9srG",
          "z2v0sfruufjLCq",
          "vwXku0K",
          "BhD6AKy",
          "zxzLBNrfEhrYyq",
          "De1mB1e",
          "AvPlAgG",
          "tgr1ALe",
          "sw5MBW",
          "DxrTx21LzgL1Bq",
          "AM9zuxu",
          "B0v4CgLYzxm",
          "Ce1St1a",
          "zw51BwvYywjSzq",
          "whn0BvC",
          "ANDwEfy",
          "EgzMBw4",
          "CMvWBgfJzq",
          "mte0ztLMntzMyG",
          "A0Lwz20",
          "BfLVqvu",
          "twjcrg8",
          "Cg9ZDa",
          "m3W0Fdf8mNWW",
          "D2vIC3rHDgLJlG",
          "AKj3t1u",
          "tu1zs1m",
          "y29UzMLNDxjHyG",
          "y2nVDw50Awq",
          "DMfysKS",
          "x01jqv9trvntsq",
          "yvPhtuC",
          "qvHqwKK",
          "zw5wwKW",
          "Cgf0Aa",
          "Awv3",
          "vNvL",
          "q0PZAfa",
          "zgf0yv9IzwXVBG",
          "BcbHignSyxnZia",
          "lxrLC3qU",
          "vwXpsLe",
          "BMvLzfvPza",
          "DuzYEvK",
          "mtjhuLrLAgK",
          "mtG2nZmWnKLcDuPuvW",
          "BwKXog5myw5N",
          "ENjVzu0",
          "yw5HBhLZAxnwzq",
          "DMjeDNm",
          "ntiWntrnsK9PwwS",
          "z2v0qMGZu2vHqq",
          "CgfNzq",
          "z2v0uMvXDwvZDa",
          "zuzAD3G",
          "zxj0Eq",
          "uLDRDLy",
          "Aw9Upq",
          "zgvMAw5LuhjVCa",
          "qun4Bg0",
          "zxjYB3i",
          "s1vvz0W",
          "BhzNvxK",
          "sK9ODhm",
          "ChzqyxjHBxm",
          "vM90q1u",
          "zxzLBNrdyxrLzW",
          "vw5vwuO",
          "vKLbBMO",
          "Fde0FdiX",
          "DwH3zwq",
          "y2fSBa",
          "q3zPEKu",
          "B3j5",
          "vKvQtfK",
          "A0nZAxq",
          "AxniB3n0u2vH",
          "zc1VCY5OB3LVDG",
          "z2v0qwnJB3vUDa",
          "D3PPD1q",
          "BI9QC29U",
          "zgvMyxvSDa",
          "yLjiquS",
          "CNnPB24",
          "DwLK",
          "vMvYAwzPy2f0Aq",
          "qNzKv3q",
          "C2L6zq",
          "DMfSDwu",
          "BgvUz3rO",
          "C2vUza",
          "zxjZzs5JB20VAa",
          "AgfZAa",
          "BxPkqw8",
          "DgvZDa",
          "DMLLDW",
          "CuPYELi",
          "AwD5wMS",
          "C2vZC2LVBLn0zq",
          "tKv5zLG",
          "mtm1mJe2vLbNB1rk",
          "q0X6Cha",
          "s2nnCxu",
          "A0DlquG",
          "D3jPDgfIBgu",
          "rw1OA2q",
          "ue9tva",
          "Ag95B3zLCNnLlG",
          "rvjAEeK",
          "AM9PBG",
          "C3fkCLC",
          "ze5TqLy",
          "Cg9ZDfn0yxnOrq",
          "DgvZDc5Zzwe",
          "wKDZENq",
          "DgHLBG",
          "rfDgCe0",
          "ufrcBvq",
          "D2DlExy",
          "ChvZAfn0yxnO",
          "C2v0",
          "Bg9JyxrPB24",
          "z2v0vxvPza",
          "sgvHzgvYCW",
        ];
        return (w = function () {
          return t;
        })();
      }
      e[r(-369, 0, 0, -347)] = g;
    },
    function (t, e, n) {
      var r;
      "undefined" != typeof self && self,
        (t.exports =
          ((r = n(1)),
          (function (t) {
            var e = {};
            function n(r) {
              if (e[r]) return e[r].exports;
              var i = (e[r] = { i: r, l: !1, exports: {} });
              return (
                t[r].call(i.exports, i, i.exports, n), (i.l = !0), i.exports
              );
            }
            return (
              (n.m = t),
              (n.c = e),
              (n.d = function (t, e, r) {
                n.o(t, e) ||
                  Object.defineProperty(t, e, { enumerable: !0, get: r });
              }),
              (n.r = function (t) {
                "undefined" != typeof Symbol &&
                  Symbol.toStringTag &&
                  Object.defineProperty(t, Symbol.toStringTag, {
                    value: "Module",
                  }),
                  Object.defineProperty(t, "__esModule", { value: !0 });
              }),
              (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule)
                  return t;
                var r = Object.create(null);
                if (
                  (n.r(r),
                  Object.defineProperty(r, "default", {
                    enumerable: !0,
                    value: t,
                  }),
                  2 & e && "string" != typeof t)
                )
                  for (var i in t)
                    n.d(
                      r,
                      i,
                      function (e) {
                        return t[e];
                      }.bind(null, i)
                    );
                return r;
              }),
              (n.n = function (t) {
                var e =
                  t && t.__esModule
                    ? function () {
                        return t.default;
                      }
                    : function () {
                        return t;
                      };
                return n.d(e, "a", e), e;
              }),
              (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
              }),
              (n.p = ""),
              n((n.s = 0))
            );
          })([
            function (t, e, n) {
              "use strict";
              Object.defineProperty(e, "__esModule", { value: !0 });
              var r,
                i = (r = n(1)) && r.__esModule ? r : { default: r };
              function o(t) {
                if (window.location.host.indexOf(".mihoyo.com") > -1)
                  i.default.set("_MHYUUID", t, {
                    domain: ".mihoyo.com",
                    path: "/",
                    expires: 365,
                  });
                else if (window.location.host.indexOf(".hoyolab.com") > -1)
                  i.default.set("_MHYUUID", t, {
                    domain: ".hoyolab.com",
                    path: "/",
                    expires: 365,
                  });
                else {
                  var e = window.location.hostname
                    .split(".")
                    .slice(-2)
                    .join(".");
                  i.default.set("_MHYUUID", t, {
                    domain: "." + e,
                    path: "/",
                    expires: 365,
                  });
                }
              }
              e.default = {
                getVisitorId: function () {
                  var t = this;
                  return new Promise(function (e) {
                    e(t.getUuid());
                  });
                },
                getUuid: function () {
                  var t = i.default.get("_MHYUUID");
                  return t
                    ? (o(t), t)
                    : (o(
                        (t = (function () {
                          if (window.crypto && window.crypto.randomUUID)
                            return window.crypto.randomUUID();
                          if (window.crypto && window.crypto.getRandomValues) {
                            var t = new Uint8Array(16);
                            window.crypto.getRandomValues(t),
                              (t[6] &= 15),
                              (t[6] |= 64),
                              (t[8] &= 63),
                              (t[8] |= 128);
                            var e = Array.prototype.map
                              .call(t, function (t) {
                                return ("0" + t.toString(16)).slice(-2);
                              })
                              .join("");
                            return (
                              e.substr(0, 8) +
                              "-" +
                              e.substr(8, 4) +
                              "-4" +
                              e.substr(12, 3) +
                              "-" +
                              e.substr(15, 4) +
                              "-" +
                              e.substr(19, 12)
                            );
                          }
                          var n = Date.now();
                          return (
                            "undefined" != typeof performance &&
                              "function" == typeof performance.now &&
                              (n += performance.now()),
                            "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
                              /[xy]/g,
                              function (t) {
                                var e = (n + 16 * Math.random()) % 16 | 0;
                                return (
                                  (n = Math.floor(n / 16)),
                                  ("x" === t ? e : (3 & e) | 8).toString(16)
                                );
                              }
                            )
                          );
                        })())
                      ),
                      t);
                },
              };
            },
            function (t, e) {
              t.exports = r;
            },
          ]).default));
    },
    function (t, e, n) {
      var r, i, o, u, a;
      (r = n(2)),
        (i = n(0).utf8),
        (o = n(6)),
        (u = n(0).bin),
        ((a = function (t, e) {
          t.constructor == String
            ? (t =
                e && "binary" === e.encoding
                  ? u.stringToBytes(t)
                  : i.stringToBytes(t))
            : o(t)
            ? (t = Array.prototype.slice.call(t, 0))
            : Array.isArray(t) ||
              t.constructor === Uint8Array ||
              (t = t.toString());
          for (
            var n = r.bytesToWords(t),
              s = 8 * t.length,
              f = 1732584193,
              c = -271733879,
              h = -1732584194,
              l = 271733878,
              p = 0;
            p < n.length;
            p++
          )
            n[p] =
              (16711935 & ((n[p] << 8) | (n[p] >>> 24))) |
              (4278255360 & ((n[p] << 24) | (n[p] >>> 8)));
          (n[s >>> 5] |= 128 << s % 32), (n[14 + (((s + 64) >>> 9) << 4)] = s);
          var v = a._ff,
            d = a._gg,
            y = a._hh,
            g = a._ii;
          for (p = 0; p < n.length; p += 16) {
            var w = f,
              b = c,
              m = h,
              x = l;
            (f = v(f, c, h, l, n[p + 0], 7, -680876936)),
              (l = v(l, f, c, h, n[p + 1], 12, -389564586)),
              (h = v(h, l, f, c, n[p + 2], 17, 606105819)),
              (c = v(c, h, l, f, n[p + 3], 22, -1044525330)),
              (f = v(f, c, h, l, n[p + 4], 7, -176418897)),
              (l = v(l, f, c, h, n[p + 5], 12, 1200080426)),
              (h = v(h, l, f, c, n[p + 6], 17, -1473231341)),
              (c = v(c, h, l, f, n[p + 7], 22, -45705983)),
              (f = v(f, c, h, l, n[p + 8], 7, 1770035416)),
              (l = v(l, f, c, h, n[p + 9], 12, -1958414417)),
              (h = v(h, l, f, c, n[p + 10], 17, -42063)),
              (c = v(c, h, l, f, n[p + 11], 22, -1990404162)),
              (f = v(f, c, h, l, n[p + 12], 7, 1804603682)),
              (l = v(l, f, c, h, n[p + 13], 12, -40341101)),
              (h = v(h, l, f, c, n[p + 14], 17, -1502002290)),
              (f = d(
                f,
                (c = v(c, h, l, f, n[p + 15], 22, 1236535329)),
                h,
                l,
                n[p + 1],
                5,
                -165796510
              )),
              (l = d(l, f, c, h, n[p + 6], 9, -1069501632)),
              (h = d(h, l, f, c, n[p + 11], 14, 643717713)),
              (c = d(c, h, l, f, n[p + 0], 20, -373897302)),
              (f = d(f, c, h, l, n[p + 5], 5, -701558691)),
              (l = d(l, f, c, h, n[p + 10], 9, 38016083)),
              (h = d(h, l, f, c, n[p + 15], 14, -660478335)),
              (c = d(c, h, l, f, n[p + 4], 20, -405537848)),
              (f = d(f, c, h, l, n[p + 9], 5, 568446438)),
              (l = d(l, f, c, h, n[p + 14], 9, -1019803690)),
              (h = d(h, l, f, c, n[p + 3], 14, -187363961)),
              (c = d(c, h, l, f, n[p + 8], 20, 1163531501)),
              (f = d(f, c, h, l, n[p + 13], 5, -1444681467)),
              (l = d(l, f, c, h, n[p + 2], 9, -51403784)),
              (h = d(h, l, f, c, n[p + 7], 14, 1735328473)),
              (f = y(
                f,
                (c = d(c, h, l, f, n[p + 12], 20, -1926607734)),
                h,
                l,
                n[p + 5],
                4,
                -378558
              )),
              (l = y(l, f, c, h, n[p + 8], 11, -2022574463)),
              (h = y(h, l, f, c, n[p + 11], 16, 1839030562)),
              (c = y(c, h, l, f, n[p + 14], 23, -35309556)),
              (f = y(f, c, h, l, n[p + 1], 4, -1530992060)),
              (l = y(l, f, c, h, n[p + 4], 11, 1272893353)),
              (h = y(h, l, f, c, n[p + 7], 16, -155497632)),
              (c = y(c, h, l, f, n[p + 10], 23, -1094730640)),
              (f = y(f, c, h, l, n[p + 13], 4, 681279174)),
              (l = y(l, f, c, h, n[p + 0], 11, -358537222)),
              (h = y(h, l, f, c, n[p + 3], 16, -722521979)),
              (c = y(c, h, l, f, n[p + 6], 23, 76029189)),
              (f = y(f, c, h, l, n[p + 9], 4, -640364487)),
              (l = y(l, f, c, h, n[p + 12], 11, -421815835)),
              (h = y(h, l, f, c, n[p + 15], 16, 530742520)),
              (f = g(
                f,
                (c = y(c, h, l, f, n[p + 2], 23, -995338651)),
                h,
                l,
                n[p + 0],
                6,
                -198630844
              )),
              (l = g(l, f, c, h, n[p + 7], 10, 1126891415)),
              (h = g(h, l, f, c, n[p + 14], 15, -1416354905)),
              (c = g(c, h, l, f, n[p + 5], 21, -57434055)),
              (f = g(f, c, h, l, n[p + 12], 6, 1700485571)),
              (l = g(l, f, c, h, n[p + 3], 10, -1894986606)),
              (h = g(h, l, f, c, n[p + 10], 15, -1051523)),
              (c = g(c, h, l, f, n[p + 1], 21, -2054922799)),
              (f = g(f, c, h, l, n[p + 8], 6, 1873313359)),
              (l = g(l, f, c, h, n[p + 15], 10, -30611744)),
              (h = g(h, l, f, c, n[p + 6], 15, -1560198380)),
              (c = g(c, h, l, f, n[p + 13], 21, 1309151649)),
              (f = g(f, c, h, l, n[p + 4], 6, -145523070)),
              (l = g(l, f, c, h, n[p + 11], 10, -1120210379)),
              (h = g(h, l, f, c, n[p + 2], 15, 718787259)),
              (c = g(c, h, l, f, n[p + 9], 21, -343485551)),
              (f = (f + w) >>> 0),
              (c = (c + b) >>> 0),
              (h = (h + m) >>> 0),
              (l = (l + x) >>> 0);
          }
          return r.endian([f, c, h, l]);
        })._ff = function (t, e, n, r, i, o, u) {
          var a = t + ((e & n) | (~e & r)) + (i >>> 0) + u;
          return ((a << o) | (a >>> (32 - o))) + e;
        }),
        (a._gg = function (t, e, n, r, i, o, u) {
          var a = t + ((e & r) | (n & ~r)) + (i >>> 0) + u;
          return ((a << o) | (a >>> (32 - o))) + e;
        }),
        (a._hh = function (t, e, n, r, i, o, u) {
          var a = t + (e ^ n ^ r) + (i >>> 0) + u;
          return ((a << o) | (a >>> (32 - o))) + e;
        }),
        (a._ii = function (t, e, n, r, i, o, u) {
          var a = t + (n ^ (e | ~r)) + (i >>> 0) + u;
          return ((a << o) | (a >>> (32 - o))) + e;
        }),
        (a._blocksize = 16),
        (a._digestsize = 16),
        (t.exports = function (t, e) {
          if (null == t) throw new Error("Illegal argument " + t);
          var n = r.wordsToBytes(a(t, e));
          return e && e.asBytes
            ? n
            : e && e.asString
            ? u.bytesToString(n)
            : r.bytesToHex(n);
        });
    },
    function (t, e) {
      function n(t) {
        return (
          !!t.constructor &&
          "function" == typeof t.constructor.isBuffer &&
          t.constructor.isBuffer(t)
        );
      }
      /*!
       * Determine if an object is a Buffer
       *
       * @author   Feross Aboukhadijeh <https://feross.org>
       * @license  MIT
       */
      t.exports = function (t) {
        return (
          null != t &&
          (n(t) ||
            (function (t) {
              return (
                "function" == typeof t.readFloatLE &&
                "function" == typeof t.slice &&
                n(t.slice(0, 0))
              );
            })(t) ||
            !!t._isBuffer)
        );
      };
    },
    function (t, e, n) {
      (function (e) {
        var r, i, o, u;
        (r = n(2)),
          (i = n(0).utf8),
          (o = n(0).bin),
          ((u = function (t, n) {
            var u = r.wordsToBytes(
              (function (t) {
                t.constructor == String
                  ? (t = i.stringToBytes(t))
                  : void 0 !== e &&
                    "function" == typeof e.isBuffer &&
                    e.isBuffer(t)
                  ? (t = Array.prototype.slice.call(t, 0))
                  : Array.isArray(t) || (t = t.toString());
                var n = r.bytesToWords(t),
                  o = 8 * t.length,
                  u = [],
                  a = 1732584193,
                  s = -271733879,
                  f = -1732584194,
                  c = 271733878,
                  h = -1009589776;
                (n[o >> 5] |= 128 << (24 - (o % 32))),
                  (n[15 + (((o + 64) >>> 9) << 4)] = o);
                for (var l = 0; l < n.length; l += 16) {
                  for (
                    var p = a, v = s, d = f, y = c, g = h, w = 0;
                    w < 80;
                    w++
                  ) {
                    if (w < 16) u[w] = n[l + w];
                    else {
                      var b = u[w - 3] ^ u[w - 8] ^ u[w - 14] ^ u[w - 16];
                      u[w] = (b << 1) | (b >>> 31);
                    }
                    var m =
                      ((a << 5) | (a >>> 27)) +
                      h +
                      (u[w] >>> 0) +
                      (w < 20
                        ? 1518500249 + ((s & f) | (~s & c))
                        : w < 40
                        ? 1859775393 + (s ^ f ^ c)
                        : w < 60
                        ? ((s & f) | (s & c) | (f & c)) - 1894007588
                        : (s ^ f ^ c) - 899497514);
                    (h = c),
                      (c = f),
                      (f = (s << 30) | (s >>> 2)),
                      (s = a),
                      (a = m);
                  }
                  (a += p), (s += v), (f += d), (c += y), (h += g);
                }
                return [a, s, f, c, h];
              })(t)
            );
            return n && n.asBytes
              ? u
              : n && n.asString
              ? o.bytesToString(u)
              : r.bytesToHex(u);
          })._blocksize = 16),
          (u._digestsize = 20),
          (t.exports = u);
      }).call(this, n(8).Buffer);
    },
    function (t, e, n) {
      "use strict";
      (function (t) {
        /*!
         * The buffer module from node.js, for the browser.
         *
         * @author   Feross Aboukhadijeh <http://feross.org>
         * @license  MIT
         */
        var r = n(10),
          i = n(11),
          o = n(12);
        function u() {
          return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function a(t, e) {
          if (u() < e) throw new RangeError("Invalid typed array length");
          return (
            s.TYPED_ARRAY_SUPPORT
              ? ((t = new Uint8Array(e)).__proto__ = s.prototype)
              : (null === t && (t = new s(e)), (t.length = e)),
            t
          );
        }
        function s(t, e, n) {
          if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s))
            return new s(t, e, n);
          if ("number" == typeof t) {
            if ("string" == typeof e)
              throw new Error(
                "If encoding is specified then the first argument must be a string"
              );
            return h(this, t);
          }
          return f(this, t, e, n);
        }
        function f(t, e, n, r) {
          if ("number" == typeof e)
            throw new TypeError('"value" argument must not be a number');
          return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer
            ? (function (t, e, n, r) {
                if ((e.byteLength, n < 0 || e.byteLength < n))
                  throw new RangeError("'offset' is out of bounds");
                if (e.byteLength < n + (r || 0))
                  throw new RangeError("'length' is out of bounds");
                e =
                  void 0 === n && void 0 === r
                    ? new Uint8Array(e)
                    : void 0 === r
                    ? new Uint8Array(e, n)
                    : new Uint8Array(e, n, r);
                s.TYPED_ARRAY_SUPPORT
                  ? ((t = e).__proto__ = s.prototype)
                  : (t = l(t, e));
                return t;
              })(t, e, n, r)
            : "string" == typeof e
            ? (function (t, e, n) {
                ("string" == typeof n && "" !== n) || (n = "utf8");
                if (!s.isEncoding(n))
                  throw new TypeError(
                    '"encoding" must be a valid string encoding'
                  );
                var r = 0 | v(e, n),
                  i = (t = a(t, r)).write(e, n);
                i !== r && (t = t.slice(0, i));
                return t;
              })(t, e, n)
            : (function (t, e) {
                if (s.isBuffer(e)) {
                  var n = 0 | p(e.length);
                  return 0 === (t = a(t, n)).length || e.copy(t, 0, 0, n), t;
                }
                if (e) {
                  if (
                    ("undefined" != typeof ArrayBuffer &&
                      e.buffer instanceof ArrayBuffer) ||
                    "length" in e
                  )
                    return "number" != typeof e.length || (r = e.length) != r
                      ? a(t, 0)
                      : l(t, e);
                  if ("Buffer" === e.type && o(e.data)) return l(t, e.data);
                }
                var r;
                throw new TypeError(
                  "First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object."
                );
              })(t, e);
        }
        function c(t) {
          if ("number" != typeof t)
            throw new TypeError('"size" argument must be a number');
          if (t < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function h(t, e) {
          if ((c(e), (t = a(t, e < 0 ? 0 : 0 | p(e))), !s.TYPED_ARRAY_SUPPORT))
            for (var n = 0; n < e; ++n) t[n] = 0;
          return t;
        }
        function l(t, e) {
          var n = e.length < 0 ? 0 : 0 | p(e.length);
          t = a(t, n);
          for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
          return t;
        }
        function p(t) {
          if (t >= u())
            throw new RangeError(
              "Attempt to allocate Buffer larger than maximum size: 0x" +
                u().toString(16) +
                " bytes"
            );
          return 0 | t;
        }
        function v(t, e) {
          if (s.isBuffer(t)) return t.length;
          if (
            "undefined" != typeof ArrayBuffer &&
            "function" == typeof ArrayBuffer.isView &&
            (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)
          )
            return t.byteLength;
          "string" != typeof t && (t = "" + t);
          var n = t.length;
          if (0 === n) return 0;
          for (var r = !1; ; )
            switch (e) {
              case "ascii":
              case "latin1":
              case "binary":
                return n;
              case "utf8":
              case "utf-8":
              case void 0:
                return U(t).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n;
              case "hex":
                return n >>> 1;
              case "base64":
                return N(t).length;
              default:
                if (r) return U(t).length;
                (e = ("" + e).toLowerCase()), (r = !0);
            }
        }
        function d(t, e, n) {
          var r = !1;
          if (((void 0 === e || e < 0) && (e = 0), e > this.length)) return "";
          if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
            return "";
          if ((n >>>= 0) <= (e >>>= 0)) return "";
          for (t || (t = "utf8"); ; )
            switch (t) {
              case "hex":
                return P(this, e, n);
              case "utf8":
              case "utf-8":
                return E(this, e, n);
              case "ascii":
                return L(this, e, n);
              case "latin1":
              case "binary":
                return S(this, e, n);
              case "base64":
                return C(this, e, n);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return z(this, e, n);
              default:
                if (r) throw new TypeError("Unknown encoding: " + t);
                (t = (t + "").toLowerCase()), (r = !0);
            }
        }
        function y(t, e, n) {
          var r = t[e];
          (t[e] = t[n]), (t[n] = r);
        }
        function g(t, e, n, r, i) {
          if (0 === t.length) return -1;
          if (
            ("string" == typeof n
              ? ((r = n), (n = 0))
              : n > 2147483647
              ? (n = 2147483647)
              : n < -2147483648 && (n = -2147483648),
            (n = +n),
            isNaN(n) && (n = i ? 0 : t.length - 1),
            n < 0 && (n = t.length + n),
            n >= t.length)
          ) {
            if (i) return -1;
            n = t.length - 1;
          } else if (n < 0) {
            if (!i) return -1;
            n = 0;
          }
          if (("string" == typeof e && (e = s.from(e, r)), s.isBuffer(e)))
            return 0 === e.length ? -1 : w(t, e, n, r, i);
          if ("number" == typeof e)
            return (
              (e &= 255),
              s.TYPED_ARRAY_SUPPORT &&
              "function" == typeof Uint8Array.prototype.indexOf
                ? i
                  ? Uint8Array.prototype.indexOf.call(t, e, n)
                  : Uint8Array.prototype.lastIndexOf.call(t, e, n)
                : w(t, [e], n, r, i)
            );
          throw new TypeError("val must be string, number or Buffer");
        }
        function w(t, e, n, r, i) {
          var o,
            u = 1,
            a = t.length,
            s = e.length;
          if (
            void 0 !== r &&
            ("ucs2" === (r = String(r).toLowerCase()) ||
              "ucs-2" === r ||
              "utf16le" === r ||
              "utf-16le" === r)
          ) {
            if (t.length < 2 || e.length < 2) return -1;
            (u = 2), (a /= 2), (s /= 2), (n /= 2);
          }
          function f(t, e) {
            return 1 === u ? t[e] : t.readUInt16BE(e * u);
          }
          if (i) {
            var c = -1;
            for (o = n; o < a; o++)
              if (f(t, o) === f(e, -1 === c ? 0 : o - c)) {
                if ((-1 === c && (c = o), o - c + 1 === s)) return c * u;
              } else -1 !== c && (o -= o - c), (c = -1);
          } else
            for (n + s > a && (n = a - s), o = n; o >= 0; o--) {
              for (var h = !0, l = 0; l < s; l++)
                if (f(t, o + l) !== f(e, l)) {
                  h = !1;
                  break;
                }
              if (h) return o;
            }
          return -1;
        }
        function b(t, e, n, r) {
          n = Number(n) || 0;
          var i = t.length - n;
          r ? (r = Number(r)) > i && (r = i) : (r = i);
          var o = e.length;
          if (o % 2 != 0) throw new TypeError("Invalid hex string");
          r > o / 2 && (r = o / 2);
          for (var u = 0; u < r; ++u) {
            var a = parseInt(e.substr(2 * u, 2), 16);
            if (isNaN(a)) return u;
            t[n + u] = a;
          }
          return u;
        }
        function m(t, e, n, r) {
          return Y(U(e, t.length - n), t, n, r);
        }
        function x(t, e, n, r) {
          return Y(
            (function (t) {
              for (var e = [], n = 0; n < t.length; ++n)
                e.push(255 & t.charCodeAt(n));
              return e;
            })(e),
            t,
            n,
            r
          );
        }
        function _(t, e, n, r) {
          return x(t, e, n, r);
        }
        function A(t, e, n, r) {
          return Y(N(e), t, n, r);
        }
        function B(t, e, n, r) {
          return Y(
            (function (t, e) {
              for (
                var n, r, i, o = [], u = 0;
                u < t.length && !((e -= 2) < 0);
                ++u
              )
                (n = t.charCodeAt(u)),
                  (r = n >> 8),
                  (i = n % 256),
                  o.push(i),
                  o.push(r);
              return o;
            })(e, t.length - n),
            t,
            n,
            r
          );
        }
        function C(t, e, n) {
          return 0 === e && n === t.length
            ? r.fromByteArray(t)
            : r.fromByteArray(t.slice(e, n));
        }
        function E(t, e, n) {
          n = Math.min(t.length, n);
          for (var r = [], i = e; i < n; ) {
            var o,
              u,
              a,
              s,
              f = t[i],
              c = null,
              h = f > 239 ? 4 : f > 223 ? 3 : f > 191 ? 2 : 1;
            if (i + h <= n)
              switch (h) {
                case 1:
                  f < 128 && (c = f);
                  break;
                case 2:
                  128 == (192 & (o = t[i + 1])) &&
                    (s = ((31 & f) << 6) | (63 & o)) > 127 &&
                    (c = s);
                  break;
                case 3:
                  (o = t[i + 1]),
                    (u = t[i + 2]),
                    128 == (192 & o) &&
                      128 == (192 & u) &&
                      (s = ((15 & f) << 12) | ((63 & o) << 6) | (63 & u)) >
                        2047 &&
                      (s < 55296 || s > 57343) &&
                      (c = s);
                  break;
                case 4:
                  (o = t[i + 1]),
                    (u = t[i + 2]),
                    (a = t[i + 3]),
                    128 == (192 & o) &&
                      128 == (192 & u) &&
                      128 == (192 & a) &&
                      (s =
                        ((15 & f) << 18) |
                        ((63 & o) << 12) |
                        ((63 & u) << 6) |
                        (63 & a)) > 65535 &&
                      s < 1114112 &&
                      (c = s);
              }
            null === c
              ? ((c = 65533), (h = 1))
              : c > 65535 &&
                ((c -= 65536),
                r.push(((c >>> 10) & 1023) | 55296),
                (c = 56320 | (1023 & c))),
              r.push(c),
              (i += h);
          }
          return (function (t) {
            var e = t.length;
            if (e <= 4096) return String.fromCharCode.apply(String, t);
            var n = "",
              r = 0;
            for (; r < e; )
              n += String.fromCharCode.apply(String, t.slice(r, (r += 4096)));
            return n;
          })(r);
        }
        (e.Buffer = s),
          (e.SlowBuffer = function (t) {
            +t != t && (t = 0);
            return s.alloc(+t);
          }),
          (e.INSPECT_MAX_BYTES = 50),
          (s.TYPED_ARRAY_SUPPORT =
            void 0 !== t.TYPED_ARRAY_SUPPORT
              ? t.TYPED_ARRAY_SUPPORT
              : (function () {
                  try {
                    var t = new Uint8Array(1);
                    return (
                      (t.__proto__ = {
                        __proto__: Uint8Array.prototype,
                        foo: function () {
                          return 42;
                        },
                      }),
                      42 === t.foo() &&
                        "function" == typeof t.subarray &&
                        0 === t.subarray(1, 1).byteLength
                    );
                  } catch (t) {
                    return !1;
                  }
                })()),
          (e.kMaxLength = u()),
          (s.poolSize = 8192),
          (s._augment = function (t) {
            return (t.__proto__ = s.prototype), t;
          }),
          (s.from = function (t, e, n) {
            return f(null, t, e, n);
          }),
          s.TYPED_ARRAY_SUPPORT &&
            ((s.prototype.__proto__ = Uint8Array.prototype),
            (s.__proto__ = Uint8Array),
            "undefined" != typeof Symbol &&
              Symbol.species &&
              s[Symbol.species] === s &&
              Object.defineProperty(s, Symbol.species, {
                value: null,
                configurable: !0,
              })),
          (s.alloc = function (t, e, n) {
            return (function (t, e, n, r) {
              return (
                c(e),
                e <= 0
                  ? a(t, e)
                  : void 0 !== n
                  ? "string" == typeof r
                    ? a(t, e).fill(n, r)
                    : a(t, e).fill(n)
                  : a(t, e)
              );
            })(null, t, e, n);
          }),
          (s.allocUnsafe = function (t) {
            return h(null, t);
          }),
          (s.allocUnsafeSlow = function (t) {
            return h(null, t);
          }),
          (s.isBuffer = function (t) {
            return !(null == t || !t._isBuffer);
          }),
          (s.compare = function (t, e) {
            if (!s.isBuffer(t) || !s.isBuffer(e))
              throw new TypeError("Arguments must be Buffers");
            if (t === e) return 0;
            for (
              var n = t.length, r = e.length, i = 0, o = Math.min(n, r);
              i < o;
              ++i
            )
              if (t[i] !== e[i]) {
                (n = t[i]), (r = e[i]);
                break;
              }
            return n < r ? -1 : r < n ? 1 : 0;
          }),
          (s.isEncoding = function (t) {
            switch (String(t).toLowerCase()) {
              case "hex":
              case "utf8":
              case "utf-8":
              case "ascii":
              case "latin1":
              case "binary":
              case "base64":
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return !0;
              default:
                return !1;
            }
          }),
          (s.concat = function (t, e) {
            if (!o(t))
              throw new TypeError(
                '"list" argument must be an Array of Buffers'
              );
            if (0 === t.length) return s.alloc(0);
            var n;
            if (void 0 === e)
              for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
            var r = s.allocUnsafe(e),
              i = 0;
            for (n = 0; n < t.length; ++n) {
              var u = t[n];
              if (!s.isBuffer(u))
                throw new TypeError(
                  '"list" argument must be an Array of Buffers'
                );
              u.copy(r, i), (i += u.length);
            }
            return r;
          }),
          (s.byteLength = v),
          (s.prototype._isBuffer = !0),
          (s.prototype.swap16 = function () {
            var t = this.length;
            if (t % 2 != 0)
              throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var e = 0; e < t; e += 2) y(this, e, e + 1);
            return this;
          }),
          (s.prototype.swap32 = function () {
            var t = this.length;
            if (t % 4 != 0)
              throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var e = 0; e < t; e += 4)
              y(this, e, e + 3), y(this, e + 1, e + 2);
            return this;
          }),
          (s.prototype.swap64 = function () {
            var t = this.length;
            if (t % 8 != 0)
              throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var e = 0; e < t; e += 8)
              y(this, e, e + 7),
                y(this, e + 1, e + 6),
                y(this, e + 2, e + 5),
                y(this, e + 3, e + 4);
            return this;
          }),
          (s.prototype.toString = function () {
            var t = 0 | this.length;
            return 0 === t
              ? ""
              : 0 === arguments.length
              ? E(this, 0, t)
              : d.apply(this, arguments);
          }),
          (s.prototype.equals = function (t) {
            if (!s.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            return this === t || 0 === s.compare(this, t);
          }),
          (s.prototype.inspect = function () {
            var t = "",
              n = e.INSPECT_MAX_BYTES;
            return (
              this.length > 0 &&
                ((t = this.toString("hex", 0, n).match(/.{2}/g).join(" ")),
                this.length > n && (t += " ... ")),
              "<Buffer " + t + ">"
            );
          }),
          (s.prototype.compare = function (t, e, n, r, i) {
            if (!s.isBuffer(t))
              throw new TypeError("Argument must be a Buffer");
            if (
              (void 0 === e && (e = 0),
              void 0 === n && (n = t ? t.length : 0),
              void 0 === r && (r = 0),
              void 0 === i && (i = this.length),
              e < 0 || n > t.length || r < 0 || i > this.length)
            )
              throw new RangeError("out of range index");
            if (r >= i && e >= n) return 0;
            if (r >= i) return -1;
            if (e >= n) return 1;
            if (this === t) return 0;
            for (
              var o = (i >>>= 0) - (r >>>= 0),
                u = (n >>>= 0) - (e >>>= 0),
                a = Math.min(o, u),
                f = this.slice(r, i),
                c = t.slice(e, n),
                h = 0;
              h < a;
              ++h
            )
              if (f[h] !== c[h]) {
                (o = f[h]), (u = c[h]);
                break;
              }
            return o < u ? -1 : u < o ? 1 : 0;
          }),
          (s.prototype.includes = function (t, e, n) {
            return -1 !== this.indexOf(t, e, n);
          }),
          (s.prototype.indexOf = function (t, e, n) {
            return g(this, t, e, n, !0);
          }),
          (s.prototype.lastIndexOf = function (t, e, n) {
            return g(this, t, e, n, !1);
          }),
          (s.prototype.write = function (t, e, n, r) {
            if (void 0 === e) (r = "utf8"), (n = this.length), (e = 0);
            else if (void 0 === n && "string" == typeof e)
              (r = e), (n = this.length), (e = 0);
            else {
              if (!isFinite(e))
                throw new Error(
                  "Buffer.write(string, encoding, offset[, length]) is no longer supported"
                );
              (e |= 0),
                isFinite(n)
                  ? ((n |= 0), void 0 === r && (r = "utf8"))
                  : ((r = n), (n = void 0));
            }
            var i = this.length - e;
            if (
              ((void 0 === n || n > i) && (n = i),
              (t.length > 0 && (n < 0 || e < 0)) || e > this.length)
            )
              throw new RangeError("Attempt to write outside buffer bounds");
            r || (r = "utf8");
            for (var o = !1; ; )
              switch (r) {
                case "hex":
                  return b(this, t, e, n);
                case "utf8":
                case "utf-8":
                  return m(this, t, e, n);
                case "ascii":
                  return x(this, t, e, n);
                case "latin1":
                case "binary":
                  return _(this, t, e, n);
                case "base64":
                  return A(this, t, e, n);
                case "ucs2":
                case "ucs-2":
                case "utf16le":
                case "utf-16le":
                  return B(this, t, e, n);
                default:
                  if (o) throw new TypeError("Unknown encoding: " + r);
                  (r = ("" + r).toLowerCase()), (o = !0);
              }
          }),
          (s.prototype.toJSON = function () {
            return {
              type: "Buffer",
              data: Array.prototype.slice.call(this._arr || this, 0),
            };
          });
        function L(t, e, n) {
          var r = "";
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(127 & t[i]);
          return r;
        }
        function S(t, e, n) {
          var r = "";
          n = Math.min(t.length, n);
          for (var i = e; i < n; ++i) r += String.fromCharCode(t[i]);
          return r;
        }
        function P(t, e, n) {
          var r = t.length;
          (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
          for (var i = "", o = e; o < n; ++o) i += R(t[o]);
          return i;
        }
        function z(t, e, n) {
          for (var r = t.slice(e, n), i = "", o = 0; o < r.length; o += 2)
            i += String.fromCharCode(r[o] + 256 * r[o + 1]);
          return i;
        }
        function D(t, e, n) {
          if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
          if (t + e > n)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function k(t, e, n, r, i, o) {
          if (!s.isBuffer(t))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (e > i || e < o)
            throw new RangeError('"value" argument is out of bounds');
          if (n + r > t.length) throw new RangeError("Index out of range");
        }
        function O(t, e, n, r) {
          e < 0 && (e = 65535 + e + 1);
          for (var i = 0, o = Math.min(t.length - n, 2); i < o; ++i)
            t[n + i] =
              (e & (255 << (8 * (r ? i : 1 - i)))) >>> (8 * (r ? i : 1 - i));
        }
        function T(t, e, n, r) {
          e < 0 && (e = 4294967295 + e + 1);
          for (var i = 0, o = Math.min(t.length - n, 4); i < o; ++i)
            t[n + i] = (e >>> (8 * (r ? i : 3 - i))) & 255;
        }
        function j(t, e, n, r, i, o) {
          if (n + r > t.length) throw new RangeError("Index out of range");
          if (n < 0) throw new RangeError("Index out of range");
        }
        function q(t, e, n, r, o) {
          return o || j(t, 0, n, 4), i.write(t, e, n, r, 23, 4), n + 4;
        }
        function M(t, e, n, r, o) {
          return o || j(t, 0, n, 8), i.write(t, e, n, r, 52, 8), n + 8;
        }
        (s.prototype.slice = function (t, e) {
          var n,
            r = this.length;
          if (
            ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r),
            (e = void 0 === e ? r : ~~e) < 0
              ? (e += r) < 0 && (e = 0)
              : e > r && (e = r),
            e < t && (e = t),
            s.TYPED_ARRAY_SUPPORT)
          )
            (n = this.subarray(t, e)).__proto__ = s.prototype;
          else {
            var i = e - t;
            n = new s(i, void 0);
            for (var o = 0; o < i; ++o) n[o] = this[o + t];
          }
          return n;
        }),
          (s.prototype.readUIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || D(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              r += this[t + o] * i;
            return r;
          }),
          (s.prototype.readUIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || D(t, e, this.length);
            for (var r = this[t + --e], i = 1; e > 0 && (i *= 256); )
              r += this[t + --e] * i;
            return r;
          }),
          (s.prototype.readUInt8 = function (t, e) {
            return e || D(t, 1, this.length), this[t];
          }),
          (s.prototype.readUInt16LE = function (t, e) {
            return e || D(t, 2, this.length), this[t] | (this[t + 1] << 8);
          }),
          (s.prototype.readUInt16BE = function (t, e) {
            return e || D(t, 2, this.length), (this[t] << 8) | this[t + 1];
          }),
          (s.prototype.readUInt32LE = function (t, e) {
            return (
              e || D(t, 4, this.length),
              (this[t] | (this[t + 1] << 8) | (this[t + 2] << 16)) +
                16777216 * this[t + 3]
            );
          }),
          (s.prototype.readUInt32BE = function (t, e) {
            return (
              e || D(t, 4, this.length),
              16777216 * this[t] +
                ((this[t + 1] << 16) | (this[t + 2] << 8) | this[t + 3])
            );
          }),
          (s.prototype.readIntLE = function (t, e, n) {
            (t |= 0), (e |= 0), n || D(t, e, this.length);
            for (var r = this[t], i = 1, o = 0; ++o < e && (i *= 256); )
              r += this[t + o] * i;
            return r >= (i *= 128) && (r -= Math.pow(2, 8 * e)), r;
          }),
          (s.prototype.readIntBE = function (t, e, n) {
            (t |= 0), (e |= 0), n || D(t, e, this.length);
            for (var r = e, i = 1, o = this[t + --r]; r > 0 && (i *= 256); )
              o += this[t + --r] * i;
            return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
          }),
          (s.prototype.readInt8 = function (t, e) {
            return (
              e || D(t, 1, this.length),
              128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            );
          }),
          (s.prototype.readInt16LE = function (t, e) {
            e || D(t, 2, this.length);
            var n = this[t] | (this[t + 1] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (s.prototype.readInt16BE = function (t, e) {
            e || D(t, 2, this.length);
            var n = this[t + 1] | (this[t] << 8);
            return 32768 & n ? 4294901760 | n : n;
          }),
          (s.prototype.readInt32LE = function (t, e) {
            return (
              e || D(t, 4, this.length),
              this[t] |
                (this[t + 1] << 8) |
                (this[t + 2] << 16) |
                (this[t + 3] << 24)
            );
          }),
          (s.prototype.readInt32BE = function (t, e) {
            return (
              e || D(t, 4, this.length),
              (this[t] << 24) |
                (this[t + 1] << 16) |
                (this[t + 2] << 8) |
                this[t + 3]
            );
          }),
          (s.prototype.readFloatLE = function (t, e) {
            return e || D(t, 4, this.length), i.read(this, t, !0, 23, 4);
          }),
          (s.prototype.readFloatBE = function (t, e) {
            return e || D(t, 4, this.length), i.read(this, t, !1, 23, 4);
          }),
          (s.prototype.readDoubleLE = function (t, e) {
            return e || D(t, 8, this.length), i.read(this, t, !0, 52, 8);
          }),
          (s.prototype.readDoubleBE = function (t, e) {
            return e || D(t, 8, this.length), i.read(this, t, !1, 52, 8);
          }),
          (s.prototype.writeUIntLE = function (t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              k(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = 1,
              o = 0;
            for (this[e] = 255 & t; ++o < n && (i *= 256); )
              this[e + o] = (t / i) & 255;
            return e + n;
          }),
          (s.prototype.writeUIntBE = function (t, e, n, r) {
            ((t = +t), (e |= 0), (n |= 0), r) ||
              k(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
            var i = n - 1,
              o = 1;
            for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); )
              this[e + i] = (t / o) & 255;
            return e + n;
          }),
          (s.prototype.writeUInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 1, 255, 0),
              s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (s.prototype.writeUInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 2, 65535, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : O(this, t, e, !0),
              e + 2
            );
          }),
          (s.prototype.writeUInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 2, 65535, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : O(this, t, e, !1),
              e + 2
            );
          }),
          (s.prototype.writeUInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 4, 4294967295, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e + 3] = t >>> 24),
                  (this[e + 2] = t >>> 16),
                  (this[e + 1] = t >>> 8),
                  (this[e] = 255 & t))
                : T(this, t, e, !0),
              e + 4
            );
          }),
          (s.prototype.writeUInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 4, 4294967295, 0),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : T(this, t, e, !1),
              e + 4
            );
          }),
          (s.prototype.writeIntLE = function (t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              k(this, t, e, n, i - 1, -i);
            }
            var o = 0,
              u = 1,
              a = 0;
            for (this[e] = 255 & t; ++o < n && (u *= 256); )
              t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1),
                (this[e + o] = (((t / u) >> 0) - a) & 255);
            return e + n;
          }),
          (s.prototype.writeIntBE = function (t, e, n, r) {
            if (((t = +t), (e |= 0), !r)) {
              var i = Math.pow(2, 8 * n - 1);
              k(this, t, e, n, i - 1, -i);
            }
            var o = n - 1,
              u = 1,
              a = 0;
            for (this[e + o] = 255 & t; --o >= 0 && (u *= 256); )
              t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1),
                (this[e + o] = (((t / u) >> 0) - a) & 255);
            return e + n;
          }),
          (s.prototype.writeInt8 = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 1, 127, -128),
              s.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)),
              t < 0 && (t = 255 + t + 1),
              (this[e] = 255 & t),
              e + 1
            );
          }),
          (s.prototype.writeInt16LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 2, 32767, -32768),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t), (this[e + 1] = t >>> 8))
                : O(this, t, e, !0),
              e + 2
            );
          }),
          (s.prototype.writeInt16BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 2, 32767, -32768),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 8), (this[e + 1] = 255 & t))
                : O(this, t, e, !1),
              e + 2
            );
          }),
          (s.prototype.writeInt32LE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 4, 2147483647, -2147483648),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = 255 & t),
                  (this[e + 1] = t >>> 8),
                  (this[e + 2] = t >>> 16),
                  (this[e + 3] = t >>> 24))
                : T(this, t, e, !0),
              e + 4
            );
          }),
          (s.prototype.writeInt32BE = function (t, e, n) {
            return (
              (t = +t),
              (e |= 0),
              n || k(this, t, e, 4, 2147483647, -2147483648),
              t < 0 && (t = 4294967295 + t + 1),
              s.TYPED_ARRAY_SUPPORT
                ? ((this[e] = t >>> 24),
                  (this[e + 1] = t >>> 16),
                  (this[e + 2] = t >>> 8),
                  (this[e + 3] = 255 & t))
                : T(this, t, e, !1),
              e + 4
            );
          }),
          (s.prototype.writeFloatLE = function (t, e, n) {
            return q(this, t, e, !0, n);
          }),
          (s.prototype.writeFloatBE = function (t, e, n) {
            return q(this, t, e, !1, n);
          }),
          (s.prototype.writeDoubleLE = function (t, e, n) {
            return M(this, t, e, !0, n);
          }),
          (s.prototype.writeDoubleBE = function (t, e, n) {
            return M(this, t, e, !1, n);
          }),
          (s.prototype.copy = function (t, e, n, r) {
            if (
              (n || (n = 0),
              r || 0 === r || (r = this.length),
              e >= t.length && (e = t.length),
              e || (e = 0),
              r > 0 && r < n && (r = n),
              r === n)
            )
              return 0;
            if (0 === t.length || 0 === this.length) return 0;
            if (e < 0) throw new RangeError("targetStart out of bounds");
            if (n < 0 || n >= this.length)
              throw new RangeError("sourceStart out of bounds");
            if (r < 0) throw new RangeError("sourceEnd out of bounds");
            r > this.length && (r = this.length),
              t.length - e < r - n && (r = t.length - e + n);
            var i,
              o = r - n;
            if (this === t && n < e && e < r)
              for (i = o - 1; i >= 0; --i) t[i + e] = this[i + n];
            else if (o < 1e3 || !s.TYPED_ARRAY_SUPPORT)
              for (i = 0; i < o; ++i) t[i + e] = this[i + n];
            else Uint8Array.prototype.set.call(t, this.subarray(n, n + o), e);
            return o;
          }),
          (s.prototype.fill = function (t, e, n, r) {
            if ("string" == typeof t) {
              if (
                ("string" == typeof e
                  ? ((r = e), (e = 0), (n = this.length))
                  : "string" == typeof n && ((r = n), (n = this.length)),
                1 === t.length)
              ) {
                var i = t.charCodeAt(0);
                i < 256 && (t = i);
              }
              if (void 0 !== r && "string" != typeof r)
                throw new TypeError("encoding must be a string");
              if ("string" == typeof r && !s.isEncoding(r))
                throw new TypeError("Unknown encoding: " + r);
            } else "number" == typeof t && (t &= 255);
            if (e < 0 || this.length < e || this.length < n)
              throw new RangeError("Out of range index");
            if (n <= e) return this;
            var o;
            if (
              ((e >>>= 0),
              (n = void 0 === n ? this.length : n >>> 0),
              t || (t = 0),
              "number" == typeof t)
            )
              for (o = e; o < n; ++o) this[o] = t;
            else {
              var u = s.isBuffer(t) ? t : U(new s(t, r).toString()),
                a = u.length;
              for (o = 0; o < n - e; ++o) this[o + e] = u[o % a];
            }
            return this;
          });
        var I = /[^+\/0-9A-Za-z-_]/g;
        function R(t) {
          return t < 16 ? "0" + t.toString(16) : t.toString(16);
        }
        function U(t, e) {
          var n;
          e = e || 1 / 0;
          for (var r = t.length, i = null, o = [], u = 0; u < r; ++u) {
            if ((n = t.charCodeAt(u)) > 55295 && n < 57344) {
              if (!i) {
                if (n > 56319) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                if (u + 1 === r) {
                  (e -= 3) > -1 && o.push(239, 191, 189);
                  continue;
                }
                i = n;
                continue;
              }
              if (n < 56320) {
                (e -= 3) > -1 && o.push(239, 191, 189), (i = n);
                continue;
              }
              n = 65536 + (((i - 55296) << 10) | (n - 56320));
            } else i && (e -= 3) > -1 && o.push(239, 191, 189);
            if (((i = null), n < 128)) {
              if ((e -= 1) < 0) break;
              o.push(n);
            } else if (n < 2048) {
              if ((e -= 2) < 0) break;
              o.push((n >> 6) | 192, (63 & n) | 128);
            } else if (n < 65536) {
              if ((e -= 3) < 0) break;
              o.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128);
            } else {
              if (!(n < 1114112)) throw new Error("Invalid code point");
              if ((e -= 4) < 0) break;
              o.push(
                (n >> 18) | 240,
                ((n >> 12) & 63) | 128,
                ((n >> 6) & 63) | 128,
                (63 & n) | 128
              );
            }
          }
          return o;
        }
        function N(t) {
          return r.toByteArray(
            (function (t) {
              if (
                (t = (function (t) {
                  return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
                })(t).replace(I, "")).length < 2
              )
                return "";
              for (; t.length % 4 != 0; ) t += "=";
              return t;
            })(t)
          );
        }
        function Y(t, e, n, r) {
          for (var i = 0; i < r && !(i + n >= e.length || i >= t.length); ++i)
            e[i + n] = t[i];
          return i;
        }
      }).call(this, n(9));
    },
    function (t, e) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (t) {
        "object" == typeof window && (n = window);
      }
      t.exports = n;
    },
    function (t, e, n) {
      "use strict";
      (e.byteLength = function (t) {
        var e = f(t),
          n = e[0],
          r = e[1];
        return (3 * (n + r)) / 4 - r;
      }),
        (e.toByteArray = function (t) {
          var e,
            n,
            r = f(t),
            u = r[0],
            a = r[1],
            s = new o(
              (function (t, e, n) {
                return (3 * (e + n)) / 4 - n;
              })(0, u, a)
            ),
            c = 0,
            h = a > 0 ? u - 4 : u;
          for (n = 0; n < h; n += 4)
            (e =
              (i[t.charCodeAt(n)] << 18) |
              (i[t.charCodeAt(n + 1)] << 12) |
              (i[t.charCodeAt(n + 2)] << 6) |
              i[t.charCodeAt(n + 3)]),
              (s[c++] = (e >> 16) & 255),
              (s[c++] = (e >> 8) & 255),
              (s[c++] = 255 & e);
          2 === a &&
            ((e = (i[t.charCodeAt(n)] << 2) | (i[t.charCodeAt(n + 1)] >> 4)),
            (s[c++] = 255 & e));
          1 === a &&
            ((e =
              (i[t.charCodeAt(n)] << 10) |
              (i[t.charCodeAt(n + 1)] << 4) |
              (i[t.charCodeAt(n + 2)] >> 2)),
            (s[c++] = (e >> 8) & 255),
            (s[c++] = 255 & e));
          return s;
        }),
        (e.fromByteArray = function (t) {
          for (
            var e, n = t.length, i = n % 3, o = [], u = 0, a = n - i;
            u < a;
            u += 16383
          )
            o.push(c(t, u, u + 16383 > a ? a : u + 16383));
          1 === i
            ? ((e = t[n - 1]), o.push(r[e >> 2] + r[(e << 4) & 63] + "=="))
            : 2 === i &&
              ((e = (t[n - 2] << 8) + t[n - 1]),
              o.push(r[e >> 10] + r[(e >> 4) & 63] + r[(e << 2) & 63] + "="));
          return o.join("");
        });
      for (
        var r = [],
          i = [],
          o = "undefined" != typeof Uint8Array ? Uint8Array : Array,
          u =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
          a = 0,
          s = u.length;
        a < s;
        ++a
      )
        (r[a] = u[a]), (i[u.charCodeAt(a)] = a);
      function f(t) {
        var e = t.length;
        if (e % 4 > 0)
          throw new Error("Invalid string. Length must be a multiple of 4");
        var n = t.indexOf("=");
        return -1 === n && (n = e), [n, n === e ? 0 : 4 - (n % 4)];
      }
      function c(t, e, n) {
        for (var i, o, u = [], a = e; a < n; a += 3)
          (i =
            ((t[a] << 16) & 16711680) +
            ((t[a + 1] << 8) & 65280) +
            (255 & t[a + 2])),
            u.push(
              r[((o = i) >> 18) & 63] +
                r[(o >> 12) & 63] +
                r[(o >> 6) & 63] +
                r[63 & o]
            );
        return u.join("");
      }
      (i["-".charCodeAt(0)] = 62), (i["_".charCodeAt(0)] = 63);
    },
    function (t, e) {
      (e.read = function (t, e, n, r, i) {
        var o,
          u,
          a = 8 * i - r - 1,
          s = (1 << a) - 1,
          f = s >> 1,
          c = -7,
          h = n ? i - 1 : 0,
          l = n ? -1 : 1,
          p = t[e + h];
        for (
          h += l, o = p & ((1 << -c) - 1), p >>= -c, c += a;
          c > 0;
          o = 256 * o + t[e + h], h += l, c -= 8
        );
        for (
          u = o & ((1 << -c) - 1), o >>= -c, c += r;
          c > 0;
          u = 256 * u + t[e + h], h += l, c -= 8
        );
        if (0 === o) o = 1 - f;
        else {
          if (o === s) return u ? NaN : (1 / 0) * (p ? -1 : 1);
          (u += Math.pow(2, r)), (o -= f);
        }
        return (p ? -1 : 1) * u * Math.pow(2, o - r);
      }),
        (e.write = function (t, e, n, r, i, o) {
          var u,
            a,
            s,
            f = 8 * o - i - 1,
            c = (1 << f) - 1,
            h = c >> 1,
            l = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
            p = r ? 0 : o - 1,
            v = r ? 1 : -1,
            d = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
          for (
            e = Math.abs(e),
              isNaN(e) || e === 1 / 0
                ? ((a = isNaN(e) ? 1 : 0), (u = c))
                : ((u = Math.floor(Math.log(e) / Math.LN2)),
                  e * (s = Math.pow(2, -u)) < 1 && (u--, (s *= 2)),
                  (e += u + h >= 1 ? l / s : l * Math.pow(2, 1 - h)) * s >= 2 &&
                    (u++, (s /= 2)),
                  u + h >= c
                    ? ((a = 0), (u = c))
                    : u + h >= 1
                    ? ((a = (e * s - 1) * Math.pow(2, i)), (u += h))
                    : ((a = e * Math.pow(2, h - 1) * Math.pow(2, i)), (u = 0)));
            i >= 8;
            t[n + p] = 255 & a, p += v, a /= 256, i -= 8
          );
          for (
            u = (u << i) | a, f += i;
            f > 0;
            t[n + p] = 255 & u, p += v, u /= 256, f -= 8
          );
          t[n + p - v] |= 128 * d;
        });
    },
    function (t, e) {
      var n = {}.toString;
      t.exports =
        Array.isArray ||
        function (t) {
          return "[object Array]" == n.call(t);
        };
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 });
      var r = !0,
        i = function () {
          var t =
            (window.location.hostname.match(/^.*?.([^.]*?.com)$/) || [])[1] ||
            "mihoyo.com";
          return {
            development: "https://devapi-takumi." + t + "/common/badge/v1",
            test: "https://devapi-takumi." + t + "/common/badge/v1",
            prerelease: "https://preapi-takumi." + t + "/common/badge/v1",
            production: "https://api-takumi." + t + "/common/badge/v1",
          };
        },
        o = (e.getParamByName = function (t) {
          var e = t.replace(/[\[\]]/g, "\\$&"),
            n = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)"),
            r = window.location.search,
            i = n.exec(r);
          if (i)
            return i[2] ? decodeURIComponent(i[2].replace(/\+/g, " ")) : "";
        }),
        u = function () {
          return "true" === o("mia_preload_track_stash");
        },
        a = function (t) {
          t.bbsApp.onWebViewWillAppear(function () {
            console.log("mihoyo-analysis: onWebViewWillAppear"), t.popStash();
          }),
            t.bbsApp.getIsAppearing().then(function (e) {
              e ||
                (console.log("mihoyo-analysis: getIsAppearing"),
                t.startStash());
            });
        };
      (e.initInstance = function (t) {
        var e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          o = e.Vue,
          s = e.dataBelong,
          f = void 0 === s ? [] : s,
          c = e.appId,
          h = e.router,
          l = e.needUid,
          p = e.env,
          v = e.isSea,
          d = void 0 !== v && v,
          y = e.debug,
          g = void 0 !== y && y,
          w = e.pagename,
          b = e.device_id,
          m = void 0 === b ? "" : b,
          x = e.pageExtrainfo,
          _ = e.userExtrainfo,
          A = e.eventExtrainfo,
          B = e.type,
          C = void 0 === B ? "tool" : B,
          E = e.autoTrackPageview,
          L = void 0 === E || E,
          S = e.setMiaToVue,
          P = void 0 === S || S,
          z = e.needSessionInfo,
          D = void 0 !== z && z,
          k = e.sessionInfoExpires,
          O = void 0 === k ? 1 / 48 : k,
          T = e.host,
          j = void 0 === T ? "" : T,
          q = e.lang,
          M = void 0 === q ? "" : q,
          I = e.useBeacon,
          R = void 0 !== I && I,
          U = o || window.Vue;
        if (
          !window.MIHOYO_ANALYSIS_LOGINEFFECT &&
          navigator &&
          navigator.userAgent.includes("miHoYoBBS/")
        ) {
          (window.MIHOYO_ANALYSIS_LOGINEFFECT = !0), n(14);
          var N = {
              test: "https://devapi-takumi.mihoyo.com/",
              production: "https://api-takumi.mihoyo.com/",
            },
            Y = i(),
            K = function () {
              var e = new XMLHttpRequest();
              e.withCredentials = !0;
              var n = N.production;
              ["development", "test", "sandbox"].includes(p || t.environment) &&
                (n = N.test),
                window.location.host.indexOf("miyoushe.com") >= 0 &&
                  (n = n.replace("mihoyo.com", "miyoushe.com")),
                (e.onreadystatechange = function () {
                  4 === e.readyState &&
                    200 === e.status &&
                    0 !== JSON.parse(e.responseText).retcode &&
                    U.prototype.$bbsApp.getCookieToken(!0).then(function () {
                      U.prototype.$bbsApp.toLogin();
                    });
                }),
                e.open(
                  "GET",
                  n + "auth/api/getUserAccountInfoByCookieToken",
                  !0
                ),
                e.send();
            };
          window.addEventListener("ajaxReadyStateChange", function (t) {
            try {
              var e = t.detail;
              if (
                Object.values(Y).some(function (t) {
                  return e.responseURL.indexOf(t) >= 0;
                })
              )
                return;
              if (4 === e.readyState && 200 === e.status) {
                var n = JSON.parse(e.responseText);
                if (!U) {
                  if (!window.Vue) return;
                  U = window.Vue;
                }
                [-100, 10001].includes(n.retcode) &&
                  U &&
                  U.prototype &&
                  U.prototype.$bbsApp &&
                  U.prototype.$bbsApp.getCookieInfo().then(function (t) {
                    var e = t.data;
                    e && e.ltoken && K();
                  });
              }
            } catch (t) {
              console.log(t);
            }
          });
        }
        if (!c) throw (console.error("请传入appId"), new Error("请传入appId"));
        if (!Array.isArray(f))
          throw (
            (console.error("dataBelong的类型为数组"),
            (t.data_belong = ""),
            new Error("dataBelong的类型为数组"))
          );
        return (
          (t.data_belong = f.join(",")),
          p && t.apis[p] && (t.environment = p),
          (d || t.isHostSea) &&
            "production" === t.environment &&
            (t.environment = "production.sea"),
          g && (t.environment = "test"),
          (d || t.isHostSea) &&
            "test" === t.environment &&
            (t.environment = "test.sea"),
          U && U.prototype && P && (U.prototype.$mia = t),
          (t.app_id = "" + c),
          (t.needUid = l || !1),
          (t.lang = M),
          (t.pagename = w),
          (t.pageExtrainfo = x),
          (t.userExtrainfo = _),
          (t.eventExtrainfo = A),
          (t.type = C),
          (t.device_id = m),
          (t.needSessionInfo = D),
          (t.sessionInfoExpires = O),
          (t.host = j),
          (t.bbsApp = U && U.prototype && U.prototype.$bbsApp),
          (t.useBeacon =
            R &&
            navigator &&
            navigator.sendBeacon &&
            "function" == typeof navigator.sendBeacon),
          u() && t.bbsApp && t.bbsApp.getIsAppearing && r && ((r = !1), a(t)),
          L &&
            (U
              ? h &&
                h.afterEach(function (e) {
                  var n = e || {},
                    r = (n.meta || {}).miaPagename;
                  (t.pageurl = n.path),
                    (t.pagename = r || n.name || n.path),
                    t.trackPageview();
                })
              : t.trackPageview()),
          t
        );
      }),
        (e.randomId = function () {
          var t =
              "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
                ""
              ),
            e = [],
            n = Math.random,
            r = void 0;
          (e[8] =
            e[13] =
            e[18] =
            e[23] =
            e[28] =
            e[33] =
            e[38] =
            e[43] =
            e[48] =
            e[53] =
            e[58] =
              "-"),
            (e[14] = "4");
          for (var i = 0; i < 64; i++)
            e[i] ||
              ((r = 0 | (16 * n())),
              (e[i] = t[19 === i ? (3 & r) | 8 : 15 & r]));
          return e.join("").toLowerCase();
        });
    },
    function (t, e, n) {
      "use strict";
      !(function () {
        if ("function" == typeof window.CustomEvent) return !1;
        function t(t, e) {
          e = e || { bubbles: !1, cancelable: !1, detail: void 0 };
          var n = document.createEvent("CustomEvent");
          return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n;
        }
        (t.prototype = window.Event.prototype), (window.CustomEvent = t);
      })(),
        (function () {
          function t(t) {
            var e = new CustomEvent(t, { detail: this });
            window.dispatchEvent(e);
          }
          var e = window.XMLHttpRequest;
          window.XMLHttpRequest = function () {
            var n = new e();
            n.addEventListener(
              "abort",
              function () {
                t.call(this, "ajaxAbort");
              },
              !1
            ),
              n.addEventListener(
                "error",
                function () {
                  t.call(this, "ajaxError");
                },
                !1
              ),
              n.addEventListener(
                "load",
                function () {
                  t.call(this, "ajaxLoad");
                },
                !1
              ),
              n.addEventListener(
                "loadstart",
                function () {
                  t.call(this, "ajaxLoadStart");
                },
                !1
              ),
              n.addEventListener(
                "progress",
                function () {
                  t.call(this, "ajaxProgress");
                },
                !1
              ),
              n.addEventListener(
                "timeout",
                function () {
                  t.call(this, "ajaxTimeout");
                },
                !1
              ),
              n.addEventListener(
                "loadend",
                function () {
                  t.call(this, "ajaxLoadEnd");
                },
                !1
              ),
              n.addEventListener(
                "readystatechange",
                function () {
                  t.call(this, "ajaxReadyStateChange");
                },
                !1
              );
            var r = n.send;
            n.send = function () {
              for (var e = arguments.length, i = Array(e), o = 0; o < e; o++)
                i[o] = arguments[o];
              r.apply(n, i), (n.body = i[0]), t.call(n, "ajaxSend");
            };
            var i = n.open;
            n.open = function () {
              for (var e = arguments.length, r = Array(e), o = 0; o < e; o++)
                r[o] = arguments[o];
              i.apply(n, r),
                (n.method = r[0]),
                (n.orignUrl = r[1]),
                (n.async = r[2]),
                t.call(n, "ajaxOpen");
            };
            var o = n.setRequestHeader;
            return (
              (n.requestHeader = {}),
              (n.setRequestHeader = function (t, e) {
                (n.requestHeader[t] = e), o.call(n, t, e);
              }),
              n
            );
          };
        })();
    },
    function (t, e, n) {
      "use strict";
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getDevice = e.getPlatform = e.PLATFORM = e.DEVICE = void 0);
      var r,
        i = n(16),
        o = (r = i) && r.__esModule ? r : { default: r };
      var u = (e.DEVICE = {
          UNKNOWN: "unknown",
          IOS: "ios",
          ANDROID: "android",
          WINDOWS: "windows",
          MACOS: "macos",
        }),
        a = (e.PLATFORM = { UNKNOWN: "unknown", BBS: "bbs" });
      (e.getPlatform = function () {
        return o.default.bbs() ? a.BBS : a.UNKNOWN;
      }),
        (e.getDevice = function () {
          return o.default.ios()
            ? u.IOS
            : o.default.android()
            ? u.ANDROID
            : o.default.macos()
            ? u.MACOS
            : o.default.isWindows()
            ? u.WINDOWS
            : u.UNKNOWN;
        });
    },
    function (t, e, n) {
      /*! Copyright © 2011 - 2023 miHoYo. All Rights Reserved */
      "undefined" != typeof self && self,
        (t.exports = (function () {
          "use strict";
          var t = {
              673: function (t, e, n) {
                function r(t) {
                  return (r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                function i(t, e) {
                  for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(t, u(r.key), r);
                  }
                }
                function o(t, e, n) {
                  return (
                    (e = u(e)) in t
                      ? Object.defineProperty(t, e, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (t[e] = n),
                    t
                  );
                }
                function u(t) {
                  var e = (function (t, e) {
                    if ("object" !== r(t) || null === t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                      var i = n.call(t, e);
                      if ("object" !== r(i)) return i;
                      throw new TypeError(
                        "@@toPrimitive must return a primitive value."
                      );
                    }
                    return String(t);
                  })(t, "string");
                  return "symbol" === r(e) ? e : String(e);
                }
                var a, s;
                n.d(e, {
                  default: function () {
                    return h;
                  },
                }),
                  (function (t) {
                    (t.desktop = "desktop"),
                      (t.tablet = "tablet"),
                      (t.mobile = "mobile");
                  })(a || (a = {})),
                  (function (t) {
                    (t.pc = "pc"),
                      (t.mobile = "mobile"),
                      (t.ps4 = "ps4"),
                      (t.ps5 = "ps5");
                  })(s || (s = {}));
                var f = [s.pc, s.mobile, s.ps4, s.ps5],
                  c = {
                    queryString: function (t, e) {
                      var n = t.replace(/[\[\]]/g, "\\$&"),
                        r = new RegExp(
                          "[?&]".concat(n, "(=([^&#]*)|&|#|$)")
                        ).exec(e);
                      return r
                        ? r[2]
                          ? decodeURIComponent(r[2].replace(/\+/g, " "))
                          : ""
                        : null;
                    },
                    formatParams: function (t) {
                      var e = t || {};
                      return Object.keys(e)
                        .reduce(function (t, n) {
                          return (
                            t.push(
                              ""
                                .concat(encodeURIComponent(n), "=")
                                .concat(encodeURIComponent(e[n]))
                            ),
                            t
                          );
                        }, [])
                        .join("&");
                    },
                    getType: function (t) {
                      return Object.prototype.toString
                        .call(t)
                        .slice(8, -1)
                        .toLowerCase();
                    },
                    isEmpty: function (t) {
                      var e = !0;
                      return (
                        t &&
                          "string" == typeof t &&
                          String(t).trim() &&
                          (e = !1),
                        e
                      );
                    },
                    dealStr: function (t, e) {
                      var n = String(t).trim() || "";
                      return "lower" === e
                        ? n.toLowerCase()
                        : "upper" === e
                        ? n.toUpperCase()
                        : n;
                    },
                    includes: function (t, e) {
                      return -1 !== t.indexOf(e);
                    },
                    find: function (t, e) {
                      return this.includes(e, t);
                    },
                    findIndex: function (t, e, n) {
                      for (var r = 0; r < t.length; r++) {
                        var i = t[r];
                        if (e.call(n, i, r, t)) return r;
                      }
                      return -1;
                    },
                  },
                  h = (function () {
                    function t(e) {
                      var n = e.window,
                        r = e.userAgent,
                        i = e.url,
                        u = e.language;
                      !(function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                        o(this, "userAgent", void 0),
                        o(this, "url", void 0),
                        o(this, "window", void 0),
                        o(this, "lang", void 0),
                        (this.userAgent = r.toLowerCase()),
                        (this.url = i),
                        (this.window = n),
                        (this.lang = u);
                    }
                    var e, r;
                    return (
                      (e = t),
                      (r = [
                        {
                          key: "mobile",
                          value: function () {
                            return (
                              "ios" === this.platform() ||
                              "android" === this.platform() ||
                              this.iphone() ||
                              this.iwatch() ||
                              this.ipod() ||
                              this.androidPhone() ||
                              this.blackberryPhone() ||
                              this.windowsPhone() ||
                              this.fxosPhone() ||
                              this.meego() ||
                              this.samsungPhone() ||
                              this.othersMobile()
                            );
                          },
                        },
                        {
                          key: "tablet",
                          value: function () {
                            return (
                              this.ipad() ||
                              this.androidTablet() ||
                              this.blackberryTablet() ||
                              this.windowsTablet() ||
                              this.fxosTablet() ||
                              this.samsungTablet()
                            );
                          },
                        },
                        {
                          key: "desktop",
                          value: function () {
                            var t = this;
                            return (
                              ["pc", "mac"].some(function (e) {
                                return e === t.platform();
                              }) ||
                              (!this.tablet() && !this.mobile())
                            );
                          },
                        },
                        {
                          key: "portrait",
                          value: function () {
                            var t = this.window;
                            return t
                              ? t.screen.orientation &&
                                Object.prototype.hasOwnProperty.call(
                                  t,
                                  "onorientationchange"
                                )
                                ? this.includes(
                                    t.screen.orientation.type,
                                    "portrait"
                                  )
                                : this.ios() &&
                                  Object.prototype.hasOwnProperty.call(
                                    t,
                                    "orientation"
                                  )
                                ? 90 !== Math.abs(t.orientation)
                                : t.innerHeight / t.innerWidth > 1
                              : "mobile" === this.getDeviceType();
                          },
                        },
                        {
                          key: "landscape",
                          value: function () {
                            var t = this.window;
                            return t
                              ? t.screen.orientation &&
                                Object.prototype.hasOwnProperty.call(
                                  t,
                                  "onorientationchange"
                                )
                                ? this.includes(
                                    t.screen.orientation.type,
                                    "landscape"
                                  )
                                : this.ios() &&
                                  Object.prototype.hasOwnProperty.call(
                                    t,
                                    "orientation"
                                  )
                                ? 90 === Math.abs(t.orientation)
                                : t.innerHeight / t.innerWidth < 1
                              : !this.portrait();
                          },
                        },
                        {
                          key: "getOrient",
                          value: function () {
                            return this.portrait()
                              ? "portrait"
                              : this.landscape()
                              ? "landscape"
                              : "";
                          },
                        },
                        {
                          key: "getDeviceEnd",
                          value: function () {
                            var t;
                            return (
                              this.desktop()
                                ? (t = a.desktop)
                                : this.tablet()
                                ? (t = a.tablet)
                                : this.mobile()
                                ? (t = a.mobile)
                                : console.warn("unknown device end"),
                              t
                            );
                          },
                        },
                        {
                          key: "getDeviceType",
                          value: function () {
                            var t = this.desktop()
                              ? s.pc
                              : this.tablet() || this.mobile()
                              ? s.mobile
                              : void 0;
                            if (!t) {
                              var e = c.dealStr(
                                this.queryString("device_type")
                              );
                              if (!c.isEmpty(e)) {
                                var n = c.findIndex(f, function (t) {
                                  return -1 !== e.search(t);
                                });
                                t = -1 !== n ? f[n] : void 0;
                              }
                              t || console.warn("unknown device type");
                            }
                            return t;
                          },
                        },
                        {
                          key: "platform",
                          value: function () {
                            return c.dealStr(
                              this.queryString("plat_type"),
                              "lower"
                            );
                          },
                        },
                        {
                          key: "trident",
                          value: function () {
                            return this.find("trident");
                          },
                        },
                        {
                          key: "presto",
                          value: function () {
                            return this.find("presto");
                          },
                        },
                        {
                          key: "webkit",
                          value: function () {
                            return this.find("applewebkit");
                          },
                        },
                        {
                          key: "gecko",
                          value: function () {
                            return this.find("gecko") && this.find("firefox");
                          },
                        },
                        {
                          key: "language",
                          value: function () {
                            return this.lang;
                          },
                        },
                        {
                          key: "isWindows",
                          value: function () {
                            return this.find("windows");
                          },
                        },
                        {
                          key: "windowsPhone",
                          value: function () {
                            return this.isWindows() && this.find("phone");
                          },
                        },
                        {
                          key: "windowsTablet",
                          value: function () {
                            return (
                              this.isWindows() &&
                              this.find("touch") &&
                              !this.windowsPhone()
                            );
                          },
                        },
                        {
                          key: "isNode",
                          value: function () {
                            return (
                              "undefined" == typeof window && void 0 !== n.g
                            );
                          },
                        },
                        {
                          key: "iphone",
                          value: function () {
                            return !this.isWindows() && this.find("iphone");
                          },
                        },
                        {
                          key: "iwatch",
                          value: function () {
                            return this.find("iwatch");
                          },
                        },
                        {
                          key: "ipod",
                          value: function () {
                            return this.find("ipod");
                          },
                        },
                        {
                          key: "ipad",
                          value: function () {
                            return (
                              this.find("ipad") ||
                              Boolean(
                                this.window &&
                                  "MacIntel" ===
                                    this.window.navigator.platform &&
                                  this.window.navigator.maxTouchPoints > 1
                              )
                            );
                          },
                        },
                        {
                          key: "macos",
                          value: function () {
                            return (
                              "mac" === this.platform() || this.find("mac")
                            );
                          },
                        },
                        {
                          key: "ios",
                          value: function () {
                            return (
                              "ios" === this.platform() ||
                              this.iphone() ||
                              this.iwatch() ||
                              this.ipod() ||
                              this.ipad()
                            );
                          },
                        },
                        {
                          key: "android",
                          value: function () {
                            return (
                              !this.isWindows() &&
                              ("android" === this.platform() ||
                                this.find("android"))
                            );
                          },
                        },
                        {
                          key: "androidPhone",
                          value: function () {
                            return this.android() && this.find("mobile");
                          },
                        },
                        {
                          key: "androidTablet",
                          value: function () {
                            return this.android() && !this.find("mobile");
                          },
                        },
                        {
                          key: "blackberry",
                          value: function () {
                            return this.find("blackberry") || this.find("bb10");
                          },
                        },
                        {
                          key: "blackberryPhone",
                          value: function () {
                            return this.blackberry() && !this.find("tablet");
                          },
                        },
                        {
                          key: "blackberryTablet",
                          value: function () {
                            return this.blackberry() && this.find("tablet");
                          },
                        },
                        {
                          key: "meego",
                          value: function () {
                            return this.find("meego");
                          },
                        },
                        {
                          key: "fxos",
                          value: function () {
                            return (
                              (this.find("(mobile") || this.find("(tablet")) &&
                              this.find(" rv:")
                            );
                          },
                        },
                        {
                          key: "fxosPhone",
                          value: function () {
                            return this.fxos() && this.find("mobile");
                          },
                        },
                        {
                          key: "fxosTablet",
                          value: function () {
                            return this.fxos() && this.find("tablet");
                          },
                        },
                        {
                          key: "mumu",
                          value: function () {
                            return (
                              this.find("mumu") || this.find("build/v417ir;wv")
                            );
                          },
                        },
                        {
                          key: "u3d",
                          value: function () {
                            return !!this.userAgent.match(/unity 3d/);
                          },
                        },
                        {
                          key: "ps",
                          value: function () {
                            return (
                              this.includes(this.platform(), "ps") ||
                              this.find("playstation")
                            );
                          },
                        },
                        {
                          key: "wxwork",
                          value: function () {
                            return this.find("wxwork");
                          },
                        },
                        {
                          key: "harmony",
                          value: function () {
                            return this.find("harmonyos");
                          },
                        },
                        {
                          key: "harmonyPhone",
                          value: function () {
                            return this.harmony() && this.find("mobile");
                          },
                        },
                        {
                          key: "bbs",
                          value: function () {
                            return this.find("mihoyobbs");
                          },
                        },
                        {
                          key: "game",
                          value: function () {
                            return this.find("mihoyo") && !this.bbs();
                          },
                        },
                        {
                          key: "wx",
                          value: function () {
                            return this.find("micromessenger");
                          },
                        },
                        {
                          key: "weibo",
                          value: function () {
                            return this.find("weibo");
                          },
                        },
                        {
                          key: "safari",
                          value: function () {
                            return (
                              this.find("safari") &&
                              !this.find("chrome") &&
                              !this.find("browser")
                            );
                          },
                        },
                        {
                          key: "edge",
                          value: function () {
                            return this.find("edge");
                          },
                        },
                        {
                          key: "qqb",
                          value: function () {
                            return this.find("mqqbrowser");
                          },
                        },
                        {
                          key: "samsungbrowser",
                          value: function () {
                            return this.find("samsungbrowser");
                          },
                        },
                        {
                          key: "samsungPhone",
                          value: function () {
                            return this.android() && this.find("sm-");
                          },
                        },
                        {
                          key: "samsungTablet",
                          value: function () {
                            return (
                              this.samsungbrowser() && !this.samsungPhone()
                            );
                          },
                        },
                        {
                          key: "othersMobile",
                          value: function () {
                            return !!this.userAgent.match(
                              /mobile|iemobile|mqqbrowser|juc|fennec|wosbrowser|browserng|webos|symbian|samsungbrowser|huaweibrowser/i
                            );
                          },
                        },
                        {
                          key: "includes",
                          value: function (t, e) {
                            return c.includes(t, e);
                          },
                        },
                        {
                          key: "find",
                          value: function (t) {
                            var e =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : null;
                            return e
                              ? c.includes(e, t)
                              : c.find(t, this.userAgent);
                          },
                        },
                        {
                          key: "queryString",
                          value: (function (t) {
                            function e(e) {
                              return t.apply(this, arguments);
                            }
                            return (
                              (e.toString = function () {
                                return t.toString();
                              }),
                              e
                            );
                          })(function (t) {
                            return c.queryString(t, this.url);
                          }),
                        },
                      ]) && i(e.prototype, r),
                      Object.defineProperty(e, "prototype", { writable: !1 }),
                      t
                    );
                  })();
              },
              572: function (t, e, n) {
                function r(t) {
                  return (r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                function i(t, e) {
                  return (i = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                        return (t.__proto__ = e), t;
                      })(t, e);
                }
                function o(t) {
                  var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (t) {
                      return !1;
                    }
                  })();
                  return function () {
                    var n,
                      r = a(t);
                    if (e) {
                      var i = a(this).constructor;
                      n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return u(this, n);
                  };
                }
                function u(t, e) {
                  if (e && ("object" === r(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                }
                function a(t) {
                  return (a = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
                }
                n.d(e, {
                  default: function () {
                    return s;
                  },
                });
                var s = (function (t) {
                  !(function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(t, "prototype", { writable: !1 }),
                      e && i(t, e);
                  })(r, t);
                  var e,
                    n = o(r);
                  function r() {
                    return (
                      (function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, r),
                      n.call(this, void 0)
                    );
                  }
                  return (
                    (e = r),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                })(n(793).default);
              },
              793: function (t, e, n) {
                function r(t) {
                  return (r =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        })(t);
                }
                function i(t, e) {
                  return (i = Object.setPrototypeOf
                    ? Object.setPrototypeOf.bind()
                    : function (t, e) {
                        return (t.__proto__ = e), t;
                      })(t, e);
                }
                function o(t) {
                  var e = (function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct)
                      return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                      return (
                        Boolean.prototype.valueOf.call(
                          Reflect.construct(Boolean, [], function () {})
                        ),
                        !0
                      );
                    } catch (t) {
                      return !1;
                    }
                  })();
                  return function () {
                    var n,
                      r = a(t);
                    if (e) {
                      var i = a(this).constructor;
                      n = Reflect.construct(r, arguments, i);
                    } else n = r.apply(this, arguments);
                    return u(this, n);
                  };
                }
                function u(t, e) {
                  if (e && ("object" === r(e) || "function" == typeof e))
                    return e;
                  if (void 0 !== e)
                    throw new TypeError(
                      "Derived constructors may only return object or undefined"
                    );
                  return (function (t) {
                    if (void 0 === t)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return t;
                  })(t);
                }
                function a(t) {
                  return (a = Object.setPrototypeOf
                    ? Object.getPrototypeOf.bind()
                    : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                      })(t);
                }
                n.d(e, {
                  default: function () {
                    return s;
                  },
                });
                var s = (function (t) {
                  !(function (t, e) {
                    if ("function" != typeof e && null !== e)
                      throw new TypeError(
                        "Super expression must either be null or a function"
                      );
                    (t.prototype = Object.create(e && e.prototype, {
                      constructor: { value: t, writable: !0, configurable: !0 },
                    })),
                      Object.defineProperty(t, "prototype", { writable: !1 }),
                      e && i(t, e);
                  })(r, t);
                  var e,
                    n = o(r);
                  function r(t) {
                    var e;
                    if (
                      ((function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, r),
                      t)
                    ) {
                      var i = t.headers,
                        o = t.url || "",
                        a = i["user-agent"] || "",
                        s = i["accept-language"] || "",
                        f = /([a-z0-9_-]+)(\s|,|;|$)/i.exec(s),
                        c = ((f && f[1]) || "").toLowerCase();
                      e = n.call(this, { url: o, userAgent: a, language: c });
                    } else {
                      if ("undefined" == typeof window)
                        throw new TypeError(
                          'The "req" parameter is required on the server side'
                        );
                      e = n.call(this, {
                        window: window,
                        url: window.location.href,
                        userAgent: window.navigator.userAgent,
                        language: (
                          navigator.browserLanguage || window.navigator.language
                        ).toLowerCase(),
                      });
                    }
                    return u(e);
                  }
                  return (
                    (e = r),
                    Object.defineProperty(e, "prototype", { writable: !1 }),
                    e
                  );
                })(n(673).default);
              },
            },
            e = {};
          function n(r) {
            var i = e[r];
            if (void 0 !== i) return i.exports;
            var o = (e[r] = { exports: {} });
            return t[r](o, o.exports, n), o.exports;
          }
          (n.d = function (t, e) {
            for (var r in e)
              n.o(e, r) &&
                !n.o(t, r) &&
                Object.defineProperty(t, r, { enumerable: !0, get: e[r] });
          }),
            (n.g = (function () {
              if ("object" == typeof globalThis) return globalThis;
              try {
                return this || new Function("return this")();
              } catch (t) {
                if ("object" == typeof window) return window;
              }
            })()),
            (n.o = function (t, e) {
              return Object.prototype.hasOwnProperty.call(t, e);
            });
          var r,
            i = {};
          return (r = n(572)), (i.default = new r.default()), i.default;
        })());
    },
  ]).default;
});
