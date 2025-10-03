var ondewo_sip_api;
/******/ (() => {
	// webpackBootstrap
	/******/ var __webpack_modules__ = {
		/***/ './node_modules/google-protobuf/google-protobuf.js':
			/*!*********************************************************!*\
  !*** ./node_modules/google-protobuf/google-protobuf.js ***!
  \*********************************************************/
			/***/ function (__unused_webpack_module, exports, __webpack_require__) {
				/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
				var aa =
						'function' == typeof Object.defineProperties
							? Object.defineProperty
							: function (a, b, c) {
									a != Array.prototype && a != Object.prototype && (a[b] = c.value);
								},
					e =
						'undefined' != typeof window && window === this
							? this
							: 'undefined' != typeof __webpack_require__.g && null != __webpack_require__.g
								? __webpack_require__.g
								: this;
				function ba(a, b) {
					if (b) {
						var c = e;
						a = a.split('.');
						for (var d = 0; d < a.length - 1; d++) {
							var f = a[d];
							f in c || (c[f] = {});
							c = c[f];
						}
						a = a[a.length - 1];
						d = c[a];
						b = b(d);
						b != d && null != b && aa(c, a, { configurable: !0, writable: !0, value: b });
					}
				}
				function ca(a) {
					var b = 0;
					return function () {
						return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
					};
				}
				function da() {
					da = function () {};
					e.Symbol || (e.Symbol = ea);
				}
				function fa(a, b) {
					this.a = a;
					aa(this, 'description', { configurable: !0, writable: !0, value: b });
				}
				fa.prototype.toString = function () {
					return this.a;
				};
				var ea = (function () {
					function a(c) {
						if (this instanceof a) throw new TypeError('Symbol is not a constructor');
						return new fa('jscomp_symbol_' + (c || '') + '_' + b++, c);
					}
					var b = 0;
					return a;
				})();
				function ha() {
					da();
					var a = e.Symbol.iterator;
					a || (a = e.Symbol.iterator = e.Symbol('Symbol.iterator'));
					'function' != typeof Array.prototype[a] &&
						aa(Array.prototype, a, {
							configurable: !0,
							writable: !0,
							value: function () {
								return ia(ca(this));
							}
						});
					ha = function () {};
				}
				function ia(a) {
					ha();
					a = { next: a };
					a[e.Symbol.iterator] = function () {
						return this;
					};
					return a;
				}
				function ja(a, b) {
					ha();
					a instanceof String && (a += '');
					var c = 0,
						d = {
							next: function () {
								if (c < a.length) {
									var f = c++;
									return { value: b(f, a[f]), done: !1 };
								}
								d.next = function () {
									return { done: !0, value: void 0 };
								};
								return d.next();
							}
						};
					d[Symbol.iterator] = function () {
						return d;
					};
					return d;
				}
				ba('Array.prototype.entries', function (a) {
					return a
						? a
						: function () {
								return ja(this, function (b, c) {
									return [b, c];
								});
							};
				});
				var ka = this || self;
				function g(a, b, c) {
					a = a.split('.');
					c = c || ka;
					a[0] in c || 'undefined' == typeof c.execScript || c.execScript('var ' + a[0]);
					for (var d; a.length && (d = a.shift()); )
						a.length || void 0 === b
							? c[d] && c[d] !== Object.prototype[d]
								? (c = c[d])
								: (c = c[d] = {})
							: (c[d] = b);
				}
				function k(a) {
					var b = typeof a;
					if ('object' == b)
						if (a) {
							if (a instanceof Array) return 'array';
							if (a instanceof Object) return b;
							var c = Object.prototype.toString.call(a);
							if ('[object Window]' == c) return 'object';
							if (
								'[object Array]' == c ||
								('number' == typeof a.length &&
									'undefined' != typeof a.splice &&
									'undefined' != typeof a.propertyIsEnumerable &&
									!a.propertyIsEnumerable('splice'))
							)
								return 'array';
							if (
								'[object Function]' == c ||
								('undefined' != typeof a.call &&
									'undefined' != typeof a.propertyIsEnumerable &&
									!a.propertyIsEnumerable('call'))
							)
								return 'function';
						} else return 'null';
					else if ('function' == b && 'undefined' == typeof a.call) return 'object';
					return b;
				}
				function la(a) {
					var b = typeof a;
					return ('object' == b && null != a) || 'function' == b;
				}
				function ma(a, b, c) {
					g(a, b, c);
				}
				function na(a, b) {
					function c() {}
					c.prototype = b.prototype;
					a.prototype = new c();
					a.prototype.constructor = a;
				}
				var oa = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
					' '
				);
				function pa(a, b) {
					for (var c, d, f = 1; f < arguments.length; f++) {
						d = arguments[f];
						for (c in d) a[c] = d[c];
						for (var h = 0; h < oa.length; h++)
							((c = oa[h]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]));
					}
				}
				var qa = Array.prototype.forEach
						? function (a, b) {
								Array.prototype.forEach.call(a, b, void 0);
							}
						: function (a, b) {
								for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, f = 0; f < c; f++)
									f in d && b.call(void 0, d[f], f, a);
							},
					l = Array.prototype.map
						? function (a, b) {
								return Array.prototype.map.call(a, b, void 0);
							}
						: function (a, b) {
								for (var c = a.length, d = Array(c), f = 'string' === typeof a ? a.split('') : a, h = 0; h < c; h++)
									h in f && (d[h] = b.call(void 0, f[h], h, a));
								return d;
							};
				function ra(a, b, c) {
					return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
				}
				function sa(a, b, c, d) {
					var f = 'Assertion failed';
					if (c) {
						f += ': ' + c;
						var h = d;
					} else a && ((f += ': ' + a), (h = b));
					throw Error(f, h || []);
				}
				function n(a, b, c) {
					for (var d = [], f = 2; f < arguments.length; ++f) d[f - 2] = arguments[f];
					a || sa('', null, b, d);
					return a;
				}
				function ta(a, b, c) {
					for (var d = [], f = 2; f < arguments.length; ++f) d[f - 2] = arguments[f];
					'string' !== typeof a && sa('Expected string but got %s: %s.', [k(a), a], b, d);
				}
				function ua(a, b, c) {
					for (var d = [], f = 2; f < arguments.length; ++f) d[f - 2] = arguments[f];
					Array.isArray(a) || sa('Expected array but got %s: %s.', [k(a), a], b, d);
				}
				function p(a, b) {
					for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
					throw Error('Failure' + (a ? ': ' + a : ''), c);
				}
				function q(a, b, c, d) {
					for (var f = [], h = 3; h < arguments.length; ++h) f[h - 3] = arguments[h];
					a instanceof b || sa('Expected instanceof %s but got %s.', [va(b), va(a)], c, f);
				}
				function va(a) {
					return a instanceof Function
						? a.displayName || a.name || 'unknown type name'
						: a instanceof Object
							? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a)
							: null === a
								? 'null'
								: typeof a;
				}
				function r(a, b) {
					this.c = a;
					this.b = b;
					this.a = {};
					this.arrClean = !0;
					if (0 < this.c.length) {
						for (a = 0; a < this.c.length; a++) {
							b = this.c[a];
							var c = b[0];
							this.a[c.toString()] = new wa(c, b[1]);
						}
						this.arrClean = !0;
					}
				}
				g('jspb.Map', r, void 0);
				r.prototype.g = function () {
					if (this.arrClean) {
						if (this.b) {
							var a = this.a,
								b;
							for (b in a)
								if (Object.prototype.hasOwnProperty.call(a, b)) {
									var c = a[b].a;
									c && c.g();
								}
						}
					} else {
						this.c.length = 0;
						a = u(this);
						a.sort();
						for (b = 0; b < a.length; b++) {
							var d = this.a[a[b]];
							(c = d.a) && c.g();
							this.c.push([d.key, d.value]);
						}
						this.arrClean = !0;
					}
					return this.c;
				};
				r.prototype.toArray = r.prototype.g;
				r.prototype.Mc = function (a, b) {
					for (var c = this.g(), d = [], f = 0; f < c.length; f++) {
						var h = this.a[c[f][0].toString()];
						v(this, h);
						var m = h.a;
						m ? (n(b), d.push([h.key, b(a, m)])) : d.push([h.key, h.value]);
					}
					return d;
				};
				r.prototype.toObject = r.prototype.Mc;
				r.fromObject = function (a, b, c) {
					b = new r([], b);
					for (var d = 0; d < a.length; d++) {
						var f = a[d][0],
							h = c(a[d][1]);
						b.set(f, h);
					}
					return b;
				};
				function w(a) {
					this.a = 0;
					this.b = a;
				}
				w.prototype.next = function () {
					return this.a < this.b.length ? { done: !1, value: this.b[this.a++] } : { done: !0, value: void 0 };
				};
				'undefined' != typeof Symbol &&
					(w.prototype[Symbol.iterator] = function () {
						return this;
					});
				r.prototype.Jb = function () {
					return u(this).length;
				};
				r.prototype.getLength = r.prototype.Jb;
				r.prototype.clear = function () {
					this.a = {};
					this.arrClean = !1;
				};
				r.prototype.clear = r.prototype.clear;
				r.prototype.Cb = function (a) {
					a = a.toString();
					var b = this.a.hasOwnProperty(a);
					delete this.a[a];
					this.arrClean = !1;
					return b;
				};
				r.prototype.del = r.prototype.Cb;
				r.prototype.Eb = function () {
					var a = [],
						b = u(this);
					b.sort();
					for (var c = 0; c < b.length; c++) {
						var d = this.a[b[c]];
						a.push([d.key, d.value]);
					}
					return a;
				};
				r.prototype.getEntryList = r.prototype.Eb;
				r.prototype.entries = function () {
					var a = [],
						b = u(this);
					b.sort();
					for (var c = 0; c < b.length; c++) {
						var d = this.a[b[c]];
						a.push([d.key, v(this, d)]);
					}
					return new w(a);
				};
				r.prototype.entries = r.prototype.entries;
				r.prototype.keys = function () {
					var a = [],
						b = u(this);
					b.sort();
					for (var c = 0; c < b.length; c++) a.push(this.a[b[c]].key);
					return new w(a);
				};
				r.prototype.keys = r.prototype.keys;
				r.prototype.values = function () {
					var a = [],
						b = u(this);
					b.sort();
					for (var c = 0; c < b.length; c++) a.push(v(this, this.a[b[c]]));
					return new w(a);
				};
				r.prototype.values = r.prototype.values;
				r.prototype.forEach = function (a, b) {
					var c = u(this);
					c.sort();
					for (var d = 0; d < c.length; d++) {
						var f = this.a[c[d]];
						a.call(b, v(this, f), f.key, this);
					}
				};
				r.prototype.forEach = r.prototype.forEach;
				r.prototype.set = function (a, b) {
					var c = new wa(a);
					this.b ? ((c.a = b), (c.value = b.g())) : (c.value = b);
					this.a[a.toString()] = c;
					this.arrClean = !1;
					return this;
				};
				r.prototype.set = r.prototype.set;
				function v(a, b) {
					return a.b ? (b.a || (b.a = new a.b(b.value)), b.a) : b.value;
				}
				r.prototype.get = function (a) {
					if ((a = this.a[a.toString()])) return v(this, a);
				};
				r.prototype.get = r.prototype.get;
				r.prototype.has = function (a) {
					return a.toString() in this.a;
				};
				r.prototype.has = r.prototype.has;
				r.prototype.Jc = function (a, b, c, d, f) {
					var h = u(this);
					h.sort();
					for (var m = 0; m < h.length; m++) {
						var t = this.a[h[m]];
						b.Va(a);
						c.call(b, 1, t.key);
						this.b ? d.call(b, 2, v(this, t), f) : d.call(b, 2, t.value);
						b.Ya();
					}
				};
				r.prototype.serializeBinary = r.prototype.Jc;
				r.deserializeBinary = function (a, b, c, d, f, h, m) {
					for (; b.oa() && !b.bb(); ) {
						var t = b.c;
						1 == t
							? (h = c.call(b))
							: 2 == t && (a.b ? (n(f), m || (m = new a.b()), d.call(b, m, f)) : (m = d.call(b)));
					}
					n(void 0 != h);
					n(void 0 != m);
					a.set(h, m);
				};
				function u(a) {
					a = a.a;
					var b = [],
						c;
					for (c in a) Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
					return b;
				}
				function wa(a, b) {
					this.key = a;
					this.value = b;
					this.a = void 0;
				}
				function xa(a) {
					if (8192 >= a.length) return String.fromCharCode.apply(null, a);
					for (var b = '', c = 0; c < a.length; c += 8192) b += String.fromCharCode.apply(null, ra(a, c, c + 8192));
					return b;
				}
				var ya = {
						'\x00': '\\0',
						'\b': '\\b',
						'\f': '\\f',
						'\n': '\\n',
						'\r': '\\r',
						'\t': '\\t',
						'\x0B': '\\x0B',
						'"': '\\"',
						'\\': '\\\\',
						'<': '\\u003C'
					},
					za = { "'": "\\'" };
				var Aa = {},
					x = null;
				function Ba(a, b) {
					void 0 === b && (b = 0);
					Ca();
					b = Aa[b];
					for (var c = [], d = 0; d < a.length; d += 3) {
						var f = a[d],
							h = d + 1 < a.length,
							m = h ? a[d + 1] : 0,
							t = d + 2 < a.length,
							B = t ? a[d + 2] : 0,
							M = f >> 2;
						f = ((f & 3) << 4) | (m >> 4);
						m = ((m & 15) << 2) | (B >> 6);
						B &= 63;
						t || ((B = 64), h || (m = 64));
						c.push(b[M], b[f], b[m] || '', b[B] || '');
					}
					return c.join('');
				}
				function Da(a) {
					var b = a.length,
						c = (3 * b) / 4;
					c % 3
						? (c = Math.floor(c))
						: -1 != '=.'.indexOf(a[b - 1]) && (c = -1 != '=.'.indexOf(a[b - 2]) ? c - 2 : c - 1);
					var d = new Uint8Array(c),
						f = 0;
					Ea(a, function (h) {
						d[f++] = h;
					});
					return d.subarray(0, f);
				}
				function Ea(a, b) {
					function c(B) {
						for (; d < a.length; ) {
							var M = a.charAt(d++),
								La = x[M];
							if (null != La) return La;
							if (!/^[\s\xa0]*$/.test(M)) throw Error('Unknown base64 encoding at char: ' + M);
						}
						return B;
					}
					Ca();
					for (var d = 0; ; ) {
						var f = c(-1),
							h = c(0),
							m = c(64),
							t = c(64);
						if (64 === t && -1 === f) break;
						b((f << 2) | (h >> 4));
						64 != m && (b(((h << 4) & 240) | (m >> 2)), 64 != t && b(((m << 6) & 192) | t));
					}
				}
				function Ca() {
					if (!x) {
						x = {};
						for (
							var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
								b = ['+/=', '+/', '-_=', '-_.', '-_'],
								c = 0;
							5 > c;
							c++
						) {
							var d = a.concat(b[c].split(''));
							Aa[c] = d;
							for (var f = 0; f < d.length; f++) {
								var h = d[f];
								void 0 === x[h] && (x[h] = f);
							}
						}
					}
				}
				g('jspb.ConstBinaryMessage', function () {}, void 0);
				g('jspb.BinaryMessage', function () {}, void 0);
				g(
					'jspb.BinaryConstants.FieldType',
					{
						yb: -1,
						ee: 1,
						FLOAT: 2,
						ke: 3,
						te: 4,
						je: 5,
						xb: 6,
						wb: 7,
						BOOL: 8,
						re: 9,
						ie: 10,
						le: 11,
						ce: 12,
						se: 13,
						ge: 14,
						me: 15,
						ne: 16,
						oe: 17,
						pe: 18,
						he: 30,
						ve: 31
					},
					void 0
				);
				g('jspb.BinaryConstants.WireType', { yb: -1, ue: 0, xb: 1, de: 2, qe: 3, fe: 4, wb: 5 }, void 0);
				g(
					'jspb.BinaryConstants.FieldTypeToWireType',
					function (a) {
						switch (a) {
							case 5:
							case 3:
							case 13:
							case 4:
							case 17:
							case 18:
							case 8:
							case 14:
							case 31:
								return 0;
							case 1:
							case 6:
							case 16:
							case 30:
								return 1;
							case 9:
							case 11:
							case 12:
								return 2;
							case 2:
							case 7:
							case 15:
								return 5;
							default:
								return -1;
						}
					},
					void 0
				);
				g('jspb.BinaryConstants.INVALID_FIELD_NUMBER', -1, void 0);
				g('jspb.BinaryConstants.FLOAT32_EPS', 1.401298464324817e-45, void 0);
				g('jspb.BinaryConstants.FLOAT32_MIN', 1.1754943508222875e-38, void 0);
				g('jspb.BinaryConstants.FLOAT32_MAX', 3.4028234663852886e38, void 0);
				g('jspb.BinaryConstants.FLOAT64_EPS', 4.9e-324, void 0);
				g('jspb.BinaryConstants.FLOAT64_MIN', 2.2250738585072014e-308, void 0);
				g('jspb.BinaryConstants.FLOAT64_MAX', 1.7976931348623157e308, void 0);
				g('jspb.BinaryConstants.TWO_TO_20', 1048576, void 0);
				g('jspb.BinaryConstants.TWO_TO_23', 8388608, void 0);
				g('jspb.BinaryConstants.TWO_TO_31', 2147483648, void 0);
				g('jspb.BinaryConstants.TWO_TO_32', 4294967296, void 0);
				g('jspb.BinaryConstants.TWO_TO_52', 4503599627370496, void 0);
				g('jspb.BinaryConstants.TWO_TO_63', 0x7fffffffffffffff, void 0);
				g('jspb.BinaryConstants.TWO_TO_64', 1.8446744073709552e19, void 0);
				g('jspb.BinaryConstants.ZERO_HASH', '\x00\x00\x00\x00\x00\x00\x00\x00', void 0);
				var y = 0,
					z = 0;
				g(
					'jspb.utils.getSplit64Low',
					function () {
						return y;
					},
					void 0
				);
				g(
					'jspb.utils.getSplit64High',
					function () {
						return z;
					},
					void 0
				);
				function Fa(a) {
					var b = a >>> 0;
					a = Math.floor((a - b) / 4294967296) >>> 0;
					y = b;
					z = a;
				}
				g('jspb.utils.splitUint64', Fa, void 0);
				function A(a) {
					var b = 0 > a;
					a = Math.abs(a);
					var c = a >>> 0;
					a = Math.floor((a - c) / 4294967296);
					a >>>= 0;
					b && ((a = ~a >>> 0), (c = (~c >>> 0) + 1), 4294967295 < c && ((c = 0), a++, 4294967295 < a && (a = 0)));
					y = c;
					z = a;
				}
				g('jspb.utils.splitInt64', A, void 0);
				function Ga(a) {
					var b = 0 > a;
					a = 2 * Math.abs(a);
					Fa(a);
					a = y;
					var c = z;
					b && (0 == a ? (0 == c ? (c = a = 4294967295) : (c--, (a = 4294967295))) : a--);
					y = a;
					z = c;
				}
				g('jspb.utils.splitZigzag64', Ga, void 0);
				function Ha(a) {
					var b = 0 > a ? 1 : 0;
					a = b ? -a : a;
					if (0 === a) 0 < 1 / a ? (y = z = 0) : ((z = 0), (y = 2147483648));
					else if (isNaN(a)) ((z = 0), (y = 2147483647));
					else if (3.4028234663852886e38 < a) ((z = 0), (y = ((b << 31) | 2139095040) >>> 0));
					else if (1.1754943508222875e-38 > a)
						((a = Math.round(a / Math.pow(2, -149))), (z = 0), (y = ((b << 31) | a) >>> 0));
					else {
						var c = Math.floor(Math.log(a) / Math.LN2);
						a *= Math.pow(2, -c);
						a = Math.round(8388608 * a);
						16777216 <= a && ++c;
						z = 0;
						y = ((b << 31) | ((c + 127) << 23) | (a & 8388607)) >>> 0;
					}
				}
				g('jspb.utils.splitFloat32', Ha, void 0);
				function Ia(a) {
					var b = 0 > a ? 1 : 0;
					a = b ? -a : a;
					if (0 === a) ((z = 0 < 1 / a ? 0 : 2147483648), (y = 0));
					else if (isNaN(a)) ((z = 2147483647), (y = 4294967295));
					else if (1.7976931348623157e308 < a) ((z = ((b << 31) | 2146435072) >>> 0), (y = 0));
					else if (2.2250738585072014e-308 > a)
						((a /= Math.pow(2, -1074)), (z = ((b << 31) | (a / 4294967296)) >>> 0), (y = a >>> 0));
					else {
						var c = a,
							d = 0;
						if (2 <= c) for (; 2 <= c && 1023 > d; ) (d++, (c /= 2));
						else for (; 1 > c && -1022 < d; ) ((c *= 2), d--);
						a *= Math.pow(2, -d);
						z = ((b << 31) | ((d + 1023) << 20) | ((1048576 * a) & 1048575)) >>> 0;
						y = (4503599627370496 * a) >>> 0;
					}
				}
				g('jspb.utils.splitFloat64', Ia, void 0);
				function C(a) {
					var b = a.charCodeAt(4),
						c = a.charCodeAt(5),
						d = a.charCodeAt(6),
						f = a.charCodeAt(7);
					y = (a.charCodeAt(0) + (a.charCodeAt(1) << 8) + (a.charCodeAt(2) << 16) + (a.charCodeAt(3) << 24)) >>> 0;
					z = (b + (c << 8) + (d << 16) + (f << 24)) >>> 0;
				}
				g('jspb.utils.splitHash64', C, void 0);
				function D(a, b) {
					return 4294967296 * b + (a >>> 0);
				}
				g('jspb.utils.joinUint64', D, void 0);
				function E(a, b) {
					var c = b & 2147483648;
					c && ((a = (~a + 1) >>> 0), (b = ~b >>> 0), 0 == a && (b = (b + 1) >>> 0));
					a = D(a, b);
					return c ? -a : a;
				}
				g('jspb.utils.joinInt64', E, void 0);
				function Ja(a, b, c) {
					var d = b >> 31;
					return c((a << 1) ^ d, ((b << 1) | (a >>> 31)) ^ d);
				}
				g('jspb.utils.toZigzag64', Ja, void 0);
				function Ka(a, b) {
					return Ma(a, b, E);
				}
				g('jspb.utils.joinZigzag64', Ka, void 0);
				function Ma(a, b, c) {
					var d = -(a & 1);
					return c(((a >>> 1) | (b << 31)) ^ d, (b >>> 1) ^ d);
				}
				g('jspb.utils.fromZigzag64', Ma, void 0);
				function Na(a) {
					var b = 2 * (a >> 31) + 1,
						c = (a >>> 23) & 255;
					a &= 8388607;
					return 255 == c
						? a
							? NaN
							: Infinity * b
						: 0 == c
							? b * Math.pow(2, -149) * a
							: b * Math.pow(2, c - 150) * (a + Math.pow(2, 23));
				}
				g('jspb.utils.joinFloat32', Na, void 0);
				function Oa(a, b) {
					var c = 2 * (b >> 31) + 1,
						d = (b >>> 20) & 2047;
					a = 4294967296 * (b & 1048575) + a;
					return 2047 == d
						? a
							? NaN
							: Infinity * c
						: 0 == d
							? c * Math.pow(2, -1074) * a
							: c * Math.pow(2, d - 1075) * (a + 4503599627370496);
				}
				g('jspb.utils.joinFloat64', Oa, void 0);
				function Pa(a, b) {
					return String.fromCharCode(
						(a >>> 0) & 255,
						(a >>> 8) & 255,
						(a >>> 16) & 255,
						(a >>> 24) & 255,
						(b >>> 0) & 255,
						(b >>> 8) & 255,
						(b >>> 16) & 255,
						(b >>> 24) & 255
					);
				}
				g('jspb.utils.joinHash64', Pa, void 0);
				g('jspb.utils.DIGITS', '0123456789abcdef'.split(''), void 0);
				function F(a, b) {
					function c(f, h) {
						f = f ? String(f) : '';
						return h ? '0000000'.slice(f.length) + f : f;
					}
					if (2097151 >= b) return '' + D(a, b);
					var d = (((a >>> 24) | (b << 8)) >>> 0) & 16777215;
					b = (b >> 16) & 65535;
					a = (a & 16777215) + 6777216 * d + 6710656 * b;
					d += 8147497 * b;
					b *= 2;
					1e7 <= a && ((d += Math.floor(a / 1e7)), (a %= 1e7));
					1e7 <= d && ((b += Math.floor(d / 1e7)), (d %= 1e7));
					return c(b, 0) + c(d, b) + c(a, 1);
				}
				g('jspb.utils.joinUnsignedDecimalString', F, void 0);
				function G(a, b) {
					var c = b & 2147483648;
					c && ((a = (~a + 1) >>> 0), (b = (~b + (0 == a ? 1 : 0)) >>> 0));
					a = F(a, b);
					return c ? '-' + a : a;
				}
				g('jspb.utils.joinSignedDecimalString', G, void 0);
				function Qa(a, b) {
					C(a);
					a = y;
					var c = z;
					return b ? G(a, c) : F(a, c);
				}
				g('jspb.utils.hash64ToDecimalString', Qa, void 0);
				g(
					'jspb.utils.hash64ArrayToDecimalStrings',
					function (a, b) {
						for (var c = Array(a.length), d = 0; d < a.length; d++) c[d] = Qa(a[d], b);
						return c;
					},
					void 0
				);
				function H(a) {
					function b(m, t) {
						for (var B = 0; 8 > B && (1 !== m || 0 < t); B++) ((t = m * f[B] + t), (f[B] = t & 255), (t >>>= 8));
					}
					function c() {
						for (var m = 0; 8 > m; m++) f[m] = ~f[m] & 255;
					}
					n(0 < a.length);
					var d = !1;
					'-' === a[0] && ((d = !0), (a = a.slice(1)));
					for (var f = [0, 0, 0, 0, 0, 0, 0, 0], h = 0; h < a.length; h++) b(10, a.charCodeAt(h) - 48);
					d && (c(), b(1, 1));
					return xa(f);
				}
				g('jspb.utils.decimalStringToHash64', H, void 0);
				g(
					'jspb.utils.splitDecimalString',
					function (a) {
						C(H(a));
					},
					void 0
				);
				function Ra(a) {
					return String.fromCharCode(10 > a ? 48 + a : 87 + a);
				}
				function Sa(a) {
					return 97 <= a ? a - 97 + 10 : a - 48;
				}
				g(
					'jspb.utils.hash64ToHexString',
					function (a) {
						var b = Array(18);
						b[0] = '0';
						b[1] = 'x';
						for (var c = 0; 8 > c; c++) {
							var d = a.charCodeAt(7 - c);
							b[2 * c + 2] = Ra(d >> 4);
							b[2 * c + 3] = Ra(d & 15);
						}
						return b.join('');
					},
					void 0
				);
				g(
					'jspb.utils.hexStringToHash64',
					function (a) {
						a = a.toLowerCase();
						n(18 == a.length);
						n('0' == a[0]);
						n('x' == a[1]);
						for (var b = '', c = 0; 8 > c; c++)
							b = String.fromCharCode(16 * Sa(a.charCodeAt(2 * c + 2)) + Sa(a.charCodeAt(2 * c + 3))) + b;
						return b;
					},
					void 0
				);
				g(
					'jspb.utils.hash64ToNumber',
					function (a, b) {
						C(a);
						a = y;
						var c = z;
						return b ? E(a, c) : D(a, c);
					},
					void 0
				);
				g(
					'jspb.utils.numberToHash64',
					function (a) {
						A(a);
						return Pa(y, z);
					},
					void 0
				);
				g(
					'jspb.utils.countVarints',
					function (a, b, c) {
						for (var d = 0, f = b; f < c; f++) d += a[f] >> 7;
						return c - b - d;
					},
					void 0
				);
				g(
					'jspb.utils.countVarintFields',
					function (a, b, c, d) {
						var f = 0;
						d *= 8;
						if (128 > d)
							for (; b < c && a[b++] == d; )
								for (f++; ; ) {
									var h = a[b++];
									if (0 == (h & 128)) break;
								}
						else
							for (; b < c; ) {
								for (h = d; 128 < h; ) {
									if (a[b] != ((h & 127) | 128)) return f;
									b++;
									h >>= 7;
								}
								if (a[b++] != h) break;
								for (f++; (h = a[b++]), 0 != (h & 128); );
							}
						return f;
					},
					void 0
				);
				function Ta(a, b, c, d, f) {
					var h = 0;
					if (128 > d) for (; b < c && a[b++] == d; ) (h++, (b += f));
					else
						for (; b < c; ) {
							for (var m = d; 128 < m; ) {
								if (a[b++] != ((m & 127) | 128)) return h;
								m >>= 7;
							}
							if (a[b++] != m) break;
							h++;
							b += f;
						}
					return h;
				}
				g(
					'jspb.utils.countFixed32Fields',
					function (a, b, c, d) {
						return Ta(a, b, c, 8 * d + 5, 4);
					},
					void 0
				);
				g(
					'jspb.utils.countFixed64Fields',
					function (a, b, c, d) {
						return Ta(a, b, c, 8 * d + 1, 8);
					},
					void 0
				);
				g(
					'jspb.utils.countDelimitedFields',
					function (a, b, c, d) {
						var f = 0;
						for (d = 8 * d + 2; b < c; ) {
							for (var h = d; 128 < h; ) {
								if (a[b++] != ((h & 127) | 128)) return f;
								h >>= 7;
							}
							if (a[b++] != h) break;
							f++;
							for (var m = 0, t = 1; (h = a[b++]), (m += (h & 127) * t), (t *= 128), 0 != (h & 128); );
							b += m;
						}
						return f;
					},
					void 0
				);
				g(
					'jspb.utils.debugBytesToTextFormat',
					function (a) {
						var b = '"';
						if (a) {
							a = Ua(a);
							for (var c = 0; c < a.length; c++) ((b += '\\x'), 16 > a[c] && (b += '0'), (b += a[c].toString(16)));
						}
						return b + '"';
					},
					void 0
				);
				g(
					'jspb.utils.debugScalarToTextFormat',
					function (a) {
						if ('string' === typeof a) {
							a = String(a);
							for (var b = ['"'], c = 0; c < a.length; c++) {
								var d = a.charAt(c),
									f = d.charCodeAt(0),
									h = c + 1,
									m;
								if (!(m = ya[d])) {
									if (!(31 < f && 127 > f))
										if (((f = d), f in za)) d = za[f];
										else if (f in ya) d = za[f] = ya[f];
										else {
											m = f.charCodeAt(0);
											if (31 < m && 127 > m) d = f;
											else {
												if (256 > m) {
													if (((d = '\\x'), 16 > m || 256 < m)) d += '0';
												} else ((d = '\\u'), 4096 > m && (d += '0'));
												d += m.toString(16).toUpperCase();
											}
											d = za[f] = d;
										}
									m = d;
								}
								b[h] = m;
							}
							b.push('"');
							a = b.join('');
						} else a = a.toString();
						return a;
					},
					void 0
				);
				g(
					'jspb.utils.stringToByteArray',
					function (a) {
						for (var b = new Uint8Array(a.length), c = 0; c < a.length; c++) {
							var d = a.charCodeAt(c);
							if (255 < d) throw Error('Conversion error: string contains codepoint outside of byte range');
							b[c] = d;
						}
						return b;
					},
					void 0
				);
				function Ua(a) {
					if (a.constructor === Uint8Array) return a;
					if (a.constructor === ArrayBuffer) return new Uint8Array(a);
					if (a.constructor === Array) return new Uint8Array(a);
					if (a.constructor === String) return Da(a);
					if (a instanceof Uint8Array) return new Uint8Array(a.buffer, a.byteOffset, a.byteLength);
					p('Type not convertible to Uint8Array.');
					return new Uint8Array(0);
				}
				g('jspb.utils.byteSourceToUint8Array', Ua, void 0);
				function I(a, b, c) {
					this.b = null;
					this.a = this.c = this.h = 0;
					this.v = !1;
					a && this.H(a, b, c);
				}
				g('jspb.BinaryDecoder', I, void 0);
				var Va = [];
				I.getInstanceCacheLength = function () {
					return Va.length;
				};
				function Wa(a, b, c) {
					if (Va.length) {
						var d = Va.pop();
						a && d.H(a, b, c);
						return d;
					}
					return new I(a, b, c);
				}
				I.alloc = Wa;
				I.prototype.Ca = function () {
					this.clear();
					100 > Va.length && Va.push(this);
				};
				I.prototype.free = I.prototype.Ca;
				I.prototype.clone = function () {
					return Wa(this.b, this.h, this.c - this.h);
				};
				I.prototype.clone = I.prototype.clone;
				I.prototype.clear = function () {
					this.b = null;
					this.a = this.c = this.h = 0;
					this.v = !1;
				};
				I.prototype.clear = I.prototype.clear;
				I.prototype.Y = function () {
					return this.b;
				};
				I.prototype.getBuffer = I.prototype.Y;
				I.prototype.H = function (a, b, c) {
					this.b = Ua(a);
					this.h = void 0 !== b ? b : 0;
					this.c = void 0 !== c ? this.h + c : this.b.length;
					this.a = this.h;
				};
				I.prototype.setBlock = I.prototype.H;
				I.prototype.Db = function () {
					return this.c;
				};
				I.prototype.getEnd = I.prototype.Db;
				I.prototype.setEnd = function (a) {
					this.c = a;
				};
				I.prototype.setEnd = I.prototype.setEnd;
				I.prototype.reset = function () {
					this.a = this.h;
				};
				I.prototype.reset = I.prototype.reset;
				I.prototype.B = function () {
					return this.a;
				};
				I.prototype.getCursor = I.prototype.B;
				I.prototype.Ma = function (a) {
					this.a = a;
				};
				I.prototype.setCursor = I.prototype.Ma;
				I.prototype.advance = function (a) {
					this.a += a;
					n(this.a <= this.c);
				};
				I.prototype.advance = I.prototype.advance;
				I.prototype.ya = function () {
					return this.a == this.c;
				};
				I.prototype.atEnd = I.prototype.ya;
				I.prototype.Qb = function () {
					return this.a > this.c;
				};
				I.prototype.pastEnd = I.prototype.Qb;
				I.prototype.getError = function () {
					return this.v || 0 > this.a || this.a > this.c;
				};
				I.prototype.getError = I.prototype.getError;
				I.prototype.w = function (a) {
					for (var b = 128, c = 0, d = 0, f = 0; 4 > f && 128 <= b; f++)
						((b = this.b[this.a++]), (c |= (b & 127) << (7 * f)));
					128 <= b && ((b = this.b[this.a++]), (c |= (b & 127) << 28), (d |= (b & 127) >> 4));
					if (128 <= b) for (f = 0; 5 > f && 128 <= b; f++) ((b = this.b[this.a++]), (d |= (b & 127) << (7 * f + 3)));
					if (128 > b) return a(c >>> 0, d >>> 0);
					p('Failed to read varint, encoding is invalid.');
					this.v = !0;
				};
				I.prototype.readSplitVarint64 = I.prototype.w;
				I.prototype.ea = function (a) {
					return this.w(function (b, c) {
						return Ma(b, c, a);
					});
				};
				I.prototype.readSplitZigzagVarint64 = I.prototype.ea;
				I.prototype.ta = function (a) {
					var b = this.b,
						c = this.a;
					this.a += 8;
					for (var d = 0, f = 0, h = c + 7; h >= c; h--) ((d = (d << 8) | b[h]), (f = (f << 8) | b[h + 4]));
					return a(d, f);
				};
				I.prototype.readSplitFixed64 = I.prototype.ta;
				I.prototype.kb = function () {
					for (; this.b[this.a] & 128; ) this.a++;
					this.a++;
				};
				I.prototype.skipVarint = I.prototype.kb;
				I.prototype.mb = function (a) {
					for (; 128 < a; ) (this.a--, (a >>>= 7));
					this.a--;
				};
				I.prototype.unskipVarint = I.prototype.mb;
				I.prototype.o = function () {
					var a = this.b;
					var b = a[this.a];
					var c = b & 127;
					if (128 > b) return ((this.a += 1), n(this.a <= this.c), c);
					b = a[this.a + 1];
					c |= (b & 127) << 7;
					if (128 > b) return ((this.a += 2), n(this.a <= this.c), c);
					b = a[this.a + 2];
					c |= (b & 127) << 14;
					if (128 > b) return ((this.a += 3), n(this.a <= this.c), c);
					b = a[this.a + 3];
					c |= (b & 127) << 21;
					if (128 > b) return ((this.a += 4), n(this.a <= this.c), c);
					b = a[this.a + 4];
					c |= (b & 15) << 28;
					if (128 > b) return ((this.a += 5), n(this.a <= this.c), c >>> 0);
					this.a += 5;
					128 <= a[this.a++] &&
						128 <= a[this.a++] &&
						128 <= a[this.a++] &&
						128 <= a[this.a++] &&
						128 <= a[this.a++] &&
						n(!1);
					n(this.a <= this.c);
					return c;
				};
				I.prototype.readUnsignedVarint32 = I.prototype.o;
				I.prototype.da = function () {
					return ~~this.o();
				};
				I.prototype.readSignedVarint32 = I.prototype.da;
				I.prototype.O = function () {
					return this.o().toString();
				};
				I.prototype.Ea = function () {
					return this.da().toString();
				};
				I.prototype.readSignedVarint32String = I.prototype.Ea;
				I.prototype.Ia = function () {
					var a = this.o();
					return (a >>> 1) ^ -(a & 1);
				};
				I.prototype.readZigzagVarint32 = I.prototype.Ia;
				I.prototype.Ga = function () {
					return this.w(D);
				};
				I.prototype.readUnsignedVarint64 = I.prototype.Ga;
				I.prototype.Ha = function () {
					return this.w(F);
				};
				I.prototype.readUnsignedVarint64String = I.prototype.Ha;
				I.prototype.sa = function () {
					return this.w(E);
				};
				I.prototype.readSignedVarint64 = I.prototype.sa;
				I.prototype.Fa = function () {
					return this.w(G);
				};
				I.prototype.readSignedVarint64String = I.prototype.Fa;
				I.prototype.Ja = function () {
					return this.w(Ka);
				};
				I.prototype.readZigzagVarint64 = I.prototype.Ja;
				I.prototype.fb = function () {
					return this.ea(Pa);
				};
				I.prototype.readZigzagVarintHash64 = I.prototype.fb;
				I.prototype.Ka = function () {
					return this.ea(G);
				};
				I.prototype.readZigzagVarint64String = I.prototype.Ka;
				I.prototype.Gc = function () {
					var a = this.b[this.a];
					this.a += 1;
					n(this.a <= this.c);
					return a;
				};
				I.prototype.readUint8 = I.prototype.Gc;
				I.prototype.Ec = function () {
					var a = this.b[this.a],
						b = this.b[this.a + 1];
					this.a += 2;
					n(this.a <= this.c);
					return (a << 0) | (b << 8);
				};
				I.prototype.readUint16 = I.prototype.Ec;
				I.prototype.m = function () {
					var a = this.b[this.a],
						b = this.b[this.a + 1],
						c = this.b[this.a + 2],
						d = this.b[this.a + 3];
					this.a += 4;
					n(this.a <= this.c);
					return ((a << 0) | (b << 8) | (c << 16) | (d << 24)) >>> 0;
				};
				I.prototype.readUint32 = I.prototype.m;
				I.prototype.ga = function () {
					var a = this.m(),
						b = this.m();
					return D(a, b);
				};
				I.prototype.readUint64 = I.prototype.ga;
				I.prototype.ha = function () {
					var a = this.m(),
						b = this.m();
					return F(a, b);
				};
				I.prototype.readUint64String = I.prototype.ha;
				I.prototype.Xb = function () {
					var a = this.b[this.a];
					this.a += 1;
					n(this.a <= this.c);
					return (a << 24) >> 24;
				};
				I.prototype.readInt8 = I.prototype.Xb;
				I.prototype.Vb = function () {
					var a = this.b[this.a],
						b = this.b[this.a + 1];
					this.a += 2;
					n(this.a <= this.c);
					return (((a << 0) | (b << 8)) << 16) >> 16;
				};
				I.prototype.readInt16 = I.prototype.Vb;
				I.prototype.P = function () {
					var a = this.b[this.a],
						b = this.b[this.a + 1],
						c = this.b[this.a + 2],
						d = this.b[this.a + 3];
					this.a += 4;
					n(this.a <= this.c);
					return (a << 0) | (b << 8) | (c << 16) | (d << 24);
				};
				I.prototype.readInt32 = I.prototype.P;
				I.prototype.ba = function () {
					var a = this.m(),
						b = this.m();
					return E(a, b);
				};
				I.prototype.readInt64 = I.prototype.ba;
				I.prototype.ca = function () {
					var a = this.m(),
						b = this.m();
					return G(a, b);
				};
				I.prototype.readInt64String = I.prototype.ca;
				I.prototype.aa = function () {
					var a = this.m();
					return Na(a, 0);
				};
				I.prototype.readFloat = I.prototype.aa;
				I.prototype.Z = function () {
					var a = this.m(),
						b = this.m();
					return Oa(a, b);
				};
				I.prototype.readDouble = I.prototype.Z;
				I.prototype.pa = function () {
					return !!this.b[this.a++];
				};
				I.prototype.readBool = I.prototype.pa;
				I.prototype.ra = function () {
					return this.da();
				};
				I.prototype.readEnum = I.prototype.ra;
				I.prototype.fa = function (a) {
					var b = this.b,
						c = this.a;
					a = c + a;
					for (var d = [], f = ''; c < a; ) {
						var h = b[c++];
						if (128 > h) d.push(h);
						else if (192 > h) continue;
						else if (224 > h) {
							var m = b[c++];
							d.push(((h & 31) << 6) | (m & 63));
						} else if (240 > h) {
							m = b[c++];
							var t = b[c++];
							d.push(((h & 15) << 12) | ((m & 63) << 6) | (t & 63));
						} else if (248 > h) {
							m = b[c++];
							t = b[c++];
							var B = b[c++];
							h = ((h & 7) << 18) | ((m & 63) << 12) | ((t & 63) << 6) | (B & 63);
							h -= 65536;
							d.push(((h >> 10) & 1023) + 55296, (h & 1023) + 56320);
						}
						8192 <= d.length && ((f += String.fromCharCode.apply(null, d)), (d.length = 0));
					}
					f += xa(d);
					this.a = c;
					return f;
				};
				I.prototype.readString = I.prototype.fa;
				I.prototype.Dc = function () {
					var a = this.o();
					return this.fa(a);
				};
				I.prototype.readStringWithLength = I.prototype.Dc;
				I.prototype.qa = function (a) {
					if (0 > a || this.a + a > this.b.length) return ((this.v = !0), p('Invalid byte length!'), new Uint8Array(0));
					var b = this.b.subarray(this.a, this.a + a);
					this.a += a;
					n(this.a <= this.c);
					return b;
				};
				I.prototype.readBytes = I.prototype.qa;
				I.prototype.ia = function () {
					return this.w(Pa);
				};
				I.prototype.readVarintHash64 = I.prototype.ia;
				I.prototype.$ = function () {
					var a = this.b,
						b = this.a,
						c = a[b],
						d = a[b + 1],
						f = a[b + 2],
						h = a[b + 3],
						m = a[b + 4],
						t = a[b + 5],
						B = a[b + 6];
					a = a[b + 7];
					this.a += 8;
					return String.fromCharCode(c, d, f, h, m, t, B, a);
				};
				I.prototype.readFixedHash64 = I.prototype.$;
				function J(a, b, c) {
					this.a = Wa(a, b, c);
					this.O = this.a.B();
					this.b = this.c = -1;
					this.h = !1;
					this.v = null;
				}
				g('jspb.BinaryReader', J, void 0);
				var K = [];
				J.clearInstanceCache = function () {
					K = [];
				};
				J.getInstanceCacheLength = function () {
					return K.length;
				};
				function Xa(a, b, c) {
					if (K.length) {
						var d = K.pop();
						a && d.a.H(a, b, c);
						return d;
					}
					return new J(a, b, c);
				}
				J.alloc = Xa;
				J.prototype.zb = Xa;
				J.prototype.alloc = J.prototype.zb;
				J.prototype.Ca = function () {
					this.a.clear();
					this.b = this.c = -1;
					this.h = !1;
					this.v = null;
					100 > K.length && K.push(this);
				};
				J.prototype.free = J.prototype.Ca;
				J.prototype.Fb = function () {
					return this.O;
				};
				J.prototype.getFieldCursor = J.prototype.Fb;
				J.prototype.B = function () {
					return this.a.B();
				};
				J.prototype.getCursor = J.prototype.B;
				J.prototype.Y = function () {
					return this.a.Y();
				};
				J.prototype.getBuffer = J.prototype.Y;
				J.prototype.Hb = function () {
					return this.c;
				};
				J.prototype.getFieldNumber = J.prototype.Hb;
				J.prototype.Lb = function () {
					return this.b;
				};
				J.prototype.getWireType = J.prototype.Lb;
				J.prototype.Mb = function () {
					return 2 == this.b;
				};
				J.prototype.isDelimited = J.prototype.Mb;
				J.prototype.bb = function () {
					return 4 == this.b;
				};
				J.prototype.isEndGroup = J.prototype.bb;
				J.prototype.getError = function () {
					return this.h || this.a.getError();
				};
				J.prototype.getError = J.prototype.getError;
				J.prototype.H = function (a, b, c) {
					this.a.H(a, b, c);
					this.b = this.c = -1;
				};
				J.prototype.setBlock = J.prototype.H;
				J.prototype.reset = function () {
					this.a.reset();
					this.b = this.c = -1;
				};
				J.prototype.reset = J.prototype.reset;
				J.prototype.advance = function (a) {
					this.a.advance(a);
				};
				J.prototype.advance = J.prototype.advance;
				J.prototype.oa = function () {
					if (this.a.ya()) return !1;
					if (this.getError()) return (p('Decoder hit an error'), !1);
					this.O = this.a.B();
					var a = this.a.o(),
						b = a >>> 3;
					a &= 7;
					if (0 != a && 5 != a && 1 != a && 2 != a && 3 != a && 4 != a)
						return (p('Invalid wire type: %s (at position %s)', a, this.O), (this.h = !0), !1);
					this.c = b;
					this.b = a;
					return !0;
				};
				J.prototype.nextField = J.prototype.oa;
				J.prototype.Oa = function () {
					this.a.mb((this.c << 3) | this.b);
				};
				J.prototype.unskipHeader = J.prototype.Oa;
				J.prototype.Lc = function () {
					var a = this.c;
					for (this.Oa(); this.oa() && this.c == a; ) this.C();
					this.a.ya() || this.Oa();
				};
				J.prototype.skipMatchingFields = J.prototype.Lc;
				J.prototype.lb = function () {
					0 != this.b ? (p('Invalid wire type for skipVarintField'), this.C()) : this.a.kb();
				};
				J.prototype.skipVarintField = J.prototype.lb;
				J.prototype.gb = function () {
					if (2 != this.b) (p('Invalid wire type for skipDelimitedField'), this.C());
					else {
						var a = this.a.o();
						this.a.advance(a);
					}
				};
				J.prototype.skipDelimitedField = J.prototype.gb;
				J.prototype.hb = function () {
					5 != this.b ? (p('Invalid wire type for skipFixed32Field'), this.C()) : this.a.advance(4);
				};
				J.prototype.skipFixed32Field = J.prototype.hb;
				J.prototype.ib = function () {
					1 != this.b ? (p('Invalid wire type for skipFixed64Field'), this.C()) : this.a.advance(8);
				};
				J.prototype.skipFixed64Field = J.prototype.ib;
				J.prototype.jb = function () {
					var a = this.c;
					do {
						if (!this.oa()) {
							p('Unmatched start-group tag: stream EOF');
							this.h = !0;
							break;
						}
						if (4 == this.b) {
							this.c != a && (p('Unmatched end-group tag'), (this.h = !0));
							break;
						}
						this.C();
					} while (1);
				};
				J.prototype.skipGroup = J.prototype.jb;
				J.prototype.C = function () {
					switch (this.b) {
						case 0:
							this.lb();
							break;
						case 1:
							this.ib();
							break;
						case 2:
							this.gb();
							break;
						case 5:
							this.hb();
							break;
						case 3:
							this.jb();
							break;
						default:
							p('Invalid wire encoding for field.');
					}
				};
				J.prototype.skipField = J.prototype.C;
				J.prototype.Hc = function (a, b) {
					null === this.v && (this.v = {});
					n(!this.v[a]);
					this.v[a] = b;
				};
				J.prototype.registerReadCallback = J.prototype.Hc;
				J.prototype.Ic = function (a) {
					n(null !== this.v);
					a = this.v[a];
					n(a);
					return a(this);
				};
				J.prototype.runReadCallback = J.prototype.Ic;
				J.prototype.Yb = function (a, b) {
					n(2 == this.b);
					var c = this.a.c,
						d = this.a.o();
					d = this.a.B() + d;
					this.a.setEnd(d);
					b(a, this);
					this.a.Ma(d);
					this.a.setEnd(c);
				};
				J.prototype.readMessage = J.prototype.Yb;
				J.prototype.Ub = function (a, b, c) {
					n(3 == this.b);
					n(this.c == a);
					c(b, this);
					this.h || 4 == this.b || (p('Group submessage did not end with an END_GROUP tag'), (this.h = !0));
				};
				J.prototype.readGroup = J.prototype.Ub;
				J.prototype.Gb = function () {
					n(2 == this.b);
					var a = this.a.o(),
						b = this.a.B(),
						c = b + a;
					a = Wa(this.a.Y(), b, a);
					this.a.Ma(c);
					return a;
				};
				J.prototype.getFieldDecoder = J.prototype.Gb;
				J.prototype.P = function () {
					n(0 == this.b);
					return this.a.da();
				};
				J.prototype.readInt32 = J.prototype.P;
				J.prototype.Wb = function () {
					n(0 == this.b);
					return this.a.Ea();
				};
				J.prototype.readInt32String = J.prototype.Wb;
				J.prototype.ba = function () {
					n(0 == this.b);
					return this.a.sa();
				};
				J.prototype.readInt64 = J.prototype.ba;
				J.prototype.ca = function () {
					n(0 == this.b);
					return this.a.Fa();
				};
				J.prototype.readInt64String = J.prototype.ca;
				J.prototype.m = function () {
					n(0 == this.b);
					return this.a.o();
				};
				J.prototype.readUint32 = J.prototype.m;
				J.prototype.Fc = function () {
					n(0 == this.b);
					return this.a.O();
				};
				J.prototype.readUint32String = J.prototype.Fc;
				J.prototype.ga = function () {
					n(0 == this.b);
					return this.a.Ga();
				};
				J.prototype.readUint64 = J.prototype.ga;
				J.prototype.ha = function () {
					n(0 == this.b);
					return this.a.Ha();
				};
				J.prototype.readUint64String = J.prototype.ha;
				J.prototype.zc = function () {
					n(0 == this.b);
					return this.a.Ia();
				};
				J.prototype.readSint32 = J.prototype.zc;
				J.prototype.Ac = function () {
					n(0 == this.b);
					return this.a.Ja();
				};
				J.prototype.readSint64 = J.prototype.Ac;
				J.prototype.Bc = function () {
					n(0 == this.b);
					return this.a.Ka();
				};
				J.prototype.readSint64String = J.prototype.Bc;
				J.prototype.Rb = function () {
					n(5 == this.b);
					return this.a.m();
				};
				J.prototype.readFixed32 = J.prototype.Rb;
				J.prototype.Sb = function () {
					n(1 == this.b);
					return this.a.ga();
				};
				J.prototype.readFixed64 = J.prototype.Sb;
				J.prototype.Tb = function () {
					n(1 == this.b);
					return this.a.ha();
				};
				J.prototype.readFixed64String = J.prototype.Tb;
				J.prototype.vc = function () {
					n(5 == this.b);
					return this.a.P();
				};
				J.prototype.readSfixed32 = J.prototype.vc;
				J.prototype.wc = function () {
					n(5 == this.b);
					return this.a.P().toString();
				};
				J.prototype.readSfixed32String = J.prototype.wc;
				J.prototype.xc = function () {
					n(1 == this.b);
					return this.a.ba();
				};
				J.prototype.readSfixed64 = J.prototype.xc;
				J.prototype.yc = function () {
					n(1 == this.b);
					return this.a.ca();
				};
				J.prototype.readSfixed64String = J.prototype.yc;
				J.prototype.aa = function () {
					n(5 == this.b);
					return this.a.aa();
				};
				J.prototype.readFloat = J.prototype.aa;
				J.prototype.Z = function () {
					n(1 == this.b);
					return this.a.Z();
				};
				J.prototype.readDouble = J.prototype.Z;
				J.prototype.pa = function () {
					n(0 == this.b);
					return !!this.a.o();
				};
				J.prototype.readBool = J.prototype.pa;
				J.prototype.ra = function () {
					n(0 == this.b);
					return this.a.sa();
				};
				J.prototype.readEnum = J.prototype.ra;
				J.prototype.fa = function () {
					n(2 == this.b);
					var a = this.a.o();
					return this.a.fa(a);
				};
				J.prototype.readString = J.prototype.fa;
				J.prototype.qa = function () {
					n(2 == this.b);
					var a = this.a.o();
					return this.a.qa(a);
				};
				J.prototype.readBytes = J.prototype.qa;
				J.prototype.ia = function () {
					n(0 == this.b);
					return this.a.ia();
				};
				J.prototype.readVarintHash64 = J.prototype.ia;
				J.prototype.Cc = function () {
					n(0 == this.b);
					return this.a.fb();
				};
				J.prototype.readSintHash64 = J.prototype.Cc;
				J.prototype.w = function (a) {
					n(0 == this.b);
					return this.a.w(a);
				};
				J.prototype.readSplitVarint64 = J.prototype.w;
				J.prototype.ea = function (a) {
					n(0 == this.b);
					return this.a.w(function (b, c) {
						return Ma(b, c, a);
					});
				};
				J.prototype.readSplitZigzagVarint64 = J.prototype.ea;
				J.prototype.$ = function () {
					n(1 == this.b);
					return this.a.$();
				};
				J.prototype.readFixedHash64 = J.prototype.$;
				J.prototype.ta = function (a) {
					n(1 == this.b);
					return this.a.ta(a);
				};
				J.prototype.readSplitFixed64 = J.prototype.ta;
				function L(a, b) {
					n(2 == a.b);
					var c = a.a.o();
					c = a.a.B() + c;
					for (var d = []; a.a.B() < c; ) d.push(b.call(a.a));
					return d;
				}
				J.prototype.gc = function () {
					return L(this, this.a.da);
				};
				J.prototype.readPackedInt32 = J.prototype.gc;
				J.prototype.hc = function () {
					return L(this, this.a.Ea);
				};
				J.prototype.readPackedInt32String = J.prototype.hc;
				J.prototype.ic = function () {
					return L(this, this.a.sa);
				};
				J.prototype.readPackedInt64 = J.prototype.ic;
				J.prototype.jc = function () {
					return L(this, this.a.Fa);
				};
				J.prototype.readPackedInt64String = J.prototype.jc;
				J.prototype.qc = function () {
					return L(this, this.a.o);
				};
				J.prototype.readPackedUint32 = J.prototype.qc;
				J.prototype.rc = function () {
					return L(this, this.a.O);
				};
				J.prototype.readPackedUint32String = J.prototype.rc;
				J.prototype.sc = function () {
					return L(this, this.a.Ga);
				};
				J.prototype.readPackedUint64 = J.prototype.sc;
				J.prototype.tc = function () {
					return L(this, this.a.Ha);
				};
				J.prototype.readPackedUint64String = J.prototype.tc;
				J.prototype.nc = function () {
					return L(this, this.a.Ia);
				};
				J.prototype.readPackedSint32 = J.prototype.nc;
				J.prototype.oc = function () {
					return L(this, this.a.Ja);
				};
				J.prototype.readPackedSint64 = J.prototype.oc;
				J.prototype.pc = function () {
					return L(this, this.a.Ka);
				};
				J.prototype.readPackedSint64String = J.prototype.pc;
				J.prototype.bc = function () {
					return L(this, this.a.m);
				};
				J.prototype.readPackedFixed32 = J.prototype.bc;
				J.prototype.cc = function () {
					return L(this, this.a.ga);
				};
				J.prototype.readPackedFixed64 = J.prototype.cc;
				J.prototype.dc = function () {
					return L(this, this.a.ha);
				};
				J.prototype.readPackedFixed64String = J.prototype.dc;
				J.prototype.kc = function () {
					return L(this, this.a.P);
				};
				J.prototype.readPackedSfixed32 = J.prototype.kc;
				J.prototype.lc = function () {
					return L(this, this.a.ba);
				};
				J.prototype.readPackedSfixed64 = J.prototype.lc;
				J.prototype.mc = function () {
					return L(this, this.a.ca);
				};
				J.prototype.readPackedSfixed64String = J.prototype.mc;
				J.prototype.fc = function () {
					return L(this, this.a.aa);
				};
				J.prototype.readPackedFloat = J.prototype.fc;
				J.prototype.$b = function () {
					return L(this, this.a.Z);
				};
				J.prototype.readPackedDouble = J.prototype.$b;
				J.prototype.Zb = function () {
					return L(this, this.a.pa);
				};
				J.prototype.readPackedBool = J.prototype.Zb;
				J.prototype.ac = function () {
					return L(this, this.a.ra);
				};
				J.prototype.readPackedEnum = J.prototype.ac;
				J.prototype.uc = function () {
					return L(this, this.a.ia);
				};
				J.prototype.readPackedVarintHash64 = J.prototype.uc;
				J.prototype.ec = function () {
					return L(this, this.a.$);
				};
				J.prototype.readPackedFixedHash64 = J.prototype.ec;
				function Ya(a, b, c, d, f) {
					this.ma = a;
					this.Ba = b;
					this.la = c;
					this.Na = d;
					this.na = f;
				}
				g('jspb.ExtensionFieldInfo', Ya, void 0);
				function Za(a, b, c, d, f, h) {
					this.Za = a;
					this.za = b;
					this.Aa = c;
					this.Wa = d;
					this.Ab = f;
					this.Nb = h;
				}
				g('jspb.ExtensionFieldBinaryInfo', Za, void 0);
				Ya.prototype.F = function () {
					return !!this.la;
				};
				Ya.prototype.isMessageType = Ya.prototype.F;
				function N() {}
				g('jspb.Message', N, void 0);
				N.GENERATE_TO_OBJECT = !0;
				N.GENERATE_FROM_OBJECT = !0;
				var $a = 'function' == typeof Uint8Array;
				N.prototype.Ib = function () {
					return this.b;
				};
				N.prototype.getJsPbMessageId = N.prototype.Ib;
				N.initialize = function (a, b, c, d, f, h) {
					a.f = null;
					b || (b = c ? [c] : []);
					a.b = c ? String(c) : void 0;
					a.D = 0 === c ? -1 : 0;
					a.u = b;
					a: {
						c = a.u.length;
						b = -1;
						if (
							c &&
							((b = c - 1),
							(c = a.u[b]),
							!(null === c || 'object' != typeof c || Array.isArray(c) || ($a && c instanceof Uint8Array)))
						) {
							a.G = b - a.D;
							a.i = c;
							break a;
						}
						-1 < d ? ((a.G = Math.max(d, b + 1 - a.D)), (a.i = null)) : (a.G = Number.MAX_VALUE);
					}
					a.a = {};
					if (f)
						for (d = 0; d < f.length; d++)
							((b = f[d]), b < a.G ? ((b += a.D), (a.u[b] = a.u[b] || ab)) : (bb(a), (a.i[b] = a.i[b] || ab)));
					if (h && h.length) for (d = 0; d < h.length; d++) cb(a, h[d]);
				};
				var ab = Object.freeze ? Object.freeze([]) : [];
				function bb(a) {
					var b = a.G + a.D;
					a.u[b] || (a.i = a.u[b] = {});
				}
				function db(a, b, c) {
					for (var d = [], f = 0; f < a.length; f++) d[f] = b.call(a[f], c, a[f]);
					return d;
				}
				N.toObjectList = db;
				N.toObjectExtension = function (a, b, c, d, f) {
					for (var h in c) {
						var m = c[h],
							t = d.call(a, m);
						if (null != t) {
							for (var B in m.Ba) if (m.Ba.hasOwnProperty(B)) break;
							b[B] = m.Na ? (m.na ? db(t, m.Na, f) : m.Na(f, t)) : t;
						}
					}
				};
				N.serializeBinaryExtensions = function (a, b, c, d) {
					for (var f in c) {
						var h = c[f],
							m = h.Za;
						if (!h.Aa) throw Error('Message extension present that was generated without binary serialization support');
						var t = d.call(a, m);
						if (null != t)
							if (m.F())
								if (h.Wa) h.Aa.call(b, m.ma, t, h.Wa);
								else
									throw Error(
										'Message extension present holding submessage without binary support enabled, and message is being serialized to binary format'
									);
							else h.Aa.call(b, m.ma, t);
					}
				};
				N.readBinaryExtension = function (a, b, c, d, f) {
					var h = c[b.c];
					if (h) {
						c = h.Za;
						if (!h.za) throw Error('Deserializing extension whose generated code does not support binary format');
						if (c.F()) {
							var m = new c.la();
							h.za.call(b, m, h.Ab);
						} else m = h.za.call(b);
						c.na && !h.Nb ? ((b = d.call(a, c)) ? b.push(m) : f.call(a, c, [m])) : f.call(a, c, m);
					} else b.C();
				};
				function O(a, b) {
					if (b < a.G) {
						b += a.D;
						var c = a.u[b];
						return c === ab ? (a.u[b] = []) : c;
					}
					if (a.i) return ((c = a.i[b]), c === ab ? (a.i[b] = []) : c);
				}
				N.getField = O;
				N.getRepeatedField = function (a, b) {
					return O(a, b);
				};
				function eb(a, b) {
					a = O(a, b);
					return null == a ? a : +a;
				}
				N.getOptionalFloatingPointField = eb;
				function fb(a, b) {
					a = O(a, b);
					return null == a ? a : !!a;
				}
				N.getBooleanField = fb;
				N.getRepeatedFloatingPointField = function (a, b) {
					var c = O(a, b);
					a.a || (a.a = {});
					if (!a.a[b]) {
						for (var d = 0; d < c.length; d++) c[d] = +c[d];
						a.a[b] = !0;
					}
					return c;
				};
				N.getRepeatedBooleanField = function (a, b) {
					var c = O(a, b);
					a.a || (a.a = {});
					if (!a.a[b]) {
						for (var d = 0; d < c.length; d++) c[d] = !!c[d];
						a.a[b] = !0;
					}
					return c;
				};
				function gb(a) {
					if (null == a || 'string' === typeof a) return a;
					if ($a && a instanceof Uint8Array) return Ba(a);
					p('Cannot coerce to b64 string: ' + k(a));
					return null;
				}
				N.bytesAsB64 = gb;
				function hb(a) {
					if (null == a || a instanceof Uint8Array) return a;
					if ('string' === typeof a) return Da(a);
					p('Cannot coerce to Uint8Array: ' + k(a));
					return null;
				}
				N.bytesAsU8 = hb;
				N.bytesListAsB64 = function (a) {
					ib(a);
					return a.length && 'string' !== typeof a[0] ? l(a, gb) : a;
				};
				N.bytesListAsU8 = function (a) {
					ib(a);
					return !a.length || a[0] instanceof Uint8Array ? a : l(a, hb);
				};
				function ib(a) {
					if (a && 1 < a.length) {
						var b = k(a[0]);
						qa(a, function (c) {
							k(c) != b && p('Inconsistent type in JSPB repeated field array. Got ' + k(c) + ' expected ' + b);
						});
					}
				}
				function jb(a, b, c) {
					a = O(a, b);
					return null == a ? c : a;
				}
				N.getFieldWithDefault = jb;
				N.getBooleanFieldWithDefault = function (a, b, c) {
					a = fb(a, b);
					return null == a ? c : a;
				};
				N.getFloatingPointFieldWithDefault = function (a, b, c) {
					a = eb(a, b);
					return null == a ? c : a;
				};
				N.getFieldProto3 = jb;
				N.getMapField = function (a, b, c, d) {
					a.f || (a.f = {});
					if (b in a.f) return a.f[b];
					var f = O(a, b);
					if (!f) {
						if (c) return;
						f = [];
						P(a, b, f);
					}
					return (a.f[b] = new r(f, d));
				};
				function P(a, b, c) {
					q(a, N);
					b < a.G ? (a.u[b + a.D] = c) : (bb(a), (a.i[b] = c));
					return a;
				}
				N.setField = P;
				N.setProto3IntField = function (a, b, c) {
					return Q(a, b, c, 0);
				};
				N.setProto3FloatField = function (a, b, c) {
					return Q(a, b, c, 0);
				};
				N.setProto3BooleanField = function (a, b, c) {
					return Q(a, b, c, !1);
				};
				N.setProto3StringField = function (a, b, c) {
					return Q(a, b, c, '');
				};
				N.setProto3BytesField = function (a, b, c) {
					return Q(a, b, c, '');
				};
				N.setProto3EnumField = function (a, b, c) {
					return Q(a, b, c, 0);
				};
				N.setProto3StringIntField = function (a, b, c) {
					return Q(a, b, c, '0');
				};
				function Q(a, b, c, d) {
					q(a, N);
					c !== d ? P(a, b, c) : b < a.G ? (a.u[b + a.D] = null) : (bb(a), delete a.i[b]);
					return a;
				}
				N.addToRepeatedField = function (a, b, c, d) {
					q(a, N);
					b = O(a, b);
					void 0 != d ? b.splice(d, 0, c) : b.push(c);
					return a;
				};
				function kb(a, b, c, d) {
					q(a, N);
					(c = cb(a, c)) && c !== b && void 0 !== d && (a.f && c in a.f && (a.f[c] = void 0), P(a, c, void 0));
					return P(a, b, d);
				}
				N.setOneofField = kb;
				function cb(a, b) {
					for (var c, d, f = 0; f < b.length; f++) {
						var h = b[f],
							m = O(a, h);
						null != m && ((c = h), (d = m), P(a, h, void 0));
					}
					return c ? (P(a, c, d), c) : 0;
				}
				N.computeOneofCase = cb;
				N.getWrapperField = function (a, b, c, d) {
					a.f || (a.f = {});
					if (!a.f[c]) {
						var f = O(a, c);
						if (d || f) a.f[c] = new b(f);
					}
					return a.f[c];
				};
				N.getRepeatedWrapperField = function (a, b, c) {
					lb(a, b, c);
					b = a.f[c];
					b == ab && (b = a.f[c] = []);
					return b;
				};
				function lb(a, b, c) {
					a.f || (a.f = {});
					if (!a.f[c]) {
						for (var d = O(a, c), f = [], h = 0; h < d.length; h++) f[h] = new b(d[h]);
						a.f[c] = f;
					}
				}
				N.setWrapperField = function (a, b, c) {
					q(a, N);
					a.f || (a.f = {});
					var d = c ? c.g() : c;
					a.f[b] = c;
					return P(a, b, d);
				};
				N.setOneofWrapperField = function (a, b, c, d) {
					q(a, N);
					a.f || (a.f = {});
					var f = d ? d.g() : d;
					a.f[b] = d;
					return kb(a, b, c, f);
				};
				N.setRepeatedWrapperField = function (a, b, c) {
					q(a, N);
					a.f || (a.f = {});
					c = c || [];
					for (var d = [], f = 0; f < c.length; f++) d[f] = c[f].g();
					a.f[b] = c;
					return P(a, b, d);
				};
				N.addToRepeatedWrapperField = function (a, b, c, d, f) {
					lb(a, d, b);
					var h = a.f[b];
					h || (h = a.f[b] = []);
					c = c ? c : new d();
					a = O(a, b);
					void 0 != f ? (h.splice(f, 0, c), a.splice(f, 0, c.g())) : (h.push(c), a.push(c.g()));
					return c;
				};
				N.toMap = function (a, b, c, d) {
					for (var f = {}, h = 0; h < a.length; h++) f[b.call(a[h])] = c ? c.call(a[h], d, a[h]) : a[h];
					return f;
				};
				function mb(a) {
					if (a.f)
						for (var b in a.f) {
							var c = a.f[b];
							if (Array.isArray(c)) for (var d = 0; d < c.length; d++) c[d] && c[d].g();
							else c && c.g();
						}
				}
				N.prototype.g = function () {
					mb(this);
					return this.u;
				};
				N.prototype.toArray = N.prototype.g;
				N.prototype.toString = function () {
					mb(this);
					return this.u.toString();
				};
				N.prototype.getExtension = function (a) {
					if (this.i) {
						this.f || (this.f = {});
						var b = a.ma;
						if (a.na) {
							if (a.F())
								return (
									this.f[b] ||
										(this.f[b] = l(this.i[b] || [], function (c) {
											return new a.la(c);
										})),
									this.f[b]
								);
						} else if (a.F()) return (!this.f[b] && this.i[b] && (this.f[b] = new a.la(this.i[b])), this.f[b]);
						return this.i[b];
					}
				};
				N.prototype.getExtension = N.prototype.getExtension;
				N.prototype.Kc = function (a, b) {
					this.f || (this.f = {});
					bb(this);
					var c = a.ma;
					a.na
						? ((b = b || []),
							a.F()
								? ((this.f[c] = b),
									(this.i[c] = l(b, function (d) {
										return d.g();
									})))
								: (this.i[c] = b))
						: a.F()
							? ((this.f[c] = b), (this.i[c] = b ? b.g() : b))
							: (this.i[c] = b);
					return this;
				};
				N.prototype.setExtension = N.prototype.Kc;
				N.difference = function (a, b) {
					if (!(a instanceof b.constructor)) throw Error('Messages have different types.');
					var c = a.g();
					b = b.g();
					var d = [],
						f = 0,
						h = c.length > b.length ? c.length : b.length;
					a.b && ((d[0] = a.b), (f = 1));
					for (; f < h; f++) nb(c[f], b[f]) || (d[f] = b[f]);
					return new a.constructor(d);
				};
				N.equals = function (a, b) {
					return a == b || (!(!a || !b) && a instanceof b.constructor && nb(a.g(), b.g()));
				};
				function ob(a, b) {
					a = a || {};
					b = b || {};
					var c = {},
						d;
					for (d in a) c[d] = 0;
					for (d in b) c[d] = 0;
					for (d in c) if (!nb(a[d], b[d])) return !1;
					return !0;
				}
				N.compareExtensions = ob;
				function nb(a, b) {
					if (a == b) return !0;
					if (!la(a) || !la(b))
						return ('number' === typeof a && isNaN(a)) || ('number' === typeof b && isNaN(b))
							? String(a) == String(b)
							: !1;
					if (a.constructor != b.constructor) return !1;
					if ($a && a.constructor === Uint8Array) {
						if (a.length != b.length) return !1;
						for (var c = 0; c < a.length; c++) if (a[c] != b[c]) return !1;
						return !0;
					}
					if (a.constructor === Array) {
						var d = void 0,
							f = void 0,
							h = Math.max(a.length, b.length);
						for (c = 0; c < h; c++) {
							var m = a[c],
								t = b[c];
							m && m.constructor == Object && (n(void 0 === d), n(c === a.length - 1), (d = m), (m = void 0));
							t && t.constructor == Object && (n(void 0 === f), n(c === b.length - 1), (f = t), (t = void 0));
							if (!nb(m, t)) return !1;
						}
						return d || f ? ((d = d || {}), (f = f || {}), ob(d, f)) : !0;
					}
					if (a.constructor === Object) return ob(a, b);
					throw Error('Invalid type in JSPB array');
				}
				N.compareFields = nb;
				N.prototype.Bb = function () {
					return pb(this);
				};
				N.prototype.cloneMessage = N.prototype.Bb;
				N.prototype.clone = function () {
					return pb(this);
				};
				N.prototype.clone = N.prototype.clone;
				N.clone = function (a) {
					return pb(a);
				};
				function pb(a) {
					return new a.constructor(qb(a.g()));
				}
				N.copyInto = function (a, b) {
					q(a, N);
					q(b, N);
					n(a.constructor == b.constructor, 'Copy source and target message should have the same type.');
					a = pb(a);
					for (var c = b.g(), d = a.g(), f = (c.length = 0); f < d.length; f++) c[f] = d[f];
					b.f = a.f;
					b.i = a.i;
				};
				function qb(a) {
					if (Array.isArray(a)) {
						for (var b = Array(a.length), c = 0; c < a.length; c++) {
							var d = a[c];
							null != d && (b[c] = 'object' == typeof d ? qb(n(d)) : d);
						}
						return b;
					}
					if ($a && a instanceof Uint8Array) return new Uint8Array(a);
					b = {};
					for (c in a) ((d = a[c]), null != d && (b[c] = 'object' == typeof d ? qb(n(d)) : d));
					return b;
				}
				N.registerMessageType = function (a, b) {
					b.we = a;
				};
				var R = {
					dump: function (a) {
						q(a, N, 'jspb.Message instance expected');
						n(a.getExtension, 'Only unobfuscated and unoptimized compilation modes supported.');
						return R.X(a);
					}
				};
				g('jspb.debug.dump', R.dump, void 0);
				R.X = function (a) {
					var b = k(a);
					if (
						'number' == b ||
						'string' == b ||
						'boolean' == b ||
						'null' == b ||
						'undefined' == b ||
						('undefined' !== typeof Uint8Array && a instanceof Uint8Array)
					)
						return a;
					if ('array' == b) return (ua(a), l(a, R.X));
					if (a instanceof r) {
						var c = {};
						a = a.entries();
						for (var d = a.next(); !d.done; d = a.next()) c[d.value[0]] = R.X(d.value[1]);
						return c;
					}
					q(a, N, 'Only messages expected: ' + a);
					b = a.constructor;
					var f = { $name: b.name || b.displayName };
					for (t in b.prototype) {
						var h = /^get([A-Z]\w*)/.exec(t);
						if (h && 'getExtension' != t && 'getJsPbMessageId' != t) {
							var m = 'has' + h[1];
							if (!a[m] || a[m]()) ((m = a[t]()), (f[R.$a(h[1])] = R.X(m)));
						}
					}
					if (a.extensionObject_)
						return (
							(f.$extensions =
								'Recursive dumping of extensions not supported in compiled code. Switch to uncompiled or dump extension object directly'),
							f
						);
					for (d in b.extensions)
						if (/^\d+$/.test(d)) {
							m = b.extensions[d];
							var t = a.getExtension(m);
							h = void 0;
							m = m.Ba;
							var B = [],
								M = 0;
							for (h in m) B[M++] = h;
							h = B[0];
							null != t && (c || (c = f.$extensions = {}), (c[R.$a(h)] = R.X(t)));
						}
					return f;
				};
				R.$a = function (a) {
					return a.replace(/^[A-Z]/, function (b) {
						return b.toLowerCase();
					});
				};
				function S() {
					this.a = [];
				}
				g('jspb.BinaryEncoder', S, void 0);
				S.prototype.length = function () {
					return this.a.length;
				};
				S.prototype.length = S.prototype.length;
				S.prototype.end = function () {
					var a = this.a;
					this.a = [];
					return a;
				};
				S.prototype.end = S.prototype.end;
				S.prototype.l = function (a, b) {
					n(a == Math.floor(a));
					n(b == Math.floor(b));
					n(0 <= a && 4294967296 > a);
					for (n(0 <= b && 4294967296 > b); 0 < b || 127 < a; )
						(this.a.push((a & 127) | 128), (a = ((a >>> 7) | (b << 25)) >>> 0), (b >>>= 7));
					this.a.push(a);
				};
				S.prototype.writeSplitVarint64 = S.prototype.l;
				S.prototype.A = function (a, b) {
					n(a == Math.floor(a));
					n(b == Math.floor(b));
					n(0 <= a && 4294967296 > a);
					n(0 <= b && 4294967296 > b);
					this.s(a);
					this.s(b);
				};
				S.prototype.writeSplitFixed64 = S.prototype.A;
				S.prototype.j = function (a) {
					n(a == Math.floor(a));
					for (n(0 <= a && 4294967296 > a); 127 < a; ) (this.a.push((a & 127) | 128), (a >>>= 7));
					this.a.push(a);
				};
				S.prototype.writeUnsignedVarint32 = S.prototype.j;
				S.prototype.M = function (a) {
					n(a == Math.floor(a));
					n(-2147483648 <= a && 2147483648 > a);
					if (0 <= a) this.j(a);
					else {
						for (var b = 0; 9 > b; b++) (this.a.push((a & 127) | 128), (a >>= 7));
						this.a.push(1);
					}
				};
				S.prototype.writeSignedVarint32 = S.prototype.M;
				S.prototype.va = function (a) {
					n(a == Math.floor(a));
					n(0 <= a && 1.8446744073709552e19 > a);
					A(a);
					this.l(y, z);
				};
				S.prototype.writeUnsignedVarint64 = S.prototype.va;
				S.prototype.ua = function (a) {
					n(a == Math.floor(a));
					n(-9223372036854775808 <= a && 0x7fffffffffffffff > a);
					A(a);
					this.l(y, z);
				};
				S.prototype.writeSignedVarint64 = S.prototype.ua;
				S.prototype.wa = function (a) {
					n(a == Math.floor(a));
					n(-2147483648 <= a && 2147483648 > a);
					this.j(((a << 1) ^ (a >> 31)) >>> 0);
				};
				S.prototype.writeZigzagVarint32 = S.prototype.wa;
				S.prototype.xa = function (a) {
					n(a == Math.floor(a));
					n(-9223372036854775808 <= a && 0x7fffffffffffffff > a);
					Ga(a);
					this.l(y, z);
				};
				S.prototype.writeZigzagVarint64 = S.prototype.xa;
				S.prototype.Ta = function (a) {
					this.W(H(a));
				};
				S.prototype.writeZigzagVarint64String = S.prototype.Ta;
				S.prototype.W = function (a) {
					var b = this;
					C(a);
					Ja(y, z, function (c, d) {
						b.l(c >>> 0, d >>> 0);
					});
				};
				S.prototype.writeZigzagVarintHash64 = S.prototype.W;
				S.prototype.be = function (a) {
					n(a == Math.floor(a));
					n(0 <= a && 256 > a);
					this.a.push((a >>> 0) & 255);
				};
				S.prototype.writeUint8 = S.prototype.be;
				S.prototype.ae = function (a) {
					n(a == Math.floor(a));
					n(0 <= a && 65536 > a);
					this.a.push((a >>> 0) & 255);
					this.a.push((a >>> 8) & 255);
				};
				S.prototype.writeUint16 = S.prototype.ae;
				S.prototype.s = function (a) {
					n(a == Math.floor(a));
					n(0 <= a && 4294967296 > a);
					this.a.push((a >>> 0) & 255);
					this.a.push((a >>> 8) & 255);
					this.a.push((a >>> 16) & 255);
					this.a.push((a >>> 24) & 255);
				};
				S.prototype.writeUint32 = S.prototype.s;
				S.prototype.V = function (a) {
					n(a == Math.floor(a));
					n(0 <= a && 1.8446744073709552e19 > a);
					Fa(a);
					this.s(y);
					this.s(z);
				};
				S.prototype.writeUint64 = S.prototype.V;
				S.prototype.Qc = function (a) {
					n(a == Math.floor(a));
					n(-128 <= a && 128 > a);
					this.a.push((a >>> 0) & 255);
				};
				S.prototype.writeInt8 = S.prototype.Qc;
				S.prototype.Pc = function (a) {
					n(a == Math.floor(a));
					n(-32768 <= a && 32768 > a);
					this.a.push((a >>> 0) & 255);
					this.a.push((a >>> 8) & 255);
				};
				S.prototype.writeInt16 = S.prototype.Pc;
				S.prototype.S = function (a) {
					n(a == Math.floor(a));
					n(-2147483648 <= a && 2147483648 > a);
					this.a.push((a >>> 0) & 255);
					this.a.push((a >>> 8) & 255);
					this.a.push((a >>> 16) & 255);
					this.a.push((a >>> 24) & 255);
				};
				S.prototype.writeInt32 = S.prototype.S;
				S.prototype.T = function (a) {
					n(a == Math.floor(a));
					n(-9223372036854775808 <= a && 0x7fffffffffffffff > a);
					A(a);
					this.A(y, z);
				};
				S.prototype.writeInt64 = S.prototype.T;
				S.prototype.ka = function (a) {
					n(a == Math.floor(a));
					n(-9223372036854775808 <= +a && 0x7fffffffffffffff > +a);
					C(H(a));
					this.A(y, z);
				};
				S.prototype.writeInt64String = S.prototype.ka;
				S.prototype.L = function (a) {
					n(
						Infinity === a || -Infinity === a || isNaN(a) || (-3.4028234663852886e38 <= a && 3.4028234663852886e38 >= a)
					);
					Ha(a);
					this.s(y);
				};
				S.prototype.writeFloat = S.prototype.L;
				S.prototype.J = function (a) {
					n(
						Infinity === a ||
							-Infinity === a ||
							isNaN(a) ||
							(-1.7976931348623157e308 <= a && 1.7976931348623157e308 >= a)
					);
					Ia(a);
					this.s(y);
					this.s(z);
				};
				S.prototype.writeDouble = S.prototype.J;
				S.prototype.I = function (a) {
					n('boolean' === typeof a || 'number' === typeof a);
					this.a.push(a ? 1 : 0);
				};
				S.prototype.writeBool = S.prototype.I;
				S.prototype.R = function (a) {
					n(a == Math.floor(a));
					n(-2147483648 <= a && 2147483648 > a);
					this.M(a);
				};
				S.prototype.writeEnum = S.prototype.R;
				S.prototype.ja = function (a) {
					this.a.push.apply(this.a, a);
				};
				S.prototype.writeBytes = S.prototype.ja;
				S.prototype.N = function (a) {
					C(a);
					this.l(y, z);
				};
				S.prototype.writeVarintHash64 = S.prototype.N;
				S.prototype.K = function (a) {
					C(a);
					this.s(y);
					this.s(z);
				};
				S.prototype.writeFixedHash64 = S.prototype.K;
				S.prototype.U = function (a) {
					var b = this.a.length;
					ta(a);
					for (var c = 0; c < a.length; c++) {
						var d = a.charCodeAt(c);
						if (128 > d) this.a.push(d);
						else if (2048 > d) (this.a.push((d >> 6) | 192), this.a.push((d & 63) | 128));
						else if (65536 > d)
							if (55296 <= d && 56319 >= d && c + 1 < a.length) {
								var f = a.charCodeAt(c + 1);
								56320 <= f &&
									57343 >= f &&
									((d = 1024 * (d - 55296) + f - 56320 + 65536),
									this.a.push((d >> 18) | 240),
									this.a.push(((d >> 12) & 63) | 128),
									this.a.push(((d >> 6) & 63) | 128),
									this.a.push((d & 63) | 128),
									c++);
							} else (this.a.push((d >> 12) | 224), this.a.push(((d >> 6) & 63) | 128), this.a.push((d & 63) | 128));
					}
					return this.a.length - b;
				};
				S.prototype.writeString = S.prototype.U;
				function T(a, b) {
					this.lo = a;
					this.hi = b;
				}
				g('jspb.arith.UInt64', T, void 0);
				T.prototype.cmp = function (a) {
					return this.hi < a.hi || (this.hi == a.hi && this.lo < a.lo)
						? -1
						: this.hi == a.hi && this.lo == a.lo
							? 0
							: 1;
				};
				T.prototype.cmp = T.prototype.cmp;
				T.prototype.La = function () {
					return new T(((this.lo >>> 1) | ((this.hi & 1) << 31)) >>> 0, (this.hi >>> 1) >>> 0);
				};
				T.prototype.rightShift = T.prototype.La;
				T.prototype.Da = function () {
					return new T((this.lo << 1) >>> 0, ((this.hi << 1) | (this.lo >>> 31)) >>> 0);
				};
				T.prototype.leftShift = T.prototype.Da;
				T.prototype.cb = function () {
					return !!(this.hi & 2147483648);
				};
				T.prototype.msb = T.prototype.cb;
				T.prototype.Ob = function () {
					return !!(this.lo & 1);
				};
				T.prototype.lsb = T.prototype.Ob;
				T.prototype.Ua = function () {
					return 0 == this.lo && 0 == this.hi;
				};
				T.prototype.zero = T.prototype.Ua;
				T.prototype.add = function (a) {
					return new T(
						(((this.lo + a.lo) & 4294967295) >>> 0) >>> 0,
						((((this.hi + a.hi) & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0)) >>> 0
					);
				};
				T.prototype.add = T.prototype.add;
				T.prototype.sub = function (a) {
					return new T(
						(((this.lo - a.lo) & 4294967295) >>> 0) >>> 0,
						((((this.hi - a.hi) & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0)) >>> 0
					);
				};
				T.prototype.sub = T.prototype.sub;
				function rb(a, b) {
					var c = a & 65535;
					a >>>= 16;
					var d = b & 65535,
						f = b >>> 16;
					b = c * d + 65536 * ((c * f) & 65535) + 65536 * ((a * d) & 65535);
					for (c = a * f + ((c * f) >>> 16) + ((a * d) >>> 16); 4294967296 <= b; ) ((b -= 4294967296), (c += 1));
					return new T(b >>> 0, c >>> 0);
				}
				T.mul32x32 = rb;
				T.prototype.eb = function (a) {
					var b = rb(this.lo, a);
					a = rb(this.hi, a);
					a.hi = a.lo;
					a.lo = 0;
					return b.add(a);
				};
				T.prototype.mul = T.prototype.eb;
				T.prototype.Xa = function (a) {
					if (0 == a) return [];
					var b = new T(0, 0),
						c = new T(this.lo, this.hi);
					a = new T(a, 0);
					for (var d = new T(1, 0); !a.cb(); ) ((a = a.Da()), (d = d.Da()));
					for (; !d.Ua(); ) (0 >= a.cmp(c) && ((b = b.add(d)), (c = c.sub(a))), (a = a.La()), (d = d.La()));
					return [b, c];
				};
				T.prototype.div = T.prototype.Xa;
				T.prototype.toString = function () {
					for (var a = '', b = this; !b.Ua(); ) {
						b = b.Xa(10);
						var c = b[0];
						a = b[1].lo + a;
						b = c;
					}
					'' == a && (a = '0');
					return a;
				};
				T.prototype.toString = T.prototype.toString;
				function U(a) {
					for (var b = new T(0, 0), c = new T(0, 0), d = 0; d < a.length; d++) {
						if ('0' > a[d] || '9' < a[d]) return null;
						c.lo = parseInt(a[d], 10);
						b = b.eb(10).add(c);
					}
					return b;
				}
				T.fromString = U;
				T.prototype.clone = function () {
					return new T(this.lo, this.hi);
				};
				T.prototype.clone = T.prototype.clone;
				function V(a, b) {
					this.lo = a;
					this.hi = b;
				}
				g('jspb.arith.Int64', V, void 0);
				V.prototype.add = function (a) {
					return new V(
						(((this.lo + a.lo) & 4294967295) >>> 0) >>> 0,
						((((this.hi + a.hi) & 4294967295) >>> 0) + (4294967296 <= this.lo + a.lo ? 1 : 0)) >>> 0
					);
				};
				V.prototype.add = V.prototype.add;
				V.prototype.sub = function (a) {
					return new V(
						(((this.lo - a.lo) & 4294967295) >>> 0) >>> 0,
						((((this.hi - a.hi) & 4294967295) >>> 0) - (0 > this.lo - a.lo ? 1 : 0)) >>> 0
					);
				};
				V.prototype.sub = V.prototype.sub;
				V.prototype.clone = function () {
					return new V(this.lo, this.hi);
				};
				V.prototype.clone = V.prototype.clone;
				V.prototype.toString = function () {
					var a = 0 != (this.hi & 2147483648),
						b = new T(this.lo, this.hi);
					a && (b = new T(0, 0).sub(b));
					return (a ? '-' : '') + b.toString();
				};
				V.prototype.toString = V.prototype.toString;
				function sb(a) {
					var b = 0 < a.length && '-' == a[0];
					b && (a = a.substring(1));
					a = U(a);
					if (null === a) return null;
					b && (a = new T(0, 0).sub(a));
					return new V(a.lo, a.hi);
				}
				V.fromString = sb;
				function W() {
					this.c = [];
					this.b = 0;
					this.a = new S();
					this.h = [];
				}
				g('jspb.BinaryWriter', W, void 0);
				function tb(a, b) {
					var c = a.a.end();
					a.c.push(c);
					a.c.push(b);
					a.b += c.length + b.length;
				}
				function X(a, b) {
					Y(a, b, 2);
					b = a.a.end();
					a.c.push(b);
					a.b += b.length;
					b.push(a.b);
					return b;
				}
				function Z(a, b) {
					var c = b.pop();
					c = a.b + a.a.length() - c;
					for (n(0 <= c); 127 < c; ) (b.push((c & 127) | 128), (c >>>= 7), a.b++);
					b.push(c);
					a.b++;
				}
				W.prototype.pb = function (a, b, c) {
					tb(this, a.subarray(b, c));
				};
				W.prototype.writeSerializedMessage = W.prototype.pb;
				W.prototype.Pb = function (a, b, c) {
					null != a && null != b && null != c && this.pb(a, b, c);
				};
				W.prototype.maybeWriteSerializedMessage = W.prototype.Pb;
				W.prototype.reset = function () {
					this.c = [];
					this.a.end();
					this.b = 0;
					this.h = [];
				};
				W.prototype.reset = W.prototype.reset;
				W.prototype.ab = function () {
					n(0 == this.h.length);
					for (var a = new Uint8Array(this.b + this.a.length()), b = this.c, c = b.length, d = 0, f = 0; f < c; f++) {
						var h = b[f];
						a.set(h, d);
						d += h.length;
					}
					b = this.a.end();
					a.set(b, d);
					d += b.length;
					n(d == a.length);
					this.c = [a];
					return a;
				};
				W.prototype.getResultBuffer = W.prototype.ab;
				W.prototype.Kb = function (a) {
					return Ba(this.ab(), a);
				};
				W.prototype.getResultBase64String = W.prototype.Kb;
				W.prototype.Va = function (a) {
					this.h.push(X(this, a));
				};
				W.prototype.beginSubMessage = W.prototype.Va;
				W.prototype.Ya = function () {
					n(0 <= this.h.length);
					Z(this, this.h.pop());
				};
				W.prototype.endSubMessage = W.prototype.Ya;
				function Y(a, b, c) {
					n(1 <= b && b == Math.floor(b));
					a.a.j(8 * b + c);
				}
				W.prototype.Nc = function (a, b, c) {
					switch (a) {
						case 1:
							this.J(b, c);
							break;
						case 2:
							this.L(b, c);
							break;
						case 3:
							this.T(b, c);
							break;
						case 4:
							this.V(b, c);
							break;
						case 5:
							this.S(b, c);
							break;
						case 6:
							this.Qa(b, c);
							break;
						case 7:
							this.Pa(b, c);
							break;
						case 8:
							this.I(b, c);
							break;
						case 9:
							this.U(b, c);
							break;
						case 10:
							p('Group field type not supported in writeAny()');
							break;
						case 11:
							p('Message field type not supported in writeAny()');
							break;
						case 12:
							this.ja(b, c);
							break;
						case 13:
							this.s(b, c);
							break;
						case 14:
							this.R(b, c);
							break;
						case 15:
							this.Ra(b, c);
							break;
						case 16:
							this.Sa(b, c);
							break;
						case 17:
							this.rb(b, c);
							break;
						case 18:
							this.sb(b, c);
							break;
						case 30:
							this.K(b, c);
							break;
						case 31:
							this.N(b, c);
							break;
						default:
							p('Invalid field type in writeAny()');
					}
				};
				W.prototype.writeAny = W.prototype.Nc;
				function ub(a, b, c) {
					null != c && (Y(a, b, 0), a.a.j(c));
				}
				function vb(a, b, c) {
					null != c && (Y(a, b, 0), a.a.M(c));
				}
				W.prototype.S = function (a, b) {
					null != b && (n(-2147483648 <= b && 2147483648 > b), vb(this, a, b));
				};
				W.prototype.writeInt32 = W.prototype.S;
				W.prototype.ob = function (a, b) {
					null != b && ((b = parseInt(b, 10)), n(-2147483648 <= b && 2147483648 > b), vb(this, a, b));
				};
				W.prototype.writeInt32String = W.prototype.ob;
				W.prototype.T = function (a, b) {
					null != b &&
						(n(-9223372036854775808 <= b && 0x7fffffffffffffff > b), null != b && (Y(this, a, 0), this.a.ua(b)));
				};
				W.prototype.writeInt64 = W.prototype.T;
				W.prototype.ka = function (a, b) {
					null != b && ((b = sb(b)), Y(this, a, 0), this.a.l(b.lo, b.hi));
				};
				W.prototype.writeInt64String = W.prototype.ka;
				W.prototype.s = function (a, b) {
					null != b && (n(0 <= b && 4294967296 > b), ub(this, a, b));
				};
				W.prototype.writeUint32 = W.prototype.s;
				W.prototype.ub = function (a, b) {
					null != b && ((b = parseInt(b, 10)), n(0 <= b && 4294967296 > b), ub(this, a, b));
				};
				W.prototype.writeUint32String = W.prototype.ub;
				W.prototype.V = function (a, b) {
					null != b && (n(0 <= b && 1.8446744073709552e19 > b), null != b && (Y(this, a, 0), this.a.va(b)));
				};
				W.prototype.writeUint64 = W.prototype.V;
				W.prototype.vb = function (a, b) {
					null != b && ((b = U(b)), Y(this, a, 0), this.a.l(b.lo, b.hi));
				};
				W.prototype.writeUint64String = W.prototype.vb;
				W.prototype.rb = function (a, b) {
					null != b && (n(-2147483648 <= b && 2147483648 > b), null != b && (Y(this, a, 0), this.a.wa(b)));
				};
				W.prototype.writeSint32 = W.prototype.rb;
				W.prototype.sb = function (a, b) {
					null != b &&
						(n(-9223372036854775808 <= b && 0x7fffffffffffffff > b), null != b && (Y(this, a, 0), this.a.xa(b)));
				};
				W.prototype.writeSint64 = W.prototype.sb;
				W.prototype.$d = function (a, b) {
					null != b && null != b && (Y(this, a, 0), this.a.W(b));
				};
				W.prototype.writeSintHash64 = W.prototype.$d;
				W.prototype.Zd = function (a, b) {
					null != b && null != b && (Y(this, a, 0), this.a.Ta(b));
				};
				W.prototype.writeSint64String = W.prototype.Zd;
				W.prototype.Pa = function (a, b) {
					null != b && (n(0 <= b && 4294967296 > b), Y(this, a, 5), this.a.s(b));
				};
				W.prototype.writeFixed32 = W.prototype.Pa;
				W.prototype.Qa = function (a, b) {
					null != b && (n(0 <= b && 1.8446744073709552e19 > b), Y(this, a, 1), this.a.V(b));
				};
				W.prototype.writeFixed64 = W.prototype.Qa;
				W.prototype.nb = function (a, b) {
					null != b && ((b = U(b)), Y(this, a, 1), this.a.A(b.lo, b.hi));
				};
				W.prototype.writeFixed64String = W.prototype.nb;
				W.prototype.Ra = function (a, b) {
					null != b && (n(-2147483648 <= b && 2147483648 > b), Y(this, a, 5), this.a.S(b));
				};
				W.prototype.writeSfixed32 = W.prototype.Ra;
				W.prototype.Sa = function (a, b) {
					null != b && (n(-9223372036854775808 <= b && 0x7fffffffffffffff > b), Y(this, a, 1), this.a.T(b));
				};
				W.prototype.writeSfixed64 = W.prototype.Sa;
				W.prototype.qb = function (a, b) {
					null != b && ((b = sb(b)), Y(this, a, 1), this.a.A(b.lo, b.hi));
				};
				W.prototype.writeSfixed64String = W.prototype.qb;
				W.prototype.L = function (a, b) {
					null != b && (Y(this, a, 5), this.a.L(b));
				};
				W.prototype.writeFloat = W.prototype.L;
				W.prototype.J = function (a, b) {
					null != b && (Y(this, a, 1), this.a.J(b));
				};
				W.prototype.writeDouble = W.prototype.J;
				W.prototype.I = function (a, b) {
					null != b && (n('boolean' === typeof b || 'number' === typeof b), Y(this, a, 0), this.a.I(b));
				};
				W.prototype.writeBool = W.prototype.I;
				W.prototype.R = function (a, b) {
					null != b && (n(-2147483648 <= b && 2147483648 > b), Y(this, a, 0), this.a.M(b));
				};
				W.prototype.writeEnum = W.prototype.R;
				W.prototype.U = function (a, b) {
					null != b && ((a = X(this, a)), this.a.U(b), Z(this, a));
				};
				W.prototype.writeString = W.prototype.U;
				W.prototype.ja = function (a, b) {
					null != b && ((b = Ua(b)), Y(this, a, 2), this.a.j(b.length), tb(this, b));
				};
				W.prototype.writeBytes = W.prototype.ja;
				W.prototype.Rc = function (a, b, c) {
					null != b && ((a = X(this, a)), c(b, this), Z(this, a));
				};
				W.prototype.writeMessage = W.prototype.Rc;
				W.prototype.Sc = function (a, b, c) {
					null != b &&
						(Y(this, 1, 3), Y(this, 2, 0), this.a.M(a), (a = X(this, 3)), c(b, this), Z(this, a), Y(this, 1, 4));
				};
				W.prototype.writeMessageSet = W.prototype.Sc;
				W.prototype.Oc = function (a, b, c) {
					null != b && (Y(this, a, 3), c(b, this), Y(this, a, 4));
				};
				W.prototype.writeGroup = W.prototype.Oc;
				W.prototype.K = function (a, b) {
					null != b && (n(8 == b.length), Y(this, a, 1), this.a.K(b));
				};
				W.prototype.writeFixedHash64 = W.prototype.K;
				W.prototype.N = function (a, b) {
					null != b && (n(8 == b.length), Y(this, a, 0), this.a.N(b));
				};
				W.prototype.writeVarintHash64 = W.prototype.N;
				W.prototype.A = function (a, b, c) {
					Y(this, a, 1);
					this.a.A(b, c);
				};
				W.prototype.writeSplitFixed64 = W.prototype.A;
				W.prototype.l = function (a, b, c) {
					Y(this, a, 0);
					this.a.l(b, c);
				};
				W.prototype.writeSplitVarint64 = W.prototype.l;
				W.prototype.tb = function (a, b, c) {
					Y(this, a, 0);
					var d = this.a;
					Ja(b, c, function (f, h) {
						d.l(f >>> 0, h >>> 0);
					});
				};
				W.prototype.writeSplitZigzagVarint64 = W.prototype.tb;
				W.prototype.Ed = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) vb(this, a, b[c]);
				};
				W.prototype.writeRepeatedInt32 = W.prototype.Ed;
				W.prototype.Fd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.ob(a, b[c]);
				};
				W.prototype.writeRepeatedInt32String = W.prototype.Fd;
				W.prototype.Gd = function (a, b) {
					if (null != b)
						for (var c = 0; c < b.length; c++) {
							var d = b[c];
							null != d && (Y(this, a, 0), this.a.ua(d));
						}
				};
				W.prototype.writeRepeatedInt64 = W.prototype.Gd;
				W.prototype.Qd = function (a, b, c, d) {
					if (null != b) for (var f = 0; f < b.length; f++) this.A(a, c(b[f]), d(b[f]));
				};
				W.prototype.writeRepeatedSplitFixed64 = W.prototype.Qd;
				W.prototype.Rd = function (a, b, c, d) {
					if (null != b) for (var f = 0; f < b.length; f++) this.l(a, c(b[f]), d(b[f]));
				};
				W.prototype.writeRepeatedSplitVarint64 = W.prototype.Rd;
				W.prototype.Sd = function (a, b, c, d) {
					if (null != b) for (var f = 0; f < b.length; f++) this.tb(a, c(b[f]), d(b[f]));
				};
				W.prototype.writeRepeatedSplitZigzagVarint64 = W.prototype.Sd;
				W.prototype.Hd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.ka(a, b[c]);
				};
				W.prototype.writeRepeatedInt64String = W.prototype.Hd;
				W.prototype.Ud = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) ub(this, a, b[c]);
				};
				W.prototype.writeRepeatedUint32 = W.prototype.Ud;
				W.prototype.Vd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.ub(a, b[c]);
				};
				W.prototype.writeRepeatedUint32String = W.prototype.Vd;
				W.prototype.Wd = function (a, b) {
					if (null != b)
						for (var c = 0; c < b.length; c++) {
							var d = b[c];
							null != d && (Y(this, a, 0), this.a.va(d));
						}
				};
				W.prototype.writeRepeatedUint64 = W.prototype.Wd;
				W.prototype.Xd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.vb(a, b[c]);
				};
				W.prototype.writeRepeatedUint64String = W.prototype.Xd;
				W.prototype.Md = function (a, b) {
					if (null != b)
						for (var c = 0; c < b.length; c++) {
							var d = b[c];
							null != d && (Y(this, a, 0), this.a.wa(d));
						}
				};
				W.prototype.writeRepeatedSint32 = W.prototype.Md;
				W.prototype.Nd = function (a, b) {
					if (null != b)
						for (var c = 0; c < b.length; c++) {
							var d = b[c];
							null != d && (Y(this, a, 0), this.a.xa(d));
						}
				};
				W.prototype.writeRepeatedSint64 = W.prototype.Nd;
				W.prototype.Od = function (a, b) {
					if (null != b)
						for (var c = 0; c < b.length; c++) {
							var d = b[c];
							null != d && (Y(this, a, 0), this.a.Ta(d));
						}
				};
				W.prototype.writeRepeatedSint64String = W.prototype.Od;
				W.prototype.Pd = function (a, b) {
					if (null != b)
						for (var c = 0; c < b.length; c++) {
							var d = b[c];
							null != d && (Y(this, a, 0), this.a.W(d));
						}
				};
				W.prototype.writeRepeatedSintHash64 = W.prototype.Pd;
				W.prototype.yd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.Pa(a, b[c]);
				};
				W.prototype.writeRepeatedFixed32 = W.prototype.yd;
				W.prototype.zd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.Qa(a, b[c]);
				};
				W.prototype.writeRepeatedFixed64 = W.prototype.zd;
				W.prototype.Ad = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.nb(a, b[c]);
				};
				W.prototype.writeRepeatedFixed64String = W.prototype.Ad;
				W.prototype.Jd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.Ra(a, b[c]);
				};
				W.prototype.writeRepeatedSfixed32 = W.prototype.Jd;
				W.prototype.Kd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.Sa(a, b[c]);
				};
				W.prototype.writeRepeatedSfixed64 = W.prototype.Kd;
				W.prototype.Ld = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.qb(a, b[c]);
				};
				W.prototype.writeRepeatedSfixed64String = W.prototype.Ld;
				W.prototype.Cd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.L(a, b[c]);
				};
				W.prototype.writeRepeatedFloat = W.prototype.Cd;
				W.prototype.wd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.J(a, b[c]);
				};
				W.prototype.writeRepeatedDouble = W.prototype.wd;
				W.prototype.ud = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.I(a, b[c]);
				};
				W.prototype.writeRepeatedBool = W.prototype.ud;
				W.prototype.xd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.R(a, b[c]);
				};
				W.prototype.writeRepeatedEnum = W.prototype.xd;
				W.prototype.Td = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.U(a, b[c]);
				};
				W.prototype.writeRepeatedString = W.prototype.Td;
				W.prototype.vd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.ja(a, b[c]);
				};
				W.prototype.writeRepeatedBytes = W.prototype.vd;
				W.prototype.Id = function (a, b, c) {
					if (null != b)
						for (var d = 0; d < b.length; d++) {
							var f = X(this, a);
							c(b[d], this);
							Z(this, f);
						}
				};
				W.prototype.writeRepeatedMessage = W.prototype.Id;
				W.prototype.Dd = function (a, b, c) {
					if (null != b) for (var d = 0; d < b.length; d++) (Y(this, a, 3), c(b[d], this), Y(this, a, 4));
				};
				W.prototype.writeRepeatedGroup = W.prototype.Dd;
				W.prototype.Bd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.K(a, b[c]);
				};
				W.prototype.writeRepeatedFixedHash64 = W.prototype.Bd;
				W.prototype.Yd = function (a, b) {
					if (null != b) for (var c = 0; c < b.length; c++) this.N(a, b[c]);
				};
				W.prototype.writeRepeatedVarintHash64 = W.prototype.Yd;
				W.prototype.ad = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.M(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedInt32 = W.prototype.ad;
				W.prototype.bd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.M(parseInt(b[c], 10));
						Z(this, a);
					}
				};
				W.prototype.writePackedInt32String = W.prototype.bd;
				W.prototype.cd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.ua(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedInt64 = W.prototype.cd;
				W.prototype.md = function (a, b, c, d) {
					if (null != b) {
						a = X(this, a);
						for (var f = 0; f < b.length; f++) this.a.A(c(b[f]), d(b[f]));
						Z(this, a);
					}
				};
				W.prototype.writePackedSplitFixed64 = W.prototype.md;
				W.prototype.nd = function (a, b, c, d) {
					if (null != b) {
						a = X(this, a);
						for (var f = 0; f < b.length; f++) this.a.l(c(b[f]), d(b[f]));
						Z(this, a);
					}
				};
				W.prototype.writePackedSplitVarint64 = W.prototype.nd;
				W.prototype.od = function (a, b, c, d) {
					if (null != b) {
						a = X(this, a);
						for (var f = this.a, h = 0; h < b.length; h++)
							Ja(c(b[h]), d(b[h]), function (m, t) {
								f.l(m >>> 0, t >>> 0);
							});
						Z(this, a);
					}
				};
				W.prototype.writePackedSplitZigzagVarint64 = W.prototype.od;
				W.prototype.dd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) {
							var d = sb(b[c]);
							this.a.l(d.lo, d.hi);
						}
						Z(this, a);
					}
				};
				W.prototype.writePackedInt64String = W.prototype.dd;
				W.prototype.pd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.j(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedUint32 = W.prototype.pd;
				W.prototype.qd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.j(parseInt(b[c], 10));
						Z(this, a);
					}
				};
				W.prototype.writePackedUint32String = W.prototype.qd;
				W.prototype.rd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.va(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedUint64 = W.prototype.rd;
				W.prototype.sd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) {
							var d = U(b[c]);
							this.a.l(d.lo, d.hi);
						}
						Z(this, a);
					}
				};
				W.prototype.writePackedUint64String = W.prototype.sd;
				W.prototype.hd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.wa(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedSint32 = W.prototype.hd;
				W.prototype.jd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.xa(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedSint64 = W.prototype.jd;
				W.prototype.kd = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.W(H(b[c]));
						Z(this, a);
					}
				};
				W.prototype.writePackedSint64String = W.prototype.kd;
				W.prototype.ld = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.W(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedSintHash64 = W.prototype.ld;
				W.prototype.Wc = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(4 * b.length), a = 0; a < b.length; a++) this.a.s(b[a]);
				};
				W.prototype.writePackedFixed32 = W.prototype.Wc;
				W.prototype.Xc = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++) this.a.V(b[a]);
				};
				W.prototype.writePackedFixed64 = W.prototype.Xc;
				W.prototype.Yc = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++) {
							var c = U(b[a]);
							this.a.A(c.lo, c.hi);
						}
				};
				W.prototype.writePackedFixed64String = W.prototype.Yc;
				W.prototype.ed = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(4 * b.length), a = 0; a < b.length; a++) this.a.S(b[a]);
				};
				W.prototype.writePackedSfixed32 = W.prototype.ed;
				W.prototype.fd = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++) this.a.T(b[a]);
				};
				W.prototype.writePackedSfixed64 = W.prototype.fd;
				W.prototype.gd = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++) this.a.ka(b[a]);
				};
				W.prototype.writePackedSfixed64String = W.prototype.gd;
				W.prototype.$c = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(4 * b.length), a = 0; a < b.length; a++) this.a.L(b[a]);
				};
				W.prototype.writePackedFloat = W.prototype.$c;
				W.prototype.Uc = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++) this.a.J(b[a]);
				};
				W.prototype.writePackedDouble = W.prototype.Uc;
				W.prototype.Tc = function (a, b) {
					if (null != b && b.length) for (Y(this, a, 2), this.a.j(b.length), a = 0; a < b.length; a++) this.a.I(b[a]);
				};
				W.prototype.writePackedBool = W.prototype.Tc;
				W.prototype.Vc = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.R(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedEnum = W.prototype.Vc;
				W.prototype.Zc = function (a, b) {
					if (null != b && b.length)
						for (Y(this, a, 2), this.a.j(8 * b.length), a = 0; a < b.length; a++) this.a.K(b[a]);
				};
				W.prototype.writePackedFixedHash64 = W.prototype.Zc;
				W.prototype.td = function (a, b) {
					if (null != b && b.length) {
						a = X(this, a);
						for (var c = 0; c < b.length; c++) this.a.N(b[c]);
						Z(this, a);
					}
				};
				W.prototype.writePackedVarintHash64 = W.prototype.td;
				true &&
					((exports.debug = R),
					(exports.Map = r),
					(exports.Message = N),
					(exports.BinaryReader = J),
					(exports.BinaryWriter = W),
					(exports.ExtensionFieldInfo = Ya),
					(exports.ExtensionFieldBinaryInfo = Za),
					(exports.exportSymbol = ma),
					(exports.inherits = na),
					(exports.object = { extend: pa }),
					(exports.typeOf = k));

				/***/
			},

		/***/ './node_modules/google-protobuf/google/protobuf/empty_pb.js':
			/*!******************************************************************!*\
  !*** ./node_modules/google-protobuf/google/protobuf/empty_pb.js ***!
  \******************************************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				// source: google/protobuf/empty.proto
				/**
				 * @fileoverview
				 * @enhanceable
				 * @suppress {missingRequire} reports error on implicit type usages.
				 * @suppress {messageConventions} JS Compiler reports an error if a variable or
				 *     field starts with 'MSG_' and isn't a translatable message.
				 * @public
				 */
				// GENERATED CODE -- DO NOT EDIT!
				/* eslint-disable */
				// @ts-nocheck

				var jspb = __webpack_require__(/*! google-protobuf */ './node_modules/google-protobuf/google-protobuf.js');
				var goog = jspb;
				var global =
					(typeof globalThis !== 'undefined' && globalThis) ||
					(typeof window !== 'undefined' && window) ||
					(typeof global !== 'undefined' && global) ||
					(typeof self !== 'undefined' && self) ||
					function () {
						return this;
					}.call(null) ||
					Function('return this')();

				goog.exportSymbol('proto.google.protobuf.Empty', null, global);
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.google.protobuf.Empty = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, null, null);
				};
				goog.inherits(proto.google.protobuf.Empty, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.google.protobuf.Empty.displayName = 'proto.google.protobuf.Empty';
				}

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.google.protobuf.Empty.prototype.toObject = function (opt_includeInstance) {
						return proto.google.protobuf.Empty.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.google.protobuf.Empty} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.google.protobuf.Empty.toObject = function (includeInstance, msg) {
						var f,
							obj = {};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.google.protobuf.Empty}
				 */
				proto.google.protobuf.Empty.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.google.protobuf.Empty();
					return proto.google.protobuf.Empty.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.google.protobuf.Empty} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.google.protobuf.Empty}
				 */
				proto.google.protobuf.Empty.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.google.protobuf.Empty.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.google.protobuf.Empty.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.google.protobuf.Empty} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.google.protobuf.Empty.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
				};

				goog.object.extend(exports, proto.google.protobuf);

				/***/
			},

		/***/ './node_modules/google-protobuf/google/protobuf/timestamp_pb.js':
			/*!**********************************************************************!*\
  !*** ./node_modules/google-protobuf/google/protobuf/timestamp_pb.js ***!
  \**********************************************************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				// source: google/protobuf/timestamp.proto
				/**
				 * @fileoverview
				 * @enhanceable
				 * @suppress {missingRequire} reports error on implicit type usages.
				 * @suppress {messageConventions} JS Compiler reports an error if a variable or
				 *     field starts with 'MSG_' and isn't a translatable message.
				 * @public
				 */
				// GENERATED CODE -- DO NOT EDIT!
				/* eslint-disable */
				// @ts-nocheck

				var jspb = __webpack_require__(/*! google-protobuf */ './node_modules/google-protobuf/google-protobuf.js');
				var goog = jspb;
				var global =
					(typeof globalThis !== 'undefined' && globalThis) ||
					(typeof window !== 'undefined' && window) ||
					(typeof global !== 'undefined' && global) ||
					(typeof self !== 'undefined' && self) ||
					function () {
						return this;
					}.call(null) ||
					Function('return this')();

				goog.exportSymbol('proto.google.protobuf.Timestamp', null, global);
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.google.protobuf.Timestamp = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, null, null);
				};
				goog.inherits(proto.google.protobuf.Timestamp, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.google.protobuf.Timestamp.displayName = 'proto.google.protobuf.Timestamp';
				}

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.google.protobuf.Timestamp.prototype.toObject = function (opt_includeInstance) {
						return proto.google.protobuf.Timestamp.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.google.protobuf.Timestamp} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.google.protobuf.Timestamp.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								seconds: jspb.Message.getFieldWithDefault(msg, 1, 0),
								nanos: jspb.Message.getFieldWithDefault(msg, 2, 0)
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.google.protobuf.Timestamp}
				 */
				proto.google.protobuf.Timestamp.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.google.protobuf.Timestamp();
					return proto.google.protobuf.Timestamp.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.google.protobuf.Timestamp} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.google.protobuf.Timestamp}
				 */
				proto.google.protobuf.Timestamp.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = /** @type {number} */ (reader.readInt64());
								msg.setSeconds(value);
								break;
							case 2:
								var value = /** @type {number} */ (reader.readInt32());
								msg.setNanos(value);
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.google.protobuf.Timestamp.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.google.protobuf.Timestamp.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.google.protobuf.Timestamp} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.google.protobuf.Timestamp.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getSeconds();
					if (f !== 0) {
						writer.writeInt64(1, f);
					}
					f = message.getNanos();
					if (f !== 0) {
						writer.writeInt32(2, f);
					}
				};

				/**
				 * optional int64 seconds = 1;
				 * @return {number}
				 */
				proto.google.protobuf.Timestamp.prototype.getSeconds = function () {
					return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
				};

				/**
				 * @param {number} value
				 * @return {!proto.google.protobuf.Timestamp} returns this
				 */
				proto.google.protobuf.Timestamp.prototype.setSeconds = function (value) {
					return jspb.Message.setProto3IntField(this, 1, value);
				};

				/**
				 * optional int32 nanos = 2;
				 * @return {number}
				 */
				proto.google.protobuf.Timestamp.prototype.getNanos = function () {
					return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
				};

				/**
				 * @param {number} value
				 * @return {!proto.google.protobuf.Timestamp} returns this
				 */
				proto.google.protobuf.Timestamp.prototype.setNanos = function (value) {
					return jspb.Message.setProto3IntField(this, 2, value);
				};

				goog.object.extend(exports, proto.google.protobuf);
				/* This code will be inserted into generated code for
				 * google/protobuf/timestamp.proto. */

				/**
				 * Returns a JavaScript 'Date' object corresponding to this Timestamp.
				 * @return {!Date}
				 */
				proto.google.protobuf.Timestamp.prototype.toDate = function () {
					var seconds = this.getSeconds();
					var nanos = this.getNanos();

					return new Date(seconds * 1000 + nanos / 1000000);
				};

				/**
				 * Sets the value of this Timestamp object to be the given Date.
				 * @param {!Date} value The value to set.
				 */
				proto.google.protobuf.Timestamp.prototype.fromDate = function (value) {
					this.setSeconds(Math.floor(value.getTime() / 1000));
					this.setNanos(value.getMilliseconds() * 1000000);
				};

				/**
				 * Factory method that returns a Timestamp object with value equal to
				 * the given Date.
				 * @param {!Date} value The value to set.
				 * @return {!proto.google.protobuf.Timestamp}
				 */
				proto.google.protobuf.Timestamp.fromDate = function (value) {
					var timestamp = new proto.google.protobuf.Timestamp();
					timestamp.fromDate(value);
					return timestamp;
				};

				/***/
			},

		/***/ './node_modules/grpc-web/index.js':
			/*!****************************************!*\
  !*** ./node_modules/grpc-web/index.js ***!
  \****************************************/
			/***/ function (module, __unused_webpack_exports, __webpack_require__) {
				/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
				var n;
				function aa(a) {
					var b = 0;
					return function () {
						return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
					};
				}
				var ba =
					'function' == typeof Object.defineProperties
						? Object.defineProperty
						: function (a, b, c) {
								a != Array.prototype && a != Object.prototype && (a[b] = c.value);
							};
				function ca(a) {
					a = [
						'object' == typeof window && window,
						'object' == typeof self && self,
						'object' == typeof __webpack_require__.g && __webpack_require__.g,
						a
					];
					for (var b = 0; b < a.length; ++b) {
						var c = a[b];
						if (c && c.Math == Math) return c;
					}
					throw Error('Cannot find global object');
				}
				var r = ca(this);
				function t() {
					t = function () {};
					r.Symbol || (r.Symbol = da);
				}
				function ea(a, b) {
					this.a = a;
					ba(this, 'description', { configurable: !0, writable: !0, value: b });
				}
				ea.prototype.toString = function () {
					return this.a;
				};
				var da = (function () {
					function a(c) {
						if (this instanceof a) throw new TypeError('Symbol is not a constructor');
						return new ea('jscomp_symbol_' + (c || '') + '_' + b++, c);
					}
					var b = 0;
					return a;
				})();
				function u() {
					t();
					var a = r.Symbol.iterator;
					a || (a = r.Symbol.iterator = r.Symbol('Symbol.iterator'));
					'function' != typeof Array.prototype[a] &&
						ba(Array.prototype, a, {
							configurable: !0,
							writable: !0,
							value: function () {
								return fa(aa(this));
							}
						});
					u = function () {};
				}
				function fa(a) {
					u();
					a = { next: a };
					a[r.Symbol.iterator] = function () {
						return this;
					};
					return a;
				}
				function ha(a) {
					var b = 'undefined' != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
					return b ? b.call(a) : { next: aa(a) };
				}
				var ia =
						'function' == typeof Object.create
							? Object.create
							: function (a) {
									function b() {}
									b.prototype = a;
									return new b();
								},
					ja;
				if ('function' == typeof Object.setPrototypeOf) ja = Object.setPrototypeOf;
				else {
					var ka;
					a: {
						var la = { V: !0 },
							ma = {};
						try {
							ma.__proto__ = la;
							ka = ma.V;
							break a;
						} catch (a) {}
						ka = !1;
					}
					ja = ka
						? function (a, b) {
								a.__proto__ = b;
								if (a.__proto__ !== b) throw new TypeError(a + ' is not extensible');
								return a;
							}
						: null;
				}
				var na = ja;
				function oa(a, b) {
					a.prototype = ia(b.prototype);
					a.prototype.constructor = a;
					if (na) na(a, b);
					else
						for (var c in b)
							if ('prototype' != c)
								if (Object.defineProperties) {
									var d = Object.getOwnPropertyDescriptor(b, c);
									d && Object.defineProperty(a, c, d);
								} else a[c] = b[c];
					a.O = b.prototype;
				}
				function pa(a, b) {
					u();
					a instanceof String && (a += '');
					var c = 0,
						d = {
							next: function () {
								if (c < a.length) {
									var f = c++;
									return { value: b(f, a[f]), done: !1 };
								}
								d.next = function () {
									return { done: !0, value: void 0 };
								};
								return d.next();
							}
						};
					d[Symbol.iterator] = function () {
						return d;
					};
					return d;
				}
				function v(a, b) {
					if (b) {
						var c = r;
						a = a.split('.');
						for (var d = 0; d < a.length - 1; d++) {
							var f = a[d];
							f in c || (c[f] = {});
							c = c[f];
						}
						a = a[a.length - 1];
						d = c[a];
						b = b(d);
						b != d && null != b && ba(c, a, { configurable: !0, writable: !0, value: b });
					}
				}
				v('Array.prototype.keys', function (a) {
					return a
						? a
						: function () {
								return pa(this, function (b) {
									return b;
								});
							};
				});
				v('Array.prototype.find', function (a) {
					return a
						? a
						: function (b, c) {
								a: {
									var d = this;
									d instanceof String && (d = String(d));
									for (var f = d.length, g = 0; g < f; g++) {
										var e = d[g];
										if (b.call(c, e, g, d)) {
											b = e;
											break a;
										}
									}
									b = void 0;
								}
								return b;
							};
				});
				v('Object.is', function (a) {
					return a
						? a
						: function (b, c) {
								return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
							};
				});
				v('Array.prototype.includes', function (a) {
					return a
						? a
						: function (b, c) {
								var d = this;
								d instanceof String && (d = String(d));
								var f = d.length;
								c = c || 0;
								for (0 > c && (c = Math.max(c + f, 0)); c < f; c++) {
									var g = d[c];
									if (g === b || Object.is(g, b)) return !0;
								}
								return !1;
							};
				});
				v('Promise', function (a) {
					function b(e) {
						this.b = 0;
						this.c = void 0;
						this.a = [];
						var h = this.f();
						try {
							e(h.resolve, h.reject);
						} catch (k) {
							h.reject(k);
						}
					}
					function c() {
						this.a = null;
					}
					function d(e) {
						return e instanceof b
							? e
							: new b(function (h) {
									h(e);
								});
					}
					if (a) return a;
					c.prototype.b = function (e) {
						if (null == this.a) {
							this.a = [];
							var h = this;
							this.c(function () {
								h.g();
							});
						}
						this.a.push(e);
					};
					var f = r.setTimeout;
					c.prototype.c = function (e) {
						f(e, 0);
					};
					c.prototype.g = function () {
						for (; this.a && this.a.length; ) {
							var e = this.a;
							this.a = [];
							for (var h = 0; h < e.length; ++h) {
								var k = e[h];
								e[h] = null;
								try {
									k();
								} catch (l) {
									this.f(l);
								}
							}
						}
						this.a = null;
					};
					c.prototype.f = function (e) {
						this.c(function () {
							throw e;
						});
					};
					b.prototype.f = function () {
						function e(l) {
							return function (m) {
								k || ((k = !0), l.call(h, m));
							};
						}
						var h = this,
							k = !1;
						return { resolve: e(this.s), reject: e(this.g) };
					};
					b.prototype.s = function (e) {
						if (e === this) this.g(new TypeError('A Promise cannot resolve to itself'));
						else if (e instanceof b) this.v(e);
						else {
							a: switch (typeof e) {
								case 'object':
									var h = null != e;
									break a;
								case 'function':
									h = !0;
									break a;
								default:
									h = !1;
							}
							h ? this.m(e) : this.h(e);
						}
					};
					b.prototype.m = function (e) {
						var h = void 0;
						try {
							h = e.then;
						} catch (k) {
							this.g(k);
							return;
						}
						'function' == typeof h ? this.w(h, e) : this.h(e);
					};
					b.prototype.g = function (e) {
						this.i(2, e);
					};
					b.prototype.h = function (e) {
						this.i(1, e);
					};
					b.prototype.i = function (e, h) {
						if (0 != this.b)
							throw Error('Cannot settle(' + e + ', ' + h + '): Promise already settled in state' + this.b);
						this.b = e;
						this.c = h;
						this.l();
					};
					b.prototype.l = function () {
						if (null != this.a) {
							for (var e = 0; e < this.a.length; ++e) g.b(this.a[e]);
							this.a = null;
						}
					};
					var g = new c();
					b.prototype.v = function (e) {
						var h = this.f();
						e.F(h.resolve, h.reject);
					};
					b.prototype.w = function (e, h) {
						var k = this.f();
						try {
							e.call(h, k.resolve, k.reject);
						} catch (l) {
							k.reject(l);
						}
					};
					b.prototype.then = function (e, h) {
						function k(q, w) {
							return 'function' == typeof q
								? function (A) {
										try {
											l(q(A));
										} catch (L) {
											m(L);
										}
									}
								: w;
						}
						var l,
							m,
							p = new b(function (q, w) {
								l = q;
								m = w;
							});
						this.F(k(e, l), k(h, m));
						return p;
					};
					b.prototype.catch = function (e) {
						return this.then(void 0, e);
					};
					b.prototype.F = function (e, h) {
						function k() {
							switch (l.b) {
								case 1:
									e(l.c);
									break;
								case 2:
									h(l.c);
									break;
								default:
									throw Error('Unexpected state: ' + l.b);
							}
						}
						var l = this;
						null == this.a ? g.b(k) : this.a.push(k);
					};
					b.resolve = d;
					b.reject = function (e) {
						return new b(function (h, k) {
							k(e);
						});
					};
					b.race = function (e) {
						return new b(function (h, k) {
							for (var l = ha(e), m = l.next(); !m.done; m = l.next()) d(m.value).F(h, k);
						});
					};
					b.all = function (e) {
						var h = ha(e),
							k = h.next();
						return k.done
							? d([])
							: new b(function (l, m) {
									function p(A) {
										return function (L) {
											q[A] = L;
											w--;
											0 == w && l(q);
										};
									}
									var q = [],
										w = 0;
									do (q.push(void 0), w++, d(k.value).F(p(q.length - 1), m), (k = h.next()));
									while (!k.done);
								});
					};
					return b;
				});
				var qa = qa || {},
					x = this || self;
				function y(a, b) {
					a = a.split('.');
					b = b || x;
					for (var c = 0; c < a.length; c++) if (((b = b[a[c]]), null == b)) return null;
					return b;
				}
				function ra() {}
				function sa(a) {
					var b = typeof a;
					return ('object' == b && null != a) || 'function' == b;
				}
				var ta = 'closure_uid_' + ((1e9 * Math.random()) >>> 0),
					ua = 0;
				function va(a, b, c) {
					return a.call.apply(a.bind, arguments);
				}
				function wa(a, b, c) {
					if (!a) throw Error();
					if (2 < arguments.length) {
						var d = Array.prototype.slice.call(arguments, 2);
						return function () {
							var f = Array.prototype.slice.call(arguments);
							Array.prototype.unshift.apply(f, d);
							return a.apply(b, f);
						};
					}
					return function () {
						return a.apply(b, arguments);
					};
				}
				function z(a, b, c) {
					Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code')
						? (z = va)
						: (z = wa);
					return z.apply(null, arguments);
				}
				function B(a, b) {
					function c() {}
					c.prototype = b.prototype;
					a.O = b.prototype;
					a.prototype = new c();
					a.prototype.constructor = a;
				}
				function xa(a) {
					this.a = a || {};
				}
				xa.prototype.get = function (a) {
					return this.a[a];
				};
				xa.prototype.G = function () {
					return Object.keys(this.a);
				};
				function C(a, b, c, d) {
					this.f = a;
					this.c = b;
					this.b = c;
					this.a = d;
				}
				C.prototype.getRequestMessage = function () {
					return this.f;
				};
				C.prototype.getMethodDescriptor = function () {
					return this.c;
				};
				C.prototype.getMetadata = function () {
					return this.b;
				};
				C.prototype.getCallOptions = function () {
					return this.a;
				};
				function D(a, b, c, d) {
					c = void 0 === c ? {} : c;
					this.c = a;
					this.a = c;
					this.b = b;
					this.f = void 0 === d ? null : d;
				}
				D.prototype.getResponseMessage = function () {
					return this.c;
				};
				D.prototype.getMetadata = function () {
					return this.a;
				};
				D.prototype.getMethodDescriptor = function () {
					return this.b;
				};
				D.prototype.getStatus = function () {
					return this.f;
				};
				function ya(a, b, c, d, f, g) {
					this.name = a;
					this.a = f;
					this.b = g;
				}
				function za(a, b, c) {
					c = void 0 === c ? {} : c;
					var d = void 0 === d ? new xa() : d;
					return new C(b, a, c, d);
				}
				ya.prototype.getName = function () {
					return this.name;
				};
				ya.prototype.getName = ya.prototype.getName;
				function Aa(a) {
					switch (a) {
						case 200:
							return 0;
						case 400:
							return 3;
						case 401:
							return 16;
						case 403:
							return 7;
						case 404:
							return 5;
						case 409:
							return 10;
						case 412:
							return 9;
						case 429:
							return 8;
						case 499:
							return 1;
						case 500:
							return 2;
						case 501:
							return 12;
						case 503:
							return 14;
						case 504:
							return 4;
						default:
							return 2;
					}
				}
				function Ba(a) {
					switch (a) {
						case 0:
							return 'OK';
						case 1:
							return 'CANCELLED';
						case 2:
							return 'UNKNOWN';
						case 3:
							return 'INVALID_ARGUMENT';
						case 4:
							return 'DEADLINE_EXCEEDED';
						case 5:
							return 'NOT_FOUND';
						case 6:
							return 'ALREADY_EXISTS';
						case 7:
							return 'PERMISSION_DENIED';
						case 16:
							return 'UNAUTHENTICATED';
						case 8:
							return 'RESOURCE_EXHAUSTED';
						case 9:
							return 'FAILED_PRECONDITION';
						case 10:
							return 'ABORTED';
						case 11:
							return 'OUT_OF_RANGE';
						case 12:
							return 'UNIMPLEMENTED';
						case 13:
							return 'INTERNAL';
						case 14:
							return 'UNAVAILABLE';
						case 15:
							return 'DATA_LOSS';
						default:
							return '';
					}
				}
				function E(a, b, c) {
					c = void 0 === c ? {} : c;
					b = Error.call(this, b);
					this.message = b.message;
					'stack' in b && (this.stack = b.stack);
					this.code = a;
					this.metadata = c;
				}
				oa(E, Error);
				E.prototype.toString = function () {
					var a = 'RpcError(' + (Ba(this.code) || String(this.code)) + ')';
					this.message && (a += ': ' + this.message);
					return a;
				};
				E.prototype.name = 'RpcError';
				function Ca(a) {
					this.a = a;
				}
				Ca.prototype.on = function (a, b) {
					return 'data' == a || 'error' == a ? this : this.a.on(a, b);
				};
				Ca.prototype.removeListener = function (a, b) {
					return this.a.removeListener(a, b);
				};
				Ca.prototype.cancel = function () {
					this.a.cancel();
				};
				function Da(a) {
					switch (a) {
						case 0:
							return 'No Error';
						case 1:
							return 'Access denied to content document';
						case 2:
							return 'File not found';
						case 3:
							return 'Firefox silently errored';
						case 4:
							return 'Application custom error';
						case 5:
							return 'An exception occurred';
						case 6:
							return 'Http response at 400 or 500 level';
						case 7:
							return 'Request was aborted';
						case 8:
							return 'Request timed out';
						case 9:
							return 'The resource is not available offline';
						default:
							return 'Unrecognized error code';
					}
				}
				function F(a) {
					if (Error.captureStackTrace) Error.captureStackTrace(this, F);
					else {
						var b = Error().stack;
						b && (this.stack = b);
					}
					a && (this.message = String(a));
				}
				B(F, Error);
				F.prototype.name = 'CustomError';
				function Ea(a, b) {
					a = a.split('%s');
					for (var c = '', d = a.length - 1, f = 0; f < d; f++) c += a[f] + (f < b.length ? b[f] : '%s');
					F.call(this, c + a[d]);
				}
				B(Ea, F);
				Ea.prototype.name = 'AssertionError';
				function Fa(a, b) {
					throw new Ea('Failure' + (a ? ': ' + a : ''), Array.prototype.slice.call(arguments, 1));
				}
				function Ga() {
					this.l = null;
					this.i = [];
					this.m = 0;
					this.b = Ha;
					this.f = this.a = this.h = 0;
					this.c = null;
					this.g = 0;
				}
				function Ia(a, b) {
					function c(l) {
						l == Ja ? (e.h = l) : l == G ? (e.h = l) : Ka(e, h, k, 'invalid frame byte');
						e.b = La;
						e.a = 0;
						e.f = 0;
					}
					function d(l) {
						e.f++;
						e.a = (e.a << 8) + l;
						4 == e.f &&
							((e.b = Ma),
							(e.g = 0),
							'undefined' !== typeof Uint8Array ? (e.c = new Uint8Array(e.a)) : (e.c = Array(e.a)),
							0 == e.a && g());
					}
					function f(l) {
						e.c[e.g++] = l;
						e.g == e.a && g();
					}
					function g() {
						var l = {};
						l[e.h] = e.c;
						e.i.push(l);
						e.b = Ha;
					}
					var e = a,
						h,
						k = 0;
					for (b instanceof Uint8Array || b instanceof Array ? (h = b) : (h = new Uint8Array(b)); k < h.length; ) {
						switch (e.b) {
							case Na:
								Ka(e, h, k, 'stream already broken');
								break;
							case Ha:
								c(h[k]);
								break;
							case La:
								d(h[k]);
								break;
							case Ma:
								f(h[k]);
								break;
							default:
								throw Error('unexpected parser state: ' + e.b);
						}
						e.m++;
						k++;
					}
					a = e.i;
					e.i = [];
					return 0 < a.length ? a : null;
				}
				var Ha = 0,
					La = 1,
					Ma = 2,
					Na = 3,
					Ja = 0,
					G = 128;
				function Ka(a, b, c, d) {
					a.b = Na;
					a.l = 'The stream is broken @' + a.m + '/' + c + '. Error: ' + d + '. With input:\n' + b;
					throw Error(a.l);
				}
				var Oa = Array.prototype.indexOf
					? function (a, b) {
							return Array.prototype.indexOf.call(a, b, void 0);
						}
					: function (a, b) {
							if ('string' === typeof a) return 'string' !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
							for (var c = 0; c < a.length; c++) if (c in a && a[c] === b) return c;
							return -1;
						};
				var Pa = String.prototype.trim
					? function (a) {
							return a.trim();
						}
					: function (a) {
							return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
						};
				function H(a, b) {
					return -1 != a.indexOf(b);
				}
				function Qa(a, b) {
					return a < b ? -1 : a > b ? 1 : 0;
				}
				var I;
				a: {
					var Ra = x.navigator;
					if (Ra) {
						var Sa = Ra.userAgent;
						if (Sa) {
							I = Sa;
							break a;
						}
					}
					I = '';
				}
				function Ta(a, b) {
					for (var c in a) b.call(void 0, a[c], c, a);
				}
				function Ua(a, b) {
					var c = {},
						d;
					for (d in a) c[d] = b.call(void 0, a[d], d, a);
					return c;
				}
				var Va = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(
					' '
				);
				function Wa(a, b) {
					for (var c, d, f = 1; f < arguments.length; f++) {
						d = arguments[f];
						for (c in d) a[c] = d[c];
						for (var g = 0; g < Va.length; g++)
							((c = Va[g]), Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]));
					}
				}
				function Xa(a) {
					var b = 1;
					a = a.split(':');
					for (var c = []; 0 < b && a.length; ) (c.push(a.shift()), b--);
					a.length && c.push(a.join(':'));
					return c;
				}
				function Ya(a) {
					Ya[' '](a);
					return a;
				}
				Ya[' '] = ra;
				function Za(a) {
					var b = $a;
					return Object.prototype.hasOwnProperty.call(b, 9) ? b[9] : (b[9] = a(9));
				}
				var ab = H(I, 'Opera'),
					bb = H(I, 'Trident') || H(I, 'MSIE'),
					cb = H(I, 'Edge'),
					db =
						H(I, 'Gecko') &&
						!(H(I.toLowerCase(), 'webkit') && !H(I, 'Edge')) &&
						!(H(I, 'Trident') || H(I, 'MSIE')) &&
						!H(I, 'Edge'),
					eb = H(I.toLowerCase(), 'webkit') && !H(I, 'Edge'),
					fb;
				a: {
					var gb = '',
						hb = (function () {
							var a = I;
							if (db) return /rv:([^\);]+)(\)|;)/.exec(a);
							if (cb) return /Edge\/([\d\.]+)/.exec(a);
							if (bb) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
							if (eb) return /WebKit\/(\S+)/.exec(a);
							if (ab) return /(?:Version)[ \/]?(\S+)/.exec(a);
						})();
					hb && (gb = hb ? hb[1] : '');
					if (bb) {
						var ib,
							jb = x.document;
						ib = jb ? jb.documentMode : void 0;
						if (null != ib && ib > parseFloat(gb)) {
							fb = String(ib);
							break a;
						}
					}
					fb = gb;
				}
				var $a = {};
				function kb() {
					return Za(function () {
						for (
							var a = 0, b = Pa(String(fb)).split('.'), c = Pa('9').split('.'), d = Math.max(b.length, c.length), f = 0;
							0 == a && f < d;
							f++
						) {
							var g = b[f] || '',
								e = c[f] || '';
							do {
								g = /(\d*)(\D*)(.*)/.exec(g) || ['', '', '', ''];
								e = /(\d*)(\D*)(.*)/.exec(e) || ['', '', '', ''];
								if (0 == g[0].length && 0 == e[0].length) break;
								a =
									Qa(0 == g[1].length ? 0 : parseInt(g[1], 10), 0 == e[1].length ? 0 : parseInt(e[1], 10)) ||
									Qa(0 == g[2].length, 0 == e[2].length) ||
									Qa(g[2], e[2]);
								g = g[3];
								e = e[3];
							} while (0 == a);
						}
						return 0 <= a;
					});
				}
				function lb() {
					0 != mb && ((Object.prototype.hasOwnProperty.call(this, ta) && this[ta]) || (this[ta] = ++ua));
					this.K = this.K;
				}
				var mb = 0;
				lb.prototype.K = !1;
				var nb =
					Object.freeze ||
					function (a) {
						return a;
					};
				function J(a, b) {
					this.type = a;
					this.a = this.target = b;
					this.defaultPrevented = !1;
				}
				J.prototype.b = function () {
					this.defaultPrevented = !0;
				};
				var ob = (function () {
					if (!x.addEventListener || !Object.defineProperty) return !1;
					var a = !1,
						b = Object.defineProperty({}, 'passive', {
							get: function () {
								a = !0;
							}
						});
					try {
						(x.addEventListener('test', ra, b), x.removeEventListener('test', ra, b));
					} catch (c) {}
					return a;
				})();
				function K(a, b) {
					J.call(this, a ? a.type : '');
					this.relatedTarget = this.a = this.target = null;
					this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
					this.key = '';
					this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
					this.pointerId = 0;
					this.pointerType = '';
					this.c = null;
					if (a) {
						var c = (this.type = a.type),
							d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
						this.target = a.target || a.srcElement;
						this.a = b;
						if ((b = a.relatedTarget)) {
							if (db) {
								a: {
									try {
										Ya(b.nodeName);
										var f = !0;
										break a;
									} catch (g) {}
									f = !1;
								}
								f || (b = null);
							}
						} else 'mouseover' == c ? (b = a.fromElement) : 'mouseout' == c && (b = a.toElement);
						this.relatedTarget = b;
						d
							? ((this.clientX = void 0 !== d.clientX ? d.clientX : d.pageX),
								(this.clientY = void 0 !== d.clientY ? d.clientY : d.pageY),
								(this.screenX = d.screenX || 0),
								(this.screenY = d.screenY || 0))
							: ((this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX),
								(this.clientY = void 0 !== a.clientY ? a.clientY : a.pageY),
								(this.screenX = a.screenX || 0),
								(this.screenY = a.screenY || 0));
						this.button = a.button;
						this.key = a.key || '';
						this.ctrlKey = a.ctrlKey;
						this.altKey = a.altKey;
						this.shiftKey = a.shiftKey;
						this.metaKey = a.metaKey;
						this.pointerId = a.pointerId || 0;
						this.pointerType = 'string' === typeof a.pointerType ? a.pointerType : pb[a.pointerType] || '';
						this.c = a;
						a.defaultPrevented && K.O.b.call(this);
					}
				}
				B(K, J);
				var pb = nb({ 2: 'touch', 3: 'pen', 4: 'mouse' });
				K.prototype.b = function () {
					K.O.b.call(this);
					var a = this.c;
					a.preventDefault ? a.preventDefault() : (a.returnValue = !1);
				};
				var M = 'closure_listenable_' + ((1e6 * Math.random()) | 0);
				var qb = 0;
				function rb(a, b, c, d, f) {
					this.listener = a;
					this.proxy = null;
					this.src = b;
					this.type = c;
					this.capture = !!d;
					this.H = f;
					this.key = ++qb;
					this.A = this.D = !1;
				}
				function sb(a) {
					a.A = !0;
					a.listener = null;
					a.proxy = null;
					a.src = null;
					a.H = null;
				}
				function tb(a) {
					this.src = a;
					this.a = {};
					this.b = 0;
				}
				tb.prototype.add = function (a, b, c, d, f) {
					var g = a.toString();
					a = this.a[g];
					a || ((a = this.a[g] = []), this.b++);
					var e = ub(a, b, d, f);
					-1 < e ? ((b = a[e]), c || (b.D = !1)) : ((b = new rb(b, this.src, g, !!d, f)), (b.D = c), a.push(b));
					return b;
				};
				tb.prototype.remove = function (a, b, c, d) {
					a = a.toString();
					if (!(a in this.a)) return !1;
					var f = this.a[a];
					b = ub(f, b, c, d);
					return -1 < b
						? (sb(f[b]), Array.prototype.splice.call(f, b, 1), 0 == f.length && (delete this.a[a], this.b--), !0)
						: !1;
				};
				function vb(a, b) {
					var c = b.type;
					if (c in a.a) {
						var d = a.a[c],
							f = Oa(d, b),
							g;
						(g = 0 <= f) && Array.prototype.splice.call(d, f, 1);
						g && (sb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
					}
				}
				function ub(a, b, c, d) {
					for (var f = 0; f < a.length; ++f) {
						var g = a[f];
						if (!g.A && g.listener == b && g.capture == !!c && g.H == d) return f;
					}
					return -1;
				}
				var wb = 'closure_lm_' + ((1e6 * Math.random()) | 0),
					xb = {},
					yb = 0;
				function zb(a, b, c, d, f) {
					if (d && d.once) Ab(a, b, c, d, f);
					else if (Array.isArray(b)) for (var g = 0; g < b.length; g++) zb(a, b[g], c, d, f);
					else
						((c = Bb(c)), a && a[M] ? a.f.add(String(b), c, !1, sa(d) ? !!d.capture : !!d, f) : Cb(a, b, c, !1, d, f));
				}
				function Cb(a, b, c, d, f, g) {
					if (!b) throw Error('Invalid event type');
					var e = sa(f) ? !!f.capture : !!f,
						h = Db(a);
					h || (a[wb] = h = new tb(a));
					c = h.add(b, c, d, e, g);
					if (!c.proxy) {
						d = Eb();
						c.proxy = d;
						d.src = a;
						d.listener = c;
						if (a.addEventListener) (ob || (f = e), void 0 === f && (f = !1), a.addEventListener(b.toString(), d, f));
						else if (a.attachEvent) a.attachEvent(Fb(b.toString()), d);
						else if (a.addListener && a.removeListener) a.addListener(d);
						else throw Error('addEventListener and attachEvent are unavailable.');
						yb++;
					}
				}
				function Eb() {
					function a(c) {
						return b.call(a.src, a.listener, c);
					}
					var b = Gb;
					return a;
				}
				function Ab(a, b, c, d, f) {
					if (Array.isArray(b)) for (var g = 0; g < b.length; g++) Ab(a, b[g], c, d, f);
					else
						((c = Bb(c)), a && a[M] ? a.f.add(String(b), c, !0, sa(d) ? !!d.capture : !!d, f) : Cb(a, b, c, !0, d, f));
				}
				function Hb(a, b, c, d, f) {
					if (Array.isArray(b)) for (var g = 0; g < b.length; g++) Hb(a, b[g], c, d, f);
					else
						((d = sa(d) ? !!d.capture : !!d), (c = Bb(c)), a && a[M])
							? a.f.remove(String(b), c, d, f)
							: a &&
								(a = Db(a)) &&
								((b = a.a[b.toString()]), (a = -1), b && (a = ub(b, c, d, f)), (c = -1 < a ? b[a] : null) && Ib(c));
				}
				function Ib(a) {
					if ('number' !== typeof a && a && !a.A) {
						var b = a.src;
						if (b && b[M]) vb(b.f, a);
						else {
							var c = a.type,
								d = a.proxy;
							b.removeEventListener
								? b.removeEventListener(c, d, a.capture)
								: b.detachEvent
									? b.detachEvent(Fb(c), d)
									: b.addListener && b.removeListener && b.removeListener(d);
							yb--;
							(c = Db(b)) ? (vb(c, a), 0 == c.b && ((c.src = null), (b[wb] = null))) : sb(a);
						}
					}
				}
				function Fb(a) {
					return a in xb ? xb[a] : (xb[a] = 'on' + a);
				}
				function Gb(a, b) {
					if (a.A) a = !0;
					else {
						b = new K(b, this);
						var c = a.listener,
							d = a.H || a.src;
						a.D && Ib(a);
						a = c.call(d, b);
					}
					return a;
				}
				function Db(a) {
					a = a[wb];
					return a instanceof tb ? a : null;
				}
				var Jb = '__closure_events_fn_' + ((1e9 * Math.random()) >>> 0);
				function Bb(a) {
					if ('function' === typeof a) return a;
					a[Jb] ||
						(a[Jb] = function (b) {
							return a.handleEvent(b);
						});
					return a[Jb];
				}
				function N() {
					lb.call(this);
					this.f = new tb(this);
					this.U = this;
				}
				B(N, lb);
				N.prototype[M] = !0;
				N.prototype.addEventListener = function (a, b, c, d) {
					zb(this, a, b, c, d);
				};
				N.prototype.removeEventListener = function (a, b, c, d) {
					Hb(this, a, b, c, d);
				};
				function O(a, b) {
					a = a.U;
					var c = b.type || b;
					if ('string' === typeof b) b = new J(b, a);
					else if (b instanceof J) b.target = b.target || a;
					else {
						var d = b;
						b = new J(c, a);
						Wa(b, d);
					}
					a = b.a = a;
					Kb(a, c, !0, b);
					Kb(a, c, !1, b);
				}
				function Kb(a, b, c, d) {
					if ((b = a.f.a[String(b)])) {
						b = b.concat();
						for (var f = !0, g = 0; g < b.length; ++g) {
							var e = b[g];
							if (e && !e.A && e.capture == c) {
								var h = e.listener,
									k = e.H || e.src;
								e.D && vb(a.f, e);
								f = !1 !== h.call(k, d) && f;
							}
						}
					}
				}
				var Lb = x;
				function Mb(a, b, c) {
					if ('function' === typeof a) c && (a = z(a, c));
					else if (a && 'function' == typeof a.handleEvent) a = z(a.handleEvent, a);
					else throw Error('Invalid listener argument');
					return 2147483647 < Number(b) ? -1 : Lb.setTimeout(a, b || 0);
				}
				function Nb(a, b) {
					this.name = a;
					this.value = b;
				}
				Nb.prototype.toString = function () {
					return this.name;
				};
				var Ob = new Nb('OFF', Infinity),
					Pb = new Nb('SEVERE', 1e3),
					Qb = new Nb('CONFIG', 700),
					Rb = new Nb('FINE', 500);
				function Tb() {
					this.clear();
				}
				var Ub;
				Tb.prototype.clear = function () {};
				function Vb(a, b, c) {
					this.reset(a || Ob, b, c, void 0, void 0);
				}
				Vb.prototype.reset = function () {};
				function Wb(a, b) {
					this.a = null;
					this.f = [];
					this.b = (void 0 === b ? null : b) || null;
					this.c = [];
					this.g = {
						getName: function () {
							return a;
						}
					};
				}
				function Xb(a) {
					if (a.a) return a.a;
					if (a.b) return Xb(a.b);
					Fa('Root logger has no level set.');
					return Ob;
				}
				function Yb(a, b) {
					for (; a; )
						(a.f.forEach(function (c) {
							c(b);
						}),
							(a = a.b));
				}
				function Zb() {
					this.entries = {};
					var a = new Wb('');
					a.a = Qb;
					this.entries[''] = a;
				}
				var $b;
				function ac(a, b, c) {
					var d = a.entries[b];
					if (d) return (void 0 !== c && (d.a = c), d);
					d = ac(a, b.substr(0, b.lastIndexOf('.')));
					var f = new Wb(b, d);
					a.entries[b] = f;
					d.c.push(f);
					void 0 !== c && (f.a = c);
					return f;
				}
				function bc() {
					$b || ($b = new Zb());
					return $b;
				}
				function cc(a, b, c) {
					var d;
					if ((d = a))
						if ((d = a && b)) {
							d = b.value;
							var f = a ? Xb(ac(bc(), a.getName())) : Ob;
							d = d >= f.value;
						}
					d &&
						((b = b || Ob),
						(d = ac(bc(), a.getName())),
						'function' === typeof c && (c = c()),
						Ub || (Ub = new Tb()),
						(a = a.getName()),
						(a = new Vb(b, c, a)),
						Yb(d, a));
				}
				function P(a, b) {
					a && cc(a, Rb, b);
				}
				function dc() {}
				dc.prototype.a = null;
				function ec(a) {
					var b;
					(b = a.a) || ((b = {}), fc(a) && ((b[0] = !0), (b[1] = !0)), (b = a.a = b));
					return b;
				}
				var gc;
				function hc() {}
				B(hc, dc);
				function ic(a) {
					return (a = fc(a)) ? new ActiveXObject(a) : new XMLHttpRequest();
				}
				function fc(a) {
					if (!a.b && 'undefined' == typeof XMLHttpRequest && 'undefined' != typeof ActiveXObject) {
						for (
							var b = ['MSXML2.XMLHTTP.6.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'], c = 0;
							c < b.length;
							c++
						) {
							var d = b[c];
							try {
								return (new ActiveXObject(d), (a.b = d));
							} catch (f) {}
						}
						throw Error('Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed');
					}
					return a.b;
				}
				gc = new hc();
				t();
				u();
				function jc(a, b) {
					this.b = a[x.Symbol.iterator]();
					this.c = b;
					this.f = 0;
				}
				jc.prototype[Symbol.iterator] = function () {
					return this;
				};
				jc.prototype.next = function () {
					var a = this.b.next();
					return { value: a.done ? void 0 : this.c.call(void 0, a.value, this.f++), done: a.done };
				};
				function kc(a, b) {
					return new jc(a, b);
				}
				t();
				u();
				t();
				u();
				var lc = 'StopIteration' in x ? x.StopIteration : { message: 'StopIteration', stack: '' };
				function Q() {}
				Q.prototype.next = function () {
					return Q.prototype.a.call(this);
				};
				Q.prototype.a = function () {
					throw lc;
				};
				Q.prototype.u = function () {
					return this;
				};
				function mc(a) {
					if (a instanceof R || a instanceof S || a instanceof T) return a;
					if ('function' == typeof a.next)
						return new R(function () {
							return nc(a);
						});
					t();
					u();
					if ('function' == typeof a[Symbol.iterator])
						return (
							t(),
							u(),
							new R(function () {
								return a[Symbol.iterator]();
							})
						);
					if ('function' == typeof a.u)
						return new R(function () {
							return nc(a.u());
						});
					throw Error('Not an iterator or iterable.');
				}
				function nc(a) {
					if (!(a instanceof Q)) return a;
					var b = !1;
					return {
						next: function () {
							for (var c; !b; )
								try {
									c = a.a();
									break;
								} catch (d) {
									if (d !== lc) throw d;
									b = !0;
								}
							return { value: c, done: b };
						}
					};
				}
				t();
				u();
				function R(a) {
					this.b = a;
				}
				R.prototype.u = function () {
					return new S(this.b());
				};
				R.prototype[Symbol.iterator] = function () {
					return new T(this.b());
				};
				R.prototype.c = function () {
					return new T(this.b());
				};
				t();
				u();
				function S(a) {
					this.b = a;
				}
				oa(S, Q);
				S.prototype.a = function () {
					var a = this.b.next();
					if (a.done) throw lc;
					return a.value;
				};
				S.prototype.next = function () {
					return S.prototype.a.call(this);
				};
				S.prototype[Symbol.iterator] = function () {
					return new T(this.b);
				};
				S.prototype.c = function () {
					return new T(this.b);
				};
				function T(a) {
					R.call(this, function () {
						return a;
					});
					this.f = a;
				}
				oa(T, R);
				T.prototype.next = function () {
					return this.f.next();
				};
				function oc(a, b) {
					this.o = {};
					this.j = [];
					this.B = this.size = 0;
					var c = arguments.length;
					if (1 < c) {
						if (c % 2) throw Error('Uneven number of arguments');
						for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1]);
					} else a && this.addAll(a);
				}
				n = oc.prototype;
				n.G = function () {
					pc(this);
					return this.j.concat();
				};
				n.has = function (a) {
					return U(this.o, a);
				};
				n.clear = function () {
					this.o = {};
					this.B = this.size = this.j.length = 0;
				};
				n.remove = function (a) {
					return this.delete(a);
				};
				n.delete = function (a) {
					return U(this.o, a)
						? (delete this.o[a], --this.size, this.B++, this.j.length > 2 * this.size && pc(this), !0)
						: !1;
				};
				function pc(a) {
					if (a.size != a.j.length) {
						for (var b = 0, c = 0; b < a.j.length; ) {
							var d = a.j[b];
							U(a.o, d) && (a.j[c++] = d);
							b++;
						}
						a.j.length = c;
					}
					if (a.size != a.j.length) {
						var f = {};
						for (c = b = 0; b < a.j.length; ) ((d = a.j[b]), U(f, d) || ((a.j[c++] = d), (f[d] = 1)), b++);
						a.j.length = c;
					}
				}
				n.get = function (a, b) {
					return U(this.o, a) ? this.o[a] : b;
				};
				n.set = function (a, b) {
					U(this.o, a) || ((this.size += 1), this.j.push(a), this.B++);
					this.o[a] = b;
				};
				n.addAll = function (a) {
					if (a instanceof oc) for (var b = a.G(), c = 0; c < b.length; c++) this.set(b[c], a.get(b[c]));
					else for (b in a) this.set(b, a[b]);
				};
				n.forEach = function (a, b) {
					for (var c = this.G(), d = 0; d < c.length; d++) {
						var f = c[d],
							g = this.get(f);
						a.call(b, g, f, this);
					}
				};
				n.clone = function () {
					return new oc(this);
				};
				n.keys = function () {
					return mc(this.u(!0)).c();
				};
				n.values = function () {
					return mc(this.u(!1)).c();
				};
				n.entries = function () {
					var a = this;
					return kc(this.keys(), function (b) {
						return [b, a.get(b)];
					});
				};
				n.u = function (a) {
					pc(this);
					var b = 0,
						c = this.B,
						d = this,
						f = new Q();
					f.a = function () {
						if (c != d.B) throw Error('The map has changed since the iterator was created');
						if (b >= d.j.length) throw lc;
						var g = d.j[b++];
						return a ? g : d.o[g];
					};
					f.next = f.a.bind(f);
					return f;
				};
				function U(a, b) {
					return Object.prototype.hasOwnProperty.call(a, b);
				}
				var qc =
					/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
				function rc(a) {
					N.call(this);
					this.headers = new oc();
					this.C = a || null;
					this.c = !1;
					this.J = this.a = null;
					this.P = this.v = '';
					this.g = 0;
					this.l = '';
					this.i = this.N = this.s = this.L = !1;
					this.h = 0;
					this.w = null;
					this.m = sc;
					this.I = this.M = !1;
				}
				B(rc, N);
				var sc = '';
				rc.prototype.b = ac(bc(), 'goog.net.XhrIo', void 0).g;
				var tc = /^https?$/i,
					uc = ['POST', 'PUT'];
				function vc(a, b, c) {
					if (a.a) throw Error('[goog.net.XhrIo] Object is active with another request=' + a.v + '; newUri=' + b);
					a.v = b;
					a.l = '';
					a.g = 0;
					a.P = 'POST';
					a.L = !1;
					a.c = !0;
					a.a = a.C ? ic(a.C) : ic(gc);
					a.J = a.C ? ec(a.C) : ec(gc);
					a.a.onreadystatechange = z(a.R, a);
					try {
						(P(a.b, V(a, 'Opening Xhr')), (a.N = !0), a.a.open('POST', String(b), !0), (a.N = !1));
					} catch (g) {
						P(a.b, V(a, 'Error opening Xhr: ' + g.message));
						wc(a, g);
						return;
					}
					b = c || '';
					c = a.headers.clone();
					var d = c.G().find(function (g) {
							return 'content-type' == g.toLowerCase();
						}),
						f = x.FormData && b instanceof x.FormData;
					!(0 <= Oa(uc, 'POST')) || d || f || c.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
					c.forEach(function (g, e) {
						this.a.setRequestHeader(e, g);
					}, a);
					a.m && (a.a.responseType = a.m);
					'withCredentials' in a.a && a.a.withCredentials !== a.M && (a.a.withCredentials = a.M);
					try {
						(xc(a),
							0 < a.h &&
								((a.I = yc(a.a)),
								P(a.b, V(a, 'Will abort after ' + a.h + 'ms if incomplete, xhr2 ' + a.I)),
								a.I ? ((a.a.timeout = a.h), (a.a.ontimeout = z(a.T, a))) : (a.w = Mb(a.T, a.h, a))),
							P(a.b, V(a, 'Sending request')),
							(a.s = !0),
							a.a.send(b),
							(a.s = !1));
					} catch (g) {
						(P(a.b, V(a, 'Send error: ' + g.message)), wc(a, g));
					}
				}
				function yc(a) {
					return bb && kb() && 'number' === typeof a.timeout && void 0 !== a.ontimeout;
				}
				n = rc.prototype;
				n.T = function () {
					'undefined' != typeof qa &&
						this.a &&
						((this.l = 'Timed out after ' + this.h + 'ms, aborting'),
						(this.g = 8),
						P(this.b, V(this, this.l)),
						O(this, 'timeout'),
						this.abort(8));
				};
				function wc(a, b) {
					a.c = !1;
					a.a && ((a.i = !0), a.a.abort(), (a.i = !1));
					a.l = b;
					a.g = 5;
					zc(a);
					Ac(a);
				}
				function zc(a) {
					a.L || ((a.L = !0), O(a, 'complete'), O(a, 'error'));
				}
				n.abort = function (a) {
					this.a &&
						this.c &&
						(P(this.b, V(this, 'Aborting')),
						(this.c = !1),
						(this.i = !0),
						this.a.abort(),
						(this.i = !1),
						(this.g = a || 7),
						O(this, 'complete'),
						O(this, 'abort'),
						Ac(this));
				};
				n.R = function () {
					this.K || (this.N || this.s || this.i ? Bc(this) : this.W());
				};
				n.W = function () {
					Bc(this);
				};
				function Bc(a) {
					if (a.c && 'undefined' != typeof qa)
						if (a.J[1] && 4 == W(a) && 2 == a.getStatus()) P(a.b, V(a, 'Local request error detected and ignored'));
						else if (a.s && 4 == W(a)) Mb(a.R, 0, a);
						else if ((O(a, 'readystatechange'), 4 == W(a))) {
							P(a.b, V(a, 'Request complete'));
							a.c = !1;
							try {
								var b = a.getStatus();
								a: switch (b) {
									case 200:
									case 201:
									case 202:
									case 204:
									case 206:
									case 304:
									case 1223:
										var c = !0;
										break a;
									default:
										c = !1;
								}
								var d;
								if (!(d = c)) {
									var f;
									if ((f = 0 === b)) {
										var g = String(a.v).match(qc)[1] || null;
										if (!g && x.self && x.self.location) {
											var e = x.self.location.protocol;
											g = e.substr(0, e.length - 1);
										}
										f = !tc.test(g ? g.toLowerCase() : '');
									}
									d = f;
								}
								if (d) (O(a, 'complete'), O(a, 'success'));
								else {
									a.g = 6;
									try {
										var h = 2 < W(a) ? a.a.statusText : '';
									} catch (k) {
										(P(a.b, 'Can not get status: ' + k.message), (h = ''));
									}
									a.l = h + ' [' + a.getStatus() + ']';
									zc(a);
								}
							} finally {
								Ac(a);
							}
						}
				}
				function Ac(a) {
					if (a.a) {
						xc(a);
						var b = a.a,
							c = a.J[0] ? ra : null;
						a.a = null;
						a.J = null;
						O(a, 'ready');
						try {
							b.onreadystatechange = c;
						} catch (d) {
							(a = a.b) && cc(a, Pb, 'Problem encountered resetting onreadystatechange: ' + d.message);
						}
					}
				}
				function xc(a) {
					a.a && a.I && (a.a.ontimeout = null);
					a.w && (Lb.clearTimeout(a.w), (a.w = null));
				}
				function W(a) {
					return a.a ? a.a.readyState : 0;
				}
				n.getStatus = function () {
					try {
						return 2 < W(this) ? this.a.status : -1;
					} catch (a) {
						return -1;
					}
				};
				function Cc(a) {
					try {
						if (!a.a) return null;
						if ('response' in a.a) return a.a.response;
						switch (a.m) {
							case sc:
							case 'text':
								return a.a.responseText;
							case 'arraybuffer':
								if ('mozResponseArrayBuffer' in a.a) return a.a.mozResponseArrayBuffer;
						}
						var b = a.b;
						b && cc(b, Pb, 'Response type ' + a.m + ' is not supported on this browser');
						return null;
					} catch (c) {
						return (P(a.b, 'Can not get response: ' + c.message), null);
					}
				}
				function Dc(a) {
					var b = {};
					a = (a.a && 4 == W(a) ? a.a.getAllResponseHeaders() || '' : '').split('\r\n');
					for (var c = 0; c < a.length; c++)
						if (!/^[\s\xa0]*$/.test(a[c])) {
							var d = Xa(a[c]),
								f = d[0];
							d = d[1];
							if ('string' === typeof d) {
								d = d.trim();
								var g = b[f] || [];
								b[f] = g;
								g.push(d);
							}
						}
					return Ua(b, function (e) {
						return e.join(', ');
					});
				}
				function V(a, b) {
					return b + ' [' + a.P + ' ' + a.v + ' ' + a.getStatus() + ']';
				}
				var Ec = {},
					Fc = null;
				function Gc(a) {
					var b = a.length,
						c = (3 * b) / 4;
					c % 3 ? (c = Math.floor(c)) : H('=.', a[b - 1]) && (c = H('=.', a[b - 2]) ? c - 2 : c - 1);
					var d = new Uint8Array(c),
						f = 0;
					Hc(a, function (g) {
						d[f++] = g;
					});
					return d.subarray(0, f);
				}
				function Hc(a, b) {
					function c(k) {
						for (; d < a.length; ) {
							var l = a.charAt(d++),
								m = Fc[l];
							if (null != m) return m;
							if (!/^[\s\xa0]*$/.test(l)) throw Error('Unknown base64 encoding at char: ' + l);
						}
						return k;
					}
					Ic();
					for (var d = 0; ; ) {
						var f = c(-1),
							g = c(0),
							e = c(64),
							h = c(64);
						if (64 === h && -1 === f) break;
						b((f << 2) | (g >> 4));
						64 != e && (b(((g << 4) & 240) | (e >> 2)), 64 != h && b(((e << 6) & 192) | h));
					}
				}
				function Ic() {
					if (!Fc) {
						Fc = {};
						for (
							var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''),
								b = ['+/=', '+/', '-_=', '-_.', '-_'],
								c = 0;
							5 > c;
							c++
						) {
							var d = a.concat(b[c].split(''));
							Ec[c] = d;
							for (var f = 0; f < d.length; f++) {
								var g = d[f];
								void 0 === Fc[g] && (Fc[g] = f);
							}
						}
					}
				}
				var Jc = ['content-type', 'grpc-status', 'grpc-message'];
				function X(a) {
					this.a = a.Z;
					this.m = null;
					this.b = [];
					this.h = [];
					this.g = [];
					this.f = [];
					this.c = [];
					this.l = !1;
					this.i = 0;
					this.s = new Ga();
					var b = this;
					zb(this.a, 'readystatechange', function () {
						var c = b.a;
						if ((c = c.a ? c.a.getResponseHeader('Content-Type') : null)) {
							c = c.toLowerCase();
							if (0 == c.lastIndexOf('application/grpc-web-text', 0)) {
								c = b.a;
								try {
									var d = c.a ? c.a.responseText : '';
								} catch (k) {
									(P(c.b, 'Can not get responseText: ' + k.message), (d = ''));
								}
								c = d || '';
								d = c.length - (c.length % 4);
								c = c.substr(b.i, d - b.i);
								if (0 == c.length) return;
								b.i = d;
								c = Gc(c);
							} else if (0 == c.lastIndexOf('application/grpc', 0)) c = new Uint8Array(Cc(b.a));
							else {
								Y(b, new E(2, 'Unknown Content-type received.'));
								return;
							}
							d = null;
							try {
								d = Ia(b.s, c);
							} catch (k) {
								Y(b, new E(2, 'Error in parsing response body'));
							}
							if (d)
								for (c = 0; c < d.length; c++) {
									if (Ja in d[c]) {
										var f = d[c][Ja];
										if (f) {
											var g = !1,
												e = void 0;
											try {
												((e = b.m(f)), (g = !0));
											} catch (k) {
												Y(b, new E(13, 'Error when deserializing response data; error: ' + k + (', response: ' + e)));
											}
											if (g) for (f = e, g = 0; g < b.b.length; g++) b.b[g](f);
										}
									}
									if (G in d[c] && 0 < d[c][G].length) {
										f = '';
										for (g = 0; g < d[c][G].length; g++) f += String.fromCharCode(d[c][G][g]);
										f = f.trim().split('\r\n');
										g = {};
										for (e = 0; e < f.length; e++) {
											var h = f[e].indexOf(':');
											g[f[e].substring(0, h).trim()] = f[e].substring(h + 1).trim();
										}
										f = g;
										g = 0;
										e = '';
										'grpc-status' in f && ((g = Number(f['grpc-status'])), delete f['grpc-status']);
										'grpc-message' in f && ((e = f['grpc-message']), delete f['grpc-message']);
										Y(b, new E(g, e, f));
									}
								}
						}
					});
					zb(this.a, 'complete', function () {
						var c = b.a.g,
							d = 2,
							f = '',
							g = {};
						d = Dc(b.a);
						var e = {};
						for (h in d) d.hasOwnProperty(h) && (e[h.toLowerCase()] = d[h]);
						Object.keys(e).forEach(function (k) {
							Jc.includes(k) || (g[k] = e[k]);
						});
						Kc(b, g);
						var h = -1;
						if (0 != c) {
							switch (c) {
								case 7:
									d = 10;
									break;
								case 8:
									d = 4;
									break;
								case 6:
									h = b.a.getStatus();
									d = Aa(h);
									break;
								default:
									d = 14;
							}
							(10 == d && b.l) || ((f = Da(c)), -1 != h && (f += ', http status code: ' + h), Y(b, new E(d, f)));
						} else
							((c = !1),
								'grpc-status' in e &&
									((d = Number(e['grpc-status'])),
									'grpc-message' in e && (f = e['grpc-message']),
									0 != d && (Y(b, new E(d, f || '', e)), (c = !0))),
								c || Lc(b));
					});
				}
				X.prototype.on = function (a, b) {
					'data' == a
						? this.b.push(b)
						: 'status' == a
							? this.h.push(b)
							: 'metadata' == a
								? this.g.push(b)
								: 'end' == a
									? this.c.push(b)
									: 'error' == a && this.f.push(b);
					return this;
				};
				function Mc(a, b) {
					b = a.indexOf(b);
					-1 < b && a.splice(b, 1);
				}
				X.prototype.removeListener = function (a, b) {
					'data' == a
						? Mc(this.b, b)
						: 'status' == a
							? Mc(this.h, b)
							: 'metadata' == a
								? Mc(this.g, b)
								: 'end' == a
									? Mc(this.c, b)
									: 'error' == a && Mc(this.f, b);
					return this;
				};
				X.prototype.cancel = function () {
					this.l = !0;
					this.a.abort();
				};
				function Y(a, b) {
					if (0 != b.code)
						for (var c = new E(b.code, decodeURIComponent(b.message || ''), b.metadata), d = 0; d < a.f.length; d++)
							a.f[d](c);
					b = { code: b.code, details: decodeURIComponent(b.message || ''), metadata: b.metadata };
					for (c = 0; c < a.h.length; c++) a.h[c](b);
				}
				function Kc(a, b) {
					for (var c = 0; c < a.g.length; c++) a.g[c](b);
				}
				function Lc(a) {
					for (var b = 0; b < a.c.length; b++) a.c[b]();
				}
				X.prototype.cancel = X.prototype.cancel;
				X.prototype.removeListener = X.prototype.removeListener;
				X.prototype.on = X.prototype.on;
				function Nc(a) {
					var b = '';
					Ta(a, function (c, d) {
						b += d;
						b += ':';
						b += c;
						b += '\r\n';
					});
					return b;
				}
				function Z(a, b) {
					a = void 0 === a ? {} : a;
					this.a = a.format || y('format', a) || 'text';
					this.g = a.aa || y('suppressCorsPreflight', a) || !1;
					this.f = a.withCredentials || y('withCredentials', a) || !1;
					this.b = a.$ || y('streamInterceptors', a) || [];
					this.h = a.ba || y('unaryInterceptors', a) || [];
					this.c = b || null;
				}
				Z.prototype.X = function (a, b, c, d, f) {
					var g = this,
						e = a.substr(0, a.length - d.name.length);
					a = Oc(function (h) {
						return Pc(g, h, e);
					}, this.b).call(this, za(d, b, c));
					Qc(a, f, !1);
					return new Ca(a);
				};
				Z.prototype.S = function (a, b, c, d) {
					var f = this,
						g = a.substr(0, a.length - d.name.length);
					return Oc(function (e) {
						return new Promise(function (h, k) {
							var l = Pc(f, e, g),
								m,
								p,
								q;
							Qc(
								l,
								function (w, A, L, Sb, Rc) {
									w
										? k(w)
										: Rc
											? (q = A)
											: L
												? (p = L)
												: Sb
													? (m = Sb)
													: ((w = e.getMethodDescriptor()),
														(A = m),
														(A = void 0 === A ? {} : A),
														h(new D(q, w, A, void 0 === p ? null : p)));
								},
								!0
							);
						});
					}, this.h)
						.call(this, za(d, b, c))
						.then(function (e) {
							return e.getResponseMessage();
						});
				};
				Z.prototype.unaryCall = function (a, b, c, d) {
					return this.S(a, b, c, d);
				};
				Z.prototype.Y = function (a, b, c, d) {
					var f = this,
						g = a.substr(0, a.length - d.name.length);
					return Oc(function (e) {
						return Pc(f, e, g);
					}, this.b).call(this, za(d, b, c));
				};
				function Pc(a, b, c) {
					var d = b.getMethodDescriptor(),
						f = c + d.getName();
					c = a.c ? a.c : new rc();
					c.M = a.f;
					var g = new X({ Z: c });
					g.m = d.b;
					var e = b.getMetadata();
					for (h in e) c.headers.set(h, e[h]);
					'text' == a.a
						? (c.headers.set('Content-Type', 'application/grpc-web-text'),
							c.headers.set('Accept', 'application/grpc-web-text'))
						: c.headers.set('Content-Type', 'application/grpc-web+proto');
					c.headers.set('X-User-Agent', 'grpc-web-javascript/0.1');
					c.headers.set('X-Grpc-Web', '1');
					if (c.headers.has('deadline')) {
						var h = Number(c.headers.get('deadline'));
						h = Math.ceil(h - new Date().getTime());
						c.headers.delete('deadline');
						Infinity === h && (h = 0);
						0 < h && (c.headers.set('grpc-timeout', h + 'm'), (c.h = Math.max(0, Math.max(1e3, Math.ceil(1.1 * h)))));
					}
					if (a.g) {
						e = c.headers;
						h = {};
						for (var k = ha(e.keys()), l = k.next(); !l.done; l = k.next()) ((l = l.value), (h[l] = e.get(l)));
						c.headers.clear();
						b: {
							for (m in h) {
								var m = !1;
								break b;
							}
							m = !0;
						}
						if (!m)
							if (((h = Nc(h)), 'string' === typeof f)) {
								if (
									((m = encodeURIComponent('$httpHeaders')),
									(h = null != h ? '=' + encodeURIComponent(String(h)) : ''),
									(m += h))
								)
									((h = f.indexOf('#')),
										0 > h && (h = f.length),
										(e = f.indexOf('?')),
										0 > e || e > h ? ((e = h), (k = '')) : (k = f.substring(e + 1, h)),
										(f = [f.substr(0, e), k, f.substr(h)]),
										(h = f[1]),
										(f[1] = m ? (h ? h + '&' + m : m) : h),
										(f = f[0] + (f[1] ? '?' + f[1] : '') + f[2]));
							} else f.a('$httpHeaders', h);
					}
					b = (0, d.a)(b.getRequestMessage());
					d = b.length;
					m = [0, 0, 0, 0];
					h = new Uint8Array(5 + d);
					for (e = 3; 0 <= e; e--) ((m[e] = d % 256), (d >>>= 8));
					h.set(new Uint8Array(m), 1);
					h.set(b, 5);
					b = h;
					if ('text' == a.a) {
						a = b;
						var p;
						void 0 === p && (p = 0);
						Ic();
						p = Ec[p];
						b = Array(Math.floor(a.length / 3));
						d = p[64] || '';
						for (m = h = 0; h < a.length - 2; h += 3) {
							l = a[h];
							var q = a[h + 1];
							k = a[h + 2];
							e = p[l >> 2];
							l = p[((l & 3) << 4) | (q >> 4)];
							q = p[((q & 15) << 2) | (k >> 6)];
							k = p[k & 63];
							b[m++] = e + l + q + k;
						}
						e = 0;
						k = d;
						switch (a.length - h) {
							case 2:
								((e = a[h + 1]), (k = p[(e & 15) << 2] || d));
							case 1:
								((a = a[h]), (b[m] = p[a >> 2] + p[((a & 3) << 4) | (e >> 4)] + k + d));
						}
						b = b.join('');
					} else 'binary' == a.a && (c.m = 'arraybuffer');
					vc(c, f, b);
					return g;
				}
				function Qc(a, b, c) {
					var d = !1,
						f = null,
						g = !1;
					a.on('data', function (e) {
						d = !0;
						f = e;
					});
					a.on('error', function (e) {
						0 == e.code || g || ((g = !0), b(e, null));
					});
					a.on('status', function (e) {
						0 == e.code || g
							? c && b(null, null, e)
							: ((g = !0), b({ code: e.code, message: e.details, metadata: e.metadata }, null));
					});
					if (c)
						a.on('metadata', function (e) {
							b(null, null, null, e);
						});
					a.on('end', function () {
						g || (d ? (c ? b(null, f, null, null, !0) : b(null, f)) : b({ code: 2, message: 'Incomplete response' }));
						c && b(null, null);
					});
				}
				function Oc(a, b) {
					var c = a;
					b.forEach(function (d) {
						var f = c;
						c = function (g) {
							return d.intercept(g, f);
						};
					});
					return c;
				}
				Z.prototype.serverStreaming = Z.prototype.Y;
				Z.prototype.unaryCall = Z.prototype.unaryCall;
				Z.prototype.thenableCall = Z.prototype.S;
				Z.prototype.rpcCall = Z.prototype.X;
				module.exports.CallOptions = xa;
				module.exports.MethodDescriptor = ya;
				module.exports.GrpcWebClientBase = Z;
				module.exports.RpcError = E;
				module.exports.StatusCode = {
					OK: 0,
					CANCELLED: 1,
					UNKNOWN: 2,
					INVALID_ARGUMENT: 3,
					DEADLINE_EXCEEDED: 4,
					NOT_FOUND: 5,
					ALREADY_EXISTS: 6,
					PERMISSION_DENIED: 7,
					UNAUTHENTICATED: 16,
					RESOURCE_EXHAUSTED: 8,
					FAILED_PRECONDITION: 9,
					ABORTED: 10,
					OUT_OF_RANGE: 11,
					UNIMPLEMENTED: 12,
					INTERNAL: 13,
					UNAVAILABLE: 14,
					DATA_LOSS: 15
				};
				module.exports.MethodType = {
					UNARY: 'unary',
					SERVER_STREAMING: 'server_streaming',
					BIDI_STREAMING: 'bidi_streaming'
				};
				Lb = ('undefined' !== typeof globalThis && globalThis) || self;

				/***/
			},

		/***/ './ondewo/sip/sip_grpc_web_pb.js':
			/*!***************************************!*\
  !*** ./ondewo/sip/sip_grpc_web_pb.js ***!
  \***************************************/
			/***/ (module, __unused_webpack_exports, __webpack_require__) => {
				/**
				 * @fileoverview gRPC-Web generated client stub for ondewo.sip
				 * @enhanceable
				 * @public
				 */

				// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
				// versions:
				// 	protoc-gen-grpc-web v1.5.0
				// 	protoc              v6.32.0
				// source: ondewo/sip/sip.proto

				/* eslint-disable */
				// @ts-nocheck

				const grpc = {};
				grpc.web = __webpack_require__(/*! grpc-web */ './node_modules/grpc-web/index.js');

				var google_protobuf_empty_pb = __webpack_require__(
					/*! google-protobuf/google/protobuf/empty_pb.js */ './node_modules/google-protobuf/google/protobuf/empty_pb.js'
				);

				var google_protobuf_timestamp_pb = __webpack_require__(
					/*! google-protobuf/google/protobuf/timestamp_pb.js */ './node_modules/google-protobuf/google/protobuf/timestamp_pb.js'
				);
				const proto = {};
				proto.ondewo = {};
				proto.ondewo.sip = __webpack_require__(/*! ./sip_pb.js */ './ondewo/sip/sip_pb.js');

				/**
				 * @param {string} hostname
				 * @param {?Object} credentials
				 * @param {?grpc.web.ClientOptions} options
				 * @constructor
				 * @struct
				 * @final
				 */
				proto.ondewo.sip.SipClient = function (hostname, credentials, options) {
					if (!options) options = {};
					options.format = 'text';

					/**
					 * @private @const {!grpc.web.GrpcWebClientBase} The client
					 */
					this.client_ = new grpc.web.GrpcWebClientBase(options);

					/**
					 * @private @const {string} The hostname
					 */
					this.hostname_ = hostname.replace(/\/+$/, '');
				};

				/**
				 * @param {string} hostname
				 * @param {?Object} credentials
				 * @param {?grpc.web.ClientOptions} options
				 * @constructor
				 * @struct
				 * @final
				 */
				proto.ondewo.sip.SipPromiseClient = function (hostname, credentials, options) {
					if (!options) options = {};
					options.format = 'text';

					/**
					 * @private @const {!grpc.web.GrpcWebClientBase} The client
					 */
					this.client_ = new grpc.web.GrpcWebClientBase(options);

					/**
					 * @private @const {string} The hostname
					 */
					this.hostname_ = hostname.replace(/\/+$/, '');
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.ondewo.sip.SipStartSessionRequest,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipStartSession = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipStartSession',
					grpc.web.MethodType.UNARY,
					proto.ondewo.sip.SipStartSessionRequest,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.ondewo.sip.SipStartSessionRequest} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.ondewo.sip.SipStartSessionRequest} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipStartSession = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipStartSession',
						request,
						metadata || {},
						methodDescriptor_Sip_SipStartSession,
						callback
					);
				};

				/**
				 * @param {!proto.ondewo.sip.SipStartSessionRequest} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipStartSession = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipStartSession',
						request,
						metadata || {},
						methodDescriptor_Sip_SipStartSession
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.google.protobuf.Empty,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipEndSession = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipEndSession',
					grpc.web.MethodType.UNARY,
					google_protobuf_empty_pb.Empty,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.google.protobuf.Empty} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipEndSession = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipEndSession',
						request,
						metadata || {},
						methodDescriptor_Sip_SipEndSession,
						callback
					);
				};

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipEndSession = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipEndSession',
						request,
						metadata || {},
						methodDescriptor_Sip_SipEndSession
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.ondewo.sip.SipStartCallRequest,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipStartCall = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipStartCall',
					grpc.web.MethodType.UNARY,
					proto.ondewo.sip.SipStartCallRequest,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.ondewo.sip.SipStartCallRequest} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.ondewo.sip.SipStartCallRequest} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipStartCall = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipStartCall',
						request,
						metadata || {},
						methodDescriptor_Sip_SipStartCall,
						callback
					);
				};

				/**
				 * @param {!proto.ondewo.sip.SipStartCallRequest} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipStartCall = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipStartCall',
						request,
						metadata || {},
						methodDescriptor_Sip_SipStartCall
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.ondewo.sip.SipEndCallRequest,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipEndCall = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipEndCall',
					grpc.web.MethodType.UNARY,
					proto.ondewo.sip.SipEndCallRequest,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.ondewo.sip.SipEndCallRequest} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.ondewo.sip.SipEndCallRequest} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipEndCall = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipEndCall',
						request,
						metadata || {},
						methodDescriptor_Sip_SipEndCall,
						callback
					);
				};

				/**
				 * @param {!proto.ondewo.sip.SipEndCallRequest} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipEndCall = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipEndCall',
						request,
						metadata || {},
						methodDescriptor_Sip_SipEndCall
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.ondewo.sip.SipTransferCallRequest,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipTransferCall = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipTransferCall',
					grpc.web.MethodType.UNARY,
					proto.ondewo.sip.SipTransferCallRequest,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.ondewo.sip.SipTransferCallRequest} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.ondewo.sip.SipTransferCallRequest} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipTransferCall = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipTransferCall',
						request,
						metadata || {},
						methodDescriptor_Sip_SipTransferCall,
						callback
					);
				};

				/**
				 * @param {!proto.ondewo.sip.SipTransferCallRequest} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipTransferCall = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipTransferCall',
						request,
						metadata || {},
						methodDescriptor_Sip_SipTransferCall
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.ondewo.sip.SipRegisterAccountRequest,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipRegisterAccount = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipRegisterAccount',
					grpc.web.MethodType.UNARY,
					proto.ondewo.sip.SipRegisterAccountRequest,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.ondewo.sip.SipRegisterAccountRequest} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.ondewo.sip.SipRegisterAccountRequest} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipRegisterAccount = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipRegisterAccount',
						request,
						metadata || {},
						methodDescriptor_Sip_SipRegisterAccount,
						callback
					);
				};

				/**
				 * @param {!proto.ondewo.sip.SipRegisterAccountRequest} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipRegisterAccount = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipRegisterAccount',
						request,
						metadata || {},
						methodDescriptor_Sip_SipRegisterAccount
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.google.protobuf.Empty,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipGetSipStatus = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipGetSipStatus',
					grpc.web.MethodType.UNARY,
					google_protobuf_empty_pb.Empty,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.google.protobuf.Empty} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipGetSipStatus = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipGetSipStatus',
						request,
						metadata || {},
						methodDescriptor_Sip_SipGetSipStatus,
						callback
					);
				};

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipGetSipStatus = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipGetSipStatus',
						request,
						metadata || {},
						methodDescriptor_Sip_SipGetSipStatus
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.google.protobuf.Empty,
				 *   !proto.ondewo.sip.SipStatusHistoryResponse>}
				 */
				const methodDescriptor_Sip_SipGetSipStatusHistory = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipGetSipStatusHistory',
					grpc.web.MethodType.UNARY,
					google_protobuf_empty_pb.Empty,
					proto.ondewo.sip.SipStatusHistoryResponse,
					/**
					 * @param {!proto.google.protobuf.Empty} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatusHistoryResponse.deserializeBinary
				);

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatusHistoryResponse)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatusHistoryResponse>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipGetSipStatusHistory = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipGetSipStatusHistory',
						request,
						metadata || {},
						methodDescriptor_Sip_SipGetSipStatusHistory,
						callback
					);
				};

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatusHistoryResponse>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipGetSipStatusHistory = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipGetSipStatusHistory',
						request,
						metadata || {},
						methodDescriptor_Sip_SipGetSipStatusHistory
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.ondewo.sip.SipPlayWavFilesRequest,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipPlayWavFiles = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipPlayWavFiles',
					grpc.web.MethodType.UNARY,
					proto.ondewo.sip.SipPlayWavFilesRequest,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.ondewo.sip.SipPlayWavFilesRequest} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.ondewo.sip.SipPlayWavFilesRequest} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipPlayWavFiles = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipPlayWavFiles',
						request,
						metadata || {},
						methodDescriptor_Sip_SipPlayWavFiles,
						callback
					);
				};

				/**
				 * @param {!proto.ondewo.sip.SipPlayWavFilesRequest} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipPlayWavFiles = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipPlayWavFiles',
						request,
						metadata || {},
						methodDescriptor_Sip_SipPlayWavFiles
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.google.protobuf.Empty,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipMute = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipMute',
					grpc.web.MethodType.UNARY,
					google_protobuf_empty_pb.Empty,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.google.protobuf.Empty} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipMute = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipMute',
						request,
						metadata || {},
						methodDescriptor_Sip_SipMute,
						callback
					);
				};

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipMute = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipMute',
						request,
						metadata || {},
						methodDescriptor_Sip_SipMute
					);
				};

				/**
				 * @const
				 * @type {!grpc.web.MethodDescriptor<
				 *   !proto.google.protobuf.Empty,
				 *   !proto.ondewo.sip.SipStatus>}
				 */
				const methodDescriptor_Sip_SipUnMute = new grpc.web.MethodDescriptor(
					'/ondewo.sip.Sip/SipUnMute',
					grpc.web.MethodType.UNARY,
					google_protobuf_empty_pb.Empty,
					proto.ondewo.sip.SipStatus,
					/**
					 * @param {!proto.google.protobuf.Empty} request
					 * @return {!Uint8Array}
					 */
					function (request) {
						return request.serializeBinary();
					},
					proto.ondewo.sip.SipStatus.deserializeBinary
				);

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>} metadata User defined
				 *     call metadata
				 * @param {function(?grpc.web.RpcError, ?proto.ondewo.sip.SipStatus)}
				 *     callback The callback function(error, response)
				 * @return {!grpc.web.ClientReadableStream<!proto.ondewo.sip.SipStatus>|undefined}
				 *     The XHR Node Readable Stream
				 */
				proto.ondewo.sip.SipClient.prototype.sipUnMute = function (request, metadata, callback) {
					return this.client_.rpcCall(
						this.hostname_ + '/ondewo.sip.Sip/SipUnMute',
						request,
						metadata || {},
						methodDescriptor_Sip_SipUnMute,
						callback
					);
				};

				/**
				 * @param {!proto.google.protobuf.Empty} request The
				 *     request proto
				 * @param {?Object<string, string>=} metadata User defined
				 *     call metadata
				 * @return {!Promise<!proto.ondewo.sip.SipStatus>}
				 *     Promise that resolves to the response
				 */
				proto.ondewo.sip.SipPromiseClient.prototype.sipUnMute = function (request, metadata) {
					return this.client_.unaryCall(
						this.hostname_ + '/ondewo.sip.Sip/SipUnMute',
						request,
						metadata || {},
						methodDescriptor_Sip_SipUnMute
					);
				};

				proto.ondewo.sip.SipClientWrapper = function (config) {
					this.w_host = config['grpc_host'];
					this.w_port = config['grpc_port'];
					this.w_certificate = config['grpc_certificate'];

					this.w_secure = config['grpc_secure'];

					if (this.w_certificate) {
						this.w_credentials['grpc_certificate'] = this.w_certificate;
					}

					//SipClientOptions:: suppressCorsPreflight: boolean, withCredentials: boolean, this.unaryInterceptors; this.streamInterceptors; this.format; this.workerScope; this.useFetchDownloadStreams;
					if (this.w_credentials && Object.keys(this.w_credentials).length > 0) {
						this.w_options['withCredentials'] = true;
					}
					if (config && config['options']) {
						Object.assign(this.w_options, config['options']);
					}

					this.w_hostport = this.w_host + ':' + this.w_port;
					return proto.ondewo.sip.SipClient.call(this, this.w_hostport, this.w_credentials, this.w_options);
				};
				proto.ondewo.sip.SipPromiseClientWrapper = function (config) {
					this.w_host = config['grpc_host'];
					this.w_port = config['grpc_port'];
					this.w_certificate = config['grpc_certificate'];

					this.w_secure = config['grpc_secure'];

					if (this.w_certificate) {
						this.w_credentials['grpc_certificate'] = this.w_certificate;
					}

					//SipPromiseClientOptions:: suppressCorsPreflight: boolean, withCredentials: boolean, this.unaryInterceptors; this.streamInterceptors; this.format; this.workerScope; this.useFetchDownloadStreams;
					if (this.w_credentials && Object.keys(this.w_credentials).length > 0) {
						this.w_options['withCredentials'] = true;
					}
					if (config && config['options']) {
						Object.assign(this.w_options, config['options']);
					}

					this.w_hostport = this.w_host + ':' + this.w_port;
					return proto.ondewo.sip.SipPromiseClient.call(this, this.w_hostport, this.w_credentials, this.w_options);
				};
				module.exports = proto.ondewo.sip;

				/***/
			},

		/***/ './ondewo/sip/sip_pb.js':
			/*!******************************!*\
  !*** ./ondewo/sip/sip_pb.js ***!
  \******************************/
			/***/ (__unused_webpack_module, exports, __webpack_require__) => {
				// source: ondewo/sip/sip.proto
				/**
				 * @fileoverview
				 * @enhanceable
				 * @suppress {missingRequire} reports error on implicit type usages.
				 * @suppress {messageConventions} JS Compiler reports an error if a variable or
				 *     field starts with 'MSG_' and isn't a translatable message.
				 * @public
				 */
				// GENERATED CODE -- DO NOT EDIT!
				/* eslint-disable */
				// @ts-nocheck

				var jspb = __webpack_require__(/*! google-protobuf */ './node_modules/google-protobuf/google-protobuf.js');
				var goog = jspb;
				var global =
					(typeof globalThis !== 'undefined' && globalThis) ||
					(typeof window !== 'undefined' && window) ||
					(typeof global !== 'undefined' && global) ||
					(typeof self !== 'undefined' && self) ||
					function () {
						return this;
					}.call(null) ||
					Function('return this')();

				var google_protobuf_empty_pb = __webpack_require__(
					/*! google-protobuf/google/protobuf/empty_pb.js */ './node_modules/google-protobuf/google/protobuf/empty_pb.js'
				);
				goog.object.extend(proto, google_protobuf_empty_pb);
				var google_protobuf_timestamp_pb = __webpack_require__(
					/*! google-protobuf/google/protobuf/timestamp_pb.js */ './node_modules/google-protobuf/google/protobuf/timestamp_pb.js'
				);
				goog.object.extend(proto, google_protobuf_timestamp_pb);
				goog.exportSymbol('proto.ondewo.sip.SipEndCallRequest', null, global);
				goog.exportSymbol('proto.ondewo.sip.SipPlayWavFilesRequest', null, global);
				goog.exportSymbol('proto.ondewo.sip.SipRegisterAccountRequest', null, global);
				goog.exportSymbol('proto.ondewo.sip.SipStartCallRequest', null, global);
				goog.exportSymbol('proto.ondewo.sip.SipStartSessionRequest', null, global);
				goog.exportSymbol('proto.ondewo.sip.SipStatus', null, global);
				goog.exportSymbol('proto.ondewo.sip.SipStatus.StatusType', null, global);
				goog.exportSymbol('proto.ondewo.sip.SipStatusHistoryResponse', null, global);
				goog.exportSymbol('proto.ondewo.sip.SipTransferCallRequest', null, global);
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.ondewo.sip.SipEndCallRequest = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, null, null);
				};
				goog.inherits(proto.ondewo.sip.SipEndCallRequest, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.ondewo.sip.SipEndCallRequest.displayName = 'proto.ondewo.sip.SipEndCallRequest';
				}
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.ondewo.sip.SipStartCallRequest = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, null, null);
				};
				goog.inherits(proto.ondewo.sip.SipStartCallRequest, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.ondewo.sip.SipStartCallRequest.displayName = 'proto.ondewo.sip.SipStartCallRequest';
				}
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.ondewo.sip.SipRegisterAccountRequest = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, null, null);
				};
				goog.inherits(proto.ondewo.sip.SipRegisterAccountRequest, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.ondewo.sip.SipRegisterAccountRequest.displayName = 'proto.ondewo.sip.SipRegisterAccountRequest';
				}
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.ondewo.sip.SipStartSessionRequest = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, null, null);
				};
				goog.inherits(proto.ondewo.sip.SipStartSessionRequest, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.ondewo.sip.SipStartSessionRequest.displayName = 'proto.ondewo.sip.SipStartSessionRequest';
				}
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.ondewo.sip.SipTransferCallRequest = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, null, null);
				};
				goog.inherits(proto.ondewo.sip.SipTransferCallRequest, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.ondewo.sip.SipTransferCallRequest.displayName = 'proto.ondewo.sip.SipTransferCallRequest';
				}
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.ondewo.sip.SipStatus = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, null, null);
				};
				goog.inherits(proto.ondewo.sip.SipStatus, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.ondewo.sip.SipStatus.displayName = 'proto.ondewo.sip.SipStatus';
				}
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.ondewo.sip.SipStatusHistoryResponse = function (opt_data) {
					jspb.Message.initialize(
						this,
						opt_data,
						0,
						-1,
						proto.ondewo.sip.SipStatusHistoryResponse.repeatedFields_,
						null
					);
				};
				goog.inherits(proto.ondewo.sip.SipStatusHistoryResponse, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.ondewo.sip.SipStatusHistoryResponse.displayName = 'proto.ondewo.sip.SipStatusHistoryResponse';
				}
				/**
				 * Generated by JsPbCodeGenerator.
				 * @param {Array=} opt_data Optional initial data array, typically from a
				 * server response, or constructed directly in Javascript. The array is used
				 * in place and becomes part of the constructed object. It is not cloned.
				 * If no data is provided, the constructed object will be empty, but still
				 * valid.
				 * @extends {jspb.Message}
				 * @constructor
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest = function (opt_data) {
					jspb.Message.initialize(this, opt_data, 0, -1, proto.ondewo.sip.SipPlayWavFilesRequest.repeatedFields_, null);
				};
				goog.inherits(proto.ondewo.sip.SipPlayWavFilesRequest, jspb.Message);
				if (goog.DEBUG && !COMPILED) {
					/**
					 * @public
					 * @override
					 */
					proto.ondewo.sip.SipPlayWavFilesRequest.displayName = 'proto.ondewo.sip.SipPlayWavFilesRequest';
				}

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.ondewo.sip.SipEndCallRequest.prototype.toObject = function (opt_includeInstance) {
						return proto.ondewo.sip.SipEndCallRequest.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.ondewo.sip.SipEndCallRequest} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.ondewo.sip.SipEndCallRequest.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								hardHangup: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.ondewo.sip.SipEndCallRequest}
				 */
				proto.ondewo.sip.SipEndCallRequest.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.ondewo.sip.SipEndCallRequest();
					return proto.ondewo.sip.SipEndCallRequest.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.ondewo.sip.SipEndCallRequest} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.ondewo.sip.SipEndCallRequest}
				 */
				proto.ondewo.sip.SipEndCallRequest.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = /** @type {boolean} */ (reader.readBool());
								msg.setHardHangup(value);
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.ondewo.sip.SipEndCallRequest.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.ondewo.sip.SipEndCallRequest.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.ondewo.sip.SipEndCallRequest} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.ondewo.sip.SipEndCallRequest.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getHardHangup();
					if (f) {
						writer.writeBool(1, f);
					}
				};

				/**
				 * optional bool hard_hangup = 1;
				 * @return {boolean}
				 */
				proto.ondewo.sip.SipEndCallRequest.prototype.getHardHangup = function () {
					return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
				};

				/**
				 * @param {boolean} value
				 * @return {!proto.ondewo.sip.SipEndCallRequest} returns this
				 */
				proto.ondewo.sip.SipEndCallRequest.prototype.setHardHangup = function (value) {
					return jspb.Message.setProto3BooleanField(this, 1, value);
				};

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.ondewo.sip.SipStartCallRequest.prototype.toObject = function (opt_includeInstance) {
						return proto.ondewo.sip.SipStartCallRequest.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.ondewo.sip.SipStartCallRequest} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.ondewo.sip.SipStartCallRequest.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								calleeId: jspb.Message.getFieldWithDefault(msg, 1, ''),
								headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, undefined) : []
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.ondewo.sip.SipStartCallRequest}
				 */
				proto.ondewo.sip.SipStartCallRequest.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.ondewo.sip.SipStartCallRequest();
					return proto.ondewo.sip.SipStartCallRequest.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.ondewo.sip.SipStartCallRequest} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.ondewo.sip.SipStartCallRequest}
				 */
				proto.ondewo.sip.SipStartCallRequest.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = /** @type {string} */ (reader.readString());
								msg.setCalleeId(value);
								break;
							case 2:
								var value = msg.getHeadersMap();
								reader.readMessage(value, function (message, reader) {
									jspb.Map.deserializeBinary(
										message,
										reader,
										jspb.BinaryReader.prototype.readString,
										jspb.BinaryReader.prototype.readString,
										null,
										'',
										''
									);
								});
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.ondewo.sip.SipStartCallRequest.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.ondewo.sip.SipStartCallRequest.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.ondewo.sip.SipStartCallRequest} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.ondewo.sip.SipStartCallRequest.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getCalleeId();
					if (f.length > 0) {
						writer.writeString(1, f);
					}
					f = message.getHeadersMap(true);
					if (f && f.getLength() > 0) {
						f.serializeBinary(
							2,
							writer,
							jspb.BinaryWriter.prototype.writeString,
							jspb.BinaryWriter.prototype.writeString
						);
					}
				};

				/**
				 * optional string callee_id = 1;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStartCallRequest.prototype.getCalleeId = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStartCallRequest} returns this
				 */
				proto.ondewo.sip.SipStartCallRequest.prototype.setCalleeId = function (value) {
					return jspb.Message.setProto3StringField(this, 1, value);
				};

				/**
				 * map<string, string> headers = 2;
				 * @param {boolean=} opt_noLazyCreate Do not create the map if
				 * empty, instead returning `undefined`
				 * @return {!jspb.Map<string,string>}
				 */
				proto.ondewo.sip.SipStartCallRequest.prototype.getHeadersMap = function (opt_noLazyCreate) {
					return /** @type {!jspb.Map<string,string>} */ (jspb.Message.getMapField(this, 2, opt_noLazyCreate, null));
				};

				/**
				 * Clears values from the map. The map will be non-null.
				 * @return {!proto.ondewo.sip.SipStartCallRequest} returns this
				 */
				proto.ondewo.sip.SipStartCallRequest.prototype.clearHeadersMap = function () {
					this.getHeadersMap().clear();
					return this;
				};

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.ondewo.sip.SipRegisterAccountRequest.prototype.toObject = function (opt_includeInstance) {
						return proto.ondewo.sip.SipRegisterAccountRequest.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.ondewo.sip.SipRegisterAccountRequest} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.ondewo.sip.SipRegisterAccountRequest.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								accountName: jspb.Message.getFieldWithDefault(msg, 1, ''),
								password: jspb.Message.getFieldWithDefault(msg, 2, ''),
								authUsername: jspb.Message.getFieldWithDefault(msg, 3, ''),
								outboundProxy: jspb.Message.getFieldWithDefault(msg, 4, '')
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.ondewo.sip.SipRegisterAccountRequest}
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.ondewo.sip.SipRegisterAccountRequest();
					return proto.ondewo.sip.SipRegisterAccountRequest.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.ondewo.sip.SipRegisterAccountRequest} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.ondewo.sip.SipRegisterAccountRequest}
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = /** @type {string} */ (reader.readString());
								msg.setAccountName(value);
								break;
							case 2:
								var value = /** @type {string} */ (reader.readString());
								msg.setPassword(value);
								break;
							case 3:
								var value = /** @type {string} */ (reader.readString());
								msg.setAuthUsername(value);
								break;
							case 4:
								var value = /** @type {string} */ (reader.readString());
								msg.setOutboundProxy(value);
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.ondewo.sip.SipRegisterAccountRequest.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.ondewo.sip.SipRegisterAccountRequest} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getAccountName();
					if (f.length > 0) {
						writer.writeString(1, f);
					}
					f = message.getPassword();
					if (f.length > 0) {
						writer.writeString(2, f);
					}
					f = message.getAuthUsername();
					if (f.length > 0) {
						writer.writeString(3, f);
					}
					f = message.getOutboundProxy();
					if (f.length > 0) {
						writer.writeString(4, f);
					}
				};

				/**
				 * optional string account_name = 1;
				 * @return {string}
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.getAccountName = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipRegisterAccountRequest} returns this
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.setAccountName = function (value) {
					return jspb.Message.setProto3StringField(this, 1, value);
				};

				/**
				 * optional string password = 2;
				 * @return {string}
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.getPassword = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipRegisterAccountRequest} returns this
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.setPassword = function (value) {
					return jspb.Message.setProto3StringField(this, 2, value);
				};

				/**
				 * optional string auth_username = 3;
				 * @return {string}
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.getAuthUsername = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipRegisterAccountRequest} returns this
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.setAuthUsername = function (value) {
					return jspb.Message.setProto3StringField(this, 3, value);
				};

				/**
				 * optional string outbound_proxy = 4;
				 * @return {string}
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.getOutboundProxy = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipRegisterAccountRequest} returns this
				 */
				proto.ondewo.sip.SipRegisterAccountRequest.prototype.setOutboundProxy = function (value) {
					return jspb.Message.setProto3StringField(this, 4, value);
				};

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.ondewo.sip.SipStartSessionRequest.prototype.toObject = function (opt_includeInstance) {
						return proto.ondewo.sip.SipStartSessionRequest.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.ondewo.sip.SipStartSessionRequest} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.ondewo.sip.SipStartSessionRequest.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								accountName: jspb.Message.getFieldWithDefault(msg, 1, ''),
								autoAnswerInterval: jspb.Message.getFieldWithDefault(msg, 2, 0)
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.ondewo.sip.SipStartSessionRequest}
				 */
				proto.ondewo.sip.SipStartSessionRequest.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.ondewo.sip.SipStartSessionRequest();
					return proto.ondewo.sip.SipStartSessionRequest.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.ondewo.sip.SipStartSessionRequest} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.ondewo.sip.SipStartSessionRequest}
				 */
				proto.ondewo.sip.SipStartSessionRequest.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = /** @type {string} */ (reader.readString());
								msg.setAccountName(value);
								break;
							case 2:
								var value = /** @type {number} */ (reader.readInt32());
								msg.setAutoAnswerInterval(value);
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.ondewo.sip.SipStartSessionRequest.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.ondewo.sip.SipStartSessionRequest.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.ondewo.sip.SipStartSessionRequest} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.ondewo.sip.SipStartSessionRequest.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getAccountName();
					if (f.length > 0) {
						writer.writeString(1, f);
					}
					f = message.getAutoAnswerInterval();
					if (f !== 0) {
						writer.writeInt32(2, f);
					}
				};

				/**
				 * optional string account_name = 1;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStartSessionRequest.prototype.getAccountName = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStartSessionRequest} returns this
				 */
				proto.ondewo.sip.SipStartSessionRequest.prototype.setAccountName = function (value) {
					return jspb.Message.setProto3StringField(this, 1, value);
				};

				/**
				 * optional int32 auto_answer_interval = 2;
				 * @return {number}
				 */
				proto.ondewo.sip.SipStartSessionRequest.prototype.getAutoAnswerInterval = function () {
					return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
				};

				/**
				 * @param {number} value
				 * @return {!proto.ondewo.sip.SipStartSessionRequest} returns this
				 */
				proto.ondewo.sip.SipStartSessionRequest.prototype.setAutoAnswerInterval = function (value) {
					return jspb.Message.setProto3IntField(this, 2, value);
				};

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.ondewo.sip.SipTransferCallRequest.prototype.toObject = function (opt_includeInstance) {
						return proto.ondewo.sip.SipTransferCallRequest.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.ondewo.sip.SipTransferCallRequest} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.ondewo.sip.SipTransferCallRequest.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								transferId: jspb.Message.getFieldWithDefault(msg, 1, ''),
								headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, undefined) : []
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.ondewo.sip.SipTransferCallRequest}
				 */
				proto.ondewo.sip.SipTransferCallRequest.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.ondewo.sip.SipTransferCallRequest();
					return proto.ondewo.sip.SipTransferCallRequest.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.ondewo.sip.SipTransferCallRequest} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.ondewo.sip.SipTransferCallRequest}
				 */
				proto.ondewo.sip.SipTransferCallRequest.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = /** @type {string} */ (reader.readString());
								msg.setTransferId(value);
								break;
							case 2:
								var value = msg.getHeadersMap();
								reader.readMessage(value, function (message, reader) {
									jspb.Map.deserializeBinary(
										message,
										reader,
										jspb.BinaryReader.prototype.readString,
										jspb.BinaryReader.prototype.readString,
										null,
										'',
										''
									);
								});
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.ondewo.sip.SipTransferCallRequest.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.ondewo.sip.SipTransferCallRequest.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.ondewo.sip.SipTransferCallRequest} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.ondewo.sip.SipTransferCallRequest.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getTransferId();
					if (f.length > 0) {
						writer.writeString(1, f);
					}
					f = message.getHeadersMap(true);
					if (f && f.getLength() > 0) {
						f.serializeBinary(
							2,
							writer,
							jspb.BinaryWriter.prototype.writeString,
							jspb.BinaryWriter.prototype.writeString
						);
					}
				};

				/**
				 * optional string transfer_id = 1;
				 * @return {string}
				 */
				proto.ondewo.sip.SipTransferCallRequest.prototype.getTransferId = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipTransferCallRequest} returns this
				 */
				proto.ondewo.sip.SipTransferCallRequest.prototype.setTransferId = function (value) {
					return jspb.Message.setProto3StringField(this, 1, value);
				};

				/**
				 * map<string, string> headers = 2;
				 * @param {boolean=} opt_noLazyCreate Do not create the map if
				 * empty, instead returning `undefined`
				 * @return {!jspb.Map<string,string>}
				 */
				proto.ondewo.sip.SipTransferCallRequest.prototype.getHeadersMap = function (opt_noLazyCreate) {
					return /** @type {!jspb.Map<string,string>} */ (jspb.Message.getMapField(this, 2, opt_noLazyCreate, null));
				};

				/**
				 * Clears values from the map. The map will be non-null.
				 * @return {!proto.ondewo.sip.SipTransferCallRequest} returns this
				 */
				proto.ondewo.sip.SipTransferCallRequest.prototype.clearHeadersMap = function () {
					this.getHeadersMap().clear();
					return this;
				};

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.ondewo.sip.SipStatus.prototype.toObject = function (opt_includeInstance) {
						return proto.ondewo.sip.SipStatus.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.ondewo.sip.SipStatus} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.ondewo.sip.SipStatus.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								accountName: jspb.Message.getFieldWithDefault(msg, 1, ''),
								timestamp:
									(f = msg.getTimestamp()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
								statusType: jspb.Message.getFieldWithDefault(msg, 3, 0),
								calleeId: jspb.Message.getFieldWithDefault(msg, 4, ''),
								transferCallId: jspb.Message.getFieldWithDefault(msg, 5, ''),
								headersMap: (f = msg.getHeadersMap()) ? f.toObject(includeInstance, undefined) : [],
								description: jspb.Message.getFieldWithDefault(msg, 7, ''),
								exceptionName: jspb.Message.getFieldWithDefault(msg, 8, ''),
								exceptionTraceback: jspb.Message.getFieldWithDefault(msg, 9, ''),
								nluSessionName: jspb.Message.getFieldWithDefault(msg, 10, '')
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.ondewo.sip.SipStatus}
				 */
				proto.ondewo.sip.SipStatus.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.ondewo.sip.SipStatus();
					return proto.ondewo.sip.SipStatus.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.ondewo.sip.SipStatus} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.ondewo.sip.SipStatus}
				 */
				proto.ondewo.sip.SipStatus.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = /** @type {string} */ (reader.readString());
								msg.setAccountName(value);
								break;
							case 2:
								var value = new google_protobuf_timestamp_pb.Timestamp();
								reader.readMessage(value, google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
								msg.setTimestamp(value);
								break;
							case 3:
								var value = /** @type {!proto.ondewo.sip.SipStatus.StatusType} */ (reader.readEnum());
								msg.setStatusType(value);
								break;
							case 4:
								var value = /** @type {string} */ (reader.readString());
								msg.setCalleeId(value);
								break;
							case 5:
								var value = /** @type {string} */ (reader.readString());
								msg.setTransferCallId(value);
								break;
							case 6:
								var value = msg.getHeadersMap();
								reader.readMessage(value, function (message, reader) {
									jspb.Map.deserializeBinary(
										message,
										reader,
										jspb.BinaryReader.prototype.readString,
										jspb.BinaryReader.prototype.readString,
										null,
										'',
										''
									);
								});
								break;
							case 7:
								var value = /** @type {string} */ (reader.readString());
								msg.setDescription(value);
								break;
							case 8:
								var value = /** @type {string} */ (reader.readString());
								msg.setExceptionName(value);
								break;
							case 9:
								var value = /** @type {string} */ (reader.readString());
								msg.setExceptionTraceback(value);
								break;
							case 10:
								var value = /** @type {string} */ (reader.readString());
								msg.setNluSessionName(value);
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.ondewo.sip.SipStatus.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.ondewo.sip.SipStatus.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.ondewo.sip.SipStatus} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.ondewo.sip.SipStatus.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getAccountName();
					if (f.length > 0) {
						writer.writeString(1, f);
					}
					f = message.getTimestamp();
					if (f != null) {
						writer.writeMessage(2, f, google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter);
					}
					f = message.getStatusType();
					if (f !== 0.0) {
						writer.writeEnum(3, f);
					}
					f = message.getCalleeId();
					if (f.length > 0) {
						writer.writeString(4, f);
					}
					f = message.getTransferCallId();
					if (f.length > 0) {
						writer.writeString(5, f);
					}
					f = message.getHeadersMap(true);
					if (f && f.getLength() > 0) {
						f.serializeBinary(
							6,
							writer,
							jspb.BinaryWriter.prototype.writeString,
							jspb.BinaryWriter.prototype.writeString
						);
					}
					f = message.getDescription();
					if (f.length > 0) {
						writer.writeString(7, f);
					}
					f = message.getExceptionName();
					if (f.length > 0) {
						writer.writeString(8, f);
					}
					f = message.getExceptionTraceback();
					if (f.length > 0) {
						writer.writeString(9, f);
					}
					f = message.getNluSessionName();
					if (f.length > 0) {
						writer.writeString(10, f);
					}
				};

				/**
				 * @enum {number}
				 */
				proto.ondewo.sip.SipStatus.StatusType = {
					NO_SESSION: 0,
					REGISTERED: 1,
					READY: 2,
					INCOMING_CALL_INITIATED: 3,
					OUTGOING_CALL_INITIATED: 4,
					OUTGOING_CALL_CONNECTED: 5,
					INCOMING_CALL_CONNECTED: 6,
					TRANSFER_CALL_INITIATED: 7,
					SOFT_HANGUP_INITIATED: 8,
					HARD_HANGUP_INITIATED: 9,
					INCOMING_CALL_FAILED: 10,
					OUTGOING_CALL_FAILED: 11,
					INCOMING_CALL_FINISHED: 12,
					OUTGOING_CALL_FINISHED: 13,
					SESSION_REGISTRATION_FAILED: 14,
					SESSION_STARTED: 15,
					SESSION_ENDED: 16,
					TRANSFER_CALL_FAILED: 17,
					MICROPHONE_MUTED: 18,
					MICROPHONE_UNMUTED: 19,
					MICROPHONE_WAV_FILES_PLAYED: 20,
					NO_ONGOING_CALL: 21
				};

				/**
				 * optional string account_name = 1;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStatus.prototype.getAccountName = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setAccountName = function (value) {
					return jspb.Message.setProto3StringField(this, 1, value);
				};

				/**
				 * optional google.protobuf.Timestamp timestamp = 2;
				 * @return {?proto.google.protobuf.Timestamp}
				 */
				proto.ondewo.sip.SipStatus.prototype.getTimestamp = function () {
					return /** @type{?proto.google.protobuf.Timestamp} */ (
						jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 2)
					);
				};

				/**
				 * @param {?proto.google.protobuf.Timestamp|undefined} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setTimestamp = function (value) {
					return jspb.Message.setWrapperField(this, 2, value);
				};

				/**
				 * Clears the message field making it undefined.
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.clearTimestamp = function () {
					return this.setTimestamp(undefined);
				};

				/**
				 * Returns whether this field is set.
				 * @return {boolean}
				 */
				proto.ondewo.sip.SipStatus.prototype.hasTimestamp = function () {
					return jspb.Message.getField(this, 2) != null;
				};

				/**
				 * optional StatusType status_type = 3;
				 * @return {!proto.ondewo.sip.SipStatus.StatusType}
				 */
				proto.ondewo.sip.SipStatus.prototype.getStatusType = function () {
					return /** @type {!proto.ondewo.sip.SipStatus.StatusType} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
				};

				/**
				 * @param {!proto.ondewo.sip.SipStatus.StatusType} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setStatusType = function (value) {
					return jspb.Message.setProto3EnumField(this, 3, value);
				};

				/**
				 * optional string callee_id = 4;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStatus.prototype.getCalleeId = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setCalleeId = function (value) {
					return jspb.Message.setProto3StringField(this, 4, value);
				};

				/**
				 * optional string transfer_call_id = 5;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStatus.prototype.getTransferCallId = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setTransferCallId = function (value) {
					return jspb.Message.setProto3StringField(this, 5, value);
				};

				/**
				 * map<string, string> headers = 6;
				 * @param {boolean=} opt_noLazyCreate Do not create the map if
				 * empty, instead returning `undefined`
				 * @return {!jspb.Map<string,string>}
				 */
				proto.ondewo.sip.SipStatus.prototype.getHeadersMap = function (opt_noLazyCreate) {
					return /** @type {!jspb.Map<string,string>} */ (jspb.Message.getMapField(this, 6, opt_noLazyCreate, null));
				};

				/**
				 * Clears values from the map. The map will be non-null.
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.clearHeadersMap = function () {
					this.getHeadersMap().clear();
					return this;
				};

				/**
				 * optional string description = 7;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStatus.prototype.getDescription = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setDescription = function (value) {
					return jspb.Message.setProto3StringField(this, 7, value);
				};

				/**
				 * optional string exception_name = 8;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStatus.prototype.getExceptionName = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setExceptionName = function (value) {
					return jspb.Message.setProto3StringField(this, 8, value);
				};

				/**
				 * optional string exception_traceback = 9;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStatus.prototype.getExceptionTraceback = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setExceptionTraceback = function (value) {
					return jspb.Message.setProto3StringField(this, 9, value);
				};

				/**
				 * optional string nlu_session_name = 10;
				 * @return {string}
				 */
				proto.ondewo.sip.SipStatus.prototype.getNluSessionName = function () {
					return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ''));
				};

				/**
				 * @param {string} value
				 * @return {!proto.ondewo.sip.SipStatus} returns this
				 */
				proto.ondewo.sip.SipStatus.prototype.setNluSessionName = function (value) {
					return jspb.Message.setProto3StringField(this, 10, value);
				};

				/**
				 * List of repeated fields within this message type.
				 * @private {!Array<number>}
				 * @const
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.repeatedFields_ = [1];

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.ondewo.sip.SipStatusHistoryResponse.prototype.toObject = function (opt_includeInstance) {
						return proto.ondewo.sip.SipStatusHistoryResponse.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.ondewo.sip.SipStatusHistoryResponse} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.ondewo.sip.SipStatusHistoryResponse.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								statusHistoryList: jspb.Message.toObjectList(
									msg.getStatusHistoryList(),
									proto.ondewo.sip.SipStatus.toObject,
									includeInstance
								)
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.ondewo.sip.SipStatusHistoryResponse}
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.ondewo.sip.SipStatusHistoryResponse();
					return proto.ondewo.sip.SipStatusHistoryResponse.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.ondewo.sip.SipStatusHistoryResponse} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.ondewo.sip.SipStatusHistoryResponse}
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = new proto.ondewo.sip.SipStatus();
								reader.readMessage(value, proto.ondewo.sip.SipStatus.deserializeBinaryFromReader);
								msg.addStatusHistory(value);
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.ondewo.sip.SipStatusHistoryResponse.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.ondewo.sip.SipStatusHistoryResponse} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getStatusHistoryList();
					if (f.length > 0) {
						writer.writeRepeatedMessage(1, f, proto.ondewo.sip.SipStatus.serializeBinaryToWriter);
					}
				};

				/**
				 * repeated SipStatus status_history = 1;
				 * @return {!Array<!proto.ondewo.sip.SipStatus>}
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.prototype.getStatusHistoryList = function () {
					return /** @type{!Array<!proto.ondewo.sip.SipStatus>} */ (
						jspb.Message.getRepeatedWrapperField(this, proto.ondewo.sip.SipStatus, 1)
					);
				};

				/**
				 * @param {!Array<!proto.ondewo.sip.SipStatus>} value
				 * @return {!proto.ondewo.sip.SipStatusHistoryResponse} returns this
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.prototype.setStatusHistoryList = function (value) {
					return jspb.Message.setRepeatedWrapperField(this, 1, value);
				};

				/**
				 * @param {!proto.ondewo.sip.SipStatus=} opt_value
				 * @param {number=} opt_index
				 * @return {!proto.ondewo.sip.SipStatus}
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.prototype.addStatusHistory = function (opt_value, opt_index) {
					return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.ondewo.sip.SipStatus, opt_index);
				};

				/**
				 * Clears the list making it empty but non-null.
				 * @return {!proto.ondewo.sip.SipStatusHistoryResponse} returns this
				 */
				proto.ondewo.sip.SipStatusHistoryResponse.prototype.clearStatusHistoryList = function () {
					return this.setStatusHistoryList([]);
				};

				/**
				 * List of repeated fields within this message type.
				 * @private {!Array<number>}
				 * @const
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.repeatedFields_ = [1];

				if (jspb.Message.GENERATE_TO_OBJECT) {
					/**
					 * Creates an object representation of this proto.
					 * Field names that are reserved in JavaScript and will be renamed to pb_name.
					 * Optional fields that are not set will be set to undefined.
					 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
					 * For the list of reserved names please see:
					 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
					 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
					 *     JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @return {!Object}
					 */
					proto.ondewo.sip.SipPlayWavFilesRequest.prototype.toObject = function (opt_includeInstance) {
						return proto.ondewo.sip.SipPlayWavFilesRequest.toObject(opt_includeInstance, this);
					};

					/**
					 * Static version of the {@see toObject} method.
					 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
					 *     the JSPB instance for transitional soy proto support:
					 *     http://goto/soy-param-migration
					 * @param {!proto.ondewo.sip.SipPlayWavFilesRequest} msg The msg instance to transform.
					 * @return {!Object}
					 * @suppress {unusedLocalVariables} f is only used for nested messages
					 */
					proto.ondewo.sip.SipPlayWavFilesRequest.toObject = function (includeInstance, msg) {
						var f,
							obj = {
								wavFilesList: msg.getWavFilesList_asB64()
							};

						if (includeInstance) {
							obj.$jspbMessageInstance = msg;
						}
						return obj;
					};
				}

				/**
				 * Deserializes binary data (in protobuf wire format).
				 * @param {jspb.ByteSource} bytes The bytes to deserialize.
				 * @return {!proto.ondewo.sip.SipPlayWavFilesRequest}
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.deserializeBinary = function (bytes) {
					var reader = new jspb.BinaryReader(bytes);
					var msg = new proto.ondewo.sip.SipPlayWavFilesRequest();
					return proto.ondewo.sip.SipPlayWavFilesRequest.deserializeBinaryFromReader(msg, reader);
				};

				/**
				 * Deserializes binary data (in protobuf wire format) from the
				 * given reader into the given message object.
				 * @param {!proto.ondewo.sip.SipPlayWavFilesRequest} msg The message object to deserialize into.
				 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
				 * @return {!proto.ondewo.sip.SipPlayWavFilesRequest}
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.deserializeBinaryFromReader = function (msg, reader) {
					while (reader.nextField()) {
						if (reader.isEndGroup()) {
							break;
						}
						var field = reader.getFieldNumber();
						switch (field) {
							case 1:
								var value = /** @type {!Uint8Array} */ (reader.readBytes());
								msg.addWavFiles(value);
								break;
							default:
								reader.skipField();
								break;
						}
					}
					return msg;
				};

				/**
				 * Serializes the message to binary data (in protobuf wire format).
				 * @return {!Uint8Array}
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.prototype.serializeBinary = function () {
					var writer = new jspb.BinaryWriter();
					proto.ondewo.sip.SipPlayWavFilesRequest.serializeBinaryToWriter(this, writer);
					return writer.getResultBuffer();
				};

				/**
				 * Serializes the given message to binary data (in protobuf wire
				 * format), writing to the given BinaryWriter.
				 * @param {!proto.ondewo.sip.SipPlayWavFilesRequest} message
				 * @param {!jspb.BinaryWriter} writer
				 * @suppress {unusedLocalVariables} f is only used for nested messages
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.serializeBinaryToWriter = function (message, writer) {
					var f = undefined;
					f = message.getWavFilesList_asU8();
					if (f.length > 0) {
						writer.writeRepeatedBytes(1, f);
					}
				};

				/**
				 * repeated bytes wav_files = 1;
				 * @return {!(Array<!Uint8Array>|Array<string>)}
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.prototype.getWavFilesList = function () {
					return /** @type {!(Array<!Uint8Array>|Array<string>)} */ (jspb.Message.getRepeatedField(this, 1));
				};

				/**
				 * repeated bytes wav_files = 1;
				 * This is a type-conversion wrapper around `getWavFilesList()`
				 * @return {!Array<string>}
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.prototype.getWavFilesList_asB64 = function () {
					return /** @type {!Array<string>} */ (jspb.Message.bytesListAsB64(this.getWavFilesList()));
				};

				/**
				 * repeated bytes wav_files = 1;
				 * Note that Uint8Array is not supported on all browsers.
				 * @see http://caniuse.com/Uint8Array
				 * This is a type-conversion wrapper around `getWavFilesList()`
				 * @return {!Array<!Uint8Array>}
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.prototype.getWavFilesList_asU8 = function () {
					return /** @type {!Array<!Uint8Array>} */ (jspb.Message.bytesListAsU8(this.getWavFilesList()));
				};

				/**
				 * @param {!(Array<!Uint8Array>|Array<string>)} value
				 * @return {!proto.ondewo.sip.SipPlayWavFilesRequest} returns this
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.prototype.setWavFilesList = function (value) {
					return jspb.Message.setField(this, 1, value || []);
				};

				/**
				 * @param {!(string|Uint8Array)} value
				 * @param {number=} opt_index
				 * @return {!proto.ondewo.sip.SipPlayWavFilesRequest} returns this
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.prototype.addWavFiles = function (value, opt_index) {
					return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
				};

				/**
				 * Clears the list making it empty but non-null.
				 * @return {!proto.ondewo.sip.SipPlayWavFilesRequest} returns this
				 */
				proto.ondewo.sip.SipPlayWavFilesRequest.prototype.clearWavFilesList = function () {
					return this.setWavFilesList([]);
				};

				goog.object.extend(exports, proto.ondewo.sip);

				/***/
			},

		/***/ './public-api.js':
			/*!***********************!*\
  !*** ./public-api.js ***!
  \***********************/
			/***/ (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				'use strict';
				__webpack_require__.r(__webpack_exports__);
				/* harmony import */ var _ondewo_sip_sip_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
					/*! ././ondewo/sip/sip_grpc_web_pb */ './ondewo/sip/sip_grpc_web_pb.js'
				);
				/* harmony import */ var _ondewo_sip_sip_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0___default =
					/*#__PURE__*/ __webpack_require__.n(_ondewo_sip_sip_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0__);
				/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
				/* harmony reexport (unknown) */ for (const __WEBPACK_IMPORT_KEY__ in _ondewo_sip_sip_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0__)
					if (__WEBPACK_IMPORT_KEY__ !== 'default')
						__WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () =>
							_ondewo_sip_sip_grpc_web_pb__WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__];
				/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
				/* harmony import */ var _ondewo_sip_sip_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
					/*! ././ondewo/sip/sip_pb */ './ondewo/sip/sip_pb.js'
				);
				/* harmony import */ var _ondewo_sip_sip_pb__WEBPACK_IMPORTED_MODULE_1___default =
					/*#__PURE__*/ __webpack_require__.n(_ondewo_sip_sip_pb__WEBPACK_IMPORTED_MODULE_1__);
				/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
				/* harmony reexport (unknown) */ for (const __WEBPACK_IMPORT_KEY__ in _ondewo_sip_sip_pb__WEBPACK_IMPORTED_MODULE_1__)
					if (__WEBPACK_IMPORT_KEY__ !== 'default')
						__WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () =>
							_ondewo_sip_sip_pb__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__];
				/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
				/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
					/*! ././public-api */ './public-api.js'
				);
				/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
				/* harmony reexport (unknown) */ for (const __WEBPACK_IMPORT_KEY__ in _public_api__WEBPACK_IMPORTED_MODULE_2__)
					if (__WEBPACK_IMPORT_KEY__ !== 'default')
						__WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () =>
							_public_api__WEBPACK_IMPORTED_MODULE_2__[__WEBPACK_IMPORT_KEY__];
				/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);

				/***/
			}

		/******/
	};
	/************************************************************************/
	/******/ // The module cache
	/******/ var __webpack_module_cache__ = {};
	/******/
	/******/ // The require function
	/******/ function __webpack_require__(moduleId) {
		/******/ // Check if module is in cache
		/******/ var cachedModule = __webpack_module_cache__[moduleId];
		/******/ if (cachedModule !== undefined) {
			/******/ return cachedModule.exports;
			/******/
		}
		/******/ // Create a new module (and put it into the cache)
		/******/ var module = (__webpack_module_cache__[moduleId] = {
			/******/ // no module.id needed
			/******/ // no module.loaded needed
			/******/ exports: {}
			/******/
		});
		/******/
		/******/ // Execute the module function
		/******/ __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
		/******/
		/******/ // Return the exports of the module
		/******/ return module.exports;
		/******/
	}
	/******/
	/************************************************************************/
	/******/ /* webpack/runtime/compat get default export */
	/******/ (() => {
		/******/ // getDefaultExport function for compatibility with non-harmony modules
		/******/ __webpack_require__.n = (module) => {
			/******/ var getter = module && module.__esModule ? /******/ () => module['default'] : /******/ () => module;
			/******/ __webpack_require__.d(getter, { a: getter });
			/******/ return getter;
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/define property getters */
	/******/ (() => {
		/******/ // define getter functions for harmony exports
		/******/ __webpack_require__.d = (exports, definition) => {
			/******/ for (var key in definition) {
				/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
					/******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
					/******/
				}
				/******/
			}
			/******/
		};
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/global */
	/******/ (() => {
		/******/ __webpack_require__.g = (function () {
			/******/ if (typeof globalThis === 'object') return globalThis;
			/******/ try {
				/******/ return this || new Function('return this')();
				/******/
			} catch (e) {
				/******/ if (typeof window === 'object') return window;
				/******/
			}
			/******/
		})();
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/hasOwnProperty shorthand */
	/******/ (() => {
		/******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		/******/
	})();
	/******/
	/******/ /* webpack/runtime/make namespace object */
	/******/ (() => {
		/******/ // define __esModule on exports
		/******/ __webpack_require__.r = (exports) => {
			/******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
				/******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
				/******/
			}
			/******/ Object.defineProperty(exports, '__esModule', { value: true });
			/******/
		};
		/******/
	})();
	/******/
	/************************************************************************/
	/******/
	/******/ // startup
	/******/ // Load entry module and return exports
	/******/ // This entry module is referenced by other modules so it can't be inlined
	/******/ var __webpack_exports__ = __webpack_require__('./public-api.js');
	/******/ ondewo_sip_api = __webpack_exports__;
	/******/
	/******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLHFDQUFxQztBQUNoRCxZQUFZLDBDQUEwQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxXQUFXLHNCQUFzQjtBQUNqQyxXQUFXLFNBQVM7QUFDcEIsWUFBWSwwQ0FBMEM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxZQUFZLDBDQUEwQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzN5RCtDO0FBQ1Q7QUFDUDs7Ozs7OztVQ0YvQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQyxJOzs7OztXQ1BELHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb25kZXdvX3NpcF9hcGkvLi9ub2RlX21vZHVsZXMvZ29vZ2xlLXByb3RvYnVmL2dvb2dsZS1wcm90b2J1Zi5qcyIsIndlYnBhY2s6Ly9vbmRld29fc2lwX2FwaS8uL25vZGVfbW9kdWxlcy9nb29nbGUtcHJvdG9idWYvZ29vZ2xlL3Byb3RvYnVmL2VtcHR5X3BiLmpzIiwid2VicGFjazovL29uZGV3b19zaXBfYXBpLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS1wcm90b2J1Zi9nb29nbGUvcHJvdG9idWYvdGltZXN0YW1wX3BiLmpzIiwid2VicGFjazovL29uZGV3b19zaXBfYXBpLy4vbm9kZV9tb2R1bGVzL2dycGMtd2ViL2luZGV4LmpzIiwid2VicGFjazovL29uZGV3b19zaXBfYXBpLy4vb25kZXdvL3NpcC9zaXBfZ3JwY193ZWJfcGIuanMiLCJ3ZWJwYWNrOi8vb25kZXdvX3NpcF9hcGkvLi9vbmRld28vc2lwL3NpcF9wYi5qcyIsIndlYnBhY2s6Ly9vbmRld29fc2lwX2FwaS8uL3B1YmxpYy1hcGkuanMiLCJ3ZWJwYWNrOi8vb25kZXdvX3NpcF9hcGkvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb25kZXdvX3NpcF9hcGkvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb25kZXdvX3NpcF9hcGkvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29uZGV3b19zaXBfYXBpL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb25kZXdvX3NpcF9hcGkvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vbmRld29fc2lwX2FwaS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29uZGV3b19zaXBfYXBpL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb25kZXdvX3NpcF9hcGkvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29uZGV3b19zaXBfYXBpL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuXG4gQ29weXJpZ2h0IFRoZSBDbG9zdXJlIExpYnJhcnkgQXV0aG9ycy5cbiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuKi9cbnZhciBhYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxiLGMpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbYl09Yy52YWx1ZSl9LGU9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmd2luZG93PT09dGhpcz90aGlzOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWwmJm51bGwhPWdsb2JhbD9nbG9iYWw6dGhpcztmdW5jdGlvbiBiYShhLGIpe2lmKGIpe3ZhciBjPWU7YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoLTE7ZCsrKXt2YXIgZj1hW2RdO2YgaW4gY3x8KGNbZl09e30pO2M9Y1tmXX1hPWFbYS5sZW5ndGgtMV07ZD1jW2FdO2I9YihkKTtiIT1kJiZudWxsIT1iJiZhYShjLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fVxuZnVuY3Rpb24gY2EoYSl7dmFyIGI9MDtyZXR1cm4gZnVuY3Rpb24oKXtyZXR1cm4gYjxhLmxlbmd0aD97ZG9uZTohMSx2YWx1ZTphW2IrK119Ontkb25lOiEwfX19ZnVuY3Rpb24gZGEoKXtkYT1mdW5jdGlvbigpe307ZS5TeW1ib2x8fChlLlN5bWJvbD1lYSl9ZnVuY3Rpb24gZmEoYSxiKXt0aGlzLmE9YTthYSh0aGlzLFwiZGVzY3JpcHRpb25cIix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmJ9KX1mYS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfTt2YXIgZWE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGMpe2lmKHRoaXMgaW5zdGFuY2VvZiBhKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3JcIik7cmV0dXJuIG5ldyBmYShcImpzY29tcF9zeW1ib2xfXCIrKGN8fFwiXCIpK1wiX1wiK2IrKyxjKX12YXIgYj0wO3JldHVybiBhfSgpO1xuZnVuY3Rpb24gaGEoKXtkYSgpO3ZhciBhPWUuU3ltYm9sLml0ZXJhdG9yO2F8fChhPWUuU3ltYm9sLml0ZXJhdG9yPWUuU3ltYm9sKFwiU3ltYm9sLml0ZXJhdG9yXCIpKTtcImZ1bmN0aW9uXCIhPXR5cGVvZiBBcnJheS5wcm90b3R5cGVbYV0mJmFhKEFycmF5LnByb3RvdHlwZSxhLHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6ZnVuY3Rpb24oKXtyZXR1cm4gaWEoY2EodGhpcykpfX0pO2hhPWZ1bmN0aW9uKCl7fX1mdW5jdGlvbiBpYShhKXtoYSgpO2E9e25leHQ6YX07YVtlLlN5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gdGhpc307cmV0dXJuIGF9XG5mdW5jdGlvbiBqYShhLGIpe2hhKCk7YSBpbnN0YW5jZW9mIFN0cmluZyYmKGErPVwiXCIpO3ZhciBjPTAsZD17bmV4dDpmdW5jdGlvbigpe2lmKGM8YS5sZW5ndGgpe3ZhciBmPWMrKztyZXR1cm57dmFsdWU6YihmLGFbZl0pLGRvbmU6ITF9fWQubmV4dD1mdW5jdGlvbigpe3JldHVybntkb25lOiEwLHZhbHVlOnZvaWQgMH19O3JldHVybiBkLm5leHQoKX19O2RbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiBkfTtyZXR1cm4gZH1iYShcIkFycmF5LnByb3RvdHlwZS5lbnRyaWVzXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpmdW5jdGlvbigpe3JldHVybiBqYSh0aGlzLGZ1bmN0aW9uKGIsYyl7cmV0dXJuW2IsY119KX19KTt2YXIga2E9dGhpc3x8c2VsZjtcbmZ1bmN0aW9uIGcoYSxiLGMpe2E9YS5zcGxpdChcIi5cIik7Yz1jfHxrYTthWzBdaW4gY3x8XCJ1bmRlZmluZWRcIj09dHlwZW9mIGMuZXhlY1NjcmlwdHx8Yy5leGVjU2NyaXB0KFwidmFyIFwiK2FbMF0pO2Zvcih2YXIgZDthLmxlbmd0aCYmKGQ9YS5zaGlmdCgpKTspYS5sZW5ndGh8fHZvaWQgMD09PWI/Y1tkXSYmY1tkXSE9PU9iamVjdC5wcm90b3R5cGVbZF0/Yz1jW2RdOmM9Y1tkXT17fTpjW2RdPWJ9XG5mdW5jdGlvbiBrKGEpe3ZhciBiPXR5cGVvZiBhO2lmKFwib2JqZWN0XCI9PWIpaWYoYSl7aWYoYSBpbnN0YW5jZW9mIEFycmF5KXJldHVyblwiYXJyYXlcIjtpZihhIGluc3RhbmNlb2YgT2JqZWN0KXJldHVybiBiO3ZhciBjPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhKTtpZihcIltvYmplY3QgV2luZG93XVwiPT1jKXJldHVyblwib2JqZWN0XCI7aWYoXCJbb2JqZWN0IEFycmF5XVwiPT1jfHxcIm51bWJlclwiPT10eXBlb2YgYS5sZW5ndGgmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnNwbGljZSYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGEucHJvcGVydHlJc0VudW1lcmFibGUmJiFhLnByb3BlcnR5SXNFbnVtZXJhYmxlKFwic3BsaWNlXCIpKXJldHVyblwiYXJyYXlcIjtpZihcIltvYmplY3QgRnVuY3Rpb25dXCI9PWN8fFwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLmNhbGwmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBhLnByb3BlcnR5SXNFbnVtZXJhYmxlJiYhYS5wcm9wZXJ0eUlzRW51bWVyYWJsZShcImNhbGxcIikpcmV0dXJuXCJmdW5jdGlvblwifWVsc2UgcmV0dXJuXCJudWxsXCI7XG5lbHNlIGlmKFwiZnVuY3Rpb25cIj09YiYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIGEuY2FsbClyZXR1cm5cIm9iamVjdFwiO3JldHVybiBifWZ1bmN0aW9uIGxhKGEpe3ZhciBiPXR5cGVvZiBhO3JldHVyblwib2JqZWN0XCI9PWImJm51bGwhPWF8fFwiZnVuY3Rpb25cIj09Yn1mdW5jdGlvbiBtYShhLGIsYyl7ZyhhLGIsYyl9ZnVuY3Rpb24gbmEoYSxiKXtmdW5jdGlvbiBjKCl7fWMucHJvdG90eXBlPWIucHJvdG90eXBlO2EucHJvdG90eXBlPW5ldyBjO2EucHJvdG90eXBlLmNvbnN0cnVjdG9yPWF9O3ZhciBvYT1cImNvbnN0cnVjdG9yIGhhc093blByb3BlcnR5IGlzUHJvdG90eXBlT2YgcHJvcGVydHlJc0VudW1lcmFibGUgdG9Mb2NhbGVTdHJpbmcgdG9TdHJpbmcgdmFsdWVPZlwiLnNwbGl0KFwiIFwiKTtmdW5jdGlvbiBwYShhLGIpe2Zvcih2YXIgYyxkLGY9MTtmPGFyZ3VtZW50cy5sZW5ndGg7ZisrKXtkPWFyZ3VtZW50c1tmXTtmb3IoYyBpbiBkKWFbY109ZFtjXTtmb3IodmFyIGg9MDtoPG9hLmxlbmd0aDtoKyspYz1vYVtoXSxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZCxjKSYmKGFbY109ZFtjXSl9fTt2YXIgcWE9QXJyYXkucHJvdG90eXBlLmZvckVhY2g/ZnVuY3Rpb24oYSxiKXtBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGEsYix2b2lkIDApfTpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1hLmxlbmd0aCxkPVwic3RyaW5nXCI9PT10eXBlb2YgYT9hLnNwbGl0KFwiXCIpOmEsZj0wO2Y8YztmKyspZiBpbiBkJiZiLmNhbGwodm9pZCAwLGRbZl0sZixhKX0sbD1BcnJheS5wcm90b3R5cGUubWFwP2Z1bmN0aW9uKGEsYil7cmV0dXJuIEFycmF5LnByb3RvdHlwZS5tYXAuY2FsbChhLGIsdm9pZCAwKX06ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9YS5sZW5ndGgsZD1BcnJheShjKSxmPVwic3RyaW5nXCI9PT10eXBlb2YgYT9hLnNwbGl0KFwiXCIpOmEsaD0wO2g8YztoKyspaCBpbiBmJiYoZFtoXT1iLmNhbGwodm9pZCAwLGZbaF0saCxhKSk7cmV0dXJuIGR9O1xuZnVuY3Rpb24gcmEoYSxiLGMpe3JldHVybiAyPj1hcmd1bWVudHMubGVuZ3RoP0FycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGEsYik6QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYSxiLGMpfTtmdW5jdGlvbiBzYShhLGIsYyxkKXt2YXIgZj1cIkFzc2VydGlvbiBmYWlsZWRcIjtpZihjKXtmKz1cIjogXCIrYzt2YXIgaD1kfWVsc2UgYSYmKGYrPVwiOiBcIithLGg9Yik7dGhyb3cgRXJyb3IoZixofHxbXSk7fWZ1bmN0aW9uIG4oYSxiLGMpe2Zvcih2YXIgZD1bXSxmPTI7Zjxhcmd1bWVudHMubGVuZ3RoOysrZilkW2YtMl09YXJndW1lbnRzW2ZdO2F8fHNhKFwiXCIsbnVsbCxiLGQpO3JldHVybiBhfWZ1bmN0aW9uIHRhKGEsYixjKXtmb3IodmFyIGQ9W10sZj0yO2Y8YXJndW1lbnRzLmxlbmd0aDsrK2YpZFtmLTJdPWFyZ3VtZW50c1tmXTtcInN0cmluZ1wiIT09dHlwZW9mIGEmJnNhKFwiRXhwZWN0ZWQgc3RyaW5nIGJ1dCBnb3QgJXM6ICVzLlwiLFtrKGEpLGFdLGIsZCl9XG5mdW5jdGlvbiB1YShhLGIsYyl7Zm9yKHZhciBkPVtdLGY9MjtmPGFyZ3VtZW50cy5sZW5ndGg7KytmKWRbZi0yXT1hcmd1bWVudHNbZl07QXJyYXkuaXNBcnJheShhKXx8c2EoXCJFeHBlY3RlZCBhcnJheSBidXQgZ290ICVzOiAlcy5cIixbayhhKSxhXSxiLGQpfWZ1bmN0aW9uIHAoYSxiKXtmb3IodmFyIGM9W10sZD0xO2Q8YXJndW1lbnRzLmxlbmd0aDsrK2QpY1tkLTFdPWFyZ3VtZW50c1tkXTt0aHJvdyBFcnJvcihcIkZhaWx1cmVcIisoYT9cIjogXCIrYTpcIlwiKSxjKTt9ZnVuY3Rpb24gcShhLGIsYyxkKXtmb3IodmFyIGY9W10saD0zO2g8YXJndW1lbnRzLmxlbmd0aDsrK2gpZltoLTNdPWFyZ3VtZW50c1toXTthIGluc3RhbmNlb2YgYnx8c2EoXCJFeHBlY3RlZCBpbnN0YW5jZW9mICVzIGJ1dCBnb3QgJXMuXCIsW3ZhKGIpLHZhKGEpXSxjLGYpfVxuZnVuY3Rpb24gdmEoYSl7cmV0dXJuIGEgaW5zdGFuY2VvZiBGdW5jdGlvbj9hLmRpc3BsYXlOYW1lfHxhLm5hbWV8fFwidW5rbm93biB0eXBlIG5hbWVcIjphIGluc3RhbmNlb2YgT2JqZWN0P2EuY29uc3RydWN0b3IuZGlzcGxheU5hbWV8fGEuY29uc3RydWN0b3IubmFtZXx8T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGEpOm51bGw9PT1hP1wibnVsbFwiOnR5cGVvZiBhfTtmdW5jdGlvbiByKGEsYil7dGhpcy5jPWE7dGhpcy5iPWI7dGhpcy5hPXt9O3RoaXMuYXJyQ2xlYW49ITA7aWYoMDx0aGlzLmMubGVuZ3RoKXtmb3IoYT0wO2E8dGhpcy5jLmxlbmd0aDthKyspe2I9dGhpcy5jW2FdO3ZhciBjPWJbMF07dGhpcy5hW2MudG9TdHJpbmcoKV09bmV3IHdhKGMsYlsxXSl9dGhpcy5hcnJDbGVhbj0hMH19ZyhcImpzcGIuTWFwXCIscix2b2lkIDApO1xuci5wcm90b3R5cGUuZz1mdW5jdGlvbigpe2lmKHRoaXMuYXJyQ2xlYW4pe2lmKHRoaXMuYil7dmFyIGE9dGhpcy5hLGI7Zm9yKGIgaW4gYSlpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxiKSl7dmFyIGM9YVtiXS5hO2MmJmMuZygpfX19ZWxzZXt0aGlzLmMubGVuZ3RoPTA7YT11KHRoaXMpO2Euc29ydCgpO2ZvcihiPTA7YjxhLmxlbmd0aDtiKyspe3ZhciBkPXRoaXMuYVthW2JdXTsoYz1kLmEpJiZjLmcoKTt0aGlzLmMucHVzaChbZC5rZXksZC52YWx1ZV0pfXRoaXMuYXJyQ2xlYW49ITB9cmV0dXJuIHRoaXMuY307ci5wcm90b3R5cGUudG9BcnJheT1yLnByb3RvdHlwZS5nO1xuci5wcm90b3R5cGUuTWM9ZnVuY3Rpb24oYSxiKXtmb3IodmFyIGM9dGhpcy5nKCksZD1bXSxmPTA7ZjxjLmxlbmd0aDtmKyspe3ZhciBoPXRoaXMuYVtjW2ZdWzBdLnRvU3RyaW5nKCldO3YodGhpcyxoKTt2YXIgbT1oLmE7bT8obihiKSxkLnB1c2goW2gua2V5LGIoYSxtKV0pKTpkLnB1c2goW2gua2V5LGgudmFsdWVdKX1yZXR1cm4gZH07ci5wcm90b3R5cGUudG9PYmplY3Q9ci5wcm90b3R5cGUuTWM7ci5mcm9tT2JqZWN0PWZ1bmN0aW9uKGEsYixjKXtiPW5ldyByKFtdLGIpO2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7ZCsrKXt2YXIgZj1hW2RdWzBdLGg9YyhhW2RdWzFdKTtiLnNldChmLGgpfXJldHVybiBifTtmdW5jdGlvbiB3KGEpe3RoaXMuYT0wO3RoaXMuYj1hfXcucHJvdG90eXBlLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hPHRoaXMuYi5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6dGhpcy5iW3RoaXMuYSsrXX06e2RvbmU6ITAsdmFsdWU6dm9pZCAwfX07XG5cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiYody5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfSk7ci5wcm90b3R5cGUuSmI9ZnVuY3Rpb24oKXtyZXR1cm4gdSh0aGlzKS5sZW5ndGh9O3IucHJvdG90eXBlLmdldExlbmd0aD1yLnByb3RvdHlwZS5KYjtyLnByb3RvdHlwZS5jbGVhcj1mdW5jdGlvbigpe3RoaXMuYT17fTt0aGlzLmFyckNsZWFuPSExfTtyLnByb3RvdHlwZS5jbGVhcj1yLnByb3RvdHlwZS5jbGVhcjtyLnByb3RvdHlwZS5DYj1mdW5jdGlvbihhKXthPWEudG9TdHJpbmcoKTt2YXIgYj10aGlzLmEuaGFzT3duUHJvcGVydHkoYSk7ZGVsZXRlIHRoaXMuYVthXTt0aGlzLmFyckNsZWFuPSExO3JldHVybiBifTtyLnByb3RvdHlwZS5kZWw9ci5wcm90b3R5cGUuQ2I7XG5yLnByb3RvdHlwZS5FYj1mdW5jdGlvbigpe3ZhciBhPVtdLGI9dSh0aGlzKTtiLnNvcnQoKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9dGhpcy5hW2JbY11dO2EucHVzaChbZC5rZXksZC52YWx1ZV0pfXJldHVybiBhfTtyLnByb3RvdHlwZS5nZXRFbnRyeUxpc3Q9ci5wcm90b3R5cGUuRWI7ci5wcm90b3R5cGUuZW50cmllcz1mdW5jdGlvbigpe3ZhciBhPVtdLGI9dSh0aGlzKTtiLnNvcnQoKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9dGhpcy5hW2JbY11dO2EucHVzaChbZC5rZXksdih0aGlzLGQpXSl9cmV0dXJuIG5ldyB3KGEpfTtyLnByb3RvdHlwZS5lbnRyaWVzPXIucHJvdG90eXBlLmVudHJpZXM7ci5wcm90b3R5cGUua2V5cz1mdW5jdGlvbigpe3ZhciBhPVtdLGI9dSh0aGlzKTtiLnNvcnQoKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKylhLnB1c2godGhpcy5hW2JbY11dLmtleSk7cmV0dXJuIG5ldyB3KGEpfTtcbnIucHJvdG90eXBlLmtleXM9ci5wcm90b3R5cGUua2V5cztyLnByb3RvdHlwZS52YWx1ZXM9ZnVuY3Rpb24oKXt2YXIgYT1bXSxiPXUodGhpcyk7Yi5zb3J0KCk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspYS5wdXNoKHYodGhpcyx0aGlzLmFbYltjXV0pKTtyZXR1cm4gbmV3IHcoYSl9O3IucHJvdG90eXBlLnZhbHVlcz1yLnByb3RvdHlwZS52YWx1ZXM7ci5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbihhLGIpe3ZhciBjPXUodGhpcyk7Yy5zb3J0KCk7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspe3ZhciBmPXRoaXMuYVtjW2RdXTthLmNhbGwoYix2KHRoaXMsZiksZi5rZXksdGhpcyl9fTtyLnByb3RvdHlwZS5mb3JFYWNoPXIucHJvdG90eXBlLmZvckVhY2g7XG5yLnByb3RvdHlwZS5zZXQ9ZnVuY3Rpb24oYSxiKXt2YXIgYz1uZXcgd2EoYSk7dGhpcy5iPyhjLmE9YixjLnZhbHVlPWIuZygpKTpjLnZhbHVlPWI7dGhpcy5hW2EudG9TdHJpbmcoKV09Yzt0aGlzLmFyckNsZWFuPSExO3JldHVybiB0aGlzfTtyLnByb3RvdHlwZS5zZXQ9ci5wcm90b3R5cGUuc2V0O2Z1bmN0aW9uIHYoYSxiKXtyZXR1cm4gYS5iPyhiLmF8fChiLmE9bmV3IGEuYihiLnZhbHVlKSksYi5hKTpiLnZhbHVlfXIucHJvdG90eXBlLmdldD1mdW5jdGlvbihhKXtpZihhPXRoaXMuYVthLnRvU3RyaW5nKCldKXJldHVybiB2KHRoaXMsYSl9O3IucHJvdG90eXBlLmdldD1yLnByb3RvdHlwZS5nZXQ7ci5wcm90b3R5cGUuaGFzPWZ1bmN0aW9uKGEpe3JldHVybiBhLnRvU3RyaW5nKClpbiB0aGlzLmF9O3IucHJvdG90eXBlLmhhcz1yLnByb3RvdHlwZS5oYXM7XG5yLnByb3RvdHlwZS5KYz1mdW5jdGlvbihhLGIsYyxkLGYpe3ZhciBoPXUodGhpcyk7aC5zb3J0KCk7Zm9yKHZhciBtPTA7bTxoLmxlbmd0aDttKyspe3ZhciB0PXRoaXMuYVtoW21dXTtiLlZhKGEpO2MuY2FsbChiLDEsdC5rZXkpO3RoaXMuYj9kLmNhbGwoYiwyLHYodGhpcyx0KSxmKTpkLmNhbGwoYiwyLHQudmFsdWUpO2IuWWEoKX19O3IucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeT1yLnByb3RvdHlwZS5KYztyLmRlc2VyaWFsaXplQmluYXJ5PWZ1bmN0aW9uKGEsYixjLGQsZixoLG0pe2Zvcig7Yi5vYSgpJiYhYi5iYigpOyl7dmFyIHQ9Yi5jOzE9PXQ/aD1jLmNhbGwoYik6Mj09dCYmKGEuYj8obihmKSxtfHwobT1uZXcgYS5iKSxkLmNhbGwoYixtLGYpKTptPWQuY2FsbChiKSl9bih2b2lkIDAhPWgpO24odm9pZCAwIT1tKTthLnNldChoLG0pfTtcbmZ1bmN0aW9uIHUoYSl7YT1hLmE7dmFyIGI9W10sYztmb3IoYyBpbiBhKU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLGMpJiZiLnB1c2goYyk7cmV0dXJuIGJ9ZnVuY3Rpb24gd2EoYSxiKXt0aGlzLmtleT1hO3RoaXMudmFsdWU9Yjt0aGlzLmE9dm9pZCAwfTtmdW5jdGlvbiB4YShhKXtpZig4MTkyPj1hLmxlbmd0aClyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLGEpO2Zvcih2YXIgYj1cIlwiLGM9MDtjPGEubGVuZ3RoO2MrPTgxOTIpYis9U3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLHJhKGEsYyxjKzgxOTIpKTtyZXR1cm4gYn07dmFyIHlhPXtcIlxceDAwXCI6XCJcXFxcMFwiLFwiXFxiXCI6XCJcXFxcYlwiLFwiXFxmXCI6XCJcXFxcZlwiLFwiXFxuXCI6XCJcXFxcblwiLFwiXFxyXCI6XCJcXFxcclwiLFwiXFx0XCI6XCJcXFxcdFwiLFwiXFx4MEJcIjpcIlxcXFx4MEJcIiwnXCInOidcXFxcXCInLFwiXFxcXFwiOlwiXFxcXFxcXFxcIixcIjxcIjpcIlxcXFx1MDAzQ1wifSx6YT17XCInXCI6XCJcXFxcJ1wifTt2YXIgQWE9e30seD1udWxsO2Z1bmN0aW9uIEJhKGEsYil7dm9pZCAwPT09YiYmKGI9MCk7Q2EoKTtiPUFhW2JdO2Zvcih2YXIgYz1bXSxkPTA7ZDxhLmxlbmd0aDtkKz0zKXt2YXIgZj1hW2RdLGg9ZCsxPGEubGVuZ3RoLG09aD9hW2QrMV06MCx0PWQrMjxhLmxlbmd0aCxCPXQ/YVtkKzJdOjAsTT1mPj4yO2Y9KGYmMyk8PDR8bT4+NDttPShtJjE1KTw8MnxCPj42O0ImPTYzO3R8fChCPTY0LGh8fChtPTY0KSk7Yy5wdXNoKGJbTV0sYltmXSxiW21dfHxcIlwiLGJbQl18fFwiXCIpfXJldHVybiBjLmpvaW4oXCJcIil9ZnVuY3Rpb24gRGEoYSl7dmFyIGI9YS5sZW5ndGgsYz0zKmIvNDtjJTM/Yz1NYXRoLmZsb29yKGMpOi0xIT1cIj0uXCIuaW5kZXhPZihhW2ItMV0pJiYoYz0tMSE9XCI9LlwiLmluZGV4T2YoYVtiLTJdKT9jLTI6Yy0xKTt2YXIgZD1uZXcgVWludDhBcnJheShjKSxmPTA7RWEoYSxmdW5jdGlvbihoKXtkW2YrK109aH0pO3JldHVybiBkLnN1YmFycmF5KDAsZil9XG5mdW5jdGlvbiBFYShhLGIpe2Z1bmN0aW9uIGMoQil7Zm9yKDtkPGEubGVuZ3RoOyl7dmFyIE09YS5jaGFyQXQoZCsrKSxMYT14W01dO2lmKG51bGwhPUxhKXJldHVybiBMYTtpZighL15bXFxzXFx4YTBdKiQvLnRlc3QoTSkpdGhyb3cgRXJyb3IoXCJVbmtub3duIGJhc2U2NCBlbmNvZGluZyBhdCBjaGFyOiBcIitNKTt9cmV0dXJuIEJ9Q2EoKTtmb3IodmFyIGQ9MDs7KXt2YXIgZj1jKC0xKSxoPWMoMCksbT1jKDY0KSx0PWMoNjQpO2lmKDY0PT09dCYmLTE9PT1mKWJyZWFrO2IoZjw8MnxoPj40KTs2NCE9bSYmKGIoaDw8NCYyNDB8bT4+MiksNjQhPXQmJmIobTw8NiYxOTJ8dCkpfX1cbmZ1bmN0aW9uIENhKCl7aWYoIXgpe3g9e307Zm9yKHZhciBhPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODlcIi5zcGxpdChcIlwiKSxiPVtcIisvPVwiLFwiKy9cIixcIi1fPVwiLFwiLV8uXCIsXCItX1wiXSxjPTA7NT5jO2MrKyl7dmFyIGQ9YS5jb25jYXQoYltjXS5zcGxpdChcIlwiKSk7QWFbY109ZDtmb3IodmFyIGY9MDtmPGQubGVuZ3RoO2YrKyl7dmFyIGg9ZFtmXTt2b2lkIDA9PT14W2hdJiYoeFtoXT1mKX19fX07ZyhcImpzcGIuQ29uc3RCaW5hcnlNZXNzYWdlXCIsZnVuY3Rpb24oKXt9LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5TWVzc2FnZVwiLGZ1bmN0aW9uKCl7fSx2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5GaWVsZFR5cGVcIix7eWI6LTEsZWU6MSxGTE9BVDoyLGtlOjMsdGU6NCxqZTo1LHhiOjYsd2I6NyxCT09MOjgscmU6OSxpZToxMCxsZToxMSxjZToxMixzZToxMyxnZToxNCxtZToxNSxuZToxNixvZToxNyxwZToxOCxoZTozMCx2ZTozMX0sdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuV2lyZVR5cGVcIix7eWI6LTEsdWU6MCx4YjoxLGRlOjIscWU6MyxmZTo0LHdiOjV9LHZvaWQgMCk7XG5nKFwianNwYi5CaW5hcnlDb25zdGFudHMuRmllbGRUeXBlVG9XaXJlVHlwZVwiLGZ1bmN0aW9uKGEpe3N3aXRjaChhKXtjYXNlIDU6Y2FzZSAzOmNhc2UgMTM6Y2FzZSA0OmNhc2UgMTc6Y2FzZSAxODpjYXNlIDg6Y2FzZSAxNDpjYXNlIDMxOnJldHVybiAwO2Nhc2UgMTpjYXNlIDY6Y2FzZSAxNjpjYXNlIDMwOnJldHVybiAxO2Nhc2UgOTpjYXNlIDExOmNhc2UgMTI6cmV0dXJuIDI7Y2FzZSAyOmNhc2UgNzpjYXNlIDE1OnJldHVybiA1O2RlZmF1bHQ6cmV0dXJuLTF9fSx2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5JTlZBTElEX0ZJRUxEX05VTUJFUlwiLC0xLHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLkZMT0FUMzJfRVBTXCIsMS40MDEyOTg0NjQzMjQ4MTdFLTQ1LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLkZMT0FUMzJfTUlOXCIsMS4xNzU0OTQzNTA4MjIyODc1RS0zOCx2b2lkIDApO1xuZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLkZMT0FUMzJfTUFYXCIsMy40MDI4MjM0NjYzODUyODg2RTM4LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLkZMT0FUNjRfRVBTXCIsNC45RS0zMjQsdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuRkxPQVQ2NF9NSU5cIiwyLjIyNTA3Mzg1ODUwNzIwMTRFLTMwOCx2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5GTE9BVDY0X01BWFwiLDEuNzk3NjkzMTM0ODYyMzE1N0UzMDgsdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuVFdPX1RPXzIwXCIsMTA0ODU3Nix2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5UV09fVE9fMjNcIiw4Mzg4NjA4LHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLlRXT19UT18zMVwiLDIxNDc0ODM2NDgsdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuVFdPX1RPXzMyXCIsNDI5NDk2NzI5Nix2b2lkIDApO1xuZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLlRXT19UT181MlwiLDQ1MDM1OTk2MjczNzA0OTYsdm9pZCAwKTtnKFwianNwYi5CaW5hcnlDb25zdGFudHMuVFdPX1RPXzYzXCIsMHg3ZmZmZmZmZmZmZmZmZmZmLHZvaWQgMCk7ZyhcImpzcGIuQmluYXJ5Q29uc3RhbnRzLlRXT19UT182NFwiLDEuODQ0Njc0NDA3MzcwOTU1MkUxOSx2b2lkIDApO2coXCJqc3BiLkJpbmFyeUNvbnN0YW50cy5aRVJPX0hBU0hcIixcIlxceDAwXFx4MDBcXHgwMFxceDAwXFx4MDBcXHgwMFxceDAwXFx4MDBcIix2b2lkIDApO3ZhciB5PTAsej0wO2coXCJqc3BiLnV0aWxzLmdldFNwbGl0NjRMb3dcIixmdW5jdGlvbigpe3JldHVybiB5fSx2b2lkIDApO2coXCJqc3BiLnV0aWxzLmdldFNwbGl0NjRIaWdoXCIsZnVuY3Rpb24oKXtyZXR1cm4gen0sdm9pZCAwKTtmdW5jdGlvbiBGYShhKXt2YXIgYj1hPj4+MDthPU1hdGguZmxvb3IoKGEtYikvNDI5NDk2NzI5Nik+Pj4wO3k9Yjt6PWF9ZyhcImpzcGIudXRpbHMuc3BsaXRVaW50NjRcIixGYSx2b2lkIDApO2Z1bmN0aW9uIEEoYSl7dmFyIGI9MD5hO2E9TWF0aC5hYnMoYSk7dmFyIGM9YT4+PjA7YT1NYXRoLmZsb29yKChhLWMpLzQyOTQ5NjcyOTYpO2E+Pj49MDtiJiYoYT1+YT4+PjAsYz0ofmM+Pj4wKSsxLDQyOTQ5NjcyOTU8YyYmKGM9MCxhKyssNDI5NDk2NzI5NTxhJiYoYT0wKSkpO3k9Yzt6PWF9ZyhcImpzcGIudXRpbHMuc3BsaXRJbnQ2NFwiLEEsdm9pZCAwKTtcbmZ1bmN0aW9uIEdhKGEpe3ZhciBiPTA+YTthPTIqTWF0aC5hYnMoYSk7RmEoYSk7YT15O3ZhciBjPXo7YiYmKDA9PWE/MD09Yz9jPWE9NDI5NDk2NzI5NTooYy0tLGE9NDI5NDk2NzI5NSk6YS0tKTt5PWE7ej1jfWcoXCJqc3BiLnV0aWxzLnNwbGl0WmlnemFnNjRcIixHYSx2b2lkIDApO1xuZnVuY3Rpb24gSGEoYSl7dmFyIGI9MD5hPzE6MDthPWI/LWE6YTtpZigwPT09YSkwPDEvYT95PXo9MDooej0wLHk9MjE0NzQ4MzY0OCk7ZWxzZSBpZihpc05hTihhKSl6PTAseT0yMTQ3NDgzNjQ3O2Vsc2UgaWYoMy40MDI4MjM0NjYzODUyODg2RTM4PGEpej0wLHk9KGI8PDMxfDIxMzkwOTUwNDApPj4+MDtlbHNlIGlmKDEuMTc1NDk0MzUwODIyMjg3NUUtMzg+YSlhPU1hdGgucm91bmQoYS9NYXRoLnBvdygyLC0xNDkpKSx6PTAseT0oYjw8MzF8YSk+Pj4wO2Vsc2V7dmFyIGM9TWF0aC5mbG9vcihNYXRoLmxvZyhhKS9NYXRoLkxOMik7YSo9TWF0aC5wb3coMiwtYyk7YT1NYXRoLnJvdW5kKDgzODg2MDgqYSk7MTY3NzcyMTY8PWEmJisrYzt6PTA7eT0oYjw8MzF8YysxMjc8PDIzfGEmODM4ODYwNyk+Pj4wfX1nKFwianNwYi51dGlscy5zcGxpdEZsb2F0MzJcIixIYSx2b2lkIDApO1xuZnVuY3Rpb24gSWEoYSl7dmFyIGI9MD5hPzE6MDthPWI/LWE6YTtpZigwPT09YSl6PTA8MS9hPzA6MjE0NzQ4MzY0OCx5PTA7ZWxzZSBpZihpc05hTihhKSl6PTIxNDc0ODM2NDcseT00Mjk0OTY3Mjk1O2Vsc2UgaWYoMS43OTc2OTMxMzQ4NjIzMTU3RTMwODxhKXo9KGI8PDMxfDIxNDY0MzUwNzIpPj4+MCx5PTA7ZWxzZSBpZigyLjIyNTA3Mzg1ODUwNzIwMTRFLTMwOD5hKWEvPU1hdGgucG93KDIsLTEwNzQpLHo9KGI8PDMxfGEvNDI5NDk2NzI5Nik+Pj4wLHk9YT4+PjA7ZWxzZXt2YXIgYz1hLGQ9MDtpZigyPD1jKWZvcig7Mjw9YyYmMTAyMz5kOylkKyssYy89MjtlbHNlIGZvcig7MT5jJiYtMTAyMjxkOyljKj0yLGQtLTthKj1NYXRoLnBvdygyLC1kKTt6PShiPDwzMXxkKzEwMjM8PDIwfDEwNDg1NzYqYSYxMDQ4NTc1KT4+PjA7eT00NTAzNTk5NjI3MzcwNDk2KmE+Pj4wfX1nKFwianNwYi51dGlscy5zcGxpdEZsb2F0NjRcIixJYSx2b2lkIDApO1xuZnVuY3Rpb24gQyhhKXt2YXIgYj1hLmNoYXJDb2RlQXQoNCksYz1hLmNoYXJDb2RlQXQoNSksZD1hLmNoYXJDb2RlQXQoNiksZj1hLmNoYXJDb2RlQXQoNyk7eT1hLmNoYXJDb2RlQXQoMCkrKGEuY2hhckNvZGVBdCgxKTw8OCkrKGEuY2hhckNvZGVBdCgyKTw8MTYpKyhhLmNoYXJDb2RlQXQoMyk8PDI0KT4+PjA7ej1iKyhjPDw4KSsoZDw8MTYpKyhmPDwyNCk+Pj4wfWcoXCJqc3BiLnV0aWxzLnNwbGl0SGFzaDY0XCIsQyx2b2lkIDApO2Z1bmN0aW9uIEQoYSxiKXtyZXR1cm4gNDI5NDk2NzI5NipiKyhhPj4+MCl9ZyhcImpzcGIudXRpbHMuam9pblVpbnQ2NFwiLEQsdm9pZCAwKTtmdW5jdGlvbiBFKGEsYil7dmFyIGM9YiYyMTQ3NDgzNjQ4O2MmJihhPX5hKzE+Pj4wLGI9fmI+Pj4wLDA9PWEmJihiPWIrMT4+PjApKTthPUQoYSxiKTtyZXR1cm4gYz8tYTphfWcoXCJqc3BiLnV0aWxzLmpvaW5JbnQ2NFwiLEUsdm9pZCAwKTtcbmZ1bmN0aW9uIEphKGEsYixjKXt2YXIgZD1iPj4zMTtyZXR1cm4gYyhhPDwxXmQsKGI8PDF8YT4+PjMxKV5kKX1nKFwianNwYi51dGlscy50b1ppZ3phZzY0XCIsSmEsdm9pZCAwKTtmdW5jdGlvbiBLYShhLGIpe3JldHVybiBNYShhLGIsRSl9ZyhcImpzcGIudXRpbHMuam9pblppZ3phZzY0XCIsS2Esdm9pZCAwKTtmdW5jdGlvbiBNYShhLGIsYyl7dmFyIGQ9LShhJjEpO3JldHVybiBjKChhPj4+MXxiPDwzMSleZCxiPj4+MV5kKX1nKFwianNwYi51dGlscy5mcm9tWmlnemFnNjRcIixNYSx2b2lkIDApO2Z1bmN0aW9uIE5hKGEpe3ZhciBiPTIqKGE+PjMxKSsxLGM9YT4+PjIzJjI1NTthJj04Mzg4NjA3O3JldHVybiAyNTU9PWM/YT9OYU46SW5maW5pdHkqYjowPT1jP2IqTWF0aC5wb3coMiwtMTQ5KSphOmIqTWF0aC5wb3coMixjLTE1MCkqKGErTWF0aC5wb3coMiwyMykpfWcoXCJqc3BiLnV0aWxzLmpvaW5GbG9hdDMyXCIsTmEsdm9pZCAwKTtcbmZ1bmN0aW9uIE9hKGEsYil7dmFyIGM9MiooYj4+MzEpKzEsZD1iPj4+MjAmMjA0NzthPTQyOTQ5NjcyOTYqKGImMTA0ODU3NSkrYTtyZXR1cm4gMjA0Nz09ZD9hP05hTjpJbmZpbml0eSpjOjA9PWQ/YypNYXRoLnBvdygyLC0xMDc0KSphOmMqTWF0aC5wb3coMixkLTEwNzUpKihhKzQ1MDM1OTk2MjczNzA0OTYpfWcoXCJqc3BiLnV0aWxzLmpvaW5GbG9hdDY0XCIsT2Esdm9pZCAwKTtmdW5jdGlvbiBQYShhLGIpe3JldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKGE+Pj4wJjI1NSxhPj4+OCYyNTUsYT4+PjE2JjI1NSxhPj4+MjQmMjU1LGI+Pj4wJjI1NSxiPj4+OCYyNTUsYj4+PjE2JjI1NSxiPj4+MjQmMjU1KX1nKFwianNwYi51dGlscy5qb2luSGFzaDY0XCIsUGEsdm9pZCAwKTtnKFwianNwYi51dGlscy5ESUdJVFNcIixcIjAxMjM0NTY3ODlhYmNkZWZcIi5zcGxpdChcIlwiKSx2b2lkIDApO1xuZnVuY3Rpb24gRihhLGIpe2Z1bmN0aW9uIGMoZixoKXtmPWY/U3RyaW5nKGYpOlwiXCI7cmV0dXJuIGg/XCIwMDAwMDAwXCIuc2xpY2UoZi5sZW5ndGgpK2Y6Zn1pZigyMDk3MTUxPj1iKXJldHVyblwiXCIrRChhLGIpO3ZhciBkPShhPj4+MjR8Yjw8OCk+Pj4wJjE2Nzc3MjE1O2I9Yj4+MTYmNjU1MzU7YT0oYSYxNjc3NzIxNSkrNjc3NzIxNipkKzY3MTA2NTYqYjtkKz04MTQ3NDk3KmI7Yio9MjsxRTc8PWEmJihkKz1NYXRoLmZsb29yKGEvMUU3KSxhJT0xRTcpOzFFNzw9ZCYmKGIrPU1hdGguZmxvb3IoZC8xRTcpLGQlPTFFNyk7cmV0dXJuIGMoYiwwKStjKGQsYikrYyhhLDEpfWcoXCJqc3BiLnV0aWxzLmpvaW5VbnNpZ25lZERlY2ltYWxTdHJpbmdcIixGLHZvaWQgMCk7ZnVuY3Rpb24gRyhhLGIpe3ZhciBjPWImMjE0NzQ4MzY0ODtjJiYoYT1+YSsxPj4+MCxiPX5iKygwPT1hPzE6MCk+Pj4wKTthPUYoYSxiKTtyZXR1cm4gYz9cIi1cIithOmF9XG5nKFwianNwYi51dGlscy5qb2luU2lnbmVkRGVjaW1hbFN0cmluZ1wiLEcsdm9pZCAwKTtmdW5jdGlvbiBRYShhLGIpe0MoYSk7YT15O3ZhciBjPXo7cmV0dXJuIGI/RyhhLGMpOkYoYSxjKX1nKFwianNwYi51dGlscy5oYXNoNjRUb0RlY2ltYWxTdHJpbmdcIixRYSx2b2lkIDApO2coXCJqc3BiLnV0aWxzLmhhc2g2NEFycmF5VG9EZWNpbWFsU3RyaW5nc1wiLGZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPUFycmF5KGEubGVuZ3RoKSxkPTA7ZDxhLmxlbmd0aDtkKyspY1tkXT1RYShhW2RdLGIpO3JldHVybiBjfSx2b2lkIDApO1xuZnVuY3Rpb24gSChhKXtmdW5jdGlvbiBiKG0sdCl7Zm9yKHZhciBCPTA7OD5CJiYoMSE9PW18fDA8dCk7QisrKXQ9bSpmW0JdK3QsZltCXT10JjI1NSx0Pj4+PTh9ZnVuY3Rpb24gYygpe2Zvcih2YXIgbT0wOzg+bTttKyspZlttXT1+ZlttXSYyNTV9bigwPGEubGVuZ3RoKTt2YXIgZD0hMTtcIi1cIj09PWFbMF0mJihkPSEwLGE9YS5zbGljZSgxKSk7Zm9yKHZhciBmPVswLDAsMCwwLDAsMCwwLDBdLGg9MDtoPGEubGVuZ3RoO2grKyliKDEwLGEuY2hhckNvZGVBdChoKS00OCk7ZCYmKGMoKSxiKDEsMSkpO3JldHVybiB4YShmKX1nKFwianNwYi51dGlscy5kZWNpbWFsU3RyaW5nVG9IYXNoNjRcIixILHZvaWQgMCk7ZyhcImpzcGIudXRpbHMuc3BsaXREZWNpbWFsU3RyaW5nXCIsZnVuY3Rpb24oYSl7QyhIKGEpKX0sdm9pZCAwKTtmdW5jdGlvbiBSYShhKXtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZSgxMD5hPzQ4K2E6ODcrYSl9XG5mdW5jdGlvbiBTYShhKXtyZXR1cm4gOTc8PWE/YS05NysxMDphLTQ4fWcoXCJqc3BiLnV0aWxzLmhhc2g2NFRvSGV4U3RyaW5nXCIsZnVuY3Rpb24oYSl7dmFyIGI9QXJyYXkoMTgpO2JbMF09XCIwXCI7YlsxXT1cInhcIjtmb3IodmFyIGM9MDs4PmM7YysrKXt2YXIgZD1hLmNoYXJDb2RlQXQoNy1jKTtiWzIqYysyXT1SYShkPj40KTtiWzIqYyszXT1SYShkJjE1KX1yZXR1cm4gYi5qb2luKFwiXCIpfSx2b2lkIDApO2coXCJqc3BiLnV0aWxzLmhleFN0cmluZ1RvSGFzaDY0XCIsZnVuY3Rpb24oYSl7YT1hLnRvTG93ZXJDYXNlKCk7bigxOD09YS5sZW5ndGgpO24oXCIwXCI9PWFbMF0pO24oXCJ4XCI9PWFbMV0pO2Zvcih2YXIgYj1cIlwiLGM9MDs4PmM7YysrKWI9U3RyaW5nLmZyb21DaGFyQ29kZSgxNipTYShhLmNoYXJDb2RlQXQoMipjKzIpKStTYShhLmNoYXJDb2RlQXQoMipjKzMpKSkrYjtyZXR1cm4gYn0sdm9pZCAwKTtcbmcoXCJqc3BiLnV0aWxzLmhhc2g2NFRvTnVtYmVyXCIsZnVuY3Rpb24oYSxiKXtDKGEpO2E9eTt2YXIgYz16O3JldHVybiBiP0UoYSxjKTpEKGEsYyl9LHZvaWQgMCk7ZyhcImpzcGIudXRpbHMubnVtYmVyVG9IYXNoNjRcIixmdW5jdGlvbihhKXtBKGEpO3JldHVybiBQYSh5LHopfSx2b2lkIDApO2coXCJqc3BiLnV0aWxzLmNvdW50VmFyaW50c1wiLGZ1bmN0aW9uKGEsYixjKXtmb3IodmFyIGQ9MCxmPWI7ZjxjO2YrKylkKz1hW2ZdPj43O3JldHVybiBjLWItZH0sdm9pZCAwKTtcbmcoXCJqc3BiLnV0aWxzLmNvdW50VmFyaW50RmllbGRzXCIsZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGY9MDtkKj04O2lmKDEyOD5kKWZvcig7YjxjJiZhW2IrK109PWQ7KWZvcihmKys7Oyl7dmFyIGg9YVtiKytdO2lmKDA9PShoJjEyOCkpYnJlYWt9ZWxzZSBmb3IoO2I8Yzspe2ZvcihoPWQ7MTI4PGg7KXtpZihhW2JdIT0oaCYxMjd8MTI4KSlyZXR1cm4gZjtiKys7aD4+PTd9aWYoYVtiKytdIT1oKWJyZWFrO2ZvcihmKys7aD1hW2IrK10sMCE9KGgmMTI4KTspO31yZXR1cm4gZn0sdm9pZCAwKTtmdW5jdGlvbiBUYShhLGIsYyxkLGYpe3ZhciBoPTA7aWYoMTI4PmQpZm9yKDtiPGMmJmFbYisrXT09ZDspaCsrLGIrPWY7ZWxzZSBmb3IoO2I8Yzspe2Zvcih2YXIgbT1kOzEyODxtOyl7aWYoYVtiKytdIT0obSYxMjd8MTI4KSlyZXR1cm4gaDttPj49N31pZihhW2IrK10hPW0pYnJlYWs7aCsrO2IrPWZ9cmV0dXJuIGh9XG5nKFwianNwYi51dGlscy5jb3VudEZpeGVkMzJGaWVsZHNcIixmdW5jdGlvbihhLGIsYyxkKXtyZXR1cm4gVGEoYSxiLGMsOCpkKzUsNCl9LHZvaWQgMCk7ZyhcImpzcGIudXRpbHMuY291bnRGaXhlZDY0RmllbGRzXCIsZnVuY3Rpb24oYSxiLGMsZCl7cmV0dXJuIFRhKGEsYixjLDgqZCsxLDgpfSx2b2lkIDApO2coXCJqc3BiLnV0aWxzLmNvdW50RGVsaW1pdGVkRmllbGRzXCIsZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGY9MDtmb3IoZD04KmQrMjtiPGM7KXtmb3IodmFyIGg9ZDsxMjg8aDspe2lmKGFbYisrXSE9KGgmMTI3fDEyOCkpcmV0dXJuIGY7aD4+PTd9aWYoYVtiKytdIT1oKWJyZWFrO2YrKztmb3IodmFyIG09MCx0PTE7aD1hW2IrK10sbSs9KGgmMTI3KSp0LHQqPTEyOCwwIT0oaCYxMjgpOyk7Yis9bX1yZXR1cm4gZn0sdm9pZCAwKTtcbmcoXCJqc3BiLnV0aWxzLmRlYnVnQnl0ZXNUb1RleHRGb3JtYXRcIixmdW5jdGlvbihhKXt2YXIgYj0nXCInO2lmKGEpe2E9VWEoYSk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYis9XCJcXFxceFwiLDE2PmFbY10mJihiKz1cIjBcIiksYis9YVtjXS50b1N0cmluZygxNil9cmV0dXJuIGIrJ1wiJ30sdm9pZCAwKTtcbmcoXCJqc3BiLnV0aWxzLmRlYnVnU2NhbGFyVG9UZXh0Rm9ybWF0XCIsZnVuY3Rpb24oYSl7aWYoXCJzdHJpbmdcIj09PXR5cGVvZiBhKXthPVN0cmluZyhhKTtmb3IodmFyIGI9WydcIiddLGM9MDtjPGEubGVuZ3RoO2MrKyl7dmFyIGQ9YS5jaGFyQXQoYyksZj1kLmNoYXJDb2RlQXQoMCksaD1jKzEsbTtpZighKG09eWFbZF0pKXtpZighKDMxPGYmJjEyNz5mKSlpZihmPWQsZiBpbiB6YSlkPXphW2ZdO2Vsc2UgaWYoZiBpbiB5YSlkPXphW2ZdPXlhW2ZdO2Vsc2V7bT1mLmNoYXJDb2RlQXQoMCk7aWYoMzE8bSYmMTI3Pm0pZD1mO2Vsc2V7aWYoMjU2Pm0pe2lmKGQ9XCJcXFxceFwiLDE2Pm18fDI1NjxtKWQrPVwiMFwifWVsc2UgZD1cIlxcXFx1XCIsNDA5Nj5tJiYoZCs9XCIwXCIpO2QrPW0udG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9ZD16YVtmXT1kfW09ZH1iW2hdPW19Yi5wdXNoKCdcIicpO2E9Yi5qb2luKFwiXCIpfWVsc2UgYT1hLnRvU3RyaW5nKCk7cmV0dXJuIGF9LHZvaWQgMCk7XG5nKFwianNwYi51dGlscy5zdHJpbmdUb0J5dGVBcnJheVwiLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1uZXcgVWludDhBcnJheShhLmxlbmd0aCksYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7aWYoMjU1PGQpdGhyb3cgRXJyb3IoXCJDb252ZXJzaW9uIGVycm9yOiBzdHJpbmcgY29udGFpbnMgY29kZXBvaW50IG91dHNpZGUgb2YgYnl0ZSByYW5nZVwiKTtiW2NdPWR9cmV0dXJuIGJ9LHZvaWQgMCk7XG5mdW5jdGlvbiBVYShhKXtpZihhLmNvbnN0cnVjdG9yPT09VWludDhBcnJheSlyZXR1cm4gYTtpZihhLmNvbnN0cnVjdG9yPT09QXJyYXlCdWZmZXIpcmV0dXJuIG5ldyBVaW50OEFycmF5KGEpO2lmKGEuY29uc3RydWN0b3I9PT1BcnJheSlyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYSk7aWYoYS5jb25zdHJ1Y3Rvcj09PVN0cmluZylyZXR1cm4gRGEoYSk7aWYoYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpcmV0dXJuIG5ldyBVaW50OEFycmF5KGEuYnVmZmVyLGEuYnl0ZU9mZnNldCxhLmJ5dGVMZW5ndGgpO3AoXCJUeXBlIG5vdCBjb252ZXJ0aWJsZSB0byBVaW50OEFycmF5LlwiKTtyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoMCl9ZyhcImpzcGIudXRpbHMuYnl0ZVNvdXJjZVRvVWludDhBcnJheVwiLFVhLHZvaWQgMCk7ZnVuY3Rpb24gSShhLGIsYyl7dGhpcy5iPW51bGw7dGhpcy5hPXRoaXMuYz10aGlzLmg9MDt0aGlzLnY9ITE7YSYmdGhpcy5IKGEsYixjKX1nKFwianNwYi5CaW5hcnlEZWNvZGVyXCIsSSx2b2lkIDApO3ZhciBWYT1bXTtJLmdldEluc3RhbmNlQ2FjaGVMZW5ndGg9ZnVuY3Rpb24oKXtyZXR1cm4gVmEubGVuZ3RofTtmdW5jdGlvbiBXYShhLGIsYyl7aWYoVmEubGVuZ3RoKXt2YXIgZD1WYS5wb3AoKTthJiZkLkgoYSxiLGMpO3JldHVybiBkfXJldHVybiBuZXcgSShhLGIsYyl9SS5hbGxvYz1XYTtJLnByb3RvdHlwZS5DYT1mdW5jdGlvbigpe3RoaXMuY2xlYXIoKTsxMDA+VmEubGVuZ3RoJiZWYS5wdXNoKHRoaXMpfTtJLnByb3RvdHlwZS5mcmVlPUkucHJvdG90eXBlLkNhO0kucHJvdG90eXBlLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIFdhKHRoaXMuYix0aGlzLmgsdGhpcy5jLXRoaXMuaCl9O0kucHJvdG90eXBlLmNsb25lPUkucHJvdG90eXBlLmNsb25lO1xuSS5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLmI9bnVsbDt0aGlzLmE9dGhpcy5jPXRoaXMuaD0wO3RoaXMudj0hMX07SS5wcm90b3R5cGUuY2xlYXI9SS5wcm90b3R5cGUuY2xlYXI7SS5wcm90b3R5cGUuWT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O0kucHJvdG90eXBlLmdldEJ1ZmZlcj1JLnByb3RvdHlwZS5ZO0kucHJvdG90eXBlLkg9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuYj1VYShhKTt0aGlzLmg9dm9pZCAwIT09Yj9iOjA7dGhpcy5jPXZvaWQgMCE9PWM/dGhpcy5oK2M6dGhpcy5iLmxlbmd0aDt0aGlzLmE9dGhpcy5ofTtJLnByb3RvdHlwZS5zZXRCbG9jaz1JLnByb3RvdHlwZS5IO0kucHJvdG90eXBlLkRiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY307SS5wcm90b3R5cGUuZ2V0RW5kPUkucHJvdG90eXBlLkRiO0kucHJvdG90eXBlLnNldEVuZD1mdW5jdGlvbihhKXt0aGlzLmM9YX07SS5wcm90b3R5cGUuc2V0RW5kPUkucHJvdG90eXBlLnNldEVuZDtcbkkucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5hPXRoaXMuaH07SS5wcm90b3R5cGUucmVzZXQ9SS5wcm90b3R5cGUucmVzZXQ7SS5wcm90b3R5cGUuQj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmF9O0kucHJvdG90eXBlLmdldEN1cnNvcj1JLnByb3RvdHlwZS5CO0kucHJvdG90eXBlLk1hPWZ1bmN0aW9uKGEpe3RoaXMuYT1hfTtJLnByb3RvdHlwZS5zZXRDdXJzb3I9SS5wcm90b3R5cGUuTWE7SS5wcm90b3R5cGUuYWR2YW5jZT1mdW5jdGlvbihhKXt0aGlzLmErPWE7bih0aGlzLmE8PXRoaXMuYyl9O0kucHJvdG90eXBlLmFkdmFuY2U9SS5wcm90b3R5cGUuYWR2YW5jZTtJLnByb3RvdHlwZS55YT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmE9PXRoaXMuY307SS5wcm90b3R5cGUuYXRFbmQ9SS5wcm90b3R5cGUueWE7SS5wcm90b3R5cGUuUWI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hPnRoaXMuY307SS5wcm90b3R5cGUucGFzdEVuZD1JLnByb3RvdHlwZS5RYjtcbkkucHJvdG90eXBlLmdldEVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudnx8MD50aGlzLmF8fHRoaXMuYT50aGlzLmN9O0kucHJvdG90eXBlLmdldEVycm9yPUkucHJvdG90eXBlLmdldEVycm9yO0kucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7Zm9yKHZhciBiPTEyOCxjPTAsZD0wLGY9MDs0PmYmJjEyODw9YjtmKyspYj10aGlzLmJbdGhpcy5hKytdLGN8PShiJjEyNyk8PDcqZjsxMjg8PWImJihiPXRoaXMuYlt0aGlzLmErK10sY3w9KGImMTI3KTw8MjgsZHw9KGImMTI3KT4+NCk7aWYoMTI4PD1iKWZvcihmPTA7NT5mJiYxMjg8PWI7ZisrKWI9dGhpcy5iW3RoaXMuYSsrXSxkfD0oYiYxMjcpPDw3KmYrMztpZigxMjg+YilyZXR1cm4gYShjPj4+MCxkPj4+MCk7cChcIkZhaWxlZCB0byByZWFkIHZhcmludCwgZW5jb2RpbmcgaXMgaW52YWxpZC5cIik7dGhpcy52PSEwfTtJLnByb3RvdHlwZS5yZWFkU3BsaXRWYXJpbnQ2ND1JLnByb3RvdHlwZS53O1xuSS5wcm90b3R5cGUuZWE9ZnVuY3Rpb24oYSl7cmV0dXJuIHRoaXMudyhmdW5jdGlvbihiLGMpe3JldHVybiBNYShiLGMsYSl9KX07SS5wcm90b3R5cGUucmVhZFNwbGl0WmlnemFnVmFyaW50NjQ9SS5wcm90b3R5cGUuZWE7SS5wcm90b3R5cGUudGE9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5iLGM9dGhpcy5hO3RoaXMuYSs9ODtmb3IodmFyIGQ9MCxmPTAsaD1jKzc7aD49YztoLS0pZD1kPDw4fGJbaF0sZj1mPDw4fGJbaCs0XTtyZXR1cm4gYShkLGYpfTtJLnByb3RvdHlwZS5yZWFkU3BsaXRGaXhlZDY0PUkucHJvdG90eXBlLnRhO0kucHJvdG90eXBlLmtiPWZ1bmN0aW9uKCl7Zm9yKDt0aGlzLmJbdGhpcy5hXSYxMjg7KXRoaXMuYSsrO3RoaXMuYSsrfTtJLnByb3RvdHlwZS5za2lwVmFyaW50PUkucHJvdG90eXBlLmtiO0kucHJvdG90eXBlLm1iPWZ1bmN0aW9uKGEpe2Zvcig7MTI4PGE7KXRoaXMuYS0tLGE+Pj49Nzt0aGlzLmEtLX07SS5wcm90b3R5cGUudW5za2lwVmFyaW50PUkucHJvdG90eXBlLm1iO1xuSS5wcm90b3R5cGUubz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYjt2YXIgYj1hW3RoaXMuYV07dmFyIGM9YiYxMjc7aWYoMTI4PmIpcmV0dXJuIHRoaXMuYSs9MSxuKHRoaXMuYTw9dGhpcy5jKSxjO2I9YVt0aGlzLmErMV07Y3w9KGImMTI3KTw8NztpZigxMjg+YilyZXR1cm4gdGhpcy5hKz0yLG4odGhpcy5hPD10aGlzLmMpLGM7Yj1hW3RoaXMuYSsyXTtjfD0oYiYxMjcpPDwxNDtpZigxMjg+YilyZXR1cm4gdGhpcy5hKz0zLG4odGhpcy5hPD10aGlzLmMpLGM7Yj1hW3RoaXMuYSszXTtjfD0oYiYxMjcpPDwyMTtpZigxMjg+YilyZXR1cm4gdGhpcy5hKz00LG4odGhpcy5hPD10aGlzLmMpLGM7Yj1hW3RoaXMuYSs0XTtjfD0oYiYxNSk8PDI4O2lmKDEyOD5iKXJldHVybiB0aGlzLmErPTUsbih0aGlzLmE8PXRoaXMuYyksYz4+PjA7dGhpcy5hKz01OzEyODw9YVt0aGlzLmErK10mJjEyODw9YVt0aGlzLmErK10mJjEyODw9YVt0aGlzLmErK10mJjEyODw9YVt0aGlzLmErK10mJjEyODw9XG5hW3RoaXMuYSsrXSYmbighMSk7bih0aGlzLmE8PXRoaXMuYyk7cmV0dXJuIGN9O0kucHJvdG90eXBlLnJlYWRVbnNpZ25lZFZhcmludDMyPUkucHJvdG90eXBlLm87SS5wcm90b3R5cGUuZGE9ZnVuY3Rpb24oKXtyZXR1cm5+fnRoaXMubygpfTtJLnByb3RvdHlwZS5yZWFkU2lnbmVkVmFyaW50MzI9SS5wcm90b3R5cGUuZGE7SS5wcm90b3R5cGUuTz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm8oKS50b1N0cmluZygpfTtJLnByb3RvdHlwZS5FYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhKCkudG9TdHJpbmcoKX07SS5wcm90b3R5cGUucmVhZFNpZ25lZFZhcmludDMyU3RyaW5nPUkucHJvdG90eXBlLkVhO0kucHJvdG90eXBlLklhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5vKCk7cmV0dXJuIGE+Pj4xXi0oYSYxKX07SS5wcm90b3R5cGUucmVhZFppZ3phZ1ZhcmludDMyPUkucHJvdG90eXBlLklhO0kucHJvdG90eXBlLkdhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudyhEKX07XG5JLnByb3RvdHlwZS5yZWFkVW5zaWduZWRWYXJpbnQ2ND1JLnByb3RvdHlwZS5HYTtJLnByb3RvdHlwZS5IYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLncoRil9O0kucHJvdG90eXBlLnJlYWRVbnNpZ25lZFZhcmludDY0U3RyaW5nPUkucHJvdG90eXBlLkhhO0kucHJvdG90eXBlLnNhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudyhFKX07SS5wcm90b3R5cGUucmVhZFNpZ25lZFZhcmludDY0PUkucHJvdG90eXBlLnNhO0kucHJvdG90eXBlLkZhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudyhHKX07SS5wcm90b3R5cGUucmVhZFNpZ25lZFZhcmludDY0U3RyaW5nPUkucHJvdG90eXBlLkZhO0kucHJvdG90eXBlLkphPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudyhLYSl9O0kucHJvdG90eXBlLnJlYWRaaWd6YWdWYXJpbnQ2ND1JLnByb3RvdHlwZS5KYTtJLnByb3RvdHlwZS5mYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmVhKFBhKX07XG5JLnByb3RvdHlwZS5yZWFkWmlnemFnVmFyaW50SGFzaDY0PUkucHJvdG90eXBlLmZiO0kucHJvdG90eXBlLkthPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZWEoRyl9O0kucHJvdG90eXBlLnJlYWRaaWd6YWdWYXJpbnQ2NFN0cmluZz1JLnByb3RvdHlwZS5LYTtJLnByb3RvdHlwZS5HYz1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYlt0aGlzLmFdO3RoaXMuYSs9MTtuKHRoaXMuYTw9dGhpcy5jKTtyZXR1cm4gYX07SS5wcm90b3R5cGUucmVhZFVpbnQ4PUkucHJvdG90eXBlLkdjO0kucHJvdG90eXBlLkVjPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5iW3RoaXMuYV0sYj10aGlzLmJbdGhpcy5hKzFdO3RoaXMuYSs9MjtuKHRoaXMuYTw9dGhpcy5jKTtyZXR1cm4gYTw8MHxiPDw4fTtJLnByb3RvdHlwZS5yZWFkVWludDE2PUkucHJvdG90eXBlLkVjO1xuSS5wcm90b3R5cGUubT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYlt0aGlzLmFdLGI9dGhpcy5iW3RoaXMuYSsxXSxjPXRoaXMuYlt0aGlzLmErMl0sZD10aGlzLmJbdGhpcy5hKzNdO3RoaXMuYSs9NDtuKHRoaXMuYTw9dGhpcy5jKTtyZXR1cm4oYTw8MHxiPDw4fGM8PDE2fGQ8PDI0KT4+PjB9O0kucHJvdG90eXBlLnJlYWRVaW50MzI9SS5wcm90b3R5cGUubTtJLnByb3RvdHlwZS5nYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMubSgpLGI9dGhpcy5tKCk7cmV0dXJuIEQoYSxiKX07SS5wcm90b3R5cGUucmVhZFVpbnQ2ND1JLnByb3RvdHlwZS5nYTtJLnByb3RvdHlwZS5oYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMubSgpLGI9dGhpcy5tKCk7cmV0dXJuIEYoYSxiKX07SS5wcm90b3R5cGUucmVhZFVpbnQ2NFN0cmluZz1JLnByb3RvdHlwZS5oYTtcbkkucHJvdG90eXBlLlhiPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5iW3RoaXMuYV07dGhpcy5hKz0xO24odGhpcy5hPD10aGlzLmMpO3JldHVybiBhPDwyND4+MjR9O0kucHJvdG90eXBlLnJlYWRJbnQ4PUkucHJvdG90eXBlLlhiO0kucHJvdG90eXBlLlZiPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5iW3RoaXMuYV0sYj10aGlzLmJbdGhpcy5hKzFdO3RoaXMuYSs9MjtuKHRoaXMuYTw9dGhpcy5jKTtyZXR1cm4oYTw8MHxiPDw4KTw8MTY+PjE2fTtJLnByb3RvdHlwZS5yZWFkSW50MTY9SS5wcm90b3R5cGUuVmI7SS5wcm90b3R5cGUuUD1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYlt0aGlzLmFdLGI9dGhpcy5iW3RoaXMuYSsxXSxjPXRoaXMuYlt0aGlzLmErMl0sZD10aGlzLmJbdGhpcy5hKzNdO3RoaXMuYSs9NDtuKHRoaXMuYTw9dGhpcy5jKTtyZXR1cm4gYTw8MHxiPDw4fGM8PDE2fGQ8PDI0fTtJLnByb3RvdHlwZS5yZWFkSW50MzI9SS5wcm90b3R5cGUuUDtcbkkucHJvdG90eXBlLmJhPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5tKCksYj10aGlzLm0oKTtyZXR1cm4gRShhLGIpfTtJLnByb3RvdHlwZS5yZWFkSW50NjQ9SS5wcm90b3R5cGUuYmE7SS5wcm90b3R5cGUuY2E9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLm0oKSxiPXRoaXMubSgpO3JldHVybiBHKGEsYil9O0kucHJvdG90eXBlLnJlYWRJbnQ2NFN0cmluZz1JLnByb3RvdHlwZS5jYTtJLnByb3RvdHlwZS5hYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMubSgpO3JldHVybiBOYShhLDApfTtJLnByb3RvdHlwZS5yZWFkRmxvYXQ9SS5wcm90b3R5cGUuYWE7SS5wcm90b3R5cGUuWj1mdW5jdGlvbigpe3ZhciBhPXRoaXMubSgpLGI9dGhpcy5tKCk7cmV0dXJuIE9hKGEsYil9O0kucHJvdG90eXBlLnJlYWREb3VibGU9SS5wcm90b3R5cGUuWjtJLnByb3RvdHlwZS5wYT1mdW5jdGlvbigpe3JldHVybiEhdGhpcy5iW3RoaXMuYSsrXX07SS5wcm90b3R5cGUucmVhZEJvb2w9SS5wcm90b3R5cGUucGE7XG5JLnByb3RvdHlwZS5yYT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmRhKCl9O0kucHJvdG90eXBlLnJlYWRFbnVtPUkucHJvdG90eXBlLnJhO1xuSS5wcm90b3R5cGUuZmE9ZnVuY3Rpb24oYSl7dmFyIGI9dGhpcy5iLGM9dGhpcy5hO2E9YythO2Zvcih2YXIgZD1bXSxmPVwiXCI7YzxhOyl7dmFyIGg9YltjKytdO2lmKDEyOD5oKWQucHVzaChoKTtlbHNlIGlmKDE5Mj5oKWNvbnRpbnVlO2Vsc2UgaWYoMjI0Pmgpe3ZhciBtPWJbYysrXTtkLnB1c2goKGgmMzEpPDw2fG0mNjMpfWVsc2UgaWYoMjQwPmgpe209YltjKytdO3ZhciB0PWJbYysrXTtkLnB1c2goKGgmMTUpPDwxMnwobSY2Myk8PDZ8dCY2Myl9ZWxzZSBpZigyNDg+aCl7bT1iW2MrK107dD1iW2MrK107dmFyIEI9YltjKytdO2g9KGgmNyk8PDE4fChtJjYzKTw8MTJ8KHQmNjMpPDw2fEImNjM7aC09NjU1MzY7ZC5wdXNoKChoPj4xMCYxMDIzKSs1NTI5NiwoaCYxMDIzKSs1NjMyMCl9ODE5Mjw9ZC5sZW5ndGgmJihmKz1TdHJpbmcuZnJvbUNoYXJDb2RlLmFwcGx5KG51bGwsZCksZC5sZW5ndGg9MCl9Zis9eGEoZCk7dGhpcy5hPWM7cmV0dXJuIGZ9O1xuSS5wcm90b3R5cGUucmVhZFN0cmluZz1JLnByb3RvdHlwZS5mYTtJLnByb3RvdHlwZS5EYz1mdW5jdGlvbigpe3ZhciBhPXRoaXMubygpO3JldHVybiB0aGlzLmZhKGEpfTtJLnByb3RvdHlwZS5yZWFkU3RyaW5nV2l0aExlbmd0aD1JLnByb3RvdHlwZS5EYztJLnByb3RvdHlwZS5xYT1mdW5jdGlvbihhKXtpZigwPmF8fHRoaXMuYSthPnRoaXMuYi5sZW5ndGgpcmV0dXJuIHRoaXMudj0hMCxwKFwiSW52YWxpZCBieXRlIGxlbmd0aCFcIiksbmV3IFVpbnQ4QXJyYXkoMCk7dmFyIGI9dGhpcy5iLnN1YmFycmF5KHRoaXMuYSx0aGlzLmErYSk7dGhpcy5hKz1hO24odGhpcy5hPD10aGlzLmMpO3JldHVybiBifTtJLnByb3RvdHlwZS5yZWFkQnl0ZXM9SS5wcm90b3R5cGUucWE7SS5wcm90b3R5cGUuaWE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy53KFBhKX07SS5wcm90b3R5cGUucmVhZFZhcmludEhhc2g2ND1JLnByb3RvdHlwZS5pYTtcbkkucHJvdG90eXBlLiQ9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmIsYj10aGlzLmEsYz1hW2JdLGQ9YVtiKzFdLGY9YVtiKzJdLGg9YVtiKzNdLG09YVtiKzRdLHQ9YVtiKzVdLEI9YVtiKzZdO2E9YVtiKzddO3RoaXMuYSs9ODtyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLGQsZixoLG0sdCxCLGEpfTtJLnByb3RvdHlwZS5yZWFkRml4ZWRIYXNoNjQ9SS5wcm90b3R5cGUuJDtmdW5jdGlvbiBKKGEsYixjKXt0aGlzLmE9V2EoYSxiLGMpO3RoaXMuTz10aGlzLmEuQigpO3RoaXMuYj10aGlzLmM9LTE7dGhpcy5oPSExO3RoaXMudj1udWxsfWcoXCJqc3BiLkJpbmFyeVJlYWRlclwiLEosdm9pZCAwKTt2YXIgSz1bXTtKLmNsZWFySW5zdGFuY2VDYWNoZT1mdW5jdGlvbigpe0s9W119O0ouZ2V0SW5zdGFuY2VDYWNoZUxlbmd0aD1mdW5jdGlvbigpe3JldHVybiBLLmxlbmd0aH07ZnVuY3Rpb24gWGEoYSxiLGMpe2lmKEsubGVuZ3RoKXt2YXIgZD1LLnBvcCgpO2EmJmQuYS5IKGEsYixjKTtyZXR1cm4gZH1yZXR1cm4gbmV3IEooYSxiLGMpfUouYWxsb2M9WGE7Si5wcm90b3R5cGUuemI9WGE7Si5wcm90b3R5cGUuYWxsb2M9Si5wcm90b3R5cGUuemI7Si5wcm90b3R5cGUuQ2E9ZnVuY3Rpb24oKXt0aGlzLmEuY2xlYXIoKTt0aGlzLmI9dGhpcy5jPS0xO3RoaXMuaD0hMTt0aGlzLnY9bnVsbDsxMDA+Sy5sZW5ndGgmJksucHVzaCh0aGlzKX07XG5KLnByb3RvdHlwZS5mcmVlPUoucHJvdG90eXBlLkNhO0oucHJvdG90eXBlLkZiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuT307Si5wcm90b3R5cGUuZ2V0RmllbGRDdXJzb3I9Si5wcm90b3R5cGUuRmI7Si5wcm90b3R5cGUuQj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmEuQigpfTtKLnByb3RvdHlwZS5nZXRDdXJzb3I9Si5wcm90b3R5cGUuQjtKLnByb3RvdHlwZS5ZPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS5ZKCl9O0oucHJvdG90eXBlLmdldEJ1ZmZlcj1KLnByb3RvdHlwZS5ZO0oucHJvdG90eXBlLkhiPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY307Si5wcm90b3R5cGUuZ2V0RmllbGROdW1iZXI9Si5wcm90b3R5cGUuSGI7Si5wcm90b3R5cGUuTGI9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtKLnByb3RvdHlwZS5nZXRXaXJlVHlwZT1KLnByb3RvdHlwZS5MYjtKLnByb3RvdHlwZS5NYj1mdW5jdGlvbigpe3JldHVybiAyPT10aGlzLmJ9O1xuSi5wcm90b3R5cGUuaXNEZWxpbWl0ZWQ9Si5wcm90b3R5cGUuTWI7Si5wcm90b3R5cGUuYmI9ZnVuY3Rpb24oKXtyZXR1cm4gND09dGhpcy5ifTtKLnByb3RvdHlwZS5pc0VuZEdyb3VwPUoucHJvdG90eXBlLmJiO0oucHJvdG90eXBlLmdldEVycm9yPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaHx8dGhpcy5hLmdldEVycm9yKCl9O0oucHJvdG90eXBlLmdldEVycm9yPUoucHJvdG90eXBlLmdldEVycm9yO0oucHJvdG90eXBlLkg9ZnVuY3Rpb24oYSxiLGMpe3RoaXMuYS5IKGEsYixjKTt0aGlzLmI9dGhpcy5jPS0xfTtKLnByb3RvdHlwZS5zZXRCbG9jaz1KLnByb3RvdHlwZS5IO0oucHJvdG90eXBlLnJlc2V0PWZ1bmN0aW9uKCl7dGhpcy5hLnJlc2V0KCk7dGhpcy5iPXRoaXMuYz0tMX07Si5wcm90b3R5cGUucmVzZXQ9Si5wcm90b3R5cGUucmVzZXQ7Si5wcm90b3R5cGUuYWR2YW5jZT1mdW5jdGlvbihhKXt0aGlzLmEuYWR2YW5jZShhKX07Si5wcm90b3R5cGUuYWR2YW5jZT1KLnByb3RvdHlwZS5hZHZhbmNlO1xuSi5wcm90b3R5cGUub2E9ZnVuY3Rpb24oKXtpZih0aGlzLmEueWEoKSlyZXR1cm4hMTtpZih0aGlzLmdldEVycm9yKCkpcmV0dXJuIHAoXCJEZWNvZGVyIGhpdCBhbiBlcnJvclwiKSwhMTt0aGlzLk89dGhpcy5hLkIoKTt2YXIgYT10aGlzLmEubygpLGI9YT4+PjM7YSY9NztpZigwIT1hJiY1IT1hJiYxIT1hJiYyIT1hJiYzIT1hJiY0IT1hKXJldHVybiBwKFwiSW52YWxpZCB3aXJlIHR5cGU6ICVzIChhdCBwb3NpdGlvbiAlcylcIixhLHRoaXMuTyksdGhpcy5oPSEwLCExO3RoaXMuYz1iO3RoaXMuYj1hO3JldHVybiEwfTtKLnByb3RvdHlwZS5uZXh0RmllbGQ9Si5wcm90b3R5cGUub2E7Si5wcm90b3R5cGUuT2E9ZnVuY3Rpb24oKXt0aGlzLmEubWIodGhpcy5jPDwzfHRoaXMuYil9O0oucHJvdG90eXBlLnVuc2tpcEhlYWRlcj1KLnByb3RvdHlwZS5PYTtcbkoucHJvdG90eXBlLkxjPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5jO2Zvcih0aGlzLk9hKCk7dGhpcy5vYSgpJiZ0aGlzLmM9PWE7KXRoaXMuQygpO3RoaXMuYS55YSgpfHx0aGlzLk9hKCl9O0oucHJvdG90eXBlLnNraXBNYXRjaGluZ0ZpZWxkcz1KLnByb3RvdHlwZS5MYztKLnByb3RvdHlwZS5sYj1mdW5jdGlvbigpezAhPXRoaXMuYj8ocChcIkludmFsaWQgd2lyZSB0eXBlIGZvciBza2lwVmFyaW50RmllbGRcIiksdGhpcy5DKCkpOnRoaXMuYS5rYigpfTtKLnByb3RvdHlwZS5za2lwVmFyaW50RmllbGQ9Si5wcm90b3R5cGUubGI7Si5wcm90b3R5cGUuZ2I9ZnVuY3Rpb24oKXtpZigyIT10aGlzLmIpcChcIkludmFsaWQgd2lyZSB0eXBlIGZvciBza2lwRGVsaW1pdGVkRmllbGRcIiksdGhpcy5DKCk7ZWxzZXt2YXIgYT10aGlzLmEubygpO3RoaXMuYS5hZHZhbmNlKGEpfX07Si5wcm90b3R5cGUuc2tpcERlbGltaXRlZEZpZWxkPUoucHJvdG90eXBlLmdiO1xuSi5wcm90b3R5cGUuaGI9ZnVuY3Rpb24oKXs1IT10aGlzLmI/KHAoXCJJbnZhbGlkIHdpcmUgdHlwZSBmb3Igc2tpcEZpeGVkMzJGaWVsZFwiKSx0aGlzLkMoKSk6dGhpcy5hLmFkdmFuY2UoNCl9O0oucHJvdG90eXBlLnNraXBGaXhlZDMyRmllbGQ9Si5wcm90b3R5cGUuaGI7Si5wcm90b3R5cGUuaWI9ZnVuY3Rpb24oKXsxIT10aGlzLmI/KHAoXCJJbnZhbGlkIHdpcmUgdHlwZSBmb3Igc2tpcEZpeGVkNjRGaWVsZFwiKSx0aGlzLkMoKSk6dGhpcy5hLmFkdmFuY2UoOCl9O0oucHJvdG90eXBlLnNraXBGaXhlZDY0RmllbGQ9Si5wcm90b3R5cGUuaWI7Si5wcm90b3R5cGUuamI9ZnVuY3Rpb24oKXt2YXIgYT10aGlzLmM7ZG97aWYoIXRoaXMub2EoKSl7cChcIlVubWF0Y2hlZCBzdGFydC1ncm91cCB0YWc6IHN0cmVhbSBFT0ZcIik7dGhpcy5oPSEwO2JyZWFrfWlmKDQ9PXRoaXMuYil7dGhpcy5jIT1hJiYocChcIlVubWF0Y2hlZCBlbmQtZ3JvdXAgdGFnXCIpLHRoaXMuaD0hMCk7YnJlYWt9dGhpcy5DKCl9d2hpbGUoMSl9O1xuSi5wcm90b3R5cGUuc2tpcEdyb3VwPUoucHJvdG90eXBlLmpiO0oucHJvdG90eXBlLkM9ZnVuY3Rpb24oKXtzd2l0Y2godGhpcy5iKXtjYXNlIDA6dGhpcy5sYigpO2JyZWFrO2Nhc2UgMTp0aGlzLmliKCk7YnJlYWs7Y2FzZSAyOnRoaXMuZ2IoKTticmVhaztjYXNlIDU6dGhpcy5oYigpO2JyZWFrO2Nhc2UgMzp0aGlzLmpiKCk7YnJlYWs7ZGVmYXVsdDpwKFwiSW52YWxpZCB3aXJlIGVuY29kaW5nIGZvciBmaWVsZC5cIil9fTtKLnByb3RvdHlwZS5za2lwRmllbGQ9Si5wcm90b3R5cGUuQztKLnByb3RvdHlwZS5IYz1mdW5jdGlvbihhLGIpe251bGw9PT10aGlzLnYmJih0aGlzLnY9e30pO24oIXRoaXMudlthXSk7dGhpcy52W2FdPWJ9O0oucHJvdG90eXBlLnJlZ2lzdGVyUmVhZENhbGxiYWNrPUoucHJvdG90eXBlLkhjO0oucHJvdG90eXBlLkljPWZ1bmN0aW9uKGEpe24obnVsbCE9PXRoaXMudik7YT10aGlzLnZbYV07bihhKTtyZXR1cm4gYSh0aGlzKX07XG5KLnByb3RvdHlwZS5ydW5SZWFkQ2FsbGJhY2s9Si5wcm90b3R5cGUuSWM7Si5wcm90b3R5cGUuWWI9ZnVuY3Rpb24oYSxiKXtuKDI9PXRoaXMuYik7dmFyIGM9dGhpcy5hLmMsZD10aGlzLmEubygpO2Q9dGhpcy5hLkIoKStkO3RoaXMuYS5zZXRFbmQoZCk7YihhLHRoaXMpO3RoaXMuYS5NYShkKTt0aGlzLmEuc2V0RW5kKGMpfTtKLnByb3RvdHlwZS5yZWFkTWVzc2FnZT1KLnByb3RvdHlwZS5ZYjtKLnByb3RvdHlwZS5VYj1mdW5jdGlvbihhLGIsYyl7bigzPT10aGlzLmIpO24odGhpcy5jPT1hKTtjKGIsdGhpcyk7dGhpcy5ofHw0PT10aGlzLmJ8fChwKFwiR3JvdXAgc3VibWVzc2FnZSBkaWQgbm90IGVuZCB3aXRoIGFuIEVORF9HUk9VUCB0YWdcIiksdGhpcy5oPSEwKX07Si5wcm90b3R5cGUucmVhZEdyb3VwPUoucHJvdG90eXBlLlViO1xuSi5wcm90b3R5cGUuR2I9ZnVuY3Rpb24oKXtuKDI9PXRoaXMuYik7dmFyIGE9dGhpcy5hLm8oKSxiPXRoaXMuYS5CKCksYz1iK2E7YT1XYSh0aGlzLmEuWSgpLGIsYSk7dGhpcy5hLk1hKGMpO3JldHVybiBhfTtKLnByb3RvdHlwZS5nZXRGaWVsZERlY29kZXI9Si5wcm90b3R5cGUuR2I7Si5wcm90b3R5cGUuUD1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLmRhKCl9O0oucHJvdG90eXBlLnJlYWRJbnQzMj1KLnByb3RvdHlwZS5QO0oucHJvdG90eXBlLldiPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuRWEoKX07Si5wcm90b3R5cGUucmVhZEludDMyU3RyaW5nPUoucHJvdG90eXBlLldiO0oucHJvdG90eXBlLmJhPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuc2EoKX07Si5wcm90b3R5cGUucmVhZEludDY0PUoucHJvdG90eXBlLmJhO0oucHJvdG90eXBlLmNhPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuRmEoKX07XG5KLnByb3RvdHlwZS5yZWFkSW50NjRTdHJpbmc9Si5wcm90b3R5cGUuY2E7Si5wcm90b3R5cGUubT1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLm8oKX07Si5wcm90b3R5cGUucmVhZFVpbnQzMj1KLnByb3RvdHlwZS5tO0oucHJvdG90eXBlLkZjPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuTygpfTtKLnByb3RvdHlwZS5yZWFkVWludDMyU3RyaW5nPUoucHJvdG90eXBlLkZjO0oucHJvdG90eXBlLmdhPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuR2EoKX07Si5wcm90b3R5cGUucmVhZFVpbnQ2ND1KLnByb3RvdHlwZS5nYTtKLnByb3RvdHlwZS5oYT1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLkhhKCl9O0oucHJvdG90eXBlLnJlYWRVaW50NjRTdHJpbmc9Si5wcm90b3R5cGUuaGE7Si5wcm90b3R5cGUuemM9ZnVuY3Rpb24oKXtuKDA9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5JYSgpfTtcbkoucHJvdG90eXBlLnJlYWRTaW50MzI9Si5wcm90b3R5cGUuemM7Si5wcm90b3R5cGUuQWM9ZnVuY3Rpb24oKXtuKDA9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5KYSgpfTtKLnByb3RvdHlwZS5yZWFkU2ludDY0PUoucHJvdG90eXBlLkFjO0oucHJvdG90eXBlLkJjPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuS2EoKX07Si5wcm90b3R5cGUucmVhZFNpbnQ2NFN0cmluZz1KLnByb3RvdHlwZS5CYztKLnByb3RvdHlwZS5SYj1mdW5jdGlvbigpe24oNT09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLm0oKX07Si5wcm90b3R5cGUucmVhZEZpeGVkMzI9Si5wcm90b3R5cGUuUmI7Si5wcm90b3R5cGUuU2I9ZnVuY3Rpb24oKXtuKDE9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5nYSgpfTtKLnByb3RvdHlwZS5yZWFkRml4ZWQ2ND1KLnByb3RvdHlwZS5TYjtKLnByb3RvdHlwZS5UYj1mdW5jdGlvbigpe24oMT09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLmhhKCl9O1xuSi5wcm90b3R5cGUucmVhZEZpeGVkNjRTdHJpbmc9Si5wcm90b3R5cGUuVGI7Si5wcm90b3R5cGUudmM9ZnVuY3Rpb24oKXtuKDU9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5QKCl9O0oucHJvdG90eXBlLnJlYWRTZml4ZWQzMj1KLnByb3RvdHlwZS52YztKLnByb3RvdHlwZS53Yz1mdW5jdGlvbigpe24oNT09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLlAoKS50b1N0cmluZygpfTtKLnByb3RvdHlwZS5yZWFkU2ZpeGVkMzJTdHJpbmc9Si5wcm90b3R5cGUud2M7Si5wcm90b3R5cGUueGM9ZnVuY3Rpb24oKXtuKDE9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5iYSgpfTtKLnByb3RvdHlwZS5yZWFkU2ZpeGVkNjQ9Si5wcm90b3R5cGUueGM7Si5wcm90b3R5cGUueWM9ZnVuY3Rpb24oKXtuKDE9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS5jYSgpfTtKLnByb3RvdHlwZS5yZWFkU2ZpeGVkNjRTdHJpbmc9Si5wcm90b3R5cGUueWM7XG5KLnByb3RvdHlwZS5hYT1mdW5jdGlvbigpe24oNT09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLmFhKCl9O0oucHJvdG90eXBlLnJlYWRGbG9hdD1KLnByb3RvdHlwZS5hYTtKLnByb3RvdHlwZS5aPWZ1bmN0aW9uKCl7bigxPT10aGlzLmIpO3JldHVybiB0aGlzLmEuWigpfTtKLnByb3RvdHlwZS5yZWFkRG91YmxlPUoucHJvdG90eXBlLlo7Si5wcm90b3R5cGUucGE9ZnVuY3Rpb24oKXtuKDA9PXRoaXMuYik7cmV0dXJuISF0aGlzLmEubygpfTtKLnByb3RvdHlwZS5yZWFkQm9vbD1KLnByb3RvdHlwZS5wYTtKLnByb3RvdHlwZS5yYT1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLnNhKCl9O0oucHJvdG90eXBlLnJlYWRFbnVtPUoucHJvdG90eXBlLnJhO0oucHJvdG90eXBlLmZhPWZ1bmN0aW9uKCl7bigyPT10aGlzLmIpO3ZhciBhPXRoaXMuYS5vKCk7cmV0dXJuIHRoaXMuYS5mYShhKX07Si5wcm90b3R5cGUucmVhZFN0cmluZz1KLnByb3RvdHlwZS5mYTtcbkoucHJvdG90eXBlLnFhPWZ1bmN0aW9uKCl7bigyPT10aGlzLmIpO3ZhciBhPXRoaXMuYS5vKCk7cmV0dXJuIHRoaXMuYS5xYShhKX07Si5wcm90b3R5cGUucmVhZEJ5dGVzPUoucHJvdG90eXBlLnFhO0oucHJvdG90eXBlLmlhPWZ1bmN0aW9uKCl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEuaWEoKX07Si5wcm90b3R5cGUucmVhZFZhcmludEhhc2g2ND1KLnByb3RvdHlwZS5pYTtKLnByb3RvdHlwZS5DYz1mdW5jdGlvbigpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLmZiKCl9O0oucHJvdG90eXBlLnJlYWRTaW50SGFzaDY0PUoucHJvdG90eXBlLkNjO0oucHJvdG90eXBlLnc9ZnVuY3Rpb24oYSl7bigwPT10aGlzLmIpO3JldHVybiB0aGlzLmEudyhhKX07Si5wcm90b3R5cGUucmVhZFNwbGl0VmFyaW50NjQ9Si5wcm90b3R5cGUudztcbkoucHJvdG90eXBlLmVhPWZ1bmN0aW9uKGEpe24oMD09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLncoZnVuY3Rpb24oYixjKXtyZXR1cm4gTWEoYixjLGEpfSl9O0oucHJvdG90eXBlLnJlYWRTcGxpdFppZ3phZ1ZhcmludDY0PUoucHJvdG90eXBlLmVhO0oucHJvdG90eXBlLiQ9ZnVuY3Rpb24oKXtuKDE9PXRoaXMuYik7cmV0dXJuIHRoaXMuYS4kKCl9O0oucHJvdG90eXBlLnJlYWRGaXhlZEhhc2g2ND1KLnByb3RvdHlwZS4kO0oucHJvdG90eXBlLnRhPWZ1bmN0aW9uKGEpe24oMT09dGhpcy5iKTtyZXR1cm4gdGhpcy5hLnRhKGEpfTtKLnByb3RvdHlwZS5yZWFkU3BsaXRGaXhlZDY0PUoucHJvdG90eXBlLnRhO2Z1bmN0aW9uIEwoYSxiKXtuKDI9PWEuYik7dmFyIGM9YS5hLm8oKTtjPWEuYS5CKCkrYztmb3IodmFyIGQ9W107YS5hLkIoKTxjOylkLnB1c2goYi5jYWxsKGEuYSkpO3JldHVybiBkfUoucHJvdG90eXBlLmdjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuZGEpfTtcbkoucHJvdG90eXBlLnJlYWRQYWNrZWRJbnQzMj1KLnByb3RvdHlwZS5nYztKLnByb3RvdHlwZS5oYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLkVhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZEludDMyU3RyaW5nPUoucHJvdG90eXBlLmhjO0oucHJvdG90eXBlLmljPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuc2EpfTtKLnByb3RvdHlwZS5yZWFkUGFja2VkSW50NjQ9Si5wcm90b3R5cGUuaWM7Si5wcm90b3R5cGUuamM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5GYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRJbnQ2NFN0cmluZz1KLnByb3RvdHlwZS5qYztKLnByb3RvdHlwZS5xYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLm8pfTtKLnByb3RvdHlwZS5yZWFkUGFja2VkVWludDMyPUoucHJvdG90eXBlLnFjO0oucHJvdG90eXBlLnJjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuTyl9O1xuSi5wcm90b3R5cGUucmVhZFBhY2tlZFVpbnQzMlN0cmluZz1KLnByb3RvdHlwZS5yYztKLnByb3RvdHlwZS5zYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLkdhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZFVpbnQ2ND1KLnByb3RvdHlwZS5zYztKLnByb3RvdHlwZS50Yz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLkhhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZFVpbnQ2NFN0cmluZz1KLnByb3RvdHlwZS50YztKLnByb3RvdHlwZS5uYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLklhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZFNpbnQzMj1KLnByb3RvdHlwZS5uYztKLnByb3RvdHlwZS5vYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLkphKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZFNpbnQ2ND1KLnByb3RvdHlwZS5vYztKLnByb3RvdHlwZS5wYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLkthKX07XG5KLnByb3RvdHlwZS5yZWFkUGFja2VkU2ludDY0U3RyaW5nPUoucHJvdG90eXBlLnBjO0oucHJvdG90eXBlLmJjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEubSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRGaXhlZDMyPUoucHJvdG90eXBlLmJjO0oucHJvdG90eXBlLmNjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuZ2EpfTtKLnByb3RvdHlwZS5yZWFkUGFja2VkRml4ZWQ2ND1KLnByb3RvdHlwZS5jYztKLnByb3RvdHlwZS5kYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLmhhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZEZpeGVkNjRTdHJpbmc9Si5wcm90b3R5cGUuZGM7Si5wcm90b3R5cGUua2M9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5QKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZFNmaXhlZDMyPUoucHJvdG90eXBlLmtjO0oucHJvdG90eXBlLmxjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuYmEpfTtcbkoucHJvdG90eXBlLnJlYWRQYWNrZWRTZml4ZWQ2ND1KLnByb3RvdHlwZS5sYztKLnByb3RvdHlwZS5tYz1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLmNhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZFNmaXhlZDY0U3RyaW5nPUoucHJvdG90eXBlLm1jO0oucHJvdG90eXBlLmZjPWZ1bmN0aW9uKCl7cmV0dXJuIEwodGhpcyx0aGlzLmEuYWEpfTtKLnByb3RvdHlwZS5yZWFkUGFja2VkRmxvYXQ9Si5wcm90b3R5cGUuZmM7Si5wcm90b3R5cGUuJGI9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5aKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZERvdWJsZT1KLnByb3RvdHlwZS4kYjtKLnByb3RvdHlwZS5aYj1mdW5jdGlvbigpe3JldHVybiBMKHRoaXMsdGhpcy5hLnBhKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZEJvb2w9Si5wcm90b3R5cGUuWmI7Si5wcm90b3R5cGUuYWM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5yYSl9O1xuSi5wcm90b3R5cGUucmVhZFBhY2tlZEVudW09Si5wcm90b3R5cGUuYWM7Si5wcm90b3R5cGUudWM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS5pYSl9O0oucHJvdG90eXBlLnJlYWRQYWNrZWRWYXJpbnRIYXNoNjQ9Si5wcm90b3R5cGUudWM7Si5wcm90b3R5cGUuZWM9ZnVuY3Rpb24oKXtyZXR1cm4gTCh0aGlzLHRoaXMuYS4kKX07Si5wcm90b3R5cGUucmVhZFBhY2tlZEZpeGVkSGFzaDY0PUoucHJvdG90eXBlLmVjO2Z1bmN0aW9uIFlhKGEsYixjLGQsZil7dGhpcy5tYT1hO3RoaXMuQmE9Yjt0aGlzLmxhPWM7dGhpcy5OYT1kO3RoaXMubmE9Zn1nKFwianNwYi5FeHRlbnNpb25GaWVsZEluZm9cIixZYSx2b2lkIDApO2Z1bmN0aW9uIFphKGEsYixjLGQsZixoKXt0aGlzLlphPWE7dGhpcy56YT1iO3RoaXMuQWE9Yzt0aGlzLldhPWQ7dGhpcy5BYj1mO3RoaXMuTmI9aH1nKFwianNwYi5FeHRlbnNpb25GaWVsZEJpbmFyeUluZm9cIixaYSx2b2lkIDApO1lhLnByb3RvdHlwZS5GPWZ1bmN0aW9uKCl7cmV0dXJuISF0aGlzLmxhfTtZYS5wcm90b3R5cGUuaXNNZXNzYWdlVHlwZT1ZYS5wcm90b3R5cGUuRjtmdW5jdGlvbiBOKCl7fWcoXCJqc3BiLk1lc3NhZ2VcIixOLHZvaWQgMCk7Ti5HRU5FUkFURV9UT19PQkpFQ1Q9ITA7Ti5HRU5FUkFURV9GUk9NX09CSkVDVD0hMDt2YXIgJGE9XCJmdW5jdGlvblwiPT10eXBlb2YgVWludDhBcnJheTtOLnByb3RvdHlwZS5JYj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O1xuTi5wcm90b3R5cGUuZ2V0SnNQYk1lc3NhZ2VJZD1OLnByb3RvdHlwZS5JYjtcbk4uaW5pdGlhbGl6ZT1mdW5jdGlvbihhLGIsYyxkLGYsaCl7YS5mPW51bGw7Ynx8KGI9Yz9bY106W10pO2EuYj1jP1N0cmluZyhjKTp2b2lkIDA7YS5EPTA9PT1jPy0xOjA7YS51PWI7YTp7Yz1hLnUubGVuZ3RoO2I9LTE7aWYoYyYmKGI9Yy0xLGM9YS51W2JdLCEobnVsbD09PWN8fFwib2JqZWN0XCIhPXR5cGVvZiBjfHxBcnJheS5pc0FycmF5KGMpfHwkYSYmYyBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpKSl7YS5HPWItYS5EO2EuaT1jO2JyZWFrIGF9LTE8ZD8oYS5HPU1hdGgubWF4KGQsYisxLWEuRCksYS5pPW51bGwpOmEuRz1OdW1iZXIuTUFYX1ZBTFVFfWEuYT17fTtpZihmKWZvcihkPTA7ZDxmLmxlbmd0aDtkKyspYj1mW2RdLGI8YS5HPyhiKz1hLkQsYS51W2JdPWEudVtiXXx8YWIpOihiYihhKSxhLmlbYl09YS5pW2JdfHxhYik7aWYoaCYmaC5sZW5ndGgpZm9yKGQ9MDtkPGgubGVuZ3RoO2QrKyljYihhLGhbZF0pfTtcbnZhciBhYj1PYmplY3QuZnJlZXplP09iamVjdC5mcmVlemUoW10pOltdO2Z1bmN0aW9uIGJiKGEpe3ZhciBiPWEuRythLkQ7YS51W2JdfHwoYS5pPWEudVtiXT17fSl9ZnVuY3Rpb24gZGIoYSxiLGMpe2Zvcih2YXIgZD1bXSxmPTA7ZjxhLmxlbmd0aDtmKyspZFtmXT1iLmNhbGwoYVtmXSxjLGFbZl0pO3JldHVybiBkfU4udG9PYmplY3RMaXN0PWRiO04udG9PYmplY3RFeHRlbnNpb249ZnVuY3Rpb24oYSxiLGMsZCxmKXtmb3IodmFyIGggaW4gYyl7dmFyIG09Y1toXSx0PWQuY2FsbChhLG0pO2lmKG51bGwhPXQpe2Zvcih2YXIgQiBpbiBtLkJhKWlmKG0uQmEuaGFzT3duUHJvcGVydHkoQikpYnJlYWs7YltCXT1tLk5hP20ubmE/ZGIodCxtLk5hLGYpOm0uTmEoZix0KTp0fX19O1xuTi5zZXJpYWxpemVCaW5hcnlFeHRlbnNpb25zPWZ1bmN0aW9uKGEsYixjLGQpe2Zvcih2YXIgZiBpbiBjKXt2YXIgaD1jW2ZdLG09aC5aYTtpZighaC5BYSl0aHJvdyBFcnJvcihcIk1lc3NhZ2UgZXh0ZW5zaW9uIHByZXNlbnQgdGhhdCB3YXMgZ2VuZXJhdGVkIHdpdGhvdXQgYmluYXJ5IHNlcmlhbGl6YXRpb24gc3VwcG9ydFwiKTt2YXIgdD1kLmNhbGwoYSxtKTtpZihudWxsIT10KWlmKG0uRigpKWlmKGguV2EpaC5BYS5jYWxsKGIsbS5tYSx0LGguV2EpO2Vsc2UgdGhyb3cgRXJyb3IoXCJNZXNzYWdlIGV4dGVuc2lvbiBwcmVzZW50IGhvbGRpbmcgc3VibWVzc2FnZSB3aXRob3V0IGJpbmFyeSBzdXBwb3J0IGVuYWJsZWQsIGFuZCBtZXNzYWdlIGlzIGJlaW5nIHNlcmlhbGl6ZWQgdG8gYmluYXJ5IGZvcm1hdFwiKTtlbHNlIGguQWEuY2FsbChiLG0ubWEsdCl9fTtcbk4ucmVhZEJpbmFyeUV4dGVuc2lvbj1mdW5jdGlvbihhLGIsYyxkLGYpe3ZhciBoPWNbYi5jXTtpZihoKXtjPWguWmE7aWYoIWguemEpdGhyb3cgRXJyb3IoXCJEZXNlcmlhbGl6aW5nIGV4dGVuc2lvbiB3aG9zZSBnZW5lcmF0ZWQgY29kZSBkb2VzIG5vdCBzdXBwb3J0IGJpbmFyeSBmb3JtYXRcIik7aWYoYy5GKCkpe3ZhciBtPW5ldyBjLmxhO2guemEuY2FsbChiLG0saC5BYil9ZWxzZSBtPWguemEuY2FsbChiKTtjLm5hJiYhaC5OYj8oYj1kLmNhbGwoYSxjKSk/Yi5wdXNoKG0pOmYuY2FsbChhLGMsW21dKTpmLmNhbGwoYSxjLG0pfWVsc2UgYi5DKCl9O2Z1bmN0aW9uIE8oYSxiKXtpZihiPGEuRyl7Yis9YS5EO3ZhciBjPWEudVtiXTtyZXR1cm4gYz09PWFiP2EudVtiXT1bXTpjfWlmKGEuaSlyZXR1cm4gYz1hLmlbYl0sYz09PWFiP2EuaVtiXT1bXTpjfU4uZ2V0RmllbGQ9TztOLmdldFJlcGVhdGVkRmllbGQ9ZnVuY3Rpb24oYSxiKXtyZXR1cm4gTyhhLGIpfTtcbmZ1bmN0aW9uIGViKGEsYil7YT1PKGEsYik7cmV0dXJuIG51bGw9PWE/YTorYX1OLmdldE9wdGlvbmFsRmxvYXRpbmdQb2ludEZpZWxkPWViO2Z1bmN0aW9uIGZiKGEsYil7YT1PKGEsYik7cmV0dXJuIG51bGw9PWE/YTohIWF9Ti5nZXRCb29sZWFuRmllbGQ9ZmI7Ti5nZXRSZXBlYXRlZEZsb2F0aW5nUG9pbnRGaWVsZD1mdW5jdGlvbihhLGIpe3ZhciBjPU8oYSxiKTthLmF8fChhLmE9e30pO2lmKCFhLmFbYl0pe2Zvcih2YXIgZD0wO2Q8Yy5sZW5ndGg7ZCsrKWNbZF09K2NbZF07YS5hW2JdPSEwfXJldHVybiBjfTtOLmdldFJlcGVhdGVkQm9vbGVhbkZpZWxkPWZ1bmN0aW9uKGEsYil7dmFyIGM9TyhhLGIpO2EuYXx8KGEuYT17fSk7aWYoIWEuYVtiXSl7Zm9yKHZhciBkPTA7ZDxjLmxlbmd0aDtkKyspY1tkXT0hIWNbZF07YS5hW2JdPSEwfXJldHVybiBjfTtcbmZ1bmN0aW9uIGdiKGEpe2lmKG51bGw9PWF8fFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm4gYTtpZigkYSYmYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpcmV0dXJuIEJhKGEpO3AoXCJDYW5ub3QgY29lcmNlIHRvIGI2NCBzdHJpbmc6IFwiK2soYSkpO3JldHVybiBudWxsfU4uYnl0ZXNBc0I2ND1nYjtmdW5jdGlvbiBoYihhKXtpZihudWxsPT1hfHxhIGluc3RhbmNlb2YgVWludDhBcnJheSlyZXR1cm4gYTtpZihcInN0cmluZ1wiPT09dHlwZW9mIGEpcmV0dXJuIERhKGEpO3AoXCJDYW5ub3QgY29lcmNlIHRvIFVpbnQ4QXJyYXk6IFwiK2soYSkpO3JldHVybiBudWxsfU4uYnl0ZXNBc1U4PWhiO04uYnl0ZXNMaXN0QXNCNjQ9ZnVuY3Rpb24oYSl7aWIoYSk7cmV0dXJuIGEubGVuZ3RoJiZcInN0cmluZ1wiIT09dHlwZW9mIGFbMF0/bChhLGdiKTphfTtOLmJ5dGVzTGlzdEFzVTg9ZnVuY3Rpb24oYSl7aWIoYSk7cmV0dXJuIWEubGVuZ3RofHxhWzBdaW5zdGFuY2VvZiBVaW50OEFycmF5P2E6bChhLGhiKX07XG5mdW5jdGlvbiBpYihhKXtpZihhJiYxPGEubGVuZ3RoKXt2YXIgYj1rKGFbMF0pO3FhKGEsZnVuY3Rpb24oYyl7ayhjKSE9YiYmcChcIkluY29uc2lzdGVudCB0eXBlIGluIEpTUEIgcmVwZWF0ZWQgZmllbGQgYXJyYXkuIEdvdCBcIitrKGMpK1wiIGV4cGVjdGVkIFwiK2IpfSl9fWZ1bmN0aW9uIGpiKGEsYixjKXthPU8oYSxiKTtyZXR1cm4gbnVsbD09YT9jOmF9Ti5nZXRGaWVsZFdpdGhEZWZhdWx0PWpiO04uZ2V0Qm9vbGVhbkZpZWxkV2l0aERlZmF1bHQ9ZnVuY3Rpb24oYSxiLGMpe2E9ZmIoYSxiKTtyZXR1cm4gbnVsbD09YT9jOmF9O04uZ2V0RmxvYXRpbmdQb2ludEZpZWxkV2l0aERlZmF1bHQ9ZnVuY3Rpb24oYSxiLGMpe2E9ZWIoYSxiKTtyZXR1cm4gbnVsbD09YT9jOmF9O04uZ2V0RmllbGRQcm90bzM9amI7XG5OLmdldE1hcEZpZWxkPWZ1bmN0aW9uKGEsYixjLGQpe2EuZnx8KGEuZj17fSk7aWYoYiBpbiBhLmYpcmV0dXJuIGEuZltiXTt2YXIgZj1PKGEsYik7aWYoIWYpe2lmKGMpcmV0dXJuO2Y9W107UChhLGIsZil9cmV0dXJuIGEuZltiXT1uZXcgcihmLGQpfTtmdW5jdGlvbiBQKGEsYixjKXtxKGEsTik7YjxhLkc/YS51W2IrYS5EXT1jOihiYihhKSxhLmlbYl09Yyk7cmV0dXJuIGF9Ti5zZXRGaWVsZD1QO04uc2V0UHJvdG8zSW50RmllbGQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsYixjLDApfTtOLnNldFByb3RvM0Zsb2F0RmllbGQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsYixjLDApfTtOLnNldFByb3RvM0Jvb2xlYW5GaWVsZD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFEoYSxiLGMsITEpfTtOLnNldFByb3RvM1N0cmluZ0ZpZWxkPWZ1bmN0aW9uKGEsYixjKXtyZXR1cm4gUShhLGIsYyxcIlwiKX07XG5OLnNldFByb3RvM0J5dGVzRmllbGQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsYixjLFwiXCIpfTtOLnNldFByb3RvM0VudW1GaWVsZD1mdW5jdGlvbihhLGIsYyl7cmV0dXJuIFEoYSxiLGMsMCl9O04uc2V0UHJvdG8zU3RyaW5nSW50RmllbGQ9ZnVuY3Rpb24oYSxiLGMpe3JldHVybiBRKGEsYixjLFwiMFwiKX07ZnVuY3Rpb24gUShhLGIsYyxkKXtxKGEsTik7YyE9PWQ/UChhLGIsYyk6YjxhLkc/YS51W2IrYS5EXT1udWxsOihiYihhKSxkZWxldGUgYS5pW2JdKTtyZXR1cm4gYX1OLmFkZFRvUmVwZWF0ZWRGaWVsZD1mdW5jdGlvbihhLGIsYyxkKXtxKGEsTik7Yj1PKGEsYik7dm9pZCAwIT1kP2Iuc3BsaWNlKGQsMCxjKTpiLnB1c2goYyk7cmV0dXJuIGF9O2Z1bmN0aW9uIGtiKGEsYixjLGQpe3EoYSxOKTsoYz1jYihhLGMpKSYmYyE9PWImJnZvaWQgMCE9PWQmJihhLmYmJmMgaW4gYS5mJiYoYS5mW2NdPXZvaWQgMCksUChhLGMsdm9pZCAwKSk7cmV0dXJuIFAoYSxiLGQpfVxuTi5zZXRPbmVvZkZpZWxkPWtiO2Z1bmN0aW9uIGNiKGEsYil7Zm9yKHZhciBjLGQsZj0wO2Y8Yi5sZW5ndGg7ZisrKXt2YXIgaD1iW2ZdLG09TyhhLGgpO251bGwhPW0mJihjPWgsZD1tLFAoYSxoLHZvaWQgMCkpfXJldHVybiBjPyhQKGEsYyxkKSxjKTowfU4uY29tcHV0ZU9uZW9mQ2FzZT1jYjtOLmdldFdyYXBwZXJGaWVsZD1mdW5jdGlvbihhLGIsYyxkKXthLmZ8fChhLmY9e30pO2lmKCFhLmZbY10pe3ZhciBmPU8oYSxjKTtpZihkfHxmKWEuZltjXT1uZXcgYihmKX1yZXR1cm4gYS5mW2NdfTtOLmdldFJlcGVhdGVkV3JhcHBlckZpZWxkPWZ1bmN0aW9uKGEsYixjKXtsYihhLGIsYyk7Yj1hLmZbY107Yj09YWImJihiPWEuZltjXT1bXSk7cmV0dXJuIGJ9O2Z1bmN0aW9uIGxiKGEsYixjKXthLmZ8fChhLmY9e30pO2lmKCFhLmZbY10pe2Zvcih2YXIgZD1PKGEsYyksZj1bXSxoPTA7aDxkLmxlbmd0aDtoKyspZltoXT1uZXcgYihkW2hdKTthLmZbY109Zn19XG5OLnNldFdyYXBwZXJGaWVsZD1mdW5jdGlvbihhLGIsYyl7cShhLE4pO2EuZnx8KGEuZj17fSk7dmFyIGQ9Yz9jLmcoKTpjO2EuZltiXT1jO3JldHVybiBQKGEsYixkKX07Ti5zZXRPbmVvZldyYXBwZXJGaWVsZD1mdW5jdGlvbihhLGIsYyxkKXtxKGEsTik7YS5mfHwoYS5mPXt9KTt2YXIgZj1kP2QuZygpOmQ7YS5mW2JdPWQ7cmV0dXJuIGtiKGEsYixjLGYpfTtOLnNldFJlcGVhdGVkV3JhcHBlckZpZWxkPWZ1bmN0aW9uKGEsYixjKXtxKGEsTik7YS5mfHwoYS5mPXt9KTtjPWN8fFtdO2Zvcih2YXIgZD1bXSxmPTA7ZjxjLmxlbmd0aDtmKyspZFtmXT1jW2ZdLmcoKTthLmZbYl09YztyZXR1cm4gUChhLGIsZCl9O1xuTi5hZGRUb1JlcGVhdGVkV3JhcHBlckZpZWxkPWZ1bmN0aW9uKGEsYixjLGQsZil7bGIoYSxkLGIpO3ZhciBoPWEuZltiXTtofHwoaD1hLmZbYl09W10pO2M9Yz9jOm5ldyBkO2E9TyhhLGIpO3ZvaWQgMCE9Zj8oaC5zcGxpY2UoZiwwLGMpLGEuc3BsaWNlKGYsMCxjLmcoKSkpOihoLnB1c2goYyksYS5wdXNoKGMuZygpKSk7cmV0dXJuIGN9O04udG9NYXA9ZnVuY3Rpb24oYSxiLGMsZCl7Zm9yKHZhciBmPXt9LGg9MDtoPGEubGVuZ3RoO2grKylmW2IuY2FsbChhW2hdKV09Yz9jLmNhbGwoYVtoXSxkLGFbaF0pOmFbaF07cmV0dXJuIGZ9O2Z1bmN0aW9uIG1iKGEpe2lmKGEuZilmb3IodmFyIGIgaW4gYS5mKXt2YXIgYz1hLmZbYl07aWYoQXJyYXkuaXNBcnJheShjKSlmb3IodmFyIGQ9MDtkPGMubGVuZ3RoO2QrKyljW2RdJiZjW2RdLmcoKTtlbHNlIGMmJmMuZygpfX1OLnByb3RvdHlwZS5nPWZ1bmN0aW9uKCl7bWIodGhpcyk7cmV0dXJuIHRoaXMudX07XG5OLnByb3RvdHlwZS50b0FycmF5PU4ucHJvdG90eXBlLmc7Ti5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXttYih0aGlzKTtyZXR1cm4gdGhpcy51LnRvU3RyaW5nKCl9O04ucHJvdG90eXBlLmdldEV4dGVuc2lvbj1mdW5jdGlvbihhKXtpZih0aGlzLmkpe3RoaXMuZnx8KHRoaXMuZj17fSk7dmFyIGI9YS5tYTtpZihhLm5hKXtpZihhLkYoKSlyZXR1cm4gdGhpcy5mW2JdfHwodGhpcy5mW2JdPWwodGhpcy5pW2JdfHxbXSxmdW5jdGlvbihjKXtyZXR1cm4gbmV3IGEubGEoYyl9KSksdGhpcy5mW2JdfWVsc2UgaWYoYS5GKCkpcmV0dXJuIXRoaXMuZltiXSYmdGhpcy5pW2JdJiYodGhpcy5mW2JdPW5ldyBhLmxhKHRoaXMuaVtiXSkpLHRoaXMuZltiXTtyZXR1cm4gdGhpcy5pW2JdfX07Ti5wcm90b3R5cGUuZ2V0RXh0ZW5zaW9uPU4ucHJvdG90eXBlLmdldEV4dGVuc2lvbjtcbk4ucHJvdG90eXBlLktjPWZ1bmN0aW9uKGEsYil7dGhpcy5mfHwodGhpcy5mPXt9KTtiYih0aGlzKTt2YXIgYz1hLm1hO2EubmE/KGI9Ynx8W10sYS5GKCk/KHRoaXMuZltjXT1iLHRoaXMuaVtjXT1sKGIsZnVuY3Rpb24oZCl7cmV0dXJuIGQuZygpfSkpOnRoaXMuaVtjXT1iKTphLkYoKT8odGhpcy5mW2NdPWIsdGhpcy5pW2NdPWI/Yi5nKCk6Yik6dGhpcy5pW2NdPWI7cmV0dXJuIHRoaXN9O04ucHJvdG90eXBlLnNldEV4dGVuc2lvbj1OLnByb3RvdHlwZS5LYztOLmRpZmZlcmVuY2U9ZnVuY3Rpb24oYSxiKXtpZighKGEgaW5zdGFuY2VvZiBiLmNvbnN0cnVjdG9yKSl0aHJvdyBFcnJvcihcIk1lc3NhZ2VzIGhhdmUgZGlmZmVyZW50IHR5cGVzLlwiKTt2YXIgYz1hLmcoKTtiPWIuZygpO3ZhciBkPVtdLGY9MCxoPWMubGVuZ3RoPmIubGVuZ3RoP2MubGVuZ3RoOmIubGVuZ3RoO2EuYiYmKGRbMF09YS5iLGY9MSk7Zm9yKDtmPGg7ZisrKW5iKGNbZl0sYltmXSl8fChkW2ZdPWJbZl0pO3JldHVybiBuZXcgYS5jb25zdHJ1Y3RvcihkKX07XG5OLmVxdWFscz1mdW5jdGlvbihhLGIpe3JldHVybiBhPT1ifHwhKCFhfHwhYikmJmEgaW5zdGFuY2VvZiBiLmNvbnN0cnVjdG9yJiZuYihhLmcoKSxiLmcoKSl9O2Z1bmN0aW9uIG9iKGEsYil7YT1hfHx7fTtiPWJ8fHt9O3ZhciBjPXt9LGQ7Zm9yKGQgaW4gYSljW2RdPTA7Zm9yKGQgaW4gYiljW2RdPTA7Zm9yKGQgaW4gYylpZighbmIoYVtkXSxiW2RdKSlyZXR1cm4hMTtyZXR1cm4hMH1OLmNvbXBhcmVFeHRlbnNpb25zPW9iO1xuZnVuY3Rpb24gbmIoYSxiKXtpZihhPT1iKXJldHVybiEwO2lmKCFsYShhKXx8IWxhKGIpKXJldHVyblwibnVtYmVyXCI9PT10eXBlb2YgYSYmaXNOYU4oYSl8fFwibnVtYmVyXCI9PT10eXBlb2YgYiYmaXNOYU4oYik/U3RyaW5nKGEpPT1TdHJpbmcoYik6ITE7aWYoYS5jb25zdHJ1Y3RvciE9Yi5jb25zdHJ1Y3RvcilyZXR1cm4hMTtpZigkYSYmYS5jb25zdHJ1Y3Rvcj09PVVpbnQ4QXJyYXkpe2lmKGEubGVuZ3RoIT1iLmxlbmd0aClyZXR1cm4hMTtmb3IodmFyIGM9MDtjPGEubGVuZ3RoO2MrKylpZihhW2NdIT1iW2NdKXJldHVybiExO3JldHVybiEwfWlmKGEuY29uc3RydWN0b3I9PT1BcnJheSl7dmFyIGQ9dm9pZCAwLGY9dm9pZCAwLGg9TWF0aC5tYXgoYS5sZW5ndGgsYi5sZW5ndGgpO2ZvcihjPTA7YzxoO2MrKyl7dmFyIG09YVtjXSx0PWJbY107bSYmbS5jb25zdHJ1Y3Rvcj09T2JqZWN0JiYobih2b2lkIDA9PT1kKSxuKGM9PT1hLmxlbmd0aC0xKSxkPW0sbT12b2lkIDApO3QmJnQuY29uc3RydWN0b3I9PVxuT2JqZWN0JiYobih2b2lkIDA9PT1mKSxuKGM9PT1iLmxlbmd0aC0xKSxmPXQsdD12b2lkIDApO2lmKCFuYihtLHQpKXJldHVybiExfXJldHVybiBkfHxmPyhkPWR8fHt9LGY9Znx8e30sb2IoZCxmKSk6ITB9aWYoYS5jb25zdHJ1Y3Rvcj09PU9iamVjdClyZXR1cm4gb2IoYSxiKTt0aHJvdyBFcnJvcihcIkludmFsaWQgdHlwZSBpbiBKU1BCIGFycmF5XCIpO31OLmNvbXBhcmVGaWVsZHM9bmI7Ti5wcm90b3R5cGUuQmI9ZnVuY3Rpb24oKXtyZXR1cm4gcGIodGhpcyl9O04ucHJvdG90eXBlLmNsb25lTWVzc2FnZT1OLnByb3RvdHlwZS5CYjtOLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBwYih0aGlzKX07Ti5wcm90b3R5cGUuY2xvbmU9Ti5wcm90b3R5cGUuY2xvbmU7Ti5jbG9uZT1mdW5jdGlvbihhKXtyZXR1cm4gcGIoYSl9O2Z1bmN0aW9uIHBiKGEpe3JldHVybiBuZXcgYS5jb25zdHJ1Y3RvcihxYihhLmcoKSkpfVxuTi5jb3B5SW50bz1mdW5jdGlvbihhLGIpe3EoYSxOKTtxKGIsTik7bihhLmNvbnN0cnVjdG9yPT1iLmNvbnN0cnVjdG9yLFwiQ29weSBzb3VyY2UgYW5kIHRhcmdldCBtZXNzYWdlIHNob3VsZCBoYXZlIHRoZSBzYW1lIHR5cGUuXCIpO2E9cGIoYSk7Zm9yKHZhciBjPWIuZygpLGQ9YS5nKCksZj1jLmxlbmd0aD0wO2Y8ZC5sZW5ndGg7ZisrKWNbZl09ZFtmXTtiLmY9YS5mO2IuaT1hLml9O2Z1bmN0aW9uIHFiKGEpe2lmKEFycmF5LmlzQXJyYXkoYSkpe2Zvcih2YXIgYj1BcnJheShhLmxlbmd0aCksYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hW2NdO251bGwhPWQmJihiW2NdPVwib2JqZWN0XCI9PXR5cGVvZiBkP3FiKG4oZCkpOmQpfXJldHVybiBifWlmKCRhJiZhIGluc3RhbmNlb2YgVWludDhBcnJheSlyZXR1cm4gbmV3IFVpbnQ4QXJyYXkoYSk7Yj17fTtmb3IoYyBpbiBhKWQ9YVtjXSxudWxsIT1kJiYoYltjXT1cIm9iamVjdFwiPT10eXBlb2YgZD9xYihuKGQpKTpkKTtyZXR1cm4gYn1cbk4ucmVnaXN0ZXJNZXNzYWdlVHlwZT1mdW5jdGlvbihhLGIpe2Iud2U9YX07dmFyIFI9e2R1bXA6ZnVuY3Rpb24oYSl7cShhLE4sXCJqc3BiLk1lc3NhZ2UgaW5zdGFuY2UgZXhwZWN0ZWRcIik7bihhLmdldEV4dGVuc2lvbixcIk9ubHkgdW5vYmZ1c2NhdGVkIGFuZCB1bm9wdGltaXplZCBjb21waWxhdGlvbiBtb2RlcyBzdXBwb3J0ZWQuXCIpO3JldHVybiBSLlgoYSl9fTtnKFwianNwYi5kZWJ1Zy5kdW1wXCIsUi5kdW1wLHZvaWQgMCk7XG5SLlg9ZnVuY3Rpb24oYSl7dmFyIGI9ayhhKTtpZihcIm51bWJlclwiPT1ifHxcInN0cmluZ1wiPT1ifHxcImJvb2xlYW5cIj09Ynx8XCJudWxsXCI9PWJ8fFwidW5kZWZpbmVkXCI9PWJ8fFwidW5kZWZpbmVkXCIhPT10eXBlb2YgVWludDhBcnJheSYmYSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpcmV0dXJuIGE7aWYoXCJhcnJheVwiPT1iKXJldHVybiB1YShhKSxsKGEsUi5YKTtpZihhIGluc3RhbmNlb2Ygcil7dmFyIGM9e307YT1hLmVudHJpZXMoKTtmb3IodmFyIGQ9YS5uZXh0KCk7IWQuZG9uZTtkPWEubmV4dCgpKWNbZC52YWx1ZVswXV09Ui5YKGQudmFsdWVbMV0pO3JldHVybiBjfXEoYSxOLFwiT25seSBtZXNzYWdlcyBleHBlY3RlZDogXCIrYSk7Yj1hLmNvbnN0cnVjdG9yO3ZhciBmPXskbmFtZTpiLm5hbWV8fGIuZGlzcGxheU5hbWV9O2Zvcih0IGluIGIucHJvdG90eXBlKXt2YXIgaD0vXmdldChbQS1aXVxcdyopLy5leGVjKHQpO2lmKGgmJlwiZ2V0RXh0ZW5zaW9uXCIhPXQmJlwiZ2V0SnNQYk1lc3NhZ2VJZFwiIT1cbnQpe3ZhciBtPVwiaGFzXCIraFsxXTtpZighYVttXXx8YVttXSgpKW09YVt0XSgpLGZbUi4kYShoWzFdKV09Ui5YKG0pfX1pZihhLmV4dGVuc2lvbk9iamVjdF8pcmV0dXJuIGYuJGV4dGVuc2lvbnM9XCJSZWN1cnNpdmUgZHVtcGluZyBvZiBleHRlbnNpb25zIG5vdCBzdXBwb3J0ZWQgaW4gY29tcGlsZWQgY29kZS4gU3dpdGNoIHRvIHVuY29tcGlsZWQgb3IgZHVtcCBleHRlbnNpb24gb2JqZWN0IGRpcmVjdGx5XCIsZjtmb3IoZCBpbiBiLmV4dGVuc2lvbnMpaWYoL15cXGQrJC8udGVzdChkKSl7bT1iLmV4dGVuc2lvbnNbZF07dmFyIHQ9YS5nZXRFeHRlbnNpb24obSk7aD12b2lkIDA7bT1tLkJhO3ZhciBCPVtdLE09MDtmb3IoaCBpbiBtKUJbTSsrXT1oO2g9QlswXTtudWxsIT10JiYoY3x8KGM9Zi4kZXh0ZW5zaW9ucz17fSksY1tSLiRhKGgpXT1SLlgodCkpfXJldHVybiBmfTtSLiRhPWZ1bmN0aW9uKGEpe3JldHVybiBhLnJlcGxhY2UoL15bQS1aXS8sZnVuY3Rpb24oYil7cmV0dXJuIGIudG9Mb3dlckNhc2UoKX0pfTtmdW5jdGlvbiBTKCl7dGhpcy5hPVtdfWcoXCJqc3BiLkJpbmFyeUVuY29kZXJcIixTLHZvaWQgMCk7Uy5wcm90b3R5cGUubGVuZ3RoPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYS5sZW5ndGh9O1MucHJvdG90eXBlLmxlbmd0aD1TLnByb3RvdHlwZS5sZW5ndGg7Uy5wcm90b3R5cGUuZW5kPWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5hO3RoaXMuYT1bXTtyZXR1cm4gYX07Uy5wcm90b3R5cGUuZW5kPVMucHJvdG90eXBlLmVuZDtTLnByb3RvdHlwZS5sPWZ1bmN0aW9uKGEsYil7bihhPT1NYXRoLmZsb29yKGEpKTtuKGI9PU1hdGguZmxvb3IoYikpO24oMDw9YSYmNDI5NDk2NzI5Nj5hKTtmb3IobigwPD1iJiY0Mjk0OTY3Mjk2PmIpOzA8Ynx8MTI3PGE7KXRoaXMuYS5wdXNoKGEmMTI3fDEyOCksYT0oYT4+Pjd8Yjw8MjUpPj4+MCxiPj4+PTc7dGhpcy5hLnB1c2goYSl9O1MucHJvdG90eXBlLndyaXRlU3BsaXRWYXJpbnQ2ND1TLnByb3RvdHlwZS5sO1xuUy5wcm90b3R5cGUuQT1mdW5jdGlvbihhLGIpe24oYT09TWF0aC5mbG9vcihhKSk7bihiPT1NYXRoLmZsb29yKGIpKTtuKDA8PWEmJjQyOTQ5NjcyOTY+YSk7bigwPD1iJiY0Mjk0OTY3Mjk2PmIpO3RoaXMucyhhKTt0aGlzLnMoYil9O1MucHJvdG90eXBlLndyaXRlU3BsaXRGaXhlZDY0PVMucHJvdG90eXBlLkE7Uy5wcm90b3R5cGUuaj1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO2ZvcihuKDA8PWEmJjQyOTQ5NjcyOTY+YSk7MTI3PGE7KXRoaXMuYS5wdXNoKGEmMTI3fDEyOCksYT4+Pj03O3RoaXMuYS5wdXNoKGEpfTtTLnByb3RvdHlwZS53cml0ZVVuc2lnbmVkVmFyaW50MzI9Uy5wcm90b3R5cGUuajtTLnByb3RvdHlwZS5NPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigtMjE0NzQ4MzY0ODw9YSYmMjE0NzQ4MzY0OD5hKTtpZigwPD1hKXRoaXMuaihhKTtlbHNle2Zvcih2YXIgYj0wOzk+YjtiKyspdGhpcy5hLnB1c2goYSYxMjd8MTI4KSxhPj49Nzt0aGlzLmEucHVzaCgxKX19O1xuUy5wcm90b3R5cGUud3JpdGVTaWduZWRWYXJpbnQzMj1TLnByb3RvdHlwZS5NO1MucHJvdG90eXBlLnZhPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigwPD1hJiYxLjg0NDY3NDQwNzM3MDk1NTJFMTk+YSk7QShhKTt0aGlzLmwoeSx6KX07Uy5wcm90b3R5cGUud3JpdGVVbnNpZ25lZFZhcmludDY0PVMucHJvdG90eXBlLnZhO1MucHJvdG90eXBlLnVhPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigtOTIyMzM3MjAzNjg1NDc3NTgwODw9YSYmMHg3ZmZmZmZmZmZmZmZmZmZmPmEpO0EoYSk7dGhpcy5sKHkseil9O1MucHJvdG90eXBlLndyaXRlU2lnbmVkVmFyaW50NjQ9Uy5wcm90b3R5cGUudWE7Uy5wcm90b3R5cGUud2E9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKC0yMTQ3NDgzNjQ4PD1hJiYyMTQ3NDgzNjQ4PmEpO3RoaXMuaigoYTw8MV5hPj4zMSk+Pj4wKX07Uy5wcm90b3R5cGUud3JpdGVaaWd6YWdWYXJpbnQzMj1TLnByb3RvdHlwZS53YTtcblMucHJvdG90eXBlLnhhPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigtOTIyMzM3MjAzNjg1NDc3NTgwODw9YSYmMHg3ZmZmZmZmZmZmZmZmZmZmPmEpO0dhKGEpO3RoaXMubCh5LHopfTtTLnByb3RvdHlwZS53cml0ZVppZ3phZ1ZhcmludDY0PVMucHJvdG90eXBlLnhhO1MucHJvdG90eXBlLlRhPWZ1bmN0aW9uKGEpe3RoaXMuVyhIKGEpKX07Uy5wcm90b3R5cGUud3JpdGVaaWd6YWdWYXJpbnQ2NFN0cmluZz1TLnByb3RvdHlwZS5UYTtTLnByb3RvdHlwZS5XPWZ1bmN0aW9uKGEpe3ZhciBiPXRoaXM7QyhhKTtKYSh5LHosZnVuY3Rpb24oYyxkKXtiLmwoYz4+PjAsZD4+PjApfSl9O1MucHJvdG90eXBlLndyaXRlWmlnemFnVmFyaW50SGFzaDY0PVMucHJvdG90eXBlLlc7Uy5wcm90b3R5cGUuYmU9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKDA8PWEmJjI1Nj5hKTt0aGlzLmEucHVzaChhPj4+MCYyNTUpfTtTLnByb3RvdHlwZS53cml0ZVVpbnQ4PVMucHJvdG90eXBlLmJlO1xuUy5wcm90b3R5cGUuYWU9ZnVuY3Rpb24oYSl7bihhPT1NYXRoLmZsb29yKGEpKTtuKDA8PWEmJjY1NTM2PmEpO3RoaXMuYS5wdXNoKGE+Pj4wJjI1NSk7dGhpcy5hLnB1c2goYT4+PjgmMjU1KX07Uy5wcm90b3R5cGUud3JpdGVVaW50MTY9Uy5wcm90b3R5cGUuYWU7Uy5wcm90b3R5cGUucz1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oMDw9YSYmNDI5NDk2NzI5Nj5hKTt0aGlzLmEucHVzaChhPj4+MCYyNTUpO3RoaXMuYS5wdXNoKGE+Pj44JjI1NSk7dGhpcy5hLnB1c2goYT4+PjE2JjI1NSk7dGhpcy5hLnB1c2goYT4+PjI0JjI1NSl9O1MucHJvdG90eXBlLndyaXRlVWludDMyPVMucHJvdG90eXBlLnM7Uy5wcm90b3R5cGUuVj1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oMDw9YSYmMS44NDQ2NzQ0MDczNzA5NTUyRTE5PmEpO0ZhKGEpO3RoaXMucyh5KTt0aGlzLnMoeil9O1MucHJvdG90eXBlLndyaXRlVWludDY0PVMucHJvdG90eXBlLlY7XG5TLnByb3RvdHlwZS5RYz1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTEyODw9YSYmMTI4PmEpO3RoaXMuYS5wdXNoKGE+Pj4wJjI1NSl9O1MucHJvdG90eXBlLndyaXRlSW50OD1TLnByb3RvdHlwZS5RYztTLnByb3RvdHlwZS5QYz1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTMyNzY4PD1hJiYzMjc2OD5hKTt0aGlzLmEucHVzaChhPj4+MCYyNTUpO3RoaXMuYS5wdXNoKGE+Pj44JjI1NSl9O1MucHJvdG90eXBlLndyaXRlSW50MTY9Uy5wcm90b3R5cGUuUGM7Uy5wcm90b3R5cGUuUz1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTIxNDc0ODM2NDg8PWEmJjIxNDc0ODM2NDg+YSk7dGhpcy5hLnB1c2goYT4+PjAmMjU1KTt0aGlzLmEucHVzaChhPj4+OCYyNTUpO3RoaXMuYS5wdXNoKGE+Pj4xNiYyNTUpO3RoaXMuYS5wdXNoKGE+Pj4yNCYyNTUpfTtTLnByb3RvdHlwZS53cml0ZUludDMyPVMucHJvdG90eXBlLlM7XG5TLnByb3RvdHlwZS5UPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigtOTIyMzM3MjAzNjg1NDc3NTgwODw9YSYmMHg3ZmZmZmZmZmZmZmZmZmZmPmEpO0EoYSk7dGhpcy5BKHkseil9O1MucHJvdG90eXBlLndyaXRlSW50NjQ9Uy5wcm90b3R5cGUuVDtTLnByb3RvdHlwZS5rYT1mdW5jdGlvbihhKXtuKGE9PU1hdGguZmxvb3IoYSkpO24oLTkyMjMzNzIwMzY4NTQ3NzU4MDg8PSthJiYweDdmZmZmZmZmZmZmZmZmZmY+K2EpO0MoSChhKSk7dGhpcy5BKHkseil9O1MucHJvdG90eXBlLndyaXRlSW50NjRTdHJpbmc9Uy5wcm90b3R5cGUua2E7Uy5wcm90b3R5cGUuTD1mdW5jdGlvbihhKXtuKEluZmluaXR5PT09YXx8LUluZmluaXR5PT09YXx8aXNOYU4oYSl8fC0zLjQwMjgyMzQ2NjM4NTI4ODZFMzg8PWEmJjMuNDAyODIzNDY2Mzg1Mjg4NkUzOD49YSk7SGEoYSk7dGhpcy5zKHkpfTtTLnByb3RvdHlwZS53cml0ZUZsb2F0PVMucHJvdG90eXBlLkw7XG5TLnByb3RvdHlwZS5KPWZ1bmN0aW9uKGEpe24oSW5maW5pdHk9PT1hfHwtSW5maW5pdHk9PT1hfHxpc05hTihhKXx8LTEuNzk3NjkzMTM0ODYyMzE1N0UzMDg8PWEmJjEuNzk3NjkzMTM0ODYyMzE1N0UzMDg+PWEpO0lhKGEpO3RoaXMucyh5KTt0aGlzLnMoeil9O1MucHJvdG90eXBlLndyaXRlRG91YmxlPVMucHJvdG90eXBlLko7Uy5wcm90b3R5cGUuST1mdW5jdGlvbihhKXtuKFwiYm9vbGVhblwiPT09dHlwZW9mIGF8fFwibnVtYmVyXCI9PT10eXBlb2YgYSk7dGhpcy5hLnB1c2goYT8xOjApfTtTLnByb3RvdHlwZS53cml0ZUJvb2w9Uy5wcm90b3R5cGUuSTtTLnByb3RvdHlwZS5SPWZ1bmN0aW9uKGEpe24oYT09TWF0aC5mbG9vcihhKSk7bigtMjE0NzQ4MzY0ODw9YSYmMjE0NzQ4MzY0OD5hKTt0aGlzLk0oYSl9O1MucHJvdG90eXBlLndyaXRlRW51bT1TLnByb3RvdHlwZS5SO1MucHJvdG90eXBlLmphPWZ1bmN0aW9uKGEpe3RoaXMuYS5wdXNoLmFwcGx5KHRoaXMuYSxhKX07XG5TLnByb3RvdHlwZS53cml0ZUJ5dGVzPVMucHJvdG90eXBlLmphO1MucHJvdG90eXBlLk49ZnVuY3Rpb24oYSl7QyhhKTt0aGlzLmwoeSx6KX07Uy5wcm90b3R5cGUud3JpdGVWYXJpbnRIYXNoNjQ9Uy5wcm90b3R5cGUuTjtTLnByb3RvdHlwZS5LPWZ1bmN0aW9uKGEpe0MoYSk7dGhpcy5zKHkpO3RoaXMucyh6KX07Uy5wcm90b3R5cGUud3JpdGVGaXhlZEhhc2g2ND1TLnByb3RvdHlwZS5LO1xuUy5wcm90b3R5cGUuVT1mdW5jdGlvbihhKXt2YXIgYj10aGlzLmEubGVuZ3RoO3RhKGEpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKXt2YXIgZD1hLmNoYXJDb2RlQXQoYyk7aWYoMTI4PmQpdGhpcy5hLnB1c2goZCk7ZWxzZSBpZigyMDQ4PmQpdGhpcy5hLnB1c2goZD4+NnwxOTIpLHRoaXMuYS5wdXNoKGQmNjN8MTI4KTtlbHNlIGlmKDY1NTM2PmQpaWYoNTUyOTY8PWQmJjU2MzE5Pj1kJiZjKzE8YS5sZW5ndGgpe3ZhciBmPWEuY2hhckNvZGVBdChjKzEpOzU2MzIwPD1mJiY1NzM0Mz49ZiYmKGQ9MTAyNCooZC01NTI5NikrZi01NjMyMCs2NTUzNix0aGlzLmEucHVzaChkPj4xOHwyNDApLHRoaXMuYS5wdXNoKGQ+PjEyJjYzfDEyOCksdGhpcy5hLnB1c2goZD4+NiY2M3wxMjgpLHRoaXMuYS5wdXNoKGQmNjN8MTI4KSxjKyspfWVsc2UgdGhpcy5hLnB1c2goZD4+MTJ8MjI0KSx0aGlzLmEucHVzaChkPj42JjYzfDEyOCksdGhpcy5hLnB1c2goZCY2M3wxMjgpfXJldHVybiB0aGlzLmEubGVuZ3RoLVxuYn07Uy5wcm90b3R5cGUud3JpdGVTdHJpbmc9Uy5wcm90b3R5cGUuVTtmdW5jdGlvbiBUKGEsYil7dGhpcy5sbz1hO3RoaXMuaGk9Yn1nKFwianNwYi5hcml0aC5VSW50NjRcIixULHZvaWQgMCk7VC5wcm90b3R5cGUuY21wPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmhpPGEuaGl8fHRoaXMuaGk9PWEuaGkmJnRoaXMubG88YS5sbz8tMTp0aGlzLmhpPT1hLmhpJiZ0aGlzLmxvPT1hLmxvPzA6MX07VC5wcm90b3R5cGUuY21wPVQucHJvdG90eXBlLmNtcDtULnByb3RvdHlwZS5MYT1mdW5jdGlvbigpe3JldHVybiBuZXcgVCgodGhpcy5sbz4+PjF8KHRoaXMuaGkmMSk8PDMxKT4+PjAsdGhpcy5oaT4+PjE+Pj4wKX07VC5wcm90b3R5cGUucmlnaHRTaGlmdD1ULnByb3RvdHlwZS5MYTtULnByb3RvdHlwZS5EYT1mdW5jdGlvbigpe3JldHVybiBuZXcgVCh0aGlzLmxvPDwxPj4+MCwodGhpcy5oaTw8MXx0aGlzLmxvPj4+MzEpPj4+MCl9O1QucHJvdG90eXBlLmxlZnRTaGlmdD1ULnByb3RvdHlwZS5EYTtcblQucHJvdG90eXBlLmNiPWZ1bmN0aW9uKCl7cmV0dXJuISEodGhpcy5oaSYyMTQ3NDgzNjQ4KX07VC5wcm90b3R5cGUubXNiPVQucHJvdG90eXBlLmNiO1QucHJvdG90eXBlLk9iPWZ1bmN0aW9uKCl7cmV0dXJuISEodGhpcy5sbyYxKX07VC5wcm90b3R5cGUubHNiPVQucHJvdG90eXBlLk9iO1QucHJvdG90eXBlLlVhPWZ1bmN0aW9uKCl7cmV0dXJuIDA9PXRoaXMubG8mJjA9PXRoaXMuaGl9O1QucHJvdG90eXBlLnplcm89VC5wcm90b3R5cGUuVWE7VC5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgVCgodGhpcy5sbythLmxvJjQyOTQ5NjcyOTUpPj4+MD4+PjAsKCh0aGlzLmhpK2EuaGkmNDI5NDk2NzI5NSk+Pj4wKSsoNDI5NDk2NzI5Njw9dGhpcy5sbythLmxvPzE6MCk+Pj4wKX07VC5wcm90b3R5cGUuYWRkPVQucHJvdG90eXBlLmFkZDtcblQucHJvdG90eXBlLnN1Yj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IFQoKHRoaXMubG8tYS5sbyY0Mjk0OTY3Mjk1KT4+PjA+Pj4wLCgodGhpcy5oaS1hLmhpJjQyOTQ5NjcyOTUpPj4+MCktKDA+dGhpcy5sby1hLmxvPzE6MCk+Pj4wKX07VC5wcm90b3R5cGUuc3ViPVQucHJvdG90eXBlLnN1YjtmdW5jdGlvbiByYihhLGIpe3ZhciBjPWEmNjU1MzU7YT4+Pj0xNjt2YXIgZD1iJjY1NTM1LGY9Yj4+PjE2O2I9YypkKzY1NTM2KihjKmYmNjU1MzUpKzY1NTM2KihhKmQmNjU1MzUpO2ZvcihjPWEqZisoYypmPj4+MTYpKyhhKmQ+Pj4xNik7NDI5NDk2NzI5Njw9YjspYi09NDI5NDk2NzI5NixjKz0xO3JldHVybiBuZXcgVChiPj4+MCxjPj4+MCl9VC5tdWwzMngzMj1yYjtULnByb3RvdHlwZS5lYj1mdW5jdGlvbihhKXt2YXIgYj1yYih0aGlzLmxvLGEpO2E9cmIodGhpcy5oaSxhKTthLmhpPWEubG87YS5sbz0wO3JldHVybiBiLmFkZChhKX07VC5wcm90b3R5cGUubXVsPVQucHJvdG90eXBlLmViO1xuVC5wcm90b3R5cGUuWGE9ZnVuY3Rpb24oYSl7aWYoMD09YSlyZXR1cm5bXTt2YXIgYj1uZXcgVCgwLDApLGM9bmV3IFQodGhpcy5sbyx0aGlzLmhpKTthPW5ldyBUKGEsMCk7Zm9yKHZhciBkPW5ldyBUKDEsMCk7IWEuY2IoKTspYT1hLkRhKCksZD1kLkRhKCk7Zm9yKDshZC5VYSgpOykwPj1hLmNtcChjKSYmKGI9Yi5hZGQoZCksYz1jLnN1YihhKSksYT1hLkxhKCksZD1kLkxhKCk7cmV0dXJuW2IsY119O1QucHJvdG90eXBlLmRpdj1ULnByb3RvdHlwZS5YYTtULnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe2Zvcih2YXIgYT1cIlwiLGI9dGhpczshYi5VYSgpOyl7Yj1iLlhhKDEwKTt2YXIgYz1iWzBdO2E9YlsxXS5sbythO2I9Y31cIlwiPT1hJiYoYT1cIjBcIik7cmV0dXJuIGF9O1QucHJvdG90eXBlLnRvU3RyaW5nPVQucHJvdG90eXBlLnRvU3RyaW5nO1xuZnVuY3Rpb24gVShhKXtmb3IodmFyIGI9bmV3IFQoMCwwKSxjPW5ldyBUKDAsMCksZD0wO2Q8YS5sZW5ndGg7ZCsrKXtpZihcIjBcIj5hW2RdfHxcIjlcIjxhW2RdKXJldHVybiBudWxsO2MubG89cGFyc2VJbnQoYVtkXSwxMCk7Yj1iLmViKDEwKS5hZGQoYyl9cmV0dXJuIGJ9VC5mcm9tU3RyaW5nPVU7VC5wcm90b3R5cGUuY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFQodGhpcy5sbyx0aGlzLmhpKX07VC5wcm90b3R5cGUuY2xvbmU9VC5wcm90b3R5cGUuY2xvbmU7ZnVuY3Rpb24gVihhLGIpe3RoaXMubG89YTt0aGlzLmhpPWJ9ZyhcImpzcGIuYXJpdGguSW50NjRcIixWLHZvaWQgMCk7Vi5wcm90b3R5cGUuYWRkPWZ1bmN0aW9uKGEpe3JldHVybiBuZXcgVigodGhpcy5sbythLmxvJjQyOTQ5NjcyOTUpPj4+MD4+PjAsKCh0aGlzLmhpK2EuaGkmNDI5NDk2NzI5NSk+Pj4wKSsoNDI5NDk2NzI5Njw9dGhpcy5sbythLmxvPzE6MCk+Pj4wKX07Vi5wcm90b3R5cGUuYWRkPVYucHJvdG90eXBlLmFkZDtcblYucHJvdG90eXBlLnN1Yj1mdW5jdGlvbihhKXtyZXR1cm4gbmV3IFYoKHRoaXMubG8tYS5sbyY0Mjk0OTY3Mjk1KT4+PjA+Pj4wLCgodGhpcy5oaS1hLmhpJjQyOTQ5NjcyOTUpPj4+MCktKDA+dGhpcy5sby1hLmxvPzE6MCk+Pj4wKX07Vi5wcm90b3R5cGUuc3ViPVYucHJvdG90eXBlLnN1YjtWLnByb3RvdHlwZS5jbG9uZT1mdW5jdGlvbigpe3JldHVybiBuZXcgVih0aGlzLmxvLHRoaXMuaGkpfTtWLnByb3RvdHlwZS5jbG9uZT1WLnByb3RvdHlwZS5jbG9uZTtWLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3ZhciBhPTAhPSh0aGlzLmhpJjIxNDc0ODM2NDgpLGI9bmV3IFQodGhpcy5sbyx0aGlzLmhpKTthJiYoYj0obmV3IFQoMCwwKSkuc3ViKGIpKTtyZXR1cm4oYT9cIi1cIjpcIlwiKStiLnRvU3RyaW5nKCl9O1YucHJvdG90eXBlLnRvU3RyaW5nPVYucHJvdG90eXBlLnRvU3RyaW5nO1xuZnVuY3Rpb24gc2IoYSl7dmFyIGI9MDxhLmxlbmd0aCYmXCItXCI9PWFbMF07YiYmKGE9YS5zdWJzdHJpbmcoMSkpO2E9VShhKTtpZihudWxsPT09YSlyZXR1cm4gbnVsbDtiJiYoYT0obmV3IFQoMCwwKSkuc3ViKGEpKTtyZXR1cm4gbmV3IFYoYS5sbyxhLmhpKX1WLmZyb21TdHJpbmc9c2I7ZnVuY3Rpb24gVygpe3RoaXMuYz1bXTt0aGlzLmI9MDt0aGlzLmE9bmV3IFM7dGhpcy5oPVtdfWcoXCJqc3BiLkJpbmFyeVdyaXRlclwiLFcsdm9pZCAwKTtmdW5jdGlvbiB0YihhLGIpe3ZhciBjPWEuYS5lbmQoKTthLmMucHVzaChjKTthLmMucHVzaChiKTthLmIrPWMubGVuZ3RoK2IubGVuZ3RofWZ1bmN0aW9uIFgoYSxiKXtZKGEsYiwyKTtiPWEuYS5lbmQoKTthLmMucHVzaChiKTthLmIrPWIubGVuZ3RoO2IucHVzaChhLmIpO3JldHVybiBifWZ1bmN0aW9uIFooYSxiKXt2YXIgYz1iLnBvcCgpO2M9YS5iK2EuYS5sZW5ndGgoKS1jO2ZvcihuKDA8PWMpOzEyNzxjOyliLnB1c2goYyYxMjd8MTI4KSxjPj4+PTcsYS5iKys7Yi5wdXNoKGMpO2EuYisrfVcucHJvdG90eXBlLnBiPWZ1bmN0aW9uKGEsYixjKXt0Yih0aGlzLGEuc3ViYXJyYXkoYixjKSl9O1cucHJvdG90eXBlLndyaXRlU2VyaWFsaXplZE1lc3NhZ2U9Vy5wcm90b3R5cGUucGI7XG5XLnByb3RvdHlwZS5QYj1mdW5jdGlvbihhLGIsYyl7bnVsbCE9YSYmbnVsbCE9YiYmbnVsbCE9YyYmdGhpcy5wYihhLGIsYyl9O1cucHJvdG90eXBlLm1heWJlV3JpdGVTZXJpYWxpemVkTWVzc2FnZT1XLnByb3RvdHlwZS5QYjtXLnByb3RvdHlwZS5yZXNldD1mdW5jdGlvbigpe3RoaXMuYz1bXTt0aGlzLmEuZW5kKCk7dGhpcy5iPTA7dGhpcy5oPVtdfTtXLnByb3RvdHlwZS5yZXNldD1XLnByb3RvdHlwZS5yZXNldDtXLnByb3RvdHlwZS5hYj1mdW5jdGlvbigpe24oMD09dGhpcy5oLmxlbmd0aCk7Zm9yKHZhciBhPW5ldyBVaW50OEFycmF5KHRoaXMuYit0aGlzLmEubGVuZ3RoKCkpLGI9dGhpcy5jLGM9Yi5sZW5ndGgsZD0wLGY9MDtmPGM7ZisrKXt2YXIgaD1iW2ZdO2Euc2V0KGgsZCk7ZCs9aC5sZW5ndGh9Yj10aGlzLmEuZW5kKCk7YS5zZXQoYixkKTtkKz1iLmxlbmd0aDtuKGQ9PWEubGVuZ3RoKTt0aGlzLmM9W2FdO3JldHVybiBhfTtcblcucHJvdG90eXBlLmdldFJlc3VsdEJ1ZmZlcj1XLnByb3RvdHlwZS5hYjtXLnByb3RvdHlwZS5LYj1mdW5jdGlvbihhKXtyZXR1cm4gQmEodGhpcy5hYigpLGEpfTtXLnByb3RvdHlwZS5nZXRSZXN1bHRCYXNlNjRTdHJpbmc9Vy5wcm90b3R5cGUuS2I7Vy5wcm90b3R5cGUuVmE9ZnVuY3Rpb24oYSl7dGhpcy5oLnB1c2goWCh0aGlzLGEpKX07Vy5wcm90b3R5cGUuYmVnaW5TdWJNZXNzYWdlPVcucHJvdG90eXBlLlZhO1cucHJvdG90eXBlLllhPWZ1bmN0aW9uKCl7bigwPD10aGlzLmgubGVuZ3RoKTtaKHRoaXMsdGhpcy5oLnBvcCgpKX07Vy5wcm90b3R5cGUuZW5kU3ViTWVzc2FnZT1XLnByb3RvdHlwZS5ZYTtmdW5jdGlvbiBZKGEsYixjKXtuKDE8PWImJmI9PU1hdGguZmxvb3IoYikpO2EuYS5qKDgqYitjKX1cblcucHJvdG90eXBlLk5jPWZ1bmN0aW9uKGEsYixjKXtzd2l0Y2goYSl7Y2FzZSAxOnRoaXMuSihiLGMpO2JyZWFrO2Nhc2UgMjp0aGlzLkwoYixjKTticmVhaztjYXNlIDM6dGhpcy5UKGIsYyk7YnJlYWs7Y2FzZSA0OnRoaXMuVihiLGMpO2JyZWFrO2Nhc2UgNTp0aGlzLlMoYixjKTticmVhaztjYXNlIDY6dGhpcy5RYShiLGMpO2JyZWFrO2Nhc2UgNzp0aGlzLlBhKGIsYyk7YnJlYWs7Y2FzZSA4OnRoaXMuSShiLGMpO2JyZWFrO2Nhc2UgOTp0aGlzLlUoYixjKTticmVhaztjYXNlIDEwOnAoXCJHcm91cCBmaWVsZCB0eXBlIG5vdCBzdXBwb3J0ZWQgaW4gd3JpdGVBbnkoKVwiKTticmVhaztjYXNlIDExOnAoXCJNZXNzYWdlIGZpZWxkIHR5cGUgbm90IHN1cHBvcnRlZCBpbiB3cml0ZUFueSgpXCIpO2JyZWFrO2Nhc2UgMTI6dGhpcy5qYShiLGMpO2JyZWFrO2Nhc2UgMTM6dGhpcy5zKGIsYyk7YnJlYWs7Y2FzZSAxNDp0aGlzLlIoYixjKTticmVhaztjYXNlIDE1OnRoaXMuUmEoYixjKTticmVhaztcbmNhc2UgMTY6dGhpcy5TYShiLGMpO2JyZWFrO2Nhc2UgMTc6dGhpcy5yYihiLGMpO2JyZWFrO2Nhc2UgMTg6dGhpcy5zYihiLGMpO2JyZWFrO2Nhc2UgMzA6dGhpcy5LKGIsYyk7YnJlYWs7Y2FzZSAzMTp0aGlzLk4oYixjKTticmVhaztkZWZhdWx0OnAoXCJJbnZhbGlkIGZpZWxkIHR5cGUgaW4gd3JpdGVBbnkoKVwiKX19O1cucHJvdG90eXBlLndyaXRlQW55PVcucHJvdG90eXBlLk5jO2Z1bmN0aW9uIHViKGEsYixjKXtudWxsIT1jJiYoWShhLGIsMCksYS5hLmooYykpfWZ1bmN0aW9uIHZiKGEsYixjKXtudWxsIT1jJiYoWShhLGIsMCksYS5hLk0oYykpfVcucHJvdG90eXBlLlM9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYobigtMjE0NzQ4MzY0ODw9YiYmMjE0NzQ4MzY0OD5iKSx2Yih0aGlzLGEsYikpfTtXLnByb3RvdHlwZS53cml0ZUludDMyPVcucHJvdG90eXBlLlM7XG5XLnByb3RvdHlwZS5vYj1mdW5jdGlvbihhLGIpe251bGwhPWImJihiPXBhcnNlSW50KGIsMTApLG4oLTIxNDc0ODM2NDg8PWImJjIxNDc0ODM2NDg+YiksdmIodGhpcyxhLGIpKX07Vy5wcm90b3R5cGUud3JpdGVJbnQzMlN0cmluZz1XLnByb3RvdHlwZS5vYjtXLnByb3RvdHlwZS5UPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oLTkyMjMzNzIwMzY4NTQ3NzU4MDg8PWImJjB4N2ZmZmZmZmZmZmZmZmZmZj5iKSxudWxsIT1iJiYoWSh0aGlzLGEsMCksdGhpcy5hLnVhKGIpKSl9O1cucHJvdG90eXBlLndyaXRlSW50NjQ9Vy5wcm90b3R5cGUuVDtXLnByb3RvdHlwZS5rYT1mdW5jdGlvbihhLGIpe251bGwhPWImJihiPXNiKGIpLFkodGhpcyxhLDApLHRoaXMuYS5sKGIubG8sYi5oaSkpfTtXLnByb3RvdHlwZS53cml0ZUludDY0U3RyaW5nPVcucHJvdG90eXBlLmthO1xuVy5wcm90b3R5cGUucz1mdW5jdGlvbihhLGIpe251bGwhPWImJihuKDA8PWImJjQyOTQ5NjcyOTY+YiksdWIodGhpcyxhLGIpKX07Vy5wcm90b3R5cGUud3JpdGVVaW50MzI9Vy5wcm90b3R5cGUucztXLnByb3RvdHlwZS51Yj1mdW5jdGlvbihhLGIpe251bGwhPWImJihiPXBhcnNlSW50KGIsMTApLG4oMDw9YiYmNDI5NDk2NzI5Nj5iKSx1Yih0aGlzLGEsYikpfTtXLnByb3RvdHlwZS53cml0ZVVpbnQzMlN0cmluZz1XLnByb3RvdHlwZS51YjtXLnByb3RvdHlwZS5WPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oMDw9YiYmMS44NDQ2NzQ0MDczNzA5NTUyRTE5PmIpLG51bGwhPWImJihZKHRoaXMsYSwwKSx0aGlzLmEudmEoYikpKX07Vy5wcm90b3R5cGUud3JpdGVVaW50NjQ9Vy5wcm90b3R5cGUuVjtXLnByb3RvdHlwZS52Yj1mdW5jdGlvbihhLGIpe251bGwhPWImJihiPVUoYiksWSh0aGlzLGEsMCksdGhpcy5hLmwoYi5sbyxiLmhpKSl9O1xuVy5wcm90b3R5cGUud3JpdGVVaW50NjRTdHJpbmc9Vy5wcm90b3R5cGUudmI7Vy5wcm90b3R5cGUucmI9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYobigtMjE0NzQ4MzY0ODw9YiYmMjE0NzQ4MzY0OD5iKSxudWxsIT1iJiYoWSh0aGlzLGEsMCksdGhpcy5hLndhKGIpKSl9O1cucHJvdG90eXBlLndyaXRlU2ludDMyPVcucHJvdG90eXBlLnJiO1cucHJvdG90eXBlLnNiPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oLTkyMjMzNzIwMzY4NTQ3NzU4MDg8PWImJjB4N2ZmZmZmZmZmZmZmZmZmZj5iKSxudWxsIT1iJiYoWSh0aGlzLGEsMCksdGhpcy5hLnhhKGIpKSl9O1cucHJvdG90eXBlLndyaXRlU2ludDY0PVcucHJvdG90eXBlLnNiO1cucHJvdG90eXBlLiRkPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmbnVsbCE9YiYmKFkodGhpcyxhLDApLHRoaXMuYS5XKGIpKX07Vy5wcm90b3R5cGUud3JpdGVTaW50SGFzaDY0PVcucHJvdG90eXBlLiRkO1xuVy5wcm90b3R5cGUuWmQ9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiZudWxsIT1iJiYoWSh0aGlzLGEsMCksdGhpcy5hLlRhKGIpKX07Vy5wcm90b3R5cGUud3JpdGVTaW50NjRTdHJpbmc9Vy5wcm90b3R5cGUuWmQ7Vy5wcm90b3R5cGUuUGE9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYobigwPD1iJiY0Mjk0OTY3Mjk2PmIpLFkodGhpcyxhLDUpLHRoaXMuYS5zKGIpKX07Vy5wcm90b3R5cGUud3JpdGVGaXhlZDMyPVcucHJvdG90eXBlLlBhO1cucHJvdG90eXBlLlFhPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oMDw9YiYmMS44NDQ2NzQ0MDczNzA5NTUyRTE5PmIpLFkodGhpcyxhLDEpLHRoaXMuYS5WKGIpKX07Vy5wcm90b3R5cGUud3JpdGVGaXhlZDY0PVcucHJvdG90eXBlLlFhO1cucHJvdG90eXBlLm5iPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKGI9VShiKSxZKHRoaXMsYSwxKSx0aGlzLmEuQShiLmxvLGIuaGkpKX07Vy5wcm90b3R5cGUud3JpdGVGaXhlZDY0U3RyaW5nPVcucHJvdG90eXBlLm5iO1xuVy5wcm90b3R5cGUuUmE9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYobigtMjE0NzQ4MzY0ODw9YiYmMjE0NzQ4MzY0OD5iKSxZKHRoaXMsYSw1KSx0aGlzLmEuUyhiKSl9O1cucHJvdG90eXBlLndyaXRlU2ZpeGVkMzI9Vy5wcm90b3R5cGUuUmE7Vy5wcm90b3R5cGUuU2E9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYobigtOTIyMzM3MjAzNjg1NDc3NTgwODw9YiYmMHg3ZmZmZmZmZmZmZmZmZmZmPmIpLFkodGhpcyxhLDEpLHRoaXMuYS5UKGIpKX07Vy5wcm90b3R5cGUud3JpdGVTZml4ZWQ2ND1XLnByb3RvdHlwZS5TYTtXLnByb3RvdHlwZS5xYj1mdW5jdGlvbihhLGIpe251bGwhPWImJihiPXNiKGIpLFkodGhpcyxhLDEpLHRoaXMuYS5BKGIubG8sYi5oaSkpfTtXLnByb3RvdHlwZS53cml0ZVNmaXhlZDY0U3RyaW5nPVcucHJvdG90eXBlLnFiO1cucHJvdG90eXBlLkw9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYoWSh0aGlzLGEsNSksdGhpcy5hLkwoYikpfTtcblcucHJvdG90eXBlLndyaXRlRmxvYXQ9Vy5wcm90b3R5cGUuTDtXLnByb3RvdHlwZS5KPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKFkodGhpcyxhLDEpLHRoaXMuYS5KKGIpKX07Vy5wcm90b3R5cGUud3JpdGVEb3VibGU9Vy5wcm90b3R5cGUuSjtXLnByb3RvdHlwZS5JPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oXCJib29sZWFuXCI9PT10eXBlb2YgYnx8XCJudW1iZXJcIj09PXR5cGVvZiBiKSxZKHRoaXMsYSwwKSx0aGlzLmEuSShiKSl9O1cucHJvdG90eXBlLndyaXRlQm9vbD1XLnByb3RvdHlwZS5JO1cucHJvdG90eXBlLlI9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYobigtMjE0NzQ4MzY0ODw9YiYmMjE0NzQ4MzY0OD5iKSxZKHRoaXMsYSwwKSx0aGlzLmEuTShiKSl9O1cucHJvdG90eXBlLndyaXRlRW51bT1XLnByb3RvdHlwZS5SO1cucHJvdG90eXBlLlU9ZnVuY3Rpb24oYSxiKXtudWxsIT1iJiYoYT1YKHRoaXMsYSksdGhpcy5hLlUoYiksWih0aGlzLGEpKX07XG5XLnByb3RvdHlwZS53cml0ZVN0cmluZz1XLnByb3RvdHlwZS5VO1cucHJvdG90eXBlLmphPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKGI9VWEoYiksWSh0aGlzLGEsMiksdGhpcy5hLmooYi5sZW5ndGgpLHRiKHRoaXMsYikpfTtXLnByb3RvdHlwZS53cml0ZUJ5dGVzPVcucHJvdG90eXBlLmphO1cucHJvdG90eXBlLlJjPWZ1bmN0aW9uKGEsYixjKXtudWxsIT1iJiYoYT1YKHRoaXMsYSksYyhiLHRoaXMpLFoodGhpcyxhKSl9O1cucHJvdG90eXBlLndyaXRlTWVzc2FnZT1XLnByb3RvdHlwZS5SYztXLnByb3RvdHlwZS5TYz1mdW5jdGlvbihhLGIsYyl7bnVsbCE9YiYmKFkodGhpcywxLDMpLFkodGhpcywyLDApLHRoaXMuYS5NKGEpLGE9WCh0aGlzLDMpLGMoYix0aGlzKSxaKHRoaXMsYSksWSh0aGlzLDEsNCkpfTtXLnByb3RvdHlwZS53cml0ZU1lc3NhZ2VTZXQ9Vy5wcm90b3R5cGUuU2M7XG5XLnByb3RvdHlwZS5PYz1mdW5jdGlvbihhLGIsYyl7bnVsbCE9YiYmKFkodGhpcyxhLDMpLGMoYix0aGlzKSxZKHRoaXMsYSw0KSl9O1cucHJvdG90eXBlLndyaXRlR3JvdXA9Vy5wcm90b3R5cGUuT2M7Vy5wcm90b3R5cGUuSz1mdW5jdGlvbihhLGIpe251bGwhPWImJihuKDg9PWIubGVuZ3RoKSxZKHRoaXMsYSwxKSx0aGlzLmEuSyhiKSl9O1cucHJvdG90eXBlLndyaXRlRml4ZWRIYXNoNjQ9Vy5wcm90b3R5cGUuSztXLnByb3RvdHlwZS5OPWZ1bmN0aW9uKGEsYil7bnVsbCE9YiYmKG4oOD09Yi5sZW5ndGgpLFkodGhpcyxhLDApLHRoaXMuYS5OKGIpKX07Vy5wcm90b3R5cGUud3JpdGVWYXJpbnRIYXNoNjQ9Vy5wcm90b3R5cGUuTjtXLnByb3RvdHlwZS5BPWZ1bmN0aW9uKGEsYixjKXtZKHRoaXMsYSwxKTt0aGlzLmEuQShiLGMpfTtXLnByb3RvdHlwZS53cml0ZVNwbGl0Rml4ZWQ2ND1XLnByb3RvdHlwZS5BO1xuVy5wcm90b3R5cGUubD1mdW5jdGlvbihhLGIsYyl7WSh0aGlzLGEsMCk7dGhpcy5hLmwoYixjKX07Vy5wcm90b3R5cGUud3JpdGVTcGxpdFZhcmludDY0PVcucHJvdG90eXBlLmw7Vy5wcm90b3R5cGUudGI9ZnVuY3Rpb24oYSxiLGMpe1kodGhpcyxhLDApO3ZhciBkPXRoaXMuYTtKYShiLGMsZnVuY3Rpb24oZixoKXtkLmwoZj4+PjAsaD4+PjApfSl9O1cucHJvdG90eXBlLndyaXRlU3BsaXRaaWd6YWdWYXJpbnQ2ND1XLnByb3RvdHlwZS50YjtXLnByb3RvdHlwZS5FZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdmIodGhpcyxhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkSW50MzI9Vy5wcm90b3R5cGUuRWQ7Vy5wcm90b3R5cGUuRmQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMub2IoYSxiW2NdKX07XG5XLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkSW50MzJTdHJpbmc9Vy5wcm90b3R5cGUuRmQ7Vy5wcm90b3R5cGUuR2Q9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdO251bGwhPWQmJihZKHRoaXMsYSwwKSx0aGlzLmEudWEoZCkpfX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEludDY0PVcucHJvdG90eXBlLkdkO1cucHJvdG90eXBlLlFkPWZ1bmN0aW9uKGEsYixjLGQpe2lmKG51bGwhPWIpZm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspdGhpcy5BKGEsYyhiW2ZdKSxkKGJbZl0pKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFNwbGl0Rml4ZWQ2ND1XLnByb3RvdHlwZS5RZDtXLnByb3RvdHlwZS5SZD1mdW5jdGlvbihhLGIsYyxkKXtpZihudWxsIT1iKWZvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKXRoaXMubChhLGMoYltmXSksZChiW2ZdKSl9O1xuVy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFNwbGl0VmFyaW50NjQ9Vy5wcm90b3R5cGUuUmQ7Vy5wcm90b3R5cGUuU2Q9ZnVuY3Rpb24oYSxiLGMsZCl7aWYobnVsbCE9Yilmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKyl0aGlzLnRiKGEsYyhiW2ZdKSxkKGJbZl0pKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFNwbGl0WmlnemFnVmFyaW50NjQ9Vy5wcm90b3R5cGUuU2Q7Vy5wcm90b3R5cGUuSGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMua2EoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEludDY0U3RyaW5nPVcucHJvdG90eXBlLkhkO1cucHJvdG90eXBlLlVkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl1Yih0aGlzLGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRVaW50MzI9Vy5wcm90b3R5cGUuVWQ7XG5XLnByb3RvdHlwZS5WZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy51YihhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkVWludDMyU3RyaW5nPVcucHJvdG90eXBlLlZkO1cucHJvdG90eXBlLldkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtudWxsIT1kJiYoWSh0aGlzLGEsMCksdGhpcy5hLnZhKGQpKX19O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRVaW50NjQ9Vy5wcm90b3R5cGUuV2Q7Vy5wcm90b3R5cGUuWGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMudmIoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFVpbnQ2NFN0cmluZz1XLnByb3RvdHlwZS5YZDtcblcucHJvdG90eXBlLk1kPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl7dmFyIGQ9YltjXTtudWxsIT1kJiYoWSh0aGlzLGEsMCksdGhpcy5hLndhKGQpKX19O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRTaW50MzI9Vy5wcm90b3R5cGUuTWQ7Vy5wcm90b3R5cGUuTmQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdO251bGwhPWQmJihZKHRoaXMsYSwwKSx0aGlzLmEueGEoZCkpfX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFNpbnQ2ND1XLnByb3RvdHlwZS5OZDtXLnByb3RvdHlwZS5PZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPWJbY107bnVsbCE9ZCYmKFkodGhpcyxhLDApLHRoaXMuYS5UYShkKSl9fTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkU2ludDY0U3RyaW5nPVcucHJvdG90eXBlLk9kO1xuVy5wcm90b3R5cGUuUGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdO251bGwhPWQmJihZKHRoaXMsYSwwKSx0aGlzLmEuVyhkKSl9fTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkU2ludEhhc2g2ND1XLnByb3RvdHlwZS5QZDtXLnByb3RvdHlwZS55ZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5QYShhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkRml4ZWQzMj1XLnByb3RvdHlwZS55ZDtXLnByb3RvdHlwZS56ZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5RYShhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkRml4ZWQ2ND1XLnByb3RvdHlwZS56ZDtcblcucHJvdG90eXBlLkFkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLm5iKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRGaXhlZDY0U3RyaW5nPVcucHJvdG90eXBlLkFkO1cucHJvdG90eXBlLkpkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLlJhKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRTZml4ZWQzMj1XLnByb3RvdHlwZS5KZDtXLnByb3RvdHlwZS5LZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5TYShhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkU2ZpeGVkNjQ9Vy5wcm90b3R5cGUuS2Q7Vy5wcm90b3R5cGUuTGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMucWIoYSxiW2NdKX07XG5XLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkU2ZpeGVkNjRTdHJpbmc9Vy5wcm90b3R5cGUuTGQ7Vy5wcm90b3R5cGUuQ2Q9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuTChhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkRmxvYXQ9Vy5wcm90b3R5cGUuQ2Q7Vy5wcm90b3R5cGUud2Q9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iKWZvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuSihhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkRG91YmxlPVcucHJvdG90eXBlLndkO1cucHJvdG90eXBlLnVkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLkkoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZEJvb2w9Vy5wcm90b3R5cGUudWQ7XG5XLnByb3RvdHlwZS54ZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5SKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRFbnVtPVcucHJvdG90eXBlLnhkO1cucHJvdG90eXBlLlRkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9Yilmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLlUoYSxiW2NdKX07Vy5wcm90b3R5cGUud3JpdGVSZXBlYXRlZFN0cmluZz1XLnByb3RvdHlwZS5UZDtXLnByb3RvdHlwZS52ZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5qYShhLGJbY10pfTtXLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkQnl0ZXM9Vy5wcm90b3R5cGUudmQ7Vy5wcm90b3R5cGUuSWQ9ZnVuY3Rpb24oYSxiLGMpe2lmKG51bGwhPWIpZm9yKHZhciBkPTA7ZDxiLmxlbmd0aDtkKyspe3ZhciBmPVgodGhpcyxhKTtjKGJbZF0sdGhpcyk7Wih0aGlzLGYpfX07XG5XLnByb3RvdHlwZS53cml0ZVJlcGVhdGVkTWVzc2FnZT1XLnByb3RvdHlwZS5JZDtXLnByb3RvdHlwZS5EZD1mdW5jdGlvbihhLGIsYyl7aWYobnVsbCE9Yilmb3IodmFyIGQ9MDtkPGIubGVuZ3RoO2QrKylZKHRoaXMsYSwzKSxjKGJbZF0sdGhpcyksWSh0aGlzLGEsNCl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRHcm91cD1XLnByb3RvdHlwZS5EZDtXLnByb3RvdHlwZS5CZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5LKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRGaXhlZEhhc2g2ND1XLnByb3RvdHlwZS5CZDtXLnByb3RvdHlwZS5ZZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWIpZm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5OKGEsYltjXSl9O1cucHJvdG90eXBlLndyaXRlUmVwZWF0ZWRWYXJpbnRIYXNoNjQ9Vy5wcm90b3R5cGUuWWQ7XG5XLnByb3RvdHlwZS5hZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEuTShiW2NdKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEludDMyPVcucHJvdG90eXBlLmFkO1cucHJvdG90eXBlLmJkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpe2E9WCh0aGlzLGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuYS5NKHBhcnNlSW50KGJbY10sMTApKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEludDMyU3RyaW5nPVcucHJvdG90eXBlLmJkO1cucHJvdG90eXBlLmNkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpe2E9WCh0aGlzLGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuYS51YShiW2NdKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEludDY0PVcucHJvdG90eXBlLmNkO1xuVy5wcm90b3R5cGUubWQ9ZnVuY3Rpb24oYSxiLGMsZCl7aWYobnVsbCE9Yil7YT1YKHRoaXMsYSk7Zm9yKHZhciBmPTA7ZjxiLmxlbmd0aDtmKyspdGhpcy5hLkEoYyhiW2ZdKSxkKGJbZl0pKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZFNwbGl0Rml4ZWQ2ND1XLnByb3RvdHlwZS5tZDtXLnByb3RvdHlwZS5uZD1mdW5jdGlvbihhLGIsYyxkKXtpZihudWxsIT1iKXthPVgodGhpcyxhKTtmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKyl0aGlzLmEubChjKGJbZl0pLGQoYltmXSkpO1oodGhpcyxhKX19O1cucHJvdG90eXBlLndyaXRlUGFja2VkU3BsaXRWYXJpbnQ2ND1XLnByb3RvdHlwZS5uZDtXLnByb3RvdHlwZS5vZD1mdW5jdGlvbihhLGIsYyxkKXtpZihudWxsIT1iKXthPVgodGhpcyxhKTtmb3IodmFyIGY9dGhpcy5hLGg9MDtoPGIubGVuZ3RoO2grKylKYShjKGJbaF0pLGQoYltoXSksZnVuY3Rpb24obSx0KXtmLmwobT4+PjAsdD4+PjApfSk7Wih0aGlzLGEpfX07XG5XLnByb3RvdHlwZS53cml0ZVBhY2tlZFNwbGl0WmlnemFnVmFyaW50NjQ9Vy5wcm90b3R5cGUub2Q7Vy5wcm90b3R5cGUuZGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPXNiKGJbY10pO3RoaXMuYS5sKGQubG8sZC5oaSl9Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRJbnQ2NFN0cmluZz1XLnByb3RvdHlwZS5kZDtXLnByb3RvdHlwZS5wZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEuaihiW2NdKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZFVpbnQzMj1XLnByb3RvdHlwZS5wZDtcblcucHJvdG90eXBlLnFkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpe2E9WCh0aGlzLGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuYS5qKHBhcnNlSW50KGJbY10sMTApKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZFVpbnQzMlN0cmluZz1XLnByb3RvdHlwZS5xZDtXLnByb3RvdHlwZS5yZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEudmEoYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRVaW50NjQ9Vy5wcm90b3R5cGUucmQ7Vy5wcm90b3R5cGUuc2Q9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspe3ZhciBkPVUoYltjXSk7dGhpcy5hLmwoZC5sbyxkLmhpKX1aKHRoaXMsYSl9fTtcblcucHJvdG90eXBlLndyaXRlUGFja2VkVWludDY0U3RyaW5nPVcucHJvdG90eXBlLnNkO1cucHJvdG90eXBlLmhkPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpe2E9WCh0aGlzLGEpO2Zvcih2YXIgYz0wO2M8Yi5sZW5ndGg7YysrKXRoaXMuYS53YShiW2NdKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZFNpbnQzMj1XLnByb3RvdHlwZS5oZDtXLnByb3RvdHlwZS5qZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEueGEoYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRTaW50NjQ9Vy5wcm90b3R5cGUuamQ7Vy5wcm90b3R5cGUua2Q9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5hLlcoSChiW2NdKSk7Wih0aGlzLGEpfX07XG5XLnByb3RvdHlwZS53cml0ZVBhY2tlZFNpbnQ2NFN0cmluZz1XLnByb3RvdHlwZS5rZDtXLnByb3RvdHlwZS5sZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEuVyhiW2NdKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZFNpbnRIYXNoNjQ9Vy5wcm90b3R5cGUubGQ7Vy5wcm90b3R5cGUuV2M9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooNCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5zKGJbYV0pfTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEZpeGVkMzI9Vy5wcm90b3R5cGUuV2M7Vy5wcm90b3R5cGUuWGM9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooOCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5WKGJbYV0pfTtcblcucHJvdG90eXBlLndyaXRlUGFja2VkRml4ZWQ2ND1XLnByb3RvdHlwZS5YYztXLnByb3RvdHlwZS5ZYz1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKWZvcihZKHRoaXMsYSwyKSx0aGlzLmEuaig4KmIubGVuZ3RoKSxhPTA7YTxiLmxlbmd0aDthKyspe3ZhciBjPVUoYlthXSk7dGhpcy5hLkEoYy5sbyxjLmhpKX19O1cucHJvdG90eXBlLndyaXRlUGFja2VkRml4ZWQ2NFN0cmluZz1XLnByb3RvdHlwZS5ZYztXLnByb3RvdHlwZS5lZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKWZvcihZKHRoaXMsYSwyKSx0aGlzLmEuaig0KmIubGVuZ3RoKSxhPTA7YTxiLmxlbmd0aDthKyspdGhpcy5hLlMoYlthXSl9O1cucHJvdG90eXBlLndyaXRlUGFja2VkU2ZpeGVkMzI9Vy5wcm90b3R5cGUuZWQ7XG5XLnByb3RvdHlwZS5mZD1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKWZvcihZKHRoaXMsYSwyKSx0aGlzLmEuaig4KmIubGVuZ3RoKSxhPTA7YTxiLmxlbmd0aDthKyspdGhpcy5hLlQoYlthXSl9O1cucHJvdG90eXBlLndyaXRlUGFja2VkU2ZpeGVkNjQ9Vy5wcm90b3R5cGUuZmQ7Vy5wcm90b3R5cGUuZ2Q9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aClmb3IoWSh0aGlzLGEsMiksdGhpcy5hLmooOCpiLmxlbmd0aCksYT0wO2E8Yi5sZW5ndGg7YSsrKXRoaXMuYS5rYShiW2FdKX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRTZml4ZWQ2NFN0cmluZz1XLnByb3RvdHlwZS5nZDtXLnByb3RvdHlwZS4kYz1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKWZvcihZKHRoaXMsYSwyKSx0aGlzLmEuaig0KmIubGVuZ3RoKSxhPTA7YTxiLmxlbmd0aDthKyspdGhpcy5hLkwoYlthXSl9O1cucHJvdG90eXBlLndyaXRlUGFja2VkRmxvYXQ9Vy5wcm90b3R5cGUuJGM7XG5XLnByb3RvdHlwZS5VYz1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKWZvcihZKHRoaXMsYSwyKSx0aGlzLmEuaig4KmIubGVuZ3RoKSxhPTA7YTxiLmxlbmd0aDthKyspdGhpcy5hLkooYlthXSl9O1cucHJvdG90eXBlLndyaXRlUGFja2VkRG91YmxlPVcucHJvdG90eXBlLlVjO1cucHJvdG90eXBlLlRjPWZ1bmN0aW9uKGEsYil7aWYobnVsbCE9YiYmYi5sZW5ndGgpZm9yKFkodGhpcyxhLDIpLHRoaXMuYS5qKGIubGVuZ3RoKSxhPTA7YTxiLmxlbmd0aDthKyspdGhpcy5hLkkoYlthXSl9O1cucHJvdG90eXBlLndyaXRlUGFja2VkQm9vbD1XLnByb3RvdHlwZS5UYztXLnByb3RvdHlwZS5WYz1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKXthPVgodGhpcyxhKTtmb3IodmFyIGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLmEuUihiW2NdKTtaKHRoaXMsYSl9fTtXLnByb3RvdHlwZS53cml0ZVBhY2tlZEVudW09Vy5wcm90b3R5cGUuVmM7XG5XLnByb3RvdHlwZS5aYz1mdW5jdGlvbihhLGIpe2lmKG51bGwhPWImJmIubGVuZ3RoKWZvcihZKHRoaXMsYSwyKSx0aGlzLmEuaig4KmIubGVuZ3RoKSxhPTA7YTxiLmxlbmd0aDthKyspdGhpcy5hLksoYlthXSl9O1cucHJvdG90eXBlLndyaXRlUGFja2VkRml4ZWRIYXNoNjQ9Vy5wcm90b3R5cGUuWmM7Vy5wcm90b3R5cGUudGQ9ZnVuY3Rpb24oYSxiKXtpZihudWxsIT1iJiZiLmxlbmd0aCl7YT1YKHRoaXMsYSk7Zm9yKHZhciBjPTA7YzxiLmxlbmd0aDtjKyspdGhpcy5hLk4oYltjXSk7Wih0aGlzLGEpfX07Vy5wcm90b3R5cGUud3JpdGVQYWNrZWRWYXJpbnRIYXNoNjQ9Vy5wcm90b3R5cGUudGQ7XCJvYmplY3RcIj09PXR5cGVvZiBleHBvcnRzJiYoZXhwb3J0cy5kZWJ1Zz1SLGV4cG9ydHMuTWFwPXIsZXhwb3J0cy5NZXNzYWdlPU4sZXhwb3J0cy5CaW5hcnlSZWFkZXI9SixleHBvcnRzLkJpbmFyeVdyaXRlcj1XLGV4cG9ydHMuRXh0ZW5zaW9uRmllbGRJbmZvPVlhLGV4cG9ydHMuRXh0ZW5zaW9uRmllbGRCaW5hcnlJbmZvPVphLGV4cG9ydHMuZXhwb3J0U3ltYm9sPW1hLGV4cG9ydHMuaW5oZXJpdHM9bmEsZXhwb3J0cy5vYmplY3Q9e2V4dGVuZDpwYX0sZXhwb3J0cy50eXBlT2Y9ayk7XG4iLCIvLyBzb3VyY2U6IGdvb2dsZS9wcm90b2J1Zi9lbXB0eS5wcm90b1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9IHJlcG9ydHMgZXJyb3Igb24gaW1wbGljaXQgdHlwZSB1c2FnZXMuXG4gKiBAc3VwcHJlc3Mge21lc3NhZ2VDb252ZW50aW9uc30gSlMgQ29tcGlsZXIgcmVwb3J0cyBhbiBlcnJvciBpZiBhIHZhcmlhYmxlIG9yXG4gKiAgICAgZmllbGQgc3RhcnRzIHdpdGggJ01TR18nIGFuZCBpc24ndCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlLlxuICogQHB1YmxpY1xuICovXG4vLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9XG4gICAgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHx8XG4gICAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCkgfHxcbiAgICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYpIHx8XG4gICAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pLmNhbGwobnVsbCkgfHxcbiAgICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5JywgbnVsbCwgZ2xvYmFsKTtcbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5nb29nbGUucHJvdG9idWYuRW1wdHkgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5LCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5LmRpc3BsYXlOYW1lID0gJ3Byb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSc7XG59XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHkudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHl9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG5cbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eX1cbiAqL1xucHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5LmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5O1xuICByZXR1cm4gcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eX0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHl9XG4gKi9cbnByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5nb29nbGUucHJvdG9idWYuRW1wdHkucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eX0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5nb29nbGUucHJvdG9idWYuRW1wdHkuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by5nb29nbGUucHJvdG9idWYpO1xuIiwiLy8gc291cmNlOiBnb29nbGUvcHJvdG9idWYvdGltZXN0YW1wLnByb3RvXG4vKipcbiAqIEBmaWxlb3ZlcnZpZXdcbiAqIEBlbmhhbmNlYWJsZVxuICogQHN1cHByZXNzIHttaXNzaW5nUmVxdWlyZX0gcmVwb3J0cyBlcnJvciBvbiBpbXBsaWNpdCB0eXBlIHVzYWdlcy5cbiAqIEBzdXBwcmVzcyB7bWVzc2FnZUNvbnZlbnRpb25zfSBKUyBDb21waWxlciByZXBvcnRzIGFuIGVycm9yIGlmIGEgdmFyaWFibGUgb3JcbiAqICAgICBmaWVsZCBzdGFydHMgd2l0aCAnTVNHXycgYW5kIGlzbid0IGEgdHJhbnNsYXRhYmxlIG1lc3NhZ2UuXG4gKiBAcHVibGljXG4gKi9cbi8vIEdFTkVSQVRFRCBDT0RFIC0tIERPIE5PVCBFRElUIVxuLyogZXNsaW50LWRpc2FibGUgKi9cbi8vIEB0cy1ub2NoZWNrXG5cbnZhciBqc3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmJyk7XG52YXIgZ29vZyA9IGpzcGI7XG52YXIgZ2xvYmFsID1cbiAgICAodHlwZW9mIGdsb2JhbFRoaXMgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbFRoaXMpIHx8XG4gICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdykgfHxcbiAgICAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcgJiYgZ2xvYmFsKSB8fFxuICAgICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZikgfHxcbiAgICAoZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSkuY2FsbChudWxsKSB8fFxuICAgIEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wJywgbnVsbCwgZ2xvYmFsKTtcbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wLmRpc3BsYXlOYW1lID0gJ3Byb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAnO1xufVxuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wLnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wLnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbnNlY29uZHM6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgMCksXG5uYW5vczoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCAwKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcH1cbiAqL1xucHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKGJ5dGVzKSB7XG4gIHZhciByZWFkZXIgPSBuZXcganNwYi5CaW5hcnlSZWFkZXIoYnl0ZXMpO1xuICB2YXIgbXNnID0gbmV3IHByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXA7XG4gIHJldHVybiBwcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXB9IG1zZyBUaGUgbWVzc2FnZSBvYmplY3QgdG8gZGVzZXJpYWxpemUgaW50by5cbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5UmVhZGVyfSByZWFkZXIgVGhlIEJpbmFyeVJlYWRlciB0byB1c2UuXG4gKiBAcmV0dXJuIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcH1cbiAqL1xucHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDY0KCkpO1xuICAgICAgbXNnLnNldFNlY29uZHModmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChyZWFkZXIucmVhZEludDMyKCkpO1xuICAgICAgbXNnLnNldE5hbm9zKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXB9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0U2Vjb25kcygpO1xuICBpZiAoZiAhPT0gMCkge1xuICAgIHdyaXRlci53cml0ZUludDY0KFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldE5hbm9zKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50MzIoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQ2NCBzZWNvbmRzID0gMTtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcC5wcm90b3R5cGUuZ2V0U2Vjb25kcyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtudW1iZXJ9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCAwKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAucHJvdG90eXBlLnNldFNlY29uZHMgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBpbnQzMiBuYW5vcyA9IDI7XG4gKiBAcmV0dXJuIHtudW1iZXJ9XG4gKi9cbnByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAucHJvdG90eXBlLmdldE5hbm9zID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge251bWJlcn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIDApKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge251bWJlcn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcC5wcm90b3R5cGUuc2V0TmFub3MgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM0ludEZpZWxkKHRoaXMsIDIsIHZhbHVlKTtcbn07XG5cblxuZ29vZy5vYmplY3QuZXh0ZW5kKGV4cG9ydHMsIHByb3RvLmdvb2dsZS5wcm90b2J1Zik7XG4vKiBUaGlzIGNvZGUgd2lsbCBiZSBpbnNlcnRlZCBpbnRvIGdlbmVyYXRlZCBjb2RlIGZvclxuICogZ29vZ2xlL3Byb3RvYnVmL3RpbWVzdGFtcC5wcm90by4gKi9cblxuLyoqXG4gKiBSZXR1cm5zIGEgSmF2YVNjcmlwdCAnRGF0ZScgb2JqZWN0IGNvcnJlc3BvbmRpbmcgdG8gdGhpcyBUaW1lc3RhbXAuXG4gKiBAcmV0dXJuIHshRGF0ZX1cbiAqL1xucHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcC5wcm90b3R5cGUudG9EYXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBzZWNvbmRzID0gdGhpcy5nZXRTZWNvbmRzKCk7XG4gIHZhciBuYW5vcyA9IHRoaXMuZ2V0TmFub3MoKTtcblxuICByZXR1cm4gbmV3IERhdGUoKHNlY29uZHMgKiAxMDAwKSArIChuYW5vcyAvIDEwMDAwMDApKTtcbn07XG5cblxuLyoqXG4gKiBTZXRzIHRoZSB2YWx1ZSBvZiB0aGlzIFRpbWVzdGFtcCBvYmplY3QgdG8gYmUgdGhlIGdpdmVuIERhdGUuXG4gKiBAcGFyYW0geyFEYXRlfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICovXG5wcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wLnByb3RvdHlwZS5mcm9tRGF0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHRoaXMuc2V0U2Vjb25kcyhNYXRoLmZsb29yKHZhbHVlLmdldFRpbWUoKSAvIDEwMDApKTtcbiAgdGhpcy5zZXROYW5vcyh2YWx1ZS5nZXRNaWxsaXNlY29uZHMoKSAqIDEwMDAwMDApO1xufTtcblxuXG4vKipcbiAqIEZhY3RvcnkgbWV0aG9kIHRoYXQgcmV0dXJucyBhIFRpbWVzdGFtcCBvYmplY3Qgd2l0aCB2YWx1ZSBlcXVhbCB0b1xuICogdGhlIGdpdmVuIERhdGUuXG4gKiBAcGFyYW0geyFEYXRlfSB2YWx1ZSBUaGUgdmFsdWUgdG8gc2V0LlxuICogQHJldHVybiB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXB9XG4gKi9cbnByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAuZnJvbURhdGUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB2YXIgdGltZXN0YW1wID0gbmV3IHByb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXAoKTtcbiAgdGltZXN0YW1wLmZyb21EYXRlKHZhbHVlKTtcbiAgcmV0dXJuIHRpbWVzdGFtcDtcbn07XG4iLCIvKlxuXG4gQ29weXJpZ2h0IFRoZSBDbG9zdXJlIExpYnJhcnkgQXV0aG9ycy5cbiBTUERYLUxpY2Vuc2UtSWRlbnRpZmllcjogQXBhY2hlLTIuMFxuKi9cbnZhciBuO2Z1bmN0aW9uIGFhKGEpe3ZhciBiPTA7cmV0dXJuIGZ1bmN0aW9uKCl7cmV0dXJuIGI8YS5sZW5ndGg/e2RvbmU6ITEsdmFsdWU6YVtiKytdfTp7ZG9uZTohMH19fXZhciBiYT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3QuZGVmaW5lUHJvcGVydGllcz9PYmplY3QuZGVmaW5lUHJvcGVydHk6ZnVuY3Rpb24oYSxiLGMpe2EhPUFycmF5LnByb3RvdHlwZSYmYSE9T2JqZWN0LnByb3RvdHlwZSYmKGFbYl09Yy52YWx1ZSl9O2Z1bmN0aW9uIGNhKGEpe2E9W1wib2JqZWN0XCI9PXR5cGVvZiB3aW5kb3cmJndpbmRvdyxcIm9iamVjdFwiPT10eXBlb2Ygc2VsZiYmc2VsZixcIm9iamVjdFwiPT10eXBlb2YgZ2xvYmFsJiZnbG9iYWwsYV07Zm9yKHZhciBiPTA7YjxhLmxlbmd0aDsrK2Ipe3ZhciBjPWFbYl07aWYoYyYmYy5NYXRoPT1NYXRoKXJldHVybiBjfXRocm93IEVycm9yKFwiQ2Fubm90IGZpbmQgZ2xvYmFsIG9iamVjdFwiKTt9dmFyIHI9Y2EodGhpcyk7XG5mdW5jdGlvbiB0KCl7dD1mdW5jdGlvbigpe307ci5TeW1ib2x8fChyLlN5bWJvbD1kYSl9ZnVuY3Rpb24gZWEoYSxiKXt0aGlzLmE9YTtiYSh0aGlzLFwiZGVzY3JpcHRpb25cIix7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmJ9KX1lYS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5hfTt2YXIgZGE9ZnVuY3Rpb24oKXtmdW5jdGlvbiBhKGMpe2lmKHRoaXMgaW5zdGFuY2VvZiBhKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3JcIik7cmV0dXJuIG5ldyBlYShcImpzY29tcF9zeW1ib2xfXCIrKGN8fFwiXCIpK1wiX1wiK2IrKyxjKX12YXIgYj0wO3JldHVybiBhfSgpO1xuZnVuY3Rpb24gdSgpe3QoKTt2YXIgYT1yLlN5bWJvbC5pdGVyYXRvcjthfHwoYT1yLlN5bWJvbC5pdGVyYXRvcj1yLlN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSk7XCJmdW5jdGlvblwiIT10eXBlb2YgQXJyYXkucHJvdG90eXBlW2FdJiZiYShBcnJheS5wcm90b3R5cGUsYSx7Y29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIGZhKGFhKHRoaXMpKX19KTt1PWZ1bmN0aW9uKCl7fX1mdW5jdGlvbiBmYShhKXt1KCk7YT17bmV4dDphfTthW3IuU3ltYm9sLml0ZXJhdG9yXT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtyZXR1cm4gYX1mdW5jdGlvbiBoYShhKXt2YXIgYj1cInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3ImJmFbU3ltYm9sLml0ZXJhdG9yXTtyZXR1cm4gYj9iLmNhbGwoYSk6e25leHQ6YWEoYSl9fVxudmFyIGlhPVwiZnVuY3Rpb25cIj09dHlwZW9mIE9iamVjdC5jcmVhdGU/T2JqZWN0LmNyZWF0ZTpmdW5jdGlvbihhKXtmdW5jdGlvbiBiKCl7fWIucHJvdG90eXBlPWE7cmV0dXJuIG5ldyBifSxqYTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBPYmplY3Quc2V0UHJvdG90eXBlT2YpamE9T2JqZWN0LnNldFByb3RvdHlwZU9mO2Vsc2V7dmFyIGthO2E6e3ZhciBsYT17VjohMH0sbWE9e307dHJ5e21hLl9fcHJvdG9fXz1sYTtrYT1tYS5WO2JyZWFrIGF9Y2F0Y2goYSl7fWthPSExfWphPWthP2Z1bmN0aW9uKGEsYil7YS5fX3Byb3RvX189YjtpZihhLl9fcHJvdG9fXyE9PWIpdGhyb3cgbmV3IFR5cGVFcnJvcihhK1wiIGlzIG5vdCBleHRlbnNpYmxlXCIpO3JldHVybiBhfTpudWxsfXZhciBuYT1qYTtcbmZ1bmN0aW9uIG9hKGEsYil7YS5wcm90b3R5cGU9aWEoYi5wcm90b3R5cGUpO2EucHJvdG90eXBlLmNvbnN0cnVjdG9yPWE7aWYobmEpbmEoYSxiKTtlbHNlIGZvcih2YXIgYyBpbiBiKWlmKFwicHJvdG90eXBlXCIhPWMpaWYoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMpe3ZhciBkPU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoYixjKTtkJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoYSxjLGQpfWVsc2UgYVtjXT1iW2NdO2EuTz1iLnByb3RvdHlwZX1cbmZ1bmN0aW9uIHBhKGEsYil7dSgpO2EgaW5zdGFuY2VvZiBTdHJpbmcmJihhKz1cIlwiKTt2YXIgYz0wLGQ9e25leHQ6ZnVuY3Rpb24oKXtpZihjPGEubGVuZ3RoKXt2YXIgZj1jKys7cmV0dXJue3ZhbHVlOmIoZixhW2ZdKSxkb25lOiExfX1kLm5leHQ9ZnVuY3Rpb24oKXtyZXR1cm57ZG9uZTohMCx2YWx1ZTp2b2lkIDB9fTtyZXR1cm4gZC5uZXh0KCl9fTtkW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gZH07cmV0dXJuIGR9ZnVuY3Rpb24gdihhLGIpe2lmKGIpe3ZhciBjPXI7YT1hLnNwbGl0KFwiLlwiKTtmb3IodmFyIGQ9MDtkPGEubGVuZ3RoLTE7ZCsrKXt2YXIgZj1hW2RdO2YgaW4gY3x8KGNbZl09e30pO2M9Y1tmXX1hPWFbYS5sZW5ndGgtMV07ZD1jW2FdO2I9YihkKTtiIT1kJiZudWxsIT1iJiZiYShjLGEse2NvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMCx2YWx1ZTpifSl9fVxudihcIkFycmF5LnByb3RvdHlwZS5rZXlzXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpmdW5jdGlvbigpe3JldHVybiBwYSh0aGlzLGZ1bmN0aW9uKGIpe3JldHVybiBifSl9fSk7dihcIkFycmF5LnByb3RvdHlwZS5maW5kXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpmdW5jdGlvbihiLGMpe2E6e3ZhciBkPXRoaXM7ZCBpbnN0YW5jZW9mIFN0cmluZyYmKGQ9U3RyaW5nKGQpKTtmb3IodmFyIGY9ZC5sZW5ndGgsZz0wO2c8ZjtnKyspe3ZhciBlPWRbZ107aWYoYi5jYWxsKGMsZSxnLGQpKXtiPWU7YnJlYWsgYX19Yj12b2lkIDB9cmV0dXJuIGJ9fSk7dihcIk9iamVjdC5pc1wiLGZ1bmN0aW9uKGEpe3JldHVybiBhP2E6ZnVuY3Rpb24oYixjKXtyZXR1cm4gYj09PWM/MCE9PWJ8fDEvYj09PTEvYzpiIT09YiYmYyE9PWN9fSk7XG52KFwiQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXCIsZnVuY3Rpb24oYSl7cmV0dXJuIGE/YTpmdW5jdGlvbihiLGMpe3ZhciBkPXRoaXM7ZCBpbnN0YW5jZW9mIFN0cmluZyYmKGQ9U3RyaW5nKGQpKTt2YXIgZj1kLmxlbmd0aDtjPWN8fDA7Zm9yKDA+YyYmKGM9TWF0aC5tYXgoYytmLDApKTtjPGY7YysrKXt2YXIgZz1kW2NdO2lmKGc9PT1ifHxPYmplY3QuaXMoZyxiKSlyZXR1cm4hMH1yZXR1cm4hMX19KTtcbnYoXCJQcm9taXNlXCIsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihlKXt0aGlzLmI9MDt0aGlzLmM9dm9pZCAwO3RoaXMuYT1bXTt2YXIgaD10aGlzLmYoKTt0cnl7ZShoLnJlc29sdmUsaC5yZWplY3QpfWNhdGNoKGspe2gucmVqZWN0KGspfX1mdW5jdGlvbiBjKCl7dGhpcy5hPW51bGx9ZnVuY3Rpb24gZChlKXtyZXR1cm4gZSBpbnN0YW5jZW9mIGI/ZTpuZXcgYihmdW5jdGlvbihoKXtoKGUpfSl9aWYoYSlyZXR1cm4gYTtjLnByb3RvdHlwZS5iPWZ1bmN0aW9uKGUpe2lmKG51bGw9PXRoaXMuYSl7dGhpcy5hPVtdO3ZhciBoPXRoaXM7dGhpcy5jKGZ1bmN0aW9uKCl7aC5nKCl9KX10aGlzLmEucHVzaChlKX07dmFyIGY9ci5zZXRUaW1lb3V0O2MucHJvdG90eXBlLmM9ZnVuY3Rpb24oZSl7ZihlLDApfTtjLnByb3RvdHlwZS5nPWZ1bmN0aW9uKCl7Zm9yKDt0aGlzLmEmJnRoaXMuYS5sZW5ndGg7KXt2YXIgZT10aGlzLmE7dGhpcy5hPVtdO2Zvcih2YXIgaD0wO2g8ZS5sZW5ndGg7KytoKXt2YXIgaz1cbmVbaF07ZVtoXT1udWxsO3RyeXtrKCl9Y2F0Y2gobCl7dGhpcy5mKGwpfX19dGhpcy5hPW51bGx9O2MucHJvdG90eXBlLmY9ZnVuY3Rpb24oZSl7dGhpcy5jKGZ1bmN0aW9uKCl7dGhyb3cgZTt9KX07Yi5wcm90b3R5cGUuZj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUobCl7cmV0dXJuIGZ1bmN0aW9uKG0pe2t8fChrPSEwLGwuY2FsbChoLG0pKX19dmFyIGg9dGhpcyxrPSExO3JldHVybntyZXNvbHZlOmUodGhpcy5zKSxyZWplY3Q6ZSh0aGlzLmcpfX07Yi5wcm90b3R5cGUucz1mdW5jdGlvbihlKXtpZihlPT09dGhpcyl0aGlzLmcobmV3IFR5cGVFcnJvcihcIkEgUHJvbWlzZSBjYW5ub3QgcmVzb2x2ZSB0byBpdHNlbGZcIikpO2Vsc2UgaWYoZSBpbnN0YW5jZW9mIGIpdGhpcy52KGUpO2Vsc2V7YTpzd2l0Y2godHlwZW9mIGUpe2Nhc2UgXCJvYmplY3RcIjp2YXIgaD1udWxsIT1lO2JyZWFrIGE7Y2FzZSBcImZ1bmN0aW9uXCI6aD0hMDticmVhayBhO2RlZmF1bHQ6aD0hMX1oP3RoaXMubShlKTp0aGlzLmgoZSl9fTtcbmIucHJvdG90eXBlLm09ZnVuY3Rpb24oZSl7dmFyIGg9dm9pZCAwO3RyeXtoPWUudGhlbn1jYXRjaChrKXt0aGlzLmcoayk7cmV0dXJufVwiZnVuY3Rpb25cIj09dHlwZW9mIGg/dGhpcy53KGgsZSk6dGhpcy5oKGUpfTtiLnByb3RvdHlwZS5nPWZ1bmN0aW9uKGUpe3RoaXMuaSgyLGUpfTtiLnByb3RvdHlwZS5oPWZ1bmN0aW9uKGUpe3RoaXMuaSgxLGUpfTtiLnByb3RvdHlwZS5pPWZ1bmN0aW9uKGUsaCl7aWYoMCE9dGhpcy5iKXRocm93IEVycm9yKFwiQ2Fubm90IHNldHRsZShcIitlK1wiLCBcIitoK1wiKTogUHJvbWlzZSBhbHJlYWR5IHNldHRsZWQgaW4gc3RhdGVcIit0aGlzLmIpO3RoaXMuYj1lO3RoaXMuYz1oO3RoaXMubCgpfTtiLnByb3RvdHlwZS5sPWZ1bmN0aW9uKCl7aWYobnVsbCE9dGhpcy5hKXtmb3IodmFyIGU9MDtlPHRoaXMuYS5sZW5ndGg7KytlKWcuYih0aGlzLmFbZV0pO3RoaXMuYT1udWxsfX07dmFyIGc9bmV3IGM7Yi5wcm90b3R5cGUudj1mdW5jdGlvbihlKXt2YXIgaD10aGlzLmYoKTtcbmUuRihoLnJlc29sdmUsaC5yZWplY3QpfTtiLnByb3RvdHlwZS53PWZ1bmN0aW9uKGUsaCl7dmFyIGs9dGhpcy5mKCk7dHJ5e2UuY2FsbChoLGsucmVzb2x2ZSxrLnJlamVjdCl9Y2F0Y2gobCl7ay5yZWplY3QobCl9fTtiLnByb3RvdHlwZS50aGVuPWZ1bmN0aW9uKGUsaCl7ZnVuY3Rpb24gayhxLHcpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIHE/ZnVuY3Rpb24oQSl7dHJ5e2wocShBKSl9Y2F0Y2goTCl7bShMKX19Ond9dmFyIGwsbSxwPW5ldyBiKGZ1bmN0aW9uKHEsdyl7bD1xO209d30pO3RoaXMuRihrKGUsbCksayhoLG0pKTtyZXR1cm4gcH07Yi5wcm90b3R5cGUuY2F0Y2g9ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMudGhlbih2b2lkIDAsZSl9O2IucHJvdG90eXBlLkY9ZnVuY3Rpb24oZSxoKXtmdW5jdGlvbiBrKCl7c3dpdGNoKGwuYil7Y2FzZSAxOmUobC5jKTticmVhaztjYXNlIDI6aChsLmMpO2JyZWFrO2RlZmF1bHQ6dGhyb3cgRXJyb3IoXCJVbmV4cGVjdGVkIHN0YXRlOiBcIitcbmwuYik7fX12YXIgbD10aGlzO251bGw9PXRoaXMuYT9nLmIoayk6dGhpcy5hLnB1c2goayl9O2IucmVzb2x2ZT1kO2IucmVqZWN0PWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgYihmdW5jdGlvbihoLGspe2soZSl9KX07Yi5yYWNlPWZ1bmN0aW9uKGUpe3JldHVybiBuZXcgYihmdW5jdGlvbihoLGspe2Zvcih2YXIgbD1oYShlKSxtPWwubmV4dCgpOyFtLmRvbmU7bT1sLm5leHQoKSlkKG0udmFsdWUpLkYoaCxrKX0pfTtiLmFsbD1mdW5jdGlvbihlKXt2YXIgaD1oYShlKSxrPWgubmV4dCgpO3JldHVybiBrLmRvbmU/ZChbXSk6bmV3IGIoZnVuY3Rpb24obCxtKXtmdW5jdGlvbiBwKEEpe3JldHVybiBmdW5jdGlvbihMKXtxW0FdPUw7dy0tOzA9PXcmJmwocSl9fXZhciBxPVtdLHc9MDtkbyBxLnB1c2godm9pZCAwKSx3KyssZChrLnZhbHVlKS5GKHAocS5sZW5ndGgtMSksbSksaz1oLm5leHQoKTt3aGlsZSghay5kb25lKX0pfTtyZXR1cm4gYn0pO3ZhciBxYT1xYXx8e30seD10aGlzfHxzZWxmO1xuZnVuY3Rpb24geShhLGIpe2E9YS5zcGxpdChcIi5cIik7Yj1ifHx4O2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWlmKGI9YlthW2NdXSxudWxsPT1iKXJldHVybiBudWxsO3JldHVybiBifWZ1bmN0aW9uIHJhKCl7fWZ1bmN0aW9uIHNhKGEpe3ZhciBiPXR5cGVvZiBhO3JldHVyblwib2JqZWN0XCI9PWImJm51bGwhPWF8fFwiZnVuY3Rpb25cIj09Yn12YXIgdGE9XCJjbG9zdXJlX3VpZF9cIisoMUU5Kk1hdGgucmFuZG9tKCk+Pj4wKSx1YT0wO2Z1bmN0aW9uIHZhKGEsYixjKXtyZXR1cm4gYS5jYWxsLmFwcGx5KGEuYmluZCxhcmd1bWVudHMpfVxuZnVuY3Rpb24gd2EoYSxiLGMpe2lmKCFhKXRocm93IEVycm9yKCk7aWYoMjxhcmd1bWVudHMubGVuZ3RoKXt2YXIgZD1BcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMik7cmV0dXJuIGZ1bmN0aW9uKCl7dmFyIGY9QXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtBcnJheS5wcm90b3R5cGUudW5zaGlmdC5hcHBseShmLGQpO3JldHVybiBhLmFwcGx5KGIsZil9fXJldHVybiBmdW5jdGlvbigpe3JldHVybiBhLmFwcGx5KGIsYXJndW1lbnRzKX19ZnVuY3Rpb24geihhLGIsYyl7RnVuY3Rpb24ucHJvdG90eXBlLmJpbmQmJi0xIT1GdW5jdGlvbi5wcm90b3R5cGUuYmluZC50b1N0cmluZygpLmluZGV4T2YoXCJuYXRpdmUgY29kZVwiKT96PXZhOno9d2E7cmV0dXJuIHouYXBwbHkobnVsbCxhcmd1bWVudHMpfVxuZnVuY3Rpb24gQihhLGIpe2Z1bmN0aW9uIGMoKXt9Yy5wcm90b3R5cGU9Yi5wcm90b3R5cGU7YS5PPWIucHJvdG90eXBlO2EucHJvdG90eXBlPW5ldyBjO2EucHJvdG90eXBlLmNvbnN0cnVjdG9yPWF9O2Z1bmN0aW9uIHhhKGEpe3RoaXMuYT1hfHx7fX14YS5wcm90b3R5cGUuZ2V0PWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmFbYV19O3hhLnByb3RvdHlwZS5HPWZ1bmN0aW9uKCl7cmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYSl9O2Z1bmN0aW9uIEMoYSxiLGMsZCl7dGhpcy5mPWE7dGhpcy5jPWI7dGhpcy5iPWM7dGhpcy5hPWR9Qy5wcm90b3R5cGUuZ2V0UmVxdWVzdE1lc3NhZ2U9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5mfTtDLnByb3RvdHlwZS5nZXRNZXRob2REZXNjcmlwdG9yPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY307Qy5wcm90b3R5cGUuZ2V0TWV0YWRhdGE9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5ifTtDLnByb3RvdHlwZS5nZXRDYWxsT3B0aW9ucz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmF9O2Z1bmN0aW9uIEQoYSxiLGMsZCl7Yz12b2lkIDA9PT1jP3t9OmM7dGhpcy5jPWE7dGhpcy5hPWM7dGhpcy5iPWI7dGhpcy5mPXZvaWQgMD09PWQ/bnVsbDpkfUQucHJvdG90eXBlLmdldFJlc3BvbnNlTWVzc2FnZT1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN9O0QucHJvdG90eXBlLmdldE1ldGFkYXRhPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuYX07RC5wcm90b3R5cGUuZ2V0TWV0aG9kRGVzY3JpcHRvcj1mdW5jdGlvbigpe3JldHVybiB0aGlzLmJ9O0QucHJvdG90eXBlLmdldFN0YXR1cz1mdW5jdGlvbigpe3JldHVybiB0aGlzLmZ9O2Z1bmN0aW9uIHlhKGEsYixjLGQsZixnKXt0aGlzLm5hbWU9YTt0aGlzLmE9Zjt0aGlzLmI9Z31mdW5jdGlvbiB6YShhLGIsYyl7Yz12b2lkIDA9PT1jP3t9OmM7dmFyIGQ9dm9pZCAwPT09ZD9uZXcgeGE6ZDtyZXR1cm4gbmV3IEMoYixhLGMsZCl9eWEucHJvdG90eXBlLmdldE5hbWU9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5uYW1lfTt5YS5wcm90b3R5cGUuZ2V0TmFtZT15YS5wcm90b3R5cGUuZ2V0TmFtZTtmdW5jdGlvbiBBYShhKXtzd2l0Y2goYSl7Y2FzZSAyMDA6cmV0dXJuIDA7Y2FzZSA0MDA6cmV0dXJuIDM7Y2FzZSA0MDE6cmV0dXJuIDE2O2Nhc2UgNDAzOnJldHVybiA3O2Nhc2UgNDA0OnJldHVybiA1O2Nhc2UgNDA5OnJldHVybiAxMDtjYXNlIDQxMjpyZXR1cm4gOTtjYXNlIDQyOTpyZXR1cm4gODtjYXNlIDQ5OTpyZXR1cm4gMTtjYXNlIDUwMDpyZXR1cm4gMjtjYXNlIDUwMTpyZXR1cm4gMTI7Y2FzZSA1MDM6cmV0dXJuIDE0O2Nhc2UgNTA0OnJldHVybiA0O2RlZmF1bHQ6cmV0dXJuIDJ9fVxuZnVuY3Rpb24gQmEoYSl7c3dpdGNoKGEpe2Nhc2UgMDpyZXR1cm5cIk9LXCI7Y2FzZSAxOnJldHVyblwiQ0FOQ0VMTEVEXCI7Y2FzZSAyOnJldHVyblwiVU5LTk9XTlwiO2Nhc2UgMzpyZXR1cm5cIklOVkFMSURfQVJHVU1FTlRcIjtjYXNlIDQ6cmV0dXJuXCJERUFETElORV9FWENFRURFRFwiO2Nhc2UgNTpyZXR1cm5cIk5PVF9GT1VORFwiO2Nhc2UgNjpyZXR1cm5cIkFMUkVBRFlfRVhJU1RTXCI7Y2FzZSA3OnJldHVyblwiUEVSTUlTU0lPTl9ERU5JRURcIjtjYXNlIDE2OnJldHVyblwiVU5BVVRIRU5USUNBVEVEXCI7Y2FzZSA4OnJldHVyblwiUkVTT1VSQ0VfRVhIQVVTVEVEXCI7Y2FzZSA5OnJldHVyblwiRkFJTEVEX1BSRUNPTkRJVElPTlwiO2Nhc2UgMTA6cmV0dXJuXCJBQk9SVEVEXCI7Y2FzZSAxMTpyZXR1cm5cIk9VVF9PRl9SQU5HRVwiO2Nhc2UgMTI6cmV0dXJuXCJVTklNUExFTUVOVEVEXCI7Y2FzZSAxMzpyZXR1cm5cIklOVEVSTkFMXCI7Y2FzZSAxNDpyZXR1cm5cIlVOQVZBSUxBQkxFXCI7Y2FzZSAxNTpyZXR1cm5cIkRBVEFfTE9TU1wiO1xuZGVmYXVsdDpyZXR1cm5cIlwifX07ZnVuY3Rpb24gRShhLGIsYyl7Yz12b2lkIDA9PT1jP3t9OmM7Yj1FcnJvci5jYWxsKHRoaXMsYik7dGhpcy5tZXNzYWdlPWIubWVzc2FnZTtcInN0YWNrXCJpbiBiJiYodGhpcy5zdGFjaz1iLnN0YWNrKTt0aGlzLmNvZGU9YTt0aGlzLm1ldGFkYXRhPWN9b2EoRSxFcnJvcik7RS5wcm90b3R5cGUudG9TdHJpbmc9ZnVuY3Rpb24oKXt2YXIgYT1cIlJwY0Vycm9yKFwiKyhCYSh0aGlzLmNvZGUpfHxTdHJpbmcodGhpcy5jb2RlKSkrXCIpXCI7dGhpcy5tZXNzYWdlJiYoYSs9XCI6IFwiK3RoaXMubWVzc2FnZSk7cmV0dXJuIGF9O0UucHJvdG90eXBlLm5hbWU9XCJScGNFcnJvclwiO2Z1bmN0aW9uIENhKGEpe3RoaXMuYT1hfUNhLnByb3RvdHlwZS5vbj1mdW5jdGlvbihhLGIpe3JldHVyblwiZGF0YVwiPT1hfHxcImVycm9yXCI9PWE/dGhpczp0aGlzLmEub24oYSxiKX07Q2EucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMuYS5yZW1vdmVMaXN0ZW5lcihhLGIpfTtDYS5wcm90b3R5cGUuY2FuY2VsPWZ1bmN0aW9uKCl7dGhpcy5hLmNhbmNlbCgpfTtmdW5jdGlvbiBEYShhKXtzd2l0Y2goYSl7Y2FzZSAwOnJldHVyblwiTm8gRXJyb3JcIjtjYXNlIDE6cmV0dXJuXCJBY2Nlc3MgZGVuaWVkIHRvIGNvbnRlbnQgZG9jdW1lbnRcIjtjYXNlIDI6cmV0dXJuXCJGaWxlIG5vdCBmb3VuZFwiO2Nhc2UgMzpyZXR1cm5cIkZpcmVmb3ggc2lsZW50bHkgZXJyb3JlZFwiO2Nhc2UgNDpyZXR1cm5cIkFwcGxpY2F0aW9uIGN1c3RvbSBlcnJvclwiO2Nhc2UgNTpyZXR1cm5cIkFuIGV4Y2VwdGlvbiBvY2N1cnJlZFwiO2Nhc2UgNjpyZXR1cm5cIkh0dHAgcmVzcG9uc2UgYXQgNDAwIG9yIDUwMCBsZXZlbFwiO2Nhc2UgNzpyZXR1cm5cIlJlcXVlc3Qgd2FzIGFib3J0ZWRcIjtjYXNlIDg6cmV0dXJuXCJSZXF1ZXN0IHRpbWVkIG91dFwiO2Nhc2UgOTpyZXR1cm5cIlRoZSByZXNvdXJjZSBpcyBub3QgYXZhaWxhYmxlIG9mZmxpbmVcIjtkZWZhdWx0OnJldHVyblwiVW5yZWNvZ25pemVkIGVycm9yIGNvZGVcIn19O2Z1bmN0aW9uIEYoYSl7aWYoRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UpRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcyxGKTtlbHNle3ZhciBiPUVycm9yKCkuc3RhY2s7YiYmKHRoaXMuc3RhY2s9Yil9YSYmKHRoaXMubWVzc2FnZT1TdHJpbmcoYSkpfUIoRixFcnJvcik7Ri5wcm90b3R5cGUubmFtZT1cIkN1c3RvbUVycm9yXCI7ZnVuY3Rpb24gRWEoYSxiKXthPWEuc3BsaXQoXCIlc1wiKTtmb3IodmFyIGM9XCJcIixkPWEubGVuZ3RoLTEsZj0wO2Y8ZDtmKyspYys9YVtmXSsoZjxiLmxlbmd0aD9iW2ZdOlwiJXNcIik7Ri5jYWxsKHRoaXMsYythW2RdKX1CKEVhLEYpO0VhLnByb3RvdHlwZS5uYW1lPVwiQXNzZXJ0aW9uRXJyb3JcIjtmdW5jdGlvbiBGYShhLGIpe3Rocm93IG5ldyBFYShcIkZhaWx1cmVcIisoYT9cIjogXCIrYTpcIlwiKSxBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpO307ZnVuY3Rpb24gR2EoKXt0aGlzLmw9bnVsbDt0aGlzLmk9W107dGhpcy5tPTA7dGhpcy5iPUhhO3RoaXMuZj10aGlzLmE9dGhpcy5oPTA7dGhpcy5jPW51bGw7dGhpcy5nPTB9XG5mdW5jdGlvbiBJYShhLGIpe2Z1bmN0aW9uIGMobCl7bD09SmE/ZS5oPWw6bD09Rz9lLmg9bDpLYShlLGgsayxcImludmFsaWQgZnJhbWUgYnl0ZVwiKTtlLmI9TGE7ZS5hPTA7ZS5mPTB9ZnVuY3Rpb24gZChsKXtlLmYrKztlLmE9KGUuYTw8OCkrbDs0PT1lLmYmJihlLmI9TWEsZS5nPTAsXCJ1bmRlZmluZWRcIiE9PXR5cGVvZiBVaW50OEFycmF5P2UuYz1uZXcgVWludDhBcnJheShlLmEpOmUuYz1BcnJheShlLmEpLDA9PWUuYSYmZygpKX1mdW5jdGlvbiBmKGwpe2UuY1tlLmcrK109bDtlLmc9PWUuYSYmZygpfWZ1bmN0aW9uIGcoKXt2YXIgbD17fTtsW2UuaF09ZS5jO2UuaS5wdXNoKGwpO2UuYj1IYX12YXIgZT1hLGgsaz0wO2ZvcihiIGluc3RhbmNlb2YgVWludDhBcnJheXx8YiBpbnN0YW5jZW9mIEFycmF5P2g9YjpoPW5ldyBVaW50OEFycmF5KGIpO2s8aC5sZW5ndGg7KXtzd2l0Y2goZS5iKXtjYXNlIE5hOkthKGUsaCxrLFwic3RyZWFtIGFscmVhZHkgYnJva2VuXCIpO2JyZWFrO2Nhc2UgSGE6YyhoW2tdKTtcbmJyZWFrO2Nhc2UgTGE6ZChoW2tdKTticmVhaztjYXNlIE1hOmYoaFtrXSk7YnJlYWs7ZGVmYXVsdDp0aHJvdyBFcnJvcihcInVuZXhwZWN0ZWQgcGFyc2VyIHN0YXRlOiBcIitlLmIpO31lLm0rKztrKyt9YT1lLmk7ZS5pPVtdO3JldHVybiAwPGEubGVuZ3RoP2E6bnVsbH12YXIgSGE9MCxMYT0xLE1hPTIsTmE9MyxKYT0wLEc9MTI4O2Z1bmN0aW9uIEthKGEsYixjLGQpe2EuYj1OYTthLmw9XCJUaGUgc3RyZWFtIGlzIGJyb2tlbiBAXCIrYS5tK1wiL1wiK2MrXCIuIEVycm9yOiBcIitkK1wiLiBXaXRoIGlucHV0OlxcblwiK2I7dGhyb3cgRXJyb3IoYS5sKTt9O3ZhciBPYT1BcnJheS5wcm90b3R5cGUuaW5kZXhPZj9mdW5jdGlvbihhLGIpe3JldHVybiBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGEsYix2b2lkIDApfTpmdW5jdGlvbihhLGIpe2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYSlyZXR1cm5cInN0cmluZ1wiIT09dHlwZW9mIGJ8fDEhPWIubGVuZ3RoPy0xOmEuaW5kZXhPZihiLDApO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWlmKGMgaW4gYSYmYVtjXT09PWIpcmV0dXJuIGM7cmV0dXJuLTF9O3ZhciBQYT1TdHJpbmcucHJvdG90eXBlLnRyaW0/ZnVuY3Rpb24oYSl7cmV0dXJuIGEudHJpbSgpfTpmdW5jdGlvbihhKXtyZXR1cm4vXltcXHNcXHhhMF0qKFtcXHNcXFNdKj8pW1xcc1xceGEwXSokLy5leGVjKGEpWzFdfTtmdW5jdGlvbiBIKGEsYil7cmV0dXJuLTEhPWEuaW5kZXhPZihiKX1mdW5jdGlvbiBRYShhLGIpe3JldHVybiBhPGI/LTE6YT5iPzE6MH07dmFyIEk7YTp7dmFyIFJhPXgubmF2aWdhdG9yO2lmKFJhKXt2YXIgU2E9UmEudXNlckFnZW50O2lmKFNhKXtJPVNhO2JyZWFrIGF9fUk9XCJcIn07ZnVuY3Rpb24gVGEoYSxiKXtmb3IodmFyIGMgaW4gYSliLmNhbGwodm9pZCAwLGFbY10sYyxhKX1mdW5jdGlvbiBVYShhLGIpe3ZhciBjPXt9LGQ7Zm9yKGQgaW4gYSljW2RdPWIuY2FsbCh2b2lkIDAsYVtkXSxkLGEpO3JldHVybiBjfXZhciBWYT1cImNvbnN0cnVjdG9yIGhhc093blByb3BlcnR5IGlzUHJvdG90eXBlT2YgcHJvcGVydHlJc0VudW1lcmFibGUgdG9Mb2NhbGVTdHJpbmcgdG9TdHJpbmcgdmFsdWVPZlwiLnNwbGl0KFwiIFwiKTtmdW5jdGlvbiBXYShhLGIpe2Zvcih2YXIgYyxkLGY9MTtmPGFyZ3VtZW50cy5sZW5ndGg7ZisrKXtkPWFyZ3VtZW50c1tmXTtmb3IoYyBpbiBkKWFbY109ZFtjXTtmb3IodmFyIGc9MDtnPFZhLmxlbmd0aDtnKyspYz1WYVtnXSxPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZCxjKSYmKGFbY109ZFtjXSl9fTtmdW5jdGlvbiBYYShhKXt2YXIgYj0xO2E9YS5zcGxpdChcIjpcIik7Zm9yKHZhciBjPVtdOzA8YiYmYS5sZW5ndGg7KWMucHVzaChhLnNoaWZ0KCkpLGItLTthLmxlbmd0aCYmYy5wdXNoKGEuam9pbihcIjpcIikpO3JldHVybiBjfTtmdW5jdGlvbiBZYShhKXtZYVtcIiBcIl0oYSk7cmV0dXJuIGF9WWFbXCIgXCJdPXJhO2Z1bmN0aW9uIFphKGEpe3ZhciBiPSRhO3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiw5KT9iWzldOmJbOV09YSg5KX07dmFyIGFiPUgoSSxcIk9wZXJhXCIpLGJiPUgoSSxcIlRyaWRlbnRcIil8fEgoSSxcIk1TSUVcIiksY2I9SChJLFwiRWRnZVwiKSxkYj1IKEksXCJHZWNrb1wiKSYmIShIKEkudG9Mb3dlckNhc2UoKSxcIndlYmtpdFwiKSYmIUgoSSxcIkVkZ2VcIikpJiYhKEgoSSxcIlRyaWRlbnRcIil8fEgoSSxcIk1TSUVcIikpJiYhSChJLFwiRWRnZVwiKSxlYj1IKEkudG9Mb3dlckNhc2UoKSxcIndlYmtpdFwiKSYmIUgoSSxcIkVkZ2VcIiksZmI7XG5hOnt2YXIgZ2I9XCJcIixoYj1mdW5jdGlvbigpe3ZhciBhPUk7aWYoZGIpcmV0dXJuL3J2OihbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKGNiKXJldHVybi9FZGdlXFwvKFtcXGRcXC5dKykvLmV4ZWMoYSk7aWYoYmIpcmV0dXJuL1xcYig/Ok1TSUV8cnYpWzogXShbXlxcKTtdKykoXFwpfDspLy5leGVjKGEpO2lmKGViKXJldHVybi9XZWJLaXRcXC8oXFxTKykvLmV4ZWMoYSk7aWYoYWIpcmV0dXJuLyg/OlZlcnNpb24pWyBcXC9dPyhcXFMrKS8uZXhlYyhhKX0oKTtoYiYmKGdiPWhiP2hiWzFdOlwiXCIpO2lmKGJiKXt2YXIgaWIsamI9eC5kb2N1bWVudDtpYj1qYj9qYi5kb2N1bWVudE1vZGU6dm9pZCAwO2lmKG51bGwhPWliJiZpYj5wYXJzZUZsb2F0KGdiKSl7ZmI9U3RyaW5nKGliKTticmVhayBhfX1mYj1nYn12YXIgJGE9e307XG5mdW5jdGlvbiBrYigpe3JldHVybiBaYShmdW5jdGlvbigpe2Zvcih2YXIgYT0wLGI9UGEoU3RyaW5nKGZiKSkuc3BsaXQoXCIuXCIpLGM9UGEoXCI5XCIpLnNwbGl0KFwiLlwiKSxkPU1hdGgubWF4KGIubGVuZ3RoLGMubGVuZ3RoKSxmPTA7MD09YSYmZjxkO2YrKyl7dmFyIGc9YltmXXx8XCJcIixlPWNbZl18fFwiXCI7ZG97Zz0vKFxcZCopKFxcRCopKC4qKS8uZXhlYyhnKXx8W1wiXCIsXCJcIixcIlwiLFwiXCJdO2U9LyhcXGQqKShcXEQqKSguKikvLmV4ZWMoZSl8fFtcIlwiLFwiXCIsXCJcIixcIlwiXTtpZigwPT1nWzBdLmxlbmd0aCYmMD09ZVswXS5sZW5ndGgpYnJlYWs7YT1RYSgwPT1nWzFdLmxlbmd0aD8wOnBhcnNlSW50KGdbMV0sMTApLDA9PWVbMV0ubGVuZ3RoPzA6cGFyc2VJbnQoZVsxXSwxMCkpfHxRYSgwPT1nWzJdLmxlbmd0aCwwPT1lWzJdLmxlbmd0aCl8fFFhKGdbMl0sZVsyXSk7Zz1nWzNdO2U9ZVszXX13aGlsZSgwPT1hKX1yZXR1cm4gMDw9YX0pfTtmdW5jdGlvbiBsYigpezAhPW1iJiYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRoaXMsdGEpJiZ0aGlzW3RhXXx8KHRoaXNbdGFdPSsrdWEpKTt0aGlzLks9dGhpcy5LfXZhciBtYj0wO2xiLnByb3RvdHlwZS5LPSExO3ZhciBuYj1PYmplY3QuZnJlZXplfHxmdW5jdGlvbihhKXtyZXR1cm4gYX07ZnVuY3Rpb24gSihhLGIpe3RoaXMudHlwZT1hO3RoaXMuYT10aGlzLnRhcmdldD1iO3RoaXMuZGVmYXVsdFByZXZlbnRlZD0hMX1KLnByb3RvdHlwZS5iPWZ1bmN0aW9uKCl7dGhpcy5kZWZhdWx0UHJldmVudGVkPSEwfTt2YXIgb2I9ZnVuY3Rpb24oKXtpZigheC5hZGRFdmVudExpc3RlbmVyfHwhT2JqZWN0LmRlZmluZVByb3BlcnR5KXJldHVybiExO3ZhciBhPSExLGI9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXthPSEwfX0pO3RyeXt4LmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0XCIscmEsYikseC5yZW1vdmVFdmVudExpc3RlbmVyKFwidGVzdFwiLHJhLGIpfWNhdGNoKGMpe31yZXR1cm4gYX0oKTtmdW5jdGlvbiBLKGEsYil7Si5jYWxsKHRoaXMsYT9hLnR5cGU6XCJcIik7dGhpcy5yZWxhdGVkVGFyZ2V0PXRoaXMuYT10aGlzLnRhcmdldD1udWxsO3RoaXMuYnV0dG9uPXRoaXMuc2NyZWVuWT10aGlzLnNjcmVlblg9dGhpcy5jbGllbnRZPXRoaXMuY2xpZW50WD0wO3RoaXMua2V5PVwiXCI7dGhpcy5tZXRhS2V5PXRoaXMuc2hpZnRLZXk9dGhpcy5hbHRLZXk9dGhpcy5jdHJsS2V5PSExO3RoaXMucG9pbnRlcklkPTA7dGhpcy5wb2ludGVyVHlwZT1cIlwiO3RoaXMuYz1udWxsO2lmKGEpe3ZhciBjPXRoaXMudHlwZT1hLnR5cGUsZD1hLmNoYW5nZWRUb3VjaGVzJiZhLmNoYW5nZWRUb3VjaGVzLmxlbmd0aD9hLmNoYW5nZWRUb3VjaGVzWzBdOm51bGw7dGhpcy50YXJnZXQ9YS50YXJnZXR8fGEuc3JjRWxlbWVudDt0aGlzLmE9YjtpZihiPWEucmVsYXRlZFRhcmdldCl7aWYoZGIpe2E6e3RyeXtZYShiLm5vZGVOYW1lKTt2YXIgZj0hMDticmVhayBhfWNhdGNoKGcpe31mPSExfWZ8fChiPW51bGwpfX1lbHNlXCJtb3VzZW92ZXJcIj09XG5jP2I9YS5mcm9tRWxlbWVudDpcIm1vdXNlb3V0XCI9PWMmJihiPWEudG9FbGVtZW50KTt0aGlzLnJlbGF0ZWRUYXJnZXQ9YjtkPyh0aGlzLmNsaWVudFg9dm9pZCAwIT09ZC5jbGllbnRYP2QuY2xpZW50WDpkLnBhZ2VYLHRoaXMuY2xpZW50WT12b2lkIDAhPT1kLmNsaWVudFk/ZC5jbGllbnRZOmQucGFnZVksdGhpcy5zY3JlZW5YPWQuc2NyZWVuWHx8MCx0aGlzLnNjcmVlblk9ZC5zY3JlZW5ZfHwwKToodGhpcy5jbGllbnRYPXZvaWQgMCE9PWEuY2xpZW50WD9hLmNsaWVudFg6YS5wYWdlWCx0aGlzLmNsaWVudFk9dm9pZCAwIT09YS5jbGllbnRZP2EuY2xpZW50WTphLnBhZ2VZLHRoaXMuc2NyZWVuWD1hLnNjcmVlblh8fDAsdGhpcy5zY3JlZW5ZPWEuc2NyZWVuWXx8MCk7dGhpcy5idXR0b249YS5idXR0b247dGhpcy5rZXk9YS5rZXl8fFwiXCI7dGhpcy5jdHJsS2V5PWEuY3RybEtleTt0aGlzLmFsdEtleT1hLmFsdEtleTt0aGlzLnNoaWZ0S2V5PWEuc2hpZnRLZXk7dGhpcy5tZXRhS2V5PVxuYS5tZXRhS2V5O3RoaXMucG9pbnRlcklkPWEucG9pbnRlcklkfHwwO3RoaXMucG9pbnRlclR5cGU9XCJzdHJpbmdcIj09PXR5cGVvZiBhLnBvaW50ZXJUeXBlP2EucG9pbnRlclR5cGU6cGJbYS5wb2ludGVyVHlwZV18fFwiXCI7dGhpcy5jPWE7YS5kZWZhdWx0UHJldmVudGVkJiZLLk8uYi5jYWxsKHRoaXMpfX1CKEssSik7dmFyIHBiPW5iKHsyOlwidG91Y2hcIiwzOlwicGVuXCIsNDpcIm1vdXNlXCJ9KTtLLnByb3RvdHlwZS5iPWZ1bmN0aW9uKCl7Sy5PLmIuY2FsbCh0aGlzKTt2YXIgYT10aGlzLmM7YS5wcmV2ZW50RGVmYXVsdD9hLnByZXZlbnREZWZhdWx0KCk6YS5yZXR1cm5WYWx1ZT0hMX07dmFyIE09XCJjbG9zdXJlX2xpc3RlbmFibGVfXCIrKDFFNipNYXRoLnJhbmRvbSgpfDApO3ZhciBxYj0wO2Z1bmN0aW9uIHJiKGEsYixjLGQsZil7dGhpcy5saXN0ZW5lcj1hO3RoaXMucHJveHk9bnVsbDt0aGlzLnNyYz1iO3RoaXMudHlwZT1jO3RoaXMuY2FwdHVyZT0hIWQ7dGhpcy5IPWY7dGhpcy5rZXk9KytxYjt0aGlzLkE9dGhpcy5EPSExfWZ1bmN0aW9uIHNiKGEpe2EuQT0hMDthLmxpc3RlbmVyPW51bGw7YS5wcm94eT1udWxsO2Euc3JjPW51bGw7YS5IPW51bGx9O2Z1bmN0aW9uIHRiKGEpe3RoaXMuc3JjPWE7dGhpcy5hPXt9O3RoaXMuYj0wfXRiLnByb3RvdHlwZS5hZGQ9ZnVuY3Rpb24oYSxiLGMsZCxmKXt2YXIgZz1hLnRvU3RyaW5nKCk7YT10aGlzLmFbZ107YXx8KGE9dGhpcy5hW2ddPVtdLHRoaXMuYisrKTt2YXIgZT11YihhLGIsZCxmKTstMTxlPyhiPWFbZV0sY3x8KGIuRD0hMSkpOihiPW5ldyByYihiLHRoaXMuc3JjLGcsISFkLGYpLGIuRD1jLGEucHVzaChiKSk7cmV0dXJuIGJ9O3RiLnByb3RvdHlwZS5yZW1vdmU9ZnVuY3Rpb24oYSxiLGMsZCl7YT1hLnRvU3RyaW5nKCk7aWYoIShhIGluIHRoaXMuYSkpcmV0dXJuITE7dmFyIGY9dGhpcy5hW2FdO2I9dWIoZixiLGMsZCk7cmV0dXJuLTE8Yj8oc2IoZltiXSksQXJyYXkucHJvdG90eXBlLnNwbGljZS5jYWxsKGYsYiwxKSwwPT1mLmxlbmd0aCYmKGRlbGV0ZSB0aGlzLmFbYV0sdGhpcy5iLS0pLCEwKTohMX07XG5mdW5jdGlvbiB2YihhLGIpe3ZhciBjPWIudHlwZTtpZihjIGluIGEuYSl7dmFyIGQ9YS5hW2NdLGY9T2EoZCxiKSxnOyhnPTA8PWYpJiZBcnJheS5wcm90b3R5cGUuc3BsaWNlLmNhbGwoZCxmLDEpO2cmJihzYihiKSwwPT1hLmFbY10ubGVuZ3RoJiYoZGVsZXRlIGEuYVtjXSxhLmItLSkpfX1mdW5jdGlvbiB1YihhLGIsYyxkKXtmb3IodmFyIGY9MDtmPGEubGVuZ3RoOysrZil7dmFyIGc9YVtmXTtpZighZy5BJiZnLmxpc3RlbmVyPT1iJiZnLmNhcHR1cmU9PSEhYyYmZy5IPT1kKXJldHVybiBmfXJldHVybi0xfTt2YXIgd2I9XCJjbG9zdXJlX2xtX1wiKygxRTYqTWF0aC5yYW5kb20oKXwwKSx4Yj17fSx5Yj0wO2Z1bmN0aW9uIHpiKGEsYixjLGQsZil7aWYoZCYmZC5vbmNlKUFiKGEsYixjLGQsZik7ZWxzZSBpZihBcnJheS5pc0FycmF5KGIpKWZvcih2YXIgZz0wO2c8Yi5sZW5ndGg7ZysrKXpiKGEsYltnXSxjLGQsZik7ZWxzZSBjPUJiKGMpLGEmJmFbTV0/YS5mLmFkZChTdHJpbmcoYiksYywhMSxzYShkKT8hIWQuY2FwdHVyZTohIWQsZik6Q2IoYSxiLGMsITEsZCxmKX1cbmZ1bmN0aW9uIENiKGEsYixjLGQsZixnKXtpZighYil0aHJvdyBFcnJvcihcIkludmFsaWQgZXZlbnQgdHlwZVwiKTt2YXIgZT1zYShmKT8hIWYuY2FwdHVyZTohIWYsaD1EYihhKTtofHwoYVt3Yl09aD1uZXcgdGIoYSkpO2M9aC5hZGQoYixjLGQsZSxnKTtpZighYy5wcm94eSl7ZD1FYigpO2MucHJveHk9ZDtkLnNyYz1hO2QubGlzdGVuZXI9YztpZihhLmFkZEV2ZW50TGlzdGVuZXIpb2J8fChmPWUpLHZvaWQgMD09PWYmJihmPSExKSxhLmFkZEV2ZW50TGlzdGVuZXIoYi50b1N0cmluZygpLGQsZik7ZWxzZSBpZihhLmF0dGFjaEV2ZW50KWEuYXR0YWNoRXZlbnQoRmIoYi50b1N0cmluZygpKSxkKTtlbHNlIGlmKGEuYWRkTGlzdGVuZXImJmEucmVtb3ZlTGlzdGVuZXIpYS5hZGRMaXN0ZW5lcihkKTtlbHNlIHRocm93IEVycm9yKFwiYWRkRXZlbnRMaXN0ZW5lciBhbmQgYXR0YWNoRXZlbnQgYXJlIHVuYXZhaWxhYmxlLlwiKTt5YisrfX1cbmZ1bmN0aW9uIEViKCl7ZnVuY3Rpb24gYShjKXtyZXR1cm4gYi5jYWxsKGEuc3JjLGEubGlzdGVuZXIsYyl9dmFyIGI9R2I7cmV0dXJuIGF9ZnVuY3Rpb24gQWIoYSxiLGMsZCxmKXtpZihBcnJheS5pc0FycmF5KGIpKWZvcih2YXIgZz0wO2c8Yi5sZW5ndGg7ZysrKUFiKGEsYltnXSxjLGQsZik7ZWxzZSBjPUJiKGMpLGEmJmFbTV0/YS5mLmFkZChTdHJpbmcoYiksYywhMCxzYShkKT8hIWQuY2FwdHVyZTohIWQsZik6Q2IoYSxiLGMsITAsZCxmKX1mdW5jdGlvbiBIYihhLGIsYyxkLGYpe2lmKEFycmF5LmlzQXJyYXkoYikpZm9yKHZhciBnPTA7ZzxiLmxlbmd0aDtnKyspSGIoYSxiW2ddLGMsZCxmKTtlbHNlKGQ9c2EoZCk/ISFkLmNhcHR1cmU6ISFkLGM9QmIoYyksYSYmYVtNXSk/YS5mLnJlbW92ZShTdHJpbmcoYiksYyxkLGYpOmEmJihhPURiKGEpKSYmKGI9YS5hW2IudG9TdHJpbmcoKV0sYT0tMSxiJiYoYT11YihiLGMsZCxmKSksKGM9LTE8YT9iW2FdOm51bGwpJiZJYihjKSl9XG5mdW5jdGlvbiBJYihhKXtpZihcIm51bWJlclwiIT09dHlwZW9mIGEmJmEmJiFhLkEpe3ZhciBiPWEuc3JjO2lmKGImJmJbTV0pdmIoYi5mLGEpO2Vsc2V7dmFyIGM9YS50eXBlLGQ9YS5wcm94eTtiLnJlbW92ZUV2ZW50TGlzdGVuZXI/Yi5yZW1vdmVFdmVudExpc3RlbmVyKGMsZCxhLmNhcHR1cmUpOmIuZGV0YWNoRXZlbnQ/Yi5kZXRhY2hFdmVudChGYihjKSxkKTpiLmFkZExpc3RlbmVyJiZiLnJlbW92ZUxpc3RlbmVyJiZiLnJlbW92ZUxpc3RlbmVyKGQpO3liLS07KGM9RGIoYikpPyh2YihjLGEpLDA9PWMuYiYmKGMuc3JjPW51bGwsYlt3Yl09bnVsbCkpOnNiKGEpfX19ZnVuY3Rpb24gRmIoYSl7cmV0dXJuIGEgaW4geGI/eGJbYV06eGJbYV09XCJvblwiK2F9ZnVuY3Rpb24gR2IoYSxiKXtpZihhLkEpYT0hMDtlbHNle2I9bmV3IEsoYix0aGlzKTt2YXIgYz1hLmxpc3RlbmVyLGQ9YS5IfHxhLnNyYzthLkQmJkliKGEpO2E9Yy5jYWxsKGQsYil9cmV0dXJuIGF9XG5mdW5jdGlvbiBEYihhKXthPWFbd2JdO3JldHVybiBhIGluc3RhbmNlb2YgdGI/YTpudWxsfXZhciBKYj1cIl9fY2xvc3VyZV9ldmVudHNfZm5fXCIrKDFFOSpNYXRoLnJhbmRvbSgpPj4+MCk7ZnVuY3Rpb24gQmIoYSl7aWYoXCJmdW5jdGlvblwiPT09dHlwZW9mIGEpcmV0dXJuIGE7YVtKYl18fChhW0piXT1mdW5jdGlvbihiKXtyZXR1cm4gYS5oYW5kbGVFdmVudChiKX0pO3JldHVybiBhW0piXX07ZnVuY3Rpb24gTigpe2xiLmNhbGwodGhpcyk7dGhpcy5mPW5ldyB0Yih0aGlzKTt0aGlzLlU9dGhpc31CKE4sbGIpO04ucHJvdG90eXBlW01dPSEwO04ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXI9ZnVuY3Rpb24oYSxiLGMsZCl7emIodGhpcyxhLGIsYyxkKX07Ti5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lcj1mdW5jdGlvbihhLGIsYyxkKXtIYih0aGlzLGEsYixjLGQpfTtmdW5jdGlvbiBPKGEsYil7YT1hLlU7dmFyIGM9Yi50eXBlfHxiO2lmKFwic3RyaW5nXCI9PT10eXBlb2YgYiliPW5ldyBKKGIsYSk7ZWxzZSBpZihiIGluc3RhbmNlb2YgSiliLnRhcmdldD1iLnRhcmdldHx8YTtlbHNle3ZhciBkPWI7Yj1uZXcgSihjLGEpO1dhKGIsZCl9YT1iLmE9YTtLYihhLGMsITAsYik7S2IoYSxjLCExLGIpfVxuZnVuY3Rpb24gS2IoYSxiLGMsZCl7aWYoYj1hLmYuYVtTdHJpbmcoYildKXtiPWIuY29uY2F0KCk7Zm9yKHZhciBmPSEwLGc9MDtnPGIubGVuZ3RoOysrZyl7dmFyIGU9YltnXTtpZihlJiYhZS5BJiZlLmNhcHR1cmU9PWMpe3ZhciBoPWUubGlzdGVuZXIsaz1lLkh8fGUuc3JjO2UuRCYmdmIoYS5mLGUpO2Y9ITEhPT1oLmNhbGwoayxkKSYmZn19fX07dmFyIExiPXg7ZnVuY3Rpb24gTWIoYSxiLGMpe2lmKFwiZnVuY3Rpb25cIj09PXR5cGVvZiBhKWMmJihhPXooYSxjKSk7ZWxzZSBpZihhJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmhhbmRsZUV2ZW50KWE9eihhLmhhbmRsZUV2ZW50LGEpO2Vsc2UgdGhyb3cgRXJyb3IoXCJJbnZhbGlkIGxpc3RlbmVyIGFyZ3VtZW50XCIpO3JldHVybiAyMTQ3NDgzNjQ3PE51bWJlcihiKT8tMTpMYi5zZXRUaW1lb3V0KGEsYnx8MCl9O2Z1bmN0aW9uIE5iKGEsYil7dGhpcy5uYW1lPWE7dGhpcy52YWx1ZT1ifU5iLnByb3RvdHlwZS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLm5hbWV9O3ZhciBPYj1uZXcgTmIoXCJPRkZcIixJbmZpbml0eSksUGI9bmV3IE5iKFwiU0VWRVJFXCIsMUUzKSxRYj1uZXcgTmIoXCJDT05GSUdcIiw3MDApLFJiPW5ldyBOYihcIkZJTkVcIiw1MDApO2Z1bmN0aW9uIFRiKCl7dGhpcy5jbGVhcigpfXZhciBVYjtUYi5wcm90b3R5cGUuY2xlYXI9ZnVuY3Rpb24oKXt9O2Z1bmN0aW9uIFZiKGEsYixjKXt0aGlzLnJlc2V0KGF8fE9iLGIsYyx2b2lkIDAsdm9pZCAwKX1WYi5wcm90b3R5cGUucmVzZXQ9ZnVuY3Rpb24oKXt9O2Z1bmN0aW9uIFdiKGEsYil7dGhpcy5hPW51bGw7dGhpcy5mPVtdO3RoaXMuYj0odm9pZCAwPT09Yj9udWxsOmIpfHxudWxsO3RoaXMuYz1bXTt0aGlzLmc9e2dldE5hbWU6ZnVuY3Rpb24oKXtyZXR1cm4gYX19fVxuZnVuY3Rpb24gWGIoYSl7aWYoYS5hKXJldHVybiBhLmE7aWYoYS5iKXJldHVybiBYYihhLmIpO0ZhKFwiUm9vdCBsb2dnZXIgaGFzIG5vIGxldmVsIHNldC5cIik7cmV0dXJuIE9ifWZ1bmN0aW9uIFliKGEsYil7Zm9yKDthOylhLmYuZm9yRWFjaChmdW5jdGlvbihjKXtjKGIpfSksYT1hLmJ9ZnVuY3Rpb24gWmIoKXt0aGlzLmVudHJpZXM9e307dmFyIGE9bmV3IFdiKFwiXCIpO2EuYT1RYjt0aGlzLmVudHJpZXNbXCJcIl09YX12YXIgJGI7ZnVuY3Rpb24gYWMoYSxiLGMpe3ZhciBkPWEuZW50cmllc1tiXTtpZihkKXJldHVybiB2b2lkIDAhPT1jJiYoZC5hPWMpLGQ7ZD1hYyhhLGIuc3Vic3RyKDAsYi5sYXN0SW5kZXhPZihcIi5cIikpKTt2YXIgZj1uZXcgV2IoYixkKTthLmVudHJpZXNbYl09ZjtkLmMucHVzaChmKTt2b2lkIDAhPT1jJiYoZi5hPWMpO3JldHVybiBmfWZ1bmN0aW9uIGJjKCl7JGJ8fCgkYj1uZXcgWmIpO3JldHVybiAkYn1cbmZ1bmN0aW9uIGNjKGEsYixjKXt2YXIgZDtpZihkPWEpaWYoZD1hJiZiKXtkPWIudmFsdWU7dmFyIGY9YT9YYihhYyhiYygpLGEuZ2V0TmFtZSgpKSk6T2I7ZD1kPj1mLnZhbHVlfWQmJihiPWJ8fE9iLGQ9YWMoYmMoKSxhLmdldE5hbWUoKSksXCJmdW5jdGlvblwiPT09dHlwZW9mIGMmJihjPWMoKSksVWJ8fChVYj1uZXcgVGIpLGE9YS5nZXROYW1lKCksYT1uZXcgVmIoYixjLGEpLFliKGQsYSkpfWZ1bmN0aW9uIFAoYSxiKXthJiZjYyhhLFJiLGIpfTtmdW5jdGlvbiBkYygpe31kYy5wcm90b3R5cGUuYT1udWxsO2Z1bmN0aW9uIGVjKGEpe3ZhciBiOyhiPWEuYSl8fChiPXt9LGZjKGEpJiYoYlswXT0hMCxiWzFdPSEwKSxiPWEuYT1iKTtyZXR1cm4gYn07dmFyIGdjO2Z1bmN0aW9uIGhjKCl7fUIoaGMsZGMpO2Z1bmN0aW9uIGljKGEpe3JldHVybihhPWZjKGEpKT9uZXcgQWN0aXZlWE9iamVjdChhKTpuZXcgWE1MSHR0cFJlcXVlc3R9ZnVuY3Rpb24gZmMoYSl7aWYoIWEuYiYmXCJ1bmRlZmluZWRcIj09dHlwZW9mIFhNTEh0dHBSZXF1ZXN0JiZcInVuZGVmaW5lZFwiIT10eXBlb2YgQWN0aXZlWE9iamVjdCl7Zm9yKHZhciBiPVtcIk1TWE1MMi5YTUxIVFRQLjYuMFwiLFwiTVNYTUwyLlhNTEhUVFAuMy4wXCIsXCJNU1hNTDIuWE1MSFRUUFwiLFwiTWljcm9zb2Z0LlhNTEhUVFBcIl0sYz0wO2M8Yi5sZW5ndGg7YysrKXt2YXIgZD1iW2NdO3RyeXtyZXR1cm4gbmV3IEFjdGl2ZVhPYmplY3QoZCksYS5iPWR9Y2F0Y2goZil7fX10aHJvdyBFcnJvcihcIkNvdWxkIG5vdCBjcmVhdGUgQWN0aXZlWE9iamVjdC4gQWN0aXZlWCBtaWdodCBiZSBkaXNhYmxlZCwgb3IgTVNYTUwgbWlnaHQgbm90IGJlIGluc3RhbGxlZFwiKTt9cmV0dXJuIGEuYn1nYz1uZXcgaGM7dCgpO3UoKTtmdW5jdGlvbiBqYyhhLGIpe3RoaXMuYj1hW3guU3ltYm9sLml0ZXJhdG9yXSgpO3RoaXMuYz1iO3RoaXMuZj0wfWpjLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9O2pjLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5iLm5leHQoKTtyZXR1cm57dmFsdWU6YS5kb25lP3ZvaWQgMDp0aGlzLmMuY2FsbCh2b2lkIDAsYS52YWx1ZSx0aGlzLmYrKyksZG9uZTphLmRvbmV9fTtmdW5jdGlvbiBrYyhhLGIpe3JldHVybiBuZXcgamMoYSxiKX10KCk7dSgpO3QoKTt1KCk7dmFyIGxjPVwiU3RvcEl0ZXJhdGlvblwiaW4geD94LlN0b3BJdGVyYXRpb246e21lc3NhZ2U6XCJTdG9wSXRlcmF0aW9uXCIsc3RhY2s6XCJcIn07ZnVuY3Rpb24gUSgpe31RLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIFEucHJvdG90eXBlLmEuY2FsbCh0aGlzKX07US5wcm90b3R5cGUuYT1mdW5jdGlvbigpe3Rocm93IGxjO307US5wcm90b3R5cGUudT1mdW5jdGlvbigpe3JldHVybiB0aGlzfTtmdW5jdGlvbiBtYyhhKXtpZihhIGluc3RhbmNlb2YgUnx8YSBpbnN0YW5jZW9mIFN8fGEgaW5zdGFuY2VvZiBUKXJldHVybiBhO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEubmV4dClyZXR1cm4gbmV3IFIoZnVuY3Rpb24oKXtyZXR1cm4gbmMoYSl9KTt0KCk7dSgpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGFbU3ltYm9sLml0ZXJhdG9yXSlyZXR1cm4gdCgpLHUoKSxuZXcgUihmdW5jdGlvbigpe3JldHVybiBhW1N5bWJvbC5pdGVyYXRvcl0oKX0pO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGEudSlyZXR1cm4gbmV3IFIoZnVuY3Rpb24oKXtyZXR1cm4gbmMoYS51KCkpfSk7dGhyb3cgRXJyb3IoXCJOb3QgYW4gaXRlcmF0b3Igb3IgaXRlcmFibGUuXCIpO31cbmZ1bmN0aW9uIG5jKGEpe2lmKCEoYSBpbnN0YW5jZW9mIFEpKXJldHVybiBhO3ZhciBiPSExO3JldHVybntuZXh0OmZ1bmN0aW9uKCl7Zm9yKHZhciBjOyFiOyl0cnl7Yz1hLmEoKTticmVha31jYXRjaChkKXtpZihkIT09bGMpdGhyb3cgZDtiPSEwfXJldHVybnt2YWx1ZTpjLGRvbmU6Yn19fX10KCk7dSgpO2Z1bmN0aW9uIFIoYSl7dGhpcy5iPWF9Ui5wcm90b3R5cGUudT1mdW5jdGlvbigpe3JldHVybiBuZXcgUyh0aGlzLmIoKSl9O1IucHJvdG90eXBlW1N5bWJvbC5pdGVyYXRvcl09ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFQodGhpcy5iKCkpfTtSLnByb3RvdHlwZS5jPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBUKHRoaXMuYigpKX07dCgpO3UoKTtmdW5jdGlvbiBTKGEpe3RoaXMuYj1hfW9hKFMsUSk7Uy5wcm90b3R5cGUuYT1mdW5jdGlvbigpe3ZhciBhPXRoaXMuYi5uZXh0KCk7aWYoYS5kb25lKXRocm93IGxjO3JldHVybiBhLnZhbHVlfTtTLnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIFMucHJvdG90eXBlLmEuY2FsbCh0aGlzKX07XG5TLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBUKHRoaXMuYil9O1MucHJvdG90eXBlLmM9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IFQodGhpcy5iKX07ZnVuY3Rpb24gVChhKXtSLmNhbGwodGhpcyxmdW5jdGlvbigpe3JldHVybiBhfSk7dGhpcy5mPWF9b2EoVCxSKTtULnByb3RvdHlwZS5uZXh0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuZi5uZXh0KCl9O2Z1bmN0aW9uIG9jKGEsYil7dGhpcy5vPXt9O3RoaXMuaj1bXTt0aGlzLkI9dGhpcy5zaXplPTA7dmFyIGM9YXJndW1lbnRzLmxlbmd0aDtpZigxPGMpe2lmKGMlMil0aHJvdyBFcnJvcihcIlVuZXZlbiBudW1iZXIgb2YgYXJndW1lbnRzXCIpO2Zvcih2YXIgZD0wO2Q8YztkKz0yKXRoaXMuc2V0KGFyZ3VtZW50c1tkXSxhcmd1bWVudHNbZCsxXSl9ZWxzZSBhJiZ0aGlzLmFkZEFsbChhKX1uPW9jLnByb3RvdHlwZTtuLkc9ZnVuY3Rpb24oKXtwYyh0aGlzKTtyZXR1cm4gdGhpcy5qLmNvbmNhdCgpfTtuLmhhcz1mdW5jdGlvbihhKXtyZXR1cm4gVSh0aGlzLm8sYSl9O24uY2xlYXI9ZnVuY3Rpb24oKXt0aGlzLm89e307dGhpcy5CPXRoaXMuc2l6ZT10aGlzLmoubGVuZ3RoPTB9O24ucmVtb3ZlPWZ1bmN0aW9uKGEpe3JldHVybiB0aGlzLmRlbGV0ZShhKX07XG5uLmRlbGV0ZT1mdW5jdGlvbihhKXtyZXR1cm4gVSh0aGlzLm8sYSk/KGRlbGV0ZSB0aGlzLm9bYV0sLS10aGlzLnNpemUsdGhpcy5CKyssdGhpcy5qLmxlbmd0aD4yKnRoaXMuc2l6ZSYmcGModGhpcyksITApOiExfTtmdW5jdGlvbiBwYyhhKXtpZihhLnNpemUhPWEuai5sZW5ndGgpe2Zvcih2YXIgYj0wLGM9MDtiPGEuai5sZW5ndGg7KXt2YXIgZD1hLmpbYl07VShhLm8sZCkmJihhLmpbYysrXT1kKTtiKyt9YS5qLmxlbmd0aD1jfWlmKGEuc2l6ZSE9YS5qLmxlbmd0aCl7dmFyIGY9e307Zm9yKGM9Yj0wO2I8YS5qLmxlbmd0aDspZD1hLmpbYl0sVShmLGQpfHwoYS5qW2MrK109ZCxmW2RdPTEpLGIrKzthLmoubGVuZ3RoPWN9fW4uZ2V0PWZ1bmN0aW9uKGEsYil7cmV0dXJuIFUodGhpcy5vLGEpP3RoaXMub1thXTpifTtuLnNldD1mdW5jdGlvbihhLGIpe1UodGhpcy5vLGEpfHwodGhpcy5zaXplKz0xLHRoaXMuai5wdXNoKGEpLHRoaXMuQisrKTt0aGlzLm9bYV09Yn07XG5uLmFkZEFsbD1mdW5jdGlvbihhKXtpZihhIGluc3RhbmNlb2Ygb2MpZm9yKHZhciBiPWEuRygpLGM9MDtjPGIubGVuZ3RoO2MrKyl0aGlzLnNldChiW2NdLGEuZ2V0KGJbY10pKTtlbHNlIGZvcihiIGluIGEpdGhpcy5zZXQoYixhW2JdKX07bi5mb3JFYWNoPWZ1bmN0aW9uKGEsYil7Zm9yKHZhciBjPXRoaXMuRygpLGQ9MDtkPGMubGVuZ3RoO2QrKyl7dmFyIGY9Y1tkXSxnPXRoaXMuZ2V0KGYpO2EuY2FsbChiLGcsZix0aGlzKX19O24uY2xvbmU9ZnVuY3Rpb24oKXtyZXR1cm4gbmV3IG9jKHRoaXMpfTtuLmtleXM9ZnVuY3Rpb24oKXtyZXR1cm4gbWModGhpcy51KCEwKSkuYygpfTtuLnZhbHVlcz1mdW5jdGlvbigpe3JldHVybiBtYyh0aGlzLnUoITEpKS5jKCl9O24uZW50cmllcz1mdW5jdGlvbigpe3ZhciBhPXRoaXM7cmV0dXJuIGtjKHRoaXMua2V5cygpLGZ1bmN0aW9uKGIpe3JldHVybltiLGEuZ2V0KGIpXX0pfTtcbm4udT1mdW5jdGlvbihhKXtwYyh0aGlzKTt2YXIgYj0wLGM9dGhpcy5CLGQ9dGhpcyxmPW5ldyBRO2YuYT1mdW5jdGlvbigpe2lmKGMhPWQuQil0aHJvdyBFcnJvcihcIlRoZSBtYXAgaGFzIGNoYW5nZWQgc2luY2UgdGhlIGl0ZXJhdG9yIHdhcyBjcmVhdGVkXCIpO2lmKGI+PWQuai5sZW5ndGgpdGhyb3cgbGM7dmFyIGc9ZC5qW2IrK107cmV0dXJuIGE/ZzpkLm9bZ119O2YubmV4dD1mLmEuYmluZChmKTtyZXR1cm4gZn07ZnVuY3Rpb24gVShhLGIpe3JldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYSxiKX07dmFyIHFjPS9eKD86KFteOi8/Iy5dKyk6KT8oPzpcXC9cXC8oPzooW15cXFxcLz8jXSopQCk/KFteXFxcXC8/I10qPykoPzo6KFswLTldKykpPyg/PVtcXFxcLz8jXXwkKSk/KFtePyNdKyk/KD86XFw/KFteI10qKSk/KD86IyhbXFxzXFxTXSopKT8kLztmdW5jdGlvbiByYyhhKXtOLmNhbGwodGhpcyk7dGhpcy5oZWFkZXJzPW5ldyBvYzt0aGlzLkM9YXx8bnVsbDt0aGlzLmM9ITE7dGhpcy5KPXRoaXMuYT1udWxsO3RoaXMuUD10aGlzLnY9XCJcIjt0aGlzLmc9MDt0aGlzLmw9XCJcIjt0aGlzLmk9dGhpcy5OPXRoaXMucz10aGlzLkw9ITE7dGhpcy5oPTA7dGhpcy53PW51bGw7dGhpcy5tPXNjO3RoaXMuST10aGlzLk09ITF9QihyYyxOKTt2YXIgc2M9XCJcIjtyYy5wcm90b3R5cGUuYj1hYyhiYygpLFwiZ29vZy5uZXQuWGhySW9cIix2b2lkIDApLmc7dmFyIHRjPS9eaHR0cHM/JC9pLHVjPVtcIlBPU1RcIixcIlBVVFwiXTtcbmZ1bmN0aW9uIHZjKGEsYixjKXtpZihhLmEpdGhyb3cgRXJyb3IoXCJbZ29vZy5uZXQuWGhySW9dIE9iamVjdCBpcyBhY3RpdmUgd2l0aCBhbm90aGVyIHJlcXVlc3Q9XCIrYS52K1wiOyBuZXdVcmk9XCIrYik7YS52PWI7YS5sPVwiXCI7YS5nPTA7YS5QPVwiUE9TVFwiO2EuTD0hMTthLmM9ITA7YS5hPWEuQz9pYyhhLkMpOmljKGdjKTthLko9YS5DP2VjKGEuQyk6ZWMoZ2MpO2EuYS5vbnJlYWR5c3RhdGVjaGFuZ2U9eihhLlIsYSk7dHJ5e1AoYS5iLFYoYSxcIk9wZW5pbmcgWGhyXCIpKSxhLk49ITAsYS5hLm9wZW4oXCJQT1NUXCIsU3RyaW5nKGIpLCEwKSxhLk49ITF9Y2F0Y2goZyl7UChhLmIsVihhLFwiRXJyb3Igb3BlbmluZyBYaHI6IFwiK2cubWVzc2FnZSkpO3djKGEsZyk7cmV0dXJufWI9Y3x8XCJcIjtjPWEuaGVhZGVycy5jbG9uZSgpO3ZhciBkPWMuRygpLmZpbmQoZnVuY3Rpb24oZyl7cmV0dXJuXCJjb250ZW50LXR5cGVcIj09Zy50b0xvd2VyQ2FzZSgpfSksZj14LkZvcm1EYXRhJiZiIGluc3RhbmNlb2ZcbnguRm9ybURhdGE7ISgwPD1PYSh1YyxcIlBPU1RcIikpfHxkfHxmfHxjLnNldChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkO2NoYXJzZXQ9dXRmLThcIik7Yy5mb3JFYWNoKGZ1bmN0aW9uKGcsZSl7dGhpcy5hLnNldFJlcXVlc3RIZWFkZXIoZSxnKX0sYSk7YS5tJiYoYS5hLnJlc3BvbnNlVHlwZT1hLm0pO1wid2l0aENyZWRlbnRpYWxzXCJpbiBhLmEmJmEuYS53aXRoQ3JlZGVudGlhbHMhPT1hLk0mJihhLmEud2l0aENyZWRlbnRpYWxzPWEuTSk7dHJ5e3hjKGEpLDA8YS5oJiYoYS5JPXljKGEuYSksUChhLmIsVihhLFwiV2lsbCBhYm9ydCBhZnRlciBcIithLmgrXCJtcyBpZiBpbmNvbXBsZXRlLCB4aHIyIFwiK2EuSSkpLGEuST8oYS5hLnRpbWVvdXQ9YS5oLGEuYS5vbnRpbWVvdXQ9eihhLlQsYSkpOmEudz1NYihhLlQsYS5oLGEpKSxQKGEuYixWKGEsXCJTZW5kaW5nIHJlcXVlc3RcIikpLGEucz0hMCxhLmEuc2VuZChiKSxhLnM9ITF9Y2F0Y2goZyl7UChhLmIsXG5WKGEsXCJTZW5kIGVycm9yOiBcIitnLm1lc3NhZ2UpKSx3YyhhLGcpfX1mdW5jdGlvbiB5YyhhKXtyZXR1cm4gYmImJmtiKCkmJlwibnVtYmVyXCI9PT10eXBlb2YgYS50aW1lb3V0JiZ2b2lkIDAhPT1hLm9udGltZW91dH1uPXJjLnByb3RvdHlwZTtuLlQ9ZnVuY3Rpb24oKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgcWEmJnRoaXMuYSYmKHRoaXMubD1cIlRpbWVkIG91dCBhZnRlciBcIit0aGlzLmgrXCJtcywgYWJvcnRpbmdcIix0aGlzLmc9OCxQKHRoaXMuYixWKHRoaXMsdGhpcy5sKSksTyh0aGlzLFwidGltZW91dFwiKSx0aGlzLmFib3J0KDgpKX07ZnVuY3Rpb24gd2MoYSxiKXthLmM9ITE7YS5hJiYoYS5pPSEwLGEuYS5hYm9ydCgpLGEuaT0hMSk7YS5sPWI7YS5nPTU7emMoYSk7QWMoYSl9ZnVuY3Rpb24gemMoYSl7YS5MfHwoYS5MPSEwLE8oYSxcImNvbXBsZXRlXCIpLE8oYSxcImVycm9yXCIpKX1cbm4uYWJvcnQ9ZnVuY3Rpb24oYSl7dGhpcy5hJiZ0aGlzLmMmJihQKHRoaXMuYixWKHRoaXMsXCJBYm9ydGluZ1wiKSksdGhpcy5jPSExLHRoaXMuaT0hMCx0aGlzLmEuYWJvcnQoKSx0aGlzLmk9ITEsdGhpcy5nPWF8fDcsTyh0aGlzLFwiY29tcGxldGVcIiksTyh0aGlzLFwiYWJvcnRcIiksQWModGhpcykpfTtuLlI9ZnVuY3Rpb24oKXt0aGlzLkt8fCh0aGlzLk58fHRoaXMuc3x8dGhpcy5pP0JjKHRoaXMpOnRoaXMuVygpKX07bi5XPWZ1bmN0aW9uKCl7QmModGhpcyl9O1xuZnVuY3Rpb24gQmMoYSl7aWYoYS5jJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgcWEpaWYoYS5KWzFdJiY0PT1XKGEpJiYyPT1hLmdldFN0YXR1cygpKVAoYS5iLFYoYSxcIkxvY2FsIHJlcXVlc3QgZXJyb3IgZGV0ZWN0ZWQgYW5kIGlnbm9yZWRcIikpO2Vsc2UgaWYoYS5zJiY0PT1XKGEpKU1iKGEuUiwwLGEpO2Vsc2UgaWYoTyhhLFwicmVhZHlzdGF0ZWNoYW5nZVwiKSw0PT1XKGEpKXtQKGEuYixWKGEsXCJSZXF1ZXN0IGNvbXBsZXRlXCIpKTthLmM9ITE7dHJ5e3ZhciBiPWEuZ2V0U3RhdHVzKCk7YTpzd2l0Y2goYil7Y2FzZSAyMDA6Y2FzZSAyMDE6Y2FzZSAyMDI6Y2FzZSAyMDQ6Y2FzZSAyMDY6Y2FzZSAzMDQ6Y2FzZSAxMjIzOnZhciBjPSEwO2JyZWFrIGE7ZGVmYXVsdDpjPSExfXZhciBkO2lmKCEoZD1jKSl7dmFyIGY7aWYoZj0wPT09Yil7dmFyIGc9U3RyaW5nKGEudikubWF0Y2gocWMpWzFdfHxudWxsO2lmKCFnJiZ4LnNlbGYmJnguc2VsZi5sb2NhdGlvbil7dmFyIGU9eC5zZWxmLmxvY2F0aW9uLnByb3RvY29sO1xuZz1lLnN1YnN0cigwLGUubGVuZ3RoLTEpfWY9IXRjLnRlc3QoZz9nLnRvTG93ZXJDYXNlKCk6XCJcIil9ZD1mfWlmKGQpTyhhLFwiY29tcGxldGVcIiksTyhhLFwic3VjY2Vzc1wiKTtlbHNle2EuZz02O3RyeXt2YXIgaD0yPFcoYSk/YS5hLnN0YXR1c1RleHQ6XCJcIn1jYXRjaChrKXtQKGEuYixcIkNhbiBub3QgZ2V0IHN0YXR1czogXCIray5tZXNzYWdlKSxoPVwiXCJ9YS5sPWgrXCIgW1wiK2EuZ2V0U3RhdHVzKCkrXCJdXCI7emMoYSl9fWZpbmFsbHl7QWMoYSl9fX1mdW5jdGlvbiBBYyhhKXtpZihhLmEpe3hjKGEpO3ZhciBiPWEuYSxjPWEuSlswXT9yYTpudWxsO2EuYT1udWxsO2EuSj1udWxsO08oYSxcInJlYWR5XCIpO3RyeXtiLm9ucmVhZHlzdGF0ZWNoYW5nZT1jfWNhdGNoKGQpeyhhPWEuYikmJmNjKGEsUGIsXCJQcm9ibGVtIGVuY291bnRlcmVkIHJlc2V0dGluZyBvbnJlYWR5c3RhdGVjaGFuZ2U6IFwiK2QubWVzc2FnZSl9fX1cbmZ1bmN0aW9uIHhjKGEpe2EuYSYmYS5JJiYoYS5hLm9udGltZW91dD1udWxsKTthLncmJihMYi5jbGVhclRpbWVvdXQoYS53KSxhLnc9bnVsbCl9ZnVuY3Rpb24gVyhhKXtyZXR1cm4gYS5hP2EuYS5yZWFkeVN0YXRlOjB9bi5nZXRTdGF0dXM9ZnVuY3Rpb24oKXt0cnl7cmV0dXJuIDI8Vyh0aGlzKT90aGlzLmEuc3RhdHVzOi0xfWNhdGNoKGEpe3JldHVybi0xfX07XG5mdW5jdGlvbiBDYyhhKXt0cnl7aWYoIWEuYSlyZXR1cm4gbnVsbDtpZihcInJlc3BvbnNlXCJpbiBhLmEpcmV0dXJuIGEuYS5yZXNwb25zZTtzd2l0Y2goYS5tKXtjYXNlIHNjOmNhc2UgXCJ0ZXh0XCI6cmV0dXJuIGEuYS5yZXNwb25zZVRleHQ7Y2FzZSBcImFycmF5YnVmZmVyXCI6aWYoXCJtb3pSZXNwb25zZUFycmF5QnVmZmVyXCJpbiBhLmEpcmV0dXJuIGEuYS5tb3pSZXNwb25zZUFycmF5QnVmZmVyfXZhciBiPWEuYjtiJiZjYyhiLFBiLFwiUmVzcG9uc2UgdHlwZSBcIithLm0rXCIgaXMgbm90IHN1cHBvcnRlZCBvbiB0aGlzIGJyb3dzZXJcIik7cmV0dXJuIG51bGx9Y2F0Y2goYyl7cmV0dXJuIFAoYS5iLFwiQ2FuIG5vdCBnZXQgcmVzcG9uc2U6IFwiK2MubWVzc2FnZSksbnVsbH19XG5mdW5jdGlvbiBEYyhhKXt2YXIgYj17fTthPShhLmEmJjQ9PVcoYSk/YS5hLmdldEFsbFJlc3BvbnNlSGVhZGVycygpfHxcIlwiOlwiXCIpLnNwbGl0KFwiXFxyXFxuXCIpO2Zvcih2YXIgYz0wO2M8YS5sZW5ndGg7YysrKWlmKCEvXltcXHNcXHhhMF0qJC8udGVzdChhW2NdKSl7dmFyIGQ9WGEoYVtjXSksZj1kWzBdO2Q9ZFsxXTtpZihcInN0cmluZ1wiPT09dHlwZW9mIGQpe2Q9ZC50cmltKCk7dmFyIGc9YltmXXx8W107YltmXT1nO2cucHVzaChkKX19cmV0dXJuIFVhKGIsZnVuY3Rpb24oZSl7cmV0dXJuIGUuam9pbihcIiwgXCIpfSl9ZnVuY3Rpb24gVihhLGIpe3JldHVybiBiK1wiIFtcIithLlArXCIgXCIrYS52K1wiIFwiK2EuZ2V0U3RhdHVzKCkrXCJdXCJ9O3ZhciBFYz17fSxGYz1udWxsO2Z1bmN0aW9uIEdjKGEpe3ZhciBiPWEubGVuZ3RoLGM9MypiLzQ7YyUzP2M9TWF0aC5mbG9vcihjKTpIKFwiPS5cIixhW2ItMV0pJiYoYz1IKFwiPS5cIixhW2ItMl0pP2MtMjpjLTEpO3ZhciBkPW5ldyBVaW50OEFycmF5KGMpLGY9MDtIYyhhLGZ1bmN0aW9uKGcpe2RbZisrXT1nfSk7cmV0dXJuIGQuc3ViYXJyYXkoMCxmKX1cbmZ1bmN0aW9uIEhjKGEsYil7ZnVuY3Rpb24gYyhrKXtmb3IoO2Q8YS5sZW5ndGg7KXt2YXIgbD1hLmNoYXJBdChkKyspLG09RmNbbF07aWYobnVsbCE9bSlyZXR1cm4gbTtpZighL15bXFxzXFx4YTBdKiQvLnRlc3QobCkpdGhyb3cgRXJyb3IoXCJVbmtub3duIGJhc2U2NCBlbmNvZGluZyBhdCBjaGFyOiBcIitsKTt9cmV0dXJuIGt9SWMoKTtmb3IodmFyIGQ9MDs7KXt2YXIgZj1jKC0xKSxnPWMoMCksZT1jKDY0KSxoPWMoNjQpO2lmKDY0PT09aCYmLTE9PT1mKWJyZWFrO2IoZjw8MnxnPj40KTs2NCE9ZSYmKGIoZzw8NCYyNDB8ZT4+MiksNjQhPWgmJmIoZTw8NiYxOTJ8aCkpfX1cbmZ1bmN0aW9uIEljKCl7aWYoIUZjKXtGYz17fTtmb3IodmFyIGE9XCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OVwiLnNwbGl0KFwiXCIpLGI9W1wiKy89XCIsXCIrL1wiLFwiLV89XCIsXCItXy5cIixcIi1fXCJdLGM9MDs1PmM7YysrKXt2YXIgZD1hLmNvbmNhdChiW2NdLnNwbGl0KFwiXCIpKTtFY1tjXT1kO2Zvcih2YXIgZj0wO2Y8ZC5sZW5ndGg7ZisrKXt2YXIgZz1kW2ZdO3ZvaWQgMD09PUZjW2ddJiYoRmNbZ109Zil9fX19O3ZhciBKYz1bXCJjb250ZW50LXR5cGVcIixcImdycGMtc3RhdHVzXCIsXCJncnBjLW1lc3NhZ2VcIl07XG5mdW5jdGlvbiBYKGEpe3RoaXMuYT1hLlo7dGhpcy5tPW51bGw7dGhpcy5iPVtdO3RoaXMuaD1bXTt0aGlzLmc9W107dGhpcy5mPVtdO3RoaXMuYz1bXTt0aGlzLmw9ITE7dGhpcy5pPTA7dGhpcy5zPW5ldyBHYTt2YXIgYj10aGlzO3piKHRoaXMuYSxcInJlYWR5c3RhdGVjaGFuZ2VcIixmdW5jdGlvbigpe3ZhciBjPWIuYTtpZihjPWMuYT9jLmEuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik6bnVsbCl7Yz1jLnRvTG93ZXJDYXNlKCk7aWYoMD09Yy5sYXN0SW5kZXhPZihcImFwcGxpY2F0aW9uL2dycGMtd2ViLXRleHRcIiwwKSl7Yz1iLmE7dHJ5e3ZhciBkPWMuYT9jLmEucmVzcG9uc2VUZXh0OlwiXCJ9Y2F0Y2goayl7UChjLmIsXCJDYW4gbm90IGdldCByZXNwb25zZVRleHQ6IFwiK2subWVzc2FnZSksZD1cIlwifWM9ZHx8XCJcIjtkPWMubGVuZ3RoLWMubGVuZ3RoJTQ7Yz1jLnN1YnN0cihiLmksZC1iLmkpO2lmKDA9PWMubGVuZ3RoKXJldHVybjtiLmk9ZDtjPUdjKGMpfWVsc2UgaWYoMD09XG5jLmxhc3RJbmRleE9mKFwiYXBwbGljYXRpb24vZ3JwY1wiLDApKWM9bmV3IFVpbnQ4QXJyYXkoQ2MoYi5hKSk7ZWxzZXtZKGIsbmV3IEUoMixcIlVua25vd24gQ29udGVudC10eXBlIHJlY2VpdmVkLlwiKSk7cmV0dXJufWQ9bnVsbDt0cnl7ZD1JYShiLnMsYyl9Y2F0Y2goayl7WShiLG5ldyBFKDIsXCJFcnJvciBpbiBwYXJzaW5nIHJlc3BvbnNlIGJvZHlcIikpfWlmKGQpZm9yKGM9MDtjPGQubGVuZ3RoO2MrKyl7aWYoSmEgaW4gZFtjXSl7dmFyIGY9ZFtjXVtKYV07aWYoZil7dmFyIGc9ITEsZT12b2lkIDA7dHJ5e2U9Yi5tKGYpLGc9ITB9Y2F0Y2goayl7WShiLG5ldyBFKDEzLFwiRXJyb3Igd2hlbiBkZXNlcmlhbGl6aW5nIHJlc3BvbnNlIGRhdGE7IGVycm9yOiBcIitrKyhcIiwgcmVzcG9uc2U6IFwiK2UpKSl9aWYoZylmb3IoZj1lLGc9MDtnPGIuYi5sZW5ndGg7ZysrKWIuYltnXShmKX19aWYoRyBpbiBkW2NdJiYwPGRbY11bR10ubGVuZ3RoKXtmPVwiXCI7Zm9yKGc9MDtnPGRbY11bR10ubGVuZ3RoO2crKylmKz1cblN0cmluZy5mcm9tQ2hhckNvZGUoZFtjXVtHXVtnXSk7Zj1mLnRyaW0oKS5zcGxpdChcIlxcclxcblwiKTtnPXt9O2ZvcihlPTA7ZTxmLmxlbmd0aDtlKyspe3ZhciBoPWZbZV0uaW5kZXhPZihcIjpcIik7Z1tmW2VdLnN1YnN0cmluZygwLGgpLnRyaW0oKV09ZltlXS5zdWJzdHJpbmcoaCsxKS50cmltKCl9Zj1nO2c9MDtlPVwiXCI7XCJncnBjLXN0YXR1c1wiaW4gZiYmKGc9TnVtYmVyKGZbXCJncnBjLXN0YXR1c1wiXSksZGVsZXRlIGZbXCJncnBjLXN0YXR1c1wiXSk7XCJncnBjLW1lc3NhZ2VcImluIGYmJihlPWZbXCJncnBjLW1lc3NhZ2VcIl0sZGVsZXRlIGZbXCJncnBjLW1lc3NhZ2VcIl0pO1koYixuZXcgRShnLGUsZikpfX19fSk7emIodGhpcy5hLFwiY29tcGxldGVcIixmdW5jdGlvbigpe3ZhciBjPWIuYS5nLGQ9MixmPVwiXCIsZz17fTtkPURjKGIuYSk7dmFyIGU9e307Zm9yKGggaW4gZClkLmhhc093blByb3BlcnR5KGgpJiYoZVtoLnRvTG93ZXJDYXNlKCldPWRbaF0pO09iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24oayl7SmMuaW5jbHVkZXMoayl8fFxuKGdba109ZVtrXSl9KTtLYyhiLGcpO3ZhciBoPS0xO2lmKDAhPWMpe3N3aXRjaChjKXtjYXNlIDc6ZD0xMDticmVhaztjYXNlIDg6ZD00O2JyZWFrO2Nhc2UgNjpoPWIuYS5nZXRTdGF0dXMoKTtkPUFhKGgpO2JyZWFrO2RlZmF1bHQ6ZD0xNH0xMD09ZCYmYi5sfHwoZj1EYShjKSwtMSE9aCYmKGYrPVwiLCBodHRwIHN0YXR1cyBjb2RlOiBcIitoKSxZKGIsbmV3IEUoZCxmKSkpfWVsc2UgYz0hMSxcImdycGMtc3RhdHVzXCJpbiBlJiYoZD1OdW1iZXIoZVtcImdycGMtc3RhdHVzXCJdKSxcImdycGMtbWVzc2FnZVwiaW4gZSYmKGY9ZVtcImdycGMtbWVzc2FnZVwiXSksMCE9ZCYmKFkoYixuZXcgRShkLGZ8fFwiXCIsZSkpLGM9ITApKSxjfHxMYyhiKX0pfVxuWC5wcm90b3R5cGUub249ZnVuY3Rpb24oYSxiKXtcImRhdGFcIj09YT90aGlzLmIucHVzaChiKTpcInN0YXR1c1wiPT1hP3RoaXMuaC5wdXNoKGIpOlwibWV0YWRhdGFcIj09YT90aGlzLmcucHVzaChiKTpcImVuZFwiPT1hP3RoaXMuYy5wdXNoKGIpOlwiZXJyb3JcIj09YSYmdGhpcy5mLnB1c2goYik7cmV0dXJuIHRoaXN9O2Z1bmN0aW9uIE1jKGEsYil7Yj1hLmluZGV4T2YoYik7LTE8YiYmYS5zcGxpY2UoYiwxKX1YLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lcj1mdW5jdGlvbihhLGIpe1wiZGF0YVwiPT1hP01jKHRoaXMuYixiKTpcInN0YXR1c1wiPT1hP01jKHRoaXMuaCxiKTpcIm1ldGFkYXRhXCI9PWE/TWModGhpcy5nLGIpOlwiZW5kXCI9PWE/TWModGhpcy5jLGIpOlwiZXJyb3JcIj09YSYmTWModGhpcy5mLGIpO3JldHVybiB0aGlzfTtYLnByb3RvdHlwZS5jYW5jZWw9ZnVuY3Rpb24oKXt0aGlzLmw9ITA7dGhpcy5hLmFib3J0KCl9O1xuZnVuY3Rpb24gWShhLGIpe2lmKDAhPWIuY29kZSlmb3IodmFyIGM9bmV3IEUoYi5jb2RlLGRlY29kZVVSSUNvbXBvbmVudChiLm1lc3NhZ2V8fFwiXCIpLGIubWV0YWRhdGEpLGQ9MDtkPGEuZi5sZW5ndGg7ZCsrKWEuZltkXShjKTtiPXtjb2RlOmIuY29kZSxkZXRhaWxzOmRlY29kZVVSSUNvbXBvbmVudChiLm1lc3NhZ2V8fFwiXCIpLG1ldGFkYXRhOmIubWV0YWRhdGF9O2ZvcihjPTA7YzxhLmgubGVuZ3RoO2MrKylhLmhbY10oYil9ZnVuY3Rpb24gS2MoYSxiKXtmb3IodmFyIGM9MDtjPGEuZy5sZW5ndGg7YysrKWEuZ1tjXShiKX1mdW5jdGlvbiBMYyhhKXtmb3IodmFyIGI9MDtiPGEuYy5sZW5ndGg7YisrKWEuY1tiXSgpfVgucHJvdG90eXBlLmNhbmNlbD1YLnByb3RvdHlwZS5jYW5jZWw7WC5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI9WC5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7WC5wcm90b3R5cGUub249WC5wcm90b3R5cGUub247ZnVuY3Rpb24gTmMoYSl7dmFyIGI9XCJcIjtUYShhLGZ1bmN0aW9uKGMsZCl7Yis9ZDtiKz1cIjpcIjtiKz1jO2IrPVwiXFxyXFxuXCJ9KTtyZXR1cm4gYn07ZnVuY3Rpb24gWihhLGIpe2E9dm9pZCAwPT09YT97fTphO3RoaXMuYT1hLmZvcm1hdHx8eShcImZvcm1hdFwiLGEpfHxcInRleHRcIjt0aGlzLmc9YS5hYXx8eShcInN1cHByZXNzQ29yc1ByZWZsaWdodFwiLGEpfHwhMTt0aGlzLmY9YS53aXRoQ3JlZGVudGlhbHN8fHkoXCJ3aXRoQ3JlZGVudGlhbHNcIixhKXx8ITE7dGhpcy5iPWEuJHx8eShcInN0cmVhbUludGVyY2VwdG9yc1wiLGEpfHxbXTt0aGlzLmg9YS5iYXx8eShcInVuYXJ5SW50ZXJjZXB0b3JzXCIsYSl8fFtdO3RoaXMuYz1ifHxudWxsfVoucHJvdG90eXBlLlg9ZnVuY3Rpb24oYSxiLGMsZCxmKXt2YXIgZz10aGlzLGU9YS5zdWJzdHIoMCxhLmxlbmd0aC1kLm5hbWUubGVuZ3RoKTthPU9jKGZ1bmN0aW9uKGgpe3JldHVybiBQYyhnLGgsZSl9LHRoaXMuYikuY2FsbCh0aGlzLHphKGQsYixjKSk7UWMoYSxmLCExKTtyZXR1cm4gbmV3IENhKGEpfTtcbloucHJvdG90eXBlLlM9ZnVuY3Rpb24oYSxiLGMsZCl7dmFyIGY9dGhpcyxnPWEuc3Vic3RyKDAsYS5sZW5ndGgtZC5uYW1lLmxlbmd0aCk7cmV0dXJuIE9jKGZ1bmN0aW9uKGUpe3JldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihoLGspe3ZhciBsPVBjKGYsZSxnKSxtLHAscTtRYyhsLGZ1bmN0aW9uKHcsQSxMLFNiLFJjKXt3P2sodyk6UmM/cT1BOkw/cD1MOlNiP209U2I6KHc9ZS5nZXRNZXRob2REZXNjcmlwdG9yKCksQT1tLEE9dm9pZCAwPT09QT97fTpBLGgobmV3IEQocSx3LEEsdm9pZCAwPT09cD9udWxsOnApKSl9LCEwKX0pfSx0aGlzLmgpLmNhbGwodGhpcyx6YShkLGIsYykpLnRoZW4oZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0UmVzcG9uc2VNZXNzYWdlKCl9KX07Wi5wcm90b3R5cGUudW5hcnlDYWxsPWZ1bmN0aW9uKGEsYixjLGQpe3JldHVybiB0aGlzLlMoYSxiLGMsZCl9O1xuWi5wcm90b3R5cGUuWT1mdW5jdGlvbihhLGIsYyxkKXt2YXIgZj10aGlzLGc9YS5zdWJzdHIoMCxhLmxlbmd0aC1kLm5hbWUubGVuZ3RoKTtyZXR1cm4gT2MoZnVuY3Rpb24oZSl7cmV0dXJuIFBjKGYsZSxnKX0sdGhpcy5iKS5jYWxsKHRoaXMsemEoZCxiLGMpKX07XG5mdW5jdGlvbiBQYyhhLGIsYyl7dmFyIGQ9Yi5nZXRNZXRob2REZXNjcmlwdG9yKCksZj1jK2QuZ2V0TmFtZSgpO2M9YS5jP2EuYzpuZXcgcmM7Yy5NPWEuZjt2YXIgZz1uZXcgWCh7WjpjfSk7Zy5tPWQuYjt2YXIgZT1iLmdldE1ldGFkYXRhKCk7Zm9yKGggaW4gZSljLmhlYWRlcnMuc2V0KGgsZVtoXSk7XCJ0ZXh0XCI9PWEuYT8oYy5oZWFkZXJzLnNldChcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24vZ3JwYy13ZWItdGV4dFwiKSxjLmhlYWRlcnMuc2V0KFwiQWNjZXB0XCIsXCJhcHBsaWNhdGlvbi9ncnBjLXdlYi10ZXh0XCIpKTpjLmhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsXCJhcHBsaWNhdGlvbi9ncnBjLXdlYitwcm90b1wiKTtjLmhlYWRlcnMuc2V0KFwiWC1Vc2VyLUFnZW50XCIsXCJncnBjLXdlYi1qYXZhc2NyaXB0LzAuMVwiKTtjLmhlYWRlcnMuc2V0KFwiWC1HcnBjLVdlYlwiLFwiMVwiKTtpZihjLmhlYWRlcnMuaGFzKFwiZGVhZGxpbmVcIikpe3ZhciBoPU51bWJlcihjLmhlYWRlcnMuZ2V0KFwiZGVhZGxpbmVcIikpO1xuaD1NYXRoLmNlaWwoaC0obmV3IERhdGUpLmdldFRpbWUoKSk7Yy5oZWFkZXJzLmRlbGV0ZShcImRlYWRsaW5lXCIpO0luZmluaXR5PT09aCYmKGg9MCk7MDxoJiYoYy5oZWFkZXJzLnNldChcImdycGMtdGltZW91dFwiLGgrXCJtXCIpLGMuaD1NYXRoLm1heCgwLE1hdGgubWF4KDFFMyxNYXRoLmNlaWwoMS4xKmgpKSkpfWlmKGEuZyl7ZT1jLmhlYWRlcnM7aD17fTtmb3IodmFyIGs9aGEoZS5rZXlzKCkpLGw9ay5uZXh0KCk7IWwuZG9uZTtsPWsubmV4dCgpKWw9bC52YWx1ZSxoW2xdPWUuZ2V0KGwpO2MuaGVhZGVycy5jbGVhcigpO2I6e2ZvcihtIGluIGgpe3ZhciBtPSExO2JyZWFrIGJ9bT0hMH1pZighbSlpZihoPU5jKGgpLFwic3RyaW5nXCI9PT10eXBlb2YgZil7aWYobT1lbmNvZGVVUklDb21wb25lbnQoXCIkaHR0cEhlYWRlcnNcIiksaD1udWxsIT1oP1wiPVwiK2VuY29kZVVSSUNvbXBvbmVudChTdHJpbmcoaCkpOlwiXCIsbSs9aCloPWYuaW5kZXhPZihcIiNcIiksMD5oJiYoaD1mLmxlbmd0aCksZT1mLmluZGV4T2YoXCI/XCIpLFxuMD5lfHxlPmg/KGU9aCxrPVwiXCIpOms9Zi5zdWJzdHJpbmcoZSsxLGgpLGY9W2Yuc3Vic3RyKDAsZSksayxmLnN1YnN0cihoKV0saD1mWzFdLGZbMV09bT9oP2grXCImXCIrbTptOmgsZj1mWzBdKyhmWzFdP1wiP1wiK2ZbMV06XCJcIikrZlsyXX1lbHNlIGYuYShcIiRodHRwSGVhZGVyc1wiLGgpfWI9KDAsZC5hKShiLmdldFJlcXVlc3RNZXNzYWdlKCkpO2Q9Yi5sZW5ndGg7bT1bMCwwLDAsMF07aD1uZXcgVWludDhBcnJheSg1K2QpO2ZvcihlPTM7MDw9ZTtlLS0pbVtlXT1kJTI1NixkPj4+PTg7aC5zZXQobmV3IFVpbnQ4QXJyYXkobSksMSk7aC5zZXQoYiw1KTtiPWg7aWYoXCJ0ZXh0XCI9PWEuYSl7YT1iO3ZhciBwO3ZvaWQgMD09PXAmJihwPTApO0ljKCk7cD1FY1twXTtiPUFycmF5KE1hdGguZmxvb3IoYS5sZW5ndGgvMykpO2Q9cFs2NF18fFwiXCI7Zm9yKG09aD0wO2g8YS5sZW5ndGgtMjtoKz0zKXtsPWFbaF07dmFyIHE9YVtoKzFdO2s9YVtoKzJdO2U9cFtsPj4yXTtsPXBbKGwmMyk8PDR8cT4+NF07XG5xPXBbKHEmMTUpPDwyfGs+PjZdO2s9cFtrJjYzXTtiW20rK109ZStsK3Era31lPTA7az1kO3N3aXRjaChhLmxlbmd0aC1oKXtjYXNlIDI6ZT1hW2grMV0saz1wWyhlJjE1KTw8Ml18fGQ7Y2FzZSAxOmE9YVtoXSxiW21dPXBbYT4+Ml0rcFsoYSYzKTw8NHxlPj40XStrK2R9Yj1iLmpvaW4oXCJcIil9ZWxzZVwiYmluYXJ5XCI9PWEuYSYmKGMubT1cImFycmF5YnVmZmVyXCIpO3ZjKGMsZixiKTtyZXR1cm4gZ31cbmZ1bmN0aW9uIFFjKGEsYixjKXt2YXIgZD0hMSxmPW51bGwsZz0hMTthLm9uKFwiZGF0YVwiLGZ1bmN0aW9uKGUpe2Q9ITA7Zj1lfSk7YS5vbihcImVycm9yXCIsZnVuY3Rpb24oZSl7MD09ZS5jb2RlfHxnfHwoZz0hMCxiKGUsbnVsbCkpfSk7YS5vbihcInN0YXR1c1wiLGZ1bmN0aW9uKGUpezA9PWUuY29kZXx8Zz9jJiZiKG51bGwsbnVsbCxlKTooZz0hMCxiKHtjb2RlOmUuY29kZSxtZXNzYWdlOmUuZGV0YWlscyxtZXRhZGF0YTplLm1ldGFkYXRhfSxudWxsKSl9KTtpZihjKWEub24oXCJtZXRhZGF0YVwiLGZ1bmN0aW9uKGUpe2IobnVsbCxudWxsLG51bGwsZSl9KTthLm9uKFwiZW5kXCIsZnVuY3Rpb24oKXtnfHwoZD9jP2IobnVsbCxmLG51bGwsbnVsbCwhMCk6YihudWxsLGYpOmIoe2NvZGU6MixtZXNzYWdlOlwiSW5jb21wbGV0ZSByZXNwb25zZVwifSkpO2MmJmIobnVsbCxudWxsKX0pfVxuZnVuY3Rpb24gT2MoYSxiKXt2YXIgYz1hO2IuZm9yRWFjaChmdW5jdGlvbihkKXt2YXIgZj1jO2M9ZnVuY3Rpb24oZyl7cmV0dXJuIGQuaW50ZXJjZXB0KGcsZil9fSk7cmV0dXJuIGN9Wi5wcm90b3R5cGUuc2VydmVyU3RyZWFtaW5nPVoucHJvdG90eXBlLlk7Wi5wcm90b3R5cGUudW5hcnlDYWxsPVoucHJvdG90eXBlLnVuYXJ5Q2FsbDtaLnByb3RvdHlwZS50aGVuYWJsZUNhbGw9Wi5wcm90b3R5cGUuUztaLnByb3RvdHlwZS5ycGNDYWxsPVoucHJvdG90eXBlLlg7bW9kdWxlLmV4cG9ydHMuQ2FsbE9wdGlvbnM9eGE7bW9kdWxlLmV4cG9ydHMuTWV0aG9kRGVzY3JpcHRvcj15YTttb2R1bGUuZXhwb3J0cy5HcnBjV2ViQ2xpZW50QmFzZT1aO21vZHVsZS5leHBvcnRzLlJwY0Vycm9yPUU7bW9kdWxlLmV4cG9ydHMuU3RhdHVzQ29kZT17T0s6MCxDQU5DRUxMRUQ6MSxVTktOT1dOOjIsSU5WQUxJRF9BUkdVTUVOVDozLERFQURMSU5FX0VYQ0VFREVEOjQsTk9UX0ZPVU5EOjUsQUxSRUFEWV9FWElTVFM6NixQRVJNSVNTSU9OX0RFTklFRDo3LFVOQVVUSEVOVElDQVRFRDoxNixSRVNPVVJDRV9FWEhBVVNURUQ6OCxGQUlMRURfUFJFQ09ORElUSU9OOjksQUJPUlRFRDoxMCxPVVRfT0ZfUkFOR0U6MTEsVU5JTVBMRU1FTlRFRDoxMixJTlRFUk5BTDoxMyxVTkFWQUlMQUJMRToxNCxEQVRBX0xPU1M6MTV9O21vZHVsZS5leHBvcnRzLk1ldGhvZFR5cGU9e1VOQVJZOlwidW5hcnlcIixTRVJWRVJfU1RSRUFNSU5HOlwic2VydmVyX3N0cmVhbWluZ1wiLEJJRElfU1RSRUFNSU5HOlwiYmlkaV9zdHJlYW1pbmdcIn07XG5MYj1cInVuZGVmaW5lZFwiIT09dHlwZW9mIGdsb2JhbFRoaXMmJmdsb2JhbFRoaXN8fHNlbGY7XG4iLCIvKipcbiAqIEBmaWxlb3ZlcnZpZXcgZ1JQQy1XZWIgZ2VuZXJhdGVkIGNsaWVudCBzdHViIGZvciBvbmRld28uc2lwXG4gKiBAZW5oYW5jZWFibGVcbiAqIEBwdWJsaWNcbiAqL1xuXG4vLyBDb2RlIGdlbmVyYXRlZCBieSBwcm90b2MtZ2VuLWdycGMtd2ViLiBETyBOT1QgRURJVC5cbi8vIHZlcnNpb25zOlxuLy8gXHRwcm90b2MtZ2VuLWdycGMtd2ViIHYxLjUuMFxuLy8gXHRwcm90b2MgICAgICAgICAgICAgIHY2LjMyLjBcbi8vIHNvdXJjZTogb25kZXdvL3NpcC9zaXAucHJvdG9cblxuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gQHRzLW5vY2hlY2tcblxuXG5cbmNvbnN0IGdycGMgPSB7fTtcbmdycGMud2ViID0gcmVxdWlyZSgnZ3JwYy13ZWInKTtcblxuXG52YXIgZ29vZ2xlX3Byb3RvYnVmX2VtcHR5X3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmL2dvb2dsZS9wcm90b2J1Zi9lbXB0eV9wYi5qcycpXG5cbnZhciBnb29nbGVfcHJvdG9idWZfdGltZXN0YW1wX3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmL2dvb2dsZS9wcm90b2J1Zi90aW1lc3RhbXBfcGIuanMnKVxuY29uc3QgcHJvdG8gPSB7fTtcbnByb3RvLm9uZGV3byA9IHt9O1xucHJvdG8ub25kZXdvLnNpcCA9IHJlcXVpcmUoJy4vc2lwX3BiLmpzJyk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGhvc3RuYW1lXG4gKiBAcGFyYW0gez9PYmplY3R9IGNyZWRlbnRpYWxzXG4gKiBAcGFyYW0gez9ncnBjLndlYi5DbGllbnRPcHRpb25zfSBvcHRpb25zXG4gKiBAY29uc3RydWN0b3JcbiAqIEBzdHJ1Y3RcbiAqIEBmaW5hbFxuICovXG5wcm90by5vbmRld28uc2lwLlNpcENsaWVudCA9XG4gICAgZnVuY3Rpb24oaG9zdG5hbWUsIGNyZWRlbnRpYWxzLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykgb3B0aW9ucyA9IHt9O1xuICBvcHRpb25zLmZvcm1hdCA9ICd0ZXh0JztcblxuICAvKipcbiAgICogQHByaXZhdGUgQGNvbnN0IHshZ3JwYy53ZWIuR3JwY1dlYkNsaWVudEJhc2V9IFRoZSBjbGllbnRcbiAgICovXG4gIHRoaXMuY2xpZW50XyA9IG5ldyBncnBjLndlYi5HcnBjV2ViQ2xpZW50QmFzZShvcHRpb25zKTtcblxuICAvKipcbiAgICogQHByaXZhdGUgQGNvbnN0IHtzdHJpbmd9IFRoZSBob3N0bmFtZVxuICAgKi9cbiAgdGhpcy5ob3N0bmFtZV8gPSBob3N0bmFtZS5yZXBsYWNlKC9cXC8rJC8sICcnKTtcblxufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBob3N0bmFtZVxuICogQHBhcmFtIHs/T2JqZWN0fSBjcmVkZW50aWFsc1xuICogQHBhcmFtIHs/Z3JwYy53ZWIuQ2xpZW50T3B0aW9uc30gb3B0aW9uc1xuICogQGNvbnN0cnVjdG9yXG4gKiBAc3RydWN0XG4gKiBAZmluYWxcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBQcm9taXNlQ2xpZW50ID1cbiAgICBmdW5jdGlvbihob3N0bmFtZSwgY3JlZGVudGlhbHMsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSBvcHRpb25zID0ge307XG4gIG9wdGlvbnMuZm9ybWF0ID0gJ3RleHQnO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZSBAY29uc3QgeyFncnBjLndlYi5HcnBjV2ViQ2xpZW50QmFzZX0gVGhlIGNsaWVudFxuICAgKi9cbiAgdGhpcy5jbGllbnRfID0gbmV3IGdycGMud2ViLkdycGNXZWJDbGllbnRCYXNlKG9wdGlvbnMpO1xuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZSBAY29uc3Qge3N0cmluZ30gVGhlIGhvc3RuYW1lXG4gICAqL1xuICB0aGlzLmhvc3RuYW1lXyA9IGhvc3RuYW1lLnJlcGxhY2UoL1xcLyskLywgJycpO1xuXG59O1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7IWdycGMud2ViLk1ldGhvZERlc2NyaXB0b3I8XG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3QsXG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKi9cbmNvbnN0IG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFN0YXJ0U2Vzc2lvbiA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL29uZGV3by5zaXAuU2lwL1NpcFN0YXJ0U2Vzc2lvbicsXG4gIGdycGMud2ViLk1ldGhvZFR5cGUuVU5BUlksXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdCxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3R9IHJlcXVlc3RcbiAgICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gIH0sXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLmRlc2VyaWFsaXplQmluYXJ5XG4pO1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz59IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oP2dycGMud2ViLlJwY0Vycm9yLCA/cHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMpfVxuICogICAgIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpXG4gKiBAcmV0dXJuIHshZ3JwYy53ZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPnx1bmRlZmluZWR9XG4gKiAgICAgVGhlIFhIUiBOb2RlIFJlYWRhYmxlIFN0cmVhbVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcENsaWVudC5wcm90b3R5cGUuc2lwU3RhcnRTZXNzaW9uID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvb25kZXdvLnNpcC5TaXAvU2lwU3RhcnRTZXNzaW9uJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFN0YXJ0U2Vzc2lvbixcbiAgICAgIGNhbGxiYWNrKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3R9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPj19IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEByZXR1cm4geyFQcm9taXNlPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKiAgICAgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFByb21pc2VDbGllbnQucHJvdG90eXBlLnNpcFN0YXJ0U2Vzc2lvbiA9XG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgbWV0YWRhdGEpIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy51bmFyeUNhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBTdGFydFNlc3Npb24nLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwU3RhcnRTZXNzaW9uKTtcbn07XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHshZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcjxcbiAqICAgIXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSxcbiAqICAgIXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPn1cbiAqL1xuY29uc3QgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwRW5kU2Vzc2lvbiA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL29uZGV3by5zaXAuU2lwL1NpcEVuZFNlc3Npb24nLFxuICBncnBjLndlYi5NZXRob2RUeXBlLlVOQVJZLFxuICBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIuRW1wdHksXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLFxuICAvKipcbiAgICogQHBhcmFtIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5fSByZXF1ZXN0XG4gICAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeSgpO1xuICB9LFxuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5kZXNlcmlhbGl6ZUJpbmFyeVxuKTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eX0gcmVxdWVzdCBUaGVcbiAqICAgICByZXF1ZXN0IHByb3RvXG4gKiBAcGFyYW0gez9PYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKD9ncnBjLndlYi5ScGNFcnJvciwgP3Byb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzKX1cbiAqICAgICBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKVxuICogQHJldHVybiB7IWdycGMud2ViLkNsaWVudFJlYWRhYmxlU3RyZWFtPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz58dW5kZWZpbmVkfVxuICogICAgIFRoZSBYSFIgTm9kZSBSZWFkYWJsZSBTdHJlYW1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBDbGllbnQucHJvdG90eXBlLnNpcEVuZFNlc3Npb24gPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhLCBjYWxsYmFjaykge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnJwY0NhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBFbmRTZXNzaW9uJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcEVuZFNlc3Npb24sXG4gICAgICBjYWxsYmFjayk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz49fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcmV0dXJuIHshUHJvbWlzZTwhcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXM+fVxuICogICAgIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2VcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBQcm9taXNlQ2xpZW50LnByb3RvdHlwZS5zaXBFbmRTZXNzaW9uID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSkge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnVuYXJ5Q2FsbCh0aGlzLmhvc3RuYW1lXyArXG4gICAgICAnL29uZGV3by5zaXAuU2lwL1NpcEVuZFNlc3Npb24nLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwRW5kU2Vzc2lvbik7XG59O1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7IWdycGMud2ViLk1ldGhvZERlc2NyaXB0b3I8XG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3QsXG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKi9cbmNvbnN0IG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFN0YXJ0Q2FsbCA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL29uZGV3by5zaXAuU2lwL1NpcFN0YXJ0Q2FsbCcsXG4gIGdycGMud2ViLk1ldGhvZFR5cGUuVU5BUlksXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRDYWxsUmVxdWVzdCxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3R9IHJlcXVlc3RcbiAgICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gIH0sXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLmRlc2VyaWFsaXplQmluYXJ5XG4pO1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz59IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oP2dycGMud2ViLlJwY0Vycm9yLCA/cHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMpfVxuICogICAgIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpXG4gKiBAcmV0dXJuIHshZ3JwYy53ZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPnx1bmRlZmluZWR9XG4gKiAgICAgVGhlIFhIUiBOb2RlIFJlYWRhYmxlIFN0cmVhbVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcENsaWVudC5wcm90b3R5cGUuc2lwU3RhcnRDYWxsID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvb25kZXdvLnNpcC5TaXAvU2lwU3RhcnRDYWxsJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFN0YXJ0Q2FsbCxcbiAgICAgIGNhbGxiYWNrKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3R9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPj19IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEByZXR1cm4geyFQcm9taXNlPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKiAgICAgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFByb21pc2VDbGllbnQucHJvdG90eXBlLnNpcFN0YXJ0Q2FsbCA9XG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgbWV0YWRhdGEpIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy51bmFyeUNhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBTdGFydENhbGwnLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwU3RhcnRDYWxsKTtcbn07XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHshZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcjxcbiAqICAgIXByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3QsXG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKi9cbmNvbnN0IG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcEVuZENhbGwgPSBuZXcgZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcihcbiAgJy9vbmRld28uc2lwLlNpcC9TaXBFbmRDYWxsJyxcbiAgZ3JwYy53ZWIuTWV0aG9kVHlwZS5VTkFSWSxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdCxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcEVuZENhbGxSZXF1ZXN0fSByZXF1ZXN0XG4gICAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeSgpO1xuICB9LFxuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5kZXNlcmlhbGl6ZUJpbmFyeVxuKTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3R9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gbWV0YWRhdGEgVXNlciBkZWZpbmVkXG4gKiAgICAgY2FsbCBtZXRhZGF0YVxuICogQHBhcmFtIHtmdW5jdGlvbig/Z3JwYy53ZWIuUnBjRXJyb3IsID9wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cyl9XG4gKiAgICAgY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSlcbiAqIEByZXR1cm4geyFncnBjLndlYi5DbGllbnRSZWFkYWJsZVN0cmVhbTwhcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXM+fHVuZGVmaW5lZH1cbiAqICAgICBUaGUgWEhSIE5vZGUgUmVhZGFibGUgU3RyZWFtXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwQ2xpZW50LnByb3RvdHlwZS5zaXBFbmRDYWxsID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvb25kZXdvLnNpcC5TaXAvU2lwRW5kQ2FsbCcsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX1NpcF9TaXBFbmRDYWxsLFxuICAgICAgY2FsbGJhY2spO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3R9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPj19IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEByZXR1cm4geyFQcm9taXNlPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKiAgICAgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFByb21pc2VDbGllbnQucHJvdG90eXBlLnNpcEVuZENhbGwgPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNsaWVudF8udW5hcnlDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvb25kZXdvLnNpcC5TaXAvU2lwRW5kQ2FsbCcsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX1NpcF9TaXBFbmRDYWxsKTtcbn07XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHshZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcjxcbiAqICAgIXByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdCxcbiAqICAgIXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPn1cbiAqL1xuY29uc3QgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwVHJhbnNmZXJDYWxsID0gbmV3IGdycGMud2ViLk1ldGhvZERlc2NyaXB0b3IoXG4gICcvb25kZXdvLnNpcC5TaXAvU2lwVHJhbnNmZXJDYWxsJyxcbiAgZ3JwYy53ZWIuTWV0aG9kVHlwZS5VTkFSWSxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0LFxuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cyxcbiAgLyoqXG4gICAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdH0gcmVxdWVzdFxuICAgKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAgICovXG4gIGZ1bmN0aW9uKHJlcXVlc3QpIHtcbiAgICByZXR1cm4gcmVxdWVzdC5zZXJpYWxpemVCaW5hcnkoKTtcbiAgfSxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMuZGVzZXJpYWxpemVCaW5hcnlcbik7XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3R9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPn0gbWV0YWRhdGEgVXNlciBkZWZpbmVkXG4gKiAgICAgY2FsbCBtZXRhZGF0YVxuICogQHBhcmFtIHtmdW5jdGlvbig/Z3JwYy53ZWIuUnBjRXJyb3IsID9wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cyl9XG4gKiAgICAgY2FsbGJhY2sgVGhlIGNhbGxiYWNrIGZ1bmN0aW9uKGVycm9yLCByZXNwb25zZSlcbiAqIEByZXR1cm4geyFncnBjLndlYi5DbGllbnRSZWFkYWJsZVN0cmVhbTwhcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXM+fHVuZGVmaW5lZH1cbiAqICAgICBUaGUgWEhSIE5vZGUgUmVhZGFibGUgU3RyZWFtXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwQ2xpZW50LnByb3RvdHlwZS5zaXBUcmFuc2ZlckNhbGwgPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhLCBjYWxsYmFjaykge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnJwY0NhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBUcmFuc2ZlckNhbGwnLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwVHJhbnNmZXJDYWxsLFxuICAgICAgY2FsbGJhY2spO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdH0gcmVxdWVzdCBUaGVcbiAqICAgICByZXF1ZXN0IHByb3RvXG4gKiBAcGFyYW0gez9PYmplY3Q8c3RyaW5nLCBzdHJpbmc+PX0gbWV0YWRhdGEgVXNlciBkZWZpbmVkXG4gKiAgICAgY2FsbCBtZXRhZGF0YVxuICogQHJldHVybiB7IVByb21pc2U8IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPn1cbiAqICAgICBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHJlc3BvbnNlXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUHJvbWlzZUNsaWVudC5wcm90b3R5cGUuc2lwVHJhbnNmZXJDYWxsID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSkge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnVuYXJ5Q2FsbCh0aGlzLmhvc3RuYW1lXyArXG4gICAgICAnL29uZGV3by5zaXAuU2lwL1NpcFRyYW5zZmVyQ2FsbCcsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX1NpcF9TaXBUcmFuc2ZlckNhbGwpO1xufTtcblxuXG4vKipcbiAqIEBjb25zdFxuICogQHR5cGUgeyFncnBjLndlYi5NZXRob2REZXNjcmlwdG9yPFxuICogICAhcHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0LFxuICogICAhcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXM+fVxuICovXG5jb25zdCBtZXRob2REZXNjcmlwdG9yX1NpcF9TaXBSZWdpc3RlckFjY291bnQgPSBuZXcgZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcihcbiAgJy9vbmRld28uc2lwLlNpcC9TaXBSZWdpc3RlckFjY291bnQnLFxuICBncnBjLndlYi5NZXRob2RUeXBlLlVOQVJZLFxuICBwcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QsXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLFxuICAvKipcbiAgICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0fSByZXF1ZXN0XG4gICAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeSgpO1xuICB9LFxuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5kZXNlcmlhbGl6ZUJpbmFyeVxuKTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdH0gcmVxdWVzdCBUaGVcbiAqICAgICByZXF1ZXN0IHByb3RvXG4gKiBAcGFyYW0gez9PYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKD9ncnBjLndlYi5ScGNFcnJvciwgP3Byb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzKX1cbiAqICAgICBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKVxuICogQHJldHVybiB7IWdycGMud2ViLkNsaWVudFJlYWRhYmxlU3RyZWFtPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz58dW5kZWZpbmVkfVxuICogICAgIFRoZSBYSFIgTm9kZSBSZWFkYWJsZSBTdHJlYW1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBDbGllbnQucHJvdG90eXBlLnNpcFJlZ2lzdGVyQWNjb3VudCA9XG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgbWV0YWRhdGEsIGNhbGxiYWNrKSB7XG4gIHJldHVybiB0aGlzLmNsaWVudF8ucnBjQ2FsbCh0aGlzLmhvc3RuYW1lXyArXG4gICAgICAnL29uZGV3by5zaXAuU2lwL1NpcFJlZ2lzdGVyQWNjb3VudCcsXG4gICAgICByZXF1ZXN0LFxuICAgICAgbWV0YWRhdGEgfHwge30sXG4gICAgICBtZXRob2REZXNjcmlwdG9yX1NpcF9TaXBSZWdpc3RlckFjY291bnQsXG4gICAgICBjYWxsYmFjayk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz49fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcmV0dXJuIHshUHJvbWlzZTwhcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXM+fVxuICogICAgIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2VcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBQcm9taXNlQ2xpZW50LnByb3RvdHlwZS5zaXBSZWdpc3RlckFjY291bnQgPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhKSB7XG4gIHJldHVybiB0aGlzLmNsaWVudF8udW5hcnlDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvb25kZXdvLnNpcC5TaXAvU2lwUmVnaXN0ZXJBY2NvdW50JyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFJlZ2lzdGVyQWNjb3VudCk7XG59O1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7IWdycGMud2ViLk1ldGhvZERlc2NyaXB0b3I8XG4gKiAgICFwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHksXG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKi9cbmNvbnN0IG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcEdldFNpcFN0YXR1cyA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL29uZGV3by5zaXAuU2lwL1NpcEdldFNpcFN0YXR1cycsXG4gIGdycGMud2ViLk1ldGhvZFR5cGUuVU5BUlksXG4gIGdvb2dsZV9wcm90b2J1Zl9lbXB0eV9wYi5FbXB0eSxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHl9IHJlcXVlc3RcbiAgICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gIH0sXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLmRlc2VyaWFsaXplQmluYXJ5XG4pO1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz59IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oP2dycGMud2ViLlJwY0Vycm9yLCA/cHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMpfVxuICogICAgIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpXG4gKiBAcmV0dXJuIHshZ3JwYy53ZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPnx1bmRlZmluZWR9XG4gKiAgICAgVGhlIFhIUiBOb2RlIFJlYWRhYmxlIFN0cmVhbVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcENsaWVudC5wcm90b3R5cGUuc2lwR2V0U2lwU3RhdHVzID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvb25kZXdvLnNpcC5TaXAvU2lwR2V0U2lwU3RhdHVzJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcEdldFNpcFN0YXR1cyxcbiAgICAgIGNhbGxiYWNrKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHl9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPj19IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEByZXR1cm4geyFQcm9taXNlPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKiAgICAgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFByb21pc2VDbGllbnQucHJvdG90eXBlLnNpcEdldFNpcFN0YXR1cyA9XG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgbWV0YWRhdGEpIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy51bmFyeUNhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBHZXRTaXBTdGF0dXMnLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwR2V0U2lwU3RhdHVzKTtcbn07XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHshZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcjxcbiAqICAgIXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSxcbiAqICAgIXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlPn1cbiAqL1xuY29uc3QgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwR2V0U2lwU3RhdHVzSGlzdG9yeSA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL29uZGV3by5zaXAuU2lwL1NpcEdldFNpcFN0YXR1c0hpc3RvcnknLFxuICBncnBjLndlYi5NZXRob2RUeXBlLlVOQVJZLFxuICBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIuRW1wdHksXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlLFxuICAvKipcbiAgICogQHBhcmFtIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5fSByZXF1ZXN0XG4gICAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeSgpO1xuICB9LFxuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeVxuKTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eX0gcmVxdWVzdCBUaGVcbiAqICAgICByZXF1ZXN0IHByb3RvXG4gKiBAcGFyYW0gez9PYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKD9ncnBjLndlYi5ScGNFcnJvciwgP3Byb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlKX1cbiAqICAgICBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKVxuICogQHJldHVybiB7IWdycGMud2ViLkNsaWVudFJlYWRhYmxlU3RyZWFtPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZT58dW5kZWZpbmVkfVxuICogICAgIFRoZSBYSFIgTm9kZSBSZWFkYWJsZSBTdHJlYW1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBDbGllbnQucHJvdG90eXBlLnNpcEdldFNpcFN0YXR1c0hpc3RvcnkgPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhLCBjYWxsYmFjaykge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnJwY0NhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBHZXRTaXBTdGF0dXNIaXN0b3J5JyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcEdldFNpcFN0YXR1c0hpc3RvcnksXG4gICAgICBjYWxsYmFjayk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz49fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcmV0dXJuIHshUHJvbWlzZTwhcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2U+fVxuICogICAgIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2VcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBQcm9taXNlQ2xpZW50LnByb3RvdHlwZS5zaXBHZXRTaXBTdGF0dXNIaXN0b3J5ID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSkge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnVuYXJ5Q2FsbCh0aGlzLmhvc3RuYW1lXyArXG4gICAgICAnL29uZGV3by5zaXAuU2lwL1NpcEdldFNpcFN0YXR1c0hpc3RvcnknLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwR2V0U2lwU3RhdHVzSGlzdG9yeSk7XG59O1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7IWdycGMud2ViLk1ldGhvZERlc2NyaXB0b3I8XG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QsXG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKi9cbmNvbnN0IG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFBsYXlXYXZGaWxlcyA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL29uZGV3by5zaXAuU2lwL1NpcFBsYXlXYXZGaWxlcycsXG4gIGdycGMud2ViLk1ldGhvZFR5cGUuVU5BUlksXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdCxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3R9IHJlcXVlc3RcbiAgICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gIH0sXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLmRlc2VyaWFsaXplQmluYXJ5XG4pO1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz59IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oP2dycGMud2ViLlJwY0Vycm9yLCA/cHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMpfVxuICogICAgIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpXG4gKiBAcmV0dXJuIHshZ3JwYy53ZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPnx1bmRlZmluZWR9XG4gKiAgICAgVGhlIFhIUiBOb2RlIFJlYWRhYmxlIFN0cmVhbVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcENsaWVudC5wcm90b3R5cGUuc2lwUGxheVdhdkZpbGVzID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvb25kZXdvLnNpcC5TaXAvU2lwUGxheVdhdkZpbGVzJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFBsYXlXYXZGaWxlcyxcbiAgICAgIGNhbGxiYWNrKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3R9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPj19IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEByZXR1cm4geyFQcm9taXNlPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKiAgICAgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFByb21pc2VDbGllbnQucHJvdG90eXBlLnNpcFBsYXlXYXZGaWxlcyA9XG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgbWV0YWRhdGEpIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy51bmFyeUNhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBQbGF5V2F2RmlsZXMnLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwUGxheVdhdkZpbGVzKTtcbn07XG5cblxuLyoqXG4gKiBAY29uc3RcbiAqIEB0eXBlIHshZ3JwYy53ZWIuTWV0aG9kRGVzY3JpcHRvcjxcbiAqICAgIXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eSxcbiAqICAgIXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPn1cbiAqL1xuY29uc3QgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwTXV0ZSA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL29uZGV3by5zaXAuU2lwL1NpcE11dGUnLFxuICBncnBjLndlYi5NZXRob2RUeXBlLlVOQVJZLFxuICBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIuRW1wdHksXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLFxuICAvKipcbiAgICogQHBhcmFtIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5fSByZXF1ZXN0XG4gICAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICAgKi9cbiAgZnVuY3Rpb24ocmVxdWVzdCkge1xuICAgIHJldHVybiByZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeSgpO1xuICB9LFxuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5kZXNlcmlhbGl6ZUJpbmFyeVxuKTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLmdvb2dsZS5wcm90b2J1Zi5FbXB0eX0gcmVxdWVzdCBUaGVcbiAqICAgICByZXF1ZXN0IHByb3RvXG4gKiBAcGFyYW0gez9PYmplY3Q8c3RyaW5nLCBzdHJpbmc+fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcGFyYW0ge2Z1bmN0aW9uKD9ncnBjLndlYi5ScGNFcnJvciwgP3Byb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzKX1cbiAqICAgICBjYWxsYmFjayBUaGUgY2FsbGJhY2sgZnVuY3Rpb24oZXJyb3IsIHJlc3BvbnNlKVxuICogQHJldHVybiB7IWdycGMud2ViLkNsaWVudFJlYWRhYmxlU3RyZWFtPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz58dW5kZWZpbmVkfVxuICogICAgIFRoZSBYSFIgTm9kZSBSZWFkYWJsZSBTdHJlYW1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBDbGllbnQucHJvdG90eXBlLnNpcE11dGUgPVxuICAgIGZ1bmN0aW9uKHJlcXVlc3QsIG1ldGFkYXRhLCBjYWxsYmFjaykge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnJwY0NhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBNdXRlJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcE11dGUsXG4gICAgICBjYWxsYmFjayk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz49fSBtZXRhZGF0YSBVc2VyIGRlZmluZWRcbiAqICAgICBjYWxsIG1ldGFkYXRhXG4gKiBAcmV0dXJuIHshUHJvbWlzZTwhcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXM+fVxuICogICAgIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgcmVzcG9uc2VcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBQcm9taXNlQ2xpZW50LnByb3RvdHlwZS5zaXBNdXRlID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSkge1xuICByZXR1cm4gdGhpcy5jbGllbnRfLnVuYXJ5Q2FsbCh0aGlzLmhvc3RuYW1lXyArXG4gICAgICAnL29uZGV3by5zaXAuU2lwL1NpcE11dGUnLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwTXV0ZSk7XG59O1xuXG5cbi8qKlxuICogQGNvbnN0XG4gKiBAdHlwZSB7IWdycGMud2ViLk1ldGhvZERlc2NyaXB0b3I8XG4gKiAgICFwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHksXG4gKiAgICFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKi9cbmNvbnN0IG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFVuTXV0ZSA9IG5ldyBncnBjLndlYi5NZXRob2REZXNjcmlwdG9yKFxuICAnL29uZGV3by5zaXAuU2lwL1NpcFVuTXV0ZScsXG4gIGdycGMud2ViLk1ldGhvZFR5cGUuVU5BUlksXG4gIGdvb2dsZV9wcm90b2J1Zl9lbXB0eV9wYi5FbXB0eSxcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMsXG4gIC8qKlxuICAgKiBAcGFyYW0geyFwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHl9IHJlcXVlc3RcbiAgICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gICAqL1xuICBmdW5jdGlvbihyZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHJlcXVlc3Quc2VyaWFsaXplQmluYXJ5KCk7XG4gIH0sXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLmRlc2VyaWFsaXplQmluYXJ5XG4pO1xuXG5cbi8qKlxuICogQHBhcmFtIHshcHJvdG8uZ29vZ2xlLnByb3RvYnVmLkVtcHR5fSByZXF1ZXN0IFRoZVxuICogICAgIHJlcXVlc3QgcHJvdG9cbiAqIEBwYXJhbSB7P09iamVjdDxzdHJpbmcsIHN0cmluZz59IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEBwYXJhbSB7ZnVuY3Rpb24oP2dycGMud2ViLlJwY0Vycm9yLCA/cHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMpfVxuICogICAgIGNhbGxiYWNrIFRoZSBjYWxsYmFjayBmdW5jdGlvbihlcnJvciwgcmVzcG9uc2UpXG4gKiBAcmV0dXJuIHshZ3JwYy53ZWIuQ2xpZW50UmVhZGFibGVTdHJlYW08IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPnx1bmRlZmluZWR9XG4gKiAgICAgVGhlIFhIUiBOb2RlIFJlYWRhYmxlIFN0cmVhbVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcENsaWVudC5wcm90b3R5cGUuc2lwVW5NdXRlID1cbiAgICBmdW5jdGlvbihyZXF1ZXN0LCBtZXRhZGF0YSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy5ycGNDYWxsKHRoaXMuaG9zdG5hbWVfICtcbiAgICAgICcvb25kZXdvLnNpcC5TaXAvU2lwVW5NdXRlJyxcbiAgICAgIHJlcXVlc3QsXG4gICAgICBtZXRhZGF0YSB8fCB7fSxcbiAgICAgIG1ldGhvZERlc2NyaXB0b3JfU2lwX1NpcFVuTXV0ZSxcbiAgICAgIGNhbGxiYWNrKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyFwcm90by5nb29nbGUucHJvdG9idWYuRW1wdHl9IHJlcXVlc3QgVGhlXG4gKiAgICAgcmVxdWVzdCBwcm90b1xuICogQHBhcmFtIHs/T2JqZWN0PHN0cmluZywgc3RyaW5nPj19IG1ldGFkYXRhIFVzZXIgZGVmaW5lZFxuICogICAgIGNhbGwgbWV0YWRhdGFcbiAqIEByZXR1cm4geyFQcm9taXNlPCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59XG4gKiAgICAgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSByZXNwb25zZVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFByb21pc2VDbGllbnQucHJvdG90eXBlLnNpcFVuTXV0ZSA9XG4gICAgZnVuY3Rpb24ocmVxdWVzdCwgbWV0YWRhdGEpIHtcbiAgcmV0dXJuIHRoaXMuY2xpZW50Xy51bmFyeUNhbGwodGhpcy5ob3N0bmFtZV8gK1xuICAgICAgJy9vbmRld28uc2lwLlNpcC9TaXBVbk11dGUnLFxuICAgICAgcmVxdWVzdCxcbiAgICAgIG1ldGFkYXRhIHx8IHt9LFxuICAgICAgbWV0aG9kRGVzY3JpcHRvcl9TaXBfU2lwVW5NdXRlKTtcbn07XG5cblxuXG5cbnByb3RvLm9uZGV3by5zaXAuU2lwQ2xpZW50V3JhcHBlciA9IGZ1bmN0aW9uKGNvbmZpZykgXG57XG4gICAgdGhpcy53X2hvc3QgPSBjb25maWdbJ2dycGNfaG9zdCddO1xuICAgIHRoaXMud19wb3J0ID0gY29uZmlnWydncnBjX3BvcnQnXTtcbiAgICB0aGlzLndfY2VydGlmaWNhdGUgPSBjb25maWdbJ2dycGNfY2VydGlmaWNhdGUnXTtcbiAgICBcbiAgICB0aGlzLndfc2VjdXJlID0gY29uZmlnWydncnBjX3NlY3VyZSddO1xuXG4gICAgaWYodGhpcy53X2NlcnRpZmljYXRlKXtcbiAgICAgICAgdGhpcy53X2NyZWRlbnRpYWxzWydncnBjX2NlcnRpZmljYXRlJ10gPSB0aGlzLndfY2VydGlmaWNhdGU7XG4gICAgfVxuXG4gICAgLy9TaXBDbGllbnRPcHRpb25zOjogc3VwcHJlc3NDb3JzUHJlZmxpZ2h0OiBib29sZWFuLCB3aXRoQ3JlZGVudGlhbHM6IGJvb2xlYW4sIHRoaXMudW5hcnlJbnRlcmNlcHRvcnM7IHRoaXMuc3RyZWFtSW50ZXJjZXB0b3JzOyB0aGlzLmZvcm1hdDsgdGhpcy53b3JrZXJTY29wZTsgdGhpcy51c2VGZXRjaERvd25sb2FkU3RyZWFtcztcbiAgICBpZih0aGlzLndfY3JlZGVudGlhbHMgJiYgT2JqZWN0LmtleXModGhpcy53X2NyZWRlbnRpYWxzKS5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy53X29wdGlvbnNbJ3dpdGhDcmVkZW50aWFscyddID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoY29uZmlnICYmIGNvbmZpZ1snb3B0aW9ucyddKXtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndfb3B0aW9ucywgY29uZmlnWydvcHRpb25zJ10pO1xuICAgIH1cblxuICAgIHRoaXMud19ob3N0cG9ydCA9IHRoaXMud19ob3N0ICsgJzonICsgdGhpcy53X3BvcnQ7XG4gICAgcmV0dXJuIHByb3RvLm9uZGV3by5zaXAuU2lwQ2xpZW50LmNhbGwodGhpcywgdGhpcy53X2hvc3Rwb3J0LCB0aGlzLndfY3JlZGVudGlhbHMsIHRoaXMud19vcHRpb25zKTtcbn07XG5wcm90by5vbmRld28uc2lwLlNpcFByb21pc2VDbGllbnRXcmFwcGVyID0gZnVuY3Rpb24oY29uZmlnKSBcbntcbiAgICB0aGlzLndfaG9zdCA9IGNvbmZpZ1snZ3JwY19ob3N0J107XG4gICAgdGhpcy53X3BvcnQgPSBjb25maWdbJ2dycGNfcG9ydCddO1xuICAgIHRoaXMud19jZXJ0aWZpY2F0ZSA9IGNvbmZpZ1snZ3JwY19jZXJ0aWZpY2F0ZSddO1xuICAgIFxuICAgIHRoaXMud19zZWN1cmUgPSBjb25maWdbJ2dycGNfc2VjdXJlJ107XG5cbiAgICBpZih0aGlzLndfY2VydGlmaWNhdGUpe1xuICAgICAgICB0aGlzLndfY3JlZGVudGlhbHNbJ2dycGNfY2VydGlmaWNhdGUnXSA9IHRoaXMud19jZXJ0aWZpY2F0ZTtcbiAgICB9XG5cbiAgICAvL1NpcFByb21pc2VDbGllbnRPcHRpb25zOjogc3VwcHJlc3NDb3JzUHJlZmxpZ2h0OiBib29sZWFuLCB3aXRoQ3JlZGVudGlhbHM6IGJvb2xlYW4sIHRoaXMudW5hcnlJbnRlcmNlcHRvcnM7IHRoaXMuc3RyZWFtSW50ZXJjZXB0b3JzOyB0aGlzLmZvcm1hdDsgdGhpcy53b3JrZXJTY29wZTsgdGhpcy51c2VGZXRjaERvd25sb2FkU3RyZWFtcztcbiAgICBpZih0aGlzLndfY3JlZGVudGlhbHMgJiYgT2JqZWN0LmtleXModGhpcy53X2NyZWRlbnRpYWxzKS5sZW5ndGggPiAwKXtcbiAgICAgICAgdGhpcy53X29wdGlvbnNbJ3dpdGhDcmVkZW50aWFscyddID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYoY29uZmlnICYmIGNvbmZpZ1snb3B0aW9ucyddKXtcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLndfb3B0aW9ucywgY29uZmlnWydvcHRpb25zJ10pO1xuICAgIH1cblxuICAgIHRoaXMud19ob3N0cG9ydCA9IHRoaXMud19ob3N0ICsgJzonICsgdGhpcy53X3BvcnQ7XG4gICAgcmV0dXJuIHByb3RvLm9uZGV3by5zaXAuU2lwUHJvbWlzZUNsaWVudC5jYWxsKHRoaXMsIHRoaXMud19ob3N0cG9ydCwgdGhpcy53X2NyZWRlbnRpYWxzLCB0aGlzLndfb3B0aW9ucyk7XG59O1xubW9kdWxlLmV4cG9ydHMgPSBwcm90by5vbmRld28uc2lwO1xuIiwiLy8gc291cmNlOiBvbmRld28vc2lwL3NpcC5wcm90b1xuLyoqXG4gKiBAZmlsZW92ZXJ2aWV3XG4gKiBAZW5oYW5jZWFibGVcbiAqIEBzdXBwcmVzcyB7bWlzc2luZ1JlcXVpcmV9IHJlcG9ydHMgZXJyb3Igb24gaW1wbGljaXQgdHlwZSB1c2FnZXMuXG4gKiBAc3VwcHJlc3Mge21lc3NhZ2VDb252ZW50aW9uc30gSlMgQ29tcGlsZXIgcmVwb3J0cyBhbiBlcnJvciBpZiBhIHZhcmlhYmxlIG9yXG4gKiAgICAgZmllbGQgc3RhcnRzIHdpdGggJ01TR18nIGFuZCBpc24ndCBhIHRyYW5zbGF0YWJsZSBtZXNzYWdlLlxuICogQHB1YmxpY1xuICovXG4vLyBHRU5FUkFURUQgQ09ERSAtLSBETyBOT1QgRURJVCFcbi8qIGVzbGludC1kaXNhYmxlICovXG4vLyBAdHMtbm9jaGVja1xuXG52YXIganNwYiA9IHJlcXVpcmUoJ2dvb2dsZS1wcm90b2J1ZicpO1xudmFyIGdvb2cgPSBqc3BiO1xudmFyIGdsb2JhbCA9XG4gICAgKHR5cGVvZiBnbG9iYWxUaGlzICE9PSAndW5kZWZpbmVkJyAmJiBnbG9iYWxUaGlzKSB8fFxuICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cpIHx8XG4gICAgKHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnICYmIGdsb2JhbCkgfHxcbiAgICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYpIHx8XG4gICAgKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pLmNhbGwobnVsbCkgfHxcbiAgICBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXG52YXIgZ29vZ2xlX3Byb3RvYnVmX2VtcHR5X3BiID0gcmVxdWlyZSgnZ29vZ2xlLXByb3RvYnVmL2dvb2dsZS9wcm90b2J1Zi9lbXB0eV9wYi5qcycpO1xuZ29vZy5vYmplY3QuZXh0ZW5kKHByb3RvLCBnb29nbGVfcHJvdG9idWZfZW1wdHlfcGIpO1xudmFyIGdvb2dsZV9wcm90b2J1Zl90aW1lc3RhbXBfcGIgPSByZXF1aXJlKCdnb29nbGUtcHJvdG9idWYvZ29vZ2xlL3Byb3RvYnVmL3RpbWVzdGFtcF9wYi5qcycpO1xuZ29vZy5vYmplY3QuZXh0ZW5kKHByb3RvLCBnb29nbGVfcHJvdG9idWZfdGltZXN0YW1wX3BiKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5vbmRld28uc2lwLlNpcEVuZENhbGxSZXF1ZXN0JywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdCcsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0JywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3QnLCBudWxsLCBnbG9iYWwpO1xuZ29vZy5leHBvcnRTeW1ib2woJ3Byb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5TdGF0dXNUeXBlJywgbnVsbCwgZ2xvYmFsKTtcbmdvb2cuZXhwb3J0U3ltYm9sKCdwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZScsIG51bGwsIGdsb2JhbCk7XG5nb29nLmV4cG9ydFN5bWJvbCgncHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0JywgbnVsbCwgZ2xvYmFsKTtcbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5vbmRld28uc2lwLlNpcEVuZENhbGxSZXF1ZXN0ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3QsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5vbmRld28uc2lwLlNpcEVuZENhbGxSZXF1ZXN0LmRpc3BsYXlOYW1lID0gJ3Byb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3QnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRDYWxsUmVxdWVzdCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3QsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3QuZGlzcGxheU5hbWUgPSAncHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0Jztcbn1cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QgPSBmdW5jdGlvbihvcHRfZGF0YSkge1xuICBqc3BiLk1lc3NhZ2UuaW5pdGlhbGl6ZSh0aGlzLCBvcHRfZGF0YSwgMCwgLTEsIG51bGwsIG51bGwpO1xufTtcbmdvb2cuaW5oZXJpdHMocHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0LCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0LmRpc3BsYXlOYW1lID0gJ3Byb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdCc7XG59XG4vKipcbiAqIEdlbmVyYXRlZCBieSBKc1BiQ29kZUdlbmVyYXRvci5cbiAqIEBwYXJhbSB7QXJyYXk9fSBvcHRfZGF0YSBPcHRpb25hbCBpbml0aWFsIGRhdGEgYXJyYXksIHR5cGljYWxseSBmcm9tIGFcbiAqIHNlcnZlciByZXNwb25zZSwgb3IgY29uc3RydWN0ZWQgZGlyZWN0bHkgaW4gSmF2YXNjcmlwdC4gVGhlIGFycmF5IGlzIHVzZWRcbiAqIGluIHBsYWNlIGFuZCBiZWNvbWVzIHBhcnQgb2YgdGhlIGNvbnN0cnVjdGVkIG9iamVjdC4gSXQgaXMgbm90IGNsb25lZC5cbiAqIElmIG5vIGRhdGEgaXMgcHJvdmlkZWQsIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3Qgd2lsbCBiZSBlbXB0eSwgYnV0IHN0aWxsXG4gKiB2YWxpZC5cbiAqIEBleHRlbmRzIHtqc3BiLk1lc3NhZ2V9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0ID0gZnVuY3Rpb24ob3B0X2RhdGEpIHtcbiAganNwYi5NZXNzYWdlLmluaXRpYWxpemUodGhpcywgb3B0X2RhdGEsIDAsIC0xLCBudWxsLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdCwganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdC5kaXNwbGF5TmFtZSA9ICdwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3QnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QuZGlzcGxheU5hbWUgPSAncHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0Jztcbn1cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cyA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgbnVsbCwgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cywganNwYi5NZXNzYWdlKTtcbmlmIChnb29nLkRFQlVHICYmICFDT01QSUxFRCkge1xuICAvKipcbiAgICogQHB1YmxpY1xuICAgKiBAb3ZlcnJpZGVcbiAgICovXG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLmRpc3BsYXlOYW1lID0gJ3Byb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzJztcbn1cbi8qKlxuICogR2VuZXJhdGVkIGJ5IEpzUGJDb2RlR2VuZXJhdG9yLlxuICogQHBhcmFtIHtBcnJheT19IG9wdF9kYXRhIE9wdGlvbmFsIGluaXRpYWwgZGF0YSBhcnJheSwgdHlwaWNhbGx5IGZyb20gYVxuICogc2VydmVyIHJlc3BvbnNlLCBvciBjb25zdHJ1Y3RlZCBkaXJlY3RseSBpbiBKYXZhc2NyaXB0LiBUaGUgYXJyYXkgaXMgdXNlZFxuICogaW4gcGxhY2UgYW5kIGJlY29tZXMgcGFydCBvZiB0aGUgY29uc3RydWN0ZWQgb2JqZWN0LiBJdCBpcyBub3QgY2xvbmVkLlxuICogSWYgbm8gZGF0YSBpcyBwcm92aWRlZCwgdGhlIGNvbnN0cnVjdGVkIG9iamVjdCB3aWxsIGJlIGVtcHR5LCBidXQgc3RpbGxcbiAqIHZhbGlkLlxuICogQGV4dGVuZHMge2pzcGIuTWVzc2FnZX1cbiAqIEBjb25zdHJ1Y3RvclxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZSA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2UucmVwZWF0ZWRGaWVsZHNfLCBudWxsKTtcbn07XG5nb29nLmluaGVyaXRzKHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlLCBqc3BiLk1lc3NhZ2UpO1xuaWYgKGdvb2cuREVCVUcgJiYgIUNPTVBJTEVEKSB7XG4gIC8qKlxuICAgKiBAcHVibGljXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2UuZGlzcGxheU5hbWUgPSAncHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2UnO1xufVxuLyoqXG4gKiBHZW5lcmF0ZWQgYnkgSnNQYkNvZGVHZW5lcmF0b3IuXG4gKiBAcGFyYW0ge0FycmF5PX0gb3B0X2RhdGEgT3B0aW9uYWwgaW5pdGlhbCBkYXRhIGFycmF5LCB0eXBpY2FsbHkgZnJvbSBhXG4gKiBzZXJ2ZXIgcmVzcG9uc2UsIG9yIGNvbnN0cnVjdGVkIGRpcmVjdGx5IGluIEphdmFzY3JpcHQuIFRoZSBhcnJheSBpcyB1c2VkXG4gKiBpbiBwbGFjZSBhbmQgYmVjb21lcyBwYXJ0IG9mIHRoZSBjb25zdHJ1Y3RlZCBvYmplY3QuIEl0IGlzIG5vdCBjbG9uZWQuXG4gKiBJZiBubyBkYXRhIGlzIHByb3ZpZGVkLCB0aGUgY29uc3RydWN0ZWQgb2JqZWN0IHdpbGwgYmUgZW1wdHksIGJ1dCBzdGlsbFxuICogdmFsaWQuXG4gKiBAZXh0ZW5kcyB7anNwYi5NZXNzYWdlfVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdCA9IGZ1bmN0aW9uKG9wdF9kYXRhKSB7XG4gIGpzcGIuTWVzc2FnZS5pbml0aWFsaXplKHRoaXMsIG9wdF9kYXRhLCAwLCAtMSwgcHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0LnJlcGVhdGVkRmllbGRzXywgbnVsbCk7XG59O1xuZ29vZy5pbmhlcml0cyhwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QsIGpzcGIuTWVzc2FnZSk7XG5pZiAoZ29vZy5ERUJVRyAmJiAhQ09NUElMRUQpIHtcbiAgLyoqXG4gICAqIEBwdWJsaWNcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QuZGlzcGxheU5hbWUgPSAncHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0Jztcbn1cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcEVuZENhbGxSZXF1ZXN0LnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG5oYXJkSGFuZ3VwOiBqc3BiLk1lc3NhZ2UuZ2V0Qm9vbGVhbkZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBmYWxzZSlcbiAgfTtcblxuICBpZiAoaW5jbHVkZUluc3RhbmNlKSB7XG4gICAgb2JqLiRqc3BiTWVzc2FnZUluc3RhbmNlID0gbXNnO1xuICB9XG4gIHJldHVybiBvYmo7XG59O1xufVxuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcGFyYW0ge2pzcGIuQnl0ZVNvdXJjZX0gYnl0ZXMgVGhlIGJ5dGVzIHRvIGRlc2VyaWFsaXplLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3R9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5vbmRld28uc2lwLlNpcEVuZENhbGxSZXF1ZXN0O1xuICByZXR1cm4gcHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdC5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcEVuZENhbGxSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3R9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKHJlYWRlci5yZWFkQm9vbCgpKTtcbiAgICAgIG1zZy5zZXRIYXJkSGFuZ3VwKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3R9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0SGFyZEhhbmd1cCgpO1xuICBpZiAoZikge1xuICAgIHdyaXRlci53cml0ZUJvb2woXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBib29sIGhhcmRfaGFuZ3VwID0gMTtcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwRW5kQ2FsbFJlcXVlc3QucHJvdG90eXBlLmdldEhhcmRIYW5ndXAgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7Ym9vbGVhbn0gKi8gKGpzcGIuTWVzc2FnZS5nZXRCb29sZWFuRmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBmYWxzZSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcEVuZENhbGxSZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBFbmRDYWxsUmVxdWVzdC5wcm90b3R5cGUuc2V0SGFyZEhhbmd1cCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zQm9vbGVhbkZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3QucHJvdG90eXBlLnRvT2JqZWN0ID0gZnVuY3Rpb24ob3B0X2luY2x1ZGVJbnN0YW5jZSkge1xuICByZXR1cm4gcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0LnRvT2JqZWN0KG9wdF9pbmNsdWRlSW5zdGFuY2UsIHRoaXMpO1xufTtcblxuXG4vKipcbiAqIFN0YXRpYyB2ZXJzaW9uIG9mIHRoZSB7QHNlZSB0b09iamVjdH0gbWV0aG9kLlxuICogQHBhcmFtIHtib29sZWFufHVuZGVmaW5lZH0gaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIFdoZXRoZXIgdG8gaW5jbHVkZVxuICogICAgIHRoZSBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0fSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3QudG9PYmplY3QgPSBmdW5jdGlvbihpbmNsdWRlSW5zdGFuY2UsIG1zZykge1xuICB2YXIgZiwgb2JqID0ge1xuY2FsbGVlSWQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgXCJcIiksXG5oZWFkZXJzTWFwOiAoZiA9IG1zZy5nZXRIZWFkZXJzTWFwKCkpID8gZi50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIHVuZGVmaW5lZCkgOiBbXVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3Q7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRDYWxsUmVxdWVzdH1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldENhbGxlZUlkKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IG1zZy5nZXRIZWFkZXJzTWFwKCk7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsIGZ1bmN0aW9uKG1lc3NhZ2UsIHJlYWRlcikge1xuICAgICAgICBqc3BiLk1hcC5kZXNlcmlhbGl6ZUJpbmFyeShtZXNzYWdlLCByZWFkZXIsIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nLCBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZFN0cmluZywgbnVsbCwgXCJcIiwgXCJcIik7XG4gICAgICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0LnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0Q2FsbFJlcXVlc3R9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRDYWxsZWVJZCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEhlYWRlcnNNYXAodHJ1ZSk7XG4gIGlmIChmICYmIGYuZ2V0TGVuZ3RoKCkgPiAwKSB7XG4gICAgZi5zZXJpYWxpemVCaW5hcnkoMiwgd3JpdGVyLCBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVTdHJpbmcsIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZVN0cmluZyk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgY2FsbGVlX2lkID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0LnByb3RvdHlwZS5nZXRDYWxsZWVJZCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydENhbGxSZXF1ZXN0LnByb3RvdHlwZS5zZXRDYWxsZWVJZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG1hcDxzdHJpbmcsIHN0cmluZz4gaGVhZGVycyA9IDI7XG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfbm9MYXp5Q3JlYXRlIERvIG5vdCBjcmVhdGUgdGhlIG1hcCBpZlxuICogZW1wdHksIGluc3RlYWQgcmV0dXJuaW5nIGB1bmRlZmluZWRgXG4gKiBAcmV0dXJuIHshanNwYi5NYXA8c3RyaW5nLHN0cmluZz59XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRDYWxsUmVxdWVzdC5wcm90b3R5cGUuZ2V0SGVhZGVyc01hcCA9IGZ1bmN0aW9uKG9wdF9ub0xhenlDcmVhdGUpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IWpzcGIuTWFwPHN0cmluZyxzdHJpbmc+fSAqLyAoXG4gICAgICBqc3BiLk1lc3NhZ2UuZ2V0TWFwRmllbGQodGhpcywgMiwgb3B0X25vTGF6eUNyZWF0ZSxcbiAgICAgIG51bGwpKTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdmFsdWVzIGZyb20gdGhlIG1hcC4gVGhlIG1hcCB3aWxsIGJlIG5vbi1udWxsLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRDYWxsUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRDYWxsUmVxdWVzdC5wcm90b3R5cGUuY2xlYXJIZWFkZXJzTWFwID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0SGVhZGVyc01hcCgpLmNsZWFyKCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3R9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG5hY2NvdW50TmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBcIlwiKSxcbnBhc3N3b3JkOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDIsIFwiXCIpLFxuYXV0aFVzZXJuYW1lOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIFwiXCIpLFxub3V0Ym91bmRQcm94eToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCA0LCBcIlwiKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3Q7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdH1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEFjY291bnROYW1lKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0UGFzc3dvcmQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRBdXRoVXNlcm5hbWUodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA0OlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRPdXRib3VuZFByb3h5KHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZWFkZXIuc2tpcEZpZWxkKCk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIG1zZztcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkuXG4gKiBAcmV0dXJuIHshVWludDhBcnJheX1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0LnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3R9IG1lc3NhZ2VcbiAqIEBwYXJhbSB7IWpzcGIuQmluYXJ5V3JpdGVyfSB3cml0ZXJcbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRBY2NvdW50TmFtZSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFBhc3N3b3JkKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0QXV0aFVzZXJuYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0T3V0Ym91bmRQcm94eSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgNCxcbiAgICAgIGZcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIGFjY291bnRfbmFtZSA9IDE7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdC5wcm90b3R5cGUuZ2V0QWNjb3VudE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMSwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdC5wcm90b3R5cGUuc2V0QWNjb3VudE5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgcGFzc3dvcmQgPSAyO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QucHJvdG90eXBlLmdldFBhc3N3b3JkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDIsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QucHJvdG90eXBlLnNldFBhc3N3b3JkID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIGF1dGhfdXNlcm5hbWUgPSAzO1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QucHJvdG90eXBlLmdldEF1dGhVc2VybmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAzLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBSZWdpc3RlckFjY291bnRSZXF1ZXN0LnByb3RvdHlwZS5zZXRBdXRoVXNlcm5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgb3V0Ym91bmRfcHJveHkgPSA0O1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFJlZ2lzdGVyQWNjb3VudFJlcXVlc3QucHJvdG90eXBlLmdldE91dGJvdW5kUHJveHkgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgNCwgXCJcIikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUmVnaXN0ZXJBY2NvdW50UmVxdWVzdC5wcm90b3R5cGUuc2V0T3V0Ym91bmRQcm94eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgNCwgdmFsdWUpO1xufTtcblxuXG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3QudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3R9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG5hY2NvdW50TmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBcIlwiKSxcbmF1dG9BbnN3ZXJJbnRlcnZhbDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAyLCAwKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3Q7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdH1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEFjY291bnROYW1lKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAocmVhZGVyLnJlYWRJbnQzMigpKTtcbiAgICAgIG1zZy5zZXRBdXRvQW5zd2VySW50ZXJ2YWwodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3QucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXJ0U2Vzc2lvblJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldEFjY291bnROYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0QXV0b0Fuc3dlckludGVydmFsKCk7XG4gIGlmIChmICE9PSAwKSB7XG4gICAgd3JpdGVyLndyaXRlSW50MzIoXG4gICAgICAyLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgYWNjb3VudF9uYW1lID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0LnByb3RvdHlwZS5nZXRBY2NvdW50TmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0LnByb3RvdHlwZS5zZXRBY2NvdW50TmFtZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIGludDMyIGF1dG9fYW5zd2VyX2ludGVydmFsID0gMjtcbiAqIEByZXR1cm4ge251bWJlcn1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGFydFNlc3Npb25SZXF1ZXN0LnByb3RvdHlwZS5nZXRBdXRvQW5zd2VySW50ZXJ2YWwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7bnVtYmVyfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMiwgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdH0gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhcnRTZXNzaW9uUmVxdWVzdC5wcm90b3R5cGUuc2V0QXV0b0Fuc3dlckludGVydmFsID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNJbnRGaWVsZCh0aGlzLCAyLCB2YWx1ZSk7XG59O1xuXG5cblxuXG5cbmlmIChqc3BiLk1lc3NhZ2UuR0VORVJBVEVfVE9fT0JKRUNUKSB7XG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uIG9mIHRoaXMgcHJvdG8uXG4gKiBGaWVsZCBuYW1lcyB0aGF0IGFyZSByZXNlcnZlZCBpbiBKYXZhU2NyaXB0IGFuZCB3aWxsIGJlIHJlbmFtZWQgdG8gcGJfbmFtZS5cbiAqIE9wdGlvbmFsIGZpZWxkcyB0aGF0IGFyZSBub3Qgc2V0IHdpbGwgYmUgc2V0IHRvIHVuZGVmaW5lZC5cbiAqIFRvIGFjY2VzcyBhIHJlc2VydmVkIGZpZWxkIHVzZSwgZm9vLnBiXzxuYW1lPiwgZWcsIGZvby5wYl9kZWZhdWx0LlxuICogRm9yIHRoZSBsaXN0IG9mIHJlc2VydmVkIG5hbWVzIHBsZWFzZSBzZWU6XG4gKiAgICAgbmV0L3Byb3RvMi9jb21waWxlci9qcy9pbnRlcm5hbC9nZW5lcmF0b3IuY2Mja0tleXdvcmQuXG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfaW5jbHVkZUluc3RhbmNlIERlcHJlY2F0ZWQuIHdoZXRoZXIgdG8gaW5jbHVkZSB0aGVcbiAqICAgICBKU1BCIGluc3RhbmNlIGZvciB0cmFuc2l0aW9uYWwgc295IHByb3RvIHN1cHBvcnQ6XG4gKiAgICAgaHR0cDovL2dvdG8vc295LXBhcmFtLW1pZ3JhdGlvblxuICogQHJldHVybiB7IU9iamVjdH1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0LnByb3RvdHlwZS50b09iamVjdCA9IGZ1bmN0aW9uKG9wdF9pbmNsdWRlSW5zdGFuY2UpIHtcbiAgcmV0dXJuIHByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdC50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdH0gbXNnIFRoZSBtc2cgaW5zdGFuY2UgdG8gdHJhbnNmb3JtLlxuICogQHJldHVybiB7IU9iamVjdH1cbiAqIEBzdXBwcmVzcyB7dW51c2VkTG9jYWxWYXJpYWJsZXN9IGYgaXMgb25seSB1c2VkIGZvciBuZXN0ZWQgbWVzc2FnZXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0LnRvT2JqZWN0ID0gZnVuY3Rpb24oaW5jbHVkZUluc3RhbmNlLCBtc2cpIHtcbiAgdmFyIGYsIG9iaiA9IHtcbnRyYW5zZmVySWQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMSwgXCJcIiksXG5oZWFkZXJzTWFwOiAoZiA9IG1zZy5nZXRIZWFkZXJzTWFwKCkpID8gZi50b09iamVjdChpbmNsdWRlSW5zdGFuY2UsIHVuZGVmaW5lZCkgOiBbXVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3Q7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdH1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldFRyYW5zZmVySWQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyOlxuICAgICAgdmFyIHZhbHVlID0gbXNnLmdldEhlYWRlcnNNYXAoKTtcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSwgZnVuY3Rpb24obWVzc2FnZSwgcmVhZGVyKSB7XG4gICAgICAgIGpzcGIuTWFwLmRlc2VyaWFsaXplQmluYXJ5KG1lc3NhZ2UsIHJlYWRlciwganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRTdHJpbmcsIGpzcGIuQmluYXJ5UmVhZGVyLnByb3RvdHlwZS5yZWFkU3RyaW5nLCBudWxsLCBcIlwiLCBcIlwiKTtcbiAgICAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QucHJvdG90eXBlLnNlcmlhbGl6ZUJpbmFyeSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgd3JpdGVyID0gbmV3IGpzcGIuQmluYXJ5V3JpdGVyKCk7XG4gIHByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwVHJhbnNmZXJDYWxsUmVxdWVzdH0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3Quc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIgPSBmdW5jdGlvbihtZXNzYWdlLCB3cml0ZXIpIHtcbiAgdmFyIGYgPSB1bmRlZmluZWQ7XG4gIGYgPSBtZXNzYWdlLmdldFRyYW5zZmVySWQoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDEsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRIZWFkZXJzTWFwKHRydWUpO1xuICBpZiAoZiAmJiBmLmdldExlbmd0aCgpID4gMCkge1xuICAgIGYuc2VyaWFsaXplQmluYXJ5KDIsIHdyaXRlciwganNwYi5CaW5hcnlXcml0ZXIucHJvdG90eXBlLndyaXRlU3RyaW5nLCBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVTdHJpbmcpO1xuICB9XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIHRyYW5zZmVyX2lkID0gMTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBUcmFuc2ZlckNhbGxSZXF1ZXN0LnByb3RvdHlwZS5nZXRUcmFuc2ZlcklkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QucHJvdG90eXBlLnNldFRyYW5zZmVySWQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBtYXA8c3RyaW5nLCBzdHJpbmc+IGhlYWRlcnMgPSAyO1xuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X25vTGF6eUNyZWF0ZSBEbyBub3QgY3JlYXRlIHRoZSBtYXAgaWZcbiAqIGVtcHR5LCBpbnN0ZWFkIHJldHVybmluZyBgdW5kZWZpbmVkYFxuICogQHJldHVybiB7IWpzcGIuTWFwPHN0cmluZyxzdHJpbmc+fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QucHJvdG90eXBlLmdldEhlYWRlcnNNYXAgPSBmdW5jdGlvbihvcHRfbm9MYXp5Q3JlYXRlKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFqc3BiLk1hcDxzdHJpbmcsc3RyaW5nPn0gKi8gKFxuICAgICAganNwYi5NZXNzYWdlLmdldE1hcEZpZWxkKHRoaXMsIDIsIG9wdF9ub0xhenlDcmVhdGUsXG4gICAgICBudWxsKSk7XG59O1xuXG5cbi8qKlxuICogQ2xlYXJzIHZhbHVlcyBmcm9tIHRoZSBtYXAuIFRoZSBtYXAgd2lsbCBiZSBub24tbnVsbC5cbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFRyYW5zZmVyQ2FsbFJlcXVlc3QucHJvdG90eXBlLmNsZWFySGVhZGVyc01hcCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmdldEhlYWRlcnNNYXAoKS5jbGVhcigpO1xuICByZXR1cm4gdGhpcztcbn07XG5cblxuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG5hY2NvdW50TmFtZToganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCAxLCBcIlwiKSxcbnRpbWVzdGFtcDogKGYgPSBtc2cuZ2V0VGltZXN0YW1wKCkpICYmIGdvb2dsZV9wcm90b2J1Zl90aW1lc3RhbXBfcGIuVGltZXN0YW1wLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgZiksXG5zdGF0dXNUeXBlOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDMsIDApLFxuY2FsbGVlSWQ6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgNCwgXCJcIiksXG50cmFuc2ZlckNhbGxJZDoganNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQobXNnLCA1LCBcIlwiKSxcbmhlYWRlcnNNYXA6IChmID0gbXNnLmdldEhlYWRlcnNNYXAoKSkgPyBmLnRvT2JqZWN0KGluY2x1ZGVJbnN0YW5jZSwgdW5kZWZpbmVkKSA6IFtdLFxuZGVzY3JpcHRpb246IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgNywgXCJcIiksXG5leGNlcHRpb25OYW1lOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDgsIFwiXCIpLFxuZXhjZXB0aW9uVHJhY2ViYWNrOiBqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdChtc2csIDksIFwiXCIpLFxubmx1U2Vzc2lvbk5hbWU6IGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KG1zZywgMTAsIFwiXCIpXG4gIH07XG5cbiAgaWYgKGluY2x1ZGVJbnN0YW5jZSkge1xuICAgIG9iai4kanNwYk1lc3NhZ2VJbnN0YW5jZSA9IG1zZztcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcbn1cblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHBhcmFtIHtqc3BiLkJ5dGVTb3VyY2V9IGJ5dGVzIFRoZSBieXRlcyB0byBkZXNlcmlhbGl6ZS5cbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c31cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cztcbiAgcmV0dXJuIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlcihtc2csIHJlYWRlcik7XG59O1xuXG5cbi8qKlxuICogRGVzZXJpYWxpemVzIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlIGZvcm1hdCkgZnJvbSB0aGVcbiAqIGdpdmVuIHJlYWRlciBpbnRvIHRoZSBnaXZlbiBtZXNzYWdlIG9iamVjdC5cbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzfSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzfVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIgPSBmdW5jdGlvbihtc2csIHJlYWRlcikge1xuICB3aGlsZSAocmVhZGVyLm5leHRGaWVsZCgpKSB7XG4gICAgaWYgKHJlYWRlci5pc0VuZEdyb3VwKCkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB2YXIgZmllbGQgPSByZWFkZXIuZ2V0RmllbGROdW1iZXIoKTtcbiAgICBzd2l0Y2ggKGZpZWxkKSB7XG4gICAgY2FzZSAxOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRBY2NvdW50TmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDI6XG4gICAgICB2YXIgdmFsdWUgPSBuZXcgZ29vZ2xlX3Byb3RvYnVmX3RpbWVzdGFtcF9wYi5UaW1lc3RhbXA7XG4gICAgICByZWFkZXIucmVhZE1lc3NhZ2UodmFsdWUsZ29vZ2xlX3Byb3RvYnVmX3RpbWVzdGFtcF9wYi5UaW1lc3RhbXAuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKTtcbiAgICAgIG1zZy5zZXRUaW1lc3RhbXAodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMuU3RhdHVzVHlwZX0gKi8gKHJlYWRlci5yZWFkRW51bSgpKTtcbiAgICAgIG1zZy5zZXRTdGF0dXNUeXBlKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNDpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0Q2FsbGVlSWQodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1OlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRUcmFuc2ZlckNhbGxJZCh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDY6XG4gICAgICB2YXIgdmFsdWUgPSBtc2cuZ2V0SGVhZGVyc01hcCgpO1xuICAgICAgcmVhZGVyLnJlYWRNZXNzYWdlKHZhbHVlLCBmdW5jdGlvbihtZXNzYWdlLCByZWFkZXIpIHtcbiAgICAgICAganNwYi5NYXAuZGVzZXJpYWxpemVCaW5hcnkobWVzc2FnZSwgcmVhZGVyLCBqc3BiLkJpbmFyeVJlYWRlci5wcm90b3R5cGUucmVhZFN0cmluZywganNwYi5CaW5hcnlSZWFkZXIucHJvdG90eXBlLnJlYWRTdHJpbmcsIG51bGwsIFwiXCIsIFwiXCIpO1xuICAgICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldERlc2NyaXB0aW9uKHZhbHVlKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODpcbiAgICAgIHZhciB2YWx1ZSA9IC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAocmVhZGVyLnJlYWRTdHJpbmcoKSk7XG4gICAgICBtc2cuc2V0RXhjZXB0aW9uTmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDk6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUge3N0cmluZ30gKi8gKHJlYWRlci5yZWFkU3RyaW5nKCkpO1xuICAgICAgbXNnLnNldEV4Y2VwdGlvblRyYWNlYmFjayh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDEwOlxuICAgICAgdmFyIHZhbHVlID0gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChyZWFkZXIucmVhZFN0cmluZygpKTtcbiAgICAgIG1zZy5zZXRObHVTZXNzaW9uTmFtZSh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnByb3RvdHlwZS5zZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbigpIHtcbiAgdmFyIHdyaXRlciA9IG5ldyBqc3BiLkJpbmFyeVdyaXRlcigpO1xuICBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5zZXJpYWxpemVCaW5hcnlUb1dyaXRlcih0aGlzLCB3cml0ZXIpO1xuICByZXR1cm4gd3JpdGVyLmdldFJlc3VsdEJ1ZmZlcigpO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIGdpdmVuIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmVcbiAqIGZvcm1hdCksIHdyaXRpbmcgdG8gdGhlIGdpdmVuIEJpbmFyeVdyaXRlci5cbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzfSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyID0gZnVuY3Rpb24obWVzc2FnZSwgd3JpdGVyKSB7XG4gIHZhciBmID0gdW5kZWZpbmVkO1xuICBmID0gbWVzc2FnZS5nZXRBY2NvdW50TmFtZSgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgMSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFRpbWVzdGFtcCgpO1xuICBpZiAoZiAhPSBudWxsKSB7XG4gICAgd3JpdGVyLndyaXRlTWVzc2FnZShcbiAgICAgIDIsXG4gICAgICBmLFxuICAgICAgZ29vZ2xlX3Byb3RvYnVmX3RpbWVzdGFtcF9wYi5UaW1lc3RhbXAuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldFN0YXR1c1R5cGUoKTtcbiAgaWYgKGYgIT09IDAuMCkge1xuICAgIHdyaXRlci53cml0ZUVudW0oXG4gICAgICAzLFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0Q2FsbGVlSWQoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDQsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRUcmFuc2ZlckNhbGxJZCgpO1xuICBpZiAoZi5sZW5ndGggPiAwKSB7XG4gICAgd3JpdGVyLndyaXRlU3RyaW5nKFxuICAgICAgNSxcbiAgICAgIGZcbiAgICApO1xuICB9XG4gIGYgPSBtZXNzYWdlLmdldEhlYWRlcnNNYXAodHJ1ZSk7XG4gIGlmIChmICYmIGYuZ2V0TGVuZ3RoKCkgPiAwKSB7XG4gICAgZi5zZXJpYWxpemVCaW5hcnkoNiwgd3JpdGVyLCBqc3BiLkJpbmFyeVdyaXRlci5wcm90b3R5cGUud3JpdGVTdHJpbmcsIGpzcGIuQmluYXJ5V3JpdGVyLnByb3RvdHlwZS53cml0ZVN0cmluZyk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0RGVzY3JpcHRpb24oKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDcsXG4gICAgICBmXG4gICAgKTtcbiAgfVxuICBmID0gbWVzc2FnZS5nZXRFeGNlcHRpb25OYW1lKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICA4LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0RXhjZXB0aW9uVHJhY2ViYWNrKCk7XG4gIGlmIChmLmxlbmd0aCA+IDApIHtcbiAgICB3cml0ZXIud3JpdGVTdHJpbmcoXG4gICAgICA5LFxuICAgICAgZlxuICAgICk7XG4gIH1cbiAgZiA9IG1lc3NhZ2UuZ2V0Tmx1U2Vzc2lvbk5hbWUoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVN0cmluZyhcbiAgICAgIDEwLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5TdGF0dXNUeXBlID0ge1xuICBOT19TRVNTSU9OOiAwLFxuICBSRUdJU1RFUkVEOiAxLFxuICBSRUFEWTogMixcbiAgSU5DT01JTkdfQ0FMTF9JTklUSUFURUQ6IDMsXG4gIE9VVEdPSU5HX0NBTExfSU5JVElBVEVEOiA0LFxuICBPVVRHT0lOR19DQUxMX0NPTk5FQ1RFRDogNSxcbiAgSU5DT01JTkdfQ0FMTF9DT05ORUNURUQ6IDYsXG4gIFRSQU5TRkVSX0NBTExfSU5JVElBVEVEOiA3LFxuICBTT0ZUX0hBTkdVUF9JTklUSUFURUQ6IDgsXG4gIEhBUkRfSEFOR1VQX0lOSVRJQVRFRDogOSxcbiAgSU5DT01JTkdfQ0FMTF9GQUlMRUQ6IDEwLFxuICBPVVRHT0lOR19DQUxMX0ZBSUxFRDogMTEsXG4gIElOQ09NSU5HX0NBTExfRklOSVNIRUQ6IDEyLFxuICBPVVRHT0lOR19DQUxMX0ZJTklTSEVEOiAxMyxcbiAgU0VTU0lPTl9SRUdJU1RSQVRJT05fRkFJTEVEOiAxNCxcbiAgU0VTU0lPTl9TVEFSVEVEOiAxNSxcbiAgU0VTU0lPTl9FTkRFRDogMTYsXG4gIFRSQU5TRkVSX0NBTExfRkFJTEVEOiAxNyxcbiAgTUlDUk9QSE9ORV9NVVRFRDogMTgsXG4gIE1JQ1JPUEhPTkVfVU5NVVRFRDogMTksXG4gIE1JQ1JPUEhPTkVfV0FWX0ZJTEVTX1BMQVlFRDogMjAsXG4gIE5PX09OR09JTkdfQ0FMTDogMjFcbn07XG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIGFjY291bnRfbmFtZSA9IDE7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnByb3RvdHlwZS5nZXRBY2NvdW50TmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCAxLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuc2V0QWNjb3VudE5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBnb29nbGUucHJvdG9idWYuVGltZXN0YW1wIHRpbWVzdGFtcCA9IDI7XG4gKiBAcmV0dXJuIHs/cHJvdG8uZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcH1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMucHJvdG90eXBlLmdldFRpbWVzdGFtcCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlez9wcm90by5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wfSAqLyAoXG4gICAganNwYi5NZXNzYWdlLmdldFdyYXBwZXJGaWVsZCh0aGlzLCBnb29nbGVfcHJvdG9idWZfdGltZXN0YW1wX3BiLlRpbWVzdGFtcCwgMikpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7P3Byb3RvLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXB8dW5kZWZpbmVkfSB2YWx1ZVxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzfSByZXR1cm5zIHRoaXNcbiovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuc2V0VGltZXN0YW1wID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRXcmFwcGVyRmllbGQodGhpcywgMiwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIENsZWFycyB0aGUgbWVzc2FnZSBmaWVsZCBtYWtpbmcgaXQgdW5kZWZpbmVkLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMucHJvdG90eXBlLmNsZWFyVGltZXN0YW1wID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldFRpbWVzdGFtcCh1bmRlZmluZWQpO1xufTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciB0aGlzIGZpZWxkIGlzIHNldC5cbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnByb3RvdHlwZS5oYXNUaW1lc3RhbXAgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5nZXRGaWVsZCh0aGlzLCAyKSAhPSBudWxsO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIFN0YXR1c1R5cGUgc3RhdHVzX3R5cGUgPSAzO1xuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLlN0YXR1c1R5cGV9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnByb3RvdHlwZS5nZXRTdGF0dXNUeXBlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5TdGF0dXNUeXBlfSAqLyAoanNwYi5NZXNzYWdlLmdldEZpZWxkV2l0aERlZmF1bHQodGhpcywgMywgMCkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLlN0YXR1c1R5cGV9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuc2V0U3RhdHVzVHlwZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zRW51bUZpZWxkKHRoaXMsIDMsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgY2FsbGVlX2lkID0gNDtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMucHJvdG90eXBlLmdldENhbGxlZUlkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDQsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c30gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnByb3RvdHlwZS5zZXRDYWxsZWVJZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgNCwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyB0cmFuc2Zlcl9jYWxsX2lkID0gNTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMucHJvdG90eXBlLmdldFRyYW5zZmVyQ2FsbElkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDUsIFwiXCIpKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWVcbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c30gcmV0dXJucyB0aGlzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnByb3RvdHlwZS5zZXRUcmFuc2ZlckNhbGxJZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgNSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG1hcDxzdHJpbmcsIHN0cmluZz4gaGVhZGVycyA9IDY7XG4gKiBAcGFyYW0ge2Jvb2xlYW49fSBvcHRfbm9MYXp5Q3JlYXRlIERvIG5vdCBjcmVhdGUgdGhlIG1hcCBpZlxuICogZW1wdHksIGluc3RlYWQgcmV0dXJuaW5nIGB1bmRlZmluZWRgXG4gKiBAcmV0dXJuIHshanNwYi5NYXA8c3RyaW5nLHN0cmluZz59XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnByb3RvdHlwZS5nZXRIZWFkZXJzTWFwID0gZnVuY3Rpb24ob3B0X25vTGF6eUNyZWF0ZSkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshanNwYi5NYXA8c3RyaW5nLHN0cmluZz59ICovIChcbiAgICAgIGpzcGIuTWVzc2FnZS5nZXRNYXBGaWVsZCh0aGlzLCA2LCBvcHRfbm9MYXp5Q3JlYXRlLFxuICAgICAgbnVsbCkpO1xufTtcblxuXG4vKipcbiAqIENsZWFycyB2YWx1ZXMgZnJvbSB0aGUgbWFwLiBUaGUgbWFwIHdpbGwgYmUgbm9uLW51bGwuXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuY2xlYXJIZWFkZXJzTWFwID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZ2V0SGVhZGVyc01hcCgpLmNsZWFyKCk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBkZXNjcmlwdGlvbiA9IDc7XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLnByb3RvdHlwZS5nZXREZXNjcmlwdGlvbiA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA3LCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuc2V0RGVzY3JpcHRpb24gPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDcsIHZhbHVlKTtcbn07XG5cblxuLyoqXG4gKiBvcHRpb25hbCBzdHJpbmcgZXhjZXB0aW9uX25hbWUgPSA4O1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuZ2V0RXhjZXB0aW9uTmFtZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA4LCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuc2V0RXhjZXB0aW9uTmFtZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UHJvdG8zU3RyaW5nRmllbGQodGhpcywgOCwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIG9wdGlvbmFsIHN0cmluZyBleGNlcHRpb25fdHJhY2ViYWNrID0gOTtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMucHJvdG90eXBlLmdldEV4Y2VwdGlvblRyYWNlYmFjayA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChqc3BiLk1lc3NhZ2UuZ2V0RmllbGRXaXRoRGVmYXVsdCh0aGlzLCA5LCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuc2V0RXhjZXB0aW9uVHJhY2ViYWNrID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgcmV0dXJuIGpzcGIuTWVzc2FnZS5zZXRQcm90bzNTdHJpbmdGaWVsZCh0aGlzLCA5LCB2YWx1ZSk7XG59O1xuXG5cbi8qKlxuICogb3B0aW9uYWwgc3RyaW5nIG5sdV9zZXNzaW9uX25hbWUgPSAxMDtcbiAqIEByZXR1cm4ge3N0cmluZ31cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMucHJvdG90eXBlLmdldE5sdVNlc3Npb25OYW1lID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUge3N0cmluZ30gKi8gKGpzcGIuTWVzc2FnZS5nZXRGaWVsZFdpdGhEZWZhdWx0KHRoaXMsIDEwLCBcIlwiKSk7XG59O1xuXG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXN9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5wcm90b3R5cGUuc2V0Tmx1U2Vzc2lvbk5hbWUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldFByb3RvM1N0cmluZ0ZpZWxkKHRoaXMsIDEwLCB2YWx1ZSk7XG59O1xuXG5cblxuLyoqXG4gKiBMaXN0IG9mIHJlcGVhdGVkIGZpZWxkcyB3aXRoaW4gdGhpcyBtZXNzYWdlIHR5cGUuXG4gKiBAcHJpdmF0ZSB7IUFycmF5PG51bWJlcj59XG4gKiBAY29uc3RcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2UucmVwZWF0ZWRGaWVsZHNfID0gWzFdO1xuXG5cblxuaWYgKGpzcGIuTWVzc2FnZS5HRU5FUkFURV9UT19PQkpFQ1QpIHtcbi8qKlxuICogQ3JlYXRlcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24gb2YgdGhpcyBwcm90by5cbiAqIEZpZWxkIG5hbWVzIHRoYXQgYXJlIHJlc2VydmVkIGluIEphdmFTY3JpcHQgYW5kIHdpbGwgYmUgcmVuYW1lZCB0byBwYl9uYW1lLlxuICogT3B0aW9uYWwgZmllbGRzIHRoYXQgYXJlIG5vdCBzZXQgd2lsbCBiZSBzZXQgdG8gdW5kZWZpbmVkLlxuICogVG8gYWNjZXNzIGEgcmVzZXJ2ZWQgZmllbGQgdXNlLCBmb28ucGJfPG5hbWU+LCBlZywgZm9vLnBiX2RlZmF1bHQuXG4gKiBGb3IgdGhlIGxpc3Qgb2YgcmVzZXJ2ZWQgbmFtZXMgcGxlYXNlIHNlZTpcbiAqICAgICBuZXQvcHJvdG8yL2NvbXBpbGVyL2pzL2ludGVybmFsL2dlbmVyYXRvci5jYyNrS2V5d29yZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdF9pbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gd2hldGhlciB0byBpbmNsdWRlIHRoZVxuICogICAgIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS50b09iamVjdChvcHRfaW5jbHVkZUluc3RhbmNlLCB0aGlzKTtcbn07XG5cblxuLyoqXG4gKiBTdGF0aWMgdmVyc2lvbiBvZiB0aGUge0BzZWUgdG9PYmplY3R9IG1ldGhvZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGluY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiBXaGV0aGVyIHRvIGluY2x1ZGVcbiAqICAgICB0aGUgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlfSBtc2cgVGhlIG1zZyBpbnN0YW5jZSB0byB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJuIHshT2JqZWN0fVxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG5zdGF0dXNIaXN0b3J5TGlzdDoganNwYi5NZXNzYWdlLnRvT2JqZWN0TGlzdChtc2cuZ2V0U3RhdHVzSGlzdG9yeUxpc3QoKSxcbiAgICBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy50b09iamVjdCwgaW5jbHVkZUluc3RhbmNlKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2V9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlLmRlc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oYnl0ZXMpIHtcbiAgdmFyIHJlYWRlciA9IG5ldyBqc3BiLkJpbmFyeVJlYWRlcihieXRlcyk7XG4gIHZhciBtc2cgPSBuZXcgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2U7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIobXNnLCByZWFkZXIpO1xufTtcblxuXG4vKipcbiAqIERlc2VyaWFsaXplcyBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpIGZyb20gdGhlXG4gKiBnaXZlbiByZWFkZXIgaW50byB0aGUgZ2l2ZW4gbWVzc2FnZSBvYmplY3QuXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZX0gbXNnIFRoZSBtZXNzYWdlIG9iamVjdCB0byBkZXNlcmlhbGl6ZSBpbnRvLlxuICogQHBhcmFtIHshanNwYi5CaW5hcnlSZWFkZXJ9IHJlYWRlciBUaGUgQmluYXJ5UmVhZGVyIHRvIHVzZS5cbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZX1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2UuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyID0gZnVuY3Rpb24obXNnLCByZWFkZXIpIHtcbiAgd2hpbGUgKHJlYWRlci5uZXh0RmllbGQoKSkge1xuICAgIGlmIChyZWFkZXIuaXNFbmRHcm91cCgpKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgdmFyIGZpZWxkID0gcmVhZGVyLmdldEZpZWxkTnVtYmVyKCk7XG4gICAgc3dpdGNoIChmaWVsZCkge1xuICAgIGNhc2UgMTpcbiAgICAgIHZhciB2YWx1ZSA9IG5ldyBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cztcbiAgICAgIHJlYWRlci5yZWFkTWVzc2FnZSh2YWx1ZSxwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cy5kZXNlcmlhbGl6ZUJpbmFyeUZyb21SZWFkZXIpO1xuICAgICAgbXNnLmFkZFN0YXR1c0hpc3RvcnkodmFsdWUpO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJlYWRlci5za2lwRmllbGQoKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbXNnO1xufTtcblxuXG4vKipcbiAqIFNlcmlhbGl6ZXMgdGhlIG1lc3NhZ2UgdG8gYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEByZXR1cm4geyFVaW50OEFycmF5fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2Uuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXIodGhpcywgd3JpdGVyKTtcbiAgcmV0dXJuIHdyaXRlci5nZXRSZXN1bHRCdWZmZXIoKTtcbn07XG5cblxuLyoqXG4gKiBTZXJpYWxpemVzIHRoZSBnaXZlbiBtZXNzYWdlIHRvIGJpbmFyeSBkYXRhIChpbiBwcm90b2J1ZiB3aXJlXG4gKiBmb3JtYXQpLCB3cml0aW5nIHRvIHRoZSBnaXZlbiBCaW5hcnlXcml0ZXIuXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZX0gbWVzc2FnZVxuICogQHBhcmFtIHshanNwYi5CaW5hcnlXcml0ZXJ9IHdyaXRlclxuICogQHN1cHByZXNzIHt1bnVzZWRMb2NhbFZhcmlhYmxlc30gZiBpcyBvbmx5IHVzZWQgZm9yIG5lc3RlZCBtZXNzYWdlc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0U3RhdHVzSGlzdG9yeUxpc3QoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVJlcGVhdGVkTWVzc2FnZShcbiAgICAgIDEsXG4gICAgICBmLFxuICAgICAgcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXMuc2VyaWFsaXplQmluYXJ5VG9Xcml0ZXJcbiAgICApO1xuICB9XG59O1xuXG5cbi8qKlxuICogcmVwZWF0ZWQgU2lwU3RhdHVzIHN0YXR1c19oaXN0b3J5ID0gMTtcbiAqIEByZXR1cm4geyFBcnJheTwhcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXM+fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS5wcm90b3R5cGUuZ2V0U3RhdHVzSGlzdG9yeUxpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZXshQXJyYXk8IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPn0gKi8gKFxuICAgIGpzcGIuTWVzc2FnZS5nZXRSZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCBwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cywgMSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IUFycmF5PCFwcm90by5vbmRld28uc2lwLlNpcFN0YXR1cz59IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2V9IHJldHVybnMgdGhpc1xuKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlLnByb3RvdHlwZS5zZXRTdGF0dXNIaXN0b3J5TGlzdCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2Uuc2V0UmVwZWF0ZWRXcmFwcGVyRmllbGQodGhpcywgMSwgdmFsdWUpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzPX0gb3B0X3ZhbHVlXG4gKiBAcGFyYW0ge251bWJlcj19IG9wdF9pbmRleFxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzfVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFN0YXR1c0hpc3RvcnlSZXNwb25zZS5wcm90b3R5cGUuYWRkU3RhdHVzSGlzdG9yeSA9IGZ1bmN0aW9uKG9wdF92YWx1ZSwgb3B0X2luZGV4KSB7XG4gIHJldHVybiBqc3BiLk1lc3NhZ2UuYWRkVG9SZXBlYXRlZFdyYXBwZXJGaWVsZCh0aGlzLCAxLCBvcHRfdmFsdWUsIHByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzLCBvcHRfaW5kZXgpO1xufTtcblxuXG4vKipcbiAqIENsZWFycyB0aGUgbGlzdCBtYWtpbmcgaXQgZW1wdHkgYnV0IG5vbi1udWxsLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwU3RhdHVzSGlzdG9yeVJlc3BvbnNlfSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBTdGF0dXNIaXN0b3J5UmVzcG9uc2UucHJvdG90eXBlLmNsZWFyU3RhdHVzSGlzdG9yeUxpc3QgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuc2V0U3RhdHVzSGlzdG9yeUxpc3QoW10pO1xufTtcblxuXG5cbi8qKlxuICogTGlzdCBvZiByZXBlYXRlZCBmaWVsZHMgd2l0aGluIHRoaXMgbWVzc2FnZSB0eXBlLlxuICogQHByaXZhdGUgeyFBcnJheTxudW1iZXI+fVxuICogQGNvbnN0XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdC5yZXBlYXRlZEZpZWxkc18gPSBbMV07XG5cblxuXG5pZiAoanNwYi5NZXNzYWdlLkdFTkVSQVRFX1RPX09CSkVDVCkge1xuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbiBvZiB0aGlzIHByb3RvLlxuICogRmllbGQgbmFtZXMgdGhhdCBhcmUgcmVzZXJ2ZWQgaW4gSmF2YVNjcmlwdCBhbmQgd2lsbCBiZSByZW5hbWVkIHRvIHBiX25hbWUuXG4gKiBPcHRpb25hbCBmaWVsZHMgdGhhdCBhcmUgbm90IHNldCB3aWxsIGJlIHNldCB0byB1bmRlZmluZWQuXG4gKiBUbyBhY2Nlc3MgYSByZXNlcnZlZCBmaWVsZCB1c2UsIGZvby5wYl88bmFtZT4sIGVnLCBmb28ucGJfZGVmYXVsdC5cbiAqIEZvciB0aGUgbGlzdCBvZiByZXNlcnZlZCBuYW1lcyBwbGVhc2Ugc2VlOlxuICogICAgIG5ldC9wcm90bzIvY29tcGlsZXIvanMvaW50ZXJuYWwvZ2VuZXJhdG9yLmNjI2tLZXl3b3JkLlxuICogQHBhcmFtIHtib29sZWFuPX0gb3B0X2luY2x1ZGVJbnN0YW5jZSBEZXByZWNhdGVkLiB3aGV0aGVyIHRvIGluY2x1ZGUgdGhlXG4gKiAgICAgSlNQQiBpbnN0YW5jZSBmb3IgdHJhbnNpdGlvbmFsIHNveSBwcm90byBzdXBwb3J0OlxuICogICAgIGh0dHA6Ly9nb3RvL3NveS1wYXJhbS1taWdyYXRpb25cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdC5wcm90b3R5cGUudG9PYmplY3QgPSBmdW5jdGlvbihvcHRfaW5jbHVkZUluc3RhbmNlKSB7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QudG9PYmplY3Qob3B0X2luY2x1ZGVJbnN0YW5jZSwgdGhpcyk7XG59O1xuXG5cbi8qKlxuICogU3RhdGljIHZlcnNpb24gb2YgdGhlIHtAc2VlIHRvT2JqZWN0fSBtZXRob2QuXG4gKiBAcGFyYW0ge2Jvb2xlYW58dW5kZWZpbmVkfSBpbmNsdWRlSW5zdGFuY2UgRGVwcmVjYXRlZC4gV2hldGhlciB0byBpbmNsdWRlXG4gKiAgICAgdGhlIEpTUEIgaW5zdGFuY2UgZm9yIHRyYW5zaXRpb25hbCBzb3kgcHJvdG8gc3VwcG9ydDpcbiAqICAgICBodHRwOi8vZ290by9zb3ktcGFyYW0tbWlncmF0aW9uXG4gKiBAcGFyYW0geyFwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3R9IG1zZyBUaGUgbXNnIGluc3RhbmNlIHRvIHRyYW5zZm9ybS5cbiAqIEByZXR1cm4geyFPYmplY3R9XG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdC50b09iamVjdCA9IGZ1bmN0aW9uKGluY2x1ZGVJbnN0YW5jZSwgbXNnKSB7XG4gIHZhciBmLCBvYmogPSB7XG53YXZGaWxlc0xpc3Q6IG1zZy5nZXRXYXZGaWxlc0xpc3RfYXNCNjQoKVxuICB9O1xuXG4gIGlmIChpbmNsdWRlSW5zdGFuY2UpIHtcbiAgICBvYmouJGpzcGJNZXNzYWdlSW5zdGFuY2UgPSBtc2c7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG59XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KS5cbiAqIEBwYXJhbSB7anNwYi5CeXRlU291cmNlfSBieXRlcyBUaGUgYnl0ZXMgdG8gZGVzZXJpYWxpemUuXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnkgPSBmdW5jdGlvbihieXRlcykge1xuICB2YXIgcmVhZGVyID0gbmV3IGpzcGIuQmluYXJ5UmVhZGVyKGJ5dGVzKTtcbiAgdmFyIG1zZyA9IG5ldyBwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3Q7XG4gIHJldHVybiBwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QuZGVzZXJpYWxpemVCaW5hcnlGcm9tUmVhZGVyKG1zZywgcmVhZGVyKTtcbn07XG5cblxuLyoqXG4gKiBEZXNlcmlhbGl6ZXMgYmluYXJ5IGRhdGEgKGluIHByb3RvYnVmIHdpcmUgZm9ybWF0KSBmcm9tIHRoZVxuICogZ2l2ZW4gcmVhZGVyIGludG8gdGhlIGdpdmVuIG1lc3NhZ2Ugb2JqZWN0LlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0fSBtc2cgVGhlIG1lc3NhZ2Ugb2JqZWN0IHRvIGRlc2VyaWFsaXplIGludG8uXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVJlYWRlcn0gcmVhZGVyIFRoZSBCaW5hcnlSZWFkZXIgdG8gdXNlLlxuICogQHJldHVybiB7IXByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdH1cbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0LmRlc2VyaWFsaXplQmluYXJ5RnJvbVJlYWRlciA9IGZ1bmN0aW9uKG1zZywgcmVhZGVyKSB7XG4gIHdoaWxlIChyZWFkZXIubmV4dEZpZWxkKCkpIHtcbiAgICBpZiAocmVhZGVyLmlzRW5kR3JvdXAoKSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHZhciBmaWVsZCA9IHJlYWRlci5nZXRGaWVsZE51bWJlcigpO1xuICAgIHN3aXRjaCAoZmllbGQpIHtcbiAgICBjYXNlIDE6XG4gICAgICB2YXIgdmFsdWUgPSAvKiogQHR5cGUgeyFVaW50OEFycmF5fSAqLyAocmVhZGVyLnJlYWRCeXRlcygpKTtcbiAgICAgIG1zZy5hZGRXYXZGaWxlcyh2YWx1ZSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVhZGVyLnNraXBGaWVsZCgpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBtc2c7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZSBmb3JtYXQpLlxuICogQHJldHVybiB7IVVpbnQ4QXJyYXl9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdC5wcm90b3R5cGUuc2VyaWFsaXplQmluYXJ5ID0gZnVuY3Rpb24oKSB7XG4gIHZhciB3cml0ZXIgPSBuZXcganNwYi5CaW5hcnlXcml0ZXIoKTtcbiAgcHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0LnNlcmlhbGl6ZUJpbmFyeVRvV3JpdGVyKHRoaXMsIHdyaXRlcik7XG4gIHJldHVybiB3cml0ZXIuZ2V0UmVzdWx0QnVmZmVyKCk7XG59O1xuXG5cbi8qKlxuICogU2VyaWFsaXplcyB0aGUgZ2l2ZW4gbWVzc2FnZSB0byBiaW5hcnkgZGF0YSAoaW4gcHJvdG9idWYgd2lyZVxuICogZm9ybWF0KSwgd3JpdGluZyB0byB0aGUgZ2l2ZW4gQmluYXJ5V3JpdGVyLlxuICogQHBhcmFtIHshcHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0fSBtZXNzYWdlXG4gKiBAcGFyYW0geyFqc3BiLkJpbmFyeVdyaXRlcn0gd3JpdGVyXG4gKiBAc3VwcHJlc3Mge3VudXNlZExvY2FsVmFyaWFibGVzfSBmIGlzIG9ubHkgdXNlZCBmb3IgbmVzdGVkIG1lc3NhZ2VzXG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdC5zZXJpYWxpemVCaW5hcnlUb1dyaXRlciA9IGZ1bmN0aW9uKG1lc3NhZ2UsIHdyaXRlcikge1xuICB2YXIgZiA9IHVuZGVmaW5lZDtcbiAgZiA9IG1lc3NhZ2UuZ2V0V2F2RmlsZXNMaXN0X2FzVTgoKTtcbiAgaWYgKGYubGVuZ3RoID4gMCkge1xuICAgIHdyaXRlci53cml0ZVJlcGVhdGVkQnl0ZXMoXG4gICAgICAxLFxuICAgICAgZlxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqXG4gKiByZXBlYXRlZCBieXRlcyB3YXZfZmlsZXMgPSAxO1xuICogQHJldHVybiB7IShBcnJheTwhVWludDhBcnJheT58QXJyYXk8c3RyaW5nPil9XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdC5wcm90b3R5cGUuZ2V0V2F2RmlsZXNMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiAvKiogQHR5cGUgeyEoQXJyYXk8IVVpbnQ4QXJyYXk+fEFycmF5PHN0cmluZz4pfSAqLyAoanNwYi5NZXNzYWdlLmdldFJlcGVhdGVkRmllbGQodGhpcywgMSkpO1xufTtcblxuXG4vKipcbiAqIHJlcGVhdGVkIGJ5dGVzIHdhdl9maWxlcyA9IDE7XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRXYXZGaWxlc0xpc3QoKWBcbiAqIEByZXR1cm4geyFBcnJheTxzdHJpbmc+fVxuICovXG5wcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QucHJvdG90eXBlLmdldFdhdkZpbGVzTGlzdF9hc0I2NCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gLyoqIEB0eXBlIHshQXJyYXk8c3RyaW5nPn0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0xpc3RBc0I2NChcbiAgICAgIHRoaXMuZ2V0V2F2RmlsZXNMaXN0KCkpKTtcbn07XG5cblxuLyoqXG4gKiByZXBlYXRlZCBieXRlcyB3YXZfZmlsZXMgPSAxO1xuICogTm90ZSB0aGF0IFVpbnQ4QXJyYXkgaXMgbm90IHN1cHBvcnRlZCBvbiBhbGwgYnJvd3NlcnMuXG4gKiBAc2VlIGh0dHA6Ly9jYW5pdXNlLmNvbS9VaW50OEFycmF5XG4gKiBUaGlzIGlzIGEgdHlwZS1jb252ZXJzaW9uIHdyYXBwZXIgYXJvdW5kIGBnZXRXYXZGaWxlc0xpc3QoKWBcbiAqIEByZXR1cm4geyFBcnJheTwhVWludDhBcnJheT59XG4gKi9cbnByb3RvLm9uZGV3by5zaXAuU2lwUGxheVdhdkZpbGVzUmVxdWVzdC5wcm90b3R5cGUuZ2V0V2F2RmlsZXNMaXN0X2FzVTggPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIC8qKiBAdHlwZSB7IUFycmF5PCFVaW50OEFycmF5Pn0gKi8gKGpzcGIuTWVzc2FnZS5ieXRlc0xpc3RBc1U4KFxuICAgICAgdGhpcy5nZXRXYXZGaWxlc0xpc3QoKSkpO1xufTtcblxuXG4vKipcbiAqIEBwYXJhbSB7IShBcnJheTwhVWludDhBcnJheT58QXJyYXk8c3RyaW5nPil9IHZhbHVlXG4gKiBAcmV0dXJuIHshcHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0fSByZXR1cm5zIHRoaXNcbiAqL1xucHJvdG8ub25kZXdvLnNpcC5TaXBQbGF5V2F2RmlsZXNSZXF1ZXN0LnByb3RvdHlwZS5zZXRXYXZGaWxlc0xpc3QgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLnNldEZpZWxkKHRoaXMsIDEsIHZhbHVlIHx8IFtdKTtcbn07XG5cblxuLyoqXG4gKiBAcGFyYW0geyEoc3RyaW5nfFVpbnQ4QXJyYXkpfSB2YWx1ZVxuICogQHBhcmFtIHtudW1iZXI9fSBvcHRfaW5kZXhcbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QucHJvdG90eXBlLmFkZFdhdkZpbGVzID0gZnVuY3Rpb24odmFsdWUsIG9wdF9pbmRleCkge1xuICByZXR1cm4ganNwYi5NZXNzYWdlLmFkZFRvUmVwZWF0ZWRGaWVsZCh0aGlzLCAxLCB2YWx1ZSwgb3B0X2luZGV4KTtcbn07XG5cblxuLyoqXG4gKiBDbGVhcnMgdGhlIGxpc3QgbWFraW5nIGl0IGVtcHR5IGJ1dCBub24tbnVsbC5cbiAqIEByZXR1cm4geyFwcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3R9IHJldHVybnMgdGhpc1xuICovXG5wcm90by5vbmRld28uc2lwLlNpcFBsYXlXYXZGaWxlc1JlcXVlc3QucHJvdG90eXBlLmNsZWFyV2F2RmlsZXNMaXN0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLnNldFdhdkZpbGVzTGlzdChbXSk7XG59O1xuXG5cbmdvb2cub2JqZWN0LmV4dGVuZChleHBvcnRzLCBwcm90by5vbmRld28uc2lwKTtcbiIsImV4cG9ydCAqIGZyb20gJy4vLi9vbmRld28vc2lwL3NpcF9ncnBjX3dlYl9wYic7XG5leHBvcnQgKiBmcm9tICcuLy4vb25kZXdvL3NpcC9zaXBfcGInO1xuZXhwb3J0ICogZnJvbSAnLi8uL3B1YmxpYy1hcGknO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9wdWJsaWMtYXBpLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
