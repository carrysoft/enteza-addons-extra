/**
 * vis.js
 * https://github.com/almende/vis
 *
 * A dynamic, browser-based visualization library.
 *
 * @version 4.20.1
 * @date    2017-07-02
 *
 * @license
 * Copyright (C) 2011-2017 Almende B.V, http://almende.com
 *
 * Vis.js is dual licensed under both
 *
 * * The Apache 2.0 License
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * and
 *
 * * The MIT License
 *   http://opensource.org/licenses/MIT
 *
 * Vis.js may be distributed under either license.
 */
"use strict";
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
    ? define([], e)
    : "object" == typeof exports
    ? (exports.vis = e())
    : (t.vis = e());
})(this, function () {
  return (function (t) {
    function e(o) {
      if (i[o]) return i[o].exports;
      var n = (i[o] = {exports: {}, id: o, loaded: !1});
      return t[o].call(n.exports, n, n.exports, e), (n.loaded = !0), n.exports;
    }
    var i = {};
    return (e.m = t), (e.c = i), (e.p = ""), e(0);
  })([
    function (t, e, i) {
      (e.util = i(1)),
        (e.DOMutil = i(87)),
        (e.DataSet = i(88)),
        (e.DataView = i(92)),
        (e.Queue = i(91)),
        (e.Timeline = i(93)),
        (e.Graph2d = i(129)),
        (e.timeline = {
          Core: i(102),
          DateUtil: i(101),
          Range: i(98),
          stack: i(106),
          TimeStep: i(104),
          components: {
            items: {
              Item: i(108),
              BackgroundItem: i(112),
              BoxItem: i(110),
              PointItem: i(111),
              RangeItem: i(107),
            },
            BackgroundGroup: i(109),
            Component: i(100),
            CurrentTime: i(124),
            CustomTime: i(122),
            DataAxis: i(131),
            DataScale: i(132),
            GraphGroup: i(133),
            Group: i(105),
            ItemSet: i(103),
            Legend: i(137),
            LineGraph: i(130),
            TimeAxis: i(119),
          },
        }),
        (e.moment = i(82)),
        (e.Hammer = i(95)),
        (e.keycharm = i(121));
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      var n = i(2),
        s = o(n),
        r = i(55),
        a = o(r),
        h = i(58),
        d = o(h),
        l = i(62),
        u = o(l),
        p = i(82),
        c = i(86);
      (e.isNumber = function (t) {
        return t instanceof Number || "number" == typeof t;
      }),
        (e.recursiveDOMDelete = function (t) {
          if (t)
            for (; t.hasChildNodes() === !0; )
              e.recursiveDOMDelete(t.firstChild), t.removeChild(t.firstChild);
        }),
        (e.giveRange = function (t, e, i, o) {
          if (e == t) return 0.5;
          var n = 1 / (e - t);
          return Math.max(0, (o - t) * n);
        }),
        (e.isString = function (t) {
          return t instanceof String || "string" == typeof t;
        }),
        (e.isDate = function (t) {
          if (t instanceof Date) return !0;
          if (e.isString(t)) {
            var i = f.exec(t);
            if (i) return !0;
            if (!isNaN(Date.parse(t))) return !0;
          }
          return !1;
        }),
        (e.randomUUID = function () {
          return c.v4();
        }),
        (e.assignAllKeys = function (t, e) {
          for (var i in t)
            t.hasOwnProperty(i) && "object" !== (0, u.default)(t[i]) && (t[i] = e);
        }),
        (e.fillIfDefined = function (t, i) {
          var o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          for (var n in t)
            void 0 !== i[n] &&
              ("object" !== (0, u.default)(i[n])
                ? (void 0 !== i[n] && null !== i[n]) || void 0 === t[n] || o !== !0
                  ? (t[n] = i[n])
                  : delete t[n]
                : "object" === (0, u.default)(t[n]) && e.fillIfDefined(t[n], i[n], o));
        }),
        (e.protoExtend = function (t, e) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var n in o) t[n] = o[n];
          }
          return t;
        }),
        (e.extend = function (t, e) {
          for (var i = 1; i < arguments.length; i++) {
            var o = arguments[i];
            for (var n in o) o.hasOwnProperty(n) && (t[n] = o[n]);
          }
          return t;
        }),
        (e.selectiveExtend = function (t, e, i) {
          if (!Array.isArray(t))
            throw new Error("Array with property names expected as first argument");
          for (var o = 2; o < arguments.length; o++)
            for (var n = arguments[o], s = 0; s < t.length; s++) {
              var r = t[s];
              n && n.hasOwnProperty(r) && (e[r] = n[r]);
            }
          return e;
        }),
        (e.selectiveDeepExtend = function (t, i, o) {
          var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (Array.isArray(o))
            throw new TypeError("Arrays are not supported by deepExtend");
          for (var s = 2; s < arguments.length; s++)
            for (var r = arguments[s], a = 0; a < t.length; a++) {
              var h = t[a];
              if (r.hasOwnProperty(h))
                if (o[h] && o[h].constructor === Object)
                  void 0 === i[h] && (i[h] = {}),
                    i[h].constructor === Object
                      ? e.deepExtend(i[h], o[h], !1, n)
                      : null === o[h] && void 0 !== i[h] && n === !0
                      ? delete i[h]
                      : (i[h] = o[h]);
                else {
                  if (Array.isArray(o[h]))
                    throw new TypeError("Arrays are not supported by deepExtend");
                  null === o[h] && void 0 !== i[h] && n === !0
                    ? delete i[h]
                    : (i[h] = o[h]);
                }
            }
          return i;
        }),
        (e.selectiveNotDeepExtend = function (t, i, o) {
          var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          if (Array.isArray(o))
            throw new TypeError("Arrays are not supported by deepExtend");
          for (var s in o)
            if (o.hasOwnProperty(s) && t.indexOf(s) == -1)
              if (o[s] && o[s].constructor === Object)
                void 0 === i[s] && (i[s] = {}),
                  i[s].constructor === Object
                    ? e.deepExtend(i[s], o[s])
                    : null === o[s] && void 0 !== i[s] && n === !0
                    ? delete i[s]
                    : (i[s] = o[s]);
              else if (Array.isArray(o[s])) {
                i[s] = [];
                for (var r = 0; r < o[s].length; r++) i[s].push(o[s][r]);
              } else
                null === o[s] && void 0 !== i[s] && n === !0
                  ? delete i[s]
                  : (i[s] = o[s]);
          return i;
        }),
        (e.deepExtend = function (t, i, o, n) {
          for (var s in i)
            if (i.hasOwnProperty(s) || o === !0)
              if (i[s] && i[s].constructor === Object)
                void 0 === t[s] && (t[s] = {}),
                  t[s].constructor === Object
                    ? e.deepExtend(t[s], i[s], o)
                    : null === i[s] && void 0 !== t[s] && n === !0
                    ? delete t[s]
                    : (t[s] = i[s]);
              else if (Array.isArray(i[s])) {
                t[s] = [];
                for (var r = 0; r < i[s].length; r++) t[s].push(i[s][r]);
              } else
                null === i[s] && void 0 !== t[s] && n === !0
                  ? delete t[s]
                  : (t[s] = i[s]);
          return t;
        }),
        (e.equalArray = function (t, e) {
          if (t.length != e.length) return !1;
          for (var i = 0, o = t.length; i < o; i++) if (t[i] != e[i]) return !1;
          return !0;
        }),
        (e.convert = function (t, i) {
          var o;
          if (void 0 !== t) {
            if (null === t) return null;
            if (!i) return t;
            if ("string" != typeof i && !(i instanceof String))
              throw new Error("Type must be a string");
            switch (i) {
              case "boolean":
              case "Boolean":
                return Boolean(t);
              case "number":
              case "Number":
                return e.isString(t) && !isNaN(Date.parse(t))
                  ? p(t).valueOf()
                  : Number(t.valueOf());
              case "string":
              case "String":
                return String(t);
              case "Date":
                if (e.isNumber(t)) return new Date(t);
                if (t instanceof Date) return new Date(t.valueOf());
                if (p.isMoment(t)) return new Date(t.valueOf());
                if (e.isString(t))
                  return (
                    (o = f.exec(t)),
                    o ? new Date(Number(o[1])) : p(new Date(t)).toDate()
                  );
                throw new Error(
                  "Cannot convert object of type " + e.getType(t) + " to type Date"
                );
              case "Moment":
                if (e.isNumber(t)) return p(t);
                if (t instanceof Date) return p(t.valueOf());
                if (p.isMoment(t)) return p(t);
                if (e.isString(t)) return (o = f.exec(t)), p(o ? Number(o[1]) : t);
                throw new Error(
                  "Cannot convert object of type " + e.getType(t) + " to type Date"
                );
              case "ISODate":
                if (e.isNumber(t)) return new Date(t);
                if (t instanceof Date) return t.toISOString();
                if (p.isMoment(t)) return t.toDate().toISOString();
                if (e.isString(t))
                  return (
                    (o = f.exec(t)),
                    o ? new Date(Number(o[1])).toISOString() : p(t).format()
                  );
                throw new Error(
                  "Cannot convert object of type " + e.getType(t) + " to type ISODate"
                );
              case "ASPDate":
                if (e.isNumber(t)) return "/Date(" + t + ")/";
                if (t instanceof Date) return "/Date(" + t.valueOf() + ")/";
                if (e.isString(t)) {
                  o = f.exec(t);
                  var n;
                  return (
                    (n = o ? new Date(Number(o[1])).valueOf() : new Date(t).valueOf()),
                    "/Date(" + n + ")/"
                  );
                }
                throw new Error(
                  "Cannot convert object of type " + e.getType(t) + " to type ASPDate"
                );
              default:
                throw new Error('Unknown type "' + i + '"');
            }
          }
        });
      var f = /^\/?Date\((\-?\d+)/i;
      (e.getType = function (t) {
        var e = "undefined" == typeof t ? "undefined" : (0, u.default)(t);
        return "object" == e
          ? null === t
            ? "null"
            : t instanceof Boolean
            ? "Boolean"
            : t instanceof Number
            ? "Number"
            : t instanceof String
            ? "String"
            : Array.isArray(t)
            ? "Array"
            : t instanceof Date
            ? "Date"
            : "Object"
          : "number" == e
          ? "Number"
          : "boolean" == e
          ? "Boolean"
          : "string" == e
          ? "String"
          : void 0 === e
          ? "undefined"
          : e;
      }),
        (e.copyAndExtendArray = function (t, e) {
          for (var i = [], o = 0; o < t.length; o++) i.push(t[o]);
          return i.push(e), i;
        }),
        (e.copyArray = function (t) {
          for (var e = [], i = 0; i < t.length; i++) e.push(t[i]);
          return e;
        }),
        (e.getAbsoluteLeft = function (t) {
          return t.getBoundingClientRect().left;
        }),
        (e.getAbsoluteRight = function (t) {
          return t.getBoundingClientRect().right;
        }),
        (e.getAbsoluteTop = function (t) {
          return t.getBoundingClientRect().top;
        }),
        (e.addClassName = function (t, e) {
          var i = t.className.split(" "),
            o = e.split(" ");
          (i = i.concat(
            o.filter(function (t) {
              return i.indexOf(t) < 0;
            })
          )),
            (t.className = i.join(" "));
        }),
        (e.removeClassName = function (t, e) {
          var i = t.className.split(" "),
            o = e.split(" ");
          (i = i.filter(function (t) {
            return o.indexOf(t) < 0;
          })),
            (t.className = i.join(" "));
        }),
        (e.forEach = function (t, e) {
          var i, o;
          if (Array.isArray(t)) for (i = 0, o = t.length; i < o; i++) e(t[i], i, t);
          else for (i in t) t.hasOwnProperty(i) && e(t[i], i, t);
        }),
        (e.toArray = function (t) {
          var e = [];
          for (var i in t) t.hasOwnProperty(i) && e.push(t[i]);
          return e;
        }),
        (e.updateProperty = function (t, e, i) {
          return t[e] !== i && ((t[e] = i), !0);
        }),
        (e.throttle = function (t) {
          var e = !1;
          return function () {
            e ||
              ((e = !0),
              requestAnimationFrame(function () {
                (e = !1), t();
              }));
          };
        }),
        (e.addEventListener = function (t, e, i, o) {
          t.addEventListener
            ? (void 0 === o && (o = !1),
              "mousewheel" === e &&
                navigator.userAgent.indexOf("Firefox") >= 0 &&
                (e = "DOMMouseScroll"),
              t.addEventListener(e, i, o))
            : t.attachEvent("on" + e, i);
        }),
        (e.removeEventListener = function (t, e, i, o) {
          t.removeEventListener
            ? (void 0 === o && (o = !1),
              "mousewheel" === e &&
                navigator.userAgent.indexOf("Firefox") >= 0 &&
                (e = "DOMMouseScroll"),
              t.removeEventListener(e, i, o))
            : t.detachEvent("on" + e, i);
        }),
        (e.preventDefault = function (t) {
          t || (t = window.event),
            t.preventDefault ? t.preventDefault() : (t.returnValue = !1);
        }),
        (e.getTarget = function (t) {
          t || (t = window.event);
          var e;
          return (
            t.target ? (e = t.target) : t.srcElement && (e = t.srcElement),
            void 0 != e.nodeType && 3 == e.nodeType && (e = e.parentNode),
            e
          );
        }),
        (e.hasParent = function (t, e) {
          for (var i = t; i; ) {
            if (i === e) return !0;
            i = i.parentNode;
          }
          return !1;
        }),
        (e.option = {}),
        (e.option.asBoolean = function (t, e) {
          return "function" == typeof t && (t = t()), null != t ? 0 != t : e || null;
        }),
        (e.option.asNumber = function (t, e) {
          return (
            "function" == typeof t && (t = t()),
            null != t ? Number(t) || e || null : e || null
          );
        }),
        (e.option.asString = function (t, e) {
          return "function" == typeof t && (t = t()), null != t ? String(t) : e || null;
        }),
        (e.option.asSize = function (t, i) {
          return (
            "function" == typeof t && (t = t()),
            e.isString(t) ? t : e.isNumber(t) ? t + "px" : i || null
          );
        }),
        (e.option.asElement = function (t, e) {
          return "function" == typeof t && (t = t()), t || e || null;
        }),
        (e.hexToRGB = function (t) {
          var e = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
          t = t.replace(e, function (t, e, i, o) {
            return e + e + i + i + o + o;
          });
          var i = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
          return i
            ? {r: parseInt(i[1], 16), g: parseInt(i[2], 16), b: parseInt(i[3], 16)}
            : null;
        }),
        (e.overrideOpacity = function (t, i) {
          if (t.indexOf("rgba") != -1) return t;
          if (t.indexOf("rgb") != -1) {
            var o = t
              .substr(t.indexOf("(") + 1)
              .replace(")", "")
              .split(",");
            return "rgba(" + o[0] + "," + o[1] + "," + o[2] + "," + i + ")";
          }
          var o = e.hexToRGB(t);
          return null == o ? t : "rgba(" + o.r + "," + o.g + "," + o.b + "," + i + ")";
        }),
        (e.RGBToHex = function (t, e, i) {
          return "#" + ((1 << 24) + (t << 16) + (e << 8) + i).toString(16).slice(1);
        }),
        (e.parseColor = function (t) {
          var i;
          if (e.isString(t) === !0) {
            if (e.isValidRGB(t) === !0) {
              var o = t
                .substr(4)
                .substr(0, t.length - 5)
                .split(",")
                .map(function (t) {
                  return parseInt(t);
                });
              t = e.RGBToHex(o[0], o[1], o[2]);
            }
            if (e.isValidHex(t) === !0) {
              var n = e.hexToHSV(t),
                s = {h: n.h, s: 0.8 * n.s, v: Math.min(1, 1.02 * n.v)},
                r = {h: n.h, s: Math.min(1, 1.25 * n.s), v: 0.8 * n.v},
                a = e.HSVToHex(r.h, r.s, r.v),
                h = e.HSVToHex(s.h, s.s, s.v);
              i = {
                background: t,
                border: a,
                highlight: {background: h, border: a},
                hover: {background: h, border: a},
              };
            } else
              i = {
                background: t,
                border: t,
                highlight: {background: t, border: t},
                hover: {background: t, border: t},
              };
          } else
            (i = {}),
              (i.background = t.background || void 0),
              (i.border = t.border || void 0),
              e.isString(t.highlight)
                ? (i.highlight = {border: t.highlight, background: t.highlight})
                : ((i.highlight = {}),
                  (i.highlight.background =
                    (t.highlight && t.highlight.background) || void 0),
                  (i.highlight.border = (t.highlight && t.highlight.border) || void 0)),
              e.isString(t.hover)
                ? (i.hover = {border: t.hover, background: t.hover})
                : ((i.hover = {}),
                  (i.hover.background = (t.hover && t.hover.background) || void 0),
                  (i.hover.border = (t.hover && t.hover.border) || void 0));
          return i;
        }),
        (e.RGBToHSV = function (t, e, i) {
          (t /= 255), (e /= 255), (i /= 255);
          var o = Math.min(t, Math.min(e, i)),
            n = Math.max(t, Math.max(e, i));
          if (o == n) return {h: 0, s: 0, v: o};
          var s = t == o ? e - i : i == o ? t - e : i - t,
            r = t == o ? 3 : i == o ? 1 : 5,
            a = (60 * (r - s / (n - o))) / 360,
            h = (n - o) / n,
            d = n;
          return {h: a, s: h, v: d};
        });
      var m = {
        split: function (t) {
          var e = {};
          return (
            t.split(";").forEach(function (t) {
              if ("" != t.trim()) {
                var i = t.split(":"),
                  o = i[0].trim(),
                  n = i[1].trim();
                e[o] = n;
              }
            }),
            e
          );
        },
        join: function (t) {
          return (0, d.default)(t)
            .map(function (e) {
              return e + ": " + t[e];
            })
            .join("; ");
        },
      };
      (e.addCssText = function (t, i) {
        var o = m.split(t.style.cssText),
          n = m.split(i),
          s = e.extend(o, n);
        t.style.cssText = m.join(s);
      }),
        (e.removeCssText = function (t, e) {
          var i = m.split(t.style.cssText),
            o = m.split(e);
          for (var n in o) o.hasOwnProperty(n) && delete i[n];
          t.style.cssText = m.join(i);
        }),
        (e.HSVToRGB = function (t, e, i) {
          var o,
            n,
            s,
            r = Math.floor(6 * t),
            a = 6 * t - r,
            h = i * (1 - e),
            d = i * (1 - a * e),
            l = i * (1 - (1 - a) * e);
          switch (r % 6) {
            case 0:
              (o = i), (n = l), (s = h);
              break;
            case 1:
              (o = d), (n = i), (s = h);
              break;
            case 2:
              (o = h), (n = i), (s = l);
              break;
            case 3:
              (o = h), (n = d), (s = i);
              break;
            case 4:
              (o = l), (n = h), (s = i);
              break;
            case 5:
              (o = i), (n = h), (s = d);
          }
          return {
            r: Math.floor(255 * o),
            g: Math.floor(255 * n),
            b: Math.floor(255 * s),
          };
        }),
        (e.HSVToHex = function (t, i, o) {
          var n = e.HSVToRGB(t, i, o);
          return e.RGBToHex(n.r, n.g, n.b);
        }),
        (e.hexToHSV = function (t) {
          var i = e.hexToRGB(t);
          return e.RGBToHSV(i.r, i.g, i.b);
        }),
        (e.isValidHex = function (t) {
          var e = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t);
          return e;
        }),
        (e.isValidRGB = function (t) {
          t = t.replace(" ", "");
          var e = /rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)/i.test(t);
          return e;
        }),
        (e.isValidRGBA = function (t) {
          t = t.replace(" ", "");
          var e = /rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(.{1,3})\)/i.test(t);
          return e;
        }),
        (e.selectiveBridgeObject = function (t, i) {
          if ("object" == ("undefined" == typeof i ? "undefined" : (0, u.default)(i))) {
            for (var o = (0, a.default)(i), n = 0; n < t.length; n++)
              i.hasOwnProperty(t[n]) &&
                "object" == (0, u.default)(i[t[n]]) &&
                (o[t[n]] = e.bridgeObject(i[t[n]]));
            return o;
          }
          return null;
        }),
        (e.bridgeObject = function (t) {
          if ("object" == ("undefined" == typeof t ? "undefined" : (0, u.default)(t))) {
            var i = (0, a.default)(t);
            for (var o in t)
              t.hasOwnProperty(o) &&
                "object" == (0, u.default)(t[o]) &&
                (i[o] = e.bridgeObject(t[o]));
            return i;
          }
          return null;
        }),
        (e.insertSort = function (t, e) {
          for (var i = 0; i < t.length; i++) {
            for (var o = t[i], n = i; n > 0 && e(o, t[n - 1]) < 0; n--) t[n] = t[n - 1];
            t[n] = o;
          }
          return t;
        }),
        (e.mergeOptions = function (t, e, i) {
          var o =
            (arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {});
          if (null === e[i]) t[i] = (0, a.default)(o[i]);
          else if (void 0 !== e[i])
            if ("boolean" == typeof e[i]) t[i].enabled = e[i];
            else {
              void 0 === e[i].enabled && (t[i].enabled = !0);
              for (var n in e[i]) e[i].hasOwnProperty(n) && (t[i][n] = e[i][n]);
            }
        }),
        (e.binarySearchCustom = function (t, e, i, o) {
          for (var n = 1e4, s = 0, r = 0, a = t.length - 1; r <= a && s < n; ) {
            var h = Math.floor((r + a) / 2),
              d = t[h],
              l = void 0 === o ? d[i] : d[i][o],
              u = e(l);
            if (0 == u) return h;
            u == -1 ? (r = h + 1) : (a = h - 1), s++;
          }
          return -1;
        }),
        (e.binarySearchValue = function (t, e, i, o, n) {
          for (
            var s,
              r,
              a,
              h,
              d = 1e4,
              l = 0,
              u = 0,
              p = t.length - 1,
              n =
                void 0 != n
                  ? n
                  : function (t, e) {
                      return t == e ? 0 : t < e ? -1 : 1;
                    };
            u <= p && l < d;

          ) {
            if (
              ((h = Math.floor(0.5 * (p + u))),
              (s = t[Math.max(0, h - 1)][i]),
              (r = t[h][i]),
              (a = t[Math.min(t.length - 1, h + 1)][i]),
              0 == n(r, e))
            )
              return h;
            if (n(s, e) < 0 && n(r, e) > 0)
              return "before" == o ? Math.max(0, h - 1) : h;
            if (n(r, e) < 0 && n(a, e) > 0)
              return "before" == o ? h : Math.min(t.length - 1, h + 1);
            n(r, e) < 0 ? (u = h + 1) : (p = h - 1), l++;
          }
          return -1;
        }),
        (e.easingFunctions = {
          linear: function (t) {
            return t;
          },
          easeInQuad: function (t) {
            return t * t;
          },
          easeOutQuad: function (t) {
            return t * (2 - t);
          },
          easeInOutQuad: function (t) {
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
          },
          easeInCubic: function (t) {
            return t * t * t;
          },
          easeOutCubic: function (t) {
            return --t * t * t + 1;
          },
          easeInOutCubic: function (t) {
            return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
          },
          easeInQuart: function (t) {
            return t * t * t * t;
          },
          easeOutQuart: function (t) {
            return 1 - --t * t * t * t;
          },
          easeInOutQuart: function (t) {
            return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
          },
          easeInQuint: function (t) {
            return t * t * t * t * t;
          },
          easeOutQuint: function (t) {
            return 1 + --t * t * t * t * t;
          },
          easeInOutQuint: function (t) {
            return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
          },
        }),
        (e.getScrollBarWidth = function () {
          var t = document.createElement("p");
          (t.style.width = "100%"), (t.style.height = "200px");
          var e = document.createElement("div");
          (e.style.position = "absolute"),
            (e.style.top = "0px"),
            (e.style.left = "0px"),
            (e.style.visibility = "hidden"),
            (e.style.width = "200px"),
            (e.style.height = "150px"),
            (e.style.overflow = "hidden"),
            e.appendChild(t),
            document.body.appendChild(e);
          var i = t.offsetWidth;
          e.style.overflow = "scroll";
          var o = t.offsetWidth;
          return i == o && (o = e.clientWidth), document.body.removeChild(e), i - o;
        }),
        (e.topMost = function (t, e) {
          var i = void 0;
          Array.isArray(e) || (e = [e]);
          var o = !0,
            n = !1,
            r = void 0;
          try {
            for (var a, h = (0, s.default)(t); !(o = (a = h.next()).done); o = !0) {
              var d = a.value;
              if (d) {
                i = d[e[0]];
                for (var l = 1; l < e.length; l++) i && (i = i[e[l]]);
                if ("undefined" != typeof i) break;
              }
            }
          } catch (t) {
            (n = !0), (r = t);
          } finally {
            try {
              !o && h.return && h.return();
            } finally {
              if (n) throw r;
            }
          }
          return i;
        });
    },
    function (t, e, i) {
      t.exports = {default: i(3), __esModule: !0};
    },
    function (t, e, i) {
      i(4), i(50), (t.exports = i(52));
    },
    function (t, e, i) {
      i(5);
      for (
        var o = i(16),
          n = i(20),
          s = i(8),
          r = i(47)("toStringTag"),
          a = [
            "NodeList",
            "DOMTokenList",
            "MediaList",
            "StyleSheetList",
            "CSSRuleList",
          ],
          h = 0;
        h < 5;
        h++
      ) {
        var d = a[h],
          l = o[d],
          u = l && l.prototype;
        u && !u[r] && n(u, r, d), (s[d] = s.Array);
      }
    },
    function (t, e, i) {
      var o = i(6),
        n = i(7),
        s = i(8),
        r = i(9);
      (t.exports = i(13)(
        Array,
        "Array",
        function (t, e) {
          (this._t = r(t)), (this._i = 0), (this._k = e);
        },
        function () {
          var t = this._t,
            e = this._k,
            i = this._i++;
          return !t || i >= t.length
            ? ((this._t = void 0), n(1))
            : "keys" == e
            ? n(0, i)
            : "values" == e
            ? n(0, t[i])
            : n(0, [i, t[i]]);
        },
        "values"
      )),
        (s.Arguments = s.Array),
        o("keys"),
        o("values"),
        o("entries");
    },
    function (t, e) {
      t.exports = function () {};
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {value: e, done: !!t};
      };
    },
    function (t, e) {
      t.exports = {};
    },
    function (t, e, i) {
      var o = i(10),
        n = i(12);
      t.exports = function (t) {
        return o(n(t));
      };
    },
    function (t, e, i) {
      var o = i(11);
      t.exports = Object("z").propertyIsEnumerable(0)
        ? Object
        : function (t) {
            return "String" == o(t) ? t.split("") : Object(t);
          };
    },
    function (t, e) {
      var i = {}.toString;
      t.exports = function (t) {
        return i.call(t).slice(8, -1);
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if (void 0 == t) throw TypeError("Can't call method on  " + t);
        return t;
      };
    },
    function (t, e, i) {
      var o = i(14),
        n = i(15),
        s = i(30),
        r = i(20),
        a = i(31),
        h = i(8),
        d = i(32),
        l = i(46),
        u = i(48),
        p = i(47)("iterator"),
        c = !([].keys && "next" in [].keys()),
        f = "@@iterator",
        m = "keys",
        g = "values",
        v = function () {
          return this;
        };
      t.exports = function (t, e, i, y, b, _, w) {
        d(i, e, y);
        var x,
          D,
          S,
          k = function (t) {
            if (!c && t in O) return O[t];
            switch (t) {
              case m:
                return function () {
                  return new i(this, t);
                };
              case g:
                return function () {
                  return new i(this, t);
                };
            }
            return function () {
              return new i(this, t);
            };
          },
          T = e + " Iterator",
          C = b == g,
          M = !1,
          O = t.prototype,
          E = O[p] || O[f] || (b && O[b]),
          P = E || k(b),
          N = b ? (C ? k("entries") : P) : void 0,
          A = "Array" == e ? O.entries || E : E;
        if (
          (A &&
            ((S = u(A.call(new t()))),
            S !== Object.prototype && (l(S, T, !0), o || a(S, p) || r(S, p, v))),
          C &&
            E &&
            E.name !== g &&
            ((M = !0),
            (P = function () {
              return E.call(this);
            })),
          (o && !w) || (!c && !M && O[p]) || r(O, p, P),
          (h[e] = P),
          (h[T] = v),
          b)
        )
          if (((x = {values: C ? P : k(g), keys: _ ? P : k(m), entries: N}), w))
            for (D in x) D in O || s(O, D, x[D]);
          else n(n.P + n.F * (c || M), e, x);
        return x;
      };
    },
    function (t, e) {
      t.exports = !0;
    },
    function (t, e, i) {
      var o = i(16),
        n = i(17),
        s = i(18),
        r = i(20),
        a = "prototype",
        h = function (t, e, i) {
          var d,
            l,
            u,
            p = t & h.F,
            c = t & h.G,
            f = t & h.S,
            m = t & h.P,
            g = t & h.B,
            v = t & h.W,
            y = c ? n : n[e] || (n[e] = {}),
            b = y[a],
            _ = c ? o : f ? o[e] : (o[e] || {})[a];
          c && (i = e);
          for (d in i)
            (l = !p && _ && void 0 !== _[d]),
              (l && d in y) ||
                ((u = l ? _[d] : i[d]),
                (y[d] =
                  c && "function" != typeof _[d]
                    ? i[d]
                    : g && l
                    ? s(u, o)
                    : v && _[d] == u
                    ? (function (t) {
                        var e = function (e, i, o) {
                          if (this instanceof t) {
                            switch (arguments.length) {
                              case 0:
                                return new t();
                              case 1:
                                return new t(e);
                              case 2:
                                return new t(e, i);
                            }
                            return new t(e, i, o);
                          }
                          return t.apply(this, arguments);
                        };
                        return (e[a] = t[a]), e;
                      })(u)
                    : m && "function" == typeof u
                    ? s(Function.call, u)
                    : u),
                m &&
                  (((y.virtual || (y.virtual = {}))[d] = u),
                  t & h.R && b && !b[d] && r(b, d, u)));
        };
      (h.F = 1),
        (h.G = 2),
        (h.S = 4),
        (h.P = 8),
        (h.B = 16),
        (h.W = 32),
        (h.U = 64),
        (h.R = 128),
        (t.exports = h);
    },
    function (t, e) {
      var i = (t.exports =
        "undefined" != typeof window && window.Math == Math
          ? window
          : "undefined" != typeof self && self.Math == Math
          ? self
          : Function("return this")());
      "number" == typeof __g && (__g = i);
    },
    function (t, e) {
      var i = (t.exports = {version: "2.4.0"});
      "number" == typeof __e && (__e = i);
    },
    function (t, e, i) {
      var o = i(19);
      t.exports = function (t, e, i) {
        if ((o(t), void 0 === e)) return t;
        switch (i) {
          case 1:
            return function (i) {
              return t.call(e, i);
            };
          case 2:
            return function (i, o) {
              return t.call(e, i, o);
            };
          case 3:
            return function (i, o, n) {
              return t.call(e, i, o, n);
            };
        }
        return function () {
          return t.apply(e, arguments);
        };
      };
    },
    function (t, e) {
      t.exports = function (t) {
        if ("function" != typeof t) throw TypeError(t + " is not a function!");
        return t;
      };
    },
    function (t, e, i) {
      var o = i(21),
        n = i(29);
      t.exports = i(25)
        ? function (t, e, i) {
            return o.f(t, e, n(1, i));
          }
        : function (t, e, i) {
            return (t[e] = i), t;
          };
    },
    function (t, e, i) {
      var o = i(22),
        n = i(24),
        s = i(28),
        r = Object.defineProperty;
      e.f = i(25)
        ? Object.defineProperty
        : function (t, e, i) {
            if ((o(t), (e = s(e, !0)), o(i), n))
              try {
                return r(t, e, i);
              } catch (t) {}
            if ("get" in i || "set" in i) throw TypeError("Accessors not supported!");
            return "value" in i && (t[e] = i.value), t;
          };
    },
    function (t, e, i) {
      var o = i(23);
      t.exports = function (t) {
        if (!o(t)) throw TypeError(t + " is not an object!");
        return t;
      };
    },
    function (t, e) {
      t.exports = function (t) {
        return "object" == typeof t ? null !== t : "function" == typeof t;
      };
    },
    function (t, e, i) {
      t.exports =
        !i(25) &&
        !i(26)(function () {
          return (
            7 !=
            Object.defineProperty(i(27)("div"), "a", {
              get: function () {
                return 7;
              },
            }).a
          );
        });
    },
    function (t, e, i) {
      t.exports = !i(26)(function () {
        return (
          7 !=
          Object.defineProperty({}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      });
    },
    function (t, e) {
      t.exports = function (t) {
        try {
          return !!t();
        } catch (t) {
          return !0;
        }
      };
    },
    function (t, e, i) {
      var o = i(23),
        n = i(16).document,
        s = o(n) && o(n.createElement);
      t.exports = function (t) {
        return s ? n.createElement(t) : {};
      };
    },
    function (t, e, i) {
      var o = i(23);
      t.exports = function (t, e) {
        if (!o(t)) return t;
        var i, n;
        if (e && "function" == typeof (i = t.toString) && !o((n = i.call(t)))) return n;
        if ("function" == typeof (i = t.valueOf) && !o((n = i.call(t)))) return n;
        if (!e && "function" == typeof (i = t.toString) && !o((n = i.call(t))))
          return n;
        throw TypeError("Can't convert object to primitive value");
      };
    },
    function (t, e) {
      t.exports = function (t, e) {
        return {
          enumerable: !(1 & t),
          configurable: !(2 & t),
          writable: !(4 & t),
          value: e,
        };
      };
    },
    function (t, e, i) {
      t.exports = i(20);
    },
    function (t, e) {
      var i = {}.hasOwnProperty;
      t.exports = function (t, e) {
        return i.call(t, e);
      };
    },
    function (t, e, i) {
      var o = i(33),
        n = i(29),
        s = i(46),
        r = {};
      i(20)(r, i(47)("iterator"), function () {
        return this;
      }),
        (t.exports = function (t, e, i) {
          (t.prototype = o(r, {next: n(1, i)})), s(t, e + " Iterator");
        });
    },
    function (t, e, i) {
      var o = i(22),
        n = i(34),
        s = i(44),
        r = i(41)("IE_PROTO"),
        a = function () {},
        h = "prototype",
        d = function () {
          var t,
            e = i(27)("iframe"),
            o = s.length,
            n = "<",
            r = ">";
          for (
            e.style.display = "none",
              i(45).appendChild(e),
              e.src = "javascript:",
              t = e.contentWindow.document,
              t.open(),
              t.write(n + "script" + r + "document.F=Object" + n + "/script" + r),
              t.close(),
              d = t.F;
            o--;

          )
            delete d[h][s[o]];
          return d();
        };
      t.exports =
        Object.create ||
        function (t, e) {
          var i;
          return (
            null !== t
              ? ((a[h] = o(t)), (i = new a()), (a[h] = null), (i[r] = t))
              : (i = d()),
            void 0 === e ? i : n(i, e)
          );
        };
    },
    function (t, e, i) {
      var o = i(21),
        n = i(22),
        s = i(35);
      t.exports = i(25)
        ? Object.defineProperties
        : function (t, e) {
            n(t);
            for (var i, r = s(e), a = r.length, h = 0; a > h; )
              o.f(t, (i = r[h++]), e[i]);
            return t;
          };
    },
    function (t, e, i) {
      var o = i(36),
        n = i(44);
      t.exports =
        Object.keys ||
        function (t) {
          return o(t, n);
        };
    },
    function (t, e, i) {
      var o = i(31),
        n = i(9),
        s = i(37)(!1),
        r = i(41)("IE_PROTO");
      t.exports = function (t, e) {
        var i,
          a = n(t),
          h = 0,
          d = [];
        for (i in a) i != r && o(a, i) && d.push(i);
        for (; e.length > h; ) o(a, (i = e[h++])) && (~s(d, i) || d.push(i));
        return d;
      };
    },
    function (t, e, i) {
      var o = i(9),
        n = i(38),
        s = i(40);
      t.exports = function (t) {
        return function (e, i, r) {
          var a,
            h = o(e),
            d = n(h.length),
            l = s(r, d);
          if (t && i != i) {
            for (; d > l; ) if (((a = h[l++]), a != a)) return !0;
          } else for (; d > l; l++) if ((t || l in h) && h[l] === i) return t || l || 0;
          return !t && -1;
        };
      };
    },
    function (t, e, i) {
      var o = i(39),
        n = Math.min;
      t.exports = function (t) {
        return t > 0 ? n(o(t), 9007199254740991) : 0;
      };
    },
    function (t, e) {
      var i = Math.ceil,
        o = Math.floor;
      t.exports = function (t) {
        return isNaN((t = +t)) ? 0 : (t > 0 ? o : i)(t);
      };
    },
    function (t, e, i) {
      var o = i(39),
        n = Math.max,
        s = Math.min;
      t.exports = function (t, e) {
        return (t = o(t)), t < 0 ? n(t + e, 0) : s(t, e);
      };
    },
    function (t, e, i) {
      var o = i(42)("keys"),
        n = i(43);
      t.exports = function (t) {
        return o[t] || (o[t] = n(t));
      };
    },
    function (t, e, i) {
      var o = i(16),
        n = "__core-js_shared__",
        s = o[n] || (o[n] = {});
      t.exports = function (t) {
        return s[t] || (s[t] = {});
      };
    },
    function (t, e) {
      var i = 0,
        o = Math.random();
      t.exports = function (t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++i + o).toString(36));
      };
    },
    function (t, e) {
      t.exports =
        "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
          ","
        );
    },
    function (t, e, i) {
      t.exports = i(16).document && document.documentElement;
    },
    function (t, e, i) {
      var o = i(21).f,
        n = i(31),
        s = i(47)("toStringTag");
      t.exports = function (t, e, i) {
        t && !n((t = i ? t : t.prototype), s) && o(t, s, {configurable: !0, value: e});
      };
    },
    function (t, e, i) {
      var o = i(42)("wks"),
        n = i(43),
        s = i(16).Symbol,
        r = "function" == typeof s,
        a = (t.exports = function (t) {
          return o[t] || (o[t] = (r && s[t]) || (r ? s : n)("Symbol." + t));
        });
      a.store = o;
    },
    function (t, e, i) {
      var o = i(31),
        n = i(49),
        s = i(41)("IE_PROTO"),
        r = Object.prototype;
      t.exports =
        Object.getPrototypeOf ||
        function (t) {
          return (
            (t = n(t)),
            o(t, s)
              ? t[s]
              : "function" == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? r
              : null
          );
        };
    },
    function (t, e, i) {
      var o = i(12);
      t.exports = function (t) {
        return Object(o(t));
      };
    },
    function (t, e, i) {
      var o = i(51)(!0);
      i(13)(
        String,
        "String",
        function (t) {
          (this._t = String(t)), (this._i = 0);
        },
        function () {
          var t,
            e = this._t,
            i = this._i;
          return i >= e.length
            ? {value: void 0, done: !0}
            : ((t = o(e, i)), (this._i += t.length), {value: t, done: !1});
        }
      );
    },
    function (t, e, i) {
      var o = i(39),
        n = i(12);
      t.exports = function (t) {
        return function (e, i) {
          var s,
            r,
            a = String(n(e)),
            h = o(i),
            d = a.length;
          return h < 0 || h >= d
            ? t
              ? ""
              : void 0
            : ((s = a.charCodeAt(h)),
              s < 55296 ||
              s > 56319 ||
              h + 1 === d ||
              (r = a.charCodeAt(h + 1)) < 56320 ||
              r > 57343
                ? t
                  ? a.charAt(h)
                  : s
                : t
                ? a.slice(h, h + 2)
                : ((s - 55296) << 10) + (r - 56320) + 65536);
        };
      };
    },
    function (t, e, i) {
      var o = i(22),
        n = i(53);
      t.exports = i(17).getIterator = function (t) {
        var e = n(t);
        if ("function" != typeof e) throw TypeError(t + " is not iterable!");
        return o(e.call(t));
      };
    },
    function (t, e, i) {
      var o = i(54),
        n = i(47)("iterator"),
        s = i(8);
      t.exports = i(17).getIteratorMethod = function (t) {
        if (void 0 != t) return t[n] || t["@@iterator"] || s[o(t)];
      };
    },
    function (t, e, i) {
      var o = i(11),
        n = i(47)("toStringTag"),
        s =
          "Arguments" ==
          o(
            (function () {
              return arguments;
            })()
          ),
        r = function (t, e) {
          try {
            return t[e];
          } catch (t) {}
        };
      t.exports = function (t) {
        var e, i, a;
        return void 0 === t
          ? "Undefined"
          : null === t
          ? "Null"
          : "string" == typeof (i = r((e = Object(t)), n))
          ? i
          : s
          ? o(e)
          : "Object" == (a = o(e)) && "function" == typeof e.callee
          ? "Arguments"
          : a;
      };
    },
    function (t, e, i) {
      t.exports = {default: i(56), __esModule: !0};
    },
    function (t, e, i) {
      i(57);
      var o = i(17).Object;
      t.exports = function (t, e) {
        return o.create(t, e);
      };
    },
    function (t, e, i) {
      var o = i(15);
      o(o.S, "Object", {create: i(33)});
    },
    function (t, e, i) {
      t.exports = {default: i(59), __esModule: !0};
    },
    function (t, e, i) {
      i(60), (t.exports = i(17).Object.keys);
    },
    function (t, e, i) {
      var o = i(49),
        n = i(35);
      i(61)("keys", function () {
        return function (t) {
          return n(o(t));
        };
      });
    },
    function (t, e, i) {
      var o = i(15),
        n = i(17),
        s = i(26);
      t.exports = function (t, e) {
        var i = (n.Object || {})[t] || Object[t],
          r = {};
        (r[t] = e(i)),
          o(
            o.S +
              o.F *
                s(function () {
                  i(1);
                }),
            "Object",
            r
          );
      };
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      e.__esModule = !0;
      var n = i(63),
        s = o(n),
        r = i(66),
        a = o(r),
        h =
          "function" == typeof a.default && "symbol" == typeof s.default
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof a.default &&
                  t.constructor === a.default &&
                  t !== a.default.prototype
                  ? "symbol"
                  : typeof t;
              };
      e.default =
        "function" == typeof a.default && "symbol" === h(s.default)
          ? function (t) {
              return "undefined" == typeof t ? "undefined" : h(t);
            }
          : function (t) {
              return t &&
                "function" == typeof a.default &&
                t.constructor === a.default &&
                t !== a.default.prototype
                ? "symbol"
                : "undefined" == typeof t
                ? "undefined"
                : h(t);
            };
    },
    function (t, e, i) {
      t.exports = {default: i(64), __esModule: !0};
    },
    function (t, e, i) {
      i(50), i(4), (t.exports = i(65).f("iterator"));
    },
    function (t, e, i) {
      e.f = i(47);
    },
    function (t, e, i) {
      t.exports = {default: i(67), __esModule: !0};
    },
    function (t, e, i) {
      i(68), i(79), i(80), i(81), (t.exports = i(17).Symbol);
    },
    function (t, e, i) {
      var o = i(16),
        n = i(31),
        s = i(25),
        r = i(15),
        a = i(30),
        h = i(69).KEY,
        d = i(26),
        l = i(42),
        u = i(46),
        p = i(43),
        c = i(47),
        f = i(65),
        m = i(70),
        g = i(71),
        v = i(72),
        y = i(75),
        b = i(22),
        _ = i(9),
        w = i(28),
        x = i(29),
        D = i(33),
        S = i(76),
        k = i(78),
        T = i(21),
        C = i(35),
        M = k.f,
        O = T.f,
        E = S.f,
        P = o.Symbol,
        N = o.JSON,
        A = N && N.stringify,
        I = "prototype",
        R = c("_hidden"),
        L = c("toPrimitive"),
        F = {}.propertyIsEnumerable,
        H = l("symbol-registry"),
        Y = l("symbols"),
        j = l("op-symbols"),
        G = Object[I],
        z = "function" == typeof P,
        W = o.QObject,
        U = !W || !W[I] || !W[I].findChild,
        V =
          s &&
          d(function () {
            return (
              7 !=
              D(
                O({}, "a", {
                  get: function () {
                    return O(this, "a", {value: 7}).a;
                  },
                })
              ).a
            );
          })
            ? function (t, e, i) {
                var o = M(G, e);
                o && delete G[e], O(t, e, i), o && t !== G && O(G, e, o);
              }
            : O,
        B = function (t) {
          var e = (Y[t] = D(P[I]));
          return (e._k = t), e;
        },
        q =
          z && "symbol" == typeof P.iterator
            ? function (t) {
                return "symbol" == typeof t;
              }
            : function (t) {
                return t instanceof P;
              },
        X = function (t, e, i) {
          return (
            t === G && X(j, e, i),
            b(t),
            (e = w(e, !0)),
            b(i),
            n(Y, e)
              ? (i.enumerable
                  ? (n(t, R) && t[R][e] && (t[R][e] = !1),
                    (i = D(i, {enumerable: x(0, !1)})))
                  : (n(t, R) || O(t, R, x(1, {})), (t[R][e] = !0)),
                V(t, e, i))
              : O(t, e, i)
          );
        },
        Z = function (t, e) {
          b(t);
          for (var i, o = v((e = _(e))), n = 0, s = o.length; s > n; )
            X(t, (i = o[n++]), e[i]);
          return t;
        },
        K = function (t, e) {
          return void 0 === e ? D(t) : Z(D(t), e);
        },
        $ = function (t) {
          var e = F.call(this, (t = w(t, !0)));
          return (
            !(this === G && n(Y, t) && !n(j, t)) &&
            (!(e || !n(this, t) || !n(Y, t) || (n(this, R) && this[R][t])) || e)
          );
        },
        J = function (t, e) {
          if (((t = _(t)), (e = w(e, !0)), t !== G || !n(Y, e) || n(j, e))) {
            var i = M(t, e);
            return !i || !n(Y, e) || (n(t, R) && t[R][e]) || (i.enumerable = !0), i;
          }
        },
        Q = function (t) {
          for (var e, i = E(_(t)), o = [], s = 0; i.length > s; )
            n(Y, (e = i[s++])) || e == R || e == h || o.push(e);
          return o;
        },
        tt = function (t) {
          for (var e, i = t === G, o = E(i ? j : _(t)), s = [], r = 0; o.length > r; )
            !n(Y, (e = o[r++])) || (i && !n(G, e)) || s.push(Y[e]);
          return s;
        };
      z ||
        ((P = function () {
          if (this instanceof P) throw TypeError("Symbol is not a constructor!");
          var t = p(arguments.length > 0 ? arguments[0] : void 0),
            e = function (i) {
              this === G && e.call(j, i),
                n(this, R) && n(this[R], t) && (this[R][t] = !1),
                V(this, t, x(1, i));
            };
          return s && U && V(G, t, {configurable: !0, set: e}), B(t);
        }),
        a(P[I], "toString", function () {
          return this._k;
        }),
        (k.f = J),
        (T.f = X),
        (i(77).f = S.f = Q),
        (i(74).f = $),
        (i(73).f = tt),
        s && !i(14) && a(G, "propertyIsEnumerable", $, !0),
        (f.f = function (t) {
          return B(c(t));
        })),
        r(r.G + r.W + r.F * !z, {Symbol: P});
      for (
        var et =
            "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
              ","
            ),
          it = 0;
        et.length > it;

      )
        c(et[it++]);
      for (var et = C(c.store), it = 0; et.length > it; ) m(et[it++]);
      r(r.S + r.F * !z, "Symbol", {
        for: function (t) {
          return n(H, (t += "")) ? H[t] : (H[t] = P(t));
        },
        keyFor: function (t) {
          if (q(t)) return g(H, t);
          throw TypeError(t + " is not a symbol!");
        },
        useSetter: function () {
          U = !0;
        },
        useSimple: function () {
          U = !1;
        },
      }),
        r(r.S + r.F * !z, "Object", {
          create: K,
          defineProperty: X,
          defineProperties: Z,
          getOwnPropertyDescriptor: J,
          getOwnPropertyNames: Q,
          getOwnPropertySymbols: tt,
        }),
        N &&
          r(
            r.S +
              r.F *
                (!z ||
                  d(function () {
                    var t = P();
                    return (
                      "[null]" != A([t]) || "{}" != A({a: t}) || "{}" != A(Object(t))
                    );
                  })),
            "JSON",
            {
              stringify: function (t) {
                if (void 0 !== t && !q(t)) {
                  for (var e, i, o = [t], n = 1; arguments.length > n; )
                    o.push(arguments[n++]);
                  return (
                    (e = o[1]),
                    "function" == typeof e && (i = e),
                    (!i && y(e)) ||
                      (e = function (t, e) {
                        if ((i && (e = i.call(this, t, e)), !q(e))) return e;
                      }),
                    (o[1] = e),
                    A.apply(N, o)
                  );
                }
              },
            }
          ),
        P[I][L] || i(20)(P[I], L, P[I].valueOf),
        u(P, "Symbol"),
        u(Math, "Math", !0),
        u(o.JSON, "JSON", !0);
    },
    function (t, e, i) {
      var o = i(43)("meta"),
        n = i(23),
        s = i(31),
        r = i(21).f,
        a = 0,
        h =
          Object.isExtensible ||
          function () {
            return !0;
          },
        d = !i(26)(function () {
          return h(Object.preventExtensions({}));
        }),
        l = function (t) {
          r(t, o, {value: {i: "O" + ++a, w: {}}});
        },
        u = function (t, e) {
          if (!n(t))
            return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
          if (!s(t, o)) {
            if (!h(t)) return "F";
            if (!e) return "E";
            l(t);
          }
          return t[o].i;
        },
        p = function (t, e) {
          if (!s(t, o)) {
            if (!h(t)) return !0;
            if (!e) return !1;
            l(t);
          }
          return t[o].w;
        },
        c = function (t) {
          return d && f.NEED && h(t) && !s(t, o) && l(t), t;
        },
        f = (t.exports = {KEY: o, NEED: !1, fastKey: u, getWeak: p, onFreeze: c});
    },
    function (t, e, i) {
      var o = i(16),
        n = i(17),
        s = i(14),
        r = i(65),
        a = i(21).f;
      t.exports = function (t) {
        var e = n.Symbol || (n.Symbol = s ? {} : o.Symbol || {});
        "_" == t.charAt(0) || t in e || a(e, t, {value: r.f(t)});
      };
    },
    function (t, e, i) {
      var o = i(35),
        n = i(9);
      t.exports = function (t, e) {
        for (var i, s = n(t), r = o(s), a = r.length, h = 0; a > h; )
          if (s[(i = r[h++])] === e) return i;
      };
    },
    function (t, e, i) {
      var o = i(35),
        n = i(73),
        s = i(74);
      t.exports = function (t) {
        var e = o(t),
          i = n.f;
        if (i)
          for (var r, a = i(t), h = s.f, d = 0; a.length > d; )
            h.call(t, (r = a[d++])) && e.push(r);
        return e;
      };
    },
    function (t, e) {
      e.f = Object.getOwnPropertySymbols;
    },
    function (t, e) {
      e.f = {}.propertyIsEnumerable;
    },
    function (t, e, i) {
      var o = i(11);
      t.exports =
        Array.isArray ||
        function (t) {
          return "Array" == o(t);
        };
    },
    function (t, e, i) {
      var o = i(9),
        n = i(77).f,
        s = {}.toString,
        r =
          "object" == typeof window && window && Object.getOwnPropertyNames
            ? Object.getOwnPropertyNames(window)
            : [],
        a = function (t) {
          try {
            return n(t);
          } catch (t) {
            return r.slice();
          }
        };
      t.exports.f = function (t) {
        return r && "[object Window]" == s.call(t) ? a(t) : n(o(t));
      };
    },
    function (t, e, i) {
      var o = i(36),
        n = i(44).concat("length", "prototype");
      e.f =
        Object.getOwnPropertyNames ||
        function (t) {
          return o(t, n);
        };
    },
    function (t, e, i) {
      var o = i(74),
        n = i(29),
        s = i(9),
        r = i(28),
        a = i(31),
        h = i(24),
        d = Object.getOwnPropertyDescriptor;
      e.f = i(25)
        ? d
        : function (t, e) {
            if (((t = s(t)), (e = r(e, !0)), h))
              try {
                return d(t, e);
              } catch (t) {}
            if (a(t, e)) return n(!o.f.call(t, e), t[e]);
          };
    },
    function (t, e) {},
    function (t, e, i) {
      i(70)("asyncIterator");
    },
    function (t, e, i) {
      i(70)("observable");
    },
    function (t, e, i) {
      t.exports = ("undefined" != typeof window && window.moment) || i(83);
    },
    function (t, e, i) {
      (function (t) {
        !(function (e, i) {
          t.exports = i();
        })(this, function () {
          function e() {
            return _o.apply(null, arguments);
          }
          function i(t) {
            _o = t;
          }
          function o(t) {
            return (
              t instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(t)
            );
          }
          function n(t) {
            return null != t && "[object Object]" === Object.prototype.toString.call(t);
          }
          function s(t) {
            var e;
            for (e in t) return !1;
            return !0;
          }
          function r(t) {
            return void 0 === t;
          }
          function a(t) {
            return (
              "number" == typeof t ||
              "[object Number]" === Object.prototype.toString.call(t)
            );
          }
          function h(t) {
            return (
              t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
            );
          }
          function d(t, e) {
            var i,
              o = [];
            for (i = 0; i < t.length; ++i) o.push(e(t[i], i));
            return o;
          }
          function l(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
          }
          function u(t, e) {
            for (var i in e) l(e, i) && (t[i] = e[i]);
            return (
              l(e, "toString") && (t.toString = e.toString),
              l(e, "valueOf") && (t.valueOf = e.valueOf),
              t
            );
          }
          function p(t, e, i, o) {
            return be(t, e, i, o, !0).utc();
          }
          function c() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1,
              parsedDateParts: [],
              meridiem: null,
              rfc2822: !1,
              weekdayMismatch: !1,
            };
          }
          function f(t) {
            return null == t._pf && (t._pf = c()), t._pf;
          }
          function m(t) {
            if (null == t._isValid) {
              var e = f(t),
                i = xo.call(e.parsedDateParts, function (t) {
                  return null != t;
                }),
                o =
                  !isNaN(t._d.getTime()) &&
                  e.overflow < 0 &&
                  !e.empty &&
                  !e.invalidMonth &&
                  !e.invalidWeekday &&
                  !e.nullInput &&
                  !e.invalidFormat &&
                  !e.userInvalidated &&
                  (!e.meridiem || (e.meridiem && i));
              if (
                (t._strict &&
                  (o =
                    o &&
                    0 === e.charsLeftOver &&
                    0 === e.unusedTokens.length &&
                    void 0 === e.bigHour),
                null != Object.isFrozen && Object.isFrozen(t))
              )
                return o;
              t._isValid = o;
            }
            return t._isValid;
          }
          function g(t) {
            var e = p(NaN);
            return null != t ? u(f(e), t) : (f(e).userInvalidated = !0), e;
          }
          function v(t, e) {
            var i, o, n;
            if (
              (r(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
              r(e._i) || (t._i = e._i),
              r(e._f) || (t._f = e._f),
              r(e._l) || (t._l = e._l),
              r(e._strict) || (t._strict = e._strict),
              r(e._tzm) || (t._tzm = e._tzm),
              r(e._isUTC) || (t._isUTC = e._isUTC),
              r(e._offset) || (t._offset = e._offset),
              r(e._pf) || (t._pf = f(e)),
              r(e._locale) || (t._locale = e._locale),
              Do.length > 0)
            )
              for (i = 0; i < Do.length; i++)
                (o = Do[i]), (n = e[o]), r(n) || (t[o] = n);
            return t;
          }
          function y(t) {
            v(this, t),
              (this._d = new Date(null != t._d ? t._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              So === !1 && ((So = !0), e.updateOffset(this), (So = !1));
          }
          function b(t) {
            return t instanceof y || (null != t && null != t._isAMomentObject);
          }
          function _(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
          }
          function w(t) {
            var e = +t,
              i = 0;
            return 0 !== e && isFinite(e) && (i = _(e)), i;
          }
          function x(t, e, i) {
            var o,
              n = Math.min(t.length, e.length),
              s = Math.abs(t.length - e.length),
              r = 0;
            for (o = 0; o < n; o++)
              ((i && t[o] !== e[o]) || (!i && w(t[o]) !== w(e[o]))) && r++;
            return r + s;
          }
          function D(t) {
            e.suppressDeprecationWarnings === !1 &&
              "undefined" != typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + t);
          }
          function S(t, i) {
            var o = !0;
            return u(function () {
              if ((null != e.deprecationHandler && e.deprecationHandler(null, t), o)) {
                for (var n, s = [], r = 0; r < arguments.length; r++) {
                  if (((n = ""), "object" == typeof arguments[r])) {
                    n += "\n[" + r + "] ";
                    for (var a in arguments[0]) n += a + ": " + arguments[0][a] + ", ";
                    n = n.slice(0, -2);
                  } else n = arguments[r];
                  s.push(n);
                }
                D(
                  t +
                    "\nArguments: " +
                    Array.prototype.slice.call(s).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (o = !1);
              }
              return i.apply(this, arguments);
            }, i);
          }
          function k(t, i) {
            null != e.deprecationHandler && e.deprecationHandler(t, i),
              ko[t] || (D(i), (ko[t] = !0));
          }
          function T(t) {
            return (
              t instanceof Function ||
              "[object Function]" === Object.prototype.toString.call(t)
            );
          }
          function C(t) {
            var e, i;
            for (i in t) (e = t[i]), T(e) ? (this[i] = e) : (this["_" + i] = e);
            (this._config = t),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
                  "|" +
                  /\d{1,2}/.source
              ));
          }
          function M(t, e) {
            var i,
              o = u({}, t);
            for (i in e)
              l(e, i) &&
                (n(t[i]) && n(e[i])
                  ? ((o[i] = {}), u(o[i], t[i]), u(o[i], e[i]))
                  : null != e[i]
                  ? (o[i] = e[i])
                  : delete o[i]);
            for (i in t) l(t, i) && !l(e, i) && n(t[i]) && (o[i] = u({}, o[i]));
            return o;
          }
          function O(t) {
            null != t && this.set(t);
          }
          function E(t, e, i) {
            var o = this._calendar[t] || this._calendar.sameElse;
            return T(o) ? o.call(e, i) : o;
          }
          function P(t) {
            var e = this._longDateFormat[t],
              i = this._longDateFormat[t.toUpperCase()];
            return e || !i
              ? e
              : ((this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
                  return t.slice(1);
                })),
                this._longDateFormat[t]);
          }
          function N() {
            return this._invalidDate;
          }
          function A(t) {
            return this._ordinal.replace("%d", t);
          }
          function I(t, e, i, o) {
            var n = this._relativeTime[i];
            return T(n) ? n(t, e, i, o) : n.replace(/%d/i, t);
          }
          function R(t, e) {
            var i = this._relativeTime[t > 0 ? "future" : "past"];
            return T(i) ? i(e) : i.replace(/%s/i, e);
          }
          function L(t, e) {
            var i = t.toLowerCase();
            Ro[i] = Ro[i + "s"] = Ro[e] = t;
          }
          function F(t) {
            return "string" == typeof t ? Ro[t] || Ro[t.toLowerCase()] : void 0;
          }
          function H(t) {
            var e,
              i,
              o = {};
            for (i in t) l(t, i) && ((e = F(i)), e && (o[e] = t[i]));
            return o;
          }
          function Y(t, e) {
            Lo[t] = e;
          }
          function j(t) {
            var e = [];
            for (var i in t) e.push({unit: i, priority: Lo[i]});
            return (
              e.sort(function (t, e) {
                return t.priority - e.priority;
              }),
              e
            );
          }
          function G(t, i) {
            return function (o) {
              return null != o
                ? (W(this, t, o), e.updateOffset(this, i), this)
                : z(this, t);
            };
          }
          function z(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN;
          }
          function W(t, e, i) {
            t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i);
          }
          function U(t) {
            return (t = F(t)), T(this[t]) ? this[t]() : this;
          }
          function V(t, e) {
            if ("object" == typeof t) {
              t = H(t);
              for (var i = j(t), o = 0; o < i.length; o++)
                this[i[o].unit](t[i[o].unit]);
            } else if (((t = F(t)), T(this[t]))) return this[t](e);
            return this;
          }
          function B(t, e, i) {
            var o = "" + Math.abs(t),
              n = e - o.length,
              s = t >= 0;
            return (
              (s ? (i ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, n)).toString().substr(1) +
              o
            );
          }
          function q(t, e, i, o) {
            var n = o;
            "string" == typeof o &&
              (n = function () {
                return this[o]();
              }),
              t && (jo[t] = n),
              e &&
                (jo[e[0]] = function () {
                  return B(n.apply(this, arguments), e[1], e[2]);
                }),
              i &&
                (jo[i] = function () {
                  return this.localeData().ordinal(n.apply(this, arguments), t);
                });
          }
          function X(t) {
            return t.match(/\[[\s\S]/)
              ? t.replace(/^\[|\]$/g, "")
              : t.replace(/\\/g, "");
          }
          function Z(t) {
            var e,
              i,
              o = t.match(Fo);
            for (e = 0, i = o.length; e < i; e++)
              jo[o[e]] ? (o[e] = jo[o[e]]) : (o[e] = X(o[e]));
            return function (e) {
              var n,
                s = "";
              for (n = 0; n < i; n++) s += T(o[n]) ? o[n].call(e, t) : o[n];
              return s;
            };
          }
          function K(t, e) {
            return t.isValid()
              ? ((e = $(e, t.localeData())), (Yo[e] = Yo[e] || Z(e)), Yo[e](t))
              : t.localeData().invalidDate();
          }
          function $(t, e) {
            function i(t) {
              return e.longDateFormat(t) || t;
            }
            var o = 5;
            for (Ho.lastIndex = 0; o >= 0 && Ho.test(t); )
              (t = t.replace(Ho, i)), (Ho.lastIndex = 0), (o -= 1);
            return t;
          }
          function J(t, e, i) {
            sn[t] = T(e)
              ? e
              : function (t, o) {
                  return t && i ? i : e;
                };
          }
          function Q(t, e) {
            return l(sn, t) ? sn[t](e._strict, e._locale) : new RegExp(tt(t));
          }
          function tt(t) {
            return et(
              t
                .replace("\\", "")
                .replace(
                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                  function (t, e, i, o, n) {
                    return e || i || o || n;
                  }
                )
            );
          }
          function et(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          function it(t, e) {
            var i,
              o = e;
            for (
              "string" == typeof t && (t = [t]),
                a(e) &&
                  (o = function (t, i) {
                    i[e] = w(t);
                  }),
                i = 0;
              i < t.length;
              i++
            )
              rn[t[i]] = o;
          }
          function ot(t, e) {
            it(t, function (t, i, o, n) {
              (o._w = o._w || {}), e(t, o._w, o, n);
            });
          }
          function nt(t, e, i) {
            null != e && l(rn, t) && rn[t](e, i._a, i, t);
          }
          function st(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate();
          }
          function rt(t, e) {
            return t
              ? o(this._months)
                ? this._months[t.month()]
                : this._months[
                    (this._months.isFormat || vn).test(e) ? "format" : "standalone"
                  ][t.month()]
              : o(this._months)
              ? this._months
              : this._months.standalone;
          }
          function at(t, e) {
            return t
              ? o(this._monthsShort)
                ? this._monthsShort[t.month()]
                : this._monthsShort[vn.test(e) ? "format" : "standalone"][t.month()]
              : o(this._monthsShort)
              ? this._monthsShort
              : this._monthsShort.standalone;
          }
          function ht(t, e, i) {
            var o,
              n,
              s,
              r = t.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  o = 0;
                o < 12;
                ++o
              )
                (s = p([2e3, o])),
                  (this._shortMonthsParse[o] = this.monthsShort(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[o] = this.months(s, "").toLocaleLowerCase());
            return i
              ? "MMM" === e
                ? ((n = gn.call(this._shortMonthsParse, r)), n !== -1 ? n : null)
                : ((n = gn.call(this._longMonthsParse, r)), n !== -1 ? n : null)
              : "MMM" === e
              ? ((n = gn.call(this._shortMonthsParse, r)),
                n !== -1
                  ? n
                  : ((n = gn.call(this._longMonthsParse, r)), n !== -1 ? n : null))
              : ((n = gn.call(this._longMonthsParse, r)),
                n !== -1
                  ? n
                  : ((n = gn.call(this._shortMonthsParse, r)), n !== -1 ? n : null));
          }
          function dt(t, e, i) {
            var o, n, s;
            if (this._monthsParseExact) return ht.call(this, t, e, i);
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                o = 0;
              o < 12;
              o++
            ) {
              if (
                ((n = p([2e3, o])),
                i &&
                  !this._longMonthsParse[o] &&
                  ((this._longMonthsParse[o] = new RegExp(
                    "^" + this.months(n, "").replace(".", "") + "$",
                    "i"
                  )),
                  (this._shortMonthsParse[o] = new RegExp(
                    "^" + this.monthsShort(n, "").replace(".", "") + "$",
                    "i"
                  ))),
                i ||
                  this._monthsParse[o] ||
                  ((s = "^" + this.months(n, "") + "|^" + this.monthsShort(n, "")),
                  (this._monthsParse[o] = new RegExp(s.replace(".", ""), "i"))),
                i && "MMMM" === e && this._longMonthsParse[o].test(t))
              )
                return o;
              if (i && "MMM" === e && this._shortMonthsParse[o].test(t)) return o;
              if (!i && this._monthsParse[o].test(t)) return o;
            }
          }
          function lt(t, e) {
            var i;
            if (!t.isValid()) return t;
            if ("string" == typeof e)
              if (/^\d+$/.test(e)) e = w(e);
              else if (((e = t.localeData().monthsParse(e)), !a(e))) return t;
            return (
              (i = Math.min(t.date(), st(t.year(), e))),
              t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i),
              t
            );
          }
          function ut(t) {
            return null != t
              ? (lt(this, t), e.updateOffset(this, !0), this)
              : z(this, "Month");
          }
          function pt() {
            return st(this.year(), this.month());
          }
          function ct(t) {
            return this._monthsParseExact
              ? (l(this, "_monthsRegex") || mt.call(this),
                t ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = _n),
                this._monthsShortStrictRegex && t
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex);
          }
          function ft(t) {
            return this._monthsParseExact
              ? (l(this, "_monthsRegex") || mt.call(this),
                t ? this._monthsStrictRegex : this._monthsRegex)
              : (l(this, "_monthsRegex") || (this._monthsRegex = wn),
                this._monthsStrictRegex && t
                  ? this._monthsStrictRegex
                  : this._monthsRegex);
          }
          function mt() {
            function t(t, e) {
              return e.length - t.length;
            }
            var e,
              i,
              o = [],
              n = [],
              s = [];
            for (e = 0; e < 12; e++)
              (i = p([2e3, e])),
                o.push(this.monthsShort(i, "")),
                n.push(this.months(i, "")),
                s.push(this.months(i, "")),
                s.push(this.monthsShort(i, ""));
            for (o.sort(t), n.sort(t), s.sort(t), e = 0; e < 12; e++)
              (o[e] = et(o[e])), (n[e] = et(n[e]));
            for (e = 0; e < 24; e++) s[e] = et(s[e]);
            (this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              ));
          }
          function gt(t) {
            return vt(t) ? 366 : 365;
          }
          function vt(t) {
            return (t % 4 === 0 && t % 100 !== 0) || t % 400 === 0;
          }
          function yt() {
            return vt(this.year());
          }
          function bt(t, e, i, o, n, s, r) {
            var a = new Date(t, e, i, o, n, s, r);
            return (
              t < 100 && t >= 0 && isFinite(a.getFullYear()) && a.setFullYear(t), a
            );
          }
          function _t(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return (
              t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t),
              e
            );
          }
          function wt(t, e, i) {
            var o = 7 + e - i,
              n = (7 + _t(t, 0, o).getUTCDay() - e) % 7;
            return -n + o - 1;
          }
          function xt(t, e, i, o, n) {
            var s,
              r,
              a = (7 + i - o) % 7,
              h = wt(t, o, n),
              d = 1 + 7 * (e - 1) + a + h;
            return (
              d <= 0
                ? ((s = t - 1), (r = gt(s) + d))
                : d > gt(t)
                ? ((s = t + 1), (r = d - gt(t)))
                : ((s = t), (r = d)),
              {year: s, dayOfYear: r}
            );
          }
          function Dt(t, e, i) {
            var o,
              n,
              s = wt(t.year(), e, i),
              r = Math.floor((t.dayOfYear() - s - 1) / 7) + 1;
            return (
              r < 1
                ? ((n = t.year() - 1), (o = r + St(n, e, i)))
                : r > St(t.year(), e, i)
                ? ((o = r - St(t.year(), e, i)), (n = t.year() + 1))
                : ((n = t.year()), (o = r)),
              {week: o, year: n}
            );
          }
          function St(t, e, i) {
            var o = wt(t, e, i),
              n = wt(t + 1, e, i);
            return (gt(t) - o + n) / 7;
          }
          function kt(t) {
            return Dt(t, this._week.dow, this._week.doy).week;
          }
          function Tt() {
            return this._week.dow;
          }
          function Ct() {
            return this._week.doy;
          }
          function Mt(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d");
          }
          function Ot(t) {
            var e = Dt(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d");
          }
          function Et(t, e) {
            return "string" != typeof t
              ? t
              : isNaN(t)
              ? ((t = e.weekdaysParse(t)), "number" == typeof t ? t : null)
              : parseInt(t, 10);
          }
          function Pt(t, e) {
            return "string" == typeof t
              ? e.weekdaysParse(t) % 7 || 7
              : isNaN(t)
              ? null
              : t;
          }
          function Nt(t, e) {
            return t
              ? o(this._weekdays)
                ? this._weekdays[t.day()]
                : this._weekdays[
                    this._weekdays.isFormat.test(e) ? "format" : "standalone"
                  ][t.day()]
              : o(this._weekdays)
              ? this._weekdays
              : this._weekdays.standalone;
          }
          function At(t) {
            return t ? this._weekdaysShort[t.day()] : this._weekdaysShort;
          }
          function It(t) {
            return t ? this._weekdaysMin[t.day()] : this._weekdaysMin;
          }
          function Rt(t, e, i) {
            var o,
              n,
              s,
              r = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  o = 0;
                o < 7;
                ++o
              )
                (s = p([2e3, 1]).day(o)),
                  (this._minWeekdaysParse[o] = this.weekdaysMin(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[o] = this.weekdaysShort(
                    s,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[o] = this.weekdays(s, "").toLocaleLowerCase());
            return i
              ? "dddd" === e
                ? ((n = gn.call(this._weekdaysParse, r)), n !== -1 ? n : null)
                : "ddd" === e
                ? ((n = gn.call(this._shortWeekdaysParse, r)), n !== -1 ? n : null)
                : ((n = gn.call(this._minWeekdaysParse, r)), n !== -1 ? n : null)
              : "dddd" === e
              ? ((n = gn.call(this._weekdaysParse, r)),
                n !== -1
                  ? n
                  : ((n = gn.call(this._shortWeekdaysParse, r)),
                    n !== -1
                      ? n
                      : ((n = gn.call(this._minWeekdaysParse, r)),
                        n !== -1 ? n : null)))
              : "ddd" === e
              ? ((n = gn.call(this._shortWeekdaysParse, r)),
                n !== -1
                  ? n
                  : ((n = gn.call(this._weekdaysParse, r)),
                    n !== -1
                      ? n
                      : ((n = gn.call(this._minWeekdaysParse, r)),
                        n !== -1 ? n : null)))
              : ((n = gn.call(this._minWeekdaysParse, r)),
                n !== -1
                  ? n
                  : ((n = gn.call(this._weekdaysParse, r)),
                    n !== -1
                      ? n
                      : ((n = gn.call(this._shortWeekdaysParse, r)),
                        n !== -1 ? n : null)));
          }
          function Lt(t, e, i) {
            var o, n, s;
            if (this._weekdaysParseExact) return Rt.call(this, t, e, i);
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                o = 0;
              o < 7;
              o++
            ) {
              if (
                ((n = p([2e3, 1]).day(o)),
                i &&
                  !this._fullWeekdaysParse[o] &&
                  ((this._fullWeekdaysParse[o] = new RegExp(
                    "^" + this.weekdays(n, "").replace(".", ".?") + "$",
                    "i"
                  )),
                  (this._shortWeekdaysParse[o] = new RegExp(
                    "^" + this.weekdaysShort(n, "").replace(".", ".?") + "$",
                    "i"
                  )),
                  (this._minWeekdaysParse[o] = new RegExp(
                    "^" + this.weekdaysMin(n, "").replace(".", ".?") + "$",
                    "i"
                  ))),
                this._weekdaysParse[o] ||
                  ((s =
                    "^" +
                    this.weekdays(n, "") +
                    "|^" +
                    this.weekdaysShort(n, "") +
                    "|^" +
                    this.weekdaysMin(n, "")),
                  (this._weekdaysParse[o] = new RegExp(s.replace(".", ""), "i"))),
                i && "dddd" === e && this._fullWeekdaysParse[o].test(t))
              )
                return o;
              if (i && "ddd" === e && this._shortWeekdaysParse[o].test(t)) return o;
              if (i && "dd" === e && this._minWeekdaysParse[o].test(t)) return o;
              if (!i && this._weekdaysParse[o].test(t)) return o;
            }
          }
          function Ft(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t
              ? ((t = Et(t, this.localeData())), this.add(t - e, "d"))
              : e;
          }
          function Ht(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d");
          }
          function Yt(t) {
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              var e = Pt(t, this.localeData());
              return this.day(this.day() % 7 ? e : e - 7);
            }
            return this.day() || 7;
          }
          function jt(t) {
            return this._weekdaysParseExact
              ? (l(this, "_weekdaysRegex") || Wt.call(this),
                t ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Cn),
                this._weekdaysStrictRegex && t
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex);
          }
          function Gt(t) {
            return this._weekdaysParseExact
              ? (l(this, "_weekdaysRegex") || Wt.call(this),
                t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Mn),
                this._weekdaysShortStrictRegex && t
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex);
          }
          function zt(t) {
            return this._weekdaysParseExact
              ? (l(this, "_weekdaysRegex") || Wt.call(this),
                t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = On),
                this._weekdaysMinStrictRegex && t
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex);
          }
          function Wt() {
            function t(t, e) {
              return e.length - t.length;
            }
            var e,
              i,
              o,
              n,
              s,
              r = [],
              a = [],
              h = [],
              d = [];
            for (e = 0; e < 7; e++)
              (i = p([2e3, 1]).day(e)),
                (o = this.weekdaysMin(i, "")),
                (n = this.weekdaysShort(i, "")),
                (s = this.weekdays(i, "")),
                r.push(o),
                a.push(n),
                h.push(s),
                d.push(o),
                d.push(n),
                d.push(s);
            for (r.sort(t), a.sort(t), h.sort(t), d.sort(t), e = 0; e < 7; e++)
              (a[e] = et(a[e])), (h[e] = et(h[e])), (d[e] = et(d[e]));
            (this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp("^(" + h.join("|") + ")", "i")),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + a.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + r.join("|") + ")",
                "i"
              ));
          }
          function Ut() {
            return this.hours() % 12 || 12;
          }
          function Vt() {
            return this.hours() || 24;
          }
          function Bt(t, e) {
            q(t, 0, 0, function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), e);
            });
          }
          function qt(t, e) {
            return e._meridiemParse;
          }
          function Xt(t) {
            return "p" === (t + "").toLowerCase().charAt(0);
          }
          function Zt(t, e, i) {
            return t > 11 ? (i ? "pm" : "PM") : i ? "am" : "AM";
          }
          function Kt(t) {
            return t ? t.toLowerCase().replace("_", "-") : t;
          }
          function $t(t) {
            for (var e, i, o, n, s = 0; s < t.length; ) {
              for (
                n = Kt(t[s]).split("-"),
                  e = n.length,
                  i = Kt(t[s + 1]),
                  i = i ? i.split("-") : null;
                e > 0;

              ) {
                if ((o = Jt(n.slice(0, e).join("-")))) return o;
                if (i && i.length >= e && x(n, i, !0) >= e - 1) break;
                e--;
              }
              s++;
            }
            return null;
          }
          function Jt(e) {
            var i = null;
            if (!In[e] && "undefined" != typeof t && t && t.exports)
              try {
                (i = En._abbr),
                  !(function () {
                    var t = new Error('Cannot find module "./locale"');
                    throw ((t.code = "MODULE_NOT_FOUND"), t);
                  })(),
                  Qt(i);
              } catch (t) {}
            return In[e];
          }
          function Qt(t, e) {
            var i;
            return t && ((i = r(e) ? ie(t) : te(t, e)), i && (En = i)), En._abbr;
          }
          function te(t, e) {
            if (null !== e) {
              var i = An;
              if (((e.abbr = t), null != In[t]))
                k(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (i = In[t]._config);
              else if (null != e.parentLocale) {
                if (null == In[e.parentLocale])
                  return (
                    Rn[e.parentLocale] || (Rn[e.parentLocale] = []),
                    Rn[e.parentLocale].push({name: t, config: e}),
                    null
                  );
                i = In[e.parentLocale]._config;
              }
              return (
                (In[t] = new O(M(i, e))),
                Rn[t] &&
                  Rn[t].forEach(function (t) {
                    te(t.name, t.config);
                  }),
                Qt(t),
                In[t]
              );
            }
            return delete In[t], null;
          }
          function ee(t, e) {
            if (null != e) {
              var i,
                o = An;
              null != In[t] && (o = In[t]._config),
                (e = M(o, e)),
                (i = new O(e)),
                (i.parentLocale = In[t]),
                (In[t] = i),
                Qt(t);
            } else null != In[t] && (null != In[t].parentLocale ? (In[t] = In[t].parentLocale) : null != In[t] && delete In[t]);
            return In[t];
          }
          function ie(t) {
            var e;
            if ((t && t._locale && t._locale._abbr && (t = t._locale._abbr), !t))
              return En;
            if (!o(t)) {
              if ((e = Jt(t))) return e;
              t = [t];
            }
            return $t(t);
          }
          function oe() {
            return Mo(In);
          }
          function ne(t) {
            var e,
              i = t._a;
            return (
              i &&
                f(t).overflow === -2 &&
                ((e =
                  i[hn] < 0 || i[hn] > 11
                    ? hn
                    : i[dn] < 1 || i[dn] > st(i[an], i[hn])
                    ? dn
                    : i[ln] < 0 ||
                      i[ln] > 24 ||
                      (24 === i[ln] && (0 !== i[un] || 0 !== i[pn] || 0 !== i[cn]))
                    ? ln
                    : i[un] < 0 || i[un] > 59
                    ? un
                    : i[pn] < 0 || i[pn] > 59
                    ? pn
                    : i[cn] < 0 || i[cn] > 999
                    ? cn
                    : -1),
                f(t)._overflowDayOfYear && (e < an || e > dn) && (e = dn),
                f(t)._overflowWeeks && e === -1 && (e = fn),
                f(t)._overflowWeekday && e === -1 && (e = mn),
                (f(t).overflow = e)),
              t
            );
          }
          function se(t) {
            var e,
              i,
              o,
              n,
              s,
              r,
              a = t._i,
              h = Ln.exec(a) || Fn.exec(a);
            if (h) {
              for (f(t).iso = !0, e = 0, i = Yn.length; e < i; e++)
                if (Yn[e][1].exec(h[1])) {
                  (n = Yn[e][0]), (o = Yn[e][2] !== !1);
                  break;
                }
              if (null == n) return void (t._isValid = !1);
              if (h[3]) {
                for (e = 0, i = jn.length; e < i; e++)
                  if (jn[e][1].exec(h[3])) {
                    s = (h[2] || " ") + jn[e][0];
                    break;
                  }
                if (null == s) return void (t._isValid = !1);
              }
              if (!o && null != s) return void (t._isValid = !1);
              if (h[4]) {
                if (!Hn.exec(h[4])) return void (t._isValid = !1);
                r = "Z";
              }
              (t._f = n + (s || "") + (r || "")), pe(t);
            } else t._isValid = !1;
          }
          function re(t) {
            var e,
              i,
              o,
              n,
              s,
              r,
              a,
              h,
              d = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800",
              },
              l = "YXWVUTSRQPONZABCDEFGHIKLM";
            if (
              ((e = t._i
                .replace(/\([^\)]*\)|[\n\t]/g, " ")
                .replace(/(\s\s+)/g, " ")
                .replace(/^\s|\s$/g, "")),
              (i = zn.exec(e)))
            ) {
              if (
                ((o = i[1] ? "ddd" + (5 === i[1].length ? ", " : " ") : ""),
                (n = "D MMM " + (i[2].length > 10 ? "YYYY " : "YY ")),
                (s = "HH:mm" + (i[4] ? ":ss" : "")),
                i[1])
              ) {
                var u = new Date(i[2]),
                  p = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][u.getDay()];
                if (i[1].substr(0, 3) !== p)
                  return (f(t).weekdayMismatch = !0), void (t._isValid = !1);
              }
              switch (i[5].length) {
                case 2:
                  0 === h
                    ? (a = " +0000")
                    : ((h = l.indexOf(i[5][1].toUpperCase()) - 12),
                      (a =
                        (h < 0 ? " -" : " +") +
                        ("" + h).replace(/^-?/, "0").match(/..$/)[0] +
                        "00"));
                  break;
                case 4:
                  a = d[i[5]];
                  break;
                default:
                  a = d[" GMT"];
              }
              (i[5] = a),
                (t._i = i.splice(1).join("")),
                (r = " ZZ"),
                (t._f = o + n + s + r),
                pe(t),
                (f(t).rfc2822 = !0);
            } else t._isValid = !1;
          }
          function ae(t) {
            var i = Gn.exec(t._i);
            return null !== i
              ? void (t._d = new Date(+i[1]))
              : (se(t),
                void (
                  t._isValid === !1 &&
                  (delete t._isValid,
                  re(t),
                  t._isValid === !1 &&
                    (delete t._isValid, e.createFromInputFallback(t)))
                ));
          }
          function he(t, e, i) {
            return null != t ? t : null != e ? e : i;
          }
          function de(t) {
            var i = new Date(e.now());
            return t._useUTC
              ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()]
              : [i.getFullYear(), i.getMonth(), i.getDate()];
          }
          function le(t) {
            var e,
              i,
              o,
              n,
              s = [];
            if (!t._d) {
              for (
                o = de(t),
                  t._w && null == t._a[dn] && null == t._a[hn] && ue(t),
                  null != t._dayOfYear &&
                    ((n = he(t._a[an], o[an])),
                    (t._dayOfYear > gt(n) || 0 === t._dayOfYear) &&
                      (f(t)._overflowDayOfYear = !0),
                    (i = _t(n, 0, t._dayOfYear)),
                    (t._a[hn] = i.getUTCMonth()),
                    (t._a[dn] = i.getUTCDate())),
                  e = 0;
                e < 3 && null == t._a[e];
                ++e
              )
                t._a[e] = s[e] = o[e];
              for (; e < 7; e++)
                t._a[e] = s[e] = null == t._a[e] ? (2 === e ? 1 : 0) : t._a[e];
              24 === t._a[ln] &&
                0 === t._a[un] &&
                0 === t._a[pn] &&
                0 === t._a[cn] &&
                ((t._nextDay = !0), (t._a[ln] = 0)),
                (t._d = (t._useUTC ? _t : bt).apply(null, s)),
                null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                t._nextDay && (t._a[ln] = 24);
            }
          }
          function ue(t) {
            var e, i, o, n, s, r, a, h;
            if (((e = t._w), null != e.GG || null != e.W || null != e.E))
              (s = 1),
                (r = 4),
                (i = he(e.GG, t._a[an], Dt(_e(), 1, 4).year)),
                (o = he(e.W, 1)),
                (n = he(e.E, 1)),
                (n < 1 || n > 7) && (h = !0);
            else {
              (s = t._locale._week.dow), (r = t._locale._week.doy);
              var d = Dt(_e(), s, r);
              (i = he(e.gg, t._a[an], d.year)),
                (o = he(e.w, d.week)),
                null != e.d
                  ? ((n = e.d), (n < 0 || n > 6) && (h = !0))
                  : null != e.e
                  ? ((n = e.e + s), (e.e < 0 || e.e > 6) && (h = !0))
                  : (n = s);
            }
            o < 1 || o > St(i, s, r)
              ? (f(t)._overflowWeeks = !0)
              : null != h
              ? (f(t)._overflowWeekday = !0)
              : ((a = xt(i, o, n, s, r)),
                (t._a[an] = a.year),
                (t._dayOfYear = a.dayOfYear));
          }
          function pe(t) {
            if (t._f === e.ISO_8601) return void se(t);
            if (t._f === e.RFC_2822) return void re(t);
            (t._a = []), (f(t).empty = !0);
            var i,
              o,
              n,
              s,
              r,
              a = "" + t._i,
              h = a.length,
              d = 0;
            for (n = $(t._f, t._locale).match(Fo) || [], i = 0; i < n.length; i++)
              (s = n[i]),
                (o = (a.match(Q(s, t)) || [])[0]),
                o &&
                  ((r = a.substr(0, a.indexOf(o))),
                  r.length > 0 && f(t).unusedInput.push(r),
                  (a = a.slice(a.indexOf(o) + o.length)),
                  (d += o.length)),
                jo[s]
                  ? (o ? (f(t).empty = !1) : f(t).unusedTokens.push(s), nt(s, o, t))
                  : t._strict && !o && f(t).unusedTokens.push(s);
            (f(t).charsLeftOver = h - d),
              a.length > 0 && f(t).unusedInput.push(a),
              t._a[ln] <= 12 &&
                f(t).bigHour === !0 &&
                t._a[ln] > 0 &&
                (f(t).bigHour = void 0),
              (f(t).parsedDateParts = t._a.slice(0)),
              (f(t).meridiem = t._meridiem),
              (t._a[ln] = ce(t._locale, t._a[ln], t._meridiem)),
              le(t),
              ne(t);
          }
          function ce(t, e, i) {
            var o;
            return null == i
              ? e
              : null != t.meridiemHour
              ? t.meridiemHour(e, i)
              : null != t.isPM
              ? ((o = t.isPM(i)), o && e < 12 && (e += 12), o || 12 !== e || (e = 0), e)
              : e;
          }
          function fe(t) {
            var e, i, o, n, s;
            if (0 === t._f.length)
              return (f(t).invalidFormat = !0), void (t._d = new Date(NaN));
            for (n = 0; n < t._f.length; n++)
              (s = 0),
                (e = v({}, t)),
                null != t._useUTC && (e._useUTC = t._useUTC),
                (e._f = t._f[n]),
                pe(e),
                m(e) &&
                  ((s += f(e).charsLeftOver),
                  (s += 10 * f(e).unusedTokens.length),
                  (f(e).score = s),
                  (null == o || s < o) && ((o = s), (i = e)));
            u(t, i || e);
          }
          function me(t) {
            if (!t._d) {
              var e = H(t._i);
              (t._a = d(
                [
                  e.year,
                  e.month,
                  e.day || e.date,
                  e.hour,
                  e.minute,
                  e.second,
                  e.millisecond,
                ],
                function (t) {
                  return t && parseInt(t, 10);
                }
              )),
                le(t);
            }
          }
          function ge(t) {
            var e = new y(ne(ve(t)));
            return e._nextDay && (e.add(1, "d"), (e._nextDay = void 0)), e;
          }
          function ve(t) {
            var e = t._i,
              i = t._f;
            return (
              (t._locale = t._locale || ie(t._l)),
              null === e || (void 0 === i && "" === e)
                ? g({nullInput: !0})
                : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
                  b(e)
                    ? new y(ne(e))
                    : (h(e) ? (t._d = e) : o(i) ? fe(t) : i ? pe(t) : ye(t),
                      m(t) || (t._d = null),
                      t))
            );
          }
          function ye(t) {
            var i = t._i;
            r(i)
              ? (t._d = new Date(e.now()))
              : h(i)
              ? (t._d = new Date(i.valueOf()))
              : "string" == typeof i
              ? ae(t)
              : o(i)
              ? ((t._a = d(i.slice(0), function (t) {
                  return parseInt(t, 10);
                })),
                le(t))
              : n(i)
              ? me(t)
              : a(i)
              ? (t._d = new Date(i))
              : e.createFromInputFallback(t);
          }
          function be(t, e, i, r, a) {
            var h = {};
            return (
              (i !== !0 && i !== !1) || ((r = i), (i = void 0)),
              ((n(t) && s(t)) || (o(t) && 0 === t.length)) && (t = void 0),
              (h._isAMomentObject = !0),
              (h._useUTC = h._isUTC = a),
              (h._l = i),
              (h._i = t),
              (h._f = e),
              (h._strict = r),
              ge(h)
            );
          }
          function _e(t, e, i, o) {
            return be(t, e, i, o, !1);
          }
          function we(t, e) {
            var i, n;
            if ((1 === e.length && o(e[0]) && (e = e[0]), !e.length)) return _e();
            for (i = e[0], n = 1; n < e.length; ++n)
              (e[n].isValid() && !e[n][t](i)) || (i = e[n]);
            return i;
          }
          function xe() {
            var t = [].slice.call(arguments, 0);
            return we("isBefore", t);
          }
          function De() {
            var t = [].slice.call(arguments, 0);
            return we("isAfter", t);
          }
          function Se(t) {
            for (var e in t)
              if (Bn.indexOf(e) === -1 || (null != t[e] && isNaN(t[e]))) return !1;
            for (var i = !1, o = 0; o < Bn.length; ++o)
              if (t[Bn[o]]) {
                if (i) return !1;
                parseFloat(t[Bn[o]]) !== w(t[Bn[o]]) && (i = !0);
              }
            return !0;
          }
          function ke() {
            return this._isValid;
          }
          function Te() {
            return Ve(NaN);
          }
          function Ce(t) {
            var e = H(t),
              i = e.year || 0,
              o = e.quarter || 0,
              n = e.month || 0,
              s = e.week || 0,
              r = e.day || 0,
              a = e.hour || 0,
              h = e.minute || 0,
              d = e.second || 0,
              l = e.millisecond || 0;
            (this._isValid = Se(e)),
              (this._milliseconds = +l + 1e3 * d + 6e4 * h + 1e3 * a * 60 * 60),
              (this._days = +r + 7 * s),
              (this._months = +n + 3 * o + 12 * i),
              (this._data = {}),
              (this._locale = ie()),
              this._bubble();
          }
          function Me(t) {
            return t instanceof Ce;
          }
          function Oe(t) {
            return t < 0 ? Math.round(-1 * t) * -1 : Math.round(t);
          }
          function Ee(t, e) {
            q(t, 0, 0, function () {
              var t = this.utcOffset(),
                i = "+";
              return (
                t < 0 && ((t = -t), (i = "-")),
                i + B(~~(t / 60), 2) + e + B(~~t % 60, 2)
              );
            });
          }
          function Pe(t, e) {
            var i = (e || "").match(t);
            if (null === i) return null;
            var o = i[i.length - 1] || [],
              n = (o + "").match(qn) || ["-", 0, 0],
              s = +(60 * n[1]) + w(n[2]);
            return 0 === s ? 0 : "+" === n[0] ? s : -s;
          }
          function Ne(t, i) {
            var o, n;
            return i._isUTC
              ? ((o = i.clone()),
                (n = (b(t) || h(t) ? t.valueOf() : _e(t).valueOf()) - o.valueOf()),
                o._d.setTime(o._d.valueOf() + n),
                e.updateOffset(o, !1),
                o)
              : _e(t).local();
          }
          function Ae(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15);
          }
          function Ie(t, i, o) {
            var n,
              s = this._offset || 0;
            if (!this.isValid()) return null != t ? this : NaN;
            if (null != t) {
              if ("string" == typeof t) {
                if (((t = Pe(en, t)), null === t)) return this;
              } else Math.abs(t) < 16 && !o && (t *= 60);
              return (
                !this._isUTC && i && (n = Ae(this)),
                (this._offset = t),
                (this._isUTC = !0),
                null != n && this.add(n, "m"),
                s !== t &&
                  (!i || this._changeInProgress
                    ? Ke(this, Ve(t - s, "m"), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      e.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              );
            }
            return this._isUTC ? s : Ae(this);
          }
          function Re(t, e) {
            return null != t
              ? ("string" != typeof t && (t = -t), this.utcOffset(t, e), this)
              : -this.utcOffset();
          }
          function Le(t) {
            return this.utcOffset(0, t);
          }
          function Fe(t) {
            return (
              this._isUTC &&
                (this.utcOffset(0, t),
                (this._isUTC = !1),
                t && this.subtract(Ae(this), "m")),
              this
            );
          }
          function He() {
            if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
              var t = Pe(tn, this._i);
              null != t ? this.utcOffset(t) : this.utcOffset(0, !0);
            }
            return this;
          }
          function Ye(t) {
            return (
              !!this.isValid() &&
              ((t = t ? _e(t).utcOffset() : 0), (this.utcOffset() - t) % 60 === 0)
            );
          }
          function je() {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            );
          }
          function Ge() {
            if (!r(this._isDSTShifted)) return this._isDSTShifted;
            var t = {};
            if ((v(t, this), (t = ve(t)), t._a)) {
              var e = t._isUTC ? p(t._a) : _e(t._a);
              this._isDSTShifted = this.isValid() && x(t._a, e.toArray()) > 0;
            } else this._isDSTShifted = !1;
            return this._isDSTShifted;
          }
          function ze() {
            return !!this.isValid() && !this._isUTC;
          }
          function We() {
            return !!this.isValid() && this._isUTC;
          }
          function Ue() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          function Ve(t, e) {
            var i,
              o,
              n,
              s = t,
              r = null;
            return (
              Me(t)
                ? (s = {ms: t._milliseconds, d: t._days, M: t._months})
                : a(t)
                ? ((s = {}), e ? (s[e] = t) : (s.milliseconds = t))
                : (r = Xn.exec(t))
                ? ((i = "-" === r[1] ? -1 : 1),
                  (s = {
                    y: 0,
                    d: w(r[dn]) * i,
                    h: w(r[ln]) * i,
                    m: w(r[un]) * i,
                    s: w(r[pn]) * i,
                    ms: w(Oe(1e3 * r[cn])) * i,
                  }))
                : (r = Zn.exec(t))
                ? ((i = "-" === r[1] ? -1 : 1),
                  (s = {
                    y: Be(r[2], i),
                    M: Be(r[3], i),
                    w: Be(r[4], i),
                    d: Be(r[5], i),
                    h: Be(r[6], i),
                    m: Be(r[7], i),
                    s: Be(r[8], i),
                  }))
                : null == s
                ? (s = {})
                : "object" == typeof s &&
                  ("from" in s || "to" in s) &&
                  ((n = Xe(_e(s.from), _e(s.to))),
                  (s = {}),
                  (s.ms = n.milliseconds),
                  (s.M = n.months)),
              (o = new Ce(s)),
              Me(t) && l(t, "_locale") && (o._locale = t._locale),
              o
            );
          }
          function Be(t, e) {
            var i = t && parseFloat(t.replace(",", "."));
            return (isNaN(i) ? 0 : i) * e;
          }
          function qe(t, e) {
            var i = {milliseconds: 0, months: 0};
            return (
              (i.months = e.month() - t.month() + 12 * (e.year() - t.year())),
              t.clone().add(i.months, "M").isAfter(e) && --i.months,
              (i.milliseconds = +e - +t.clone().add(i.months, "M")),
              i
            );
          }
          function Xe(t, e) {
            var i;
            return t.isValid() && e.isValid()
              ? ((e = Ne(e, t)),
                t.isBefore(e)
                  ? (i = qe(t, e))
                  : ((i = qe(e, t)),
                    (i.milliseconds = -i.milliseconds),
                    (i.months = -i.months)),
                i)
              : {milliseconds: 0, months: 0};
          }
          function Ze(t, e) {
            return function (i, o) {
              var n, s;
              return (
                null === o ||
                  isNaN(+o) ||
                  (k(
                    e,
                    "moment()." +
                      e +
                      "(period, number) is deprecated. Please use moment()." +
                      e +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (s = i),
                  (i = o),
                  (o = s)),
                (i = "string" == typeof i ? +i : i),
                (n = Ve(i, o)),
                Ke(this, n, t),
                this
              );
            };
          }
          function Ke(t, i, o, n) {
            var s = i._milliseconds,
              r = Oe(i._days),
              a = Oe(i._months);
            t.isValid() &&
              ((n = null == n || n),
              s && t._d.setTime(t._d.valueOf() + s * o),
              r && W(t, "Date", z(t, "Date") + r * o),
              a && lt(t, z(t, "Month") + a * o),
              n && e.updateOffset(t, r || a));
          }
          function $e(t, e) {
            var i = t.diff(e, "days", !0);
            return i < -6
              ? "sameElse"
              : i < -1
              ? "lastWeek"
              : i < 0
              ? "lastDay"
              : i < 1
              ? "sameDay"
              : i < 2
              ? "nextDay"
              : i < 7
              ? "nextWeek"
              : "sameElse";
          }
          function Je(t, i) {
            var o = t || _e(),
              n = Ne(o, this).startOf("day"),
              s = e.calendarFormat(this, n) || "sameElse",
              r = i && (T(i[s]) ? i[s].call(this, o) : i[s]);
            return this.format(r || this.localeData().calendar(s, this, _e(o)));
          }
          function Qe() {
            return new y(this);
          }
          function ti(t, e) {
            var i = b(t) ? t : _e(t);
            return (
              !(!this.isValid() || !i.isValid()) &&
              ((e = F(r(e) ? "millisecond" : e)),
              "millisecond" === e
                ? this.valueOf() > i.valueOf()
                : i.valueOf() < this.clone().startOf(e).valueOf())
            );
          }
          function ei(t, e) {
            var i = b(t) ? t : _e(t);
            return (
              !(!this.isValid() || !i.isValid()) &&
              ((e = F(r(e) ? "millisecond" : e)),
              "millisecond" === e
                ? this.valueOf() < i.valueOf()
                : this.clone().endOf(e).valueOf() < i.valueOf())
            );
          }
          function ii(t, e, i, o) {
            return (
              (o = o || "()"),
              ("(" === o[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) &&
                (")" === o[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
            );
          }
          function oi(t, e) {
            var i,
              o = b(t) ? t : _e(t);
            return (
              !(!this.isValid() || !o.isValid()) &&
              ((e = F(e || "millisecond")),
              "millisecond" === e
                ? this.valueOf() === o.valueOf()
                : ((i = o.valueOf()),
                  this.clone().startOf(e).valueOf() <= i &&
                    i <= this.clone().endOf(e).valueOf()))
            );
          }
          function ni(t, e) {
            return this.isSame(t, e) || this.isAfter(t, e);
          }
          function si(t, e) {
            return this.isSame(t, e) || this.isBefore(t, e);
          }
          function ri(t, e, i) {
            var o, n, s, r;
            return this.isValid()
              ? ((o = Ne(t, this)),
                o.isValid()
                  ? ((n = 6e4 * (o.utcOffset() - this.utcOffset())),
                    (e = F(e)),
                    "year" === e || "month" === e || "quarter" === e
                      ? ((r = ai(this, o)),
                        "quarter" === e ? (r /= 3) : "year" === e && (r /= 12))
                      : ((s = this - o),
                        (r =
                          "second" === e
                            ? s / 1e3
                            : "minute" === e
                            ? s / 6e4
                            : "hour" === e
                            ? s / 36e5
                            : "day" === e
                            ? (s - n) / 864e5
                            : "week" === e
                            ? (s - n) / 6048e5
                            : s)),
                    i ? r : _(r))
                  : NaN)
              : NaN;
          }
          function ai(t, e) {
            var i,
              o,
              n = 12 * (e.year() - t.year()) + (e.month() - t.month()),
              s = t.clone().add(n, "months");
            return (
              e - s < 0
                ? ((i = t.clone().add(n - 1, "months")), (o = (e - s) / (s - i)))
                : ((i = t.clone().add(n + 1, "months")), (o = (e - s) / (i - s))),
              -(n + o) || 0
            );
          }
          function hi() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
          }
          function di() {
            if (!this.isValid()) return null;
            var t = this.clone().utc();
            return t.year() < 0 || t.year() > 9999
              ? K(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
              : T(Date.prototype.toISOString)
              ? this.toDate().toISOString()
              : K(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]");
          }
          function li() {
            if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
            var t = "moment",
              e = "";
            this.isLocal() ||
              ((t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
              (e = "Z"));
            var i = "[" + t + '("]',
              o = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
              n = "-MM-DD[T]HH:mm:ss.SSS",
              s = e + '[")]';
            return this.format(i + o + n + s);
          }
          function ui(t) {
            t || (t = this.isUtc() ? e.defaultFormatUtc : e.defaultFormat);
            var i = K(this, t);
            return this.localeData().postformat(i);
          }
          function pi(t, e) {
            return this.isValid() && ((b(t) && t.isValid()) || _e(t).isValid())
              ? Ve({to: this, from: t}).locale(this.locale()).humanize(!e)
              : this.localeData().invalidDate();
          }
          function ci(t) {
            return this.from(_e(), t);
          }
          function fi(t, e) {
            return this.isValid() && ((b(t) && t.isValid()) || _e(t).isValid())
              ? Ve({from: this, to: t}).locale(this.locale()).humanize(!e)
              : this.localeData().invalidDate();
          }
          function mi(t) {
            return this.to(_e(), t);
          }
          function gi(t) {
            var e;
            return void 0 === t
              ? this._locale._abbr
              : ((e = ie(t)), null != e && (this._locale = e), this);
          }
          function vi() {
            return this._locale;
          }
          function yi(t) {
            switch ((t = F(t))) {
              case "year":
                this.month(0);
              case "quarter":
              case "month":
                this.date(1);
              case "week":
              case "isoWeek":
              case "day":
              case "date":
                this.hours(0);
              case "hour":
                this.minutes(0);
              case "minute":
                this.seconds(0);
              case "second":
                this.milliseconds(0);
            }
            return (
              "week" === t && this.weekday(0),
              "isoWeek" === t && this.isoWeekday(1),
              "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
              this
            );
          }
          function bi(t) {
            return (
              (t = F(t)),
              void 0 === t || "millisecond" === t
                ? this
                : ("date" === t && (t = "day"),
                  this.startOf(t)
                    .add(1, "isoWeek" === t ? "week" : t)
                    .subtract(1, "ms"))
            );
          }
          function _i() {
            return this._d.valueOf() - 6e4 * (this._offset || 0);
          }
          function wi() {
            return Math.floor(this.valueOf() / 1e3);
          }
          function xi() {
            return new Date(this.valueOf());
          }
          function Di() {
            var t = this;
            return [
              t.year(),
              t.month(),
              t.date(),
              t.hour(),
              t.minute(),
              t.second(),
              t.millisecond(),
            ];
          }
          function Si() {
            var t = this;
            return {
              years: t.year(),
              months: t.month(),
              date: t.date(),
              hours: t.hours(),
              minutes: t.minutes(),
              seconds: t.seconds(),
              milliseconds: t.milliseconds(),
            };
          }
          function ki() {
            return this.isValid() ? this.toISOString() : null;
          }
          function Ti() {
            return m(this);
          }
          function Ci() {
            return u({}, f(this));
          }
          function Mi() {
            return f(this).overflow;
          }
          function Oi() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            };
          }
          function Ei(t, e) {
            q(0, [t, t.length], 0, e);
          }
          function Pi(t) {
            return Ri.call(
              this,
              t,
              this.week(),
              this.weekday(),
              this.localeData()._week.dow,
              this.localeData()._week.doy
            );
          }
          function Ni(t) {
            return Ri.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4);
          }
          function Ai() {
            return St(this.year(), 1, 4);
          }
          function Ii() {
            var t = this.localeData()._week;
            return St(this.year(), t.dow, t.doy);
          }
          function Ri(t, e, i, o, n) {
            var s;
            return null == t
              ? Dt(this, o, n).year
              : ((s = St(t, o, n)), e > s && (e = s), Li.call(this, t, e, i, o, n));
          }
          function Li(t, e, i, o, n) {
            var s = xt(t, e, i, o, n),
              r = _t(s.year, 0, s.dayOfYear);
            return (
              this.year(r.getUTCFullYear()),
              this.month(r.getUTCMonth()),
              this.date(r.getUTCDate()),
              this
            );
          }
          function Fi(t) {
            return null == t
              ? Math.ceil((this.month() + 1) / 3)
              : this.month(3 * (t - 1) + (this.month() % 3));
          }
          function Hi(t) {
            var e =
              Math.round(
                (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
              ) + 1;
            return null == t ? e : this.add(t - e, "d");
          }
          function Yi(t, e) {
            e[cn] = w(1e3 * ("0." + t));
          }
          function ji() {
            return this._isUTC ? "UTC" : "";
          }
          function Gi() {
            return this._isUTC ? "Coordinated Universal Time" : "";
          }
          function zi(t) {
            return _e(1e3 * t);
          }
          function Wi() {
            return _e.apply(null, arguments).parseZone();
          }
          function Ui(t) {
            return t;
          }
          function Vi(t, e, i, o) {
            var n = ie(),
              s = p().set(o, e);
            return n[i](s, t);
          }
          function Bi(t, e, i) {
            if ((a(t) && ((e = t), (t = void 0)), (t = t || ""), null != e))
              return Vi(t, e, i, "month");
            var o,
              n = [];
            for (o = 0; o < 12; o++) n[o] = Vi(t, o, i, "month");
            return n;
          }
          function qi(t, e, i, o) {
            "boolean" == typeof t
              ? (a(e) && ((i = e), (e = void 0)), (e = e || ""))
              : ((e = t),
                (i = e),
                (t = !1),
                a(e) && ((i = e), (e = void 0)),
                (e = e || ""));
            var n = ie(),
              s = t ? n._week.dow : 0;
            if (null != i) return Vi(e, (i + s) % 7, o, "day");
            var r,
              h = [];
            for (r = 0; r < 7; r++) h[r] = Vi(e, (r + s) % 7, o, "day");
            return h;
          }
          function Xi(t, e) {
            return Bi(t, e, "months");
          }
          function Zi(t, e) {
            return Bi(t, e, "monthsShort");
          }
          function Ki(t, e, i) {
            return qi(t, e, i, "weekdays");
          }
          function $i(t, e, i) {
            return qi(t, e, i, "weekdaysShort");
          }
          function Ji(t, e, i) {
            return qi(t, e, i, "weekdaysMin");
          }
          function Qi() {
            var t = this._data;
            return (
              (this._milliseconds = rs(this._milliseconds)),
              (this._days = rs(this._days)),
              (this._months = rs(this._months)),
              (t.milliseconds = rs(t.milliseconds)),
              (t.seconds = rs(t.seconds)),
              (t.minutes = rs(t.minutes)),
              (t.hours = rs(t.hours)),
              (t.months = rs(t.months)),
              (t.years = rs(t.years)),
              this
            );
          }
          function to(t, e, i, o) {
            var n = Ve(e, i);
            return (
              (t._milliseconds += o * n._milliseconds),
              (t._days += o * n._days),
              (t._months += o * n._months),
              t._bubble()
            );
          }
          function eo(t, e) {
            return to(this, t, e, 1);
          }
          function io(t, e) {
            return to(this, t, e, -1);
          }
          function oo(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t);
          }
          function no() {
            var t,
              e,
              i,
              o,
              n,
              s = this._milliseconds,
              r = this._days,
              a = this._months,
              h = this._data;
            return (
              (s >= 0 && r >= 0 && a >= 0) ||
                (s <= 0 && r <= 0 && a <= 0) ||
                ((s += 864e5 * oo(ro(a) + r)), (r = 0), (a = 0)),
              (h.milliseconds = s % 1e3),
              (t = _(s / 1e3)),
              (h.seconds = t % 60),
              (e = _(t / 60)),
              (h.minutes = e % 60),
              (i = _(e / 60)),
              (h.hours = i % 24),
              (r += _(i / 24)),
              (n = _(so(r))),
              (a += n),
              (r -= oo(ro(n))),
              (o = _(a / 12)),
              (a %= 12),
              (h.days = r),
              (h.months = a),
              (h.years = o),
              this
            );
          }
          function so(t) {
            return (4800 * t) / 146097;
          }
          function ro(t) {
            return (146097 * t) / 4800;
          }
          function ao(t) {
            if (!this.isValid()) return NaN;
            var e,
              i,
              o = this._milliseconds;
            if (((t = F(t)), "month" === t || "year" === t))
              return (
                (e = this._days + o / 864e5),
                (i = this._months + so(e)),
                "month" === t ? i : i / 12
              );
            switch (((e = this._days + Math.round(ro(this._months))), t)) {
              case "week":
                return e / 7 + o / 6048e5;
              case "day":
                return e + o / 864e5;
              case "hour":
                return 24 * e + o / 36e5;
              case "minute":
                return 1440 * e + o / 6e4;
              case "second":
                return 86400 * e + o / 1e3;
              case "millisecond":
                return Math.floor(864e5 * e) + o;
              default:
                throw new Error("Unknown unit " + t);
            }
          }
          function ho() {
            return this.isValid()
              ? this._milliseconds +
                  864e5 * this._days +
                  (this._months % 12) * 2592e6 +
                  31536e6 * w(this._months / 12)
              : NaN;
          }
          function lo(t) {
            return function () {
              return this.as(t);
            };
          }
          function uo(t) {
            return (t = F(t)), this.isValid() ? this[t + "s"]() : NaN;
          }
          function po(t) {
            return function () {
              return this.isValid() ? this._data[t] : NaN;
            };
          }
          function co() {
            return _(this.days() / 7);
          }
          function fo(t, e, i, o, n) {
            return n.relativeTime(e || 1, !!i, t, o);
          }
          function mo(t, e, i) {
            var o = Ve(t).abs(),
              n = xs(o.as("s")),
              s = xs(o.as("m")),
              r = xs(o.as("h")),
              a = xs(o.as("d")),
              h = xs(o.as("M")),
              d = xs(o.as("y")),
              l = (n <= Ds.ss && ["s", n]) ||
                (n < Ds.s && ["ss", n]) ||
                (s <= 1 && ["m"]) ||
                (s < Ds.m && ["mm", s]) ||
                (r <= 1 && ["h"]) ||
                (r < Ds.h && ["hh", r]) ||
                (a <= 1 && ["d"]) ||
                (a < Ds.d && ["dd", a]) ||
                (h <= 1 && ["M"]) ||
                (h < Ds.M && ["MM", h]) ||
                (d <= 1 && ["y"]) || ["yy", d];
            return (l[2] = e), (l[3] = +t > 0), (l[4] = i), fo.apply(null, l);
          }
          function go(t) {
            return void 0 === t ? xs : "function" == typeof t && ((xs = t), !0);
          }
          function vo(t, e) {
            return (
              void 0 !== Ds[t] &&
              (void 0 === e ? Ds[t] : ((Ds[t] = e), "s" === t && (Ds.ss = e - 1), !0))
            );
          }
          function yo(t) {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e = this.localeData(),
              i = mo(this, !t, e);
            return t && (i = e.pastFuture(+this, i)), e.postformat(i);
          }
          function bo() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var t,
              e,
              i,
              o = Ss(this._milliseconds) / 1e3,
              n = Ss(this._days),
              s = Ss(this._months);
            (t = _(o / 60)),
              (e = _(t / 60)),
              (o %= 60),
              (t %= 60),
              (i = _(s / 12)),
              (s %= 12);
            var r = i,
              a = s,
              h = n,
              d = e,
              l = t,
              u = o,
              p = this.asSeconds();
            return p
              ? (p < 0 ? "-" : "") +
                  "P" +
                  (r ? r + "Y" : "") +
                  (a ? a + "M" : "") +
                  (h ? h + "D" : "") +
                  (d || l || u ? "T" : "") +
                  (d ? d + "H" : "") +
                  (l ? l + "M" : "") +
                  (u ? u + "S" : "")
              : "P0D";
          }
          var _o, wo;
          wo = Array.prototype.some
            ? Array.prototype.some
            : function (t) {
                for (var e = Object(this), i = e.length >>> 0, o = 0; o < i; o++)
                  if (o in e && t.call(this, e[o], o, e)) return !0;
                return !1;
              };
          var xo = wo,
            Do = (e.momentProperties = []),
            So = !1,
            ko = {};
          (e.suppressDeprecationWarnings = !1), (e.deprecationHandler = null);
          var To;
          To = Object.keys
            ? Object.keys
            : function (t) {
                var e,
                  i = [];
                for (e in t) l(t, e) && i.push(e);
                return i;
              };
          var Co,
            Mo = To,
            Oo = {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            Eo = {
              LTS: "h:mm:ss A",
              LT: "h:mm A",
              L: "MM/DD/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            Po = "Invalid date",
            No = "%d",
            Ao = /\d{1,2}/,
            Io = {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            Ro = {},
            Lo = {},
            Fo =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Ho = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            Yo = {},
            jo = {},
            Go = /\d/,
            zo = /\d\d/,
            Wo = /\d{3}/,
            Uo = /\d{4}/,
            Vo = /[+-]?\d{6}/,
            Bo = /\d\d?/,
            qo = /\d\d\d\d?/,
            Xo = /\d\d\d\d\d\d?/,
            Zo = /\d{1,3}/,
            Ko = /\d{1,4}/,
            $o = /[+-]?\d{1,6}/,
            Jo = /\d+/,
            Qo = /[+-]?\d+/,
            tn = /Z|[+-]\d\d:?\d\d/gi,
            en = /Z|[+-]\d\d(?::?\d\d)?/gi,
            on = /[+-]?\d+(\.\d{1,3})?/,
            nn =
              /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
            sn = {},
            rn = {},
            an = 0,
            hn = 1,
            dn = 2,
            ln = 3,
            un = 4,
            pn = 5,
            cn = 6,
            fn = 7,
            mn = 8;
          Co = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (t) {
                var e;
                for (e = 0; e < this.length; ++e) if (this[e] === t) return e;
                return -1;
              };
          var gn = Co;
          q("M", ["MM", 2], "Mo", function () {
            return this.month() + 1;
          }),
            q("MMM", 0, 0, function (t) {
              return this.localeData().monthsShort(this, t);
            }),
            q("MMMM", 0, 0, function (t) {
              return this.localeData().months(this, t);
            }),
            L("month", "M"),
            Y("month", 8),
            J("M", Bo),
            J("MM", Bo, zo),
            J("MMM", function (t, e) {
              return e.monthsShortRegex(t);
            }),
            J("MMMM", function (t, e) {
              return e.monthsRegex(t);
            }),
            it(["M", "MM"], function (t, e) {
              e[hn] = w(t) - 1;
            }),
            it(["MMM", "MMMM"], function (t, e, i, o) {
              var n = i._locale.monthsParse(t, o, i._strict);
              null != n ? (e[hn] = n) : (f(i).invalidMonth = t);
            });
          var vn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            yn =
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            bn = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            _n = nn,
            wn = nn;
          q("Y", 0, 0, function () {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t;
          }),
            q(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            q(0, ["YYYY", 4], 0, "year"),
            q(0, ["YYYYY", 5], 0, "year"),
            q(0, ["YYYYYY", 6, !0], 0, "year"),
            L("year", "y"),
            Y("year", 1),
            J("Y", Qo),
            J("YY", Bo, zo),
            J("YYYY", Ko, Uo),
            J("YYYYY", $o, Vo),
            J("YYYYYY", $o, Vo),
            it(["YYYYY", "YYYYYY"], an),
            it("YYYY", function (t, i) {
              i[an] = 2 === t.length ? e.parseTwoDigitYear(t) : w(t);
            }),
            it("YY", function (t, i) {
              i[an] = e.parseTwoDigitYear(t);
            }),
            it("Y", function (t, e) {
              e[an] = parseInt(t, 10);
            }),
            (e.parseTwoDigitYear = function (t) {
              return w(t) + (w(t) > 68 ? 1900 : 2e3);
            });
          var xn = G("FullYear", !0);
          q("w", ["ww", 2], "wo", "week"),
            q("W", ["WW", 2], "Wo", "isoWeek"),
            L("week", "w"),
            L("isoWeek", "W"),
            Y("week", 5),
            Y("isoWeek", 5),
            J("w", Bo),
            J("ww", Bo, zo),
            J("W", Bo),
            J("WW", Bo, zo),
            ot(["w", "ww", "W", "WW"], function (t, e, i, o) {
              e[o.substr(0, 1)] = w(t);
            });
          var Dn = {dow: 0, doy: 6};
          q("d", 0, "do", "day"),
            q("dd", 0, 0, function (t) {
              return this.localeData().weekdaysMin(this, t);
            }),
            q("ddd", 0, 0, function (t) {
              return this.localeData().weekdaysShort(this, t);
            }),
            q("dddd", 0, 0, function (t) {
              return this.localeData().weekdays(this, t);
            }),
            q("e", 0, 0, "weekday"),
            q("E", 0, 0, "isoWeekday"),
            L("day", "d"),
            L("weekday", "e"),
            L("isoWeekday", "E"),
            Y("day", 11),
            Y("weekday", 11),
            Y("isoWeekday", 11),
            J("d", Bo),
            J("e", Bo),
            J("E", Bo),
            J("dd", function (t, e) {
              return e.weekdaysMinRegex(t);
            }),
            J("ddd", function (t, e) {
              return e.weekdaysShortRegex(t);
            }),
            J("dddd", function (t, e) {
              return e.weekdaysRegex(t);
            }),
            ot(["dd", "ddd", "dddd"], function (t, e, i, o) {
              var n = i._locale.weekdaysParse(t, o, i._strict);
              null != n ? (e.d = n) : (f(i).invalidWeekday = t);
            }),
            ot(["d", "e", "E"], function (t, e, i, o) {
              e[o] = w(t);
            });
          var Sn = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
              "_"
            ),
            kn = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Tn = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Cn = nn,
            Mn = nn,
            On = nn;
          q("H", ["HH", 2], 0, "hour"),
            q("h", ["hh", 2], 0, Ut),
            q("k", ["kk", 2], 0, Vt),
            q("hmm", 0, 0, function () {
              return "" + Ut.apply(this) + B(this.minutes(), 2);
            }),
            q("hmmss", 0, 0, function () {
              return "" + Ut.apply(this) + B(this.minutes(), 2) + B(this.seconds(), 2);
            }),
            q("Hmm", 0, 0, function () {
              return "" + this.hours() + B(this.minutes(), 2);
            }),
            q("Hmmss", 0, 0, function () {
              return "" + this.hours() + B(this.minutes(), 2) + B(this.seconds(), 2);
            }),
            Bt("a", !0),
            Bt("A", !1),
            L("hour", "h"),
            Y("hour", 13),
            J("a", qt),
            J("A", qt),
            J("H", Bo),
            J("h", Bo),
            J("k", Bo),
            J("HH", Bo, zo),
            J("hh", Bo, zo),
            J("kk", Bo, zo),
            J("hmm", qo),
            J("hmmss", Xo),
            J("Hmm", qo),
            J("Hmmss", Xo),
            it(["H", "HH"], ln),
            it(["k", "kk"], function (t, e, i) {
              var o = w(t);
              e[ln] = 24 === o ? 0 : o;
            }),
            it(["a", "A"], function (t, e, i) {
              (i._isPm = i._locale.isPM(t)), (i._meridiem = t);
            }),
            it(["h", "hh"], function (t, e, i) {
              (e[ln] = w(t)), (f(i).bigHour = !0);
            }),
            it("hmm", function (t, e, i) {
              var o = t.length - 2;
              (e[ln] = w(t.substr(0, o))),
                (e[un] = w(t.substr(o))),
                (f(i).bigHour = !0);
            }),
            it("hmmss", function (t, e, i) {
              var o = t.length - 4,
                n = t.length - 2;
              (e[ln] = w(t.substr(0, o))),
                (e[un] = w(t.substr(o, 2))),
                (e[pn] = w(t.substr(n))),
                (f(i).bigHour = !0);
            }),
            it("Hmm", function (t, e, i) {
              var o = t.length - 2;
              (e[ln] = w(t.substr(0, o))), (e[un] = w(t.substr(o)));
            }),
            it("Hmmss", function (t, e, i) {
              var o = t.length - 4,
                n = t.length - 2;
              (e[ln] = w(t.substr(0, o))),
                (e[un] = w(t.substr(o, 2))),
                (e[pn] = w(t.substr(n)));
            });
          var En,
            Pn = /[ap]\.?m?\.?/i,
            Nn = G("Hours", !0),
            An = {
              calendar: Oo,
              longDateFormat: Eo,
              invalidDate: Po,
              ordinal: No,
              dayOfMonthOrdinalParse: Ao,
              relativeTime: Io,
              months: yn,
              monthsShort: bn,
              week: Dn,
              weekdays: Sn,
              weekdaysMin: Tn,
              weekdaysShort: kn,
              meridiemParse: Pn,
            },
            In = {},
            Rn = {},
            Ln =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Fn =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Hn = /Z|[+-]\d\d(?::?\d\d)?/,
            Yn = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
            ],
            jn = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            Gn = /^\/?Date\((\-?\d+)/i,
            zn =
              /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
          (e.createFromInputFallback = S(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (t) {
              t._d = new Date(t._i + (t._useUTC ? " UTC" : ""));
            }
          )),
            (e.ISO_8601 = function () {}),
            (e.RFC_2822 = function () {});
          var Wn = S(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var t = _e.apply(null, arguments);
                return this.isValid() && t.isValid() ? (t < this ? this : t) : g();
              }
            ),
            Un = S(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var t = _e.apply(null, arguments);
                return this.isValid() && t.isValid() ? (t > this ? this : t) : g();
              }
            ),
            Vn = function () {
              return Date.now ? Date.now() : +new Date();
            },
            Bn = [
              "year",
              "quarter",
              "month",
              "week",
              "day",
              "hour",
              "minute",
              "second",
              "millisecond",
            ];
          Ee("Z", ":"),
            Ee("ZZ", ""),
            J("Z", en),
            J("ZZ", en),
            it(["Z", "ZZ"], function (t, e, i) {
              (i._useUTC = !0), (i._tzm = Pe(en, t));
            });
          var qn = /([\+\-]|\d\d)/gi;
          e.updateOffset = function () {};
          var Xn = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
            Zn =
              /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
          (Ve.fn = Ce.prototype), (Ve.invalid = Te);
          var Kn = Ze(1, "add"),
            $n = Ze(-1, "subtract");
          (e.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (e.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var Jn = S(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (t) {
              return void 0 === t ? this.localeData() : this.locale(t);
            }
          );
          q(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100;
          }),
            q(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            Ei("gggg", "weekYear"),
            Ei("ggggg", "weekYear"),
            Ei("GGGG", "isoWeekYear"),
            Ei("GGGGG", "isoWeekYear"),
            L("weekYear", "gg"),
            L("isoWeekYear", "GG"),
            Y("weekYear", 1),
            Y("isoWeekYear", 1),
            J("G", Qo),
            J("g", Qo),
            J("GG", Bo, zo),
            J("gg", Bo, zo),
            J("GGGG", Ko, Uo),
            J("gggg", Ko, Uo),
            J("GGGGG", $o, Vo),
            J("ggggg", $o, Vo),
            ot(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, o) {
              e[o.substr(0, 2)] = w(t);
            }),
            ot(["gg", "GG"], function (t, i, o, n) {
              i[n] = e.parseTwoDigitYear(t);
            }),
            q("Q", 0, "Qo", "quarter"),
            L("quarter", "Q"),
            Y("quarter", 7),
            J("Q", Go),
            it("Q", function (t, e) {
              e[hn] = 3 * (w(t) - 1);
            }),
            q("D", ["DD", 2], "Do", "date"),
            L("date", "D"),
            Y("date", 9),
            J("D", Bo),
            J("DD", Bo, zo),
            J("Do", function (t, e) {
              return t
                ? e._dayOfMonthOrdinalParse || e._ordinalParse
                : e._dayOfMonthOrdinalParseLenient;
            }),
            it(["D", "DD"], dn),
            it("Do", function (t, e) {
              e[dn] = w(t.match(Bo)[0], 10);
            });
          var Qn = G("Date", !0);
          q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            L("dayOfYear", "DDD"),
            Y("dayOfYear", 4),
            J("DDD", Zo),
            J("DDDD", Wo),
            it(["DDD", "DDDD"], function (t, e, i) {
              i._dayOfYear = w(t);
            }),
            q("m", ["mm", 2], 0, "minute"),
            L("minute", "m"),
            Y("minute", 14),
            J("m", Bo),
            J("mm", Bo, zo),
            it(["m", "mm"], un);
          var ts = G("Minutes", !1);
          q("s", ["ss", 2], 0, "second"),
            L("second", "s"),
            Y("second", 15),
            J("s", Bo),
            J("ss", Bo, zo),
            it(["s", "ss"], pn);
          var es = G("Seconds", !1);
          q("S", 0, 0, function () {
            return ~~(this.millisecond() / 100);
          }),
            q(0, ["SS", 2], 0, function () {
              return ~~(this.millisecond() / 10);
            }),
            q(0, ["SSS", 3], 0, "millisecond"),
            q(0, ["SSSS", 4], 0, function () {
              return 10 * this.millisecond();
            }),
            q(0, ["SSSSS", 5], 0, function () {
              return 100 * this.millisecond();
            }),
            q(0, ["SSSSSS", 6], 0, function () {
              return 1e3 * this.millisecond();
            }),
            q(0, ["SSSSSSS", 7], 0, function () {
              return 1e4 * this.millisecond();
            }),
            q(0, ["SSSSSSSS", 8], 0, function () {
              return 1e5 * this.millisecond();
            }),
            q(0, ["SSSSSSSSS", 9], 0, function () {
              return 1e6 * this.millisecond();
            }),
            L("millisecond", "ms"),
            Y("millisecond", 16),
            J("S", Zo, Go),
            J("SS", Zo, zo),
            J("SSS", Zo, Wo);
          var is;
          for (is = "SSSS"; is.length <= 9; is += "S") J(is, Jo);
          for (is = "S"; is.length <= 9; is += "S") it(is, Yi);
          var os = G("Milliseconds", !1);
          q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
          var ns = y.prototype;
          (ns.add = Kn),
            (ns.calendar = Je),
            (ns.clone = Qe),
            (ns.diff = ri),
            (ns.endOf = bi),
            (ns.format = ui),
            (ns.from = pi),
            (ns.fromNow = ci),
            (ns.to = fi),
            (ns.toNow = mi),
            (ns.get = U),
            (ns.invalidAt = Mi),
            (ns.isAfter = ti),
            (ns.isBefore = ei),
            (ns.isBetween = ii),
            (ns.isSame = oi),
            (ns.isSameOrAfter = ni),
            (ns.isSameOrBefore = si),
            (ns.isValid = Ti),
            (ns.lang = Jn),
            (ns.locale = gi),
            (ns.localeData = vi),
            (ns.max = Un),
            (ns.min = Wn),
            (ns.parsingFlags = Ci),
            (ns.set = V),
            (ns.startOf = yi),
            (ns.subtract = $n),
            (ns.toArray = Di),
            (ns.toObject = Si),
            (ns.toDate = xi),
            (ns.toISOString = di),
            (ns.inspect = li),
            (ns.toJSON = ki),
            (ns.toString = hi),
            (ns.unix = wi),
            (ns.valueOf = _i),
            (ns.creationData = Oi),
            (ns.year = xn),
            (ns.isLeapYear = yt),
            (ns.weekYear = Pi),
            (ns.isoWeekYear = Ni),
            (ns.quarter = ns.quarters = Fi),
            (ns.month = ut),
            (ns.daysInMonth = pt),
            (ns.week = ns.weeks = Mt),
            (ns.isoWeek = ns.isoWeeks = Ot),
            (ns.weeksInYear = Ii),
            (ns.isoWeeksInYear = Ai),
            (ns.date = Qn),
            (ns.day = ns.days = Ft),
            (ns.weekday = Ht),
            (ns.isoWeekday = Yt),
            (ns.dayOfYear = Hi),
            (ns.hour = ns.hours = Nn),
            (ns.minute = ns.minutes = ts),
            (ns.second = ns.seconds = es),
            (ns.millisecond = ns.milliseconds = os),
            (ns.utcOffset = Ie),
            (ns.utc = Le),
            (ns.local = Fe),
            (ns.parseZone = He),
            (ns.hasAlignedHourOffset = Ye),
            (ns.isDST = je),
            (ns.isLocal = ze),
            (ns.isUtcOffset = We),
            (ns.isUtc = Ue),
            (ns.isUTC = Ue),
            (ns.zoneAbbr = ji),
            (ns.zoneName = Gi),
            (ns.dates = S("dates accessor is deprecated. Use date instead.", Qn)),
            (ns.months = S("months accessor is deprecated. Use month instead", ut)),
            (ns.years = S("years accessor is deprecated. Use year instead", xn)),
            (ns.zone = S(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              Re
            )),
            (ns.isDSTShifted = S(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              Ge
            ));
          var ss = O.prototype;
          (ss.calendar = E),
            (ss.longDateFormat = P),
            (ss.invalidDate = N),
            (ss.ordinal = A),
            (ss.preparse = Ui),
            (ss.postformat = Ui),
            (ss.relativeTime = I),
            (ss.pastFuture = R),
            (ss.set = C),
            (ss.months = rt),
            (ss.monthsShort = at),
            (ss.monthsParse = dt),
            (ss.monthsRegex = ft),
            (ss.monthsShortRegex = ct),
            (ss.week = kt),
            (ss.firstDayOfYear = Ct),
            (ss.firstDayOfWeek = Tt),
            (ss.weekdays = Nt),
            (ss.weekdaysMin = It),
            (ss.weekdaysShort = At),
            (ss.weekdaysParse = Lt),
            (ss.weekdaysRegex = jt),
            (ss.weekdaysShortRegex = Gt),
            (ss.weekdaysMinRegex = zt),
            (ss.isPM = Xt),
            (ss.meridiem = Zt),
            Qt("en", {
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (t) {
                var e = t % 10,
                  i =
                    1 === w((t % 100) / 10)
                      ? "th"
                      : 1 === e
                      ? "st"
                      : 2 === e
                      ? "nd"
                      : 3 === e
                      ? "rd"
                      : "th";
                return t + i;
              },
            }),
            (e.lang = S("moment.lang is deprecated. Use moment.locale instead.", Qt)),
            (e.langData = S(
              "moment.langData is deprecated. Use moment.localeData instead.",
              ie
            ));
          var rs = Math.abs,
            as = lo("ms"),
            hs = lo("s"),
            ds = lo("m"),
            ls = lo("h"),
            us = lo("d"),
            ps = lo("w"),
            cs = lo("M"),
            fs = lo("y"),
            ms = po("milliseconds"),
            gs = po("seconds"),
            vs = po("minutes"),
            ys = po("hours"),
            bs = po("days"),
            _s = po("months"),
            ws = po("years"),
            xs = Math.round,
            Ds = {ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11},
            Ss = Math.abs,
            ks = Ce.prototype;
          return (
            (ks.isValid = ke),
            (ks.abs = Qi),
            (ks.add = eo),
            (ks.subtract = io),
            (ks.as = ao),
            (ks.asMilliseconds = as),
            (ks.asSeconds = hs),
            (ks.asMinutes = ds),
            (ks.asHours = ls),
            (ks.asDays = us),
            (ks.asWeeks = ps),
            (ks.asMonths = cs),
            (ks.asYears = fs),
            (ks.valueOf = ho),
            (ks._bubble = no),
            (ks.get = uo),
            (ks.milliseconds = ms),
            (ks.seconds = gs),
            (ks.minutes = vs),
            (ks.hours = ys),
            (ks.days = bs),
            (ks.weeks = co),
            (ks.months = _s),
            (ks.years = ws),
            (ks.humanize = yo),
            (ks.toISOString = bo),
            (ks.toString = bo),
            (ks.toJSON = bo),
            (ks.locale = gi),
            (ks.localeData = vi),
            (ks.toIsoString = S(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              bo
            )),
            (ks.lang = Jn),
            q("X", 0, 0, "unix"),
            q("x", 0, 0, "valueOf"),
            J("x", Qo),
            J("X", on),
            it("X", function (t, e, i) {
              i._d = new Date(1e3 * parseFloat(t, 10));
            }),
            it("x", function (t, e, i) {
              i._d = new Date(w(t));
            }),
            (e.version = "2.18.1"),
            i(_e),
            (e.fn = ns),
            (e.min = xe),
            (e.max = De),
            (e.now = Vn),
            (e.utc = p),
            (e.unix = zi),
            (e.months = Xi),
            (e.isDate = h),
            (e.locale = Qt),
            (e.invalid = g),
            (e.duration = Ve),
            (e.isMoment = b),
            (e.weekdays = Ki),
            (e.parseZone = Wi),
            (e.localeData = ie),
            (e.isDuration = Me),
            (e.monthsShort = Zi),
            (e.weekdaysMin = Ji),
            (e.defineLocale = te),
            (e.updateLocale = ee),
            (e.locales = oe),
            (e.weekdaysShort = $i),
            (e.normalizeUnits = F),
            (e.relativeTimeRounding = go),
            (e.relativeTimeThreshold = vo),
            (e.calendarFormat = $e),
            (e.prototype = ns),
            e
          );
        });
      }.call(e, i(84)(t)));
    },
    function (t, e) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            (t.children = []),
            (t.webpackPolyfill = 1)),
          t
        );
      };
    },
    function (t, e) {
      function i(t) {
        throw new Error("Cannot find module '" + t + "'.");
      }
      (i.keys = function () {
        return [];
      }),
        (i.resolve = i),
        (t.exports = i),
        (i.id = 85);
    },
    function (t, e) {
      (function (e) {
        function i(t, e, i) {
          var o = (e && i) || 0,
            n = 0;
          for (
            e = e || [],
              t.toLowerCase().replace(/[0-9a-f]{2}/g, function (t) {
                n < 16 && (e[o + n++] = u[t]);
              });
            n < 16;

          )
            e[o + n++] = 0;
          return e;
        }
        function o(t, e) {
          var i = e || 0,
            o = l;
          return (
            o[t[i++]] +
            o[t[i++]] +
            o[t[i++]] +
            o[t[i++]] +
            "-" +
            o[t[i++]] +
            o[t[i++]] +
            "-" +
            o[t[i++]] +
            o[t[i++]] +
            "-" +
            o[t[i++]] +
            o[t[i++]] +
            "-" +
            o[t[i++]] +
            o[t[i++]] +
            o[t[i++]] +
            o[t[i++]] +
            o[t[i++]] +
            o[t[i++]]
          );
        }
        function n(t, e, i) {
          var n = (e && i) || 0,
            s = e || [];
          t = t || {};
          var r = void 0 !== t.clockseq ? t.clockseq : m,
            a = void 0 !== t.msecs ? t.msecs : new Date().getTime(),
            h = void 0 !== t.nsecs ? t.nsecs : v + 1,
            d = a - g + (h - v) / 1e4;
          if (
            (d < 0 && void 0 === t.clockseq && (r = (r + 1) & 16383),
            (d < 0 || a > g) && void 0 === t.nsecs && (h = 0),
            h >= 1e4)
          )
            throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
          (g = a), (v = h), (m = r), (a += 122192928e5);
          var l = (1e4 * (268435455 & a) + h) % 4294967296;
          (s[n++] = (l >>> 24) & 255),
            (s[n++] = (l >>> 16) & 255),
            (s[n++] = (l >>> 8) & 255),
            (s[n++] = 255 & l);
          var u = ((a / 4294967296) * 1e4) & 268435455;
          (s[n++] = (u >>> 8) & 255),
            (s[n++] = 255 & u),
            (s[n++] = ((u >>> 24) & 15) | 16),
            (s[n++] = (u >>> 16) & 255),
            (s[n++] = (r >>> 8) | 128),
            (s[n++] = 255 & r);
          for (var p = t.node || f, c = 0; c < 6; c++) s[n + c] = p[c];
          return e ? e : o(s);
        }
        function s(t, e, i) {
          var n = (e && i) || 0;
          "string" == typeof t &&
            ((e = "binary" == t ? new Array(16) : null), (t = null)),
            (t = t || {});
          var s = t.random || (t.rng || r)();
          if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), e))
            for (var a = 0; a < 16; a++) e[n + a] = s[a];
          return e || o(s);
        }
        var r,
          a =
            "undefined" != typeof window ? window : "undefined" != typeof e ? e : null;
        if (a && a.crypto && crypto.getRandomValues) {
          var h = new Uint8Array(16);
          r = function () {
            return crypto.getRandomValues(h), h;
          };
        }
        if (!r) {
          var d = new Array(16);
          r = function () {
            for (var t, e = 0; e < 16; e++)
              0 === (3 & e) && (t = 4294967296 * Math.random()),
                (d[e] = (t >>> ((3 & e) << 3)) & 255);
            return d;
          };
        }
        for (var l = [], u = {}, p = 0; p < 256; p++)
          (l[p] = (p + 256).toString(16).substr(1)), (u[l[p]] = p);
        var c = r(),
          f = [1 | c[0], c[1], c[2], c[3], c[4], c[5]],
          m = 16383 & ((c[6] << 8) | c[7]),
          g = 0,
          v = 0,
          y = s;
        (y.v1 = n), (y.v4 = s), (y.parse = i), (y.unparse = o), (t.exports = y);
      }.call(
        e,
        (function () {
          return this;
        })()
      ));
    },
    function (t, e) {
      (e.prepareElements = function (t) {
        for (var e in t)
          t.hasOwnProperty(e) && ((t[e].redundant = t[e].used), (t[e].used = []));
      }),
        (e.cleanupElements = function (t) {
          for (var e in t)
            if (t.hasOwnProperty(e) && t[e].redundant) {
              for (var i = 0; i < t[e].redundant.length; i++)
                t[e].redundant[i].parentNode.removeChild(t[e].redundant[i]);
              t[e].redundant = [];
            }
        }),
        (e.resetElements = function (t) {
          e.prepareElements(t), e.cleanupElements(t), e.prepareElements(t);
        }),
        (e.getSVGElement = function (t, e, i) {
          var o;
          return (
            e.hasOwnProperty(t)
              ? e[t].redundant.length > 0
                ? ((o = e[t].redundant[0]), e[t].redundant.shift())
                : ((o = document.createElementNS("http://www.w3.org/2000/svg", t)),
                  i.appendChild(o))
              : ((o = document.createElementNS("http://www.w3.org/2000/svg", t)),
                (e[t] = {used: [], redundant: []}),
                i.appendChild(o)),
            e[t].used.push(o),
            o
          );
        }),
        (e.getDOMElement = function (t, e, i, o) {
          var n;
          return (
            e.hasOwnProperty(t)
              ? e[t].redundant.length > 0
                ? ((n = e[t].redundant[0]), e[t].redundant.shift())
                : ((n = document.createElement(t)),
                  void 0 !== o ? i.insertBefore(n, o) : i.appendChild(n))
              : ((n = document.createElement(t)),
                (e[t] = {used: [], redundant: []}),
                void 0 !== o ? i.insertBefore(n, o) : i.appendChild(n)),
            e[t].used.push(n),
            n
          );
        }),
        (e.drawPoint = function (t, i, o, n, s, r) {
          var a;
          if (
            ("circle" == o.style
              ? ((a = e.getSVGElement("circle", n, s)),
                a.setAttributeNS(null, "cx", t),
                a.setAttributeNS(null, "cy", i),
                a.setAttributeNS(null, "r", 0.5 * o.size))
              : ((a = e.getSVGElement("rect", n, s)),
                a.setAttributeNS(null, "x", t - 0.5 * o.size),
                a.setAttributeNS(null, "y", i - 0.5 * o.size),
                a.setAttributeNS(null, "width", o.size),
                a.setAttributeNS(null, "height", o.size)),
            void 0 !== o.styles && a.setAttributeNS(null, "style", o.styles),
            a.setAttributeNS(null, "class", o.className + " vis-point"),
            r)
          ) {
            var h = e.getSVGElement("text", n, s);
            r.xOffset && (t += r.xOffset),
              r.yOffset && (i += r.yOffset),
              r.content && (h.textContent = r.content),
              r.className &&
                h.setAttributeNS(null, "class", r.className + " vis-label"),
              h.setAttributeNS(null, "x", t),
              h.setAttributeNS(null, "y", i);
          }
          return a;
        }),
        (e.drawBar = function (t, i, o, n, s, r, a, h) {
          if (0 != n) {
            n < 0 && ((n *= -1), (i -= n));
            var d = e.getSVGElement("rect", r, a);
            d.setAttributeNS(null, "x", t - 0.5 * o),
              d.setAttributeNS(null, "y", i),
              d.setAttributeNS(null, "width", o),
              d.setAttributeNS(null, "height", n),
              d.setAttributeNS(null, "class", s),
              h && d.setAttributeNS(null, "style", h);
          }
        });
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e) {
        if (
          (t && !Array.isArray(t) && ((e = t), (t = null)),
          (this._options = e || {}),
          (this._data = {}),
          (this.length = 0),
          (this._fieldId = this._options.fieldId || "id"),
          (this._type = {}),
          this._options.type)
        )
          for (
            var i = (0, l.default)(this._options.type), o = 0, n = i.length;
            o < n;
            o++
          ) {
            var s = i[o],
              r = this._options.type[s];
            "Date" == r || "ISODate" == r || "ASPDate" == r
              ? (this._type[s] = "Date")
              : (this._type[s] = r);
          }
        if (this._options.convert)
          throw new Error('Option "convert" is deprecated. Use "type" instead.');
        (this._subscribers = {}), t && this.add(t), this.setOptions(e);
      }
      var s = i(89),
        r = o(s),
        a = i(62),
        h = o(a),
        d = i(58),
        l = o(d),
        u = i(1),
        p = i(91);
      (n.prototype.setOptions = function (t) {
        t &&
          void 0 !== t.queue &&
          (t.queue === !1
            ? this._queue && (this._queue.destroy(), delete this._queue)
            : (this._queue ||
                (this._queue = p.extend(this, {replace: ["add", "update", "remove"]})),
              "object" === (0, h.default)(t.queue) && this._queue.setOptions(t.queue)));
      }),
        (n.prototype.on = function (t, e) {
          var i = this._subscribers[t];
          i || ((i = []), (this._subscribers[t] = i)), i.push({callback: e});
        }),
        (n.prototype.subscribe = function () {
          throw new Error("DataSet.subscribe is deprecated. Use DataSet.on instead.");
        }),
        (n.prototype.off = function (t, e) {
          var i = this._subscribers[t];
          i &&
            (this._subscribers[t] = i.filter(function (t) {
              return t.callback != e;
            }));
        }),
        (n.prototype.unsubscribe = function () {
          throw new Error(
            "DataSet.unsubscribe is deprecated. Use DataSet.off instead."
          );
        }),
        (n.prototype._trigger = function (t, e, i) {
          if ("*" == t) throw new Error("Cannot trigger event *");
          var o = [];
          t in this._subscribers && (o = o.concat(this._subscribers[t])),
            "*" in this._subscribers && (o = o.concat(this._subscribers["*"]));
          for (var n = 0, s = o.length; n < s; n++) {
            var r = o[n];
            r.callback && r.callback(t, e, i || null);
          }
        }),
        (n.prototype.add = function (t, e) {
          var i,
            o = [],
            n = this;
          if (Array.isArray(t))
            for (var s = 0, r = t.length; s < r; s++) (i = n._addItem(t[s])), o.push(i);
          else {
            if (
              !t ||
              "object" !== ("undefined" == typeof t ? "undefined" : (0, h.default)(t))
            )
              throw new Error("Unknown dataType");
            (i = n._addItem(t)), o.push(i);
          }
          return o.length && this._trigger("add", {items: o}, e), o;
        }),
        (n.prototype.update = function (t, e) {
          var i = [],
            o = [],
            n = [],
            s = [],
            r = this,
            a = r._fieldId,
            d = function (t) {
              var e = t[a];
              if (r._data[e]) {
                var h = u.extend({}, r._data[e]);
                (e = r._updateItem(t)), o.push(e), s.push(t), n.push(h);
              } else (e = r._addItem(t)), i.push(e);
            };
          if (Array.isArray(t))
            for (var l = 0, p = t.length; l < p; l++)
              t[l] && "object" === (0, h.default)(t[l])
                ? d(t[l])
                : console.warn(
                    "Ignoring input item, which is not an object at index " + l
                  );
          else {
            if (
              !t ||
              "object" !== ("undefined" == typeof t ? "undefined" : (0, h.default)(t))
            )
              throw new Error("Unknown dataType");
            d(t);
          }
          if ((i.length && this._trigger("add", {items: i}, e), o.length)) {
            var c = {items: o, oldData: n, data: s};
            this._trigger("update", c, e);
          }
          return i.concat(o);
        }),
        (n.prototype.get = function (t) {
          var e,
            i,
            o,
            n = this,
            s = u.getType(arguments[0]);
          "String" == s || "Number" == s
            ? ((e = arguments[0]), (o = arguments[1]))
            : "Array" == s
            ? ((i = arguments[0]), (o = arguments[1]))
            : (o = arguments[0]);
          var r;
          if (o && o.returnType) {
            var a = ["Array", "Object"];
            r = a.indexOf(o.returnType) == -1 ? "Array" : o.returnType;
          } else r = "Array";
          var h,
            d,
            p,
            c,
            f,
            m = (o && o.type) || this._options.type,
            g = o && o.filter,
            v = [];
          if (void 0 != e) (h = n._getItem(e, m)), h && g && !g(h) && (h = null);
          else if (void 0 != i)
            for (c = 0, f = i.length; c < f; c++)
              (h = n._getItem(i[c], m)), (g && !g(h)) || v.push(h);
          else
            for (d = (0, l.default)(this._data), c = 0, f = d.length; c < f; c++)
              (p = d[c]), (h = n._getItem(p, m)), (g && !g(h)) || v.push(h);
          if ((o && o.order && void 0 == e && this._sort(v, o.order), o && o.fields)) {
            var y = o.fields;
            if (void 0 != e) h = this._filterFields(h, y);
            else
              for (c = 0, f = v.length; c < f; c++) v[c] = this._filterFields(v[c], y);
          }
          if ("Object" == r) {
            var b,
              _ = {};
            for (c = 0, f = v.length; c < f; c++) (b = v[c]), (_[b.id] = b);
            return _;
          }
          return void 0 != e ? h : v;
        }),
        (n.prototype.getIds = function (t) {
          var e,
            i,
            o,
            n,
            s,
            r = this._data,
            a = t && t.filter,
            h = t && t.order,
            d = (t && t.type) || this._options.type,
            u = (0, l.default)(r),
            p = [];
          if (a)
            if (h) {
              for (s = [], e = 0, i = u.length; e < i; e++)
                (o = u[e]), (n = this._getItem(o, d)), a(n) && s.push(n);
              for (this._sort(s, h), e = 0, i = s.length; e < i; e++)
                p.push(s[e][this._fieldId]);
            } else
              for (e = 0, i = u.length; e < i; e++)
                (o = u[e]), (n = this._getItem(o, d)), a(n) && p.push(n[this._fieldId]);
          else if (h) {
            for (s = [], e = 0, i = u.length; e < i; e++) (o = u[e]), s.push(r[o]);
            for (this._sort(s, h), e = 0, i = s.length; e < i; e++)
              p.push(s[e][this._fieldId]);
          } else
            for (e = 0, i = u.length; e < i; e++)
              (o = u[e]), (n = r[o]), p.push(n[this._fieldId]);
          return p;
        }),
        (n.prototype.getDataSet = function () {
          return this;
        }),
        (n.prototype.forEach = function (t, e) {
          var i,
            o,
            n,
            s,
            r = e && e.filter,
            a = (e && e.type) || this._options.type,
            h = this._data,
            d = (0, l.default)(h);
          if (e && e.order) {
            var u = this.get(e);
            for (i = 0, o = u.length; i < o; i++)
              (n = u[i]), (s = n[this._fieldId]), t(n, s);
          } else
            for (i = 0, o = d.length; i < o; i++)
              (s = d[i]), (n = this._getItem(s, a)), (r && !r(n)) || t(n, s);
        }),
        (n.prototype.map = function (t, e) {
          var i,
            o,
            n,
            s,
            r = e && e.filter,
            a = (e && e.type) || this._options.type,
            h = [],
            d = this._data,
            u = (0, l.default)(d);
          for (i = 0, o = u.length; i < o; i++)
            (n = u[i]), (s = this._getItem(n, a)), (r && !r(s)) || h.push(t(s, n));
          return e && e.order && this._sort(h, e.order), h;
        }),
        (n.prototype._filterFields = function (t, e) {
          if (!t) return t;
          var i,
            o,
            n = {},
            s = (0, l.default)(t),
            r = s.length;
          if (Array.isArray(e))
            for (i = 0; i < r; i++) (o = s[i]), e.indexOf(o) != -1 && (n[o] = t[o]);
          else
            for (i = 0; i < r; i++) (o = s[i]), e.hasOwnProperty(o) && (n[e[o]] = t[o]);
          return n;
        }),
        (n.prototype._sort = function (t, e) {
          if (u.isString(e)) {
            var i = e;
            t.sort(function (t, e) {
              var o = t[i],
                n = e[i];
              return o > n ? 1 : o < n ? -1 : 0;
            });
          } else {
            if ("function" != typeof e)
              throw new TypeError("Order must be a function or a string");
            t.sort(e);
          }
        }),
        (n.prototype.remove = function (t, e) {
          var i,
            o,
            n,
            s,
            r = [],
            a = [],
            h = [];
          for (h = Array.isArray(t) ? t : [t], i = 0, o = h.length; i < o; i++)
            (s = this._remove(h[i])),
              s && ((n = s[this._fieldId]), void 0 != n && (r.push(n), a.push(s)));
          return r.length && this._trigger("remove", {items: r, oldData: a}, e), r;
        }),
        (n.prototype._remove = function (t) {
          var e, i;
          return (
            u.isNumber(t) || u.isString(t)
              ? (i = t)
              : t &&
                "object" ===
                  ("undefined" == typeof t ? "undefined" : (0, h.default)(t)) &&
                (i = t[this._fieldId]),
            void 0 !== i && this._data[i]
              ? ((e = this._data[i]), delete this._data[i], this.length--, e)
              : null
          );
        }),
        (n.prototype.clear = function (t) {
          var e,
            i,
            o = (0, l.default)(this._data),
            n = [];
          for (e = 0, i = o.length; e < i; e++) n.push(this._data[o[e]]);
          return (
            (this._data = {}),
            (this.length = 0),
            this._trigger("remove", {items: o, oldData: n}, t),
            o
          );
        }),
        (n.prototype.max = function (t) {
          var e,
            i,
            o = this._data,
            n = (0, l.default)(o),
            s = null,
            r = null;
          for (e = 0, i = n.length; e < i; e++) {
            var a = n[e],
              h = o[a],
              d = h[t];
            null != d && (!s || d > r) && ((s = h), (r = d));
          }
          return s;
        }),
        (n.prototype.min = function (t) {
          var e,
            i,
            o = this._data,
            n = (0, l.default)(o),
            s = null,
            r = null;
          for (e = 0, i = n.length; e < i; e++) {
            var a = n[e],
              h = o[a],
              d = h[t];
            null != d && (!s || d < r) && ((s = h), (r = d));
          }
          return s;
        }),
        (n.prototype.distinct = function (t) {
          var e,
            i,
            o,
            n = this._data,
            s = (0, l.default)(n),
            r = [],
            a = (this._options.type && this._options.type[t]) || null,
            h = 0;
          for (e = 0, o = s.length; e < o; e++) {
            var d = s[e],
              p = n[d],
              c = p[t],
              f = !1;
            for (i = 0; i < h; i++)
              if (r[i] == c) {
                f = !0;
                break;
              }
            f || void 0 === c || ((r[h] = c), h++);
          }
          if (a) for (e = 0, o = r.length; e < o; e++) r[e] = u.convert(r[e], a);
          return r;
        }),
        (n.prototype._addItem = function (t) {
          var e = t[this._fieldId];
          if (void 0 != e) {
            if (this._data[e])
              throw new Error("Cannot add item: item with id " + e + " already exists");
          } else (e = u.randomUUID()), (t[this._fieldId] = e);
          var i,
            o,
            n = {},
            s = (0, l.default)(t);
          for (i = 0, o = s.length; i < o; i++) {
            var r = s[i],
              a = this._type[r];
            n[r] = u.convert(t[r], a);
          }
          return (this._data[e] = n), this.length++, e;
        }),
        (n.prototype._getItem = function (t, e) {
          var i,
            o,
            n,
            s,
            r = this._data[t];
          if (!r) return null;
          var a = {},
            h = (0, l.default)(r);
          if (e)
            for (n = 0, s = h.length; n < s; n++)
              (i = h[n]), (o = r[i]), (a[i] = u.convert(o, e[i]));
          else for (n = 0, s = h.length; n < s; n++) (i = h[n]), (o = r[i]), (a[i] = o);
          return a[this._fieldId] || (a[this._fieldId] = r.id), a;
        }),
        (n.prototype._updateItem = function (t) {
          var e = t[this._fieldId];
          if (void 0 == e)
            throw new Error(
              "Cannot update item: item has no id (item: " + (0, r.default)(t) + ")"
            );
          var i = this._data[e];
          if (!i)
            throw new Error("Cannot update item: no item with id " + e + " found");
          for (var o = (0, l.default)(t), n = 0, s = o.length; n < s; n++) {
            var a = o[n],
              h = this._type[a];
            i[a] = u.convert(t[a], h);
          }
          return e;
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      t.exports = {default: i(90), __esModule: !0};
    },
    function (t, e, i) {
      var o = i(17),
        n = o.JSON || (o.JSON = {stringify: JSON.stringify});
      t.exports = function (t) {
        return n.stringify.apply(n, arguments);
      };
    },
    function (t, e) {
      function i(t) {
        (this.delay = null),
          (this.max = 1 / 0),
          (this._queue = []),
          (this._timeout = null),
          (this._extended = null),
          this.setOptions(t);
      }
      (i.prototype.setOptions = function (t) {
        t && "undefined" != typeof t.delay && (this.delay = t.delay),
          t && "undefined" != typeof t.max && (this.max = t.max),
          this._flushIfNeeded();
      }),
        (i.extend = function (t, e) {
          var o = new i(e);
          if (void 0 !== t.flush)
            throw new Error("Target object already has a property flush");
          t.flush = function () {
            o.flush();
          };
          var n = [{name: "flush", original: void 0}];
          if (e && e.replace)
            for (var s = 0; s < e.replace.length; s++) {
              var r = e.replace[s];
              n.push({name: r, original: t[r]}), o.replace(t, r);
            }
          return (o._extended = {object: t, methods: n}), o;
        }),
        (i.prototype.destroy = function () {
          if ((this.flush(), this._extended)) {
            for (
              var t = this._extended.object, e = this._extended.methods, i = 0;
              i < e.length;
              i++
            ) {
              var o = e[i];
              o.original ? (t[o.name] = o.original) : delete t[o.name];
            }
            this._extended = null;
          }
        }),
        (i.prototype.replace = function (t, e) {
          var i = this,
            o = t[e];
          if (!o) throw new Error("Method " + e + " undefined");
          t[e] = function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            i.queue({args: t, fn: o, context: this});
          };
        }),
        (i.prototype.queue = function (t) {
          "function" == typeof t ? this._queue.push({fn: t}) : this._queue.push(t),
            this._flushIfNeeded();
        }),
        (i.prototype._flushIfNeeded = function () {
          if (
            (this._queue.length > this.max && this.flush(),
            clearTimeout(this._timeout),
            this.queue.length > 0 && "number" == typeof this.delay)
          ) {
            var t = this;
            this._timeout = setTimeout(function () {
              t.flush();
            }, this.delay);
          }
        }),
        (i.prototype.flush = function () {
          for (; this._queue.length > 0; ) {
            var t = this._queue.shift();
            t.fn.apply(t.context || t.fn, t.args || []);
          }
        }),
        (t.exports = i);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e) {
        (this._data = null),
          (this._ids = {}),
          (this.length = 0),
          (this._options = e || {}),
          (this._fieldId = "id"),
          (this._subscribers = {});
        var i = this;
        (this.listener = function () {
          i._onEvent.apply(i, arguments);
        }),
          this.setData(t);
      }
      var s = i(58),
        r = o(s),
        a = i(1),
        h = i(88);
      (n.prototype.setData = function (t) {
        var e, i, o, n, s;
        if (this._data) {
          for (
            this._data.off && this._data.off("*", this.listener),
              e = this._data.getIds({filter: this._options && this._options.filter}),
              s = [],
              o = 0,
              n = e.length;
            o < n;
            o++
          )
            s.push(this._data._data[e[o]]);
          (this._ids = {}),
            (this.length = 0),
            this._trigger("remove", {items: e, oldData: s});
        }
        if (((this._data = t), this._data)) {
          for (
            this._fieldId =
              this._options.fieldId ||
              (this._data && this._data.options && this._data.options.fieldId) ||
              "id",
              e = this._data.getIds({filter: this._options && this._options.filter}),
              o = 0,
              n = e.length;
            o < n;
            o++
          )
            (i = e[o]), (this._ids[i] = !0);
          (this.length = e.length),
            this._trigger("add", {items: e}),
            this._data.on && this._data.on("*", this.listener);
        }
      }),
        (n.prototype.refresh = function () {
          var t,
            e,
            i,
            o = this._data.getIds({filter: this._options && this._options.filter}),
            n = (0, r.default)(this._ids),
            s = {},
            a = [],
            h = [],
            d = [];
          for (e = 0, i = o.length; e < i; e++)
            (t = o[e]), (s[t] = !0), this._ids[t] || (a.push(t), (this._ids[t] = !0));
          for (e = 0, i = n.length; e < i; e++)
            (t = n[e]),
              s[t] || (h.push(t), d.push(this._data._data[t]), delete this._ids[t]);
          (this.length += a.length - h.length),
            a.length && this._trigger("add", {items: a}),
            h.length && this._trigger("remove", {items: h, oldData: d});
        }),
        (n.prototype.get = function (t) {
          var e,
            i,
            o,
            n = this,
            s = a.getType(arguments[0]);
          "String" == s || "Number" == s || "Array" == s
            ? ((e = arguments[0]), (i = arguments[1]), (o = arguments[2]))
            : ((i = arguments[0]), (o = arguments[1]));
          var r = a.extend({}, this._options, i);
          this._options.filter &&
            i &&
            i.filter &&
            (r.filter = function (t) {
              return n._options.filter(t) && i.filter(t);
            });
          var h = [];
          return (
            void 0 != e && h.push(e),
            h.push(r),
            h.push(o),
            this._data && this._data.get.apply(this._data, h)
          );
        }),
        (n.prototype.getIds = function (t) {
          var e;
          if (this._data) {
            var i,
              o = this._options.filter;
            (i =
              t && t.filter
                ? o
                  ? function (e) {
                      return o(e) && t.filter(e);
                    }
                  : t.filter
                : o),
              (e = this._data.getIds({filter: i, order: t && t.order}));
          } else e = [];
          return e;
        }),
        (n.prototype.map = function (t, e) {
          var i = [];
          if (this._data) {
            var o,
              n = this._options.filter;
            (o =
              e && e.filter
                ? n
                  ? function (t) {
                      return n(t) && e.filter(t);
                    }
                  : e.filter
                : n),
              (i = this._data.map(t, {filter: o, order: e && e.order}));
          } else i = [];
          return i;
        }),
        (n.prototype.getDataSet = function () {
          for (var t = this; t instanceof n; ) t = t._data;
          return t || null;
        }),
        (n.prototype._onEvent = function (t, e, i) {
          var o,
            n,
            s,
            r,
            a = e && e.items,
            h = [],
            d = [],
            l = [],
            u = [],
            p = [],
            c = [];
          if (a && this._data) {
            switch (t) {
              case "add":
                for (o = 0, n = a.length; o < n; o++)
                  (s = a[o]), (r = this.get(s)), r && ((this._ids[s] = !0), h.push(s));
                break;
              case "update":
                for (o = 0, n = a.length; o < n; o++)
                  (s = a[o]),
                    (r = this.get(s)),
                    r
                      ? this._ids[s]
                        ? (d.push(s), p.push(e.data[o]), u.push(e.oldData[o]))
                        : ((this._ids[s] = !0), h.push(s))
                      : this._ids[s] &&
                        (delete this._ids[s], l.push(s), c.push(e.oldData[o]));
                break;
              case "remove":
                for (o = 0, n = a.length; o < n; o++)
                  (s = a[o]),
                    this._ids[s] &&
                      (delete this._ids[s], l.push(s), c.push(e.oldData[o]));
            }
            (this.length += h.length - l.length),
              h.length && this._trigger("add", {items: h}, i),
              d.length && this._trigger("update", {items: d, oldData: u, data: p}, i),
              l.length && this._trigger("remove", {items: l, oldData: c}, i);
          }
        }),
        (n.prototype.on = h.prototype.on),
        (n.prototype.off = h.prototype.off),
        (n.prototype._trigger = h.prototype._trigger),
        (n.prototype.subscribe = n.prototype.on),
        (n.prototype.unsubscribe = n.prototype.off),
        (t.exports = n);
    },
    function (t, e, i) {
      function o(t, e, i, d) {
        if (!(this instanceof o))
          throw new SyntaxError("Constructor must be called with the new operator");
        if (
          !(Array.isArray(i) || i instanceof r || i instanceof a) &&
          i instanceof Object
        ) {
          var p = d;
          (d = i), (i = p);
        }
        d &&
          d.throttleRedraw &&
          console.warn(
            'Timeline option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.'
          );
        var f = this;
        if (
          ((this.defaultOptions = {
            start: null,
            end: null,
            autoResize: !0,
            orientation: {axis: "bottom", item: "bottom"},
            moment: n,
            width: null,
            height: null,
            maxHeight: null,
            minHeight: null,
          }),
          (this.options = s.deepExtend({}, this.defaultOptions)),
          this._create(t),
          !d || (d && "undefined" == typeof d.rtl))
        ) {
          for (var m, g = this.dom.root; !m && g; )
            (m = window.getComputedStyle(g, null).direction), (g = g.parentElement);
          this.options.rtl = m && "rtl" == m.toLowerCase();
        } else this.options.rtl = d.rtl;
        (this.options.rollingMode = d && d.rollingMode),
          (this.components = []),
          (this.body = {
            dom: this.dom,
            domProps: this.props,
            emitter: {
              on: this.on.bind(this),
              off: this.off.bind(this),
              emit: this.emit.bind(this),
            },
            hiddenDates: [],
            util: {
              getScale: function () {
                return f.timeAxis.step.scale;
              },
              getStep: function () {
                return f.timeAxis.step.step;
              },
              toScreen: f._toScreen.bind(f),
              toGlobalScreen: f._toGlobalScreen.bind(f),
              toTime: f._toTime.bind(f),
              toGlobalTime: f._toGlobalTime.bind(f),
            },
          }),
          (this.range = new h(this.body, this.options)),
          this.components.push(this.range),
          (this.body.range = this.range),
          (this.timeAxis = new l(this.body, this.options)),
          (this.timeAxis2 = null),
          this.components.push(this.timeAxis),
          (this.currentTime = new u(this.body, this.options)),
          this.components.push(this.currentTime),
          (this.itemSet = new c(this.body, this.options)),
          this.components.push(this.itemSet),
          (this.itemsData = null),
          (this.groupsData = null),
          (this.dom.root.onclick = function (t) {
            f.emit("click", f.getEventProperties(t));
          }),
          (this.dom.root.ondblclick = function (t) {
            f.emit("doubleClick", f.getEventProperties(t));
          }),
          (this.dom.root.oncontextmenu = function (t) {
            f.emit("contextmenu", f.getEventProperties(t));
          }),
          (this.dom.root.onmouseover = function (t) {
            f.emit("mouseOver", f.getEventProperties(t));
          }),
          window.PointerEvent
            ? ((this.dom.root.onpointerdown = function (t) {
                f.emit("mouseDown", f.getEventProperties(t));
              }),
              (this.dom.root.onpointermove = function (t) {
                f.emit("mouseMove", f.getEventProperties(t));
              }),
              (this.dom.root.onpointerup = function (t) {
                f.emit("mouseUp", f.getEventProperties(t));
              }))
            : ((this.dom.root.onmousemove = function (t) {
                f.emit("mouseMove", f.getEventProperties(t));
              }),
              (this.dom.root.onmousedown = function (t) {
                f.emit("mouseDown", f.getEventProperties(t));
              }),
              (this.dom.root.onmouseup = function (t) {
                f.emit("mouseUp", f.getEventProperties(t));
              })),
          (this.fitDone = !1),
          this.on("changed", function () {
            if (null != this.itemsData && !this.options.rollingMode && !f.fitDone)
              if (
                ((f.fitDone = !0), void 0 != f.options.start || void 0 != f.options.end)
              ) {
                if (void 0 == f.options.start || void 0 == f.options.end)
                  var t = f.getItemRange();
                var e = void 0 != f.options.start ? f.options.start : t.min,
                  i = void 0 != f.options.end ? f.options.end : t.max;
                f.setWindow(e, i, {animation: !1});
              } else f.fit({animation: !1});
          }),
          d && this.setOptions(d),
          i && this.setGroups(i),
          e && this.setItems(e),
          this._redraw();
      }
      var n = (i(94), i(95), i(82)),
        s = i(1),
        r = i(88),
        a = i(92),
        h = i(98),
        d = i(102),
        l = i(119),
        u = i(124),
        p = i(122),
        c = i(103),
        f = i(125).printStyle,
        m = i(126).allOptions,
        g = i(126).configureOptions,
        v = i(127).default,
        y = i(125).default;
      (o.prototype = new d()),
        (o.prototype._createConfigurator = function () {
          return new v(this, this.dom.container, g);
        }),
        (o.prototype.redraw = function () {
          this.itemSet && this.itemSet.markDirty({refreshItems: !0}), this._redraw();
        }),
        (o.prototype.setOptions = function (t) {
          var e = y.validate(t, m);
          if (
            (e === !0 &&
              console.log(
                "%cErrors have been found in the supplied options object.",
                f
              ),
            d.prototype.setOptions.call(this, t),
            "type" in t && t.type !== this.options.type)
          ) {
            this.options.type = t.type;
            var i = this.itemsData;
            if (i) {
              var o = this.getSelection();
              this.setItems(null), this.setItems(i), this.setSelection(o);
            }
          }
        }),
        (o.prototype.setItems = function (t) {
          var e;
          (e = t
            ? t instanceof r || t instanceof a
              ? t
              : new r(t, {type: {start: "Date", end: "Date"}})
            : null),
            (this.itemsData = e),
            this.itemSet && this.itemSet.setItems(e);
        }),
        (o.prototype.setGroups = function (t) {
          var e;
          if (t) {
            var i = function (t) {
              return t.visible !== !1;
            };
            e =
              t instanceof r || t instanceof a
                ? new a(t, {filter: i})
                : new r(t.filter(i));
          } else e = null;
          (this.groupsData = e), this.itemSet.setGroups(e);
        }),
        (o.prototype.setData = function (t) {
          t && t.groups && this.setGroups(t.groups),
            t && t.items && this.setItems(t.items);
        }),
        (o.prototype.setSelection = function (t, e) {
          this.itemSet && this.itemSet.setSelection(t),
            e && e.focus && this.focus(t, e);
        }),
        (o.prototype.getSelection = function () {
          return (this.itemSet && this.itemSet.getSelection()) || [];
        }),
        (o.prototype.focus = function (t, e) {
          if (this.itemsData && void 0 != t) {
            var i = Array.isArray(t) ? t : [t],
              o = this.itemsData
                .getDataSet()
                .get(i, {type: {start: "Date", end: "Date"}}),
              n = null,
              s = null;
            if (
              (o.forEach(function (t) {
                var e = t.start.valueOf(),
                  i = "end" in t ? t.end.valueOf() : t.start.valueOf();
                (null === n || e < n) && (n = e), (null === s || i > s) && (s = i);
              }),
              null !== n && null !== s)
            ) {
              var r = (n + s) / 2,
                a = Math.max(this.range.end - this.range.start, 1.1 * (s - n)),
                h = !e || void 0 === e.animation || e.animation;
              this.range.setRange(r - a / 2, r + a / 2, {animation: h});
            }
          }
        }),
        (o.prototype.fit = function (t) {
          var e,
            i = !t || void 0 === t.animation || t.animation,
            o = this.itemsData && this.itemsData.getDataSet();
          1 === o.length && void 0 === o.get()[0].end
            ? ((e = this.getDataRange()), this.moveTo(e.min.valueOf(), {animation: i}))
            : ((e = this.getItemRange()),
              this.range.setRange(e.min, e.max, {animation: i}));
        }),
        (o.prototype.getItemRange = function () {
          var t = this.getDataRange(),
            e = null !== t.min ? t.min.valueOf() : null,
            i = null !== t.max ? t.max.valueOf() : null,
            o = null,
            n = null;
          if (null != e && null != i) {
            var r = function (t) {
                return s.convert(t.data.start, "Date").valueOf();
              },
              a = function (t) {
                var e = void 0 != t.data.end ? t.data.end : t.data.start;
                return s.convert(e, "Date").valueOf();
              },
              h = i - e;
            h <= 0 && (h = 10);
            var d = h / this.props.center.width;
            if (
              (s.forEach(
                this.itemSet.items,
                function (t) {
                  t.groupShowing && (t.show(), t.repositionX());
                  var s = r(t),
                    h = a(t);
                  if (this.options.rtl)
                    var l = s - (t.getWidthRight() + 10) * d,
                      u = h + (t.getWidthLeft() + 10) * d;
                  else
                    var l = s - (t.getWidthLeft() + 10) * d,
                      u = h + (t.getWidthRight() + 10) * d;
                  l < e && ((e = l), (o = t)), u > i && ((i = u), (n = t));
                }.bind(this)
              ),
              o && n)
            ) {
              var l = o.getWidthLeft() + 10,
                u = n.getWidthRight() + 10,
                p = this.props.center.width - l - u;
              p > 0 &&
                (this.options.rtl
                  ? ((e = r(o) - (u * h) / p), (i = a(n) + (l * h) / p))
                  : ((e = r(o) - (l * h) / p), (i = a(n) + (u * h) / p)));
            }
          }
          return {
            min: null != e ? new Date(e) : null,
            max: null != i ? new Date(i) : null,
          };
        }),
        (o.prototype.getDataRange = function () {
          var t = null,
            e = null,
            i = this.itemsData && this.itemsData.getDataSet();
          return (
            i &&
              i.forEach(function (i) {
                var o = s.convert(i.start, "Date").valueOf(),
                  n = s.convert(void 0 != i.end ? i.end : i.start, "Date").valueOf();
                (null === t || o < t) && (t = o), (null === e || n > e) && (e = n);
              }),
            {min: null != t ? new Date(t) : null, max: null != e ? new Date(e) : null}
          );
        }),
        (o.prototype.getEventProperties = function (t) {
          var e = t.center ? t.center.x : t.clientX,
            i = t.center ? t.center.y : t.clientY;
          if (this.options.rtl)
            var o = s.getAbsoluteRight(this.dom.centerContainer) - e;
          else var o = e - s.getAbsoluteLeft(this.dom.centerContainer);
          var n = i - s.getAbsoluteTop(this.dom.centerContainer),
            r = this.itemSet.itemFromTarget(t),
            a = this.itemSet.groupFromTarget(t),
            h = p.customTimeFromTarget(t),
            d = this.itemSet.options.snap || null,
            l = this.body.util.getScale(),
            u = this.body.util.getStep(),
            c = this._toTime(o),
            f = d ? d(c, l, u) : c,
            m = s.getTarget(t),
            g = null;
          return (
            null != r
              ? (g = "item")
              : null != h
              ? (g = "custom-time")
              : s.hasParent(m, this.timeAxis.dom.foreground)
              ? (g = "axis")
              : this.timeAxis2 && s.hasParent(m, this.timeAxis2.dom.foreground)
              ? (g = "axis")
              : s.hasParent(m, this.itemSet.dom.labelSet)
              ? (g = "group-label")
              : s.hasParent(m, this.currentTime.bar)
              ? (g = "current-time")
              : s.hasParent(m, this.dom.center) && (g = "background"),
            {
              event: t,
              item: r ? r.id : null,
              group: a ? a.groupId : null,
              what: g,
              pageX: t.srcEvent ? t.srcEvent.pageX : t.pageX,
              pageY: t.srcEvent ? t.srcEvent.pageY : t.pageY,
              x: o,
              y: n,
              time: c,
              snappedTime: f,
            }
          );
        }),
        (o.prototype.toggleRollingMode = function () {
          this.range.rolling
            ? this.range.stopRolling()
            : (void 0 == this.options.rollingMode && this.setOptions(this.options),
              this.range.startRolling());
        }),
        (t.exports = o);
    },
    function (t, e) {
      function i(t) {
        if (t) return o(t);
      }
      function o(t) {
        for (var e in i.prototype) t[e] = i.prototype[e];
        return t;
      }
      (t.exports = i),
        (i.prototype.on = i.prototype.addEventListener =
          function (t, e) {
            return (
              (this._callbacks = this._callbacks || {}),
              (this._callbacks[t] = this._callbacks[t] || []).push(e),
              this
            );
          }),
        (i.prototype.once = function (t, e) {
          function i() {
            o.off(t, i), e.apply(this, arguments);
          }
          var o = this;
          return (
            (this._callbacks = this._callbacks || {}), (i.fn = e), this.on(t, i), this
          );
        }),
        (i.prototype.off =
          i.prototype.removeListener =
          i.prototype.removeAllListeners =
          i.prototype.removeEventListener =
            function (t, e) {
              if (((this._callbacks = this._callbacks || {}), 0 == arguments.length))
                return (this._callbacks = {}), this;
              var i = this._callbacks[t];
              if (!i) return this;
              if (1 == arguments.length) return delete this._callbacks[t], this;
              for (var o, n = 0; n < i.length; n++)
                if (((o = i[n]), o === e || o.fn === e)) {
                  i.splice(n, 1);
                  break;
                }
              return this;
            }),
        (i.prototype.emit = function (t) {
          this._callbacks = this._callbacks || {};
          var e = [].slice.call(arguments, 1),
            i = this._callbacks[t];
          if (i) {
            i = i.slice(0);
            for (var o = 0, n = i.length; o < n; ++o) i[o].apply(this, e);
          }
          return this;
        }),
        (i.prototype.listeners = function (t) {
          return (this._callbacks = this._callbacks || {}), this._callbacks[t] || [];
        }),
        (i.prototype.hasListeners = function (t) {
          return !!this.listeners(t).length;
        });
    },
    function (t, e, i) {
      if ("undefined" != typeof window) {
        var o = i(96),
          n = window.Hammer || i(97);
        t.exports = o(n, {preventDefault: "mouse"});
      } else
        t.exports = function () {
          throw Error("hammer.js is only available in a browser, not in node.js.");
        };
    },
    function (t, e, i) {
      var o, n, s;
      !(function (i) {
        (n = []),
          (o = i),
          (s = "function" == typeof o ? o.apply(e, n) : o),
          !(void 0 !== s && (t.exports = s));
      })(function () {
        var t = null;
        return function e(i, o) {
          function n(t) {
            return t.match(/[^ ]+/g);
          }
          function s(e) {
            if ("hammer.input" !== e.type) {
              if (
                (e.srcEvent._handled || (e.srcEvent._handled = {}),
                e.srcEvent._handled[e.type])
              )
                return;
              e.srcEvent._handled[e.type] = !0;
            }
            var i = !1;
            e.stopPropagation = function () {
              i = !0;
            };
            var o = e.srcEvent.stopPropagation.bind(e.srcEvent);
            "function" == typeof o &&
              (e.srcEvent.stopPropagation = function () {
                o(), e.stopPropagation();
              }),
              (e.firstTarget = t);
            for (var n = t; n && !i; ) {
              var s = n.hammer;
              if (s)
                for (var r, a = 0; a < s.length; a++)
                  if ((r = s[a]._handlers[e.type]))
                    for (var h = 0; h < r.length && !i; h++) r[h](e);
              n = n.parentNode;
            }
          }
          var r = o || {preventDefault: !1};
          if (i.Manager) {
            var a = i,
              h = function (t, i) {
                var o = Object.create(r);
                return i && a.assign(o, i), e(new a(t, o), o);
              };
            return (
              a.assign(h, a),
              (h.Manager = function (t, i) {
                var o = Object.create(r);
                return i && a.assign(o, i), e(new a.Manager(t, o), o);
              }),
              h
            );
          }
          var d = Object.create(i),
            l = i.element;
          return (
            l.hammer || (l.hammer = []),
            l.hammer.push(d),
            i.on("hammer.input", function (e) {
              (r.preventDefault !== !0 && r.preventDefault !== e.pointerType) ||
                e.preventDefault(),
                e.isFirst && (t = e.target);
            }),
            (d._handlers = {}),
            (d.on = function (t, e) {
              return (
                n(t).forEach(function (t) {
                  var o = d._handlers[t];
                  o || ((d._handlers[t] = o = []), i.on(t, s)), o.push(e);
                }),
                d
              );
            }),
            (d.off = function (t, e) {
              return (
                n(t).forEach(function (t) {
                  var o = d._handlers[t];
                  o &&
                    ((o = e
                      ? o.filter(function (t) {
                          return t !== e;
                        })
                      : []),
                    o.length > 0
                      ? (d._handlers[t] = o)
                      : (i.off(t, s), delete d._handlers[t]));
                }),
                d
              );
            }),
            (d.emit = function (e, o) {
              (t = o.target), i.emit(e, o);
            }),
            (d.destroy = function () {
              var t = i.element.hammer,
                e = t.indexOf(d);
              e !== -1 && t.splice(e, 1),
                t.length || delete i.element.hammer,
                (d._handlers = {}),
                i.destroy();
            }),
            d
          );
        };
      });
    },
    function (t, e, i) {
      var o;
      /*! Hammer.JS - v2.0.7 - 2016-04-22
       * http://hammerjs.github.io/
       *
       * Copyright (c) 2016 Jorik Tangelder;
       * Licensed under the MIT license */
      !(function (n, s, r, a) {
        function h(t, e, i) {
          return setTimeout(c(t, i), e);
        }
        function d(t, e, i) {
          return !!Array.isArray(t) && (l(t, i[e], i), !0);
        }
        function l(t, e, i) {
          var o;
          if (t)
            if (t.forEach) t.forEach(e, i);
            else if (t.length !== a)
              for (o = 0; o < t.length; ) e.call(i, t[o], o, t), o++;
            else for (o in t) t.hasOwnProperty(o) && e.call(i, t[o], o, t);
        }
        function u(t, e, i) {
          var o = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
          return function () {
            var e = new Error("get-stack-trace"),
              i =
                e && e.stack
                  ? e.stack
                      .replace(/^[^\(]+?[\n$]/gm, "")
                      .replace(/^\s+at\s+/gm, "")
                      .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
                  : "Unknown Stack Trace",
              s = n.console && (n.console.warn || n.console.log);
            return s && s.call(n.console, o, i), t.apply(this, arguments);
          };
        }
        function p(t, e, i) {
          var o,
            n = e.prototype;
          (o = t.prototype = Object.create(n)),
            (o.constructor = t),
            (o._super = n),
            i && mt(o, i);
        }
        function c(t, e) {
          return function () {
            return t.apply(e, arguments);
          };
        }
        function f(t, e) {
          return typeof t == yt ? t.apply(e ? e[0] || a : a, e) : t;
        }
        function m(t, e) {
          return t === a ? e : t;
        }
        function g(t, e, i) {
          l(_(e), function (e) {
            t.addEventListener(e, i, !1);
          });
        }
        function v(t, e, i) {
          l(_(e), function (e) {
            t.removeEventListener(e, i, !1);
          });
        }
        function y(t, e) {
          for (; t; ) {
            if (t == e) return !0;
            t = t.parentNode;
          }
          return !1;
        }
        function b(t, e) {
          return t.indexOf(e) > -1;
        }
        function _(t) {
          return t.trim().split(/\s+/g);
        }
        function w(t, e, i) {
          if (t.indexOf && !i) return t.indexOf(e);
          for (var o = 0; o < t.length; ) {
            if ((i && t[o][i] == e) || (!i && t[o] === e)) return o;
            o++;
          }
          return -1;
        }
        function x(t) {
          return Array.prototype.slice.call(t, 0);
        }
        function D(t, e, i) {
          for (var o = [], n = [], s = 0; s < t.length; ) {
            var r = e ? t[s][e] : t[s];
            w(n, r) < 0 && o.push(t[s]), (n[s] = r), s++;
          }
          return (
            i &&
              (o = e
                ? o.sort(function (t, i) {
                    return t[e] > i[e];
                  })
                : o.sort()),
            o
          );
        }
        function S(t, e) {
          for (var i, o, n = e[0].toUpperCase() + e.slice(1), s = 0; s < gt.length; ) {
            if (((i = gt[s]), (o = i ? i + n : e), o in t)) return o;
            s++;
          }
          return a;
        }
        function k() {
          return St++;
        }
        function T(t) {
          var e = t.ownerDocument || t;
          return e.defaultView || e.parentWindow || n;
        }
        function C(t, e) {
          var i = this;
          (this.manager = t),
            (this.callback = e),
            (this.element = t.element),
            (this.target = t.options.inputTarget),
            (this.domHandler = function (e) {
              f(t.options.enable, [t]) && i.handler(e);
            }),
            this.init();
        }
        function M(t) {
          var e,
            i = t.options.inputClass;
          return new (e = i ? i : Ct ? z : Mt ? V : Tt ? q : G)(t, O);
        }
        function O(t, e, i) {
          var o = i.pointers.length,
            n = i.changedPointers.length,
            s = e & It && o - n === 0,
            r = e & (Lt | Ft) && o - n === 0;
          (i.isFirst = !!s),
            (i.isFinal = !!r),
            s && (t.session = {}),
            (i.eventType = e),
            E(t, i),
            t.emit("hammer.input", i),
            t.recognize(i),
            (t.session.prevInput = i);
        }
        function E(t, e) {
          var i = t.session,
            o = e.pointers,
            n = o.length;
          i.firstInput || (i.firstInput = A(e)),
            n > 1 && !i.firstMultiple
              ? (i.firstMultiple = A(e))
              : 1 === n && (i.firstMultiple = !1);
          var s = i.firstInput,
            r = i.firstMultiple,
            a = r ? r.center : s.center,
            h = (e.center = I(o));
          (e.timeStamp = wt()),
            (e.deltaTime = e.timeStamp - s.timeStamp),
            (e.angle = H(a, h)),
            (e.distance = F(a, h)),
            P(i, e),
            (e.offsetDirection = L(e.deltaX, e.deltaY));
          var d = R(e.deltaTime, e.deltaX, e.deltaY);
          (e.overallVelocityX = d.x),
            (e.overallVelocityY = d.y),
            (e.overallVelocity = _t(d.x) > _t(d.y) ? d.x : d.y),
            (e.scale = r ? j(r.pointers, o) : 1),
            (e.rotation = r ? Y(r.pointers, o) : 0),
            (e.maxPointers = i.prevInput
              ? e.pointers.length > i.prevInput.maxPointers
                ? e.pointers.length
                : i.prevInput.maxPointers
              : e.pointers.length),
            N(i, e);
          var l = t.element;
          y(e.srcEvent.target, l) && (l = e.srcEvent.target), (e.target = l);
        }
        function P(t, e) {
          var i = e.center,
            o = t.offsetDelta || {},
            n = t.prevDelta || {},
            s = t.prevInput || {};
          (e.eventType !== It && s.eventType !== Lt) ||
            ((n = t.prevDelta = {x: s.deltaX || 0, y: s.deltaY || 0}),
            (o = t.offsetDelta = {x: i.x, y: i.y})),
            (e.deltaX = n.x + (i.x - o.x)),
            (e.deltaY = n.y + (i.y - o.y));
        }
        function N(t, e) {
          var i,
            o,
            n,
            s,
            r = t.lastInterval || e,
            h = e.timeStamp - r.timeStamp;
          if (e.eventType != Ft && (h > At || r.velocity === a)) {
            var d = e.deltaX - r.deltaX,
              l = e.deltaY - r.deltaY,
              u = R(h, d, l);
            (o = u.x),
              (n = u.y),
              (i = _t(u.x) > _t(u.y) ? u.x : u.y),
              (s = L(d, l)),
              (t.lastInterval = e);
          } else
            (i = r.velocity), (o = r.velocityX), (n = r.velocityY), (s = r.direction);
          (e.velocity = i), (e.velocityX = o), (e.velocityY = n), (e.direction = s);
        }
        function A(t) {
          for (var e = [], i = 0; i < t.pointers.length; )
            (e[i] = {
              clientX: bt(t.pointers[i].clientX),
              clientY: bt(t.pointers[i].clientY),
            }),
              i++;
          return {
            timeStamp: wt(),
            pointers: e,
            center: I(e),
            deltaX: t.deltaX,
            deltaY: t.deltaY,
          };
        }
        function I(t) {
          var e = t.length;
          if (1 === e) return {x: bt(t[0].clientX), y: bt(t[0].clientY)};
          for (var i = 0, o = 0, n = 0; n < e; )
            (i += t[n].clientX), (o += t[n].clientY), n++;
          return {x: bt(i / e), y: bt(o / e)};
        }
        function R(t, e, i) {
          return {x: e / t || 0, y: i / t || 0};
        }
        function L(t, e) {
          return t === e ? Ht : _t(t) >= _t(e) ? (t < 0 ? Yt : jt) : e < 0 ? Gt : zt;
        }
        function F(t, e, i) {
          i || (i = Bt);
          var o = e[i[0]] - t[i[0]],
            n = e[i[1]] - t[i[1]];
          return Math.sqrt(o * o + n * n);
        }
        function H(t, e, i) {
          i || (i = Bt);
          var o = e[i[0]] - t[i[0]],
            n = e[i[1]] - t[i[1]];
          return (180 * Math.atan2(n, o)) / Math.PI;
        }
        function Y(t, e) {
          return H(e[1], e[0], qt) + H(t[1], t[0], qt);
        }
        function j(t, e) {
          return F(e[0], e[1], qt) / F(t[0], t[1], qt);
        }
        function G() {
          (this.evEl = Zt),
            (this.evWin = Kt),
            (this.pressed = !1),
            C.apply(this, arguments);
        }
        function z() {
          (this.evEl = Qt),
            (this.evWin = te),
            C.apply(this, arguments),
            (this.store = this.manager.session.pointerEvents = []);
        }
        function W() {
          (this.evTarget = ie),
            (this.evWin = oe),
            (this.started = !1),
            C.apply(this, arguments);
        }
        function U(t, e) {
          var i = x(t.touches),
            o = x(t.changedTouches);
          return e & (Lt | Ft) && (i = D(i.concat(o), "identifier", !0)), [i, o];
        }
        function V() {
          (this.evTarget = se), (this.targetIds = {}), C.apply(this, arguments);
        }
        function B(t, e) {
          var i = x(t.touches),
            o = this.targetIds;
          if (e & (It | Rt) && 1 === i.length) return (o[i[0].identifier] = !0), [i, i];
          var n,
            s,
            r = x(t.changedTouches),
            a = [],
            h = this.target;
          if (
            ((s = i.filter(function (t) {
              return y(t.target, h);
            })),
            e === It)
          )
            for (n = 0; n < s.length; ) (o[s[n].identifier] = !0), n++;
          for (n = 0; n < r.length; )
            o[r[n].identifier] && a.push(r[n]),
              e & (Lt | Ft) && delete o[r[n].identifier],
              n++;
          return a.length ? [D(s.concat(a), "identifier", !0), a] : void 0;
        }
        function q() {
          C.apply(this, arguments);
          var t = c(this.handler, this);
          (this.touch = new V(this.manager, t)),
            (this.mouse = new G(this.manager, t)),
            (this.primaryTouch = null),
            (this.lastTouches = []);
        }
        function X(t, e) {
          t & It
            ? ((this.primaryTouch = e.changedPointers[0].identifier), Z.call(this, e))
            : t & (Lt | Ft) && Z.call(this, e);
        }
        function Z(t) {
          var e = t.changedPointers[0];
          if (e.identifier === this.primaryTouch) {
            var i = {x: e.clientX, y: e.clientY};
            this.lastTouches.push(i);
            var o = this.lastTouches,
              n = function () {
                var t = o.indexOf(i);
                t > -1 && o.splice(t, 1);
              };
            setTimeout(n, re);
          }
        }
        function K(t) {
          for (
            var e = t.srcEvent.clientX, i = t.srcEvent.clientY, o = 0;
            o < this.lastTouches.length;
            o++
          ) {
            var n = this.lastTouches[o],
              s = Math.abs(e - n.x),
              r = Math.abs(i - n.y);
            if (s <= ae && r <= ae) return !0;
          }
          return !1;
        }
        function $(t, e) {
          (this.manager = t), this.set(e);
        }
        function J(t) {
          if (b(t, ce)) return ce;
          var e = b(t, fe),
            i = b(t, me);
          return e && i ? ce : e || i ? (e ? fe : me) : b(t, pe) ? pe : ue;
        }
        function Q() {
          if (!de) return !1;
          var t = {},
            e = n.CSS && n.CSS.supports;
          return (
            ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach(
              function (i) {
                t[i] = !e || n.CSS.supports("touch-action", i);
              }
            ),
            t
          );
        }
        function tt(t) {
          (this.options = mt({}, this.defaults, t || {})),
            (this.id = k()),
            (this.manager = null),
            (this.options.enable = m(this.options.enable, !0)),
            (this.state = ve),
            (this.simultaneous = {}),
            (this.requireFail = []);
        }
        function et(t) {
          return t & xe
            ? "cancel"
            : t & _e
            ? "end"
            : t & be
            ? "move"
            : t & ye
            ? "start"
            : "";
        }
        function it(t) {
          return t == zt
            ? "down"
            : t == Gt
            ? "up"
            : t == Yt
            ? "left"
            : t == jt
            ? "right"
            : "";
        }
        function ot(t, e) {
          var i = e.manager;
          return i ? i.get(t) : t;
        }
        function nt() {
          tt.apply(this, arguments);
        }
        function st() {
          nt.apply(this, arguments), (this.pX = null), (this.pY = null);
        }
        function rt() {
          nt.apply(this, arguments);
        }
        function at() {
          tt.apply(this, arguments), (this._timer = null), (this._input = null);
        }
        function ht() {
          nt.apply(this, arguments);
        }
        function dt() {
          nt.apply(this, arguments);
        }
        function lt() {
          tt.apply(this, arguments),
            (this.pTime = !1),
            (this.pCenter = !1),
            (this._timer = null),
            (this._input = null),
            (this.count = 0);
        }
        function ut(t, e) {
          return (
            (e = e || {}),
            (e.recognizers = m(e.recognizers, ut.defaults.preset)),
            new pt(t, e)
          );
        }
        function pt(t, e) {
          (this.options = mt({}, ut.defaults, e || {})),
            (this.options.inputTarget = this.options.inputTarget || t),
            (this.handlers = {}),
            (this.session = {}),
            (this.recognizers = []),
            (this.oldCssProps = {}),
            (this.element = t),
            (this.input = M(this)),
            (this.touchAction = new $(this, this.options.touchAction)),
            ct(this, !0),
            l(
              this.options.recognizers,
              function (t) {
                var e = this.add(new t[0](t[1]));
                t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
              },
              this
            );
        }
        function ct(t, e) {
          var i = t.element;
          if (i.style) {
            var o;
            l(t.options.cssProps, function (n, s) {
              (o = S(i.style, s)),
                e
                  ? ((t.oldCssProps[o] = i.style[o]), (i.style[o] = n))
                  : (i.style[o] = t.oldCssProps[o] || "");
            }),
              e || (t.oldCssProps = {});
          }
        }
        function ft(t, e) {
          var i = s.createEvent("Event");
          i.initEvent(t, !0, !0), (i.gesture = e), e.target.dispatchEvent(i);
        }
        var mt,
          gt = ["", "webkit", "Moz", "MS", "ms", "o"],
          vt = s.createElement("div"),
          yt = "function",
          bt = Math.round,
          _t = Math.abs,
          wt = Date.now;
        mt =
          "function" != typeof Object.assign
            ? function (t) {
                if (t === a || null === t)
                  throw new TypeError("Cannot convert undefined or null to object");
                for (var e = Object(t), i = 1; i < arguments.length; i++) {
                  var o = arguments[i];
                  if (o !== a && null !== o)
                    for (var n in o) o.hasOwnProperty(n) && (e[n] = o[n]);
                }
                return e;
              }
            : Object.assign;
        var xt = u(
            function (t, e, i) {
              for (var o = Object.keys(e), n = 0; n < o.length; )
                (!i || (i && t[o[n]] === a)) && (t[o[n]] = e[o[n]]), n++;
              return t;
            },
            "extend",
            "Use `assign`."
          ),
          Dt = u(
            function (t, e) {
              return xt(t, e, !0);
            },
            "merge",
            "Use `assign`."
          ),
          St = 1,
          kt = /mobile|tablet|ip(ad|hone|od)|android/i,
          Tt = "ontouchstart" in n,
          Ct = S(n, "PointerEvent") !== a,
          Mt = Tt && kt.test(navigator.userAgent),
          Ot = "touch",
          Et = "pen",
          Pt = "mouse",
          Nt = "kinect",
          At = 25,
          It = 1,
          Rt = 2,
          Lt = 4,
          Ft = 8,
          Ht = 1,
          Yt = 2,
          jt = 4,
          Gt = 8,
          zt = 16,
          Wt = Yt | jt,
          Ut = Gt | zt,
          Vt = Wt | Ut,
          Bt = ["x", "y"],
          qt = ["clientX", "clientY"];
        C.prototype = {
          handler: function () {},
          init: function () {
            this.evEl && g(this.element, this.evEl, this.domHandler),
              this.evTarget && g(this.target, this.evTarget, this.domHandler),
              this.evWin && g(T(this.element), this.evWin, this.domHandler);
          },
          destroy: function () {
            this.evEl && v(this.element, this.evEl, this.domHandler),
              this.evTarget && v(this.target, this.evTarget, this.domHandler),
              this.evWin && v(T(this.element), this.evWin, this.domHandler);
          },
        };
        var Xt = {mousedown: It, mousemove: Rt, mouseup: Lt},
          Zt = "mousedown",
          Kt = "mousemove mouseup";
        p(G, C, {
          handler: function (t) {
            var e = Xt[t.type];
            e & It && 0 === t.button && (this.pressed = !0),
              e & Rt && 1 !== t.which && (e = Lt),
              this.pressed &&
                (e & Lt && (this.pressed = !1),
                this.callback(this.manager, e, {
                  pointers: [t],
                  changedPointers: [t],
                  pointerType: Pt,
                  srcEvent: t,
                }));
          },
        });
        var $t = {
            pointerdown: It,
            pointermove: Rt,
            pointerup: Lt,
            pointercancel: Ft,
            pointerout: Ft,
          },
          Jt = {2: Ot, 3: Et, 4: Pt, 5: Nt},
          Qt = "pointerdown",
          te = "pointermove pointerup pointercancel";
        n.MSPointerEvent &&
          !n.PointerEvent &&
          ((Qt = "MSPointerDown"), (te = "MSPointerMove MSPointerUp MSPointerCancel")),
          p(z, C, {
            handler: function (t) {
              var e = this.store,
                i = !1,
                o = t.type.toLowerCase().replace("ms", ""),
                n = $t[o],
                s = Jt[t.pointerType] || t.pointerType,
                r = s == Ot,
                a = w(e, t.pointerId, "pointerId");
              n & It && (0 === t.button || r)
                ? a < 0 && (e.push(t), (a = e.length - 1))
                : n & (Lt | Ft) && (i = !0),
                a < 0 ||
                  ((e[a] = t),
                  this.callback(this.manager, n, {
                    pointers: e,
                    changedPointers: [t],
                    pointerType: s,
                    srcEvent: t,
                  }),
                  i && e.splice(a, 1));
            },
          });
        var ee = {touchstart: It, touchmove: Rt, touchend: Lt, touchcancel: Ft},
          ie = "touchstart",
          oe = "touchstart touchmove touchend touchcancel";
        p(W, C, {
          handler: function (t) {
            var e = ee[t.type];
            if ((e === It && (this.started = !0), this.started)) {
              var i = U.call(this, t, e);
              e & (Lt | Ft) && i[0].length - i[1].length === 0 && (this.started = !1),
                this.callback(this.manager, e, {
                  pointers: i[0],
                  changedPointers: i[1],
                  pointerType: Ot,
                  srcEvent: t,
                });
            }
          },
        });
        var ne = {touchstart: It, touchmove: Rt, touchend: Lt, touchcancel: Ft},
          se = "touchstart touchmove touchend touchcancel";
        p(V, C, {
          handler: function (t) {
            var e = ne[t.type],
              i = B.call(this, t, e);
            i &&
              this.callback(this.manager, e, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: Ot,
                srcEvent: t,
              });
          },
        });
        var re = 2500,
          ae = 25;
        p(q, C, {
          handler: function (t, e, i) {
            var o = i.pointerType == Ot,
              n = i.pointerType == Pt;
            if (!(n && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
              if (o) X.call(this, e, i);
              else if (n && K.call(this, i)) return;
              this.callback(t, e, i);
            }
          },
          destroy: function () {
            this.touch.destroy(), this.mouse.destroy();
          },
        });
        var he = S(vt.style, "touchAction"),
          de = he !== a,
          le = "compute",
          ue = "auto",
          pe = "manipulation",
          ce = "none",
          fe = "pan-x",
          me = "pan-y",
          ge = Q();
        $.prototype = {
          set: function (t) {
            t == le && (t = this.compute()),
              de &&
                this.manager.element.style &&
                ge[t] &&
                (this.manager.element.style[he] = t),
              (this.actions = t.toLowerCase().trim());
          },
          update: function () {
            this.set(this.manager.options.touchAction);
          },
          compute: function () {
            var t = [];
            return (
              l(this.manager.recognizers, function (e) {
                f(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
              }),
              J(t.join(" "))
            );
          },
          preventDefaults: function (t) {
            var e = t.srcEvent,
              i = t.offsetDirection;
            if (this.manager.session.prevented) return void e.preventDefault();
            var o = this.actions,
              n = b(o, ce) && !ge[ce],
              s = b(o, me) && !ge[me],
              r = b(o, fe) && !ge[fe];
            if (n) {
              var a = 1 === t.pointers.length,
                h = t.distance < 2,
                d = t.deltaTime < 250;
              if (a && h && d) return;
            }
            return r && s
              ? void 0
              : n || (s && i & Wt) || (r && i & Ut)
              ? this.preventSrc(e)
              : void 0;
          },
          preventSrc: function (t) {
            (this.manager.session.prevented = !0), t.preventDefault();
          },
        };
        var ve = 1,
          ye = 2,
          be = 4,
          _e = 8,
          we = _e,
          xe = 16,
          De = 32;
        (tt.prototype = {
          defaults: {},
          set: function (t) {
            return (
              mt(this.options, t),
              this.manager && this.manager.touchAction.update(),
              this
            );
          },
          recognizeWith: function (t) {
            if (d(t, "recognizeWith", this)) return this;
            var e = this.simultaneous;
            return (
              (t = ot(t, this)), e[t.id] || ((e[t.id] = t), t.recognizeWith(this)), this
            );
          },
          dropRecognizeWith: function (t) {
            return d(t, "dropRecognizeWith", this)
              ? this
              : ((t = ot(t, this)), delete this.simultaneous[t.id], this);
          },
          requireFailure: function (t) {
            if (d(t, "requireFailure", this)) return this;
            var e = this.requireFail;
            return (
              (t = ot(t, this)),
              w(e, t) === -1 && (e.push(t), t.requireFailure(this)),
              this
            );
          },
          dropRequireFailure: function (t) {
            if (d(t, "dropRequireFailure", this)) return this;
            t = ot(t, this);
            var e = w(this.requireFail, t);
            return e > -1 && this.requireFail.splice(e, 1), this;
          },
          hasRequireFailures: function () {
            return this.requireFail.length > 0;
          },
          canRecognizeWith: function (t) {
            return !!this.simultaneous[t.id];
          },
          emit: function (t) {
            function e(e) {
              i.manager.emit(e, t);
            }
            var i = this,
              o = this.state;
            o < _e && e(i.options.event + et(o)),
              e(i.options.event),
              t.additionalEvent && e(t.additionalEvent),
              o >= _e && e(i.options.event + et(o));
          },
          tryEmit: function (t) {
            return this.canEmit() ? this.emit(t) : void (this.state = De);
          },
          canEmit: function () {
            for (var t = 0; t < this.requireFail.length; ) {
              if (!(this.requireFail[t].state & (De | ve))) return !1;
              t++;
            }
            return !0;
          },
          recognize: function (t) {
            var e = mt({}, t);
            return f(this.options.enable, [this, e])
              ? (this.state & (we | xe | De) && (this.state = ve),
                (this.state = this.process(e)),
                void (this.state & (ye | be | _e | xe) && this.tryEmit(e)))
              : (this.reset(), void (this.state = De));
          },
          process: function (t) {},
          getTouchAction: function () {},
          reset: function () {},
        }),
          p(nt, tt, {
            defaults: {pointers: 1},
            attrTest: function (t) {
              var e = this.options.pointers;
              return 0 === e || t.pointers.length === e;
            },
            process: function (t) {
              var e = this.state,
                i = t.eventType,
                o = e & (ye | be),
                n = this.attrTest(t);
              return o && (i & Ft || !n)
                ? e | xe
                : o || n
                ? i & Lt
                  ? e | _e
                  : e & ye
                  ? e | be
                  : ye
                : De;
            },
          }),
          p(st, nt, {
            defaults: {event: "pan", threshold: 10, pointers: 1, direction: Vt},
            getTouchAction: function () {
              var t = this.options.direction,
                e = [];
              return t & Wt && e.push(me), t & Ut && e.push(fe), e;
            },
            directionTest: function (t) {
              var e = this.options,
                i = !0,
                o = t.distance,
                n = t.direction,
                s = t.deltaX,
                r = t.deltaY;
              return (
                n & e.direction ||
                  (e.direction & Wt
                    ? ((n = 0 === s ? Ht : s < 0 ? Yt : jt),
                      (i = s != this.pX),
                      (o = Math.abs(t.deltaX)))
                    : ((n = 0 === r ? Ht : r < 0 ? Gt : zt),
                      (i = r != this.pY),
                      (o = Math.abs(t.deltaY)))),
                (t.direction = n),
                i && o > e.threshold && n & e.direction
              );
            },
            attrTest: function (t) {
              return (
                nt.prototype.attrTest.call(this, t) &&
                (this.state & ye || (!(this.state & ye) && this.directionTest(t)))
              );
            },
            emit: function (t) {
              (this.pX = t.deltaX), (this.pY = t.deltaY);
              var e = it(t.direction);
              e && (t.additionalEvent = this.options.event + e),
                this._super.emit.call(this, t);
            },
          }),
          p(rt, nt, {
            defaults: {event: "pinch", threshold: 0, pointers: 2},
            getTouchAction: function () {
              return [ce];
            },
            attrTest: function (t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.scale - 1) > this.options.threshold || this.state & ye)
              );
            },
            emit: function (t) {
              if (1 !== t.scale) {
                var e = t.scale < 1 ? "in" : "out";
                t.additionalEvent = this.options.event + e;
              }
              this._super.emit.call(this, t);
            },
          }),
          p(at, tt, {
            defaults: {event: "press", pointers: 1, time: 251, threshold: 9},
            getTouchAction: function () {
              return [ue];
            },
            process: function (t) {
              var e = this.options,
                i = t.pointers.length === e.pointers,
                o = t.distance < e.threshold,
                n = t.deltaTime > e.time;
              if (((this._input = t), !o || !i || (t.eventType & (Lt | Ft) && !n)))
                this.reset();
              else if (t.eventType & It)
                this.reset(),
                  (this._timer = h(
                    function () {
                      (this.state = we), this.tryEmit();
                    },
                    e.time,
                    this
                  ));
              else if (t.eventType & Lt) return we;
              return De;
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function (t) {
              this.state === we &&
                (t && t.eventType & Lt
                  ? this.manager.emit(this.options.event + "up", t)
                  : ((this._input.timeStamp = wt()),
                    this.manager.emit(this.options.event, this._input)));
            },
          }),
          p(ht, nt, {
            defaults: {event: "rotate", threshold: 0, pointers: 2},
            getTouchAction: function () {
              return [ce];
            },
            attrTest: function (t) {
              return (
                this._super.attrTest.call(this, t) &&
                (Math.abs(t.rotation) > this.options.threshold || this.state & ye)
              );
            },
          }),
          p(dt, nt, {
            defaults: {
              event: "swipe",
              threshold: 10,
              velocity: 0.3,
              direction: Wt | Ut,
              pointers: 1,
            },
            getTouchAction: function () {
              return st.prototype.getTouchAction.call(this);
            },
            attrTest: function (t) {
              var e,
                i = this.options.direction;
              return (
                i & (Wt | Ut)
                  ? (e = t.overallVelocity)
                  : i & Wt
                  ? (e = t.overallVelocityX)
                  : i & Ut && (e = t.overallVelocityY),
                this._super.attrTest.call(this, t) &&
                  i & t.offsetDirection &&
                  t.distance > this.options.threshold &&
                  t.maxPointers == this.options.pointers &&
                  _t(e) > this.options.velocity &&
                  t.eventType & Lt
              );
            },
            emit: function (t) {
              var e = it(t.offsetDirection);
              e && this.manager.emit(this.options.event + e, t),
                this.manager.emit(this.options.event, t);
            },
          }),
          p(lt, tt, {
            defaults: {
              event: "tap",
              pointers: 1,
              taps: 1,
              interval: 300,
              time: 250,
              threshold: 9,
              posThreshold: 10,
            },
            getTouchAction: function () {
              return [pe];
            },
            process: function (t) {
              var e = this.options,
                i = t.pointers.length === e.pointers,
                o = t.distance < e.threshold,
                n = t.deltaTime < e.time;
              if ((this.reset(), t.eventType & It && 0 === this.count))
                return this.failTimeout();
              if (o && n && i) {
                if (t.eventType != Lt) return this.failTimeout();
                var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
                  r = !this.pCenter || F(this.pCenter, t.center) < e.posThreshold;
                (this.pTime = t.timeStamp),
                  (this.pCenter = t.center),
                  r && s ? (this.count += 1) : (this.count = 1),
                  (this._input = t);
                var a = this.count % e.taps;
                if (0 === a)
                  return this.hasRequireFailures()
                    ? ((this._timer = h(
                        function () {
                          (this.state = we), this.tryEmit();
                        },
                        e.interval,
                        this
                      )),
                      ye)
                    : we;
              }
              return De;
            },
            failTimeout: function () {
              return (
                (this._timer = h(
                  function () {
                    this.state = De;
                  },
                  this.options.interval,
                  this
                )),
                De
              );
            },
            reset: function () {
              clearTimeout(this._timer);
            },
            emit: function () {
              this.state == we &&
                ((this._input.tapCount = this.count),
                this.manager.emit(this.options.event, this._input));
            },
          }),
          (ut.VERSION = "2.0.7"),
          (ut.defaults = {
            domEvents: !1,
            touchAction: le,
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
              [ht, {enable: !1}],
              [rt, {enable: !1}, ["rotate"]],
              [dt, {direction: Wt}],
              [st, {direction: Wt}, ["swipe"]],
              [lt],
              [lt, {event: "doubletap", taps: 2}, ["tap"]],
              [at],
            ],
            cssProps: {
              userSelect: "none",
              touchSelect: "none",
              touchCallout: "none",
              contentZooming: "none",
              userDrag: "none",
              tapHighlightColor: "rgba(0,0,0,0)",
            },
          });
        var Se = 1,
          ke = 2;
        (pt.prototype = {
          set: function (t) {
            return (
              mt(this.options, t),
              t.touchAction && this.touchAction.update(),
              t.inputTarget &&
                (this.input.destroy(),
                (this.input.target = t.inputTarget),
                this.input.init()),
              this
            );
          },
          stop: function (t) {
            this.session.stopped = t ? ke : Se;
          },
          recognize: function (t) {
            var e = this.session;
            if (!e.stopped) {
              this.touchAction.preventDefaults(t);
              var i,
                o = this.recognizers,
                n = e.curRecognizer;
              (!n || (n && n.state & we)) && (n = e.curRecognizer = null);
              for (var s = 0; s < o.length; )
                (i = o[s]),
                  e.stopped === ke || (n && i != n && !i.canRecognizeWith(n))
                    ? i.reset()
                    : i.recognize(t),
                  !n && i.state & (ye | be | _e) && (n = e.curRecognizer = i),
                  s++;
            }
          },
          get: function (t) {
            if (t instanceof tt) return t;
            for (var e = this.recognizers, i = 0; i < e.length; i++)
              if (e[i].options.event == t) return e[i];
            return null;
          },
          add: function (t) {
            if (d(t, "add", this)) return this;
            var e = this.get(t.options.event);
            return (
              e && this.remove(e),
              this.recognizers.push(t),
              (t.manager = this),
              this.touchAction.update(),
              t
            );
          },
          remove: function (t) {
            if (d(t, "remove", this)) return this;
            if ((t = this.get(t))) {
              var e = this.recognizers,
                i = w(e, t);
              i !== -1 && (e.splice(i, 1), this.touchAction.update());
            }
            return this;
          },
          on: function (t, e) {
            if (t !== a && e !== a) {
              var i = this.handlers;
              return (
                l(_(t), function (t) {
                  (i[t] = i[t] || []), i[t].push(e);
                }),
                this
              );
            }
          },
          off: function (t, e) {
            if (t !== a) {
              var i = this.handlers;
              return (
                l(_(t), function (t) {
                  e ? i[t] && i[t].splice(w(i[t], e), 1) : delete i[t];
                }),
                this
              );
            }
          },
          emit: function (t, e) {
            this.options.domEvents && ft(t, e);
            var i = this.handlers[t] && this.handlers[t].slice();
            if (i && i.length) {
              (e.type = t),
                (e.preventDefault = function () {
                  e.srcEvent.preventDefault();
                });
              for (var o = 0; o < i.length; ) i[o](e), o++;
            }
          },
          destroy: function () {
            this.element && ct(this, !1),
              (this.handlers = {}),
              (this.session = {}),
              this.input.destroy(),
              (this.element = null);
          },
        }),
          mt(ut, {
            INPUT_START: It,
            INPUT_MOVE: Rt,
            INPUT_END: Lt,
            INPUT_CANCEL: Ft,
            STATE_POSSIBLE: ve,
            STATE_BEGAN: ye,
            STATE_CHANGED: be,
            STATE_ENDED: _e,
            STATE_RECOGNIZED: we,
            STATE_CANCELLED: xe,
            STATE_FAILED: De,
            DIRECTION_NONE: Ht,
            DIRECTION_LEFT: Yt,
            DIRECTION_RIGHT: jt,
            DIRECTION_UP: Gt,
            DIRECTION_DOWN: zt,
            DIRECTION_HORIZONTAL: Wt,
            DIRECTION_VERTICAL: Ut,
            DIRECTION_ALL: Vt,
            Manager: pt,
            Input: C,
            TouchAction: $,
            TouchInput: V,
            MouseInput: G,
            PointerEventInput: z,
            TouchMouseInput: q,
            SingleTouchInput: W,
            Recognizer: tt,
            AttrRecognizer: nt,
            Tap: lt,
            Pan: st,
            Swipe: dt,
            Pinch: rt,
            Rotate: ht,
            Press: at,
            on: g,
            off: v,
            each: l,
            merge: Dt,
            extend: xt,
            assign: mt,
            inherit: p,
            bindFn: c,
            prefixed: S,
          });
        var Te = "undefined" != typeof n ? n : "undefined" != typeof self ? self : {};
        (Te.Hammer = ut),
          (o = function () {
            return ut;
          }.call(e, i, e, t)),
          !(o !== a && (t.exports = o));
      })(window, document, "Hammer");
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e) {
        var i = c().hours(0).minutes(0).seconds(0).milliseconds(0),
          o = i.clone().add(-3, "days").valueOf(),
          n = i.clone().add(3, "days").valueOf();
        (this.millisecondsPerPixelCache = void 0),
          void 0 === e
            ? ((this.start = o), (this.end = n))
            : ((this.start = e.start || o), (this.end = e.end || n)),
          (this.rolling = !1),
          (this.body = t),
          (this.deltaDifference = 0),
          (this.scaleOffset = 0),
          (this.startToFront = !1),
          (this.endToFront = !0),
          (this.defaultOptions = {
            rtl: !1,
            start: null,
            end: null,
            moment: c,
            direction: "horizontal",
            moveable: !0,
            zoomable: !0,
            min: null,
            max: null,
            zoomMin: 10,
            zoomMax: 31536e10,
            rollingMode: {follow: !1, offset: 0.5},
          }),
          (this.options = p.extend({}, this.defaultOptions)),
          (this.props = {touch: {}}),
          (this.animationTimer = null),
          this.body.emitter.on("panstart", this._onDragStart.bind(this)),
          this.body.emitter.on("panmove", this._onDrag.bind(this)),
          this.body.emitter.on("panend", this._onDragEnd.bind(this)),
          this.body.emitter.on("mousewheel", this._onMouseWheel.bind(this)),
          this.body.emitter.on("touch", this._onTouch.bind(this)),
          this.body.emitter.on("pinch", this._onPinch.bind(this)),
          this.body.dom.rollingModeBtn.addEventListener(
            "click",
            this.startRolling.bind(this)
          ),
          this.setOptions(e);
      }
      function s(t) {
        if ("horizontal" != t && "vertical" != t)
          throw new TypeError(
            'Unknown direction "' + t + '". Choose "horizontal" or "vertical".'
          );
      }
      var r = i(58),
        a = o(r),
        h = i(89),
        d = o(h),
        l = i(62),
        u = o(l),
        p = i(1),
        c = (i(99), i(82)),
        f = i(100),
        m = i(101);
      (n.prototype = new f()),
        (n.prototype.setOptions = function (t) {
          if (t) {
            var e = [
              "animation",
              "direction",
              "min",
              "max",
              "zoomMin",
              "zoomMax",
              "moveable",
              "zoomable",
              "moment",
              "activate",
              "hiddenDates",
              "zoomKey",
              "rtl",
              "showCurrentTime",
              "rollingMode",
              "horizontalScroll",
            ];
            p.selectiveExtend(e, this.options, t),
              t.rollingMode && t.rollingMode.follow && this.startRolling(),
              ("start" in t || "end" in t) && this.setRange(t.start, t.end);
          }
        }),
        (n.prototype.startRolling = function () {
          function t() {
            e.stopRolling(), (e.rolling = !0);
            var i = e.end - e.start,
              o = p.convert(new Date(), "Date").valueOf(),
              n = o - i * e.options.rollingMode.offset,
              s = o + i * (1 - e.options.rollingMode.offset),
              r =
                (!e.options || void 0 === e.options.animation || e.options.animation,
                {animation: !1});
            e.setRange(n, s, r);
            var a = e.conversion(e.body.domProps.center.width).scale,
              i = 1 / a / 10;
            i < 30 && (i = 30),
              i > 1e3 && (i = 1e3),
              (e.body.dom.rollingModeBtn.style.visibility = "hidden"),
              (e.currentTimeTimer = setTimeout(t, i));
          }
          var e = this;
          t();
        }),
        (n.prototype.stopRolling = function () {
          void 0 !== this.currentTimeTimer &&
            (clearTimeout(this.currentTimeTimer),
            (this.rolling = !1),
            (this.body.dom.rollingModeBtn.style.visibility = "visible"));
        }),
        (n.prototype.setRange = function (t, e, i, o) {
          i || (i = {}), i.byUser !== !0 && (i.byUser = !1);
          var n = this,
            s = void 0 != t ? p.convert(t, "Date").valueOf() : null,
            r = void 0 != e ? p.convert(e, "Date").valueOf() : null;
          if (
            (this._cancelAnimation(),
            (this.millisecondsPerPixelCache = void 0),
            i.animation)
          ) {
            var h = this.start,
              l = this.end,
              c =
                "object" === (0, u.default)(i.animation) && "duration" in i.animation
                  ? i.animation.duration
                  : 500,
              f =
                "object" === (0, u.default)(i.animation) &&
                "easingFunction" in i.animation
                  ? i.animation.easingFunction
                  : "easeInOutQuad",
              g = p.easingFunctions[f];
            if (!g)
              throw new Error(
                "Unknown easing function " +
                  (0, d.default)(f) +
                  ". Choose from: " +
                  (0, a.default)(p.easingFunctions).join(", ")
              );
            var v = new Date().valueOf(),
              y = !1,
              b = function t() {
                if (!n.props.touch.dragging) {
                  var e = new Date().valueOf(),
                    a = e - v,
                    d = g(a / c),
                    u = a > c,
                    p = u || null === s ? s : h + (s - h) * d,
                    f = u || null === r ? r : l + (r - l) * d;
                  (_ = n._applyRange(p, f)),
                    m.updateHiddenDates(
                      n.options.moment,
                      n.body,
                      n.options.hiddenDates
                    ),
                    (y = y || _);
                  var b = {
                    start: new Date(n.start),
                    end: new Date(n.end),
                    byUser: i.byUser,
                    event: i.event,
                  };
                  if ((_ && n.body.emitter.emit("rangechange", b), u)) {
                    if (y && (n.body.emitter.emit("rangechanged", b), o)) return o();
                  } else n.animationTimer = setTimeout(t, 20);
                }
              };
            return b();
          }
          var _ = this._applyRange(s, r);
          if (
            (m.updateHiddenDates(
              this.options.moment,
              this.body,
              this.options.hiddenDates
            ),
            _)
          ) {
            var w = {
              start: new Date(this.start),
              end: new Date(this.end),
              byUser: i.byUser,
              event: i.event,
            };
            if (
              (this.body.emitter.emit("rangechange", w),
              clearTimeout(n.timeoutID),
              (n.timeoutID = setTimeout(function () {
                n.body.emitter.emit("rangechanged", w);
              }, 200)),
              o)
            )
              return o();
          }
        }),
        (n.prototype.getMillisecondsPerPixel = function () {
          return (
            void 0 === this.millisecondsPerPixelCache &&
              (this.millisecondsPerPixelCache =
                (this.end - this.start) / this.body.dom.center.clientWidth),
            this.millisecondsPerPixelCache
          );
        }),
        (n.prototype._cancelAnimation = function () {
          this.animationTimer &&
            (clearTimeout(this.animationTimer), (this.animationTimer = null));
        }),
        (n.prototype._applyRange = function (t, e) {
          var i,
            o = null != t ? p.convert(t, "Date").valueOf() : this.start,
            n = null != e ? p.convert(e, "Date").valueOf() : this.end,
            s =
              null != this.options.max
                ? p.convert(this.options.max, "Date").valueOf()
                : null,
            r =
              null != this.options.min
                ? p.convert(this.options.min, "Date").valueOf()
                : null;
          if (isNaN(o) || null === o) throw new Error('Invalid start "' + t + '"');
          if (isNaN(n) || null === n) throw new Error('Invalid end "' + e + '"');
          if (
            (n < o && (n = o),
            null !== r &&
              o < r &&
              ((i = r - o), (o += i), (n += i), null != s && n > s && (n = s)),
            null !== s &&
              n > s &&
              ((i = n - s), (o -= i), (n -= i), null != r && o < r && (o = r)),
            null !== this.options.zoomMin)
          ) {
            var a = parseFloat(this.options.zoomMin);
            if ((a < 0 && (a = 0), n - o < a)) {
              var h = 0.5;
              this.end - this.start === a && o >= this.start - h && n <= this.end
                ? ((o = this.start), (n = this.end))
                : ((i = a - (n - o)), (o -= i / 2), (n += i / 2));
            }
          }
          if (null !== this.options.zoomMax) {
            var d = parseFloat(this.options.zoomMax);
            d < 0 && (d = 0),
              n - o > d &&
                (this.end - this.start === d && o < this.start && n > this.end
                  ? ((o = this.start), (n = this.end))
                  : ((i = n - o - d), (o += i / 2), (n -= i / 2)));
          }
          var l = this.start != o || this.end != n;
          return (
            (o >= this.start && o <= this.end) ||
              (n >= this.start && n <= this.end) ||
              (this.start >= o && this.start <= n) ||
              (this.end >= o && this.end <= n) ||
              this.body.emitter.emit("checkRangedItems"),
            (this.start = o),
            (this.end = n),
            l
          );
        }),
        (n.prototype.getRange = function () {
          return {start: this.start, end: this.end};
        }),
        (n.prototype.conversion = function (t, e) {
          return n.conversion(this.start, this.end, t, e);
        }),
        (n.conversion = function (t, e, i, o) {
          return (
            void 0 === o && (o = 0),
            0 != i && e - t != 0
              ? {offset: t, scale: i / (e - t - o)}
              : {offset: 0, scale: 1}
          );
        }),
        (n.prototype._onDragStart = function (t) {
          (this.deltaDifference = 0),
            (this.previousDelta = 0),
            this.options.moveable &&
              this._isInsideRange(t) &&
              this.props.touch.allowDragging &&
              (this.stopRolling(),
              (this.props.touch.start = this.start),
              (this.props.touch.end = this.end),
              (this.props.touch.dragging = !0),
              this.body.dom.root && (this.body.dom.root.style.cursor = "move"));
        }),
        (n.prototype._onDrag = function (t) {
          if (
            t &&
            this.props.touch.dragging &&
            this.options.moveable &&
            this.props.touch.allowDragging
          ) {
            var e = this.options.direction;
            s(e);
            var i = "horizontal" == e ? t.deltaX : t.deltaY;
            i -= this.deltaDifference;
            var o = this.props.touch.end - this.props.touch.start,
              n = m.getHiddenDurationBetween(
                this.body.hiddenDates,
                this.start,
                this.end
              );
            o -= n;
            var r =
              "horizontal" == e
                ? this.body.domProps.center.width
                : this.body.domProps.center.height;
            if (this.options.rtl) var a = (i / r) * o;
            else var a = (-i / r) * o;
            var h = this.props.touch.start + a,
              d = this.props.touch.end + a,
              l = m.snapAwayFromHidden(
                this.body.hiddenDates,
                h,
                this.previousDelta - i,
                !0
              ),
              u = m.snapAwayFromHidden(
                this.body.hiddenDates,
                d,
                this.previousDelta - i,
                !0
              );
            if (l != h || u != d)
              return (
                (this.deltaDifference += i),
                (this.props.touch.start = l),
                (this.props.touch.end = u),
                void this._onDrag(t)
              );
            (this.previousDelta = i), this._applyRange(h, d);
            var p = new Date(this.start),
              c = new Date(this.end);
            this.body.emitter.emit("rangechange", {
              start: p,
              end: c,
              byUser: !0,
              event: t,
            }),
              this.body.emitter.emit("panmove");
          }
        }),
        (n.prototype._onDragEnd = function (t) {
          this.props.touch.dragging &&
            this.options.moveable &&
            this.props.touch.allowDragging &&
            ((this.props.touch.dragging = !1),
            this.body.dom.root && (this.body.dom.root.style.cursor = "auto"),
            this.body.emitter.emit("rangechanged", {
              start: new Date(this.start),
              end: new Date(this.end),
              byUser: !0,
              event: t,
            }));
        }),
        (n.prototype._onMouseWheel = function (t) {
          var e = 0;
          if (
            (t.wheelDelta ? (e = t.wheelDelta / 120) : t.detail && (e = -t.detail / 3),
            (this.options.zoomKey &&
              !t[this.options.zoomKey] &&
              this.options.zoomable) ||
              (!this.options.zoomable && this.options.moveable))
          ) {
            if (this.options.horizontalScroll) {
              t.preventDefault();
              var i = (e * (this.end - this.start)) / 20,
                o = this.start - i,
                n = this.end - i,
                s = {animation: !1, byUser: !0, event: t};
              this.setRange(o, n, s);
            }
          } else if (
            this.options.zoomable &&
            this.options.moveable &&
            this._isInsideRange(t) &&
            e
          ) {
            var r;
            r = e < 0 ? 1 - e / 5 : 1 / (1 + e / 5);
            var a;
            if (this.rolling)
              a =
                this.start + (this.end - this.start) * this.options.rollingMode.offset;
            else {
              var h = this.getPointer(
                {x: t.clientX, y: t.clientY},
                this.body.dom.center
              );
              a = this._pointerToDate(h);
            }
            this.zoom(r, a, e, t), t.preventDefault();
          }
        }),
        (n.prototype._onTouch = function (t) {
          (this.props.touch.start = this.start),
            (this.props.touch.end = this.end),
            (this.props.touch.allowDragging = !0),
            (this.props.touch.center = null),
            (this.scaleOffset = 0),
            (this.deltaDifference = 0);
        }),
        (n.prototype._onPinch = function (t) {
          if (this.options.zoomable && this.options.moveable) {
            (this.props.touch.allowDragging = !1),
              this.props.touch.center ||
                (this.props.touch.center = this.getPointer(
                  t.center,
                  this.body.dom.center
                )),
              this.stopRolling();
            var e = 1 / (t.scale + this.scaleOffset),
              i = this._pointerToDate(this.props.touch.center),
              o = m.getHiddenDurationBetween(
                this.body.hiddenDates,
                this.start,
                this.end
              ),
              n = m.getHiddenDurationBefore(
                this.options.moment,
                this.body.hiddenDates,
                this,
                i
              ),
              s = o - n,
              r = i - n + (this.props.touch.start - (i - n)) * e,
              a = i + s + (this.props.touch.end - (i + s)) * e;
            (this.startToFront = 1 - e <= 0), (this.endToFront = e - 1 <= 0);
            var h = m.snapAwayFromHidden(this.body.hiddenDates, r, 1 - e, !0),
              d = m.snapAwayFromHidden(this.body.hiddenDates, a, e - 1, !0);
            (h == r && d == a) ||
              ((this.props.touch.start = h),
              (this.props.touch.end = d),
              (this.scaleOffset = 1 - t.scale),
              (r = h),
              (a = d));
            var l = {animation: !1, byUser: !0, event: t};
            this.setRange(r, a, l), (this.startToFront = !1), (this.endToFront = !0);
          }
        }),
        (n.prototype._isInsideRange = function (t) {
          var e = t.center ? t.center.x : t.clientX;
          if (this.options.rtl)
            var i = e - p.getAbsoluteLeft(this.body.dom.centerContainer);
          else var i = p.getAbsoluteRight(this.body.dom.centerContainer) - e;
          var o = this.body.util.toTime(i);
          return o >= this.start && o <= this.end;
        }),
        (n.prototype._pointerToDate = function (t) {
          var e,
            i = this.options.direction;
          if ((s(i), "horizontal" == i)) return this.body.util.toTime(t.x).valueOf();
          var o = this.body.domProps.center.height;
          return (e = this.conversion(o)), t.y / e.scale + e.offset;
        }),
        (n.prototype.getPointer = function (t, e) {
          return this.options.rtl
            ? {x: p.getAbsoluteRight(e) - t.x, y: t.y - p.getAbsoluteTop(e)}
            : {x: t.x - p.getAbsoluteLeft(e), y: t.y - p.getAbsoluteTop(e)};
        }),
        (n.prototype.zoom = function (t, e, i, o) {
          null == e && (e = (this.start + this.end) / 2);
          var n = m.getHiddenDurationBetween(
              this.body.hiddenDates,
              this.start,
              this.end
            ),
            s = m.getHiddenDurationBefore(
              this.options.moment,
              this.body.hiddenDates,
              this,
              e
            ),
            r = n - s,
            a = e - s + (this.start - (e - s)) * t,
            h = e + r + (this.end - (e + r)) * t;
          (this.startToFront = !(i > 0)), (this.endToFront = !(-i > 0));
          var d = m.snapAwayFromHidden(this.body.hiddenDates, a, i, !0),
            l = m.snapAwayFromHidden(this.body.hiddenDates, h, -i, !0);
          (d == a && l == h) || ((a = d), (h = l));
          var u = {animation: !1, byUser: !0, event: o};
          this.setRange(a, h, u), (this.startToFront = !1), (this.endToFront = !0);
        }),
        (n.prototype.move = function (t) {
          var e = this.end - this.start,
            i = this.start + e * t,
            o = this.end + e * t;
          (this.start = i), (this.end = o);
        }),
        (n.prototype.moveTo = function (t) {
          var e = (this.start + this.end) / 2,
            i = e - t,
            o = this.start - i,
            n = this.end - i,
            s = {animation: !1, byUser: !0, event: null};
          this.setRange(o, n, s);
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      i(95);
      (e.onTouch = function (t, e) {
        (e.inputHandler = function (t) {
          t.isFirst && e(t);
        }),
          t.on("hammer.input", e.inputHandler);
      }),
        (e.onRelease = function (t, e) {
          return (
            (e.inputHandler = function (t) {
              t.isFinal && e(t);
            }),
            t.on("hammer.input", e.inputHandler)
          );
        }),
        (e.offTouch = function (t, e) {
          t.off("hammer.input", e.inputHandler);
        }),
        (e.offRelease = e.offTouch),
        (e.disablePreventDefaultVertically = function (t) {
          var e = "pan-y";
          return (
            (t.getTouchAction = function () {
              return [e];
            }),
            t
          );
        });
    },
    function (t, e, i) {
      function o(t, e) {
        (this.options = null), (this.props = null);
      }
      var n = i(1);
      (o.prototype.setOptions = function (t) {
        t && n.extend(this.options, t);
      }),
        (o.prototype.redraw = function () {
          return !1;
        }),
        (o.prototype.destroy = function () {}),
        (o.prototype._isResized = function () {
          var t =
            this.props._previousWidth !== this.props.width ||
            this.props._previousHeight !== this.props.height;
          return (
            (this.props._previousWidth = this.props.width),
            (this.props._previousHeight = this.props.height),
            t
          );
        }),
        (t.exports = o);
    },
    function (t, e) {
      (e.convertHiddenOptions = function (t, i, o) {
        if (o && !Array.isArray(o)) return e.convertHiddenOptions(t, i, [o]);
        if (((i.hiddenDates = []), o && 1 == Array.isArray(o))) {
          for (var n = 0; n < o.length; n++)
            if (void 0 === o[n].repeat) {
              var s = {};
              (s.start = t(o[n].start).toDate().valueOf()),
                (s.end = t(o[n].end).toDate().valueOf()),
                i.hiddenDates.push(s);
            }
          i.hiddenDates.sort(function (t, e) {
            return t.start - e.start;
          });
        }
      }),
        (e.updateHiddenDates = function (t, i, o) {
          if (o && !Array.isArray(o)) return e.updateHiddenDates(t, i, [o]);
          if (o && void 0 !== i.domProps.centerContainer.width) {
            e.convertHiddenOptions(t, i, o);
            for (
              var n = t(i.range.start),
                s = t(i.range.end),
                r = i.range.end - i.range.start,
                a = r / i.domProps.centerContainer.width,
                h = 0;
              h < o.length;
              h++
            )
              if (void 0 !== o[h].repeat) {
                var d = t(o[h].start),
                  l = t(o[h].end);
                if ("Invalid Date" == d._d)
                  throw new Error("Supplied start date is not valid: " + o[h].start);
                if ("Invalid Date" == l._d)
                  throw new Error("Supplied end date is not valid: " + o[h].end);
                var u = l - d;
                if (u >= 4 * a) {
                  var p = 0,
                    c = s.clone();
                  switch (o[h].repeat) {
                    case "daily":
                      d.day() != l.day() && (p = 1),
                        d.dayOfYear(n.dayOfYear()),
                        d.year(n.year()),
                        d.subtract(7, "days"),
                        l.dayOfYear(n.dayOfYear()),
                        l.year(n.year()),
                        l.subtract(7 - p, "days"),
                        c.add(1, "weeks");
                      break;
                    case "weekly":
                      var f = l.diff(d, "days"),
                        m = d.day();
                      d.date(n.date()),
                        d.month(n.month()),
                        d.year(n.year()),
                        (l = d.clone()),
                        d.day(m),
                        l.day(m),
                        l.add(f, "days"),
                        d.subtract(1, "weeks"),
                        l.subtract(1, "weeks"),
                        c.add(1, "weeks");
                      break;
                    case "monthly":
                      d.month() != l.month() && (p = 1),
                        d.month(n.month()),
                        d.year(n.year()),
                        d.subtract(1, "months"),
                        l.month(n.month()),
                        l.year(n.year()),
                        l.subtract(1, "months"),
                        l.add(p, "months"),
                        c.add(1, "months");
                      break;
                    case "yearly":
                      d.year() != l.year() && (p = 1),
                        d.year(n.year()),
                        d.subtract(1, "years"),
                        l.year(n.year()),
                        l.subtract(1, "years"),
                        l.add(p, "years"),
                        c.add(1, "years");
                      break;
                    default:
                      return void console.log(
                        "Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:",
                        o[h].repeat
                      );
                  }
                  for (; d < c; )
                    switch (
                      (i.hiddenDates.push({start: d.valueOf(), end: l.valueOf()}),
                      o[h].repeat)
                    ) {
                      case "daily":
                        d.add(1, "days"), l.add(1, "days");
                        break;
                      case "weekly":
                        d.add(1, "weeks"), l.add(1, "weeks");
                        break;
                      case "monthly":
                        d.add(1, "months"), l.add(1, "months");
                        break;
                      case "yearly":
                        d.add(1, "y"), l.add(1, "y");
                        break;
                      default:
                        return void console.log(
                          "Wrong repeat format, allowed are: daily, weekly, monthly, yearly. Given:",
                          o[h].repeat
                        );
                    }
                  i.hiddenDates.push({start: d.valueOf(), end: l.valueOf()});
                }
              }
            e.removeDuplicates(i);
            var g = e.isHidden(i.range.start, i.hiddenDates),
              v = e.isHidden(i.range.end, i.hiddenDates),
              y = i.range.start,
              b = i.range.end;
            1 == g.hidden &&
              (y = 1 == i.range.startToFront ? g.startDate - 1 : g.endDate + 1),
              1 == v.hidden &&
                (b = 1 == i.range.endToFront ? v.startDate - 1 : v.endDate + 1),
              (1 != g.hidden && 1 != v.hidden) || i.range._applyRange(y, b);
          }
        }),
        (e.removeDuplicates = function (t) {
          for (var e = t.hiddenDates, i = [], o = 0; o < e.length; o++)
            for (var n = 0; n < e.length; n++)
              o != n &&
                1 != e[n].remove &&
                1 != e[o].remove &&
                (e[n].start >= e[o].start && e[n].end <= e[o].end
                  ? (e[n].remove = !0)
                  : e[n].start >= e[o].start && e[n].start <= e[o].end
                  ? ((e[o].end = e[n].end), (e[n].remove = !0))
                  : e[n].end >= e[o].start &&
                    e[n].end <= e[o].end &&
                    ((e[o].start = e[n].start), (e[n].remove = !0)));
          for (var o = 0; o < e.length; o++) e[o].remove !== !0 && i.push(e[o]);
          (t.hiddenDates = i),
            t.hiddenDates.sort(function (t, e) {
              return t.start - e.start;
            });
        }),
        (e.printDates = function (t) {
          for (var e = 0; e < t.length; e++)
            console.log(
              e,
              new Date(t[e].start),
              new Date(t[e].end),
              t[e].start,
              t[e].end,
              t[e].remove
            );
        }),
        (e.stepOverHiddenDates = function (t, e, i) {
          for (
            var o = !1, n = e.current.valueOf(), s = 0;
            s < e.hiddenDates.length;
            s++
          ) {
            var r = e.hiddenDates[s].start,
              a = e.hiddenDates[s].end;
            if (n >= r && n < a) {
              o = !0;
              break;
            }
          }
          if (1 == o && n < e._end.valueOf() && n != i) {
            var h = t(i),
              d = t(a);
            h.year() != d.year()
              ? (e.switchedYear = !0)
              : h.month() != d.month()
              ? (e.switchedMonth = !0)
              : h.dayOfYear() != d.dayOfYear() && (e.switchedDay = !0),
              (e.current = d);
          }
        }),
        (e.toScreen = function (t, i, o) {
          if (0 == t.body.hiddenDates.length) {
            var n = t.range.conversion(o);
            return (i.valueOf() - n.offset) * n.scale;
          }
          var s = e.isHidden(i, t.body.hiddenDates);
          1 == s.hidden && (i = s.startDate);
          var r = e.getHiddenDurationBetween(
            t.body.hiddenDates,
            t.range.start,
            t.range.end
          );
          if (i < t.range.start) {
            var n = t.range.conversion(o, r),
              a = e.getHiddenDurationBeforeStart(t.body.hiddenDates, i, n.offset);
            return (
              (i = t.options.moment(i).toDate().valueOf()),
              (i += a),
              -(n.offset - i.valueOf()) * n.scale
            );
          }
          if (i > t.range.end) {
            var h = {start: t.range.start, end: i};
            i = e.correctTimeForHidden(t.options.moment, t.body.hiddenDates, h, i);
            var n = t.range.conversion(o, r);
            return (i.valueOf() - n.offset) * n.scale;
          }
          i = e.correctTimeForHidden(t.options.moment, t.body.hiddenDates, t.range, i);
          var n = t.range.conversion(o, r);
          return (i.valueOf() - n.offset) * n.scale;
        }),
        (e.toTime = function (t, i, o) {
          if (0 == t.body.hiddenDates.length) {
            var n = t.range.conversion(o);
            return new Date(i / n.scale + n.offset);
          }
          var s = e.getHiddenDurationBetween(
              t.body.hiddenDates,
              t.range.start,
              t.range.end
            ),
            r = t.range.end - t.range.start - s,
            a = (r * i) / o,
            h = e.getAccumulatedHiddenDuration(t.body.hiddenDates, t.range, a),
            d = new Date(h + a + t.range.start);
          return d;
        }),
        (e.getHiddenDurationBetween = function (t, e, i) {
          for (var o = 0, n = 0; n < t.length; n++) {
            var s = t[n].start,
              r = t[n].end;
            s >= e && r < i && (o += r - s);
          }
          return o;
        }),
        (e.getHiddenDurationBeforeStart = function (t, e, i) {
          for (var o = 0, n = 0; n < t.length; n++) {
            var s = t[n].start,
              r = t[n].end;
            s >= e && r <= i && (o += r - s);
          }
          return o;
        }),
        (e.correctTimeForHidden = function (t, i, o, n) {
          return (
            (n = t(n).toDate().valueOf()), (n -= e.getHiddenDurationBefore(t, i, o, n))
          );
        }),
        (e.getHiddenDurationBefore = function (t, e, i, o) {
          var n = 0;
          o = t(o).toDate().valueOf();
          for (var s = 0; s < e.length; s++) {
            var r = e[s].start,
              a = e[s].end;
            r >= i.start && a < i.end && o >= a && (n += a - r);
          }
          return n;
        }),
        (e.getAccumulatedHiddenDuration = function (t, e, i) {
          for (var o = 0, n = 0, s = e.start, r = 0; r < t.length; r++) {
            var a = t[r].start,
              h = t[r].end;
            if (a >= e.start && h < e.end) {
              if (((n += a - s), (s = h), n >= i)) break;
              o += h - a;
            }
          }
          return o;
        }),
        (e.snapAwayFromHidden = function (t, i, o, n) {
          var s = e.isHidden(i, t);
          return 1 == s.hidden
            ? o < 0
              ? 1 == n
                ? s.startDate - (s.endDate - i) - 1
                : s.startDate - 1
              : 1 == n
              ? s.endDate + (i - s.startDate) + 1
              : s.endDate + 1
            : i;
        }),
        (e.isHidden = function (t, e) {
          for (var i = 0; i < e.length; i++) {
            var o = e[i].start,
              n = e[i].end;
            if (t >= o && t < n) return {hidden: !0, startDate: o, endDate: n};
          }
          return {hidden: !1, startDate: o, endDate: n};
        });
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n() {}
      var s = i(89),
        r = o(s),
        a = i(62),
        h = o(a),
        d = i(94),
        l = i(95),
        u = i(99),
        p = i(1),
        c = (i(88), i(92), i(98), i(103), i(119)),
        f = i(120),
        m = i(101),
        g = i(122);
      d(n.prototype),
        (n.prototype._create = function (t) {
          function e(t) {
            if (
              (this.isActive() && this.emit("mousewheel", t),
              this.options.verticalScroll &&
                !this.options.horizontalScroll &&
                this.options.zoomKey &&
                !t[this.options.zoomKey])
            ) {
              t.preventDefault();
              var e = 0;
              t.wheelDelta ? (e = t.wheelDelta / 120) : t.detail && (e = -t.detail / 3);
              var i = this.props.scrollTop,
                o = i + 120 * e;
              this.isActive() &&
                (this._setScrollTop(o), this._redraw(), this.emit("scroll", t));
            }
          }
          function i(t) {
            if (s.options.verticalScroll && (t.preventDefault(), s.isActive())) {
              var e = -t.target.scrollTop;
              s._setScrollTop(e), s._redraw(), s.emit("scrollSide", t);
            }
          }
          function o(t) {
            if (
              (t.preventDefault && t.preventDefault(),
              !(!t.target.className.indexOf("vis") > -1 || h))
            )
              return (t.dataTransfer.dropEffect = "move"), (h = !0), !1;
          }
          function n(t) {
            t.preventDefault && t.preventDefault(),
              t.stopPropagation && t.stopPropagation();
            try {
              var e = JSON.parse(t.dataTransfer.getData("text"));
              if (!e.content) return;
            } catch (t) {
              return !1;
            }
            return (
              (h = !1),
              (t.center = {x: t.clientX, y: t.clientY}),
              s.itemSet._onAddItem(t),
              s.emit("drop", s.getEventProperties(t)),
              !1
            );
          }
          (this.dom = {}),
            (this.dom.container = t),
            (this.dom.root = document.createElement("div")),
            (this.dom.background = document.createElement("div")),
            (this.dom.backgroundVertical = document.createElement("div")),
            (this.dom.backgroundHorizontal = document.createElement("div")),
            (this.dom.centerContainer = document.createElement("div")),
            (this.dom.leftContainer = document.createElement("div")),
            (this.dom.rightContainer = document.createElement("div")),
            (this.dom.center = document.createElement("div")),
            (this.dom.left = document.createElement("div")),
            (this.dom.right = document.createElement("div")),
            (this.dom.top = document.createElement("div")),
            (this.dom.bottom = document.createElement("div")),
            (this.dom.shadowTop = document.createElement("div")),
            (this.dom.shadowBottom = document.createElement("div")),
            (this.dom.shadowTopLeft = document.createElement("div")),
            (this.dom.shadowBottomLeft = document.createElement("div")),
            (this.dom.shadowTopRight = document.createElement("div")),
            (this.dom.shadowBottomRight = document.createElement("div")),
            (this.dom.rollingModeBtn = document.createElement("div")),
            (this.dom.root.className = "vis-timeline"),
            (this.dom.background.className = "vis-panel vis-background"),
            (this.dom.backgroundVertical.className =
              "vis-panel vis-background vis-vertical"),
            (this.dom.backgroundHorizontal.className =
              "vis-panel vis-background vis-horizontal"),
            (this.dom.centerContainer.className = "vis-panel vis-center"),
            (this.dom.leftContainer.className = "vis-panel vis-left"),
            (this.dom.rightContainer.className = "vis-panel vis-right"),
            (this.dom.top.className = "vis-panel vis-top"),
            (this.dom.bottom.className = "vis-panel vis-bottom"),
            (this.dom.left.className = "vis-content"),
            (this.dom.center.className = "vis-content"),
            (this.dom.right.className = "vis-content"),
            (this.dom.shadowTop.className = "vis-shadow vis-top"),
            (this.dom.shadowBottom.className = "vis-shadow vis-bottom"),
            (this.dom.shadowTopLeft.className = "vis-shadow vis-top"),
            (this.dom.shadowBottomLeft.className = "vis-shadow vis-bottom"),
            (this.dom.shadowTopRight.className = "vis-shadow vis-top"),
            (this.dom.shadowBottomRight.className = "vis-shadow vis-bottom"),
            (this.dom.rollingModeBtn.className = "vis-rolling-mode-btn"),
            this.dom.root.appendChild(this.dom.background),
            this.dom.root.appendChild(this.dom.backgroundVertical),
            this.dom.root.appendChild(this.dom.backgroundHorizontal),
            this.dom.root.appendChild(this.dom.centerContainer),
            this.dom.root.appendChild(this.dom.leftContainer),
            this.dom.root.appendChild(this.dom.rightContainer),
            this.dom.root.appendChild(this.dom.top),
            this.dom.root.appendChild(this.dom.bottom),
            this.dom.root.appendChild(this.dom.bottom),
            this.dom.root.appendChild(this.dom.rollingModeBtn),
            this.dom.centerContainer.appendChild(this.dom.center),
            this.dom.leftContainer.appendChild(this.dom.left),
            this.dom.rightContainer.appendChild(this.dom.right),
            this.dom.centerContainer.appendChild(this.dom.shadowTop),
            this.dom.centerContainer.appendChild(this.dom.shadowBottom),
            this.dom.leftContainer.appendChild(this.dom.shadowTopLeft),
            this.dom.leftContainer.appendChild(this.dom.shadowBottomLeft),
            this.dom.rightContainer.appendChild(this.dom.shadowTopRight),
            this.dom.rightContainer.appendChild(this.dom.shadowBottomRight),
            (this.props = {
              root: {},
              background: {},
              centerContainer: {},
              leftContainer: {},
              rightContainer: {},
              center: {},
              left: {},
              right: {},
              top: {},
              bottom: {},
              border: {},
              scrollTop: 0,
              scrollTopMin: 0,
            }),
            this.on(
              "rangechange",
              function () {
                this.initialDrawDone === !0 && this._redraw();
              }.bind(this)
            ),
            this.on("touch", this._onTouch.bind(this)),
            this.on("panmove", this._onDrag.bind(this));
          var s = this;
          (this._origRedraw = this._redraw.bind(this)),
            (this._redraw = p.throttle(this._origRedraw)),
            this.on("_change", function (t) {
              s.itemSet && s.itemSet.initialItemSetDrawn && t && 1 == t.queue
                ? s._redraw()
                : s._origRedraw();
            }),
            (this.hammer = new l(this.dom.root));
          var r = this.hammer.get("pinch").set({enable: !0});
          u.disablePreventDefaultVertically(r),
            this.hammer
              .get("pan")
              .set({threshold: 5, direction: l.DIRECTION_HORIZONTAL}),
            (this.listeners = {});
          var a = [
            "tap",
            "doubletap",
            "press",
            "pinch",
            "pan",
            "panstart",
            "panmove",
            "panend",
          ];
          a.forEach(function (t) {
            var e = function (e) {
              s.isActive() && s.emit(t, e);
            };
            s.hammer.on(t, e), (s.listeners[t] = e);
          }),
            u.onTouch(
              this.hammer,
              function (t) {
                s.emit("touch", t);
              }.bind(this)
            ),
            u.onRelease(
              this.hammer,
              function (t) {
                s.emit("release", t);
              }.bind(this)
            ),
            this.dom.centerContainer.addEventListener
              ? (this.dom.centerContainer.addEventListener(
                  "mousewheel",
                  e.bind(this),
                  !1
                ),
                this.dom.centerContainer.addEventListener(
                  "DOMMouseScroll",
                  e.bind(this),
                  !1
                ))
              : this.dom.centerContainer.attachEvent("onmousewheel", e.bind(this)),
            this.dom.left.parentNode.addEventListener("scroll", i.bind(this)),
            this.dom.right.parentNode.addEventListener("scroll", i.bind(this));
          var h = !1;
          if (
            (this.dom.center.addEventListener("dragover", o.bind(this), !1),
            this.dom.center.addEventListener("drop", n.bind(this), !1),
            (this.customTimes = []),
            (this.touch = {}),
            (this.redrawCount = 0),
            (this.initialDrawDone = !1),
            !t)
          )
            throw new Error("No container provided");
          t.appendChild(this.dom.root);
        }),
        (n.prototype.setOptions = function (t) {
          if (t) {
            var e = [
              "width",
              "height",
              "minHeight",
              "maxHeight",
              "autoResize",
              "start",
              "end",
              "clickToUse",
              "dataAttributes",
              "hiddenDates",
              "locale",
              "locales",
              "moment",
              "rtl",
              "zoomKey",
              "horizontalScroll",
              "verticalScroll",
            ];
            if (
              (p.selectiveExtend(e, this.options, t),
              (this.dom.rollingModeBtn.style.visibility = "hidden"),
              this.options.rtl &&
                ((this.dom.container.style.direction = "rtl"),
                (this.dom.backgroundVertical.className =
                  "vis-panel vis-background vis-vertical-rtl")),
              this.options.verticalScroll &&
                (this.options.rtl
                  ? (this.dom.rightContainer.className =
                      "vis-panel vis-right vis-vertical-scroll")
                  : (this.dom.leftContainer.className =
                      "vis-panel vis-left vis-vertical-scroll")),
              (this.options.orientation = {item: void 0, axis: void 0}),
              "orientation" in t &&
                ("string" == typeof t.orientation
                  ? (this.options.orientation = {
                      item: t.orientation,
                      axis: t.orientation,
                    })
                  : "object" === (0, h.default)(t.orientation) &&
                    ("item" in t.orientation &&
                      (this.options.orientation.item = t.orientation.item),
                    "axis" in t.orientation &&
                      (this.options.orientation.axis = t.orientation.axis))),
              "both" === this.options.orientation.axis)
            ) {
              if (!this.timeAxis2) {
                var i = (this.timeAxis2 = new c(this.body));
                (i.setOptions = function (t) {
                  var e = t ? p.extend({}, t) : {};
                  (e.orientation = "top"), c.prototype.setOptions.call(i, e);
                }),
                  this.components.push(i);
              }
            } else if (this.timeAxis2) {
              var o = this.components.indexOf(this.timeAxis2);
              o !== -1 && this.components.splice(o, 1),
                this.timeAxis2.destroy(),
                (this.timeAxis2 = null);
            }
            if (
              ("function" == typeof t.drawPoints &&
                (t.drawPoints = {onRender: t.drawPoints}),
              "hiddenDates" in this.options &&
                m.convertHiddenOptions(
                  this.options.moment,
                  this.body,
                  this.options.hiddenDates
                ),
              "clickToUse" in t &&
                (t.clickToUse
                  ? this.activator || (this.activator = new f(this.dom.root))
                  : this.activator &&
                    (this.activator.destroy(), delete this.activator)),
              "showCustomTime" in t)
            )
              throw new Error(
                "Option `showCustomTime` is deprecated. Create a custom time bar via timeline.addCustomTime(time [, id])"
              );
            this._initAutoResize();
          }
          if (
            (this.components.forEach(function (e) {
              return e.setOptions(t);
            }),
            "configure" in t)
          ) {
            this.configurator || (this.configurator = this._createConfigurator()),
              this.configurator.setOptions(t.configure);
            var n = p.deepExtend({}, this.options);
            this.components.forEach(function (t) {
              p.deepExtend(n, t.options);
            }),
              this.configurator.setModuleOptions({global: n});
          }
          this._redraw();
        }),
        (n.prototype.isActive = function () {
          return !this.activator || this.activator.active;
        }),
        (n.prototype.destroy = function () {
          this.setItems(null),
            this.setGroups(null),
            this.off(),
            this._stopAutoResize(),
            this.dom.root.parentNode &&
              this.dom.root.parentNode.removeChild(this.dom.root),
            (this.dom = null),
            this.activator && (this.activator.destroy(), delete this.activator);
          for (var t in this.listeners)
            this.listeners.hasOwnProperty(t) && delete this.listeners[t];
          (this.listeners = null),
            (this.hammer = null),
            this.components.forEach(function (t) {
              return t.destroy();
            }),
            (this.body = null);
        }),
        (n.prototype.setCustomTime = function (t, e) {
          var i = this.customTimes.filter(function (t) {
            return e === t.options.id;
          });
          if (0 === i.length)
            throw new Error("No custom time bar found with id " + (0, r.default)(e));
          i.length > 0 && i[0].setCustomTime(t);
        }),
        (n.prototype.getCustomTime = function (t) {
          var e = this.customTimes.filter(function (e) {
            return e.options.id === t;
          });
          if (0 === e.length)
            throw new Error("No custom time bar found with id " + (0, r.default)(t));
          return e[0].getCustomTime();
        }),
        (n.prototype.setCustomTimeTitle = function (t, e) {
          var i = this.customTimes.filter(function (t) {
            return t.options.id === e;
          });
          if (0 === i.length)
            throw new Error("No custom time bar found with id " + (0, r.default)(e));
          if (i.length > 0) return i[0].setCustomTitle(t);
        }),
        (n.prototype.getEventProperties = function (t) {
          return {event: t};
        }),
        (n.prototype.addCustomTime = function (t, e) {
          var i = void 0 !== t ? p.convert(t, "Date").valueOf() : new Date(),
            o = this.customTimes.some(function (t) {
              return t.options.id === e;
            });
          if (o)
            throw new Error(
              "A custom time with id " + (0, r.default)(e) + " already exists"
            );
          var n = new g(this.body, p.extend({}, this.options, {time: i, id: e}));
          return this.customTimes.push(n), this.components.push(n), this._redraw(), e;
        }),
        (n.prototype.removeCustomTime = function (t) {
          var e = this.customTimes.filter(function (e) {
            return e.options.id === t;
          });
          if (0 === e.length)
            throw new Error("No custom time bar found with id " + (0, r.default)(t));
          e.forEach(
            function (t) {
              this.customTimes.splice(this.customTimes.indexOf(t), 1),
                this.components.splice(this.components.indexOf(t), 1),
                t.destroy();
            }.bind(this)
          );
        }),
        (n.prototype.getVisibleItems = function () {
          return (this.itemSet && this.itemSet.getVisibleItems()) || [];
        }),
        (n.prototype.fit = function (t, e) {
          var i = this.getDataRange();
          if (null !== i.min || null !== i.max) {
            var o = i.max - i.min,
              n = new Date(i.min.valueOf() - 0.01 * o),
              s = new Date(i.max.valueOf() + 0.01 * o),
              r = !t || void 0 === t.animation || t.animation;
            this.range.setRange(n, s, {animation: r}, e);
          }
        }),
        (n.prototype.getDataRange = function () {
          throw new Error("Cannot invoke abstract method getDataRange");
        }),
        (n.prototype.setWindow = function (t, e, i, o) {
          "function" == typeof arguments[2] && ((o = arguments[2]), (i = {}));
          var n;
          if (1 == arguments.length) {
            var s = arguments[0];
            (n = void 0 === s.animation || s.animation),
              this.range.setRange(s.start, s.end, {animation: n});
          } else if (2 == arguments.length && "function" == typeof arguments[1]) {
            var s = arguments[0];
            (o = arguments[1]),
              (n = void 0 === s.animation || s.animation),
              this.range.setRange(s.start, s.end, {animation: n}, o);
          } else
            (n = !i || void 0 === i.animation || i.animation),
              this.range.setRange(t, e, {animation: n}, o);
        }),
        (n.prototype.moveTo = function (t, e, i) {
          "function" == typeof arguments[1] && ((i = arguments[1]), (e = {}));
          var o = this.range.end - this.range.start,
            n = p.convert(t, "Date").valueOf(),
            s = n - o / 2,
            r = n + o / 2,
            a = !e || void 0 === e.animation || e.animation;
          this.range.setRange(s, r, {animation: a}, i);
        }),
        (n.prototype.getWindow = function () {
          var t = this.range.getRange();
          return {start: new Date(t.start), end: new Date(t.end)};
        }),
        (n.prototype.zoomIn = function (t, e, i) {
          if (!(!t || t < 0 || t > 1)) {
            "function" == typeof arguments[1] && ((i = arguments[1]), (e = {}));
            var o = this.getWindow(),
              n = o.start.valueOf(),
              s = o.end.valueOf(),
              r = s - n,
              a = r / (1 + t),
              h = (r - a) / 2,
              d = n + h,
              l = s - h;
            this.setWindow(d, l, e, i);
          }
        }),
        (n.prototype.zoomOut = function (t, e, i) {
          if (!(!t || t < 0 || t > 1)) {
            "function" == typeof arguments[1] && ((i = arguments[1]), (e = {}));
            var o = this.getWindow(),
              n = o.start.valueOf(),
              s = o.end.valueOf(),
              r = s - n,
              a = n - (r * t) / 2,
              h = s + (r * t) / 2;
            this.setWindow(a, h, e, i);
          }
        }),
        (n.prototype.redraw = function () {
          this._redraw();
        }),
        (n.prototype._redraw = function () {
          this.redrawCount++;
          var t = !1,
            e = this.options,
            i = this.props,
            o = this.dom;
          if (o && o.container && 0 != o.root.offsetWidth) {
            m.updateHiddenDates(
              this.options.moment,
              this.body,
              this.options.hiddenDates
            ),
              "top" == e.orientation
                ? (p.addClassName(o.root, "vis-top"),
                  p.removeClassName(o.root, "vis-bottom"))
                : (p.removeClassName(o.root, "vis-top"),
                  p.addClassName(o.root, "vis-bottom")),
              (o.root.style.maxHeight = p.option.asSize(e.maxHeight, "")),
              (o.root.style.minHeight = p.option.asSize(e.minHeight, "")),
              (o.root.style.width = p.option.asSize(e.width, "")),
              (i.border.left =
                (o.centerContainer.offsetWidth - o.centerContainer.clientWidth) / 2),
              (i.border.right = i.border.left),
              (i.border.top =
                (o.centerContainer.offsetHeight - o.centerContainer.clientHeight) / 2),
              (i.border.bottom = i.border.top),
              (i.borderRootHeight = o.root.offsetHeight - o.root.clientHeight),
              (i.borderRootWidth = o.root.offsetWidth - o.root.clientWidth),
              0 === o.centerContainer.clientHeight &&
                ((i.border.left = i.border.top), (i.border.right = i.border.left)),
              0 === o.root.clientHeight && (i.borderRootWidth = i.borderRootHeight),
              (i.center.height = o.center.offsetHeight),
              (i.left.height = o.left.offsetHeight),
              (i.right.height = o.right.offsetHeight),
              (i.top.height = o.top.clientHeight || -i.border.top),
              (i.bottom.height = o.bottom.clientHeight || -i.border.bottom);
            var n = Math.max(i.left.height, i.center.height, i.right.height),
              s =
                i.top.height +
                n +
                i.bottom.height +
                i.borderRootHeight +
                i.border.top +
                i.border.bottom;
            (o.root.style.height = p.option.asSize(e.height, s + "px")),
              (i.root.height = o.root.offsetHeight),
              (i.background.height = i.root.height - i.borderRootHeight);
            var r = i.root.height - i.top.height - i.bottom.height - i.borderRootHeight;
            (i.centerContainer.height = r),
              (i.leftContainer.height = r),
              (i.rightContainer.height = i.leftContainer.height),
              (i.root.width = o.root.offsetWidth),
              (i.background.width = i.root.width - i.borderRootWidth),
              this.initialDrawDone || (i.scrollbarWidth = p.getScrollBarWidth()),
              e.verticalScroll
                ? e.rtl
                  ? ((i.left.width = o.leftContainer.clientWidth || -i.border.left),
                    (i.right.width =
                      o.rightContainer.clientWidth + i.scrollbarWidth ||
                      -i.border.right))
                  : ((i.left.width =
                      o.leftContainer.clientWidth + i.scrollbarWidth || -i.border.left),
                    (i.right.width = o.rightContainer.clientWidth || -i.border.right))
                : ((i.left.width = o.leftContainer.clientWidth || -i.border.left),
                  (i.right.width = o.rightContainer.clientWidth || -i.border.right)),
              this._setDOM();
            var a = this._updateScrollTop();
            "top" != e.orientation.item &&
              (a += Math.max(
                i.centerContainer.height -
                  i.center.height -
                  i.border.top -
                  i.border.bottom,
                0
              )),
              (o.center.style.top = a + "px");
            var h = 0 == i.scrollTop ? "hidden" : "",
              d = i.scrollTop == i.scrollTopMin ? "hidden" : "";
            (o.shadowTop.style.visibility = h),
              (o.shadowBottom.style.visibility = d),
              (o.shadowTopLeft.style.visibility = h),
              (o.shadowBottomLeft.style.visibility = d),
              (o.shadowTopRight.style.visibility = h),
              (o.shadowBottomRight.style.visibility = d),
              e.verticalScroll &&
                ((o.rightContainer.className =
                  "vis-panel vis-right vis-vertical-scroll"),
                (o.leftContainer.className = "vis-panel vis-left vis-vertical-scroll"),
                (o.shadowTopRight.style.visibility = "hidden"),
                (o.shadowBottomRight.style.visibility = "hidden"),
                (o.shadowTopLeft.style.visibility = "hidden"),
                (o.shadowBottomLeft.style.visibility = "hidden"),
                (o.left.style.top = "0px"),
                (o.right.style.top = "0px")),
              (!e.verticalScroll || i.center.height < i.centerContainer.height) &&
                ((o.left.style.top = a + "px"),
                (o.right.style.top = a + "px"),
                (o.rightContainer.className = o.rightContainer.className.replace(
                  new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)"),
                  " "
                )),
                (o.leftContainer.className = o.leftContainer.className.replace(
                  new RegExp("(?:^|\\s)vis-vertical-scroll(?:\\s|$)"),
                  " "
                )),
                (i.left.width = o.leftContainer.clientWidth || -i.border.left),
                (i.right.width = o.rightContainer.clientWidth || -i.border.right),
                this._setDOM());
            var u = i.center.height > i.centerContainer.height;
            this.hammer
              .get("pan")
              .set({direction: u ? l.DIRECTION_ALL : l.DIRECTION_HORIZONTAL}),
              this.components.forEach(function (e) {
                t = e.redraw() || t;
              });
            var c = 5;
            if (t) {
              if (this.redrawCount < c) return void this.body.emitter.emit("_change");
              console.log("WARNING: infinite loop in redraw?");
            } else this.redrawCount = 0;
            (this.initialDrawDone = !0), this.body.emitter.emit("changed");
          }
        }),
        (n.prototype._setDOM = function () {
          var t = this.props,
            e = this.dom;
          (t.leftContainer.width = t.left.width),
            (t.rightContainer.width = t.right.width);
          var i = t.root.width - t.left.width - t.right.width - t.borderRootWidth;
          (t.center.width = i),
            (t.centerContainer.width = i),
            (t.top.width = i),
            (t.bottom.width = i),
            (e.background.style.height = t.background.height + "px"),
            (e.backgroundVertical.style.height = t.background.height + "px"),
            (e.backgroundHorizontal.style.height = t.centerContainer.height + "px"),
            (e.centerContainer.style.height = t.centerContainer.height + "px"),
            (e.leftContainer.style.height = t.leftContainer.height + "px"),
            (e.rightContainer.style.height = t.rightContainer.height + "px"),
            (e.background.style.width = t.background.width + "px"),
            (e.backgroundVertical.style.width = t.centerContainer.width + "px"),
            (e.backgroundHorizontal.style.width = t.background.width + "px"),
            (e.centerContainer.style.width = t.center.width + "px"),
            (e.top.style.width = t.top.width + "px"),
            (e.bottom.style.width = t.bottom.width + "px"),
            (e.background.style.left = "0"),
            (e.background.style.top = "0"),
            (e.backgroundVertical.style.left = t.left.width + t.border.left + "px"),
            (e.backgroundVertical.style.top = "0"),
            (e.backgroundHorizontal.style.left = "0"),
            (e.backgroundHorizontal.style.top = t.top.height + "px"),
            (e.centerContainer.style.left = t.left.width + "px"),
            (e.centerContainer.style.top = t.top.height + "px"),
            (e.leftContainer.style.left = "0"),
            (e.leftContainer.style.top = t.top.height + "px"),
            (e.rightContainer.style.left = t.left.width + t.center.width + "px"),
            (e.rightContainer.style.top = t.top.height + "px"),
            (e.top.style.left = t.left.width + "px"),
            (e.top.style.top = "0"),
            (e.bottom.style.left = t.left.width + "px"),
            (e.bottom.style.top = t.top.height + t.centerContainer.height + "px"),
            (e.center.style.left = "0"),
            (e.left.style.left = "0"),
            (e.right.style.left = "0");
        }),
        (n.prototype.repaint = function () {
          throw new Error("Function repaint is deprecated. Use redraw instead.");
        }),
        (n.prototype.setCurrentTime = function (t) {
          if (!this.currentTime) throw new Error("Option showCurrentTime must be true");
          this.currentTime.setCurrentTime(t);
        }),
        (n.prototype.getCurrentTime = function () {
          if (!this.currentTime) throw new Error("Option showCurrentTime must be true");
          return this.currentTime.getCurrentTime();
        }),
        (n.prototype._toTime = function (t) {
          return m.toTime(this, t, this.props.center.width);
        }),
        (n.prototype._toGlobalTime = function (t) {
          return m.toTime(this, t, this.props.root.width);
        }),
        (n.prototype._toScreen = function (t) {
          return m.toScreen(this, t, this.props.center.width);
        }),
        (n.prototype._toGlobalScreen = function (t) {
          return m.toScreen(this, t, this.props.root.width);
        }),
        (n.prototype._initAutoResize = function () {
          1 == this.options.autoResize
            ? this._startAutoResize()
            : this._stopAutoResize();
        }),
        (n.prototype._startAutoResize = function () {
          var t = this;
          this._stopAutoResize(),
            (this._onResize = function () {
              return 1 != t.options.autoResize
                ? void t._stopAutoResize()
                : void (
                    t.dom.root &&
                    ((t.dom.root.offsetWidth == t.props.lastWidth &&
                      t.dom.root.offsetHeight == t.props.lastHeight) ||
                      ((t.props.lastWidth = t.dom.root.offsetWidth),
                      (t.props.lastHeight = t.dom.root.offsetHeight),
                      (t.props.scrollbarWidth = p.getScrollBarWidth()),
                      t.body.emitter.emit("_change")))
                  );
            }),
            p.addEventListener(window, "resize", this._onResize),
            t.dom.root &&
              ((t.props.lastWidth = t.dom.root.offsetWidth),
              (t.props.lastHeight = t.dom.root.offsetHeight)),
            (this.watchTimer = setInterval(this._onResize, 1e3));
        }),
        (n.prototype._stopAutoResize = function () {
          this.watchTimer &&
            (clearInterval(this.watchTimer), (this.watchTimer = void 0)),
            this._onResize &&
              (p.removeEventListener(window, "resize", this._onResize),
              (this._onResize = null));
        }),
        (n.prototype._onTouch = function (t) {
          (this.touch.allowDragging = !0),
            (this.touch.initialScrollTop = this.props.scrollTop);
        }),
        (n.prototype._onPinch = function (t) {
          this.touch.allowDragging = !1;
        }),
        (n.prototype._onDrag = function (t) {
          if (t && this.touch.allowDragging) {
            var e = t.deltaY,
              i = this._getScrollTop(),
              o = this._setScrollTop(this.touch.initialScrollTop + e);
            this.options.verticalScroll &&
              ((this.dom.left.parentNode.scrollTop = -this.props.scrollTop),
              (this.dom.right.parentNode.scrollTop = -this.props.scrollTop)),
              o != i && this.emit("verticalDrag");
          }
        }),
        (n.prototype._setScrollTop = function (t) {
          return (
            (this.props.scrollTop = t), this._updateScrollTop(), this.props.scrollTop
          );
        }),
        (n.prototype._updateScrollTop = function () {
          var t = Math.min(
            this.props.centerContainer.height - this.props.center.height,
            0
          );
          return (
            t != this.props.scrollTopMin &&
              ("top" != this.options.orientation.item &&
                (this.props.scrollTop += t - this.props.scrollTopMin),
              (this.props.scrollTopMin = t)),
            this.props.scrollTop > 0 && (this.props.scrollTop = 0),
            this.props.scrollTop < t && (this.props.scrollTop = t),
            this.options.verticalScroll &&
              ((this.dom.left.parentNode.scrollTop = -this.props.scrollTop),
              (this.dom.right.parentNode.scrollTop = -this.props.scrollTop)),
            this.props.scrollTop
          );
        }),
        (n.prototype._getScrollTop = function () {
          return this.props.scrollTop;
        }),
        (n.prototype._createConfigurator = function () {
          throw new Error("Cannot invoke abstract method _createConfigurator");
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e) {
        (this.body = t),
          (this.defaultOptions = {
            type: null,
            orientation: {item: "bottom"},
            align: "auto",
            stack: !0,
            stackSubgroups: !0,
            groupOrderSwap: function (t, e, i) {
              var o = e.order;
              (e.order = t.order), (t.order = o);
            },
            groupOrder: "order",
            selectable: !0,
            multiselect: !1,
            itemsAlwaysDraggable: {item: !1, range: !1},
            editable: {
              updateTime: !1,
              updateGroup: !1,
              add: !1,
              remove: !1,
              overrideItems: !1,
            },
            groupEditable: {order: !1, add: !1, remove: !1},
            snap: c.snap,
            onAdd: function (t, e) {
              e(t);
            },
            onUpdate: function (t, e) {
              e(t);
            },
            onMove: function (t, e) {
              e(t);
            },
            onRemove: function (t, e) {
              e(t);
            },
            onMoving: function (t, e) {
              e(t);
            },
            onAddGroup: function (t, e) {
              e(t);
            },
            onMoveGroup: function (t, e) {
              e(t);
            },
            onRemoveGroup: function (t, e) {
              e(t);
            },
            margin: {item: {horizontal: 10, vertical: 10}, axis: 20},
            showTooltips: !0,
            tooltip: {followMouse: !1, overflowMethod: "flip"},
            tooltipOnItemUpdateTime: !1,
          }),
          (this.options = l.extend({}, this.defaultOptions)),
          (this.options.rtl = e.rtl),
          (this.itemOptions = {type: {start: "Date", end: "Date"}}),
          (this.conversion = {toScreen: t.util.toScreen, toTime: t.util.toTime}),
          (this.dom = {}),
          (this.props = {}),
          (this.hammer = null);
        var i = this;
        (this.itemsData = null),
          (this.groupsData = null),
          (this.itemListeners = {
            add: function (t, e, o) {
              i._onAdd(e.items);
            },
            update: function (t, e, o) {
              i._onUpdate(e.items);
            },
            remove: function (t, e, o) {
              i._onRemove(e.items);
            },
          }),
          (this.groupListeners = {
            add: function (t, e, o) {
              i._onAddGroups(e.items);
            },
            update: function (t, e, o) {
              i._onUpdateGroups(e.items);
            },
            remove: function (t, e, o) {
              i._onRemoveGroups(e.items);
            },
          }),
          (this.items = {}),
          (this.groups = {}),
          (this.groupIds = []),
          (this.selection = []),
          (this.popup = null),
          (this.touchParams = {}),
          (this.groupTouchParams = {}),
          this._create(),
          this.setOptions(e);
      }
      var s = i(55),
        r = o(s),
        a = i(62),
        h = o(a),
        d = i(95),
        l = i(1),
        u = i(88),
        p = i(92),
        c = i(104),
        f = i(100),
        m = i(105),
        g = i(109),
        v = i(110),
        y = i(111),
        b = i(107),
        _ = i(112),
        w = i(113).default,
        x = "__ungrouped__",
        D = "__background__";
      (n.prototype = new f()),
        (n.types = {background: _, box: v, range: b, point: y}),
        (n.prototype._create = function () {
          var t = document.createElement("div");
          (t.className = "vis-itemset"),
            (t["timeline-itemset"] = this),
            (this.dom.frame = t);
          var e = document.createElement("div");
          (e.className = "vis-background"), t.appendChild(e), (this.dom.background = e);
          var i = document.createElement("div");
          (i.className = "vis-foreground"), t.appendChild(i), (this.dom.foreground = i);
          var o = document.createElement("div");
          (o.className = "vis-axis"), (this.dom.axis = o);
          var n = document.createElement("div");
          (n.className = "vis-labelset"),
            (this.dom.labelSet = n),
            this._updateUngrouped();
          var s = new g(D, null, this);
          s.show(),
            (this.groups[D] = s),
            (this.hammer = new d(this.body.dom.centerContainer)),
            this.hammer.on(
              "hammer.input",
              function (t) {
                t.isFirst && this._onTouch(t);
              }.bind(this)
            ),
            this.hammer.on("panstart", this._onDragStart.bind(this)),
            this.hammer.on("panmove", this._onDrag.bind(this)),
            this.hammer.on("panend", this._onDragEnd.bind(this)),
            this.hammer
              .get("pan")
              .set({threshold: 5, direction: d.DIRECTION_HORIZONTAL}),
            this.hammer.on("tap", this._onSelectItem.bind(this)),
            this.hammer.on("press", this._onMultiSelectItem.bind(this)),
            this.hammer.on("doubletap", this._onAddItem.bind(this)),
            this.options.rtl
              ? (this.groupHammer = new d(this.body.dom.rightContainer))
              : (this.groupHammer = new d(this.body.dom.leftContainer)),
            this.groupHammer.on("tap", this._onGroupClick.bind(this)),
            this.groupHammer.on("panstart", this._onGroupDragStart.bind(this)),
            this.groupHammer.on("panmove", this._onGroupDrag.bind(this)),
            this.groupHammer.on("panend", this._onGroupDragEnd.bind(this)),
            this.groupHammer
              .get("pan")
              .set({threshold: 5, direction: d.DIRECTION_VERTICAL}),
            this.body.dom.centerContainer.addEventListener(
              "mouseover",
              this._onMouseOver.bind(this)
            ),
            this.body.dom.centerContainer.addEventListener(
              "mouseout",
              this._onMouseOut.bind(this)
            ),
            this.body.dom.centerContainer.addEventListener(
              "mousemove",
              this._onMouseMove.bind(this)
            ),
            this.body.dom.centerContainer.addEventListener(
              "contextmenu",
              this._onDragEnd.bind(this)
            ),
            this.body.dom.centerContainer.addEventListener(
              "mousewheel",
              this._onMouseWheel.bind(this)
            ),
            this.show();
        }),
        (n.prototype.setOptions = function (t) {
          if (t) {
            var e = [
              "type",
              "rtl",
              "align",
              "order",
              "stack",
              "stackSubgroups",
              "selectable",
              "multiselect",
              "multiselectPerGroup",
              "groupOrder",
              "dataAttributes",
              "template",
              "groupTemplate",
              "visibleFrameTemplate",
              "hide",
              "snap",
              "groupOrderSwap",
              "showTooltips",
              "tooltip",
              "tooltipOnItemUpdateTime",
            ];
            l.selectiveExtend(e, this.options, t),
              "itemsAlwaysDraggable" in t &&
                ("boolean" == typeof t.itemsAlwaysDraggable
                  ? ((this.options.itemsAlwaysDraggable.item = t.itemsAlwaysDraggable),
                    (this.options.itemsAlwaysDraggable.range = !1))
                  : "object" === (0, h.default)(t.itemsAlwaysDraggable) &&
                    (l.selectiveExtend(
                      ["item", "range"],
                      this.options.itemsAlwaysDraggable,
                      t.itemsAlwaysDraggable
                    ),
                    this.options.itemsAlwaysDraggable.item ||
                      (this.options.itemsAlwaysDraggable.range = !1))),
              "orientation" in t &&
                ("string" == typeof t.orientation
                  ? (this.options.orientation.item =
                      "top" === t.orientation ? "top" : "bottom")
                  : "object" === (0, h.default)(t.orientation) &&
                    "item" in t.orientation &&
                    (this.options.orientation.item = t.orientation.item)),
              "margin" in t &&
                ("number" == typeof t.margin
                  ? ((this.options.margin.axis = t.margin),
                    (this.options.margin.item.horizontal = t.margin),
                    (this.options.margin.item.vertical = t.margin))
                  : "object" === (0, h.default)(t.margin) &&
                    (l.selectiveExtend(["axis"], this.options.margin, t.margin),
                    "item" in t.margin &&
                      ("number" == typeof t.margin.item
                        ? ((this.options.margin.item.horizontal = t.margin.item),
                          (this.options.margin.item.vertical = t.margin.item))
                        : "object" === (0, h.default)(t.margin.item) &&
                          l.selectiveExtend(
                            ["horizontal", "vertical"],
                            this.options.margin.item,
                            t.margin.item
                          )))),
              "editable" in t &&
                ("boolean" == typeof t.editable
                  ? ((this.options.editable.updateTime = t.editable),
                    (this.options.editable.updateGroup = t.editable),
                    (this.options.editable.add = t.editable),
                    (this.options.editable.remove = t.editable),
                    (this.options.editable.overrideItems = !1))
                  : "object" === (0, h.default)(t.editable) &&
                    l.selectiveExtend(
                      ["updateTime", "updateGroup", "add", "remove", "overrideItems"],
                      this.options.editable,
                      t.editable
                    )),
              "groupEditable" in t &&
                ("boolean" == typeof t.groupEditable
                  ? ((this.options.groupEditable.order = t.groupEditable),
                    (this.options.groupEditable.add = t.groupEditable),
                    (this.options.groupEditable.remove = t.groupEditable))
                  : "object" === (0, h.default)(t.groupEditable) &&
                    l.selectiveExtend(
                      ["order", "add", "remove"],
                      this.options.groupEditable,
                      t.groupEditable
                    ));
            var i = function (e) {
              var i = t[e];
              if (i) {
                if (!(i instanceof Function))
                  throw new Error(
                    "option " + e + " must be a function " + e + "(item, callback)"
                  );
                this.options[e] = i;
              }
            }.bind(this);
            [
              "onAdd",
              "onUpdate",
              "onRemove",
              "onMove",
              "onMoving",
              "onAddGroup",
              "onMoveGroup",
              "onRemoveGroup",
            ].forEach(i),
              this.markDirty();
          }
        }),
        (n.prototype.markDirty = function (t) {
          (this.groupIds = []),
            t &&
              t.refreshItems &&
              l.forEach(this.items, function (t) {
                (t.dirty = !0), t.displayed && t.redraw();
              });
        }),
        (n.prototype.destroy = function () {
          this.hide(),
            this.setItems(null),
            this.setGroups(null),
            (this.hammer = null),
            (this.body = null),
            (this.conversion = null);
        }),
        (n.prototype.hide = function () {
          this.dom.frame.parentNode &&
            this.dom.frame.parentNode.removeChild(this.dom.frame),
            this.dom.axis.parentNode &&
              this.dom.axis.parentNode.removeChild(this.dom.axis),
            this.dom.labelSet.parentNode &&
              this.dom.labelSet.parentNode.removeChild(this.dom.labelSet);
        }),
        (n.prototype.show = function () {
          this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame),
            this.dom.axis.parentNode ||
              this.body.dom.backgroundVertical.appendChild(this.dom.axis),
            this.dom.labelSet.parentNode ||
              (this.options.rtl
                ? this.body.dom.right.appendChild(this.dom.labelSet)
                : this.body.dom.left.appendChild(this.dom.labelSet));
        }),
        (n.prototype.setSelection = function (t) {
          var e, i, o, n;
          for (
            void 0 == t && (t = []),
              Array.isArray(t) || (t = [t]),
              e = 0,
              i = this.selection.length;
            e < i;
            e++
          )
            (o = this.selection[e]), (n = this.items[o]), n && n.unselect();
          for (this.selection = [], e = 0, i = t.length; e < i; e++)
            (o = t[e]), (n = this.items[o]), n && (this.selection.push(o), n.select());
        }),
        (n.prototype.getSelection = function () {
          return this.selection.concat([]);
        }),
        (n.prototype.getVisibleItems = function () {
          var t = this.body.range.getRange();
          if (this.options.rtl)
            var e = this.body.util.toScreen(t.start),
              i = this.body.util.toScreen(t.end);
          else
            var i = this.body.util.toScreen(t.start),
              e = this.body.util.toScreen(t.end);
          var o = [];
          for (var n in this.groups)
            if (this.groups.hasOwnProperty(n))
              for (
                var s = this.groups[n], r = s.isVisible ? s.visibleItems : [], a = 0;
                a < r.length;
                a++
              ) {
                var h = r[a];
                this.options.rtl
                  ? h.right < i && h.right + h.width > e && o.push(h.id)
                  : h.left < e && h.left + h.width > i && o.push(h.id);
              }
          return o;
        }),
        (n.prototype._deselect = function (t) {
          for (var e = this.selection, i = 0, o = e.length; i < o; i++)
            if (e[i] == t) {
              e.splice(i, 1);
              break;
            }
        }),
        (n.prototype.redraw = function () {
          var t = this.options.margin,
            e = this.body.range,
            i = l.option.asSize,
            o = this.options,
            n = o.orientation.item,
            s = !1,
            r = this.dom.frame;
          (this.props.top =
            this.body.domProps.top.height + this.body.domProps.border.top),
            this.options.rtl
              ? (this.props.right =
                  this.body.domProps.right.width + this.body.domProps.border.right)
              : (this.props.left =
                  this.body.domProps.left.width + this.body.domProps.border.left),
            (r.className = "vis-itemset"),
            (s = this._orderGroups() || s);
          var a = e.end - e.start,
            h =
              a != this.lastVisibleInterval || this.props.width != this.props.lastWidth,
            d = e.start != this.lastRangeStart,
            u = o.stack != this.lastStack,
            p = o.stackSubgroups != this.lastStackSubgroups,
            c = h || d || u || p;
          (this.lastVisibleInterval = a),
            (this.lastRangeStart = e.start),
            (this.lastStack = o.stack),
            (this.lastStackSubgroups = o.stackSubgroups),
            (this.props.lastWidth = this.props.width);
          var f = this._firstGroup(),
            m = {item: t.item, axis: t.axis},
            g = {item: t.item, axis: t.item.vertical / 2},
            v = 0,
            y = t.axis + t.item.vertical;
          return (
            this.groups[D].redraw(e, g, c),
            l.forEach(this.groups, function (t) {
              var i = t == f ? m : g,
                o = t.redraw(e, i, c);
              (s = o || s), (v += t.height);
            }),
            (v = Math.max(v, y)),
            (r.style.height = i(v)),
            (this.props.width = r.offsetWidth),
            (this.props.height = v),
            (this.dom.axis.style.top = i(
              "top" == n
                ? this.body.domProps.top.height + this.body.domProps.border.top
                : this.body.domProps.top.height +
                    this.body.domProps.centerContainer.height
            )),
            this.options.rtl
              ? (this.dom.axis.style.right = "0")
              : (this.dom.axis.style.left = "0"),
            (this.initialItemSetDrawn = !0),
            (s = this._isResized() || s)
          );
        }),
        (n.prototype._firstGroup = function () {
          var t = "top" == this.options.orientation.item ? 0 : this.groupIds.length - 1,
            e = this.groupIds[t],
            i = this.groups[e] || this.groups[x];
          return i || null;
        }),
        (n.prototype._updateUngrouped = function () {
          var t,
            e,
            i = this.groups[x];
          this.groups[D];
          if (this.groupsData) {
            if (i) {
              i.hide(), delete this.groups[x];
              for (e in this.items)
                if (this.items.hasOwnProperty(e)) {
                  (t = this.items[e]), t.parent && t.parent.remove(t);
                  var o = this._getGroupId(t.data),
                    n = this.groups[o];
                  (n && n.add(t)) || t.hide();
                }
            }
          } else if (!i) {
            var s = null,
              r = null;
            (i = new m(s, r, this)), (this.groups[x] = i);
            for (e in this.items)
              this.items.hasOwnProperty(e) && ((t = this.items[e]), i.add(t));
            i.show();
          }
        }),
        (n.prototype.getLabelSet = function () {
          return this.dom.labelSet;
        }),
        (n.prototype.setItems = function (t) {
          var e,
            i = this,
            o = this.itemsData;
          if (t) {
            if (!(t instanceof u || t instanceof p))
              throw new TypeError("Data must be an instance of DataSet or DataView");
            this.itemsData = t;
          } else this.itemsData = null;
          if (
            (o &&
              (l.forEach(this.itemListeners, function (t, e) {
                o.off(e, t);
              }),
              (e = o.getIds()),
              this._onRemove(e)),
            this.itemsData)
          ) {
            var n = this.id;
            l.forEach(this.itemListeners, function (t, e) {
              i.itemsData.on(e, t, n);
            }),
              (e = this.itemsData.getIds()),
              this._onAdd(e),
              this._updateUngrouped();
          }
          this.body.emitter.emit("_change", {queue: !0});
        }),
        (n.prototype.getItems = function () {
          return this.itemsData;
        }),
        (n.prototype.setGroups = function (t) {
          var e,
            i = this;
          if (
            (this.groupsData &&
              (l.forEach(this.groupListeners, function (t, e) {
                i.groupsData.off(e, t);
              }),
              (e = this.groupsData.getIds()),
              (this.groupsData = null),
              this._onRemoveGroups(e)),
            t)
          ) {
            if (!(t instanceof u || t instanceof p))
              throw new TypeError("Data must be an instance of DataSet or DataView");
            this.groupsData = t;
          } else this.groupsData = null;
          if (this.groupsData) {
            var o = this.groupsData;
            this.groupsData instanceof p && (o = this.groupsData.getDataSet()),
              o.get().forEach(function (t) {
                t.nestedGroups &&
                  t.nestedGroups.forEach(function (e) {
                    var i = o.get(e);
                    (i.nestedInGroup = t.id),
                      0 == t.showNested && (i.visible = !1),
                      o.update(i);
                  });
              });
            var n = this.id;
            l.forEach(this.groupListeners, function (t, e) {
              i.groupsData.on(e, t, n);
            }),
              (e = this.groupsData.getIds()),
              this._onAddGroups(e);
          }
          this._updateUngrouped(),
            this._order(),
            this.body.emitter.emit("_change", {queue: !0});
        }),
        (n.prototype.getGroups = function () {
          return this.groupsData;
        }),
        (n.prototype.removeItem = function (t) {
          var e = this.itemsData.get(t),
            i = this.itemsData.getDataSet();
          this.items[t];
          e &&
            this.options.onRemove(e, function (e) {
              e && i.remove(t);
            });
        }),
        (n.prototype._getType = function (t) {
          return t.type || this.options.type || (t.end ? "range" : "box");
        }),
        (n.prototype._getGroupId = function (t) {
          var e = this._getType(t);
          return "background" == e && void 0 == t.group
            ? D
            : this.groupsData
            ? t.group
            : x;
        }),
        (n.prototype._onUpdate = function (t) {
          var e = this;
          t.forEach(
            function (t) {
              var i,
                o = e.itemsData.get(t, e.itemOptions),
                s = e.items[t],
                r = o ? e._getType(o) : null,
                a = n.types[r];
              if (
                (s &&
                  (a && s instanceof a
                    ? e._updateItem(s, o)
                    : ((i = s.selected), e._removeItem(s), (s = null))),
                !s && o)
              ) {
                if (!a)
                  throw "rangeoverflow" == r
                    ? new TypeError(
                        'Item type "rangeoverflow" is deprecated. Use css styling instead: .vis-item.vis-range .vis-item-content {overflow: visible;}'
                      )
                    : new TypeError('Unknown item type "' + r + '"');
                (s = new a(o, e.conversion, e.options)),
                  (s.id = t),
                  e._addItem(s),
                  i && (this.selection.push(t), s.select());
              }
            }.bind(this)
          ),
            this._order(),
            this.body.emitter.emit("_change", {queue: !0});
        }),
        (n.prototype._onAdd = n.prototype._onUpdate),
        (n.prototype._onRemove = function (t) {
          var e = 0,
            i = this;
          t.forEach(function (t) {
            var o = i.items[t];
            o && (e++, i._removeItem(o));
          }),
            e && (this._order(), this.body.emitter.emit("_change", {queue: !0}));
        }),
        (n.prototype._order = function () {
          l.forEach(this.groups, function (t) {
            t.order();
          });
        }),
        (n.prototype._onUpdateGroups = function (t) {
          this._onAddGroups(t);
        }),
        (n.prototype._onAddGroups = function (t) {
          var e = this;
          t.forEach(function (t) {
            var i = e.groupsData.get(t),
              o = e.groups[t];
            if (o) o.setData(i);
            else {
              if (t == x || t == D)
                throw new Error("Illegal group id. " + t + " is a reserved id.");
              var n = (0, r.default)(e.options);
              l.extend(n, {height: null}), (o = new m(t, i, e)), (e.groups[t] = o);
              for (var s in e.items)
                if (e.items.hasOwnProperty(s)) {
                  var a = e.items[s];
                  a.data.group == t && o.add(a);
                }
              o.order(), o.show();
            }
          }),
            this.body.emitter.emit("_change", {queue: !0});
        }),
        (n.prototype._onRemoveGroups = function (t) {
          var e = this.groups;
          t.forEach(function (t) {
            var i = e[t];
            i && (i.hide(), delete e[t]);
          }),
            this.markDirty(),
            this.body.emitter.emit("_change", {queue: !0});
        }),
        (n.prototype._orderGroups = function () {
          if (this.groupsData) {
            var t = this.groupsData.getIds({order: this.options.groupOrder});
            t = this._orderNestedGroups(t);
            var e = !l.equalArray(t, this.groupIds);
            if (e) {
              var i = this.groups;
              t.forEach(function (t) {
                i[t].hide();
              }),
                t.forEach(function (t) {
                  i[t].show();
                }),
                (this.groupIds = t);
            }
            return e;
          }
          return !1;
        }),
        (n.prototype._orderNestedGroups = function (t) {
          var e = [];
          return (
            t.forEach(function (t) {
              var i = this.groupsData.get(t);
              if ((i.nestedInGroup || e.push(t), i.nestedGroups)) {
                var o = this.groupsData.get({
                    filter: function (e) {
                      return e.nestedInGroup == t;
                    },
                    order: this.options.groupOrder,
                  }),
                  n = o.map(function (t) {
                    return t.id;
                  });
                e = e.concat(n);
              }
            }, this),
            e
          );
        }),
        (n.prototype._addItem = function (t) {
          this.items[t.id] = t;
          var e = this._getGroupId(t.data),
            i = this.groups[e];
          i
            ? i && i.data && i.data.showNested && (t.groupShowing = !0)
            : (t.groupShowing = !1),
            i && i.add(t);
        }),
        (n.prototype._updateItem = function (t, e) {
          t.setData(e);
          var i = this._getGroupId(t.data),
            o = this.groups[i];
          o
            ? o && o.data && o.data.showNested && (t.groupShowing = !0)
            : (t.groupShowing = !1);
        }),
        (n.prototype._removeItem = function (t) {
          t.hide(), delete this.items[t.id];
          var e = this.selection.indexOf(t.id);
          e != -1 && this.selection.splice(e, 1), t.parent && t.parent.remove(t);
        }),
        (n.prototype._constructByEndArray = function (t) {
          for (var e = [], i = 0; i < t.length; i++) t[i] instanceof b && e.push(t[i]);
          return e;
        }),
        (n.prototype._onTouch = function (t) {
          (this.touchParams.item = this.itemFromTarget(t)),
            (this.touchParams.dragLeftItem = t.target.dragLeftItem || !1),
            (this.touchParams.dragRightItem = t.target.dragRightItem || !1),
            (this.touchParams.itemProps = null);
        }),
        (n.prototype._getGroupIndex = function (t) {
          for (var e = 0; e < this.groupIds.length; e++)
            if (t == this.groupIds[e]) return e;
        }),
        (n.prototype._onDragStart = function (t) {
          if (!this.touchParams.itemIsDragging) {
            var e,
              i = this.touchParams.item || null,
              o = this;
            if (i && (i.selected || this.options.itemsAlwaysDraggable.item)) {
              if (
                this.options.editable.overrideItems &&
                !this.options.editable.updateTime &&
                !this.options.editable.updateGroup
              )
                return;
              if (
                null != i.editable &&
                !i.editable.updateTime &&
                !i.editable.updateGroup &&
                !this.options.editable.overrideItems
              )
                return;
              var n = this.touchParams.dragLeftItem,
                s = this.touchParams.dragRightItem;
              if (
                ((this.touchParams.itemIsDragging = !0),
                (this.touchParams.selectedItem = i),
                n)
              )
                (e = {
                  item: n,
                  initialX: t.center.x,
                  dragLeft: !0,
                  data: this._cloneItemData(i.data),
                }),
                  (this.touchParams.itemProps = [e]);
              else if (s)
                (e = {
                  item: s,
                  initialX: t.center.x,
                  dragRight: !0,
                  data: this._cloneItemData(i.data),
                }),
                  (this.touchParams.itemProps = [e]);
              else {
                this.groupIds.length < 1 && this.redraw();
                var r = this._getGroupIndex(i.data.group),
                  a =
                    this.options.itemsAlwaysDraggable.item && !i.selected
                      ? [i.id]
                      : this.getSelection();
                this.touchParams.itemProps = a.map(
                  function (e) {
                    var i = o.items[e],
                      n = o._getGroupIndex(i.data.group);
                    return {
                      item: i,
                      initialX: t.center.x,
                      groupOffset: r - n,
                      data: this._cloneItemData(i.data),
                    };
                  }.bind(this)
                );
              }
              t.stopPropagation();
            } else
              this.options.editable.add &&
                (t.srcEvent.ctrlKey || t.srcEvent.metaKey) &&
                this._onDragStartAddItem(t);
          }
        }),
        (n.prototype._onDragStartAddItem = function (t) {
          var e = this.options.snap || null;
          if (this.options.rtl)
            var i = l.getAbsoluteRight(this.dom.frame),
              o = i - t.center.x + 10;
          else
            var i = l.getAbsoluteLeft(this.dom.frame),
              o = t.center.x - i - 10;
          var n = this.body.util.toTime(o),
            s = this.body.util.getScale(),
            r = this.body.util.getStep(),
            a = e ? e(n, s, r) : n,
            h = a,
            d = {type: "range", start: a, end: h, content: "new item"},
            u = l.randomUUID();
          d[this.itemsData._fieldId] = u;
          var p = this.groupFromTarget(t);
          p && (d.group = p.groupId);
          var c = new b(d, this.conversion, this.options);
          (c.id = u),
            (c.data = this._cloneItemData(d)),
            this._addItem(c),
            (this.touchParams.selectedItem = c);
          var f = {item: c, initialX: t.center.x, data: c.data};
          this.options.rtl ? (f.dragLeft = !0) : (f.dragRight = !0),
            (this.touchParams.itemProps = [f]),
            t.stopPropagation();
        }),
        (n.prototype._onDrag = function (t) {
          if (this.touchParams.itemProps) {
            t.stopPropagation();
            var e = this,
              i = this.options.snap || null;
            if (this.options.rtl)
              var o = this.body.dom.root.offsetLeft + this.body.domProps.right.width;
            else var o = this.body.dom.root.offsetLeft + this.body.domProps.left.width;
            var n = this.body.util.getScale(),
              s = this.body.util.getStep(),
              r = this.touchParams.selectedItem,
              a =
                ((this.options.editable.overrideItems || null == r.editable) &&
                  this.options.editable.updateGroup) ||
                (!this.options.editable.overrideItems &&
                  null != r.editable &&
                  r.editable.updateGroup),
              h = null;
            if (a && r && void 0 != r.data.group) {
              var d = e.groupFromTarget(t);
              d && (h = this._getGroupIndex(d.groupId));
            }
            this.touchParams.itemProps.forEach(
              function (d) {
                var u = e.body.util.toTime(t.center.x - o),
                  p = e.body.util.toTime(d.initialX - o);
                if (this.options.rtl) var c = -(u - p);
                else var c = u - p;
                var f = this._cloneItemData(d.item.data);
                if (
                  null == d.item.editable ||
                  d.item.editable.updateTime ||
                  d.item.editable.updateGroup ||
                  e.options.editable.overrideItems
                ) {
                  var m =
                    ((this.options.editable.overrideItems || null == r.editable) &&
                      this.options.editable.updateTime) ||
                    (!this.options.editable.overrideItems &&
                      null != r.editable &&
                      r.editable.updateTime);
                  if (m)
                    if (d.dragLeft) {
                      if (this.options.rtl) {
                        if (void 0 != f.end) {
                          var g = l.convert(d.data.end, "Date"),
                            v = new Date(g.valueOf() + c);
                          f.end = i ? i(v, n, s) : v;
                        }
                      } else if (void 0 != f.start) {
                        var y = l.convert(d.data.start, "Date"),
                          b = new Date(y.valueOf() + c);
                        f.start = i ? i(b, n, s) : b;
                      }
                    } else if (d.dragRight) {
                      if (this.options.rtl) {
                        if (void 0 != f.start) {
                          var y = l.convert(d.data.start, "Date"),
                            b = new Date(y.valueOf() + c);
                          f.start = i ? i(b, n, s) : b;
                        }
                      } else if (void 0 != f.end) {
                        var g = l.convert(d.data.end, "Date"),
                          v = new Date(g.valueOf() + c);
                        f.end = i ? i(v, n, s) : v;
                      }
                    } else if (void 0 != f.start) {
                      var y = l.convert(d.data.start, "Date").valueOf(),
                        b = new Date(y + c);
                      if (void 0 != f.end) {
                        var g = l.convert(d.data.end, "Date"),
                          _ = g.valueOf() - y.valueOf();
                        (f.start = i ? i(b, n, s) : b),
                          (f.end = new Date(f.start.valueOf() + _));
                      } else f.start = i ? i(b, n, s) : b;
                    }
                  if (
                    a &&
                    !d.dragLeft &&
                    !d.dragRight &&
                    null != h &&
                    void 0 != f.group
                  ) {
                    var w = h - d.groupOffset;
                    (w = Math.max(0, w)),
                      (w = Math.min(e.groupIds.length - 1, w)),
                      (f.group = e.groupIds[w]);
                  }
                  (f = this._cloneItemData(f)),
                    e.options.onMoving(
                      f,
                      function (t) {
                        t && d.item.setData(this._cloneItemData(t, "Date"));
                      }.bind(this)
                    );
                }
              }.bind(this)
            ),
              this.body.emitter.emit("_change");
          }
        }),
        (n.prototype._moveToGroup = function (t, e) {
          var i = this.groups[e];
          if (i && i.groupId != t.data.group) {
            var o = t.parent;
            o.remove(t), o.order(), (t.data.group = i.groupId), i.add(t), i.order();
          }
        }),
        (n.prototype._onDragEnd = function (t) {
          if (((this.touchParams.itemIsDragging = !1), this.touchParams.itemProps)) {
            t.stopPropagation();
            var e = this,
              i = this.itemsData.getDataSet(),
              o = this.touchParams.itemProps;
            (this.touchParams.itemProps = null),
              o.forEach(
                function (t) {
                  var o = t.item.id,
                    n = null != e.itemsData.get(o, e.itemOptions);
                  if (n) {
                    var s = this._cloneItemData(t.item.data);
                    e.options.onMove(s, function (n) {
                      n
                        ? ((n[i._fieldId] = o), i.update(n))
                        : (t.item.setData(t.data), e.body.emitter.emit("_change"));
                    });
                  } else
                    e.options.onAdd(t.item.data, function (i) {
                      e._removeItem(t.item),
                        i && e.itemsData.getDataSet().add(i),
                        e.body.emitter.emit("_change");
                    });
                }.bind(this)
              );
          }
        }),
        (n.prototype._onGroupClick = function (t) {
          var e = this.groupFromTarget(t);
          if (e && e.nestedGroups) {
            var i = this.groupsData;
            this.groupsData instanceof p && (i = this.groupsData.getDataSet()),
              (e.showNested = !e.showNested);
            var o = i.get(e.nestedGroups).map(function (t) {
              return (
                void 0 == t.visible && (t.visible = !0), (t.visible = !!e.showNested), t
              );
            });
            if ((i.update(o), e.showNested))
              l.removeClassName(e.dom.label, "collapsed"),
                l.addClassName(e.dom.label, "expanded");
            else {
              l.removeClassName(e.dom.label, "expanded");
              var n = this.options.rtl ? "collapsed-rtl" : "collapsed";
              l.addClassName(e.dom.label, n);
            }
          }
        }),
        (n.prototype._onGroupDragStart = function (t) {
          this.options.groupEditable.order &&
            ((this.groupTouchParams.group = this.groupFromTarget(t)),
            this.groupTouchParams.group &&
              (t.stopPropagation(),
              (this.groupTouchParams.originalOrder = this.groupsData.getIds({
                order: this.options.groupOrder,
              }))));
        }),
        (n.prototype._onGroupDrag = function (t) {
          if (this.options.groupEditable.order && this.groupTouchParams.group) {
            t.stopPropagation();
            var e = this.groupsData;
            this.groupsData instanceof p && (e = this.groupsData.getDataSet());
            var i = this.groupFromTarget(t);
            if (i && i.height != this.groupTouchParams.group.height) {
              var o = i.top < this.groupTouchParams.group.top,
                n = t.center ? t.center.y : t.clientY,
                s = l.getAbsoluteTop(i.dom.foreground),
                r = this.groupTouchParams.group.height;
              if (o) {
                if (s + r < n) return;
              } else {
                var a = i.height;
                if (s + a - r > n) return;
              }
            }
            if (i && i != this.groupTouchParams.group) {
              var h = e.get(i.groupId),
                d = e.get(this.groupTouchParams.group.groupId);
              d &&
                h &&
                (this.options.groupOrderSwap(d, h, e), e.update(d), e.update(h));
              var u = e.getIds({order: this.options.groupOrder});
              if (!l.equalArray(u, this.groupTouchParams.originalOrder))
                for (
                  var c = this.groupTouchParams.originalOrder,
                    f = this.groupTouchParams.group.groupId,
                    m = Math.min(c.length, u.length),
                    g = 0,
                    v = 0,
                    y = 0;
                  g < m;

                ) {
                  for (; g + v < m && g + y < m && u[g + v] == c[g + y]; ) g++;
                  if (g + v >= m) break;
                  if (u[g + v] != f)
                    if (c[g + y] != f) {
                      var b = u.indexOf(c[g + y]),
                        _ = e.get(u[g + v]),
                        w = e.get(c[g + y]);
                      this.options.groupOrderSwap(_, w, e), e.update(_), e.update(w);
                      var x = u[g + v];
                      (u[g + v] = c[g + y]), (u[b] = x), g++;
                    } else y = 1;
                  else v = 1;
                }
            }
          }
        }),
        (n.prototype._onGroupDragEnd = function (t) {
          if (this.options.groupEditable.order && this.groupTouchParams.group) {
            t.stopPropagation();
            var e = this,
              i = e.groupTouchParams.group.groupId,
              o = e.groupsData.getDataSet(),
              n = l.extend({}, o.get(i));
            e.options.onMoveGroup(n, function (t) {
              if (t) (t[o._fieldId] = i), o.update(t);
              else {
                var n = o.getIds({order: e.options.groupOrder});
                if (!l.equalArray(n, e.groupTouchParams.originalOrder))
                  for (
                    var s = e.groupTouchParams.originalOrder,
                      r = Math.min(s.length, n.length),
                      a = 0;
                    a < r;

                  ) {
                    for (; a < r && n[a] == s[a]; ) a++;
                    if (a >= r) break;
                    var h = n.indexOf(s[a]),
                      d = o.get(n[a]),
                      u = o.get(s[a]);
                    e.options.groupOrderSwap(d, u, o), o.update(d), o.update(u);
                    var p = n[a];
                    (n[a] = s[a]), (n[h] = p), a++;
                  }
              }
            }),
              e.body.emitter.emit("groupDragged", {groupId: i});
          }
        }),
        (n.prototype._onSelectItem = function (t) {
          if (this.options.selectable) {
            var e = t.srcEvent && (t.srcEvent.ctrlKey || t.srcEvent.metaKey),
              i = t.srcEvent && t.srcEvent.shiftKey;
            if (e || i) return void this._onMultiSelectItem(t);
            var o = this.getSelection(),
              n = this.itemFromTarget(t),
              s = n ? [n.id] : [];
            this.setSelection(s);
            var r = this.getSelection();
            (r.length > 0 || o.length > 0) &&
              this.body.emitter.emit("select", {items: r, event: t});
          }
        }),
        (n.prototype._onMouseOver = function (t) {
          var e = this.itemFromTarget(t);
          if (e) {
            var i = this.itemFromRelatedTarget(t);
            if (e !== i) {
              var o = e.getTitle();
              if (this.options.showTooltips && o) {
                null == this.popup &&
                  (this.popup = new w(
                    this.body.dom.root,
                    this.options.tooltip.overflowMethod || "flip"
                  )),
                  this.popup.setText(o);
                var n = this.body.dom.centerContainer;
                this.popup.setPosition(
                  t.clientX - l.getAbsoluteLeft(n) + n.offsetLeft,
                  t.clientY - l.getAbsoluteTop(n) + n.offsetTop
                ),
                  this.popup.show();
              } else null != this.popup && this.popup.hide();
              this.body.emitter.emit("itemover", {item: e.id, event: t});
            }
          }
        }),
        (n.prototype._onMouseOut = function (t) {
          var e = this.itemFromTarget(t);
          if (e) {
            var i = this.itemFromRelatedTarget(t);
            e !== i &&
              (null != this.popup && this.popup.hide(),
              this.body.emitter.emit("itemout", {item: e.id, event: t}));
          }
        }),
        (n.prototype._onMouseMove = function (t) {
          var e = this.itemFromTarget(t);
          if (
            e &&
            this.options.showTooltips &&
            this.options.tooltip.followMouse &&
            this.popup &&
            !this.popup.hidden
          ) {
            var i = this.body.dom.centerContainer;
            this.popup.setPosition(
              t.clientX - l.getAbsoluteLeft(i) + i.offsetLeft,
              t.clientY - l.getAbsoluteTop(i) + i.offsetTop
            ),
              this.popup.show();
          }
        }),
        (n.prototype._onMouseWheel = function (t) {
          this.touchParams.itemIsDragging && this._onDragEnd(t);
        }),
        (n.prototype._onUpdateItem = function (t) {
          if (this.options.selectable && this.options.editable.add) {
            var e = this;
            if (t) {
              var i = e.itemsData.get(t.id);
              this.options.onUpdate(i, function (t) {
                t && e.itemsData.getDataSet().update(t);
              });
            }
          }
        }),
        (n.prototype._onAddItem = function (t) {
          if (this.options.selectable && this.options.editable.add) {
            var e = this,
              i = this.options.snap || null,
              o = this.itemFromTarget(t);
            if (!o) {
              if (this.options.rtl)
                var n = l.getAbsoluteRight(this.dom.frame),
                  s = n - t.center.x;
              else
                var n = l.getAbsoluteLeft(this.dom.frame),
                  s = t.center.x - n;
              var r,
                a = this.body.util.toTime(s),
                h = this.body.util.getScale(),
                d = this.body.util.getStep();
              if ("drop" == t.type) {
                if (
                  ((r = JSON.parse(t.dataTransfer.getData("text"))),
                  (r.content = r.content ? r.content : "new item"),
                  (r.start = r.start ? r.start : i ? i(a, h, d) : a),
                  (r.type = r.type || "box"),
                  (r[this.itemsData._fieldId] = r.id || l.randomUUID()),
                  "range" == r.type && !r.end)
                ) {
                  var u = this.body.util.toTime(s + this.props.width / 5);
                  r.end = i ? i(u, h, d) : u;
                }
              } else if (
                ((r = {start: i ? i(a, h, d) : a, content: "new item"}),
                (r[this.itemsData._fieldId] = l.randomUUID()),
                "range" === this.options.type)
              ) {
                var u = this.body.util.toTime(s + this.props.width / 5);
                r.end = i ? i(u, h, d) : u;
              }
              var p = this.groupFromTarget(t);
              p && (r.group = p.groupId),
                (r = this._cloneItemData(r)),
                this.options.onAdd(r, function (i) {
                  i &&
                    (e.itemsData.getDataSet().add(i),
                    "drop" == t.type && e.setSelection([i.id]));
                });
            }
          }
        }),
        (n.prototype._onMultiSelectItem = function (t) {
          if (this.options.selectable) {
            var e = this.itemFromTarget(t);
            if (e) {
              var i = this.options.multiselect ? this.getSelection() : [],
                o = (t.srcEvent && t.srcEvent.shiftKey) || !1;
              if (o && this.options.multiselect) {
                var s = this.itemsData.get(e.id).group,
                  r = void 0;
                this.options.multiselectPerGroup &&
                  i.length > 0 &&
                  (r = this.itemsData.get(i[0]).group),
                  (this.options.multiselectPerGroup && void 0 != r && r != s) ||
                    i.push(e.id);
                var a = n._getItemRange(this.itemsData.get(i, this.itemOptions));
                if (!this.options.multiselectPerGroup || r == s) {
                  i = [];
                  for (var h in this.items)
                    if (this.items.hasOwnProperty(h)) {
                      var d = this.items[h],
                        l = d.data.start,
                        u = void 0 !== d.data.end ? d.data.end : l;
                      !(l >= a.min && u <= a.max) ||
                        (this.options.multiselectPerGroup &&
                          r != this.itemsData.get(d.id).group) ||
                        d instanceof _ ||
                        i.push(d.id);
                    }
                }
              } else {
                var p = i.indexOf(e.id);
                p == -1 ? i.push(e.id) : i.splice(p, 1);
              }
              this.setSelection(i),
                this.body.emitter.emit("select", {
                  items: this.getSelection(),
                  event: t,
                });
            }
          }
        }),
        (n._getItemRange = function (t) {
          var e = null,
            i = null;
          return (
            t.forEach(function (t) {
              (null == i || t.start < i) && (i = t.start),
                void 0 != t.end
                  ? (null == e || t.end > e) && (e = t.end)
                  : (null == e || t.start > e) && (e = t.start);
            }),
            {min: i, max: e}
          );
        }),
        (n.prototype.itemFromElement = function (t) {
          for (var e = t; e; ) {
            if (e.hasOwnProperty("timeline-item")) return e["timeline-item"];
            e = e.parentNode;
          }
          return null;
        }),
        (n.prototype.itemFromTarget = function (t) {
          return this.itemFromElement(t.target);
        }),
        (n.prototype.itemFromRelatedTarget = function (t) {
          return this.itemFromElement(t.relatedTarget);
        }),
        (n.prototype.groupFromTarget = function (t) {
          var e = t.center ? t.center.y : t.clientY,
            i = this.groupIds;
          i.length <= 0 &&
            this.groupsData &&
            (i = this.groupsData.getIds({order: this.options.groupOrder}));
          for (var o = 0; o < i.length; o++) {
            var n = i[o],
              s = this.groups[n],
              r = s.dom.foreground,
              a = l.getAbsoluteTop(r);
            if (e > a && e < a + r.offsetHeight) return s;
            if ("top" === this.options.orientation.item) {
              if (o === this.groupIds.length - 1 && e > a) return s;
            } else if (0 === o && e < a + r.offset) return s;
          }
          return null;
        }),
        (n.itemSetFromTarget = function (t) {
          for (var e = t.target; e; ) {
            if (e.hasOwnProperty("timeline-itemset")) return e["timeline-itemset"];
            e = e.parentNode;
          }
          return null;
        }),
        (n.prototype._cloneItemData = function (t, e) {
          var i = l.extend({}, t);
          return (
            e || (e = this.itemsData.getDataSet()._options.type),
            void 0 != i.start &&
              (i.start = l.convert(i.start, (e && e.start) || "Date")),
            void 0 != i.end && (i.end = l.convert(i.end, (e && e.end) || "Date")),
            i
          );
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      function o(t, e, i, s) {
        (this.moment = n),
          (this.current = this.moment()),
          (this._start = this.moment()),
          (this._end = this.moment()),
          (this.autoScale = !0),
          (this.scale = "day"),
          (this.step = 1),
          this.setRange(t, e, i),
          (this.switchedDay = !1),
          (this.switchedMonth = !1),
          (this.switchedYear = !1),
          Array.isArray(s)
            ? (this.hiddenDates = s)
            : void 0 != s
            ? (this.hiddenDates = [s])
            : (this.hiddenDates = []),
          (this.format = o.FORMAT);
      }
      var n = i(82),
        s = i(101),
        r = i(1);
      (o.FORMAT = {
        minorLabels: {
          millisecond: "SSS",
          second: "s",
          minute: "HH:mm",
          hour: "HH:mm",
          weekday: "ddd D",
          day: "D",
          week: "w",
          month: "MMM",
          year: "YYYY",
        },
        majorLabels: {
          millisecond: "HH:mm:ss",
          second: "D MMMM HH:mm",
          minute: "ddd D MMMM",
          hour: "ddd D MMMM",
          weekday: "MMMM YYYY",
          day: "MMMM YYYY",
          week: "MMMM YYYY",
          month: "YYYY",
          year: "",
        },
      }),
        (o.prototype.setMoment = function (t) {
          (this.moment = t),
            (this.current = this.moment(this.current.valueOf())),
            (this._start = this.moment(this._start.valueOf())),
            (this._end = this.moment(this._end.valueOf()));
        }),
        (o.prototype.setFormat = function (t) {
          var e = r.deepExtend({}, o.FORMAT);
          this.format = r.deepExtend(e, t);
        }),
        (o.prototype.setRange = function (t, e, i) {
          if (!(t instanceof Date && e instanceof Date))
            throw "No legal start or end date in method setRange";
          (this._start = void 0 != t ? this.moment(t.valueOf()) : new Date()),
            (this._end = void 0 != e ? this.moment(e.valueOf()) : new Date()),
            this.autoScale && this.setMinimumStep(i);
        }),
        (o.prototype.start = function () {
          (this.current = this._start.clone()), this.roundToMinor();
        }),
        (o.prototype.roundToMinor = function () {
          switch (("week" == this.scale && this.current.weekday(0), this.scale)) {
            case "year":
              this.current.year(
                this.step * Math.floor(this.current.year() / this.step)
              ),
                this.current.month(0);
            case "month":
              this.current.date(1);
            case "week":
            case "day":
            case "weekday":
              this.current.hours(0);
            case "hour":
              this.current.minutes(0);
            case "minute":
              this.current.seconds(0);
            case "second":
              this.current.milliseconds(0);
          }
          if (1 != this.step)
            switch (this.scale) {
              case "millisecond":
                this.current.subtract(
                  this.current.milliseconds() % this.step,
                  "milliseconds"
                );
                break;
              case "second":
                this.current.subtract(this.current.seconds() % this.step, "seconds");
                break;
              case "minute":
                this.current.subtract(this.current.minutes() % this.step, "minutes");
                break;
              case "hour":
                this.current.subtract(this.current.hours() % this.step, "hours");
                break;
              case "weekday":
              case "day":
                this.current.subtract((this.current.date() - 1) % this.step, "day");
                break;
              case "week":
                this.current.subtract(this.current.week() % this.step, "week");
                break;
              case "month":
                this.current.subtract(this.current.month() % this.step, "month");
                break;
              case "year":
                this.current.subtract(this.current.year() % this.step, "year");
            }
        }),
        (o.prototype.hasNext = function () {
          return this.current.valueOf() <= this._end.valueOf();
        }),
        (o.prototype.next = function () {
          var t = this.current.valueOf();
          switch (this.scale) {
            case "millisecond":
              this.current.add(this.step, "millisecond");
              break;
            case "second":
              this.current.add(this.step, "second");
              break;
            case "minute":
              this.current.add(this.step, "minute");
              break;
            case "hour":
              this.current.add(this.step, "hour"),
                this.current.month() < 6
                  ? this.current.subtract(this.current.hours() % this.step, "hour")
                  : this.current.hours() % this.step !== 0 &&
                    this.current.add(
                      this.step - (this.current.hours() % this.step),
                      "hour"
                    );
              break;
            case "weekday":
            case "day":
              this.current.add(this.step, "day");
              break;
            case "week":
              if (0 !== this.current.weekday())
                this.current.weekday(0), this.current.add(this.step, "week");
              else {
                var e = this.current.clone();
                e.add(1, "week"),
                  e.isSame(this.current, "month")
                    ? this.current.add(this.step, "week")
                    : (this.current.add(this.step, "week"), this.current.date(1));
              }
              break;
            case "month":
              this.current.add(this.step, "month");
              break;
            case "year":
              this.current.add(this.step, "year");
          }
          if (1 != this.step)
            switch (this.scale) {
              case "millisecond":
                this.current.milliseconds() > 0 &&
                  this.current.milliseconds() < this.step &&
                  this.current.milliseconds(0);
                break;
              case "second":
                this.current.seconds() > 0 &&
                  this.current.seconds() < this.step &&
                  this.current.seconds(0);
                break;
              case "minute":
                this.current.minutes() > 0 &&
                  this.current.minutes() < this.step &&
                  this.current.minutes(0);
                break;
              case "hour":
                this.current.hours() > 0 &&
                  this.current.hours() < this.step &&
                  this.current.hours(0);
                break;
              case "weekday":
              case "day":
                this.current.date() < this.step + 1 && this.current.date(1);
                break;
              case "week":
                this.current.week() < this.step && this.current.week(1);
                break;
              case "month":
                this.current.month() < this.step && this.current.month(0);
                break;
              case "year":
            }
          this.current.valueOf() == t && (this.current = this._end.clone()),
            (this.switchedDay = !1),
            (this.switchedMonth = !1),
            (this.switchedYear = !1),
            s.stepOverHiddenDates(this.moment, this, t);
        }),
        (o.prototype.getCurrent = function () {
          return this.current;
        }),
        (o.prototype.setScale = function (t) {
          t &&
            "string" == typeof t.scale &&
            ((this.scale = t.scale),
            (this.step = t.step > 0 ? t.step : 1),
            (this.autoScale = !1));
        }),
        (o.prototype.setAutoScale = function (t) {
          this.autoScale = t;
        }),
        (o.prototype.setMinimumStep = function (t) {
          if (void 0 != t) {
            var e = 31104e6,
              i = 2592e6,
              o = 864e5,
              n = 36e5,
              s = 6e4,
              r = 1e3,
              a = 1;
            1e3 * e > t && ((this.scale = "year"), (this.step = 1e3)),
              500 * e > t && ((this.scale = "year"), (this.step = 500)),
              100 * e > t && ((this.scale = "year"), (this.step = 100)),
              50 * e > t && ((this.scale = "year"), (this.step = 50)),
              10 * e > t && ((this.scale = "year"), (this.step = 10)),
              5 * e > t && ((this.scale = "year"), (this.step = 5)),
              e > t && ((this.scale = "year"), (this.step = 1)),
              3 * i > t && ((this.scale = "month"), (this.step = 3)),
              i > t && ((this.scale = "month"), (this.step = 1)),
              5 * o > t && ((this.scale = "day"), (this.step = 5)),
              2 * o > t && ((this.scale = "day"), (this.step = 2)),
              o > t && ((this.scale = "day"), (this.step = 1)),
              o / 2 > t && ((this.scale = "weekday"), (this.step = 1)),
              4 * n > t && ((this.scale = "hour"), (this.step = 4)),
              n > t && ((this.scale = "hour"), (this.step = 1)),
              15 * s > t && ((this.scale = "minute"), (this.step = 15)),
              10 * s > t && ((this.scale = "minute"), (this.step = 10)),
              5 * s > t && ((this.scale = "minute"), (this.step = 5)),
              s > t && ((this.scale = "minute"), (this.step = 1)),
              15 * r > t && ((this.scale = "second"), (this.step = 15)),
              10 * r > t && ((this.scale = "second"), (this.step = 10)),
              5 * r > t && ((this.scale = "second"), (this.step = 5)),
              r > t && ((this.scale = "second"), (this.step = 1)),
              200 * a > t && ((this.scale = "millisecond"), (this.step = 200)),
              100 * a > t && ((this.scale = "millisecond"), (this.step = 100)),
              50 * a > t && ((this.scale = "millisecond"), (this.step = 50)),
              10 * a > t && ((this.scale = "millisecond"), (this.step = 10)),
              5 * a > t && ((this.scale = "millisecond"), (this.step = 5)),
              a > t && ((this.scale = "millisecond"), (this.step = 1));
          }
        }),
        (o.snap = function (t, e, i) {
          var o = n(t);
          if ("year" == e) {
            var s = o.year() + Math.round(o.month() / 12);
            o.year(Math.round(s / i) * i),
              o.month(0),
              o.date(0),
              o.hours(0),
              o.minutes(0),
              o.seconds(0),
              o.milliseconds(0);
          } else if ("month" == e)
            o.date() > 15 ? (o.date(1), o.add(1, "month")) : o.date(1),
              o.hours(0),
              o.minutes(0),
              o.seconds(0),
              o.milliseconds(0);
          else if ("week" == e)
            o.weekday() > 2 ? (o.weekday(0), o.add(1, "week")) : o.weekday(0),
              o.hours(0),
              o.minutes(0),
              o.seconds(0),
              o.milliseconds(0);
          else if ("day" == e) {
            switch (i) {
              case 5:
              case 2:
                o.hours(24 * Math.round(o.hours() / 24));
                break;
              default:
                o.hours(12 * Math.round(o.hours() / 12));
            }
            o.minutes(0), o.seconds(0), o.milliseconds(0);
          } else if ("weekday" == e) {
            switch (i) {
              case 5:
              case 2:
                o.hours(12 * Math.round(o.hours() / 12));
                break;
              default:
                o.hours(6 * Math.round(o.hours() / 6));
            }
            o.minutes(0), o.seconds(0), o.milliseconds(0);
          } else if ("hour" == e) {
            switch (i) {
              case 4:
                o.minutes(60 * Math.round(o.minutes() / 60));
                break;
              default:
                o.minutes(30 * Math.round(o.minutes() / 30));
            }
            o.seconds(0), o.milliseconds(0);
          } else if ("minute" == e) {
            switch (i) {
              case 15:
              case 10:
                o.minutes(5 * Math.round(o.minutes() / 5)), o.seconds(0);
                break;
              case 5:
                o.seconds(60 * Math.round(o.seconds() / 60));
                break;
              default:
                o.seconds(30 * Math.round(o.seconds() / 30));
            }
            o.milliseconds(0);
          } else if ("second" == e)
            switch (i) {
              case 15:
              case 10:
                o.seconds(5 * Math.round(o.seconds() / 5)), o.milliseconds(0);
                break;
              case 5:
                o.milliseconds(1e3 * Math.round(o.milliseconds() / 1e3));
                break;
              default:
                o.milliseconds(500 * Math.round(o.milliseconds() / 500));
            }
          else if ("millisecond" == e) {
            var r = i > 5 ? i / 2 : 1;
            o.milliseconds(Math.round(o.milliseconds() / r) * r);
          }
          return o;
        }),
        (o.prototype.isMajor = function () {
          if (1 == this.switchedYear)
            switch (this.scale) {
              case "year":
              case "month":
              case "week":
              case "weekday":
              case "day":
              case "hour":
              case "minute":
              case "second":
              case "millisecond":
                return !0;
              default:
                return !1;
            }
          else if (1 == this.switchedMonth)
            switch (this.scale) {
              case "week":
              case "weekday":
              case "day":
              case "hour":
              case "minute":
              case "second":
              case "millisecond":
                return !0;
              default:
                return !1;
            }
          else if (1 == this.switchedDay)
            switch (this.scale) {
              case "millisecond":
              case "second":
              case "minute":
              case "hour":
                return !0;
              default:
                return !1;
            }
          var t = this.moment(this.current);
          switch (this.scale) {
            case "millisecond":
              return 0 == t.milliseconds();
            case "second":
              return 0 == t.seconds();
            case "minute":
              return 0 == t.hours() && 0 == t.minutes();
            case "hour":
              return 0 == t.hours();
            case "weekday":
            case "day":
              return 1 == t.date();
            case "week":
              return 1 == t.date();
            case "month":
              return 0 == t.month();
            case "year":
              return !1;
            default:
              return !1;
          }
        }),
        (o.prototype.getLabelMinor = function (t) {
          if (
            (void 0 == t && (t = this.current),
            t instanceof Date && (t = this.moment(t)),
            "function" == typeof this.format.minorLabels)
          )
            return this.format.minorLabels(t, this.scale, this.step);
          var e = this.format.minorLabels[this.scale];
          switch (this.scale) {
            case "week":
              if (this.isMajor() && 0 !== t.weekday()) return "";
            default:
              return e && e.length > 0 ? this.moment(t).format(e) : "";
          }
        }),
        (o.prototype.getLabelMajor = function (t) {
          if (
            (void 0 == t && (t = this.current),
            t instanceof Date && (t = this.moment(t)),
            "function" == typeof this.format.majorLabels)
          )
            return this.format.majorLabels(t, this.scale, this.step);
          var e = this.format.majorLabels[this.scale];
          return e && e.length > 0 ? this.moment(t).format(e) : "";
        }),
        (o.prototype.getClassName = function () {
          function t(t) {
            return (t / h) % 2 == 0 ? " vis-even" : " vis-odd";
          }
          function e(t) {
            return t.isSame(new Date(), "day")
              ? " vis-today"
              : t.isSame(s().add(1, "day"), "day")
              ? " vis-tomorrow"
              : t.isSame(s().add(-1, "day"), "day")
              ? " vis-yesterday"
              : "";
          }
          function i(t) {
            return t.isSame(new Date(), "week") ? " vis-current-week" : "";
          }
          function o(t) {
            return t.isSame(new Date(), "month") ? " vis-current-month" : "";
          }
          function n(t) {
            return t.isSame(new Date(), "year") ? " vis-current-year" : "";
          }
          var s = this.moment,
            r = this.moment(this.current),
            a = r.locale ? r.locale("en") : r.lang("en"),
            h = this.step,
            d = [];
          switch (this.scale) {
            case "millisecond":
              d.push(e(a)), d.push(t(a.milliseconds()));
              break;
            case "second":
              d.push(e(a)), d.push(t(a.seconds()));
              break;
            case "minute":
              d.push(e(a)), d.push(t(a.minutes()));
              break;
            case "hour":
              d.push(
                "vis-h" + a.hours() + this.step == 4 ? "-h" + (a.hours() + 4) : ""
              ),
                d.push(e(a)),
                d.push(t(a.hours()));
              break;
            case "weekday":
              d.push("vis-" + a.format("dddd").toLowerCase()),
                d.push(e(a)),
                d.push(i(a)),
                d.push(t(a.date()));
              break;
            case "day":
              d.push("vis-day" + a.date()),
                d.push("vis-" + a.format("MMMM").toLowerCase()),
                d.push(e(a)),
                d.push(o(a)),
                d.push(this.step <= 2 ? e(a) : ""),
                d.push(this.step <= 2 ? "vis-" + a.format("dddd").toLowerCase() : ""),
                d.push(t(a.date() - 1));
              break;
            case "week":
              d.push("vis-week" + a.format("w")), d.push(i(a)), d.push(t(a.week()));
              break;
            case "month":
              d.push("vis-" + a.format("MMMM").toLowerCase()),
                d.push(o(a)),
                d.push(t(a.month()));
              break;
            case "year":
              d.push("vis-year" + a.year()), d.push(n(a)), d.push(t(a.year()));
          }
          return d.filter(String).join(" ");
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e, i) {
        (this.groupId = t),
          (this.subgroups = {}),
          (this.subgroupIndex = 0),
          (this.subgroupOrderer = e && e.subgroupOrder),
          (this.itemSet = i),
          (this.isVisible = null),
          (this.stackDirty = !0),
          e &&
            e.nestedGroups &&
            ((this.nestedGroups = e.nestedGroups),
            0 == e.showNested ? (this.showNested = !1) : (this.showNested = !0)),
          (this.nestedInGroup = null),
          (this.dom = {}),
          (this.props = {label: {width: 0, height: 0}}),
          (this.className = null),
          (this.items = {}),
          (this.visibleItems = []),
          (this.itemsInRange = []),
          (this.orderedItems = {byStart: [], byEnd: []}),
          (this.checkRangedItems = !1);
        var o = this;
        this.itemSet.body.emitter.on("checkRangedItems", function () {
          o.checkRangedItems = !0;
        }),
          this._create(),
          this.setData(e);
      }
      var s = i(58),
        r = o(s),
        a = i(1),
        h = i(106);
      i(107);
      (n.prototype._create = function () {
        var t = document.createElement("div");
        this.itemSet.options.groupEditable.order
          ? (t.className = "vis-label draggable")
          : (t.className = "vis-label"),
          (this.dom.label = t);
        var e = document.createElement("div");
        (e.className = "vis-inner"), t.appendChild(e), (this.dom.inner = e);
        var i = document.createElement("div");
        (i.className = "vis-group"),
          (i["timeline-group"] = this),
          (this.dom.foreground = i),
          (this.dom.background = document.createElement("div")),
          (this.dom.background.className = "vis-group"),
          (this.dom.axis = document.createElement("div")),
          (this.dom.axis.className = "vis-group"),
          (this.dom.marker = document.createElement("div")),
          (this.dom.marker.style.visibility = "hidden"),
          (this.dom.marker.style.position = "absolute"),
          (this.dom.marker.innerHTML = ""),
          this.dom.background.appendChild(this.dom.marker);
      }),
        (n.prototype.setData = function (t) {
          var e, i;
          if (
            (this.itemSet.options && this.itemSet.options.groupTemplate
              ? ((i = this.itemSet.options.groupTemplate.bind(this)),
                (e = i(t, this.dom.inner)))
              : (e = t && t.content),
            e instanceof Element)
          ) {
            for (this.dom.inner.appendChild(e); this.dom.inner.firstChild; )
              this.dom.inner.removeChild(this.dom.inner.firstChild);
            this.dom.inner.appendChild(e);
          } else
            e instanceof Object
              ? i(t, this.dom.inner)
              : void 0 !== e && null !== e
              ? (this.dom.inner.innerHTML = e)
              : (this.dom.inner.innerHTML = this.groupId || "");
          if (
            ((this.dom.label.title = (t && t.title) || ""),
            this.dom.inner.firstChild
              ? a.removeClassName(this.dom.inner, "vis-hidden")
              : a.addClassName(this.dom.inner, "vis-hidden"),
            t && t.nestedGroups)
          ) {
            (this.nestedGroups && this.nestedGroups == t.nestedGroups) ||
              (this.nestedGroups = t.nestedGroups),
              (void 0 === t.showNested && void 0 !== this.showNested) ||
                (0 == t.showNested ? (this.showNested = !1) : (this.showNested = !0)),
              a.addClassName(this.dom.label, "vis-nesting-group");
            var o = this.itemSet.options.rtl ? "collapsed-rtl" : "collapsed";
            this.showNested
              ? (a.removeClassName(this.dom.label, o),
                a.addClassName(this.dom.label, "expanded"))
              : (a.removeClassName(this.dom.label, "expanded"),
                a.addClassName(this.dom.label, o));
          } else if (this.nestedGroups) {
            this.nestedGroups = null;
            var o = this.itemSet.options.rtl ? "collapsed-rtl" : "collapsed";
            a.removeClassName(this.dom.label, o),
              a.removeClassName(this.dom.label, "expanded"),
              a.removeClassName(this.dom.label, "vis-nesting-group");
          }
          t &&
            t.nestedInGroup &&
            (a.addClassName(this.dom.label, "vis-nested-group"),
            this.itemSet.options && this.itemSet.options.rtl
              ? (this.dom.inner.style.paddingRight = "30px")
              : (this.dom.inner.style.paddingLeft = "30px"));
          var n = (t && t.className) || null;
          n != this.className &&
            (this.className &&
              (a.removeClassName(this.dom.label, this.className),
              a.removeClassName(this.dom.foreground, this.className),
              a.removeClassName(this.dom.background, this.className),
              a.removeClassName(this.dom.axis, this.className)),
            a.addClassName(this.dom.label, n),
            a.addClassName(this.dom.foreground, n),
            a.addClassName(this.dom.background, n),
            a.addClassName(this.dom.axis, n),
            (this.className = n)),
            this.style &&
              (a.removeCssText(this.dom.label, this.style), (this.style = null)),
            t &&
              t.style &&
              (a.addCssText(this.dom.label, t.style), (this.style = t.style));
        }),
        (n.prototype.getLabelWidth = function () {
          return this.props.label.width;
        }),
        (n.prototype.redraw = function (t, e, i) {
          var o = !1,
            n = this.dom.marker.clientHeight;
          n != this.lastMarkerHeight &&
            ((this.lastMarkerHeight = n),
            a.forEach(this.items, function (t) {
              (t.dirty = !0), t.displayed && t.redraw();
            }),
            (i = !0)),
            this._calculateSubGroupHeights(e);
          var s = this.dom.foreground;
          (this.top = s.offsetTop),
            (this.right = s.offsetLeft),
            (this.width = s.offsetWidth);
          var r = this.isVisible;
          this.isVisible = this._isGroupVisible(t, e);
          var d = i || this.stackDirty || (this.isVisible && !r);
          if ((this._updateSubgroupsSizes(), d)) {
            if ("function" == typeof this.itemSet.options.order) {
              var l = this,
                u = !1;
              a.forEach(this.items, function (t) {
                t.displayed || (t.redraw(), l.visibleItems.push(t)), t.repositionX(u);
              });
              var p = this.orderedItems.byStart.slice().sort(function (t, e) {
                return l.itemSet.options.order(t.data, e.data);
              });
              h.stack(p, e, !0),
                (this.visibleItems = this._updateItemsInRange(
                  this.orderedItems,
                  this.visibleItems,
                  t
                ));
            } else
              (this.visibleItems = this._updateItemsInRange(
                this.orderedItems,
                this.visibleItems,
                t
              )),
                this.itemSet.options.stack
                  ? h.stack(this.visibleItems, e, !0)
                  : h.nostack(
                      this.visibleItems,
                      e,
                      this.subgroups,
                      this.itemSet.options.stackSubgroups
                    );
            this.stackDirty = !1;
          }
          var c = this._calculateHeight(e),
            s = this.dom.foreground;
          (this.top = s.offsetTop),
            (this.right = s.offsetLeft),
            (this.width = s.offsetWidth),
            (o = a.updateProperty(this, "height", c) || o),
            (o =
              a.updateProperty(this.props.label, "width", this.dom.inner.clientWidth) ||
              o),
            (o =
              a.updateProperty(
                this.props.label,
                "height",
                this.dom.inner.clientHeight
              ) || o),
            (this.dom.background.style.height = c + "px"),
            (this.dom.foreground.style.height = c + "px"),
            (this.dom.label.style.height = c + "px");
          for (var f = 0, m = this.visibleItems.length; f < m; f++) {
            var g = this.visibleItems[f];
            g.repositionY(e),
              this.isVisible ||
                "__background__" == this.groupId ||
                (g.displayed && g.hide());
          }
          return !this.isVisible && this.height ? (o = !1) : o;
        }),
        (n.prototype._calculateSubGroupHeights = function (t) {
          if ((0, r.default)(this.subgroups).length > 0) {
            var e = this;
            this.resetSubgroups(),
              a.forEach(this.visibleItems, function (i) {
                void 0 !== i.data.subgroup &&
                  ((e.subgroups[i.data.subgroup].height = Math.max(
                    e.subgroups[i.data.subgroup].height,
                    i.height + t.item.vertical
                  )),
                  (e.subgroups[i.data.subgroup].visible = !0));
              });
          }
        }),
        (n.prototype._isGroupVisible = function (t, e) {
          var i =
            this.top <=
              t.body.domProps.centerContainer.height -
                t.body.domProps.scrollTop +
                e.axis && this.top + this.height + e.axis >= -t.body.domProps.scrollTop;
          return i;
        }),
        (n.prototype._calculateHeight = function (t) {
          var e,
            i = this.visibleItems;
          if (i.length > 0) {
            var o = i[0].top,
              n = i[0].top + i[0].height;
            if (
              (a.forEach(i, function (t) {
                (o = Math.min(o, t.top)), (n = Math.max(n, t.top + t.height));
              }),
              o > t.axis)
            ) {
              var s = o - t.axis;
              (n -= s),
                a.forEach(i, function (t) {
                  t.top -= s;
                });
            }
            e = n + t.item.vertical / 2;
          } else e = 0;
          return (e = Math.max(e, this.props.label.height));
        }),
        (n.prototype.show = function () {
          this.dom.label.parentNode ||
            this.itemSet.dom.labelSet.appendChild(this.dom.label),
            this.dom.foreground.parentNode ||
              this.itemSet.dom.foreground.appendChild(this.dom.foreground),
            this.dom.background.parentNode ||
              this.itemSet.dom.background.appendChild(this.dom.background),
            this.dom.axis.parentNode ||
              this.itemSet.dom.axis.appendChild(this.dom.axis);
        }),
        (n.prototype.hide = function () {
          var t = this.dom.label;
          t.parentNode && t.parentNode.removeChild(t);
          var e = this.dom.foreground;
          e.parentNode && e.parentNode.removeChild(e);
          var i = this.dom.background;
          i.parentNode && i.parentNode.removeChild(i);
          var o = this.dom.axis;
          o.parentNode && o.parentNode.removeChild(o);
        }),
        (n.prototype.add = function (t) {
          if (
            ((this.items[t.id] = t),
            t.setParent(this),
            (this.stackDirty = !0),
            void 0 !== t.data.subgroup &&
              (this._addToSubgroup(t), this.orderSubgroups()),
            this.visibleItems.indexOf(t) == -1)
          ) {
            var e = this.itemSet.body.range;
            this._checkIfVisible(t, this.visibleItems, e);
          }
        }),
        (n.prototype._addToSubgroup = function (t, e) {
          (e = e || t.data.subgroup),
            void 0 != e &&
              void 0 === this.subgroups[e] &&
              ((this.subgroups[e] = {
                height: 0,
                top: 0,
                start: t.data.start,
                end: t.data.end,
                visible: !1,
                index: this.subgroupIndex,
                items: [],
              }),
              this.subgroupIndex++),
            new Date(t.data.start) < new Date(this.subgroups[e].start) &&
              (this.subgroups[e].start = t.data.start),
            new Date(t.data.end) > new Date(this.subgroups[e].end) &&
              (this.subgroups[e].end = t.data.end),
            this.subgroups[e].items.push(t);
        }),
        (n.prototype._updateSubgroupsSizes = function () {
          var t = this;
          if (t.subgroups)
            for (var e in t.subgroups) {
              var i = t.subgroups[e].items[0].data.start,
                o = t.subgroups[e].items[0].data.end - 1;
              t.subgroups[e].items.forEach(function (t) {
                new Date(t.data.start) < new Date(i) && (i = t.data.start),
                  new Date(t.data.end) > new Date(o) && (o = t.data.end);
              }),
                (t.subgroups[e].start = i),
                (t.subgroups[e].end = new Date(o - 1));
            }
        }),
        (n.prototype.orderSubgroups = function () {
          if (void 0 !== this.subgroupOrderer) {
            var t = [];
            if ("string" == typeof this.subgroupOrderer) {
              for (var e in this.subgroups)
                t.push({
                  subgroup: e,
                  sortField: this.subgroups[e].items[0].data[this.subgroupOrderer],
                });
              t.sort(function (t, e) {
                return t.sortField - e.sortField;
              });
            } else if ("function" == typeof this.subgroupOrderer) {
              for (var e in this.subgroups) t.push(this.subgroups[e].items[0].data);
              t.sort(this.subgroupOrderer);
            }
            if (t.length > 0)
              for (var i = 0; i < t.length; i++)
                this.subgroups[t[i].subgroup].index = i;
          }
        }),
        (n.prototype.resetSubgroups = function () {
          for (var t in this.subgroups)
            this.subgroups.hasOwnProperty(t) &&
              ((this.subgroups[t].visible = !1), (this.subgroups[t].height = 0));
        }),
        (n.prototype.remove = function (t) {
          delete this.items[t.id], t.setParent(null), (this.stackDirty = !0);
          var e = this.visibleItems.indexOf(t);
          e != -1 && this.visibleItems.splice(e, 1),
            void 0 !== t.data.subgroup &&
              (this._removeFromSubgroup(t), this.orderSubgroups());
        }),
        (n.prototype._removeFromSubgroup = function (t, e) {
          if (((e = e || t.data.subgroup), void 0 != e)) {
            var i = this.subgroups[e];
            if (i) {
              var o = i.items.indexOf(t);
              o >= 0 &&
                (i.items.splice(o, 1),
                i.items.length
                  ? this._updateSubgroupsSizes()
                  : delete this.subgroups[e]);
            }
          }
        }),
        (n.prototype.removeFromDataSet = function (t) {
          this.itemSet.removeItem(t.id);
        }),
        (n.prototype.order = function () {
          for (var t = a.toArray(this.items), e = [], i = [], o = 0; o < t.length; o++)
            void 0 !== t[o].data.end && i.push(t[o]), e.push(t[o]);
          (this.orderedItems = {byStart: e, byEnd: i}),
            h.orderByStart(this.orderedItems.byStart),
            h.orderByEnd(this.orderedItems.byEnd);
        }),
        (n.prototype._updateItemsInRange = function (t, e, i) {
          var o = [],
            n = {},
            s = (i.end - i.start) / 4,
            r = i.start - s,
            h = i.end + s,
            d = function (t) {
              return t < r ? -1 : t <= h ? 0 : 1;
            };
          if (e.length > 0)
            for (var l = 0; l < e.length; l++)
              this._checkIfVisibleWithReference(e[l], o, n, i);
          var u = a.binarySearchCustom(t.byStart, d, "data", "start");
          if (
            (this._traceVisible(u, t.byStart, o, n, function (t) {
              return t.data.start < r || t.data.start > h;
            }),
            1 == this.checkRangedItems)
          )
            for (this.checkRangedItems = !1, l = 0; l < t.byEnd.length; l++)
              this._checkIfVisibleWithReference(t.byEnd[l], o, n, i);
          else {
            var p = a.binarySearchCustom(t.byEnd, d, "data", "end");
            this._traceVisible(p, t.byEnd, o, n, function (t) {
              return t.data.end < r || t.data.end > h;
            });
          }
          for (var l = 0; l < o.length; l++) {
            var c = o[l];
            c.displayed || c.show(), c.repositionX();
          }
          return o;
        }),
        (n.prototype._traceVisible = function (t, e, i, o, n) {
          if (t != -1) {
            for (var s = t; s >= 0; s--) {
              var r = e[s];
              if (n(r)) break;
              void 0 === o[r.id] && ((o[r.id] = !0), i.push(r));
            }
            for (var s = t + 1; s < e.length; s++) {
              var r = e[s];
              if (n(r)) break;
              void 0 === o[r.id] && ((o[r.id] = !0), i.push(r));
            }
          }
        }),
        (n.prototype._checkIfVisible = function (t, e, i) {
          t.isVisible(i)
            ? (t.displayed || t.show(), t.repositionX(), e.push(t))
            : t.displayed && t.hide();
        }),
        (n.prototype._checkIfVisibleWithReference = function (t, e, i, o) {
          t.isVisible(o)
            ? void 0 === i[t.id] && ((i[t.id] = !0), e.push(t))
            : t.displayed && t.hide();
        }),
        (n.prototype.changeSubgroup = function (t, e, i) {
          this._removeFromSubgroup(t, e),
            this._addToSubgroup(t, i),
            this.orderSubgroups();
        }),
        (t.exports = n);
    },
    function (t, e) {
      var i = 0.001;
      (e.orderByStart = function (t) {
        t.sort(function (t, e) {
          return t.data.start - e.data.start;
        });
      }),
        (e.orderByEnd = function (t) {
          t.sort(function (t, e) {
            var i = "end" in t.data ? t.data.end : t.data.start,
              o = "end" in e.data ? e.data.end : e.data.start;
            return i - o;
          });
        }),
        (e.stack = function (t, i, o) {
          if (o) for (var n = 0; n < t.length; n++) t[n].top = null;
          for (var n = 0; n < t.length; n++) {
            var s = t[n];
            if (s.stack && null === s.top) {
              s.top = i.axis;
              do {
                for (var r = null, a = 0, h = t.length; a < h; a++) {
                  var d = t[a];
                  if (
                    null !== d.top &&
                    d !== s &&
                    d.stack &&
                    e.collision(s, d, i.item, d.options.rtl)
                  ) {
                    r = d;
                    break;
                  }
                }
                null != r && (s.top = r.top + r.height + i.item.vertical);
              } while (r);
            }
          }
        }),
        (e.nostack = function (t, i, o, n) {
          for (var s = 0; s < t.length; s++)
            if (void 0 == t[s].data.subgroup) t[s].top = i.item.vertical;
            else if (void 0 !== t[s].data.subgroup && n) {
              var r = 0;
              for (var a in o)
                o.hasOwnProperty(a) &&
                  1 == o[a].visible &&
                  o[a].index < o[t[s].data.subgroup].index &&
                  ((r += o[a].height), (o[t[s].data.subgroup].top = r));
              t[s].top = r + 0.5 * i.item.vertical;
            }
          n || e.stackSubgroups(t, i, o);
        }),
        (e.stackSubgroups = function (t, i, o) {
          for (var n in o)
            if (o.hasOwnProperty(n)) {
              o[n].top = 0;
              do {
                var s = null;
                for (var r in o)
                  if (
                    null !== o[r].top &&
                    r !== n &&
                    o[n].index > o[r].index &&
                    e.collisionByTimes(o[n], o[r])
                  ) {
                    s = o[r];
                    break;
                  }
                null != s && (o[n].top = s.top + s.height);
              } while (s);
            }
          for (var a = 0; a < t.length; a++)
            void 0 !== t[a].data.subgroup &&
              (t[a].top = o[t[a].data.subgroup].top + 0.5 * i.item.vertical);
        }),
        (e.collision = function (t, e, o, n) {
          return n
            ? t.right - o.horizontal + i < e.right + e.width &&
                t.right + t.width + o.horizontal - i > e.right &&
                t.top - o.vertical + i < e.top + e.height &&
                t.top + t.height + o.vertical - i > e.top
            : t.left - o.horizontal + i < e.left + e.width &&
                t.left + t.width + o.horizontal - i > e.left &&
                t.top - o.vertical + i < e.top + e.height &&
                t.top + t.height + o.vertical - i > e.top;
        }),
        (e.collisionByTimes = function (t, e) {
          return (
            (t.start <= e.start &&
              t.end >= e.start &&
              t.top < e.top + e.height &&
              t.top + t.height > e.top) ||
            (e.start <= t.start &&
              e.end >= t.start &&
              e.top < t.top + t.height &&
              e.top + e.height > t.top)
          );
        });
    },
    function (t, e, i) {
      function o(t, e, i) {
        if (
          ((this.props = {content: {width: 0}}),
          (this.overflow = !1),
          (this.options = i),
          t)
        ) {
          if (void 0 == t.start)
            throw new Error('Property "start" missing in item ' + t.id);
          if (void 0 == t.end)
            throw new Error('Property "end" missing in item ' + t.id);
        }
        n.call(this, t, e, i);
      }
      var n = (i(95), i(108));
      (o.prototype = new n(null, null, null)),
        (o.prototype.baseClassName = "vis-item vis-range"),
        (o.prototype.isVisible = function (t) {
          return this.data.start < t.end && this.data.end > t.start;
        }),
        (o.prototype.redraw = function () {
          var t = this.dom;
          if (
            (t ||
              ((this.dom = {}),
              (t = this.dom),
              (t.box = document.createElement("div")),
              (t.frame = document.createElement("div")),
              (t.frame.className = "vis-item-overflow"),
              t.box.appendChild(t.frame),
              (t.visibleFrame = document.createElement("div")),
              (t.visibleFrame.className = "vis-item-visible-frame"),
              t.box.appendChild(t.visibleFrame),
              (t.content = document.createElement("div")),
              (t.content.className = "vis-item-content"),
              t.frame.appendChild(t.content),
              (t.box["timeline-item"] = this),
              (this.dirty = !0)),
            !this.parent)
          )
            throw new Error("Cannot redraw item: no parent attached");
          if (!t.box.parentNode) {
            var e = this.parent.dom.foreground;
            if (!e)
              throw new Error(
                "Cannot redraw item: parent has no foreground container element"
              );
            e.appendChild(t.box);
          }
          if (((this.displayed = !0), this.dirty)) {
            this._updateContents(this.dom.content),
              this._updateDataAttributes(this.dom.box),
              this._updateStyle(this.dom.box);
            var i = this.editable.updateTime || this.editable.updateGroup,
              o =
                (this.data.className ? " " + this.data.className : "") +
                (this.selected ? " vis-selected" : "") +
                (i ? " vis-editable" : " vis-readonly");
            (t.box.className = this.baseClassName + o),
              (this.overflow = "hidden" !== window.getComputedStyle(t.frame).overflow),
              (this.dom.content.style.maxWidth = "none"),
              (this.props.content.width = this.dom.content.offsetWidth),
              (this.height = this.dom.box.offsetHeight),
              (this.dom.content.style.maxWidth = ""),
              (this.dirty = !1);
          }
          this._repaintOnItemUpdateTimeTooltip(t.box),
            this._repaintDeleteButton(t.box),
            this._repaintDragCenter(),
            this._repaintDragLeft(),
            this._repaintDragRight();
        }),
        (o.prototype.show = function () {
          this.displayed || this.redraw();
        }),
        (o.prototype.hide = function () {
          if (this.displayed) {
            var t = this.dom.box;
            t.parentNode && t.parentNode.removeChild(t), (this.displayed = !1);
          }
        }),
        (o.prototype.repositionX = function (t) {
          var e,
            i,
            o = this.parent.width,
            n = this.conversion.toScreen(this.data.start),
            s = this.conversion.toScreen(this.data.end),
            r = void 0 === this.data.align ? this.options.align : this.data.align;
          (void 0 !== t && t !== !0) || (n < -o && (n = -o), s > 2 * o && (s = 2 * o));
          var a = Math.max(s - n + 0.5, 1);
          switch (
            (this.overflow
              ? (this.options.rtl ? (this.right = n) : (this.left = n),
                (this.width = a + this.props.content.width),
                (i = this.props.content.width))
              : (this.options.rtl ? (this.right = n) : (this.left = n),
                (this.width = a),
                (i = Math.min(s - n, this.props.content.width))),
            this.options.rtl
              ? (this.dom.box.style.right = this.right + "px")
              : (this.dom.box.style.left = this.left + "px"),
            (this.dom.box.style.width = a + "px"),
            r)
          ) {
            case "left":
              this.options.rtl
                ? (this.dom.content.style.right = "0")
                : (this.dom.content.style.left = "0");
              break;
            case "right":
              this.options.rtl
                ? (this.dom.content.style.right = Math.max(a - i, 0) + "px")
                : (this.dom.content.style.left = Math.max(a - i, 0) + "px");
              break;
            case "center":
              this.options.rtl
                ? (this.dom.content.style.right = Math.max((a - i) / 2, 0) + "px")
                : (this.dom.content.style.left = Math.max((a - i) / 2, 0) + "px");
              break;
            default:
              (e = this.overflow ? (s > 0 ? Math.max(-n, 0) : -i) : n < 0 ? -n : 0),
                this.options.rtl
                  ? (this.dom.content.style.right = e + "px")
                  : ((this.dom.content.style.left = e + "px"),
                    (this.dom.content.style.width = "calc(100% - " + e + "px)"));
          }
        }),
        (o.prototype.repositionY = function () {
          var t = this.options.orientation.item,
            e = this.dom.box;
          "top" == t
            ? (e.style.top = this.top + "px")
            : (e.style.top = this.parent.height - this.top - this.height + "px");
        }),
        (o.prototype._repaintDragLeft = function () {
          if (
            (this.selected || this.options.itemsAlwaysDraggable.range) &&
            this.options.editable.updateTime &&
            !this.dom.dragLeft
          ) {
            var t = document.createElement("div");
            (t.className = "vis-drag-left"),
              (t.dragLeftItem = this),
              this.dom.box.appendChild(t),
              (this.dom.dragLeft = t);
          } else
            this.selected ||
              this.options.itemsAlwaysDraggable.range ||
              !this.dom.dragLeft ||
              (this.dom.dragLeft.parentNode &&
                this.dom.dragLeft.parentNode.removeChild(this.dom.dragLeft),
              (this.dom.dragLeft = null));
        }),
        (o.prototype._repaintDragRight = function () {
          if (
            (this.selected || this.options.itemsAlwaysDraggable.range) &&
            this.options.editable.updateTime &&
            !this.dom.dragRight
          ) {
            var t = document.createElement("div");
            (t.className = "vis-drag-right"),
              (t.dragRightItem = this),
              this.dom.box.appendChild(t),
              (this.dom.dragRight = t);
          } else
            this.selected ||
              this.options.itemsAlwaysDraggable.range ||
              !this.dom.dragRight ||
              (this.dom.dragRight.parentNode &&
                this.dom.dragRight.parentNode.removeChild(this.dom.dragRight),
              (this.dom.dragRight = null));
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e, i) {
        (this.id = null),
          (this.parent = null),
          (this.data = t),
          (this.dom = null),
          (this.conversion = e || {}),
          (this.options = i || {}),
          (this.selected = !1),
          (this.displayed = !1),
          (this.groupShowing = !0),
          (this.dirty = !0),
          (this.top = null),
          (this.right = null),
          (this.left = null),
          (this.width = null),
          (this.height = null),
          (this.editable = null),
          this._updateEditStatus();
      }
      var s = i(62),
        r = o(s),
        a = i(58),
        h = o(a),
        d = i(95),
        l = i(1),
        u = i(82);
      (n.prototype.stack = !0),
        (n.prototype.select = function () {
          (this.selected = !0), (this.dirty = !0), this.displayed && this.redraw();
        }),
        (n.prototype.unselect = function () {
          (this.selected = !1), (this.dirty = !0), this.displayed && this.redraw();
        }),
        (n.prototype.setData = function (t) {
          var e = void 0 != t.group && this.data.group != t.group;
          e && null != this.parent && this.parent.itemSet._moveToGroup(this, t.group),
            (this.parent.stackDirty = !0);
          var i = void 0 != t.subgroup && this.data.subgroup != t.subgroup;
          i &&
            null != this.parent &&
            this.parent.changeSubgroup(this, this.data.subgroup, t.subgroup),
            (this.data = t),
            this._updateEditStatus(),
            (this.dirty = !0),
            this.displayed && this.redraw();
        }),
        (n.prototype.setParent = function (t) {
          this.displayed
            ? (this.hide(), (this.parent = t), this.parent && this.show())
            : (this.parent = t);
        }),
        (n.prototype.isVisible = function (t) {
          return !1;
        }),
        (n.prototype.show = function () {
          return !1;
        }),
        (n.prototype.hide = function () {
          return !1;
        }),
        (n.prototype.redraw = function () {}),
        (n.prototype.repositionX = function () {}),
        (n.prototype.repositionY = function () {}),
        (n.prototype._repaintDragCenter = function () {
          if (
            this.selected &&
            this.options.editable.updateTime &&
            !this.dom.dragCenter
          ) {
            var t = this,
              e = document.createElement("div");
            (e.className = "vis-drag-center"), (e.dragCenterItem = this);
            var i = new d(e);
            i.on("tap", function (e) {
              t.parent.itemSet.body.emitter.emit("click", {event: e, item: t.id});
            }),
              i.on("doubletap", function (e) {
                e.stopPropagation(),
                  t.parent.itemSet._onUpdateItem(t),
                  t.parent.itemSet.body.emitter.emit("doubleClick", {
                    event: e,
                    item: t.id,
                  });
              }),
              this.dom.box
                ? this.dom.dragLeft
                  ? this.dom.box.insertBefore(e, this.dom.dragLeft)
                  : this.dom.box.appendChild(e)
                : this.dom.point && this.dom.point.appendChild(e),
              (this.dom.dragCenter = e);
          } else
            !this.selected &&
              this.dom.dragCenter &&
              (this.dom.dragCenter.parentNode &&
                this.dom.dragCenter.parentNode.removeChild(this.dom.dragCenter),
              (this.dom.dragCenter = null));
        }),
        (n.prototype._repaintDeleteButton = function (t) {
          var e =
            ((this.options.editable.overrideItems || null == this.editable) &&
              this.options.editable.remove) ||
            (!this.options.editable.overrideItems &&
              null != this.editable &&
              this.editable.remove);
          if (this.selected && e && !this.dom.deleteButton) {
            var i = this,
              o = document.createElement("div");
            this.options.rtl
              ? (o.className = "vis-delete-rtl")
              : (o.className = "vis-delete"),
              (o.title = "Delete this item"),
              new d(o).on("tap", function (t) {
                t.stopPropagation(), i.parent.removeFromDataSet(i);
              }),
              t.appendChild(o),
              (this.dom.deleteButton = o);
          } else
            !this.selected &&
              this.dom.deleteButton &&
              (this.dom.deleteButton.parentNode &&
                this.dom.deleteButton.parentNode.removeChild(this.dom.deleteButton),
              (this.dom.deleteButton = null));
        }),
        (n.prototype._repaintOnItemUpdateTimeTooltip = function (t) {
          if (this.options.tooltipOnItemUpdateTime) {
            var e =
              (this.options.editable.updateTime || this.data.editable === !0) &&
              this.data.editable !== !1;
            if (this.selected && e && !this.dom.onItemUpdateTimeTooltip) {
              var i = document.createElement("div");
              (i.className = "vis-onUpdateTime-tooltip"),
                t.appendChild(i),
                (this.dom.onItemUpdateTimeTooltip = i);
            } else
              !this.selected &&
                this.dom.onItemUpdateTimeTooltip &&
                (this.dom.onItemUpdateTimeTooltip.parentNode &&
                  this.dom.onItemUpdateTimeTooltip.parentNode.removeChild(
                    this.dom.onItemUpdateTimeTooltip
                  ),
                (this.dom.onItemUpdateTimeTooltip = null));
            if (this.dom.onItemUpdateTimeTooltip) {
              (this.dom.onItemUpdateTimeTooltip.style.visibility = this.parent.itemSet
                .touchParams.itemIsDragging
                ? "visible"
                : "hidden"),
                this.options.rtl
                  ? (this.dom.onItemUpdateTimeTooltip.style.right =
                      this.dom.content.style.right)
                  : (this.dom.onItemUpdateTimeTooltip.style.left =
                      this.dom.content.style.left);
              var o,
                n = 50,
                s = this.parent.itemSet.body.domProps.scrollTop;
              o =
                "top" == this.options.orientation.item
                  ? this.top
                  : this.parent.height - this.top - this.height;
              var r = o + this.parent.top - n < -s;
              r
                ? ((this.dom.onItemUpdateTimeTooltip.style.bottom = ""),
                  (this.dom.onItemUpdateTimeTooltip.style.top = this.height + 2 + "px"))
                : ((this.dom.onItemUpdateTimeTooltip.style.top = ""),
                  (this.dom.onItemUpdateTimeTooltip.style.bottom =
                    this.height + 2 + "px"));
              var a, h;
              this.options.tooltipOnItemUpdateTime &&
              this.options.tooltipOnItemUpdateTime.template
                ? ((h = this.options.tooltipOnItemUpdateTime.template.bind(this)),
                  (a = h(this.data)))
                : ((a = "start: " + u(this.data.start).format("MM/DD/YYYY hh:mm")),
                  this.data.end &&
                    (a += "<br> end: " + u(this.data.end).format("MM/DD/YYYY hh:mm"))),
                (this.dom.onItemUpdateTimeTooltip.innerHTML = a);
            }
          }
        }),
        (n.prototype._updateContents = function (t) {
          var e,
            i,
            o,
            n,
            s = this.parent.itemSet.itemsData.get(this.id),
            r = this.dom.box || this.dom.point,
            a = r.getElementsByClassName("vis-item-visible-frame")[0];
          if (
            (this.options.visibleFrameTemplate
              ? ((n = this.options.visibleFrameTemplate.bind(this)), (o = n(s, r)))
              : (o = ""),
            a)
          )
            if (o instanceof Object && !(o instanceof Element)) n(s, a);
            else {
              var h =
                this._contentToString(this.itemVisibleFrameContent) !==
                this._contentToString(o);
              if (h) {
                if (o instanceof Element) (a.innerHTML = ""), a.appendChild(o);
                else if (void 0 != o) a.innerHTML = o;
                else if ("background" != this.data.type || void 0 !== this.data.content)
                  throw new Error('Property "content" missing in item ' + this.id);
                this.itemVisibleFrameContent = o;
              }
            }
          if (
            (this.options.template
              ? ((i = this.options.template.bind(this)), (e = i(s, t, this.data)))
              : (e = this.data.content),
            e instanceof Object && !(e instanceof Element))
          )
            i(s, t);
          else {
            var h = this._contentToString(this.content) !== this._contentToString(e);
            if (h) {
              if (e instanceof Element) (t.innerHTML = ""), t.appendChild(e);
              else if (void 0 != e) t.innerHTML = e;
              else if ("background" != this.data.type || void 0 !== this.data.content)
                throw new Error('Property "content" missing in item ' + this.id);
              this.content = e;
            }
          }
        }),
        (n.prototype._updateDataAttributes = function (t) {
          if (this.options.dataAttributes && this.options.dataAttributes.length > 0) {
            var e = [];
            if (Array.isArray(this.options.dataAttributes))
              e = this.options.dataAttributes;
            else {
              if ("all" != this.options.dataAttributes) return;
              e = (0, h.default)(this.data);
            }
            for (var i = 0; i < e.length; i++) {
              var o = e[i],
                n = this.data[o];
              null != n
                ? t.setAttribute("data-" + o, n)
                : t.removeAttribute("data-" + o);
            }
          }
        }),
        (n.prototype._updateStyle = function (t) {
          this.style && (l.removeCssText(t, this.style), (this.style = null)),
            this.data.style &&
              (l.addCssText(t, this.data.style), (this.style = this.data.style));
        }),
        (n.prototype._contentToString = function (t) {
          return "string" == typeof t ? t : t && "outerHTML" in t ? t.outerHTML : t;
        }),
        (n.prototype._updateEditStatus = function () {
          this.options &&
            ("boolean" == typeof this.options.editable
              ? (this.editable = {
                  updateTime: this.options.editable,
                  updateGroup: this.options.editable,
                  remove: this.options.editable,
                })
              : "object" === (0, r.default)(this.options.editable) &&
                ((this.editable = {}),
                l.selectiveExtend(
                  ["updateTime", "updateGroup", "remove"],
                  this.editable,
                  this.options.editable
                ))),
            (this.options &&
              this.options.editable &&
              this.options.editable.overrideItems === !0) ||
              (this.data &&
                ("boolean" == typeof this.data.editable
                  ? (this.editable = {
                      updateTime: this.data.editable,
                      updateGroup: this.data.editable,
                      remove: this.data.editable,
                    })
                  : "object" === (0, r.default)(this.data.editable) &&
                    ((this.editable = {}),
                    l.selectiveExtend(
                      ["updateTime", "updateGroup", "remove"],
                      this.editable,
                      this.data.editable
                    ))));
        }),
        (n.prototype.getWidthLeft = function () {
          return 0;
        }),
        (n.prototype.getWidthRight = function () {
          return 0;
        }),
        (n.prototype.getTitle = function () {
          return this.data.title;
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e, i) {
        a.call(this, t, e, i),
          (this.width = 0),
          (this.height = 0),
          (this.top = 0),
          (this.left = 0);
      }
      var s = i(55),
        r = o(s),
        a = (i(1), i(105));
      (n.prototype = (0, r.default)(a.prototype)),
        (n.prototype.redraw = function (t, e, i) {
          var o = !1;
          (this.visibleItems = this._updateItemsInRange(
            this.orderedItems,
            this.visibleItems,
            t
          )),
            (this.width = this.dom.background.offsetWidth),
            (this.dom.background.style.height = "0");
          for (var n = 0, s = this.visibleItems.length; n < s; n++) {
            var r = this.visibleItems[n];
            r.repositionY(e);
          }
          return o;
        }),
        (n.prototype.show = function () {
          this.dom.background.parentNode ||
            this.itemSet.dom.background.appendChild(this.dom.background);
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      function o(t, e, i) {
        if (
          ((this.props = {dot: {width: 0, height: 0}, line: {width: 0, height: 0}}),
          (this.options = i),
          t && void 0 == t.start)
        )
          throw new Error('Property "start" missing in item ' + t);
        n.call(this, t, e, i);
      }
      var n = i(108);
      i(1);
      (o.prototype = new n(null, null, null)),
        (o.prototype.isVisible = function (t) {
          var e,
            i = this.options.align,
            o = this.width * t.getMillisecondsPerPixel();
          return (e =
            "right" == i
              ? this.data.start.getTime() > t.start &&
                this.data.start.getTime() - o < t.end
              : "left" == i
              ? this.data.start.getTime() + o > t.start &&
                this.data.start.getTime() < t.end
              : this.data.start.getTime() + o / 2 > t.start &&
                this.data.start.getTime() - o / 2 < t.end);
        }),
        (o.prototype.redraw = function () {
          var t = this.dom;
          if (
            (t ||
              ((this.dom = {}),
              (t = this.dom),
              (t.box = document.createElement("DIV")),
              (t.content = document.createElement("DIV")),
              (t.content.className = "vis-item-content"),
              t.box.appendChild(t.content),
              (t.line = document.createElement("DIV")),
              (t.line.className = "vis-line"),
              (t.dot = document.createElement("DIV")),
              (t.dot.className = "vis-dot"),
              (t.box["timeline-item"] = this),
              (this.dirty = !0)),
            !this.parent)
          )
            throw new Error("Cannot redraw item: no parent attached");
          if (!t.box.parentNode) {
            var e = this.parent.dom.foreground;
            if (!e)
              throw new Error(
                "Cannot redraw item: parent has no foreground container element"
              );
            e.appendChild(t.box);
          }
          if (!t.line.parentNode) {
            var i = this.parent.dom.background;
            if (!i)
              throw new Error(
                "Cannot redraw item: parent has no background container element"
              );
            i.appendChild(t.line);
          }
          if (!t.dot.parentNode) {
            var o = this.parent.dom.axis;
            if (!i)
              throw new Error(
                "Cannot redraw item: parent has no axis container element"
              );
            o.appendChild(t.dot);
          }
          if (((this.displayed = !0), this.dirty)) {
            this._updateContents(this.dom.content),
              this._updateDataAttributes(this.dom.box),
              this._updateStyle(this.dom.box);
            var n = this.editable.updateTime || this.editable.updateGroup,
              s =
                (this.data.className ? " " + this.data.className : "") +
                (this.selected ? " vis-selected" : "") +
                (n ? " vis-editable" : " vis-readonly");
            (t.box.className = "vis-item vis-box" + s),
              (t.line.className = "vis-item vis-line" + s),
              (t.dot.className = "vis-item vis-dot" + s);
            var r = t.box.style.right,
              a = t.box.style.left;
            this.options.rtl ? (t.box.style.right = "0px") : (t.box.style.left = "0px"),
              (this.props.dot.height = t.dot.offsetHeight),
              (this.props.dot.width = t.dot.offsetWidth),
              (this.props.line.width = t.line.offsetWidth),
              (this.width = t.box.offsetWidth),
              (this.height = t.box.offsetHeight),
              this.options.rtl ? (t.box.style.right = r) : (t.box.style.left = a),
              (this.dirty = !1);
          }
          this._repaintOnItemUpdateTimeTooltip(t.box),
            this._repaintDragCenter(),
            this._repaintDeleteButton(t.box);
        }),
        (o.prototype.show = function () {
          this.displayed || this.redraw();
        }),
        (o.prototype.hide = function () {
          if (this.displayed) {
            var t = this.dom;
            t.box.parentNode && t.box.parentNode.removeChild(t.box),
              t.line.parentNode && t.line.parentNode.removeChild(t.line),
              t.dot.parentNode && t.dot.parentNode.removeChild(t.dot),
              (this.displayed = !1);
          }
        }),
        (o.prototype.repositionX = function () {
          var t = this.conversion.toScreen(this.data.start),
            e = this.options.align;
          "right" == e
            ? this.options.rtl
              ? ((this.right = t - this.width),
                (this.dom.box.style.right = this.right + "px"),
                (this.dom.line.style.right = t - this.props.line.width + "px"),
                (this.dom.dot.style.right =
                  t - this.props.line.width / 2 - this.props.dot.width / 2 + "px"))
              : ((this.left = t - this.width),
                (this.dom.box.style.left = this.left + "px"),
                (this.dom.line.style.left = t - this.props.line.width + "px"),
                (this.dom.dot.style.left =
                  t - this.props.line.width / 2 - this.props.dot.width / 2 + "px"))
            : "left" == e
            ? this.options.rtl
              ? ((this.right = t),
                (this.dom.box.style.right = this.right + "px"),
                (this.dom.line.style.right = t + "px"),
                (this.dom.dot.style.right =
                  t + this.props.line.width / 2 - this.props.dot.width / 2 + "px"))
              : ((this.left = t),
                (this.dom.box.style.left = this.left + "px"),
                (this.dom.line.style.left = t + "px"),
                (this.dom.dot.style.left =
                  t + this.props.line.width / 2 - this.props.dot.width / 2 + "px"))
            : this.options.rtl
            ? ((this.right = t - this.width / 2),
              (this.dom.box.style.right = this.right + "px"),
              (this.dom.line.style.right = t - this.props.line.width + "px"),
              (this.dom.dot.style.right = t - this.props.dot.width / 2 + "px"))
            : ((this.left = t - this.width / 2),
              (this.dom.box.style.left = this.left + "px"),
              (this.dom.line.style.left = t - this.props.line.width / 2 + "px"),
              (this.dom.dot.style.left = t - this.props.dot.width / 2 + "px"));
        }),
        (o.prototype.repositionY = function () {
          var t = this.options.orientation.item,
            e = this.dom.box,
            i = this.dom.line,
            o = this.dom.dot;
          if ("top" == t)
            (e.style.top = (this.top || 0) + "px"),
              (i.style.top = "0"),
              (i.style.height = this.parent.top + this.top + 1 + "px"),
              (i.style.bottom = "");
          else {
            var n = this.parent.itemSet.props.height,
              s = n - this.parent.top - this.parent.height + this.top;
            (e.style.top = (this.parent.height - this.top - this.height || 0) + "px"),
              (i.style.top = n - s + "px"),
              (i.style.bottom = "0");
          }
          o.style.top = -this.props.dot.height / 2 + "px";
        }),
        (o.prototype.getWidthLeft = function () {
          return this.width / 2;
        }),
        (o.prototype.getWidthRight = function () {
          return this.width / 2;
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t, e, i) {
        if (
          ((this.props = {
            dot: {top: 0, width: 0, height: 0},
            content: {height: 0, marginLeft: 0, marginRight: 0},
          }),
          (this.options = i),
          t && void 0 == t.start)
        )
          throw new Error('Property "start" missing in item ' + t);
        n.call(this, t, e, i);
      }
      var n = i(108);
      (o.prototype = new n(null, null, null)),
        (o.prototype.isVisible = function (t) {
          var e = this.width * t.getMillisecondsPerPixel();
          return this.data.start.getTime() + e > t.start && this.data.start < t.end;
        }),
        (o.prototype.redraw = function () {
          var t = this.dom;
          if (
            (t ||
              ((this.dom = {}),
              (t = this.dom),
              (t.point = document.createElement("div")),
              (t.content = document.createElement("div")),
              (t.content.className = "vis-item-content"),
              t.point.appendChild(t.content),
              (t.dot = document.createElement("div")),
              t.point.appendChild(t.dot),
              (t.point["timeline-item"] = this),
              (this.dirty = !0)),
            !this.parent)
          )
            throw new Error("Cannot redraw item: no parent attached");
          if (!t.point.parentNode) {
            var e = this.parent.dom.foreground;
            if (!e)
              throw new Error(
                "Cannot redraw item: parent has no foreground container element"
              );
            e.appendChild(t.point);
          }
          if (((this.displayed = !0), this.dirty)) {
            this._updateContents(this.dom.content),
              this._updateDataAttributes(this.dom.point),
              this._updateStyle(this.dom.point);
            var i = this.editable.updateTime || this.editable.updateGroup,
              o =
                (this.data.className ? " " + this.data.className : "") +
                (this.selected ? " vis-selected" : "") +
                (i ? " vis-editable" : " vis-readonly");
            (t.point.className = "vis-item vis-point" + o),
              (t.dot.className = "vis-item vis-dot" + o),
              (this.props.dot.width = t.dot.offsetWidth),
              (this.props.dot.height = t.dot.offsetHeight),
              (this.props.content.height = t.content.offsetHeight),
              this.options.rtl
                ? (t.content.style.marginRight = 2 * this.props.dot.width + "px")
                : (t.content.style.marginLeft = 2 * this.props.dot.width + "px"),
              (this.width = t.point.offsetWidth),
              (this.height = t.point.offsetHeight),
              (t.dot.style.top = (this.height - this.props.dot.height) / 2 + "px"),
              this.options.rtl
                ? (t.dot.style.right = this.props.dot.width / 2 + "px")
                : (t.dot.style.left = this.props.dot.width / 2 + "px"),
              (this.dirty = !1);
          }
          this._repaintOnItemUpdateTimeTooltip(t.point),
            this._repaintDragCenter(),
            this._repaintDeleteButton(t.point);
        }),
        (o.prototype.show = function () {
          this.displayed || this.redraw();
        }),
        (o.prototype.hide = function () {
          this.displayed &&
            (this.dom.point.parentNode &&
              this.dom.point.parentNode.removeChild(this.dom.point),
            (this.displayed = !1));
        }),
        (o.prototype.repositionX = function () {
          var t = this.conversion.toScreen(this.data.start);
          this.options.rtl
            ? ((this.right = t - this.props.dot.width),
              (this.dom.point.style.right = this.right + "px"))
            : ((this.left = t - this.props.dot.width),
              (this.dom.point.style.left = this.left + "px"));
        }),
        (o.prototype.repositionY = function () {
          var t = this.options.orientation.item,
            e = this.dom.point;
          "top" == t
            ? (e.style.top = this.top + "px")
            : (e.style.top = this.parent.height - this.top - this.height + "px");
        }),
        (o.prototype.getWidthLeft = function () {
          return this.props.dot.width;
        }),
        (o.prototype.getWidthRight = function () {
          return this.props.dot.width;
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t, e, i) {
        if (((this.props = {content: {width: 0}}), (this.overflow = !1), t)) {
          if (void 0 == t.start)
            throw new Error('Property "start" missing in item ' + t.id);
          if (void 0 == t.end)
            throw new Error('Property "end" missing in item ' + t.id);
        }
        n.call(this, t, e, i);
      }
      var n = (i(95), i(108)),
        s = i(109),
        r = i(107);
      (o.prototype = new n(null, null, null)),
        (o.prototype.baseClassName = "vis-item vis-background"),
        (o.prototype.stack = !1),
        (o.prototype.isVisible = function (t) {
          return this.data.start < t.end && this.data.end > t.start;
        }),
        (o.prototype.redraw = function () {
          var t = this.dom;
          if (
            (t ||
              ((this.dom = {}),
              (t = this.dom),
              (t.box = document.createElement("div")),
              (t.frame = document.createElement("div")),
              (t.frame.className = "vis-item-overflow"),
              t.box.appendChild(t.frame),
              (t.content = document.createElement("div")),
              (t.content.className = "vis-item-content"),
              t.frame.appendChild(t.content),
              (this.dirty = !0)),
            !this.parent)
          )
            throw new Error("Cannot redraw item: no parent attached");
          if (!t.box.parentNode) {
            var e = this.parent.dom.background;
            if (!e)
              throw new Error(
                "Cannot redraw item: parent has no background container element"
              );
            e.appendChild(t.box);
          }
          if (((this.displayed = !0), this.dirty)) {
            this._updateContents(this.dom.content),
              this._updateDataAttributes(this.dom.content),
              this._updateStyle(this.dom.box);
            var i =
              (this.data.className ? " " + this.data.className : "") +
              (this.selected ? " vis-selected" : "");
            (t.box.className = this.baseClassName + i),
              (this.overflow =
                "hidden" !== window.getComputedStyle(t.content).overflow),
              (this.props.content.width = this.dom.content.offsetWidth),
              (this.height = 0),
              (this.dirty = !1);
          }
        }),
        (o.prototype.show = r.prototype.show),
        (o.prototype.hide = r.prototype.hide),
        (o.prototype.repositionX = r.prototype.repositionX),
        (o.prototype.repositionY = function (t) {
          var e,
            i = this.options.orientation.item;
          if (void 0 !== this.data.subgroup) {
            var o = this.data.subgroup,
              n = this.parent.subgroups;
            n[o].index;
            (this.dom.box.style.height = this.parent.subgroups[o].height + "px"),
              "top" == i
                ? (this.dom.box.style.top =
                    this.parent.top + this.parent.subgroups[o].top + "px")
                : (this.dom.box.style.top =
                    this.parent.top +
                    this.parent.height -
                    this.parent.subgroups[o].top -
                    this.parent.subgroups[o].height +
                    "px"),
              (this.dom.box.style.bottom = "");
          } else
            this.parent instanceof s
              ? ((e = Math.max(
                  this.parent.height,
                  this.parent.itemSet.body.domProps.center.height,
                  this.parent.itemSet.body.domProps.centerContainer.height
                )),
                (this.dom.box.style.bottom = "bottom" == i ? "0" : ""),
                (this.dom.box.style.top = "top" == i ? "0" : ""))
              : ((e = this.parent.height),
                (this.dom.box.style.top = this.parent.top + "px"),
                (this.dom.box.style.bottom = ""));
          this.dom.box.style.height = e + "px";
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      Object.defineProperty(e, "__esModule", {value: !0});
      var n = i(114),
        s = o(n),
        r = i(115),
        a = o(r),
        h = (function () {
          function t(e, i) {
            (0, s.default)(this, t),
              (this.container = e),
              (this.overflowMethod = i || "cap"),
              (this.x = 0),
              (this.y = 0),
              (this.padding = 5),
              (this.hidden = !1),
              (this.frame = document.createElement("div")),
              (this.frame.className = "vis-tooltip"),
              this.container.appendChild(this.frame);
          }
          return (
            (0, a.default)(t, [
              {
                key: "setPosition",
                value: function (t, e) {
                  (this.x = parseInt(t)), (this.y = parseInt(e));
                },
              },
              {
                key: "setText",
                value: function (t) {
                  t instanceof Element
                    ? ((this.frame.innerHTML = ""), this.frame.appendChild(t))
                    : (this.frame.innerHTML = t);
                },
              },
              {
                key: "show",
                value: function (t) {
                  if ((void 0 === t && (t = !0), t === !0)) {
                    var e = this.frame.clientHeight,
                      i = this.frame.clientWidth,
                      o = this.frame.parentNode.clientHeight,
                      n = this.frame.parentNode.clientWidth,
                      s = 0,
                      r = 0;
                    if ("flip" == this.overflowMethod) {
                      var a = !1,
                        h = !0;
                      this.y - e < this.padding && (h = !1),
                        this.x + i > n - this.padding && (a = !0),
                        (s = a ? this.x - i : this.x),
                        (r = h ? this.y - e : this.y);
                    } else
                      (r = this.y - e),
                        r + e + this.padding > o && (r = o - e - this.padding),
                        r < this.padding && (r = this.padding),
                        (s = this.x),
                        s + i + this.padding > n && (s = n - i - this.padding),
                        s < this.padding && (s = this.padding);
                    (this.frame.style.left = s + "px"),
                      (this.frame.style.top = r + "px"),
                      (this.frame.style.visibility = "visible"),
                      (this.hidden = !1);
                  } else this.hide();
                },
              },
              {
                key: "hide",
                value: function () {
                  (this.hidden = !0), (this.frame.style.visibility = "hidden");
                },
              },
              {
                key: "destroy",
                value: function () {
                  this.frame.parentNode.removeChild(this.frame);
                },
              },
            ]),
            t
          );
        })();
      e.default = h;
    },
    function (t, e) {
      (e.__esModule = !0),
        (e.default = function (t, e) {
          if (!(t instanceof e))
            throw new TypeError("Cannot call a class as a function");
        });
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      e.__esModule = !0;
      var n = i(116),
        s = o(n);
      e.default = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            (o.enumerable = o.enumerable || !1),
              (o.configurable = !0),
              "value" in o && (o.writable = !0),
              (0, s.default)(t, o.key, o);
          }
        }
        return function (e, i, o) {
          return i && t(e.prototype, i), o && t(e, o), e;
        };
      })();
    },
    function (t, e, i) {
      t.exports = {default: i(117), __esModule: !0};
    },
    function (t, e, i) {
      i(118);
      var o = i(17).Object;
      t.exports = function (t, e, i) {
        return o.defineProperty(t, e, i);
      };
    },
    function (t, e, i) {
      var o = i(15);
      o(o.S + o.F * !i(25), "Object", {defineProperty: i(21).f});
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e) {
        (this.dom = {
          foreground: null,
          lines: [],
          majorTexts: [],
          minorTexts: [],
          redundant: {lines: [], majorTexts: [], minorTexts: []},
        }),
          (this.props = {range: {start: 0, end: 0, minimumStep: 0}, lineTop: 0}),
          (this.defaultOptions = {
            orientation: {axis: "bottom"},
            showMinorLabels: !0,
            showMajorLabels: !0,
            maxMinorChars: 7,
            format: d.FORMAT,
            moment: u,
            timeAxis: null,
          }),
          (this.options = a.extend({}, this.defaultOptions)),
          (this.body = t),
          this._create(),
          this.setOptions(e);
      }
      var s = i(62),
        r = o(s),
        a = i(1),
        h = i(100),
        d = i(104),
        l = i(101),
        u = i(82);
      (n.prototype = new h()),
        (n.prototype.setOptions = function (t) {
          t &&
            (a.selectiveExtend(
              [
                "showMinorLabels",
                "showMajorLabels",
                "maxMinorChars",
                "hiddenDates",
                "timeAxis",
                "moment",
                "rtl",
              ],
              this.options,
              t
            ),
            a.selectiveDeepExtend(["format"], this.options, t),
            "orientation" in t &&
              ("string" == typeof t.orientation
                ? (this.options.orientation.axis = t.orientation)
                : "object" === (0, r.default)(t.orientation) &&
                  "axis" in t.orientation &&
                  (this.options.orientation.axis = t.orientation.axis)),
            "locale" in t &&
              ("function" == typeof u.locale ? u.locale(t.locale) : u.lang(t.locale)));
        }),
        (n.prototype._create = function () {
          (this.dom.foreground = document.createElement("div")),
            (this.dom.background = document.createElement("div")),
            (this.dom.foreground.className = "vis-time-axis vis-foreground"),
            (this.dom.background.className = "vis-time-axis vis-background");
        }),
        (n.prototype.destroy = function () {
          this.dom.foreground.parentNode &&
            this.dom.foreground.parentNode.removeChild(this.dom.foreground),
            this.dom.background.parentNode &&
              this.dom.background.parentNode.removeChild(this.dom.background),
            (this.body = null);
        }),
        (n.prototype.redraw = function () {
          var t = this.props,
            e = this.dom.foreground,
            i = this.dom.background,
            o =
              "top" == this.options.orientation.axis
                ? this.body.dom.top
                : this.body.dom.bottom,
            n = e.parentNode !== o;
          this._calculateCharSize();
          var s =
              this.options.showMinorLabels && "none" !== this.options.orientation.axis,
            r =
              this.options.showMajorLabels && "none" !== this.options.orientation.axis;
          (t.minorLabelHeight = s ? t.minorCharHeight : 0),
            (t.majorLabelHeight = r ? t.majorCharHeight : 0),
            (t.height = t.minorLabelHeight + t.majorLabelHeight),
            (t.width = e.offsetWidth),
            (t.minorLineHeight =
              this.body.domProps.root.height -
              t.majorLabelHeight -
              ("top" == this.options.orientation.axis
                ? this.body.domProps.bottom.height
                : this.body.domProps.top.height)),
            (t.minorLineWidth = 1),
            (t.majorLineHeight = t.minorLineHeight + t.majorLabelHeight),
            (t.majorLineWidth = 1);
          var a = e.nextSibling,
            h = i.nextSibling;
          return (
            e.parentNode && e.parentNode.removeChild(e),
            i.parentNode && i.parentNode.removeChild(i),
            (e.style.height = this.props.height + "px"),
            this._repaintLabels(),
            a ? o.insertBefore(e, a) : o.appendChild(e),
            h
              ? this.body.dom.backgroundVertical.insertBefore(i, h)
              : this.body.dom.backgroundVertical.appendChild(i),
            this._isResized() || n
          );
        }),
        (n.prototype._repaintLabels = function () {
          var t = this.options.orientation.axis,
            e = a.convert(this.body.range.start, "Number"),
            i = a.convert(this.body.range.end, "Number"),
            o = this.body.util
              .toTime((this.props.minorCharWidth || 10) * this.options.maxMinorChars)
              .valueOf(),
            n =
              o -
              l.getHiddenDurationBefore(
                this.options.moment,
                this.body.hiddenDates,
                this.body.range,
                o
              );
          n -= this.body.util.toTime(0).valueOf();
          var s = new d(new Date(e), new Date(i), n, this.body.hiddenDates);
          s.setMoment(this.options.moment),
            this.options.format && s.setFormat(this.options.format),
            this.options.timeAxis && s.setScale(this.options.timeAxis),
            (this.step = s);
          var r = this.dom;
          (r.redundant.lines = r.lines),
            (r.redundant.majorTexts = r.majorTexts),
            (r.redundant.minorTexts = r.minorTexts),
            (r.lines = []),
            (r.majorTexts = []),
            (r.minorTexts = []);
          var h,
            u,
            c,
            f,
            m,
            g,
            v,
            y,
            b,
            _,
            w,
            x = 0,
            D = void 0,
            S = 0,
            k = 1e3;
          for (
            s.start(), u = s.getCurrent(), f = this.body.util.toScreen(u);
            s.hasNext() && S < k;

          ) {
            switch (
              (S++,
              (m = s.isMajor()),
              (w = s.getClassName()),
              (_ = s.getLabelMinor()),
              (h = u),
              (c = f),
              s.next(),
              (u = s.getCurrent()),
              (g = s.isMajor()),
              (f = this.body.util.toScreen(u)),
              (y = x),
              (x = f - c),
              s.scale)
            ) {
              case "week":
                v = !0;
                break;
              default:
                v = x >= 0.4 * y;
            }
            if (this.options.showMinorLabels && v) {
              var T = this._repaintMinorText(c, _, t, w);
              T.style.width = x + "px";
            }
            m && this.options.showMajorLabels
              ? (c > 0 &&
                  (void 0 == D && (D = c),
                  (T = this._repaintMajorText(c, s.getLabelMajor(), t, w))),
                (b = this._repaintMajorLine(c, x, t, w)))
              : v
              ? (b = this._repaintMinorLine(c, x, t, w))
              : b && (b.style.width = parseInt(b.style.width) + x + "px");
          }
          if (
            (S !== k ||
              p ||
              (console.warn(
                "Something is wrong with the Timeline scale. Limited drawing of grid lines to " +
                  k +
                  " lines."
              ),
              (p = !0)),
            this.options.showMajorLabels)
          ) {
            var C = this.body.util.toTime(0),
              M = s.getLabelMajor(C),
              O = M.length * (this.props.majorCharWidth || 10) + 10;
            (void 0 == D || O < D) && this._repaintMajorText(0, M, t, w);
          }
          a.forEach(this.dom.redundant, function (t) {
            for (; t.length; ) {
              var e = t.pop();
              e && e.parentNode && e.parentNode.removeChild(e);
            }
          });
        }),
        (n.prototype._repaintMinorText = function (t, e, i, o) {
          var n = this.dom.redundant.minorTexts.shift();
          if (!n) {
            var s = document.createTextNode("");
            (n = document.createElement("div")),
              n.appendChild(s),
              this.dom.foreground.appendChild(n);
          }
          return (
            this.dom.minorTexts.push(n),
            (n.innerHTML = e),
            (n.style.top = "top" == i ? this.props.majorLabelHeight + "px" : "0"),
            this.options.rtl
              ? ((n.style.left = ""), (n.style.right = t + "px"))
              : (n.style.left = t + "px"),
            (n.className = "vis-text vis-minor " + o),
            n
          );
        }),
        (n.prototype._repaintMajorText = function (t, e, i, o) {
          var n = this.dom.redundant.majorTexts.shift();
          if (!n) {
            var s = document.createElement("div");
            (n = document.createElement("div")),
              n.appendChild(s),
              this.dom.foreground.appendChild(n);
          }
          return (
            (n.childNodes[0].innerHTML = e),
            (n.className = "vis-text vis-major " + o),
            (n.style.top = "top" == i ? "0" : this.props.minorLabelHeight + "px"),
            this.options.rtl
              ? ((n.style.left = ""), (n.style.right = t + "px"))
              : (n.style.left = t + "px"),
            this.dom.majorTexts.push(n),
            n
          );
        }),
        (n.prototype._repaintMinorLine = function (t, e, i, o) {
          var n = this.dom.redundant.lines.shift();
          n ||
            ((n = document.createElement("div")), this.dom.background.appendChild(n)),
            this.dom.lines.push(n);
          var s = this.props;
          return (
            "top" == i
              ? (n.style.top = s.majorLabelHeight + "px")
              : (n.style.top = this.body.domProps.top.height + "px"),
            (n.style.height = s.minorLineHeight + "px"),
            this.options.rtl
              ? ((n.style.left = ""),
                (n.style.right = t - s.minorLineWidth / 2 + "px"),
                (n.className = "vis-grid vis-vertical-rtl vis-minor " + o))
              : ((n.style.left = t - s.minorLineWidth / 2 + "px"),
                (n.className = "vis-grid vis-vertical vis-minor " + o)),
            (n.style.width = e + "px"),
            n
          );
        }),
        (n.prototype._repaintMajorLine = function (t, e, i, o) {
          var n = this.dom.redundant.lines.shift();
          n ||
            ((n = document.createElement("div")), this.dom.background.appendChild(n)),
            this.dom.lines.push(n);
          var s = this.props;
          return (
            "top" == i
              ? (n.style.top = "0")
              : (n.style.top = this.body.domProps.top.height + "px"),
            this.options.rtl
              ? ((n.style.left = ""),
                (n.style.right = t - s.majorLineWidth / 2 + "px"),
                (n.className = "vis-grid vis-vertical-rtl vis-major " + o))
              : ((n.style.left = t - s.majorLineWidth / 2 + "px"),
                (n.className = "vis-grid vis-vertical vis-major " + o)),
            (n.style.height = s.majorLineHeight + "px"),
            (n.style.width = e + "px"),
            n
          );
        }),
        (n.prototype._calculateCharSize = function () {
          this.dom.measureCharMinor ||
            ((this.dom.measureCharMinor = document.createElement("DIV")),
            (this.dom.measureCharMinor.className = "vis-text vis-minor vis-measure"),
            (this.dom.measureCharMinor.style.position = "absolute"),
            this.dom.measureCharMinor.appendChild(document.createTextNode("0")),
            this.dom.foreground.appendChild(this.dom.measureCharMinor)),
            (this.props.minorCharHeight = this.dom.measureCharMinor.clientHeight),
            (this.props.minorCharWidth = this.dom.measureCharMinor.clientWidth),
            this.dom.measureCharMajor ||
              ((this.dom.measureCharMajor = document.createElement("DIV")),
              (this.dom.measureCharMajor.className = "vis-text vis-major vis-measure"),
              (this.dom.measureCharMajor.style.position = "absolute"),
              this.dom.measureCharMajor.appendChild(document.createTextNode("0")),
              this.dom.foreground.appendChild(this.dom.measureCharMajor)),
            (this.props.majorCharHeight = this.dom.measureCharMajor.clientHeight),
            (this.props.majorCharWidth = this.dom.measureCharMajor.clientWidth);
        });
      var p = !1;
      t.exports = n;
    },
    function (t, e, i) {
      function o(t) {
        (this.active = !1),
          (this.dom = {container: t}),
          (this.dom.overlay = document.createElement("div")),
          (this.dom.overlay.className = "vis-overlay"),
          this.dom.container.appendChild(this.dom.overlay),
          (this.hammer = a(this.dom.overlay)),
          this.hammer.on("tap", this._onTapOverlay.bind(this));
        var e = this,
          i = [
            "tap",
            "doubletap",
            "press",
            "pinch",
            "pan",
            "panstart",
            "panmove",
            "panend",
          ];
        i.forEach(function (t) {
          e.hammer.on(t, function (t) {
            t.stopPropagation();
          });
        }),
          document &&
            document.body &&
            ((this.onClick = function (i) {
              n(i.target, t) || e.deactivate();
            }),
            document.body.addEventListener("click", this.onClick)),
          void 0 !== this.keycharm && this.keycharm.destroy(),
          (this.keycharm = s()),
          (this.escListener = this.deactivate.bind(this));
      }
      function n(t, e) {
        for (; t; ) {
          if (t === e) return !0;
          t = t.parentNode;
        }
        return !1;
      }
      var s = i(121),
        r = i(94),
        a = i(95),
        h = i(1);
      r(o.prototype),
        (o.current = null),
        (o.prototype.destroy = function () {
          this.deactivate(),
            this.dom.overlay.parentNode.removeChild(this.dom.overlay),
            this.onClick && document.body.removeEventListener("click", this.onClick),
            this.hammer.destroy(),
            (this.hammer = null);
        }),
        (o.prototype.activate = function () {
          o.current && o.current.deactivate(),
            (o.current = this),
            (this.active = !0),
            (this.dom.overlay.style.display = "none"),
            h.addClassName(this.dom.container, "vis-active"),
            this.emit("change"),
            this.emit("activate"),
            this.keycharm.bind("esc", this.escListener);
        }),
        (o.prototype.deactivate = function () {
          (this.active = !1),
            (this.dom.overlay.style.display = ""),
            h.removeClassName(this.dom.container, "vis-active"),
            this.keycharm.unbind("esc", this.escListener),
            this.emit("change"),
            this.emit("deactivate");
        }),
        (o.prototype._onTapOverlay = function (t) {
          this.activate(), t.stopPropagation();
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      var o, n, s;
      !(function (i, r) {
        (n = []),
          (o = r),
          (s = "function" == typeof o ? o.apply(e, n) : o),
          !(void 0 !== s && (t.exports = s));
      })(this, function () {
        function t(t) {
          var e,
            i = (t && t.preventDefault) || !1,
            o = (t && t.container) || window,
            n = {},
            s = {keydown: {}, keyup: {}},
            r = {};
          for (e = 97; e <= 122; e++)
            r[String.fromCharCode(e)] = {code: 65 + (e - 97), shift: !1};
          for (e = 65; e <= 90; e++) r[String.fromCharCode(e)] = {code: e, shift: !0};
          for (e = 0; e <= 9; e++) r["" + e] = {code: 48 + e, shift: !1};
          for (e = 1; e <= 12; e++) r["F" + e] = {code: 111 + e, shift: !1};
          for (e = 0; e <= 9; e++) r["num" + e] = {code: 96 + e, shift: !1};
          (r["num*"] = {code: 106, shift: !1}),
            (r["num+"] = {code: 107, shift: !1}),
            (r["num-"] = {code: 109, shift: !1}),
            (r["num/"] = {code: 111, shift: !1}),
            (r["num."] = {code: 110, shift: !1}),
            (r.left = {code: 37, shift: !1}),
            (r.up = {code: 38, shift: !1}),
            (r.right = {code: 39, shift: !1}),
            (r.down = {code: 40, shift: !1}),
            (r.space = {code: 32, shift: !1}),
            (r.enter = {code: 13, shift: !1}),
            (r.shift = {code: 16, shift: void 0}),
            (r.esc = {code: 27, shift: !1}),
            (r.backspace = {code: 8, shift: !1}),
            (r.tab = {code: 9, shift: !1}),
            (r.ctrl = {code: 17, shift: !1}),
            (r.alt = {code: 18, shift: !1}),
            (r.delete = {code: 46, shift: !1}),
            (r.pageup = {code: 33, shift: !1}),
            (r.pagedown = {code: 34, shift: !1}),
            (r["="] = {code: 187, shift: !1}),
            (r["-"] = {code: 189, shift: !1}),
            (r["]"] = {code: 221, shift: !1}),
            (r["["] = {code: 219, shift: !1});
          var a = function (t) {
              d(t, "keydown");
            },
            h = function (t) {
              d(t, "keyup");
            },
            d = function (t, e) {
              if (void 0 !== s[e][t.keyCode]) {
                for (var o = s[e][t.keyCode], n = 0; n < o.length; n++)
                  void 0 === o[n].shift
                    ? o[n].fn(t)
                    : 1 == o[n].shift && 1 == t.shiftKey
                    ? o[n].fn(t)
                    : 0 == o[n].shift && 0 == t.shiftKey && o[n].fn(t);
                1 == i && t.preventDefault();
              }
            };
          return (
            (n.bind = function (t, e, i) {
              if ((void 0 === i && (i = "keydown"), void 0 === r[t]))
                throw new Error("unsupported key: " + t);
              void 0 === s[i][r[t].code] && (s[i][r[t].code] = []),
                s[i][r[t].code].push({fn: e, shift: r[t].shift});
            }),
            (n.bindAll = function (t, e) {
              void 0 === e && (e = "keydown");
              for (var i in r) r.hasOwnProperty(i) && n.bind(i, t, e);
            }),
            (n.getKey = function (t) {
              for (var e in r)
                if (r.hasOwnProperty(e)) {
                  if (1 == t.shiftKey && 1 == r[e].shift && t.keyCode == r[e].code)
                    return e;
                  if (0 == t.shiftKey && 0 == r[e].shift && t.keyCode == r[e].code)
                    return e;
                  if (t.keyCode == r[e].code && "shift" == e) return e;
                }
              return "unknown key, currently not supported";
            }),
            (n.unbind = function (t, e, i) {
              if ((void 0 === i && (i = "keydown"), void 0 === r[t]))
                throw new Error("unsupported key: " + t);
              if (void 0 !== e) {
                var o = [],
                  n = s[i][r[t].code];
                if (void 0 !== n)
                  for (var a = 0; a < n.length; a++)
                    (n[a].fn == e && n[a].shift == r[t].shift) ||
                      o.push(s[i][r[t].code][a]);
                s[i][r[t].code] = o;
              } else s[i][r[t].code] = [];
            }),
            (n.reset = function () {
              s = {keydown: {}, keyup: {}};
            }),
            (n.destroy = function () {
              (s = {keydown: {}, keyup: {}}),
                o.removeEventListener("keydown", a, !0),
                o.removeEventListener("keyup", h, !0);
            }),
            o.addEventListener("keydown", a, !0),
            o.addEventListener("keyup", h, !0),
            n
          );
        }
        return t;
      });
    },
    function (t, e, i) {
      function o(t, e) {
        (this.body = t),
          (this.defaultOptions = {
            moment: a,
            locales: h,
            locale: "en",
            id: void 0,
            title: void 0,
          }),
          (this.options = s.extend({}, this.defaultOptions)),
          e && e.time ? (this.customTime = e.time) : (this.customTime = new Date()),
          (this.eventParams = {}),
          this.setOptions(e),
          this._create();
      }
      var n = i(95),
        s = i(1),
        r = i(100),
        a = i(82),
        h = i(123);
      (o.prototype = new r()),
        (o.prototype.setOptions = function (t) {
          t &&
            s.selectiveExtend(["moment", "locale", "locales", "id"], this.options, t);
        }),
        (o.prototype._create = function () {
          function t(t) {
            this.body.range._onMouseWheel(t);
          }
          var e = document.createElement("div");
          (e["custom-time"] = this),
            (e.className = "vis-custom-time " + (this.options.id || "")),
            (e.style.position = "absolute"),
            (e.style.top = "0px"),
            (e.style.height = "100%"),
            (this.bar = e);
          var i = document.createElement("div");
          (i.style.position = "relative"),
            (i.style.top = "0px"),
            (i.style.left = "-10px"),
            (i.style.height = "100%"),
            (i.style.width = "20px"),
            i.addEventListener
              ? (i.addEventListener("mousewheel", t.bind(this), !1),
                i.addEventListener("DOMMouseScroll", t.bind(this), !1))
              : i.attachEvent("onmousewheel", t.bind(this)),
            e.appendChild(i),
            (this.hammer = new n(i)),
            this.hammer.on("panstart", this._onDragStart.bind(this)),
            this.hammer.on("panmove", this._onDrag.bind(this)),
            this.hammer.on("panend", this._onDragEnd.bind(this)),
            this.hammer
              .get("pan")
              .set({threshold: 5, direction: n.DIRECTION_HORIZONTAL});
        }),
        (o.prototype.destroy = function () {
          this.hide(), this.hammer.destroy(), (this.hammer = null), (this.body = null);
        }),
        (o.prototype.redraw = function () {
          var t = this.body.dom.backgroundVertical;
          this.bar.parentNode != t &&
            (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar),
            t.appendChild(this.bar));
          var e = this.body.util.toScreen(this.customTime),
            i = this.options.locales[this.options.locale];
          i ||
            (this.warned ||
              (console.log(
                "WARNING: options.locales['" +
                  this.options.locale +
                  "'] not found. See http://visjs.org/docs/timeline/#Localization"
              ),
              (this.warned = !0)),
            (i = this.options.locales.en));
          var o = this.options.title;
          return (
            void 0 === o
              ? ((o =
                  i.time +
                  ": " +
                  this.options
                    .moment(this.customTime)
                    .format("dddd, MMMM Do YYYY, H:mm:ss")),
                (o = o.charAt(0).toUpperCase() + o.substring(1)))
              : "function" == typeof o && (o = o.call(this.customTime)),
            (this.bar.style.left = e + "px"),
            (this.bar.title = o),
            !1
          );
        }),
        (o.prototype.hide = function () {
          this.bar.parentNode && this.bar.parentNode.removeChild(this.bar);
        }),
        (o.prototype.setCustomTime = function (t) {
          (this.customTime = s.convert(t, "Date")), this.redraw();
        }),
        (o.prototype.getCustomTime = function () {
          return new Date(this.customTime.valueOf());
        }),
        (o.prototype.setCustomTitle = function (t) {
          this.options.title = t;
        }),
        (o.prototype._onDragStart = function (t) {
          (this.eventParams.dragging = !0),
            (this.eventParams.customTime = this.customTime),
            t.stopPropagation();
        }),
        (o.prototype._onDrag = function (t) {
          if (this.eventParams.dragging) {
            var e = this.body.util.toScreen(this.eventParams.customTime) + t.deltaX,
              i = this.body.util.toTime(e);
            this.setCustomTime(i),
              this.body.emitter.emit("timechange", {
                id: this.options.id,
                time: new Date(this.customTime.valueOf()),
                event: t,
              }),
              t.stopPropagation();
          }
        }),
        (o.prototype._onDragEnd = function (t) {
          this.eventParams.dragging &&
            (this.body.emitter.emit("timechanged", {
              id: this.options.id,
              time: new Date(this.customTime.valueOf()),
              event: t,
            }),
            t.stopPropagation());
        }),
        (o.customTimeFromTarget = function (t) {
          for (var e = t.target; e; ) {
            if (e.hasOwnProperty("custom-time")) return e["custom-time"];
            e = e.parentNode;
          }
          return null;
        }),
        (t.exports = o);
    },
    function (t, e) {
      (e.en = {current: "current", time: "time"}),
        (e.en_EN = e.en),
        (e.en_US = e.en),
        (e.it = {current: "attuale", time: "tempo"}),
        (e.it_IT = e.it),
        (e.it_CH = e.it),
        (e.nl = {current: "huidige", time: "tijd"}),
        (e.nl_NL = e.nl),
        (e.nl_BE = e.nl),
        (e.de = {current: "Aktuelle", time: "Zeit"}),
        (e.de_DE = e.de),
        (e.fr = {current: "actuel", time: "heure"}),
        (e.fr_FR = e.fr),
        (e.fr_CA = e.fr),
        (e.fr_BE = e.fr),
        (e.es = {current: "corriente", time: "hora"}),
        (e.es_ES = e.es);
    },
    function (t, e, i) {
      function o(t, e) {
        (this.body = t),
          (this.defaultOptions = {
            rtl: !1,
            showCurrentTime: !0,
            moment: r,
            locales: a,
            locale: "en",
          }),
          (this.options = n.extend({}, this.defaultOptions)),
          (this.offset = 0),
          this._create(),
          this.setOptions(e);
      }
      var n = i(1),
        s = i(100),
        r = i(82),
        a = i(123);
      (o.prototype = new s()),
        (o.prototype._create = function () {
          var t = document.createElement("div");
          (t.className = "vis-current-time"),
            (t.style.position = "absolute"),
            (t.style.top = "0px"),
            (t.style.height = "100%"),
            (this.bar = t);
        }),
        (o.prototype.destroy = function () {
          (this.options.showCurrentTime = !1), this.redraw(), (this.body = null);
        }),
        (o.prototype.setOptions = function (t) {
          t &&
            n.selectiveExtend(
              ["rtl", "showCurrentTime", "moment", "locale", "locales"],
              this.options,
              t
            );
        }),
        (o.prototype.redraw = function () {
          if (this.options.showCurrentTime) {
            var t = this.body.dom.backgroundVertical;
            this.bar.parentNode != t &&
              (this.bar.parentNode && this.bar.parentNode.removeChild(this.bar),
              t.appendChild(this.bar),
              this.start());
            var e = this.options.moment(new Date().valueOf() + this.offset),
              i = this.body.util.toScreen(e),
              o = this.options.locales[this.options.locale];
            o ||
              (this.warned ||
                (console.log(
                  "WARNING: options.locales['" +
                    this.options.locale +
                    "'] not found. See http://visjs.org/docs/timeline/#Localization"
                ),
                (this.warned = !0)),
              (o = this.options.locales.en));
            var n =
              o.current + " " + o.time + ": " + e.format("dddd, MMMM Do YYYY, H:mm:ss");
            (n = n.charAt(0).toUpperCase() + n.substring(1)),
              this.options.rtl
                ? (this.bar.style.right = i + "px")
                : (this.bar.style.left = i + "px"),
              (this.bar.title = n);
          } else
            this.bar.parentNode && this.bar.parentNode.removeChild(this.bar),
              this.stop();
          return !1;
        }),
        (o.prototype.start = function () {
          function t() {
            e.stop();
            var i = e.body.range.conversion(e.body.domProps.center.width).scale,
              o = 1 / i / 10;
            o < 30 && (o = 30),
              o > 1e3 && (o = 1e3),
              e.redraw(),
              e.body.emitter.emit("currentTimeTick"),
              (e.currentTimeTimer = setTimeout(t, o));
          }
          var e = this;
          t();
        }),
        (o.prototype.stop = function () {
          void 0 !== this.currentTimeTimer &&
            (clearTimeout(this.currentTimeTimer), delete this.currentTimeTimer);
        }),
        (o.prototype.setCurrentTime = function (t) {
          var e = n.convert(t, "Date").valueOf(),
            i = new Date().valueOf();
          (this.offset = e - i), this.redraw();
        }),
        (o.prototype.getCurrentTime = function () {
          return new Date(new Date().valueOf() + this.offset);
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      Object.defineProperty(e, "__esModule", {value: !0}), (e.printStyle = void 0);
      var n = i(89),
        s = o(n),
        r = i(62),
        a = o(r),
        h = i(58),
        d = o(h),
        l = i(114),
        u = o(l),
        p = i(115),
        c = o(p),
        f = i(1),
        m = !1,
        g = void 0,
        v = "background: #FFeeee; color: #dd0000",
        y = (function () {
          function t() {
            (0, u.default)(this, t);
          }
          return (
            (0, c.default)(t, null, [
              {
                key: "validate",
                value: function (e, i, o) {
                  (m = !1), (g = i);
                  var n = i;
                  return void 0 !== o && (n = i[o]), t.parse(e, n, []), m;
                },
              },
              {
                key: "parse",
                value: function (e, i, o) {
                  for (var n in e) e.hasOwnProperty(n) && t.check(n, e, i, o);
                },
              },
              {
                key: "check",
                value: function (e, i, o, n) {
                  void 0 === o[e] && void 0 === o.__any__
                    ? t.getSuggestion(e, o, n)
                    : void 0 === o[e] && void 0 !== o.__any__
                    ? "object" === t.getType(i[e]) && void 0 !== o.__any__.__type__
                      ? t.checkFields(e, i, o, "__any__", o.__any__.__type__, n)
                      : t.checkFields(e, i, o, "__any__", o.__any__, n)
                    : void 0 !== o[e].__type__
                    ? t.checkFields(e, i, o, e, o[e].__type__, n)
                    : t.checkFields(e, i, o, e, o[e], n);
                },
              },
              {
                key: "checkFields",
                value: function (e, i, o, n, s, r) {
                  var a = t.getType(i[e]),
                    h = s[a];
                  void 0 !== h
                    ? "array" === t.getType(h) && h.indexOf(i[e]) === -1
                      ? (console.log(
                          '%cInvalid option detected in "' +
                            e +
                            '". Allowed values are:' +
                            t.print(h) +
                            ' not "' +
                            i[e] +
                            '". ' +
                            t.printLocation(r, e),
                          v
                        ),
                        (m = !0))
                      : "object" === a &&
                        "__any__" !== n &&
                        ((r = f.copyAndExtendArray(r, e)), t.parse(i[e], o[n], r))
                    : void 0 === s.any &&
                      (console.log(
                        '%cInvalid type received for "' +
                          e +
                          '". Expected: ' +
                          t.print((0, d.default)(s)) +
                          ". Received [" +
                          a +
                          '] "' +
                          i[e] +
                          '"' +
                          t.printLocation(r, e),
                        v
                      ),
                      (m = !0));
                },
              },
              {
                key: "getType",
                value: function (t) {
                  var e = "undefined" == typeof t ? "undefined" : (0, a.default)(t);
                  return "object" === e
                    ? null === t
                      ? "null"
                      : t instanceof Boolean
                      ? "boolean"
                      : t instanceof Number
                      ? "number"
                      : t instanceof String
                      ? "string"
                      : Array.isArray(t)
                      ? "array"
                      : t instanceof Date
                      ? "date"
                      : void 0 !== t.nodeType
                      ? "dom"
                      : t._isAMomentObject === !0
                      ? "moment"
                      : "object"
                    : "number" === e
                    ? "number"
                    : "boolean" === e
                    ? "boolean"
                    : "string" === e
                    ? "string"
                    : void 0 === e
                    ? "undefined"
                    : e;
                },
              },
              {
                key: "getSuggestion",
                value: function (e, i, o) {
                  var n = t.findInOptions(e, i, o, !1),
                    s = t.findInOptions(e, g, [], !0),
                    r = 8,
                    a = 4;
                  void 0 !== n.indexMatch
                    ? console.log(
                        '%cUnknown option detected: "' +
                          e +
                          '" in ' +
                          t.printLocation(n.path, e, "") +
                          'Perhaps it was incomplete? Did you mean: "' +
                          n.indexMatch +
                          '"?\n\n',
                        v
                      )
                    : s.distance <= a && n.distance > s.distance
                    ? console.log(
                        '%cUnknown option detected: "' +
                          e +
                          '" in ' +
                          t.printLocation(n.path, e, "") +
                          "Perhaps it was misplaced? Matching option found at: " +
                          t.printLocation(s.path, s.closestMatch, ""),
                        v
                      )
                    : n.distance <= r
                    ? console.log(
                        '%cUnknown option detected: "' +
                          e +
                          '". Did you mean "' +
                          n.closestMatch +
                          '"?' +
                          t.printLocation(n.path, e),
                        v
                      )
                    : console.log(
                        '%cUnknown option detected: "' +
                          e +
                          '". Did you mean one of these: ' +
                          t.print((0, d.default)(i)) +
                          t.printLocation(o, e),
                        v
                      ),
                    (m = !0);
                },
              },
              {
                key: "findInOptions",
                value: function (e, i, o) {
                  var n =
                      arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    s = 1e9,
                    r = "",
                    a = [],
                    h = e.toLowerCase(),
                    d = void 0;
                  for (var l in i) {
                    var u = void 0;
                    if (void 0 !== i[l].__type__ && n === !0) {
                      var p = t.findInOptions(e, i[l], f.copyAndExtendArray(o, l));
                      s > p.distance &&
                        ((r = p.closestMatch),
                        (a = p.path),
                        (s = p.distance),
                        (d = p.indexMatch));
                    } else
                      l.toLowerCase().indexOf(h) !== -1 && (d = l),
                        (u = t.levenshteinDistance(e, l)),
                        s > u && ((r = l), (a = f.copyArray(o)), (s = u));
                  }
                  return {closestMatch: r, path: a, distance: s, indexMatch: d};
                },
              },
              {
                key: "printLocation",
                value: function (t, e) {
                  for (
                    var i =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : "Problem value found at: \n",
                      o = "\n\n" + i + "options = {\n",
                      n = 0;
                    n < t.length;
                    n++
                  ) {
                    for (var s = 0; s < n + 1; s++) o += "  ";
                    o += t[n] + ": {\n";
                  }
                  for (var r = 0; r < t.length + 1; r++) o += "  ";
                  o += e + "\n";
                  for (var a = 0; a < t.length + 1; a++) {
                    for (var h = 0; h < t.length - a; h++) o += "  ";
                    o += "}\n";
                  }
                  return o + "\n\n";
                },
              },
              {
                key: "print",
                value: function (t) {
                  return (0, s.default)(t)
                    .replace(/(\")|(\[)|(\])|(,"__type__")/g, "")
                    .replace(/(\,)/g, ", ");
                },
              },
              {
                key: "levenshteinDistance",
                value: function (t, e) {
                  if (0 === t.length) return e.length;
                  if (0 === e.length) return t.length;
                  var i,
                    o = [];
                  for (i = 0; i <= e.length; i++) o[i] = [i];
                  var n;
                  for (n = 0; n <= t.length; n++) o[0][n] = n;
                  for (i = 1; i <= e.length; i++)
                    for (n = 1; n <= t.length; n++)
                      e.charAt(i - 1) == t.charAt(n - 1)
                        ? (o[i][n] = o[i - 1][n - 1])
                        : (o[i][n] = Math.min(
                            o[i - 1][n - 1] + 1,
                            Math.min(o[i][n - 1] + 1, o[i - 1][n] + 1)
                          ));
                  return o[e.length][t.length];
                },
              },
            ]),
            t
          );
        })();
      (e.default = y), (e.printStyle = v);
    },
    function (t, e) {
      Object.defineProperty(e, "__esModule", {value: !0});
      var i = "string",
        o = "boolean",
        n = "number",
        s = "array",
        r = "date",
        a = "object",
        h = "dom",
        d = "moment",
        l = "any",
        u = {
          configure: {
            enabled: {boolean: o},
            filter: {boolean: o, function: "function"},
            container: {dom: h},
            __type__: {object: a, boolean: o, function: "function"},
          },
          align: {string: i},
          rtl: {boolean: o, undefined: "undefined"},
          rollingMode: {
            follow: {boolean: o},
            offset: {number: n, undefined: "undefined"},
            __type__: {object: a},
          },
          verticalScroll: {boolean: o, undefined: "undefined"},
          horizontalScroll: {boolean: o, undefined: "undefined"},
          autoResize: {boolean: o},
          throttleRedraw: {number: n},
          clickToUse: {boolean: o},
          dataAttributes: {string: i, array: s},
          editable: {
            add: {boolean: o, undefined: "undefined"},
            remove: {boolean: o, undefined: "undefined"},
            updateGroup: {boolean: o, undefined: "undefined"},
            updateTime: {boolean: o, undefined: "undefined"},
            overrideItems: {boolean: o, undefined: "undefined"},
            __type__: {boolean: o, object: a},
          },
          end: {number: n, date: r, string: i, moment: d},
          format: {
            minorLabels: {
              millisecond: {string: i, undefined: "undefined"},
              second: {string: i, undefined: "undefined"},
              minute: {string: i, undefined: "undefined"},
              hour: {string: i, undefined: "undefined"},
              weekday: {string: i, undefined: "undefined"},
              day: {string: i, undefined: "undefined"},
              week: {string: i, undefined: "undefined"},
              month: {string: i, undefined: "undefined"},
              year: {string: i, undefined: "undefined"},
              __type__: {object: a, function: "function"},
            },
            majorLabels: {
              millisecond: {string: i, undefined: "undefined"},
              second: {string: i, undefined: "undefined"},
              minute: {string: i, undefined: "undefined"},
              hour: {string: i, undefined: "undefined"},
              weekday: {string: i, undefined: "undefined"},
              day: {string: i, undefined: "undefined"},
              week: {string: i, undefined: "undefined"},
              month: {string: i, undefined: "undefined"},
              year: {string: i, undefined: "undefined"},
              __type__: {object: a, function: "function"},
            },
            __type__: {object: a},
          },
          moment: {function: "function"},
          groupOrder: {string: i, function: "function"},
          groupEditable: {
            add: {boolean: o, undefined: "undefined"},
            remove: {boolean: o, undefined: "undefined"},
            order: {boolean: o, undefined: "undefined"},
            __type__: {boolean: o, object: a},
          },
          groupOrderSwap: {function: "function"},
          height: {string: i, number: n},
          hiddenDates: {
            start: {date: r, number: n, string: i, moment: d},
            end: {date: r, number: n, string: i, moment: d},
            repeat: {string: i},
            __type__: {object: a, array: s},
          },
          itemsAlwaysDraggable: {
            item: {boolean: o, undefined: "undefined"},
            range: {boolean: o, undefined: "undefined"},
            __type__: {boolean: o, object: a},
          },
          locale: {string: i},
          locales: {__any__: {any: l}, __type__: {object: a}},
          margin: {
            axis: {number: n},
            item: {
              horizontal: {number: n, undefined: "undefined"},
              vertical: {number: n, undefined: "undefined"},
              __type__: {object: a, number: n},
            },
            __type__: {object: a, number: n},
          },
          max: {date: r, number: n, string: i, moment: d},
          maxHeight: {number: n, string: i},
          maxMinorChars: {number: n},
          min: {date: r, number: n, string: i, moment: d},
          minHeight: {number: n, string: i},
          moveable: {boolean: o},
          multiselect: {boolean: o},
          multiselectPerGroup: {boolean: o},
          onAdd: {function: "function"},
          onUpdate: {function: "function"},
          onMove: {function: "function"},
          onMoving: {function: "function"},
          onRemove: {function: "function"},
          onAddGroup: {function: "function"},
          onMoveGroup: {function: "function"},
          onRemoveGroup: {function: "function"},
          order: {function: "function"},
          orientation: {
            axis: {string: i, undefined: "undefined"},
            item: {string: i, undefined: "undefined"},
            __type__: {string: i, object: a},
          },
          selectable: {boolean: o},
          showCurrentTime: {boolean: o},
          showMajorLabels: {boolean: o},
          showMinorLabels: {boolean: o},
          stack: {boolean: o},
          stackSubgroups: {
            boolean: o,
          },
          snap: {function: "function", null: "null"},
          start: {date: r, number: n, string: i, moment: d},
          template: {function: "function"},
          groupTemplate: {function: "function"},
          visibleFrameTemplate: {string: i, function: "function"},
          showTooltips: {boolean: o},
          tooltip: {
            followMouse: {boolean: o},
            overflowMethod: {string: ["cap", "flip"]},
            __type__: {object: a},
          },
          tooltipOnItemUpdateTime: {
            template: {function: "function"},
            __type__: {boolean: o, object: a},
          },
          timeAxis: {
            scale: {string: i, undefined: "undefined"},
            step: {number: n, undefined: "undefined"},
            __type__: {object: a},
          },
          type: {string: i},
          width: {string: i, number: n},
          zoomable: {boolean: o},
          zoomKey: {string: ["ctrlKey", "altKey", "metaKey", ""]},
          zoomMax: {number: n},
          zoomMin: {number: n},
          __type__: {object: a},
        },
        p = {
          global: {
            align: ["center", "left", "right"],
            direction: !1,
            autoResize: !0,
            clickToUse: !1,
            editable: {add: !1, remove: !1, updateGroup: !1, updateTime: !1},
            end: "",
            format: {
              minorLabels: {
                millisecond: "SSS",
                second: "s",
                minute: "HH:mm",
                hour: "HH:mm",
                weekday: "ddd D",
                day: "D",
                week: "w",
                month: "MMM",
                year: "YYYY",
              },
              majorLabels: {
                millisecond: "HH:mm:ss",
                second: "D MMMM HH:mm",
                minute: "ddd D MMMM",
                hour: "ddd D MMMM",
                weekday: "MMMM YYYY",
                day: "MMMM YYYY",
                week: "MMMM YYYY",
                month: "YYYY",
                year: "",
              },
            },
            groupsDraggable: !1,
            height: "",
            locale: "",
            margin: {
              axis: [20, 0, 100, 1],
              item: {horizontal: [10, 0, 100, 1], vertical: [10, 0, 100, 1]},
            },
            max: "",
            maxHeight: "",
            maxMinorChars: [7, 0, 20, 1],
            min: "",
            minHeight: "",
            moveable: !1,
            multiselect: !1,
            multiselectPerGroup: !1,
            orientation: {axis: ["both", "bottom", "top"], item: ["bottom", "top"]},
            selectable: !0,
            showCurrentTime: !1,
            showMajorLabels: !0,
            showMinorLabels: !0,
            stack: !0,
            stackSubgroups: !0,
            start: "",
            showTooltips: !0,
            tooltip: {followMouse: !1, overflowMethod: "flip"},
            tooltipOnItemUpdateTime: !1,
            type: ["box", "point", "range", "background"],
            width: "100%",
            zoomable: !0,
            zoomKey: ["ctrlKey", "altKey", "metaKey", ""],
            zoomMax: [31536e10, 10, 31536e10, 1],
            zoomMin: [10, 10, 31536e10, 1],
          },
        };
      (e.allOptions = u), (e.configureOptions = p);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      Object.defineProperty(e, "__esModule", {value: !0});
      var n = i(89),
        s = o(n),
        r = i(62),
        a = o(r),
        h = i(114),
        d = o(h),
        l = i(115),
        u = o(l),
        p = i(1),
        c = i(128).default,
        f = (function () {
          function t(e, i, o) {
            var n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1;
            (0, d.default)(this, t),
              (this.parent = e),
              (this.changedOptions = []),
              (this.container = i),
              (this.allowCreation = !1),
              (this.options = {}),
              (this.initialized = !1),
              (this.popupCounter = 0),
              (this.defaultOptions = {
                enabled: !1,
                filter: !0,
                container: void 0,
                showButton: !0,
              }),
              p.extend(this.options, this.defaultOptions),
              (this.configureOptions = o),
              (this.moduleOptions = {}),
              (this.domElements = []),
              (this.popupDiv = {}),
              (this.popupLimit = 5),
              (this.popupHistory = {}),
              (this.colorPicker = new c(n)),
              (this.wrapper = void 0);
          }
          return (
            (0, u.default)(t, [
              {
                key: "setOptions",
                value: function (t) {
                  if (void 0 !== t) {
                    (this.popupHistory = {}), this._removePopup();
                    var e = !0;
                    "string" == typeof t
                      ? (this.options.filter = t)
                      : t instanceof Array
                      ? (this.options.filter = t.join())
                      : "object" ===
                        ("undefined" == typeof t ? "undefined" : (0, a.default)(t))
                      ? (void 0 !== t.container &&
                          (this.options.container = t.container),
                        void 0 !== t.filter && (this.options.filter = t.filter),
                        void 0 !== t.showButton &&
                          (this.options.showButton = t.showButton),
                        void 0 !== t.enabled && (e = t.enabled))
                      : "boolean" == typeof t
                      ? ((this.options.filter = !0), (e = t))
                      : "function" == typeof t && ((this.options.filter = t), (e = !0)),
                      this.options.filter === !1 && (e = !1),
                      (this.options.enabled = e);
                  }
                  this._clean();
                },
              },
              {
                key: "setModuleOptions",
                value: function (t) {
                  (this.moduleOptions = t),
                    this.options.enabled === !0 &&
                      (this._clean(),
                      void 0 !== this.options.container &&
                        (this.container = this.options.container),
                      this._create());
                },
              },
              {
                key: "_create",
                value: function () {
                  var t = this;
                  this._clean(), (this.changedOptions = []);
                  var e = this.options.filter,
                    i = 0,
                    o = !1;
                  for (var n in this.configureOptions)
                    this.configureOptions.hasOwnProperty(n) &&
                      ((this.allowCreation = !1),
                      (o = !1),
                      "function" == typeof e
                        ? ((o = e(n, [])),
                          (o =
                            o || this._handleObject(this.configureOptions[n], [n], !0)))
                        : (e !== !0 && e.indexOf(n) === -1) || (o = !0),
                      o !== !1 &&
                        ((this.allowCreation = !0),
                        i > 0 && this._makeItem([]),
                        this._makeHeader(n),
                        this._handleObject(this.configureOptions[n], [n])),
                      i++);
                  if (this.options.showButton === !0) {
                    var s = document.createElement("div");
                    (s.className = "vis-configuration vis-config-button"),
                      (s.innerHTML = "generate options"),
                      (s.onclick = function () {
                        t._printOptions();
                      }),
                      (s.onmouseover = function () {
                        s.className = "vis-configuration vis-config-button hover";
                      }),
                      (s.onmouseout = function () {
                        s.className = "vis-configuration vis-config-button";
                      }),
                      (this.optionsContainer = document.createElement("div")),
                      (this.optionsContainer.className =
                        "vis-configuration vis-config-option-container"),
                      this.domElements.push(this.optionsContainer),
                      this.domElements.push(s);
                  }
                  this._push();
                },
              },
              {
                key: "_push",
                value: function () {
                  (this.wrapper = document.createElement("div")),
                    (this.wrapper.className = "vis-configuration-wrapper"),
                    this.container.appendChild(this.wrapper);
                  for (var t = 0; t < this.domElements.length; t++)
                    this.wrapper.appendChild(this.domElements[t]);
                  this._showPopupIfNeeded();
                },
              },
              {
                key: "_clean",
                value: function () {
                  for (var t = 0; t < this.domElements.length; t++)
                    this.wrapper.removeChild(this.domElements[t]);
                  void 0 !== this.wrapper &&
                    (this.container.removeChild(this.wrapper), (this.wrapper = void 0)),
                    (this.domElements = []),
                    this._removePopup();
                },
              },
              {
                key: "_getValue",
                value: function (t) {
                  for (var e = this.moduleOptions, i = 0; i < t.length; i++) {
                    if (void 0 === e[t[i]]) {
                      e = void 0;
                      break;
                    }
                    e = e[t[i]];
                  }
                  return e;
                },
              },
              {
                key: "_makeItem",
                value: function (t) {
                  if (this.allowCreation === !0) {
                    var e = document.createElement("div");
                    e.className =
                      "vis-configuration vis-config-item vis-config-s" + t.length;
                    for (
                      var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), n = 1;
                      n < i;
                      n++
                    )
                      o[n - 1] = arguments[n];
                    return (
                      o.forEach(function (t) {
                        e.appendChild(t);
                      }),
                      this.domElements.push(e),
                      this.domElements.length
                    );
                  }
                  return 0;
                },
              },
              {
                key: "_makeHeader",
                value: function (t) {
                  var e = document.createElement("div");
                  (e.className = "vis-configuration vis-config-header"),
                    (e.innerHTML = t),
                    this._makeItem([], e);
                },
              },
              {
                key: "_makeLabel",
                value: function (t, e) {
                  var i =
                      arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = document.createElement("div");
                  return (
                    (o.className =
                      "vis-configuration vis-config-label vis-config-s" + e.length),
                    i === !0
                      ? (o.innerHTML = "<i><b>" + t + ":</b></i>")
                      : (o.innerHTML = t + ":"),
                    o
                  );
                },
              },
              {
                key: "_makeDropdown",
                value: function (t, e, i) {
                  var o = document.createElement("select");
                  o.className = "vis-configuration vis-config-select";
                  var n = 0;
                  void 0 !== e && t.indexOf(e) !== -1 && (n = t.indexOf(e));
                  for (var s = 0; s < t.length; s++) {
                    var r = document.createElement("option");
                    (r.value = t[s]),
                      s === n && (r.selected = "selected"),
                      (r.innerHTML = t[s]),
                      o.appendChild(r);
                  }
                  var a = this;
                  o.onchange = function () {
                    a._update(this.value, i);
                  };
                  var h = this._makeLabel(i[i.length - 1], i);
                  this._makeItem(i, h, o);
                },
              },
              {
                key: "_makeRange",
                value: function (t, e, i) {
                  var o = t[0],
                    n = t[1],
                    s = t[2],
                    r = t[3],
                    a = document.createElement("input");
                  a.className = "vis-configuration vis-config-range";
                  try {
                    (a.type = "range"), (a.min = n), (a.max = s);
                  } catch (t) {}
                  a.step = r;
                  var h = "",
                    d = 0;
                  if (void 0 !== e) {
                    var l = 1.2;
                    e < 0 && e * l < n
                      ? ((a.min = Math.ceil(e * l)),
                        (d = a.min),
                        (h = "range increased"))
                      : e / l < n &&
                        ((a.min = Math.ceil(e / l)),
                        (d = a.min),
                        (h = "range increased")),
                      e * l > s &&
                        1 !== s &&
                        ((a.max = Math.ceil(e * l)),
                        (d = a.max),
                        (h = "range increased")),
                      (a.value = e);
                  } else a.value = o;
                  var u = document.createElement("input");
                  (u.className = "vis-configuration vis-config-rangeinput"),
                    (u.value = a.value);
                  var p = this;
                  (a.onchange = function () {
                    (u.value = this.value), p._update(Number(this.value), i);
                  }),
                    (a.oninput = function () {
                      u.value = this.value;
                    });
                  var c = this._makeLabel(i[i.length - 1], i),
                    f = this._makeItem(i, c, a, u);
                  "" !== h &&
                    this.popupHistory[f] !== d &&
                    ((this.popupHistory[f] = d), this._setupPopup(h, f));
                },
              },
              {
                key: "_setupPopup",
                value: function (t, e) {
                  var i = this;
                  if (
                    this.initialized === !0 &&
                    this.allowCreation === !0 &&
                    this.popupCounter < this.popupLimit
                  ) {
                    var o = document.createElement("div");
                    (o.id = "vis-configuration-popup"),
                      (o.className = "vis-configuration-popup"),
                      (o.innerHTML = t),
                      (o.onclick = function () {
                        i._removePopup();
                      }),
                      (this.popupCounter += 1),
                      (this.popupDiv = {html: o, index: e});
                  }
                },
              },
              {
                key: "_removePopup",
                value: function () {
                  void 0 !== this.popupDiv.html &&
                    (this.popupDiv.html.parentNode.removeChild(this.popupDiv.html),
                    clearTimeout(this.popupDiv.hideTimeout),
                    clearTimeout(this.popupDiv.deleteTimeout),
                    (this.popupDiv = {}));
                },
              },
              {
                key: "_showPopupIfNeeded",
                value: function () {
                  var t = this;
                  if (void 0 !== this.popupDiv.html) {
                    var e = this.domElements[this.popupDiv.index],
                      i = e.getBoundingClientRect();
                    (this.popupDiv.html.style.left = i.left + "px"),
                      (this.popupDiv.html.style.top = i.top - 30 + "px"),
                      document.body.appendChild(this.popupDiv.html),
                      (this.popupDiv.hideTimeout = setTimeout(function () {
                        t.popupDiv.html.style.opacity = 0;
                      }, 1500)),
                      (this.popupDiv.deleteTimeout = setTimeout(function () {
                        t._removePopup();
                      }, 1800));
                  }
                },
              },
              {
                key: "_makeCheckbox",
                value: function (t, e, i) {
                  var o = document.createElement("input");
                  (o.type = "checkbox"),
                    (o.className = "vis-configuration vis-config-checkbox"),
                    (o.checked = t),
                    void 0 !== e &&
                      ((o.checked = e),
                      e !== t &&
                        ("object" ===
                        ("undefined" == typeof t ? "undefined" : (0, a.default)(t))
                          ? e !== t.enabled &&
                            this.changedOptions.push({path: i, value: e})
                          : this.changedOptions.push({path: i, value: e})));
                  var n = this;
                  o.onchange = function () {
                    n._update(this.checked, i);
                  };
                  var s = this._makeLabel(i[i.length - 1], i);
                  this._makeItem(i, s, o);
                },
              },
              {
                key: "_makeTextInput",
                value: function (t, e, i) {
                  var o = document.createElement("input");
                  (o.type = "text"),
                    (o.className = "vis-configuration vis-config-text"),
                    (o.value = e),
                    e !== t && this.changedOptions.push({path: i, value: e});
                  var n = this;
                  o.onchange = function () {
                    n._update(this.value, i);
                  };
                  var s = this._makeLabel(i[i.length - 1], i);
                  this._makeItem(i, s, o);
                },
              },
              {
                key: "_makeColorField",
                value: function (t, e, i) {
                  var o = this,
                    n = t[1],
                    s = document.createElement("div");
                  (e = void 0 === e ? n : e),
                    "none" !== e
                      ? ((s.className = "vis-configuration vis-config-colorBlock"),
                        (s.style.backgroundColor = e))
                      : (s.className = "vis-configuration vis-config-colorBlock none"),
                    (e = void 0 === e ? n : e),
                    (s.onclick = function () {
                      o._showColorPicker(e, s, i);
                    });
                  var r = this._makeLabel(i[i.length - 1], i);
                  this._makeItem(i, r, s);
                },
              },
              {
                key: "_showColorPicker",
                value: function (t, e, i) {
                  var o = this;
                  (e.onclick = function () {}),
                    this.colorPicker.insertTo(e),
                    this.colorPicker.show(),
                    this.colorPicker.setColor(t),
                    this.colorPicker.setUpdateCallback(function (t) {
                      var n = "rgba(" + t.r + "," + t.g + "," + t.b + "," + t.a + ")";
                      (e.style.backgroundColor = n), o._update(n, i);
                    }),
                    this.colorPicker.setCloseCallback(function () {
                      e.onclick = function () {
                        o._showColorPicker(t, e, i);
                      };
                    });
                },
              },
              {
                key: "_handleObject",
                value: function (t) {
                  var e =
                      arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : [],
                    i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    o = !1,
                    n = this.options.filter,
                    s = !1;
                  for (var r in t)
                    if (t.hasOwnProperty(r)) {
                      o = !0;
                      var a = t[r],
                        h = p.copyAndExtendArray(e, r);
                      if (
                        ("function" == typeof n &&
                          ((o = n(r, e)),
                          o === !1 &&
                            !(a instanceof Array) &&
                            "string" != typeof a &&
                            "boolean" != typeof a &&
                            a instanceof Object &&
                            ((this.allowCreation = !1),
                            (o = this._handleObject(a, h, !0)),
                            (this.allowCreation = i === !1))),
                        o !== !1)
                      ) {
                        s = !0;
                        var d = this._getValue(h);
                        if (a instanceof Array) this._handleArray(a, d, h);
                        else if ("string" == typeof a) this._makeTextInput(a, d, h);
                        else if ("boolean" == typeof a) this._makeCheckbox(a, d, h);
                        else if (a instanceof Object) {
                          var l = !0;
                          if (
                            (e.indexOf("physics") !== -1 &&
                              this.moduleOptions.physics.solver !== r &&
                              (l = !1),
                            l === !0)
                          )
                            if (void 0 !== a.enabled) {
                              var u = p.copyAndExtendArray(h, "enabled"),
                                c = this._getValue(u);
                              if (c === !0) {
                                var f = this._makeLabel(r, h, !0);
                                this._makeItem(h, f),
                                  (s = this._handleObject(a, h) || s);
                              } else this._makeCheckbox(a, c, h);
                            } else {
                              var m = this._makeLabel(r, h, !0);
                              this._makeItem(h, m), (s = this._handleObject(a, h) || s);
                            }
                        } else console.error("dont know how to handle", a, r, h);
                      }
                    }
                  return s;
                },
              },
              {
                key: "_handleArray",
                value: function (t, e, i) {
                  "string" == typeof t[0] && "color" === t[0]
                    ? (this._makeColorField(t, e, i),
                      t[1] !== e && this.changedOptions.push({path: i, value: e}))
                    : "string" == typeof t[0]
                    ? (this._makeDropdown(t, e, i),
                      t[0] !== e && this.changedOptions.push({path: i, value: e}))
                    : "number" == typeof t[0] &&
                      (this._makeRange(t, e, i),
                      t[0] !== e &&
                        this.changedOptions.push({path: i, value: Number(e)}));
                },
              },
              {
                key: "_update",
                value: function (t, e) {
                  var i = this._constructOptions(t, e);
                  this.parent.body &&
                    this.parent.body.emitter &&
                    this.parent.body.emitter.emit &&
                    this.parent.body.emitter.emit("configChange", i),
                    (this.initialized = !0),
                    this.parent.setOptions(i);
                },
              },
              {
                key: "_constructOptions",
                value: function (t, e) {
                  var i =
                      arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {},
                    o = i;
                  (t = "true" === t || t), (t = "false" !== t && t);
                  for (var n = 0; n < e.length; n++)
                    "global" !== e[n] &&
                      (void 0 === o[e[n]] && (o[e[n]] = {}),
                      n !== e.length - 1 ? (o = o[e[n]]) : (o[e[n]] = t));
                  return i;
                },
              },
              {
                key: "_printOptions",
                value: function () {
                  var t = this.getOptions();
                  this.optionsContainer.innerHTML =
                    "<pre>var options = " + (0, s.default)(t, null, 2) + "</pre>";
                },
              },
              {
                key: "getOptions",
                value: function () {
                  for (var t = {}, e = 0; e < this.changedOptions.length; e++)
                    this._constructOptions(
                      this.changedOptions[e].value,
                      this.changedOptions[e].path,
                      t
                    );
                  return t;
                },
              },
            ]),
            t
          );
        })();
      e.default = f;
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      Object.defineProperty(e, "__esModule", {value: !0});
      var n = i(89),
        s = o(n),
        r = i(114),
        a = o(r),
        h = i(115),
        d = o(h),
        l = i(95),
        u = i(99),
        p = i(1),
        c = (function () {
          function t() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            (0, a.default)(this, t),
              (this.pixelRatio = e),
              (this.generated = !1),
              (this.centerCoordinates = {x: 144.5, y: 144.5}),
              (this.r = 289 * 0.49),
              (this.color = {r: 255, g: 255, b: 255, a: 1}),
              (this.hueCircle = void 0),
              (this.initialColor = {r: 255, g: 255, b: 255, a: 1}),
              (this.previousColor = void 0),
              (this.applied = !1),
              (this.updateCallback = function () {}),
              (this.closeCallback = function () {}),
              this._create();
          }
          return (
            (0, d.default)(t, [
              {
                key: "insertTo",
                value: function (t) {
                  void 0 !== this.hammer &&
                    (this.hammer.destroy(), (this.hammer = void 0)),
                    (this.container = t),
                    this.container.appendChild(this.frame),
                    this._bindHammer(),
                    this._setSize();
                },
              },
              {
                key: "setUpdateCallback",
                value: function (t) {
                  if ("function" != typeof t)
                    throw new Error(
                      "Function attempted to set as colorPicker update callback is not a function."
                    );
                  this.updateCallback = t;
                },
              },
              {
                key: "setCloseCallback",
                value: function (t) {
                  if ("function" != typeof t)
                    throw new Error(
                      "Function attempted to set as colorPicker closing callback is not a function."
                    );
                  this.closeCallback = t;
                },
              },
              {
                key: "_isColorString",
                value: function (t) {
                  var e = {
                    black: "#000000",
                    navy: "#000080",
                    darkblue: "#00008B",
                    mediumblue: "#0000CD",
                    blue: "#0000FF",
                    darkgreen: "#006400",
                    green: "#008000",
                    teal: "#008080",
                    darkcyan: "#008B8B",
                    deepskyblue: "#00BFFF",
                    darkturquoise: "#00CED1",
                    mediumspringgreen: "#00FA9A",
                    lime: "#00FF00",
                    springgreen: "#00FF7F",
                    aqua: "#00FFFF",
                    cyan: "#00FFFF",
                    midnightblue: "#191970",
                    dodgerblue: "#1E90FF",
                    lightseagreen: "#20B2AA",
                    forestgreen: "#228B22",
                    seagreen: "#2E8B57",
                    darkslategray: "#2F4F4F",
                    limegreen: "#32CD32",
                    mediumseagreen: "#3CB371",
                    turquoise: "#40E0D0",
                    royalblue: "#4169E1",
                    steelblue: "#4682B4",
                    darkslateblue: "#483D8B",
                    mediumturquoise: "#48D1CC",
                    indigo: "#4B0082",
                    darkolivegreen: "#556B2F",
                    cadetblue: "#5F9EA0",
                    cornflowerblue: "#6495ED",
                    mediumaquamarine: "#66CDAA",
                    dimgray: "#696969",
                    slateblue: "#6A5ACD",
                    olivedrab: "#6B8E23",
                    slategray: "#708090",
                    lightslategray: "#778899",
                    mediumslateblue: "#7B68EE",
                    lawngreen: "#7CFC00",
                    chartreuse: "#7FFF00",
                    aquamarine: "#7FFFD4",
                    maroon: "#800000",
                    purple: "#800080",
                    olive: "#808000",
                    gray: "#808080",
                    skyblue: "#87CEEB",
                    lightskyblue: "#87CEFA",
                    blueviolet: "#8A2BE2",
                    darkred: "#8B0000",
                    darkmagenta: "#8B008B",
                    saddlebrown: "#8B4513",
                    darkseagreen: "#8FBC8F",
                    lightgreen: "#90EE90",
                    mediumpurple: "#9370D8",
                    darkviolet: "#9400D3",
                    palegreen: "#98FB98",
                    darkorchid: "#9932CC",
                    yellowgreen: "#9ACD32",
                    sienna: "#A0522D",
                    brown: "#A52A2A",
                    darkgray: "#A9A9A9",
                    lightblue: "#ADD8E6",
                    greenyellow: "#ADFF2F",
                    paleturquoise: "#AFEEEE",
                    lightsteelblue: "#B0C4DE",
                    powderblue: "#B0E0E6",
                    firebrick: "#B22222",
                    darkgoldenrod: "#B8860B",
                    mediumorchid: "#BA55D3",
                    rosybrown: "#BC8F8F",
                    darkkhaki: "#BDB76B",
                    silver: "#C0C0C0",
                    mediumvioletred: "#C71585",
                    indianred: "#CD5C5C",
                    peru: "#CD853F",
                    chocolate: "#D2691E",
                    tan: "#D2B48C",
                    lightgrey: "#D3D3D3",
                    palevioletred: "#D87093",
                    thistle: "#D8BFD8",
                    orchid: "#DA70D6",
                    goldenrod: "#DAA520",
                    crimson: "#DC143C",
                    gainsboro: "#DCDCDC",
                    plum: "#DDA0DD",
                    burlywood: "#DEB887",
                    lightcyan: "#E0FFFF",
                    lavender: "#E6E6FA",
                    darksalmon: "#E9967A",
                    violet: "#EE82EE",
                    palegoldenrod: "#EEE8AA",
                    lightcoral: "#F08080",
                    khaki: "#F0E68C",
                    aliceblue: "#F0F8FF",
                    honeydew: "#F0FFF0",
                    azure: "#F0FFFF",
                    sandybrown: "#F4A460",
                    wheat: "#F5DEB3",
                    beige: "#F5F5DC",
                    whitesmoke: "#F5F5F5",
                    mintcream: "#F5FFFA",
                    ghostwhite: "#F8F8FF",
                    salmon: "#FA8072",
                    antiquewhite: "#FAEBD7",
                    linen: "#FAF0E6",
                    lightgoldenrodyellow: "#FAFAD2",
                    oldlace: "#FDF5E6",
                    red: "#FF0000",
                    fuchsia: "#FF00FF",
                    magenta: "#FF00FF",
                    deeppink: "#FF1493",
                    orangered: "#FF4500",
                    tomato: "#FF6347",
                    hotpink: "#FF69B4",
                    coral: "#FF7F50",
                    darkorange: "#FF8C00",
                    lightsalmon: "#FFA07A",
                    orange: "#FFA500",
                    lightpink: "#FFB6C1",
                    pink: "#FFC0CB",
                    gold: "#FFD700",
                    peachpuff: "#FFDAB9",
                    navajowhite: "#FFDEAD",
                    moccasin: "#FFE4B5",
                    bisque: "#FFE4C4",
                    mistyrose: "#FFE4E1",
                    blanchedalmond: "#FFEBCD",
                    papayawhip: "#FFEFD5",
                    lavenderblush: "#FFF0F5",
                    seashell: "#FFF5EE",
                    cornsilk: "#FFF8DC",
                    lemonchiffon: "#FFFACD",
                    floralwhite: "#FFFAF0",
                    snow: "#FFFAFA",
                    yellow: "#FFFF00",
                    lightyellow: "#FFFFE0",
                    ivory: "#FFFFF0",
                    white: "#FFFFFF",
                  };
                  if ("string" == typeof t) return e[t];
                },
              },
              {
                key: "setColor",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  if ("none" !== t) {
                    var i = void 0,
                      o = this._isColorString(t);
                    if ((void 0 !== o && (t = o), p.isString(t) === !0)) {
                      if (p.isValidRGB(t) === !0) {
                        var n = t
                          .substr(4)
                          .substr(0, t.length - 5)
                          .split(",");
                        i = {r: n[0], g: n[1], b: n[2], a: 1};
                      } else if (p.isValidRGBA(t) === !0) {
                        var r = t
                          .substr(5)
                          .substr(0, t.length - 6)
                          .split(",");
                        i = {r: r[0], g: r[1], b: r[2], a: r[3]};
                      } else if (p.isValidHex(t) === !0) {
                        var a = p.hexToRGB(t);
                        i = {r: a.r, g: a.g, b: a.b, a: 1};
                      }
                    } else if (
                      t instanceof Object &&
                      void 0 !== t.r &&
                      void 0 !== t.g &&
                      void 0 !== t.b
                    ) {
                      var h = void 0 !== t.a ? t.a : "1.0";
                      i = {r: t.r, g: t.g, b: t.b, a: h};
                    }
                    if (void 0 === i)
                      throw new Error(
                        "Unknown color passed to the colorPicker. Supported are strings: rgb, hex, rgba. Object: rgb ({r:r,g:g,b:b,[a:a]}). Supplied: " +
                          (0, s.default)(t)
                      );
                    this._setColor(i, e);
                  }
                },
              },
              {
                key: "show",
                value: function () {
                  void 0 !== this.closeCallback &&
                    (this.closeCallback(), (this.closeCallback = void 0)),
                    (this.applied = !1),
                    (this.frame.style.display = "block"),
                    this._generateHueCircle();
                },
              },
              {
                key: "_hide",
                value: function () {
                  var t = this,
                    e =
                      !(arguments.length > 0 && void 0 !== arguments[0]) ||
                      arguments[0];
                  e === !0 && (this.previousColor = p.extend({}, this.color)),
                    this.applied === !0 && this.updateCallback(this.initialColor),
                    (this.frame.style.display = "none"),
                    setTimeout(function () {
                      void 0 !== t.closeCallback &&
                        (t.closeCallback(), (t.closeCallback = void 0));
                    }, 0);
                },
              },
              {
                key: "_save",
                value: function () {
                  this.updateCallback(this.color), (this.applied = !1), this._hide();
                },
              },
              {
                key: "_apply",
                value: function () {
                  (this.applied = !0),
                    this.updateCallback(this.color),
                    this._updatePicker(this.color);
                },
              },
              {
                key: "_loadLast",
                value: function () {
                  void 0 !== this.previousColor
                    ? this.setColor(this.previousColor, !1)
                    : alert("There is no last color to load...");
                },
              },
              {
                key: "_setColor",
                value: function (t) {
                  var e =
                    !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                  e === !0 && (this.initialColor = p.extend({}, t)), (this.color = t);
                  var i = p.RGBToHSV(t.r, t.g, t.b),
                    o = 2 * Math.PI,
                    n = this.r * i.s,
                    s = this.centerCoordinates.x + n * Math.sin(o * i.h),
                    r = this.centerCoordinates.y + n * Math.cos(o * i.h);
                  (this.colorPickerSelector.style.left =
                    s - 0.5 * this.colorPickerSelector.clientWidth + "px"),
                    (this.colorPickerSelector.style.top =
                      r - 0.5 * this.colorPickerSelector.clientHeight + "px"),
                    this._updatePicker(t);
                },
              },
              {
                key: "_setOpacity",
                value: function (t) {
                  (this.color.a = t / 100), this._updatePicker(this.color);
                },
              },
              {
                key: "_setBrightness",
                value: function (t) {
                  var e = p.RGBToHSV(this.color.r, this.color.g, this.color.b);
                  e.v = t / 100;
                  var i = p.HSVToRGB(e.h, e.s, e.v);
                  (i.a = this.color.a), (this.color = i), this._updatePicker();
                },
              },
              {
                key: "_updatePicker",
                value: function () {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : this.color,
                    e = p.RGBToHSV(t.r, t.g, t.b),
                    i = this.colorPickerCanvas.getContext("2d");
                  void 0 === this.pixelRation &&
                    (this.pixelRatio =
                      (window.devicePixelRatio || 1) /
                      (i.webkitBackingStorePixelRatio ||
                        i.mozBackingStorePixelRatio ||
                        i.msBackingStorePixelRatio ||
                        i.oBackingStorePixelRatio ||
                        i.backingStorePixelRatio ||
                        1)),
                    i.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                  var o = this.colorPickerCanvas.clientWidth,
                    n = this.colorPickerCanvas.clientHeight;
                  i.clearRect(0, 0, o, n),
                    i.putImageData(this.hueCircle, 0, 0),
                    (i.fillStyle = "rgba(0,0,0," + (1 - e.v) + ")"),
                    i.circle(
                      this.centerCoordinates.x,
                      this.centerCoordinates.y,
                      this.r
                    ),
                    i.fill(),
                    (this.brightnessRange.value = 100 * e.v),
                    (this.opacityRange.value = 100 * t.a),
                    (this.initialColorDiv.style.backgroundColor =
                      "rgba(" +
                      this.initialColor.r +
                      "," +
                      this.initialColor.g +
                      "," +
                      this.initialColor.b +
                      "," +
                      this.initialColor.a +
                      ")"),
                    (this.newColorDiv.style.backgroundColor =
                      "rgba(" +
                      this.color.r +
                      "," +
                      this.color.g +
                      "," +
                      this.color.b +
                      "," +
                      this.color.a +
                      ")");
                },
              },
              {
                key: "_setSize",
                value: function () {
                  (this.colorPickerCanvas.style.width = "100%"),
                    (this.colorPickerCanvas.style.height = "100%"),
                    (this.colorPickerCanvas.width = 289 * this.pixelRatio),
                    (this.colorPickerCanvas.height = 289 * this.pixelRatio);
                },
              },
              {
                key: "_create",
                value: function () {
                  if (
                    ((this.frame = document.createElement("div")),
                    (this.frame.className = "vis-color-picker"),
                    (this.colorPickerDiv = document.createElement("div")),
                    (this.colorPickerSelector = document.createElement("div")),
                    (this.colorPickerSelector.className = "vis-selector"),
                    this.colorPickerDiv.appendChild(this.colorPickerSelector),
                    (this.colorPickerCanvas = document.createElement("canvas")),
                    this.colorPickerDiv.appendChild(this.colorPickerCanvas),
                    this.colorPickerCanvas.getContext)
                  ) {
                    var t = this.colorPickerCanvas.getContext("2d");
                    (this.pixelRatio =
                      (window.devicePixelRatio || 1) /
                      (t.webkitBackingStorePixelRatio ||
                        t.mozBackingStorePixelRatio ||
                        t.msBackingStorePixelRatio ||
                        t.oBackingStorePixelRatio ||
                        t.backingStorePixelRatio ||
                        1)),
                      this.colorPickerCanvas
                        .getContext("2d")
                        .setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                  } else {
                    var e = document.createElement("DIV");
                    (e.style.color = "red"),
                      (e.style.fontWeight = "bold"),
                      (e.style.padding = "10px"),
                      (e.innerHTML =
                        "Error: your browser does not support HTML canvas"),
                      this.colorPickerCanvas.appendChild(e);
                  }
                  (this.colorPickerDiv.className = "vis-color"),
                    (this.opacityDiv = document.createElement("div")),
                    (this.opacityDiv.className = "vis-opacity"),
                    (this.brightnessDiv = document.createElement("div")),
                    (this.brightnessDiv.className = "vis-brightness"),
                    (this.arrowDiv = document.createElement("div")),
                    (this.arrowDiv.className = "vis-arrow"),
                    (this.opacityRange = document.createElement("input"));
                  try {
                    (this.opacityRange.type = "range"),
                      (this.opacityRange.min = "0"),
                      (this.opacityRange.max = "100");
                  } catch (t) {}
                  (this.opacityRange.value = "100"),
                    (this.opacityRange.className = "vis-range"),
                    (this.brightnessRange = document.createElement("input"));
                  try {
                    (this.brightnessRange.type = "range"),
                      (this.brightnessRange.min = "0"),
                      (this.brightnessRange.max = "100");
                  } catch (t) {}
                  (this.brightnessRange.value = "100"),
                    (this.brightnessRange.className = "vis-range"),
                    this.opacityDiv.appendChild(this.opacityRange),
                    this.brightnessDiv.appendChild(this.brightnessRange);
                  var i = this;
                  (this.opacityRange.onchange = function () {
                    i._setOpacity(this.value);
                  }),
                    (this.opacityRange.oninput = function () {
                      i._setOpacity(this.value);
                    }),
                    (this.brightnessRange.onchange = function () {
                      i._setBrightness(this.value);
                    }),
                    (this.brightnessRange.oninput = function () {
                      i._setBrightness(this.value);
                    }),
                    (this.brightnessLabel = document.createElement("div")),
                    (this.brightnessLabel.className = "vis-label vis-brightness"),
                    (this.brightnessLabel.innerHTML = "brightness:"),
                    (this.opacityLabel = document.createElement("div")),
                    (this.opacityLabel.className = "vis-label vis-opacity"),
                    (this.opacityLabel.innerHTML = "opacity:"),
                    (this.newColorDiv = document.createElement("div")),
                    (this.newColorDiv.className = "vis-new-color"),
                    (this.newColorDiv.innerHTML = "new"),
                    (this.initialColorDiv = document.createElement("div")),
                    (this.initialColorDiv.className = "vis-initial-color"),
                    (this.initialColorDiv.innerHTML = "initial"),
                    (this.cancelButton = document.createElement("div")),
                    (this.cancelButton.className = "vis-button vis-cancel"),
                    (this.cancelButton.innerHTML = "cancel"),
                    (this.cancelButton.onclick = this._hide.bind(this, !1)),
                    (this.applyButton = document.createElement("div")),
                    (this.applyButton.className = "vis-button vis-apply"),
                    (this.applyButton.innerHTML = "apply"),
                    (this.applyButton.onclick = this._apply.bind(this)),
                    (this.saveButton = document.createElement("div")),
                    (this.saveButton.className = "vis-button vis-save"),
                    (this.saveButton.innerHTML = "save"),
                    (this.saveButton.onclick = this._save.bind(this)),
                    (this.loadButton = document.createElement("div")),
                    (this.loadButton.className = "vis-button vis-load"),
                    (this.loadButton.innerHTML = "load last"),
                    (this.loadButton.onclick = this._loadLast.bind(this)),
                    this.frame.appendChild(this.colorPickerDiv),
                    this.frame.appendChild(this.arrowDiv),
                    this.frame.appendChild(this.brightnessLabel),
                    this.frame.appendChild(this.brightnessDiv),
                    this.frame.appendChild(this.opacityLabel),
                    this.frame.appendChild(this.opacityDiv),
                    this.frame.appendChild(this.newColorDiv),
                    this.frame.appendChild(this.initialColorDiv),
                    this.frame.appendChild(this.cancelButton),
                    this.frame.appendChild(this.applyButton),
                    this.frame.appendChild(this.saveButton),
                    this.frame.appendChild(this.loadButton);
                },
              },
              {
                key: "_bindHammer",
                value: function () {
                  var t = this;
                  (this.drag = {}),
                    (this.pinch = {}),
                    (this.hammer = new l(this.colorPickerCanvas)),
                    this.hammer.get("pinch").set({enable: !0}),
                    u.onTouch(this.hammer, function (e) {
                      t._moveSelector(e);
                    }),
                    this.hammer.on("tap", function (e) {
                      t._moveSelector(e);
                    }),
                    this.hammer.on("panstart", function (e) {
                      t._moveSelector(e);
                    }),
                    this.hammer.on("panmove", function (e) {
                      t._moveSelector(e);
                    }),
                    this.hammer.on("panend", function (e) {
                      t._moveSelector(e);
                    });
                },
              },
              {
                key: "_generateHueCircle",
                value: function () {
                  if (this.generated === !1) {
                    var t = this.colorPickerCanvas.getContext("2d");
                    void 0 === this.pixelRation &&
                      (this.pixelRatio =
                        (window.devicePixelRatio || 1) /
                        (t.webkitBackingStorePixelRatio ||
                          t.mozBackingStorePixelRatio ||
                          t.msBackingStorePixelRatio ||
                          t.oBackingStorePixelRatio ||
                          t.backingStorePixelRatio ||
                          1)),
                      t.setTransform(this.pixelRatio, 0, 0, this.pixelRatio, 0, 0);
                    var e = this.colorPickerCanvas.clientWidth,
                      i = this.colorPickerCanvas.clientHeight;
                    t.clearRect(0, 0, e, i);
                    var o = void 0,
                      n = void 0,
                      s = void 0,
                      r = void 0;
                    (this.centerCoordinates = {x: 0.5 * e, y: 0.5 * i}),
                      (this.r = 0.49 * e);
                    var a = (2 * Math.PI) / 360,
                      h = 1 / 360,
                      d = 1 / this.r,
                      l = void 0;
                    for (s = 0; s < 360; s++)
                      for (r = 0; r < this.r; r++)
                        (o = this.centerCoordinates.x + r * Math.sin(a * s)),
                          (n = this.centerCoordinates.y + r * Math.cos(a * s)),
                          (l = p.HSVToRGB(s * h, r * d, 1)),
                          (t.fillStyle = "rgb(" + l.r + "," + l.g + "," + l.b + ")"),
                          t.fillRect(o - 0.5, n - 0.5, 2, 2);
                    (t.strokeStyle = "rgba(0,0,0,1)"),
                      t.circle(
                        this.centerCoordinates.x,
                        this.centerCoordinates.y,
                        this.r
                      ),
                      t.stroke(),
                      (this.hueCircle = t.getImageData(0, 0, e, i));
                  }
                  this.generated = !0;
                },
              },
              {
                key: "_moveSelector",
                value: function (t) {
                  var e = this.colorPickerDiv.getBoundingClientRect(),
                    i = t.center.x - e.left,
                    o = t.center.y - e.top,
                    n = 0.5 * this.colorPickerDiv.clientHeight,
                    s = 0.5 * this.colorPickerDiv.clientWidth,
                    r = i - s,
                    a = o - n,
                    h = Math.atan2(r, a),
                    d = 0.98 * Math.min(Math.sqrt(r * r + a * a), s),
                    l = Math.cos(h) * d + n,
                    u = Math.sin(h) * d + s;
                  (this.colorPickerSelector.style.top =
                    l - 0.5 * this.colorPickerSelector.clientHeight + "px"),
                    (this.colorPickerSelector.style.left =
                      u - 0.5 * this.colorPickerSelector.clientWidth + "px");
                  var c = h / (2 * Math.PI);
                  c = c < 0 ? c + 1 : c;
                  var f = d / this.r,
                    m = p.RGBToHSV(this.color.r, this.color.g, this.color.b);
                  (m.h = c), (m.s = f);
                  var g = p.HSVToRGB(m.h, m.s, m.v);
                  (g.a = this.color.a),
                    (this.color = g),
                    (this.initialColorDiv.style.backgroundColor =
                      "rgba(" +
                      this.initialColor.r +
                      "," +
                      this.initialColor.g +
                      "," +
                      this.initialColor.b +
                      "," +
                      this.initialColor.a +
                      ")"),
                    (this.newColorDiv.style.backgroundColor =
                      "rgba(" +
                      this.color.r +
                      "," +
                      this.color.g +
                      "," +
                      this.color.b +
                      "," +
                      this.color.a +
                      ")");
                },
              },
            ]),
            t
          );
        })();
      e.default = c;
    },
    function (t, e, i) {
      function o(t, e, i, o) {
        if (
          !(Array.isArray(i) || i instanceof r || i instanceof a) &&
          i instanceof Object
        ) {
          var d = o;
          (o = i), (i = d);
        }
        o &&
          o.throttleRedraw &&
          console.warn(
            'Graph2d option "throttleRedraw" is DEPRICATED and no longer supported. It will be removed in the next MAJOR release.'
          );
        var p = this;
        (this.defaultOptions = {
          start: null,
          end: null,
          autoResize: !0,
          orientation: {axis: "bottom", item: "bottom"},
          moment: n,
          width: null,
          height: null,
          maxHeight: null,
          minHeight: null,
        }),
          (this.options = s.deepExtend({}, this.defaultOptions)),
          this._create(t),
          (this.components = []),
          (this.body = {
            dom: this.dom,
            domProps: this.props,
            emitter: {
              on: this.on.bind(this),
              off: this.off.bind(this),
              emit: this.emit.bind(this),
            },
            hiddenDates: [],
            util: {
              toScreen: p._toScreen.bind(p),
              toGlobalScreen: p._toGlobalScreen.bind(p),
              toTime: p._toTime.bind(p),
              toGlobalTime: p._toGlobalTime.bind(p),
            },
          }),
          (this.range = new h(this.body)),
          this.components.push(this.range),
          (this.body.range = this.range),
          (this.timeAxis = new l(this.body)),
          this.components.push(this.timeAxis),
          (this.currentTime = new u(this.body)),
          this.components.push(this.currentTime),
          (this.linegraph = new c(this.body)),
          this.components.push(this.linegraph),
          (this.itemsData = null),
          (this.groupsData = null),
          this.on("tap", function (t) {
            p.emit("click", p.getEventProperties(t));
          }),
          this.on("doubletap", function (t) {
            p.emit("doubleClick", p.getEventProperties(t));
          }),
          (this.dom.root.oncontextmenu = function (t) {
            p.emit("contextmenu", p.getEventProperties(t));
          }),
          o && this.setOptions(o),
          i && this.setGroups(i),
          e && this.setItems(e),
          this._redraw();
      }
      var n = (i(94), i(95), i(82)),
        s = i(1),
        r = i(88),
        a = i(92),
        h = i(98),
        d = i(102),
        l = i(119),
        u = i(124),
        p = i(122),
        c = i(130),
        f = i(125).printStyle,
        m = i(138).allOptions,
        g = i(138).configureOptions,
        v = i(127).default,
        y = i(125).default;
      (o.prototype = new d()),
        (o.prototype.setOptions = function (t) {
          var e = y.validate(t, m);
          e === !0 &&
            console.log("%cErrors have been found in the supplied options object.", f),
            d.prototype.setOptions.call(this, t);
        }),
        (o.prototype.setItems = function (t) {
          var e,
            i = null == this.itemsData;
          if (
            ((e = t
              ? t instanceof r || t instanceof a
                ? t
                : new r(t, {type: {start: "Date", end: "Date"}})
              : null),
            (this.itemsData = e),
            this.linegraph && this.linegraph.setItems(e),
            i)
          )
            if (void 0 != this.options.start || void 0 != this.options.end) {
              var o = void 0 != this.options.start ? this.options.start : null,
                n = void 0 != this.options.end ? this.options.end : null;
              this.setWindow(o, n, {animation: !1});
            } else this.fit({animation: !1});
        }),
        (o.prototype.setGroups = function (t) {
          var e;
          (e = t ? (t instanceof r || t instanceof a ? t : new r(t)) : null),
            (this.groupsData = e),
            this.linegraph.setGroups(e);
        }),
        (o.prototype.getLegend = function (t, e, i) {
          return (
            void 0 === e && (e = 15),
            void 0 === i && (i = 15),
            void 0 !== this.linegraph.groups[t]
              ? this.linegraph.groups[t].getLegend(e, i)
              : "cannot find group:'" + t + "'"
          );
        }),
        (o.prototype.isGroupVisible = function (t) {
          return (
            void 0 !== this.linegraph.groups[t] &&
            this.linegraph.groups[t].visible &&
            (void 0 === this.linegraph.options.groups.visibility[t] ||
              1 == this.linegraph.options.groups.visibility[t])
          );
        }),
        (o.prototype.getDataRange = function () {
          var t = null,
            e = null;
          for (var i in this.linegraph.groups)
            if (
              this.linegraph.groups.hasOwnProperty(i) &&
              1 == this.linegraph.groups[i].visible
            )
              for (var o = 0; o < this.linegraph.groups[i].itemsData.length; o++) {
                var n = this.linegraph.groups[i].itemsData[o],
                  r = s.convert(n.x, "Date").valueOf();
                (t = null == t ? r : t > r ? r : t),
                  (e = null == e ? r : e < r ? r : e);
              }
          return {
            min: null != t ? new Date(t) : null,
            max: null != e ? new Date(e) : null,
          };
        }),
        (o.prototype.getEventProperties = function (t) {
          var e = t.center ? t.center.x : t.clientX,
            i = t.center ? t.center.y : t.clientY,
            o = e - s.getAbsoluteLeft(this.dom.centerContainer),
            n = i - s.getAbsoluteTop(this.dom.centerContainer),
            r = this._toTime(o),
            a = p.customTimeFromTarget(t),
            h = s.getTarget(t),
            d = null;
          s.hasParent(h, this.timeAxis.dom.foreground)
            ? (d = "axis")
            : this.timeAxis2 && s.hasParent(h, this.timeAxis2.dom.foreground)
            ? (d = "axis")
            : s.hasParent(h, this.linegraph.yAxisLeft.dom.frame)
            ? (d = "data-axis")
            : s.hasParent(h, this.linegraph.yAxisRight.dom.frame)
            ? (d = "data-axis")
            : s.hasParent(h, this.linegraph.legendLeft.dom.frame)
            ? (d = "legend")
            : s.hasParent(h, this.linegraph.legendRight.dom.frame)
            ? (d = "legend")
            : null != a
            ? (d = "custom-time")
            : s.hasParent(h, this.currentTime.bar)
            ? (d = "current-time")
            : s.hasParent(h, this.dom.center) && (d = "background");
          var l = [],
            u = this.linegraph.yAxisLeft,
            c = this.linegraph.yAxisRight;
          return (
            !u.hidden && this.itemsData.length > 0 && l.push(u.screenToValue(n)),
            !c.hidden && this.itemsData.length > 0 && l.push(c.screenToValue(n)),
            {
              event: t,
              what: d,
              pageX: t.srcEvent ? t.srcEvent.pageX : t.pageX,
              pageY: t.srcEvent ? t.srcEvent.pageY : t.pageY,
              x: o,
              y: n,
              time: r,
              value: l,
            }
          );
        }),
        (o.prototype._createConfigurator = function () {
          return new v(this, this.dom.container, g);
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e) {
        (this.id = a.randomUUID()),
          (this.body = t),
          (this.defaultOptions = {
            yAxisOrientation: "left",
            defaultGroup: "default",
            sort: !0,
            sampling: !0,
            stack: !1,
            graphHeight: "400px",
            shaded: {enabled: !1, orientation: "bottom"},
            style: "line",
            barChart: {width: 50, sideBySide: !1, align: "center"},
            interpolation: {enabled: !0, parametrization: "centripetal", alpha: 0.5},
            drawPoints: {enabled: !0, size: 6, style: "square"},
            dataAxis: {},
            legend: {},
            groups: {visibility: {}},
          }),
          (this.options = a.extend({}, this.defaultOptions)),
          (this.dom = {}),
          (this.props = {}),
          (this.hammer = null),
          (this.groups = {}),
          (this.abortedGraphUpdate = !1),
          (this.updateSVGheight = !1),
          (this.updateSVGheightOnResize = !1),
          (this.forceGraphUpdate = !0);
        var i = this;
        (this.itemsData = null),
          (this.groupsData = null),
          (this.itemListeners = {
            add: function (t, e, o) {
              i._onAdd(e.items);
            },
            update: function (t, e, o) {
              i._onUpdate(e.items);
            },
            remove: function (t, e, o) {
              i._onRemove(e.items);
            },
          }),
          (this.groupListeners = {
            add: function (t, e, o) {
              i._onAddGroups(e.items);
            },
            update: function (t, e, o) {
              i._onUpdateGroups(e.items);
            },
            remove: function (t, e, o) {
              i._onRemoveGroups(e.items);
            },
          }),
          (this.items = {}),
          (this.selection = []),
          (this.lastStart = this.body.range.start),
          (this.touchParams = {}),
          (this.svgElements = {}),
          this.setOptions(e),
          (this.groupsUsingDefaultStyles = [0]),
          this.body.emitter.on("rangechanged", function () {
            (i.lastStart = i.body.range.start),
              (i.svg.style.left = a.option.asSize(-i.props.width)),
              (i.forceGraphUpdate = !0),
              i.redraw.call(i);
          }),
          this._create(),
          (this.framework = {
            svg: this.svg,
            svgElements: this.svgElements,
            options: this.options,
            groups: this.groups,
          });
      }
      var s = i(62),
        r = o(s),
        a = i(1),
        h = i(87),
        d = i(88),
        l = i(92),
        u = i(100),
        p = i(131),
        c = i(133),
        f = i(137),
        m = i(134),
        g = i(136),
        v = i(135),
        y = "__ungrouped__";
      (n.prototype = new u()),
        (n.prototype._create = function () {
          var t = document.createElement("div");
          (t.className = "vis-line-graph"),
            (this.dom.frame = t),
            (this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")),
            (this.svg.style.position = "relative"),
            (this.svg.style.height =
              ("" + this.options.graphHeight).replace("px", "") + "px"),
            (this.svg.style.display = "block"),
            t.appendChild(this.svg),
            (this.options.dataAxis.orientation = "left"),
            (this.yAxisLeft = new p(
              this.body,
              this.options.dataAxis,
              this.svg,
              this.options.groups
            )),
            (this.options.dataAxis.orientation = "right"),
            (this.yAxisRight = new p(
              this.body,
              this.options.dataAxis,
              this.svg,
              this.options.groups
            )),
            delete this.options.dataAxis.orientation,
            (this.legendLeft = new f(
              this.body,
              this.options.legend,
              "left",
              this.options.groups
            )),
            (this.legendRight = new f(
              this.body,
              this.options.legend,
              "right",
              this.options.groups
            )),
            this.show();
        }),
        (n.prototype.setOptions = function (t) {
          if (t) {
            var e = [
              "sampling",
              "defaultGroup",
              "stack",
              "height",
              "graphHeight",
              "yAxisOrientation",
              "style",
              "barChart",
              "dataAxis",
              "sort",
              "groups",
            ];
            void 0 === t.graphHeight && void 0 !== t.height
              ? ((this.updateSVGheight = !0), (this.updateSVGheightOnResize = !0))
              : void 0 !== this.body.domProps.centerContainer.height &&
                void 0 !== t.graphHeight &&
                parseInt((t.graphHeight + "").replace("px", "")) <
                  this.body.domProps.centerContainer.height &&
                (this.updateSVGheight = !0),
              a.selectiveDeepExtend(e, this.options, t),
              a.mergeOptions(this.options, t, "interpolation"),
              a.mergeOptions(this.options, t, "drawPoints"),
              a.mergeOptions(this.options, t, "shaded"),
              a.mergeOptions(this.options, t, "legend"),
              t.interpolation &&
                "object" == (0, r.default)(t.interpolation) &&
                t.interpolation.parametrization &&
                ("uniform" == t.interpolation.parametrization
                  ? (this.options.interpolation.alpha = 0)
                  : "chordal" == t.interpolation.parametrization
                  ? (this.options.interpolation.alpha = 1)
                  : ((this.options.interpolation.parametrization = "centripetal"),
                    (this.options.interpolation.alpha = 0.5))),
              this.yAxisLeft &&
                void 0 !== t.dataAxis &&
                (this.yAxisLeft.setOptions(this.options.dataAxis),
                this.yAxisRight.setOptions(this.options.dataAxis)),
              this.legendLeft &&
                void 0 !== t.legend &&
                (this.legendLeft.setOptions(this.options.legend),
                this.legendRight.setOptions(this.options.legend)),
              this.groups.hasOwnProperty(y) && this.groups[y].setOptions(t);
          }
          this.dom.frame &&
            ((this.forceGraphUpdate = !0),
            this.body.emitter.emit("_change", {queue: !0}));
        }),
        (n.prototype.hide = function () {
          this.dom.frame.parentNode &&
            this.dom.frame.parentNode.removeChild(this.dom.frame);
        }),
        (n.prototype.show = function () {
          this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame);
        }),
        (n.prototype.setItems = function (t) {
          var e,
            i = this,
            o = this.itemsData;
          if (t) {
            if (!(t instanceof d || t instanceof l))
              throw new TypeError("Data must be an instance of DataSet or DataView");
            this.itemsData = t;
          } else this.itemsData = null;
          if (
            (o &&
              (a.forEach(this.itemListeners, function (t, e) {
                o.off(e, t);
              }),
              (e = o.getIds()),
              this._onRemove(e)),
            this.itemsData)
          ) {
            var n = this.id;
            a.forEach(this.itemListeners, function (t, e) {
              i.itemsData.on(e, t, n);
            }),
              (e = this.itemsData.getIds()),
              this._onAdd(e);
          }
        }),
        (n.prototype.setGroups = function (t) {
          var e,
            i = this;
          if (this.groupsData) {
            a.forEach(this.groupListeners, function (t, e) {
              i.groupsData.off(e, t);
            }),
              (e = this.groupsData.getIds()),
              (this.groupsData = null);
            for (var o = 0; o < e.length; o++) this._removeGroup(e[o]);
          }
          if (t) {
            if (!(t instanceof d || t instanceof l))
              throw new TypeError("Data must be an instance of DataSet or DataView");
            this.groupsData = t;
          } else this.groupsData = null;
          if (this.groupsData) {
            var n = this.id;
            a.forEach(this.groupListeners, function (t, e) {
              i.groupsData.on(e, t, n);
            }),
              (e = this.groupsData.getIds()),
              this._onAddGroups(e);
          }
        }),
        (n.prototype._onUpdate = function (t) {
          this._updateAllGroupData(t);
        }),
        (n.prototype._onAdd = function (t) {
          this._onUpdate(t);
        }),
        (n.prototype._onRemove = function (t) {
          this._onUpdate(t);
        }),
        (n.prototype._onUpdateGroups = function (t) {
          this._updateAllGroupData(null, t);
        }),
        (n.prototype._onAddGroups = function (t) {
          this._onUpdateGroups(t);
        }),
        (n.prototype._onRemoveGroups = function (t) {
          for (var e = 0; e < t.length; e++) this._removeGroup(t[e]);
          (this.forceGraphUpdate = !0), this.body.emitter.emit("_change", {queue: !0});
        }),
        (n.prototype._removeGroup = function (t) {
          this.groups.hasOwnProperty(t) &&
            ("right" == this.groups[t].options.yAxisOrientation
              ? (this.yAxisRight.removeGroup(t),
                this.legendRight.removeGroup(t),
                this.legendRight.redraw())
              : (this.yAxisLeft.removeGroup(t),
                this.legendLeft.removeGroup(t),
                this.legendLeft.redraw()),
            delete this.groups[t]);
        }),
        (n.prototype._updateGroup = function (t, e) {
          this.groups.hasOwnProperty(e)
            ? (this.groups[e].update(t),
              "right" == this.groups[e].options.yAxisOrientation
                ? (this.yAxisRight.updateGroup(e, this.groups[e]),
                  this.legendRight.updateGroup(e, this.groups[e]),
                  this.yAxisLeft.removeGroup(e),
                  this.legendLeft.removeGroup(e))
                : (this.yAxisLeft.updateGroup(e, this.groups[e]),
                  this.legendLeft.updateGroup(e, this.groups[e]),
                  this.yAxisRight.removeGroup(e),
                  this.legendRight.removeGroup(e)))
            : ((this.groups[e] = new c(
                t,
                e,
                this.options,
                this.groupsUsingDefaultStyles
              )),
              "right" == this.groups[e].options.yAxisOrientation
                ? (this.yAxisRight.addGroup(e, this.groups[e]),
                  this.legendRight.addGroup(e, this.groups[e]))
                : (this.yAxisLeft.addGroup(e, this.groups[e]),
                  this.legendLeft.addGroup(e, this.groups[e]))),
            this.legendLeft.redraw(),
            this.legendRight.redraw();
        }),
        (n.prototype._updateAllGroupData = function (t, e) {
          if (null != this.itemsData) {
            var i = {},
              o = this.itemsData.get(),
              n = this.itemsData._fieldId,
              s = {};
            t &&
              t.map(function (t) {
                s[t] = t;
              });
            for (var r = {}, h = 0; h < o.length; h++) {
              var d = o[h],
                l = d.group;
              (null !== l && void 0 !== l) || (l = y),
                r.hasOwnProperty(l) ? r[l]++ : (r[l] = 1);
            }
            var u = {};
            if (!e && t)
              for (var l in this.groups)
                if (this.groups.hasOwnProperty(l)) {
                  var p = this.groups[l],
                    c = p.getItems();
                  i[l] = c.filter(function (t) {
                    return (u[t[n]] = t[n]), t[n] !== s[t[n]];
                  });
                  var f = r[l];
                  (r[l] -= i[l].length), i[l].length < f && (i[l][f - 1] = {});
                }
            for (var h = 0; h < o.length; h++) {
              var d = o[h],
                l = d.group;
              if (
                ((null !== l && void 0 !== l) || (l = y),
                e || !t || d[n] === s[d[n]] || !u.hasOwnProperty(d[n]))
              ) {
                i.hasOwnProperty(l) || (i[l] = new Array(r[l]));
                var m = a.bridgeObject(d);
                (m.x = a.convert(d.x, "Date")),
                  (m.end = a.convert(d.end, "Date")),
                  (m.orginalY = d.y),
                  (m.y = Number(d.y)),
                  (m[n] = d[n]);
                var g = i[l].length - r[l]--;
                i[l][g] = m;
              }
            }
            for (var l in this.groups)
              this.groups.hasOwnProperty(l) &&
                (i.hasOwnProperty(l) || (i[l] = new Array(0)));
            for (var l in i)
              if (i.hasOwnProperty(l))
                if (0 == i[l].length)
                  this.groups.hasOwnProperty(l) && this._removeGroup(l);
                else {
                  var p = void 0;
                  void 0 != this.groupsData && (p = this.groupsData.get(l)),
                    void 0 == p &&
                      (p = {id: l, content: this.options.defaultGroup + l}),
                    this._updateGroup(p, l),
                    this.groups[l].setItems(i[l]);
                }
            (this.forceGraphUpdate = !0),
              this.body.emitter.emit("_change", {queue: !0});
          }
        }),
        (n.prototype.redraw = function () {
          var t = !1;
          (this.props.width = this.dom.frame.offsetWidth),
            (this.props.height =
              this.body.domProps.centerContainer.height -
              this.body.domProps.border.top -
              this.body.domProps.border.bottom),
            (t = this._isResized() || t);
          var e = this.body.range.end - this.body.range.start,
            i = e != this.lastVisibleInterval;
          if (
            ((this.lastVisibleInterval = e),
            1 == t &&
              ((this.svg.style.width = a.option.asSize(3 * this.props.width)),
              (this.svg.style.left = a.option.asSize(-this.props.width)),
              ((this.options.height + "").indexOf("%") == -1 &&
                1 != this.updateSVGheightOnResize) ||
                (this.updateSVGheight = !0)),
            1 == this.updateSVGheight
              ? (this.options.graphHeight != this.props.height + "px" &&
                  ((this.options.graphHeight = this.props.height + "px"),
                  (this.svg.style.height = this.props.height + "px")),
                (this.updateSVGheight = !1))
              : (this.svg.style.height =
                  ("" + this.options.graphHeight).replace("px", "") + "px"),
            1 == t ||
              1 == i ||
              1 == this.abortedGraphUpdate ||
              1 == this.forceGraphUpdate)
          )
            (t = this._updateGraph() || t), (this.forceGraphUpdate = !1);
          else if (0 != this.lastStart) {
            var o = this.body.range.start - this.lastStart,
              n = this.body.range.end - this.body.range.start;
            if (0 != this.props.width) {
              var s = this.props.width / n,
                r = o * s;
              this.svg.style.left = -this.props.width - r + "px";
            }
          }
          return this.legendLeft.redraw(), this.legendRight.redraw(), t;
        }),
        (n.prototype._getSortedGroupIds = function () {
          var t = [];
          for (var e in this.groups)
            if (this.groups.hasOwnProperty(e)) {
              var i = this.groups[e];
              1 != i.visible ||
                (void 0 !== this.options.groups.visibility[e] &&
                  1 != this.options.groups.visibility[e]) ||
                t.push({id: e, zIndex: i.options.zIndex});
            }
          a.insertSort(t, function (t, e) {
            var i = t.zIndex,
              o = e.zIndex;
            return (
              void 0 === i && (i = 0),
              void 0 === o && (o = 0),
              i == o ? 0 : i < o ? -1 : 1
            );
          });
          for (var o = new Array(t.length), n = 0; n < t.length; n++) o[n] = t[n].id;
          return o;
        }),
        (n.prototype._updateGraph = function () {
          if (
            (h.prepareElements(this.svgElements),
            0 != this.props.width && null != this.itemsData)
          ) {
            var t,
              e,
              i = {},
              o = !1,
              n = this.body.util.toGlobalTime(-this.body.domProps.root.width),
              s = this.body.util.toGlobalTime(2 * this.body.domProps.root.width),
              r = this._getSortedGroupIds();
            if (r.length > 0) {
              var a = {};
              for (
                this._getRelevantData(r, a, n, s), this._applySampling(r, a), e = 0;
                e < r.length;
                e++
              )
                this._convertXcoordinates(a[r[e]]);
              if ((this._getYRanges(r, a, i), (o = this._updateYAxis(r, i)), 1 == o))
                return (
                  h.cleanupElements(this.svgElements),
                  (this.abortedGraphUpdate = !0),
                  !0
                );
              this.abortedGraphUpdate = !1;
              var d = void 0;
              for (e = 0; e < r.length; e++)
                (t = this.groups[r[e]]),
                  this.options.stack === !0 &&
                    "line" === this.options.style &&
                    ((void 0 != t.options.excludeFromStacking &&
                      t.options.excludeFromStacking) ||
                      (void 0 != d &&
                        (this._stack(a[t.id], a[d.id]),
                        1 == t.options.shaded.enabled &&
                          "group" !== t.options.shaded.orientation &&
                          ("top" == t.options.shaded.orientation &&
                          "group" !== d.options.shaded.orientation
                            ? ((d.options.shaded.orientation = "group"),
                              (d.options.shaded.groupId = t.id))
                            : ((t.options.shaded.orientation = "group"),
                              (t.options.shaded.groupId = d.id)))),
                      (d = t))),
                  this._convertYcoordinates(a[r[e]], t);
              var l = {};
              for (e = 0; e < r.length; e++)
                if (
                  ((t = this.groups[r[e]]),
                  "line" === t.options.style && 1 == t.options.shaded.enabled)
                ) {
                  var u = a[r[e]];
                  if (null == u || 0 == u.length) continue;
                  if (
                    (l.hasOwnProperty(r[e]) || (l[r[e]] = g.calcPath(u, t)),
                    "group" === t.options.shaded.orientation)
                  ) {
                    var p = t.options.shaded.groupId;
                    if (r.indexOf(p) === -1) {
                      console.log(t.id + ": Unknown shading group target given:" + p);
                      continue;
                    }
                    l.hasOwnProperty(p) || (l[p] = g.calcPath(a[p], this.groups[p])),
                      g.drawShading(l[r[e]], t, l[p], this.framework);
                  } else g.drawShading(l[r[e]], t, void 0, this.framework);
                }
              for (m.draw(r, a, this.framework), e = 0; e < r.length; e++)
                if (((t = this.groups[r[e]]), a[r[e]].length > 0))
                  switch (t.options.style) {
                    case "line":
                      l.hasOwnProperty(r[e]) || (l[r[e]] = g.calcPath(a[r[e]], t)),
                        g.draw(l[r[e]], t, this.framework);
                    case "point":
                    case "points":
                      ("point" != t.options.style &&
                        "points" != t.options.style &&
                        1 != t.options.drawPoints.enabled) ||
                        v.draw(a[r[e]], t, this.framework);
                      break;
                    case "bar":
                  }
            }
          }
          return h.cleanupElements(this.svgElements), !1;
        }),
        (n.prototype._stack = function (t, e) {
          var i, o, n, s, r;
          i = 0;
          for (var a = 0; a < t.length; a++) {
            (s = void 0), (r = void 0);
            for (var h = i; h < e.length; h++) {
              if (e[h].x === t[a].x) {
                (s = e[h]), (r = e[h]), (i = h);
                break;
              }
              if (e[h].x > t[a].x) {
                (r = e[h]), (s = 0 == h ? r : e[h - 1]), (i = h);
                break;
              }
            }
            void 0 === r && ((s = e[e.length - 1]), (r = e[e.length - 1])),
              (o = r.x - s.x),
              (n = r.y - s.y),
              0 == o
                ? (t[a].y = t[a].orginalY + r.y)
                : (t[a].y = t[a].orginalY + (n / o) * (t[a].x - s.x) + s.y);
          }
        }),
        (n.prototype._getRelevantData = function (t, e, i, o) {
          var n, s, r, h;
          if (t.length > 0)
            for (s = 0; s < t.length; s++) {
              n = this.groups[t[s]];
              var d = n.getItems();
              if (1 == n.options.sort) {
                var l = function (t, e) {
                    return t.getTime() == e.getTime() ? 0 : t < e ? -1 : 1;
                  },
                  u = Math.max(0, a.binarySearchValue(d, i, "x", "before", l)),
                  p = Math.min(
                    d.length,
                    a.binarySearchValue(d, o, "x", "after", l) + 1
                  );
                p <= 0 && (p = d.length);
                var c = new Array(p - u);
                for (r = u; r < p; r++) (h = n.itemsData[r]), (c[r - u] = h);
                e[t[s]] = c;
              } else e[t[s]] = n.itemsData;
            }
        }),
        (n.prototype._applySampling = function (t, e) {
          var i;
          if (t.length > 0)
            for (var o = 0; o < t.length; o++)
              if (((i = this.groups[t[o]]), 1 == i.options.sampling)) {
                var n = e[t[o]];
                if (n.length > 0) {
                  var s = 1,
                    r = n.length,
                    a =
                      this.body.util.toGlobalScreen(n[n.length - 1].x) -
                      this.body.util.toGlobalScreen(n[0].x),
                    h = r / a;
                  s = Math.min(Math.ceil(0.2 * r), Math.max(1, Math.round(h)));
                  for (var d = new Array(r), l = 0; l < r; l += s) {
                    var u = Math.round(l / s);
                    d[u] = n[l];
                  }
                  e[t[o]] = d.splice(0, Math.round(r / s));
                }
              }
        }),
        (n.prototype._getYRanges = function (t, e, i) {
          var o,
            n,
            s,
            r,
            a = [],
            h = [];
          if (t.length > 0) {
            for (s = 0; s < t.length; s++)
              (o = e[t[s]]),
                (r = this.groups[t[s]].options),
                o.length > 0 &&
                  ((n = this.groups[t[s]]),
                  r.stack === !0 && "bar" === r.style
                    ? "left" === r.yAxisOrientation
                      ? (a = a.concat(o))
                      : (h = h.concat(o))
                    : (i[t[s]] = n.getYRange(o, t[s])));
            m.getStackedYRange(a, i, t, "__barStackLeft", "left"),
              m.getStackedYRange(h, i, t, "__barStackRight", "right");
          }
        }),
        (n.prototype._updateYAxis = function (t, e) {
          var i,
            o,
            n = !1,
            s = !1,
            r = !1,
            a = 1e9,
            h = 1e9,
            d = -1e9,
            l = -1e9;
          if (t.length > 0) {
            for (var u = 0; u < t.length; u++) {
              var p = this.groups[t[u]];
              p && "right" != p.options.yAxisOrientation
                ? ((s = !0), (a = 1e9), (d = -1e9))
                : p && p.options.yAxisOrientation && ((r = !0), (h = 1e9), (l = -1e9));
            }
            for (var u = 0; u < t.length; u++)
              e.hasOwnProperty(t[u]) &&
                e[t[u]].ignore !== !0 &&
                ((i = e[t[u]].min),
                (o = e[t[u]].max),
                "right" != e[t[u]].yAxisOrientation
                  ? ((s = !0), (a = a > i ? i : a), (d = d < o ? o : d))
                  : ((r = !0), (h = h > i ? i : h), (l = l < o ? o : l)));
            1 == s && this.yAxisLeft.setRange(a, d),
              1 == r && this.yAxisRight.setRange(h, l);
          }
          (n = this._toggleAxisVisiblity(s, this.yAxisLeft) || n),
            (n = this._toggleAxisVisiblity(r, this.yAxisRight) || n),
            1 == r && 1 == s
              ? ((this.yAxisLeft.drawIcons = !0), (this.yAxisRight.drawIcons = !0))
              : ((this.yAxisLeft.drawIcons = !1), (this.yAxisRight.drawIcons = !1)),
            (this.yAxisRight.master = !s),
            (this.yAxisRight.masterAxis = this.yAxisLeft),
            0 == this.yAxisRight.master
              ? (1 == r
                  ? (this.yAxisLeft.lineOffset = this.yAxisRight.width)
                  : (this.yAxisLeft.lineOffset = 0),
                (n = this.yAxisLeft.redraw() || n),
                (n = this.yAxisRight.redraw() || n))
              : (n = this.yAxisRight.redraw() || n);
          for (
            var c = [
                "__barStackLeft",
                "__barStackRight",
                "__lineStackLeft",
                "__lineStackRight",
              ],
              u = 0;
            u < c.length;
            u++
          )
            t.indexOf(c[u]) != -1 && t.splice(t.indexOf(c[u]), 1);
          return n;
        }),
        (n.prototype._toggleAxisVisiblity = function (t, e) {
          var i = !1;
          return (
            0 == t
              ? e.dom.frame.parentNode && 0 == e.hidden && (e.hide(), (i = !0))
              : e.dom.frame.parentNode || 1 != e.hidden || (e.show(), (i = !0)),
            i
          );
        }),
        (n.prototype._convertXcoordinates = function (t) {
          for (var e = this.body.util.toScreen, i = 0; i < t.length; i++)
            (t[i].screen_x = e(t[i].x) + this.props.width),
              (t[i].screen_y = t[i].y),
              void 0 != t[i].end
                ? (t[i].screen_end = e(t[i].end) + this.props.width)
                : (t[i].screen_end = void 0);
        }),
        (n.prototype._convertYcoordinates = function (t, e) {
          var i = this.yAxisLeft,
            o = Number(this.svg.style.height.replace("px", ""));
          "right" == e.options.yAxisOrientation && (i = this.yAxisRight);
          for (var n = 0; n < t.length; n++)
            t[n].screen_y = Math.round(i.convertValue(t[n].y));
          e.setZeroPosition(Math.min(o, i.convertValue(0)));
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e, i, o) {
        (this.id = a.randomUUID()),
          (this.body = t),
          (this.defaultOptions = {
            orientation: "left",
            showMinorLabels: !0,
            showMajorLabels: !0,
            icons: !1,
            majorLinesOffset: 7,
            minorLinesOffset: 4,
            labelOffsetX: 10,
            labelOffsetY: 2,
            iconWidth: 20,
            width: "40px",
            visible: !0,
            alignZeros: !0,
            left: {
              range: {min: void 0, max: void 0},
              format: function (t) {
                return "" + parseFloat(t.toPrecision(3));
              },
              title: {text: void 0, style: void 0},
            },
            right: {
              range: {min: void 0, max: void 0},
              format: function (t) {
                return "" + parseFloat(t.toPrecision(3));
              },
              title: {text: void 0, style: void 0},
            },
          }),
          (this.linegraphOptions = o),
          (this.linegraphSVG = i),
          (this.props = {}),
          (this.DOMelements = {lines: {}, labels: {}, title: {}}),
          (this.dom = {}),
          (this.scale = void 0),
          (this.range = {start: 0, end: 0}),
          (this.options = a.extend({}, this.defaultOptions)),
          (this.conversionFactor = 1),
          this.setOptions(e),
          (this.width = Number(("" + this.options.width).replace("px", ""))),
          (this.minWidth = this.width),
          (this.height = this.linegraphSVG.getBoundingClientRect().height),
          (this.hidden = !1),
          (this.stepPixels = 25),
          (this.zeroCrossing = -1),
          (this.amountOfSteps = -1),
          (this.lineOffset = 0),
          (this.master = !0),
          (this.masterAxis = null),
          (this.svgElements = {}),
          (this.iconsRemoved = !1),
          (this.groups = {}),
          (this.amountOfGroups = 0),
          this._create(),
          (this.framework = {
            svg: this.svg,
            svgElements: this.svgElements,
            options: this.options,
            groups: this.groups,
          });
        var n = this;
        this.body.emitter.on("verticalDrag", function () {
          n.dom.lineContainer.style.top = n.body.domProps.scrollTop + "px";
        });
      }
      var s = i(58),
        r = o(s),
        a = i(1),
        h = i(87),
        d = i(100),
        l = i(132);
      (n.prototype = new d()),
        (n.prototype.addGroup = function (t, e) {
          this.groups.hasOwnProperty(t) || (this.groups[t] = e),
            (this.amountOfGroups += 1);
        }),
        (n.prototype.updateGroup = function (t, e) {
          this.groups.hasOwnProperty(t) || (this.amountOfGroups += 1),
            (this.groups[t] = e);
        }),
        (n.prototype.removeGroup = function (t) {
          this.groups.hasOwnProperty(t) &&
            (delete this.groups[t], (this.amountOfGroups -= 1));
        }),
        (n.prototype.setOptions = function (t) {
          if (t) {
            var e = !1;
            this.options.orientation != t.orientation &&
              void 0 !== t.orientation &&
              (e = !0);
            var i = [
              "orientation",
              "showMinorLabels",
              "showMajorLabels",
              "icons",
              "majorLinesOffset",
              "minorLinesOffset",
              "labelOffsetX",
              "labelOffsetY",
              "iconWidth",
              "width",
              "visible",
              "left",
              "right",
              "alignZeros",
            ];
            a.selectiveDeepExtend(i, this.options, t),
              (this.minWidth = Number(("" + this.options.width).replace("px", ""))),
              e === !0 && this.dom.frame && (this.hide(), this.show());
          }
        }),
        (n.prototype._create = function () {
          (this.dom.frame = document.createElement("div")),
            (this.dom.frame.style.width = this.options.width),
            (this.dom.frame.style.height = this.height),
            (this.dom.lineContainer = document.createElement("div")),
            (this.dom.lineContainer.style.width = "100%"),
            (this.dom.lineContainer.style.height = this.height),
            (this.dom.lineContainer.style.position = "relative"),
            (this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")),
            (this.svg.style.position = "absolute"),
            (this.svg.style.top = "0px"),
            (this.svg.style.height = "100%"),
            (this.svg.style.width = "100%"),
            (this.svg.style.display = "block"),
            this.dom.frame.appendChild(this.svg);
        }),
        (n.prototype._redrawGroupIcons = function () {
          h.prepareElements(this.svgElements);
          var t,
            e = this.options.iconWidth,
            i = 15,
            o = 4,
            n = o + 0.5 * i;
          t = "left" === this.options.orientation ? o : this.width - e - o;
          var s = (0, r.default)(this.groups);
          s.sort(function (t, e) {
            return t < e ? -1 : 1;
          });
          for (var a = 0; a < s.length; a++) {
            var d = s[a];
            this.groups[d].visible !== !0 ||
              (void 0 !== this.linegraphOptions.visibility[d] &&
                this.linegraphOptions.visibility[d] !== !0) ||
              (this.groups[d].getLegend(e, i, this.framework, t, n), (n += i + o));
          }
          h.cleanupElements(this.svgElements), (this.iconsRemoved = !1);
        }),
        (n.prototype._cleanupIcons = function () {
          this.iconsRemoved === !1 &&
            (h.prepareElements(this.svgElements),
            h.cleanupElements(this.svgElements),
            (this.iconsRemoved = !0));
        }),
        (n.prototype.show = function () {
          (this.hidden = !1),
            this.dom.frame.parentNode ||
              ("left" === this.options.orientation
                ? this.body.dom.left.appendChild(this.dom.frame)
                : this.body.dom.right.appendChild(this.dom.frame)),
            this.dom.lineContainer.parentNode ||
              this.body.dom.backgroundHorizontal.appendChild(this.dom.lineContainer);
        }),
        (n.prototype.hide = function () {
          (this.hidden = !0),
            this.dom.frame.parentNode &&
              this.dom.frame.parentNode.removeChild(this.dom.frame),
            this.dom.lineContainer.parentNode &&
              this.dom.lineContainer.parentNode.removeChild(this.dom.lineContainer);
        }),
        (n.prototype.setRange = function (t, e) {
          (this.range.start = t), (this.range.end = e);
        }),
        (n.prototype.redraw = function () {
          var t = !1,
            e = 0;
          this.dom.lineContainer.style.top = this.body.domProps.scrollTop + "px";
          for (var i in this.groups)
            this.groups.hasOwnProperty(i) &&
              (this.groups[i].visible !== !0 ||
                (void 0 !== this.linegraphOptions.visibility[i] &&
                  this.linegraphOptions.visibility[i] !== !0) ||
                e++);
          if (0 === this.amountOfGroups || 0 === e) this.hide();
          else {
            this.show(),
              (this.height = Number(this.linegraphSVG.style.height.replace("px", ""))),
              (this.dom.lineContainer.style.height = this.height + "px"),
              (this.width =
                this.options.visible === !0
                  ? Number(("" + this.options.width).replace("px", ""))
                  : 0);
            var o = this.props,
              n = this.dom.frame;
            (n.className = "vis-data-axis"), this._calculateCharSize();
            var s = this.options.orientation,
              r = this.options.showMinorLabels,
              a = this.options.showMajorLabels;
            (o.minorLabelHeight = r ? o.minorCharHeight : 0),
              (o.majorLabelHeight = a ? o.majorCharHeight : 0),
              (o.minorLineWidth =
                this.body.dom.backgroundHorizontal.offsetWidth -
                this.lineOffset -
                this.width +
                2 * this.options.minorLinesOffset),
              (o.minorLineHeight = 1),
              (o.majorLineWidth =
                this.body.dom.backgroundHorizontal.offsetWidth -
                this.lineOffset -
                this.width +
                2 * this.options.majorLinesOffset),
              (o.majorLineHeight = 1),
              "left" === s
                ? ((n.style.top = "0"),
                  (n.style.left = "0"),
                  (n.style.bottom = ""),
                  (n.style.width = this.width + "px"),
                  (n.style.height = this.height + "px"),
                  (this.props.width = this.body.domProps.left.width),
                  (this.props.height = this.body.domProps.left.height))
                : ((n.style.top = ""),
                  (n.style.bottom = "0"),
                  (n.style.left = "0"),
                  (n.style.width = this.width + "px"),
                  (n.style.height = this.height + "px"),
                  (this.props.width = this.body.domProps.right.width),
                  (this.props.height = this.body.domProps.right.height)),
              (t = this._redrawLabels()),
              (t = this._isResized() || t),
              this.options.icons === !0
                ? this._redrawGroupIcons()
                : this._cleanupIcons(),
              this._redrawTitle(s);
          }
          return t;
        }),
        (n.prototype._redrawLabels = function () {
          var t = this,
            e = !1;
          h.prepareElements(this.DOMelements.lines),
            h.prepareElements(this.DOMelements.labels);
          var i = this.options.orientation,
            o = void 0 != this.options[i].range ? this.options[i].range : {},
            n = !0;
          void 0 != o.max && ((this.range.end = o.max), (n = !1));
          var s = !0;
          void 0 != o.min && ((this.range.start = o.min), (s = !1)),
            (this.scale = new l(
              this.range.start,
              this.range.end,
              s,
              n,
              this.dom.frame.offsetHeight,
              this.props.majorCharHeight,
              this.options.alignZeros,
              this.options[i].format
            )),
            this.master === !1 &&
              void 0 != this.masterAxis &&
              this.scale.followScale(this.masterAxis.scale),
            (this.maxLabelSize = 0);
          var r = this.scale.getLines();
          r.forEach(function (e) {
            var o = e.y,
              n = e.major;
            t.options.showMinorLabels &&
              n === !1 &&
              t._redrawLabel(
                o - 2,
                e.val,
                i,
                "vis-y-axis vis-minor",
                t.props.minorCharHeight
              ),
              n &&
                o >= 0 &&
                t._redrawLabel(
                  o - 2,
                  e.val,
                  i,
                  "vis-y-axis vis-major",
                  t.props.majorCharHeight
                ),
              t.master === !0 &&
                (n
                  ? t._redrawLine(
                      o,
                      i,
                      "vis-grid vis-horizontal vis-major",
                      t.options.majorLinesOffset,
                      t.props.majorLineWidth
                    )
                  : t._redrawLine(
                      o,
                      i,
                      "vis-grid vis-horizontal vis-minor",
                      t.options.minorLinesOffset,
                      t.props.minorLineWidth
                    ));
          });
          var a = 0;
          void 0 !== this.options[i].title &&
            void 0 !== this.options[i].title.text &&
            (a = this.props.titleCharHeight);
          var d =
            this.options.icons === !0
              ? Math.max(this.options.iconWidth, a) + this.options.labelOffsetX + 15
              : a + this.options.labelOffsetX + 15;
          return (
            this.maxLabelSize > this.width - d && this.options.visible === !0
              ? ((this.width = this.maxLabelSize + d),
                (this.options.width = this.width + "px"),
                h.cleanupElements(this.DOMelements.lines),
                h.cleanupElements(this.DOMelements.labels),
                this.redraw(),
                (e = !0))
              : this.maxLabelSize < this.width - d &&
                this.options.visible === !0 &&
                this.width > this.minWidth
              ? ((this.width = Math.max(this.minWidth, this.maxLabelSize + d)),
                (this.options.width = this.width + "px"),
                h.cleanupElements(this.DOMelements.lines),
                h.cleanupElements(this.DOMelements.labels),
                this.redraw(),
                (e = !0))
              : (h.cleanupElements(this.DOMelements.lines),
                h.cleanupElements(this.DOMelements.labels),
                (e = !1)),
            e
          );
        }),
        (n.prototype.convertValue = function (t) {
          return this.scale.convertValue(t);
        }),
        (n.prototype.screenToValue = function (t) {
          return this.scale.screenToValue(t);
        }),
        (n.prototype._redrawLabel = function (t, e, i, o, n) {
          var s = h.getDOMElement("div", this.DOMelements.labels, this.dom.frame);
          (s.className = o),
            (s.innerHTML = e),
            "left" === i
              ? ((s.style.left = "-" + this.options.labelOffsetX + "px"),
                (s.style.textAlign = "right"))
              : ((s.style.right = "-" + this.options.labelOffsetX + "px"),
                (s.style.textAlign = "left")),
            (s.style.top = t - 0.5 * n + this.options.labelOffsetY + "px"),
            (e += "");
          var r = Math.max(this.props.majorCharWidth, this.props.minorCharWidth);
          this.maxLabelSize < e.length * r && (this.maxLabelSize = e.length * r);
        }),
        (n.prototype._redrawLine = function (t, e, i, o, n) {
          if (this.master === !0) {
            var s = h.getDOMElement(
              "div",
              this.DOMelements.lines,
              this.dom.lineContainer
            );
            (s.className = i),
              (s.innerHTML = ""),
              "left" === e
                ? (s.style.left = this.width - o + "px")
                : (s.style.right = this.width - o + "px"),
              (s.style.width = n + "px"),
              (s.style.top = t + "px");
          }
        }),
        (n.prototype._redrawTitle = function (t) {
          if (
            (h.prepareElements(this.DOMelements.title),
            void 0 !== this.options[t].title && void 0 !== this.options[t].title.text)
          ) {
            var e = h.getDOMElement("div", this.DOMelements.title, this.dom.frame);
            (e.className = "vis-y-axis vis-title vis-" + t),
              (e.innerHTML = this.options[t].title.text),
              void 0 !== this.options[t].title.style &&
                a.addCssText(e, this.options[t].title.style),
              "left" === t
                ? (e.style.left = this.props.titleCharHeight + "px")
                : (e.style.right = this.props.titleCharHeight + "px"),
              (e.style.width = this.height + "px");
          }
          h.cleanupElements(this.DOMelements.title);
        }),
        (n.prototype._calculateCharSize = function () {
          if (!("minorCharHeight" in this.props)) {
            var t = document.createTextNode("0"),
              e = document.createElement("div");
            (e.className = "vis-y-axis vis-minor vis-measure"),
              e.appendChild(t),
              this.dom.frame.appendChild(e),
              (this.props.minorCharHeight = e.clientHeight),
              (this.props.minorCharWidth = e.clientWidth),
              this.dom.frame.removeChild(e);
          }
          if (!("majorCharHeight" in this.props)) {
            var i = document.createTextNode("0"),
              o = document.createElement("div");
            (o.className = "vis-y-axis vis-major vis-measure"),
              o.appendChild(i),
              this.dom.frame.appendChild(o),
              (this.props.majorCharHeight = o.clientHeight),
              (this.props.majorCharWidth = o.clientWidth),
              this.dom.frame.removeChild(o);
          }
          if (!("titleCharHeight" in this.props)) {
            var n = document.createTextNode("0"),
              s = document.createElement("div");
            (s.className = "vis-y-axis vis-title vis-measure"),
              s.appendChild(n),
              this.dom.frame.appendChild(s),
              (this.props.titleCharHeight = s.clientHeight),
              (this.props.titleCharWidth = s.clientWidth),
              this.dom.frame.removeChild(s);
          }
        }),
        (t.exports = n);
    },
    function (t, e) {
      function i(t, e, i, o, n, s) {
        var r = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
          a = arguments.length > 7 && void 0 !== arguments[7] && arguments[7];
        if (
          ((this.majorSteps = [1, 2, 5, 10]),
          (this.minorSteps = [0.25, 0.5, 1, 2]),
          (this.customLines = null),
          (this.containerHeight = n),
          (this.majorCharHeight = s),
          (this._start = t),
          (this._end = e),
          (this.scale = 1),
          (this.minorStepIdx = -1),
          (this.magnitudefactor = 1),
          this.determineScale(),
          (this.zeroAlign = r),
          (this.autoScaleStart = i),
          (this.autoScaleEnd = o),
          (this.formattingFunction = a),
          i || o)
        ) {
          var h = this,
            d = function (t) {
              var e = t - (t % (h.magnitudefactor * h.minorSteps[h.minorStepIdx]));
              return t % (h.magnitudefactor * h.minorSteps[h.minorStepIdx]) >
                0.5 * (h.magnitudefactor * h.minorSteps[h.minorStepIdx])
                ? e + h.magnitudefactor * h.minorSteps[h.minorStepIdx]
                : e;
            };
          i &&
            ((this._start -=
              2 * this.magnitudefactor * this.minorSteps[this.minorStepIdx]),
            (this._start = d(this._start))),
            o &&
              ((this._end += this.magnitudefactor * this.minorSteps[this.minorStepIdx]),
              (this._end = d(this._end))),
            this.determineScale();
        }
      }
      (i.prototype.setCharHeight = function (t) {
        this.majorCharHeight = t;
      }),
        (i.prototype.setHeight = function (t) {
          this.containerHeight = t;
        }),
        (i.prototype.determineScale = function () {
          var t = this._end - this._start;
          this.scale = this.containerHeight / t;
          var e = this.majorCharHeight / this.scale,
            i = t > 0 ? Math.round(Math.log(t) / Math.LN10) : 0;
          (this.minorStepIdx = -1), (this.magnitudefactor = Math.pow(10, i));
          var o = 0;
          i < 0 && (o = i);
          for (var n = !1, s = o; Math.abs(s) <= Math.abs(i); s++) {
            this.magnitudefactor = Math.pow(10, s);
            for (var r = 0; r < this.minorSteps.length; r++) {
              var a = this.magnitudefactor * this.minorSteps[r];
              if (a >= e) {
                (n = !0), (this.minorStepIdx = r);
                break;
              }
            }
            if (n === !0) break;
          }
        }),
        (i.prototype.is_major = function (t) {
          return t % (this.magnitudefactor * this.majorSteps[this.minorStepIdx]) === 0;
        }),
        (i.prototype.getStep = function () {
          return this.magnitudefactor * this.minorSteps[this.minorStepIdx];
        }),
        (i.prototype.getFirstMajor = function () {
          var t = this.magnitudefactor * this.majorSteps[this.minorStepIdx];
          return this.convertValue(this._start + ((t - (this._start % t)) % t));
        }),
        (i.prototype.formatValue = function (t) {
          var e = t.toPrecision(5);
          return (
            "function" == typeof this.formattingFunction &&
              (e = this.formattingFunction(t)),
            "number" == typeof e ? "" + e : "string" == typeof e ? e : t.toPrecision(5)
          );
        }),
        (i.prototype.getLines = function () {
          for (
            var t = [],
              e = this.getStep(),
              i = (e - (this._start % e)) % e,
              o = this._start + i;
            this._end - o > 1e-5;
            o += e
          )
            o != this._start &&
              t.push({
                major: this.is_major(o),
                y: this.convertValue(o),
                val: this.formatValue(o),
              });
          return t;
        }),
        (i.prototype.followScale = function (t) {
          var e = this.minorStepIdx,
            i = this._start,
            o = this._end,
            n = this,
            s = function () {
              n.magnitudefactor *= 2;
            },
            r = function () {
              n.magnitudefactor /= 2;
            };
          (t.minorStepIdx <= 1 && this.minorStepIdx <= 1) ||
            (t.minorStepIdx > 1 && this.minorStepIdx > 1) ||
            (t.minorStepIdx < this.minorStepIdx
              ? ((this.minorStepIdx = 1), 2 == e ? s() : (s(), s()))
              : ((this.minorStepIdx = 2), 1 == e ? r() : (r(), r())));
          for (
            var a = (t.getLines(), t.convertValue(0)),
              h = t.getStep() * t.scale,
              d = !1,
              l = 0;
            !d && l++ < 5;

          ) {
            this.scale =
              h / (this.minorSteps[this.minorStepIdx] * this.magnitudefactor);
            var u = this.containerHeight / this.scale;
            (this._start = i), (this._end = this._start + u);
            var p = this._end * this.scale,
              c = this.magnitudefactor * this.majorSteps[this.minorStepIdx],
              f = this.getFirstMajor() - t.getFirstMajor();
            if (this.zeroAlign) {
              var m = a - p;
              (this._end += m / this.scale), (this._start = this._end - u);
            } else
              this.autoScaleStart
                ? ((this._start -= f / this.scale), (this._end = this._start + u))
                : ((this._start += c - f / this.scale), (this._end = this._start + u));
            if (!this.autoScaleEnd && this._end > o + 1e-5) r(), (d = !1);
            else {
              if (!this.autoScaleStart && this._start < i - 1e-5) {
                if (!(this.zeroAlign && i >= 0)) {
                  r(), (d = !1);
                  continue;
                }
                console.warn("Can't adhere to given 'min' range, due to zeroalign");
              }
              this.autoScaleStart && this.autoScaleEnd && u < o - i
                ? (s(), (d = !1))
                : (d = !0);
            }
          }
        }),
        (i.prototype.convertValue = function (t) {
          return this.containerHeight - (t - this._start) * this.scale;
        }),
        (i.prototype.screenToValue = function (t) {
          return (this.containerHeight - t) / this.scale + this._start;
        }),
        (t.exports = i);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e, i, o) {
        this.id = e;
        var n = [
          "sampling",
          "style",
          "sort",
          "yAxisOrientation",
          "barChart",
          "drawPoints",
          "shaded",
          "interpolation",
          "zIndex",
          "excludeFromStacking",
          "excludeFromLegend",
        ];
        (this.options = a.selectiveBridgeObject(n, i)),
          (this.usingDefaultStyle = void 0 === t.className),
          (this.groupsUsingDefaultStyles = o),
          (this.zeroPosition = 0),
          this.update(t),
          1 == this.usingDefaultStyle && (this.groupsUsingDefaultStyles[0] += 1),
          (this.itemsData = []),
          (this.visible = void 0 === t.visible || t.visible);
      }
      var s = i(62),
        r = o(s),
        a = i(1),
        h = (i(87), i(134)),
        d = i(136),
        l = i(135);
      (n.prototype.setItems = function (t) {
        null != t
          ? ((this.itemsData = t),
            1 == this.options.sort &&
              a.insertSort(this.itemsData, function (t, e) {
                return t.x > e.x ? 1 : -1;
              }))
          : (this.itemsData = []);
      }),
        (n.prototype.getItems = function () {
          return this.itemsData;
        }),
        (n.prototype.setZeroPosition = function (t) {
          this.zeroPosition = t;
        }),
        (n.prototype.setOptions = function (t) {
          if (void 0 !== t) {
            var e = [
              "sampling",
              "style",
              "sort",
              "yAxisOrientation",
              "barChart",
              "zIndex",
              "excludeFromStacking",
              "excludeFromLegend",
            ];
            a.selectiveDeepExtend(e, this.options, t),
              "function" == typeof t.drawPoints &&
                (t.drawPoints = {onRender: t.drawPoints}),
              a.mergeOptions(this.options, t, "interpolation"),
              a.mergeOptions(this.options, t, "drawPoints"),
              a.mergeOptions(this.options, t, "shaded"),
              t.interpolation &&
                "object" == (0, r.default)(t.interpolation) &&
                t.interpolation.parametrization &&
                ("uniform" == t.interpolation.parametrization
                  ? (this.options.interpolation.alpha = 0)
                  : "chordal" == t.interpolation.parametrization
                  ? (this.options.interpolation.alpha = 1)
                  : ((this.options.interpolation.parametrization = "centripetal"),
                    (this.options.interpolation.alpha = 0.5)));
          }
        }),
        (n.prototype.update = function (t) {
          (this.group = t),
            (this.content = t.content || "graph"),
            (this.className =
              t.className ||
              this.className ||
              "vis-graph-group" + (this.groupsUsingDefaultStyles[0] % 10)),
            (this.visible = void 0 === t.visible || t.visible),
            (this.style = t.style),
            this.setOptions(t.options);
        }),
        (n.prototype.getLegend = function (t, e, i, o, n) {
          if (void 0 == i || null == i) {
            var s = document.createElementNS("http://www.w3.org/2000/svg", "svg");
            i = {svg: s, svgElements: {}, options: this.options, groups: [this]};
          }
          switch (
            ((void 0 != o && null != o) || (o = 0),
            (void 0 != n && null != n) || (n = 0.5 * e),
            this.options.style)
          ) {
            case "line":
              d.drawIcon(this, o, n, t, e, i);
              break;
            case "points":
            case "point":
              l.drawIcon(this, o, n, t, e, i);
              break;
            case "bar":
              h.drawIcon(this, o, n, t, e, i);
          }
          return {
            icon: i.svg,
            label: this.content,
            orientation: this.options.yAxisOrientation,
          };
        }),
        (n.prototype.getYRange = function (t) {
          for (var e = t[0].y, i = t[0].y, o = 0; o < t.length; o++)
            (e = e > t[o].y ? t[o].y : e), (i = i < t[o].y ? t[o].y : i);
          return {min: e, max: i, yAxisOrientation: this.options.yAxisOrientation};
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      function o(t, e) {}
      var n = i(87),
        s = i(135);
      (o.drawIcon = function (t, e, i, o, s, r) {
        var a = 0.5 * s,
          h = n.getSVGElement("rect", r.svgElements, r.svg);
        h.setAttributeNS(null, "x", e),
          h.setAttributeNS(null, "y", i - a),
          h.setAttributeNS(null, "width", o),
          h.setAttributeNS(null, "height", 2 * a),
          h.setAttributeNS(null, "class", "vis-outline");
        var d = Math.round(0.3 * o),
          l = t.options.barChart.width,
          u = l / d,
          p = Math.round(0.4 * s),
          c = Math.round(0.75 * s),
          f = Math.round((o - 2 * d) / 3);
        if (
          (n.drawBar(
            e + 0.5 * d + f,
            i + a - p - 1,
            d,
            p,
            t.className + " vis-bar",
            r.svgElements,
            r.svg,
            t.style
          ),
          n.drawBar(
            e + 1.5 * d + f + 2,
            i + a - c - 1,
            d,
            c,
            t.className + " vis-bar",
            r.svgElements,
            r.svg,
            t.style
          ),
          1 == t.options.drawPoints.enabled)
        ) {
          var m = {
            style: t.options.drawPoints.style,
            styles: t.options.drawPoints.styles,
            size: t.options.drawPoints.size / u,
            className: t.className,
          };
          n.drawPoint(e + 0.5 * d + f, i + a - p - 1, m, r.svgElements, r.svg),
            n.drawPoint(e + 1.5 * d + f + 2, i + a - c - 1, m, r.svgElements, r.svg);
        }
      }),
        (o.draw = function (t, e, i) {
          var r,
            a,
            h,
            d,
            l,
            u,
            p = [],
            c = {},
            f = 0;
          for (l = 0; l < t.length; l++)
            if (
              ((d = i.groups[t[l]]),
              "bar" === d.options.style &&
                d.visible === !0 &&
                (void 0 === i.options.groups.visibility[t[l]] ||
                  i.options.groups.visibility[t[l]] === !0))
            )
              for (u = 0; u < e[t[l]].length; u++)
                p.push({
                  screen_x: e[t[l]][u].screen_x,
                  screen_end: e[t[l]][u].screen_end,
                  screen_y: e[t[l]][u].screen_y,
                  x: e[t[l]][u].x,
                  end: e[t[l]][u].end,
                  y: e[t[l]][u].y,
                  groupId: t[l],
                  label: e[t[l]][u].label,
                }),
                  (f += 1);
          if (0 !== f)
            for (
              p.sort(function (t, e) {
                return t.screen_x === e.screen_x
                  ? t.groupId < e.groupId
                    ? -1
                    : 1
                  : t.screen_x - e.screen_x;
              }),
                o._getDataIntersections(c, p),
                l = 0;
              l < p.length;
              l++
            ) {
              d = i.groups[p[l].groupId];
              var m =
                void 0 != d.options.barChart.minWidth
                  ? d.options.barChart.minWidth
                  : 0.1 * d.options.barChart.width;
              a = p[l].screen_x;
              var g = 0;
              if (void 0 === c[a])
                l + 1 < p.length && (r = Math.abs(p[l + 1].screen_x - a)),
                  (h = o._getSafeDrawData(r, d, m));
              else {
                var v = l + (c[a].amount - c[a].resolved);
                l - (c[a].resolved + 1);
                v < p.length && (r = Math.abs(p[v].screen_x - a)),
                  (h = o._getSafeDrawData(r, d, m)),
                  (c[a].resolved += 1),
                  d.options.stack === !0 && d.options.excludeFromStacking !== !0
                    ? p[l].screen_y < d.zeroPosition
                      ? ((g = c[a].accumulatedNegative),
                        (c[a].accumulatedNegative += d.zeroPosition - p[l].screen_y))
                      : ((g = c[a].accumulatedPositive),
                        (c[a].accumulatedPositive += d.zeroPosition - p[l].screen_y))
                    : d.options.barChart.sideBySide === !0 &&
                      ((h.width = h.width / c[a].amount),
                      (h.offset +=
                        c[a].resolved * h.width - 0.5 * h.width * (c[a].amount + 1)));
              }
              var y = h.width,
                b = p[l].screen_x;
              if (
                (void 0 != p[l].screen_end
                  ? ((y = p[l].screen_end - p[l].screen_x), (b += 0.5 * y))
                  : (b += h.offset),
                n.drawBar(
                  b,
                  p[l].screen_y - g,
                  y,
                  d.zeroPosition - p[l].screen_y,
                  d.className + " vis-bar",
                  i.svgElements,
                  i.svg,
                  d.style
                ),
                d.options.drawPoints.enabled === !0)
              ) {
                var _ = {
                  screen_x: p[l].screen_x,
                  screen_y: p[l].screen_y - g,
                  x: p[l].x,
                  y: p[l].y,
                  groupId: p[l].groupId,
                  label: p[l].label,
                };
                s.draw([_], d, i, h.offset);
              }
            }
        }),
        (o._getDataIntersections = function (t, e) {
          for (var i, o = 0; o < e.length; o++)
            o + 1 < e.length && (i = Math.abs(e[o + 1].screen_x - e[o].screen_x)),
              o > 0 && (i = Math.min(i, Math.abs(e[o - 1].screen_x - e[o].screen_x))),
              0 === i &&
                (void 0 === t[e[o].screen_x] &&
                  (t[e[o].screen_x] = {
                    amount: 0,
                    resolved: 0,
                    accumulatedPositive: 0,
                    accumulatedNegative: 0,
                  }),
                (t[e[o].screen_x].amount += 1));
        }),
        (o._getSafeDrawData = function (t, e, i) {
          var o, n;
          return (
            t < e.options.barChart.width && t > 0
              ? ((o = t < i ? i : t),
                (n = 0),
                "left" === e.options.barChart.align
                  ? (n -= 0.5 * t)
                  : "right" === e.options.barChart.align && (n += 0.5 * t))
              : ((o = e.options.barChart.width),
                (n = 0),
                "left" === e.options.barChart.align
                  ? (n -= 0.5 * e.options.barChart.width)
                  : "right" === e.options.barChart.align &&
                    (n += 0.5 * e.options.barChart.width)),
            {width: o, offset: n}
          );
        }),
        (o.getStackedYRange = function (t, e, i, n, s) {
          if (t.length > 0) {
            t.sort(function (t, e) {
              return t.screen_x === e.screen_x
                ? t.groupId < e.groupId
                  ? -1
                  : 1
                : t.screen_x - e.screen_x;
            });
            var r = {};
            o._getDataIntersections(r, t),
              (e[n] = o._getStackedYRange(r, t)),
              (e[n].yAxisOrientation = s),
              i.push(n);
          }
        }),
        (o._getStackedYRange = function (t, e) {
          for (var i, o = e[0].screen_y, n = e[0].screen_y, s = 0; s < e.length; s++)
            (i = e[s].screen_x),
              void 0 === t[i]
                ? ((o = o > e[s].screen_y ? e[s].screen_y : o),
                  (n = n < e[s].screen_y ? e[s].screen_y : n))
                : e[s].screen_y < 0
                ? (t[i].accumulatedNegative += e[s].screen_y)
                : (t[i].accumulatedPositive += e[s].screen_y);
          for (var r in t)
            t.hasOwnProperty(r) &&
              ((o = o > t[r].accumulatedNegative ? t[r].accumulatedNegative : o),
              (o = o > t[r].accumulatedPositive ? t[r].accumulatedPositive : o),
              (n = n < t[r].accumulatedNegative ? t[r].accumulatedNegative : n),
              (n = n < t[r].accumulatedPositive ? t[r].accumulatedPositive : n));
          return {min: o, max: n};
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e) {}
      function s(t, e) {
        return (
          (e = "undefined" == typeof e ? {} : e),
          {
            style: e.style || t.options.drawPoints.style,
            styles: e.styles || t.options.drawPoints.styles,
            size: e.size || t.options.drawPoints.size,
            className: e.className || t.className,
          }
        );
      }
      function r(t, e) {
        var i = void 0;
        return (
          t.options &&
            t.options.drawPoints &&
            t.options.drawPoints.onRender &&
            "function" == typeof t.options.drawPoints.onRender &&
            (i = t.options.drawPoints.onRender),
          e.group.options &&
            e.group.options.drawPoints &&
            e.group.options.drawPoints.onRender &&
            "function" == typeof e.group.options.drawPoints.onRender &&
            (i = e.group.options.drawPoints.onRender),
          i
        );
      }
      var a = i(62),
        h = o(a),
        d = i(87);
      (n.draw = function (t, e, i, o) {
        o = o || 0;
        for (var n = r(i, e), a = 0; a < t.length; a++)
          if (n) {
            var l = n(t[a], e);
            (l !== !0 &&
              "object" !==
                ("undefined" == typeof l ? "undefined" : (0, h.default)(l))) ||
              d.drawPoint(
                t[a].screen_x + o,
                t[a].screen_y,
                s(e, l),
                i.svgElements,
                i.svg,
                t[a].label
              );
          } else
            d.drawPoint(
              t[a].screen_x + o,
              t[a].screen_y,
              s(e),
              i.svgElements,
              i.svg,
              t[a].label
            );
      }),
        (n.drawIcon = function (t, e, i, o, n, r) {
          var a = 0.5 * n,
            h = d.getSVGElement("rect", r.svgElements, r.svg);
          h.setAttributeNS(null, "x", e),
            h.setAttributeNS(null, "y", i - a),
            h.setAttributeNS(null, "width", o),
            h.setAttributeNS(null, "height", 2 * a),
            h.setAttributeNS(null, "class", "vis-outline"),
            d.drawPoint(e + 0.5 * o, i, s(t), r.svgElements, r.svg);
        }),
        (t.exports = n);
    },
    function (t, e, i) {
      function o(t, e) {}
      var n = i(87);
      (o.calcPath = function (t, e) {
        if (null != t && t.length > 0) {
          var i = [];
          return (i =
            1 == e.options.interpolation.enabled ? o._catmullRom(t, e) : o._linear(t));
        }
      }),
        (o.drawIcon = function (t, e, i, o, s, r) {
          var a,
            h,
            d = 0.5 * s,
            l = n.getSVGElement("rect", r.svgElements, r.svg);
          if (
            (l.setAttributeNS(null, "x", e),
            l.setAttributeNS(null, "y", i - d),
            l.setAttributeNS(null, "width", o),
            l.setAttributeNS(null, "height", 2 * d),
            l.setAttributeNS(null, "class", "vis-outline"),
            (a = n.getSVGElement("path", r.svgElements, r.svg)),
            a.setAttributeNS(null, "class", t.className),
            void 0 !== t.style && a.setAttributeNS(null, "style", t.style),
            a.setAttributeNS(null, "d", "M" + e + "," + i + " L" + (e + o) + "," + i),
            1 == t.options.shaded.enabled &&
              ((h = n.getSVGElement("path", r.svgElements, r.svg)),
              "top" == t.options.shaded.orientation
                ? h.setAttributeNS(
                    null,
                    "d",
                    "M" +
                      e +
                      ", " +
                      (i - d) +
                      "L" +
                      e +
                      "," +
                      i +
                      " L" +
                      (e + o) +
                      "," +
                      i +
                      " L" +
                      (e + o) +
                      "," +
                      (i - d)
                  )
                : h.setAttributeNS(
                    null,
                    "d",
                    "M" +
                      e +
                      "," +
                      i +
                      " L" +
                      e +
                      "," +
                      (i + d) +
                      " L" +
                      (e + o) +
                      "," +
                      (i + d) +
                      "L" +
                      (e + o) +
                      "," +
                      i
                  ),
              h.setAttributeNS(null, "class", t.className + " vis-icon-fill"),
              void 0 !== t.options.shaded.style &&
                "" !== t.options.shaded.style &&
                h.setAttributeNS(null, "style", t.options.shaded.style)),
            1 == t.options.drawPoints.enabled)
          ) {
            var u = {
              style: t.options.drawPoints.style,
              styles: t.options.drawPoints.styles,
              size: t.options.drawPoints.size,
              className: t.className,
            };
            n.drawPoint(e + 0.5 * o, i, u, r.svgElements, r.svg);
          }
        }),
        (o.drawShading = function (t, e, i, o) {
          if (1 == e.options.shaded.enabled) {
            var s = Number(o.svg.style.height.replace("px", "")),
              r = n.getSVGElement("path", o.svgElements, o.svg),
              a = "L";
            1 == e.options.interpolation.enabled && (a = "C");
            var h,
              d = 0;
            (d =
              "top" == e.options.shaded.orientation
                ? 0
                : "bottom" == e.options.shaded.orientation
                ? s
                : Math.min(Math.max(0, e.zeroPosition), s)),
              (h =
                "group" == e.options.shaded.orientation && null != i && void 0 != i
                  ? "M" +
                    t[0][0] +
                    "," +
                    t[0][1] +
                    " " +
                    this.serializePath(t, a, !1) +
                    " L" +
                    i[i.length - 1][0] +
                    "," +
                    i[i.length - 1][1] +
                    " " +
                    this.serializePath(i, a, !0) +
                    i[0][0] +
                    "," +
                    i[0][1] +
                    " Z"
                  : "M" +
                    t[0][0] +
                    "," +
                    t[0][1] +
                    " " +
                    this.serializePath(t, a, !1) +
                    " V" +
                    d +
                    " H" +
                    t[0][0] +
                    " Z"),
              r.setAttributeNS(null, "class", e.className + " vis-fill"),
              void 0 !== e.options.shaded.style &&
                r.setAttributeNS(null, "style", e.options.shaded.style),
              r.setAttributeNS(null, "d", h);
          }
        }),
        (o.draw = function (t, e, i) {
          if (null != t && void 0 != t) {
            var o = n.getSVGElement("path", i.svgElements, i.svg);
            o.setAttributeNS(null, "class", e.className),
              void 0 !== e.style && o.setAttributeNS(null, "style", e.style);
            var s = "L";
            1 == e.options.interpolation.enabled && (s = "C"),
              o.setAttributeNS(
                null,
                "d",
                "M" + t[0][0] + "," + t[0][1] + " " + this.serializePath(t, s, !1)
              );
          }
        }),
        (o.serializePath = function (t, e, i) {
          if (t.length < 2) return "";
          var o = e;
          if (i)
            for (var n = t.length - 2; n > 0; n--) o += t[n][0] + "," + t[n][1] + " ";
          else for (var n = 1; n < t.length; n++) o += t[n][0] + "," + t[n][1] + " ";
          return o;
        }),
        (o._catmullRomUniform = function (t) {
          var e,
            i,
            o,
            n,
            s,
            r,
            a = [];
          a.push([Math.round(t[0].screen_x), Math.round(t[0].screen_y)]);
          for (var h = 1 / 6, d = t.length, l = 0; l < d - 1; l++)
            (e = 0 == l ? t[0] : t[l - 1]),
              (i = t[l]),
              (o = t[l + 1]),
              (n = l + 2 < d ? t[l + 2] : o),
              (s = {
                screen_x: (-e.screen_x + 6 * i.screen_x + o.screen_x) * h,
                screen_y: (-e.screen_y + 6 * i.screen_y + o.screen_y) * h,
              }),
              (r = {
                screen_x: (i.screen_x + 6 * o.screen_x - n.screen_x) * h,
                screen_y: (i.screen_y + 6 * o.screen_y - n.screen_y) * h,
              }),
              a.push([s.screen_x, s.screen_y]),
              a.push([r.screen_x, r.screen_y]),
              a.push([o.screen_x, o.screen_y]);
          return a;
        }),
        (o._catmullRom = function (t, e) {
          var i = e.options.interpolation.alpha;
          if (0 == i || void 0 === i) return this._catmullRomUniform(t);
          var o,
            n,
            s,
            r,
            a,
            h,
            d,
            l,
            u,
            p,
            c,
            f,
            m,
            g,
            v,
            y,
            b,
            _,
            w,
            x = [];
          x.push([Math.round(t[0].screen_x), Math.round(t[0].screen_y)]);
          for (var D = t.length, S = 0; S < D - 1; S++)
            (o = 0 == S ? t[0] : t[S - 1]),
              (n = t[S]),
              (s = t[S + 1]),
              (r = S + 2 < D ? t[S + 2] : s),
              (d = Math.sqrt(
                Math.pow(o.screen_x - n.screen_x, 2) +
                  Math.pow(o.screen_y - n.screen_y, 2)
              )),
              (l = Math.sqrt(
                Math.pow(n.screen_x - s.screen_x, 2) +
                  Math.pow(n.screen_y - s.screen_y, 2)
              )),
              (u = Math.sqrt(
                Math.pow(s.screen_x - r.screen_x, 2) +
                  Math.pow(s.screen_y - r.screen_y, 2)
              )),
              (g = Math.pow(u, i)),
              (y = Math.pow(u, 2 * i)),
              (v = Math.pow(l, i)),
              (b = Math.pow(l, 2 * i)),
              (w = Math.pow(d, i)),
              (_ = Math.pow(d, 2 * i)),
              (p = 2 * _ + 3 * w * v + b),
              (c = 2 * y + 3 * g * v + b),
              (f = 3 * w * (w + v)),
              f > 0 && (f = 1 / f),
              (m = 3 * g * (g + v)),
              m > 0 && (m = 1 / m),
              (a = {
                screen_x: (-b * o.screen_x + p * n.screen_x + _ * s.screen_x) * f,
                screen_y: (-b * o.screen_y + p * n.screen_y + _ * s.screen_y) * f,
              }),
              (h = {
                screen_x: (y * n.screen_x + c * s.screen_x - b * r.screen_x) * m,
                screen_y: (y * n.screen_y + c * s.screen_y - b * r.screen_y) * m,
              }),
              0 == a.screen_x && 0 == a.screen_y && (a = n),
              0 == h.screen_x && 0 == h.screen_y && (h = s),
              x.push([a.screen_x, a.screen_y]),
              x.push([h.screen_x, h.screen_y]),
              x.push([s.screen_x, s.screen_y]);
          return x;
        }),
        (o._linear = function (t) {
          for (var e = [], i = 0; i < t.length; i++)
            e.push([t[i].screen_x, t[i].screen_y]);
          return e;
        }),
        (t.exports = o);
    },
    function (t, e, i) {
      function o(t) {
        return t && t.__esModule ? t : {default: t};
      }
      function n(t, e, i, o) {
        (this.body = t),
          (this.defaultOptions = {
            enabled: !1,
            icons: !0,
            iconSize: 20,
            iconSpacing: 6,
            left: {visible: !0, position: "top-left"},
            right: {visible: !0, position: "top-right"},
          }),
          (this.side = i),
          (this.options = a.extend({}, this.defaultOptions)),
          (this.linegraphOptions = o),
          (this.svgElements = {}),
          (this.dom = {}),
          (this.groups = {}),
          (this.amountOfGroups = 0),
          this._create(),
          (this.framework = {
            svg: this.svg,
            svgElements: this.svgElements,
            options: this.options,
            groups: this.groups,
          }),
          this.setOptions(e);
      }
      var s = i(58),
        r = o(s),
        a = i(1),
        h = i(87),
        d = i(100);
      (n.prototype = new d()),
        (n.prototype.clear = function () {
          (this.groups = {}), (this.amountOfGroups = 0);
        }),
        (n.prototype.addGroup = function (t, e) {
          1 != e.options.excludeFromLegend &&
            (this.groups.hasOwnProperty(t) || (this.groups[t] = e),
            (this.amountOfGroups += 1));
        }),
        (n.prototype.updateGroup = function (t, e) {
          this.groups[t] = e;
        }),
        (n.prototype.removeGroup = function (t) {
          this.groups.hasOwnProperty(t) &&
            (delete this.groups[t], (this.amountOfGroups -= 1));
        }),
        (n.prototype._create = function () {
          (this.dom.frame = document.createElement("div")),
            (this.dom.frame.className = "vis-legend"),
            (this.dom.frame.style.position = "absolute"),
            (this.dom.frame.style.top = "10px"),
            (this.dom.frame.style.display = "block"),
            (this.dom.textArea = document.createElement("div")),
            (this.dom.textArea.className = "vis-legend-text"),
            (this.dom.textArea.style.position = "relative"),
            (this.dom.textArea.style.top = "0px"),
            (this.svg = document.createElementNS("http://www.w3.org/2000/svg", "svg")),
            (this.svg.style.position = "absolute"),
            (this.svg.style.top = "0px"),
            (this.svg.style.width = this.options.iconSize + 5 + "px"),
            (this.svg.style.height = "100%"),
            this.dom.frame.appendChild(this.svg),
            this.dom.frame.appendChild(this.dom.textArea);
        }),
        (n.prototype.hide = function () {
          this.dom.frame.parentNode &&
            this.dom.frame.parentNode.removeChild(this.dom.frame);
        }),
        (n.prototype.show = function () {
          this.dom.frame.parentNode || this.body.dom.center.appendChild(this.dom.frame);
        }),
        (n.prototype.setOptions = function (t) {
          var e = ["enabled", "orientation", "icons", "left", "right"];
          a.selectiveDeepExtend(e, this.options, t);
        }),
        (n.prototype.redraw = function () {
          var t = 0,
            e = (0, r.default)(this.groups);
          e.sort(function (t, e) {
            return t < e ? -1 : 1;
          });
          for (var i = 0; i < e.length; i++) {
            var o = e[i];
            1 != this.groups[o].visible ||
              (void 0 !== this.linegraphOptions.visibility[o] &&
                1 != this.linegraphOptions.visibility[o]) ||
              t++;
          }
          if (
            0 == this.options[this.side].visible ||
            0 == this.amountOfGroups ||
            0 == this.options.enabled ||
            0 == t
          )
            this.hide();
          else {
            if (
              (this.show(),
              "top-left" == this.options[this.side].position ||
              "bottom-left" == this.options[this.side].position
                ? ((this.dom.frame.style.left = "4px"),
                  (this.dom.frame.style.textAlign = "left"),
                  (this.dom.textArea.style.textAlign = "left"),
                  (this.dom.textArea.style.left = this.options.iconSize + 15 + "px"),
                  (this.dom.textArea.style.right = ""),
                  (this.svg.style.left = "0px"),
                  (this.svg.style.right = ""))
                : ((this.dom.frame.style.right = "4px"),
                  (this.dom.frame.style.textAlign = "right"),
                  (this.dom.textArea.style.textAlign = "right"),
                  (this.dom.textArea.style.right = this.options.iconSize + 15 + "px"),
                  (this.dom.textArea.style.left = ""),
                  (this.svg.style.right = "0px"),
                  (this.svg.style.left = "")),
              "top-left" == this.options[this.side].position ||
                "top-right" == this.options[this.side].position)
            )
              (this.dom.frame.style.top =
                4 - Number(this.body.dom.center.style.top.replace("px", "")) + "px"),
                (this.dom.frame.style.bottom = "");
            else {
              var n =
                this.body.domProps.center.height -
                this.body.domProps.centerContainer.height;
              (this.dom.frame.style.bottom =
                4 +
                n +
                Number(this.body.dom.center.style.top.replace("px", "")) +
                "px"),
                (this.dom.frame.style.top = "");
            }
            0 == this.options.icons
              ? ((this.dom.frame.style.width =
                  this.dom.textArea.offsetWidth + 10 + "px"),
                (this.dom.textArea.style.right = ""),
                (this.dom.textArea.style.left = ""),
                (this.svg.style.width = "0px"))
              : ((this.dom.frame.style.width =
                  this.options.iconSize +
                  15 +
                  this.dom.textArea.offsetWidth +
                  10 +
                  "px"),
                this.drawLegendIcons());
            for (var s = "", i = 0; i < e.length; i++) {
              var o = e[i];
              1 != this.groups[o].visible ||
                (void 0 !== this.linegraphOptions.visibility[o] &&
                  1 != this.linegraphOptions.visibility[o]) ||
                (s += this.groups[o].content + "<br />");
            }
            (this.dom.textArea.innerHTML = s),
              (this.dom.textArea.style.lineHeight =
                0.75 * this.options.iconSize + this.options.iconSpacing + "px");
          }
        }),
        (n.prototype.drawLegendIcons = function () {
          if (this.dom.frame.parentNode) {
            var t = (0, r.default)(this.groups);
            t.sort(function (t, e) {
              return t < e ? -1 : 1;
            }),
              h.resetElements(this.svgElements);
            var e = window.getComputedStyle(this.dom.frame).paddingTop,
              i = Number(e.replace("px", "")),
              o = i,
              n = this.options.iconSize,
              s = 0.75 * this.options.iconSize,
              a = i + 0.5 * s + 3;
            this.svg.style.width = n + 5 + i + "px";
            for (var d = 0; d < t.length; d++) {
              var l = t[d];
              1 != this.groups[l].visible ||
                (void 0 !== this.linegraphOptions.visibility[l] &&
                  1 != this.linegraphOptions.visibility[l]) ||
                (this.groups[l].getLegend(n, s, this.framework, o, a),
                (a += s + this.options.iconSpacing));
            }
          }
        }),
        (t.exports = n);
    },
    function (t, e) {
      Object.defineProperty(e, "__esModule", {value: !0});
      var i = "string",
        o = "boolean",
        n = "number",
        s = "array",
        r = "date",
        a = "object",
        h = "dom",
        d = "moment",
        l = "any",
        u = {
          configure: {
            enabled: {boolean: o},
            filter: {boolean: o, function: "function"},
            container: {dom: h},
            __type__: {object: a, boolean: o, function: "function"},
          },
          yAxisOrientation: {string: ["left", "right"]},
          defaultGroup: {string: i},
          sort: {boolean: o},
          sampling: {boolean: o},
          stack: {boolean: o},
          graphHeight: {string: i, number: n},
          shaded: {
            enabled: {boolean: o},
            orientation: {string: ["bottom", "top", "zero", "group"]},
            groupId: {object: a},
            __type__: {boolean: o, object: a},
          },
          style: {string: ["line", "bar", "points"]},
          barChart: {
            width: {number: n},
            minWidth: {number: n},
            sideBySide: {boolean: o},
            align: {string: ["left", "center", "right"]},
            __type__: {object: a},
          },
          interpolation: {
            enabled: {boolean: o},
            parametrization: {string: ["centripetal", "chordal", "uniform"]},
            alpha: {number: n},
            __type__: {object: a, boolean: o},
          },
          drawPoints: {
            enabled: {boolean: o},
            onRender: {function: "function"},
            size: {number: n},
            style: {string: ["square", "circle"]},
            __type__: {object: a, boolean: o, function: "function"},
          },
          dataAxis: {
            showMinorLabels: {boolean: o},
            showMajorLabels: {boolean: o},
            icons: {boolean: o},
            width: {string: i, number: n},
            visible: {boolean: o},
            alignZeros: {boolean: o},
            left: {
              range: {
                min: {number: n, undefined: "undefined"},
                max: {number: n, undefined: "undefined"},
                __type__: {object: a},
              },
              format: {function: "function"},
              title: {
                text: {string: i, number: n, undefined: "undefined"},
                style: {string: i, undefined: "undefined"},
                __type__: {object: a},
              },
              __type__: {object: a},
            },
            right: {
              range: {
                min: {number: n, undefined: "undefined"},
                max: {number: n, undefined: "undefined"},
                __type__: {object: a},
              },
              format: {function: "function"},
              title: {
                text: {string: i, number: n, undefined: "undefined"},
                style: {string: i, undefined: "undefined"},
                __type__: {object: a},
              },
              __type__: {object: a},
            },
            __type__: {object: a},
          },
          legend: {
            enabled: {boolean: o},
            icons: {boolean: o},
            left: {
              visible: {boolean: o},
              position: {
                string: ["top-right", "bottom-right", "top-left", "bottom-left"],
              },
              __type__: {object: a},
            },
            right: {
              visible: {boolean: o},
              position: {
                string: ["top-right", "bottom-right", "top-left", "bottom-left"],
              },
              __type__: {object: a},
            },
            __type__: {object: a, boolean: o},
          },
          groups: {visibility: {any: l}, __type__: {object: a}},
          autoResize: {boolean: o},
          throttleRedraw: {number: n},
          clickToUse: {boolean: o},
          end: {number: n, date: r, string: i, moment: d},
          format: {
            minorLabels: {
              millisecond: {string: i, undefined: "undefined"},
              second: {string: i, undefined: "undefined"},
              minute: {string: i, undefined: "undefined"},
              hour: {string: i, undefined: "undefined"},
              weekday: {string: i, undefined: "undefined"},
              day: {string: i, undefined: "undefined"},
              month: {string: i, undefined: "undefined"},
              year: {string: i, undefined: "undefined"},
              __type__: {object: a},
            },
            majorLabels: {
              millisecond: {string: i, undefined: "undefined"},
              second: {string: i, undefined: "undefined"},
              minute: {string: i, undefined: "undefined"},
              hour: {string: i, undefined: "undefined"},
              weekday: {string: i, undefined: "undefined"},
              day: {string: i, undefined: "undefined"},
              month: {string: i, undefined: "undefined"},
              year: {string: i, undefined: "undefined"},
              __type__: {object: a},
            },
            __type__: {object: a},
          },
          moment: {function: "function"},
          height: {string: i, number: n},
          hiddenDates: {
            start: {date: r, number: n, string: i, moment: d},
            end: {date: r, number: n, string: i, moment: d},
            repeat: {string: i},
            __type__: {object: a, array: s},
          },
          locale: {string: i},
          locales: {__any__: {any: l}, __type__: {object: a}},
          max: {date: r, number: n, string: i, moment: d},
          maxHeight: {number: n, string: i},
          maxMinorChars: {number: n},
          min: {date: r, number: n, string: i, moment: d},
          minHeight: {number: n, string: i},
          moveable: {boolean: o},
          multiselect: {boolean: o},
          orientation: {string: i},
          showCurrentTime: {boolean: o},
          showMajorLabels: {boolean: o},
          showMinorLabels: {boolean: o},
          start: {date: r, number: n, string: i, moment: d},
          timeAxis: {
            scale: {string: i, undefined: "undefined"},
            step: {number: n, undefined: "undefined"},
            __type__: {object: a},
          },
          width: {string: i, number: n},
          zoomable: {boolean: o},
          zoomKey: {string: ["ctrlKey", "altKey", "metaKey", ""]},
          zoomMax: {number: n},
          zoomMin: {number: n},
          zIndex: {number: n},
          __type__: {object: a},
        },
        p = {
          global: {
            sort: !0,
            sampling: !0,
            stack: !1,
            shaded: {enabled: !1, orientation: ["zero", "top", "bottom", "group"]},
            style: ["line", "bar", "points"],
            barChart: {
              width: [50, 5, 100, 5],
              minWidth: [50, 5, 100, 5],
              sideBySide: !1,
              align: ["left", "center", "right"],
            },
            interpolation: {
              enabled: !0,
              parametrization: ["centripetal", "chordal", "uniform"],
            },
            drawPoints: {enabled: !0, size: [6, 2, 30, 1], style: ["square", "circle"]},
            dataAxis: {
              showMinorLabels: !0,
              showMajorLabels: !0,
              icons: !1,
              width: [40, 0, 200, 1],
              visible: !0,
              alignZeros: !0,
              left: {title: {text: "", style: ""}},
              right: {title: {text: "", style: ""}},
            },
            legend: {
              enabled: !1,
              icons: !0,
              left: {
                visible: !0,
                position: ["top-right", "bottom-right", "top-left", "bottom-left"],
              },
              right: {
                visible: !0,
                position: ["top-right", "bottom-right", "top-left", "bottom-left"],
              },
            },
            autoResize: !0,
            clickToUse: !1,
            end: "",
            format: {
              minorLabels: {
                millisecond: "SSS",
                second: "s",
                minute: "HH:mm",
                hour: "HH:mm",
                weekday: "ddd D",
                day: "D",
                month: "MMM",
                year: "YYYY",
              },
              majorLabels: {
                millisecond: "HH:mm:ss",
                second: "D MMMM HH:mm",
                minute: "ddd D MMMM",
                hour: "ddd D MMMM",
                weekday: "MMMM YYYY",
                day: "MMMM YYYY",
                month: "YYYY",
                year: "",
              },
            },
            height: "",
            locale: "",
            max: "",
            maxHeight: "",
            maxMinorChars: [7, 0, 20, 1],
            min: "",
            minHeight: "",
            moveable: !0,
            orientation: ["both", "bottom", "top"],
            showCurrentTime: !1,
            showMajorLabels: !0,
            showMinorLabels: !0,
            start: "",
            width: "100%",
            zoomable: !0,
            zoomKey: ["ctrlKey", "altKey", "metaKey", ""],
            zoomMax: [31536e10, 10, 31536e10, 1],
            zoomMin: [10, 10, 31536e10, 1],
            zIndex: 0,
          },
        };
      (e.allOptions = u), (e.configureOptions = p);
    },
  ]);
});
