!(function (e) {
  var t = {}
  function n(a) {
    if (t[a]) return t[a].exports
    var o = (t[a] = { i: a, l: !1, exports: {} })
    return e[a].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = e),
    (n.c = t),
    (n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: a })
    }),
    (n.r = function (e) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 })
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e
      if (4 & t && 'object' == typeof e && e && e.__esModule) return e
      var a = Object.create(null)
      if (
        (n.r(a),
        Object.defineProperty(a, 'default', { enumerable: !0, value: e }),
        2 & t && 'string' != typeof e)
      )
        for (var o in e)
          n.d(
            a,
            o,
            function (t) {
              return e[t]
            }.bind(null, o)
          )
      return a
    }),
    (n.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default
            }
          : function () {
              return e
            }
      return n.d(t, 'a', t), t
    }),
    (n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }),
    (n.p = ''),
    n((n.s = 69))
})([
  function (e, t, n) {
    e.exports = (function () {
      'use strict'
      var e = 'millisecond',
        t = 'second',
        n = 'minute',
        a = 'hour',
        o = 'day',
        i = 'week',
        r = 'month',
        s = 'quarter',
        l = 'year',
        d = 'date',
        c = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
        u = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        p = {
          name: 'en',
          weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
            '_'
          ),
          months: 'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_'
          ),
        },
        m = function (e, t, n) {
          var a = String(e)
          return !a || a.length >= t
            ? e
            : '' + Array(t + 1 - a.length).join(n) + e
        },
        f = {
          s: m,
          z: function (e) {
            var t = -e.utcOffset(),
              n = Math.abs(t),
              a = Math.floor(n / 60),
              o = n % 60
            return (t <= 0 ? '+' : '-') + m(a, 2, '0') + ':' + m(o, 2, '0')
          },
          m: function e(t, n) {
            if (t.date() < n.date()) return -e(n, t)
            var a = 12 * (n.year() - t.year()) + (n.month() - t.month()),
              o = t.clone().add(a, r),
              i = n - o < 0,
              s = t.clone().add(a + (i ? -1 : 1), r)
            return +(-(a + (n - o) / (i ? o - s : s - o)) || 0)
          },
          a: function (e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          },
          p: function (c) {
            return (
              { M: r, y: l, w: i, d: o, D: d, h: a, m: n, s: t, ms: e, Q: s }[
                c
              ] ||
              String(c || '')
                .toLowerCase()
                .replace(/s$/, '')
            )
          },
          u: function (e) {
            return void 0 === e
          },
        },
        h = 'en',
        y = {}
      y[h] = p
      var g = function (e) {
          return e instanceof _
        },
        v = function (e, t, n) {
          var a
          if (!e) return h
          if ('string' == typeof e) y[e] && (a = e), t && ((y[e] = t), (a = e))
          else {
            var o = e.name
            ;(y[o] = e), (a = o)
          }
          return !n && a && (h = a), a || (!n && h)
        },
        b = function (e, t) {
          if (g(e)) return e.clone()
          var n = 'object' == typeof t ? t : {}
          return (n.date = e), (n.args = arguments), new _(n)
        },
        k = f
      ;(k.l = v),
        (k.i = g),
        (k.w = function (e, t) {
          return b(e, { locale: t.$L, utc: t.$u, x: t.$x, $offset: t.$offset })
        })
      var _ = (function () {
          function p(e) {
            ;(this.$L = v(e.locale, null, !0)), this.parse(e)
          }
          var m = p.prototype
          return (
            (m.parse = function (e) {
              ;(this.$d = (function (e) {
                var t = e.date,
                  n = e.utc
                if (null === t) return new Date(NaN)
                if (k.u(t)) return new Date()
                if (t instanceof Date) return new Date(t)
                if ('string' == typeof t && !/Z$/i.test(t)) {
                  var a = t.match(c)
                  if (a) {
                    var o = a[2] - 1 || 0,
                      i = (a[7] || '0').substring(0, 3)
                    return n
                      ? new Date(
                          Date.UTC(
                            a[1],
                            o,
                            a[3] || 1,
                            a[4] || 0,
                            a[5] || 0,
                            a[6] || 0,
                            i
                          )
                        )
                      : new Date(
                          a[1],
                          o,
                          a[3] || 1,
                          a[4] || 0,
                          a[5] || 0,
                          a[6] || 0,
                          i
                        )
                  }
                }
                return new Date(t)
              })(e)),
                (this.$x = e.x || {}),
                this.init()
            }),
            (m.init = function () {
              var e = this.$d
              ;(this.$y = e.getFullYear()),
                (this.$M = e.getMonth()),
                (this.$D = e.getDate()),
                (this.$W = e.getDay()),
                (this.$H = e.getHours()),
                (this.$m = e.getMinutes()),
                (this.$s = e.getSeconds()),
                (this.$ms = e.getMilliseconds())
            }),
            (m.$utils = function () {
              return k
            }),
            (m.isValid = function () {
              return !('Invalid Date' === this.$d.toString())
            }),
            (m.isSame = function (e, t) {
              var n = b(e)
              return this.startOf(t) <= n && n <= this.endOf(t)
            }),
            (m.isAfter = function (e, t) {
              return b(e) < this.startOf(t)
            }),
            (m.isBefore = function (e, t) {
              return this.endOf(t) < b(e)
            }),
            (m.$g = function (e, t, n) {
              return k.u(e) ? this[t] : this.set(n, e)
            }),
            (m.unix = function () {
              return Math.floor(this.valueOf() / 1e3)
            }),
            (m.valueOf = function () {
              return this.$d.getTime()
            }),
            (m.startOf = function (e, s) {
              var c = this,
                u = !!k.u(s) || s,
                p = k.p(e),
                m = function (e, t) {
                  var n = k.w(
                    c.$u ? Date.UTC(c.$y, t, e) : new Date(c.$y, t, e),
                    c
                  )
                  return u ? n : n.endOf(o)
                },
                f = function (e, t) {
                  return k.w(
                    c
                      .toDate()
                      [e].apply(
                        c.toDate('s'),
                        (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)
                      ),
                    c
                  )
                },
                h = this.$W,
                y = this.$M,
                g = this.$D,
                v = 'set' + (this.$u ? 'UTC' : '')
              switch (p) {
                case l:
                  return u ? m(1, 0) : m(31, 11)
                case r:
                  return u ? m(1, y) : m(0, y + 1)
                case i:
                  var b = this.$locale().weekStart || 0,
                    _ = (h < b ? h + 7 : h) - b
                  return m(u ? g - _ : g + (6 - _), y)
                case o:
                case d:
                  return f(v + 'Hours', 0)
                case a:
                  return f(v + 'Minutes', 1)
                case n:
                  return f(v + 'Seconds', 2)
                case t:
                  return f(v + 'Milliseconds', 3)
                default:
                  return this.clone()
              }
            }),
            (m.endOf = function (e) {
              return this.startOf(e, !1)
            }),
            (m.$set = function (i, s) {
              var c,
                u = k.p(i),
                p = 'set' + (this.$u ? 'UTC' : ''),
                m = ((c = {}),
                (c[o] = p + 'Date'),
                (c[d] = p + 'Date'),
                (c[r] = p + 'Month'),
                (c[l] = p + 'FullYear'),
                (c[a] = p + 'Hours'),
                (c[n] = p + 'Minutes'),
                (c[t] = p + 'Seconds'),
                (c[e] = p + 'Milliseconds'),
                c)[u],
                f = u === o ? this.$D + (s - this.$W) : s
              if (u === r || u === l) {
                var h = this.clone().set(d, 1)
                h.$d[m](f),
                  h.init(),
                  (this.$d = h.set(d, Math.min(this.$D, h.daysInMonth())).$d)
              } else m && this.$d[m](f)
              return this.init(), this
            }),
            (m.set = function (e, t) {
              return this.clone().$set(e, t)
            }),
            (m.get = function (e) {
              return this[k.p(e)]()
            }),
            (m.add = function (e, s) {
              var d,
                c = this
              e = Number(e)
              var u = k.p(s),
                p = function (t) {
                  var n = b(c)
                  return k.w(n.date(n.date() + Math.round(t * e)), c)
                }
              if (u === r) return this.set(r, this.$M + e)
              if (u === l) return this.set(l, this.$y + e)
              if (u === o) return p(1)
              if (u === i) return p(7)
              var m =
                  ((d = {}), (d[n] = 6e4), (d[a] = 36e5), (d[t] = 1e3), d)[u] ||
                  1,
                f = this.$d.getTime() + e * m
              return k.w(f, this)
            }),
            (m.subtract = function (e, t) {
              return this.add(-1 * e, t)
            }),
            (m.format = function (e) {
              var t = this
              if (!this.isValid()) return 'Invalid Date'
              var n = e || 'YYYY-MM-DDTHH:mm:ssZ',
                a = k.z(this),
                o = this.$locale(),
                i = this.$H,
                r = this.$m,
                s = this.$M,
                l = o.weekdays,
                d = o.months,
                c = function (e, a, o, i) {
                  return (e && (e[a] || e(t, n))) || o[a].substr(0, i)
                },
                p = function (e) {
                  return k.s(i % 12 || 12, e, '0')
                },
                m =
                  o.meridiem ||
                  function (e, t, n) {
                    var a = e < 12 ? 'AM' : 'PM'
                    return n ? a.toLowerCase() : a
                  },
                f = {
                  YY: String(this.$y).slice(-2),
                  YYYY: this.$y,
                  M: s + 1,
                  MM: k.s(s + 1, 2, '0'),
                  MMM: c(o.monthsShort, s, d, 3),
                  MMMM: c(d, s),
                  D: this.$D,
                  DD: k.s(this.$D, 2, '0'),
                  d: String(this.$W),
                  dd: c(o.weekdaysMin, this.$W, l, 2),
                  ddd: c(o.weekdaysShort, this.$W, l, 3),
                  dddd: l[this.$W],
                  H: String(i),
                  HH: k.s(i, 2, '0'),
                  h: p(1),
                  hh: p(2),
                  a: m(i, r, !0),
                  A: m(i, r, !1),
                  m: String(r),
                  mm: k.s(r, 2, '0'),
                  s: String(this.$s),
                  ss: k.s(this.$s, 2, '0'),
                  SSS: k.s(this.$ms, 3, '0'),
                  Z: a,
                }
              return n.replace(u, function (e, t) {
                return t || f[e] || a.replace(':', '')
              })
            }),
            (m.utcOffset = function () {
              return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
            }),
            (m.diff = function (e, d, c) {
              var u,
                p = k.p(d),
                m = b(e),
                f = 6e4 * (m.utcOffset() - this.utcOffset()),
                h = this - m,
                y = k.m(this, m)
              return (
                (y =
                  ((u = {}),
                  (u[l] = y / 12),
                  (u[r] = y),
                  (u[s] = y / 3),
                  (u[i] = (h - f) / 6048e5),
                  (u[o] = (h - f) / 864e5),
                  (u[a] = h / 36e5),
                  (u[n] = h / 6e4),
                  (u[t] = h / 1e3),
                  u)[p] || h),
                c ? y : k.a(y)
              )
            }),
            (m.daysInMonth = function () {
              return this.endOf(r).$D
            }),
            (m.$locale = function () {
              return y[this.$L]
            }),
            (m.locale = function (e, t) {
              if (!e) return this.$L
              var n = this.clone(),
                a = v(e, t, !0)
              return a && (n.$L = a), n
            }),
            (m.clone = function () {
              return k.w(this.$d, this)
            }),
            (m.toDate = function () {
              return new Date(this.valueOf())
            }),
            (m.toJSON = function () {
              return this.isValid() ? this.toISOString() : null
            }),
            (m.toISOString = function () {
              return this.$d.toISOString()
            }),
            (m.toString = function () {
              return this.$d.toUTCString()
            }),
            p
          )
        })(),
        w = _.prototype
      return (
        (b.prototype = w),
        [
          ['$ms', e],
          ['$s', t],
          ['$m', n],
          ['$H', a],
          ['$W', o],
          ['$M', r],
          ['$y', l],
          ['$D', d],
        ].forEach(function (e) {
          w[e[1]] = function (t) {
            return this.$g(t, e[0], e[1])
          }
        }),
        (b.extend = function (e, t) {
          return e.$i || (e(t, _, b), (e.$i = !0)), b
        }),
        (b.locale = v),
        (b.isDayjs = g),
        (b.unix = function (e) {
          return b(1e3 * e)
        }),
        (b.en = y[h]),
        (b.Ls = y),
        (b.p = {}),
        b
      )
    })()
  },
  function (e, t, n) {
    e.exports = n(17)
  },
  function (e, t, n) {
    'use strict'
    var a = n(9),
      o = Object.prototype.toString
    function i(e) {
      return '[object Array]' === o.call(e)
    }
    function r(e) {
      return void 0 === e
    }
    function s(e) {
      return null !== e && 'object' == typeof e
    }
    function l(e) {
      if ('[object Object]' !== o.call(e)) return !1
      var t = Object.getPrototypeOf(e)
      return null === t || t === Object.prototype
    }
    function d(e) {
      return '[object Function]' === o.call(e)
    }
    function c(e, t) {
      if (null != e)
        if (('object' != typeof e && (e = [e]), i(e)))
          for (var n = 0, a = e.length; n < a; n++) t.call(null, e[n], n, e)
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e)
    }
    e.exports = {
      isArray: i,
      isArrayBuffer: function (e) {
        return '[object ArrayBuffer]' === o.call(e)
      },
      isBuffer: function (e) {
        return (
          null !== e &&
          !r(e) &&
          null !== e.constructor &&
          !r(e.constructor) &&
          'function' == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        )
      },
      isFormData: function (e) {
        return 'undefined' != typeof FormData && e instanceof FormData
      },
      isArrayBufferView: function (e) {
        return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && e.buffer instanceof ArrayBuffer
      },
      isString: function (e) {
        return 'string' == typeof e
      },
      isNumber: function (e) {
        return 'number' == typeof e
      },
      isObject: s,
      isPlainObject: l,
      isUndefined: r,
      isDate: function (e) {
        return '[object Date]' === o.call(e)
      },
      isFile: function (e) {
        return '[object File]' === o.call(e)
      },
      isBlob: function (e) {
        return '[object Blob]' === o.call(e)
      },
      isFunction: d,
      isStream: function (e) {
        return s(e) && d(e.pipe)
      },
      isURLSearchParams: function (e) {
        return (
          'undefined' != typeof URLSearchParams && e instanceof URLSearchParams
        )
      },
      isStandardBrowserEnv: function () {
        return (
          ('undefined' == typeof navigator ||
            ('ReactNative' !== navigator.product &&
              'NativeScript' !== navigator.product &&
              'NS' !== navigator.product)) &&
          'undefined' != typeof window &&
          'undefined' != typeof document
        )
      },
      forEach: c,
      merge: function e() {
        var t = {}
        function n(n, a) {
          l(t[a]) && l(n)
            ? (t[a] = e(t[a], n))
            : l(n)
            ? (t[a] = e({}, n))
            : i(n)
            ? (t[a] = n.slice())
            : (t[a] = n)
        }
        for (var a = 0, o = arguments.length; a < o; a++) c(arguments[a], n)
        return t
      },
      extend: function (e, t, n) {
        return (
          c(t, function (t, o) {
            e[o] = n && 'function' == typeof t ? a(t, n) : t
          }),
          e
        )
      },
      trim: function (e) {
        return e.replace(/^\s*/, '').replace(/\s*$/, '')
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
      },
    }
  },
  function (e, t, n) {
    'use strict'
    var a,
      o = function () {
        return (
          void 0 === a &&
            (a = Boolean(window && document && document.all && !window.atob)),
          a
        )
      },
      i = (function () {
        var e = {}
        return function (t) {
          if (void 0 === e[t]) {
            var n = document.querySelector(t)
            if (
              window.HTMLIFrameElement &&
              n instanceof window.HTMLIFrameElement
            )
              try {
                n = n.contentDocument.head
              } catch (e) {
                n = null
              }
            e[t] = n
          }
          return e[t]
        }
      })(),
      r = []
    function s(e) {
      for (var t = -1, n = 0; n < r.length; n++)
        if (r[n].identifier === e) {
          t = n
          break
        }
      return t
    }
    function l(e, t) {
      for (var n = {}, a = [], o = 0; o < e.length; o++) {
        var i = e[o],
          l = t.base ? i[0] + t.base : i[0],
          d = n[l] || 0,
          c = ''.concat(l, ' ').concat(d)
        n[l] = d + 1
        var u = s(c),
          p = { css: i[1], media: i[2], sourceMap: i[3] }
        ;-1 !== u
          ? (r[u].references++, r[u].updater(p))
          : r.push({ identifier: c, updater: y(p, t), references: 1 }),
          a.push(c)
      }
      return a
    }
    function d(e) {
      var t = document.createElement('style'),
        a = e.attributes || {}
      if (void 0 === a.nonce) {
        var o = n.nc
        o && (a.nonce = o)
      }
      if (
        (Object.keys(a).forEach(function (e) {
          t.setAttribute(e, a[e])
        }),
        'function' == typeof e.insert)
      )
        e.insert(t)
      else {
        var r = i(e.insert || 'head')
        if (!r)
          throw new Error(
            "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
          )
        r.appendChild(t)
      }
      return t
    }
    var c,
      u =
        ((c = []),
        function (e, t) {
          return (c[e] = t), c.filter(Boolean).join('\n')
        })
    function p(e, t, n, a) {
      var o = n
        ? ''
        : a.media
        ? '@media '.concat(a.media, ' {').concat(a.css, '}')
        : a.css
      if (e.styleSheet) e.styleSheet.cssText = u(t, o)
      else {
        var i = document.createTextNode(o),
          r = e.childNodes
        r[t] && e.removeChild(r[t]),
          r.length ? e.insertBefore(i, r[t]) : e.appendChild(i)
      }
    }
    function m(e, t, n) {
      var a = n.css,
        o = n.media,
        i = n.sourceMap
      if (
        (o ? e.setAttribute('media', o) : e.removeAttribute('media'),
        i &&
          'undefined' != typeof btoa &&
          (a += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
            btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            ' */'
          )),
        e.styleSheet)
      )
        e.styleSheet.cssText = a
      else {
        for (; e.firstChild; ) e.removeChild(e.firstChild)
        e.appendChild(document.createTextNode(a))
      }
    }
    var f = null,
      h = 0
    function y(e, t) {
      var n, a, o
      if (t.singleton) {
        var i = h++
        ;(n = f || (f = d(t))),
          (a = p.bind(null, n, i, !1)),
          (o = p.bind(null, n, i, !0))
      } else
        (n = d(t)),
          (a = m.bind(null, n, t)),
          (o = function () {
            !(function (e) {
              if (null === e.parentNode) return !1
              e.parentNode.removeChild(e)
            })(n)
          })
      return (
        a(e),
        function (t) {
          if (t) {
            if (
              t.css === e.css &&
              t.media === e.media &&
              t.sourceMap === e.sourceMap
            )
              return
            a((e = t))
          } else o()
        }
      )
    }
    e.exports = function (e, t) {
      ;(t = t || {}).singleton ||
        'boolean' == typeof t.singleton ||
        (t.singleton = o())
      var n = l((e = e || []), t)
      return function (e) {
        if (
          ((e = e || []),
          '[object Array]' === Object.prototype.toString.call(e))
        ) {
          for (var a = 0; a < n.length; a++) {
            var o = s(n[a])
            r[o].references--
          }
          for (var i = l(e, t), d = 0; d < n.length; d++) {
            var c = s(n[d])
            0 === r[c].references && (r[c].updater(), r.splice(c, 1))
          }
          n = i
        }
      }
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e) {
      var t = []
      return (
        (t.toString = function () {
          return this.map(function (t) {
            var n = e(t)
            return t[2] ? '@media '.concat(t[2], ' {').concat(n, '}') : n
          }).join('')
        }),
        (t.i = function (e, n, a) {
          'string' == typeof e && (e = [[null, e, '']])
          var o = {}
          if (a)
            for (var i = 0; i < this.length; i++) {
              var r = this[i][0]
              null != r && (o[r] = !0)
            }
          for (var s = 0; s < e.length; s++) {
            var l = [].concat(e[s])
            ;(a && o[l[0]]) ||
              (n &&
                (l[2]
                  ? (l[2] = ''.concat(n, ' and ').concat(l[2]))
                  : (l[2] = n)),
              t.push(l))
          }
        }),
        t
      )
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(4),
      o = n.n(a)()(function (e) {
        return e[1]
      })
    o.push([
      e.i,
      '@import url(https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap);',
    ]),
      o.push([
        e.i,
        ":root {\n  --vanilla-calendar-bg-color: #fff;\n  --vanilla-calendar-border-radius: 5px;\n  --vanilla-calendar-border-color: #e7e9ed;\n  --vanilla-calendar-today-bg-color: #e7e9ed;\n  --vanilla-calendar-today-color: #79b7a3;\n  --vanilla-calendar-selected-bg-color: #79b7a3;\n  --vanilla-calendar-selected-color: #fff;\n  --vanilla-calendar-selected-radius: 5px;\n  --vanilla-toast-color: #79b7a3;\n}\n\n.appointo-modal {\n  display: none;\n  position: fixed;\n  z-index: 99998;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.4);\n  overflow-x: initial;\n}\n.appointo-modal-content {\n  background-color: #fefefe;\n  padding: 20px;\n  border: 1px solid #888;\n  width: 60%;\n  font-family: 'Nunito Sans';\n  margin: 0 auto;\n  top: 12vh;\n  position: relative;\n}\n.appointo-close {\n  color: #aaa;\n  float: right;\n  font-size: 28px;\n  font-weight: bold;\n}\n.appointo-close:hover,\n.appointo-close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer;\n}\n\n.appointo-close-container {\n  display: flex;\n  justify-content: space-between !important;\n  align-items: center;\n  width: 100%;\n}\n\n.appointo-branding-image {\n  width: 150px;\n  margin-bottom: 11px;\n}\n\n.appointo-calendar-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  margin: 20px 0;\n  margin-bottom: 40px;\n}\n\n.appointo-calendar-day-events {\n  display: none;\n  flex-direction: column;\n  align-items: center;\n  height: 310px;\n  width: 40%;\n  margin-left: 20px;\n}\n\n.appointo-date-selected {\n  color: #4d5055;\n  font-size: 16px;\n  line-height: 38px;\n  margin-top: 0px;\n}\n\n.appointo-no-slots {\n  color: #4d5055;\n}\n\n.appointo-calendar-slots {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  max-height: 290px;\n  overflow: scroll;\n}\n\n::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 7px;\n}\n::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, 0.5);\n}\n\n.appointo-slot {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--vanilla-calendar-selected-bg-color);\n  border: 1px solid var(--vanilla-calendar-selected-bg-color);\n  border-radius: 10px;\n  min-height: 44px;\n  flex: 1;\n  cursor: pointer;\n  width: 100%;\n}\n\n.appointo-date-header {\n  color: #4d5055;\n  font-size: 22px;\n  margin-top: 30px;\n}\n\n/* Reset Select */\n.appointo-select {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n  appearance: none;\n  outline: 0;\n  box-shadow: none;\n  border: 0 !important;\n  background: var(--vanilla-calendar-selected-bg-color);\n  background-image: none;\n  display: block !important;\n}\n/* Remove IE arrow */\n.appointo-select::-ms-expand {\n  display: none;\n}\n/* Custom Select */\n.appointo-select-div {\n  position: relative;\n  display: flex;\n  width: 20em;\n  height: 3em;\n  line-height: 3;\n  background: var(--vanilla-calendar-selected-bg-color);\n  overflow: hidden;\n  border-radius: 0.25em;\n}\n.appointo-select {\n  flex: 1;\n  padding: 0 1em;\n  color: #fff;\n  cursor: pointer;\n  font-size: 16px;\n}\n/* Arrow */\n.appointo-select-div::after {\n  content: '\\25BC';\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0 1em;\n  background: var(--vanilla-calendar-selected-bg-color);\n  cursor: pointer;\n  pointer-events: none;\n  -webkit-transition: 0.25s all ease;\n  -o-transition: 0.25s all ease;\n  transition: 0.25s all ease;\n  color: white;\n}\n\n.appointo-product-name {\n  font-size: 24px;\n  margin-top: 0px;\n  color: #333232 !important;\n}\n\n.appointo-check-avail {\n  cursor: pointer;\n  position: fixed;\n  z-index: 10000;\n  color: #fff;\n  margin: 10px 0;\n  align-self: center;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  font-size: 16px;\n  background: var(--vanilla-calendar-selected-bg-color);\n  border: none;\n  outline: none;\n  right: 0px;\n  top: 40%;\n  height: 60px;\n  width: 60px;\n  border-top-left-radius: 10px;\n  border-bottom-left-radius: 10px;\n}\n\n.appointo-check-avail-text {\n  transform: rotate(-90deg);\n  line-height: 1.4;\n}\n\n.appointo-icon {\n  width: 40px;\n}\n\n.appointo-loader-div {\n  width: 40%;\n  margin-left: 20px;\n}\n\n.appointo-branding {\n  text-align: end;\n  font-size: 16px;\n  color: #333232 !important;\n}\n\n.appointo-company-name {\n  color: var(--vanilla-calendar-selected-bg-color) !important;\n  font-size: 18px;\n  font-style: italic;\n}\n\n.appointo-disclaimer {\n  font-size: 16px;\n  color: #333232 !important;\n}\n\n.appointo-time-div {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 8px 10px;\n  flex: 1 0 auto;\n}\n\n.appointo-slot-confim {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\n\n.appointo-confirm {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--vanilla-calendar-selected-bg-color);\n  border: 1px solid var(--vanilla-calendar-selected-bg-color);\n  border-radius: 10px;\n  min-height: 40px;\n  flex: 1;\n  margin-left: 10px;\n  cursor: pointer;\n  text-align: center;\n}\n\n.appointo-remaining-slot {\n  color: #868383;\n  font-size: 13px;\n  position: relative;\n  top: 4px;\n}\n\n.appointo-slot-selected {\n  color: white;\n  background-color: rgba(0, 0, 0, 0.6);\n  border: transparent;\n  cursor: initial;\n}\n\n.appinto-remove-booking {\n  display: inline-block;\n  margin-left: 20px;\n  color: var(--vanilla-calendar-selected-bg-color);\n  cursor: pointer;\n}\n\n.appointo-booking-row {\n  display: flex;\n  flex-direction: row;\n  margin: 20px 0;\n  padding: 10px 10px;\n  justify-content: space-between;\n  align-items: center;\n  height: 60px;\n  border-bottom: #d3d3d3 solid 1px;\n}\n\n.appointo-name-row {\n}\n\n.appointo--booking-product-name {\n  color: #323232;\n  font-weight: 600;\n  font-size: 17px;\n}\n\n.appointo-variant-name {\n  color: #717171;\n  font-weight: 500;\n  font-size: 15px;\n  margin-top: 4px;\n}\n\n.appointo-booking-confirmed {\n  color: var(--vanilla-calendar-selected-bg-color);\n  font-size: 17px;\n  margin-bottom: 6px;\n  margin-top: 6px;\n}\n\n.appointo-booking-time {\n  margin-bottom: 6px;\n  margin-top: 6px;\n  color: #545454;\n}\n\n.appointo-booking-confirmation {\n  text-align: center;\n  font-size: 30px;\n  margin-top: 0px;\n}\n\n.appointo-book-now {\n  cursor: pointer;\n  display: inline-block;\n  background-color: var(--vanilla-calendar-selected-bg-color);\n  background-clip: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  border: 1px transparent solid;\n  border-radius: 5px;\n  color: white;\n  font-weight: 500;\n  padding: 0.6em 1em;\n  text-align: center;\n  position: relative;\n}\n\n.appointo-booking-error {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.appointo-error-text {\n  display: flex;\n  font-size: 15px;\n  margin-top: 10px;\n  color: #ff1900;\n}\n\n.appointo-date-error {\n  display: flex;\n  color: #e4412d;\n  margin-bottom: 10px;\n  font-size: 15px;\n}\n\n.appointo-back {\n  cursor: pointer;\n  display: inline-block;\n  background-clip: border-box;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  color: var(--vanilla-calendar-selected-bg-color);\n  font-weight: 500;\n  margin-top: 10px;\n  text-align: center;\n  position: relative;\n  font-size: 20px;\n}\n\n.appointo-booking-table {\n  overflow-y: scroll;\n  max-height: 420px;\n}\n\n.appointo-toast {\n  background: var(--vanilla-toast-color) !important;\n}\n\n.appointo-addons {\n  margin: 10px 0px;\n  display: inline-block;\n  width: 30%;\n  border: 1px solid #f2f2f2;\n  margin-right: 20px;\n  padding-left: 13px;\n  padding-top: 6px;\n}\n\n.appointo-avatar {\n  position: absolute;\n  top: 60px;\n  width: 60px;\n  height: 60px;\n  right: 50px;\n  border-radius: 30px;\n}\n\n.appointo-modal-content-robotto {\n  font-family: 'Roboto' !important;\n}\n\n.appointo-modal-content-montserrat {\n  font-family: 'Montserrat' !important;\n}\n\n@media only screen and (max-width: 780px) {\n  .appointo-addons {\n    width: 48%;\n    margin-right: 0px;\n    min-height: 140px;\n  }\n\n  .appointo-avatar {\n    display: none;\n  }\n}\n\n.app-error {\n  margin-top: 60px;\n  margin-bottom: 30px;\n  padding-right: 20px;\n  padding-left: 20px;\n  text-align: center;\n  box-sizing: border-box;\n  font-family: 'Nunito Sans';\n}\n\n.one-column {\n  margin-right: auto;\n  margin-left: auto;\n  width: 50%;\n}\n\n.app-error .icon-lightning-bolt {\n  font-size: 60px;\n  color: #ffd467;\n  margin-bottom: 20px;\n}\n\n.app-error .icon-lightning-check {\n  font-size: 60px;\n  color: #486435;\n  margin-bottom: 20px;\n}\n\n.custom-header {\n  font-size: 22px;\n  line-height: 1.2em;\n  margin-bottom: 10px;\n  color: '#666A73';\n}\n\n.custom-subheader {\n  font-size: 18px;\n  line-height: 1.3em;\n  color: '#666A73';\n}\n\n.custom-final-div {\n  display: flex;\n  flex-direction: column;\n  padding-left: 40px;\n  padding-right: 40px;\n}\n\n.custom-final-header {\n  font-size: 36px;\n  font-weight: bold;\n  text-align: center;\n}\n\n.custom-final-name {\n  margin-bottom: 1px;\n}\n\n.custom-final-time {\n  margin-bottom: 1px;\n}\n\n.appointo-legend {\n  display: flex !important;\n  flex-direction: row !important;\n  align-items: center !important;\n  margin-bottom: 20px !important;\n  color: black !important;\n}\n\n.appointo-legend-avail {\n  background: #333333 !important;\n  width: 12px !important;\n  height: 12px !important;\n  border-radius: 6px !important;\n  margin-right: 10px !important;\n}\n\n.appointo-legend-notavail {\n  background: #333333 !important;\n  width: 12px !important;\n  height: 12px !important;\n  border-radius: 6px !important;\n  margin-right: 10px !important;\n  margin-left: 10px !important;\n  opacity: 0.2 !important;\n}\n\n.appointo-input {\n  margin-bottom: 20px;\n  width: 90%;\n  border: 1px solid var(--vanilla-calendar-selected-bg-color) !important;\n}\n\n.appointo-textarea {\n  margin-bottom: 20px;\n  width: 90%;\n  border: 1px solid var(--vanilla-calendar-selected-bg-color) !important;\n  height: 100px;\n  padding: 10px;\n  font-family: 'Nunito Sans' !important;\n  font-size: 16px;\n}\n\n.appointo-input-ty {\n  padding: 10px 20px;\n  width: 95%;\n  height: 80px;\n  font-family: 'Nunito Sans';\n  margin-bottom: 20px;\n}\n\n.appointo-error {\n  color: red;\n  display: none;\n  padding-left: 16px;\n  padding-bottom: 20px;\n}\n\n.appointo-cf-label {\n  position: relative;\n  bottom: 1px;\n  left: 6px;\n}\n\n.appointo-radio {\n  -webkit-appearance: radio !important;\n}\n\n.appointo-radio-container {\n  margin-bottom: 10px;\n}\n\n#appointo-custom-questions {\n  color: var(--vanilla-calendar-selected-bg-color) !important;\n}\n\n#appointo-quantity {\n  height: 24px;\n  margin-left: 10px;\n  padding-left: 10px;\n  border-width: 0.5px;\n}\n\n#appointo-customer-info p {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n\n.appointo-dot {\n  height: 12px;\n  width: 12px;\n  background-color: rgb(136, 231, 133);\n  border-radius: 50%;\n  display: inline-block;\n  margin-right: 10px;\n}\n\n.appoint-dot-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.appointo-blink {\n  animation: blink-animation 2s steps(5, start) infinite;\n  -webkit-animation: blink-animation 2s steps(5, start) infinite;\n}\n\n.appointo-image-container {\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n@keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n@-webkit-keyframes blink-animation {\n  to {\n    visibility: hidden;\n  }\n}\n",
        '',
      ]),
      (t.a = o)
  },
  function (e, t, n) {
    'use strict'
    var a = n(4),
      o = n.n(a)()(function (e) {
        return e[1]
      })
    o.push([
      e.i,
      '.appointo-loader {\n  color: var(--vanilla-calendar-today-color);\n  font-size: 20px;\n  margin: 100px auto;\n  width: 1em;\n  height: 1em;\n  border-radius: 50%;\n  position: relative;\n  text-indent: -9999em;\n  -webkit-animation: load4 1.3s infinite linear;\n  animation: load4 1.3s infinite linear;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n}\n@-webkit-keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,\n      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,\n      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n@keyframes load4 {\n  0%,\n  100% {\n    box-shadow: 0 -3em 0 0.2em, 2em -2em 0 0em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 0;\n  }\n  12.5% {\n    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 3em 0 0 0, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  25% {\n    box-shadow: 0 -3em 0 -0.5em, 2em -2em 0 0, 3em 0 0 0.2em, 2em 2em 0 0,\n      0 3em 0 -1em, -2em 2em 0 -1em, -3em 0 0 -1em, -2em -2em 0 -1em;\n  }\n  37.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 0, 2em 2em 0 0.2em,\n      0 3em 0 0em, -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  50% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 0em,\n      0 3em 0 0.2em, -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;\n  }\n  62.5% {\n    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 0, -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;\n  }\n  75% {\n    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 3em 0em 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;\n  }\n  87.5% {\n    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 3em 0 0 -1em, 2em 2em 0 -1em,\n      0 3em 0 -1em, -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;\n  }\n}\n',
      '',
    ]),
      (t.a = o)
  },
  function (e, t, n) {
    'use strict'
    var a = n(4),
      o = n.n(a)()(function (e) {
        return e[1]
      })
    o.push([
      e.i,
      ".vanilla-calendar *,\n.vanilla-calendar *:before,\n.vanilla-calendar *:after {\n  box-sizing: border-box;\n}\n\n.vanilla-calendar {\n  background-color: var(--vanilla-calendar-bg-color);\n  border-radius: var(--vanilla-calendar-border-radius);\n  border: solid 1px var(--vanilla-calendar-border-color);\n  box-shadow: 0 4px 22px 0 rgba(0, 0, 0, 0.05);\n  margin: 0 auto;\n  overflow: hidden;\n  width: 60%;\n  font-family: 'Nunito Sans';\n}\n@media (max-width: 1200px) {\n  .vanilla-calendar {\n    width: auto;\n  }\n  .appointo-calendar-container {\n    flex-direction: column;\n  }\n\n  .vanilla-calendar {\n    width: 100%;\n  }\n\n  .appointo-calendar-day-events {\n    width: 100%;\n    margin-left: 0px !important;\n    margin-top: 20px;\n    height: auto;\n  }\n\n  .appointo-calendar-slots {\n    width: 90%;\n    height: auto;\n    max-height: 400px;\n  }\n\n  .appointo-slot {\n    width: 90%;\n  }\n\n  .appointo-modal-content {\n    width: 95%;\n    height: auto !important;\n  }\n\n  .appointo-select-div {\n    width: 100% !important;\n  }\n\n  .vanilla-calendar .vanilla-calendar-week span {\n    font-size: 12.5px !important;\n  }\n\n  .appointo-toast {\n    max-width: 90% !important;\n  }\n}\n\n.vanilla-calendar .vanilla-calendar-btn {\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -webkit-appearance: button;\n  background: none;\n  border: 0;\n  color: inherit;\n  cursor: pointer;\n  font: inherit;\n  line-height: normal;\n  min-width: 27px;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  text-align: center;\n  &:active {\n    border-radius: var(--vanilla-calendar-border-radius);\n    box-shadow: 0 0 0 2px rgba(var(--vanilla-calendar-today-bg-color), 0.1);\n  }\n}\n\n.vanilla-calendar .vanilla-calendar-header {\n  align-items: center;\n  display: flex;\n  padding: 10px;\n  text-transform: uppercase;\n}\n\n.vanilla-calendar .vanilla-calendar-header svg {\n  fill: var(--vanilla-calendar-today-color);\n}\n\n.vanilla-calendar .vanilla-calendar-header__label {\n  font-weight: bold;\n  text-align: center;\n  width: 100%;\n  color: #3a3a3a !important;\n}\n\n.vanilla-calendar .vanilla-calendar-week {\n  background-color: var(--vanilla-calendar-selected-bg-color);\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.vanilla-calendar .vanilla-calendar-week span {\n  color: white;\n  flex-direction: column;\n  flex: 0 0 14.28%;\n  font-size: 1em;\n  max-width: 14.28%;\n  padding: 15px 0px;\n  text-align: center;\n  text-transform: uppercase;\n}\n\n.vanilla-calendar .vanilla-calendar-body {\n  background-color: rgba(var(--vanilla-calendar-selected-bg-color), 0.3);\n  display: flex;\n  flex-wrap: wrap;\n  padding-bottom: 10px;\n}\n\n.vanilla-calendar .vanilla-calendar-date {\n  align-items: center;\n  background-color: #fff;\n  border-radius: var(--vanilla-calendar-border-radius);\n  display: flex;\n  flex-direction: column;\n  flex: 0 0 14.28%;\n  max-width: 14.28%;\n  padding: 10px 0;\n  color: #3a3a3a !important;\n}\n\n.vanilla-calendar .vanilla-calendar-date--active {\n  cursor: pointer;\n}\n\n.vanilla-calendar .vanilla-calendar-date--today {\n  color: var(--vanilla-calendar-today-color);\n}\n\n.vanilla-calendar .vanilla-calendar-date--selected {\n  border: 1px solid var(--vanilla-calendar-selected-bg-color);\n  color: var(--vanilla-calendar-selected-color);\n}\n\n.vanilla-calendar .vanilla-calendar-date--disabled {\n  border-radius: 0;\n  cursor: not-allowed;\n  opacity: 0.2;\n}\n",
      '',
    ]),
      (t.a = o)
  },
  function (e, t, n) {
    'use strict'
    var a = n(4),
      o = n.n(a)()(function (e) {
        return e[1]
      })
    o.push([
      e.i,
      "/* Tooltip text */\n.appointo-tooltip .appointo-tooltiptext {\n  width: 120px;\n  background-color: #757474cc;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 4px;\n  position: absolute;\n  z-index: 1;\n  right: 70px;\n  visibility: hidden;\n  line-height: 1.4;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n.appointo-tooltip:hover .appointo-tooltiptext {\n  visibility: visible !important;\n}\n\n.appointo-tooltip .appointo-tooltiptext::after {\n  content: ' ';\n  position: absolute;\n  top: 50%;\n  left: 100%; /* To the right of the tooltip */\n  margin-top: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: transparent transparent transparent #757474cc;\n}\n",
      '',
    ]),
      (t.a = o)
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), a = 0; a < n.length; a++)
          n[a] = arguments[a]
        return e.apply(t, n)
      }
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(2)
    function o(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    }
    e.exports = function (e, t, n) {
      if (!t) return e
      var i
      if (n) i = n(t)
      else if (a.isURLSearchParams(t)) i = t.toString()
      else {
        var r = []
        a.forEach(t, function (e, t) {
          null != e &&
            (a.isArray(e) ? (t += '[]') : (e = [e]),
            a.forEach(e, function (e) {
              a.isDate(e)
                ? (e = e.toISOString())
                : a.isObject(e) && (e = JSON.stringify(e)),
                r.push(o(t) + '=' + o(e))
            }))
        }),
          (i = r.join('&'))
      }
      if (i) {
        var s = e.indexOf('#')
        ;-1 !== s && (e = e.slice(0, s)),
          (e += (-1 === e.indexOf('?') ? '?' : '&') + i)
      }
      return e
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__)
    }
  },
  function (e, t, n) {
    'use strict'
    ;(function (t) {
      var a = n(2),
        o = n(23),
        i = { 'Content-Type': 'application/x-www-form-urlencoded' }
      function r(e, t) {
        !a.isUndefined(e) &&
          a.isUndefined(e['Content-Type']) &&
          (e['Content-Type'] = t)
      }
      var s,
        l = {
          adapter:
            (('undefined' != typeof XMLHttpRequest ||
              (void 0 !== t &&
                '[object process]' === Object.prototype.toString.call(t))) &&
              (s = n(13)),
            s),
          transformRequest: [
            function (e, t) {
              return (
                o(t, 'Accept'),
                o(t, 'Content-Type'),
                a.isFormData(e) ||
                a.isArrayBuffer(e) ||
                a.isBuffer(e) ||
                a.isStream(e) ||
                a.isFile(e) ||
                a.isBlob(e)
                  ? e
                  : a.isArrayBufferView(e)
                  ? e.buffer
                  : a.isURLSearchParams(e)
                  ? (r(t, 'application/x-www-form-urlencoded;charset=utf-8'),
                    e.toString())
                  : a.isObject(e)
                  ? (r(t, 'application/json;charset=utf-8'), JSON.stringify(e))
                  : e
              )
            },
          ],
          transformResponse: [
            function (e) {
              if ('string' == typeof e)
                try {
                  e = JSON.parse(e)
                } catch (e) {}
              return e
            },
          ],
          timeout: 0,
          xsrfCookieName: 'XSRF-TOKEN',
          xsrfHeaderName: 'X-XSRF-TOKEN',
          maxContentLength: -1,
          maxBodyLength: -1,
          validateStatus: function (e) {
            return e >= 200 && e < 300
          },
        }
      ;(l.headers = {
        common: { Accept: 'application/json, text/plain, */*' },
      }),
        a.forEach(['delete', 'get', 'head'], function (e) {
          l.headers[e] = {}
        }),
        a.forEach(['post', 'put', 'patch'], function (e) {
          l.headers[e] = a.merge(i)
        }),
        (e.exports = l)
    }.call(this, n(22)))
  },
  function (e, t, n) {
    'use strict'
    var a = n(2),
      o = n(24),
      i = n(26),
      r = n(10),
      s = n(27),
      l = n(30),
      d = n(31),
      c = n(14)
    e.exports = function (e) {
      return new Promise(function (t, n) {
        var u = e.data,
          p = e.headers
        a.isFormData(u) && delete p['Content-Type'],
          (a.isBlob(u) || a.isFile(u)) && u.type && delete p['Content-Type']
        var m = new XMLHttpRequest()
        if (e.auth) {
          var f = e.auth.username || '',
            h = unescape(encodeURIComponent(e.auth.password)) || ''
          p.Authorization = 'Basic ' + btoa(f + ':' + h)
        }
        var y = s(e.baseURL, e.url)
        if (
          (m.open(
            e.method.toUpperCase(),
            r(y, e.params, e.paramsSerializer),
            !0
          ),
          (m.timeout = e.timeout),
          (m.onreadystatechange = function () {
            if (
              m &&
              4 === m.readyState &&
              (0 !== m.status ||
                (m.responseURL && 0 === m.responseURL.indexOf('file:')))
            ) {
              var a =
                  'getAllResponseHeaders' in m
                    ? l(m.getAllResponseHeaders())
                    : null,
                i = {
                  data:
                    e.responseType && 'text' !== e.responseType
                      ? m.response
                      : m.responseText,
                  status: m.status,
                  statusText: m.statusText,
                  headers: a,
                  config: e,
                  request: m,
                }
              o(t, n, i), (m = null)
            }
          }),
          (m.onabort = function () {
            m && (n(c('Request aborted', e, 'ECONNABORTED', m)), (m = null))
          }),
          (m.onerror = function () {
            n(c('Network Error', e, null, m)), (m = null)
          }),
          (m.ontimeout = function () {
            var t = 'timeout of ' + e.timeout + 'ms exceeded'
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              n(c(t, e, 'ECONNABORTED', m)),
              (m = null)
          }),
          a.isStandardBrowserEnv())
        ) {
          var g =
            (e.withCredentials || d(y)) && e.xsrfCookieName
              ? i.read(e.xsrfCookieName)
              : void 0
          g && (p[e.xsrfHeaderName] = g)
        }
        if (
          ('setRequestHeader' in m &&
            a.forEach(p, function (e, t) {
              void 0 === u && 'content-type' === t.toLowerCase()
                ? delete p[t]
                : m.setRequestHeader(t, e)
            }),
          a.isUndefined(e.withCredentials) ||
            (m.withCredentials = !!e.withCredentials),
          e.responseType)
        )
          try {
            m.responseType = e.responseType
          } catch (t) {
            if ('json' !== e.responseType) throw t
          }
        'function' == typeof e.onDownloadProgress &&
          m.addEventListener('progress', e.onDownloadProgress),
          'function' == typeof e.onUploadProgress &&
            m.upload &&
            m.upload.addEventListener('progress', e.onUploadProgress),
          e.cancelToken &&
            e.cancelToken.promise.then(function (e) {
              m && (m.abort(), n(e), (m = null))
            }),
          u || (u = null),
          m.send(u)
      })
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(25)
    e.exports = function (e, t, n, o, i) {
      var r = new Error(e)
      return a(r, t, n, o, i)
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(2)
    e.exports = function (e, t) {
      t = t || {}
      var n = {},
        o = ['url', 'method', 'data'],
        i = ['headers', 'auth', 'proxy', 'params'],
        r = [
          'baseURL',
          'transformRequest',
          'transformResponse',
          'paramsSerializer',
          'timeout',
          'timeoutMessage',
          'withCredentials',
          'adapter',
          'responseType',
          'xsrfCookieName',
          'xsrfHeaderName',
          'onUploadProgress',
          'onDownloadProgress',
          'decompress',
          'maxContentLength',
          'maxBodyLength',
          'maxRedirects',
          'transport',
          'httpAgent',
          'httpsAgent',
          'cancelToken',
          'socketPath',
          'responseEncoding',
        ],
        s = ['validateStatus']
      function l(e, t) {
        return a.isPlainObject(e) && a.isPlainObject(t)
          ? a.merge(e, t)
          : a.isPlainObject(t)
          ? a.merge({}, t)
          : a.isArray(t)
          ? t.slice()
          : t
      }
      function d(o) {
        a.isUndefined(t[o])
          ? a.isUndefined(e[o]) || (n[o] = l(void 0, e[o]))
          : (n[o] = l(e[o], t[o]))
      }
      a.forEach(o, function (e) {
        a.isUndefined(t[e]) || (n[e] = l(void 0, t[e]))
      }),
        a.forEach(i, d),
        a.forEach(r, function (o) {
          a.isUndefined(t[o])
            ? a.isUndefined(e[o]) || (n[o] = l(void 0, e[o]))
            : (n[o] = l(void 0, t[o]))
        }),
        a.forEach(s, function (a) {
          a in t ? (n[a] = l(e[a], t[a])) : a in e && (n[a] = l(void 0, e[a]))
        })
      var c = o.concat(i).concat(r).concat(s),
        u = Object.keys(e)
          .concat(Object.keys(t))
          .filter(function (e) {
            return -1 === c.indexOf(e)
          })
      return a.forEach(u, d), n
    }
  },
  function (e, t, n) {
    'use strict'
    function a(e) {
      this.message = e
    }
    ;(a.prototype.toString = function () {
      return 'Cancel' + (this.message ? ': ' + this.message : '')
    }),
      (a.prototype.__CANCEL__ = !0),
      (e.exports = a)
  },
  function (e, t, n) {
    'use strict'
    var a = n(2),
      o = n(9),
      i = n(18),
      r = n(15)
    function s(e) {
      var t = new i(e),
        n = o(i.prototype.request, t)
      return a.extend(n, i.prototype, t), a.extend(n, t), n
    }
    var l = s(n(12))
    ;(l.Axios = i),
      (l.create = function (e) {
        return s(r(l.defaults, e))
      }),
      (l.Cancel = n(16)),
      (l.CancelToken = n(32)),
      (l.isCancel = n(11)),
      (l.all = function (e) {
        return Promise.all(e)
      }),
      (l.spread = n(33)),
      (e.exports = l),
      (e.exports.default = l)
  },
  function (e, t, n) {
    'use strict'
    var a = n(2),
      o = n(10),
      i = n(19),
      r = n(20),
      s = n(15)
    function l(e) {
      ;(this.defaults = e),
        (this.interceptors = { request: new i(), response: new i() })
    }
    ;(l.prototype.request = function (e) {
      'string' == typeof e
        ? ((e = arguments[1] || {}).url = arguments[0])
        : (e = e || {}),
        (e = s(this.defaults, e)).method
          ? (e.method = e.method.toLowerCase())
          : this.defaults.method
          ? (e.method = this.defaults.method.toLowerCase())
          : (e.method = 'get')
      var t = [r, void 0],
        n = Promise.resolve(e)
      for (
        this.interceptors.request.forEach(function (e) {
          t.unshift(e.fulfilled, e.rejected)
        }),
          this.interceptors.response.forEach(function (e) {
            t.push(e.fulfilled, e.rejected)
          });
        t.length;

      )
        n = n.then(t.shift(), t.shift())
      return n
    }),
      (l.prototype.getUri = function (e) {
        return (
          (e = s(this.defaults, e)),
          o(e.url, e.params, e.paramsSerializer).replace(/^\?/, '')
        )
      }),
      a.forEach(['delete', 'get', 'head', 'options'], function (e) {
        l.prototype[e] = function (t, n) {
          return this.request(s(n || {}, { method: e, url: t }))
        }
      }),
      a.forEach(['post', 'put', 'patch'], function (e) {
        l.prototype[e] = function (t, n, a) {
          return this.request(s(a || {}, { method: e, url: t, data: n }))
        }
      }),
      (e.exports = l)
  },
  function (e, t, n) {
    'use strict'
    var a = n(2)
    function o() {
      this.handlers = []
    }
    ;(o.prototype.use = function (e, t) {
      return (
        this.handlers.push({ fulfilled: e, rejected: t }),
        this.handlers.length - 1
      )
    }),
      (o.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
      }),
      (o.prototype.forEach = function (e) {
        a.forEach(this.handlers, function (t) {
          null !== t && e(t)
        })
      }),
      (e.exports = o)
  },
  function (e, t, n) {
    'use strict'
    var a = n(2),
      o = n(21),
      i = n(11),
      r = n(12)
    function s(e) {
      e.cancelToken && e.cancelToken.throwIfRequested()
    }
    e.exports = function (e) {
      return (
        s(e),
        (e.headers = e.headers || {}),
        (e.data = o(e.data, e.headers, e.transformRequest)),
        (e.headers = a.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        a.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          function (t) {
            delete e.headers[t]
          }
        ),
        (e.adapter || r.adapter)(e).then(
          function (t) {
            return s(e), (t.data = o(t.data, t.headers, e.transformResponse)), t
          },
          function (t) {
            return (
              i(t) ||
                (s(e),
                t &&
                  t.response &&
                  (t.response.data = o(
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            )
          }
        )
      )
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(2)
    e.exports = function (e, t, n) {
      return (
        a.forEach(n, function (n) {
          e = n(e, t)
        }),
        e
      )
    }
  },
  function (e, t) {
    var n,
      a,
      o = (e.exports = {})
    function i() {
      throw new Error('setTimeout has not been defined')
    }
    function r() {
      throw new Error('clearTimeout has not been defined')
    }
    function s(e) {
      if (n === setTimeout) return setTimeout(e, 0)
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0)
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }
    !(function () {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : i
      } catch (e) {
        n = i
      }
      try {
        a = 'function' == typeof clearTimeout ? clearTimeout : r
      } catch (e) {
        a = r
      }
    })()
    var l,
      d = [],
      c = !1,
      u = -1
    function p() {
      c &&
        l &&
        ((c = !1), l.length ? (d = l.concat(d)) : (u = -1), d.length && m())
    }
    function m() {
      if (!c) {
        var e = s(p)
        c = !0
        for (var t = d.length; t; ) {
          for (l = d, d = []; ++u < t; ) l && l[u].run()
          ;(u = -1), (t = d.length)
        }
        ;(l = null),
          (c = !1),
          (function (e) {
            if (a === clearTimeout) return clearTimeout(e)
            if ((a === r || !a) && clearTimeout)
              return (a = clearTimeout), clearTimeout(e)
            try {
              a(e)
            } catch (t) {
              try {
                return a.call(null, e)
              } catch (t) {
                return a.call(this, e)
              }
            }
          })(e)
      }
    }
    function f(e, t) {
      ;(this.fun = e), (this.array = t)
    }
    function h() {}
    ;(o.nextTick = function (e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      d.push(new f(e, t)), 1 !== d.length || c || s(m)
    }),
      (f.prototype.run = function () {
        this.fun.apply(null, this.array)
      }),
      (o.title = 'browser'),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ''),
      (o.versions = {}),
      (o.on = h),
      (o.addListener = h),
      (o.once = h),
      (o.off = h),
      (o.removeListener = h),
      (o.removeAllListeners = h),
      (o.emit = h),
      (o.prependListener = h),
      (o.prependOnceListener = h),
      (o.listeners = function (e) {
        return []
      }),
      (o.binding = function (e) {
        throw new Error('process.binding is not supported')
      }),
      (o.cwd = function () {
        return '/'
      }),
      (o.chdir = function (e) {
        throw new Error('process.chdir is not supported')
      }),
      (o.umask = function () {
        return 0
      })
  },
  function (e, t, n) {
    'use strict'
    var a = n(2)
    e.exports = function (e, t) {
      a.forEach(e, function (n, a) {
        a !== t &&
          a.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[a])
      })
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(14)
    e.exports = function (e, t, n) {
      var o = n.config.validateStatus
      n.status && o && !o(n.status)
        ? t(
            a(
              'Request failed with status code ' + n.status,
              n.config,
              null,
              n.request,
              n
            )
          )
        : e(n)
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e, t, n, a, o) {
      return (
        (e.config = t),
        n && (e.code = n),
        (e.request = a),
        (e.response = o),
        (e.isAxiosError = !0),
        (e.toJSON = function () {
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: this.config,
            code: this.code,
          }
        }),
        e
      )
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(2)
    e.exports = a.isStandardBrowserEnv()
      ? {
          write: function (e, t, n, o, i, r) {
            var s = []
            s.push(e + '=' + encodeURIComponent(t)),
              a.isNumber(n) && s.push('expires=' + new Date(n).toGMTString()),
              a.isString(o) && s.push('path=' + o),
              a.isString(i) && s.push('domain=' + i),
              !0 === r && s.push('secure'),
              (document.cookie = s.join('; '))
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
            )
            return t ? decodeURIComponent(t[3]) : null
          },
          remove: function (e) {
            this.write(e, '', Date.now() - 864e5)
          },
        }
      : {
          write: function () {},
          read: function () {
            return null
          },
          remove: function () {},
        }
  },
  function (e, t, n) {
    'use strict'
    var a = n(28),
      o = n(29)
    e.exports = function (e, t) {
      return e && !a(t) ? o(e, t) : t
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e) {
      return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
    }
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(2),
      o = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
      ]
    e.exports = function (e) {
      var t,
        n,
        i,
        r = {}
      return e
        ? (a.forEach(e.split('\n'), function (e) {
            if (
              ((i = e.indexOf(':')),
              (t = a.trim(e.substr(0, i)).toLowerCase()),
              (n = a.trim(e.substr(i + 1))),
              t)
            ) {
              if (r[t] && o.indexOf(t) >= 0) return
              r[t] =
                'set-cookie' === t
                  ? (r[t] ? r[t] : []).concat([n])
                  : r[t]
                  ? r[t] + ', ' + n
                  : n
            }
          }),
          r)
        : r
    }
  },
  function (e, t, n) {
    'use strict'
    var a = n(2)
    e.exports = a.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            n = document.createElement('a')
          function o(e) {
            var a = e
            return (
              t && (n.setAttribute('href', a), (a = n.href)),
              n.setAttribute('href', a),
              {
                href: n.href,
                protocol: n.protocol ? n.protocol.replace(/:$/, '') : '',
                host: n.host,
                search: n.search ? n.search.replace(/^\?/, '') : '',
                hash: n.hash ? n.hash.replace(/^#/, '') : '',
                hostname: n.hostname,
                port: n.port,
                pathname:
                  '/' === n.pathname.charAt(0) ? n.pathname : '/' + n.pathname,
              }
            )
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var n = a.isString(t) ? o(t) : t
              return n.protocol === e.protocol && n.host === e.host
            }
          )
        })()
      : function () {
          return !0
        }
  },
  function (e, t, n) {
    'use strict'
    var a = n(16)
    function o(e) {
      if ('function' != typeof e)
        throw new TypeError('executor must be a function.')
      var t
      this.promise = new Promise(function (e) {
        t = e
      })
      var n = this
      e(function (e) {
        n.reason || ((n.reason = new a(e)), t(n.reason))
      })
    }
    ;(o.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }),
      (o.source = function () {
        var e
        return {
          token: new o(function (t) {
            e = t
          }),
          cancel: e,
        }
      }),
      (e.exports = o)
  },
  function (e, t, n) {
    'use strict'
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t)
      }
    }
  },
  function (e, t, n) {
    var a = {
      './da.json': 35,
      './de.json': 36,
      './en.json': 37,
      './es.json': 38,
      './fi.json': 39,
      './fr.json': 40,
      './id.json': 41,
      './is.json': 42,
      './it.json': 43,
      './ja.json': 44,
      './ms.json': 45,
      './nl.json': 46,
      './no.json': 47,
      './sk.json': 48,
      './sl.json': 49,
      './sv.json': 50,
      './th.json': 51,
      './vi.json': 52,
    }
    function o(e) {
      var t = i(e)
      return n(t)
    }
    function i(e) {
      if (!n.o(a, e)) {
        var t = new Error("Cannot find module '" + e + "'")
        throw ((t.code = 'MODULE_NOT_FOUND'), t)
      }
      return a[e]
    }
    ;(o.keys = function () {
      return Object.keys(a)
    }),
      (o.resolve = i),
      (e.exports = o),
      (o.id = 34)
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"V??lg Tid","selectDate":"V??lg dato","selectSlot":"V??lg et tidsrum fra de tilg??ngelige pladser","chooseDate":"??h ??h. Alle tidsrum er udfyldt for dagen. V??lg en anden dato","bookingConfirmed":"Aftalebestilling bekr??ftet","addToCart":"Tilf??j til kurv","updateInCart":"Opdatering i kurv","checkout":"Kasse","allSelectedBookings":"Alle valgte reservationer","chooseVariant":"V??lg en variant","availableSlots":"Tilg??ngelige tidsrum","loading":"Indl??ser","poweredBy":"Drevet af","redirectingToCheckout":"Omdirigerer til kassen","confirmationText":"Tilf??jet til indk??bsvogn - Bekr??ftelse sendes efter k??b","removeBooking":"Fjern reservation","bookingRemoved":"Reservationen blev fjernet fra vognen","bookingConfirmation":"Reservationsbekr??ftelse","back":"Tilbage","bookNow":"Book nu","bookViaCalendly":"Book via Calendly","calendlyBookingError":"Kalenderfejl ... Klik p?? ovenst??ende link for at booke","confirm":"Bekr??fte","dateTime":"Dato tid","january":"januar","february":"februar","march":"marts","april":"April","may":"Maj","june":"juni","july":"juli","august":"august","september":"september","october":"oktober","november":"november","december":"december","sunday":"S??ndag","monday":"Mandag","tuesday":"tirsdag","wednesday":"onsdag","thursday":"torsdag","friday":"Fredag","saturday":"l??rdag","sun":"S??n","mon":"Man","tues":"Tir","wed":"Ons","thurs":"Tor","fri":"Fri","sat":"L??r","scheduleTime":"Planl??g din tid","availSlots":"tilg??ngelige tidsrum","noAvailSlots":"ingen ledige tidsrum","slotsRemaining":"resterende tidsrum","greaterQuantity":"Den valgte m??ngde er st??rre end tilg??ngelige tidsrum. Reducer m??ngden, eller v??lg en anden plads"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Zeit ausw??hlen","selectDate":"Datum ausw??hlen","selectSlot":"W??hlen Sie aus dem verf??gbaren Zeitraum Ihren Wunschtermin aus","chooseDate":"Dieser Zeitraum  ist bereits belegt. Bitte w??hlen Sie ein anderes Datum aus","bookingConfirmed":"Terminbuchung best??tigt","addToCart":"In den Warenkorb","updateInCart":"Im Warenkorb aktualisieren","checkout":"Zur Kasse","allSelectedBookings":"Alle ausgew??hlten Buchungen","chooseVariant":"W??hlen Sie eine Variante","availableSlots":"Verf??gbare Zeitr??ume","loading":"Laden","poweredBy":"Powered By","redirectingToCheckout":"Weiterleitung zur Kasse","confirmationText":"Zum Warenkorb hinzugef??gt - Best??tigung wird nach dem Kauf gesendet","removeBooking":"Buchung entfernen","bookingRemoved":"Gew??hlte Zeit vom Warenkorb entfernen","bookingConfirmation":"Buchungsbest??tigung","back":"Zur??ck","bookNow":"Jetzt buchen","bookViaCalendly":"??ber Calendly buchen","calendlyBookingError":"Kalenderfehler. Klicken Sie auf den obigen Link, um zu buchen","confirm":"Best??tigen","dateTime":"Datum & Uhrzeit","january":"Januar","february":"Februar","march":"M??rz","april":"April","may":"Mai","june":"Juni","july":"Juli","august":"August","september":"September","october":"Oktober","november":"November","december":"Dezember","sunday":"Sonntag","monday":"Montag","tuesday":"Dienstag","wednesday":"Mittwoch","thursday":"Donnerstag","friday":"Freitag","saturday":"Samstag","sun":"So.","mon":"Mo.","tues":"Di.","wed":"Mi.","thurs":"Do.","fri":"Fr.","sat":"Sa.","scheduleTime":"W??hlen Sie Ihre Zeit","availSlots":"Verf??gbare Pl??tze","noAvailSlots":"Keine verf??gbaren Pl??tze","slotsRemaining":"verbleibende Slots","greaterQuantity":"Die ausgew??hlte Menge ist gr????er als die verf??gbaren Slots. Bitte verringern Sie die Menge oder w??hlen Sie einen anderen Steckplatz"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Select Time","selectDate":"Select Date","selectSlot":"Select one time slot from the available slots","chooseDate":"Uh-Oh. All time slots have been filled for the day. Please choose another date","bookingConfirmed":"Appointment Booking confirmed","addToCart":"Add to Cart","updateInCart":"Update In Cart","checkout":"Checkout","allSelectedBookings":"All Selected Bookings","chooseVariant":"Choose a Variant","availableSlots":"Available Slots","loading":"Loading","poweredBy":"Powered By","redirectingToCheckout":"Redirecting to Checkout","confirmationText":"Added to Cart- Confirmation will be sent post purchase","removeBooking":"Remove Booking","bookingRemoved":"Booking removed from the cart","bookingConfirmation":"Booking Confirmation","back":"Back","bookNow":"Book Now","bookViaCalendly":"Book Via Calendly","calendlyBookingError":"Calendly Error...Click on the above link to book","confirm":"Confirm","dateTime":"Date & Time","january":"January","february":"February","march":"March","april":"April","may":"May","june":"June","july":"July","august":"August","september":"September","october":"October","november":"November","december":"December","sunday":"sunday","monday":"monday","tuesday":"tuesday","wednesday":"wednesday","thursday":"thursday","friday":"friday","saturday":"saturday","sun":"Sun","mon":"Mon","tues":"Tue","wed":"Wed","thurs":"Thurs","fri":"Fri","sat":"Sat","scheduleTime":"Schedule Your Time","availSlots":"available slots","noAvailSlots":"no available slots","slotsRemaining":"slots remaining","greaterQuantity":"Quantity selected is greater than available slots. Please decrease the quantity or choose another slot"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Seleccionar hora","selectDate":"Seleccione fecha","selectSlot":"Seleccione una franja horaria de las franjas horarias disponibles","chooseDate":"UH oh. Se han llenado todas las franjas horarias del d??a. Elija otra fecha","bookingConfirmed":"Reserva de cita confirmada","addToCart":"A??adir al carrito","updateInCart":"Actualizar en el carrito","checkout":"Revisa","allSelectedBookings":"Todas las reservas seleccionadas","chooseVariant":"Elija una variante","availableSlots":"Ranuras disponibles","loading":"Cargando","poweredBy":"Energizado por","redirectingToCheckout":"Redirigiendo a Checkout","confirmationText":"Agregado al carrito: la confirmaci??n se enviar?? despu??s de la compra","removeBooking":"Eliminar reserva","bookingRemoved":"Reserva eliminada del carrito","bookingConfirmation":"Confirmaci??n de reserva","back":"atr??s","bookNow":"Reservar ahora","bookViaCalendly":"Reserva v??a Calendly","calendlyBookingError":"Error de Calendly ... Haga clic en el enlace de arriba para reservar","confirm":"Confirmar","dateTime":"Fecha y hora","january":"enero","february":"febrero","march":"marzo","april":"abril","may":"Mayo","june":"junio","july":"julio","august":"agosto","september":"septiembre","october":"octubre","november":"noviembre","december":"diciembre","sunday":"domingo","monday":"lunes","tuesday":"martes","wednesday":"mi??rcoles","thursday":"jueves","friday":"viernes","saturday":"s??bado","sun":"DOM","mon":"LUN","tues":"MAR","wed":"MIE","thurs":"JUE","fri":"VIE","sat":"SAB","scheduleTime":"Agenda tu hora","availSlots":"espacios disponibles","noAvailSlots":"no hay espacios disponibles","slotsRemaining":"ranuras restantes","greaterQuantity":"La cantidad seleccionada es mayor que los espacios disponibles. Disminuya la cantidad o elija otra ranura"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Valitse aika","selectDate":"Valitse p??iv??m????r??","selectSlot":"Valitse aikav??li saatavilla olevista ajoista","chooseDate":"Voi ei. Kaikki aikav??lit on varattua valitsemallesi p??iv??lle. Valitse toinen p??iv??.","bookingConfirmed":"Ajanvaraus vahvistettu","addToCart":"Lis???? ostoskoriin","updateInCart":"P??ivit?? ostoskorissa","checkout":"Tarkista","allSelectedBookings":"Kaikki valitut varaukset","chooseVariant":"Valitse vaihtoehto","availableSlots":"Saatavilla olevat ajankohdat","loading":"Ladataan","poweredBy":"Powered by","redirectingToCheckout":"Uudelleenohjataan kassalle","confirmationText":"Lis??tty ostoskoriin.","removeBooking":"Poista varaus","bookingRemoved":"Varaus poistettu ostoskorista","bookingConfirmation":"Varausvahvistus","back":"Takaisin","bookNow":"Varaa nyt","bookViaCalendly":"Varaa Calendlyn kautta","calendlyBookingError":"Calendly virhe ... Napsauta yll?? olevaa linkki?? varataksesi","confirm":"Vahvista","dateTime":"Ajankohta","january":"Tammikuu","february":"Helmikuu","march":"Maaliskuu","april":"Huhtikuu","may":"Toukokuu","june":"Kes??kuu","july":"Hein??kuu","august":"Elokuu","september":"Syyskuu","october":"Lokakuu","november":"Marraskuu","december":"Joulukuu","sunday":"sunnuntai","monday":"maanantai","tuesday":"tiistai","wednesday":"keskiviikko","thursday":"torstai","friday":"perjantai","saturday":"lauantai","sun":"Su","mon":"Ma","tues":"Ti","wed":"Ke","thurs":"To","fri":"Pe","sat":"La","scheduleTime":"Aikatauluta","availSlots":"Vapaita aikoja","noAvailSlots":"Ei vapaita aikoja","slotsRemaining":"paikkaa j??ljell??","greaterQuantity":"Valittu m????r?? on suurempi kuin k??ytett??viss?? olevat paikat. V??henn?? m????r???? tai valitse toinen paikka"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"S??lectionnez l\'heure","selectDate":"S??lectionner une date","selectSlot":"S??lectionnez un cr??neau horaire parmi les cr??neaux disponibles","chooseDate":"Euh-Oh. Toutes les plages horaires ont ??t?? remplies pour la journ??e. Veuillez choisir une autre date","bookingConfirmed":"R??servation de rendez-vous confirm??e","addToCart":"Ajouter au panier","updateInCart":"Mettre ?? jour dans le panier","checkout":"Check-out","allSelectedBookings":"Toutes les r??servations s??lectionn??es","chooseVariant":"Choisissez une variante","availableSlots":"Emplacements disponibles","loading":"Chargement","poweredBy":"Aliment?? par","redirectingToCheckout":"Redirection vers Checkout","confirmationText":"Ajout?? au panier - La confirmation sera envoy??e apr??s l\'achat","removeBooking":"Supprimer la r??servation","bookingRemoved":"R??servation supprim??e du panier","bookingConfirmation":"Confirmation de r??servation","back":"Retour","bookNow":"Reserve maintenant","bookViaCalendly":"R??servez via Calendly","calendlyBookingError":"Erreur Calendly ... Cliquez sur le lien ci-dessus pour r??server","confirm":"Confirmer","dateTime":"Date et heure","january":"janvier","february":"f??vrier","march":"Mars","april":"avril","may":"Mai","june":"juin","july":"juillet","august":"ao??t","september":"septembre","october":"octobre","november":"novembre","december":"d??cembre","sunday":"dimanche","monday":"Lundi","tuesday":"Mardi","wednesday":"Mercredi","thursday":"Jeu","friday":"Vendredi","saturday":"samedi","sun":"Dim","mon":"Lun","tues":"Mar","wed":"Mer","thurs":"Jeu","fri":"Ven","sat":"Sam","scheduleTime":"Reserver","availSlots":"emplacements disponibles","noAvailSlots":"pas d\'emplacements disponibles","slotsRemaining":"emplacements restants","greaterQuantity":"La quantit?? s??lectionn??e est sup??rieure aux emplacements disponibles. Veuillez diminuer la quantit?? ou choisir un autre emplacement"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Pilih Waktu","selectDate":"Pilih Tanggal","selectSlot":"Pilih satu slot waktu dari slot yang tersedia","chooseDate":"Uh oh. Semua slot waktu telah terisi untuk hari itu. Silakan pilih tanggal lain","bookingConfirmed":"Pemesanan janji temu dikonfirmasi","addToCart":"Masukkan ke keranjang","updateInCart":"Perbarui Di Keranjang","checkout":"Periksa","allSelectedBookings":"Semua Pemesanan yang Dipilih","chooseVariant":"Pilih Varian","availableSlots":"Slot yang Tersedia","loading":"Memuat","poweredBy":"Dipersembahkan oleh","redirectingToCheckout":"Mengalihkan ke Checkout","confirmationText":"Ditambahkan ke Keranjang- Konfirmasi akan dikirim setelah pembelian","removeBooking":"Hapus Pemesanan","bookingRemoved":"Pemesanan dihapus dari gerobak","bookingConfirmation":"Konfirmasi pemesanan","back":"Kembali","bookNow":"Pesan sekarang","bookViaCalendly":"Pesan Via Calendly","calendlyBookingError":"Calendly Error ... Klik link di atas untuk memesan","confirm":"Konfirmasi","dateTime":"Tanggal Waktu","january":"Januari","february":"Februari","march":"Maret","april":"April","may":"Mungkin","june":"Juni","july":"Juli","august":"Agustus","september":"September","october":"Oktober","november":"November","december":"Desember","sunday":"Minggu","monday":"Senin","tuesday":"Selasa","wednesday":"Rabu","thursday":"Kamis","friday":"Jumat","saturday":"Sabtu","sun":"Matahari","mon":"Saya","tues":"Milikmu","wed":"Mengawinkan","thurs":"Kamis","fri":"Jum","sat":"Duduk","scheduleTime":"Jadwalkan Waktu Anda","slotsRemaining":"slot tersisa","greaterQuantity":"Jumlah yang dipilih lebih besar dari slot yang tersedia. Harap kurangi kuantitas atau pilih slot lain"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Veldu t??masetningu","selectDate":"Veldu dagsetningu","selectSlot":"Veldu t??mann sem hentar ????r af eftirfarandi lausum t??mum","chooseDate":"?? nei! Allir t??mar dagsins eru uppb??ka??ir. Vinsamlegast veldu a??ra dagsetningu","bookingConfirmed":"T??mab??kun er sta??fest","addToCart":"B??ta vi?? k??rfu","updateInCart":"Uppf??ra k??rfu","checkout":"Kl??ra kaup","allSelectedBookings":"Allar valdar b??kanir","chooseVariant":"Veldu afbrig??i","availableSlots":"Tilt??kir t??mar","loading":"Hle??ur","poweredBy":"Keyrt ??fram af","redirectingToCheckout":"F??ri ??ig yfir ?? grei??sluform","confirmationText":"B??tt ?? k??rfu - Sta??festing ver??ur send ??egar gengi?? hefur veri?? fr?? grei??slu","removeBooking":"Fjarl??gja b??kun","bookingRemoved":"B??kun fjarl??g?? ??r k??rfu","bookingConfirmation":"B??kun sta??fest","back":"Til baka","bookNow":"B??ka n??na","bookViaCalendly":"B??ka ?? gegnum Calendly","calendlyBookingError":"Villa hj?? Calendly...smelltu ?? tengilinn a?? ofan til a?? b??ka","confirm":"Sta??festa","dateTime":"Dagsetning og t??mi","january":"Jan??ar","february":"Febr??ar","march":"Mars","april":"Apr??l","may":"Ma??","june":"J??n??","july":"J??l??","august":"??g??st","september":"September","october":"Okt??ber","november":"N??vember","december":"Desember","sunday":"sunnudagur","monday":"m??nudagur","tuesday":"??ri??judagur","wednesday":"mi??vikudagur","thursday":"fimmtudagur","friday":"f??studagur","saturday":"laugardagur","sun":"Sun","mon":"M??n","tues":"??ri","wed":"Mi??","thurs":"Fim","fri":"F??s","sat":"Lau","scheduleTime":"Skr????u t??mann","availSlots":"Tilt??kir t??mar","noAvailSlots":"Engir tilt??kir t??mar","slotsRemaining":"Lausir t??mar","greaterQuantity":"Fj??ldinn sem er valinn er umfram ???? t??ma sem eru ?? bo??i. Vinsamlegast breyttu fj??ldanum e??a veldu annan t??ma"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Seleziona Ora","selectDate":"Seleziona la data","selectSlot":"Seleziona una fascia oraria dalle fasce orarie disponibili","chooseDate":"Uh Oh. Tutte le fasce orarie sono state occupate per la giornata. Scegli un\'altra data","bookingConfirmed":"Appuntamento Prenotazione confermata","addToCart":"Aggiungi al carrello","updateInCart":"Aggiorna nel carrello","checkout":"Check-out","allSelectedBookings":"Tutte le prenotazioni selezionate","chooseVariant":"Scegli una variante","availableSlots":"Slot disponibili","loading":"Caricamento in corso","poweredBy":"Offerto da","redirectingToCheckout":"Reindirizzamento a Checkout","confirmationText":"Aggiunto al carrello - La conferma verr?? inviata dopo l\'acquisto","removeBooking":"Rimuovi prenotazione","bookingRemoved":"Prenotazione rimossa dal carrello","bookingConfirmation":"Conferma della prenotazione","back":"Indietro","bookNow":"Prenota ora","bookViaCalendly":"Prenota tramite Calendly","calendlyBookingError":"Calendly Error ... Clicca sul link qui sopra per prenotare","confirm":"Confermare","dateTime":"Appuntamento","january":"gennaio","february":"febbraio","march":"marzo","april":"aprile","may":"Maggio","june":"giugno","july":"luglio","august":"agosto","september":"settembre","october":"ottobre","november":"novembre","december":"dicembre","sunday":"Domenica","monday":"Lunedi","tuesday":"marted??","wednesday":"mercoled??","thursday":"giovedi","friday":"Venerd??","saturday":"Sabato","sun":"Sole","mon":"Mio","tues":"Tue","wed":"Mercoled??","thurs":"Gio","fri":"Ven","sat":"Sab","scheduleTime":"Pianifica il tuo tempo","availSlots":"slot disponibili","noAvailSlots":"nessuno slot disponibile","slotsRemaining":"slot disponibili","greaterQuantity":"La quantit?? selezionata ?? maggiore degli slot disponibili. Diminuisci la quantit?? o scegli un altro slot"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"???????????????","selectDate":"???????????????","selectSlot":"????????????????????????????????????????????????","chooseDate":"????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????","bookingConfirmed":"??????????????????","addToCart":"?????????????????????","updateInCart":"?????????????????????","checkout":"?????????????????????","allSelectedBookings":"??????????????????????????????","chooseVariant":"????????????????????????","availableSlots":"????????????","loading":"???????????????","poweredBy":"??????","redirectingToCheckout":"?????????????????????????????????????????????","confirmationText":"??????????????????-???????????????????????????????????????","removeBooking":"?????????????????????","bookingRemoved":"?????????????????????????????????????????????","bookingConfirmation":"????????????","back":"?????????","bookNow":"???????????????","bookViaCalendly":"Calendly???????????????","calendlyBookingError":"????????????????????????...?????????????????????????????????????????????????????????????????????","confirm":"??????","dateTime":"????????????","january":"??????","february":"??????","march":"??????","april":"??????","may":"??????","june":"??????","july":"??????","august":"??????","september":"??????","october":"??????","november":"?????????","december":"?????????","sunday":"?????????","monday":"??????","tuesday":"?????????","wednesday":"?????????","thursday":"?????????","friday":"?????????","saturday":"?????????","sun":"???","mon":"???","tues":"???","wed":"???","thurs":"???","fri":"???","sat":"???","scheduleTime":"????????????"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Pilih Masa","selectDate":"Pilih Tarikh","selectSlot":"Pilih satu kali slot dari slot yang ada","chooseDate":"Aduh. Semua slot masa telah diisi untuk hari itu. Sila pilih tarikh lain","bookingConfirmed":"Tempahan Janji Temu disahkan","addToCart":"Tambah ke Troli","updateInCart":"Kemas kini dalam troli","checkout":"Daftar keluar","allSelectedBookings":"Semua Tempahan Terpilih","chooseVariant":"Pilih Varian","availableSlots":"Slot yang ada","loading":"Memuatkan","poweredBy":"Dikuasai oleh","redirectingToCheckout":"Mengarahkan ke Checkout","confirmationText":"Ditambah ke Troli- Pengesahan akan dihantar selepas pembelian","removeBooking":"Alih keluar Tempahan","bookingRemoved":"Tempahan dikeluarkan dari troli","bookingConfirmation":"Pengesahan tempahan","back":"Belakang","bookNow":"Tempah sekarang","bookViaCalendly":"Tempah Melalui Calendly","calendlyBookingError":"Kesalahan Calendly ... Klik pada pautan di atas untuk menempah","confirm":"Sahkan","dateTime":"Masa tarikh","january":"Januari","february":"Februari","march":"Mac","april":"April","may":"Mungkin","june":"Jun","july":"Julai","august":"Ogos","september":"September","october":"Oktober","november":"November","december":"Disember","sunday":"hari ahad","monday":"isnin","tuesday":"selasa","wednesday":"hari rabu","thursday":"khamis","friday":"jumaat","saturday":"sabtu","sun":"matahari","mon":"Saya","tues":"Milik anda","wed":"Rabu","thurs":"Khamis","fri":"Jum","sat":"Sabtu","scheduleTime":"Jadualkan Masa Anda"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Selecteer tijd","selectDate":"Selecteer een datum","selectSlot":"Selecteer een tijdstip uit de beschikbare slots","chooseDate":"Oh Oh. Er zijn geen mogelijkheden meer voor deze dag. Kies een andere datum.","bookingConfirmed":"Afspraak bevestigd","addToCart":"BOEK DEZE SESSIE","updateInCart":"Update In Winkelwagen","checkout":"Uitchecken","allSelectedBookings":"JE HUIDIGE BOEKING","chooseVariant":"Kies een optie","availableSlots":"Beschikbare slots","loading":"Bezig met laden","poweredBy":"Aangedreven door","redirectingToCheckout":"U wordt omgeleid naar Afrekenen","confirmationText":"Toegevoegd aan winkelwagen - Bevestiging wordt na aankoop verzonden","removeBooking":"Boeking verwijderen","bookingRemoved":"Boeking verwijderd uit de winkelwagen","bookingConfirmation":"Reserveringsbevestiging","back":"Terug","bookNow":"Boek nu","bookViaCalendly":"Boek via Calendly","calendlyBookingError":"Calendly Error ... Klik op de bovenstaande link om te boeken","confirm":"Bevestigen","dateTime":"Datum & Tijd","january":"Januari ","february":"Februari ","march":"Maart","april":"April","may":"Mei","june":"Juni","july":"Juli","august":"Augustus","september":"September","october":"Oktober","november":"November","december":"December","sunday":"zondag","monday":"maandag","tuesday":"dinsdag","wednesday":"woensdag","thursday":"donderdag","friday":"vrijdag","saturday":"zaterdag","sun":"Zon","mon":"Maa","tues":"Din","wed":"Woe","thurs":"Don","fri":"Vrij","sat":"Zat","scheduleTime":"Plan uw tijd","availSlots":"beschikbare slots","noAvailSlots":"geen beschikbare slots","slotsRemaining":"resterende slots","greaterQuantity":"Het geselecteerde aantal is groter dan de beschikbare slots. Verminder het aantal of kies een ander slot"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Velg Tid","selectDate":"Velg dato","selectSlot":"Velg en tidsluke fra de tilgjengelige sporene","chooseDate":"UH oh. Alle tidsluker er fylt ut for dagen. Velg en annen dato","bookingConfirmed":"Avtalebestilling bekreftet","addToCart":"Legg i handlekurv","updateInCart":"Oppdater i handlekurven","checkout":"Sjekk ut","allSelectedBookings":"Alle valgte bestillinger","chooseVariant":"Velg en variant","availableSlots":"Tilgjengelige spilleautomater","loading":"Laster inn","poweredBy":"Drevet av","redirectingToCheckout":"Viderekobler til kassen","confirmationText":"Lagt til i handlekurven - Bekreftelse vil bli sendt etter kj??p","removeBooking":"Fjern booking","bookingRemoved":"Bestilling fjernet fra handlekurven","bookingConfirmation":"Bestillingsbekreftelse","back":"Tilbake","bookNow":"Bestill n??","bookViaCalendly":"Bestill Via Calendly","calendlyBookingError":"Kalenderfeil ... Klikk p?? lenken ovenfor for ?? bestille","confirm":"Bekrefte","dateTime":"Dato tid","january":"januar","february":"februar","march":"mars","april":"april","may":"Kan","june":"juni","july":"juli","august":"august","september":"september","october":"oktober","november":"november","december":"desember","sunday":"s??ndag","monday":"mandag","tuesday":"tirsdag","wednesday":"onsdag","thursday":"Torsdag","friday":"fredag","saturday":"l??rdag","sun":"Sol","mon":"Min","tues":"Hilsen din","wed":"Ons","thurs":"Torsdag","fri":"Fre","sat":"L??r","scheduleTime":"Planlegg tiden din"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Vyberte ??as","selectDate":"Vyberte d??tum","selectSlot":"Vyberte jeden ??asov?? slot z dostupn??ch slotov","chooseDate":"Uh Oh. V??etky ??asov?? intervaly boli pre dan?? de?? vyplnen??. Vyberte in?? d??tum","bookingConfirmed":"Rezerv??cia term??nu bola potvrden??","addToCart":"Prida?? do ko????ka","updateInCart":"Aktualiz??cia v ko????ku","checkout":"Odhl??si?? sa","allSelectedBookings":"V??etky vybran?? rezerv??cie","chooseVariant":"Vyberte variant","availableSlots":"Dostupn?? automaty","loading":"Na????tava","poweredBy":"Poh????an??","redirectingToCheckout":"Prebieha presmerovanie do slu??by Checkout","confirmationText":"Pridan?? do ko????ka - potvrdenie bude odoslan?? po zak??pen??","removeBooking":"Odstr??ni?? rezerv??ciu","bookingRemoved":"Rezerv??cia bola odstr??nen?? z ko????ka","bookingConfirmation":"Potvrdenie rezerv??cie","back":"sp????","bookNow":"Rezervova??","bookViaCalendly":"Zarezervujte si Via Calendly","calendlyBookingError":"Chyba v kalend??ri ... Kliknut??m na vy????ie uveden?? odkaz rezervujete","confirm":"Potvrdi??","dateTime":"D??tum ??as","january":"Janu??ra","february":"Febru??ra","march":"Marca","april":"Apr??la","may":"Smie??","june":"J??na","july":"J??la","august":"Augusta","september":"September","october":"Okt??bra","november":"Novembra","december":"December","sunday":"nede??a","monday":"pondelok","tuesday":"utorok","wednesday":"streda","thursday":"??tvrtok","friday":"piatok","saturday":"sobota","sun":"slnko","mon":"M??j","tues":"V????","wed":"St","thurs":"??tvrtok","fri":"Pia","sat":"Sob","scheduleTime":"Napl??nujte si ??as"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Izberite ??as","selectDate":"Izberite Datum","selectSlot":"Med razpolo??ljivimi re??ami izberite eno ??asovno re??o","chooseDate":"Ojoj. Vsa ??asovna mesta so bila zapolnjena za ta dan. Izberite drug datum","bookingConfirmed":"Rezervacija za termin je potrjena","addToCart":"Dodaj v vozi??ek","updateInCart":"Posodobi v ko??arici","checkout":"Preveri","allSelectedBookings":"Vse izbrane rezervacije","chooseVariant":"Izberite varianto","availableSlots":"Na voljo re??e","loading":"nalaganje","poweredBy":"Poganja ga","redirectingToCheckout":"Preusmeritev na blagajno","confirmationText":"Dodano v ko??arico - potrditev bo poslana po nakupu","removeBooking":"Odstrani rezervacijo","bookingRemoved":"Rezervacija odstranjena iz ko??arice","bookingConfirmation":"Potrditev rezervacije","back":"Nazaj","bookNow":"Rezervirajte zdaj","bookViaCalendly":"Rezervirajte Via Calendly","calendlyBookingError":"Napaka Calendly ... Kliknite zgornjo povezavo za rezervacijo","confirm":"Potrdite","dateTime":"Datum ??as","january":"Januarja","february":"Februarja","march":"Marec","april":"April","may":"Maj","june":"Junij","july":"Julij","august":"Avgust","september":"September","october":"Oktober","november":"November","december":"December","sunday":"nedelja","monday":"ponedeljek","tuesday":"torek","wednesday":"sreda","thursday":"??etrtek","friday":"petek","saturday":"sobota","sun":"Sonce","mon":"Moj","tues":"Va??","wed":"Sre","thurs":"??etrtek","fri":"Pet","sat":"Sobota","scheduleTime":"Razporedite svoj ??as"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"V??lj Tid","selectDate":"V??lj datum","selectSlot":"V??lj en tidslucka fr??n tillg??ngliga tider","chooseDate":"Hoppsan. Alla tidsluckor har fyllts i f??r dagen. V??lj ett annat datum","bookingConfirmed":"Bokningsbokning bekr??ftad","addToCart":"L??gg till i kundvagn","updateInCart":"Uppdatering i kundvagn","checkout":"Bekr??fta","allSelectedBookings":"Alla valda bokningar","chooseVariant":"V??lj en variant","availableSlots":"Tillg??ngliga tider","loading":"L??ser in","poweredBy":"Drivs av","redirectingToCheckout":"Omdirigerar till kassan","confirmationText":"Lagt till i kundvagnen - Bekr??ftelse skickas efter k??p","removeBooking":"Ta bort bokningen","bookingRemoved":"Bokningen har tagits bort fr??n vagnen","bookingConfirmation":"Bokningsbekr??ftelse","back":"Tillbaka","bookNow":"Boka nu","bookViaCalendly":"Boka via Calendly","calendlyBookingError":"Calendly Error ... Klicka p?? l??nken ovan f??r att boka","confirm":"Bekr??fta","dateTime":"Datum Tid","january":"Januari","february":"Februari","march":"Mars","april":"April","may":"Maj","june":"Juni","july":"Juli","august":"Augusti","september":"September","october":"Oktober","november":"November","december":"December","sunday":"s??ndag","monday":"m??ndag","tuesday":"tisdag","wednesday":"onsdag","thursday":"torsdag","friday":"fredag","saturday":"l??rdag","sun":"S??n","mon":"M??n","tues":"Tis","wed":"Ons","thurs":"Tor","fri":"Fre","sat":"L??r","scheduleTime":"Boka tid","availSlots":"tillg??ngliga tider","noAvailSlots":"inga tillg??ngliga tider","slotsRemaining":"??terst??ende tider","greaterQuantity":"Valt antal ??r st??rre ??n tillg??ngliga tider. Minska antalet eller v??lj en annan plats"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"???????????????????????????","selectDate":"?????????????????????????????????","selectSlot":"??????????????????????????????????????????????????????????????????????????????????????????????????????","chooseDate":"?????????????????????. ??????????????????????????????????????????????????????????????????????????????????????? ????????????????????????????????????????????????","bookingConfirmed":"??????????????????????????????????????????????????????????????????","addToCart":"???????????????????????????????????????","updateInCart":"??????????????????????????????????????????","checkout":"???????????????????????????","allSelectedBookings":"???????????????????????????????????????????????????????????????","chooseVariant":"?????????????????????????????????","availableSlots":"??????????????????????????????????????????","loading":"???????????????????????????","poweredBy":"???????????????????????????????????????","redirectingToCheckout":"???????????????????????????????????????????????????????????????????????? Checkout","confirmationText":"????????????????????????????????????????????? - ????????????????????????????????????????????????????????????????????????????????????","removeBooking":"????????????????????????","bookingRemoved":"?????????????????????????????????????????????????????????????????????","bookingConfirmation":"?????????????????????????????????????????????","back":"????????????","bookNow":"???????????????????????????","bookViaCalendly":"????????????????????? Calendly","calendlyBookingError":"Calendly Error ... ??????????????????????????????????????????????????????????????????????????????","confirm":"??????????????????","dateTime":"?????????????????????","january":"??????????????????","february":"??????????????????????????????","march":"??????????????????","april":"??????????????????","may":"?????????","june":"????????????????????????","july":"?????????????????????","august":"?????????????????????","september":"?????????????????????","october":"??????????????????","november":"???????????????????????????","december":"?????????????????????","sunday":"??????????????????????????????","monday":"???????????????????????????","tuesday":"???????????????????????????","wednesday":"??????????????????","thursday":"?????????????????????????????????","friday":"????????????????????????","saturday":"????????????????????????","sun":"??????","mon":"??????????????????","tues":"??????????????????","wed":"?????????","thurs":"??????","fri":"???","sat":"???","scheduleTime":"?????????????????????????????????????????????"}'
    )
  },
  function (e) {
    e.exports = JSON.parse(
      '{"selectTime":"Ch???n th???i gian","selectDate":"Ch???n ng??y","selectSlot":"Ch???n m???t th???i ??i???m t??? c??c th???i ??i???m c?? s???n","chooseDate":"??? ... T???t c??? c??c khe th???i gian ???? ???????c l???p ?????y trong ng??y. Vui l??ng ch???n ng??y kh??c","bookingConfirmed":"???? x??c nh???n ?????t l???ch h???n","addToCart":"Th??m v??o gi??? h??ng","updateInCart":"C???p nh???t trong gi??? h??ng","checkout":"Th??? t???c thanh to??n","allSelectedBookings":"T???t c??? c??c ?????t tr?????c ???? ch???n","chooseVariant":"Ch???n m???t bi???n th???","availableSlots":"Slots c?? s???n","loading":"??ang t???i","poweredBy":"Cung c???p b???i","redirectingToCheckout":"Chuy???n h?????ng ?????n Checkout","confirmationText":"???? th??m v??o gi??? h??ng- X??c nh???n s??? ???????c g???i sau khi mua h??ng","removeBooking":"X??a ?????t ch???","bookingRemoved":"?????t tr?????c ???? b??? x??a kh???i gi??? h??ng","bookingConfirmation":"X??c nh???n ?????t ph??ng","back":"Tr??? l???i","bookNow":"??????t b??y gi???","bookViaCalendly":"?????t ph??ng Via Calendly","calendlyBookingError":"Calendly Error ... Nh???p v??o li??n k???t tr??n ????? ?????t","confirm":"X??c nh???n","dateTime":"Ng??y gi???","january":"th??ng Gi??ng","february":"th??ng 2","march":"th??ng Ba","april":"Th??ng t??","may":"c?? th???","june":"Th??ng s??u","july":"Th??ng b???y","august":"th??ng T??m","september":"Th??ng Ch??n","october":"Th??ng M?????i","november":"Th??ng m?????i m???t","december":"Th??ng m?????i hai","sunday":"ch??? nh???t","monday":"th??? hai","tuesday":"th??? ba","wednesday":"Th??? t??","thursday":"Th??? n??m","friday":"Th??? s??u","saturday":"ng??y th??? b???y","sun":"m???t tr???i","mon":"C???a t??i","tues":"C???a b???n","wed":"Th??? T??","thurs":"Th??? n??m","fri":"T6","sat":"???? ng???i","scheduleTime":"L??n l???ch th???i gian c???a b???n"}'
    )
  },
  function (e, t) {
    let n = function (e) {
      function t(e, t, n) {
        e &&
          (e.attachEvent
            ? e.attachEvent('on' + t, n)
            : e.addEventListener(t, n))
      }
      function n(e, t, n) {
        e &&
          (e.detachEvent
            ? e.detachEvent('on' + t, n)
            : e.removeEventListener(t, n))
      }
      let a = {
        selector: null,
        datesFilter: !1,
        pastDates: !0,
        availableWeekDays: [],
        availableDates: [],
        date: new Date(),
        todaysDate: new Date(),
        button_prev: null,
        button_next: null,
        month: null,
        month_label: null,
        onSelect: (e, t) => {},
        onMonthPrev: () => {},
        onMonthNext: () => {},
        months: [
          window.Appointo.translations.january,
          window.Appointo.translations.february,
          window.Appointo.translations.march,
          window.Appointo.translations.april,
          window.Appointo.translations.may,
          window.Appointo.translations.june,
          window.Appointo.translations.july,
          window.Appointo.translations.august,
          window.Appointo.translations.september,
          window.Appointo.translations.october,
          window.Appointo.translations.november,
          window.Appointo.translations.december,
        ],
        shortWeekday: [
          window.Appointo.translations.sun,
          window.Appointo.translations.mon,
          window.Appointo.translations.tues,
          window.Appointo.translations.wed,
          window.Appointo.translations.thurs,
          window.Appointo.translations.fri,
          window.Appointo.translations.sat,
        ],
      }
      for (let t in e) a.hasOwnProperty(t) && (a[t] = e[t])
      let o = document.querySelector(a.selector)
      if (!o) return
      const i = function (e) {
          let t = document.createElement('div'),
            n = document.createElement('span')
          ;(n.innerHTML = e.getDate()),
            (t.className = 'vanilla-calendar-date'),
            t.setAttribute('data-calendar-date', e)
          let o = a.availableWeekDays.filter(
              (t) =>
                t.day === e.getDay() ||
                t.day ===
                  (function (e) {
                    return [
                      window.Appointo.translations.sunday,
                      window.Appointo.translations.monday,
                      window.Appointo.translations.tuesday,
                      window.Appointo.translations.wednesday,
                      window.Appointo.translations.thursday,
                      window.Appointo.translations.friday,
                      window.Appointo.translations.saturday,
                    ][e]
                  })(e.getDay())
            ),
            i = a.availableDates.filter(
              (t) =>
                t.date ===
                e.getFullYear() +
                  '-' +
                  String(e.getMonth() + 1).padStart('2', 0) +
                  '-' +
                  String(e.getDate()).padStart('2', 0)
            )
          1 === e.getDate() && (t.style.marginLeft = 14.28 * e.getDay() + '%'),
            a.date.getTime() <= a.todaysDate.getTime() - 1 && !a.pastDates
              ? t.classList.add('vanilla-calendar-date--disabled')
              : a.datesFilter
              ? o.length
                ? (t.classList.add('vanilla-calendar-date--active'),
                  t.setAttribute('data-calendar-data', JSON.stringify(o[0])),
                  t.setAttribute('data-calendar-status', 'active'))
                : i.length
                ? (t.classList.add('vanilla-calendar-date--active'),
                  t.setAttribute('data-calendar-data', JSON.stringify(i[0])),
                  t.setAttribute('data-calendar-status', 'active'))
                : t.classList.add('vanilla-calendar-date--disabled')
              : (t.classList.add('vanilla-calendar-date--active'),
                t.setAttribute('data-calendar-status', 'active')),
            e.toString() === a.todaysDate.toString() &&
              t.classList.add('vanilla-calendar-date--today'),
            t.appendChild(n),
            a.month.appendChild(t)
        },
        r = function () {
          d()
          let e = a.date.getMonth()
          for (; a.date.getMonth() === e; )
            i(a.date), a.date.setDate(a.date.getDate() + 1)
          a.date.setDate(1),
            a.date.setMonth(a.date.getMonth() - 1),
            (a.month_label.innerHTML =
              a.months[a.date.getMonth()] + ' ' + a.date.getFullYear()),
            o.querySelectorAll('[data-calendar-status=active]').forEach((e) => {
              e.addEventListener('click', function () {
                document
                  .querySelectorAll('.vanilla-calendar-date--selected')
                  .forEach((e) => {
                    e.classList.remove('vanilla-calendar-date--selected')
                  })
                let e = this.dataset,
                  t = {}
                e.calendarDate && (t.date = e.calendarDate),
                  e.calendarData && (t.data = JSON.parse(e.calendarData)),
                  a.onSelect(t, this),
                  this.classList.add('vanilla-calendar-date--selected')
              })
            })
        },
        s = function () {
          a.date.setMonth(a.date.getMonth() - 1),
            r(),
            a.onMonthPrev({ date: a.date })
        },
        l = function () {
          a.date.setMonth(a.date.getMonth() + 1),
            r(),
            a.onMonthNext({ date: a.date })
        },
        d = function () {
          a.month.innerHTML = ''
        }
      ;(this.init = function () {
        ;(document.querySelector(a.selector).innerHTML =
          '\n            <div class="vanilla-calendar-header">\n                <button type="button" class="vanilla-calendar-btn" data-calendar-toggle="previous"><svg id="vanilla-left-arrow" height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z"></path></svg></button>\n                <div class="vanilla-calendar-header__label" data-calendar-label="month"></div>\n                <button type="button" class="vanilla-calendar-btn" data-calendar-toggle="next"><svg id="vanilla-right-arrow"  height="24" version="1.1" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"></path></svg></button>\n            </div>\n            <div id="vanilla-calendar-week" class="vanilla-calendar-week"></div>\n            <div class="vanilla-calendar-body" data-calendar-area="month"></div>\n            '),
          (a.button_prev = document.querySelector(
            a.selector + ' [data-calendar-toggle=previous]'
          )),
          (a.button_next = document.querySelector(
            a.selector + ' [data-calendar-toggle=next]'
          )),
          (a.month = document.querySelector(
            a.selector + ' [data-calendar-area=month]'
          )),
          (a.month_label = document.querySelector(
            a.selector + ' [data-calendar-label=month]'
          )),
          a.date.setDate(1),
          r(),
          (document.querySelector(
            a.selector + ' .vanilla-calendar-week'
          ).innerHTML = `\n                <span>${a.shortWeekday[0]}</span>\n                <span>${a.shortWeekday[1]}</span>\n                <span>${a.shortWeekday[2]}</span>\n                <span>${a.shortWeekday[3]}</span>\n                <span>${a.shortWeekday[4]}</span>\n                <span>${a.shortWeekday[5]}</span>\n                <span>${a.shortWeekday[6]}</span>\n            `),
          t(a.button_prev, 'click', s),
          t(a.button_next, 'click', l)
      }),
        (this.destroy = function () {
          n(a.button_prev, 'click', s),
            n(a.button_next, 'click', l),
            d(),
            (document.querySelector(a.selector).innerHTML = '')
        }),
        (this.reset = function () {
          this.destroy(), this.init()
        }),
        (this.set = function (e) {
          for (let t in e) a.hasOwnProperty(t) && (a[t] = e[t])
          r()
        }),
        this.init()
    }
    window.VanillaCalendar = n
  },
  function (e, t, n) {
    var a, o, i
    ;(o = []),
      void 0 ===
        (i =
          'function' ==
          typeof (a = function () {
            var e = /^v?(?:\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+)(\.(?:[x*]|\d+))?(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i
            function t(e) {
              var t,
                n,
                a = e.replace(/^v/, '').replace(/\+.*$/, ''),
                o =
                  ((n = '-'),
                  -1 === (t = a).indexOf(n) ? t.length : t.indexOf(n)),
                i = a.substring(0, o).split('.')
              return i.push(a.substring(o + 1)), i
            }
            function n(e) {
              return isNaN(Number(e)) ? e : Number(e)
            }
            function a(t) {
              if ('string' != typeof t)
                throw new TypeError('Invalid argument expected string')
              if (!e.test(t))
                throw new Error(
                  "Invalid argument not valid semver ('" + t + "' received)"
                )
            }
            function o(e, o) {
              ;[e, o].forEach(a)
              for (
                var i = t(e), r = t(o), s = 0;
                s < Math.max(i.length - 1, r.length - 1);
                s++
              ) {
                var l = parseInt(i[s] || 0, 10),
                  d = parseInt(r[s] || 0, 10)
                if (l > d) return 1
                if (d > l) return -1
              }
              var c = i[i.length - 1],
                u = r[r.length - 1]
              if (c && u) {
                var p = c.split('.').map(n),
                  m = u.split('.').map(n)
                for (s = 0; s < Math.max(p.length, m.length); s++) {
                  if (
                    void 0 === p[s] ||
                    ('string' == typeof m[s] && 'number' == typeof p[s])
                  )
                    return -1
                  if (
                    void 0 === m[s] ||
                    ('string' == typeof p[s] && 'number' == typeof m[s])
                  )
                    return 1
                  if (p[s] > m[s]) return 1
                  if (m[s] > p[s]) return -1
                }
              } else if (c || u) return c ? -1 : 1
              return 0
            }
            var i = ['>', '>=', '=', '<', '<='],
              r = { '>': [1], '>=': [0, 1], '=': [0], '<=': [-1, 0], '<': [-1] }
            return (
              (o.validate = function (t) {
                return 'string' == typeof t && e.test(t)
              }),
              (o.compare = function (e, t, n) {
                !(function (e) {
                  if ('string' != typeof e)
                    throw new TypeError(
                      'Invalid operator type, expected string but got ' +
                        typeof e
                    )
                  if (-1 === i.indexOf(e))
                    throw new TypeError(
                      'Invalid operator, expected one of ' + i.join('|')
                    )
                })(n)
                var a = o(e, t)
                return r[n].indexOf(a) > -1
              }),
              o
            )
          })
            ? a.apply(t, o)
            : a) || (e.exports = i)
  },
  function (e, t, n) {
    e.exports = (function () {
      'use strict'
      return function (e, t, n) {
        var a = t.prototype
        ;(n.utc = function (e) {
          return new t({ date: e, utc: !0, args: arguments })
        }),
          (a.utc = function (e) {
            var t = n(this.toDate(), { locale: this.$L, utc: !0 })
            return e ? t.add(this.utcOffset(), 'minute') : t
          }),
          (a.local = function () {
            return n(this.toDate(), { locale: this.$L, utc: !1 })
          })
        var o = a.parse
        a.parse = function (e) {
          e.utc && (this.$u = !0),
            this.$utils().u(e.$offset) || (this.$offset = e.$offset),
            o.call(this, e)
        }
        var i = a.init
        a.init = function () {
          if (this.$u) {
            var e = this.$d
            ;(this.$y = e.getUTCFullYear()),
              (this.$M = e.getUTCMonth()),
              (this.$D = e.getUTCDate()),
              (this.$W = e.getUTCDay()),
              (this.$H = e.getUTCHours()),
              (this.$m = e.getUTCMinutes()),
              (this.$s = e.getUTCSeconds()),
              (this.$ms = e.getUTCMilliseconds())
          } else i.call(this)
        }
        var r = a.utcOffset
        a.utcOffset = function (e, t) {
          var n = this.$utils().u
          if (n(e))
            return this.$u ? 0 : n(this.$offset) ? r.call(this) : this.$offset
          var a = Math.abs(e) <= 16 ? 60 * e : e,
            o = this
          if (t) return (o.$offset = a), (o.$u = 0 === e), o
          if (0 !== e) {
            var i = this.$u
              ? this.toDate().getTimezoneOffset()
              : -1 * this.utcOffset()
            ;((o = this.local().add(a + i, 'minute')).$offset = a),
              (o.$x.$localOffset = i)
          } else o = this.utc()
          return o
        }
        var s = a.format
        ;(a.format = function (e) {
          var t = e || (this.$u ? 'YYYY-MM-DDTHH:mm:ss[Z]' : '')
          return s.call(this, t)
        }),
          (a.valueOf = function () {
            var e = this.$utils().u(this.$offset)
              ? 0
              : this.$offset +
                (this.$x.$localOffset || new Date().getTimezoneOffset())
            return this.$d.valueOf() - 6e4 * e
          }),
          (a.isUTC = function () {
            return !!this.$u
          }),
          (a.toISOString = function () {
            return this.toDate().toISOString()
          }),
          (a.toString = function () {
            return this.toDate().toUTCString()
          })
        var l = a.toDate
        a.toDate = function (e) {
          return 's' === e && this.$offset
            ? n(this.format('YYYY-MM-DD HH:mm:ss:SSS')).toDate()
            : l.call(this)
        }
        var d = a.diff
        a.diff = function (e, t, a) {
          if (e && this.$u === e.$u) return d.call(this, e, t, a)
          var o = this.local(),
            i = n(e).local()
          return d.call(o, i, t, a)
        }
      }
    })()
  },
  function (e, t, n) {
    e.exports = (function () {
      'use strict'
      var e = { year: 0, month: 1, day: 2, hour: 3, minute: 4, second: 5 },
        t = {}
      return function (n, a, o) {
        var i,
          r = o().utcOffset(),
          s = function (e, n, a) {
            void 0 === a && (a = {})
            var o = new Date(e)
            return (function (e, n) {
              void 0 === n && (n = {})
              var a = n.timeZoneName || 'short',
                o = e + '|' + a,
                i = t[o]
              return (
                i ||
                  ((i = new Intl.DateTimeFormat('en-US', {
                    hour12: !1,
                    timeZone: e,
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit',
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    timeZoneName: a,
                  })),
                  (t[o] = i)),
                i
              )
            })(n, a).formatToParts(o)
          },
          l = function (t, n) {
            for (var a = s(t, n), i = [], r = 0; r < a.length; r += 1) {
              var l = a[r],
                d = l.type,
                c = l.value,
                u = e[d]
              u >= 0 && (i[u] = parseInt(c, 10))
            }
            var p = i[3],
              m = 24 === p ? 0 : p,
              f =
                i[0] +
                '-' +
                i[1] +
                '-' +
                i[2] +
                ' ' +
                m +
                ':' +
                i[4] +
                ':' +
                i[5] +
                ':000',
              h = +t
            return (o.utc(f).valueOf() - (h -= h % 1e3)) / 6e4
          },
          d = a.prototype
        ;(d.tz = function (e, t) {
          void 0 === e && (e = i)
          var n = this.utcOffset(),
            a = this.toDate().toLocaleString('en-US', { timeZone: e }),
            s = Math.round((this.toDate() - new Date(a)) / 1e3 / 60),
            l = o(a)
              .$set('millisecond', this.$ms)
              .utcOffset(r - s, !0)
          if (t) {
            var d = l.utcOffset()
            l = l.add(n - d, 'minute')
          }
          return (l.$x.$timezone = e), l
        }),
          (d.offsetName = function (e) {
            var t = this.$x.$timezone || o.tz.guess(),
              n = s(this.valueOf(), t, { timeZoneName: e }).find(function (e) {
                return 'timezonename' === e.type.toLowerCase()
              })
            return n && n.value
          })
        var c = d.startOf
        ;(d.startOf = function (e, t) {
          if (!this.$x || !this.$x.$timezone) return c.call(this, e, t)
          var n = o(this.format('YYYY-MM-DD HH:mm:ss:SSS'))
          return c.call(n, e, t).tz(this.$x.$timezone, !0)
        }),
          (o.tz = function (e, t, n) {
            var a = n && t,
              r = n || t || i,
              s = l(+o(), r)
            if ('string' != typeof e) return o(e).tz(r)
            var d = (function (e, t, n) {
                var a = e - 60 * t * 1e3,
                  o = l(a, n)
                if (t === o) return [a, t]
                var i = l((a -= 60 * (o - t) * 1e3), n)
                return o === i
                  ? [a, o]
                  : [e - 60 * Math.min(o, i) * 1e3, Math.max(o, i)]
              })(o.utc(e, a).valueOf(), s, r),
              c = d[0],
              u = d[1],
              p = o(c).utcOffset(u)
            return (p.$x.$timezone = r), p
          }),
          (o.tz.guess = function () {
            return Intl.DateTimeFormat().resolvedOptions().timeZone
          }),
          (o.tz.setDefault = function (e) {
            i = e
          })
      }
    })()
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        s: 'ein paar Sekunden',
        m: ['eine Minute', 'einer Minute'],
        mm: '%d Minuten',
        h: ['eine Stunde', 'einer Stunde'],
        hh: '%d Stunden',
        d: ['ein Tag', 'einem Tag'],
        dd: ['%d Tage', '%d Tagen'],
        M: ['ein Monat', 'einem Monat'],
        MM: ['%d Monate', '%d Monaten'],
        y: ['ein Jahr', 'einem Jahr'],
        yy: ['%d Jahre', '%d Jahren'],
      }
      function n(e, n, a) {
        var o = t[a]
        return Array.isArray(o) && (o = o[n ? 0 : 1]), o.replace('%d', e)
      }
      var a = {
        name: 'de',
        weekdays: 'Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag'.split(
          '_'
        ),
        weekdaysShort: 'So._Mo._Di._Mi._Do._Fr._Sa.'.split('_'),
        weekdaysMin: 'So_Mo_Di_Mi_Do_Fr_Sa'.split('_'),
        months: 'Januar_Februar_M??rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember'.split(
          '_'
        ),
        monthsShort: 'Jan_Feb_M??rz_Apr_Mai_Juni_Juli_Aug_Sept_Okt_Nov_Dez'.split(
          '_'
        ),
        ordinal: function (e) {
          return e + '.'
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LTS: 'HH:mm:ss',
          LT: 'HH:mm',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd, D. MMMM YYYY HH:mm',
        },
        relativeTime: {
          future: 'in %s',
          past: 'vor %s',
          s: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
      }
      return e.locale(a, null, !0), a
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        name: 'nl',
        weekdays: 'zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag'.split(
          '_'
        ),
        weekdaysShort: 'zo._ma._di._wo._do._vr._za.'.split('_'),
        weekdaysMin: 'zo_ma_di_wo_do_vr_za'.split('_'),
        months: 'januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december'.split(
          '_'
        ),
        monthsShort: 'jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec'.split(
          '_'
        ),
        ordinal: function (e) {
          return e + '.'
        },
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD-MM-YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        relativeTime: {
          future: 'over %s',
          past: '%s geleden',
          s: 'een paar seconden',
          m: 'een minuut',
          mm: '%d minuten',
          h: 'een uur',
          hh: '%d uur',
          d: 'een dag',
          dd: '%d dagen',
          M: 'een maand',
          MM: '%d maanden',
          y: 'een jaar',
          yy: '%d jaar',
        },
      }
      return e.locale(t, null, !0), t
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        name: 'fr',
        weekdays: 'dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi'.split(
          '_'
        ),
        weekdaysShort: 'dim._lun._mar._mer._jeu._ven._sam.'.split('_'),
        weekdaysMin: 'di_lu_ma_me_je_ve_sa'.split('_'),
        months: 'janvier_f??vrier_mars_avril_mai_juin_juillet_ao??t_septembre_octobre_novembre_d??cembre'.split(
          '_'
        ),
        monthsShort: 'janv._f??vr._mars_avr._mai_juin_juil._ao??t_sept._oct._nov._d??c.'.split(
          '_'
        ),
        weekStart: 1,
        yearStart: 4,
        formats: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        relativeTime: {
          future: 'dans %s',
          past: 'il y a %s',
          s: 'quelques secondes',
          m: 'une minute',
          mm: '%d minutes',
          h: 'une heure',
          hh: '%d heures',
          d: 'un jour',
          dd: '%d jours',
          M: 'un mois',
          MM: '%d mois',
          y: 'un an',
          yy: '%d ans',
        },
        ordinal: function (e) {
          return e + (1 === e ? 'er' : '')
        },
      }
      return e.locale(t, null, !0), t
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        name: 'es',
        monthsShort: 'ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic'.split(
          '_'
        ),
        weekdays: 'domingo_lunes_martes_mi??rcoles_jueves_viernes_s??bado'.split(
          '_'
        ),
        weekdaysShort: 'dom._lun._mar._mi??._jue._vie._s??b.'.split('_'),
        weekdaysMin: 'do_lu_ma_mi_ju_vi_s??'.split('_'),
        months: 'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre'.split(
          '_'
        ),
        weekStart: 1,
        formats: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D [de] MMMM [de] YYYY',
          LLL: 'D [de] MMMM [de] YYYY H:mm',
          LLLL: 'dddd, D [de] MMMM [de] YYYY H:mm',
        },
        relativeTime: {
          future: 'en %s',
          past: 'hace %s',
          s: 'unos segundos',
          m: 'un minuto',
          mm: '%d minutos',
          h: 'una hora',
          hh: '%d horas',
          d: 'un d??a',
          dd: '%d d??as',
          M: 'un mes',
          MM: '%d meses',
          y: 'un a??o',
          yy: '%d a??os',
        },
        ordinal: function (e) {
          return e + '??'
        },
      }
      return e.locale(t, null, !0), t
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        name: 'it',
        weekdays: 'domenica_luned??_marted??_mercoled??_gioved??_venerd??_sabato'.split(
          '_'
        ),
        weekdaysShort: 'dom_lun_mar_mer_gio_ven_sab'.split('_'),
        weekdaysMin: 'do_lu_ma_me_gi_ve_sa'.split('_'),
        months: 'gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre'.split(
          '_'
        ),
        weekStart: 1,
        monthsShort: 'gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic'.split(
          '_'
        ),
        formats: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD/MM/YYYY',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY HH:mm',
          LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        relativeTime: {
          future: 'tra %s',
          past: '%s fa',
          s: 'qualche secondo',
          m: 'un minuto',
          mm: '%d minuti',
          h: "un' ora",
          hh: '%d ore',
          d: 'un giorno',
          dd: '%d giorni',
          M: 'un mese',
          MM: '%d mesi',
          y: 'un anno',
          yy: '%d anni',
        },
        ordinal: function (e) {
          return e + '??'
        },
      }
      return e.locale(t, null, !0), t
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      function t(e) {
        return e > 1 && e < 5 && 1 != ~~(e / 10)
      }
      function n(e, n, a, o) {
        var i = e + ' '
        switch (a) {
          case 's':
            return n || o ? 'p??r sek??nd' : 'p??r sekundami'
          case 'm':
            return n ? 'min??ta' : o ? 'min??tu' : 'min??tou'
          case 'mm':
            return n || o ? i + (t(e) ? 'min??ty' : 'min??t') : i + 'min??tami'
          case 'h':
            return n ? 'hodina' : o ? 'hodinu' : 'hodinou'
          case 'hh':
            return n || o ? i + (t(e) ? 'hodiny' : 'hod??n') : i + 'hodinami'
          case 'd':
            return n || o ? 'de??' : 'd??om'
          case 'dd':
            return n || o ? i + (t(e) ? 'dni' : 'dn??') : i + 'd??ami'
          case 'M':
            return n || o ? 'mesiac' : 'mesiacom'
          case 'MM':
            return n || o ? i + (t(e) ? 'mesiace' : 'mesiacov') : i + 'mesiacmi'
          case 'y':
            return n || o ? 'rok' : 'rokom'
          case 'yy':
            return n || o ? i + (t(e) ? 'roky' : 'rokov') : i + 'rokmi'
        }
      }
      e = e && e.hasOwnProperty('default') ? e.default : e
      var a = {
        name: 'sk',
        weekdays: 'nede??a_pondelok_utorok_streda_??tvrtok_piatok_sobota'.split(
          '_'
        ),
        weekdaysShort: 'ne_po_ut_st_??t_pi_so'.split('_'),
        weekdaysMin: 'ne_po_ut_st_??t_pi_so'.split('_'),
        months: 'janu??r_febru??r_marec_apr??l_m??j_j??n_j??l_august_september_okt??ber_november_december'.split(
          '_'
        ),
        monthsShort: 'jan_feb_mar_apr_m??j_j??n_j??l_aug_sep_okt_nov_dec'.split(
          '_'
        ),
        weekStart: 1,
        yearStart: 4,
        ordinal: function (e) {
          return e + '.'
        },
        formats: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd D. MMMM YYYY H:mm',
          l: 'D. M. YYYY',
        },
        relativeTime: {
          future: 'za %s',
          past: 'pred %s',
          s: n,
          m: n,
          mm: n,
          h: n,
          hh: n,
          d: n,
          dd: n,
          M: n,
          MM: n,
          y: n,
          yy: n,
        },
      }
      return e.locale(a, null, !0), a
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        name: 'sl',
        weekdays: 'nedelja_ponedeljek_torek_sreda_??etrtek_petek_sobota'.split(
          '_'
        ),
        months: 'januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december'.split(
          '_'
        ),
        weekStart: 1,
        weekdaysShort: 'ned._pon._tor._sre._??et._pet._sob.'.split('_'),
        monthsShort: 'jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.'.split(
          '_'
        ),
        weekdaysMin: 'ne_po_to_sr_??e_pe_so'.split('_'),
        ordinal: function (e) {
          return e
        },
        formats: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY H:mm',
          LLLL: 'dddd, D. MMMM YYYY H:mm',
        },
        relativeTime: {
          future: '??ez %s',
          past: 'pred %s',
          s: 'nekaj sekund',
          m: 'minuta',
          mm: '%d minut',
          h: 'ura',
          hh: '%d ur',
          d: 'dan',
          dd: '%d dni',
          M: 'mesec',
          MM: '%d mesecev',
          y: 'leto',
          yy: '%d let',
        },
      }
      return e.locale(t, null, !0), t
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      function t(e, t, n, a) {
        var o = {
            s: 'muutama sekunti',
            m: 'minuutti',
            mm: '%d minuuttia',
            h: 'tunti',
            hh: '%d tuntia',
            d: 'p??iv??',
            dd: '%d p??iv????',
            M: 'kuukausi',
            MM: '%d kuukautta',
            y: 'vuosi',
            yy: '%d vuotta',
            numbers: 'nolla_yksi_kaksi_kolme_nelj??_viisi_kuusi_seitsem??n_kahdeksan_yhdeks??n'.split(
              '_'
            ),
          },
          i = {
            s: 'muutaman sekunnin',
            m: 'minuutin',
            mm: '%d minuutin',
            h: 'tunnin',
            hh: '%d tunnin',
            d: 'p??iv??n',
            dd: '%d p??iv??n',
            M: 'kuukauden',
            MM: '%d kuukauden',
            y: 'vuoden',
            yy: '%d vuoden',
            numbers: 'nollan_yhden_kahden_kolmen_nelj??n_viiden_kuuden_seitsem??n_kahdeksan_yhdeks??n'.split(
              '_'
            ),
          },
          r = a && !t ? i : o,
          s = r[n]
        return e < 10 ? s.replace('%d', r.numbers[e]) : s.replace('%d', e)
      }
      e = e && e.hasOwnProperty('default') ? e.default : e
      var n = {
        name: 'fi',
        weekdays: 'sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai'.split(
          '_'
        ),
        weekdaysShort: 'su_ma_ti_ke_to_pe_la'.split('_'),
        weekdaysMin: 'su_ma_ti_ke_to_pe_la'.split('_'),
        months: 'tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes??kuu_hein??kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu'.split(
          '_'
        ),
        monthsShort: 'tammi_helmi_maalis_huhti_touko_kes??_hein??_elo_syys_loka_marras_joulu'.split(
          '_'
        ),
        ordinal: function (e) {
          return e + '.'
        },
        weekStart: 1,
        relativeTime: {
          future: '%s p????st??',
          past: '%s sitten',
          s: t,
          m: t,
          mm: t,
          h: t,
          hh: t,
          d: t,
          dd: t,
          M: t,
          MM: t,
          y: t,
          yy: t,
        },
        formats: {
          LT: 'HH.mm',
          LTS: 'HH.mm.ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM[ta] YYYY',
          LLL: 'D. MMMM[ta] YYYY, [klo] HH.mm',
          LLLL: 'dddd, D. MMMM[ta] YYYY, [klo] HH.mm',
          l: 'D.M.YYYY',
          ll: 'D. MMM YYYY',
          lll: 'D. MMM YYYY, [klo] HH.mm',
          llll: 'ddd, D. MMM YYYY, [klo] HH.mm',
        },
      }
      return e.locale(n, null, !0), n
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        name: 'sv',
        weekdays: 's??ndag_m??ndag_tisdag_onsdag_torsdag_fredag_l??rdag'.split(
          '_'
        ),
        weekdaysShort: 's??n_m??n_tis_ons_tor_fre_l??r'.split('_'),
        weekdaysMin: 's??_m??_ti_on_to_fr_l??'.split('_'),
        months: 'januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december'.split(
          '_'
        ),
        monthsShort: 'jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec'.split(
          '_'
        ),
        weekStart: 1,
        ordinal: function (e) {
          var t = e % 10
          return '[' + e + (1 === t || 2 === t ? 'a' : 'e') + ']'
        },
        formats: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'YYYY-MM-DD',
          LL: 'D MMMM YYYY',
          LLL: 'D MMMM YYYY [kl.] HH:mm',
          LLLL: 'dddd D MMMM YYYY [kl.] HH:mm',
          lll: 'D MMM YYYY HH:mm',
          llll: 'ddd D MMM YYYY HH:mm',
        },
        relativeTime: {
          future: 'om %s',
          past: 'f??r %s sedan',
          s: 'n??gra sekunder',
          m: 'en minut',
          mm: '%d minuter',
          h: 'en timme',
          hh: '%d timmar',
          d: 'en dag',
          dd: '%d dagar',
          M: 'en m??nad',
          MM: '%d m??nader',
          y: 'ett ??r',
          yy: '%d ??r',
        },
      }
      return e.locale(t, null, !0), t
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        name: 'da',
        weekdays: 's??ndag_mandag_tirsdag_onsdag_torsdag_fredag_l??rdag'.split(
          '_'
        ),
        weekdaysShort: 's??n._man._tirs._ons._tors._fre._l??r.'.split('_'),
        weekdaysMin: 's??._ma._ti._on._to._fr._l??.'.split('_'),
        months: 'januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december'.split(
          '_'
        ),
        monthsShort: 'jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.'.split(
          '_'
        ),
        weekStart: 1,
        ordinal: function (e) {
          return e + '.'
        },
        formats: {
          LT: 'HH:mm',
          LTS: 'HH:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY HH:mm',
          LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm',
        },
        relativeTime: {
          future: 'om %s',
          past: '%s siden',
          s: 'f?? sekunder',
          m: 'et minut',
          mm: '%d minutter',
          h: 'en time',
          hh: '%d timer',
          d: 'en dag',
          dd: '%d dage',
          M: 'en m??ned',
          MM: '%d m??neder',
          y: 'et ??r',
          yy: '%d ??r',
        },
      }
      return e.locale(t, null, !0), t
    })(n(0))
  },
  function (e, t, n) {
    e.exports = (function (e) {
      'use strict'
      e = e && e.hasOwnProperty('default') ? e.default : e
      var t = {
        name: 'is',
        weekdays: 'sunnudagur_m??nudagur_??ri??judagur_mi??vikudagur_fimmtudagur_f??studagur_laugardagur'.split(
          '_'
        ),
        months: 'jan??ar_febr??ar_mars_apr??l_ma??_j??n??_j??l??_??g??st_september_okt??ber_n??vember_desember'.split(
          '_'
        ),
        weekStart: 1,
        weekdaysShort: 'sun_m??n_??ri_mi??_fim_f??s_lau'.split('_'),
        monthsShort: 'jan_feb_mar_apr_ma??_j??n_j??l_??g??_sep_okt_n??v_des'.split(
          '_'
        ),
        weekdaysMin: 'Su_M??_??r_Mi_Fi_F??_La'.split('_'),
        ordinal: function (e) {
          return e
        },
        formats: {
          LT: 'H:mm',
          LTS: 'H:mm:ss',
          L: 'DD.MM.YYYY',
          LL: 'D. MMMM YYYY',
          LLL: 'D. MMMM YYYY [kl.] H:mm',
          LLLL: 'dddd, D. MMMM YYYY [kl.] H:mm',
        },
      }
      return e.locale(t, null, !0), t
    })(n(0))
  },
  function (e) {
    e.exports = JSON.parse(
      '{"name":"script_tag","version":"1082.0.0","description":"","private":true,"scripts":{"test":"echo \\"Error: no test specified\\" && exit 1","build":"webpack","build:dev":"yarn version --major --no-git-tag-version && webpack --config ./webpack.config.js  --display-modules && cp ./dist/bundle.js ../app/views/popups/index.js.erb","build:prod":"yarn version --major --no-git-tag-version && webpack --config ./webpack.config.prod.js && cp ./dist/bundle.js ../app/views/popups/index.js.erb","deploy":"yarn build:prod && git add -u && git commit -m \'bump version\' && git push origin main && git push heroku main && heroku run rails db:migrate && heroku restart"},"keywords":[],"author":"","license":"ISC","devDependencies":{"webpack":"^4.44.2","webpack-cli":"^3.3.12"},"dependencies":{"axios":"^0.20.0","compare-versions":"^3.6.0","css-loader":"^5.0.0","dayjs":"^1.10.4","style-loader":"^2.0.0"}}'
    )
  },
  function (e, t, n) {
    'use strict'
    n.r(t)
    var a = n(1),
      o = n.n(a)
    const i = {
        th: 'th',
        sv: 'sv',
        es: 'es',
        'es-ES': 'es',
        'sl-SI': 'sl',
        'sk-SK': 'sk',
        ms: 'ms',
        ja: 'ja',
        it: 'it',
        id: 'id',
        de: 'de',
        'de-DE': 'de',
        fr: 'fr',
        fi: 'fi',
        en: 'en',
        nl: 'nl',
        no: 'no',
        da: 'da',
        is: 'is',
      },
      r = () => {
        const e =
          window.Shopify && window.Shopify.locale && i[window.Shopify.locale]
            ? window.Shopify.locale
            : 'en'
        let t = window.Shopify
            ? window.Shopify.shop
            : Object({
                BASE_URL: 'https://tarang.ngrok.io',
                DEPO_URL: 'https://mukul.ngrok.io',
              }).SHOPIFY_DOMAIN,
          a = n(34)(`./${i[e]}.json`),
          o = s[t],
          r = {}
        o && (r = o[i[e]] || {}),
          console.log(r),
          (window.Appointo = { translations: { ...a, ...r, locale: e } })
      },
      s = {
        '30-minutes-coaching.myshopify.com': {
          en: { addToCart: 'BOOK THIS COACH' },
          fr: { addToCart: 'R??SERVEZ CE COACH' },
          de: { addToCart: 'BUCHE DIESEN TRAINER' },
          nl: { addToCart: 'BOEK DEZE COACH' },
        },
        'skycrab.myshopify.com': { it: { scheduleTime: 'SCEGLI LA DATA' } },
        'thornaes.myshopify.com': {
          da: {
            scheduleTime: 'V??lg en dato',
            slotsRemaining: 'ledige pladser',
            selectSlot: 'V??lg en dato og et tidsrum ovenfor',
          },
        },
        'letablescape.myshopify.com': {
          en: { chooseVariant: 'Number of Guests' },
        },
        'green-doctors-ecuador.myshopify.com': {
          es: {
            chooseDate:
              'Oh no. Lo sentimos ya no hay citas disponibles este d??a, por favor elige otra fecha',
            availableSlots: 'Horas disponibles',
          },
        },
        'dyraland.myshopify.com': { is: { scheduleTime: 'B??ka' } },
        'thefirstrefresh.myshopify.com': {
          en: {
            confirmationText: 'You???re on your way to your first refresh!',
            greaterQuantity:
              'Oops! Looks like all available slots for this time are already in your cart. Get in touch at hello@thefirstrefresh.com with queries :)',
          },
        },
        'darts-farm.myshopify.com': {
          en: { chooseDate: 'Please book available date and time slot' },
        },
      }
    r()
    var l = n(3),
      d = n.n(l),
      c = n(5),
      u = { insert: 'head', singleton: !1 },
      p = (d()(c.a, u), c.a.locals, n(6)),
      m = { insert: 'head', singleton: !1 },
      f = (d()(p.a, m), p.a.locals, n(53), n(7)),
      h = { insert: 'head', singleton: !1 },
      y = (d()(f.a, h), f.a.locals, n(0)),
      g = n.n(y),
      v = n(8),
      b = { insert: 'head', singleton: !1 },
      k = (d()(v.a, b), v.a.locals, n(54)),
      _ = n(55),
      w = n(56)
    function x() {
      if (window.jQuery && k(window.jQuery.fn.jquery, '1.7'))
        window.$ || (window.$ = window.jQuery),
          console.log('jquery present', window.jQuery.fn.jquery, window.$)
      else {
        var e = document.createElement('script')
        e.setAttribute(
          'src',
          'https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'
        ),
          e.addEventListener(
            'load',
            function () {
              var e = document.createElement('script')
              document.body.appendChild(e)
            },
            !1
          ),
          document.body.appendChild(e)
      }
    }
    g.a.extend(_), g.a.extend(w)
    const S = {
        1: { startDate: '2021-01-01', endDate: '2021-01-31' },
        2: { startDate: '2021-02-01', endDate: '2021-02-28' },
        3: { startDate: '2021-03-01', endDate: '2021-03-31' },
        4: { startDate: '2021-04-01', endDate: '2021-04-30' },
        5: { startDate: '2021-05-01', endDate: '2021-05-31' },
        6: { startDate: '2021-06-01', endDate: '2021-06-30' },
        7: { startDate: '2021-07-01', endDate: '2021-07-31' },
        8: { startDate: '2021-08-01', endDate: '2021-08-31' },
        9: { startDate: '2021-09-01', endDate: '2021-09-30' },
        10: { startDate: '2021-10-01', endDate: '2021-10-31' },
        11: { startDate: '2021-11-01', endDate: '2021-11-30' },
        12: { startDate: '2020-12-01', endDate: '2020-12-31' },
      },
      M = [
        '.payment-and-quantity__add .product-add',
        '.atc-btn-container .add_to_cart',
        '#product-add-to-cart',
        '.productForm-submit',
        '.gPreorderAddToCartBtn',
        '.ProductForm__AddToCart',
        '.product-form__cart-submit',
        '.lh-add_to_cart',
        '.atc-btn-container .add_to_cart',
        '.add-to-cart-btn',
        '.product__add-to-cart',
        '.product__add-to-cart-button',
        '#add-to-cart',
        '#AddToCart--product-template',
        '#addToCart',
        '#AddToCart-product-template',
        '#AddToCart',
        '[data-add-to-cart="Add to cart"]',
        '[data-label="Add to Cart"]',
        '[data-label="Add to cart"]',
        '.add_to_cart',
        '.product-form--atc-button',
        '.product-form--add-to-cart',
        '#AddToCart-product',
        '.AddtoCart',
        'button.btn-addtocart',
        '.product-submit',
        '[value="Add to Cart"]',
        '[aria-label="Add to cart"]',
        "[data-action='add-to-cart']",
        '[name="add"]',
      ],
      T = (e) => {
        switch (e.cf_type) {
          case 'text':
            return `<textarea\n          class="appointo-textarea"\n          type="text"\n          id="appointo-value-${e.id}"\n          name="${e.label}"\n          required="${e.required}"\n        ></textarea>`
          case 'email':
            return `<input\n          class="appointo-input"\n          type="email"\n          id="appointo-value-${e.id}"\n          name="${e.label}"\n          required="${e.required}"\n        ></input>`
          case 'dropdown':
            return `<select\n          id="appointo-value-${
              e.id
            }"\n          class="appointo-input"\n        >\n          <option selected disabled>\n           Choose an option\n          </option>\n          ${e.options
              .map((e) => `<option  value="${e}">${e}</option>`)
              .join('')}\n        </select>`
          case 'radio':
            return `\n      <div class="appointo-radio-container" id="appointo-radio">\n        ${e.options
              .map(
                (t) =>
                  `<div class="appointo-radio-item" id="appointo-radio-${D(
                    t
                  )}">\n              <input type="radio" class="appointo-radio" name="appointo-cf-radio-${
                    e.id
                  }" id="appointo-radio-item-${D(
                    t
                  )}" value="${t}">\n              <label for="${D(
                    t
                  )}" class="appointo-cf-label" id="appointo-cf-label-${D(
                    t
                  )}">\n                ${t}\n              </label>\n            </div>\n            `
              )
              .join('')}\n      </div>`
        }
      },
      j = (e) => {
        switch (e.cf_type) {
          case 'text':
          case 'email':
          case 'dropdown':
            return $('#appointo-value-' + e.id).val()
          case 'radio':
            return $(`input[name="appointo-cf-radio-${e.id}"]:checked`).val()
        }
      },
      D = (e) => e.replace(/[^a-zA-Z]/g, ''),
      A = [
        'pedall-bike.myshopify.com',
        'cheffboris.myshopify.com',
        'bugs-vintage-and-thrift.myshopify.com',
        'coastalsurgecrafts.myshopify.com',
        'east-harlem-tax-service.myshopify.com',
        'her-kollxtion.myshopify.com',
        'the-man-camp.myshopify.com',
        'hue-la-la.myshopify.com',
        'ar-jr-glass-hardware-wholesale.myshopify.com',
        'joealhaddad.myshopify.com',
        'unfold-preloved.myshopify.com',
        'ecco-restaurant.myshopify.com',
        'kl-diamonds.myshopify.com',
        'coaching-with-ladi.myshopify.com',
        'alice-agnes.myshopify.com',
        'bbqikpro.myshopify.com',
        'us-thenorthamericanguitar.myshopify.com',
        'joshuas-3d-supplies.myshopify.com',
        'the-food-truck-pros.myshopify.com',
        'entrepreneurbusinesscoach.myshopify.com',
        '30-5plan.myshopify.com',
        'ovb-deutschland.myshopify.com',
        'virtu360.myshopify.com',
        'yl-mama-millennial.myshopify.com',
        'solibre.myshopify.com',
        'mtk-australia-2021.myshopify.com',
        'digimentori-fi.myshopify.com',
        'karuptcustomz.myshopify.com',
        'healthy-leaf-organics.myshopify.com',
        'millennialmapping.myshopify.com',
        'percotest.myshopify.com',
        'apfit-coaching.myshopify.com',
        'oshun-spiritual-cleansing.myshopify.com',
        'educatio-france.myshopify.com',
        'jordan-steinberg-fitness.myshopify.com',
        'kendra-kreations-styling.myshopify.com',
        'ts-creative-closet.myshopify.com',
        'buildingbodieswitht.myshopify.com',
        'kalani-grillz.myshopify.com',
        'mdshowroom.myshopify.com',
        'sivaramtest2.myshopify.com',
        'torontoplantgirl.myshopify.com',
        'i-been-pretty.myshopify.com',
        'bellemerenewyork.myshopify.com',
      ],
      C = ['#quantity', '[name="quantity"]']
    function Y() {
      let e = 1
      for (let t = 0; t < C.length; t++) {
        const n = document.querySelectorAll(C[t])
        if (n.length > 0 && !isNaN(n[0].value)) {
          e = parseInt(n[0].value, 10)
          break
        }
      }
      return e
    }
    let L = {
      '2021-05-04': { '2021-05-04T18:00:00-04:00': 2 },
      '2021-05-06': { '2021-05-06T16:00:00-04:00': 2 },
      '2021-05-07': { '2021-05-07T18:00:00-04:00': 3 },
      '2021-05-08': {
        '2021-05-08T12:00:00-04:00': 5,
        '2021-05-08T13:00:00-04:00': 4,
        '2021-05-08T14:00:00-04:00': 7,
        '2021-05-08T15:00:00-04:00': 2,
        '2021-05-08T16:00:00-04:00': 8,
      },
      '2021-05-09': {
        '2021-05-09T15:00:00-04:00': 6,
        '2021-05-09T16:00:00-04:00': 5,
        '2021-05-09T17:00:00-04:00': 2,
      },
      '2021-05-13': { '2021-05-13T17:00:00-04:00': 3 },
      '2021-05-15': {
        '2021-05-15T13:00:00-04:00': 2,
        '2021-05-15T14:00:00-04:00': 2,
      },
      '2021-05-16': { '2021-05-16T12:00:00-04:00': 2 },
      '2021-05-28': { '2021-05-28T14:00:00-04:00': 2 },
    }
    function E(e) {
      let t = e.calendly_events.days.map((e) => {
        let t = L[e.date]
        if (t) {
          let n = e.spots
          return (
            e.spots.length > 0 &&
              (n = e.spots.map((e) => {
                let n = t[e.start_time],
                  a = e.customers_count
                return n && (a += n), { ...e, customers_count: a }
              })),
            { ...e, spots: n }
          )
        }
        return e
      })
      return { ...e, calendly_events: { ...e.calendly_events, days: t } }
    }
    function B(e, t) {
      return 'number' == typeof e.customers_count && e.max_capacity > 1
        ? `<div class="appointo-remaining-slot">${
            e.max_capacity - e.customers_count
          }/${e.max_capacity} ${t.slotsRemaining}</div>`
        : ''
    }
    function O(e) {
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        e
      )
    }
    const z = (e = null, t = !1, n = '') => {
        let a = P.find((e) => e.value === n),
          o = document.getElementById('timezone-text')
        return t
          ? a
            ? (o && (o.innerHTML = 'Timezone: ' + a.label),
              g()(e).tz(a.new_value))
            : (o &&
                (o.innerHTML =
                  'Timezone: ' +
                  Intl.DateTimeFormat().resolvedOptions().timeZone),
              g()(e))
          : e
          ? (o &&
              (o.innerHTML =
                'Timezone: ' +
                Intl.DateTimeFormat().resolvedOptions().timeZone),
            g()(e))
          : (o &&
              (o.innerHTML =
                'Timezone: ' +
                Intl.DateTimeFormat().resolvedOptions().timeZone),
            g()())
      },
      H = (e) => {
        g.a.locale(e)
      },
      P = [
        {
          label: 'Pacific Standard Time (PST)',
          value: 'America/Los_Angeles',
          new_value: 'America/Los_Angeles',
        },
        {
          label: 'Eastern Time (ET)',
          value: 'America/New_York',
          new_value: 'America/New_York',
        },
        {
          label: 'Central Time (US & Canada)',
          value: 'Central Time (US & Canada)',
          new_value: 'America/Winnipeg',
        },
        {
          label: 'Mountain Time (US & Canada)',
          value: 'Mountain Time (US & Canada)',
          new_value: 'America/Edmonton',
        },
        {
          label: 'Newfoundland Time Zone',
          value: 'Newfoundland',
          new_value: 'America/St_Johns',
        },
        {
          label: 'Atlantic Time (Canada)',
          value: 'Atlantic Time (Canada)',
          new_value: 'America/Halifax',
        },
        {
          label: 'Hawaii Standard Time',
          value: 'Hawaii',
          new_value: 'Pacific/Honolulu',
        },
        {
          label: 'UK,Ireland,Lisbon Time',
          value: 'Europe/London',
          new_value: 'Europe/London',
        },
        {
          label: 'Central European Time(CET) ',
          value: 'CET',
          new_value: 'Europe/Paris',
        },
        {
          label: 'Eastern European Time (EET)',
          value: 'EET',
          new_value: 'Europe/Sofia',
        },
        {
          label: 'New Zealand Standard Time',
          value: 'Pacific/Auckland',
          new_value: 'Pacific/Auckland',
        },
        {
          label: 'Arabian Standard Time',
          value: 'Asia/Kuwait',
          new_value: 'Asia/Kuwait',
        },
        {
          label: 'Ecuador Timezone',
          value: 'America/Lima',
          new_value: 'America/Lima',
        },
        {
          label: 'Pakistan Standard Time (PKT)',
          value: 'Asia/Karachi',
          new_value: 'Asia/Karachi',
        },
        {
          label: 'Indian Standard Time (IST)',
          value: 'Asia/Kolkata',
          new_value: 'Asia/Kolkata',
        },
        {
          label: 'Japan Standard Time',
          value: 'Asia/Tokyo',
          new_value: 'Asia/Tokyo',
        },
        {
          label: 'Singapore Time',
          value: 'Singapore',
          new_value: 'Asia/Singapore',
        },
        {
          label: 'UAE Standard Time',
          value: 'Asia/Dubai',
          new_value: 'Asia/Dubai',
        },
        {
          label: 'Coordinated Universal Time (UTC)',
          value: 'UTC',
          new_value: 'UTC',
        },
        {
          label: 'Australia/Adelaide',
          value: 'Australia/Adelaide',
          new_value: 'Australia/Adelaide',
        },
        {
          label: 'Hong Kong Time',
          value: 'Asia/Hong_Kong',
          new_value: 'Asia/Hong_Kong',
        },
        {
          label: 'Australia/Brisbane',
          value: 'Australia/Brisbane',
          new_value: 'Australia/Brisbane',
        },
        {
          label: 'Australia/Darwin',
          value: 'Australia/Darwin',
          new_value: 'Australia/Darwin',
        },
        {
          label: 'Australia/Perth',
          value: 'Australia/Perth',
          new_value: 'Australia/Perth',
        },
        {
          label: 'Australia/Sydney',
          value: 'Australia/Sydney',
          new_value: 'Australia/Sydney',
        },
        {
          label: 'America/Sao_Paulo',
          value: 'America/Sao_Paulo',
          new_value: 'America/Sao_Paulo',
        },
      ]
    function I(e, t) {
      window.sessionStorage.setItem(e, JSON.stringify(t))
    }
    function N(e) {
      const t = window.sessionStorage.getItem(e)
      return JSON.parse(t)
    }
    function q(e, t) {
      window.sessionStorage.setItem(e, t)
    }
    function R(e) {
      return window.sessionStorage.getItem(e)
    }
    function V(e, t) {
      Object.keys(t).forEach((n) => {
        e.style[n] = t[n]
      })
    }
    const U = (() => {
      const e = {
          SHOW: {
            '-webkit-transition': 'opacity 400ms, -webkit-transform 400ms',
            transition: 'opacity 400ms, transform 400ms',
            opacity: '1',
            '-webkit-transform': 'translateY(-100%) translateZ(0)',
            transform: 'translateY(-100%) translateZ(0)',
          },
          HIDE: {
            opacity: '0',
            '-webkit-transform': 'translateY(150%) translateZ(0)',
            transform: 'translateY(150%) translateZ(0)',
          },
        },
        t = {
          style: {
            main: {
              background: '#8dc7b5',
              'box-shadow': '#79b7a3 0px 0px 4px',
              'z-index': '99999',
              color: 'rgba(255, 255, 255, .9)',
              'font-family': 'sans-serif',
              padding: '10px 15px',
              'max-width': '30%',
              'word-break': 'keep-all',
              margin: '0 auto',
              'text-align': 'center',
              'border-radius': '10px',
              position: 'fixed',
              left: '0',
              right: '0',
              bottom: '0',
              '-webkit-transform': 'translateY(150%) translateZ(0)',
              transform: 'translateY(150%) translateZ(0)',
              '-webkit-filter': 'blur(0)',
              opacity: '0',
            },
          },
          settings: { duration: 4e3 },
        },
        n = []
      let a, o
      function i(a, i, s) {
        const c = s || e
        if (void 0 !== l()) n.push({ text: a, options: i, transitions: c })
        else {
          let e = i || {}
          ;(e = (function e(t, n) {
            const a = n
            for (const n in t)
              a.hasOwnProperty(n)
                ? null !== t[n] &&
                  t[n].constructor === Object &&
                  (a[n] = e(t[n], a[n]))
                : (a[n] = t[n])
            return a
          })(t, e)),
            (function (e, t, n) {
              !(function (e, t) {
                var n = document.createElement('div')
                'string' == typeof e && (e = document.createTextNode(e))
                n.appendChild(e),
                  n.classList.add('appointo-toast'),
                  d(n),
                  V(l(), t)
              })(e, t.style.main)
              const a = l()
              document.body.insertBefore(a, document.body.firstChild),
                a.offsetHeight,
                V(a, n.SHOW),
                clearTimeout(o),
                0 !== t.settings.duration &&
                  (o = setTimeout(() => r(n), t.settings.duration))
            })(a, e, c)
        }
        return { hide: () => r(c) }
      }
      function r(e) {
        const t = l()
        V(t, e.HIDE),
          clearTimeout(o),
          t.addEventListener('transitionend', s, { once: !0 })
      }
      function s() {
        const e = l()
        if ((document.body.removeChild(e), d(void 0), n.length > 0)) {
          const e = n.shift()
          i(e.text, e.options, e.transitions)
        }
      }
      function l() {
        return a
      }
      function d(e) {
        a = e
      }
      return { toast: i }
    })()
    let J = window.Shopify
      ? window.Shopify.shop
      : Object({
          BASE_URL: 'https://tarang.ngrok.io',
          DEPO_URL: 'https://mukul.ngrok.io',
        }).SHOPIFY_DOMAIN
    const F = {
        'cosmere-items-de.myshopify.com': () => {
          let e = document.querySelectorAll('[data-add-to-cart]')
          if (e.length) {
            $(
              `<div id="appointo-btn" class="btn product-form__cart-submit">${I18n.addToCart}</div>`
            ).insertAfter(e[0])
            const t = document.querySelectorAll(
              "[data-testid='Checkout-button']"
            )
            t.length && t[0].remove(), e[0].remove()
          }
          setTimeout(() => {
            oe()
          }, 300)
        },
        'the-wedding-people-binational-weddings.myshopify.com': () => {
          let e = document.querySelectorAll("[aria-label='Add to cart']")
          if (e.length) {
            $(
              '<div id="appointo-btn" class="btn product-form__cart-submit btn--secondary-accent">SCHEDULE YOUR WEDDING</div>'
            ).insertAfter(e[0])
            const t = document.querySelectorAll(
              "[data-testid='Checkout-button']"
            )
            t.length && t[0].remove(), e[0].remove()
          }
          setTimeout(() => {
            $('#appointo-disclaimer').text(
              '*Timeslots are shown in your timezone'
            )
          }, 1e3)
        },
        'spotless305.myshopify.com': () => {
          let e = document.querySelectorAll("[aria-label='Add to cart']")
          if (e.length) {
            $(
              '<div id="appointo-btn" class="btn btn--secondary product-form__cart-submit">Schedule Time</div>'
            ).insertAfter(e[0])
            const t = document.querySelectorAll(
              "[data-testid='Checkout-button']"
            )
            t.length && t[0].remove(), e[0].remove()
          }
          ae('black'),
            setTimeout(() => {
              oe(),
                $('#appointo-custom-text').show(),
                re('231857029286', '${{amount}}', 6, !0, [], 'Add Ons')
            }, 1e3)
        },
        '30-minutes-coaching.myshopify.com': (e) => {
          let t = document.querySelectorAll('[data-add-to-cart]')
          if (t.length) {
            $(
              `<div id="appointo-btn" class="btn product-form__cart-submit">${e.addToCart}</div>`
            ).insertAfter(t[0])
            const n = document.querySelectorAll(
              "[data-testid='Checkout-button']"
            )
            n.length && n[0].remove(), t[0].remove()
          }
          window.Weglot &&
            Weglot.on('languageChanged', (e, t) => {
              window.location.reload()
            }),
            setTimeout(async () => {
              oe(), ae('#4965f0'), $('#appointo-selected-bookings').hide()
              let e = '',
                t = $('.appointo-product-name')
              t.length > 0 && (e = t[0].innerText)
              let n = [
                { t: 1, w: e },
                ...$('#appointo-variant-select option')
                  .map(function () {
                    return $(this).text()
                  })
                  .get()
                  .filter((e, t) => 0 !== t)
                  .map((e) => ({ t: 1, w: e })),
              ]
              window.Weglot &&
                Weglot.translate(
                  { words: n, languageTo: window.Shopify.locale },
                  (e) => {
                    t.text(e[0]),
                      $('#appointo-variant-select option').map(function () {
                        0 !== $(this).index() &&
                          $(this).text(e[$(this).index()])
                      })
                  }
                )
            }, 300)
        },
        'heilarzneihaus.myshopify.com': (e, t) => {
          let n = document.querySelectorAll(
            '#s-4671b3dc-6638-42b2-9fdb-80d413d6bd2d'
          )
          n.length &&
            $(
              '<div id="appointo-btn" style="\n          background: #D3AE30;\n          color: #363636;\n          border-radius: 2px;\n          /* height: 40px; */\n          align-items: center;\n          justify-content: center;\n          text-align: center;\n          display: flex;\n          padding: 8px 20px;\n          width: 250px;\n          align-self: center;\n          margin-top: 10px;\n          left: calc(50% - 125px);\n          cursor: pointer;\n          position: relative;\n          font-weight: 500;">Gesundheitsberatung Buchen</div>'
            ).insertAfter(n[0]),
            ae('#D3AE30'),
            setTimeout(() => {
              $('.appointo-product-name').html(
                `\n        <p style="font-size: 22px;color: #434343;font-weight: 700;margin-bottom: 0px">\n          ${t.title} ${t.variants[0].title}\n          <span style="font-size: 14px;color: #848484; font-weight: 300">\n          - ${t.vendor}\n          </span> \n        <p>`
              ),
                $('#appointo-modal-content').append(
                  '<img class="appointo-avatar" src="https://cdn.shopify.com/s/files/1/0352/5522/2409/files/Heilarzneihaus-500x500.png?v=1613561474"/>'
                ),
                $('#appointo-modal-content').addClass(
                  'appointo-modal-content-robotto'
                ),
                $('.appointo-branding').html(
                  '<img style="width: 250px;" src="https://cdn.shopify.com/s/files/1/0352/5522/2409/files/Heilarzneihaus.png?v=1613407903"/>'
                ),
                $('.appointo-product-name').css({
                  'margin-bottom': '0px',
                  'font-family': 'Roboto !important',
                }),
                $('#appointo-custom-text').css({ 'margin-top': '0px' }),
                $('.appointo-date-header').hide(),
                $('.appointo-calendar-day-events').css({
                  'margin-left': '80px',
                }),
                $('#appointo-custom-text').show(),
                $('.appointo-time-div').css({
                  'margin-left ': '0px',
                  'margin-right ': '0px',
                }),
                $('#vanilla-right-arrow').css({ fill: '#434343' }),
                $('#vanilla-left-arrow').css({ fill: '#434343' }),
                $('#appointo-custom-text').html(
                  `\n        <div style="display:flex; flex-direction:column;color:#848484;font-family: Roboto">\n          <p style="font-size:15px;margin-bottom:0px"><i class="fa fa-clock" style="margin-right:10px;color: #848484"></i>${t.variants[0].title}</p>\n          <p style="font-size:15px;margin-bottom:0px"><i class="fa fa-phone-alt" style="margin-right:10px;color: #848484"></i>Online</p>\n        </div>\n        `
                ),
                $('#appointo-disclaimer').hide(),
                $('#vanilla-calendar-week span').css('color', '#434343'),
                document.documentElement.style.setProperty(
                  '--vanilla-toast-color',
                  '#363636'
                )
            }, 200)
        },
        'onsite-labs.myshopify.com': () => {
          let e = document.querySelectorAll('#AddToCart')
          e.length &&
            ($(
              '<div onMouseOver="this.style.color=\'#134072\';this.style.background=\'#f69d1b\'"  onMouseOut="this.style.color=\'#fff\';this.style.background=\'#134072\'" style="margin-top: 15px; font-size: 16px; padding: 20px 0px; width: 100%;background: #134072; color: #fff" id="appointo-btn" class="btn">\n        <i class="fas fa-cart-plus" style="margin-right: 10px" aria-hidden="true"></i><span>Book Your Appointment</span>\n      </div>'
            ).insertAfter(e[0]),
            e[0].remove()),
            ae('#134072'),
            setTimeout(() => {
              $('#appointo-custom-text').show(),
                $('#appointo-custom-text').html(
                  '\n          <p style="margin-bottom: 3px;">Notes</p>\n          <ul>\n            <li>We are currently only serving the Southern California region (Los Angeles, San Diego, Santa Barbara, Palm Springs, etc). Soon available in SF & Bay Area.</li>\n            <li>Bookings can be made 48 hours in advance.</li>\n            <li>Bookings are 100% refundable if cancelled more than 24 hours before.</li>\n            <li>Please refer to our ???How to Book an Appointment??? section for booking instructions. </li>\n          </ul>\n        '
                ),
                oe()
            }, 200)
        },
        'feelhobby.myshopify.com': () => {
          ae('#334E4A'),
            setTimeout(() => {
              $('#appointo-modal-content').addClass(
                'appointo-modal-content-montserrat'
              ),
                $('.appointo-product-name').css({
                  'font-size': '22px',
                  'font-weight': '600',
                }),
                oe()
            }, 200)
        },
        'psychic-carline-v.myshopify.com': () => {
          let e = document.querySelectorAll('[name="add"]')
          e.length &&
            ($(
              `<div id="appointo-btn" class="${e[0].classList.value}">Schedule Your Time</div>`
            ).insertAfter(e[0]),
            e[0].remove())
        },
        'rethynkjindabyne.myshopify.com': () => {
          let e = document.querySelectorAll('.add_to_cart')
          e.length &&
            ($(
              '<div id="appointo-btn" class="action_button add_to_cart">Select Your Date</div>'
            ).insertAfter(e[0]),
            e[0].remove()),
            setTimeout(() => {
              const e = document.querySelectorAll(
                "[data-testid='Checkout-button']"
              )
              e.length && e[0].remove()
            }, 200)
        },
        'bigdropnyc.myshopify.com': () => {
          let e = document.querySelectorAll('#addToCart')
          e.length &&
            ($(
              `<div id="appointo-btn" style="\n          width: 100%; \n          background: #000000; \n          margin-bottom: 15px;\n          line-height: normal;\n          height: 50px;\n          color: white;\n          padding-top: 15px;" class="${e[0].classList.value}">Schedule Your Time</div>`
            ).insertAfter(e[0]),
            e[0].remove())
        },
        'pure-gallus-social.myshopify.com': () => {
          setTimeout(() => {
            let e = document.querySelectorAll('.shopify-cleanslate'),
              t = e.length
            for (let n = 0; n < t; n++) e[n].remove()
            let n = document.querySelectorAll('[data-testid=sheet-open-button]')
            n.length && n[0].remove()
          }, 200)
        },
        'wollen-berlin.myshopify.com': (e) => {
          let t = document.querySelectorAll('#addToCartCopy')
          t.length &&
            ($(
              `<div id="appointo-btn" style="text-align: center;padding:10px 14px;" class="${t[0].classList.value}">${e.scheduleTime}</div>`
            ).insertAfter(t[0]),
            t[0].remove())
        },
        'addicted-to-the-doll-house.myshopify.com': () => {
          let e = document.querySelectorAll('.shopify-payment-button__button')
          e.length &&
            ($(
              `<div id="appointo-btn" class="${e[0].classList.value}">Schedule Your Time</div>`
            ).insertAfter(e[0]),
            e[0].remove()),
            setTimeout(() => {
              let e = document.querySelectorAll('.shopify-payment-button'),
                t = e.length
              for (let n = 0; n < t; n++) e[n].remove()
              let n = document.querySelectorAll(
                '[data-testid=sheet-open-button]'
              )
              n.length && n[0].remove()
            }, 400)
        },
        'light-of-she.myshopify.com': () => {
          let e = document.querySelectorAll('.add_to_cart')
          e.length &&
            ($(
              '<div id="appointo-btn" class="action_button add_to_cart action_button--secondary">Schedule Your Time</div>'
            ).insertAfter(e[0]),
            e[0].remove()),
            setTimeout(() => {
              const e = document.querySelectorAll(
                "[data-testid='Checkout-button']"
              )
              e.length && e[0].remove()
            }, 200)
        },
        'tea-phases.myshopify.com': () => {
          let e = document.querySelectorAll('.add_to_cart')
          e.length &&
            ($(
              '<div id="appointo-btn" class="action_button add_to_cart action_button--secondary">Schedule Your Time</div>'
            ).insertAfter(e[0]),
            e[0].remove()),
            setTimeout(() => {
              const e = document.querySelectorAll('.shopify-payment-button')
              e.length && e[0].remove()
            }, 200)
        },
        'popandpearl5pts.myshopify.com': () => {
          let e = document.querySelectorAll('.productForm-submit')
          e.length &&
            ($(
              '<div id="appointo-btn" class="productForm-submit button--alt" style="display: flex;align-items: center;justify-content: center;cursor: pointer;">Schedule Your Time</div>'
            ).insertAfter(e[0]),
            e[0].remove()),
            setTimeout(() => {
              const e = document.querySelectorAll('.shopify-payment-button')
              e.length && e[0].remove()
            }, 200)
        },
        'skycrab.myshopify.com': () => {
          setTimeout(() => {
            let e = document.querySelectorAll('.shopify-payment-button')
            e.length && e[0].remove(), oe()
          }, 200)
        },
        'mobila-biltvatt.myshopify.com': () => {
          setTimeout(() => {
            let e = {
              39589429805225: '264821735593',
              39579874427049: '264821702825',
              39579874459817: '264821768361',
              39588660936873: '264821735593',
              39588660969641: '264821702825',
              39588661002409: '264821768361',
              39588658872489: '264821735593',
              39588656873641: '264821702825',
              39588656906409: '264821768361',
              39588648943785: '264821735593',
              39588648976553: '264821702825',
              39588649009321: '264821768361',
            }
            $('#appointo-custom-text').show()
            const t = (e) => {
              re(
                e,
                '{{amount}} kr.',
                20,
                !1,
                ['39892626374825', '39892652228777'],
                'Till??gg'
              )
            }
            var n = document.URL
            document.addEventListener('change', function () {
              var a = document.URL,
                o = new URL(a).searchParams.get('variant')
              ;(a = o ? a : o) &&
                n != a &&
                ((n = a), $('#appointo-custom-text').html('H??mtar...'), t(e[o]))
            }),
              document
                .getElementById('appointo-variant-select')
                .addEventListener('change', async (n) => {
                  $('#appointo-custom-text').html('H??mtar...'),
                    t(e[n.target.value])
                }),
              t('264821735593')
          }, 1e3)
        },
        'udklaedningshop.myshopify.com': () => {
          let e = document.querySelectorAll('#AddToCart')
          e.length &&
            ($(
              `<div id="appointo-btn" style="\n          width: 100%; \n          background: #000000; \n          margin-bottom: 15px;\n          line-height: normal;\n          height: 50px;\n          color: white;\n          padding: 10px 45px;\n          display: flex;\n          align-items: center;\n          text-transform: uppercase;\n         " class="${e[0].classList.value}">Planl??g din tid</div>`
            ).insertAfter(e[0]),
            e[0].remove())
        },
        'poojaistore.myshopify.com': () => {
          let e = document.querySelectorAll('#add-to-cart'),
            t = document.querySelectorAll('#appointo-btn')
          e.length &&
            0 === t.length &&
            $(
              '<div id="appointo-btn"class="btn btn-1" style="margin-bottom: 20px">Schedule Your Time</div>'
            ).insertBefore(e[0])
        },
        'yarn-worx.myshopify.com': () => {
          let e = []
          ;(e =
            window.innerWidth <= 768
              ? document.querySelectorAll('.add_to_cart')
              : document.querySelectorAll('.atc-btn-container .add_to_cart')),
            e.length &&
              ($(
                '<div id="appointo-btn"class="action_button add_to_cart ">Schedule Your Time</div>'
              ).insertAfter(e[0]),
              e[0].remove())
        },
        'letablescape.myshopify.com': () => {
          setTimeout(() => {
            oe(),
              $('#appointo-custom-text').show(),
              re('264083144878', '${{amount}}', 6, !1, ['123'], 'Add Ons')
          }, 1e3)
        },
        'press-pilates.myshopify.com': () => {
          setTimeout(() => {
            $('#appointo-btn').css({
              color: 'white',
              background: '#fbbda1',
              padding: '12px 20px',
              'font-size': '13px',
            })
          }, 200)
        },
        'specsmakerspartner.myshopify.com': () => {
          let e = document.querySelectorAll('.add_to_cart')
          e.length &&
            ($(
              '<div id="appointo-btn"class="btn AddToCart" >Schedule Your Time</div>'
            ).insertAfter(e[0]),
            e[0].remove())
        },
        'coquetasbynaya-com.myshopify.com': () => {
          setTimeout(() => {
            $('#appointo-btn').css({ background: '#d8c5ee' })
          }, 200)
        },
        'joan-dominique-beauty.myshopify.com': () => {
          setTimeout(() => {
            $('#appointo-product-name').remove(),
              $('.appointo-branding-image').css({
                width: 'auto',
                marginBottom: 0,
              }),
              $('.appointo-close-container p').css({ margin: 0 })
          }, 200)
        },
        'skinsolutionshop.myshopify.com': () => {
          let e = document.querySelectorAll('.product-form--atc-button'),
            t = document.querySelectorAll('#appointo-btn')
          e.length &&
            0 === t.length &&
            $(
              '<div id="appointo-btn"class="product-form--atc-button mdc-ripple-surface mdc-ripple-upgraded" style="text-align: center">Schedule Your Time</div>'
            ).insertBefore(e[0])
        },
      },
      K = {
        'the-wedding-people-binational-weddings.myshopify.com': {
          fulfilled: () => '/' === window.location.pathname,
          execute: () =>
            fetch('/products/international-wedding.json', {
              method: 'GET',
              headers: { Accept: 'application/json' },
            }),
        },
        'heilarzneihaus.myshopify.com': {
          fulfilled: () =>
            '/pages/gesundheitsberatung-coaching' === window.location.pathname,
          execute: () =>
            fetch('/products/personliche-beratung.json', {
              method: 'GET',
              headers: { Accept: 'application/json' },
            }),
        },
        'shades-of-joy-studio.myshopify.com': {
          fulfilled: () => '/cart' === window.location.pathname,
          execute: () =>
            fetch('/products/book-now.json', {
              method: 'GET',
              headers: { Accept: 'application/json' },
            }),
        },
      },
      Z = [
        'spotless305.myshopify.com',
        'super-fit-classes.myshopify.com',
        'mobila-biltvatt.myshopify.com',
        'letablescape.myshopify.com',
      ],
      W = [
        'hinthunt-south-africa.myshopify.com',
        'withsimplicity-llc.myshopify.com',
        'heilarzneihaus.myshopify.com',
        'onsite-labs.myshopify.com',
        'wave-neuro.myshopify.com',
        'the-side-door-event-venue.myshopify.com',
        'styled-byserena.myshopify.com',
        'liveguru.myshopify.com',
        'psychic-carline-v.myshopify.com',
        'rethynkjindabyne.myshopify.com',
        'le-campeur-nomade.myshopify.com',
        'gotestrapide-com.myshopify.com',
        'cradl-marketplace.myshopify.com',
        'addicted-to-the-doll-house.myshopify.com',
        'rajeev-daswani-a-happiness-coaching-center.myshopify.com',
        'pillarandpride.myshopify.com',
        'corona-testzentrum-monheim.myshopify.com',
      ],
      Q = [1844456587327],
      G = [
        'zayla-s-sweet-treats.myshopify.com',
        'choraltracks-com.myshopify.com',
      ],
      X = [
        'hinthunt-south-africa.myshopify.com',
        'heilarzneihaus.myshopify.com',
        'liluschka.myshopify.com',
        'dreamrobot-shop.myshopify.com',
        'corona-testzentrum-monheim.myshopify.com',
      ],
      ee = [
        'lashbeaux.myshopify.com',
        'beyond-the-bar-fun.myshopify.com',
        'eon-fragrances.myshopify.com',
        'jummiegrow.myshopify.com',
      ],
      te = [
        'feelhobby.myshopify.com',
        'thefirstrefresh.myshopify.com',
        'cosmere-items-dev3.myshopify.com',
      ],
      ne = ['feelhobby.myshopify.com'],
      ae = (e) => {
        document.documentElement.style.setProperty(
          '--vanilla-calendar-selected-bg-color',
          e
        ),
          document.documentElement.style.setProperty(
            '--vanilla-calendar-today-color',
            e
          ),
          document.documentElement.style.setProperty('--vanilla-toast-color', e)
      },
      oe = () => {
        $('#appointo-branding').hide(), $('.appointo-branding').hide()
      },
      ie = async () => {
        let e = []
        $('#appointo-add-ons-checkbox')
          .find('input[type=checkbox]:checked')
          .each(function () {
            let t = $(this).val().replace('gid://shopify/ProductVariant/', '')
            e.push({ id: t, quantity: $('#appointo-qty-' + t).val() || 1 })
          }),
          e.length > 0 &&
            (await (async function (e) {
              return me('/cart/add.js', { items: e })
            })(e)),
          (window.location.href = '/checkout')
      }
    function re(e, t, n = 6, a = !0, i, r) {
      $('#appointo-custom-text').show(),
        o.a
          .get(
            `https://tarang.ngrok.io/scripttag/products_by_collection?shopify_domain=${J}&collection_id=${e}&limit=${n}`
          )
          .then((e) => {
            let n = e.data.data,
              o = n
                .map((e) => {
                  let n = e.variants.edges[0].node
                  return `\n        <div class="appointo-addons">\n          <input style="margin-right: 15px;margin-top: 6px;"type="checkbox" id="${
                    n.id
                  }" name="${n.id}" value="${
                    n.id
                  }">\n          <div style="display: flex;align-items: flex-start;flex-direction:column;position: relative;bottom: 24px;left: 26px;width:80%">\n            <span style="font-size: 17px;cursor:pointer" id="appointo-addon-${
                    e.handle
                  }">${
                    e.title
                  }</span>\n            <span style="font-size: 14px;font-weight: bold">${t.replace(
                    '{{amount}}',
                    n.price
                  )}</span>\n            ${
                    0 === i.length ||
                    i.includes(
                      n.id.replace('gid://shopify/ProductVariant/', '')
                    )
                      ? `<input type="text" placeholder="Enter the quantity" style="height: 30px;font-size: 12px;margin-top: 7px;width: 50%" id="appointo-qty-${n.id.replace(
                          'gid://shopify/ProductVariant/',
                          ''
                        )}" value="1"></input>`
                      : ''
                  }\n          </div>\n        </div>\n        `
                })
                .join('')
            $('#appointo-custom-text').html(
              `<div>\n          <div id="appointo-add-ons" style="font-size: 24px;margin-top: 0px;color: #333232 !important;">${r}</div>\n          <div id="appointo-add-ons-checkbox">\n            ${o}\n          </div>\n        </div>`
            ),
              n.map((e) => {
                $('#appointo-addon-' + e.handle).click(function () {
                  a &&
                    window.open(
                      `${window.location.origin}/products/${e.handle}`,
                      '_blank'
                    )
                })
              }),
              $('#appointo-btn').click(function () {
                $('#appointo-add-ons-checkbox')
                  .find('input[type=checkbox]:checked')
                  .prop('checked', !1)
              })
          })
    }
    const se = (e, t) => {
        let n = document.querySelectorAll('[name*="properties"]')
        for (let e = 0; e < n.length; e++) {
          const a = n[e].name.replace('properties[', '').replace(']', ''),
            o = n[e].value
          t[a] = o
        }
        return t
      },
      le = []
    const de = ['#quantity', '[name="quantity"]']
    function ce() {
      let e = 1
      for (let t = 0; t < de.length; t++) {
        const n = document.querySelectorAll(de[t])
        if (n.length > 0 && !isNaN(n[0].value)) {
          e = parseInt(n[0].value, 10)
          break
        }
      }
      return e
    }
    const ue = () => {
      let e = document.querySelector('[name="selling_plan"]')
      return e ? e.value : null
    }
    function pe() {
      fetch('/cart.js', {
        method: 'GET',
        headers: { Accept: 'application/json' },
      })
        .then((e) => e.json())
        .then((e) => {
          !(function (e) {
            let t = document.querySelector('[data-cart-count-bubble]'),
              n = document.querySelector('[data-cart-count]')
            t &&
              n &&
              (t.classList.remove('hide'), (n.textContent = e.item_count))
          })(e)
        })
    }
    async function me(e = '', t = {}) {
      return (
        await fetch(e, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(t),
        })
      ).json()
    }
    let fe = window.Appointo.translations
    H(fe.locale)
    const he = 'https://tarang.ngrok.io'
    let ye = '',
      ge = z().format('YYYY-MM-DD'),
      ve = {},
      be = {},
      ke = [],
      _e = '',
      we = '',
      xe = [],
      Se = window.Shopify
        ? window.Shopify.shop
        : Object({
            BASE_URL: 'https://tarang.ngrok.io',
            DEPO_URL: 'https://mukul.ngrok.io',
          }).SHOPIFY_DOMAIN,
      Me = !1,
      Te = null,
      $e = !1,
      je = [],
      De = null,
      Ae = null,
      Ce = null,
      Ye = null,
      Le = null,
      Ee = null,
      Be = null,
      Oe = null,
      ze = null,
      He = !1,
      Pe = ''
    function Ie() {
      return (function () {
        const e = window.location.pathname,
          t = e.substring(e.lastIndexOf('/') + 1)
        let n = K[Se]
        return n && n.fulfilled()
          ? n.execute()
          : t &&
            !['all', '/', 'cart', 'search'].includes(t) &&
            e.includes('products/')
          ? fetch(`/products/${t}.json`, {
              method: 'GET',
              headers: { Accept: 'application/json' },
            })
          : Promise.resolve({ status: 404 })
      })()
        .then((e) => (404 !== e.status ? e.clone().json() : { status: 404 }))
        .then((e) => {
          if (404 !== e.status)
            return (
              (be = e),
              o.a
                .get(
                  `${he}/scripttag/product?shop=${Se}&product_uuid=${be.product.id}&force_check=true`
                )
                .then((e) => {
                  if (
                    (console.log(e),
                    (xe = e.data.appointments),
                    (Me = !!e.data.exists_in_depo),
                    ($e = e.data.custom_flow),
                    (De = e.data.color),
                    (Ae = e.data.goto_flow),
                    (Ce = e.data.logo),
                    (Ye = e.data.remove_am_pm),
                    (Le = e.data.custom_refresh),
                    (Ee = e.data.enable_li_properties),
                    (Be = e.data.remove_branding),
                    (Oe = e.data.cart_button_meta),
                    (ze = e.data.book_without_pay),
                    (He = e.data.lock_timezone),
                    (Pe = e.data.store_timezone),
                    le.includes(Se) &&
                      (function () {
                        for (let e = 0; e < M.length; e++) {
                          const t = document.querySelectorAll(M[e])
                          if (t.length > 0) {
                            t[0].style.display = 'block'
                            break
                          }
                        }
                      })(),
                    r(),
                    (fe = window.Appointo.translations),
                    H(fe.locale),
                    !xe.length)
                  )
                    return Promise.resolve()
                  console.log('i am here'),
                    F[Se] && F[Se](fe, be.product),
                    q(
                      'customer_uuid',
                      (function (e, t) {
                        for (
                          var n = '',
                            a =
                              'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
                            o = a.length,
                            i = 0;
                          i < t;
                          i++
                        )
                          n += a.charAt(Math.floor(Math.random() * o))
                        return `${e}_${n}`
                      })(Se, 6)
                    ),
                    q('currentProductId', be.product.id)
                  let t = null,
                    n = []
                  if (Oe && Oe.querySelector) {
                    const e = document.querySelectorAll(Oe.querySelector)
                    e.length > 0 && ((t = e[0]), (n = e))
                  } else
                    for (let e = 0; e < M.length; e++) {
                      const a = document.querySelectorAll(M[e])
                      if (a.length > 0) {
                        ;(t = a[0]), (n = a)
                        break
                      }
                    }
                  let a = Q.includes(be.product.id) || G.includes(Se)
                  if (document.getElementById('appointo-btn') && !a)
                    document.body.appendChild(qe(!1))
                  else if (t && !a) {
                    let e = t.classList.value.replace('ajax-submit', ''),
                      a = fe.scheduleTime,
                      o = '',
                      i = '.shopify-payment-button'
                    if (
                      (Oe && Oe.class && (e = Oe.class),
                      Oe && Oe.title && (a = Oe.title),
                      Oe && Oe.style && (o = Oe.style),
                      Oe && Oe.buybtn_selector && (i = Oe.buybtn_selector),
                      'cart_v2' === Ae)
                    ) {
                      $(
                        `<div id="appointo-btn" style="${o} margin-bottom: 10px" class="${e}">${a}</div>`
                      ).insertBefore(t)
                      let i = (function () {
                        for (
                          var e = document.body.getElementsByTagName('form'),
                            t = e.length,
                            n = 0;
                          n < t;
                          n++
                        )
                          if (null != e[n].getAttribute('action')) {
                            var a = e[n].getAttribute('action')
                            if ('/cart/add' === a || a.includes('/cart/add'))
                              return e[n]
                          }
                        return !1
                      })()
                      i
                        ? i.addEventListener(
                            'click',
                            function (e) {
                              let t = !1
                              if (
                                (Array.from(n).forEach((n) => {
                                  n.contains(e.target) && (t = !0)
                                }),
                                t)
                              ) {
                                let t = se(0, {}),
                                  n = !1
                                t.hasOwnProperty('_start_time') &&
                                  t.hasOwnProperty('_timezone') &&
                                  (n = !0),
                                  n
                                    ? $('#appointo-date-error').remove()
                                    : (document.getElementById(
                                        'appointo-date-error'
                                      ) ||
                                        $(
                                          '<div id="appointo-date-error" class="appointo-date-error">Please select a date before adding this item to cart</div>'
                                        ).insertAfter($('#appointo-btn')),
                                      e.stopImmediatePropagation(),
                                      e.preventDefault())
                              }
                            },
                            !0
                          )
                        : console.log('form not found')
                    } else
                      $(
                        `<div id="appointo-btn" style="${o}" class="${e}">${a}</div>`
                      ).insertAfter(t),
                        t.remove()
                    document.body.appendChild(qe(!1)),
                      setTimeout(() => {
                        let e = document.querySelectorAll(i)
                        e.length && e[0].remove()
                      }, 1e3)
                  } else
                    document.body.appendChild(qe(!0)),
                      (document.getElementById(
                        'appointo-tooltip'
                      ).style.visibility = 'visible'),
                      setTimeout(() => {
                        document.getElementById(
                          'appointo-tooltip'
                        ).style.visibility = 'hidden'
                      }, 3e3)
                  let i = document.getElementById('appointo-modal'),
                    s = document.getElementById('appointo-btn'),
                    l = document.getElementsByClassName('appointo-close')[0]
                  Be && oe(),
                    document
                      .getElementById('appointo-variant-select')
                      .addEventListener('change', async (e) => {
                        ;(document.getElementById(
                          'calendar-container'
                        ).style.display = 'flex'),
                          (ye = e.target.value),
                          $e && Qe(ye),
                          (ve = await Je(ye, ge)),
                          Ue(ve)
                      })
                  const d = xe.map((e) =>
                    e.duration_uuid.replace('gid://shopify/ProductVariant/', '')
                  )
                  console.log(d),
                    (ke = be.product.variants.filter((e) =>
                      d.includes('' + e.id)
                    ))
                  let c = document.getElementById('appointo-variant-select'),
                    u = ke.map(
                      (e) => `<option  value="${e.id}">${e.title}</option>`
                    )
                  ;(c.innerHTML = `\n        <option selected disabled>\n          ${fe.chooseVariant}\n        </option>\n        ${u}\n      `),
                    De && ae(De),
                    (s.onclick = async () => {
                      !(function (e) {
                        I('slots', []),
                          (e.style.display = 'block'),
                          (ye = ''),
                          (ve = {}),
                          (document.getElementById('calendar_slots').innerHTML =
                            ''),
                          (document.getElementById('date_selected').innerHTML =
                            z(ge, He, Pe).format('dddd, MMM DD') +
                            ' - Available Slots'),
                          Ve(),
                          We(),
                          (document.getElementById(
                            'calendar-container'
                          ).style.display = 'none')
                        let t = document.getElementById(
                          'appointo-variant-select'
                        )
                        ;(ye = Ze()),
                          ye || (ye = ke[0].id),
                          1 === ke.length &&
                            (document.getElementById(
                              'appointo-select-div'
                            ).style.display = 'none'),
                          (t.value = ye),
                          (document.getElementById(
                            'calendar-container'
                          ).style.display = 'flex'),
                          Je(ye, ge).then((e) => {
                            ;(ve = e), Ue(ve)
                          }),
                          (document.getElementById(
                            'appointo-variant-select'
                          ).value = ye),
                          $e && Qe(ye)
                      })(i)
                    }),
                    (Te = new VanillaCalendar({
                      selector: '#appointo-calendar',
                      pastDates: !1,
                      datesFilter: !0,
                      todaysDate: new Date(),
                      onMonthPrev: (e) => {
                        Ne(e)
                      },
                      onMonthNext: (e) => {
                        Ne(e)
                      },
                      onSelect: (e, t) => {
                        Ne(e)
                      },
                    })),
                    Te.init(),
                    (l.onclick = function () {
                      i.style.display = 'none'
                    }),
                    (window.onclick = function (e) {
                      e.target == i && (i.style.display = 'none')
                    })
                  let p = Ze()
                  p || (p = ke[0].id),
                    o.a
                      .get(`${he}/scripttag/online_status?duration_uuid=${p}`)
                      .then((e) => {
                        let t = e.data
                        if (t.show_online_status && t.online) {
                          let e = $('#appointo-btn')
                          $('#appointo-btn').html(
                            `<div class="appoint-dot-div">\n                <span class="appointo-dot appointo-blink"></span>\n                ${e.html()}\n              </div>\n              `
                          )
                        }
                      })
                })
            )
        })
    }
    async function Ne(e) {
      ge = e.date
      const t = z(e.date, He, Pe).format('YYYY-MM-DD')
      let n = null
      ve.data &&
        (n = ve.data.calendly_events.days.find((e) => e.date === t) || {
          spots: [],
        })
      ;(!!ve.data && ve.data.calendly_events.days.find((e) => e.date === t)) ||
        (ve = await Je(ye, ge)),
        Ue(ve)
    }
    function qe(e = !0) {
      const t = document.createElement('div')
      let n = Ce
          ? `<p></p><img src="${Ce}" class="appointo-branding-image" />`
          : '<p></p>',
        a = te.includes(Se)
          ? '' + be.product.title
          : `${be.product.title} - ${be.product.vendor}`
      const o = e
        ? `<button id="appointo-btn" class="appointo-check-avail appointo-tooltip">\n    <img src="https://appointment-booking-shopify.s3.ap-south-1.amazonaws.com/icon.png" class="appointo-icon"/>\n    <span class="appointo-tooltiptext" id="appointo-tooltip">${fe.selectTime}</span>\n  </button>`
        : ''
      return (
        (t.innerHTML = `\x3c!-- Trigger/Open The Modal --\x3e\n  ${o}\n  \x3c!-- The Modal --\x3e\n  <div id="appointo-modal" class="appointo-modal">\n    \x3c!-- Modal content --\x3e\n      <div id="appointo-modal-content" class="appointo-modal-content">\n    <div class="appointo-close-container">\n      ${n}\n      <span class="appointo-close close">&times;</span>\n    </div>\n    <div class="appointo-selected-bookings" id="appointo-selected-bookings">\n      <h2 class="appointo-date-header" style="margin-top: 0px">${
          fe.allSelectedBookings
        }</h2>\n      <ul class="appointo-selected-booking" id="appointo-selected-booking"></ul>\n    </div>\n    <p class="appointo-product-name" id="appointo-product-name">${a}</p>\n    <div class="appointo-select-div" id="appointo-select-div">\n      <select name="slct" id="appointo-variant-select" class="appointo-select">\n        <option selected disabled>${
          fe.chooseVariant
        }</option>\n      </select>\n    </div>\n    <div id="appointo-custom-text" style="display: none; margin-top: 20px"></div>\n    <h2 class="appointo-date-header">${
          fe.selectDate
        }</h2>\n    <div id="calendar-container" class="appointo-calendar-container">\n      <div id="appointo-calendar" class="vanilla-calendar"></div>\n      <div id="calendly_day_events" class="appointo-calendar-day-events">\n        <p id="date_selected" class="appointo-date-selected">\n          ${z(
          ge,
          He,
          Pe
        ).format('dddd, MMM DD')} - ${
          fe.availableSlots
        }\n        </p>\n        <div id="calendar_slots" class="appointo-calendar-slots">\n            <div id="appointo-slot"></div>\n        </div>\n      </div>\n      <div id="loader" class="appointo-loader-div">\n        <div class="appointo-loader">${
          fe.loading
        }...</div>\n      </div>\n    </div>\n    <p id="timezone-text"></p>\n    <div class="appointo-legend">\n      <p><div class="appointo-legend-avail"></div>${
          fe.availSlots || 'available slots'
        }</p>\n      <p><div class="appointo-legend-notavail"></div>${
          fe.noAvailSlots || 'no available slots'
        }</p>\n    </div>\n    <p class="appointo-disclaimer" id="appointo-disclaimer">* ${
          fe.selectSlot
        }</p>\n    <p id="appointo-branding" class="appointo-branding">${
          fe.poweredBy
        } <a class="appointo-company-name" href="https://www.sidepanda.com/" target="_blank"> SidePanda</a></p>\n  </div>\n  </div>`),
        t
      )
    }
    function Re() {
      ;(document.getElementById('appointo-modal-content').style.display =
        'block'),
        $('#appointo-custom-questions').remove()
    }
    function Ve() {
      let e = document.getElementById('calendly_day_events'),
        t = document.getElementById('loader')
      e && (e.style.display = 'flex'), t && (t.style.display = 'none')
    }
    function Ue(e) {
      const t = z(ge, He, Pe).format('YYYY-MM-DD')
      let n = { slots: [] }
      e.data &&
        (n = e.data.calendly_events.days.find((e) => e.date === t) || {
          spots: [],
        })
      const a = document.getElementById('date_selected')
      let i = ne.includes(Se)
        ? '' + z(ge, He, Pe).format('dddd, MMM DD')
        : `${z(ge, He, Pe).format('dddd, MMM DD')} - ${fe.availableSlots}`
      a.innerHTML = i
      ;(document.getElementById('calendar_slots').innerHTML = (function (e) {
        let t = X.includes(Se) || Ye ? 'HH:mm' : 'hh:mm A'
        return e.length
          ? e
              .map(
                (e, n) =>
                  `<div class="appointo-time-div" id="appointo-time-div-${n}">\n          <div style="width: 100%;" class="appointo-slot" id="appointo-slot-${n}">${z(
                    e.start_time,
                    He,
                    Pe
                  ).format(t)}</div>\n          ${B(e, fe)}\n          </div>`
              )
              .join('')
          : `<div class="appointo-no-slots">${fe.chooseDate}</div>`
      })(n.spots)),
        n.spots &&
          n.spots.map((e, t) =>
            $('#appointo-slot-' + t).click(function () {
              !(function (e, t) {
                let n = N('slots')
                n || (n = [])
                let a = n.find((e) => ye === e.variant_id),
                  i = !!Z.includes(Se) || Me || (Ae && 'checkout' === Ae),
                  r = Ae && 'cart_v2' === Ae
                $('#appointo-confirm').remove(), Ue(ve)
                let s = X.includes(Se) || Ye ? 'HH:mm' : 'hh:mm A'
                ;(document.getElementById(
                  'appointo-time-div-' + t
                ).innerHTML = `\n  <div class="appointo-slot-confim">\n    <div class="appointo-slot" id="appointo-slot-${t}">\n        ${z(
                  e.start_time,
                  He,
                  Pe
                ).format(
                  s
                )}\n      </div>\n      <div id="appointo-confirm" class="appointo-confirm">${
                  r
                    ? 'Confirm Time'
                    : i
                    ? fe.checkout
                    : a
                    ? fe.updateInCart
                    : fe.addToCart
                }</div>\n  </div>\n  ${B(e, fe)}\n    `),
                  $('#appointo-confirm').click(function () {
                    !(async function (e) {
                      let t = Y(),
                        n = await (async function (e, t) {
                          let n = 0
                          return (
                            (
                              await fetch('/cart.js', {
                                method: 'GET',
                                headers: { Accept: 'application/json' },
                              }).then((e) => e.json())
                            ).items.map((a) => {
                              '' + a.id == '' + e &&
                                a.properties &&
                                a.properties.hasOwnProperty('_start_time') &&
                                a.properties._start_time === t &&
                                (n += a.quantity)
                            }),
                            n
                          )
                        })(ye, e.start_time)
                      if (
                        'number' == typeof e.max_capacity &&
                        e.max_capacity > 0
                      ) {
                        let a = e.max_capacity - e.customers_count
                        if (t + n > a)
                          return (
                            document.documentElement.style.setProperty(
                              '--vanilla-toast-color',
                              '#F09B9E'
                            ),
                            void U.toast(fe.greaterQuantity, {
                              settings: { duration: 5e3 },
                            })
                          )
                      }
                      if ($e && je.length > 0)
                        (document.getElementById(
                          'appointo-modal-content'
                        ).style.display = 'none'),
                          (function (e) {
                            let n = X.includes(Se) ? 'HH:mm' : 'hh:mm A',
                              a = document.getElementById('appointo-modal')
                            $(
                              `<div id="appointo-custom-questions" class="appointo-modal-content">\n  <div>\n    <div id="appointo-back-to-calendar" class="appointo-back">&laquo; ${
                                fe.back
                              }</div>\n    <span id="appointo-custom-close" class="appointo-close close">&times;</span>\n  </div>\n  <p class="appointo-product-name">${
                                be.product.title
                              }</p>\n  <p class="appointo-selected-time">Selected Time - ${z(
                                e.start_time,
                                He,
                                Pe
                              ).format('MMM DD YYYY, ' + n)}</p>\n  ${je
                                .sort((e, t) => e.position - t.position)
                                .map(
                                  (e) =>
                                    `<div style="display: flex; flex-direction: column;">\n          <label>${
                                      e.label
                                    } ${
                                      e.required
                                        ? '<span style="color: red">*</span>'
                                        : ''
                                    }</label>\n          ${T(
                                      e
                                    )}\n        </div>`
                                )
                                .join(
                                  ''
                                )}\n<div id="appointo-error" class="appointo-error">Please enter the required fields (Fields marked with *)</div>\n<div id="appointo-error-email" class="appointo-error"></div>\n<div id="appointo-confirm" class="appointo-confirm"  style="margin-left: 0px">${
                                fe.confirm
                              }</div>\n</div>`
                            ).insertBefore('#appointo-modal-content'),
                              $('#appointo-custom-close').click(function () {
                                a.style.display = 'none'
                              }),
                              $('#appointo-back-to-calendar').click(
                                function () {
                                  Re()
                                }
                              ),
                              $('#appointo-confirm').click(function () {
                                let n = !0,
                                  a = !1,
                                  i = {},
                                  r = []
                                for (let e = 0; e < je.length; e++) {
                                  const t = je[e]
                                  let o = j(t)
                                  if (!o && t.required) {
                                    n = !1
                                    break
                                  }
                                  o &&
                                    ((i['_' + t.id] = o),
                                    r.push({
                                      custom_field_id: t.id,
                                      value: o,
                                      admin_created: !!t.admin_created,
                                      admin_label: t.admin_label,
                                    })),
                                    'email' === t.cf_type && (a = !O(o))
                                }
                                if (a)
                                  return (
                                    $('#appointo-error-email').html(
                                      "Please enter a valid email address, make sure you don't have any spaces or extra text in the email field"
                                    ),
                                    $('#appointo-error-email').show(),
                                    void setTimeout(() => {
                                      $('#appointo-error-email').hide()
                                    }, 5e3)
                                  )
                                if (n)
                                  if (ze)
                                    !(async function (e, n) {
                                      let a = {
                                          timezone: _e,
                                          timestring: e.start_time,
                                          custom_fields: n,
                                          quantity: t,
                                          shopify_domain: Se,
                                          duration_uuid: ye,
                                        },
                                        i = await o.a.post(
                                          'https://tarang.ngrok.io/scripttag/book_slot',
                                          a
                                        )
                                      i.data && (status = i.data.status)
                                    })(e, r),
                                      (function (e) {
                                        let t = Y(),
                                          n = document.getElementById(
                                            'appointo-modal-content'
                                          )
                                        ;(n.style.display = 'none'),
                                          $(
                                            '#appointo-custom-questions'
                                          ).remove(),
                                          $(
                                            `\n    <div id="booking-confirm" class="custom-final-div appointo-modal-content">\n      <p class="custom-final-header">Booking Confirmed</p>\n      <br />\n      <p class="custom-final-name"> Appointment Name - ${
                                              document.getElementById(
                                                'appointo-product-name'
                                              ).innerHTML
                                            }</p>\n      <p class="custom-final-time">Appointment Time - ${z(
                                              e.start_time,
                                              He,
                                              Pe
                                            ).format(
                                              'YYYY-MM-DD hh:mm a'
                                            )}</p>\n      <p>Quantity - ${t}</p>\n      <p>* Please contact the store owner for any questions or queries</p>\n      <div id="appointo-confirm-custom" class="appointo-confirm">${
                                              fe.close || 'Close'
                                            }</div>\n    </div>\n  `
                                          ).insertAfter(
                                            $('#appointo-modal-content')
                                          ),
                                          $('#appointo-confirm-custom').click(
                                            function () {
                                              ;(document.getElementById(
                                                'appointo-modal'
                                              ).style.display = 'none'),
                                                $('#booking-confirm').remove(),
                                                (n.style.display = 'block')
                                            }
                                          )
                                      })(e)
                                  else {
                                    ;(document.getElementById(
                                      'appointo-modal'
                                    ).style.display = 'none'),
                                      Ke(e, i),
                                      Re()
                                  }
                                else
                                  $('#appointo-error').show(),
                                    setTimeout(() => {
                                      $('#appointo-error').hide()
                                    }, 3e3)
                              })
                          })(e)
                      else {
                        await Ke(e),
                          (document.getElementById(
                            'appointo-modal'
                          ).style.display = 'none')
                      }
                    })(e)
                  }),
                  $('#appointo-slot-' + t).addClass('appointo-slot-selected')
              })(e, t)
            })
          )
    }
    async function Je(e, t) {
      let n = z(t, He, Pe).startOf('month').format('YYYY-MM-DD'),
        a = z(t, He, Pe).endOf('month').format('YYYY-MM-DD')
      if (
        ((function () {
          let e = document.getElementById('calendly_day_events'),
            t = document.getElementById('loader')
          e && (e.style.display = 'none'), t && (t.style.display = 'block')
        })(),
        (ve = await o.a.get(
          `${he}/scripttag/calendar_availability?start_date=${n}&end_date=${a}&shop=${Se}&duration_uuid=${e}&timezone=${
            Intl.DateTimeFormat().resolvedOptions().timeZone
          }`
        )),
        'popandpearl5pts.myshopify.com' === Se &&
          '' + e == '39361444806715' &&
          ve.data &&
          ve.data.calendly_events &&
          (ve = { data: E(ve.data) }),
        Ve(),
        ve.data &&
          ve.data.calendly_events &&
          ((_e = ve.data.calendly_events.availability_timezone),
          (we = ve.data.timezone_abbreviation),
          Te))
      ) {
        let e = ve.data.calendly_events.days
          .filter((e) => 'available' === e.status)
          .map((e) => ({ date: e.date }))
        Te.set({ availableDates: e })
      }
      return ve
    }
    function Fe(e, t, n) {
      let a = document.getElementById('appointo-' + e)
      a
        ? (a.value = n)
        : $(
            `<input type="hidden" id="appointo-${e}" name="properties[${t}]" value="${n}">`
          ).insertBefore($('#appointo-btn'))
    }
    async function Ke(e, t = {}) {
      if ('cart_v2' === Ae) {
        let n = X.includes(Se) ? 'HH:mm' : 'hh:mm A'
        return (
          Fe(
            'start_time',
            '_start_time',
            z(e.start_time, He, Pe).format('MMM DD YYYY, ' + n)
          ),
          Fe('timezone', '_timezone', _e),
          Fe(
            'date-time',
            fe.dateTime,
            g()(e.start_time).format('MMM DD YYYY, hh:mm A')
          ),
          Array.from(
            document.querySelectorAll('[id*="appointo-cf-properties"]')
          ).forEach((e) => e.remove()),
          Object.keys(t).map((e) => {
            Fe('cf-properties-' + e, e, t[e])
          }),
          $('#appointo-btn').html(
            g()(e.start_time).format('MMM DD YYYY, hh:mm A')
          ),
          void $('#appointo-date-error').remove()
        )
      }
      if (
        ((t = se(0, t)),
        await (async function (e, t, n, a, o, i, r, s, l) {
          let d = ue(),
            c = X.includes(a) ? 'HH:mm' : 'hh:mm A'
          H(n.locale)
          const u = z(t, s, l).format('MMM DD YYYY, ' + c)
          let p = {
            quantity: ce(),
            id: e,
            properties: {
              [n.dateTime]: '' + u,
              _start_time: t,
              _timezone: i,
              ...r,
            },
          }
          d && (p.selling_plan = d)
          let m = await me('/cart/add.js', { items: [p] })
          return pe(), m.items[0].key
        })(ye, e.start_time, fe, Se, 0, _e, t, He, Pe),
        We(),
        $('#appointo-confirm').remove(),
        Ue(ve),
        document.documentElement.style.setProperty(
          '--vanilla-toast-color',
          De || '#79b7a3'
        ),
        Me)
      ) {
        if (
          (U.toast(fe.redirectingToCheckout),
          await (async (e, t, n, a, i, r = {}) => {
            try {
              let s = R('selected_part_payment'),
                l = R('product_title'),
                d = R('full_price'),
                c = R('pp_title'),
                u = [
                  {
                    name: a.dateTime,
                    value: g()(n).format('MMM DD YYYY, hh:mm A'),
                  },
                  { name: '_start_time', value: n },
                  { name: '_timezone', value: i },
                ]
              Object.keys(r).map((e) => {
                u.push({ name: e, value: r[e] })
              })
              const p = await o.a.post(
                'https://mukul.ngrok.io/scripttag/checkout',
                {
                  variant_uuid: t,
                  shopify_domain: e,
                  part_payment: s,
                  title: l,
                  full_price: d,
                  line_item_properties: u,
                  pp_title: c,
                  quantity: 1,
                  currency:
                    window.Shopify && window.Shopify.currency
                      ? window.Shopify.currency.active
                      : 'USD',
                }
              )
              200 === p.status &&
                (window.location.href = p.data.draft_order.invoice_url)
            } catch (e) {
              return !1
            }
            return !0
          })(Se, ye, e.start_time, fe, _e, t))
        )
          return
      }
      Z.includes(Se) || (Ae && 'checkout' === Ae)
        ? (U.toast(fe.redirectingToCheckout), ie())
        : ee.includes(Se) || (Ae && 'refresh' === Ae)
        ? (U.toast(fe.confirmationText), window.location.reload())
        : ((W.includes(Se) || (Ae && 'cart' == Ae)) &&
            (window.location.href = '/cart'),
          U.toast(fe.confirmationText))
    }
    function Ze() {
      let e = ((t = {}),
      window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function (e, n, a) {
          t[n] = a
        }
      ),
      t).variant
      var t
      return e || ''
    }
    function We() {
      let e = N('slots')
      if (e && e.length > 0) {
        $('#appointo-selected-bookings').show()
        let t = e
          .map(
            (e, t) =>
              `<li>\n          <p style="display: inline-block;color: black">${
                e.product_name
              } - ${e.variant_name} - ${z(e.start_time, He, Pe).format(
                'MMM DD YYYY, h:mm a'
              )}</p>\n          <div class="appinto-remove-booking" id="appointo-remove-booking-${t}">${
                fe.removeBooking
              }</div>\n        </li>`
          )
          .join('')
        ;(document.getElementById('appointo-selected-booking').innerHTML = t),
          e.map((e, t) =>
            $('#appointo-remove-booking-' + t).click(function () {
              !(function (e) {
                let t = N('slots')
                t || (t = [])
                let n = t.filter(
                  (t) => Math.ceil(e.variant_id) !== Math.ceil(t.variant_id)
                )
                0 === n.length && $('#appointo-selected-bookings').hide()
                ;(async function (e) {
                  await me('/cart/update.js', { updates: { [e]: 0 } }), pe()
                })(e.key),
                  U.toast(fe.bookingRemoved),
                  I('slots', n),
                  We()
              })(e)
            })
          )
      } else $('#appointo-selected-bookings').hide()
    }
    function Qe(e) {
      o.a.get(`${he}/scripttag/custom_fields?variant_id=${e}`).then((e) => {
        je = e.data
      })
    }
    let Ge = window.Appointo.translations
    g.a.locale(Ge.locale)
    let Xe = [],
      et = g()().format('YYYY-MM-DD'),
      tt = [],
      nt = '',
      at = '',
      ot = '',
      it = window.Shopify
        ? window.Shopify.shop
        : Object({
            BASE_URL: 'https://tarang.ngrok.io',
            DEPO_URL: 'https://mukul.ngrok.io',
          }).SHOPIFY_DOMAIN,
      rt = null
    let st = [],
      lt = {},
      dt = null,
      ct = null,
      ut = null,
      pt = null,
      mt = null,
      ft = '',
      ht = 0,
      yt = !1
    function gt() {
      const e = document.createElement('div')
      let t = ct
        ? `<p></p><img src="${ct}" class="appointo-branding-image" />`
        : '<p></p>'
      return (
        (e.innerHTML = `\n  \x3c!-- The Modal --\x3e\n  <div id="appointo-modal" class="appointo-modal" style="display:block">\n  \n    \x3c!-- Modal content --\x3e\n    <div id="appointo-modal-content" class="appointo-modal-content" style="height: 70vh;">\n      <div id="appointo-product-content">\n        <div class="appointo-close-container" id="appointo-close">\n        ${t}  \n        <span class="appointo-close close">&times;</span>\n        </div>\n        \n        <p id="appointo-booking-confirmation" class="appointo-booking-confirmation">\n          ${
          Ge.bookingConfirmation
        }\n        </p>\n        <div id="appointo-booking-table" class="appointo-booking-table"> \n        </div>\n       <p id="appointo-branding" class="appointo-branding">\n          ${
          Ge.poweredBy
        } \n          <a class="appointo-company-name" href="https://www.sidepanda.com/appointo"> SidePanda</a>\n        </p>\n      </div>\n\n      <div id="appointo-booking-selection" style="display:none">\n        <div id="appointo-back-to-calendar" class="appointo-back">&laquo; ${
          Ge.back
        }</div> \n        <div class="appointo-image-container">\n          ${t}  \n        </div> \n        <p class="appointo-product-name" id="appointo-product-name" style="margin-top: 20px;"></p>\n        <h2 class="appointo-date-header">${
          Ge.selectDate
        }</h2>\n        <div id="calendar-container" class="appointo-calendar-container">\n          <div id="appointo-calendar" class="vanilla-calendar"></div>\n          <div id="calendly_day_events" class="appointo-calendar-day-events">\n            <p id="date_selected" class="appointo-date-selected">\n              ${g()(
          et
        ).format('dddd, MMM DD')} - ${
          Ge.availableSlots
        }\n            </p>\n            <div id="calendar_slots" class="appointo-calendar-slots">\n            </div>\n          </div>\n          <div id="loader-2" class="appointo-loader-div">\n            <div class="appointo-loader">${
          Ge.loading
        }...</div>\n          </div>\n        </div>\n        <p class="appointo-branding">${
          Ge.poweredBy
        }<a href="https://www.sidepanda.com" target="_blank" class="appointo-company-name"> SidePanda</a></p>\n      </div>\n\n      <div id="loader" class="appointo-loader-div" style="width: auto">\n        <div class="appointo-loader">${
          Ge.loading
        }...</div>\n      </div>\n    </div>\n  </div>`),
        e
      )
    }
    function vt(e, t, n) {
      ;(it = e.shopify_domain),
        (lt = e.shopify_product),
        (dt = e.color),
        (ct = e.logo),
        (pt = e.team_member_id),
        (yt = e.remove_branding),
        (mt = t),
        (ft = n),
        (ht = e.duration),
        document.body.appendChild(gt()),
        yt && oe(),
        'appt_flow' != mt &&
          $(
            `<div id="appointo-customer-info">\n        <p>Duration: ${
              e.duration
            } mins</p>\n        <p>Previous Selected Time: ${g()(
              e.selected_time
            ).format('YYYY-MM-DD hh:mm a')}</p>\n        <p>Customer Name: ${
              e.customer_name
            }</p>\n        <p>Customer Email: ${
              e.customer_email
            }</p>\n      </div>`
          ).insertAfter($('#appointo-product-name')),
        dt && ae(dt),
        Mt()
      let a = e.shopify_product.product.variants.find(
        (t) =>
          t.id.replace('gid://shopify/ProductVariant/', '') ===
          '' + e.variant_id
      )
      console.log(e.shopify_product.product, e.variant_id),
        (function (e) {
          switch (mt) {
            case 'appt_flow':
              o.a
                .get(
                  'https://tarang.ngrok.io/scripttag/custom_fields?variant_id=' +
                    e
                )
                .then((e) => {
                  st = e.data
                })
            case 'cancel_flow':
              st = [
                { label: 'Reason for cancel', cf_type: 'text', required: !1 },
              ]
            case 'reschedule_flow':
              st = [
                {
                  label: 'Reason for reschedule',
                  cf_type: 'text',
                  required: !1,
                },
              ]
          }
        })(e.variant_id),
        kt({
          id: e.order_track_id,
          product_name: e.shopify_product.product.title,
          duration_uuid: e.variant_id,
          variant_name: a ? a.displayName : '',
        }),
        St('appointo-product-content', 'loader'),
        $('#appointo-product-content').hide(),
        $('#appointo-back-to-calendar').hide(),
        (document.getElementById('appointo-modal-content').style.height =
          'auto'),
        (document.getElementById('appointo-product-name').innerHTML =
          '' + e.shopify_product.product.title),
        'cancel_flow' === mt &&
          (function (e) {
            $('#calendar-container').hide(),
              $('.appointo-date-header').html('Cancellation Reason'),
              $(
                '<div id="appointo-cancellation-div">\n    <textarea class="appointo-textarea"\n    type="text" id="appointo-reason"></textarea>\n    <div id="appointo-confirm-ty" class="appointo-confirm" style="margin-left: 0px; width: 200px;">Cancel Apppointment</div>\n  </div>'
              ).insertAfter($('.appointo-date-header')),
              $('#appointo-confirm-ty').click(async function () {
                let t = {
                  uuid: ft,
                  customer_id: e.customer_id,
                  reason: $('#appointo-reason').val(),
                }
                await o.a.post(
                  'https://tarang.ngrok.io/scripttag/cancel_booking',
                  t
                ),
                  $('#appointo-booking-selection').html(
                    '<div class="app-error one-column" style="width: 80%">\n        <div class="icon-lightning-check" style="font-size: 30px">SUCCESS....</div>\n        <h1 class="custom-header">The appointment has been cancelled.</h1>\n        <h2 class="custom-subheader">Please contact the owner of this event to schedule another meeting.</h2>\n      </div>'
                  )
              })
          })(e),
        e.max_capacity > 1 &&
          window.location.href.includes('fromAdmin') &&
          $(
            '<div>\n        <label for="name">Quantity</label>\n        <input type="number" name="quantity" id="appointo-quantity" value="1">\n      </div>'
          ).insertAfter($('#appointo-product-name')),
        pt &&
          window.location.href.includes('fromAdmin') &&
          $(
            `<div>\n        <label for="name">Team member name: ${e.team_member_name}</label>\n      </div>`
          ).insertAfter($('#appointo-product-name'))
    }
    function bt(e) {
      ;(document.getElementById('appointo-booking-table').innerHTML = e
        .map(
          (e, t) =>
            `<div class="appointo-booking-row">\n        <div class="appointo-name-row">\n          <div class="appointo--booking-product-name">${
              e.product_name
            }</div>\n          <div class="appointo-variant-name">${
              e.variant_name
            }</div>\n        </div>\n        ${(function (e, t) {
              switch (e.status) {
                case 'complete':
                  return `<div class="appointo-confirmed-div">\n        <p class="appointo-booking-confirmed">${
                    Ge.bookingConfirmed
                  }</p>\n        <p class="appointo-booking-time">${g()(
                    e.timestring
                  ).format('MMM Do YY, h:mm a')}</p>\n      </div>`
                case 'incomplete':
                  return `\n        <div class="appointo-book-now" id="appointo-order-${t}">${Ge.bookNow}</div>\n      `
                case 'calendly error':
                  return `\n        <div class="appointo-booking-error">\n          <div class="appointo-book-now" id="appointo-calendly-${t}">${Ge.bookViaCalendly}</div>\n          <div class="appointo-error-text">${Ge.calendlyBookingError}</div>\n        </div>\n      `
              }
              return ''
            })(e, t)}\n      </div>`
        )
        .join('')),
        (function (e) {
          e.map((e, t) => {
            'incomplete' === e.status &&
              $('#appointo-order-' + t).click(function () {
                Mt(), kt(e)
              }),
              'calendly error' === e.status &&
                $('#appointo-calendly-' + t).click(function () {
                  window.open(e.booking_link, '_blank')
                })
          })
        })(e)
    }
    async function kt(e) {
      ;(ot = e.id),
        (rt = new VanillaCalendar({
          selector: '#appointo-calendar',
          pastDates: !1,
          datesFilter: !0,
          todaysDate: new Date(),
          onMonthPrev: (e) => {
            _t(e)
          },
          onMonthNext: (e) => {
            _t(e)
          },
          onSelect: (e, t) => {
            _t(e)
          },
        })),
        rt.init(),
        (document.getElementById(
          'appointo-product-name'
        ).innerHTML = `${e.product_name} - ${e.variant_name}`)
      const t = g()().format('M')
      ;(at = e.duration_uuid),
        (tt = await wt(e.duration_uuid, t)),
        $t(tt),
        $('#appointo-back-to-calendar').click(function () {
          Tt()
        })
    }
    async function _t(e) {
      et = e.date
      const t = g()(e.date).format('YYYY-MM-DD')
      let n = null
      tt.data &&
        (n = tt.data.calendly_events.days.find((e) => e.date === t) || {
          spots: [],
        })
      if (
        !(!!tt.data && tt.data.calendly_events.days.find((e) => e.date === t))
      ) {
        const t = g()(e.date).format('M')
        tt = await wt(at, t)
      }
      $t(tt)
    }
    async function wt(e, t) {
      xt('calendly_day_events', 'loader-2')
      let n = ''
      if (
        (pt && (n = '&impersonated_tm=' + pt),
        (tt = await o.a.get(
          `https://tarang.ngrok.io/scripttag/calendar_availability?start_date=${
            S[t].startDate
          }&end_date=${S[t].endDate}&shop=${it}&duration_uuid=${e}&timezone=${
            Intl.DateTimeFormat().resolvedOptions().timeZone
          }${n}`
        )),
        St('calendly_day_events', 'loader-2'),
        tt.data &&
          tt.data.calendly_events &&
          ((nt = tt.data.calendly_events.availability_timezone), rt))
      ) {
        let e = tt.data.calendly_events.days
          .filter((e) => 'available' === e.status)
          .map((e) => ({ date: e.date }))
        rt.set({ availableDates: e })
      }
      return tt
    }
    function xt(e, t) {
      let n = document.getElementById(e)
      n && (n.style.display = 'none')
      let a = document.getElementById('calendly_day_events')
      a && (a.style.display = 'none')
      let o = document.getElementById(t)
      o && (o.style.display = 'block')
    }
    function St(e, t) {
      let n = document.getElementById(e)
      n && (n.style.display = 'block')
      let a = document.getElementById(t)
      a && (a.style.display = 'none')
    }
    function Mt() {
      $('#appointo-product-content').hide(),
        $('#appointo-booking-selection').show()
    }
    function Tt() {
      $('#appointo-product-content').show(),
        $('#appointo-booking-selection').hide()
    }
    function $t(e) {
      const t = g()(et).format('YYYY-MM-DD')
      let n = { slots: [] }
      e.data &&
        (n = e.data.calendly_events.days.find((e) => e.date === t) || {
          spots: [],
        })
      document.getElementById('date_selected').innerHTML = `${g()(et).format(
        'dddd, MMM DD'
      )} - ${Ge.availableSlots}`
      var a
      ;(document.getElementById('calendar_slots').innerHTML = (a = n.spots)
        .length
        ? a
            .map(
              (e, t) =>
                `<div class="appointo-time-div" id="appointo-time-div-${t}">\n          <div  style="width: 100%;" class="appointo-slot" id="appointo-slot-${t}">${g()(
                  e.start_time
                ).format('hh:mm A')}\n          </div>\n          ${B(
                  e,
                  Ge
                )}\n          </div>`
            )
            .join('')
        : `<div class="appointo-no-slots">${Ge.chooseDate}</div>`),
        n.spots &&
          n.spots.map((e, t) =>
            $('#appointo-slot-' + t).click(function () {
              !(function (e, t) {
                $('#appointo-confirm').remove(),
                  $t(tt),
                  (document.getElementById(
                    'appointo-time-div-' + t
                  ).innerHTML = `\n  <div class="appointo-slot-confim">\n    <div class="appointo-slot" id="appointo-slot-${t}">\n      ${g()(
                    e.start_time
                  ).format(
                    'hh:mm A'
                  )}\n    </div>\n    <div id="appointo-confirm" class="appointo-confirm">${
                    Ge.confirm
                  }</div>\n  </div>\n  ${B(e, Ge)}\n  `),
                  $('#appointo-confirm').click(function () {
                    !(async function (e) {
                      let t = Ct()
                      if (
                        'number' == typeof e.max_capacity &&
                        e.max_capacity > 0
                      ) {
                        let n = e.max_capacity - e.customers_count
                        if (t > n)
                          return (
                            document.documentElement.style.setProperty(
                              '--vanilla-toast-color',
                              '#e85d5d'
                            ),
                            void U.toast(Ge.greaterQuantity, {
                              settings: { duration: 5e3 },
                            })
                          )
                      }
                      if (st.length > 0)
                        !(async function (e) {
                          let t = X.includes(it) || ut ? 'HH:mm' : 'hh:mm A'
                          $(
                            `<div id="appointo-custom-questions" class="appointo-modal-content">\n  <div>\n    <div id="appointo-back-to-calendar" class="appointo-back">&laquo; ${
                              Ge.back
                            }</div>\n  </div>\n  <p class="appointo-product-name">${
                              lt.product.title
                            }</p>\n  <p class="appointo-selected-time">Selected Time - ${g()(
                              e.start_time
                            ).format('MMM DD YYYY, ' + t)}</p>\n  ${st
                              .map(
                                (e) =>
                                  `<div style="display: flex;flex-direction: column;">\n      <label>${
                                    e.label
                                  } ${
                                    e.required
                                      ? '<span style="color: red">*</span>'
                                      : ''
                                  }</label>\n      ${T(e)}\n    </div>`
                              )
                              .join(
                                ''
                              )}\n  <div id="appointo-error" class="appointo-error">Please enter the required fields (Fields marked with *)</div>\n  <div id="appointo-confirm-ty" class="appointo-confirm" style="margin-left: 0px">${
                              Ge.confirm
                            }</div>\n  </div>`
                          ).insertBefore('#appointo-modal-content'),
                            $('#appointo-back-to-calendar').click(function () {
                              jt()
                            }),
                            $('#appointo-confirm-ty').click(async function () {
                              let t = !0,
                                n = []
                              for (let e = 0; e < st.length; e++) {
                                const a = st[e]
                                let o = j(a)
                                if (!o && a.required) {
                                  t = !1
                                  break
                                }
                                o && n.push({ custom_field_id: a.id, value: o })
                              }
                              t
                                ? ('appt_flow' === mt
                                    ? At(e, n)
                                    : await (async function (e, t) {
                                        let n = {
                                          uuid: ft,
                                          timestring: e.start_time,
                                          reason:
                                            t.length > 0 ? t[0].value : '',
                                        }
                                        xt('calendly_day_events', 'loader-2')
                                        await o.a.post(
                                          'https://tarang.ngrok.io/scripttag/reschedule_booking',
                                          n
                                        )
                                      })(e, n),
                                  jt(),
                                  Dt(e))
                                : ($('#appointo-error').show(),
                                  setTimeout(() => {
                                    $('#appointo-error').hide()
                                  }, 3e3))
                            })
                        })(e),
                          (document.getElementById(
                            'appointo-modal-content'
                          ).style.display = 'none')
                      else {
                        await At(e),
                          window.location.pathname.includes(
                            '/appointment_booking'
                          )
                            ? Dt(e)
                            : ((ot = ''), bt(Xe), Tt())
                      }
                    })(e)
                  }),
                  $('#appointo-slot-' + t).addClass('appointo-slot-selected')
              })(e, t)
            })
          )
    }
    function jt() {
      ;(document.getElementById('appointo-modal-content').style.display =
        'block'),
        $('#appointo-custom-questions').remove()
    }
    function Dt(e) {
      let t = Ct(),
        n = ct
          ? `<p></p><img src="${ct}" class="appointo-branding-image" />`
          : '<p></p>'
      ;(document.getElementById(
        'appointo-modal-content'
      ).innerHTML = `\n    <div class="custom-final-div">\n      <div class="appointo-image-container">\n        ${n}  \n      </div> \n      <p class="custom-final-header">Booking Confirmed</p>\n      <br />\n      <p class="custom-final-name"> Appointment Name - ${
        document.getElementById('appointo-product-name').innerHTML
      }</p>\n      <p class="custom-final-time">Appointment Time - ${g()(
        e.start_time
      ).format(
        'YYYY-MM-DD hh:mm a'
      )}</p>\n      <p>Duration - ${ht} mins</p>\n      <p>Quantity - ${t}</p>\n      <p>* Please contact the store owner for any questions or queries</p>\n      <p id="appointo-branding" class="appointo-branding">\n          ${
        Ge.poweredBy
      } \n          <a href="https://www.sidepanda.com" target="_blank" class="appointo-company-name"> SidePanda</a>\n        </p>\n    </div>\n  `),
        yt && oe()
    }
    async function At(e, t = []) {
      let n = Ct(),
        a = {
          order_track_id: ot,
          timezone: nt,
          timestring: e.start_time,
          custom_fields: t,
          quantity: n,
        }
      xt('calendly_day_events', 'loader-2')
      let i = '',
        r = '',
        s = await o.a.post('https://tarang.ngrok.io/scripttag/book_slot', a)
      s.data && ((i = s.data.status), (r = s.data.booking_link)),
        'complete' === i
          ? (St('calendly_day_events', 'loader-2'),
            (Xe = Xe.map((t) =>
              t.id === ot
                ? { ...t, status: 'complete', timestring: e.start_time }
                : t
            )),
            U.toast(Ge.bookingConfirmed))
          : (Xe = Xe.map((e) =>
              e.id === ot
                ? { ...e, status: 'calendly error', booking_link: r }
                : e
            ))
    }
    const Ct = () =>
        parseInt(
          (document.getElementById('appointo-quantity') &&
            document.getElementById('appointo-quantity').value) ||
            1
        ),
      Yt = {
        'super-fit-classes.myshopify.com': () => {
          let e = document.getElementsByClassName('product-form__cart-submit')
          e &&
            ($(
              '<div \n            id="appointo-demo-btn" \n            style="display: inline-block;\n                  background: #d49550;\n                  color: #fff;\n                  border: 1px solid #aa7330;\n                  height: auto;\n                  width: auto;\n                  padding: 10px 1.4em 9px;\n                  font-family: inherit;\n                  font-size: 0.95em;\n                  vertical-align: middle;\n                  line-height: 1.2em;\n                  text-shadow: 0 1px rgba(60,60,60,0.5);\n                  cursor:pointer;\n                  margin-left: 20px;\n                  margin-top: 1px;"\n            >\n              Book a video consultation\n            </div>'
            ).insertAfter(e),
            $('head').append(
              '<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>'
            ),
            $('head').append(
              '<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">'
            ),
            $('#appointo-demo-btn').click(function () {
              return (
                Calendly.initPopupWidget({
                  url: 'https://calendly.com/post-86/wedding-ceremony',
                }),
                !1
              )
            }))
        },
        'us-thenorthamericanguitar.myshopify.com': (e) => {
          let t = document.getElementsByClassName('product-add')
          t &&
            ($(
              `<div\n            id="appointo-demo-btn"\n            style="display: inline-block;\n                  background: #d49550;\n                  color: #fff;\n                  border: 1px solid #aa7330;\n                  height: auto;\n                  width: auto;\n                  padding: 10px 1.4em 9px;\n                  font-family: inherit;\n                  font-size: 0.95em;\n                  vertical-align: middle;\n                  line-height: 1.2em;\n                  text-shadow: 0 1px rgba(60,60,60,0.5);\n                  cursor:pointer;\n                  margin-left: 20px;\n                  margin-top: 1px;"\n            >\n              ${e.header}\n            </div>`
            ).insertAfter(t),
            $('head').append(
              '<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript"></script>'
            ),
            $('head').append(
              '<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">'
            ),
            $('#appointo-demo-btn').click(function () {
              return Calendly.initPopupWidget({ url: e.invite_link }), !1
            }))
        },
        'healthy-leaf-organics.myshopify.com': (e) => {
          if (
            '/pages/register-affiliate-account' === window.location.pathname
          ) {
            const t = document.createElement('div')
            t.innerHTML = `<div\n      onclick="window.open('${
              e.invite_link
            }')"\n      style="background-color: ${
              e.color || '#f08a5d'
            };\n          cursor: pointer;\n          position: fixed;\n          right: 20px;\n          z-index: 10000;\n          bottom: 20px;\n          padding: 10px 20px;\n          color: #fff;\n          border-radius: 4px;\n          margin: 10px 0;\n          align-self: center;\n          align-items: center;\n          justify-content: center;\n          display: flex;\n          font-size: 16px;"\n      >\n          ${
              e.header
            }\n      </div>`
            const n = document.createElement('div')
            n.setAttribute('id', 'calendly-buttons-id'),
              document.body.appendChild(n),
              document.body.appendChild(t)
          }
        },
      }
    n(57), n(58), n(59), n(60), n(61), n(62), n(63), n(64), n(65), n(66), n(67)
    var Lt = n(68)
    let Et = window.Shopify
        ? window.Shopify.shop
        : Object({
            BASE_URL: 'https://tarang.ngrok.io',
            DEPO_URL: 'https://mukul.ngrok.io',
          }).SHOPIFY_DOMAIN,
      Bt = [
        'the-wedding-people-binational-weddings.myshopify.com',
        '30-minutes-coaching.myshopify.com',
        'corona-testzentrum-monheim.myshopify.com',
        'addicted-to-the-doll-house.myshopify.com',
        'mobila-biltvatt.myshopify.com',
        'aqashashop.myshopify.com',
        'emilee-studio.myshopify.com',
        'egajuiceclinics.myshopify.com',
        'pet-food-direct-canada.myshopify.com',
        'skibus-sydney.myshopify.com',
        'thefirstrefresh.myshopify.com',
        'optipharm-pharmacy.myshopify.com',
        'belyzium-31.myshopify.com',
        'smikart.myshopify.com',
      ]
    function Ot(e) {
      const t = document.createElement('div')
      ;(t.innerHTML = e), document.body.appendChild(t)
    }
    function zt(e) {
      Ot(
        '\n    <div id="loader-appointo" class="appointo-loader-div">\n      <div class="appointo-loader">...</div>\n    </div>\n  '
      )
      let t = (function (e, t = window.location.href) {
          e = e.replace(/[\[\]]/g, '\\$&')
          var n = new RegExp('[?&]' + e + '(=([^&#]*)|&|#|$)').exec(t)
          return n
            ? n[2]
              ? decodeURIComponent(n[2].replace(/\+/g, ' '))
              : ''
            : null
        })('uuid'),
        n = (function (e) {
          switch (e) {
            case 'appt_flow':
              return 'single_use_link'
            case 'cancel_flow':
              return 'cancel_link'
            case 'reschedule_flow':
              return 'reschedule_link'
          }
        })(e)
      t
        ? o.a
            .get(`https://tarang.ngrok.io/scripttag/${n}?uuid=${t}`)
            .then((n) => {
              'invalid_link' === n.data.status
                ? Ot(
                    '\n            <div class="app-error one-column">\n              <div class="icon-lightning-bolt">OOPS....</div>\n              <h1 class="custom-header">The page you are looking for could not be found</h1>\n              <h2 class="custom-subheader">Please make sure that you\'ve typed in the URL correctly</h2>\n            </div>\n          '
                  )
                : 'link_expired' === n.data.status
                ? Ot(
                    '\n            <div class="app-error one-column">\n              <div class="icon-lightning-bolt">OOPS....</div>\n              <h1 class="custom-header">Sorry, a meeting has already been scheduled using this link.</h1>\n              <h2 class="custom-subheader">Please contact the owner of this event to schedule another meeting.</h2>\n            </div>\n          '
                  )
                : vt(n.data, e, t),
                (document.getElementById('loader-appointo').style.display =
                  'none')
            })
        : window.alert('The link is invalid')
    }
    function Ht() {
      A.includes(Et) &&
        o.a
          .get(
            `https://tarang.ngrok.io/scripttag/script_data?shop=${Et}&version=${Lt.version}`
          )
          .then((e) => {
            if (e.data.id && e.data.activate) {
              if (Yt[Et]) return Yt[Et](e.data)
              const t = document.createElement('div')
              t.setAttribute('id', 'calendly-buttons-id'),
                document.body.appendChild(t),
                document.body.appendChild(
                  (function (e) {
                    const t = document.createElement('div')
                    return (
                      (t.innerHTML = `<div\n    onclick="window.open('${
                        e.invite_link
                      }')"\n    style="background-color: ${
                        e.color || '#f08a5d'
                      };\n        cursor: pointer;\n        position: fixed;\n        right: 20px;\n        z-index: 10000;\n        bottom: 20px;\n        padding: 10px 20px;\n        color: #fff;\n        border-radius: 4px;\n        margin: 10px 0;\n        align-self: center;\n        align-items: center;\n        justify-content: center;\n        display: flex;\n        font-size: 16px;"\n    >\n        ${
                        e.header
                      }\n    </div>`),
                      t
                    )
                  })(e.data)
                )
            }
          }),
        Bt.includes(Et)
          ? document.addEventListener('DOMContentLoaded', function (e) {
              le.includes(Et) &&
                (function () {
                  for (let e = 0; e < M.length; e++) {
                    const t = document.querySelectorAll(M[e])
                    if (t.length > 0) {
                      t[0].style.display = 'none'
                      break
                    }
                  }
                })(),
                x(),
                Ie()
            })
          : (console.log('hit here not injected', Et), x(), Ie())
    }
    if (
      ((function () {
        let e = window.location.pathname.includes('/appointment_booking'),
          t = window.location.pathname.includes('/cancel_booking'),
          n = window.location.pathname.includes('/reschedule_booking')
        if (e || t || n) {
          x(),
            zt(
              (function (e, t, n) {
                if (e) return 'appt_flow'
                if (t) return 'cancel_flow'
                if (n) return 'reschedule_flow'
              })(e, t, n)
            )
        } else Ht()
      })(),
      'addicted-to-the-doll-house.myshopify.com' === Et &&
        document.addEventListener('DOMContentLoaded', function (e) {
          $(window).bind('hashchange', function (e) {
            console.log('event is eveent', e), Ie()
          })
        }),
      window.Shopify &&
        window.location.pathname.includes('/cart') &&
        'shades-of-joy-studio.myshopify.com' === Et)
    ) {
      let e = document.querySelectorAll('[name="checkout"]')
      e.length &&
        $(
          '<div id="appointo-btn" class="btn" style="margin-left: 10px; margin-right: 10px">Book Time</div>'
        ).insertBefore(e[0])
    }
  },
])
