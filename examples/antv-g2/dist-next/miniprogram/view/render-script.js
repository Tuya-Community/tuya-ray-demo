/* write at: 2022/11/21 14:19:56 */ (function(__appCode__, defineRenderScript, requireRenderScript){
/* sourceFile: components/g2-chart/index.rjs */
defineRenderScript("dist/tuya/components/g2-chart/index.rjs.js", function (require, module, exports, context, global,window,top,document,frames,self,location,navigator,localStorage,history,Caches,screen,alert,confirm,prompt,fetch,XMLHttpRequest,WebSocket,webkit ){ 'use strict'; var getCanvasById = context.getCanvasById; var getSystemInfo = context.getSystemInfo; var getBoundingClientRectById = context.getBoundingClientRectById 
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var index_rjs_exports = {};
__export(index_rjs_exports, {
  default: () => index_rjs_default
});
module.exports = __toCommonJS(index_rjs_exports);
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames2(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var require_runtime_rjs = __commonJS({
  "dist/tuya/runtime-rjs.js"() {
    (() => {
      "use strict";
      var __webpack_modules__ = {};
      var __webpack_module_cache__ = {};
      function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) {
          return cachedModule.exports;
        }
        var module2 = __webpack_module_cache__[moduleId] = {
          exports: {}
        };
        __webpack_modules__[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        return module2.exports;
      }
      __webpack_require__.m = __webpack_modules__;
      (() => {
        var deferred = [];
        __webpack_require__.O = (result, chunkIds, fn, priority) => {
          if (chunkIds) {
            priority = priority || 0;
            for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--)
              deferred[i] = deferred[i - 1];
            deferred[i] = [chunkIds, fn, priority];
            return;
          }
          var notFulfilled = Infinity;
          for (var i = 0; i < deferred.length; i++) {
            var [chunkIds, fn, priority] = deferred[i];
            var fulfilled = true;
            for (var j = 0; j < chunkIds.length; j++) {
              if ((priority & false || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => __webpack_require__.O[key](chunkIds[j]))) {
                chunkIds.splice(j--, 1);
              } else {
                fulfilled = false;
                if (priority < notFulfilled)
                  notFulfilled = priority;
              }
            }
            if (fulfilled) {
              deferred.splice(i--, 1);
              var r = fn();
              if (r !== void 0)
                result = r;
            }
          }
          return result;
        };
      })();
      (() => {
        __webpack_require__.n = (module2) => {
          var getter = module2 && module2.__esModule ? () => module2["default"] : () => module2;
          __webpack_require__.d(getter, { a: getter });
          return getter;
        };
      })();
      (() => {
        __webpack_require__.d = (exports2, definition) => {
          for (var key in definition) {
            if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports2, key)) {
              Object.defineProperty(exports2, key, { enumerable: true, get: definition[key] });
            }
          }
        };
      })();
      (() => {
        __webpack_require__.g = function() {
          if (typeof globalThis === "object")
            return globalThis;
          try {
            return this || new Function("return this")();
          } catch (e) {
            if (typeof window === "object")
              return window;
          }
        }();
      })();
      (() => {
        __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
      })();
      (() => {
        __webpack_require__.r = (exports2) => {
          if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
            Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
          }
          Object.defineProperty(exports2, "__esModule", { value: true });
        };
      })();
      (() => {
        var installedChunks = {
          "runtime-rjs": 0
        };
        __webpack_require__.O.j = (chunkId) => installedChunks[chunkId] === 0;
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
          var [chunkIds, moreModules, runtime] = data;
          var moduleId, chunkId, i = 0;
          if (chunkIds.some((id) => installedChunks[id] !== 0)) {
            for (moduleId in moreModules) {
              if (__webpack_require__.o(moreModules, moduleId)) {
                __webpack_require__.m[moduleId] = moreModules[moduleId];
              }
            }
            if (runtime)
              var result = runtime(__webpack_require__);
          }
          if (parentChunkLoadingFunction)
            parentChunkLoadingFunction(data);
          for (; i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
              installedChunks[chunkId][0]();
            }
            installedChunks[chunkId] = 0;
          }
          return __webpack_require__.O(result);
        };
        var chunkLoadingGlobal = Render["webpackChunkapp"] = Render["webpackChunkapp"] || [];
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
      })();
    })();
  }
});
var require_g2_chart = __commonJS({
  "rjs:/Users/noyobo/home/github/tuya-ray-demo/examples/antv-g2/dist/tuya/components/g2-chart/index.rjs"(exports, module2) {
    function _require(obj) {
      return obj && obj.__esModule ? _require(obj.default) : obj;
    }
    function _requireMod(fn) {
      var module22 = { exports: {} };
      fn(module22, module22.exports);
      return _require(module22.exports);
    }
    var _ViewRender = _requireMod(function(module22, exports2) {
      require_runtime_rjs();
      (Render["webpackChunkapp"] = Render["webpackChunkapp"] || []).push([
        ["components/g2-chart/index"],
        {
          "./node_modules/@antv/f2/dist/f2.js": function(module3, exports3, __webpack_require__) {
            var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
            function _typeof2(obj) {
              "@babel/helpers - typeof";
              return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
                return typeof obj2;
              } : function(obj2) {
                return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
              }, _typeof2(obj);
            }
            (function(global, factory) {
              (false ? 0 : _typeof2(exports3)) === "object" && true ? factory(exports3) : true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports3], __WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === "function" ? __WEBPACK_AMD_DEFINE_FACTORY__.apply(exports3, __WEBPACK_AMD_DEFINE_ARRAY__) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== void 0 && (module3.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;
            })(this, function(exports4) {
              "use strict";
              var isArrayLike = function(value) {
                return value !== null && typeof value !== "function" && isFinite(value.length);
              };
              var filter = function(arr, func) {
                if (!isArrayLike(arr)) {
                  return arr;
                }
                var result = [];
                for (var index = 0; index < arr.length; index++) {
                  var value = arr[index];
                  if (func(value, index)) {
                    result.push(value);
                  }
                }
                return result;
              };
              var toString$3 = {}.toString;
              var isType$1 = function(value, type) {
                return toString$3.call(value) === "[object " + type + "]";
              };
              var isFunction$1 = function(value) {
                return isType$1(value, "Function");
              };
              var isNil$1 = function(value) {
                return value === null || value === void 0;
              };
              var isArray$1 = function(value) {
                return Array.isArray ? Array.isArray(value) : isType$1(value, "Array");
              };
              var isObject$1 = function(value) {
                var type = _typeof2(value);
                return value !== null && type === "object" || type === "function";
              };
              function each$1(elements, func) {
                if (!elements) {
                  return;
                }
                var rst;
                if (isArray$1(elements)) {
                  for (var i = 0, len = elements.length; i < len; i++) {
                    rst = func(elements[i], i);
                    if (rst === false) {
                      break;
                    }
                  }
                } else if (isObject$1(elements)) {
                  for (var k in elements) {
                    if (elements.hasOwnProperty(k)) {
                      rst = func(elements[k], k);
                      if (rst === false) {
                        break;
                      }
                    }
                  }
                }
              }
              var keys = Object.keys ? function(obj) {
                return Object.keys(obj);
              } : function(obj) {
                var result = [];
                each$1(obj, function(value, key) {
                  if (!(isFunction$1(obj) && key === "prototype")) {
                    result.push(key);
                  }
                });
                return result;
              };
              function isMatch(obj, attrs) {
                var _keys = keys(attrs);
                var length = _keys.length;
                if (isNil$1(obj))
                  return !length;
                for (var i = 0; i < length; i += 1) {
                  var key = _keys[i];
                  if (attrs[key] !== obj[key] || !(key in obj)) {
                    return false;
                  }
                }
                return true;
              }
              var isObjectLike = function(value) {
                return _typeof2(value) === "object" && value !== null;
              };
              var isPlainObject = function(value) {
                if (!isObjectLike(value) || !isType$1(value, "Object")) {
                  return false;
                }
                if (Object.getPrototypeOf(value) === null) {
                  return true;
                }
                var proto = value;
                while (Object.getPrototypeOf(proto) !== null) {
                  proto = Object.getPrototypeOf(proto);
                }
                return Object.getPrototypeOf(value) === proto;
              };
              var getMax = function(arr) {
                if (!isArray$1(arr)) {
                  return void 0;
                }
                return arr.reduce(function(prev, curr) {
                  return Math.max(prev, curr);
                }, arr[0]);
              };
              var getMin = function(arr) {
                if (!isArray$1(arr)) {
                  return void 0;
                }
                return arr.reduce(function(prev, curr) {
                  return Math.min(prev, curr);
                }, arr[0]);
              };
              var getRange$1 = function(values2) {
                var filterValues = values2.filter(function(v) {
                  return !isNaN(v);
                });
                if (!filterValues.length) {
                  return {
                    min: 0,
                    max: 0
                  };
                }
                if (isArray$1(values2[0])) {
                  var tmp = [];
                  for (var i = 0; i < values2.length; i++) {
                    tmp = tmp.concat(values2[i]);
                  }
                  filterValues = tmp;
                }
                var max = getMax(filterValues);
                var min = getMin(filterValues);
                return {
                  min,
                  max
                };
              };
              var isString = function(str) {
                return isType$1(str, "String");
              };
              function uniq(arr, cache2) {
                if (cache2 === void 0) {
                  cache2 = /* @__PURE__ */ new Map();
                }
                var r = [];
                if (Array.isArray(arr)) {
                  for (var i = 0, len = arr.length; i < len; i++) {
                    var item = arr[i];
                    if (!cache2.has(item)) {
                      r.push(item);
                      cache2.set(item, true);
                    }
                  }
                }
                return r;
              }
              function head(o) {
                if (isArrayLike(o)) {
                  return o[0];
                }
                return void 0;
              }
              function last(o) {
                if (isArrayLike(o)) {
                  var arr = o;
                  return arr[arr.length - 1];
                }
                return void 0;
              }
              var fixedBase = function(v, base2) {
                var str = base2.toString();
                var index = str.indexOf(".");
                if (index === -1) {
                  return Math.round(v);
                }
                var length = str.substr(index + 1).length;
                if (length > 20) {
                  length = 20;
                }
                return parseFloat(v.toFixed(length));
              };
              var isNumber = function(value) {
                return isType$1(value, "Number");
              };
              var values$1 = Object.values ? function(obj) {
                return Object.values(obj);
              } : function(obj) {
                var result = [];
                each$1(obj, function(value, key) {
                  if (!(isFunction$1(obj) && key === "prototype")) {
                    result.push(value);
                  }
                });
                return result;
              };
              var toString$2 = function(value) {
                if (isNil$1(value))
                  return "";
                return value.toString();
              };
              var lowerFirst = function(value) {
                var str = toString$2(value);
                return str.charAt(0).toLowerCase() + str.substring(1);
              };
              function substitute(str, o) {
                if (!str || !o) {
                  return str;
                }
                return str.replace(/\\?\{([^{}]+)\}/g, function(match, name) {
                  if (match.charAt(0) === "\\") {
                    return match.slice(1);
                  }
                  return o[name] === void 0 ? "" : o[name];
                });
              }
              var upperFirst = function(value) {
                var str = toString$2(value);
                return str.charAt(0).toUpperCase() + str.substring(1);
              };
              var toString$1 = {}.toString;
              var getType = function(value) {
                return toString$1.call(value).replace(/^\[object /, "").replace(/]$/, "");
              };
              var isBoolean = function(value) {
                return isType$1(value, "Boolean");
              };
              var isDate = function(value) {
                return isType$1(value, "Date");
              };
              var objectProto = Object.prototype;
              var isPrototype = function(value) {
                var Ctor = value && value.constructor;
                var proto = typeof Ctor === "function" && Ctor.prototype || objectProto;
                return value === proto;
              };
              function _mix$1(dist, obj) {
                for (var key in obj) {
                  if (obj.hasOwnProperty(key) && key !== "constructor" && obj[key] !== void 0) {
                    dist[key] = obj[key];
                  }
                }
              }
              function mix$1(dist, src1, src2, src3) {
                if (src1)
                  _mix$1(dist, src1);
                if (src2)
                  _mix$1(dist, src2);
                if (src3)
                  _mix$1(dist, src3);
                return dist;
              }
              function _deepMix(dist, src, level, maxLevel) {
                level = level || 0;
                maxLevel = maxLevel || 5;
                for (var key in src) {
                  if (src.hasOwnProperty(key)) {
                    var value = src[key];
                    if (value !== null && isPlainObject(value)) {
                      if (!isPlainObject(dist[key])) {
                        dist[key] = {};
                      }
                      if (level < maxLevel) {
                        _deepMix(dist[key], value, level + 1, maxLevel);
                      } else {
                        dist[key] = src[key];
                      }
                    } else if (isArray$1(value)) {
                      dist[key] = [];
                      dist[key] = dist[key].concat(value);
                    } else if (value !== void 0) {
                      dist[key] = value;
                    }
                  }
                }
              }
              var deepMix = function(rst) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                  args[_i - 1] = arguments[_i];
                }
                for (var i = 0; i < args.length; i += 1) {
                  _deepMix(rst, args[i]);
                }
                return rst;
              };
              var indexOf = function(arr, obj) {
                if (!isArrayLike(arr)) {
                  return -1;
                }
                var m = Array.prototype.indexOf;
                if (m) {
                  return m.call(arr, obj);
                }
                var index = -1;
                for (var i = 0; i < arr.length; i++) {
                  if (arr[i] === obj) {
                    index = i;
                    break;
                  }
                }
                return index;
              };
              var hasOwnProperty = Object.prototype.hasOwnProperty;
              function isEmpty(value) {
                if (isNil$1(value)) {
                  return true;
                }
                if (isArrayLike(value)) {
                  return !value.length;
                }
                var type = getType(value);
                if (type === "Map" || type === "Set") {
                  return !value.size;
                }
                if (isPrototype(value)) {
                  return !Object.keys(value).length;
                }
                for (var key in value) {
                  if (hasOwnProperty.call(value, key)) {
                    return false;
                  }
                }
                return true;
              }
              var isEqual$1 = function(value, other) {
                if (value === other) {
                  return true;
                }
                if (!value || !other) {
                  return false;
                }
                if (isString(value) || isString(other)) {
                  return false;
                }
                if (isArrayLike(value) || isArrayLike(other)) {
                  if (value.length !== other.length) {
                    return false;
                  }
                  var rst = true;
                  for (var i = 0; i < value.length; i++) {
                    rst = isEqual$1(value[i], other[i]);
                    if (!rst) {
                      break;
                    }
                  }
                  return rst;
                }
                if (isObjectLike(value) || isObjectLike(other)) {
                  var valueKeys = Object.keys(value);
                  var otherKeys = Object.keys(other);
                  if (valueKeys.length !== otherKeys.length) {
                    return false;
                  }
                  var rst = true;
                  for (var i = 0; i < valueKeys.length; i++) {
                    rst = isEqual$1(value[valueKeys[i]], other[valueKeys[i]]);
                    if (!rst) {
                      break;
                    }
                  }
                  return rst;
                }
                return false;
              };
              var map$1 = function(arr, func) {
                if (!isArrayLike(arr)) {
                  return arr;
                }
                var result = [];
                for (var index = 0; index < arr.length; index++) {
                  var value = arr[index];
                  result.push(func(value, index));
                }
                return result;
              };
              function size(o) {
                if (isNil$1(o)) {
                  return 0;
                }
                if (isArrayLike(o)) {
                  return o.length;
                }
                return Object.keys(o).length;
              }
              var _extendStatics = function extendStatics(d, b) {
                _extendStatics = Object.setPrototypeOf || {
                  __proto__: []
                } instanceof Array && function(d2, b2) {
                  d2.__proto__ = b2;
                } || function(d2, b2) {
                  for (var p in b2) {
                    if (Object.prototype.hasOwnProperty.call(b2, p))
                      d2[p] = b2[p];
                  }
                };
                return _extendStatics(d, b);
              };
              function __extends(d, b) {
                if (typeof b !== "function" && b !== null)
                  throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                _extendStatics(d, b);
                function __() {
                  this.constructor = d;
                }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
              }
              function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
                  s += arguments[i].length;
                }
                for (var r = Array(s), k = 0, i = 0; i < il; i++) {
                  for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
                    r[k] = a[j];
                  }
                }
                return r;
              }
              var ctx;
              (function memoize(f, resolver) {
                if (!isFunction$1(f)) {
                  throw new TypeError("Expected a function");
                }
                var memoized = function() {
                  var args = [];
                  for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                  }
                  var key = resolver ? resolver.apply(this, args) : args[0];
                  var cache2 = memoized.cache;
                  if (cache2.has(key)) {
                    return cache2.get(key);
                  }
                  var result = f.apply(this, args);
                  cache2.set(key, result);
                  return result;
                };
                memoized.cache = /* @__PURE__ */ new Map();
                return memoized;
              })(function(text, font) {
                if (font === void 0) {
                  font = {};
                }
                var fontSize = font.fontSize, fontFamily = font.fontFamily, fontWeight = font.fontWeight, fontStyle = font.fontStyle, fontVariant = font.fontVariant;
                if (!ctx) {
                  ctx = document.createElement("canvas").getContext("2d");
                }
                ctx.font = [fontStyle, fontVariant, fontWeight, fontSize + "px", fontFamily].join(" ");
                return ctx.measureText(isString(text) ? text : "").width;
              }, function(text, font) {
                if (font === void 0) {
                  font = {};
                }
                return __spreadArrays([text], values$1(font)).join("");
              });
              function merge$1(dataArray) {
                var rst = [];
                for (var i = 0, len = dataArray.length; i < len; i++) {
                  rst = rst.concat(dataArray[i]);
                }
                return rst;
              }
              function values(data, name) {
                var rst = [];
                var tmpMap = {};
                for (var i = 0, len = data.length; i < len; i++) {
                  var obj = data[i];
                  var value = obj[name];
                  if (!isNil$1(value)) {
                    if (!isArray$1(value)) {
                      if (!tmpMap[value]) {
                        rst.push(value);
                        tmpMap[value] = true;
                      }
                    } else {
                      each$1(value, function(val) {
                        if (!tmpMap[val]) {
                          rst.push(val);
                          tmpMap[val] = true;
                        }
                      });
                    }
                  }
                }
                return rst;
              }
              function firstValue(data, name) {
                var rst = null;
                for (var i = 0, len = data.length; i < len; i++) {
                  var obj = data[i];
                  var value = obj[name];
                  if (!isNil$1(value)) {
                    if (isArray$1(value)) {
                      rst = value[0];
                    } else {
                      rst = value;
                    }
                    break;
                  }
                }
                return rst;
              }
              function groupToMap(data, fields) {
                if (!fields) {
                  return {
                    0: data
                  };
                }
                var callback = function callback2(row2) {
                  var unique = "_";
                  for (var i2 = 0, l = fields.length; i2 < l; i2++) {
                    unique += row2[fields[i2]] && row2[fields[i2]].toString();
                  }
                  return unique;
                };
                var groups = {};
                for (var i = 0, len = data.length; i < len; i++) {
                  var row = data[i];
                  var key = callback(row);
                  if (groups[key]) {
                    groups[key].push(row);
                  } else {
                    groups[key] = [row];
                  }
                }
                return groups;
              }
              function group(data, fields, appendConditions) {
                if (appendConditions === void 0) {
                  appendConditions = {};
                }
                if (!fields) {
                  return [data];
                }
                var groups = groupToMap(data, fields);
                var array2 = [];
                if (fields.length === 1 && appendConditions[fields[0]]) {
                  var _values = appendConditions[fields[0]];
                  each$1(_values, function(value) {
                    value = "_" + value;
                    array2.push(groups[value]);
                  });
                } else {
                  for (var i in groups) {
                    array2.push(groups[i]);
                  }
                }
                return array2;
              }
              function remove(arr, obj) {
                if (!arr) {
                  return;
                }
                var index = arr.indexOf(obj);
                if (index !== -1) {
                  arr.splice(index, 1);
                }
              }
              function getRange(values2) {
                if (!values2.length) {
                  return {
                    min: 0,
                    max: 0
                  };
                }
                var max = Math.max.apply(null, values2);
                var min = Math.min.apply(null, values2);
                return {
                  min,
                  max
                };
              }
              var array = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                merge: merge$1,
                values,
                firstValue,
                group,
                groupToMap,
                remove,
                getRange
              });
              var supportsEventListenerOptions = function() {
                var supports = false;
                try {
                  var options = Object.defineProperty({}, "passive", {
                    get: function get() {
                      supports = true;
                    }
                  });
                  window.addEventListener("e", null, options);
                } catch (e) {
                }
                return supports;
              }();
              var eventListenerOptions = supportsEventListenerOptions ? {
                passive: true
              } : false;
              var isWx = (typeof wx === "undefined" ? "undefined" : _typeof2(wx)) === "object" && typeof wx.getSystemInfoSync === "function";
              var isMy = (typeof my === "undefined" ? "undefined" : _typeof2(my)) === "object" && typeof my.getSystemInfoSync === "function";
              var isNode = (typeof __webpack_require__.g === "undefined" ? "undefined" : _typeof2(__webpack_require__.g)) && !(typeof window === "undefined" ? "undefined" : _typeof2(window));
              var isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.sessionStorage !== "undefined";
              function isCanvasElement(el) {
                if (!el || _typeof2(el) !== "object")
                  return false;
                if (el.nodeType === 1 && el.nodeName) {
                  return true;
                }
                return !!el.isCanvasElement;
              }
              function getPixelRatio() {
                return window && window.devicePixelRatio || 1;
              }
              function getStyle$1(el, property) {
                return el.currentStyle ? el.currentStyle[property] : document.defaultView.getComputedStyle(el, null).getPropertyValue(property);
              }
              function getWidth(el) {
                var width = getStyle$1(el, "width");
                if (width === "auto") {
                  width = el.offsetWidth;
                }
                return parseFloat(width);
              }
              function getHeight(el) {
                var height = getStyle$1(el, "height");
                if (height === "auto") {
                  height = el.offsetHeight;
                }
                return parseFloat(height);
              }
              function getDomById(id) {
                if (!id) {
                  return null;
                }
                return document.getElementById(id);
              }
              function getRelativePosition(point, canvas) {
                var canvasDom = canvas.get("el");
                if (!canvasDom)
                  return point;
                var _canvasDom$getBoundin = canvasDom.getBoundingClientRect(), top = _canvasDom$getBoundin.top, left = _canvasDom$getBoundin.left;
                var paddingLeft = parseFloat(getStyle$1(canvasDom, "padding-left"));
                var paddingTop = parseFloat(getStyle$1(canvasDom, "padding-top"));
                var mouseX = point.x - left - paddingLeft;
                var mouseY = point.y - top - paddingTop;
                return {
                  x: mouseX,
                  y: mouseY
                };
              }
              function addEventListener(source, type, listener) {
                source.addEventListener(type, listener, eventListenerOptions);
              }
              function removeEventListener(source, type, listener) {
                source.removeEventListener(type, listener, eventListenerOptions);
              }
              function landscapePoint(point, canvas) {
                var landscape = canvas.get("landscape");
                if (!landscape) {
                  return point;
                }
                if (isFunction$1(landscape)) {
                  return landscape(point, canvas);
                }
                var height = canvas.get("height");
                var x = point.y;
                var y = height - point.x;
                return {
                  x,
                  y
                };
              }
              function convertPoints(ev, canvas) {
                var touches = ev.touches;
                if (!touches) {
                  var point = getRelativePosition({
                    x: ev.clientX,
                    y: ev.clientY
                  }, canvas);
                  return [landscapePoint(point, canvas)];
                }
                if (!touches.length) {
                  touches = ev.changedTouches || [];
                }
                var points = [];
                for (var i = 0, len = touches.length; i < len; i++) {
                  var touch = touches[i];
                  var x = touch.x, y = touch.y, clientX = touch.clientX, clientY = touch.clientY;
                  var _point = void 0;
                  if (isNumber(x) || isNumber(y)) {
                    _point = {
                      x,
                      y
                    };
                  } else {
                    _point = getRelativePosition({
                      x: clientX,
                      y: clientY
                    }, canvas);
                  }
                  points.push(landscapePoint(_point, canvas));
                }
                return points;
              }
              function createEvent(event, chart) {
                var canvas = chart.get("canvas");
                var points = convertPoints(event, canvas);
                var point = points[0] || {};
                return {
                  type: event.type,
                  chart,
                  "native": event,
                  x: point.x,
                  y: point.y
                };
              }
              function measureText(text, font, ctx2) {
                if (!ctx2) {
                  ctx2 = document.createElement("canvas").getContext("2d");
                }
                ctx2.font = font || "12px sans-serif";
                return ctx2.measureText(text);
              }
              function parsePadding(padding) {
                var top;
                var right;
                var bottom;
                var left;
                if (isNumber(padding) || isString(padding)) {
                  top = bottom = left = right = padding;
                } else if (isArray$1(padding)) {
                  top = padding[0];
                  right = !isNil$1(padding[1]) ? padding[1] : padding[0];
                  bottom = !isNil$1(padding[2]) ? padding[2] : padding[0];
                  left = !isNil$1(padding[3]) ? padding[3] : right;
                }
                return [top, right, bottom, left];
              }
              function directionEnabled(mode, dir) {
                if (mode === void 0) {
                  return true;
                } else if (typeof mode === "string") {
                  return mode.indexOf(dir) !== -1;
                }
                return false;
              }
              function toTimeStamp$1(value) {
                if (isString(value)) {
                  if (value.indexOf("T") > 0) {
                    value = new Date(value).getTime();
                  } else {
                    value = new Date(value.replace(/-/gi, "/")).getTime();
                  }
                }
                if (isDate(value)) {
                  value = value.getTime();
                }
                return value;
              }
              var Util = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                Array: array,
                upperFirst,
                lowerFirst,
                isString,
                isNumber,
                isBoolean,
                isFunction: isFunction$1,
                isDate,
                isArray: isArray$1,
                isNil: isNil$1,
                isObject: isObject$1,
                isPlainObject,
                isEqual: isEqual$1,
                deepMix,
                mix: mix$1,
                each: each$1,
                uniq,
                find: function find(arr, predicate) {
                  if (!isArray$1(arr))
                    return null;
                  var _predicate;
                  if (isFunction$1(predicate)) {
                    _predicate = predicate;
                  }
                  if (isPlainObject(predicate)) {
                    _predicate = function _predicate2(a) {
                      return isMatch(a, predicate);
                    };
                  }
                  if (_predicate) {
                    for (var i = 0; i < arr.length; i += 1) {
                      if (_predicate(arr[i])) {
                        return arr[i];
                      }
                    }
                  }
                  return null;
                },
                isObjectValueEqual: function isObjectValueEqual(a, b) {
                  a = Object.assign({}, a);
                  b = Object.assign({}, b);
                  var aProps = Object.getOwnPropertyNames(a);
                  var bProps = Object.getOwnPropertyNames(b);
                  if (aProps.length !== bProps.length) {
                    return false;
                  }
                  for (var i = 0, len = aProps.length; i < len; i++) {
                    var propName = aProps[i];
                    if (a[propName] !== b[propName]) {
                      return false;
                    }
                  }
                  return true;
                },
                parsePadding,
                directionEnabled,
                toTimeStamp: toTimeStamp$1,
                substitute,
                isWx,
                isMy,
                isNode,
                isBrowser,
                isCanvasElement,
                getPixelRatio,
                getStyle: getStyle$1,
                getWidth,
                getHeight,
                getDomById,
                getRelativePosition,
                addEventListener,
                removeEventListener,
                createEvent,
                convertPoints,
                measureText
              });
              var color1 = "#E8E8E8";
              var defaultAxis = {
                label: {
                  fill: "#808080",
                  fontSize: 10
                },
                line: {
                  stroke: color1,
                  lineWidth: 1
                },
                grid: {
                  type: "line",
                  stroke: color1,
                  lineWidth: 1,
                  lineDash: [2]
                },
                tickLine: null,
                labelOffset: 7.5
              };
              var Theme = {
                fontFamily: '"Helvetica Neue", "San Francisco", Helvetica, Tahoma, Arial, "PingFang SC", "Hiragino Sans GB", "Heiti SC", "Microsoft YaHei", sans-serif',
                defaultColor: "#1890FF",
                pixelRatio: 1,
                padding: "auto",
                appendPadding: 15,
                colors: ["#1890FF", "#2FC25B", "#FACC14", "#223273", "#8543E0", "#13C2C2", "#3436C7", "#F04864"],
                shapes: {
                  line: ["line", "dash"],
                  point: ["circle", "hollowCircle"]
                },
                sizes: [4, 10],
                axis: {
                  common: defaultAxis,
                  bottom: mix$1({}, defaultAxis, {
                    grid: null
                  }),
                  left: mix$1({}, defaultAxis, {
                    line: null
                  }),
                  right: mix$1({}, defaultAxis, {
                    line: null
                  }),
                  circle: mix$1({}, defaultAxis, {
                    line: null
                  }),
                  radius: mix$1({}, defaultAxis, {
                    labelOffset: 4
                  })
                },
                shape: {
                  line: {
                    lineWidth: 2,
                    lineJoin: "round",
                    lineCap: "round"
                  },
                  point: {
                    lineWidth: 0,
                    size: 3
                  },
                  area: {
                    fillOpacity: 0.1
                  }
                },
                _defaultAxis: defaultAxis
              };
              var lang = {
                general: {
                  title: "\u8FD9\u662F\u4E00\u4E2A\u56FE\u8868\uFF0C",
                  withTitle: "\u8FD9\u662F\u4E00\u4E2A\u5173\u4E8E\u201C{title}\u201D\u7684\u56FE\u8868\u3002"
                },
                coord: {
                  cartesian: "X\u8F74\u662F{xLabel}Y\u8F74\u662F{yLabel}"
                },
                scale: {
                  linear: "\u6570\u503C\u578B\uFF0C\u6570\u636E\u6700\u5C0F\u503C\u4E3A{min}\uFF0C\u6700\u5927\u503C\u4E3A{max}\uFF1B",
                  cat: "\u5206\u7C7B\u578B, \u5206\u7C7B\u7C7B\u578B\u6709\uFF1A{values}\uFF1B",
                  timeCat: "\u65F6\u95F4\u578B\uFF0C\u65F6\u95F4\u8303\u56F4\u4ECE{start}\u5230{end}\uFF1B"
                },
                geometry: {
                  prefix: "\u5171\u6709{count}\u79CD\u5206\u7C7B\u7EC4\u6210\uFF0C",
                  oneData: "\u7B2C{index}\u7C7B\u662F{name}\uFF0C\u6570\u636E\u662F{values};",
                  partData: "\u7B2C{index}\u7C7B\u662F{name}\uFF0C\u5171\u6709{count}\u9879\u6570\u636E\uFF0C\u524D{part}\u9879\u662F{values};",
                  allData: "\u7B2C{index}\u7C7B\u662F{name}\uFF0C\u6709{count}\u9879\u6570\u636E\uFF0C\u5206\u522B\u662F{values};"
                },
                legend: {
                  prefix: "\u56FE\u4F8B\u5206\u7C7B\u6709\uFF1A"
                }
              };
              var Global = {
                version: "3.8.11",
                scales: {},
                widthRatio: {
                  column: 1 / 2,
                  rose: 0.999999,
                  multiplePie: 3 / 4
                },
                lineDash: [4, 4],
                lang
              };
              Global.setTheme = function(theme) {
                deepMix(Global, theme);
              };
              Global.setTheme(Theme);
              function _defineProperty(obj, key, value) {
                if (key in obj) {
                  Object.defineProperty(obj, key, {
                    value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                  });
                } else {
                  obj[key] = value;
                }
                return obj;
              }
              function _extends() {
                _extends = Object.assign || function(target) {
                  for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i];
                    for (var key in source) {
                      if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                      }
                    }
                  }
                  return target;
                };
                return _extends.apply(this, arguments);
              }
              function _inheritsLoose$3(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                _setPrototypeOf(subClass, superClass);
              }
              function _setPrototypeOf(o, p) {
                _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
                  o2.__proto__ = p2;
                  return o2;
                };
                return _setPrototypeOf(o, p);
              }
              function _assertThisInitialized(self) {
                if (self === void 0) {
                  throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }
                return self;
              }
              var EVENT_AFTER_INIT = "afterinit";
              var EVENT_AFTER_DATA_CHANGE = "afterdatachange";
              var EVENT_AFTER_SIZE_CHANGE = "_aftersizechange";
              var EventEmit = /* @__PURE__ */ function() {
                function EventEmit2() {
                  this.__events = {};
                }
                var _proto = EventEmit2.prototype;
                _proto.on = function on(type, listener) {
                  if (!type || !listener) {
                    return;
                  }
                  var events = this.__events[type] || [];
                  events.push(listener);
                  this.__events[type] = events;
                };
                _proto.emit = function emit(type, e) {
                  var _this = this;
                  if (isObject$1(type)) {
                    e = type;
                    type = e && e.type;
                  }
                  if (!type) {
                    return;
                  }
                  var events = this.__events[type];
                  if (!events || !events.length) {
                    return;
                  }
                  events.forEach(function(listener) {
                    listener.call(_this, e);
                  });
                };
                _proto.off = function off(type, listener) {
                  var __events = this.__events;
                  var events = __events[type];
                  if (!events || !events.length) {
                    return;
                  }
                  if (!listener) {
                    delete __events[type];
                    return;
                  }
                  for (var i = 0, len = events.length; i < len; i++) {
                    if (events[i] === listener) {
                      events.splice(i, 1);
                      i--;
                    }
                  }
                };
                return EventEmit2;
              }();
              var Base$2 = /* @__PURE__ */ function(_Emit) {
                _inheritsLoose$3(Base2, _Emit);
                var _proto = Base2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {};
                };
                function Base2(cfg) {
                  var _this;
                  _this = _Emit.call(this) || this;
                  var attrs = {};
                  var defaultCfg = _this.getDefaultCfg();
                  _this._attrs = attrs;
                  mix$1(attrs, defaultCfg, cfg);
                  return _this;
                }
                _proto.get = function get(name) {
                  return this._attrs[name];
                };
                _proto.set = function set(name, value) {
                  this._attrs[name] = value;
                };
                _proto.destroy = function destroy() {
                  this._attrs = {};
                  this.destroyed = true;
                };
                return Base2;
              }(EventEmit);
              var Plot = /* @__PURE__ */ function() {
                function Plot2(cfg) {
                  mix$1(this, cfg);
                  this._init();
                }
                var _proto = Plot2.prototype;
                _proto._init = function _init() {
                  var self = this;
                  var start2 = self.start;
                  var end2 = self.end;
                  var xMin = Math.min(start2.x, end2.x);
                  var xMax = Math.max(start2.x, end2.x);
                  var yMin = Math.min(start2.y, end2.y);
                  var yMax = Math.max(start2.y, end2.y);
                  this.tl = {
                    x: xMin,
                    y: yMin
                  };
                  this.tr = {
                    x: xMax,
                    y: yMin
                  };
                  this.bl = {
                    x: xMin,
                    y: yMax
                  };
                  this.br = {
                    x: xMax,
                    y: yMax
                  };
                  this.width = xMax - xMin;
                  this.height = yMax - yMin;
                };
                _proto.reset = function reset(start2, end2) {
                  this.start = start2;
                  this.end = end2;
                  this._init();
                };
                _proto.isInRange = function isInRange(x, y) {
                  if (isObject$1(x)) {
                    y = x.y;
                    x = x.x;
                  }
                  var tl = this.tl;
                  var br = this.br;
                  return tl.x <= x && x <= br.x && tl.y <= y && y <= br.y;
                };
                return Plot2;
              }();
              var Matrix = {
                generateDefault: function generateDefault() {
                  return [1, 0, 0, 1, 0, 0];
                },
                isChanged: function isChanged(m) {
                  return m[0] !== 1 || m[1] !== 0 || m[2] !== 0 || m[3] !== 1 || m[4] !== 0 || m[5] !== 0;
                },
                multiply: function multiply(m1, m2) {
                  var m11 = m1[0] * m2[0] + m1[2] * m2[1];
                  var m12 = m1[1] * m2[0] + m1[3] * m2[1];
                  var m21 = m1[0] * m2[2] + m1[2] * m2[3];
                  var m22 = m1[1] * m2[2] + m1[3] * m2[3];
                  var dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4];
                  var dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];
                  return [m11, m12, m21, m22, dx, dy];
                },
                scale: function scale(out, m, v) {
                  out[0] = m[0] * v[0];
                  out[1] = m[1] * v[0];
                  out[2] = m[2] * v[1];
                  out[3] = m[3] * v[1];
                  out[4] = m[4];
                  out[5] = m[5];
                  return out;
                },
                rotate: function rotate(out, m, radian) {
                  var c = Math.cos(radian);
                  var s = Math.sin(radian);
                  var m11 = m[0] * c + m[2] * s;
                  var m12 = m[1] * c + m[3] * s;
                  var m21 = m[0] * -s + m[2] * c;
                  var m22 = m[1] * -s + m[3] * c;
                  out[0] = m11;
                  out[1] = m12;
                  out[2] = m21;
                  out[3] = m22;
                  out[4] = m[4];
                  out[5] = m[5];
                  return out;
                },
                translate: function translate(out, m, v) {
                  out[0] = m[0];
                  out[1] = m[1];
                  out[2] = m[2];
                  out[3] = m[3];
                  out[4] = m[4] + m[0] * v[0] + m[2] * v[1];
                  out[5] = m[5] + m[1] * v[0] + m[3] * v[1];
                  return out;
                },
                transform: function transform(m, actions) {
                  var out = [].concat(m);
                  for (var i = 0, len = actions.length; i < len; i++) {
                    var action = actions[i];
                    switch (action[0]) {
                      case "t":
                        Matrix.translate(out, out, [action[1], action[2]]);
                        break;
                      case "s":
                        Matrix.scale(out, out, [action[1], action[2]]);
                        break;
                      case "r":
                        Matrix.rotate(out, out, action[1]);
                        break;
                    }
                  }
                  return out;
                }
              };
              var Vector2 = {
                create: function create() {
                  return [0, 0];
                },
                length: function length(v) {
                  var x = v[0];
                  var y = v[1];
                  return Math.sqrt(x * x + y * y);
                },
                normalize: function normalize(out, v) {
                  var len = this.length(v);
                  if (len === 0) {
                    out[0] = 0;
                    out[1] = 0;
                  } else {
                    out[0] = v[0] / len;
                    out[1] = v[1] / len;
                  }
                  return out;
                },
                add: function add(out, v1, v2) {
                  out[0] = v1[0] + v2[0];
                  out[1] = v1[1] + v2[1];
                  return out;
                },
                sub: function sub(out, v1, v2) {
                  out[0] = v1[0] - v2[0];
                  out[1] = v1[1] - v2[1];
                  return out;
                },
                scale: function scale(out, v, s) {
                  out[0] = v[0] * s;
                  out[1] = v[1] * s;
                  return out;
                },
                dot: function dot(v1, v2) {
                  return v1[0] * v2[0] + v1[1] * v2[1];
                },
                direction: function direction(v1, v2) {
                  return v1[0] * v2[1] - v2[0] * v1[1];
                },
                angle: function angle(v1, v2) {
                  var theta = this.dot(v1, v2) / (this.length(v1) * this.length(v2));
                  return Math.acos(theta);
                },
                angleTo: function angleTo(v1, v2, direction) {
                  var angle = this.angle(v1, v2);
                  var angleLargeThanPI = this.direction(v1, v2) >= 0;
                  if (direction) {
                    if (angleLargeThanPI) {
                      return Math.PI * 2 - angle;
                    }
                    return angle;
                  }
                  if (angleLargeThanPI) {
                    return angle;
                  }
                  return Math.PI * 2 - angle;
                },
                zero: function zero(v) {
                  return v[0] === 0 && v[1] === 0;
                },
                distance: function distance(v1, v2) {
                  var x = v2[0] - v1[0];
                  var y = v2[1] - v1[1];
                  return Math.sqrt(x * x + y * y);
                },
                clone: function clone(v) {
                  return [v[0], v[1]];
                },
                min: function min(out, v1, v2) {
                  out[0] = Math.min(v1[0], v2[0]);
                  out[1] = Math.min(v1[1], v2[1]);
                  return out;
                },
                max: function max(out, v1, v2) {
                  out[0] = Math.max(v1[0], v2[0]);
                  out[1] = Math.max(v1[1], v2[1]);
                  return out;
                },
                transformMat2d: function transformMat2d(out, v, m) {
                  var x = v[0];
                  var y = v[1];
                  out[0] = m[0] * x + m[2] * y + m[4];
                  out[1] = m[1] * x + m[3] * y + m[5];
                  return out;
                }
              };
              var defaultMatrix = [1, 0, 0, 1, 0, 0];
              var Base$1 = /* @__PURE__ */ function() {
                var _proto = Base2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                };
                function Base2(cfg) {
                  this._initDefaultCfg();
                  mix$1(this, cfg);
                  var start2;
                  var end2;
                  if (this.plot) {
                    start2 = this.plot.bl;
                    end2 = this.plot.tr;
                    this.start = start2;
                    this.end = end2;
                  } else {
                    start2 = this.start;
                    end2 = this.end;
                  }
                  this.init(start2, end2);
                }
                _proto._scale = function _scale(s1, s2) {
                  var matrix = this.matrix;
                  var center = this.center;
                  Matrix.translate(matrix, matrix, [center.x, center.y]);
                  Matrix.scale(matrix, matrix, [s1, s2]);
                  Matrix.translate(matrix, matrix, [-center.x, -center.y]);
                };
                _proto.init = function init2(start2, end2) {
                  this.matrix = [].concat(defaultMatrix);
                  this.center = {
                    x: (end2.x - start2.x) / 2 + start2.x,
                    y: (end2.y - start2.y) / 2 + start2.y
                  };
                  if (this.scale) {
                    this._scale(this.scale[0], this.scale[1]);
                  }
                };
                _proto.convertPoint = function convertPoint(point) {
                  var _this$_convertPoint = this._convertPoint(point), x = _this$_convertPoint.x, y = _this$_convertPoint.y;
                  if (!Matrix.isChanged(this.matrix)) {
                    return {
                      x,
                      y
                    };
                  }
                  var vector = [x, y];
                  Vector2.transformMat2d(vector, vector, this.matrix);
                  return {
                    x: vector[0],
                    y: vector[1]
                  };
                };
                _proto.invertPoint = function invertPoint(point) {
                  return this._invertPoint(point);
                };
                _proto._convertPoint = function _convertPoint(point) {
                  return point;
                };
                _proto._invertPoint = function _invertPoint(point) {
                  return point;
                };
                _proto.reset = function reset(plot) {
                  this.plot = plot;
                  var bl = plot.bl, tr = plot.tr;
                  this.start = bl;
                  this.end = tr;
                  this.init(bl, tr);
                };
                return Base2;
              }();
              var Cartesian = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Cartesian2, _Base);
                function Cartesian2() {
                  return _Base.apply(this, arguments) || this;
                }
                var _proto = Cartesian2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "cartesian";
                  this.transposed = false;
                  this.isRect = true;
                };
                _proto.init = function init2(start2, end2) {
                  _Base.prototype.init.call(this, start2, end2);
                  this.x = {
                    start: start2.x,
                    end: end2.x
                  };
                  this.y = {
                    start: start2.y,
                    end: end2.y
                  };
                };
                _proto._convertPoint = function _convertPoint(point) {
                  var self = this;
                  var transposed = self.transposed;
                  var xDim = transposed ? "y" : "x";
                  var yDim = transposed ? "x" : "y";
                  var x = self.x;
                  var y = self.y;
                  return {
                    x: x.start + (x.end - x.start) * point[xDim],
                    y: y.start + (y.end - y.start) * point[yDim]
                  };
                };
                _proto._invertPoint = function _invertPoint(point) {
                  var self = this;
                  var transposed = self.transposed;
                  var xDim = transposed ? "y" : "x";
                  var yDim = transposed ? "x" : "y";
                  var x = self.x;
                  var y = self.y;
                  var rst = {};
                  rst[xDim] = (point.x - x.start) / (x.end - x.start);
                  rst[yDim] = (point.y - y.start) / (y.end - y.start);
                  return rst;
                };
                return Cartesian2;
              }(Base$1);
              Base$1.Cartesian = Cartesian;
              Base$1.Rect = Cartesian;
              function toScaleString(scale, value) {
                if (isString(value)) {
                  return value;
                }
                return scale.invert(scale.scale(value));
              }
              var AttributeBase = /* @__PURE__ */ function() {
                function AttributeBase2(cfg) {
                  var _this = this;
                  this.type = "base";
                  this.name = null;
                  this.method = null;
                  this.values = [];
                  this.scales = [];
                  this.linear = null;
                  var mixedCallback = null;
                  var defaultCallback = this.callback;
                  if (cfg.callback) {
                    var userCallback = cfg.callback;
                    mixedCallback = function mixedCallback2() {
                      for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
                        params[_key] = arguments[_key];
                      }
                      var ret = userCallback.apply(void 0, params);
                      if (isNil$1(ret)) {
                        ret = defaultCallback.apply(_this, params);
                      }
                      return ret;
                    };
                  }
                  mix$1(this, cfg);
                  if (mixedCallback) {
                    mix$1(this, {
                      callback: mixedCallback
                    });
                  }
                }
                var _proto = AttributeBase2.prototype;
                _proto._getAttrValue = function _getAttrValue(scale, value) {
                  var values2 = this.values;
                  if (scale.isCategory && !this.linear) {
                    var index = scale.translate(value);
                    return values2[index % values2.length];
                  }
                  var percent = scale.scale(value);
                  return this.getLinearValue(percent);
                };
                _proto.getLinearValue = function getLinearValue(percent) {
                  var values2 = this.values;
                  var steps = values2.length - 1;
                  var step = Math.floor(steps * percent);
                  var leftPercent = steps * percent - step;
                  var start2 = values2[step];
                  var end2 = step === steps ? start2 : values2[step + 1];
                  var rstValue = start2 + (end2 - start2) * leftPercent;
                  return rstValue;
                };
                _proto.callback = function callback(value) {
                  var self = this;
                  var scale = self.scales[0];
                  var rstValue = null;
                  if (scale.type === "identity") {
                    rstValue = scale.value;
                  } else {
                    rstValue = self._getAttrValue(scale, value);
                  }
                  return rstValue;
                };
                _proto.getNames = function getNames() {
                  var scales = this.scales;
                  var names = this.names;
                  var length = Math.min(scales.length, names.length);
                  var rst = [];
                  for (var i = 0; i < length; i++) {
                    rst.push(names[i]);
                  }
                  return rst;
                };
                _proto.getFields = function getFields() {
                  var scales = this.scales;
                  var rst = [];
                  each$1(scales, function(scale) {
                    rst.push(scale.field);
                  });
                  return rst;
                };
                _proto.getScale = function getScale(name) {
                  var scales = this.scales;
                  var names = this.names;
                  var index = names.indexOf(name);
                  return scales[index];
                };
                _proto.mapping = function mapping() {
                  var scales = this.scales;
                  var callback = this.callback;
                  for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                    params[_key2] = arguments[_key2];
                  }
                  var values2 = params;
                  if (callback) {
                    for (var i = 0, len = params.length; i < len; i++) {
                      params[i] = this._toOriginParam(params[i], scales[i]);
                    }
                    values2 = callback.apply(this, params);
                  }
                  values2 = [].concat(values2);
                  return values2;
                };
                _proto._toOriginParam = function _toOriginParam(param, scale) {
                  var rst = param;
                  if (!scale.isLinear) {
                    if (isArray$1(param)) {
                      rst = [];
                      for (var i = 0, len = param.length; i < len; i++) {
                        rst.push(toScaleString(scale, param[i]));
                      }
                    } else {
                      rst = toScaleString(scale, param);
                    }
                  }
                  return rst;
                };
                return AttributeBase2;
              }();
              var Position = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Position2, _Base);
                function Position2(cfg) {
                  var _this;
                  _this = _Base.call(this, cfg) || this;
                  _this.names = ["x", "y"];
                  _this.type = "position";
                  return _this;
                }
                var _proto = Position2.prototype;
                _proto.mapping = function mapping(x, y) {
                  var scales = this.scales;
                  var coord = this.coord;
                  var scaleX = scales[0];
                  var scaleY = scales[1];
                  var rstX;
                  var rstY;
                  var obj;
                  if (isNil$1(x) || isNil$1(y)) {
                    return [];
                  }
                  if (isArray$1(y) && isArray$1(x)) {
                    rstX = [];
                    rstY = [];
                    for (var i = 0, j = 0, xLen = x.length, yLen = y.length; i < xLen && j < yLen; i++, j++) {
                      obj = coord.convertPoint({
                        x: scaleX.scale(x[i]),
                        y: scaleY.scale(y[j])
                      });
                      rstX.push(obj.x);
                      rstY.push(obj.y);
                    }
                  } else if (isArray$1(y)) {
                    x = scaleX.scale(x);
                    rstY = [];
                    each$1(y, function(yVal) {
                      yVal = scaleY.scale(yVal);
                      obj = coord.convertPoint({
                        x,
                        y: yVal
                      });
                      if (rstX && rstX !== obj.x) {
                        if (!isArray$1(rstX)) {
                          rstX = [rstX];
                        }
                        rstX.push(obj.x);
                      } else {
                        rstX = obj.x;
                      }
                      rstY.push(obj.y);
                    });
                  } else if (isArray$1(x)) {
                    y = scaleY.scale(y);
                    rstX = [];
                    each$1(x, function(xVal) {
                      xVal = scaleX.scale(xVal);
                      obj = coord.convertPoint({
                        x: xVal,
                        y
                      });
                      if (rstY && rstY !== obj.y) {
                        if (!isArray$1(rstY)) {
                          rstY = [rstY];
                        }
                        rstY.push(obj.y);
                      } else {
                        rstY = obj.y;
                      }
                      rstX.push(obj.x);
                    });
                  } else {
                    x = scaleX.scale(x);
                    y = scaleY.scale(y);
                    var point = coord.convertPoint({
                      x,
                      y
                    });
                    rstX = point.x;
                    rstY = point.y;
                  }
                  return [rstX, rstY];
                };
                return Position2;
              }(AttributeBase);
              var Shape$2 = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Shape2, _Base);
                function Shape2(cfg) {
                  var _this;
                  _this = _Base.call(this, cfg) || this;
                  _this.names = ["shape"];
                  _this.type = "shape";
                  _this.gradient = null;
                  return _this;
                }
                var _proto = Shape2.prototype;
                _proto.getLinearValue = function getLinearValue(percent) {
                  var values2 = this.values;
                  var index = Math.round((values2.length - 1) * percent);
                  return values2[index];
                };
                return Shape2;
              }(AttributeBase);
              var Size = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Size2, _Base);
                function Size2(cfg) {
                  var _this;
                  _this = _Base.call(this, cfg) || this;
                  _this.names = ["size"];
                  _this.type = "size";
                  _this.gradient = null;
                  return _this;
                }
                return Size2;
              }(AttributeBase);
              function getValue(start2, end2, percent, index) {
                var value = start2[index] + (end2[index] - start2[index]) * percent;
                return value;
              }
              function arr2hex(arr) {
                return "#" + toRGBValue(arr[0]) + toRGBValue(arr[1]) + toRGBValue(arr[2]);
              }
              function toRGBValue(value) {
                value = Math.round(value);
                value = value.toString(16);
                if (value.length === 1) {
                  value = "0" + value;
                }
                return value;
              }
              function calColor(colors, percent) {
                var steps = colors.length - 1;
                var step = Math.floor(steps * percent);
                var left = steps * percent - step;
                var start2 = colors[step];
                var end2 = step === steps ? start2 : colors[step + 1];
                var rgb = arr2hex([getValue(start2, end2, left, 0), getValue(start2, end2, left, 1), getValue(start2, end2, left, 2)]);
                return rgb;
              }
              function hex2arr(str) {
                var arr = [];
                arr.push(parseInt(str.substr(1, 2), 16));
                arr.push(parseInt(str.substr(3, 2), 16));
                arr.push(parseInt(str.substr(5, 2), 16));
                return arr;
              }
              var colorCache = {
                black: "#000000",
                blue: "#0000ff",
                grey: "#808080",
                green: "#008000",
                orange: "#ffa500",
                pink: "#ffc0cb",
                purple: "#800080",
                red: "#ff0000",
                white: "#ffffff",
                yellow: "#ffff00"
              };
              function toHex(color) {
                if (colorCache[color]) {
                  return colorCache[color];
                }
                if (color[0] === "#") {
                  if (color.length === 7) {
                    return color;
                  }
                  var hex = color.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(m, r, g, b) {
                    return "#" + r + r + g + g + b + b;
                  });
                  colorCache[color] = hex;
                  return hex;
                }
                var rst = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
                rst.shift();
                rst = arr2hex(rst);
                colorCache[color] = rst;
                return rst;
              }
              function gradient(colors) {
                var points = [];
                if (isString(colors)) {
                  colors = colors.split("-");
                }
                each$1(colors, function(color) {
                  if (color.indexOf("#") === -1) {
                    color = toHex(color);
                  }
                  points.push(hex2arr(color));
                });
                return function(percent) {
                  return calColor(points, percent);
                };
              }
              var Color = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Color2, _Base);
                function Color2(cfg) {
                  var _this;
                  _this = _Base.call(this, cfg) || this;
                  _this.names = ["color"];
                  _this.type = "color";
                  _this.gradient = null;
                  if (isString(_this.values)) {
                    _this.linear = true;
                  }
                  return _this;
                }
                var _proto = Color2.prototype;
                _proto.getLinearValue = function getLinearValue(percent) {
                  var gradient$1 = this.gradient;
                  if (!gradient$1) {
                    var values2 = this.values;
                    gradient$1 = gradient(values2);
                    this.gradient = gradient$1;
                  }
                  return gradient$1(percent);
                };
                return Color2;
              }(AttributeBase);
              var Attr = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                Position,
                Shape: Shape$2,
                Size,
                Color
              });
              var Shape$1 = {};
              var ShapeBase = {
                _coord: null,
                draw: function draw(cfg, container) {
                  if (this.drawShape) {
                    this.drawShape(cfg, container);
                  }
                },
                setCoord: function setCoord(coord) {
                  this._coord = coord;
                },
                parsePoint: function parsePoint(point) {
                  var coord = this._coord;
                  if (coord.isPolar) {
                    if (point.x === 1)
                      point.x = 0.9999999;
                    if (point.y === 1)
                      point.y = 0.9999999;
                  }
                  return coord.convertPoint(point);
                },
                parsePoints: function parsePoints(points) {
                  if (!points)
                    return false;
                  var self = this;
                  var rst = [];
                  points.forEach(function(point) {
                    rst.push(self.parsePoint(point));
                  });
                  return rst;
                }
              };
              var ShapeFactoryBase = {
                defaultShapeType: null,
                setCoord: function setCoord(coord) {
                  this._coord = coord;
                },
                getShape: function getShape(type) {
                  var self = this;
                  if (isArray$1(type)) {
                    type = type[0];
                  }
                  var shape = self[type] || self[self.defaultShapeType];
                  shape._coord = self._coord;
                  return shape;
                },
                getShapePoints: function getShapePoints(type, cfg) {
                  var shape = this.getShape(type);
                  var fn = shape.getPoints || shape.getShapePoints || this.getDefaultPoints;
                  var points = fn(cfg);
                  return points;
                },
                getDefaultPoints: function getDefaultPoints() {
                  return [];
                },
                drawShape: function drawShape2(type, cfg, container) {
                  var shape = this.getShape(type);
                  if (!cfg.color) {
                    cfg.color = Global.colors[0];
                  }
                  return shape.draw(cfg, container);
                }
              };
              Shape$1.registerFactory = function(factoryName, cfg) {
                var className = upperFirst(factoryName);
                var geomObj = mix$1({}, ShapeFactoryBase, cfg);
                Shape$1[className] = geomObj;
                geomObj.name = factoryName;
                return geomObj;
              };
              Shape$1.registerShape = function(factoryName, shapeType, cfg) {
                var className = upperFirst(factoryName);
                var factory = Shape$1[className];
                var shapeObj = mix$1({}, ShapeBase, cfg);
                factory[shapeType] = shapeObj;
                return shapeObj;
              };
              Shape$1.registShape = Shape$1.registerShape;
              Shape$1.getShapeFactory = function(factoryName) {
                var self = this;
                factoryName = factoryName || "point";
                var className = upperFirst(factoryName);
                return self[className];
              };
              function _mix(dist, obj) {
                for (var key in obj) {
                  if (obj.hasOwnProperty(key) && key !== "constructor" && obj[key] !== void 0) {
                    dist[key] = obj[key];
                  }
                }
              }
              var mix_1 = function mix(dist, src1, src2, src3) {
                if (src1)
                  _mix(dist, src1);
                if (src2)
                  _mix(dist, src2);
                if (src3)
                  _mix(dist, src3);
                return dist;
              };
              var Adjust = /* @__PURE__ */ function() {
                var _proto = Adjust2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.adjustNames = ["x", "y"];
                };
                function Adjust2(cfg) {
                  this._initDefaultCfg();
                  mix_1(this, cfg);
                }
                _proto.processAdjust = function processAdjust() {
                };
                return Adjust2;
              }();
              var base = Adjust;
              function generateScaleAria(scale) {
                var type = scale.type, values2 = scale.values;
                if (type === "linear") {
                  return substitute(lang.scale.linear, scale);
                }
                if (type === "cat") {
                  return substitute(lang.scale.cat, {
                    values: values2.slice(0, 10).join(" ")
                  });
                }
                if (type === "timeCat") {
                  var start2 = scale.getText(values2[0]);
                  var end2 = scale.getText(values2[values2.length - 1]);
                  return substitute(lang.scale.timeCat, {
                    start: start2,
                    end: end2
                  });
                }
                return "";
              }
              function generateCoordAria(coord, xScale, yScale) {
                var type = coord.type;
                if (!lang.coord[type]) {
                  return "";
                }
                return substitute(lang.coord[type], {
                  xLabel: generateScaleAria(xScale),
                  yLabel: generateScaleAria(yScale)
                });
              }
              var GROUP_ATTRS = ["color", "size", "shape"];
              var FIELD_ORIGIN = "_origin";
              var FIELD_ORIGIN_Y = "_originY";
              function parseFields(field) {
                if (isArray$1(field)) {
                  return field;
                }
                if (isString(field)) {
                  return field.split("*");
                }
                return [field];
              }
              var Geom = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Geom2, _Base);
                function Geom2() {
                  return _Base.apply(this, arguments) || this;
                }
                var _proto = Geom2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {
                    type: null,
                    data: null,
                    attrs: {},
                    scales: {},
                    container: null,
                    styleOptions: null,
                    chart: null,
                    shapeType: "",
                    generatePoints: false,
                    attrOptions: {},
                    sortable: false,
                    startOnZero: true,
                    visible: true,
                    connectNulls: false,
                    ignoreEmptyGroup: false,
                    isInit: false
                  };
                };
                _proto.init = function init2() {
                  var self = this;
                  var isInit = self.get("isInit");
                  if (isInit) {
                    return;
                  }
                  self._initAttrs();
                  self._processData();
                  self.set("isInit", true);
                };
                _proto._getGroupScales = function _getGroupScales() {
                  var self = this;
                  var scales = [];
                  each$1(GROUP_ATTRS, function(attrName) {
                    var attr = self.getAttr(attrName);
                    if (attr) {
                      var attrScales = attr.scales;
                      each$1(attrScales, function(scale) {
                        if (scale && scale.isCategory && scales.indexOf(scale) === -1) {
                          scales.push(scale);
                        }
                      });
                    }
                  });
                  return scales;
                };
                _proto._groupData = function _groupData(data) {
                  var self = this;
                  var colDefs = self.get("colDefs");
                  var groupScales = self._getGroupScales();
                  if (groupScales.length) {
                    var appendConditions = {};
                    var names = [];
                    each$1(groupScales, function(scale) {
                      var field = scale.field;
                      names.push(field);
                      if (colDefs && colDefs[field] && colDefs[field].values) {
                        appendConditions[scale.field] = colDefs[field].values;
                      }
                    });
                    return group(data, names, appendConditions);
                  }
                  return [data];
                };
                _proto._setAttrOptions = function _setAttrOptions(attrName, attrCfg) {
                  var options = this.get("attrOptions");
                  options[attrName] = attrCfg;
                  var attrs = this.get("attrs");
                  if (Object.keys(attrs).length) {
                    this._createAttr(attrName, attrCfg);
                  }
                };
                _proto._createAttrOption = function _createAttrOption(attrName, field, cfg, defaultValues) {
                  var attrCfg = {};
                  attrCfg.field = field;
                  if (cfg) {
                    if (isFunction$1(cfg)) {
                      attrCfg.callback = cfg;
                    } else {
                      attrCfg.values = cfg;
                    }
                  } else {
                    attrCfg.values = defaultValues;
                  }
                  this._setAttrOptions(attrName, attrCfg);
                };
                _proto._createAttr = function _createAttr(type, option) {
                  var self = this;
                  var attrs = self.get("attrs");
                  var coord = self.get("coord");
                  var className = upperFirst(type);
                  var fields = parseFields(option.field);
                  if (type === "position") {
                    option.coord = coord;
                  }
                  var scales = [];
                  for (var i = 0, len = fields.length; i < len; i++) {
                    var field = fields[i];
                    var scale = self._createScale(field);
                    scales.push(scale);
                  }
                  if (type === "position") {
                    var yScale = scales[1];
                    if (coord.type === "polar" && coord.transposed && self.hasAdjust("stack")) {
                      if (yScale.values.length) {
                        yScale.change({
                          nice: false,
                          min: 0,
                          max: Math.max.apply(null, yScale.values)
                        });
                      }
                    }
                  }
                  option.scales = scales;
                  var attr = new Attr[className](option);
                  attrs[type] = attr;
                  return attr;
                };
                _proto._initAttrs = function _initAttrs() {
                  var self = this;
                  var attrOptions = self.get("attrOptions");
                  for (var type in attrOptions) {
                    if (attrOptions.hasOwnProperty(type)) {
                      this._createAttr(type, attrOptions[type]);
                    }
                  }
                };
                _proto._createScale = function _createScale(field) {
                  var scales = this.get("scales");
                  var scale = scales[field];
                  if (!scale) {
                    scale = this.get("chart").createScale(field);
                    scales[field] = scale;
                  }
                  return scale;
                };
                _proto._processData = function _processData() {
                  var self = this;
                  var data = this.get("data");
                  var dataArray = [];
                  var groupedArray = this._groupData(data);
                  if (this.get("ignoreEmptyGroup")) {
                    var yScale = this.getYScale();
                    groupedArray = groupedArray.filter(function(group2) {
                      return group2.some(function(item) {
                        return typeof item[yScale.field] !== "undefined";
                      });
                    });
                  }
                  for (var i = 0, len = groupedArray.length; i < len; i++) {
                    var subData = groupedArray[i];
                    var tempData = self._saveOrigin(subData);
                    if (this.hasAdjust("dodge")) {
                      self._numberic(tempData);
                    }
                    dataArray.push(tempData);
                  }
                  if (self.get("adjust")) {
                    self._adjustData(dataArray);
                  }
                  if (self.get("sortable")) {
                    self._sort(dataArray);
                  }
                  self.emit("afterprocessdata", {
                    dataArray
                  });
                  self.set("mappingData", dataArray);
                  self.set("dataArray", dataArray);
                  return dataArray;
                };
                _proto._saveOrigin = function _saveOrigin(data) {
                  var rst = [];
                  for (var i = 0, len = data.length; i < len; i++) {
                    var origin = data[i];
                    var obj = {};
                    for (var k in origin) {
                      obj[k] = origin[k];
                    }
                    obj[FIELD_ORIGIN] = origin;
                    rst.push(obj);
                  }
                  return rst;
                };
                _proto._numberic = function _numberic(data) {
                  var positionAttr = this.getAttr("position");
                  var scales = positionAttr.scales;
                  for (var j = 0, len = data.length; j < len; j++) {
                    var obj = data[j];
                    var count = Math.min(2, scales.length);
                    for (var i = 0; i < count; i++) {
                      var scale = scales[i];
                      if (scale.isCategory) {
                        var field = scale.field;
                        obj[field] = scale.translate(obj[field]);
                      }
                    }
                  }
                };
                _proto._adjustData = function _adjustData(dataArray) {
                  var self = this;
                  var adjust = self.get("adjust");
                  if (adjust) {
                    var adjustType = upperFirst(adjust.type);
                    if (!base[adjustType]) {
                      throw new Error("not support such adjust : " + adjust);
                    }
                    var xScale = self.getXScale();
                    var yScale = self.getYScale();
                    var cfg = mix$1({
                      xField: xScale.field,
                      yField: yScale.field
                    }, adjust);
                    var adjustObject = new base[adjustType](cfg);
                    adjustObject.processAdjust(dataArray);
                    if (adjustType === "Stack") {
                      self._updateStackRange(yScale.field, yScale, dataArray);
                    }
                  }
                };
                _proto._updateStackRange = function _updateStackRange(field, scale, dataArray) {
                  var mergeArray = merge$1(dataArray);
                  var min = scale.min;
                  var max = scale.max;
                  for (var i = 0, len = mergeArray.length; i < len; i++) {
                    var obj = mergeArray[i];
                    var tmpMin = Math.min.apply(null, obj[field]);
                    var tmpMax = Math.max.apply(null, obj[field]);
                    if (tmpMin < min) {
                      min = tmpMin;
                    }
                    if (tmpMax > max) {
                      max = tmpMax;
                    }
                  }
                  if (min < scale.min || max > scale.max) {
                    scale.change({
                      min,
                      max
                    });
                  }
                };
                _proto._sort = function _sort(mappedArray) {
                  var self = this;
                  var xScale = self.getXScale();
                  var field = xScale.field, type = xScale.type;
                  if (type !== "identity" && xScale.values.length > 1) {
                    each$1(mappedArray, function(itemArr) {
                      itemArr.sort(function(obj1, obj2) {
                        if (type === "timeCat") {
                          return toTimeStamp$1(obj1[FIELD_ORIGIN][field]) - toTimeStamp$1(obj2[FIELD_ORIGIN][field]);
                        }
                        return xScale.translate(obj1[FIELD_ORIGIN][field]) - xScale.translate(obj2[FIELD_ORIGIN][field]);
                      });
                    });
                  }
                  self.set("hasSorted", true);
                  self.set("dataArray", mappedArray);
                };
                _proto.paint = function paint() {
                  var self = this;
                  var dataArray = self.get("mappingData");
                  var mappedArray = [];
                  var shapeFactory = self.getShapeFactory();
                  shapeFactory.setCoord(self.get("coord"));
                  self._beforeMapping(dataArray);
                  for (var i = 0, len = dataArray.length; i < len; i++) {
                    var data = dataArray[i];
                    if (data.length) {
                      var mappedData = self._mapping(data);
                      mappedArray.push(mappedData);
                      self.draw(mappedData, shapeFactory);
                    }
                  }
                  self.set("dataArray", mappedArray);
                  this.generateAria();
                };
                _proto.getShapeFactory = function getShapeFactory() {
                  var shapeFactory = this.get("shapeFactory");
                  if (!shapeFactory) {
                    var shapeType = this.get("shapeType");
                    shapeFactory = Shape$1.getShapeFactory(shapeType);
                    this.set("shapeFactory", shapeFactory);
                  }
                  return shapeFactory;
                };
                _proto._mapping = function _mapping(data) {
                  var self = this;
                  var attrs = self.get("attrs");
                  var yField = self.getYScale().field;
                  var mappedCache = {};
                  var mappedData = new Array(data.length);
                  for (var k in attrs) {
                    if (attrs.hasOwnProperty(k)) {
                      var attr = attrs[k];
                      var names = attr.names;
                      var scales = attr.scales;
                      for (var i = 0, len = data.length; i < len; i++) {
                        var record = data[i];
                        var mappedRecord = _extends({}, record, mappedData[i]);
                        mappedRecord[FIELD_ORIGIN_Y] = record[yField];
                        if (attr.type === "position") {
                          var values2 = self._getAttrValues(attr, record);
                          for (var j = 0, _len = values2.length; j < _len; j++) {
                            var val = values2[j];
                            var name = names[j];
                            mappedRecord[name] = isArray$1(val) && val.length === 1 ? val[0] : val;
                          }
                        } else {
                          var _name = names[0];
                          var field = scales[0].field;
                          var value = record[field];
                          var key = "" + _name + value;
                          var _values = mappedCache[key];
                          if (!_values) {
                            _values = self._getAttrValues(attr, record);
                            mappedCache[key] = _values;
                          }
                          mappedRecord[_name] = _values[0];
                        }
                        mappedData[i] = mappedRecord;
                      }
                    }
                  }
                  return mappedData;
                };
                _proto._getAttrValues = function _getAttrValues(attr, record) {
                  var scales = attr.scales;
                  var params = [];
                  for (var i = 0, len = scales.length; i < len; i++) {
                    var scale = scales[i];
                    var field = scale.field;
                    if (scale.type === "identity") {
                      params.push(scale.value);
                    } else {
                      params.push(record[field]);
                    }
                  }
                  var values2 = attr.mapping.apply(attr, params);
                  return values2;
                };
                _proto.getAttrValue = function getAttrValue(attrName, record) {
                  var attr = this.getAttr(attrName);
                  var rst = null;
                  if (attr) {
                    var values2 = this._getAttrValues(attr, record);
                    rst = values2[0];
                  }
                  return rst;
                };
                _proto._beforeMapping = function _beforeMapping(dataArray) {
                  var self = this;
                  if (self.get("generatePoints")) {
                    self._generatePoints(dataArray);
                  }
                };
                _proto.isInCircle = function isInCircle() {
                  var coord = this.get("coord");
                  return coord && coord.isPolar;
                };
                _proto.getCallbackCfg = function getCallbackCfg(fields, cfg, origin) {
                  if (!fields) {
                    return cfg;
                  }
                  var tmpCfg = {};
                  var params = fields.map(function(field) {
                    return origin[field];
                  });
                  each$1(cfg, function(v, k) {
                    if (isFunction$1(v)) {
                      tmpCfg[k] = v.apply(null, params);
                    } else {
                      tmpCfg[k] = v;
                    }
                  });
                  return tmpCfg;
                };
                _proto.getDrawCfg = function getDrawCfg(obj) {
                  var self = this;
                  var isInCircle = self.isInCircle();
                  var cfg = {
                    origin: obj,
                    x: obj.x,
                    y: obj.y,
                    color: obj.color,
                    size: obj.size,
                    shape: obj.shape,
                    isInCircle,
                    opacity: obj.opacity
                  };
                  var styleOptions = self.get("styleOptions");
                  if (styleOptions && styleOptions.style) {
                    cfg.style = self.getCallbackCfg(styleOptions.fields, styleOptions.style, obj[FIELD_ORIGIN]);
                  }
                  if (self.get("generatePoints")) {
                    cfg.points = obj.points;
                    cfg.nextPoints = obj.nextPoints;
                  }
                  if (isInCircle) {
                    cfg.center = self.get("coord").center;
                  }
                  return cfg;
                };
                _proto.draw = function draw(data, shapeFactory) {
                  var self = this;
                  var container = self.get("container");
                  var yScale = self.getYScale();
                  each$1(data, function(obj, index) {
                    if (yScale && isNil$1(obj._origin[yScale.field])) {
                      return;
                    }
                    obj.index = index;
                    var cfg = self.getDrawCfg(obj);
                    var shape = obj.shape;
                    self.drawShape(shape, obj, cfg, container, shapeFactory);
                  });
                };
                _proto.drawShape = function drawShape2(shape, shapeData, cfg, container, shapeFactory) {
                  var gShape = shapeFactory.drawShape(shape, cfg, container);
                  if (gShape) {
                    each$1([].concat(gShape), function(s) {
                      s.set("origin", shapeData);
                    });
                  }
                };
                _proto._generatePoints = function _generatePoints(dataArray) {
                  var self = this;
                  var shapeFactory = self.getShapeFactory();
                  var shapeAttr = self.getAttr("shape");
                  each$1(dataArray, function(data) {
                    for (var i = 0, len = data.length; i < len; i++) {
                      var obj = data[i];
                      var cfg = self.createShapePointsCfg(obj);
                      var shape = shapeAttr ? self._getAttrValues(shapeAttr, obj) : null;
                      var points = shapeFactory.getShapePoints(shape, cfg);
                      obj.points = points;
                    }
                  });
                  each$1(dataArray, function(data, index) {
                    var nextData = dataArray[index + 1];
                    if (nextData) {
                      data[0].nextPoints = nextData[0].points;
                    }
                  });
                };
                _proto.generateAria = function generateAria() {
                  var container = this.get("container");
                  var aria = container.get("aria");
                  if (!aria) {
                    return;
                  }
                  var ariaLables = [];
                  var coord = this.get("coord");
                  var xScale = this.getXScale();
                  var yScale = this.getYScale();
                  var coordAriaLabel = generateCoordAria(coord, xScale, yScale);
                  ariaLables.push(coordAriaLabel);
                  var _lang$geometry = lang.geometry, prefix = _lang$geometry.prefix, oneData = _lang$geometry.oneData, partData = _lang$geometry.partData, allData = _lang$geometry.allData;
                  var dataArray = this.get("dataArray");
                  var count = dataArray.length;
                  var groupScale = this._getGroupScales()[0];
                  if (groupScale) {
                    var prefixLabel = substitute(prefix, {
                      count
                    });
                    ariaLables.push(prefixLabel);
                    each$1(dataArray, function(data, index) {
                      var len = data.length;
                      if (!len)
                        return;
                      var firstObj = data[0]._origin;
                      if (len === 1) {
                        ariaLables.push(substitute(oneData, {
                          index: index + 1,
                          count: len,
                          name: firstObj[groupScale.field],
                          values: firstObj[yScale.field]
                        }));
                      } else {
                        var template = len > 5 ? partData : allData;
                        var values2 = data.slice(0, 5).map(function(record) {
                          var _origin = record._origin;
                          var xValue = xScale.getText(_origin[xScale.field]);
                          var yValue = yScale.getText(_origin[yScale.field]);
                          return xValue + ":" + yValue;
                        });
                        ariaLables.push(substitute(template, {
                          index: index + 1,
                          count: len,
                          part: 3,
                          name: firstObj[groupScale.field],
                          values: values2.join(" ")
                        }));
                      }
                    });
                  }
                  container.set("ariaLabel", ariaLables.join(""));
                };
                _proto.createShapePointsCfg = function createShapePointsCfg(obj) {
                  var xScale = this.getXScale();
                  var yScale = this.getYScale();
                  var x = this._normalizeValues(obj[xScale.field], xScale);
                  var y;
                  if (yScale) {
                    y = this._normalizeValues(obj[yScale.field], yScale);
                  } else {
                    y = obj.y ? obj.y : 0.1;
                  }
                  return {
                    x,
                    y,
                    y0: yScale ? yScale.scale(this.getYMinValue()) : void 0
                  };
                };
                _proto.getYMinValue = function getYMinValue() {
                  var yScale = this.getYScale();
                  var min = yScale.min, max = yScale.max;
                  var value;
                  if (this.get("startOnZero")) {
                    if (max <= 0 && min <= 0) {
                      value = max;
                    } else {
                      value = min >= 0 ? min : 0;
                    }
                  } else {
                    value = min;
                  }
                  return value;
                };
                _proto._normalizeValues = function _normalizeValues(values2, scale) {
                  var rst = [];
                  if (isArray$1(values2)) {
                    for (var i = 0, len = values2.length; i < len; i++) {
                      var v = values2[i];
                      rst.push(scale.scale(v));
                    }
                  } else {
                    rst = scale.scale(values2);
                  }
                  return rst;
                };
                _proto.getAttr = function getAttr(name) {
                  return this.get("attrs")[name];
                };
                _proto.getXScale = function getXScale() {
                  return this.getAttr("position").scales[0];
                };
                _proto.getYScale = function getYScale() {
                  return this.getAttr("position").scales[1];
                };
                _proto.hasAdjust = function hasAdjust(adjust) {
                  return this.get("adjust") && this.get("adjust").type === adjust;
                };
                _proto._getSnap = function _getSnap(scale, item, arr) {
                  var i = 0;
                  var values2;
                  var yField = this.getYScale().field;
                  if (this.hasAdjust("stack") && scale.field === yField) {
                    values2 = [];
                    arr.forEach(function(obj) {
                      values2.push(obj[FIELD_ORIGIN_Y]);
                    });
                    for (var len = values2.length; i < len; i++) {
                      if (values2[0][0] > item) {
                        break;
                      }
                      if (values2[values2.length - 1][1] <= item) {
                        i = values2.length - 1;
                        break;
                      }
                      if (values2[i][0] <= item && values2[i][1] > item) {
                        break;
                      }
                    }
                  } else {
                    values2 = scale.values;
                    values2.sort(function(a, b) {
                      return a - b;
                    });
                    for (var _len2 = values2.length; i < _len2; i++) {
                      if (_len2 <= 1) {
                        break;
                      }
                      if ((values2[0] + values2[1]) / 2 > item) {
                        break;
                      }
                      if ((values2[i - 1] + values2[i]) / 2 <= item && (values2[i + 1] + values2[i]) / 2 > item) {
                        break;
                      }
                      if ((values2[values2.length - 2] + values2[values2.length - 1]) / 2 <= item) {
                        i = values2.length - 1;
                        break;
                      }
                    }
                  }
                  var result = values2[i];
                  return result;
                };
                _proto.getSnapRecords = function getSnapRecords(point) {
                  var self = this;
                  var coord = self.get("coord");
                  var xScale = self.getXScale();
                  var yScale = self.getYScale();
                  var xfield = xScale.field;
                  var dataArray = self.get("dataArray");
                  if (!this.get("hasSorted")) {
                    this._sort(dataArray);
                  }
                  var rst = [];
                  var invertPoint = coord.invertPoint(point);
                  var invertPointX = invertPoint.x;
                  if (self.isInCircle() && !coord.transposed && invertPointX > (1 + xScale.rangeMax()) / 2) {
                    invertPointX = xScale.rangeMin();
                  }
                  if (xScale.isCategory) {
                    var min = xScale.rangeMin();
                    var max = xScale.rangeMax();
                    if (invertPointX < min) {
                      invertPointX = min;
                    }
                    if (invertPointX > max) {
                      invertPointX = max;
                    }
                  }
                  var xValue = xScale.invert(invertPointX);
                  if (!xScale.isCategory) {
                    xValue = self._getSnap(xScale, xValue);
                  }
                  var tmp = [];
                  dataArray.forEach(function(data) {
                    data.forEach(function(obj) {
                      var originValue = isNil$1(obj[FIELD_ORIGIN]) ? obj[xfield] : obj[FIELD_ORIGIN][xfield];
                      if (self._isEqual(originValue, xValue, xScale)) {
                        tmp.push(obj);
                      }
                    });
                  });
                  if (this.hasAdjust("stack") && coord.isPolar && coord.transposed) {
                    if (invertPointX >= 0 && invertPointX <= 1) {
                      var yValue = yScale.invert(invertPoint.y);
                      yValue = self._getSnap(yScale, yValue, tmp);
                      tmp.forEach(function(obj) {
                        if (isArray$1(yValue) ? obj[FIELD_ORIGIN_Y].toString() === yValue.toString() : obj[FIELD_ORIGIN_Y] === yValue) {
                          rst.push(obj);
                        }
                      });
                    }
                  } else {
                    rst = tmp;
                  }
                  return rst;
                };
                _proto.getRecords = function getRecords(value) {
                  var _this = this;
                  var xScale = this.getXScale();
                  var dataArray = this.get("dataArray");
                  var xfield = xScale.field;
                  return dataArray.map(function(data) {
                    for (var len = data.length, i = len - 1; i >= 0; i--) {
                      var obj = data[i];
                      var originValue = isNil$1(obj[FIELD_ORIGIN]) ? obj[xfield] : obj[FIELD_ORIGIN][xfield];
                      if (_this._isEqual(originValue, value, xScale)) {
                        return obj;
                      }
                    }
                    return null;
                  });
                };
                _proto._isEqual = function _isEqual(originValue, value, scale) {
                  if (scale.type === "timeCat") {
                    return toTimeStamp$1(originValue) === value;
                  }
                  return value === originValue;
                };
                _proto.position = function position(field) {
                  this._setAttrOptions("position", {
                    field
                  });
                  return this;
                };
                _proto.color = function color(field, values2) {
                  this._createAttrOption("color", field, values2, Global.colors);
                  return this;
                };
                _proto.size = function size2(field, values2) {
                  this._createAttrOption("size", field, values2, Global.sizes);
                  return this;
                };
                _proto.shape = function shape(field, values2) {
                  var type = this.get("type");
                  var shapes = Global.shapes[type] || [];
                  this._createAttrOption("shape", field, values2, shapes);
                  return this;
                };
                _proto.style = function style(field, cfg) {
                  var styleOptions = this.get("styleOptions");
                  if (!styleOptions) {
                    styleOptions = {};
                    this.set("styleOptions", styleOptions);
                  }
                  if (isObject$1(field)) {
                    cfg = field;
                    field = null;
                  }
                  var fields;
                  if (field) {
                    fields = parseFields(field);
                  }
                  styleOptions.fields = fields;
                  styleOptions.style = cfg;
                  return this;
                };
                _proto.adjust = function adjust(type) {
                  if (isString(type)) {
                    type = {
                      type
                    };
                  }
                  this.set("adjust", type);
                  return this;
                };
                _proto.animate = function animate(cfg) {
                  this.set("animateCfg", cfg);
                  return this;
                };
                _proto.changeData = function changeData(data) {
                  this.set("data", data);
                  this.set("scales", {});
                  if (!this.get("isInit"))
                    return;
                  this.set("isInit", false);
                  this.init();
                };
                _proto.clearInner = function clearInner2() {
                  var container = this.get("container");
                  if (container) {
                    container.clear();
                  }
                };
                _proto.reset = function reset() {
                  this.set("isInit", false);
                  this.set("attrs", {});
                  this.set("attrOptions", {});
                  this.set("adjust", null);
                  this.clearInner();
                };
                _proto.clear = function clear2() {
                  this.clearInner();
                };
                _proto.destroy = function destroy() {
                  this.set("isInit", false);
                  this.clear();
                  _Base.prototype.destroy.call(this);
                };
                _proto._display = function _display(visible) {
                  this.set("visible", visible);
                  var container = this.get("container");
                  var canvas = container.get("canvas");
                  container.set("visible", visible);
                  canvas.draw();
                };
                _proto.show = function show() {
                  this._display(true);
                };
                _proto.hide = function hide() {
                  this._display(false);
                };
                return Geom2;
              }(Base$2);
              var methodCache = {};
              function getTickMethod(key) {
                return methodCache[key];
              }
              function registerTickMethod(key, method) {
                methodCache[key] = method;
              }
              var Scale = function() {
                function Scale2(cfg) {
                  this.type = "base";
                  this.isCategory = false;
                  this.isLinear = false;
                  this.isContinuous = false;
                  this.isIdentity = false;
                  this.values = [];
                  this.range = [0, 1];
                  this.ticks = [];
                  this.__cfg__ = cfg;
                  this.initCfg();
                  this.init();
                }
                Scale2.prototype.translate = function(v) {
                  return v;
                };
                Scale2.prototype.change = function(cfg) {
                  mix$1(this.__cfg__, cfg);
                  this.init();
                };
                Scale2.prototype.clone = function() {
                  return this.constructor(this.__cfg__);
                };
                Scale2.prototype.getTicks = function() {
                  var _this = this;
                  return map$1(this.ticks, function(tick, idx) {
                    if (isObject$1(tick)) {
                      return tick;
                    }
                    return {
                      text: _this.getText(tick, idx),
                      tickValue: tick,
                      value: _this.scale(tick)
                    };
                  });
                };
                Scale2.prototype.getText = function(value, key) {
                  var formatter = this.formatter;
                  var res = formatter ? formatter(value, key) : value;
                  if (isNil$1(res) || !isFunction$1(res.toString)) {
                    return "";
                  }
                  return res.toString();
                };
                Scale2.prototype.getConfig = function(key) {
                  return this.__cfg__[key];
                };
                Scale2.prototype.init = function() {
                  mix$1(this, this.__cfg__);
                  this.setDomain();
                  if (isEmpty(this.getConfig("ticks"))) {
                    this.ticks = this.calculateTicks();
                  }
                };
                Scale2.prototype.initCfg = function() {
                };
                Scale2.prototype.setDomain = function() {
                };
                Scale2.prototype.calculateTicks = function() {
                  var tickMethod = this.tickMethod;
                  var ticks = [];
                  if (isString(tickMethod)) {
                    var method = getTickMethod(tickMethod);
                    if (!method) {
                      throw new Error("There is no method to to calculate ticks!");
                    }
                    ticks = method(this);
                  } else if (isFunction$1(tickMethod)) {
                    ticks = tickMethod(this);
                  }
                  return ticks;
                };
                Scale2.prototype.rangeMin = function() {
                  return this.range[0];
                };
                Scale2.prototype.rangeMax = function() {
                  return this.range[1];
                };
                Scale2.prototype.calcPercent = function(value, min, max) {
                  if (isNumber(value)) {
                    return (value - min) / (max - min);
                  }
                  return NaN;
                };
                Scale2.prototype.calcValue = function(percent, min, max) {
                  return min + percent * (max - min);
                };
                return Scale2;
              }();
              var Category$1 = function(_super) {
                __extends(Category2, _super);
                function Category2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "cat";
                  _this.isCategory = true;
                  return _this;
                }
                Category2.prototype.buildIndexMap = function() {
                  if (!this.translateIndexMap) {
                    this.translateIndexMap = /* @__PURE__ */ new Map();
                    for (var i = 0; i < this.values.length; i++) {
                      this.translateIndexMap.set(this.values[i], i);
                    }
                  }
                };
                Category2.prototype.translate = function(value) {
                  this.buildIndexMap();
                  var idx = this.translateIndexMap.get(value);
                  if (idx === void 0) {
                    idx = isNumber(value) ? value : NaN;
                  }
                  return idx;
                };
                Category2.prototype.scale = function(value) {
                  var order = this.translate(value);
                  var percent = this.calcPercent(order, this.min, this.max);
                  return this.calcValue(percent, this.rangeMin(), this.rangeMax());
                };
                Category2.prototype.invert = function(scaledValue) {
                  var domainRange = this.max - this.min;
                  var percent = this.calcPercent(scaledValue, this.rangeMin(), this.rangeMax());
                  var idx = Math.round(domainRange * percent) + this.min;
                  if (idx < this.min || idx > this.max) {
                    return NaN;
                  }
                  return this.values[idx];
                };
                Category2.prototype.getText = function(value) {
                  var args = [];
                  for (var _i = 1; _i < arguments.length; _i++) {
                    args[_i - 1] = arguments[_i];
                  }
                  var v = value;
                  if (isNumber(value) && !this.values.includes(value)) {
                    v = this.values[v];
                  }
                  return _super.prototype.getText.apply(this, __spreadArrays([v], args));
                };
                Category2.prototype.initCfg = function() {
                  this.tickMethod = "cat";
                };
                Category2.prototype.setDomain = function() {
                  if (isNil$1(this.getConfig("min"))) {
                    this.min = 0;
                  }
                  if (isNil$1(this.getConfig("max"))) {
                    var size2 = this.values.length;
                    this.max = size2 > 1 ? size2 - 1 : size2;
                  }
                  if (this.translateIndexMap) {
                    this.translateIndexMap = void 0;
                  }
                };
                return Category2;
              }(Scale);
              var token = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g;
              var twoDigitsOptional = "[1-9]\\d?";
              var twoDigits = "\\d\\d";
              var word = "[^\\s]+";
              var literal = /\[([^]*?)\]/gm;
              function shorten(arr, sLen) {
                var newArr = [];
                for (var i = 0, len = arr.length; i < len; i++) {
                  newArr.push(arr[i].substr(0, sLen));
                }
                return newArr;
              }
              var monthUpdate = function monthUpdate2(arrName) {
                return function(v, i18n) {
                  var lowerCaseArr = i18n[arrName].map(function(v2) {
                    return v2.toLowerCase();
                  });
                  var index = lowerCaseArr.indexOf(v.toLowerCase());
                  if (index > -1) {
                    return index;
                  }
                  return null;
                };
              };
              function assign(origObj) {
                var args = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                  args[_i - 1] = arguments[_i];
                }
                for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
                  var obj = args_1[_a];
                  for (var key in obj) {
                    origObj[key] = obj[key];
                  }
                }
                return origObj;
              }
              var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
              var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
              var monthNamesShort = shorten(monthNames, 3);
              var dayNamesShort = shorten(dayNames, 3);
              var defaultI18n = {
                dayNamesShort,
                dayNames,
                monthNamesShort,
                monthNames,
                amPm: ["am", "pm"],
                DoFn: function DoFn(dayOfMonth) {
                  return dayOfMonth + ["th", "st", "nd", "rd"][dayOfMonth % 10 > 3 ? 0 : (dayOfMonth - dayOfMonth % 10 !== 10 ? 1 : 0) * dayOfMonth % 10];
                }
              };
              var globalI18n = assign({}, defaultI18n);
              var setGlobalDateI18n = function setGlobalDateI18n2(i18n) {
                return globalI18n = assign(globalI18n, i18n);
              };
              var regexEscape = function regexEscape2(str) {
                return str.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
              };
              var pad = function pad2(val, len) {
                if (len === void 0) {
                  len = 2;
                }
                val = String(val);
                while (val.length < len) {
                  val = "0" + val;
                }
                return val;
              };
              var formatFlags = {
                D: function D(dateObj) {
                  return String(dateObj.getDate());
                },
                DD: function DD(dateObj) {
                  return pad(dateObj.getDate());
                },
                Do: function Do(dateObj, i18n) {
                  return i18n.DoFn(dateObj.getDate());
                },
                d: function d(dateObj) {
                  return String(dateObj.getDay());
                },
                dd: function dd(dateObj) {
                  return pad(dateObj.getDay());
                },
                ddd: function ddd(dateObj, i18n) {
                  return i18n.dayNamesShort[dateObj.getDay()];
                },
                dddd: function dddd(dateObj, i18n) {
                  return i18n.dayNames[dateObj.getDay()];
                },
                M: function M(dateObj) {
                  return String(dateObj.getMonth() + 1);
                },
                MM: function MM(dateObj) {
                  return pad(dateObj.getMonth() + 1);
                },
                MMM: function MMM(dateObj, i18n) {
                  return i18n.monthNamesShort[dateObj.getMonth()];
                },
                MMMM: function MMMM(dateObj, i18n) {
                  return i18n.monthNames[dateObj.getMonth()];
                },
                YY: function YY(dateObj) {
                  return pad(String(dateObj.getFullYear()), 4).substr(2);
                },
                YYYY: function YYYY(dateObj) {
                  return pad(dateObj.getFullYear(), 4);
                },
                h: function h(dateObj) {
                  return String(dateObj.getHours() % 12 || 12);
                },
                hh: function hh(dateObj) {
                  return pad(dateObj.getHours() % 12 || 12);
                },
                H: function H(dateObj) {
                  return String(dateObj.getHours());
                },
                HH: function HH(dateObj) {
                  return pad(dateObj.getHours());
                },
                m: function m(dateObj) {
                  return String(dateObj.getMinutes());
                },
                mm: function mm(dateObj) {
                  return pad(dateObj.getMinutes());
                },
                s: function s(dateObj) {
                  return String(dateObj.getSeconds());
                },
                ss: function ss(dateObj) {
                  return pad(dateObj.getSeconds());
                },
                S: function S(dateObj) {
                  return String(Math.round(dateObj.getMilliseconds() / 100));
                },
                SS: function SS(dateObj) {
                  return pad(Math.round(dateObj.getMilliseconds() / 10), 2);
                },
                SSS: function SSS(dateObj) {
                  return pad(dateObj.getMilliseconds(), 3);
                },
                a: function a(dateObj, i18n) {
                  return dateObj.getHours() < 12 ? i18n.amPm[0] : i18n.amPm[1];
                },
                A: function A(dateObj, i18n) {
                  return dateObj.getHours() < 12 ? i18n.amPm[0].toUpperCase() : i18n.amPm[1].toUpperCase();
                },
                ZZ: function ZZ(dateObj) {
                  var offset = dateObj.getTimezoneOffset();
                  return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60) * 100 + Math.abs(offset) % 60, 4);
                },
                Z: function Z(dateObj) {
                  var offset = dateObj.getTimezoneOffset();
                  return (offset > 0 ? "-" : "+") + pad(Math.floor(Math.abs(offset) / 60), 2) + ":" + pad(Math.abs(offset) % 60, 2);
                }
              };
              var monthParse = function monthParse2(v) {
                return +v - 1;
              };
              var emptyDigits = [null, twoDigitsOptional];
              var emptyWord = [null, word];
              var amPm = ["isPm", word, function(v, i18n) {
                var val = v.toLowerCase();
                if (val === i18n.amPm[0]) {
                  return 0;
                } else if (val === i18n.amPm[1]) {
                  return 1;
                }
                return null;
              }];
              var timezoneOffset = ["timezoneOffset", "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?", function(v) {
                var parts = (v + "").match(/([+-]|\d\d)/gi);
                if (parts) {
                  var minutes = +parts[1] * 60 + parseInt(parts[2], 10);
                  return parts[0] === "+" ? minutes : -minutes;
                }
                return 0;
              }];
              var parseFlags = {
                D: ["day", twoDigitsOptional],
                DD: ["day", twoDigits],
                Do: ["day", twoDigitsOptional + word, function(v) {
                  return parseInt(v, 10);
                }],
                M: ["month", twoDigitsOptional, monthParse],
                MM: ["month", twoDigits, monthParse],
                YY: ["year", twoDigits, function(v) {
                  var now = new Date();
                  var cent = +("" + now.getFullYear()).substr(0, 2);
                  return +("" + (+v > 68 ? cent - 1 : cent) + v);
                }],
                h: ["hour", twoDigitsOptional, void 0, "isPm"],
                hh: ["hour", twoDigits, void 0, "isPm"],
                H: ["hour", twoDigitsOptional],
                HH: ["hour", twoDigits],
                m: ["minute", twoDigitsOptional],
                mm: ["minute", twoDigits],
                s: ["second", twoDigitsOptional],
                ss: ["second", twoDigits],
                YYYY: ["year", "\\d{4}"],
                S: ["millisecond", "\\d", function(v) {
                  return +v * 100;
                }],
                SS: ["millisecond", twoDigits, function(v) {
                  return +v * 10;
                }],
                SSS: ["millisecond", "\\d{3}"],
                d: emptyDigits,
                dd: emptyDigits,
                ddd: emptyWord,
                dddd: emptyWord,
                MMM: ["month", word, monthUpdate("monthNamesShort")],
                MMMM: ["month", word, monthUpdate("monthNames")],
                a: amPm,
                A: amPm,
                ZZ: timezoneOffset,
                Z: timezoneOffset
              };
              var globalMasks = {
                default: "ddd MMM DD YYYY HH:mm:ss",
                shortDate: "M/D/YY",
                mediumDate: "MMM D, YYYY",
                longDate: "MMMM D, YYYY",
                fullDate: "dddd, MMMM D, YYYY",
                isoDate: "YYYY-MM-DD",
                isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
                shortTime: "HH:mm",
                mediumTime: "HH:mm:ss",
                longTime: "HH:mm:ss.SSS"
              };
              var setGlobalDateMasks = function setGlobalDateMasks2(masks) {
                return assign(globalMasks, masks);
              };
              var format = function format2(dateObj, mask, i18n) {
                if (mask === void 0) {
                  mask = globalMasks["default"];
                }
                if (i18n === void 0) {
                  i18n = {};
                }
                if (typeof dateObj === "number") {
                  dateObj = new Date(dateObj);
                }
                if (Object.prototype.toString.call(dateObj) !== "[object Date]" || isNaN(dateObj.getTime())) {
                  throw new Error("Invalid Date pass to format");
                }
                mask = globalMasks[mask] || mask;
                var literals = [];
                mask = mask.replace(literal, function($0, $1) {
                  literals.push($1);
                  return "@@@";
                });
                var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
                mask = mask.replace(token, function($0) {
                  return formatFlags[$0](dateObj, combinedI18nSettings);
                });
                return mask.replace(/@@@/g, function() {
                  return literals.shift();
                });
              };
              function parse(dateStr, format2, i18n) {
                if (i18n === void 0) {
                  i18n = {};
                }
                if (typeof format2 !== "string") {
                  throw new Error("Invalid format in fecha parse");
                }
                format2 = globalMasks[format2] || format2;
                if (dateStr.length > 1e3) {
                  return null;
                }
                var today = new Date();
                var dateInfo = {
                  year: today.getFullYear(),
                  month: 0,
                  day: 1,
                  hour: 0,
                  minute: 0,
                  second: 0,
                  millisecond: 0,
                  isPm: null,
                  timezoneOffset: null
                };
                var parseInfo = [];
                var literals = [];
                var newFormat = format2.replace(literal, function($0, $1) {
                  literals.push(regexEscape($1));
                  return "@@@";
                });
                var specifiedFields = {};
                var requiredFields = {};
                newFormat = regexEscape(newFormat).replace(token, function($0) {
                  var info = parseFlags[$0];
                  var field2 = info[0], regex = info[1], requiredField = info[3];
                  if (specifiedFields[field2]) {
                    throw new Error("Invalid format. " + field2 + " specified twice in format");
                  }
                  specifiedFields[field2] = true;
                  if (requiredField) {
                    requiredFields[requiredField] = true;
                  }
                  parseInfo.push(info);
                  return "(" + regex + ")";
                });
                Object.keys(requiredFields).forEach(function(field2) {
                  if (!specifiedFields[field2]) {
                    throw new Error("Invalid format. " + field2 + " is required in specified format");
                  }
                });
                newFormat = newFormat.replace(/@@@/g, function() {
                  return literals.shift();
                });
                var matches = dateStr.match(new RegExp(newFormat, "i"));
                if (!matches) {
                  return null;
                }
                var combinedI18nSettings = assign(assign({}, globalI18n), i18n);
                for (var i = 1; i < matches.length; i++) {
                  var _a = parseInfo[i - 1], field = _a[0], parser = _a[2];
                  var value = parser ? parser(matches[i], combinedI18nSettings) : +matches[i];
                  if (value == null) {
                    return null;
                  }
                  dateInfo[field] = value;
                }
                if (dateInfo.isPm === 1 && dateInfo.hour != null && +dateInfo.hour !== 12) {
                  dateInfo.hour = +dateInfo.hour + 12;
                } else if (dateInfo.isPm === 0 && +dateInfo.hour === 12) {
                  dateInfo.hour = 0;
                }
                var dateWithoutTZ = new Date(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute, dateInfo.second, dateInfo.millisecond);
                var validateFields = [["month", "getMonth"], ["day", "getDate"], ["hour", "getHours"], ["minute", "getMinutes"], ["second", "getSeconds"]];
                for (var i = 0, len = validateFields.length; i < len; i++) {
                  if (specifiedFields[validateFields[i][0]] && dateInfo[validateFields[i][0]] !== dateWithoutTZ[validateFields[i][1]]()) {
                    return null;
                  }
                }
                if (dateInfo.timezoneOffset == null) {
                  return dateWithoutTZ;
                }
                return new Date(Date.UTC(dateInfo.year, dateInfo.month, dateInfo.day, dateInfo.hour, dateInfo.minute - dateInfo.timezoneOffset, dateInfo.second, dateInfo.millisecond));
              }
              var fecha = {
                format,
                parse,
                defaultI18n,
                setGlobalDateI18n,
                setGlobalDateMasks
              };
              var fecha1 = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                "default": fecha,
                assign,
                format,
                parse,
                defaultI18n,
                setGlobalDateI18n,
                setGlobalDateMasks
              });
              function bisector(getter) {
                return function(a, x, _lo, _hi) {
                  var lo = isNil$1(_lo) ? 0 : _lo;
                  var hi = isNil$1(_hi) ? a.length : _hi;
                  while (lo < hi) {
                    var mid = lo + hi >>> 1;
                    if (getter(a[mid]) > x) {
                      hi = mid;
                    } else {
                      lo = mid + 1;
                    }
                  }
                  return lo;
                };
              }
              var FORMAT_METHOD = "format";
              function timeFormat(time, mask) {
                var method = fecha1[FORMAT_METHOD] || fecha[FORMAT_METHOD];
                return method(time, mask);
              }
              function toTimeStamp(value) {
                if (isString(value)) {
                  if (value.indexOf("T") > 0) {
                    value = new Date(value).getTime();
                  } else {
                    value = new Date(value.replace(/-/gi, "/")).getTime();
                  }
                }
                if (isDate(value)) {
                  value = value.getTime();
                }
                return value;
              }
              var SECOND = 1e3;
              var MINUTE = 60 * SECOND;
              var HOUR = 60 * MINUTE;
              var DAY = 24 * HOUR;
              var MONTH = DAY * 31;
              var YEAR = DAY * 365;
              var intervals = [["HH:mm:ss", SECOND], ["HH:mm:ss", SECOND * 10], ["HH:mm:ss", SECOND * 30], ["HH:mm", MINUTE], ["HH:mm", MINUTE * 10], ["HH:mm", MINUTE * 30], ["HH", HOUR], ["HH", HOUR * 6], ["HH", HOUR * 12], ["YYYY-MM-DD", DAY], ["YYYY-MM-DD", DAY * 4], ["YYYY-WW", DAY * 7], ["YYYY-MM", MONTH], ["YYYY-MM", MONTH * 4], ["YYYY-MM", MONTH * 6], ["YYYY", DAY * 380]];
              function getTickInterval(min, max, tickCount) {
                var target = (max - min) / tickCount;
                var idx = bisector(function(o) {
                  return o[1];
                })(intervals, target) - 1;
                var interval = intervals[idx];
                if (idx < 0) {
                  interval = intervals[0];
                } else if (idx >= intervals.length) {
                  interval = last(intervals);
                }
                return interval;
              }
              var TimeCat$1 = function(_super) {
                __extends(TimeCat2, _super);
                function TimeCat2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "timeCat";
                  return _this;
                }
                TimeCat2.prototype.translate = function(value) {
                  value = toTimeStamp(value);
                  var index = this.values.indexOf(value);
                  if (index === -1) {
                    if (isNumber(value) && value < this.values.length) {
                      index = value;
                    } else {
                      index = NaN;
                    }
                  }
                  return index;
                };
                TimeCat2.prototype.getText = function(value, tickIndex) {
                  var index = this.translate(value);
                  if (index > -1) {
                    var result = this.values[index];
                    var formatter = this.formatter;
                    result = formatter ? formatter(result, tickIndex) : timeFormat(result, this.mask);
                    return result;
                  }
                  return value;
                };
                TimeCat2.prototype.initCfg = function() {
                  this.tickMethod = "time-cat";
                  this.mask = "YYYY-MM-DD";
                  this.tickCount = 7;
                };
                TimeCat2.prototype.setDomain = function() {
                  var values2 = this.values;
                  each$1(values2, function(v, i) {
                    values2[i] = toTimeStamp(v);
                  });
                  values2.sort(function(v1, v2) {
                    return v1 - v2;
                  });
                  _super.prototype.setDomain.call(this);
                };
                return TimeCat2;
              }(Category$1);
              var Continuous = function(_super) {
                __extends(Continuous2, _super);
                function Continuous2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.isContinuous = true;
                  return _this;
                }
                Continuous2.prototype.scale = function(value) {
                  if (isNil$1(value)) {
                    return NaN;
                  }
                  var rangeMin = this.rangeMin();
                  var rangeMax = this.rangeMax();
                  var max = this.max;
                  var min = this.min;
                  if (max === min) {
                    return rangeMin;
                  }
                  var percent = this.getScalePercent(value);
                  return rangeMin + percent * (rangeMax - rangeMin);
                };
                Continuous2.prototype.init = function() {
                  _super.prototype.init.call(this);
                  var ticks = this.ticks;
                  var firstTick = head(ticks);
                  var lastTick = last(ticks);
                  if (firstTick < this.min) {
                    this.min = firstTick;
                  }
                  if (lastTick > this.max) {
                    this.max = lastTick;
                  }
                  if (!isNil$1(this.minLimit)) {
                    this.min = firstTick;
                  }
                  if (!isNil$1(this.maxLimit)) {
                    this.max = lastTick;
                  }
                };
                Continuous2.prototype.setDomain = function() {
                  var _a = getRange$1(this.values), min = _a.min, max = _a.max;
                  if (isNil$1(this.min)) {
                    this.min = min;
                  }
                  if (isNil$1(this.max)) {
                    this.max = max;
                  }
                  if (this.min > this.max) {
                    this.min = min;
                    this.max = max;
                  }
                };
                Continuous2.prototype.calculateTicks = function() {
                  var _this = this;
                  var ticks = _super.prototype.calculateTicks.call(this);
                  if (!this.nice) {
                    ticks = filter(ticks, function(tick) {
                      return tick >= _this.min && tick <= _this.max;
                    });
                  }
                  return ticks;
                };
                Continuous2.prototype.getScalePercent = function(value) {
                  var max = this.max;
                  var min = this.min;
                  return (value - min) / (max - min);
                };
                Continuous2.prototype.getInvertPercent = function(value) {
                  return (value - this.rangeMin()) / (this.rangeMax() - this.rangeMin());
                };
                return Continuous2;
              }(Scale);
              var Linear$1 = function(_super) {
                __extends(Linear2, _super);
                function Linear2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "linear";
                  _this.isLinear = true;
                  return _this;
                }
                Linear2.prototype.invert = function(value) {
                  var percent = this.getInvertPercent(value);
                  return this.min + percent * (this.max - this.min);
                };
                Linear2.prototype.initCfg = function() {
                  this.tickMethod = "wilkinson-extended";
                  this.nice = false;
                };
                return Linear2;
              }(Continuous);
              function calBase(a, b) {
                var e = Math.E;
                var value;
                if (b >= 0) {
                  value = Math.pow(e, Math.log(b) / a);
                } else {
                  value = Math.pow(e, Math.log(-b) / a) * -1;
                }
                return value;
              }
              function log(a, b) {
                if (a === 1) {
                  return 1;
                }
                return Math.log(b) / Math.log(a);
              }
              function getLogPositiveMin(values2, base2, max) {
                if (isNil$1(max)) {
                  max = Math.max.apply(null, values2);
                }
                var positiveMin = max;
                each$1(values2, function(value) {
                  if (value > 0 && value < positiveMin) {
                    positiveMin = value;
                  }
                });
                if (positiveMin === max) {
                  positiveMin = max / base2;
                }
                if (positiveMin > 1) {
                  positiveMin = 1;
                }
                return positiveMin;
              }
              var Log = function(_super) {
                __extends(Log2, _super);
                function Log2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "log";
                  return _this;
                }
                Log2.prototype.invert = function(value) {
                  var base2 = this.base;
                  var max = log(base2, this.max);
                  var rangeMin = this.rangeMin();
                  var range = this.rangeMax() - rangeMin;
                  var min;
                  var positiveMin = this.positiveMin;
                  if (positiveMin) {
                    if (value === 0) {
                      return 0;
                    }
                    min = log(base2, positiveMin / base2);
                    var appendPercent = 1 / (max - min) * range;
                    if (value < appendPercent) {
                      return value / appendPercent * positiveMin;
                    }
                  } else {
                    min = log(base2, this.min);
                  }
                  var percent = (value - rangeMin) / range;
                  var tmp = percent * (max - min) + min;
                  return Math.pow(base2, tmp);
                };
                Log2.prototype.initCfg = function() {
                  this.tickMethod = "log";
                  this.base = 10;
                  this.tickCount = 6;
                  this.nice = true;
                };
                Log2.prototype.setDomain = function() {
                  _super.prototype.setDomain.call(this);
                  var min = this.min;
                  if (min < 0) {
                    throw new Error("When you use log scale, the minimum value must be greater than zero!");
                  }
                  if (min === 0) {
                    this.positiveMin = getLogPositiveMin(this.values, this.base, this.max);
                  }
                };
                Log2.prototype.getScalePercent = function(value) {
                  var max = this.max;
                  var min = this.min;
                  if (max === min) {
                    return 0;
                  }
                  if (value <= 0) {
                    return 0;
                  }
                  var base2 = this.base;
                  var positiveMin = this.positiveMin;
                  if (positiveMin) {
                    min = positiveMin * 1 / base2;
                  }
                  var percent;
                  if (value < positiveMin) {
                    percent = value / positiveMin / (log(base2, max) - log(base2, min));
                  } else {
                    percent = (log(base2, value) - log(base2, min)) / (log(base2, max) - log(base2, min));
                  }
                  return percent;
                };
                return Log2;
              }(Continuous);
              var Pow = function(_super) {
                __extends(Pow2, _super);
                function Pow2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "pow";
                  return _this;
                }
                Pow2.prototype.invert = function(value) {
                  var percent = this.getInvertPercent(value);
                  var exponent = this.exponent;
                  var max = calBase(exponent, this.max);
                  var min = calBase(exponent, this.min);
                  var tmp = percent * (max - min) + min;
                  var factor = tmp >= 0 ? 1 : -1;
                  return Math.pow(tmp, exponent) * factor;
                };
                Pow2.prototype.initCfg = function() {
                  this.tickMethod = "pow";
                  this.exponent = 2;
                  this.tickCount = 5;
                  this.nice = true;
                };
                Pow2.prototype.getScalePercent = function(value) {
                  var max = this.max;
                  var min = this.min;
                  if (max === min) {
                    return 0;
                  }
                  var exponent = this.exponent;
                  var percent = (calBase(exponent, value) - calBase(exponent, min)) / (calBase(exponent, max) - calBase(exponent, min));
                  return percent;
                };
                return Pow2;
              }(Continuous);
              var Time = function(_super) {
                __extends(Time2, _super);
                function Time2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "time";
                  return _this;
                }
                Time2.prototype.getText = function(value, index) {
                  var numberValue = this.translate(value);
                  var formatter = this.formatter;
                  return formatter ? formatter(numberValue, index) : timeFormat(numberValue, this.mask);
                };
                Time2.prototype.scale = function(value) {
                  var v = value;
                  if (isString(v) || isDate(v)) {
                    v = this.translate(v);
                  }
                  return _super.prototype.scale.call(this, v);
                };
                Time2.prototype.translate = function(v) {
                  return toTimeStamp(v);
                };
                Time2.prototype.initCfg = function() {
                  this.tickMethod = "time-pretty";
                  this.mask = "YYYY-MM-DD";
                  this.tickCount = 7;
                  this.nice = false;
                };
                Time2.prototype.setDomain = function() {
                  var values2 = this.values;
                  var minConfig = this.getConfig("min");
                  var maxConfig = this.getConfig("max");
                  if (!isNil$1(minConfig) || !isNumber(minConfig)) {
                    this.min = this.translate(this.min);
                  }
                  if (!isNil$1(maxConfig) || !isNumber(maxConfig)) {
                    this.max = this.translate(this.max);
                  }
                  if (values2 && values2.length) {
                    var timeStamps_1 = [];
                    var min_1 = Infinity;
                    var secondMin_1 = min_1;
                    var max_1 = 0;
                    each$1(values2, function(v) {
                      var timeStamp = toTimeStamp(v);
                      if (isNaN(timeStamp)) {
                        throw new TypeError("Invalid Time: " + v + " in time scale!");
                      }
                      if (min_1 > timeStamp) {
                        secondMin_1 = min_1;
                        min_1 = timeStamp;
                      } else if (secondMin_1 > timeStamp) {
                        secondMin_1 = timeStamp;
                      }
                      if (max_1 < timeStamp) {
                        max_1 = timeStamp;
                      }
                      timeStamps_1.push(timeStamp);
                    });
                    if (values2.length > 1) {
                      this.minTickInterval = secondMin_1 - min_1;
                    }
                    if (isNil$1(minConfig)) {
                      this.min = min_1;
                    }
                    if (isNil$1(maxConfig)) {
                      this.max = max_1;
                    }
                  }
                };
                return Time2;
              }(Linear$1);
              var Quantize = function(_super) {
                __extends(Quantize2, _super);
                function Quantize2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "quantize";
                  return _this;
                }
                Quantize2.prototype.invert = function(value) {
                  var ticks = this.ticks;
                  var length = ticks.length;
                  var percent = this.getInvertPercent(value);
                  var minIndex = Math.floor(percent * (length - 1));
                  if (minIndex >= length - 1) {
                    return last(ticks);
                  }
                  if (minIndex < 0) {
                    return head(ticks);
                  }
                  var minTick = ticks[minIndex];
                  var nextTick = ticks[minIndex + 1];
                  var minIndexPercent = minIndex / (length - 1);
                  var maxIndexPercent = (minIndex + 1) / (length - 1);
                  return minTick + (percent - minIndexPercent) / (maxIndexPercent - minIndexPercent) * (nextTick - minTick);
                };
                Quantize2.prototype.initCfg = function() {
                  this.tickMethod = "r-pretty";
                  this.tickCount = 5;
                  this.nice = true;
                };
                Quantize2.prototype.calculateTicks = function() {
                  var ticks = _super.prototype.calculateTicks.call(this);
                  if (!this.nice) {
                    if (last(ticks) !== this.max) {
                      ticks.push(this.max);
                    }
                    if (head(ticks) !== this.min) {
                      ticks.unshift(this.min);
                    }
                  }
                  return ticks;
                };
                Quantize2.prototype.getScalePercent = function(value) {
                  var ticks = this.ticks;
                  if (value < head(ticks)) {
                    return 0;
                  }
                  if (value > last(ticks)) {
                    return 1;
                  }
                  var minIndex = 0;
                  each$1(ticks, function(tick, index) {
                    if (value >= tick) {
                      minIndex = index;
                    } else {
                      return false;
                    }
                  });
                  return minIndex / (ticks.length - 1);
                };
                return Quantize2;
              }(Continuous);
              var Quantile = function(_super) {
                __extends(Quantile2, _super);
                function Quantile2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "quantile";
                  return _this;
                }
                Quantile2.prototype.initCfg = function() {
                  this.tickMethod = "quantile";
                  this.tickCount = 5;
                  this.nice = true;
                };
                return Quantile2;
              }(Quantize);
              var map = {};
              function getClass(key) {
                return map[key];
              }
              function registerClass(key, cls) {
                if (getClass(key)) {
                  throw new Error("type '" + key + "' existed.");
                }
                map[key] = cls;
              }
              var Identity$1 = function(_super) {
                __extends(Identity2, _super);
                function Identity2() {
                  var _this = _super !== null && _super.apply(this, arguments) || this;
                  _this.type = "identity";
                  _this.isIdentity = true;
                  return _this;
                }
                Identity2.prototype.calculateTicks = function() {
                  return this.values;
                };
                Identity2.prototype.scale = function(value) {
                  if (this.values[0] !== value && isNumber(value)) {
                    return value;
                  }
                  return this.range[0];
                };
                Identity2.prototype.invert = function(value) {
                  var range = this.range;
                  if (value < range[0] || value > range[1]) {
                    return NaN;
                  }
                  return this.values[0];
                };
                return Identity2;
              }(Scale);
              function prettyNumber(n) {
                return Math.abs(n) < 1e-15 ? n : parseFloat(n.toFixed(15));
              }
              var DEFAULT_Q = [1, 5, 2, 2.5, 4, 3];
              var eps = Number.EPSILON * 100;
              function mod(n, m) {
                return (n % m + m) % m;
              }
              function round(n) {
                return Math.round(n * 1e12) / 1e12;
              }
              function simplicity(q, Q, j, lmin, lmax, lstep) {
                var n = size(Q);
                var i = indexOf(Q, q);
                var v = 0;
                var m = mod(lmin, lstep);
                if ((m < eps || lstep - m < eps) && lmin <= 0 && lmax >= 0) {
                  v = 1;
                }
                return 1 - i / (n - 1) - j + v;
              }
              function simplicityMax(q, Q, j) {
                var n = size(Q);
                var i = indexOf(Q, q);
                var v = 1;
                return 1 - i / (n - 1) - j + v;
              }
              function density(k, m, dMin, dMax, lMin, lMax) {
                var r = (k - 1) / (lMax - lMin);
                var rt = (m - 1) / (Math.max(lMax, dMax) - Math.min(dMin, lMin));
                return 2 - Math.max(r / rt, rt / r);
              }
              function densityMax(k, m) {
                if (k >= m) {
                  return 2 - (k - 1) / (m - 1);
                }
                return 1;
              }
              function coverage(dMin, dMax, lMin, lMax) {
                var range = dMax - dMin;
                return 1 - 0.5 * (Math.pow(dMax - lMax, 2) + Math.pow(dMin - lMin, 2)) / Math.pow(0.1 * range, 2);
              }
              function coverageMax(dMin, dMax, span) {
                var range = dMax - dMin;
                if (span > range) {
                  var half = (span - range) / 2;
                  return 1 - Math.pow(half, 2) / Math.pow(0.1 * range, 2);
                }
                return 1;
              }
              function legibility() {
                return 1;
              }
              function extended(dMin, dMax, n, onlyLoose, Q, w) {
                if (n === void 0) {
                  n = 5;
                }
                if (onlyLoose === void 0) {
                  onlyLoose = true;
                }
                if (Q === void 0) {
                  Q = DEFAULT_Q;
                }
                if (w === void 0) {
                  w = [0.25, 0.2, 0.5, 0.05];
                }
                var m = n < 0 ? 0 : Math.round(n);
                if (Number.isNaN(dMin) || Number.isNaN(dMax) || typeof dMin !== "number" || typeof dMax !== "number" || !m) {
                  return {
                    min: 0,
                    max: 0,
                    ticks: []
                  };
                }
                if (dMax - dMin < 1e-15 || m === 1) {
                  return {
                    min: dMin,
                    max: dMax,
                    ticks: [dMin]
                  };
                }
                var best = {
                  score: -2,
                  lmin: 0,
                  lmax: 0,
                  lstep: 0
                };
                var j = 1;
                while (j < Infinity) {
                  for (var i = 0; i < Q.length; i += 1) {
                    var q = Q[i];
                    var sm = simplicityMax(q, Q, j);
                    if (w[0] * sm + w[1] + w[2] + w[3] < best.score) {
                      j = Infinity;
                      break;
                    }
                    var k = 2;
                    while (k < Infinity) {
                      var dm = densityMax(k, m);
                      if (w[0] * sm + w[1] + w[2] * dm + w[3] < best.score) {
                        break;
                      }
                      var delta = (dMax - dMin) / (k + 1) / j / q;
                      var z = Math.ceil(Math.log10(delta));
                      while (z < Infinity) {
                        var step = j * q * Math.pow(10, z);
                        var cm = coverageMax(dMin, dMax, step * (k - 1));
                        if (w[0] * sm + w[1] * cm + w[2] * dm + w[3] < best.score) {
                          break;
                        }
                        var minStart = Math.floor(dMax / step) * j - (k - 1) * j;
                        var maxStart = Math.ceil(dMin / step) * j;
                        if (minStart <= maxStart) {
                          var count = maxStart - minStart;
                          for (var i_1 = 0; i_1 <= count; i_1 += 1) {
                            var start2 = minStart + i_1;
                            var lMin = start2 * (step / j);
                            var lMax = lMin + step * (k - 1);
                            var lStep = step;
                            var s = simplicity(q, Q, j, lMin, lMax, lStep);
                            var c = coverage(dMin, dMax, lMin, lMax);
                            var g = density(k, m, dMin, dMax, lMin, lMax);
                            var l = legibility();
                            var score = w[0] * s + w[1] * c + w[2] * g + w[3] * l;
                            if (score > best.score && (!onlyLoose || lMin <= dMin && lMax >= dMax)) {
                              best.lmin = lMin;
                              best.lmax = lMax;
                              best.lstep = lStep;
                              best.score = score;
                            }
                          }
                        }
                        z += 1;
                      }
                      k += 1;
                    }
                  }
                  j += 1;
                }
                var lmax = prettyNumber(best.lmax);
                var lmin = prettyNumber(best.lmin);
                var lstep = prettyNumber(best.lstep);
                var tickCount = Math.floor(round((lmax - lmin) / lstep)) + 1;
                var ticks = new Array(tickCount);
                ticks[0] = prettyNumber(lmin);
                for (var i = 1; i < tickCount; i++) {
                  ticks[i] = prettyNumber(ticks[i - 1] + lstep);
                }
                return {
                  min: Math.min(dMin, head(ticks)),
                  max: Math.max(dMax, last(ticks)),
                  ticks
                };
              }
              function calculateCatTicks(cfg) {
                var values2 = cfg.values, tickInterval = cfg.tickInterval, tickCount = cfg.tickCount;
                var ticks = values2;
                if (isNumber(tickInterval)) {
                  return filter(ticks, function(__, i) {
                    return i % tickInterval === 0;
                  });
                }
                var min = cfg.min, max = cfg.max;
                if (isNil$1(min)) {
                  min = 0;
                }
                if (isNil$1(max)) {
                  max = values2.length - 1;
                }
                if (isNumber(tickCount) && tickCount < max - min) {
                  var ticks_1 = extended(min, max, tickCount, false, [1, 2, 5, 3, 4, 7, 6, 8, 9]).ticks;
                  var valid = filter(ticks_1, function(tick) {
                    return tick >= min && tick <= max;
                  });
                  return valid.map(function(index) {
                    return values2[index];
                  });
                }
                return values2.slice(min, max + 1);
              }
              function d3Linear(cfg) {
                var min = cfg.min, max = cfg.max, nice = cfg.nice, tickCount = cfg.tickCount;
                var linear2 = new D3Linear();
                linear2.domain([min, max]);
                if (nice) {
                  linear2.nice(tickCount);
                }
                return linear2.ticks(tickCount);
              }
              var DEFAULT_COUNT$1 = 5;
              var e10 = Math.sqrt(50);
              var e5 = Math.sqrt(10);
              var e2 = Math.sqrt(2);
              var D3Linear = function() {
                function D3Linear2() {
                  this._domain = [0, 1];
                }
                D3Linear2.prototype.domain = function(domain) {
                  if (domain) {
                    this._domain = Array.from(domain, Number);
                    return this;
                  }
                  return this._domain.slice();
                };
                D3Linear2.prototype.nice = function(count) {
                  var _a, _b;
                  if (count === void 0) {
                    count = DEFAULT_COUNT$1;
                  }
                  var d = this._domain.slice();
                  var i0 = 0;
                  var i1 = this._domain.length - 1;
                  var start2 = this._domain[i0];
                  var stop = this._domain[i1];
                  var step;
                  if (stop < start2) {
                    _a = [stop, start2], start2 = _a[0], stop = _a[1];
                    _b = [i1, i0], i0 = _b[0], i1 = _b[1];
                  }
                  step = tickIncrement(start2, stop, count);
                  if (step > 0) {
                    start2 = Math.floor(start2 / step) * step;
                    stop = Math.ceil(stop / step) * step;
                    step = tickIncrement(start2, stop, count);
                  } else if (step < 0) {
                    start2 = Math.ceil(start2 * step) / step;
                    stop = Math.floor(stop * step) / step;
                    step = tickIncrement(start2, stop, count);
                  }
                  if (step > 0) {
                    d[i0] = Math.floor(start2 / step) * step;
                    d[i1] = Math.ceil(stop / step) * step;
                    this.domain(d);
                  } else if (step < 0) {
                    d[i0] = Math.ceil(start2 * step) / step;
                    d[i1] = Math.floor(stop * step) / step;
                    this.domain(d);
                  }
                  return this;
                };
                D3Linear2.prototype.ticks = function(count) {
                  if (count === void 0) {
                    count = DEFAULT_COUNT$1;
                  }
                  return d3ArrayTicks(this._domain[0], this._domain[this._domain.length - 1], count || DEFAULT_COUNT$1);
                };
                return D3Linear2;
              }();
              function d3ArrayTicks(start2, stop, count) {
                var reverse;
                var i = -1;
                var n;
                var ticks;
                var step;
                stop = +stop, start2 = +start2, count = +count;
                if (start2 === stop && count > 0) {
                  return [start2];
                }
                if (reverse = stop < start2) {
                  n = start2, start2 = stop, stop = n;
                }
                if ((step = tickIncrement(start2, stop, count)) === 0 || !isFinite(step)) {
                  return [];
                }
                if (step > 0) {
                  start2 = Math.ceil(start2 / step);
                  stop = Math.floor(stop / step);
                  ticks = new Array(n = Math.ceil(stop - start2 + 1));
                  while (++i < n) {
                    ticks[i] = (start2 + i) * step;
                  }
                } else {
                  start2 = Math.floor(start2 * step);
                  stop = Math.ceil(stop * step);
                  ticks = new Array(n = Math.ceil(start2 - stop + 1));
                  while (++i < n) {
                    ticks[i] = (start2 - i) / step;
                  }
                }
                if (reverse) {
                  ticks.reverse();
                }
                return ticks;
              }
              function tickIncrement(start2, stop, count) {
                var step = (stop - start2) / Math.max(0, count);
                var power = Math.floor(Math.log(step) / Math.LN10);
                var error = step / Math.pow(10, power);
                return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
              }
              function snapMultiple(v, base2, snapType) {
                var div;
                if (snapType === "ceil") {
                  div = Math.ceil(v / base2);
                } else if (snapType === "floor") {
                  div = Math.floor(v / base2);
                } else {
                  div = Math.round(v / base2);
                }
                return div * base2;
              }
              function intervalTicks(min, max, interval) {
                var minTick = snapMultiple(min, interval, "floor");
                var maxTick = snapMultiple(max, interval, "ceil");
                minTick = fixedBase(minTick, interval);
                maxTick = fixedBase(maxTick, interval);
                var ticks = [];
                var availableInterval = Math.max((maxTick - minTick) / (Math.pow(2, 12) - 1), interval);
                for (var i = minTick; i <= maxTick; i = i + availableInterval) {
                  var tickValue = fixedBase(i, availableInterval);
                  ticks.push(tickValue);
                }
                return {
                  min: minTick,
                  max: maxTick,
                  ticks
                };
              }
              function strictLimit(cfg, defaultMin, defaultMax) {
                var _a;
                var minLimit = cfg.minLimit, maxLimit = cfg.maxLimit, min = cfg.min, max = cfg.max, _b = cfg.tickCount, tickCount = _b === void 0 ? 5 : _b;
                var tickMin = isNil$1(minLimit) ? isNil$1(defaultMin) ? min : defaultMin : minLimit;
                var tickMax = isNil$1(maxLimit) ? isNil$1(defaultMax) ? max : defaultMax : maxLimit;
                if (tickMin > tickMax) {
                  _a = [tickMin, tickMax], tickMax = _a[0], tickMin = _a[1];
                }
                if (tickCount <= 2) {
                  return [tickMin, tickMax];
                }
                var step = (tickMax - tickMin) / (tickCount - 1);
                var ticks = [];
                for (var i = 0; i < tickCount; i++) {
                  ticks.push(tickMin + step * i);
                }
                return ticks;
              }
              function pretty(min, max, m) {
                if (m === void 0) {
                  m = 5;
                }
                if (min === max) {
                  return {
                    max,
                    min,
                    ticks: [min]
                  };
                }
                var n = m < 0 ? 0 : Math.round(m);
                if (n === 0)
                  return {
                    max,
                    min,
                    ticks: []
                  };
                var h = 1.5;
                var h5 = 0.5 + 1.5 * h;
                var d = max - min;
                var c = d / n;
                var base2 = Math.pow(10, Math.floor(Math.log10(c)));
                var unit = base2;
                if (2 * base2 - c < h * (c - unit)) {
                  unit = 2 * base2;
                  if (5 * base2 - c < h5 * (c - unit)) {
                    unit = 5 * base2;
                    if (10 * base2 - c < h * (c - unit)) {
                      unit = 10 * base2;
                    }
                  }
                }
                var nu = Math.ceil(max / unit);
                var ns = Math.floor(min / unit);
                var hi = Math.max(nu * unit, max);
                var lo = Math.min(ns * unit, min);
                var size2 = Math.floor((hi - lo) / unit) + 1;
                var ticks = new Array(size2);
                for (var i = 0; i < size2; i++) {
                  ticks[i] = prettyNumber(lo + i * unit);
                }
                return {
                  min: lo,
                  max: hi,
                  ticks
                };
              }
              function quantileSorted(x, p) {
                var idx = x.length * p;
                if (p === 1) {
                  return x[x.length - 1];
                } else if (p === 0) {
                  return x[0];
                } else if (idx % 1 !== 0) {
                  return x[Math.ceil(idx) - 1];
                } else if (x.length % 2 === 0) {
                  return (x[idx - 1] + x[idx]) / 2;
                } else {
                  return x[idx];
                }
              }
              function getYear(date) {
                return new Date(date).getFullYear();
              }
              function createYear(year) {
                return new Date(year, 0, 1).getTime();
              }
              function getMonth(date) {
                return new Date(date).getMonth();
              }
              function diffMonth(min, max) {
                var minYear = getYear(min);
                var maxYear = getYear(max);
                var minMonth = getMonth(min);
                var maxMonth = getMonth(max);
                return (maxYear - minYear) * 12 + (maxMonth - minMonth) % 12;
              }
              function creatMonth(year, month) {
                return new Date(year, month, 1).getTime();
              }
              function diffDay(min, max) {
                return Math.ceil((max - min) / DAY);
              }
              function diffHour(min, max) {
                return Math.ceil((max - min) / HOUR);
              }
              function diffMinus(min, max) {
                return Math.ceil((max - min) / (60 * 1e3));
              }
              registerTickMethod("cat", calculateCatTicks);
              registerTickMethod(
                "time-cat",
                function calculateTimeCatTicks(cfg) {
                  var ticks = calculateCatTicks(cfg);
                  var lastValue = last(cfg.values);
                  if (lastValue !== last(ticks)) {
                    ticks.push(lastValue);
                  }
                  return ticks;
                }
              );
              registerTickMethod(
                "wilkinson-extended",
                function linear$1(cfg) {
                  var min = cfg.min, max = cfg.max, tickCount = cfg.tickCount, nice = cfg.nice, tickInterval = cfg.tickInterval, minLimit = cfg.minLimit, maxLimit = cfg.maxLimit;
                  var ticks = extended(min, max, tickCount, nice).ticks;
                  if (!isNil$1(minLimit) || !isNil$1(maxLimit)) {
                    return strictLimit(cfg, head(ticks), last(ticks));
                  }
                  if (tickInterval) {
                    return intervalTicks(min, max, tickInterval).ticks;
                  }
                  return ticks;
                }
              );
              registerTickMethod(
                "r-pretty",
                function linearPretty(cfg) {
                  var min = cfg.min, max = cfg.max, tickCount = cfg.tickCount, tickInterval = cfg.tickInterval, minLimit = cfg.minLimit, maxLimit = cfg.maxLimit;
                  var ticks = pretty(min, max, tickCount).ticks;
                  if (!isNil$1(minLimit) || !isNil$1(maxLimit)) {
                    return strictLimit(cfg, head(ticks), last(ticks));
                  }
                  if (tickInterval) {
                    return intervalTicks(min, max, tickInterval).ticks;
                  }
                  return ticks;
                }
              );
              registerTickMethod("time", function calculateTimeTicks(cfg) {
                var min = cfg.min, max = cfg.max, minTickInterval = cfg.minTickInterval;
                var tickInterval = cfg.tickInterval;
                var tickCount = cfg.tickCount;
                if (tickInterval) {
                  tickCount = Math.ceil((max - min) / tickInterval);
                } else {
                  tickInterval = getTickInterval(min, max, tickCount)[1];
                  var count = (max - min) / tickInterval;
                  var ratio = count / tickCount;
                  if (ratio > 1) {
                    tickInterval = tickInterval * Math.ceil(ratio);
                  }
                  if (minTickInterval && tickInterval < minTickInterval) {
                    tickInterval = minTickInterval;
                  }
                }
                tickInterval = Math.max(Math.floor((max - min) / (Math.pow(2, 12) - 1)), tickInterval);
                var ticks = [];
                for (var i = min; i < max + tickInterval; i += tickInterval) {
                  ticks.push(i);
                }
                return ticks;
              });
              registerTickMethod("time-pretty", function timePretty(cfg) {
                var min = cfg.min, max = cfg.max, minTickInterval = cfg.minTickInterval, tickCount = cfg.tickCount;
                var tickInterval = cfg.tickInterval;
                var ticks = [];
                if (!tickInterval) {
                  tickInterval = (max - min) / tickCount;
                  if (minTickInterval && tickInterval < minTickInterval) {
                    tickInterval = minTickInterval;
                  }
                }
                tickInterval = Math.max(Math.floor((max - min) / (Math.pow(2, 12) - 1)), tickInterval);
                var minYear = getYear(min);
                if (tickInterval > YEAR) {
                  var maxYear = getYear(max);
                  var yearInterval = Math.ceil(tickInterval / YEAR);
                  for (var i = minYear; i <= maxYear + yearInterval; i = i + yearInterval) {
                    ticks.push(createYear(i));
                  }
                } else if (tickInterval > MONTH) {
                  var monthInterval = Math.ceil(tickInterval / MONTH);
                  var mmMoth = getMonth(min);
                  var dMonths = diffMonth(min, max);
                  for (var i = 0; i <= dMonths + monthInterval; i = i + monthInterval) {
                    ticks.push(creatMonth(minYear, i + mmMoth));
                  }
                } else if (tickInterval > DAY) {
                  var date = new Date(min);
                  var year = date.getFullYear();
                  var month = date.getMonth();
                  var mday = date.getDate();
                  var day = Math.ceil(tickInterval / DAY);
                  var ddays = diffDay(min, max);
                  for (var i = 0; i < ddays + day; i = i + day) {
                    ticks.push(new Date(year, month, mday + i).getTime());
                  }
                } else if (tickInterval > HOUR) {
                  var date = new Date(min);
                  var year = date.getFullYear();
                  var month = date.getMonth();
                  var day = date.getDate();
                  var hour = date.getHours();
                  var hours = Math.ceil(tickInterval / HOUR);
                  var dHours = diffHour(min, max);
                  for (var i = 0; i <= dHours + hours; i = i + hours) {
                    ticks.push(new Date(year, month, day, hour + i).getTime());
                  }
                } else if (tickInterval > MINUTE) {
                  var dMinus = diffMinus(min, max);
                  var minutes = Math.ceil(tickInterval / MINUTE);
                  for (var i = 0; i <= dMinus + minutes; i = i + minutes) {
                    ticks.push(min + i * MINUTE);
                  }
                } else {
                  var interval = tickInterval;
                  if (interval < SECOND) {
                    interval = SECOND;
                  }
                  var minSecond = Math.floor(min / SECOND) * SECOND;
                  var dSeconds = Math.ceil((max - min) / SECOND);
                  var seconds = Math.ceil(interval / SECOND);
                  for (var i = 0; i < dSeconds + seconds; i = i + seconds) {
                    ticks.push(minSecond + i * SECOND);
                  }
                }
                if (ticks.length >= 512) {
                  console.warn("Notice: current ticks length(" + ticks.length + ') >= 512, may cause performance issues, even out of memory. Because of the configure "tickInterval"(in milliseconds, current is ' + tickInterval + ") is too small, increase the value to solve the problem!");
                }
                return ticks;
              });
              registerTickMethod("log", function calculateLogTicks(cfg) {
                var base2 = cfg.base, tickCount = cfg.tickCount, min = cfg.min, max = cfg.max, values2 = cfg.values;
                var minTick;
                var maxTick = log(base2, max);
                if (min > 0) {
                  minTick = Math.floor(log(base2, min));
                } else {
                  var positiveMin = getLogPositiveMin(values2, base2, max);
                  minTick = Math.floor(log(base2, positiveMin));
                }
                var count = maxTick - minTick;
                var avg = Math.ceil(count / tickCount);
                var ticks = [];
                for (var i = minTick; i < maxTick + avg; i = i + avg) {
                  ticks.push(Math.pow(base2, i));
                }
                if (min <= 0) {
                  ticks.unshift(0);
                }
                return ticks;
              });
              registerTickMethod("pow", function calculatePowTicks(cfg) {
                var exponent = cfg.exponent, tickCount = cfg.tickCount;
                var max = Math.ceil(calBase(exponent, cfg.max));
                var min = Math.floor(calBase(exponent, cfg.min));
                var ticks = pretty(min, max, tickCount).ticks;
                return ticks.map(function(tick) {
                  var factor = tick >= 0 ? 1 : -1;
                  return Math.pow(tick, exponent) * factor;
                });
              });
              registerTickMethod("quantile", function calculateTicks(cfg) {
                var tickCount = cfg.tickCount, values2 = cfg.values;
                if (!values2 || !values2.length) {
                  return [];
                }
                var sorted = values2.slice().sort(function(a, b) {
                  return a - b;
                });
                var ticks = [];
                for (var i = 0; i < tickCount; i++) {
                  var p = i / (tickCount - 1);
                  ticks.push(quantileSorted(sorted, p));
                }
                return ticks;
              });
              registerTickMethod("d3-linear", function d3LinearTickMethod(cfg) {
                var min = cfg.min, max = cfg.max, tickInterval = cfg.tickInterval, minLimit = cfg.minLimit, maxLimit = cfg.maxLimit;
                var ticks = d3Linear(cfg);
                if (!isNil$1(minLimit) || !isNil$1(maxLimit)) {
                  return strictLimit(cfg, head(ticks), last(ticks));
                }
                if (tickInterval) {
                  return intervalTicks(min, max, tickInterval).ticks;
                }
                return ticks;
              });
              registerClass("cat", Category$1);
              registerClass("category", Category$1);
              registerClass("identity", Identity$1);
              registerClass("linear", Linear$1);
              registerClass("log", Log);
              registerClass("pow", Pow);
              registerClass("time", Time);
              registerClass("timeCat", TimeCat$1);
              registerClass("quantize", Quantize);
              registerClass("quantile", Quantile);
              var CatTick = function CatTick2(cfg) {
                var values2 = cfg.values, tickCount = cfg.tickCount;
                if (!tickCount) {
                  return values2;
                }
                if (values2.length <= 1) {
                  return values2;
                }
                var step = parseInt(values2.length / (tickCount - 1)) || 1;
                var ticks = [];
                for (var index = 0; index < values2.length; index = index + step) {
                  ticks.push(values2[index]);
                }
                var last2 = values2[values2.length - 1];
                if (ticks[ticks.length - 1] !== last2) {
                  if (ticks.length >= tickCount) {
                    ticks[ticks.length - 1] = last2;
                  } else {
                    ticks.push(last2);
                  }
                }
                return ticks;
              };
              var SNAP_COUNT_ARRAY = [1, 1.2, 1.5, 2, 2.2, 2.4, 2.5, 3, 4, 5, 6, 7.5, 8, 10];
              function getFactor(number) {
                number = Math.abs(number);
                var factor = 1;
                if (number === 0) {
                  return factor;
                }
                if (number < 1) {
                  var count = 0;
                  while (number < 1) {
                    factor = factor / 10;
                    number = number * 10;
                    count++;
                  }
                  if (factor.toString().length > 12) {
                    factor = parseFloat(factor.toFixed(count));
                  }
                  return factor;
                }
                while (number > 10) {
                  factor = factor * 10;
                  number = number / 10;
                }
                return factor;
              }
              function getBestInterval(_ref3) {
                var tickCount = _ref3.tickCount, min = _ref3.min, max = _ref3.max;
                if (min === max) {
                  return 1 * getFactor(max);
                }
                var avgInterval = (max - min) / (tickCount - 1);
                var factor = getFactor(avgInterval);
                var calInterval = avgInterval / factor;
                var calMax = max / factor;
                var calMin = min / factor;
                var similarityIndex = 0;
                for (var index = 0; index < SNAP_COUNT_ARRAY.length; index++) {
                  var item = SNAP_COUNT_ARRAY[index];
                  if (calInterval <= item) {
                    similarityIndex = index;
                    break;
                  }
                }
                var similarityInterval = getInterval(similarityIndex, tickCount, calMin, calMax);
                var fixedLength = getFixedLength(similarityInterval) + getFixedLength(factor);
                return toFixed(similarityInterval * factor, fixedLength);
              }
              function getInterval(startIndex, tickCount, min, max) {
                var verify = false;
                var interval = SNAP_COUNT_ARRAY[startIndex];
                for (var i = startIndex; i < SNAP_COUNT_ARRAY.length; i++) {
                  if (intervalIsVerify({
                    interval: SNAP_COUNT_ARRAY[i],
                    tickCount,
                    max,
                    min
                  })) {
                    interval = SNAP_COUNT_ARRAY[i];
                    verify = true;
                    break;
                  }
                }
                if (!verify) {
                  return 10 * getInterval(0, tickCount, min / 10, max / 10);
                }
                return interval;
              }
              function intervalIsVerify(_ref4) {
                var interval = _ref4.interval, tickCount = _ref4.tickCount, max = _ref4.max, min = _ref4.min;
                var minTick = Math.floor(min / interval) * interval;
                if (minTick + (tickCount - 1) * interval >= max) {
                  return true;
                }
                return false;
              }
              function getFixedLength(num) {
                var str = num.toString();
                var index = str.indexOf(".");
                var indexOfExp = str.indexOf("e-");
                var length = indexOfExp >= 0 ? parseInt(str.substr(indexOfExp + 2), 10) : str.substr(index + 1).length;
                if (length > 20) {
                  length = 20;
                }
                return length;
              }
              function toFixed(v, length) {
                return parseFloat(v.toFixed(length));
              }
              var Linear = getClass("linear");
              var Identity = getClass("identity");
              var Category = getClass("category");
              var TimeCat = getClass("timeCat");
              registerTickMethod("cat", CatTick);
              registerTickMethod("time-cat", CatTick);
              registerTickMethod("wilkinson-extended", function LinearTick(cfg) {
                var _ref = cfg || {}, tickCount = _ref.tickCount, tickInterval = _ref.tickInterval;
                var _ref2 = cfg || {}, min = _ref2.min, max = _ref2.max;
                min = isNaN(min) ? 0 : min;
                max = isNaN(max) ? 0 : max;
                var count = tickCount && tickCount >= 2 ? tickCount : 5;
                var interval = tickInterval || getBestInterval({
                  tickCount: count,
                  max,
                  min
                });
                var minTick = Math.floor(min / interval) * interval;
                if (tickInterval) {
                  var intervalCount = Math.abs(Math.ceil((max - minTick) / tickInterval)) + 1;
                  count = Math.max(count, intervalCount);
                }
                var ticks = [];
                var tickLength = 0;
                var fixedLength = getFixedLength(interval);
                while (tickLength < count) {
                  ticks.push(toFixed(minTick + tickLength * interval, fixedLength));
                  tickLength++;
                }
                return ticks;
              });
              Scale.Linear = Linear;
              Scale.Identity = Identity;
              Scale.Category = Category;
              Scale.Cat = Category;
              Scale.TimeCat = TimeCat;
              function isFullCircle(coord) {
                if (!coord.isPolar) {
                  return false;
                }
                var startAngle = coord.startAngle;
                var endAngle = coord.endAngle;
                if (!isNil$1(startAngle) && !isNil$1(endAngle) && endAngle - startAngle < Math.PI * 2) {
                  return false;
                }
                return true;
              }
              function clearObj(obj) {
                Object.keys(obj).forEach(function(key) {
                  delete obj[key];
                });
              }
              var ScaleController = /* @__PURE__ */ function() {
                function ScaleController2(cfg) {
                  this.defs = {};
                  this.scales = {};
                  mix$1(this, cfg);
                }
                var _proto = ScaleController2.prototype;
                _proto.setFieldDef = function setFieldDef(field, cfg) {
                  var defs = this.defs;
                  if (isObject$1(field)) {
                    mix$1(defs, field);
                  } else {
                    defs[field] = cfg;
                  }
                  this.updateScales();
                };
                _proto._getDef = function _getDef(field) {
                  var defs = this.defs;
                  var def = null;
                  if (Global.scales[field] || defs[field]) {
                    def = mix$1({}, Global.scales[field]);
                    each$1(defs[field], function(v, k) {
                      if (isNil$1(v)) {
                        delete def[k];
                      } else {
                        def[k] = v;
                      }
                    });
                  }
                  return def;
                };
                _proto._getDefaultType = function _getDefaultType(field, data, def) {
                  if (def && def.type) {
                    return def.type;
                  }
                  var type = "linear";
                  var value = firstValue(data, field);
                  if (isArray$1(value)) {
                    value = value[0];
                  }
                  if (isString(value)) {
                    type = "cat";
                  }
                  return type;
                };
                _proto._getScaleDef = function _getScaleDef(type, field, data, def) {
                  var values$12;
                  if (def && def.values) {
                    values$12 = def.values;
                  } else {
                    values$12 = values(data, field);
                  }
                  var cfg = {
                    field,
                    values: values$12
                  };
                  if (type !== "cat" && type !== "timeCat") {
                    if (!def || !(def.min && def.max)) {
                      var _Array$getRange = getRange(values$12), min = _Array$getRange.min, max = _Array$getRange.max;
                      cfg.min = min;
                      cfg.max = max;
                      cfg.nice = true;
                    }
                  } else {
                    cfg.isRounding = false;
                  }
                  return cfg;
                };
                _proto._adjustRange = function _adjustRange(type, cfg) {
                  var range = cfg.range, values2 = cfg.values;
                  if (type === "linear" || range || !values2) {
                    return cfg;
                  }
                  var count = values2.length;
                  if (count === 1) {
                    cfg.range = [0.5, 1];
                  } else {
                    var chart = this.chart;
                    var coord = chart.get("coord");
                    var widthRatio = Global.widthRatio.multiplePie;
                    var offset = 0;
                    if (isFullCircle(coord)) {
                      if (!coord.transposed) {
                        cfg.range = [0, 1 - 1 / count];
                      } else {
                        offset = 1 / count * widthRatio;
                        cfg.range = [offset / 2, 1 - offset / 2];
                      }
                    } else {
                      offset = 1 / count * 0.5;
                      cfg.range = [offset, 1 - offset];
                    }
                  }
                  return cfg;
                };
                _proto._getScaleCfg = function _getScaleCfg(field, data) {
                  var self = this;
                  var def = self._getDef(field);
                  if (!data || !data.length) {
                    if (def && def.type) {
                      def.field = field;
                      return {
                        type: def.type,
                        cfg: def
                      };
                    }
                    return {
                      type: "identity",
                      cfg: {
                        value: field,
                        field: field.toString(),
                        values: [field]
                      }
                    };
                  }
                  var firstObj = data[0];
                  var firstValue$1 = firstObj[field];
                  if (firstValue$1 === null) {
                    firstValue$1 = firstValue(data, field);
                  }
                  if (isNumber(field) || isNil$1(firstValue$1) && !def) {
                    return {
                      type: "identity",
                      cfg: {
                        value: field,
                        field: field.toString(),
                        values: [field]
                      }
                    };
                  }
                  var type = self._getDefaultType(field, data, def);
                  var cfg = self._getScaleDef(type, field, data, def);
                  def && mix$1(cfg, def);
                  cfg = this._adjustRange(type, cfg);
                  return {
                    type,
                    cfg
                  };
                };
                _proto.createScale = function createScale(field, data) {
                  var scales = this.scales;
                  var _this$_getScaleCfg = this._getScaleCfg(field, data), type = _this$_getScaleCfg.type, cfg = _this$_getScaleCfg.cfg;
                  var scale = scales[field];
                  if (scale && scale.type === type) {
                    scale.change(cfg);
                    return scale;
                  }
                  var Scale2 = getClass(type);
                  var newScale = new Scale2(cfg);
                  scales[field] = newScale;
                  return newScale;
                };
                _proto._updateScale = function _updateScale(scale) {
                  var field = scale.field;
                  var data = this.chart._getScaleData(field);
                  var _this$_getScaleCfg2 = this._getScaleCfg(field, data), cfg = _this$_getScaleCfg2.cfg;
                  scale.change(cfg);
                };
                _proto.updateScales = function updateScales() {
                  var _this = this;
                  var scales = this.scales;
                  each$1(scales, function(scale) {
                    _this._updateScale(scale);
                  });
                };
                _proto.adjustStartZero = function adjustStartZero(scale) {
                  var defs = this.defs;
                  var field = scale.field, min = scale.min, max = scale.max;
                  if (defs[field] && defs[field].min) {
                    return;
                  }
                  if (min > 0) {
                    scale.change({
                      min: 0
                    });
                  } else if (max < 0) {
                    scale.change({
                      max: 0
                    });
                  }
                };
                _proto.clear = function clear2() {
                  clearObj(this.defs);
                  clearObj(this.scales);
                  this.data = null;
                };
                return ScaleController2;
              }();
              var Abastract = /* @__PURE__ */ function() {
                var _proto = Abastract2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.ticks = [];
                  this.tickLine = {};
                  this.offsetFactor = 1;
                  this.frontContainer = null;
                  this.backContainer = null;
                  this.gridPoints = [];
                };
                function Abastract2(cfg) {
                  this._initDefaultCfg();
                  mix$1(this, cfg);
                  this.draw();
                }
                _proto.draw = function draw() {
                  var line = this.line, tickLine = this.tickLine, label = this.label, grid = this.grid;
                  grid && this.drawGrid(grid);
                  tickLine && this.drawTicks(tickLine);
                  line && this.drawLine(line);
                  label && this.drawLabels();
                };
                _proto.drawTicks = function drawTicks(tickCfg) {
                  var self = this;
                  var ticks = self.ticks;
                  var length = tickCfg.length;
                  var container = self.getContainer(tickCfg.top);
                  each$1(ticks, function(tick) {
                    var start2 = self.getOffsetPoint(tick.value);
                    var end2 = self.getSidePoint(start2, length);
                    var shape = container.addShape("line", {
                      className: "axis-tick",
                      attrs: mix$1({
                        x1: start2.x,
                        y1: start2.y,
                        x2: end2.x,
                        y2: end2.y
                      }, tickCfg)
                    });
                    shape._id = self._id + "-ticks";
                  });
                };
                _proto.drawLabels = function drawLabels() {
                  var self = this;
                  var labelOffset = self.labelOffset;
                  var labels = self.labels;
                  each$1(labels, function(labelShape) {
                    var container = self.getContainer(labelShape.get("top"));
                    var start2 = self.getOffsetPoint(labelShape.get("value"));
                    var _self$getSidePoint = self.getSidePoint(start2, labelOffset), x = _self$getSidePoint.x, y = _self$getSidePoint.y;
                    labelShape.attr(mix$1({
                      x,
                      y
                    }, self.getTextAlignInfo(start2, labelOffset), labelShape.get("textStyle")));
                    labelShape._id = self._id + "-" + labelShape.attr("text");
                    container.add(labelShape);
                  });
                };
                _proto.drawLine = function drawLine() {
                };
                _proto.drawGrid = function drawGrid(grid) {
                  var self = this;
                  var gridPoints = self.gridPoints, ticks = self.ticks;
                  var gridCfg = grid;
                  var count = gridPoints.length;
                  each$1(gridPoints, function(subPoints, index) {
                    if (isFunction$1(grid)) {
                      var tick = ticks[index] || {};
                      var executedGrid = grid(tick.text, index, count);
                      gridCfg = executedGrid ? mix$1({}, Global._defaultAxis.grid, executedGrid) : null;
                    }
                    if (gridCfg) {
                      var type = gridCfg.type;
                      var points = subPoints.points;
                      var container = self.getContainer(gridCfg.top);
                      var shape;
                      if (type === "arc") {
                        var center = self.center, startAngle = self.startAngle, endAngle = self.endAngle;
                        var radius = Vector2.length([points[0].x - center.x, points[0].y - center.y]);
                        shape = container.addShape("Arc", {
                          className: "axis-grid",
                          attrs: mix$1({
                            x: center.x,
                            y: center.y,
                            startAngle,
                            endAngle,
                            r: radius
                          }, gridCfg)
                        });
                      } else {
                        shape = container.addShape("Polyline", {
                          className: "axis-grid",
                          attrs: mix$1({
                            points
                          }, gridCfg)
                        });
                      }
                      shape._id = subPoints._id;
                    }
                  });
                };
                _proto.getOffsetPoint = function getOffsetPoint() {
                };
                _proto.getAxisVector = function getAxisVector() {
                };
                _proto.getOffsetVector = function getOffsetVector(point, offset) {
                  var self = this;
                  var axisVector = self.getAxisVector(point);
                  var normal = Vector2.normalize([], axisVector);
                  var factor = self.offsetFactor;
                  var verticalVector = [normal[1] * -1 * factor, normal[0] * factor];
                  return Vector2.scale([], verticalVector, offset);
                };
                _proto.getSidePoint = function getSidePoint(point, offset) {
                  var self = this;
                  var offsetVector = self.getOffsetVector(point, offset);
                  return {
                    x: point.x + offsetVector[0],
                    y: point.y + offsetVector[1]
                  };
                };
                _proto.getTextAlignInfo = function getTextAlignInfo(point, offset) {
                  var self = this;
                  var offsetVector = self.getOffsetVector(point, offset);
                  var align;
                  var baseLine;
                  if (offsetVector[0] > 0) {
                    align = "left";
                  } else if (offsetVector[0] < 0) {
                    align = "right";
                  } else {
                    align = "center";
                  }
                  if (offsetVector[1] > 0) {
                    baseLine = "top";
                  } else if (offsetVector[1] < 0) {
                    baseLine = "bottom";
                  } else {
                    baseLine = "middle";
                  }
                  return {
                    textAlign: align,
                    textBaseline: baseLine
                  };
                };
                _proto.getContainer = function getContainer(isTop) {
                  var frontContainer = this.frontContainer, backContainer = this.backContainer;
                  return isTop ? frontContainer : backContainer;
                };
                return Abastract2;
              }();
              var Line$3 = /* @__PURE__ */ function(_Abstract) {
                _inheritsLoose$3(Line2, _Abstract);
                function Line2() {
                  return _Abstract.apply(this, arguments) || this;
                }
                var _proto = Line2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  _Abstract.prototype._initDefaultCfg.call(this);
                  this.start = null;
                  this.end = null;
                };
                _proto.getOffsetPoint = function getOffsetPoint(value) {
                  var start2 = this.start, end2 = this.end;
                  return {
                    x: start2.x + (end2.x - start2.x) * value,
                    y: start2.y + (end2.y - start2.y) * value
                  };
                };
                _proto.getAxisVector = function getAxisVector() {
                  var start2 = this.start, end2 = this.end;
                  return [end2.x - start2.x, end2.y - start2.y];
                };
                _proto.drawLine = function drawLine(lineCfg) {
                  var container = this.getContainer(lineCfg.top);
                  var start2 = this.start, end2 = this.end;
                  container.addShape("line", {
                    className: "axis-line",
                    attrs: mix$1({
                      x1: start2.x,
                      y1: start2.y,
                      x2: end2.x,
                      y2: end2.y
                    }, lineCfg)
                  });
                };
                return Line2;
              }(Abastract);
              Abastract.Line = Line$3;
              function formatTicks(ticks) {
                var tmp = ticks.slice(0);
                if (tmp.length > 0) {
                  var first = tmp[0];
                  var last2 = tmp[tmp.length - 1];
                  if (first.value !== 0) {
                    tmp.unshift({
                      value: 0
                    });
                  }
                  if (last2.value !== 1) {
                    tmp.push({
                      value: 1
                    });
                  }
                }
                return tmp;
              }
              var AxisController = /* @__PURE__ */ function() {
                function AxisController2(cfg) {
                  this.axisCfg = {};
                  this.frontPlot = null;
                  this.backPlot = null;
                  this.axes = {};
                  mix$1(this, cfg);
                }
                var _proto = AxisController2.prototype;
                _proto._isHide = function _isHide(field) {
                  var axisCfg = this.axisCfg;
                  return !axisCfg || axisCfg[field] === false;
                };
                _proto._getLinePosition = function _getLinePosition(scale, dimType, index, transposed) {
                  var position = "";
                  var field = scale.field;
                  var axisCfg = this.axisCfg;
                  if (axisCfg[field] && axisCfg[field].position) {
                    position = axisCfg[field].position;
                  } else if (dimType === "x") {
                    position = transposed ? "left" : "bottom";
                  } else if (dimType === "y") {
                    position = index ? "right" : "left";
                    if (transposed) {
                      position = "bottom";
                    }
                  }
                  return position;
                };
                _proto._getLineCfg = function _getLineCfg(coord, dimType, position) {
                  var start2;
                  var end2;
                  var factor = 1;
                  if (dimType === "x") {
                    start2 = {
                      x: 0,
                      y: 0
                    };
                    end2 = {
                      x: 1,
                      y: 0
                    };
                  } else {
                    if (position === "right") {
                      start2 = {
                        x: 1,
                        y: 0
                      };
                      end2 = {
                        x: 1,
                        y: 1
                      };
                    } else {
                      start2 = {
                        x: 0,
                        y: 0
                      };
                      end2 = {
                        x: 0,
                        y: 1
                      };
                      factor = -1;
                    }
                  }
                  if (coord.transposed) {
                    factor *= -1;
                  }
                  return {
                    offsetFactor: factor,
                    start: coord.convertPoint(start2),
                    end: coord.convertPoint(end2)
                  };
                };
                _proto._getCircleCfg = function _getCircleCfg(coord) {
                  return {
                    startAngle: coord.startAngle,
                    endAngle: coord.endAngle,
                    center: coord.center,
                    radius: coord.circleRadius
                  };
                };
                _proto._getRadiusCfg = function _getRadiusCfg(coord) {
                  var transposed = coord.transposed;
                  var start2;
                  var end2;
                  if (transposed) {
                    start2 = {
                      x: 0,
                      y: 0
                    };
                    end2 = {
                      x: 1,
                      y: 0
                    };
                  } else {
                    start2 = {
                      x: 0,
                      y: 0
                    };
                    end2 = {
                      x: 0,
                      y: 1
                    };
                  }
                  return {
                    offsetFactor: -1,
                    start: coord.convertPoint(start2),
                    end: coord.convertPoint(end2)
                  };
                };
                _proto._getAxisCfg = function _getAxisCfg(coord, scale, verticalScale, dimType, defaultCfg) {
                  var _this = this;
                  var self = this;
                  var axisCfg = this.axisCfg;
                  var ticks = scale.getTicks();
                  var cfg = deepMix({
                    ticks,
                    frontContainer: this.frontPlot,
                    backContainer: this.backPlot
                  }, defaultCfg, axisCfg[scale.field]);
                  var labels = [];
                  var label = cfg.label;
                  var count = ticks.length;
                  var maxWidth = 0;
                  var maxHeight = 0;
                  var labelCfg = label;
                  each$1(ticks, function(tick, index) {
                    if (isFunction$1(label)) {
                      var executedLabel = label(tick.text, index, count);
                      labelCfg = executedLabel ? mix$1({}, Global._defaultAxis.label, executedLabel) : null;
                    }
                    if (labelCfg) {
                      var textStyle = {};
                      if (labelCfg.textAlign) {
                        textStyle.textAlign = labelCfg.textAlign;
                      }
                      if (labelCfg.textBaseline) {
                        textStyle.textBaseline = labelCfg.textBaseline;
                      }
                      var container = labelCfg.top ? _this.frontPlot : _this.backPlot;
                      var axisLabel = container.addShape("text", {
                        className: "axis-label",
                        aria: false,
                        attrs: mix$1({
                          x: 0,
                          y: 0,
                          text: tick.text,
                          fontFamily: self.chart.get("canvas").get("fontFamily")
                        }, labelCfg),
                        value: tick.value,
                        textStyle,
                        top: labelCfg.top,
                        context: self.chart.get("canvas").get("context")
                      });
                      labels.push(axisLabel);
                      var _axisLabel$getBBox = axisLabel.getBBox(), width = _axisLabel$getBBox.width, height = _axisLabel$getBBox.height;
                      maxWidth = Math.max(maxWidth, width);
                      maxHeight = Math.max(maxHeight, height);
                    }
                  });
                  cfg.labels = labels;
                  cfg.maxWidth = maxWidth;
                  cfg.maxHeight = maxHeight;
                  return cfg;
                };
                _proto._createAxis = function _createAxis(coord, scale, verticalScale, dimType, index) {
                  if (index === void 0) {
                    index = "";
                  }
                  var self = this;
                  var coordType = coord.type;
                  var transposed = coord.transposed;
                  var type;
                  var key;
                  var defaultCfg;
                  if (coordType === "cartesian" || coordType === "rect") {
                    var position = self._getLinePosition(scale, dimType, index, transposed);
                    defaultCfg = Global.axis[position];
                    defaultCfg.position = position;
                    type = "Line";
                    key = position;
                  } else {
                    if (dimType === "x" && !transposed || dimType === "y" && transposed) {
                      defaultCfg = Global.axis.circle;
                      type = "Circle";
                      key = "circle";
                    } else {
                      defaultCfg = Global.axis.radius;
                      type = "Line";
                      key = "radius";
                    }
                  }
                  var cfg = self._getAxisCfg(coord, scale, verticalScale, dimType, defaultCfg);
                  cfg.type = type;
                  cfg.dimType = dimType;
                  cfg.verticalScale = verticalScale;
                  cfg.index = index;
                  this.axes[key] = cfg;
                };
                _proto.createAxis = function createAxis(coord, xScale, yScales) {
                  var self = this;
                  if (xScale && !self._isHide(xScale.field)) {
                    self._createAxis(coord, xScale, yScales[0], "x");
                  }
                  each$1(yScales, function(yScale, index) {
                    if (!self._isHide(yScale.field)) {
                      self._createAxis(coord, yScale, xScale, "y", index);
                    }
                  });
                  var axes = this.axes;
                  var chart = self.chart;
                  if (chart._isAutoPadding()) {
                    var userPadding = parsePadding(chart.get("padding"));
                    var appendPadding = parsePadding(chart.get("appendPadding"));
                    var legendRange = chart.get("legendRange") || {
                      top: 0,
                      right: 0,
                      bottom: 0,
                      left: 0
                    };
                    var padding = [userPadding[0] === "auto" ? legendRange.top + appendPadding[0] * 2 : userPadding[0], userPadding[1] === "auto" ? legendRange.right + appendPadding[1] : userPadding[1], userPadding[2] === "auto" ? legendRange.bottom + appendPadding[2] : userPadding[2], userPadding[3] === "auto" ? legendRange.left + appendPadding[3] : userPadding[3]];
                    if (coord.isPolar) {
                      var circleAxis = axes.circle;
                      if (circleAxis) {
                        var maxHeight = circleAxis.maxHeight, maxWidth = circleAxis.maxWidth, labelOffset = circleAxis.labelOffset;
                        padding[0] += maxHeight + labelOffset;
                        padding[1] += maxWidth + labelOffset;
                        padding[2] += maxHeight + labelOffset;
                        padding[3] += maxWidth + labelOffset;
                      }
                    } else {
                      if (axes.right && userPadding[1] === "auto") {
                        var _axes$right = axes.right, _maxWidth = _axes$right.maxWidth, _labelOffset = _axes$right.labelOffset;
                        padding[1] += _maxWidth + _labelOffset;
                      }
                      if (axes.left && userPadding[3] === "auto") {
                        var _axes$left = axes.left, _maxWidth2 = _axes$left.maxWidth, _labelOffset2 = _axes$left.labelOffset;
                        padding[3] += _maxWidth2 + _labelOffset2;
                      }
                      if (axes.bottom && userPadding[2] === "auto") {
                        var _axes$bottom = axes.bottom, _maxHeight = _axes$bottom.maxHeight, _labelOffset3 = _axes$bottom.labelOffset;
                        padding[2] += _maxHeight + _labelOffset3;
                      }
                    }
                    chart.set("_padding", padding);
                    chart._updateLayout(padding);
                  }
                  each$1(axes, function(axis) {
                    var type = axis.type, grid = axis.grid, verticalScale = axis.verticalScale, ticks = axis.ticks, dimType = axis.dimType, position = axis.position, index = axis.index;
                    var appendCfg;
                    if (coord.isPolar) {
                      if (type === "Line") {
                        appendCfg = self._getRadiusCfg(coord);
                      } else if (type === "Circle") {
                        appendCfg = self._getCircleCfg(coord);
                      }
                    } else {
                      appendCfg = self._getLineCfg(coord, dimType, position);
                    }
                    if (grid && verticalScale) {
                      var gridPoints = [];
                      var verticalTicks = formatTicks(verticalScale.getTicks());
                      each$1(ticks, function(tick) {
                        var subPoints = [];
                        each$1(verticalTicks, function(verticalTick) {
                          var x = dimType === "x" ? tick.value : verticalTick.value;
                          var y = dimType === "x" ? verticalTick.value : tick.value;
                          if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
                            var point = coord.convertPoint({
                              x,
                              y
                            });
                            subPoints.push(point);
                          }
                        });
                        gridPoints.push({
                          points: subPoints,
                          _id: "axis-" + dimType + index + "-grid-" + tick.tickValue
                        });
                      });
                      axis.gridPoints = gridPoints;
                      if (coord.isPolar) {
                        axis.center = coord.center;
                        axis.startAngle = coord.startAngle;
                        axis.endAngle = coord.endAngle;
                      }
                    }
                    appendCfg._id = "axis-" + dimType;
                    if (!isNil$1(index)) {
                      appendCfg._id = "axis-" + dimType + index;
                    }
                    new Abastract[type](mix$1(axis, appendCfg));
                  });
                };
                _proto.clear = function clear2() {
                  this.axes = {};
                  this.frontPlot.clear();
                  this.backPlot.clear();
                };
                return AxisController2;
              }();
              var calcDirection = function calcDirection2(start2, end2) {
                var xDistance = end2.x - start2.x;
                var yDistance = end2.y - start2.y;
                if (Math.abs(xDistance) > Math.abs(yDistance)) {
                  return xDistance > 0 ? "right" : "left";
                }
                return yDistance > 0 ? "down" : "up";
              };
              var calcDistance = function calcDistance2(point1, point2) {
                var xDistance = Math.abs(point2.x - point1.x);
                var yDistance = Math.abs(point2.y - point1.y);
                return Math.sqrt(xDistance * xDistance + yDistance * yDistance);
              };
              var getCenter = function getCenter2(point1, point2) {
                var x = point1.x + (point2.x - point1.x) / 2;
                var y = point1.y + (point2.y - point1.y) / 2;
                return {
                  x,
                  y
                };
              };
              var PRESS_DELAY = 250;
              var EventController = /* @__PURE__ */ function() {
                function EventController2(_ref) {
                  var _this = this;
                  var canvas = _ref.canvas, el = _ref.el;
                  _defineProperty(this, "_click", function(ev) {
                    var points = convertPoints(ev, _this.canvas);
                    ev.points = points;
                    _this.emitEvent("click", ev);
                  });
                  _defineProperty(this, "_start", function(ev) {
                    var points = convertPoints(ev, _this.canvas);
                    if (!points) {
                      return;
                    }
                    ev.points = points;
                    _this.emitEvent("touchstart", ev);
                    _this.reset();
                    _this.startTime = Date.now();
                    _this.startPoints = points;
                    if (points.length > 1) {
                      _this.startDistance = calcDistance(points[0], points[1]);
                      _this.center = getCenter(points[0], points[1]);
                    } else {
                      _this.pressTimeout = setTimeout(function() {
                        var eventType = "press";
                        var direction = "none";
                        ev.direction = direction;
                        _this.emitStart(eventType, ev);
                        _this.emitEvent(eventType, ev);
                        _this.eventType = eventType;
                        _this.direction = direction;
                      }, PRESS_DELAY);
                    }
                  });
                  _defineProperty(this, "_move", function(ev) {
                    var points = convertPoints(ev, _this.canvas);
                    if (!points)
                      return;
                    _this.clearPressTimeout();
                    ev.points = points;
                    _this.emitEvent("touchmove", ev);
                    var startPoints = _this.startPoints;
                    if (!startPoints)
                      return;
                    if (points.length > 1) {
                      var startDistance = _this.startDistance;
                      var currentDistance = calcDistance(points[0], points[1]);
                      ev.zoom = currentDistance / startDistance;
                      ev.center = _this.center;
                      _this.emitStart("pinch", ev);
                      _this.emitEvent("pinch", ev);
                    } else {
                      var deltaX = points[0].x - startPoints[0].x;
                      var deltaY = points[0].y - startPoints[0].y;
                      var direction = _this.direction || calcDirection(startPoints[0], points[0]);
                      _this.direction = direction;
                      var eventType = _this.getEventType(points);
                      ev.direction = direction;
                      ev.deltaX = deltaX;
                      ev.deltaY = deltaY;
                      _this.emitStart(eventType, ev);
                      _this.emitEvent(eventType, ev);
                      var prevMoveTime = _this.lastMoveTime;
                      var now = Date.now();
                      if (now - prevMoveTime > 0) {
                        _this.prevMoveTime = prevMoveTime;
                        _this.prevMovePoints = _this.lastMovePoints;
                        _this.lastMoveTime = now;
                        _this.lastMovePoints = points;
                      }
                    }
                  });
                  _defineProperty(this, "_end", function(ev) {
                    var points = convertPoints(ev, _this.canvas);
                    ev.points = points;
                    _this.emitEnd(ev);
                    _this.emitEvent("touchend", ev);
                    var lastMoveTime = _this.lastMoveTime;
                    var now = Date.now();
                    if (now - lastMoveTime < 100) {
                      var prevMoveTime = _this.prevMoveTime || _this.startTime;
                      var intervalTime = lastMoveTime - prevMoveTime;
                      if (intervalTime > 0) {
                        var prevMovePoints = _this.prevMovePoints || _this.startPoints;
                        var lastMovePoints = _this.lastMovePoints;
                        var velocity = calcDistance(prevMovePoints[0], lastMovePoints[0]) / intervalTime;
                        if (velocity > 0.3) {
                          ev.velocity = velocity;
                          ev.direction = calcDirection(prevMovePoints[0], lastMovePoints[0]);
                          _this.emitEvent("swipe", ev);
                        }
                      }
                    }
                    _this.reset();
                    var touches = ev.touches;
                    if (touches && touches.length > 0) {
                      _this._start(ev);
                    }
                  });
                  _defineProperty(this, "_cancel", function(ev) {
                    _this.emitEvent("touchcancel", ev);
                    _this.reset();
                  });
                  this.canvas = canvas;
                  this.delegateEvent(el);
                  this.processEvent = {};
                }
                var _proto = EventController2.prototype;
                _proto.delegateEvent = function delegateEvent(canvasEl) {
                  canvasEl.addEventListener("click", this._click);
                  canvasEl.addEventListener("touchstart", this._start);
                  canvasEl.addEventListener("touchmove", this._move);
                  canvasEl.addEventListener("touchend", this._end);
                  canvasEl.addEventListener("touchcancel", this._cancel);
                };
                _proto.emitEvent = function emitEvent(type, ev) {
                  var canvas = this.canvas;
                  canvas.emit(type, ev);
                };
                _proto.getEventType = function getEventType(points) {
                  var eventType = this.eventType, canvas = this.canvas, startTime = this.startTime, startPoints = this.startPoints;
                  if (eventType) {
                    return eventType;
                  }
                  var type;
                  var panEventListeners = canvas.__events.pan;
                  if (!panEventListeners || !panEventListeners.length) {
                    type = "press";
                  } else {
                    var now = Date.now();
                    if (now - startTime > PRESS_DELAY && calcDistance(startPoints[0], points[0]) < 10) {
                      type = "press";
                    } else {
                      type = "pan";
                    }
                  }
                  this.eventType = type;
                  return type;
                };
                _proto.enable = function enable(eventType) {
                  this.processEvent[eventType] = true;
                };
                _proto.isProcess = function isProcess(eventType) {
                  return this.processEvent[eventType];
                };
                _proto.emitStart = function emitStart(type, ev) {
                  if (this.isProcess(type)) {
                    return;
                  }
                  this.enable(type);
                  this.emitEvent(type + "start", ev);
                };
                _proto.emitEnd = function emitEnd(ev) {
                  var _this2 = this;
                  var processEvent = this.processEvent;
                  Object.keys(processEvent).forEach(function(type) {
                    _this2.emitEvent(type + "end", ev);
                    delete processEvent[type];
                  });
                };
                _proto.clearPressTimeout = function clearPressTimeout() {
                  if (this.pressTimeout) {
                    clearTimeout(this.pressTimeout);
                    this.pressTimeout = 0;
                  }
                };
                _proto.reset = function reset() {
                  this.clearPressTimeout();
                  this.startTime = 0;
                  this.startPoints = null;
                  this.startDistance = 0;
                  this.direction = null;
                  this.eventType = null;
                  this.pinch = false;
                  this.prevMoveTime = 0;
                  this.prevMovePoints = null;
                  this.lastMoveTime = 0;
                  this.lastMovePoints = null;
                };
                return EventController2;
              }();
              var CanvasElement = /* @__PURE__ */ function(_EventEmit) {
                _inheritsLoose$3(CanvasElement2, _EventEmit);
                function CanvasElement2(ctx2) {
                  var _this;
                  _this = _EventEmit.call(this) || this;
                  _this.context = ctx2;
                  _this.width = 0;
                  _this.height = 0;
                  _this.style = {};
                  _this.currentStyle = {};
                  _this.attrs = {};
                  _this.isCanvasElement = true;
                  return _this;
                }
                var _proto = CanvasElement2.prototype;
                _proto.getContext = function getContext() {
                  return this.context;
                };
                _proto.getBoundingClientRect = function getBoundingClientRect() {
                  var width = this.width;
                  var height = this.height;
                  return {
                    top: 0,
                    right: width,
                    bottom: height,
                    left: 0
                  };
                };
                _proto.setAttribute = function setAttribute(key, value) {
                  this.attrs[key] = value;
                };
                _proto.addEventListener = function addEventListener2(type, listener) {
                  this.on(type, listener);
                };
                _proto.removeEventListener = function removeEventListener2(type, listener) {
                  this.off(type, listener);
                };
                _proto.dispatchEvent = function dispatchEvent(type, e) {
                  this.emit(type, e);
                };
                return CanvasElement2;
              }(EventEmit);
              function supportEventListener(canvas) {
                if (!canvas) {
                  return false;
                }
                if (canvas.nodeType !== 1 || !canvas.nodeName || canvas.nodeName.toLowerCase() !== "canvas") {
                  return false;
                }
                var support = false;
                try {
                  canvas.addEventListener("eventTest", function() {
                    support = true;
                  });
                  canvas.dispatchEvent(new Event("eventTest"));
                } catch (error) {
                  support = false;
                }
                return support;
              }
              var CanvasElement$1 = {
                create: function create(ctx2) {
                  if (!ctx2) {
                    return null;
                  }
                  if (supportEventListener(ctx2.canvas)) {
                    return ctx2.canvas;
                  }
                  return new CanvasElement(ctx2);
                }
              };
              function _mod(n, m) {
                return (n % m + m) % m;
              }
              function _addStop(steps, gradient2) {
                each$1(steps, function(item) {
                  item = item.split(":");
                  gradient2.addColorStop(Number(item[0]), item[1]);
                });
              }
              function _parseLineGradient(color, shape, context) {
                var arr = color.split(" ");
                var angle = arr[0].slice(2, arr[0].length - 1);
                angle = _mod(parseFloat(angle) * Math.PI / 180, Math.PI * 2);
                var steps = arr.slice(1);
                var _shape$getBBox = shape.getBBox(), minX = _shape$getBBox.minX, minY = _shape$getBBox.minY, maxX = _shape$getBBox.maxX, maxY = _shape$getBBox.maxY;
                var start2;
                var end2;
                if (angle >= 0 && angle < 0.5 * Math.PI) {
                  start2 = {
                    x: minX,
                    y: minY
                  };
                  end2 = {
                    x: maxX,
                    y: maxY
                  };
                } else if (0.5 * Math.PI <= angle && angle < Math.PI) {
                  start2 = {
                    x: maxX,
                    y: minY
                  };
                  end2 = {
                    x: minX,
                    y: maxY
                  };
                } else if (Math.PI <= angle && angle < 1.5 * Math.PI) {
                  start2 = {
                    x: maxX,
                    y: maxY
                  };
                  end2 = {
                    x: minX,
                    y: minY
                  };
                } else {
                  start2 = {
                    x: minX,
                    y: maxY
                  };
                  end2 = {
                    x: maxX,
                    y: minY
                  };
                }
                var tanTheta = Math.tan(angle);
                var tanTheta2 = tanTheta * tanTheta;
                var x = (end2.x - start2.x + tanTheta * (end2.y - start2.y)) / (tanTheta2 + 1) + start2.x;
                var y = tanTheta * (end2.x - start2.x + tanTheta * (end2.y - start2.y)) / (tanTheta2 + 1) + start2.y;
                var gradient2 = context.createLinearGradient(start2.x, start2.y, x, y);
                _addStop(steps, gradient2);
                return gradient2;
              }
              function _parseRadialGradient(color, shape, context) {
                var arr = color.split(" ");
                var circleCfg = arr[0].slice(2, arr[0].length - 1);
                circleCfg = circleCfg.split(",");
                var fx = parseFloat(circleCfg[0]);
                var fy = parseFloat(circleCfg[1]);
                var fr = parseFloat(circleCfg[2]);
                var steps = arr.slice(1);
                if (fr === 0) {
                  var _color = steps[steps.length - 1];
                  return _color.split(":")[1];
                }
                var _shape$getBBox2 = shape.getBBox(), width = _shape$getBBox2.width, height = _shape$getBBox2.height, minX = _shape$getBBox2.minX, minY = _shape$getBBox2.minY;
                var r = Math.sqrt(width * width + height * height) / 2;
                var gradient2 = context.createRadialGradient(minX + width * fx, minY + height * fy, fr * r, minX + width / 2, minY + height / 2, r);
                _addStop(steps, gradient2);
                return gradient2;
              }
              function parseStyle(color, shape, context) {
                if (color[1] === "(") {
                  try {
                    var firstCode = color[0];
                    if (firstCode === "l") {
                      return _parseLineGradient(color, shape, context);
                    } else if (firstCode === "r") {
                      return _parseRadialGradient(color, shape, context);
                    }
                  } catch (ev) {
                    console.error("error in parsing gradient string, please check if there are any extra whitespaces.");
                    console.error(ev);
                  }
                }
                return color;
              }
              var ALIAS_ATTRS_MAP = {
                stroke: "strokeStyle",
                fill: "fillStyle",
                opacity: "globalAlpha"
              };
              var SHAPE_ATTRS = [
                "fillStyle",
                "font",
                "globalAlpha",
                "lineCap",
                "lineWidth",
                "lineJoin",
                "miterLimit",
                "shadowBlur",
                "shadowColor",
                "shadowOffsetX",
                "shadowOffsetY",
                "strokeStyle",
                "textAlign",
                "textBaseline",
                "lineDash",
                "shadow"
              ];
              var CLIP_SHAPES = ["circle", "sector", "polygon", "rect", "polyline"];
              var Element = /* @__PURE__ */ function() {
                var _proto = Element2.prototype;
                _proto._initProperties = function _initProperties() {
                  this._attrs = {
                    zIndex: 0,
                    visible: true,
                    destroyed: false
                  };
                };
                function Element2(cfg) {
                  this._initProperties();
                  mix$1(this._attrs, cfg);
                  var attrs = this._attrs.attrs;
                  if (attrs) {
                    this.initAttrs(attrs);
                  }
                  this.initTransform();
                }
                _proto.get = function get(name) {
                  return this._attrs[name];
                };
                _proto.set = function set(name, value) {
                  this._attrs[name] = value;
                };
                _proto.isGroup = function isGroup() {
                  return this.get("isGroup");
                };
                _proto.isShape = function isShape() {
                  return this.get("isShape");
                };
                _proto.initAttrs = function initAttrs(attrs) {
                  this.attr(mix$1(this.getDefaultAttrs(), attrs));
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {};
                };
                _proto._setAttr = function _setAttr(name, value) {
                  var attrs = this._attrs.attrs;
                  if (name === "clip") {
                    value = this._setAttrClip(value);
                  } else {
                    var alias = ALIAS_ATTRS_MAP[name];
                    if (alias) {
                      attrs[alias] = value;
                    }
                  }
                  attrs[name] = value;
                };
                _proto._getAttr = function _getAttr(name) {
                  return this._attrs.attrs[name];
                };
                _proto._setAttrClip = function _setAttrClip(clip) {
                  if (clip && CLIP_SHAPES.indexOf(clip._attrs.type) > -1) {
                    if (clip.get("canvas") === null) {
                      clip = Object.assign({}, clip);
                    }
                    clip.set("parent", this.get("parent"));
                    clip.set("context", this.get("context"));
                    return clip;
                  }
                  return null;
                };
                _proto.attr = function attr(name, value) {
                  var self = this;
                  if (self.get("destroyed"))
                    return null;
                  var argumentsLen = arguments.length;
                  if (argumentsLen === 0) {
                    return self._attrs.attrs;
                  }
                  if (isObject$1(name)) {
                    this._attrs.bbox = null;
                    for (var k in name) {
                      self._setAttr(k, name[k]);
                    }
                    if (self._afterAttrsSet) {
                      self._afterAttrsSet();
                    }
                    return self;
                  }
                  if (argumentsLen === 2) {
                    this._attrs.bbox = null;
                    self._setAttr(name, value);
                    if (self._afterAttrsSet) {
                      self._afterAttrsSet();
                    }
                    return self;
                  }
                  return self._getAttr(name);
                };
                _proto.getParent = function getParent() {
                  return this.get("parent");
                };
                _proto.draw = function draw(context) {
                  if (this.get("destroyed")) {
                    return;
                  }
                  if (this.get("visible")) {
                    this.setContext(context);
                    this.drawInner(context);
                    this.restoreContext(context);
                  }
                };
                _proto.setContext = function setContext(context) {
                  var clip = this._attrs.attrs.clip;
                  context.save();
                  if (clip) {
                    clip.resetTransform(context);
                    clip.createPath(context);
                    context.clip();
                  }
                  this.resetContext(context);
                  this.resetTransform(context);
                };
                _proto.restoreContext = function restoreContext(context) {
                  context.restore();
                };
                _proto.resetContext = function resetContext(context) {
                  var elAttrs = this._attrs.attrs;
                  for (var k in elAttrs) {
                    if (SHAPE_ATTRS.indexOf(k) > -1) {
                      var v = elAttrs[k];
                      if ((k === "fillStyle" || k === "strokeStyle") && v) {
                        v = parseStyle(v, this, context);
                      }
                      if (k === "lineDash" && context.setLineDash && isArray$1(v)) {
                        context.setLineDash(v);
                      } else {
                        context[k] = v;
                      }
                    }
                  }
                };
                _proto.hasFill = function hasFill() {
                  return this.get("canFill") && this._attrs.attrs.fillStyle;
                };
                _proto.hasStroke = function hasStroke() {
                  return this.get("canStroke") && this._attrs.attrs.strokeStyle;
                };
                _proto.drawInner = function drawInner() {
                };
                _proto.show = function show() {
                  this.set("visible", true);
                  return this;
                };
                _proto.hide = function hide() {
                  this.set("visible", false);
                  return this;
                };
                _proto.isVisible = function isVisible() {
                  return this.get("visible");
                };
                _proto.getAriaLabel = function getAriaLabel() {
                  var _this$_attrs = this._attrs, destroyed = _this$_attrs.destroyed, visible = _this$_attrs.visible, isShape = _this$_attrs.isShape, aria = _this$_attrs.aria;
                  if (destroyed || !visible || isShape && !aria) {
                    return;
                  }
                  return this._getAriaLabel();
                };
                _proto._getAriaLabel = function _getAriaLabel() {
                  return this._attrs.ariaLabel;
                };
                _proto._removeFromParent = function _removeFromParent() {
                  var parent = this.get("parent");
                  if (parent) {
                    var children = parent.get("children");
                    remove(children, this);
                  }
                  return this;
                };
                _proto.remove = function remove2(destroy) {
                  if (destroy) {
                    this.destroy();
                  } else {
                    this._removeFromParent();
                  }
                };
                _proto.destroy = function destroy() {
                  var destroyed = this.get("destroyed");
                  if (destroyed) {
                    return null;
                  }
                  this._removeFromParent();
                  this._attrs = {};
                  this.set("destroyed", true);
                };
                _proto.getBBox = function getBBox() {
                  return {
                    minX: 0,
                    maxX: 0,
                    minY: 0,
                    maxY: 0,
                    width: 0,
                    height: 0
                  };
                };
                _proto.initTransform = function initTransform() {
                  var attrs = this._attrs.attrs || {};
                  if (!attrs.matrix) {
                    attrs.matrix = [1, 0, 0, 1, 0, 0];
                  }
                  this._attrs.attrs = attrs;
                };
                _proto.getMatrix = function getMatrix() {
                  return this._attrs.attrs.matrix;
                };
                _proto.setMatrix = function setMatrix(m) {
                  this._attrs.attrs.matrix = [m[0], m[1], m[2], m[3], m[4], m[5]];
                };
                _proto.transform = function transform(actions) {
                  var matrix = this._attrs.attrs.matrix;
                  this._attrs.attrs.matrix = Matrix.transform(matrix, actions);
                  return this;
                };
                _proto.setTransform = function setTransform(actions) {
                  this._attrs.attrs.matrix = [1, 0, 0, 1, 0, 0];
                  return this.transform(actions);
                };
                _proto.translate = function translate(x, y) {
                  var matrix = this._attrs.attrs.matrix;
                  Matrix.translate(matrix, matrix, [x, y]);
                };
                _proto.rotate = function rotate(rad) {
                  var matrix = this._attrs.attrs.matrix;
                  Matrix.rotate(matrix, matrix, rad);
                };
                _proto.scale = function scale(sx, sy) {
                  var matrix = this._attrs.attrs.matrix;
                  Matrix.scale(matrix, matrix, [sx, sy]);
                };
                _proto.moveTo = function moveTo(x, y) {
                  var cx = this._attrs.x || 0;
                  var cy = this._attrs.y || 0;
                  this.translate(x - cx, y - cy);
                  this.set("x", x);
                  this.set("y", y);
                };
                _proto.apply = function apply(v) {
                  var m = this._attrs.attrs.matrix;
                  Vector2.transformMat2d(v, v, m);
                  return this;
                };
                _proto.resetTransform = function resetTransform(context) {
                  var mo = this._attrs.attrs.matrix;
                  if (Matrix.isChanged(mo)) {
                    context.transform(mo[0], mo[1], mo[2], mo[3], mo[4], mo[5]);
                  }
                };
                _proto.isDestroyed = function isDestroyed() {
                  return this.get("destroyed");
                };
                return Element2;
              }();
              var Shape = /* @__PURE__ */ function(_Element) {
                _inheritsLoose$3(Shape2, _Element);
                function Shape2() {
                  return _Element.apply(this, arguments) || this;
                }
                var _proto = Shape2.prototype;
                _proto._initProperties = function _initProperties() {
                  this._attrs = {
                    zIndex: 0,
                    visible: true,
                    destroyed: false,
                    isShape: true,
                    attrs: {}
                  };
                };
                _proto.getType = function getType2() {
                  return this._attrs.type;
                };
                _proto.drawInner = function drawInner(context) {
                  var self = this;
                  var attrs = self.get("attrs");
                  self.createPath(context);
                  var originOpacity = context.globalAlpha;
                  if (self.hasFill()) {
                    var fillOpacity = attrs.fillOpacity;
                    if (!isNil$1(fillOpacity) && fillOpacity !== 1) {
                      context.globalAlpha = fillOpacity;
                      context.fill();
                      context.globalAlpha = originOpacity;
                    } else {
                      context.fill();
                    }
                  }
                  if (self.hasStroke()) {
                    var lineWidth = attrs.lineWidth;
                    if (lineWidth > 0) {
                      var strokeOpacity = attrs.strokeOpacity;
                      if (!isNil$1(strokeOpacity) && strokeOpacity !== 1) {
                        context.globalAlpha = strokeOpacity;
                      }
                      context.stroke();
                    }
                  }
                };
                _proto.getBBox = function getBBox() {
                  var bbox = this._attrs.bbox;
                  if (!bbox) {
                    bbox = this.calculateBox();
                    if (bbox) {
                      bbox.x = bbox.minX;
                      bbox.y = bbox.minY;
                      bbox.width = bbox.maxX - bbox.minX;
                      bbox.height = bbox.maxY - bbox.minY;
                    }
                    this._attrs.bbox = bbox;
                  }
                  return bbox;
                };
                _proto.calculateBox = function calculateBox() {
                  return null;
                };
                _proto.createPath = function createPath() {
                };
                return Shape2;
              }(Element);
              function parseRadius(radius, width, height) {
                radius = parsePadding(radius);
                if (!radius[0] && !radius[1] && !radius[2] && !radius[3]) {
                  return radius;
                }
                var minWidth = Math.max(radius[0] + radius[1], radius[2] + radius[3]);
                var minHeight = Math.max(radius[0] + radius[3], radius[1] + radius[2]);
                var scale = Math.min(width / minWidth, height / minHeight);
                if (scale < 1) {
                  return radius.map(function(r) {
                    return r * scale;
                  });
                }
                return radius;
              }
              var Rect$2 = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Rect2, _Shape);
                function Rect2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Rect2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canFill = true;
                  this._attrs.canStroke = true;
                  this._attrs.type = "rect";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0,
                    radius: 0,
                    lineWidth: 0
                  };
                };
                _proto.createRadiusPath = function createRadiusPath(context, x, y, width, height, radius) {
                  radius = parseRadius(radius, width, height);
                  context.moveTo(x + radius[0], y);
                  context.lineTo(x + width - radius[1], y);
                  context.arc(x + width - radius[1], y + radius[1], radius[1], -Math.PI / 2, 0, false);
                  context.lineTo(x + width, y + height - radius[2]);
                  context.arc(x + width - radius[2], y + height - radius[2], radius[2], 0, Math.PI / 2, false);
                  context.lineTo(x + radius[3], y + height);
                  context.arc(x + radius[3], y + height - radius[3], radius[3], Math.PI / 2, Math.PI, false);
                  context.lineTo(x, y + radius[0]);
                  context.arc(x + radius[0], y + radius[0], radius[0], Math.PI, Math.PI * 3 / 2, false);
                  context.closePath();
                };
                _proto.createPath = function createPath(context) {
                  var self = this;
                  var attrs = self.get("attrs");
                  var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height, radius = attrs.radius;
                  context.beginPath();
                  if (!radius || !(width * height)) {
                    context.rect(x, y, width, height);
                  } else {
                    this.createRadiusPath(context, x, y, width, height, radius);
                  }
                };
                _proto.calculateBox = function calculateBox() {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height;
                  return {
                    minX: x,
                    minY: y,
                    maxX: x + width,
                    maxY: y + height
                  };
                };
                return Rect2;
              }(Shape);
              var imageCaches = {};
              var ImageShape = /* @__PURE__ */ function(_Rect) {
                _inheritsLoose$3(ImageShape2, _Rect);
                function ImageShape2() {
                  return _Rect.apply(this, arguments) || this;
                }
                var _proto = ImageShape2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Rect.prototype._initProperties.call(this);
                  this._attrs.canFill = false;
                  this._attrs.canStroke = false;
                  this._attrs.loading = false;
                  this._attrs.image = null;
                  this._attrs.type = "image";
                };
                _proto.draw = function draw(context) {
                  var _this = this;
                  if (this.get("loading")) {
                    return;
                  }
                  var image = this.get("image");
                  if (image) {
                    _Rect.prototype.draw.call(this, context);
                    return;
                  }
                  var attrs = this.get("attrs");
                  var src = attrs.src;
                  if (src && window.Image) {
                    var cacheImage = this.get("cacheImage");
                    if (cacheImage && imageCaches[src]) {
                      this.set("image", imageCaches[src]);
                      this.draw(context);
                      return;
                    }
                    this.set("loading", true);
                    var _image = new Image();
                    _image.crossOrigin = "";
                    _image.onload = function() {
                      _this.set("loading", false);
                      _this.set("image", _image);
                      _this.draw(context);
                    };
                    _image.src = src;
                    if (cacheImage) {
                      imageCaches[src] = _image;
                    }
                  }
                };
                _proto.createPath = function createPath(context) {
                  var image = this.get("image");
                  this.drawImage(context, image);
                };
                _proto.drawImage = function drawImage(context, image) {
                  var _this$_attrs = this._attrs, attrs = _this$_attrs.attrs, destroyed = _this$_attrs.destroyed;
                  if (destroyed) {
                    return;
                  }
                  var x = attrs.x, y = attrs.y, width = attrs.width, height = attrs.height, sx = attrs.sx, sy = attrs.sy, swidth = attrs.swidth, sheight = attrs.sheight, radius = attrs.radius, fillOpacity = attrs.fillOpacity;
                  if (radius) {
                    context.save();
                    this.createRadiusPath(context, x, y, width, height, radius);
                    context.clip();
                  }
                  var originOpacity = context.globalAlpha;
                  if (!isNil$1(fillOpacity)) {
                    context.globalAlpha = fillOpacity;
                  }
                  if (!isNil$1(sx) && !isNil$1(sy) && !isNil$1(swidth) && !isNil$1(sheight)) {
                    context.drawImage(image, sx, sy, swidth, sheight, x, y, width, height);
                  } else {
                    context.drawImage(image, x, y, width, height);
                  }
                  context.globalAlpha = originOpacity;
                  if (radius) {
                    context.restore();
                  }
                };
                return ImageShape2;
              }(Rect$2);
              var Circle$1 = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Circle2, _Shape);
                function Circle2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Circle2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canFill = true;
                  this._attrs.canStroke = true;
                  this._attrs.type = "circle";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    x: 0,
                    y: 0,
                    r: 0,
                    lineWidth: 0
                  };
                };
                _proto.createPath = function createPath(context) {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, r = attrs.r;
                  context.beginPath();
                  context.arc(x, y, r, 0, Math.PI * 2, false);
                  context.closePath();
                };
                _proto.calculateBox = function calculateBox() {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, r = attrs.r;
                  return {
                    minX: x - r,
                    maxX: x + r,
                    minY: y - r,
                    maxY: y + r
                  };
                };
                return Circle2;
              }(Shape);
              var start = Vector2.create();
              var end = Vector2.create();
              var extremity = Vector2.create();
              function getCubicBezierXYatT(startPt, controlPt1, controlPt2, endPt, T) {
                var x = CubicN(T, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
                var y = CubicN(T, startPt.y, controlPt1.y, controlPt2.y, endPt.y);
                return {
                  x,
                  y
                };
              }
              function CubicN(T, a, b, c, d) {
                var t2 = T * T;
                var t3 = t2 * T;
                return a + (-a * 3 + T * (3 * a - a * T)) * T + (3 * b + T * (-6 * b + b * 3 * T)) * T + (c * 3 - c * 3 * T) * t2 + d * t3;
              }
              function cubicBezierBounds(c) {
                var minX = Infinity;
                var maxX = -Infinity;
                var minY = Infinity;
                var maxY = -Infinity;
                var s = {
                  x: c[0],
                  y: c[1]
                };
                var c1 = {
                  x: c[2],
                  y: c[3]
                };
                var c2 = {
                  x: c[4],
                  y: c[5]
                };
                var e = {
                  x: c[6],
                  y: c[7]
                };
                for (var t = 0; t < 100; t++) {
                  var pt = getCubicBezierXYatT(s, c1, c2, e, t / 100);
                  if (pt.x < minX) {
                    minX = pt.x;
                  }
                  if (pt.x > maxX) {
                    maxX = pt.x;
                  }
                  if (pt.y < minY) {
                    minY = pt.y;
                  }
                  if (pt.y > maxY) {
                    maxY = pt.y;
                  }
                }
                return {
                  minX,
                  minY,
                  maxX,
                  maxY
                };
              }
              function getBBoxFromPoints(points, lineWidth) {
                if (points.length === 0) {
                  return;
                }
                var p = points[0];
                var left = p.x;
                var right = p.x;
                var top = p.y;
                var bottom = p.y;
                var len = points.length;
                for (var i = 1; i < len; i++) {
                  p = points[i];
                  left = Math.min(left, p.x);
                  right = Math.max(right, p.x);
                  top = Math.min(top, p.y);
                  bottom = Math.max(bottom, p.y);
                }
                lineWidth = lineWidth / 2 || 0;
                return {
                  minX: left - lineWidth,
                  minY: top - lineWidth,
                  maxX: right + lineWidth,
                  maxY: bottom + lineWidth
                };
              }
              function getBBoxFromLine(x0, y0, x1, y1, lineWidth) {
                lineWidth = lineWidth / 2 || 0;
                return {
                  minX: Math.min(x0, x1) - lineWidth,
                  minY: Math.min(y0, y1) - lineWidth,
                  maxX: Math.max(x0, x1) + lineWidth,
                  maxY: Math.max(y0, y1) + lineWidth
                };
              }
              function getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise) {
                var diff2 = Math.abs(startAngle - endAngle);
                if (diff2 % (Math.PI * 2) < 1e-4 && diff2 > 1e-4) {
                  return {
                    minX: x - r,
                    minY: y - r,
                    maxX: x + r,
                    maxY: y + r
                  };
                }
                start[0] = Math.cos(startAngle) * r + x;
                start[1] = Math.sin(startAngle) * r + y;
                end[0] = Math.cos(endAngle) * r + x;
                end[1] = Math.sin(endAngle) * r + y;
                var min = [0, 0];
                var max = [0, 0];
                Vector2.min(min, start, end);
                Vector2.max(max, start, end);
                startAngle = startAngle % (Math.PI * 2);
                if (startAngle < 0) {
                  startAngle = startAngle + Math.PI * 2;
                }
                endAngle = endAngle % (Math.PI * 2);
                if (endAngle < 0) {
                  endAngle = endAngle + Math.PI * 2;
                }
                if (startAngle > endAngle && !anticlockwise) {
                  endAngle += Math.PI * 2;
                } else if (startAngle < endAngle && anticlockwise) {
                  startAngle += Math.PI * 2;
                }
                if (anticlockwise) {
                  var tmp = endAngle;
                  endAngle = startAngle;
                  startAngle = tmp;
                }
                for (var angle = 0; angle < endAngle; angle += Math.PI / 2) {
                  if (angle > startAngle) {
                    extremity[0] = Math.cos(angle) * r + x;
                    extremity[1] = Math.sin(angle) * r + y;
                    Vector2.min(min, extremity, min);
                    Vector2.max(max, extremity, max);
                  }
                }
                return {
                  minX: min[0],
                  minY: min[1],
                  maxX: max[0],
                  maxY: max[1]
                };
              }
              function getBBoxFromBezierGroup(points, lineWidth) {
                var minX = Infinity;
                var maxX = -Infinity;
                var minY = Infinity;
                var maxY = -Infinity;
                for (var i = 0, len = points.length; i < len; i++) {
                  var bbox = cubicBezierBounds(points[i]);
                  if (bbox.minX < minX) {
                    minX = bbox.minX;
                  }
                  if (bbox.maxX > maxX) {
                    maxX = bbox.maxX;
                  }
                  if (bbox.minY < minY) {
                    minY = bbox.minY;
                  }
                  if (bbox.maxY > maxY) {
                    maxY = bbox.maxY;
                  }
                }
                lineWidth = lineWidth / 2 || 0;
                return {
                  minX: minX - lineWidth,
                  minY: minY - lineWidth,
                  maxX: maxX + lineWidth,
                  maxY: maxY + lineWidth
                };
              }
              var Line$2 = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Line2, _Shape);
                function Line2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Line2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canStroke = true;
                  this._attrs.type = "line";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 0,
                    lineWidth: 1
                  };
                };
                _proto.createPath = function createPath(context) {
                  var attrs = this.get("attrs");
                  var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2;
                  context.beginPath();
                  context.moveTo(x1, y1);
                  context.lineTo(x2, y2);
                };
                _proto.calculateBox = function calculateBox() {
                  var attrs = this.get("attrs");
                  var x1 = attrs.x1, y1 = attrs.y1, x2 = attrs.x2, y2 = attrs.y2, lineWidth = attrs.lineWidth;
                  return getBBoxFromLine(x1, y1, x2, y2, lineWidth);
                };
                return Line2;
              }(Shape);
              var Polygon$1 = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Polygon2, _Shape);
                function Polygon2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Polygon2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canFill = true;
                  this._attrs.canStroke = true;
                  this._attrs.type = "polygon";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    points: null,
                    lineWidth: 0
                  };
                };
                _proto.createPath = function createPath(context) {
                  var self = this;
                  var attrs = self.get("attrs");
                  var points = attrs.points;
                  context.beginPath();
                  for (var i = 0, len = points.length; i < len; i++) {
                    var point = points[i];
                    if (i === 0) {
                      context.moveTo(point.x, point.y);
                    } else {
                      context.lineTo(point.x, point.y);
                    }
                  }
                  context.closePath();
                };
                _proto.calculateBox = function calculateBox() {
                  var attrs = this.get("attrs");
                  var points = attrs.points;
                  return getBBoxFromPoints(points);
                };
                return Polygon2;
              }(Shape);
              function getPoint(v) {
                return [v.x, v.y];
              }
              function smoothBezier(points, smooth, isLoop, constraint) {
                var cps = [];
                var prevPoint;
                var nextPoint;
                var hasConstraint = !!constraint;
                var min;
                var max;
                var point;
                var len;
                var l;
                var i;
                if (hasConstraint) {
                  min = [Infinity, Infinity];
                  max = [-Infinity, -Infinity];
                  for (i = 0, l = points.length; i < l; i++) {
                    point = getPoint(points[i]);
                    Vector2.min(min, min, point);
                    Vector2.max(max, max, point);
                  }
                  Vector2.min(min, min, constraint[0]);
                  Vector2.max(max, max, constraint[1]);
                }
                for (i = 0, len = points.length; i < len; i++) {
                  point = getPoint(points[i]);
                  if (isLoop) {
                    prevPoint = getPoint(points[i ? i - 1 : len - 1]);
                    nextPoint = getPoint(points[(i + 1) % len]);
                  } else {
                    if (i === 0 || i === len - 1) {
                      cps.push([point[0], point[1]]);
                      continue;
                    } else {
                      prevPoint = getPoint(points[i - 1]);
                      nextPoint = getPoint(points[i + 1]);
                    }
                  }
                  var v = Vector2.sub([], nextPoint, prevPoint);
                  Vector2.scale(v, v, smooth);
                  var d0 = Vector2.distance(point, prevPoint);
                  var d1 = Vector2.distance(point, nextPoint);
                  var sum = d0 + d1;
                  if (sum !== 0) {
                    d0 /= sum;
                    d1 /= sum;
                  }
                  var v1 = Vector2.scale([], v, -d0);
                  var v2 = Vector2.scale([], v, d1);
                  var cp0 = Vector2.add([], point, v1);
                  var cp1 = Vector2.add([], point, v2);
                  if (hasConstraint) {
                    Vector2.max(cp0, cp0, min);
                    Vector2.min(cp0, cp0, max);
                    Vector2.max(cp1, cp1, min);
                    Vector2.min(cp1, cp1, max);
                  }
                  cps.push([cp0[0], cp0[1]]);
                  cps.push([cp1[0], cp1[1]]);
                }
                if (isLoop) {
                  cps.push(cps.shift());
                }
                return cps;
              }
              function catmullRom2bezier(pointList, z, constraint) {
                var isLoop = !!z;
                var controlPointList = smoothBezier(pointList, 0.4, isLoop, constraint);
                var len = pointList.length;
                var d1 = [];
                var cp1;
                var cp2;
                var p;
                for (var i = 0; i < len - 1; i++) {
                  cp1 = controlPointList[i * 2];
                  cp2 = controlPointList[i * 2 + 1];
                  p = pointList[i + 1];
                  d1.push(["C", cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
                }
                if (isLoop) {
                  cp1 = controlPointList[len];
                  cp2 = controlPointList[len + 1];
                  p = pointList[0];
                  d1.push(["C", cp1[0], cp1[1], cp2[0], cp2[1], p.x, p.y]);
                }
                return d1;
              }
              function _filterPoints(points) {
                var filteredPoints = [];
                for (var i = 0, len = points.length; i < len; i++) {
                  var point = points[i];
                  if (!isNaN(point.x) && !isNaN(point.y)) {
                    filteredPoints.push(point);
                  }
                }
                return filteredPoints;
              }
              var Polyline = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Polyline2, _Shape);
                function Polyline2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Polyline2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canFill = true;
                  this._attrs.canStroke = true;
                  this._attrs.type = "polyline";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    points: null,
                    lineWidth: 1,
                    smooth: false
                  };
                };
                _proto.createPath = function createPath(context) {
                  var self = this;
                  var attrs = self.get("attrs");
                  var points = attrs.points, smooth = attrs.smooth;
                  var filteredPoints = _filterPoints(points);
                  context.beginPath();
                  if (filteredPoints.length) {
                    context.moveTo(filteredPoints[0].x, filteredPoints[0].y);
                    if (smooth) {
                      var constaint = [[0, 0], [1, 1]];
                      var sps = catmullRom2bezier(filteredPoints, false, constaint);
                      for (var i = 0, n = sps.length; i < n; i++) {
                        var sp = sps[i];
                        context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
                      }
                    } else {
                      var _i;
                      var l;
                      for (_i = 1, l = filteredPoints.length - 1; _i < l; _i++) {
                        context.lineTo(filteredPoints[_i].x, filteredPoints[_i].y);
                      }
                      context.lineTo(filteredPoints[l].x, filteredPoints[l].y);
                    }
                  }
                };
                _proto.calculateBox = function calculateBox() {
                  var attrs = this.get("attrs");
                  var points = attrs.points, smooth = attrs.smooth, lineWidth = attrs.lineWidth;
                  var filteredPoints = _filterPoints(points);
                  if (filteredPoints.length <= 1) {
                    return getBBoxFromPoints(filteredPoints, lineWidth);
                  }
                  if (smooth) {
                    var newPoints = [];
                    var constaint = [[0, 0], [1, 1]];
                    var sps = catmullRom2bezier(filteredPoints, false, constaint);
                    for (var i = 0, n = sps.length; i < n; i++) {
                      var sp = sps[i];
                      if (i === 0) {
                        newPoints.push([filteredPoints[0].x, filteredPoints[0].y, sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
                      } else {
                        var lastPoint = sps[i - 1];
                        newPoints.push([lastPoint[5], lastPoint[6], sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]]);
                      }
                    }
                    return getBBoxFromBezierGroup(newPoints, lineWidth);
                  }
                  return getBBoxFromPoints(filteredPoints, lineWidth);
                };
                return Polyline2;
              }(Shape);
              var Arc$1 = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Arc2, _Shape);
                function Arc2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Arc2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canStroke = true;
                  this._attrs.canFill = true;
                  this._attrs.type = "arc";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    x: 0,
                    y: 0,
                    r: 0,
                    startAngle: 0,
                    endAngle: Math.PI * 2,
                    anticlockwise: false,
                    lineWidth: 1
                  };
                };
                _proto.createPath = function createPath(context) {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, r = attrs.r, startAngle = attrs.startAngle, endAngle = attrs.endAngle, anticlockwise = attrs.anticlockwise;
                  context.beginPath();
                  if (startAngle !== endAngle) {
                    context.arc(x, y, r, startAngle, endAngle, anticlockwise);
                  }
                };
                _proto.calculateBox = function calculateBox() {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, r = attrs.r, startAngle = attrs.startAngle, endAngle = attrs.endAngle, anticlockwise = attrs.anticlockwise;
                  return getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise);
                };
                return Arc2;
              }(Shape);
              var Sector = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Sector2, _Shape);
                function Sector2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Sector2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canFill = true;
                  this._attrs.canStroke = true;
                  this._attrs.type = "sector";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    x: 0,
                    y: 0,
                    lineWidth: 0,
                    r: 0,
                    r0: 0,
                    startAngle: 0,
                    endAngle: Math.PI * 2,
                    anticlockwise: false
                  };
                };
                _proto.createPath = function createPath(context) {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, startAngle = attrs.startAngle, endAngle = attrs.endAngle, r = attrs.r, r0 = attrs.r0, anticlockwise = attrs.anticlockwise;
                  context.beginPath();
                  var unitX = Math.cos(startAngle);
                  var unitY = Math.sin(startAngle);
                  context.moveTo(unitX * r0 + x, unitY * r0 + y);
                  context.lineTo(unitX * r + x, unitY * r + y);
                  if (Math.abs(endAngle - startAngle) > 1e-4 || startAngle === 0 && endAngle < 0) {
                    context.arc(x, y, r, startAngle, endAngle, anticlockwise);
                    context.lineTo(Math.cos(endAngle) * r0 + x, Math.sin(endAngle) * r0 + y);
                    if (r0 !== 0) {
                      context.arc(x, y, r0, endAngle, startAngle, !anticlockwise);
                    }
                  }
                  context.closePath();
                };
                _proto.calculateBox = function calculateBox() {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, r = attrs.r, r0 = attrs.r0, startAngle = attrs.startAngle, endAngle = attrs.endAngle, anticlockwise = attrs.anticlockwise;
                  var outerBBox = getBBoxFromArc(x, y, r, startAngle, endAngle, anticlockwise);
                  var innerBBox = getBBoxFromArc(x, y, r0, startAngle, endAngle, anticlockwise);
                  return {
                    minX: Math.min(outerBBox.minX, innerBBox.minX),
                    minY: Math.min(outerBBox.minY, innerBBox.minY),
                    maxX: Math.max(outerBBox.maxX, innerBBox.maxX),
                    maxY: Math.max(outerBBox.maxY, innerBBox.maxY)
                  };
                };
                return Sector2;
              }(Shape);
              var Rect$1 = {
                calcRotatedBox: function calcRotatedBox(_ref) {
                  var width = _ref.width, height = _ref.height, rotate = _ref.rotate;
                  var absRotate = Math.abs(rotate);
                  return {
                    width: Math.abs(width * Math.cos(absRotate) + height * Math.sin(absRotate)),
                    height: Math.abs(height * Math.cos(absRotate) + width * Math.sin(absRotate))
                  };
                }
              };
              var textWidthCacheCounter = 0;
              var textWidthCache = {};
              var Text$1 = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Text2, _Shape);
                function Text2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Text2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canFill = true;
                  this._attrs.canStroke = true;
                  this._attrs.type = "text";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    lineWidth: 0,
                    lineCount: 1,
                    fontSize: 12,
                    fontFamily: "sans-serif",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontVariant: "normal",
                    textAlign: "start",
                    textBaseline: "bottom",
                    lineHeight: null,
                    textArr: null
                  };
                };
                _proto._getFontStyle = function _getFontStyle() {
                  var attrs = this._attrs.attrs;
                  var fontSize = attrs.fontSize, fontFamily = attrs.fontFamily, fontWeight = attrs.fontWeight, fontStyle = attrs.fontStyle, fontVariant = attrs.fontVariant;
                  return fontStyle + " " + fontVariant + " " + fontWeight + " " + fontSize + "px " + fontFamily;
                };
                _proto._afterAttrsSet = function _afterAttrsSet() {
                  var attrs = this._attrs.attrs;
                  attrs.font = this._getFontStyle();
                  if (attrs.text) {
                    var text = attrs.text;
                    var textArr = null;
                    var lineCount = 1;
                    if (isString(text) && text.indexOf("\n") !== -1) {
                      textArr = text.split("\n");
                      lineCount = textArr.length;
                    }
                    attrs.lineCount = lineCount;
                    attrs.textArr = textArr;
                  }
                  this.set("attrs", attrs);
                };
                _proto._getTextHeight = function _getTextHeight() {
                  var attrs = this._attrs.attrs;
                  if (attrs.height) {
                    return attrs.height;
                  }
                  var lineCount = attrs.lineCount;
                  var fontSize = attrs.fontSize * 1;
                  if (lineCount > 1) {
                    var spaceingY = this._getSpaceingY();
                    return fontSize * lineCount + spaceingY * (lineCount - 1);
                  }
                  return fontSize;
                };
                _proto._getSpaceingY = function _getSpaceingY() {
                  var attrs = this._attrs.attrs;
                  var lineHeight = attrs.lineHeight;
                  var fontSize = attrs.fontSize * 1;
                  return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
                };
                _proto.drawInner = function drawInner(context) {
                  var self = this;
                  var attrs = self._attrs.attrs;
                  var text = attrs.text;
                  var x = attrs.x;
                  var y = attrs.y;
                  if (isNil$1(text) || isNaN(x) || isNaN(y)) {
                    return;
                  }
                  var textArr = attrs.textArr;
                  var fontSize = attrs.fontSize * 1;
                  var spaceingY = self._getSpaceingY();
                  if (attrs.rotate) {
                    context.translate(x, y);
                    context.rotate(attrs.rotate);
                    x = 0;
                    y = 0;
                  }
                  var textBaseline = attrs.textBaseline;
                  var height;
                  if (textArr) {
                    height = self._getTextHeight();
                  }
                  var subY;
                  if (self.hasFill()) {
                    var fillOpacity = attrs.fillOpacity;
                    if (!isNil$1(fillOpacity) && fillOpacity !== 1) {
                      context.globalAlpha = fillOpacity;
                    }
                    if (textArr) {
                      for (var i = 0, len = textArr.length; i < len; i++) {
                        var subText = textArr[i];
                        subY = y + i * (spaceingY + fontSize) - height + fontSize;
                        if (textBaseline === "middle") {
                          subY += height - fontSize - (height - fontSize) / 2;
                        }
                        if (textBaseline === "top") {
                          subY += height - fontSize;
                        }
                        context.fillText(subText, x, subY);
                      }
                    } else {
                      context.fillText(text, x, y);
                    }
                  }
                  if (self.hasStroke()) {
                    if (textArr) {
                      for (var _i = 0, _len = textArr.length; _i < _len; _i++) {
                        var _subText = textArr[_i];
                        subY = y + _i * (spaceingY + fontSize) - height + fontSize;
                        if (textBaseline === "middle") {
                          subY += height - fontSize - (height - fontSize) / 2;
                        }
                        if (textBaseline === "top") {
                          subY += height - fontSize;
                        }
                        context.strokeText(_subText, x, subY);
                      }
                    } else {
                      context.strokeText(text, x, y);
                    }
                  }
                };
                _proto._getAriaLabel = function _getAriaLabel() {
                  return this._attrs.attrs.text;
                };
                _proto.calculateBox = function calculateBox() {
                  var self = this;
                  var attrs = self._attrs.attrs;
                  var x = attrs.x, y = attrs.y, textAlign = attrs.textAlign, textBaseline = attrs.textBaseline;
                  var width = self._getTextWidth();
                  if (!width) {
                    return {
                      minX: x,
                      minY: y,
                      maxX: x,
                      maxY: y
                    };
                  }
                  var height = self._getTextHeight();
                  if (attrs.rotate) {
                    var rotatedBox = Rect$1.calcRotatedBox({
                      width,
                      height,
                      rotate: attrs.rotate
                    });
                    width = rotatedBox.width;
                    height = rotatedBox.height;
                  }
                  var point = {
                    x,
                    y: y - height
                  };
                  if (textAlign) {
                    if (textAlign === "end" || textAlign === "right") {
                      point.x -= width;
                    } else if (textAlign === "center") {
                      point.x -= width / 2;
                    }
                  }
                  if (textBaseline) {
                    if (textBaseline === "top") {
                      point.y += height;
                    } else if (textBaseline === "middle") {
                      point.y += height / 2;
                    }
                  }
                  return {
                    minX: point.x,
                    minY: point.y,
                    maxX: point.x + width,
                    maxY: point.y + height
                  };
                };
                _proto._getTextWidth = function _getTextWidth() {
                  var attrs = this._attrs.attrs;
                  if (attrs.width) {
                    return attrs.width;
                  }
                  var text = attrs.text;
                  var context = this.get("context");
                  if (isNil$1(text))
                    return void 0;
                  var font = attrs.font;
                  var textArr = attrs.textArr;
                  var key = text + "" + font;
                  if (textWidthCache[key]) {
                    return textWidthCache[key];
                  }
                  var width = 0;
                  if (textArr) {
                    for (var i = 0, length = textArr.length; i < length; i++) {
                      var subText = textArr[i];
                      width = Math.max(width, measureText(subText, font, context).width);
                    }
                  } else {
                    width = measureText(text, font, context).width;
                  }
                  if (textWidthCacheCounter > 5e3) {
                    textWidthCacheCounter = 0;
                    textWidthCache = {};
                  }
                  textWidthCacheCounter++;
                  textWidthCache[key] = width;
                  return width;
                };
                return Text2;
              }(Shape);
              var Custom = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Custom2, _Shape);
                function Custom2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Custom2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canFill = true;
                  this._attrs.canStroke = true;
                  this._attrs.createPath = null;
                  this._attrs.type = "custom";
                };
                _proto.createPath = function createPath(context) {
                  var createPath2 = this.get("createPath");
                  createPath2 && createPath2.call(this, context);
                };
                _proto.calculateBox = function calculateBox() {
                  var calculateBox2 = this.get("calculateBox");
                  return calculateBox2 && calculateBox2.call(this);
                };
                return Custom2;
              }(Shape);
              var SYMBOLS = {
                circle: function circle(x, y, r, ctx2) {
                  ctx2.arc(x, y, r, 0, Math.PI * 2, false);
                },
                square: function square(x, y, r, ctx2) {
                  ctx2.moveTo(x - r, y - r);
                  ctx2.lineTo(x + r, y - r);
                  ctx2.lineTo(x + r, y + r);
                  ctx2.lineTo(x - r, y + r);
                  ctx2.closePath();
                }
              };
              var Marker = /* @__PURE__ */ function(_Shape) {
                _inheritsLoose$3(Marker2, _Shape);
                function Marker2() {
                  return _Shape.apply(this, arguments) || this;
                }
                var _proto = Marker2.prototype;
                _proto._initProperties = function _initProperties() {
                  _Shape.prototype._initProperties.call(this);
                  this._attrs.canFill = true;
                  this._attrs.canStroke = true;
                  this._attrs.type = "marker";
                };
                _proto.getDefaultAttrs = function getDefaultAttrs() {
                  return {
                    x: 0,
                    y: 0,
                    lineWidth: 0
                  };
                };
                _proto.createPath = function createPath(context) {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, radius = attrs.radius;
                  var symbol = attrs.symbol || "circle";
                  var method;
                  if (isFunction$1(symbol)) {
                    method = symbol;
                  } else {
                    method = SYMBOLS[symbol];
                  }
                  context.beginPath();
                  method(x, y, radius, context, this);
                };
                _proto.calculateBox = function calculateBox() {
                  var attrs = this.get("attrs");
                  var x = attrs.x, y = attrs.y, radius = attrs.radius;
                  return {
                    minX: x - radius,
                    minY: y - radius,
                    maxX: x + radius,
                    maxY: y + radius
                  };
                };
                return Marker2;
              }(Shape);
              Shape.Rect = Rect$2;
              Shape.Image = ImageShape;
              Shape.Circle = Circle$1;
              Shape.Line = Line$2;
              Shape.Polygon = Polygon$1;
              Shape.Polyline = Polyline;
              Shape.Arc = Arc$1;
              Shape.Sector = Sector;
              Shape.Text = Text$1;
              Shape.Custom = Custom;
              Shape.Marker = Marker;
              var SHAPE_MAP = {};
              var INDEX = "_INDEX";
              function getComparer(compare2) {
                return function(left, right) {
                  var result = compare2(left, right);
                  return result === 0 ? left[INDEX] - right[INDEX] : result;
                };
              }
              var Container = {
                getGroupClass: function getGroupClass() {
                },
                getChildren: function getChildren() {
                  return this.get("children");
                },
                addShape: function addShape(type, cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  var shapeType = SHAPE_MAP[type];
                  if (!shapeType) {
                    shapeType = upperFirst(type);
                    SHAPE_MAP[type] = shapeType;
                  }
                  var shape = new Shape[shapeType](cfg);
                  this.add(shape);
                  return shape;
                },
                addGroup: function addGroup(cfg) {
                  var groupClass = this.getGroupClass();
                  var rst = new groupClass(cfg);
                  this.add(rst);
                  return rst;
                },
                contain: function contain(item) {
                  var children = this.get("children");
                  return children.indexOf(item) > -1;
                },
                sort: function sort() {
                  var children = this.get("children");
                  for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    child[INDEX] = i;
                  }
                  children.sort(getComparer(function(obj1, obj2) {
                    return obj1.get("zIndex") - obj2.get("zIndex");
                  }));
                  return this;
                },
                drawChildren: function drawChildren(context) {
                  var children = this.get("children");
                  for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    child.draw(context);
                  }
                  return this;
                },
                clear: function clear2() {
                  var children = this.get("children");
                  while (children.length !== 0) {
                    children[children.length - 1].remove(true);
                  }
                  return this;
                },
                add: function add(items) {
                  var self = this;
                  var children = self.get("children");
                  if (!isArray$1(items)) {
                    items = [items];
                  }
                  for (var i = 0, len = items.length; i < len; i++) {
                    var item = items[i];
                    var parent = item.get("parent");
                    if (parent) {
                      var descendants = parent.get("children");
                      remove(descendants, item);
                    }
                    self._setEvn(item);
                    children.push(item);
                  }
                  return self;
                },
                _setEvn: function _setEvn(item) {
                  var self = this;
                  var _self$_attrs = self._attrs, context = _self$_attrs.context, canvas = _self$_attrs.canvas, aria = _self$_attrs.aria;
                  var _item$_attrs = item._attrs, isGroup = _item$_attrs.isGroup, type = _item$_attrs.type;
                  item._attrs.parent = self;
                  item._attrs.context = context;
                  item._attrs.canvas = canvas;
                  if (aria && item._attrs.aria !== false) {
                    item._attrs.aria = aria;
                  }
                  if (type === "text" && canvas && canvas.get("fontFamily")) {
                    item._attrs.attrs.fontFamily = item._attrs.attrs.fontFamily || canvas.get("fontFamily");
                  }
                  var clip = item._attrs.attrs.clip;
                  if (clip) {
                    clip._attrs.parent = self;
                    clip._attrs.context = context;
                    clip._attrs.canvas = canvas;
                  }
                  if (isGroup) {
                    var children = item._attrs.children;
                    for (var i = 0, len = children.length; i < len; i++) {
                      item._setEvn(children[i]);
                    }
                  }
                },
                _getAriaLabel: function _getAriaLabel() {
                  var _this$_attrs = this._attrs, aria = _this$_attrs.aria, ariaLabel = _this$_attrs.ariaLabel, children = _this$_attrs.children;
                  if (!aria)
                    return;
                  var childAriaLabels = [];
                  if (children && children.length) {
                    for (var i = 0, len = children.length; i < len; i++) {
                      var _childAriaLabel = children[i].getAriaLabel();
                      if (_childAriaLabel) {
                        childAriaLabels.push(_childAriaLabel);
                      }
                    }
                  }
                  var childAriaLabel = childAriaLabels.join(" ");
                  if (ariaLabel && childAriaLabel) {
                    return ariaLabel + " " + childAriaLabel + " ";
                  }
                  return ariaLabel || childAriaLabel;
                }
              };
              var Group = /* @__PURE__ */ function(_Rect) {
                _inheritsLoose$3(Group2, _Rect);
                function Group2() {
                  return _Rect.apply(this, arguments) || this;
                }
                var _proto = Group2.prototype;
                _proto._initProperties = function _initProperties() {
                  this._attrs = {
                    type: "group",
                    zIndex: 0,
                    visible: true,
                    destroyed: false,
                    isGroup: true,
                    canFill: true,
                    canStroke: true,
                    attrs: {},
                    children: []
                  };
                };
                _proto.getBBox = function getBBox() {
                  var self = this;
                  var minX = Infinity;
                  var maxX = -Infinity;
                  var minY = Infinity;
                  var maxY = -Infinity;
                  var children = self.get("children");
                  for (var i = 0, length = children.length; i < length; i++) {
                    var child = children[i];
                    if (child.get("visible")) {
                      var box = child.getBBox();
                      if (!box) {
                        continue;
                      }
                      var leftTop = [box.minX, box.minY];
                      var leftBottom = [box.minX, box.maxY];
                      var rightTop = [box.maxX, box.minY];
                      var rightBottom = [box.maxX, box.maxY];
                      var matrix = child.attr("matrix");
                      Vector2.transformMat2d(leftTop, leftTop, matrix);
                      Vector2.transformMat2d(leftBottom, leftBottom, matrix);
                      Vector2.transformMat2d(rightTop, rightTop, matrix);
                      Vector2.transformMat2d(rightBottom, rightBottom, matrix);
                      minX = Math.min(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], minX);
                      maxX = Math.max(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0], maxX);
                      minY = Math.min(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], minY);
                      maxY = Math.max(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1], maxY);
                    }
                  }
                  return {
                    minX,
                    minY,
                    maxX,
                    maxY,
                    x: minX,
                    y: minY,
                    width: maxX - minX,
                    height: maxY - minY
                  };
                };
                _proto.createPath = function createPath(context) {
                  var attrs = this.get("attrs");
                  if (!attrs.fillStyle && !attrs.strokeStyle) {
                    return;
                  }
                  _Rect.prototype.createPath.call(this, context);
                };
                _proto.drawInner = function drawInner(context) {
                  _Rect.prototype.drawInner.call(this, context);
                  this.drawChildren(context);
                };
                _proto.destroy = function destroy() {
                  if (this.get("destroyed")) {
                    return;
                  }
                  this.clear();
                  _Rect.prototype.destroy.call(this);
                };
                return Group2;
              }(Rect$2);
              mix$1(Group.prototype, Container, {
                getGroupClass: function getGroupClass() {
                  return Group;
                }
              });
              var requestAnimationFrame = (typeof window === "undefined" ? "undefined" : _typeof2(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame : function(fn) {
                return setTimeout(fn, 16);
              };
              var Canvas = /* @__PURE__ */ function(_EventEmit) {
                _inheritsLoose$3(Canvas2, _EventEmit);
                var _proto = Canvas2.prototype;
                _proto.get = function get(name) {
                  return this._attrs[name];
                };
                _proto.set = function set(name, value) {
                  this._attrs[name] = value;
                };
                function Canvas2(cfg) {
                  var _this;
                  _this = _EventEmit.call(this) || this;
                  var title = cfg.title;
                  var ariaLabel = title ? substitute(lang.general.withTitle, {
                    title
                  }) : lang.general.title;
                  _this._attrs = mix$1({
                    type: "canvas",
                    children: [],
                    ariaLabel
                  }, cfg);
                  _this._initPixelRatio();
                  _this._initCanvas();
                  return _this;
                }
                _proto._initPixelRatio = function _initPixelRatio() {
                  var pixelRatio = this.get("pixelRatio");
                  if (!pixelRatio) {
                    this.set("pixelRatio", getPixelRatio());
                  }
                };
                _proto.beforeDraw = function beforeDraw() {
                  var context = this._attrs.context;
                  var el = this._attrs.el;
                  context && context.clearRect && context.clearRect(0, 0, el.width, el.height);
                };
                _proto._initCanvas = function _initCanvas() {
                  var self = this;
                  var el = self.get("el");
                  var context = self.get("context");
                  if (!el && !context) {
                    throw new Error("Please specify the id, el or context of the chart!");
                  }
                  var canvas;
                  if (el) {
                    canvas = isString(el) ? getDomById(el) : el;
                  } else {
                    canvas = CanvasElement$1.create(context);
                  }
                  if (context && canvas && !canvas.getContext) {
                    canvas.getContext = function() {
                      return context;
                    };
                  }
                  var width = self.get("width");
                  if (!width) {
                    width = getWidth(canvas);
                  }
                  var height = self.get("height");
                  if (!height) {
                    height = getHeight(canvas);
                  }
                  self.set("canvas", this);
                  self.set("el", canvas);
                  self.set("context", context || canvas.getContext("2d"));
                  self.changeSize(width, height);
                  var eventController = new EventController({
                    canvas: this,
                    el: canvas
                  });
                  self.set("eventController", eventController);
                };
                _proto.changeSize = function changeSize(width, height) {
                  var pixelRatio = this.get("pixelRatio");
                  var canvasDOM = this.get("el");
                  if (canvasDOM.style) {
                    canvasDOM.style.width = width + "px";
                    canvasDOM.style.height = height + "px";
                  }
                  if (isCanvasElement(canvasDOM)) {
                    canvasDOM.width = width * pixelRatio;
                    canvasDOM.height = height * pixelRatio;
                    if (pixelRatio !== 1) {
                      var ctx2 = this.get("context");
                      ctx2.scale(pixelRatio, pixelRatio);
                    }
                  }
                  this.set("width", width);
                  this.set("height", height);
                };
                _proto.getWidth = function getWidth2() {
                  var pixelRatio = this.get("pixelRatio");
                  var width = this.get("width");
                  return width * pixelRatio;
                };
                _proto.getHeight = function getHeight2() {
                  var pixelRatio = this.get("pixelRatio");
                  var height = this.get("height");
                  return height * pixelRatio;
                };
                _proto.getPointByClient = function getPointByClient(clientX, clientY) {
                  var el = this.get("el");
                  var bbox = el.getBoundingClientRect();
                  var width = bbox.right - bbox.left;
                  var height = bbox.bottom - bbox.top;
                  return {
                    x: (clientX - bbox.left) * (el.width / width),
                    y: (clientY - bbox.top) * (el.height / height)
                  };
                };
                _proto._beginDraw = function _beginDraw() {
                  this._attrs.toDraw = true;
                };
                _proto._endDraw = function _endDraw() {
                  this._attrs.toDraw = false;
                };
                _proto.draw = function draw() {
                  var self = this;
                  function drawInner() {
                    self.set("animateHandler", requestAnimationFrame(function() {
                      self.set("animateHandler", void 0);
                      if (self.get("toDraw")) {
                        drawInner();
                      }
                    }));
                    self.beforeDraw();
                    try {
                      var context = self._attrs.context;
                      self.drawChildren(context);
                      if (context.draw) {
                        context.draw();
                      }
                      self.setAriaLabel();
                    } catch (ev) {
                      console.warn("error in draw canvas, detail as:");
                      console.warn(ev);
                      self._endDraw();
                    }
                    self._endDraw();
                  }
                  if (self.get("destroyed")) {
                    return;
                  }
                  if (self.get("animateHandler")) {
                    this._beginDraw();
                  } else {
                    drawInner();
                  }
                };
                _proto.setAriaLabel = function setAriaLabel() {
                  var el = this._attrs.el;
                  var ariaLabel = this._getAriaLabel();
                  if (ariaLabel && el.setAttribute) {
                    el.setAttribute("aria-label", ariaLabel);
                  }
                };
                _proto.destroy = function destroy() {
                  if (this.get("destroyed")) {
                    return;
                  }
                  var el = this.get("el");
                  el.width = 0;
                  el.height = 0;
                  this.clear();
                  this._attrs = {};
                  this.set("destroyed", true);
                };
                _proto.isDestroyed = function isDestroyed() {
                  return this.get("destroyed");
                };
                return Canvas2;
              }(EventEmit);
              mix$1(Canvas.prototype, Container, {
                getGroupClass: function getGroupClass() {
                  return Group;
                }
              });
              var engines = {};
              function getEngine(name) {
                var G2 = engines[name];
                if (G2) {
                  return G2;
                }
                return {
                  Canvas,
                  Group,
                  Shape
                };
              }
              function createCanvas(cfg) {
                var renderer = cfg.renderer;
                var G2 = getEngine(renderer);
                return new G2.Canvas(cfg);
              }
              var G = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                registerEngine: function registerEngine(name, engine) {
                  engines[name] = engine;
                },
                getEngine,
                createCanvas,
                Canvas,
                Group,
                Shape,
                Matrix,
                Vector2
              });
              function getClip(coord) {
                var start2 = coord.start;
                var end2 = coord.end;
                var width = end2.x - start2.x;
                var height = Math.abs(end2.y - start2.y);
                var margin = 10;
                var clip;
                if (coord.isPolar) {
                  var circleRadius = coord.circleRadius, center = coord.center, startAngle = coord.startAngle, endAngle = coord.endAngle;
                  clip = new Shape.Sector({
                    attrs: {
                      x: center.x,
                      y: center.y,
                      r: circleRadius,
                      r0: 0,
                      startAngle,
                      endAngle
                    }
                  });
                } else {
                  clip = new Shape.Rect({
                    attrs: {
                      x: start2.x,
                      y: end2.y - margin,
                      width,
                      height: height + 2 * margin
                    }
                  });
                }
                clip.isClip = true;
                return clip;
              }
              function isPointInPlot(point, plot) {
                var x = point.x, y = point.y;
                var tl = plot.tl, tr = plot.tr, br = plot.br;
                return x >= tl.x && x <= tr.x && y >= tl.y && y <= br.y;
              }
              var Helper = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                getClip,
                isPointInPlot
              });
              function compare(a, b) {
                return a - b;
              }
              function _isScaleExist(scales, compareScale) {
                var flag = false;
                each$1(scales, function(scale) {
                  var scaleValues = [].concat(scale.values);
                  var compareScaleValues = [].concat(compareScale.values);
                  if (scale.type === compareScale.type && scale.field === compareScale.field && scaleValues.sort(compare).toString() === compareScaleValues.sort(compare).toString()) {
                    flag = true;
                    return;
                  }
                });
                return flag;
              }
              var Chart = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Chart2, _Base);
                Chart2.initPlugins = function initPlugins() {
                  return {
                    _plugins: [],
                    _cacheId: 0,
                    register: function register(plugins) {
                      var p = this._plugins;
                      [].concat(plugins).forEach(function(plugin) {
                        if (p.indexOf(plugin) === -1) {
                          p.push(plugin);
                        }
                      });
                      this._cacheId++;
                    },
                    unregister: function unregister(plugins) {
                      var p = this._plugins;
                      [].concat(plugins).forEach(function(plugin) {
                        var idx = p.indexOf(plugin);
                        if (idx !== -1) {
                          p.splice(idx, 1);
                        }
                      });
                      this._cacheId++;
                    },
                    clear: function clear2() {
                      this._plugins = [];
                      this._cacheId++;
                    },
                    count: function count() {
                      return this._plugins.length;
                    },
                    getAll: function getAll() {
                      return this._plugins;
                    },
                    notify: function notify(chart, hook, args) {
                      var descriptors = this.descriptors(chart);
                      var ilen = descriptors.length;
                      var i;
                      var descriptor;
                      var plugin;
                      var params;
                      var method;
                      for (i = 0; i < ilen; ++i) {
                        descriptor = descriptors[i];
                        plugin = descriptor.plugin;
                        method = plugin[hook];
                        if (typeof method === "function") {
                          params = [chart].concat(args || []);
                          if (method.apply(plugin, params) === false) {
                            return false;
                          }
                        }
                      }
                      return true;
                    },
                    descriptors: function descriptors(chart) {
                      var cache2 = chart._plugins || (chart._plugins = {});
                      if (cache2.id === this._cacheId) {
                        return cache2.descriptors;
                      }
                      var plugins = [];
                      var descriptors2 = [];
                      this._plugins.concat(chart && chart.get("plugins") || []).forEach(function(plugin) {
                        var idx = plugins.indexOf(plugin);
                        if (idx !== -1) {
                          return;
                        }
                        plugins.push(plugin);
                        descriptors2.push({
                          plugin
                        });
                      });
                      cache2.descriptors = descriptors2;
                      cache2.id = this._cacheId;
                      return descriptors2;
                    }
                  };
                };
                var _proto = Chart2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {
                    id: null,
                    renderer: "canvas",
                    rendered: false,
                    padding: Global.padding,
                    data: null,
                    scales: {},
                    geoms: [],
                    colDefs: null,
                    pixelRatio: Global.pixelRatio,
                    filters: null,
                    appendPadding: Global.appendPadding
                  };
                };
                _proto._syncYScales = function _syncYScales() {
                  var syncY = this.get("syncY");
                  if (!syncY) {
                    return;
                  }
                  var geoms = this.get("geoms");
                  var syncScales = [];
                  var min = [];
                  var max = [];
                  each$1(geoms, function(geom) {
                    var yScale = geom.getYScale();
                    if (yScale.isLinear) {
                      syncScales.push(yScale);
                      min.push(yScale.min);
                      max.push(yScale.max);
                    }
                  });
                  min = Math.min.apply(null, min);
                  max = Math.max.apply(null, max);
                  each$1(syncScales, function(scale) {
                    scale.change({
                      min
                    });
                    scale.change({
                      max
                    });
                  });
                };
                _proto._getFieldsForLegend = function _getFieldsForLegend() {
                  var fields = [];
                  var geoms = this.get("geoms");
                  each$1(geoms, function(geom) {
                    var attrOptions = geom.get("attrOptions");
                    var attrCfg = attrOptions.color;
                    if (attrCfg && attrCfg.field && isString(attrCfg.field)) {
                      var arr = attrCfg.field.split("*");
                      each$1(arr, function(item) {
                        if (fields.indexOf(item) === -1) {
                          fields.push(item);
                        }
                      });
                    }
                  });
                  return fields;
                };
                _proto._getScaleData = function _getScaleData(field) {
                  var data = this.get("data");
                  var filteredData = this.get("filteredData");
                  if (filteredData.length) {
                    var legendFields = this._getFieldsForLegend();
                    if (legendFields.indexOf(field) === -1) {
                      data = filteredData;
                    }
                  }
                  return data;
                };
                _proto._adjustScale = function _adjustScale() {
                  var self = this;
                  var scaleController = self.get("scaleController");
                  var geoms = this.get("geoms");
                  for (var i = 0; i < geoms.length; i++) {
                    var geom = geoms[i];
                    if (geom.get("type") === "interval") {
                      var yScale = geom.getYScale();
                      scaleController.adjustStartZero(yScale);
                    }
                  }
                };
                _proto._removeGeoms = function _removeGeoms() {
                  var geoms = this.get("geoms");
                  while (geoms.length > 0) {
                    var geom = geoms.shift();
                    geom.destroy();
                  }
                };
                _proto._clearGeoms = function _clearGeoms() {
                  var geoms = this.get("geoms");
                  for (var i = 0, length = geoms.length; i < length; i++) {
                    var geom = geoms[i];
                    geom.clear();
                  }
                };
                _proto._clearInner = function _clearInner() {
                  this._clearGeoms();
                  Chart2.plugins.notify(this, "clearInner");
                  this.emit("clearinner");
                  this.get("axisController") && this.get("axisController").clear();
                };
                _proto._initFilteredData = function _initFilteredData() {
                  var filters = this.get("filters");
                  var data = this.get("data") || [];
                  if (filters) {
                    data = data.filter(function(obj) {
                      var rst = true;
                      each$1(filters, function(fn, k) {
                        if (fn) {
                          rst = fn(obj[k], obj);
                          if (!rst) {
                            return false;
                          }
                        }
                      });
                      return rst;
                    });
                  }
                  this.set("filteredData", data);
                };
                _proto._changeGeomsData = function _changeGeomsData() {
                  var geoms = this.get("geoms");
                  var data = this.get("filteredData");
                  for (var i = 0, length = geoms.length; i < length; i++) {
                    var geom = geoms[i];
                    geom.changeData(data);
                  }
                };
                _proto._initGeom = function _initGeom(geom) {
                  if (geom.get("isInit")) {
                    return;
                  }
                  var coord = this.get("coord");
                  var data = this.get("filteredData");
                  var colDefs = this.get("colDefs");
                  var middlePlot = this.get("middlePlot");
                  geom.set("chart", this);
                  geom.set("container", middlePlot.addGroup());
                  geom.set("data", data);
                  geom.set("coord", coord);
                  geom.set("colDefs", colDefs);
                  geom.init();
                  this.emit("_aftergeominit", geom);
                };
                _proto._initGeoms = function _initGeoms() {
                  var geoms = this.get("geoms");
                  for (var i = 0, length = geoms.length; i < length; i++) {
                    this._initGeom(geoms[i]);
                  }
                };
                _proto._initCoord = function _initCoord() {
                  var plot = this.get("plotRange");
                  var coordCfg = mix$1({
                    type: "cartesian"
                  }, this.get("coordCfg"), {
                    plot
                  });
                  var type = coordCfg.type;
                  var C = Base$1[upperFirst(type)];
                  var coord = new C(coordCfg);
                  this.set("coord", coord);
                };
                _proto._initLayout = function _initLayout() {
                  var padding = this.get("_padding");
                  if (!padding) {
                    padding = this.get("margin") || this.get("padding");
                    padding = parsePadding(padding);
                  }
                  var top = padding[0] === "auto" ? 0 : padding[0];
                  var right = padding[1] === "auto" ? 0 : padding[1];
                  var bottom = padding[2] === "auto" ? 0 : padding[2];
                  var left = padding[3] === "auto" ? 0 : padding[3];
                  var width = this.get("width");
                  var height = this.get("height");
                  var start2 = {
                    x: left,
                    y: top
                  };
                  var end2 = {
                    x: width - right,
                    y: height - bottom
                  };
                  var plot = this.get("plot");
                  if (plot) {
                    plot.reset(start2, end2);
                    return;
                  }
                  var newPlot = new Plot({
                    start: start2,
                    end: end2
                  });
                  this.set("plotRange", newPlot);
                  this.set("plot", newPlot);
                };
                _proto._initCanvas = function _initCanvas() {
                  var self = this;
                  try {
                    var canvas = createCanvas({
                      renderer: self.get("renderer"),
                      el: self.get("el") || self.get("id"),
                      context: self.get("context"),
                      pixelRatio: self.get("pixelRatio"),
                      width: self.get("width"),
                      height: self.get("height"),
                      fontFamily: Global.fontFamily,
                      aria: self.get("aria"),
                      title: self.get("title"),
                      landscape: self.get("landscape")
                    });
                    self.set("canvas", canvas);
                    self.set("el", canvas.get("el"));
                    self.set("width", canvas.get("width"));
                    self.set("height", canvas.get("height"));
                  } catch (error) {
                    throw error;
                  }
                  Chart2.plugins.notify(self, "afterCanvasInit");
                };
                _proto._initLayers = function _initLayers() {
                  var canvas = this.get("canvas");
                  this.set("backPlot", canvas.addGroup());
                  this.set("middlePlot", canvas.addGroup({
                    zIndex: 10
                  }));
                  this.set("frontPlot", canvas.addGroup({
                    zIndex: 20
                  }));
                };
                _proto._initEvents = function _initEvents() {
                  var _this2 = this;
                  this.on(EVENT_AFTER_DATA_CHANGE, function() {
                    _this2._initFilteredData();
                    _this2._changeGeomsData();
                  });
                  this.on(EVENT_AFTER_SIZE_CHANGE, function() {
                    _this2._initLayout();
                    var coord = _this2.get("coord");
                    if (coord) {
                      coord.reset(_this2.get("plot"));
                    }
                  });
                };
                _proto._initScaleController = function _initScaleController() {
                  var scaleController = new ScaleController({
                    chart: this
                  });
                  this.set("colDefs", scaleController.defs);
                  this.set("scales", scaleController.scales);
                  this.set("scaleController", scaleController);
                };
                _proto._clearScaleController = function _clearScaleController() {
                  var scaleController = this.get("scaleController");
                  scaleController.clear();
                };
                _proto._init = function _init() {
                  var self = this;
                  self._initCanvas();
                  self._initLayout();
                  self._initLayers();
                  self._initEvents();
                  self._initScaleController();
                  self.set("axisController", new AxisController({
                    frontPlot: self.get("frontPlot").addGroup({
                      className: "axisContainer"
                    }),
                    backPlot: self.get("backPlot").addGroup({
                      className: "axisContainer"
                    }),
                    chart: self
                  }));
                  Chart2.plugins.notify(self, "init");
                };
                function Chart2(cfg) {
                  var _this;
                  _this = _Base.call(this, cfg) || this;
                  var self = _assertThisInitialized(_this);
                  each$1(Geom, function(geomConstructor, className) {
                    var methodName = lowerFirst(className);
                    self[methodName] = function(cfg2) {
                      var geom = new geomConstructor(cfg2);
                      self.addGeom(geom);
                      return geom;
                    };
                  });
                  self._init();
                  return _this;
                }
                _proto.init = function init2() {
                  this._initFilteredData();
                  this._initCoord();
                  Chart2.plugins.notify(this, "beforeGeomInit");
                  this._initGeoms();
                  this._syncYScales();
                  this._adjustScale();
                  this.emit(EVENT_AFTER_INIT);
                };
                _proto.source = function source(data, colDefs) {
                  this.set("data", data);
                  if (colDefs) {
                    this.scale(colDefs);
                  }
                  return this;
                };
                _proto.scale = function scale(field, cfg) {
                  var scaleController = this.get("scaleController");
                  scaleController.setFieldDef(field, cfg);
                  return this;
                };
                _proto.axis = function axis(field, cfg) {
                  var axisController = this.get("axisController");
                  if (!field) {
                    axisController.axisCfg = null;
                  } else {
                    axisController.axisCfg = axisController.axisCfg || {};
                    axisController.axisCfg[field] = cfg;
                  }
                  return this;
                };
                _proto.coord = function coord(type, cfg) {
                  var coordCfg;
                  if (isObject$1(type)) {
                    coordCfg = type;
                  } else {
                    coordCfg = cfg || {};
                    coordCfg.type = type || "cartesian";
                  }
                  this.set("coordCfg", coordCfg);
                  return this;
                };
                _proto.filter = function filter2(field, condition) {
                  var filters = this.get("filters") || {};
                  filters[field] = condition;
                  this.set("filters", filters);
                  if (this.get("rendered")) {
                    this.emit(EVENT_AFTER_DATA_CHANGE, this.get("data"));
                  }
                };
                _proto.render = function render() {
                  var rendered = this.get("rendered");
                  var canvas = this.get("canvas");
                  var geoms = this.get("geoms");
                  if (rendered) {
                    this._initGeoms();
                    this._adjustScale();
                  } else {
                    this.init();
                    this.set("rendered", true);
                  }
                  this.emit("beforerender");
                  Chart2.plugins.notify(this, "beforeGeomDraw");
                  this._renderAxis();
                  var middlePlot = this.get("middlePlot");
                  if (this.get("limitInPlot") && !middlePlot.attr("clip")) {
                    var coord = this.get("coord");
                    var clip = getClip(coord);
                    clip.set("canvas", middlePlot.get("canvas"));
                    middlePlot.attr("clip", clip);
                  }
                  this.emit("beforegeomdraw");
                  for (var i = 0, length = geoms.length; i < length; i++) {
                    var geom = geoms[i];
                    geom.paint();
                  }
                  this.emit("aftergeomdraw");
                  Chart2.plugins.notify(this, "afterGeomDraw");
                  canvas.sort();
                  this.get("frontPlot").sort();
                  Chart2.plugins.notify(this, "beforeCanvasDraw");
                  canvas.draw();
                  this.emit("afterrender");
                  return this;
                };
                _proto.clear = function clear2() {
                  Chart2.plugins.notify(this, "clear");
                  this.emit("clear");
                  this._clearInner();
                  this._removeGeoms();
                  this._clearScaleController();
                  this.set("legendItems", null);
                  this.set("filters", null);
                  this.set("isUpdate", false);
                  this.set("_padding", null);
                  this.set("rendered", false);
                  var canvas = this.get("canvas");
                  canvas.draw();
                  return this;
                };
                _proto.repaint = function repaint2() {
                  var rendered = this.get("rendered");
                  if (!rendered) {
                    return;
                  }
                  this.set("isUpdate", true);
                  this.set("legendItems", null);
                  Chart2.plugins.notify(this, "repaint");
                  this._clearInner();
                  this.emit("repaint");
                  this.render();
                };
                _proto.changeData = function changeData(data) {
                  this.emit("beforedatachange", data);
                  this.set("data", data);
                  Chart2.plugins.notify(this, "changeData");
                  this.emit(EVENT_AFTER_DATA_CHANGE, data);
                  this.set("_padding", null);
                  this.repaint();
                };
                _proto.changeSize = function changeSize(width, height) {
                  if (width) {
                    this.set("width", width);
                  } else {
                    width = this.get("width");
                  }
                  if (height) {
                    this.set("height", height);
                  } else {
                    height = this.get("height");
                  }
                  var canvas = this.get("canvas");
                  canvas.changeSize(width, height);
                  this.emit(EVENT_AFTER_SIZE_CHANGE, {
                    width,
                    height
                  });
                  this.repaint();
                  return this;
                };
                _proto.destroy = function destroy() {
                  this.clear();
                  var canvas = this.get("canvas");
                  canvas.destroy();
                  Chart2.plugins.notify(this, "afterCanvasDestroyed");
                  if (this._interactions) {
                    each$1(this._interactions, function(interaction) {
                      interaction.destroy();
                    });
                  }
                  _Base.prototype.destroy.call(this);
                };
                _proto.getPosition = function getPosition(record) {
                  var self = this;
                  var coord = self.get("coord");
                  var xScale = self.getXScale();
                  var xField = xScale.field;
                  var yScales = self.getYScales();
                  var yScale = yScales[0];
                  var yField = yScale.field;
                  for (var i = 0, len = yScales.length; i < len; i++) {
                    var scale = yScales[i];
                    var field = scale.field;
                    if (record[field]) {
                      yScale = scale;
                      yField = field;
                      break;
                    }
                  }
                  var x = xScale.scale(record[xField]);
                  var y = yScale.scale(record[yField]);
                  return coord.convertPoint({
                    x,
                    y
                  });
                };
                _proto.getRecord = function getRecord(point) {
                  var self = this;
                  var coord = self.get("coord");
                  var xScale = self.getXScale();
                  var yScale = self.getYScales()[0];
                  var invertPoint = coord.invertPoint(point);
                  var record = {};
                  record[xScale.field] = xScale.invert(invertPoint.x);
                  record[yScale.field] = yScale.invert(invertPoint.y);
                  return record;
                };
                _proto.getSnapRecords = function getSnapRecords(point) {
                  var geom = this.get("geoms")[0];
                  var data = [];
                  if (geom) {
                    data = geom.getSnapRecords(point);
                  }
                  return data;
                };
                _proto.createScale = function createScale(field) {
                  var data = this._getScaleData(field);
                  var scaleController = this.get("scaleController");
                  return scaleController.createScale(field, data);
                };
                _proto.addGeom = function addGeom(geom) {
                  var geoms = this.get("geoms");
                  geoms.push(geom);
                };
                _proto.getXScale = function getXScale() {
                  var self = this;
                  var geoms = self.get("geoms");
                  var xScale = geoms[0].getXScale();
                  return xScale;
                };
                _proto.getYScales = function getYScales() {
                  var geoms = this.get("geoms");
                  var rst = [];
                  each$1(geoms, function(geom) {
                    var yScale = geom.getYScale();
                    if (rst.indexOf(yScale) === -1) {
                      rst.push(yScale);
                    }
                  });
                  return rst;
                };
                _proto.getLegendItems = function getLegendItems() {
                  if (this.get("legendItems")) {
                    return this.get("legendItems");
                  }
                  var legendItems = {};
                  var scales = [];
                  var geoms = this.get("geoms");
                  each$1(geoms, function(geom) {
                    var colorAttr = geom.getAttr("color");
                    if (colorAttr) {
                      var scale = colorAttr.getScale("color");
                      if (scale.isCategory && !_isScaleExist(scales, scale)) {
                        scales.push(scale);
                        var field = scale.field;
                        var ticks = scale.getTicks();
                        var items = [];
                        each$1(ticks, function(tick) {
                          var text = tick.text;
                          var name = text;
                          var scaleValue = tick.value;
                          var value = scale.invert(scaleValue);
                          var color = colorAttr.mapping(value).join("") || Global.defaultColor;
                          var marker = {
                            fill: color,
                            radius: 3,
                            symbol: "circle",
                            stroke: "#fff"
                          };
                          items.push({
                            name,
                            dataValue: value,
                            checked: true,
                            marker
                          });
                        });
                        legendItems[field] = items;
                      }
                    }
                  });
                  this.set("legendItems", legendItems);
                  return legendItems;
                };
                _proto.registerPlugins = function registerPlugins(plugins) {
                  var self = this;
                  var chartPlugins = self.get("plugins") || [];
                  if (!isArray$1(chartPlugins)) {
                    chartPlugins = [chartPlugins];
                  }
                  [].concat(plugins).forEach(function(plugin) {
                    if (chartPlugins.indexOf(plugin) === -1) {
                      plugin.init && plugin.init(self);
                      chartPlugins.push(plugin);
                    }
                  });
                  Chart2.plugins._cacheId++;
                  self.set("plugins", chartPlugins);
                };
                _proto._renderAxis = function _renderAxis() {
                  var axisController = this.get("axisController");
                  var xScale = this.getXScale();
                  var yScales = this.getYScales();
                  var coord = this.get("coord");
                  Chart2.plugins.notify(this, "beforeRenderAxis");
                  axisController.createAxis(coord, xScale, yScales);
                };
                _proto._isAutoPadding = function _isAutoPadding() {
                  if (this.get("_padding")) {
                    return false;
                  }
                  var padding = this.get("padding");
                  if (isArray$1(padding)) {
                    return padding.indexOf("auto") !== -1;
                  }
                  return padding === "auto";
                };
                _proto._updateLayout = function _updateLayout(padding) {
                  var width = this.get("width");
                  var height = this.get("height");
                  var start2 = {
                    x: padding[3],
                    y: padding[0]
                  };
                  var end2 = {
                    x: width - padding[1],
                    y: height - padding[2]
                  };
                  var plot = this.get("plot");
                  var coord = this.get("coord");
                  plot.reset(start2, end2);
                  coord.reset(plot);
                };
                _proto.landscape = function landscape(_landscape) {
                  var canvas = this.get("canvas");
                  canvas.set("landscape", _landscape);
                };
                return Chart2;
              }(Base$2);
              Chart.plugins = Chart.initPlugins();
              var track = function track2() {
                return null;
              };
              Global.version;
              function splitPoints(obj) {
                var points = [];
                var x = obj.x;
                var y = obj.y;
                y = isArray$1(y) ? y : [y];
                y.forEach(function(yItem, index) {
                  var point = {
                    x: isArray$1(x) ? x[index] : x,
                    y: yItem
                  };
                  points.push(point);
                });
                return points;
              }
              function splitArray(data, yField, connectNulls) {
                if (!data.length)
                  return [];
                var arr = [];
                var tmp = [];
                var yValue;
                each$1(data, function(obj) {
                  yValue = obj._origin ? obj._origin[yField] : obj[yField];
                  if (connectNulls) {
                    if (!isNil$1(yValue)) {
                      tmp.push(obj);
                    }
                  } else {
                    if (isArray$1(yValue) && isNil$1(yValue[0]) || isNil$1(yValue)) {
                      if (tmp.length) {
                        arr.push(tmp);
                        tmp = [];
                      }
                    } else {
                      tmp.push(obj);
                    }
                  }
                });
                if (tmp.length) {
                  arr.push(tmp);
                }
                return arr;
              }
              Shape$1.registerFactory("point", {
                defaultShapeType: "circle",
                getDefaultPoints: function getDefaultPoints(pointInfo) {
                  return splitPoints(pointInfo);
                }
              });
              function getPointsCfg(cfg) {
                var style = {
                  lineWidth: 0,
                  stroke: cfg.color,
                  fill: cfg.color
                };
                if (cfg.size) {
                  style.size = cfg.size;
                }
                mix$1(style, cfg.style);
                return mix$1({}, Global.shape.point, style);
              }
              function drawShape$1(cfg, container, shape) {
                if (cfg.size === 0)
                  return;
                var pointCfg = getPointsCfg(cfg);
                var size2 = pointCfg.r || pointCfg.size;
                var x = cfg.x;
                var y = !isArray$1(cfg.y) ? [cfg.y] : cfg.y;
                if (shape === "hollowCircle") {
                  pointCfg.lineWidth = 1;
                  pointCfg.fill = null;
                }
                for (var i = 0, len = y.length; i < len; i++) {
                  if (shape === "rect") {
                    return container.addShape("Rect", {
                      className: "point",
                      attrs: mix$1({
                        x: x - size2,
                        y: y[i] - size2,
                        width: size2 * 2,
                        height: size2 * 2
                      }, pointCfg)
                    });
                  }
                  return container.addShape("Circle", {
                    className: "point",
                    attrs: mix$1({
                      x,
                      y: y[i],
                      r: size2
                    }, pointCfg)
                  });
                }
              }
              each$1(["circle", "hollowCircle", "rect"], function(shapeType) {
                Shape$1.registerShape("point", shapeType, {
                  draw: function draw(cfg, container) {
                    return drawShape$1(cfg, container, shapeType);
                  }
                });
              });
              var Point$1 = /* @__PURE__ */ function(_Geom) {
                _inheritsLoose$3(Point2, _Geom);
                function Point2() {
                  return _Geom.apply(this, arguments) || this;
                }
                var _proto = Point2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  var cfg = _Geom.prototype.getDefaultCfg.call(this);
                  cfg.type = "point";
                  cfg.shapeType = "point";
                  cfg.generatePoints = false;
                  return cfg;
                };
                _proto.draw = function draw(data, shapeFactory) {
                  var self = this;
                  var container = self.get("container");
                  each$1(data, function(obj) {
                    var shape = obj.shape;
                    var cfg = self.getDrawCfg(obj);
                    if (isArray$1(obj.y)) {
                      var hasStack = self.hasAdjust("stack");
                      each$1(obj.y, function(y, idx) {
                        cfg.y = y;
                        if (!hasStack || idx !== 0) {
                          self.drawShape(shape, obj, cfg, container, shapeFactory);
                        }
                      });
                    } else if (!isNil$1(obj.y)) {
                      self.drawShape(shape, obj, cfg, container, shapeFactory);
                    }
                  });
                };
                return Point2;
              }(Geom);
              Geom.Point = Point$1;
              Shape$1.registerFactory("line", {
                defaultShapeType: "line"
              });
              function getStyle(cfg) {
                var style = {
                  strokeStyle: cfg.color
                };
                if (cfg.size >= 0) {
                  style.lineWidth = cfg.size;
                }
                mix$1(style, cfg.style);
                return mix$1({}, Global.shape.line, style);
              }
              function drawLines(cfg, container, style, smooth) {
                var points = cfg.points;
                if (points.length && isArray$1(points[0].y)) {
                  var topPoints = [];
                  var bottomPoints = [];
                  for (var i = 0, len = points.length; i < len; i++) {
                    var point = points[i];
                    var tmp = splitPoints(point);
                    bottomPoints.push(tmp[0]);
                    topPoints.push(tmp[1]);
                  }
                  if (cfg.isInCircle) {
                    topPoints.push(topPoints[0]);
                    bottomPoints.push(bottomPoints[0]);
                  }
                  if (cfg.isStack) {
                    return container.addShape("Polyline", {
                      className: "line",
                      attrs: mix$1({
                        points: topPoints,
                        smooth
                      }, style)
                    });
                  }
                  var topShape = container.addShape("Polyline", {
                    className: "line",
                    attrs: mix$1({
                      points: topPoints,
                      smooth
                    }, style)
                  });
                  var bottomShape = container.addShape("Polyline", {
                    className: "line",
                    attrs: mix$1({
                      points: bottomPoints,
                      smooth
                    }, style)
                  });
                  return [topShape, bottomShape];
                }
                if (cfg.isInCircle) {
                  points.push(points[0]);
                }
                return container.addShape("Polyline", {
                  className: "line",
                  attrs: mix$1({
                    points,
                    smooth
                  }, style)
                });
              }
              each$1(["line", "smooth", "dash"], function(shapeType) {
                Shape$1.registerShape("line", shapeType, {
                  draw: function draw(cfg, container) {
                    var smooth = shapeType === "smooth";
                    var style = getStyle(cfg);
                    if (shapeType === "dash") {
                      style.lineDash = Global.lineDash;
                    }
                    return drawLines(cfg, container, style, smooth);
                  }
                });
              });
              var Path = /* @__PURE__ */ function(_Geom) {
                _inheritsLoose$3(Path2, _Geom);
                function Path2() {
                  return _Geom.apply(this, arguments) || this;
                }
                var _proto = Path2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  var cfg = _Geom.prototype.getDefaultCfg.call(this);
                  cfg.type = "path";
                  cfg.shapeType = "line";
                  return cfg;
                };
                _proto.getDrawCfg = function getDrawCfg(obj) {
                  var cfg = _Geom.prototype.getDrawCfg.call(this, obj);
                  cfg.isStack = this.hasAdjust("stack");
                  return cfg;
                };
                _proto.draw = function draw(data, shapeFactory) {
                  var self = this;
                  var container = self.get("container");
                  var yScale = self.getYScale();
                  var connectNulls = self.get("connectNulls");
                  var splitArrayObj = splitArray(data, yScale.field, connectNulls);
                  var cfg = this.getDrawCfg(data[0]);
                  cfg.origin = data;
                  each$1(splitArrayObj, function(subData, splitedIndex) {
                    cfg.splitedIndex = splitedIndex;
                    cfg.points = subData;
                    self.drawShape(cfg.shape, data[0], cfg, container, shapeFactory);
                  });
                };
                return Path2;
              }(Geom);
              Geom.Path = Path;
              var Line$1 = /* @__PURE__ */ function(_Path) {
                _inheritsLoose$3(Line2, _Path);
                function Line2() {
                  return _Path.apply(this, arguments) || this;
                }
                var _proto = Line2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  var cfg = _Path.prototype.getDefaultCfg.call(this);
                  cfg.type = "line";
                  cfg.sortable = true;
                  return cfg;
                };
                return Line2;
              }(Path);
              Geom.Line = Line$1;
              function equals(v1, v2) {
                return Math.abs(v1 - v2) < 1e-5;
              }
              function notEmpty(value) {
                return !isNaN(value) && !isNil$1(value);
              }
              function filterPoints(points) {
                var filteredPoints = [];
                for (var i = 0, len = points.length; i < len; i++) {
                  var point = points[i];
                  if (notEmpty(point.x) && notEmpty(point.y)) {
                    filteredPoints.push(point);
                  }
                }
                return filteredPoints;
              }
              function equalsCenter(points, center) {
                var eqls = true;
                each$1(points, function(point) {
                  if (!equals(point.x, center.x) || !equals(point.y, center.y)) {
                    eqls = false;
                    return false;
                  }
                });
                return eqls;
              }
              function drawRectShape(topPoints, bottomPoints, container, style, isSmooth) {
                var shape;
                var points = topPoints.concat(bottomPoints);
                if (isSmooth) {
                  shape = container.addShape("Custom", {
                    className: "area",
                    attrs: mix$1({
                      points
                    }, style),
                    createPath: function createPath(context) {
                      var constaint = [[0, 0], [1, 1]];
                      var points2 = filterPoints(this._attrs.attrs.points);
                      var pointsLen = points2.length;
                      var topPoints2 = points2.slice(0, pointsLen / 2);
                      var bottomPoints2 = points2.slice(pointsLen / 2, pointsLen);
                      var topSps = catmullRom2bezier(topPoints2, false, constaint);
                      context.beginPath();
                      context.moveTo(topPoints2[0].x, topPoints2[0].y);
                      for (var i = 0, n = topSps.length; i < n; i++) {
                        var sp = topSps[i];
                        context.bezierCurveTo(sp[1], sp[2], sp[3], sp[4], sp[5], sp[6]);
                      }
                      if (bottomPoints2.length) {
                        var bottomSps = catmullRom2bezier(bottomPoints2, false, constaint);
                        context.lineTo(bottomPoints2[0].x, bottomPoints2[0].y);
                        for (var _i = 0, _n = bottomSps.length; _i < _n; _i++) {
                          var _sp = bottomSps[_i];
                          context.bezierCurveTo(_sp[1], _sp[2], _sp[3], _sp[4], _sp[5], _sp[6]);
                        }
                      }
                      context.closePath();
                    },
                    calculateBox: function calculateBox() {
                      var points2 = filterPoints(this._attrs.attrs.points);
                      return getBBoxFromPoints(points2);
                    }
                  });
                } else {
                  shape = container.addShape("Polyline", {
                    className: "area",
                    attrs: mix$1({
                      points
                    }, style)
                  });
                }
                return shape;
              }
              function drawShape(cfg, container, isSmooth) {
                var self = this;
                var points = cfg.points;
                var topPoints = [];
                var bottomPoints = [];
                each$1(points, function(point) {
                  bottomPoints.push(point[0]);
                  topPoints.push(point[1]);
                });
                var style = mix$1({
                  fillStyle: cfg.color
                }, Global.shape.area, cfg.style);
                bottomPoints.reverse();
                topPoints = self.parsePoints(topPoints);
                bottomPoints = self.parsePoints(bottomPoints);
                if (cfg.isInCircle) {
                  topPoints.push(topPoints[0]);
                  bottomPoints.unshift(bottomPoints[bottomPoints.length - 1]);
                  if (equalsCenter(bottomPoints, cfg.center)) {
                    bottomPoints = [];
                  }
                }
                return drawRectShape(topPoints, bottomPoints, container, style, isSmooth);
              }
              Shape$1.registerFactory("area", {
                defaultShapeType: "area",
                getDefaultPoints: function getDefaultPoints(obj) {
                  var x = obj.x;
                  var y = obj.y;
                  var y0 = obj.y0;
                  y = isArray$1(y) ? y : [y0, y];
                  var points = [];
                  points.push({
                    x,
                    y: y[0]
                  }, {
                    x,
                    y: y[1]
                  });
                  return points;
                }
              });
              each$1(["area", "smooth"], function(shapeType) {
                Shape$1.registerShape("area", shapeType, {
                  draw: function draw(cfg, container) {
                    var smooth = shapeType === "smooth";
                    return drawShape.call(this, cfg, container, smooth);
                  }
                });
              });
              var Area = /* @__PURE__ */ function(_Geom) {
                _inheritsLoose$3(Area2, _Geom);
                function Area2() {
                  return _Geom.apply(this, arguments) || this;
                }
                var _proto = Area2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  var cfg = _Geom.prototype.getDefaultCfg.call(this);
                  cfg.type = "area";
                  cfg.shapeType = "area";
                  cfg.generatePoints = true;
                  cfg.sortable = true;
                  return cfg;
                };
                _proto.draw = function draw(data, shapeFactory) {
                  var self = this;
                  var container = self.get("container");
                  var cfg = this.getDrawCfg(data[0]);
                  var yScale = self.getYScale();
                  var connectNulls = self.get("connectNulls");
                  var splitArrayfn = splitArray(data, yScale.field, connectNulls);
                  cfg.origin = data;
                  each$1(splitArrayfn, function(subData, splitedIndex) {
                    cfg.splitedIndex = splitedIndex;
                    var points = subData.map(function(obj) {
                      return obj.points;
                    });
                    cfg.points = points;
                    self.drawShape(cfg.shape, data[0], cfg, container, shapeFactory);
                  });
                };
                return Area2;
              }(Geom);
              Geom.Area = Area;
              var SizeMixin = {
                initEvent: function initEvent() {
                  var _this = this;
                  var chart = this.get("chart");
                  if (!chart) {
                    return;
                  }
                  chart.on(EVENT_AFTER_SIZE_CHANGE, function() {
                    _this.set("_width", null);
                  });
                },
                getDefaultSize: function getDefaultSize() {
                  var defaultSize = this.get("defaultSize");
                  if (!defaultSize) {
                    var coord = this.get("coord");
                    var xScale = this.getXScale();
                    var dataArray = this.get("dataArray");
                    var values2 = uniq(xScale.values);
                    var count = values2.length;
                    var range = xScale.range;
                    var normalizeSize = 1 / count;
                    var widthRatio = 1;
                    if (coord && coord.isPolar) {
                      if (coord.transposed && count > 1) {
                        widthRatio = Global.widthRatio.multiplePie;
                      } else {
                        widthRatio = Global.widthRatio.rose;
                      }
                    } else {
                      if (xScale.isLinear) {
                        normalizeSize *= range[1] - range[0];
                      }
                      widthRatio = Global.widthRatio.column;
                    }
                    normalizeSize *= widthRatio;
                    if (this.hasAdjust("dodge")) {
                      normalizeSize = normalizeSize / dataArray.length;
                    }
                    defaultSize = normalizeSize;
                    this.set("defaultSize", defaultSize);
                  }
                  return defaultSize;
                },
                getDimWidth: function getDimWidth(dimName) {
                  var coord = this.get("coord");
                  var start2 = coord.convertPoint({
                    x: 0,
                    y: 0
                  });
                  var end2 = coord.convertPoint({
                    x: dimName === "x" ? 1 : 0,
                    y: dimName === "x" ? 0 : 1
                  });
                  var width = 0;
                  if (start2 && end2) {
                    width = Math.sqrt(Math.pow(end2.x - start2.x, 2) + Math.pow(end2.y - start2.y, 2));
                  }
                  return width;
                },
                _getWidth: function _getWidth() {
                  var width = this.get("_width");
                  if (!width) {
                    var coord = this.get("coord");
                    if (coord && coord.isPolar && !coord.transposed) {
                      width = (coord.endAngle - coord.startAngle) * coord.circleRadius;
                    } else {
                      width = this.getDimWidth("x");
                    }
                    this.set("_width", width);
                  }
                  return width;
                },
                _toNormalizedSize: function _toNormalizedSize(size2) {
                  var width = this._getWidth();
                  return size2 / width;
                },
                _toCoordSize: function _toCoordSize(normalizeSize) {
                  var width = this._getWidth();
                  return width * normalizeSize;
                },
                getNormalizedSize: function getNormalizedSize(obj) {
                  var size2 = this.getAttrValue("size", obj);
                  if (isNil$1(size2)) {
                    size2 = this.getDefaultSize();
                  } else {
                    size2 = this._toNormalizedSize(size2);
                  }
                  return size2;
                },
                getSize: function getSize(obj) {
                  var size2 = this.getAttrValue("size", obj);
                  if (isNil$1(size2)) {
                    var normalizeSize = this.getDefaultSize();
                    size2 = this._toCoordSize(normalizeSize);
                  }
                  return size2;
                }
              };
              function getRectPoints(cfg) {
                var x = cfg.x, y = cfg.y, y0 = cfg.y0, size2 = cfg.size;
                var ymin = y0;
                var ymax = y;
                if (isArray$1(y)) {
                  ymax = y[1];
                  ymin = y[0];
                }
                var xmin;
                var xmax;
                if (isArray$1(x)) {
                  xmin = x[0];
                  xmax = x[1];
                } else {
                  xmin = x - size2 / 2;
                  xmax = x + size2 / 2;
                }
                return [{
                  x: xmin,
                  y: ymin
                }, {
                  x: xmin,
                  y: ymax
                }, {
                  x: xmax,
                  y: ymax
                }, {
                  x: xmax,
                  y: ymin
                }];
              }
              function getRectRange(points) {
                var xValues = [];
                var yValues = [];
                for (var i = 0, len = points.length; i < len; i++) {
                  var point = points[i];
                  xValues.push(point.x);
                  yValues.push(point.y);
                }
                var xMin = Math.min.apply(null, xValues);
                var yMin = Math.min.apply(null, yValues);
                var xMax = Math.max.apply(null, xValues);
                var yMax = Math.max.apply(null, yValues);
                return {
                  x: xMin,
                  y: yMin,
                  width: xMax - xMin,
                  height: yMax - yMin
                };
              }
              function getMiddlePoint(a, b) {
                var x = (a.x - b.x) / 2 + b.x;
                var y = (a.y - b.y) / 2 + b.y;
                return {
                  x,
                  y
                };
              }
              Shape$1.registerFactory("interval", {
                defaultShapeType: "rect",
                getDefaultPoints: function getDefaultPoints(cfg) {
                  return getRectPoints(cfg);
                }
              });
              Shape$1.registerShape("interval", "rect", {
                draw: function draw(cfg, container) {
                  var points = this.parsePoints(cfg.points);
                  var style = mix$1({
                    fill: cfg.color
                  }, Global.shape.interval, cfg.style);
                  if (cfg.isInCircle) {
                    var newPoints = points.slice(0);
                    if (this._coord.transposed) {
                      newPoints = [points[0], points[3], points[2], points[1]];
                    }
                    var _cfg$center = cfg.center, x = _cfg$center.x, y = _cfg$center.y;
                    var v = [1, 0];
                    var v0 = [newPoints[0].x - x, newPoints[0].y - y];
                    var v1 = [newPoints[1].x - x, newPoints[1].y - y];
                    var v2 = [newPoints[2].x - x, newPoints[2].y - y];
                    var startAngle = Vector2.angleTo(v, v1);
                    var endAngle = Vector2.angleTo(v, v2);
                    var r0 = Vector2.length(v0);
                    var r = Vector2.length(v1);
                    if (startAngle >= 1.5 * Math.PI) {
                      startAngle = startAngle - 2 * Math.PI;
                    }
                    if (endAngle >= 1.5 * Math.PI) {
                      endAngle = endAngle - 2 * Math.PI;
                    }
                    return container.addShape("Sector", {
                      className: "interval",
                      attrs: mix$1({
                        x,
                        y,
                        r,
                        r0,
                        startAngle,
                        endAngle
                      }, style)
                    });
                  }
                  var rectCfg = getRectRange(points);
                  return container.addShape("rect", {
                    className: "interval",
                    attrs: mix$1(rectCfg, style)
                  });
                }
              });
              ["pyramid", "funnel"].forEach(function(shapeType) {
                Shape$1.registerShape("interval", shapeType, {
                  getPoints: function getPoints(cfg) {
                    cfg.size = cfg.size * 2;
                    return getRectPoints(cfg);
                  },
                  draw: function draw(cfg, container) {
                    var points = this.parsePoints(cfg.points);
                    var nextPoints = this.parsePoints(cfg.nextPoints);
                    var polygonPoints = null;
                    if (nextPoints) {
                      polygonPoints = [points[0], points[1], nextPoints[1], nextPoints[0]];
                    } else {
                      polygonPoints = [points[0], points[1]];
                      if (shapeType === "pyramid") {
                        polygonPoints.push(getMiddlePoint(points[2], points[3]));
                      } else {
                        polygonPoints.push(points[2], points[3]);
                      }
                    }
                    var attrs = mix$1({
                      fill: cfg.color,
                      points: polygonPoints
                    }, Global.shape.interval, cfg.style);
                    return container.addShape("polygon", {
                      className: "interval",
                      attrs
                    });
                  }
                });
              });
              var Interval = /* @__PURE__ */ function(_Geom) {
                _inheritsLoose$3(Interval2, _Geom);
                var _proto = Interval2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  var cfg = _Geom.prototype.getDefaultCfg.call(this);
                  cfg.type = "interval";
                  cfg.shapeType = "interval";
                  cfg.generatePoints = true;
                  return cfg;
                };
                function Interval2(cfg) {
                  var _this;
                  _this = _Geom.call(this, cfg) || this;
                  mix$1(_assertThisInitialized(_this), SizeMixin);
                  return _this;
                }
                _proto.init = function init2() {
                  _Geom.prototype.init.call(this);
                  this.initEvent();
                };
                _proto.createShapePointsCfg = function createShapePointsCfg(obj) {
                  var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
                  cfg.size = this.getNormalizedSize(obj);
                  return cfg;
                };
                _proto.clearInner = function clearInner2() {
                  _Geom.prototype.clearInner.call(this);
                  this.set("defaultSize", null);
                };
                return Interval2;
              }(Geom);
              Geom.Interval = Interval;
              Shape$1.registerFactory("polygon", {
                defaultShapeType: "polygon",
                getDefaultPoints: function getDefaultPoints(pointInfo) {
                  var points = [];
                  var x = pointInfo.x, y = pointInfo.y;
                  for (var i = 0, len = x.length; i < len; i++) {
                    points.push({
                      x: x[i],
                      y: y[i]
                    });
                  }
                  return points;
                }
              });
              Shape$1.registerShape("polygon", "polygon", {
                draw: function draw(cfg, container) {
                  var points = this.parsePoints(cfg.points);
                  var style = mix$1({
                    fill: cfg.color,
                    points
                  }, cfg.style);
                  return container.addShape("Polygon", {
                    className: "polygon",
                    attrs: style
                  });
                }
              });
              var Polygon = /* @__PURE__ */ function(_Geom) {
                _inheritsLoose$3(Polygon2, _Geom);
                function Polygon2() {
                  return _Geom.apply(this, arguments) || this;
                }
                var _proto = Polygon2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  var cfg = _Geom.prototype.getDefaultCfg.call(this);
                  cfg.type = "polygon";
                  cfg.shapeType = "polygon";
                  cfg.generatePoints = true;
                  return cfg;
                };
                _proto.createShapePointsCfg = function createShapePointsCfg(obj) {
                  var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
                  var self = this;
                  var x = cfg.x;
                  var y = cfg.y;
                  var temp;
                  if (!(isArray$1(x) && isArray$1(y))) {
                    var xScale = self.getXScale();
                    var yScale = self.getYScale();
                    var xCount = xScale.values ? xScale.values.length : xScale.ticks.length;
                    var yCount = yScale.values ? yScale.values.length : yScale.ticks.length;
                    var xOffset = 0.5 * 1 / xCount;
                    var yOffset = 0.5 * 1 / yCount;
                    if (xScale.isCategory && yScale.isCategory) {
                      x = [x - xOffset, x - xOffset, x + xOffset, x + xOffset];
                      y = [y - yOffset, y + yOffset, y + yOffset, y - yOffset];
                    } else if (isArray$1(x)) {
                      temp = x;
                      x = [temp[0], temp[0], temp[1], temp[1]];
                      y = [y - yOffset / 2, y + yOffset / 2, y + yOffset / 2, y - yOffset / 2];
                    } else if (isArray$1(y)) {
                      temp = y;
                      y = [temp[0], temp[1], temp[1], temp[0]];
                      x = [x - xOffset / 2, x - xOffset / 2, x + xOffset / 2, x + xOffset / 2];
                    }
                    cfg.x = x;
                    cfg.y = y;
                  }
                  return cfg;
                };
                return Polygon2;
              }(Geom);
              Geom.Polygon = Polygon;
              function _sortValue(value) {
                var sorted = value.sort(function(a, b) {
                  return a < b ? 1 : -1;
                });
                var length = sorted.length;
                if (length < 4) {
                  var min = sorted[length - 1];
                  for (var i = 0; i < 4 - length; i++) {
                    sorted.push(min);
                  }
                }
                return sorted;
              }
              function getCandlePoints(x, y, width) {
                var yValues = _sortValue(y);
                var points = [{
                  x,
                  y: yValues[0]
                }, {
                  x,
                  y: yValues[1]
                }, {
                  x: x - width / 2,
                  y: yValues[2]
                }, {
                  x: x - width / 2,
                  y: yValues[1]
                }, {
                  x: x + width / 2,
                  y: yValues[1]
                }, {
                  x: x + width / 2,
                  y: yValues[2]
                }, {
                  x,
                  y: yValues[2]
                }, {
                  x,
                  y: yValues[3]
                }];
                return points;
              }
              Shape$1.registerFactory("schema", {});
              Shape$1.registerShape("schema", "candle", {
                getPoints: function getPoints(cfg) {
                  return getCandlePoints(cfg.x, cfg.y, cfg.size);
                },
                draw: function draw(cfg, container) {
                  var points = this.parsePoints(cfg.points);
                  var style = mix$1({
                    stroke: cfg.color,
                    fill: cfg.color,
                    lineWidth: 1
                  }, cfg.style);
                  return container.addShape("Custom", {
                    className: "schema",
                    attrs: style,
                    createPath: function createPath(ctx2) {
                      ctx2.beginPath();
                      ctx2.moveTo(points[0].x, points[0].y);
                      ctx2.lineTo(points[1].x, points[1].y);
                      ctx2.moveTo(points[2].x, points[2].y);
                      for (var i = 3; i < 6; i++) {
                        ctx2.lineTo(points[i].x, points[i].y);
                      }
                      ctx2.closePath();
                      ctx2.moveTo(points[6].x, points[6].y);
                      ctx2.lineTo(points[7].x, points[7].y);
                    }
                  });
                }
              });
              var Schema = /* @__PURE__ */ function(_Geom) {
                _inheritsLoose$3(Schema2, _Geom);
                var _proto = Schema2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  var cfg = _Geom.prototype.getDefaultCfg.call(this);
                  cfg.type = "schema";
                  cfg.shapeType = "schema";
                  cfg.generatePoints = true;
                  return cfg;
                };
                function Schema2(cfg) {
                  var _this;
                  _this = _Geom.call(this, cfg) || this;
                  mix$1(_assertThisInitialized(_this), SizeMixin);
                  return _this;
                }
                _proto.init = function init2() {
                  _Geom.prototype.init.call(this);
                  this.initEvent();
                };
                _proto.createShapePointsCfg = function createShapePointsCfg(obj) {
                  var cfg = _Geom.prototype.createShapePointsCfg.call(this, obj);
                  cfg.size = this.getNormalizedSize(obj);
                  return cfg;
                };
                _proto.clearInner = function clearInner2() {
                  _Geom.prototype.clearInner.call(this);
                  this.set("defaultSize", null);
                };
                return Schema2;
              }(Geom);
              Geom.Schema = Schema;
              var toString = {}.toString;
              var isType_1 = function isType(value, type) {
                return toString.call(value) === "[object " + type + "]";
              };
              var isArray = Array.isArray ? Array.isArray : function(value) {
                return isType_1(value, "Array");
              };
              var isArray_1 = isArray;
              var isNil_1 = function isNil(value) {
                return value === null || value === void 0;
              };
              function _inheritsLoose$2(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                subClass.__proto__ = superClass;
              }
              var Stack = /* @__PURE__ */ function(_Adjust) {
                _inheritsLoose$2(Stack2, _Adjust);
                function Stack2() {
                  return _Adjust.apply(this, arguments) || this;
                }
                var _proto = Stack2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.xField = null;
                  this.yField = null;
                };
                _proto.processAdjust = function processAdjust(dataArray) {
                  this.processStack(dataArray);
                };
                _proto.processStack = function processStack(dataArray) {
                  var self = this;
                  var xField = self.xField;
                  var yField = self.yField;
                  var count = dataArray.length;
                  var stackCache = {
                    positive: {},
                    negative: {}
                  };
                  if (self.reverseOrder) {
                    dataArray = dataArray.slice(0).reverse();
                  }
                  for (var i = 0; i < count; i++) {
                    var data = dataArray[i];
                    for (var j = 0, len = data.length; j < len; j++) {
                      var item = data[j];
                      var x = item[xField] || 0;
                      var y = item[yField];
                      var xkey = x.toString();
                      y = isArray_1(y) ? y[1] : y;
                      if (!isNil_1(y)) {
                        var direction = y >= 0 ? "positive" : "negative";
                        if (!stackCache[direction][xkey]) {
                          stackCache[direction][xkey] = 0;
                        }
                        item[yField] = [stackCache[direction][xkey], y + stackCache[direction][xkey]];
                        stackCache[direction][xkey] += y;
                      }
                    }
                  }
                };
                return Stack2;
              }(base);
              base.Stack = Stack;
              var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function(obj) {
                return _typeof2(obj);
              } : function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
              };
              var isObject_1 = function isObject(value) {
                var type = typeof value === "undefined" ? "undefined" : _typeof(value);
                return value !== null && type === "object" || type === "function";
              };
              var each_1 = function each(elements, func) {
                if (!elements) {
                  return;
                }
                var rst = void 0;
                if (isArray_1(elements)) {
                  for (var i = 0, len = elements.length; i < len; i++) {
                    rst = func(elements[i], i);
                    if (rst === false) {
                      break;
                    }
                  }
                } else if (isObject_1(elements)) {
                  for (var k in elements) {
                    if (elements.hasOwnProperty(k)) {
                      rst = func(elements[k], k);
                      if (rst === false) {
                        break;
                      }
                    }
                  }
                }
              };
              function _inheritsLoose$1(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                subClass.__proto__ = superClass;
              }
              var Dodge = /* @__PURE__ */ function(_Adjust) {
                _inheritsLoose$1(Dodge2, _Adjust);
                function Dodge2() {
                  return _Adjust.apply(this, arguments) || this;
                }
                var _proto = Dodge2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.marginRatio = 1 / 2;
                  this.dodgeRatio = 1 / 2;
                  this.adjustNames = ["x", "y"];
                };
                _proto.getDodgeOffset = function getDodgeOffset(range, index, count) {
                  var self = this;
                  var pre = range.pre;
                  var next = range.next;
                  var tickLength = next - pre;
                  var width = tickLength * self.dodgeRatio / count;
                  var margin = self.marginRatio * width;
                  var offset = 1 / 2 * (tickLength - count * width - (count - 1) * margin) + ((index + 1) * width + index * margin) - 1 / 2 * width - 1 / 2 * tickLength;
                  return (pre + next) / 2 + offset;
                };
                _proto.processAdjust = function processAdjust(dataArray) {
                  var self = this;
                  var count = dataArray.length;
                  var xField = self.xField;
                  each_1(dataArray, function(data, index) {
                    for (var i = 0, len = data.length; i < len; i++) {
                      var obj = data[i];
                      var value = obj[xField];
                      var range = {
                        pre: len === 1 ? value - 1 : value - 0.5,
                        next: len === 1 ? value + 1 : value + 0.5
                      };
                      var dodgeValue = self.getDodgeOffset(range, index, count);
                      obj[xField] = dodgeValue;
                    }
                  });
                };
                return Dodge2;
              }(base);
              base.Dodge = Dodge;
              var isFunction_1 = function isFunction(value) {
                return isType_1(value, "Function");
              };
              var maxBy_1 = function maxBy(arr, fn) {
                if (!isArray_1(arr)) {
                  return void 0;
                }
                var max = arr[0];
                var maxData = void 0;
                if (isFunction_1(fn)) {
                  maxData = fn(arr[0]);
                } else {
                  maxData = arr[0][fn];
                }
                var data = void 0;
                each_1(arr, function(val) {
                  if (isFunction_1(fn)) {
                    data = fn(val);
                  } else {
                    data = val[fn];
                  }
                  if (data > maxData) {
                    max = val;
                    maxData = data;
                  }
                });
                return max;
              };
              function _inheritsLoose(subClass, superClass) {
                subClass.prototype = Object.create(superClass.prototype);
                subClass.prototype.constructor = subClass;
                subClass.__proto__ = superClass;
              }
              var ArrayUtil = {
                merge: function merge(dataArray) {
                  var rst = [];
                  for (var i = 0; i < dataArray.length; i++) {
                    rst = rst.concat(dataArray[i]);
                  }
                  return rst;
                }
              };
              var Symmetric = /* @__PURE__ */ function(_Adjust) {
                _inheritsLoose(Symmetric2, _Adjust);
                function Symmetric2() {
                  return _Adjust.apply(this, arguments) || this;
                }
                var _proto = Symmetric2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.xField = null;
                  this.yField = null;
                  this.cacheMax = null;
                  this.adjustNames = ["y"];
                  this.groupFields = null;
                };
                _proto._getMax = function _getMax(dim) {
                  var self = this;
                  var mergeData = self.mergeData;
                  var maxRecord = maxBy_1(mergeData, function(obj) {
                    var value = obj[dim];
                    if (isArray_1(value)) {
                      return Math.max.apply(null, value);
                    }
                    return value;
                  });
                  var maxValue = maxRecord[dim];
                  var max = isArray_1(maxValue) ? Math.max.apply(null, maxValue) : maxValue;
                  return max;
                };
                _proto._getXValuesMax = function _getXValuesMax() {
                  var self = this;
                  var yField = self.yField;
                  var xField = self.xField;
                  var cache2 = {};
                  var mergeData = self.mergeData;
                  each_1(mergeData, function(obj) {
                    var xValue = obj[xField];
                    var yValue = obj[yField];
                    var max = isArray_1(yValue) ? Math.max.apply(null, yValue) : yValue;
                    cache2[xValue] = cache2[xValue] || 0;
                    if (cache2[xValue] < max) {
                      cache2[xValue] = max;
                    }
                  });
                  return cache2;
                };
                _proto.processAdjust = function processAdjust(dataArray) {
                  var self = this;
                  var mergeData = ArrayUtil.merge(dataArray);
                  self.mergeData = mergeData;
                  self._processSymmetric(dataArray);
                  self.mergeData = null;
                };
                _proto._processSymmetric = function _processSymmetric(dataArray) {
                  var self = this;
                  var xField = self.xField;
                  var yField = self.yField;
                  var max = self._getMax(yField);
                  var first = dataArray[0][0];
                  var cache2;
                  if (first && isArray_1(first[yField])) {
                    cache2 = self._getXValuesMax();
                  }
                  each_1(dataArray, function(data) {
                    each_1(data, function(obj) {
                      var value = obj[yField];
                      var offset;
                      if (isArray_1(value)) {
                        var xValue = obj[xField];
                        var valueMax = cache2[xValue];
                        offset = (max - valueMax) / 2;
                        var tmp = [];
                        each_1(value, function(subVal) {
                          tmp.push(offset + subVal);
                        });
                        obj[yField] = tmp;
                      } else {
                        offset = (max - value) / 2;
                        obj[yField] = [offset, value + offset];
                      }
                    });
                  });
                };
                return Symmetric2;
              }(base);
              base.Symmetric = Symmetric;
              var Polar = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Polar2, _Base);
                function Polar2() {
                  return _Base.apply(this, arguments) || this;
                }
                var _proto = Polar2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "polar";
                  this.startAngle = -Math.PI / 2;
                  this.endAngle = Math.PI * 3 / 2;
                  this.inner = 0;
                  this.innerRadius = 0;
                  this.isPolar = true;
                  this.transposed = false;
                  this.center = null;
                  this.radius = null;
                };
                _proto.init = function init2(start2, end2) {
                  _Base.prototype.init.call(this, start2, end2);
                  var self = this;
                  var inner = self.inner || self.innerRadius;
                  var width = Math.abs(end2.x - start2.x);
                  var height = Math.abs(end2.y - start2.y);
                  var maxRadius;
                  var center;
                  if (self.startAngle === -Math.PI && self.endAngle === 0) {
                    maxRadius = Math.min(width / 2, height);
                    center = {
                      x: (start2.x + end2.x) / 2,
                      y: start2.y
                    };
                  } else {
                    maxRadius = Math.min(width, height) / 2;
                    center = {
                      x: (start2.x + end2.x) / 2,
                      y: (start2.y + end2.y) / 2
                    };
                  }
                  var radius = self.radius;
                  if (radius > 0 && radius <= 1) {
                    maxRadius = maxRadius * radius;
                  }
                  this.x = {
                    start: self.startAngle,
                    end: self.endAngle
                  };
                  this.y = {
                    start: maxRadius * inner,
                    end: maxRadius
                  };
                  this.center = center;
                  this.circleRadius = maxRadius;
                };
                _proto._convertPoint = function _convertPoint(point) {
                  var self = this;
                  var center = self.center;
                  var transposed = self.transposed;
                  var xDim = transposed ? "y" : "x";
                  var yDim = transposed ? "x" : "y";
                  var x = self.x;
                  var y = self.y;
                  var angle = x.start + (x.end - x.start) * point[xDim];
                  var radius = y.start + (y.end - y.start) * point[yDim];
                  return {
                    x: center.x + Math.cos(angle) * radius,
                    y: center.y + Math.sin(angle) * radius
                  };
                };
                _proto._invertPoint = function _invertPoint(point) {
                  var self = this;
                  var center = self.center, transposed = self.transposed, x = self.x, y = self.y;
                  var xDim = transposed ? "y" : "x";
                  var yDim = transposed ? "x" : "y";
                  var m = [1, 0, 0, 1, 0, 0];
                  Matrix.rotate(m, m, x.start);
                  var startV = [1, 0];
                  Vector2.transformMat2d(startV, startV, m);
                  startV = [startV[0], startV[1]];
                  var pointV = [point.x - center.x, point.y - center.y];
                  if (Vector2.zero(pointV)) {
                    return {
                      x: 0,
                      y: 0
                    };
                  }
                  var theta = Vector2.angleTo(startV, pointV, x.end < x.start);
                  if (Math.abs(theta - Math.PI * 2) < 1e-3) {
                    theta = 0;
                  }
                  var l = Vector2.length(pointV);
                  var percentX = theta / (x.end - x.start);
                  percentX = x.end - x.start > 0 ? percentX : -percentX;
                  var percentY = (l - y.start) / (y.end - y.start);
                  var rst = {};
                  rst[xDim] = percentX;
                  rst[yDim] = percentY;
                  return rst;
                };
                return Polar2;
              }(Base$1);
              Base$1.Polar = Polar;
              var Circle = /* @__PURE__ */ function(_Abstract) {
                _inheritsLoose$3(Circle2, _Abstract);
                function Circle2() {
                  return _Abstract.apply(this, arguments) || this;
                }
                var _proto = Circle2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  _Abstract.prototype._initDefaultCfg.call(this);
                  this.startAngle = -Math.PI / 2;
                  this.endAngle = Math.PI * 3 / 2;
                  this.radius = null;
                  this.center = null;
                };
                _proto.getOffsetPoint = function getOffsetPoint(value) {
                  var startAngle = this.startAngle, endAngle = this.endAngle;
                  var angle = startAngle + (endAngle - startAngle) * value;
                  return this._getCirclePoint(angle);
                };
                _proto._getCirclePoint = function _getCirclePoint(angle, radius) {
                  var self = this;
                  var center = self.center;
                  radius = radius || self.radius;
                  return {
                    x: center.x + Math.cos(angle) * radius,
                    y: center.y + Math.sin(angle) * radius
                  };
                };
                _proto.getTextAlignInfo = function getTextAlignInfo(point, offset) {
                  var self = this;
                  var offsetVector = self.getOffsetVector(point, offset);
                  var align;
                  var baseLine = "middle";
                  if (offsetVector[0] > 0) {
                    align = "left";
                  } else if (offsetVector[0] < 0) {
                    align = "right";
                  } else {
                    align = "center";
                    if (offsetVector[1] > 0) {
                      baseLine = "top";
                    } else if (offsetVector[1] < 0) {
                      baseLine = "bottom";
                    }
                  }
                  return {
                    textAlign: align,
                    textBaseline: baseLine
                  };
                };
                _proto.getAxisVector = function getAxisVector(point) {
                  var center = this.center;
                  var factor = this.offsetFactor;
                  return [(point.y - center.y) * factor, (point.x - center.x) * -1 * factor];
                };
                _proto.drawLine = function drawLine(lineCfg) {
                  var center = this.center, radius = this.radius, startAngle = this.startAngle, endAngle = this.endAngle;
                  var container = this.getContainer(lineCfg.top);
                  container.addShape("arc", {
                    className: "axis-line",
                    attrs: mix$1({
                      x: center.x,
                      y: center.y,
                      r: radius,
                      startAngle,
                      endAngle
                    }, lineCfg)
                  });
                };
                return Circle2;
              }(Abastract);
              Abastract.Circle = Circle;
              var KEYWORDS_PERCENT = {
                min: 0,
                median: 0.5,
                max: 1
              };
              var GuideBase = /* @__PURE__ */ function() {
                var _proto = GuideBase2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                };
                function GuideBase2(cfg) {
                  this._initDefaultCfg();
                  deepMix(this, cfg);
                }
                _proto._getNormalizedValue = function _getNormalizedValue(val, scale) {
                  var rst;
                  if (isNil$1(KEYWORDS_PERCENT[val])) {
                    rst = scale.scale(val);
                  } else {
                    rst = KEYWORDS_PERCENT[val];
                  }
                  return rst;
                };
                _proto.parsePercentPoint = function parsePercentPoint(coord, position) {
                  var xPercent = parseFloat(position[0]) / 100;
                  var yPercent = parseFloat(position[1]) / 100;
                  var start2 = coord.start;
                  var end2 = coord.end;
                  var width = Math.abs(start2.x - end2.x);
                  var height = Math.abs(start2.y - end2.y);
                  var x = width * xPercent + Math.min(start2.x, end2.x);
                  var y = height * yPercent + Math.min(start2.y, end2.y);
                  return {
                    x,
                    y
                  };
                };
                _proto.parsePoint = function parsePoint(coord, position) {
                  var self = this;
                  var xScale = self.xScale;
                  var yScales = self.yScales;
                  if (isFunction$1(position)) {
                    position = position(xScale, yScales);
                  }
                  if (isString(position[0]) && position[0].indexOf("%") !== -1 && !isNaN(position[0].slice(0, -1))) {
                    return this.parsePercentPoint(coord, position);
                  }
                  var x = self._getNormalizedValue(position[0], xScale);
                  var y = self._getNormalizedValue(position[1], yScales[0]);
                  var point = coord.convertPoint({
                    x,
                    y
                  });
                  if (self.limitInPlot) {
                    if (x >= 0 && x <= 1 && y >= 0 && y <= 1) {
                      return point;
                    }
                    return null;
                  }
                  return point;
                };
                _proto.render = function render() {
                };
                _proto.repaint = function repaint2() {
                  this.remove();
                  var coord = this.coord, container = this.container, canvas = this.canvas;
                  if (container && !container.isDestroyed()) {
                    this.render(coord, container);
                    canvas.draw();
                  }
                };
                _proto.remove = function remove2() {
                  var element = this.element;
                  element && element.remove(true);
                };
                _proto.changeVisible = function changeVisible(visible) {
                  var self = this;
                  self.visible = visible;
                  var element = self.element;
                  if (!element)
                    return;
                  if (element.set) {
                    element.set("visible", visible);
                  } else {
                    element.style.display = visible ? "" : "none";
                  }
                };
                return GuideBase2;
              }();
              var Arc = /* @__PURE__ */ function(_GuideBase) {
                _inheritsLoose$3(Arc2, _GuideBase);
                function Arc2() {
                  return _GuideBase.apply(this, arguments) || this;
                }
                var _proto = Arc2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "arc";
                  this.start = [];
                  this.end = [];
                  this.style = {
                    stroke: "#999",
                    lineWidth: 1
                  };
                };
                _proto.render = function render(coord, container) {
                  var self = this;
                  var start2 = self.parsePoint(coord, self.start);
                  var end2 = self.parsePoint(coord, self.end);
                  if (!start2 || !end2) {
                    return;
                  }
                  var coordCenter = coord.center;
                  var radius = Math.sqrt((start2.x - coordCenter.x) * (start2.x - coordCenter.x) + (start2.y - coordCenter.y) * (start2.y - coordCenter.y));
                  var startAngle = Math.atan2(start2.y - coordCenter.y, start2.x - coordCenter.x);
                  var endAngle = Math.atan2(end2.y - coordCenter.y, end2.x - coordCenter.x);
                  var shape = container.addShape("arc", {
                    className: "guide-arc",
                    attrs: mix$1({
                      x: coordCenter.x,
                      y: coordCenter.y,
                      r: radius,
                      startAngle,
                      endAngle
                    }, self.style)
                  });
                  self.element = shape;
                  return shape;
                };
                return Arc2;
              }(GuideBase);
              GuideBase.Arc = Arc;
              function getOffsetFromAlign(alignX, alignY, width, height) {
                var result = [];
                if (alignX === "left" && alignY === "top") {
                  result[0] = 0;
                  result[1] = 0;
                } else if (alignX === "right" && alignY === "top") {
                  result[0] = -width;
                  result[1] = 0;
                } else if (alignX === "left" && alignY === "bottom") {
                  result[0] = 0;
                  result[1] = Math.floor(-height);
                } else if (alignX === "right" && alignY === "bottom") {
                  result[0] = Math.floor(-width);
                  result[1] = Math.floor(-height);
                } else if (alignX === "right" && alignY === "middle") {
                  result[0] = Math.floor(-width);
                  result[1] = Math.floor(-height / 2);
                } else if (alignX === "left" && alignY === "middle") {
                  result[0] = 0;
                  result[1] = Math.floor(-height / 2);
                } else if (alignX === "center" && alignY === "bottom") {
                  result[0] = Math.floor(-width / 2);
                  result[1] = Math.floor(-height);
                } else if (alignX === "center" && alignY === "top") {
                  result[0] = Math.floor(-width / 2);
                  result[1] = 0;
                } else {
                  result[0] = Math.floor(-width / 2);
                  result[1] = Math.floor(-height / 2);
                }
                return result;
              }
              function modifyCSS(DOM, CSS) {
                for (var key in CSS) {
                  if (CSS.hasOwnProperty(key)) {
                    DOM.style[key] = CSS[key];
                  }
                }
                return DOM;
              }
              function createDom(str) {
                var container = document.createElement("div");
                str = str.replace(/(^\s*)|(\s*$)/g, "");
                container.innerHTML = "" + str;
                return container.childNodes[0];
              }
              var Html = /* @__PURE__ */ function(_GuideBase) {
                _inheritsLoose$3(Html2, _GuideBase);
                function Html2() {
                  return _GuideBase.apply(this, arguments) || this;
                }
                var _proto = Html2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "html";
                  this.position = null;
                  this.alignX = "center";
                  this.alignY = "middle";
                  this.offsetX = null;
                  this.offsetY = null;
                  this.html = null;
                };
                _proto.render = function render(coord, container) {
                  var self = this;
                  var position = self.parsePoint(coord, self.position);
                  if (!position) {
                    return;
                  }
                  var myNode = createDom(self.html);
                  myNode = modifyCSS(myNode, {
                    position: "absolute",
                    top: Math.floor(position.y) + "px",
                    left: Math.floor(position.x) + "px",
                    visibility: "hidden"
                  });
                  var canvasDom = container.get("canvas").get("el");
                  var parentNode = canvasDom.parentNode;
                  parentNode = modifyCSS(parentNode, {
                    position: "relative"
                  });
                  var wrapperNode = createDom('<div class="guideWapper" style="position: absolute;top: 0; left: 0;"></div>');
                  parentNode.appendChild(wrapperNode);
                  wrapperNode.appendChild(myNode);
                  var canvasOffsetTop = canvasDom.offsetTop;
                  var canvasOffsetLeft = canvasDom.offsetLeft;
                  var alignX = self.alignX, alignY = self.alignY, offsetX = self.offsetX, offsetY = self.offsetY;
                  var width = getWidth(myNode);
                  var height = getHeight(myNode);
                  var newOffset = getOffsetFromAlign(alignX, alignY, width, height);
                  position.x = position.x + newOffset[0] + canvasOffsetLeft;
                  position.y = position.y + newOffset[1] + canvasOffsetTop;
                  if (offsetX) {
                    position.x += offsetX;
                  }
                  if (offsetY) {
                    position.y += offsetY;
                  }
                  modifyCSS(myNode, {
                    top: Math.floor(position.y) + "px",
                    left: Math.floor(position.x) + "px",
                    visibility: "visible"
                  });
                  self.element = wrapperNode;
                };
                _proto.remove = function remove2() {
                  var element = this.element;
                  element && element.parentNode && element.parentNode.removeChild(element);
                };
                return Html2;
              }(GuideBase);
              GuideBase.Html = Html;
              var Line = /* @__PURE__ */ function(_GuideBase) {
                _inheritsLoose$3(Line2, _GuideBase);
                function Line2() {
                  return _GuideBase.apply(this, arguments) || this;
                }
                var _proto = Line2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "line";
                  this.start = [];
                  this.end = [];
                  this.style = {
                    stroke: "#000",
                    lineWidth: 1
                  };
                };
                _proto.render = function render(coord, container) {
                  var points = [];
                  points[0] = this.parsePoint(coord, this.start);
                  points[1] = this.parsePoint(coord, this.end);
                  if (!points[0] || !points[1]) {
                    return;
                  }
                  var shape = container.addShape("Line", {
                    className: "guide-line",
                    attrs: mix$1({
                      x1: points[0].x,
                      y1: points[0].y,
                      x2: points[1].x,
                      y2: points[1].y
                    }, this.style)
                  });
                  this.element = shape;
                  return shape;
                };
                return Line2;
              }(GuideBase);
              GuideBase.Line = Line;
              var Rect = /* @__PURE__ */ function(_GuideBase) {
                _inheritsLoose$3(Rect2, _GuideBase);
                function Rect2() {
                  return _GuideBase.apply(this, arguments) || this;
                }
                var _proto = Rect2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "rect";
                  this.start = [];
                  this.end = [];
                  this.style = {
                    fill: "#CCD7EB",
                    opacity: 0.4
                  };
                };
                _proto.render = function render(coord, container) {
                  var start2 = this.parsePoint(coord, this.start);
                  var end2 = this.parsePoint(coord, this.end);
                  if (!start2 || !end2) {
                    return;
                  }
                  var shape = container.addShape("rect", {
                    className: "guide-rect",
                    attrs: mix$1({
                      x: Math.min(start2.x, end2.x),
                      y: Math.min(start2.y, end2.y),
                      width: Math.abs(end2.x - start2.x),
                      height: Math.abs(start2.y - end2.y)
                    }, this.style)
                  });
                  this.element = shape;
                  return shape;
                };
                return Rect2;
              }(GuideBase);
              GuideBase.Rect = Rect;
              var Text = /* @__PURE__ */ function(_GuideBase) {
                _inheritsLoose$3(Text2, _GuideBase);
                function Text2() {
                  return _GuideBase.apply(this, arguments) || this;
                }
                var _proto = Text2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "text";
                  this.position = null;
                  this.content = null;
                  this.style = {
                    fill: "#000"
                  };
                  this.offsetX = 0;
                  this.offsetY = 0;
                };
                _proto.render = function render(coord, container) {
                  var position = this.position;
                  var point = this.parsePoint(coord, position);
                  if (!point) {
                    return;
                  }
                  var content = this.content, style = this.style, offsetX = this.offsetX, offsetY = this.offsetY;
                  if (offsetX) {
                    point.x += offsetX;
                  }
                  if (offsetY) {
                    point.y += offsetY;
                  }
                  var shape = container.addShape("text", {
                    className: "guide-text",
                    attrs: mix$1({
                      x: point.x,
                      y: point.y,
                      text: content
                    }, style)
                  });
                  this.element = shape;
                  return shape;
                };
                return Text2;
              }(GuideBase);
              GuideBase.Text = Text;
              var Tag = /* @__PURE__ */ function(_GuideBase) {
                _inheritsLoose$3(Tag2, _GuideBase);
                function Tag2() {
                  return _GuideBase.apply(this, arguments) || this;
                }
                var _proto = Tag2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "tag";
                  this.position = null;
                  this.content = null;
                  this.direct = "tl";
                  this.autoAdjust = true;
                  this.offsetX = 0;
                  this.offsetY = 0;
                  this.side = 4;
                  this.background = {
                    padding: 5,
                    radius: 2,
                    fill: "#1890FF"
                  };
                  this.textStyle = {
                    fontSize: 12,
                    fill: "#fff",
                    textAlign: "center",
                    textBaseline: "middle"
                  };
                  this.withPoint = true;
                  this.pointStyle = {
                    fill: "#1890FF",
                    r: 3,
                    lineWidth: 1,
                    stroke: "#fff"
                  };
                };
                _proto._getDirect = function _getDirect(container, point, tagWidth, tagHeight) {
                  var direct = this.direct;
                  var side = this.side;
                  var canvas = container.get("canvas");
                  var clientWidth = canvas.get("width");
                  var clientHeight = canvas.get("height");
                  var x = point.x, y = point.y;
                  var vertical = direct[0];
                  var horizontal = direct[1];
                  if (vertical === "t" && y - side - tagHeight < 0) {
                    vertical = "b";
                  } else if (vertical === "b" && y + side + tagHeight > clientHeight) {
                    vertical = "t";
                  }
                  var diff2 = vertical === "c" ? side : 0;
                  if (horizontal === "l" && x - diff2 - tagWidth < 0) {
                    horizontal = "r";
                  } else if (horizontal === "r" && x + diff2 + tagWidth > clientWidth) {
                    horizontal = "l";
                  } else if (horizontal === "c") {
                    if (tagWidth / 2 + x + diff2 > clientWidth) {
                      horizontal = "l";
                    } else if (x - tagWidth / 2 - diff2 < 0) {
                      horizontal = "r";
                    }
                  }
                  direct = vertical + horizontal;
                  return direct;
                };
                _proto.render = function render(coord, container) {
                  var position = this.parsePoint(coord, this.position);
                  if (!position) {
                    return;
                  }
                  if (isNaN(position.x) || isNaN(position.y)) {
                    return;
                  }
                  var content = this.content, background = this.background, textStyle = this.textStyle;
                  var shapes = [];
                  var wrapperContainer = container.addGroup({
                    className: "guide-tag"
                  });
                  if (this.withPoint) {
                    var pointShape = wrapperContainer.addShape("Circle", {
                      className: "guide-tag-point",
                      attrs: mix$1({
                        x: position.x,
                        y: position.y
                      }, this.pointStyle)
                    });
                    shapes.push(pointShape);
                  }
                  var tagContainer = wrapperContainer.addGroup();
                  var tagText = tagContainer.addShape("text", {
                    className: "guide-tag-text",
                    zIndex: 1,
                    attrs: mix$1({
                      x: 0,
                      y: 0,
                      text: content
                    }, textStyle)
                  });
                  shapes.push(tagText);
                  var textBBox = tagText.getBBox();
                  var padding = parsePadding(background.padding);
                  var tagWidth = textBBox.width + padding[1] + padding[3];
                  var tagHeight = textBBox.height + padding[0] + padding[2];
                  var yMin = textBBox.minY - padding[0];
                  var xMin = textBBox.minX - padding[3];
                  var tagBg = tagContainer.addShape("rect", {
                    className: "guide-tag-bg",
                    zIndex: -1,
                    attrs: mix$1({
                      x: xMin,
                      y: yMin,
                      width: tagWidth,
                      height: tagHeight
                    }, background)
                  });
                  shapes.push(tagBg);
                  var direct = this.autoAdjust ? this._getDirect(container, position, tagWidth, tagHeight) : this.direct;
                  var side = this.side;
                  var x = position.x + this.offsetX;
                  var y = position.y + this.offsetY;
                  var arrowPoints;
                  var radius = parsePadding(background.radius);
                  if (direct === "tl") {
                    arrowPoints = [
                      {
                        x: tagWidth + xMin - side - 1,
                        y: tagHeight + yMin - 1
                      },
                      {
                        x: tagWidth + xMin,
                        y: tagHeight + yMin - 1
                      },
                      {
                        x: tagWidth + xMin,
                        y: tagHeight + side + yMin
                      }
                    ];
                    radius[2] = 0;
                    x = x - tagWidth;
                    y = y - side - tagHeight;
                  } else if (direct === "cl") {
                    arrowPoints = [{
                      x: tagWidth + xMin - 1,
                      y: (tagHeight - side) / 2 + yMin - 1
                    }, {
                      x: tagWidth + xMin - 1,
                      y: (tagHeight + side) / 2 + yMin + 1
                    }, {
                      x: tagWidth + side + xMin,
                      y: tagHeight / 2 + yMin
                    }];
                    x = x - tagWidth - side;
                    y = y - tagHeight / 2;
                  } else if (direct === "bl") {
                    arrowPoints = [{
                      x: tagWidth + xMin,
                      y: -side + yMin
                    }, {
                      x: tagWidth + xMin - side - 1,
                      y: yMin + 1
                    }, {
                      x: tagWidth + xMin,
                      y: yMin + 1
                    }];
                    radius[1] = 0;
                    x = x - tagWidth;
                    y = y + side;
                  } else if (direct === "bc") {
                    arrowPoints = [{
                      x: tagWidth / 2 + xMin,
                      y: -side + yMin
                    }, {
                      x: (tagWidth - side) / 2 + xMin - 1,
                      y: yMin + 1
                    }, {
                      x: (tagWidth + side) / 2 + xMin + 1,
                      y: yMin + 1
                    }];
                    x = x - tagWidth / 2;
                    y = y + side;
                  } else if (direct === "br") {
                    arrowPoints = [{
                      x: xMin,
                      y: yMin - side
                    }, {
                      x: xMin,
                      y: yMin + 1
                    }, {
                      x: xMin + side + 1,
                      y: yMin + 1
                    }];
                    radius[0] = 0;
                    y = y + side;
                  } else if (direct === "cr") {
                    arrowPoints = [{
                      x: xMin - side,
                      y: tagHeight / 2 + yMin
                    }, {
                      x: xMin + 1,
                      y: (tagHeight - side) / 2 + yMin - 1
                    }, {
                      x: xMin + 1,
                      y: (tagHeight + side) / 2 + yMin + 1
                    }];
                    x = x + side;
                    y = y - tagHeight / 2;
                  } else if (direct === "tr") {
                    arrowPoints = [{
                      x: xMin,
                      y: tagHeight + side + yMin
                    }, {
                      x: xMin,
                      y: tagHeight + yMin - 1
                    }, {
                      x: side + xMin + 1,
                      y: tagHeight + yMin - 1
                    }];
                    radius[3] = 0;
                    y = y - tagHeight - side;
                  } else if (direct === "tc") {
                    arrowPoints = [{
                      x: (tagWidth - side) / 2 + xMin - 1,
                      y: tagHeight + yMin - 1
                    }, {
                      x: (tagWidth + side) / 2 + xMin + 1,
                      y: tagHeight + yMin - 1
                    }, {
                      x: tagWidth / 2 + xMin,
                      y: tagHeight + side + yMin
                    }];
                    x = x - tagWidth / 2;
                    y = y - tagHeight - side;
                  }
                  var sideShape = tagContainer.addShape("Polygon", {
                    className: "guide-tag-side",
                    zIndex: 0,
                    attrs: {
                      points: arrowPoints,
                      fill: background.fill
                    }
                  });
                  shapes.push(sideShape);
                  tagBg.attr("radius", radius);
                  tagContainer.moveTo(x - xMin, y - yMin);
                  tagContainer.sort();
                  this.element = wrapperContainer;
                  return shapes;
                };
                return Tag2;
              }(GuideBase);
              GuideBase.Tag = Tag;
              var Point = /* @__PURE__ */ function(_GuideBase) {
                _inheritsLoose$3(Point2, _GuideBase);
                function Point2() {
                  return _GuideBase.apply(this, arguments) || this;
                }
                var _proto = Point2.prototype;
                _proto._initDefaultCfg = function _initDefaultCfg() {
                  this.type = "point";
                  this.position = null;
                  this.offsetX = 0;
                  this.offsetY = 0;
                  this.style = {
                    fill: "#1890FF",
                    r: 3,
                    lineWidth: 1,
                    stroke: "#fff"
                  };
                };
                _proto.render = function render(coord, container) {
                  var position = this.parsePoint(coord, this.position);
                  if (!position)
                    return null;
                  var shape = container.addShape("Circle", {
                    className: "guide-point",
                    attrs: mix$1({
                      x: position.x + this.offsetX,
                      y: position.y + this.offsetY
                    }, this.style)
                  });
                  this.element = shape;
                  return shape;
                };
                return Point2;
              }(GuideBase);
              GuideBase.Point = Point;
              var List = /* @__PURE__ */ function() {
                var _proto = List2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {
                    showTitle: false,
                    title: null,
                    items: null,
                    titleGap: 12,
                    itemGap: 10,
                    itemMarginBottom: 12,
                    itemFormatter: null,
                    itemWidth: null,
                    wordSpace: 6,
                    x: 0,
                    y: 0,
                    layout: "horizontal",
                    joinString: ": "
                  };
                };
                function List2(cfg) {
                  deepMix(this, this.getDefaultCfg(), cfg);
                  this._init();
                  this._renderTitle();
                  this._renderItems();
                }
                _proto._init = function _init() {
                  var parent = this.parent;
                  if (!parent)
                    return;
                  var container = parent.addGroup({
                    zIndex: this.zIndex || 0
                  });
                  this.container = container;
                  var wrapper = container.addGroup();
                  this.wrapper = wrapper;
                  var itemsGroup = wrapper.addGroup({
                    className: "itemsGroup"
                  });
                  this.itemsGroup = itemsGroup;
                };
                _proto._renderTitle = function _renderTitle(title) {
                  title = title || this.title;
                  var titleShape = this.titleShape;
                  var titleHeight = 0;
                  if (this.showTitle && title) {
                    if (titleShape && !titleShape.get("destroyed")) {
                      titleShape.attr("text", title);
                    } else {
                      var wrapper = this.wrapper, titleStyle = this.titleStyle;
                      titleShape = wrapper.addShape("text", {
                        className: "title",
                        attrs: mix$1({
                          x: 0,
                          y: 0,
                          text: title
                        }, titleStyle)
                      });
                      this.titleShape = titleShape;
                    }
                    titleHeight = titleShape.getBBox().height + this.titleGap;
                  }
                  this._titleHeight = titleHeight;
                };
                _proto._renderItems = function _renderItems(items) {
                  var self = this;
                  items = items || self.items;
                  if (!items) {
                    return;
                  }
                  if (self.reversed) {
                    items.reverse();
                  }
                  each$1(items, function(item, index) {
                    self._addItem(item, index);
                  });
                  if (items.length > 1) {
                    this._adjustItems();
                  }
                  this._renderBackground();
                };
                _proto._renderBackground = function _renderBackground() {
                  var background = this.background;
                  if (background) {
                    var container = this.container;
                    var wrapper = this.wrapper;
                    var _wrapper$getBBox = wrapper.getBBox(), minX = _wrapper$getBBox.minX, minY = _wrapper$getBBox.minY, width = _wrapper$getBBox.width, height = _wrapper$getBBox.height;
                    var padding = background.padding || [0, 0, 0, 0];
                    padding = parsePadding(padding);
                    var attrs = mix$1({
                      x: minX - padding[3],
                      y: minY - padding[0],
                      width: width + padding[1] + padding[3],
                      height: height + padding[0] + padding[2]
                    }, background);
                    var backShape = this.backShape;
                    if (backShape) {
                      backShape.attr(attrs);
                    } else {
                      backShape = container.addShape("Rect", {
                        zIndex: -1,
                        attrs
                      });
                    }
                    this.backShape = backShape;
                    container.sort();
                  }
                };
                _proto._addItem = function _addItem(item) {
                  var itemsGroup = this.itemsGroup;
                  var itemGroup = itemsGroup.addGroup({
                    name: item.name,
                    value: item.value,
                    dataValue: item.dataValue,
                    checked: item.checked
                  });
                  var unCheckStyle = this.unCheckStyle, unCheckColor = this.unCheckColor, nameStyle = this.nameStyle, valueStyle = this.valueStyle, wordSpace = this.wordSpace;
                  var marker = item.marker, value = item.value;
                  var startX = 0;
                  if (unCheckColor) {
                    unCheckStyle.fill = unCheckColor;
                  }
                  if (marker) {
                    var radius = marker.radius || 3;
                    var markerAttrs = mix$1({
                      x: radius,
                      y: this._titleHeight
                    }, marker);
                    if (item.checked === false) {
                      mix$1(markerAttrs, unCheckStyle);
                    }
                    var markerShape = itemGroup.addShape("marker", {
                      className: "item-marker",
                      attrs: markerAttrs
                    });
                    startX += markerShape.getBBox().width + wordSpace;
                  }
                  var nameText;
                  var name = item.name;
                  if (name) {
                    var joinString = this.joinString || "";
                    name = value ? name + joinString : name;
                    nameText = itemGroup.addShape("text", {
                      className: "name",
                      attrs: mix$1({
                        x: startX,
                        y: this._titleHeight,
                        text: this._formatItemValue(name)
                      }, nameStyle, item.checked === false ? unCheckStyle : null)
                    });
                  }
                  if (value) {
                    var valueX = startX;
                    if (nameText) {
                      valueX += nameText.getBBox().width;
                    }
                    itemGroup.addShape("text", {
                      className: "value",
                      attrs: mix$1({
                        x: valueX,
                        y: this._titleHeight,
                        text: value
                      }, valueStyle, item.checked === false ? unCheckStyle : null)
                    });
                  }
                  return itemGroup;
                };
                _proto._formatItemValue = function _formatItemValue(value) {
                  var formatter = this.itemFormatter;
                  if (formatter) {
                    value = formatter.call(this, value);
                  }
                  return value;
                };
                _proto._getMaxItemWidth = function _getMaxItemWidth() {
                  var width;
                  var itemWidth = this.itemWidth;
                  if (isNumber(itemWidth) || isNil$1(itemWidth)) {
                    return itemWidth;
                  }
                  if (itemWidth === "auto") {
                    var itemsGroup = this.itemsGroup;
                    var children = itemsGroup.get("children");
                    var count = children.length;
                    var maxItemWidth = 0;
                    for (var i = 0; i < count; i++) {
                      var _children$i$getBBox = children[i].getBBox(), _width = _children$i$getBBox.width;
                      maxItemWidth = Math.max(maxItemWidth, _width);
                    }
                    var maxLength = this.maxLength;
                    var itemGap = this.itemGap;
                    var twoAvgWidth = (maxLength - itemGap) / 2;
                    var threeAvgWidth = (maxLength - itemGap * 2) / 3;
                    if (count === 2) {
                      width = Math.max(maxItemWidth, twoAvgWidth);
                    } else {
                      if (maxItemWidth <= threeAvgWidth) {
                        width = threeAvgWidth;
                      } else if (maxItemWidth <= twoAvgWidth) {
                        width = twoAvgWidth;
                      } else {
                        width = maxItemWidth;
                      }
                    }
                    return width;
                  }
                };
                _proto._adjustHorizontal = function _adjustHorizontal() {
                  var maxLength = this.maxLength, itemsGroup = this.itemsGroup;
                  var children = itemsGroup.get("children");
                  var itemGap = this.itemGap, itemMarginBottom = this.itemMarginBottom;
                  var titleHeight = this._titleHeight;
                  var row = 0;
                  var rowWidth = 0;
                  var width;
                  var height;
                  var itemWidth = this._getMaxItemWidth();
                  var legendHitBoxes = [];
                  for (var i = 0, len = children.length; i < len; i++) {
                    var child = children[i];
                    var box = child.getBBox();
                    var childHeight = box.height;
                    var childWidth = box.width;
                    width = itemWidth || childWidth;
                    height = childHeight + itemMarginBottom;
                    if (width - (maxLength - rowWidth) > 1e-4) {
                      row++;
                      rowWidth = 0;
                    }
                    child.moveTo(rowWidth, row * height);
                    legendHitBoxes.push({
                      x: rowWidth,
                      y: row * height + titleHeight - childHeight / 2,
                      width: childWidth * 1.375,
                      height: childHeight * 1.375
                    });
                    rowWidth += width + itemGap;
                  }
                  this.legendHitBoxes = legendHitBoxes;
                  return;
                };
                _proto._adjustVertical = function _adjustVertical() {
                  var maxLength = this.maxLength, itemsGroup = this.itemsGroup;
                  var itemGap = this.itemGap, itemMarginBottom = this.itemMarginBottom, itemWidth = this.itemWidth;
                  var titleHeight = this._titleHeight;
                  var children = itemsGroup.get("children");
                  var colHeight = 0;
                  var width;
                  var height;
                  var maxItemWidth = 0;
                  var totalWidth = 0;
                  var legendHitBoxes = [];
                  for (var i = 0, length = children.length; i < length; i++) {
                    var child = children[i];
                    var bbox = child.getBBox();
                    width = bbox.width;
                    height = bbox.height;
                    if (isNumber(itemWidth)) {
                      maxItemWidth = itemWidth + itemGap;
                    } else if (width > maxItemWidth) {
                      maxItemWidth = width + itemGap;
                    }
                    if (maxLength - colHeight < height) {
                      colHeight = 0;
                      totalWidth += maxItemWidth;
                      child.moveTo(totalWidth, 0);
                      legendHitBoxes.push({
                        x: totalWidth,
                        y: titleHeight - height / 2,
                        width: width * 1.375,
                        height: height * 1.375
                      });
                    } else {
                      child.moveTo(totalWidth, colHeight);
                      legendHitBoxes.push({
                        x: totalWidth,
                        y: colHeight - height / 2 + titleHeight,
                        width: width * 1.375,
                        height: height * 1.375
                      });
                    }
                    colHeight += height + itemMarginBottom;
                  }
                  this.legendHitBoxes = legendHitBoxes;
                  return;
                };
                _proto._adjustItems = function _adjustItems() {
                  var layout = this.layout;
                  if (layout === "horizontal") {
                    this._adjustHorizontal();
                  } else {
                    this._adjustVertical();
                  }
                };
                _proto.moveTo = function moveTo(x, y) {
                  this.x = x;
                  this.y = y;
                  var container = this.container;
                  container && container.moveTo(x, y);
                  return this;
                };
                _proto.setItems = function setItems(items) {
                  this.clearItems();
                  this._renderItems(items);
                };
                _proto.setTitle = function setTitle(title) {
                  this._renderTitle(title);
                };
                _proto.clearItems = function clearItems() {
                  var itemsGroup = this.itemsGroup;
                  itemsGroup.clear();
                };
                _proto.getWidth = function getWidth2() {
                  var container = this.container;
                  var bbox = container.getBBox();
                  return bbox.width;
                };
                _proto.getHeight = function getHeight2() {
                  var container = this.container;
                  var bbox = container.getBBox();
                  return bbox.height;
                };
                _proto.show = function show() {
                  var container = this.container;
                  container.show();
                };
                _proto.hide = function hide() {
                  var container = this.container;
                  container.hide();
                };
                _proto.clear = function clear2() {
                  var container = this.container;
                  container.clear();
                  container.remove(true);
                };
                return List2;
              }();
              var TextBox = /* @__PURE__ */ function() {
                var _proto = TextBox2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {
                    x: 0,
                    y: 0,
                    content: "",
                    textStyle: {
                      fontSize: 12,
                      fill: "#fff",
                      textAlign: "center",
                      textBaseline: "middle",
                      fontFamily: "Arial"
                    },
                    background: {
                      radius: 1,
                      fill: "rgba(0, 0, 0, 0.65)",
                      padding: [3, 5]
                    },
                    width: 0,
                    height: 0,
                    className: ""
                  };
                };
                function TextBox2(cfg) {
                  deepMix(this, this.getDefaultCfg(), cfg);
                  this._init();
                  var content = this.content, x = this.x, y = this.y;
                  if (!isNil$1(content)) {
                    this.updateContent(content);
                  }
                  this.updatePosition(x, y);
                }
                _proto._init = function _init() {
                  var content = this.content, textStyle = this.textStyle, background = this.background, className = this.className, visible = this.visible, context = this.context;
                  var container = new Group({
                    context,
                    className,
                    zIndex: 0,
                    visible
                  });
                  var text = container.addShape("Text", {
                    className: className + "-text",
                    zIndex: 1,
                    attrs: mix$1({
                      text: content,
                      x: 0,
                      y: 0
                    }, textStyle)
                  });
                  var backgroundShape = container.addShape("Rect", {
                    className: className + "-bg",
                    zIndex: -1,
                    attrs: mix$1({
                      x: 0,
                      y: 0,
                      width: 0,
                      height: 0
                    }, background)
                  });
                  container.sort();
                  this.container = container;
                  this.textShape = text;
                  this.backgroundShape = backgroundShape;
                };
                _proto._getBBox = function _getBBox() {
                  var textShape = this.textShape;
                  var background = this.background;
                  var textBBox = textShape.getBBox();
                  var padding = parsePadding(background.padding);
                  var width = textBBox.width + padding[1] + padding[3];
                  var height = textBBox.height + padding[0] + padding[2];
                  var x = textBBox.minX - padding[3];
                  var y = textBBox.minY - padding[0];
                  return {
                    x,
                    y,
                    width,
                    height
                  };
                };
                _proto.updateContent = function updateContent(text) {
                  var textShape = this.textShape, backgroundShape = this.backgroundShape;
                  if (!isNil$1(text)) {
                    if (!isObject$1(text)) {
                      text = {
                        text
                      };
                    }
                    textShape.attr(text);
                    var _this$_getBBox = this._getBBox(), x = _this$_getBBox.x, y = _this$_getBBox.y, tipWidth = _this$_getBBox.width, tipHeight = _this$_getBBox.height;
                    var width = this.width || tipWidth;
                    var height = this.height || tipHeight;
                    backgroundShape.attr({
                      x,
                      y,
                      width,
                      height
                    });
                    this._width = width;
                    this._height = height;
                    this.content = text.text;
                  }
                };
                _proto.updatePosition = function updatePosition(x, y) {
                  var container = this.container;
                  var _this$_getBBox2 = this._getBBox(), xMin = _this$_getBBox2.x, yMin = _this$_getBBox2.y;
                  container.moveTo(x - xMin, y - yMin);
                  this.x = x - xMin;
                  this.y = y - yMin;
                };
                _proto.getWidth = function getWidth2() {
                  return this._width;
                };
                _proto.getHeight = function getHeight2() {
                  return this._height;
                };
                _proto.show = function show() {
                  this.container.show();
                };
                _proto.hide = function hide() {
                  this.container.hide();
                };
                _proto.clear = function clear2() {
                  var container = this.container;
                  container.clear();
                  container.remove(true);
                  this.container = null;
                  this.textShape = null;
                  this.backgroundShape = null;
                };
                return TextBox2;
              }();
              var GAP = 4;
              var Tooltip$1 = /* @__PURE__ */ function() {
                var _proto = Tooltip2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {
                    showCrosshairs: false,
                    crosshairsStyle: {
                      stroke: "rgba(0, 0, 0, 0.25)",
                      lineWidth: 1
                    },
                    crosshairsType: "y",
                    showXTip: false,
                    showYTip: false,
                    xTip: null,
                    xTipBackground: {
                      radius: 1,
                      fill: "rgba(0, 0, 0, 0.65)",
                      padding: [3, 5]
                    },
                    xTipTextStyle: {
                      fontSize: 12,
                      fill: "#fff",
                      textAlign: "center",
                      textBaseline: "middle"
                    },
                    yTip: null,
                    yTipBackground: {
                      radius: 1,
                      fill: "rgba(0, 0, 0, 0.65)",
                      padding: [3, 5]
                    },
                    yTipTextStyle: {
                      fontSize: 12,
                      fill: "#fff",
                      textAlign: "center",
                      textBaseline: "middle"
                    },
                    background: null,
                    layout: "horizontal",
                    offsetX: 0,
                    offsetY: 0
                  };
                };
                function Tooltip2(cfg) {
                  deepMix(this, this.getDefaultCfg(), cfg);
                  var frontPlot = this.frontPlot, custom = this.custom;
                  if (!custom) {
                    var container = new List(mix$1({
                      parent: frontPlot,
                      zIndex: 3
                    }, cfg));
                    this.container = container;
                    var fixed = this.fixed, background = this.background;
                    if (!fixed) {
                      this.tooltipArrow = frontPlot.addShape("Polygon", {
                        className: "tooltip-arrow",
                        visible: false,
                        zIndex: 2,
                        attrs: mix$1({
                          points: []
                        }, background)
                      });
                    }
                  }
                  if (this.showXTip) {
                    var xTipBackground = this.xTipBackground, xTipTextStyle = this.xTipTextStyle;
                    var xTipBox = new TextBox({
                      context: frontPlot.get("context"),
                      className: "xTip",
                      background: xTipBackground,
                      textStyle: xTipTextStyle,
                      visible: false
                    });
                    frontPlot.add(xTipBox.container);
                    this.xTipBox = xTipBox;
                  }
                  if (this.showYTip) {
                    var yTipBackground = this.yTipBackground, yTipTextStyle = this.yTipTextStyle;
                    var yTipBox = new TextBox({
                      context: frontPlot.get("context"),
                      className: "yTip",
                      background: yTipBackground,
                      textStyle: yTipTextStyle,
                      visible: false
                    });
                    frontPlot.add(yTipBox.container);
                    this.yTipBox = yTipBox;
                  }
                  if (this.showCrosshairs) {
                    this._renderCrosshairs();
                  }
                  frontPlot.sort();
                }
                _proto.setContent = function setContent(title, items) {
                  this.title = title;
                  this.items = items;
                  if (!this.custom) {
                    var container = this.container;
                    container.setTitle(title);
                    container.setItems(items);
                  }
                };
                _proto.setYTipContent = function setYTipContent(val) {
                  var yTip = this.yTip;
                  if (isFunction$1(yTip)) {
                    val = yTip(val);
                  } else {
                    val = mix$1({
                      text: val
                    }, yTip);
                  }
                  this.yTipBox && this.yTipBox.updateContent(val);
                };
                _proto.setYTipPosition = function setYTipPosition(pos) {
                  var plotRange = this.plotRange;
                  var crosshairsShapeX = this.crosshairsShapeX;
                  if (this.showYTip) {
                    var yTipBox = this.yTipBox;
                    var yTipHeight = yTipBox.getHeight();
                    var yTipWidth = yTipBox.getWidth();
                    var posX = plotRange.tl.x - yTipWidth;
                    var posY = pos - yTipHeight / 2;
                    if (posY <= plotRange.tl.y) {
                      posY = plotRange.tl.y;
                    }
                    if (posY + yTipHeight >= plotRange.br.y) {
                      posY = plotRange.br.y - yTipHeight;
                    }
                    if (posX < 0) {
                      posX = plotRange.tl.x;
                      crosshairsShapeX && crosshairsShapeX.attr("x1", plotRange.tl.x + yTipWidth);
                    }
                    yTipBox.updatePosition(posX, posY);
                  }
                };
                _proto.setXTipContent = function setXTipContent(val) {
                  var xTip = this.xTip;
                  if (isFunction$1(xTip)) {
                    val = xTip(val);
                  } else {
                    val = mix$1({
                      text: val
                    }, xTip);
                  }
                  this.xTipBox && this.xTipBox.updateContent(val);
                };
                _proto.setXTipPosition = function setXTipPosition(pos) {
                  var showXTip = this.showXTip, canvas = this.canvas, plotRange = this.plotRange, xTipBox = this.xTipBox, crosshairsShapeY = this.crosshairsShapeY;
                  if (showXTip) {
                    var canvasHeight = canvas.get("height");
                    var xTipWidth = xTipBox.getWidth();
                    var xTipHeight = xTipBox.getHeight();
                    var posX = pos - xTipWidth / 2;
                    var posY = plotRange.br.y;
                    if (posX <= plotRange.tl.x) {
                      posX = plotRange.tl.x;
                    }
                    if (posX + xTipWidth >= plotRange.tr.x) {
                      posX = plotRange.tr.x - xTipWidth;
                    }
                    if (canvasHeight - posY < xTipHeight) {
                      posY -= xTipHeight;
                    }
                    xTipBox.updatePosition(posX, posY);
                    crosshairsShapeY && crosshairsShapeY.attr("y1", posY);
                  }
                };
                _proto.setXCrosshairPosition = function setXCrosshairPosition(pos) {
                  this.crosshairsShapeX && this.crosshairsShapeX.moveTo(0, pos);
                };
                _proto.setYCrosshairPosition = function setYCrosshairPosition(pos) {
                  this.crosshairsShapeY && this.crosshairsShapeY.moveTo(pos, 0);
                };
                _proto.setPosition = function setPosition(items) {
                  var container = this.container, plotRange = this.plotRange, offsetX = this.offsetX, offsetY = this.offsetY, fixed = this.fixed, tooltipArrow = this.tooltipArrow;
                  if (!container) {
                    return;
                  }
                  var containerBBox = container.container.getBBox();
                  var minX = containerBBox.minX, minY = containerBBox.minY, width = containerBBox.width, height = containerBBox.height;
                  var tl = plotRange.tl, tr = plotRange.tr;
                  var posX = 0;
                  var posY = tl.y - height - GAP + offsetY;
                  if (posY < 0) {
                    posY = 0;
                  }
                  if (fixed) {
                    var x = (tl.x + tr.x) / 2;
                    posX = x - width / 2 + offsetX;
                  } else {
                    var _x;
                    if (items.length > 1) {
                      _x = (items[0].x + items[items.length - 1].x) / 2;
                    } else {
                      _x = items[0].x;
                    }
                    posX = _x - width / 2 + offsetX;
                    if (posX < tl.x) {
                      posX = tl.x;
                    }
                    if (posX + width > tr.x) {
                      posX = tr.x - width;
                    }
                    if (tooltipArrow) {
                      var arrowY = posY + height;
                      tooltipArrow.attr("points", [{
                        x: _x - 3,
                        y: arrowY
                      }, {
                        x: _x + 3,
                        y: arrowY
                      }, {
                        x: _x,
                        y: arrowY + GAP
                      }]);
                      var backShape = container.backShape;
                      var radius = parsePadding(backShape.attr("radius"));
                      if (_x === tl.x) {
                        radius[3] = 0;
                        tooltipArrow.attr("points", [{
                          x: tl.x,
                          y: arrowY
                        }, {
                          x: tl.x + GAP,
                          y: arrowY
                        }, {
                          x: tl.x,
                          y: arrowY + GAP
                        }]);
                      } else if (_x === tr.x) {
                        radius[2] = 0;
                        tooltipArrow.attr("points", [{
                          x: tr.x - GAP,
                          y: arrowY
                        }, {
                          x: tr.x,
                          y: arrowY
                        }, {
                          x: tr.x,
                          y: arrowY + GAP
                        }]);
                      }
                      backShape.attr("radius", radius);
                    }
                  }
                  container.moveTo(posX - minX, posY - minY);
                };
                _proto.setMarkers = function setMarkers(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  var self = this;
                  var _cfg = cfg, items = _cfg.items, style = _cfg.style, type = _cfg.type;
                  var markerGroup = self._getMarkerGroup(type);
                  if (type === "circle") {
                    for (var i = 0, length = items.length; i < length; i++) {
                      var item = items[i];
                      markerGroup.addShape("marker", {
                        className: "tooltip-circle-marker",
                        attrs: mix$1({
                          x: item.x,
                          y: item.y,
                          stroke: item.color
                        }, style)
                      });
                    }
                  } else {
                    markerGroup.addShape("rect", {
                      className: "tooltip-rect-marker",
                      attrs: style
                    });
                  }
                };
                _proto.clearMarkers = function clearMarkers() {
                  var markerGroup = this.markerGroup;
                  markerGroup && markerGroup.clear();
                };
                _proto.show = function show() {
                  var crosshairsShapeX = this.crosshairsShapeX;
                  var crosshairsShapeY = this.crosshairsShapeY;
                  var markerGroup = this.markerGroup;
                  var container = this.container;
                  var tooltipArrow = this.tooltipArrow;
                  var xTipBox = this.xTipBox;
                  var yTipBox = this.yTipBox;
                  var canvas = this.canvas;
                  crosshairsShapeX && crosshairsShapeX.show();
                  crosshairsShapeY && crosshairsShapeY.show();
                  markerGroup && markerGroup.show();
                  container && container.show();
                  tooltipArrow && tooltipArrow.show();
                  xTipBox && xTipBox.show();
                  yTipBox && yTipBox.show();
                  canvas.draw();
                };
                _proto.hide = function hide() {
                  var crosshairsShapeX = this.crosshairsShapeX;
                  var crosshairsShapeY = this.crosshairsShapeY;
                  var markerGroup = this.markerGroup;
                  var container = this.container;
                  var tooltipArrow = this.tooltipArrow;
                  var xTipBox = this.xTipBox;
                  var yTipBox = this.yTipBox;
                  crosshairsShapeX && crosshairsShapeX.hide();
                  crosshairsShapeY && crosshairsShapeY.hide();
                  markerGroup && markerGroup.hide();
                  container && container.hide();
                  tooltipArrow && tooltipArrow.hide();
                  xTipBox && xTipBox.hide();
                  yTipBox && yTipBox.hide();
                };
                _proto.destroy = function destroy() {
                  var crosshairsShapeX = this.crosshairsShapeX;
                  var crosshairsShapeY = this.crosshairsShapeY;
                  var markerGroup = this.markerGroup;
                  var container = this.container;
                  var tooltipArrow = this.tooltipArrow;
                  var xTipBox = this.xTipBox;
                  var yTipBox = this.yTipBox;
                  crosshairsShapeX && crosshairsShapeX.remove(true);
                  crosshairsShapeY && crosshairsShapeY.remove(true);
                  markerGroup && markerGroup.remove(true);
                  tooltipArrow && tooltipArrow.remove(true);
                  container && container.clear();
                  xTipBox && xTipBox.clear();
                  yTipBox && yTipBox.clear();
                  this.destroyed = true;
                };
                _proto._getMarkerGroup = function _getMarkerGroup(type) {
                  var markerGroup = this.markerGroup;
                  if (!markerGroup) {
                    if (type === "circle") {
                      markerGroup = this.frontPlot.addGroup({
                        zIndex: 1
                      });
                      this.frontPlot.sort();
                    } else {
                      markerGroup = this.backPlot.addGroup();
                    }
                    this.markerGroup = markerGroup;
                  } else {
                    markerGroup.clear();
                  }
                  return markerGroup;
                };
                _proto._renderCrosshairs = function _renderCrosshairs() {
                  var crosshairsType = this.crosshairsType, crosshairsStyle = this.crosshairsStyle, frontPlot = this.frontPlot, plotRange = this.plotRange;
                  var tl = plotRange.tl, br = plotRange.br;
                  if (directionEnabled(crosshairsType, "x")) {
                    this.crosshairsShapeX = frontPlot.addShape("Line", {
                      className: "tooltip-crosshairs-x",
                      zIndex: 0,
                      visible: false,
                      attrs: mix$1({
                        x1: tl.x,
                        y1: 0,
                        x2: br.x,
                        y2: 0
                      }, crosshairsStyle)
                    });
                  }
                  if (directionEnabled(crosshairsType, "y")) {
                    this.crosshairsShapeY = frontPlot.addShape("Line", {
                      className: "tooltip-crosshairs-y",
                      zIndex: 0,
                      visible: false,
                      attrs: mix$1({
                        x1: 0,
                        y1: br.y,
                        x2: 0,
                        y2: tl.y
                      }, crosshairsStyle)
                    });
                  }
                };
                return Tooltip2;
              }();
              Global.tooltip = deepMix({
                triggerOn: "press",
                triggerOff: "pressend",
                alwaysShow: false,
                showTitle: false,
                showCrosshairs: false,
                crosshairsStyle: {
                  stroke: "rgba(0, 0, 0, 0.25)",
                  lineWidth: 1
                },
                showTooltipMarker: true,
                background: {
                  radius: 1,
                  fill: "rgba(0, 0, 0, 0.65)",
                  padding: [3, 5]
                },
                titleStyle: {
                  fontSize: 12,
                  fill: "#fff",
                  textAlign: "start",
                  textBaseline: "top"
                },
                nameStyle: {
                  fontSize: 12,
                  fill: "rgba(255, 255, 255, 0.65)",
                  textAlign: "start",
                  textBaseline: "middle"
                },
                valueStyle: {
                  fontSize: 12,
                  fill: "#fff",
                  textAlign: "start",
                  textBaseline: "middle"
                },
                showItemMarker: true,
                itemMarkerStyle: {
                  radius: 3,
                  symbol: "circle",
                  lineWidth: 1,
                  stroke: "#fff"
                },
                layout: "horizontal",
                snap: false
              }, Global.tooltip || {});
              function _getTooltipValueScale(geom) {
                var colorAttr = geom.getAttr("color");
                if (colorAttr) {
                  var colorScale = colorAttr.getScale(colorAttr.type);
                  if (colorScale.isLinear) {
                    return colorScale;
                  }
                }
                var xScale = geom.getXScale();
                var yScale = geom.getYScale();
                if (yScale) {
                  return yScale;
                }
                return xScale;
              }
              function getTooltipName(geom, origin) {
                var name;
                var nameScale;
                var groupScales = geom._getGroupScales();
                if (groupScales.length) {
                  each$1(groupScales, function(scale) {
                    nameScale = scale;
                    return false;
                  });
                }
                if (nameScale) {
                  var field = nameScale.field;
                  name = nameScale.getText(origin[field]);
                } else {
                  var valueScale = _getTooltipValueScale(geom);
                  name = valueScale.alias || valueScale.field;
                }
                return name;
              }
              function getTooltipValue(geom, origin) {
                var scale = _getTooltipValueScale(geom);
                return scale.getText(origin[scale.field]);
              }
              function getTooltipTitle(geom, origin) {
                var position = geom.getAttr("position");
                var field = position.getFields()[0];
                var scale = geom.get("scales")[field];
                return scale.getText(origin[scale.field]);
              }
              function _indexOfArray(items, item) {
                var rst = -1;
                each$1(items, function(sub, index) {
                  if (sub.title === item.title && sub.name === item.name && sub.value === item.value && sub.color === item.color) {
                    rst = index;
                    return false;
                  }
                });
                return rst;
              }
              function _uniqItems(items) {
                var tmp = [];
                each$1(items, function(item) {
                  var index = _indexOfArray(tmp, item);
                  if (index === -1) {
                    tmp.push(item);
                  } else {
                    tmp[index] = item;
                  }
                });
                return tmp;
              }
              function isEqual(arr1, arr2) {
                return JSON.stringify(arr1) === JSON.stringify(arr2);
              }
              var TooltipController = /* @__PURE__ */ function() {
                function TooltipController2(cfg) {
                  var _this = this;
                  _defineProperty(this, "handleShowEvent", function(ev) {
                    var chart = _this.chart;
                    if (!_this.enable)
                      return;
                    var plot = chart.get("plotRange");
                    var point = createEvent(ev, chart);
                    if (!isPointInPlot(point, plot) && !_this._tooltipCfg.alwaysShow) {
                      _this.hideTooltip();
                      return;
                    }
                    var lastTimeStamp = _this.timeStamp;
                    var timeStamp = +new Date();
                    if (timeStamp - lastTimeStamp > 16) {
                      _this.showTooltip(point);
                      _this.timeStamp = timeStamp;
                    }
                  });
                  _defineProperty(this, "handleHideEvent", function() {
                    if (!_this.enable)
                      return;
                    _this.hideTooltip();
                  });
                  this.enable = true;
                  this.cfg = {};
                  this.tooltip = null;
                  this.chart = null;
                  this.timeStamp = 0;
                  mix$1(this, cfg);
                  var _chart = this.chart;
                  var canvas = _chart.get("canvas");
                  this.canvas = canvas;
                  this.canvasDom = canvas.get("el");
                }
                var _proto = TooltipController2.prototype;
                _proto._setCrosshairsCfg = function _setCrosshairsCfg() {
                  var self = this;
                  var chart = self.chart;
                  var defaultCfg = mix$1({}, Global.tooltip);
                  var geoms = chart.get("geoms");
                  var shapes = [];
                  each$1(geoms, function(geom) {
                    var type = geom.get("type");
                    if (shapes.indexOf(type) === -1) {
                      shapes.push(type);
                    }
                  });
                  var coordType = chart.get("coord").type;
                  if (geoms.length && (coordType === "cartesian" || coordType === "rect")) {
                    if (shapes.length === 1 && ["line", "area", "path", "point"].indexOf(shapes[0]) !== -1) {
                      mix$1(defaultCfg, {
                        showCrosshairs: true
                      });
                    }
                  }
                  return defaultCfg;
                };
                _proto._getMaxLength = function _getMaxLength(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  var _cfg = cfg, layout = _cfg.layout, plotRange = _cfg.plotRange;
                  return layout === "horizontal" ? plotRange.br.x - plotRange.bl.x : plotRange.bl.y - plotRange.tr.y;
                };
                _proto.render = function render() {
                  var self = this;
                  if (self.tooltip) {
                    return;
                  }
                  var chart = self.chart;
                  var canvas = chart.get("canvas");
                  var frontPlot = chart.get("frontPlot").addGroup({
                    className: "tooltipContainer",
                    zIndex: 10
                  });
                  var backPlot = chart.get("backPlot").addGroup({
                    className: "tooltipContainer"
                  });
                  var plotRange = chart.get("plotRange");
                  var coord = chart.get("coord");
                  var defaultCfg = self._setCrosshairsCfg();
                  var cfg = self.cfg;
                  var tooltipCfg = deepMix({
                    plotRange,
                    frontPlot,
                    backPlot,
                    canvas,
                    fixed: coord.transposed || coord.isPolar
                  }, defaultCfg, cfg);
                  tooltipCfg.maxLength = self._getMaxLength(tooltipCfg);
                  this._tooltipCfg = tooltipCfg;
                  var tooltip = new Tooltip$1(tooltipCfg);
                  self.tooltip = tooltip;
                  if (tooltipCfg.alwaysShow && self.prePoint) {
                    this.showTooltip(self.prePoint);
                  }
                  self.bindEvents();
                };
                _proto.clear = function clear2() {
                  var tooltip = this.tooltip;
                  if (tooltip) {
                    tooltip.destroy();
                    this.unBindEvents();
                  }
                  this.tooltip = null;
                  this._lastActive = null;
                };
                _proto._getTooltipMarkerStyle = function _getTooltipMarkerStyle(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  var _cfg2 = cfg, type = _cfg2.type, items = _cfg2.items;
                  var tooltipCfg = this._tooltipCfg;
                  if (type === "rect") {
                    var x;
                    var y;
                    var width;
                    var height;
                    var chart = this.chart;
                    var _chart$get = chart.get("plotRange"), tl = _chart$get.tl, br = _chart$get.br;
                    var coord = chart.get("coord");
                    var firstItem = items[0];
                    var lastItem = items[items.length - 1];
                    var intervalWidth = firstItem.width;
                    if (coord.transposed) {
                      x = tl.x;
                      y = lastItem.y - intervalWidth * 0.75;
                      width = br.x - tl.x;
                      height = firstItem.y - lastItem.y + 1.5 * intervalWidth;
                    } else {
                      x = firstItem.x - intervalWidth * 0.75;
                      y = tl.y;
                      width = lastItem.x - firstItem.x + 1.5 * intervalWidth;
                      height = br.y - tl.y;
                    }
                    cfg.style = mix$1({
                      x,
                      y,
                      width,
                      height,
                      fill: "#CCD6EC",
                      opacity: 0.3
                    }, tooltipCfg.tooltipMarkerStyle);
                  } else {
                    cfg.style = mix$1({
                      radius: 4,
                      fill: "#fff",
                      lineWidth: 2
                    }, tooltipCfg.tooltipMarkerStyle);
                  }
                  return cfg;
                };
                _proto._setTooltip = function _setTooltip(point, items, tooltipMarkerCfg) {
                  if (tooltipMarkerCfg === void 0) {
                    tooltipMarkerCfg = {};
                  }
                  this.prePoint = point;
                  var lastActive = this._lastActive;
                  var tooltip = this.tooltip;
                  var cfg = this._tooltipCfg;
                  items = _uniqItems(items);
                  var chart = this.chart;
                  var coord = chart.get("coord");
                  var yScale = chart.getYScales()[0];
                  var snap = cfg.snap;
                  if (snap === false && yScale.isLinear) {
                    var invertPoint = coord.invertPoint(point);
                    var plot = chart.get("plotRange");
                    var tip;
                    var pos;
                    if (isPointInPlot(point, plot)) {
                      if (coord.transposed) {
                        tip = yScale.invert(invertPoint.x);
                        pos = point.x;
                        tooltip.setXTipContent(tip);
                        tooltip.setXTipPosition(pos);
                        tooltip.setYCrosshairPosition(pos);
                      } else {
                        tip = yScale.invert(invertPoint.y);
                        pos = point.y;
                        tooltip.setYTipContent(tip);
                        tooltip.setYTipPosition(pos);
                        tooltip.setXCrosshairPosition(pos);
                      }
                    }
                  }
                  if (cfg.onShow) {
                    cfg.onShow({
                      x: point.x,
                      y: point.y,
                      tooltip,
                      items,
                      tooltipMarkerCfg
                    });
                  }
                  if (isEqual(lastActive, items)) {
                    if (snap === false && (directionEnabled(cfg.crosshairsType, "y") || cfg.showYTip)) {
                      var canvas = this.chart.get("canvas");
                      canvas.draw();
                    }
                    return;
                  }
                  this._lastActive = items;
                  var onChange = cfg.onChange;
                  if (onChange) {
                    onChange({
                      x: point.x,
                      y: point.y,
                      tooltip,
                      items,
                      tooltipMarkerCfg
                    });
                  }
                  var first = items[0];
                  var title = first.title || first.name;
                  var xTipPosX = first.x;
                  if (items.length > 1) {
                    xTipPosX = (items[0].x + items[items.length - 1].x) / 2;
                  }
                  tooltip.setContent(title, items, coord.transposed);
                  tooltip.setPosition(items, point);
                  if (coord.transposed) {
                    var yTipPosY = first.y;
                    if (items.length > 1) {
                      yTipPosY = (items[0].y + items[items.length - 1].y) / 2;
                    }
                    tooltip.setYTipContent(title);
                    tooltip.setYTipPosition(yTipPosY);
                    tooltip.setXCrosshairPosition(yTipPosY);
                    if (snap) {
                      tooltip.setXTipContent(first.value);
                      tooltip.setXTipPosition(xTipPosX);
                      tooltip.setYCrosshairPosition(xTipPosX);
                    }
                  } else {
                    tooltip.setXTipContent(title);
                    tooltip.setXTipPosition(xTipPosX);
                    tooltip.setYCrosshairPosition(xTipPosX);
                    if (snap) {
                      tooltip.setYTipContent(first.value);
                      tooltip.setYTipPosition(first.y);
                      tooltip.setXCrosshairPosition(first.y);
                    }
                  }
                  var markerItems = tooltipMarkerCfg.items;
                  if (cfg.showTooltipMarker && markerItems.length) {
                    tooltipMarkerCfg = this._getTooltipMarkerStyle(tooltipMarkerCfg);
                    tooltip.setMarkers(tooltipMarkerCfg);
                  } else {
                    tooltip.clearMarkers();
                  }
                  tooltip.show();
                };
                _proto.showTooltip = function showTooltip(point) {
                  var self = this;
                  var chart = self.chart;
                  var tooltipMarkerType;
                  var tooltipMarkerItems = [];
                  var items = [];
                  var cfg = self._tooltipCfg;
                  var showItemMarker = cfg.showItemMarker, itemMarkerStyle = cfg.itemMarkerStyle, alwaysShow = cfg.alwaysShow;
                  var marker;
                  if (showItemMarker) {
                    marker = itemMarkerStyle;
                  }
                  var geoms = chart.get("geoms");
                  var coord = chart.get("coord");
                  each$1(geoms, function(geom) {
                    if (geom.get("visible")) {
                      var type = geom.get("type");
                      var records = geom.getSnapRecords(point);
                      var adjust = geom.get("adjust");
                      if (type === "interval" && adjust && adjust.type === "symmetric") {
                        return;
                      }
                      each$1(records, function(record) {
                        var x = record.x, y = record.y, _origin = record._origin, color = record.color;
                        if ((x || !isNaN(x)) && (y || !isNaN(y))) {
                          var tooltipItem = {
                            x,
                            y: isArray$1(y) ? y[1] : y,
                            color: color || Global.defaultColor,
                            origin: _origin,
                            name: getTooltipName(geom, _origin),
                            value: getTooltipValue(geom, _origin),
                            title: getTooltipTitle(geom, _origin)
                          };
                          if (marker) {
                            tooltipItem.marker = mix$1({
                              fill: color || Global.defaultColor
                            }, marker);
                          }
                          items.push(tooltipItem);
                          if (["line", "area", "path"].indexOf(type) !== -1) {
                            tooltipMarkerType = "circle";
                            tooltipMarkerItems.push(tooltipItem);
                          } else if (type === "interval" && (coord.type === "cartesian" || coord.type === "rect")) {
                            tooltipMarkerType = "rect";
                            tooltipItem.width = geom.getSize(record._origin);
                            tooltipMarkerItems.push(tooltipItem);
                          }
                        }
                      });
                    }
                  });
                  if (items.length) {
                    var tooltipMarkerCfg = {
                      items: tooltipMarkerItems,
                      type: tooltipMarkerType
                    };
                    self._setTooltip(point, items, tooltipMarkerCfg);
                    return;
                  }
                  if (!alwaysShow) {
                    self.hideTooltip();
                  }
                };
                _proto.hideTooltip = function hideTooltip() {
                  var cfg = this._tooltipCfg;
                  this._lastActive = null;
                  var tooltip = this.tooltip;
                  if (tooltip) {
                    tooltip.hide();
                    if (cfg.onHide) {
                      cfg.onHide({
                        tooltip
                      });
                    }
                    var canvas = this.chart.get("canvas");
                    canvas.draw();
                  }
                };
                _proto._handleEvent = function _handleEvent(methodName, method, action) {
                  var canvas = this.canvas;
                  each$1([].concat(methodName), function(aMethod) {
                    if (action === "bind") {
                      canvas.on(aMethod, method);
                    } else {
                      canvas.off(aMethod, method);
                    }
                  });
                };
                _proto.bindEvents = function bindEvents() {
                  var cfg = this._tooltipCfg;
                  var triggerOn = cfg.triggerOn, triggerOff = cfg.triggerOff, alwaysShow = cfg.alwaysShow;
                  triggerOn && this._handleEvent(triggerOn, this.handleShowEvent, "bind");
                  if (!alwaysShow) {
                    this._handleEvent(triggerOff, this.handleHideEvent, "bind");
                  }
                };
                _proto.unBindEvents = function unBindEvents() {
                  var cfg = this._tooltipCfg;
                  var triggerOn = cfg.triggerOn, triggerOff = cfg.triggerOff, alwaysShow = cfg.alwaysShow;
                  triggerOn && this._handleEvent(triggerOn, this.handleShowEvent, "unBind");
                  if (!alwaysShow) {
                    this._handleEvent(triggerOff, this.handleHideEvent, "unBind");
                  }
                };
                return TooltipController2;
              }();
              function init$2(chart) {
                var tooltipController = new TooltipController({
                  chart
                });
                chart.set("tooltipController", tooltipController);
                chart.tooltip = function(enable, cfg) {
                  if (isObject$1(enable)) {
                    cfg = enable;
                    enable = true;
                  }
                  tooltipController.enable = enable;
                  if (cfg) {
                    tooltipController.cfg = cfg;
                  }
                  return this;
                };
              }
              function afterGeomDraw$2(chart) {
                var tooltipController = chart.get("tooltipController");
                tooltipController.render();
                chart.showTooltip = function(point) {
                  tooltipController.showTooltip(point);
                  return this;
                };
                chart.hideTooltip = function() {
                  tooltipController.hideTooltip();
                  return this;
                };
              }
              function clearInner$1(chart) {
                var tooltipController = chart.get("tooltipController");
                tooltipController.clear();
              }
              var Tooltip = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                init: init$2,
                afterGeomDraw: afterGeomDraw$2,
                clearInner: clearInner$1,
                "default": {
                  init: init$2,
                  afterGeomDraw: afterGeomDraw$2,
                  clearInner: clearInner$1
                }
              });
              Global.guide = deepMix({
                line: {
                  style: {
                    stroke: "#a3a3a3",
                    lineWidth: 1
                  },
                  top: true
                },
                text: {
                  style: {
                    fill: "#787878",
                    textAlign: "center",
                    textBaseline: "middle"
                  },
                  offsetX: 0,
                  offsetY: 0,
                  top: true
                },
                rect: {
                  style: {
                    fill: "#fafafa"
                  },
                  top: false
                },
                arc: {
                  style: {
                    stroke: "#a3a3a3"
                  },
                  top: true
                },
                html: {
                  offsetX: 0,
                  offsetY: 0,
                  alignX: "center",
                  alignY: "middle"
                },
                tag: {
                  top: true,
                  offsetX: 0,
                  offsetY: 0,
                  side: 4,
                  background: {
                    padding: 5,
                    radius: 2,
                    fill: "#1890FF"
                  },
                  textStyle: {
                    fontSize: 12,
                    fill: "#fff",
                    textAlign: "center",
                    textBaseline: "middle"
                  }
                },
                point: {
                  top: true,
                  offsetX: 0,
                  offsetY: 0,
                  style: {
                    fill: "#fff",
                    r: 3,
                    lineWidth: 2,
                    stroke: "#1890ff"
                  }
                }
              }, Global.guide || {});
              var GuideController = /* @__PURE__ */ function() {
                function GuideController2(cfg) {
                  this.guides = [];
                  this.xScale = null;
                  this.yScales = null;
                  this.guideShapes = [];
                  mix$1(this, cfg);
                }
                var _proto = GuideController2.prototype;
                _proto._toString = function _toString(position) {
                  if (isFunction$1(position)) {
                    position = position(this.xScale, this.yScales);
                  }
                  position = position.toString();
                  return position;
                };
                _proto._getId = function _getId(shape, guide) {
                  var id = guide.id;
                  if (!id) {
                    var type = guide.type;
                    if (type === "arc" || type === "line" || type === "rect") {
                      id = this._toString(guide.start) + "-" + this._toString(guide.end);
                    } else {
                      id = this._toString(guide.position);
                    }
                  }
                  return id;
                };
                _proto.paint = function paint(coord) {
                  var self = this;
                  var chart = self.chart, guides = self.guides, xScale = self.xScale, yScales = self.yScales;
                  var guideShapes = [];
                  each$1(guides, function(guide, idx) {
                    guide.xScale = xScale;
                    guide.yScales = yScales;
                    var container;
                    if (guide.type === "regionFilter") {
                      guide.chart = chart;
                    } else {
                      container = guide.top ? self.frontPlot : self.backPlot;
                    }
                    guide.coord = coord;
                    guide.container = container;
                    guide.canvas = chart.get("canvas");
                    var shape = guide.render(coord, container);
                    if (shape) {
                      var id = self._getId(shape, guide);
                      [].concat(shape).forEach(function(s) {
                        s._id = s.get("className") + "-" + id;
                        s.set("index", idx);
                        guideShapes.push(s);
                      });
                    }
                  });
                  self.guideShapes = guideShapes;
                };
                _proto.clear = function clear2() {
                  this.reset();
                  this.guides = [];
                  return this;
                };
                _proto.reset = function reset() {
                  var guides = this.guides;
                  each$1(guides, function(guide) {
                    guide.remove();
                  });
                };
                _proto._createGuide = function _createGuide(type, cfg) {
                  var ClassName = upperFirst(type);
                  var guide = new GuideBase[ClassName](deepMix({}, Global.guide[type], cfg));
                  this.guides.push(guide);
                  return guide;
                };
                _proto.line = function line(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  return this._createGuide("line", cfg);
                };
                _proto.text = function text(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  return this._createGuide("text", cfg);
                };
                _proto.arc = function arc(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  return this._createGuide("arc", cfg);
                };
                _proto.html = function html(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  return this._createGuide("html", cfg);
                };
                _proto.rect = function rect(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  return this._createGuide("rect", cfg);
                };
                _proto.tag = function tag(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  return this._createGuide("tag", cfg);
                };
                _proto.point = function point(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  return this._createGuide("point", cfg);
                };
                _proto.regionFilter = function regionFilter(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  return this._createGuide("regionFilter", cfg);
                };
                return GuideController2;
              }();
              function init$1(chart) {
                var guideController = new GuideController({
                  frontPlot: chart.get("frontPlot").addGroup({
                    zIndex: 20,
                    className: "guideContainer"
                  }),
                  backPlot: chart.get("backPlot").addGroup({
                    className: "guideContainer"
                  })
                });
                chart.set("guideController", guideController);
                chart.guide = function() {
                  return guideController;
                };
              }
              function afterGeomDraw$1(chart) {
                var guideController = chart.get("guideController");
                if (!guideController.guides.length) {
                  return;
                }
                var xScale = chart.getXScale();
                var yScales = chart.getYScales();
                var coord = chart.get("coord");
                guideController.xScale = xScale;
                guideController.yScales = yScales;
                guideController.chart = chart;
                guideController.paint(coord);
              }
              function clear(chart) {
                chart.get("guideController").clear();
              }
              function repaint(chart) {
                chart.get("guideController").reset();
              }
              var Guide = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                init: init$1,
                afterGeomDraw: afterGeomDraw$1,
                clear,
                repaint,
                "default": {
                  init: init$1,
                  afterGeomDraw: afterGeomDraw$1,
                  clear,
                  repaint
                }
              });
              var LEGEND_GAP = 12;
              var MARKER_SIZE = 3;
              var DEFAULT_CFG = {
                itemMarginBottom: 12,
                itemGap: 10,
                showTitle: false,
                titleStyle: {
                  fontSize: 12,
                  fill: "#808080",
                  textAlign: "start",
                  textBaseline: "top"
                },
                nameStyle: {
                  fill: "#808080",
                  fontSize: 12,
                  textAlign: "start",
                  textBaseline: "middle"
                },
                valueStyle: {
                  fill: "#000000",
                  fontSize: 12,
                  textAlign: "start",
                  textBaseline: "middle"
                },
                unCheckStyle: {
                  fill: "#bfbfbf"
                },
                itemWidth: "auto",
                wordSpace: 6,
                selectedMode: "multiple"
              };
              Global.legend = deepMix({
                common: DEFAULT_CFG,
                right: mix$1({
                  position: "right",
                  layout: "vertical"
                }, DEFAULT_CFG),
                left: mix$1({
                  position: "left",
                  layout: "vertical"
                }, DEFAULT_CFG),
                top: mix$1({
                  position: "top",
                  layout: "horizontal"
                }, DEFAULT_CFG),
                bottom: mix$1({
                  position: "bottom",
                  layout: "horizontal"
                }, DEFAULT_CFG)
              }, Global.legend || {});
              function getPaddingByPos(pos, appendPadding) {
                var padding = 0;
                appendPadding = parsePadding(appendPadding);
                switch (pos) {
                  case "top":
                    padding = appendPadding[0];
                    break;
                  case "right":
                    padding = appendPadding[1];
                    break;
                  case "bottom":
                    padding = appendPadding[2];
                    break;
                  case "left":
                    padding = appendPadding[3];
                    break;
                }
                return padding;
              }
              var LegendController = /* @__PURE__ */ function() {
                function LegendController2(cfg) {
                  var _this = this;
                  _defineProperty(this, "handleEvent", function(ev) {
                    var self = _this;
                    function findItem(x2, y2) {
                      var result = null;
                      var legends = self.legends;
                      each$1(legends, function(legendItems) {
                        each$1(legendItems, function(legend) {
                          var itemsGroup = legend.itemsGroup, legendHitBoxes = legend.legendHitBoxes;
                          var children = itemsGroup.get("children");
                          if (children.length) {
                            var legendPosX = legend.x;
                            var legendPosY = legend.y;
                            each$1(legendHitBoxes, function(box, index) {
                              if (x2 >= box.x + legendPosX && x2 <= box.x + box.width + legendPosX && y2 >= box.y + legendPosY && y2 <= box.height + box.y + legendPosY) {
                                result = {
                                  clickedItem: children[index],
                                  clickedLegend: legend
                                };
                                return false;
                              }
                            });
                          }
                        });
                      });
                      return result;
                    }
                    var chart = self.chart;
                    var _createEvent = createEvent(ev, chart), x = _createEvent.x, y = _createEvent.y;
                    var clicked = findItem(x, y);
                    if (clicked && clicked.clickedLegend.clickable !== false) {
                      var clickedItem = clicked.clickedItem, clickedLegend = clicked.clickedLegend;
                      if (clickedLegend.onClick) {
                        ev.clickedItem = clickedItem;
                        clickedLegend.onClick(ev);
                      } else if (!clickedLegend.custom) {
                        var checked = clickedItem.get("checked");
                        var value = clickedItem.get("dataValue");
                        var filteredVals = clickedLegend.filteredVals, field = clickedLegend.field, selectedMode = clickedLegend.selectedMode;
                        var isSingeSelected = selectedMode === "single";
                        if (isSingeSelected) {
                          chart.filter(field, function(val) {
                            return val === value;
                          });
                        } else {
                          if (checked) {
                            filteredVals.push(value);
                          } else {
                            remove(filteredVals, value);
                          }
                          chart.filter(field, function(val) {
                            return filteredVals.indexOf(val) === -1;
                          });
                        }
                        chart.repaint();
                      }
                    }
                  });
                  this.legendCfg = {};
                  this.enable = true;
                  this.position = "top";
                  mix$1(this, cfg);
                  var _chart = this.chart;
                  this.canvasDom = _chart.get("canvas").get("el");
                  this.clear();
                }
                var _proto = LegendController2.prototype;
                _proto.addLegend = function addLegend(scale, items, filteredVals) {
                  var self = this;
                  var legendCfg = self.legendCfg;
                  var field = scale.field;
                  var fieldCfg = legendCfg[field];
                  if (fieldCfg === false) {
                    return null;
                  }
                  if (fieldCfg && fieldCfg.custom) {
                    self.addCustomLegend(field);
                  } else {
                    var position = legendCfg.position || self.position;
                    if (fieldCfg && fieldCfg.position) {
                      position = fieldCfg.position;
                    }
                    if (scale.isCategory) {
                      self._addCategoryLegend(scale, items, position, filteredVals);
                    }
                  }
                };
                _proto.addCustomLegend = function addCustomLegend(field) {
                  var self = this;
                  var legendCfg = self.legendCfg;
                  if (field && legendCfg[field]) {
                    legendCfg = legendCfg[field];
                  }
                  var position = legendCfg.position || self.position;
                  var legends = self.legends;
                  legends[position] = legends[position] || [];
                  var items = legendCfg.items;
                  if (!items) {
                    return null;
                  }
                  var container = self.container;
                  each$1(items, function(item) {
                    if (!isPlainObject(item.marker)) {
                      item.marker = {
                        symbol: item.marker || "circle",
                        fill: item.fill,
                        radius: MARKER_SIZE
                      };
                    } else {
                      item.marker.radius = item.marker.radius || MARKER_SIZE;
                    }
                    item.checked = isNil$1(item.checked) ? true : item.checked;
                    item.name = item.name || item.value;
                  });
                  var legend = new List(deepMix({}, Global.legend[position], legendCfg, {
                    maxLength: self._getMaxLength(position),
                    items,
                    parent: container
                  }));
                  legends[position].push(legend);
                };
                _proto.clear = function clear2() {
                  var legends = this.legends;
                  each$1(legends, function(legendItems) {
                    each$1(legendItems, function(legend) {
                      legend.clear();
                    });
                  });
                  this.legends = {};
                  this.unBindEvents();
                };
                _proto._isFiltered = function _isFiltered(scale, values2, value) {
                  var rst = false;
                  each$1(values2, function(val) {
                    rst = rst || scale.getText(val) === scale.getText(value);
                    if (rst) {
                      return false;
                    }
                  });
                  return rst;
                };
                _proto._getMaxLength = function _getMaxLength(position) {
                  var chart = this.chart;
                  var appendPadding = parsePadding(chart.get("appendPadding"));
                  return position === "right" || position === "left" ? chart.get("height") - (appendPadding[0] + appendPadding[2]) : chart.get("width") - (appendPadding[1] + appendPadding[3]);
                };
                _proto._addCategoryLegend = function _addCategoryLegend(scale, items, position, filteredVals) {
                  var self = this;
                  var legendCfg = self.legendCfg, legends = self.legends, container = self.container, chart = self.chart;
                  var field = scale.field;
                  legends[position] = legends[position] || [];
                  var symbol = "circle";
                  if (legendCfg[field] && legendCfg[field].marker) {
                    symbol = legendCfg[field].marker;
                  } else if (legendCfg.marker) {
                    symbol = legendCfg.marker;
                  }
                  each$1(items, function(item) {
                    if (isPlainObject(symbol)) {
                      mix$1(item.marker, symbol);
                    } else {
                      item.marker.symbol = symbol;
                    }
                    if (filteredVals) {
                      item.checked = !self._isFiltered(scale, filteredVals, item.dataValue);
                    }
                  });
                  var legendItems = chart.get("legendItems");
                  legendItems[field] = items;
                  var lastCfg = deepMix({}, Global.legend[position], legendCfg[field] || legendCfg, {
                    maxLength: self._getMaxLength(position),
                    items,
                    field,
                    filteredVals,
                    parent: container
                  });
                  if (lastCfg.showTitle) {
                    deepMix(lastCfg, {
                      title: scale.alias || scale.field
                    });
                  }
                  var legend = new List(lastCfg);
                  legends[position].push(legend);
                  return legend;
                };
                _proto._alignLegend = function _alignLegend(legend, pre, position) {
                  var self = this;
                  var _self$plotRange = self.plotRange, tl = _self$plotRange.tl, bl = _self$plotRange.bl;
                  var chart = self.chart;
                  var offsetX = legend.offsetX || 0;
                  var offsetY = legend.offsetY || 0;
                  var chartWidth = chart.get("width");
                  var chartHeight = chart.get("height");
                  var appendPadding = parsePadding(chart.get("appendPadding"));
                  var legendHeight = legend.getHeight();
                  var legendWidth = legend.getWidth();
                  var x = 0;
                  var y = 0;
                  if (position === "left" || position === "right") {
                    var verticalAlign = legend.verticalAlign || "middle";
                    var height = Math.abs(tl.y - bl.y);
                    x = position === "left" ? appendPadding[3] : chartWidth - legendWidth - appendPadding[1];
                    y = (height - legendHeight) / 2 + tl.y;
                    if (verticalAlign === "top") {
                      y = tl.y;
                    } else if (verticalAlign === "bottom") {
                      y = bl.y - legendHeight;
                    }
                    if (pre) {
                      y = pre.get("y") - legendHeight - LEGEND_GAP;
                    }
                  } else {
                    var align = legend.align || "left";
                    x = appendPadding[3];
                    if (align === "center") {
                      x = chartWidth / 2 - legendWidth / 2;
                    } else if (align === "right") {
                      x = chartWidth - (legendWidth + appendPadding[1]);
                    }
                    y = position === "top" ? appendPadding[0] + Math.abs(legend.container.getBBox().minY) : chartHeight - legendHeight;
                    if (pre) {
                      var preWidth = pre.getWidth();
                      x = pre.x + preWidth + LEGEND_GAP;
                    }
                  }
                  if (position === "bottom" && offsetY > 0) {
                    offsetY = 0;
                  }
                  if (position === "right" && offsetX > 0) {
                    offsetX = 0;
                  }
                  legend.moveTo(x + offsetX, y + offsetY);
                };
                _proto.alignLegends = function alignLegends() {
                  var self = this;
                  var legends = self.legends;
                  each$1(legends, function(legendItems, position) {
                    each$1(legendItems, function(legend, index) {
                      var pre = legendItems[index - 1];
                      self._alignLegend(legend, pre, position);
                    });
                  });
                  return self;
                };
                _proto.bindEvents = function bindEvents() {
                  var legendCfg = this.legendCfg;
                  var triggerOn = legendCfg.triggerOn || "touchstart";
                  addEventListener(this.canvasDom, triggerOn, this.handleEvent);
                };
                _proto.unBindEvents = function unBindEvents() {
                  var legendCfg = this.legendCfg;
                  var triggerOn = legendCfg.triggerOn || "touchstart";
                  removeEventListener(this.canvasDom, triggerOn, this.handleEvent);
                };
                return LegendController2;
              }();
              function init(chart) {
                var legendController = new LegendController({
                  container: chart.get("backPlot").addGroup(),
                  plotRange: chart.get("plotRange"),
                  chart
                });
                chart.set("legendController", legendController);
                chart.legend = function(field, cfg) {
                  var legendCfg = legendController.legendCfg;
                  legendController.enable = true;
                  if (isBoolean(field)) {
                    legendController.enable = field;
                    legendCfg = cfg || {};
                  } else if (isObject$1(field)) {
                    legendCfg = field;
                  } else {
                    legendCfg[field] = cfg;
                  }
                  legendController.legendCfg = legendCfg;
                  return this;
                };
              }
              function beforeGeomDraw(chart) {
                var legendController = chart.get("legendController");
                if (!legendController.enable)
                  return null;
                var legendCfg = legendController.legendCfg, container = legendController.container;
                if (legendCfg && legendCfg.custom) {
                  legendController.addCustomLegend();
                } else {
                  var legendItems = chart.getLegendItems();
                  var scales = chart.get("scales");
                  var filters = chart.get("filters");
                  each$1(legendItems, function(items, field) {
                    var scale = scales[field];
                    var values2 = scale.values;
                    var filteredVals;
                    if (filters && filters[field]) {
                      filteredVals = values2.filter(function(v) {
                        return !filters[field](v);
                      });
                    } else {
                      filteredVals = [];
                    }
                    legendController.addLegend(scale, items, filteredVals);
                  });
                }
                if (legendCfg && legendCfg.clickable !== false) {
                  legendController.bindEvents();
                }
                var legends = legendController.legends;
                var legendRange = {
                  top: 0,
                  right: 0,
                  bottom: 0,
                  left: 0
                };
                each$1(legends, function(legendItems2, position) {
                  var padding = 0;
                  each$1(legendItems2, function(legend) {
                    var width = legend.getWidth();
                    var height = legend.getHeight();
                    if (position === "top" || position === "bottom") {
                      padding = Math.max(padding, height);
                      if (legend.offsetY > 0) {
                        padding += legend.offsetY;
                      }
                    } else {
                      padding = Math.max(padding, width);
                      if (legend.offsetX > 0) {
                        padding += legend.offsetX;
                      }
                    }
                  });
                  legendRange[position] = padding + getPaddingByPos(position, chart.get("appendPadding"));
                });
                chart.set("legendRange", legendRange);
                if (Object.keys(legends).length) {
                  container.set("ariaLabel", lang.legend.prefix);
                } else {
                  container.set("ariaLabel", null);
                }
              }
              function afterGeomDraw(chart) {
                var legendController = chart.get("legendController");
                legendController.alignLegends();
              }
              function clearInner(chart) {
                var legendController = chart.get("legendController");
                legendController.clear();
                chart.set("legendRange", null);
              }
              var Legend = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                init,
                beforeGeomDraw,
                afterGeomDraw,
                clearInner,
                "default": {
                  init,
                  beforeGeomDraw,
                  afterGeomDraw,
                  clearInner
                }
              });
              var clock = (typeof performance === "undefined" ? "undefined" : _typeof2(performance)) === "object" && performance.now ? performance : Date;
              var Timeline = /* @__PURE__ */ function() {
                function Timeline2() {
                  this.anims = [];
                  this.time = null;
                  this.playing = false;
                  this.canvas = [];
                }
                var _proto = Timeline2.prototype;
                _proto.play = function play() {
                  var self = this;
                  self.time = clock.now();
                  self.playing = true;
                  function step() {
                    if (self.playing) {
                      requestAnimationFrame(step);
                      self.update();
                    }
                  }
                  requestAnimationFrame(step);
                };
                _proto.stop = function stop() {
                  this.playing = false;
                  this.time = null;
                  this.canvas = [];
                };
                _proto.pushAnim = function pushAnim(animInfo) {
                  if (!this.playing) {
                    this.play();
                  }
                  var delay = animInfo.delay, duration = animInfo.duration;
                  var startTime = this.time + delay;
                  var endTime = startTime + duration;
                  animInfo.startTime = startTime;
                  animInfo.endTime = endTime;
                  this.anims.push(animInfo);
                };
                _proto.update = function update() {
                  var currentTime = clock.now();
                  this.canvas = [];
                  if (!this.anims.length) {
                    this.stop();
                    return;
                  }
                  for (var i = 0; i < this.anims.length; i++) {
                    var propertyAnim = this.anims[i];
                    if (currentTime < propertyAnim.startTime || propertyAnim.hasEnded) {
                      continue;
                    }
                    var shape = propertyAnim.shape;
                    if (shape.get("destroyed")) {
                      this.anims.splice(i, 1);
                      i--;
                      continue;
                    }
                    var startState = propertyAnim.startState, endState = propertyAnim.endState, interpolate = propertyAnim.interpolate, duration = propertyAnim.duration;
                    if (currentTime >= propertyAnim.startTime && !propertyAnim.hasStarted) {
                      propertyAnim.hasStarted = true;
                      if (propertyAnim.onStart) {
                        propertyAnim.onStart();
                      }
                    }
                    var t = (currentTime - propertyAnim.startTime) / duration;
                    t = Math.max(0, Math.min(t, 1));
                    t = propertyAnim.easing(t);
                    if (propertyAnim.onFrame) {
                      propertyAnim.onFrame(t);
                    } else {
                      for (var key in interpolate) {
                        var diff2 = interpolate[key];
                        var value = diff2(t);
                        var newValue = void 0;
                        if (key === "points") {
                          newValue = [];
                          var aLen = Math.max(startState.points.length, endState.points.length);
                          for (var j = 0; j < aLen; j += 2) {
                            newValue.push({
                              x: value[j],
                              y: value[j + 1]
                            });
                          }
                        } else {
                          newValue = value;
                        }
                        shape._attrs.attrs[key] = newValue;
                        shape._attrs.bbox = null;
                      }
                    }
                    var canvas = shape.get("canvas");
                    if (this.canvas.indexOf(canvas) === -1) {
                      this.canvas.push(canvas);
                    }
                    if (propertyAnim.onUpdate) {
                      propertyAnim.onUpdate(t);
                    }
                    if (currentTime >= propertyAnim.endTime && !propertyAnim.hasEnded) {
                      propertyAnim.hasEnded = true;
                      if (propertyAnim.onEnd) {
                        propertyAnim.onEnd();
                      }
                    }
                    if (t === 1) {
                      this.anims.splice(i, 1);
                      i--;
                    }
                  }
                  this.canvas.map(function(c) {
                    c.draw();
                    return c;
                  });
                  this.time = clock.now();
                };
                return Timeline2;
              }();
              function linear(k) {
                return k;
              }
              function bounceIn(k) {
                return 1 - bounceOut(1 - k);
              }
              function bounceOut(k) {
                if ((k /= 1) < 1 / 2.75) {
                  return 7.5625 * k * k;
                } else if (k < 2 / 2.75) {
                  return 7.5625 * (k -= 1.5 / 2.75) * k + 0.75;
                } else if (k < 2.5 / 2.75) {
                  return 7.5625 * (k -= 2.25 / 2.75) * k + 0.9375;
                }
                return 7.5625 * (k -= 2.625 / 2.75) * k + 0.984375;
              }
              var Easing = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                linear,
                quadraticIn: function quadraticIn(k) {
                  return k * k;
                },
                quadraticOut: function quadraticOut(k) {
                  return k * (2 - k);
                },
                quadraticInOut: function quadraticInOut(k) {
                  if ((k *= 2) < 1) {
                    return 0.5 * k * k;
                  }
                  return -0.5 * (--k * (k - 2) - 1);
                },
                cubicIn: function cubicIn(k) {
                  return k * k * k;
                },
                cubicOut: function cubicOut(k) {
                  return --k * k * k + 1;
                },
                cubicInOut: function cubicInOut(k) {
                  if ((k *= 2) < 1) {
                    return 0.5 * k * k * k;
                  }
                  return 0.5 * ((k -= 2) * k * k + 2);
                },
                elasticIn: function elasticIn(k) {
                  var s;
                  var a = 0.1;
                  var p = 0.4;
                  if (k === 0)
                    return 0;
                  if (k === 1)
                    return 1;
                  if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                  } else {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                  }
                  return -(a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
                },
                elasticOut: function elasticOut(k) {
                  var s;
                  var a = 0.1;
                  var p = 0.4;
                  if (k === 0)
                    return 0;
                  if (k === 1)
                    return 1;
                  if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                  } else {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                  }
                  return a * Math.pow(2, -10 * k) * Math.sin((k - s) * (2 * Math.PI) / p) + 1;
                },
                elasticInOut: function elasticInOut(k) {
                  var s;
                  var a = 0.1;
                  var p = 0.4;
                  if (k === 0)
                    return 0;
                  if (k === 1)
                    return 1;
                  if (!a || a < 1) {
                    a = 1;
                    s = p / 4;
                  } else {
                    s = p / (2 * Math.PI) * Math.asin(1 / a);
                  }
                  if ((k *= 2) < 1) {
                    return -0.5 * (a * Math.pow(2, 10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p));
                  }
                  return a * Math.pow(2, -10 * (k -= 1)) * Math.sin((k - s) * (2 * Math.PI) / p) * 0.5 + 1;
                },
                backIn: function backIn(k) {
                  var s = 1.70158;
                  return k * k * ((s + 1) * k - s);
                },
                backOut: function backOut(k) {
                  var s = 1.70158;
                  return (k = k - 1) * k * ((s + 1) * k + s) + 1;
                },
                backInOut: function backInOut(k) {
                  var s = 1.70158 * 1.525;
                  if ((k *= 2) < 1) {
                    return 0.5 * (k * k * ((s + 1) * k - s));
                  }
                  return 0.5 * ((k -= 2) * k * ((s + 1) * k + s) + 2);
                },
                bounceIn,
                bounceOut,
                bounceInOut: function bounceInOut(k) {
                  if (k < 0.5) {
                    return bounceIn(k * 2) * 0.5;
                  }
                  return bounceOut(k * 2 - 1) * 0.5 + 0.5;
                }
              });
              function plainArray(arr) {
                var result = [];
                for (var i = 0, len = arr.length; i < len; i++) {
                  if (arr[i]) {
                    result.push(arr[i].x);
                    result.push(arr[i].y);
                  }
                }
                return result;
              }
              function interpolateNumber(a, b) {
                a = +a;
                b -= a;
                return function(t) {
                  return a + b * t;
                };
              }
              function interpolateArray(a, b) {
                var nb = b ? b.length : 0;
                var na = a ? Math.min(nb, a.length) : 0;
                var x = new Array(na);
                var c = new Array(nb);
                var i;
                for (i = 0; i < na; ++i) {
                  x[i] = interpolateNumber(a[i], b[i]);
                }
                for (; i < nb; ++i) {
                  c[i] = b[i];
                }
                return function(t) {
                  for (i = 0; i < na; ++i) {
                    c[i] = x[i](t);
                  }
                  return c;
                };
              }
              var Animator = /* @__PURE__ */ function() {
                function Animator2(shape, source, timeline2) {
                  this.hasStarted = false;
                  this.hasEnded = false;
                  this.shape = shape;
                  this.source = source;
                  this.timeline = timeline2;
                  this.animate = null;
                }
                var _proto = Animator2.prototype;
                _proto.to = function to(cfg) {
                  if (cfg === void 0) {
                    cfg = {};
                  }
                  var delay = cfg.delay || 0;
                  var attrs = cfg.attrs || {};
                  var duration = cfg.duration || 1e3;
                  var easing;
                  if (typeof cfg.easing === "function") {
                    easing = cfg.easing;
                  } else {
                    easing = Easing[cfg.easing] || linear;
                  }
                  var animInfo = {
                    shape: this.shape,
                    delay,
                    duration,
                    easing
                  };
                  var interpolate = {};
                  for (var attrName in attrs) {
                    var startValue = this.source[attrName];
                    var endValue = attrs[attrName];
                    if (attrName === "points") {
                      startValue = plainArray(startValue);
                      endValue = plainArray(endValue);
                      interpolate.points = interpolateArray(startValue, endValue);
                      this.source.points = startValue;
                      attrs.points = endValue;
                    } else if (attrName === "matrix") {
                      interpolate.matrix = interpolateArray(startValue, endValue);
                    } else {
                      interpolate[attrName] = interpolateNumber(startValue, endValue);
                    }
                  }
                  animInfo.interpolate = interpolate;
                  animInfo.startState = this.source;
                  animInfo.endState = attrs;
                  this.timeline.pushAnim(animInfo);
                  this.animate = animInfo;
                  return this;
                };
                _proto.onFrame = function onFrame(callback) {
                  if (this.animate) {
                    this.animate.onFrame = function(frame) {
                      callback(frame);
                    };
                  }
                  return this;
                };
                _proto.onStart = function onStart(callback) {
                  if (this.animate) {
                    this.animate.onStart = function() {
                      callback();
                    };
                  }
                  return this;
                };
                _proto.onUpdate = function onUpdate(callback) {
                  if (this.animate) {
                    this.animate.onUpdate = function(frame) {
                      callback(frame);
                    };
                  }
                  return this;
                };
                _proto.onEnd = function onEnd(callback) {
                  if (this.animate) {
                    this.animate.onEnd = function() {
                      callback();
                    };
                  }
                  return this;
                };
                return Animator2;
              }();
              var defaultAnimationCfg = {
                appear: {
                  duration: 450,
                  easing: "quadraticOut"
                },
                update: {
                  duration: 300,
                  easing: "quadraticOut"
                },
                enter: {
                  duration: 300,
                  easing: "quadraticOut"
                },
                leave: {
                  duration: 350,
                  easing: "quadraticIn"
                }
              };
              var Animate = {
                defaultCfg: {},
                Action: {},
                getAnimation: function getAnimation(geomType, coord, animationType) {
                  var geomAnimateCfg = this.defaultCfg[geomType];
                  if (geomAnimateCfg) {
                    var animation = geomAnimateCfg[animationType];
                    if (isFunction$1(animation)) {
                      return animation(coord);
                    }
                  }
                  return false;
                },
                getAnimateCfg: function getAnimateCfg2(geomType, animationType) {
                  var defaultCfg = defaultAnimationCfg[animationType];
                  var geomConfig = this.defaultCfg[geomType];
                  if (geomConfig && geomConfig.cfg && geomConfig.cfg[animationType]) {
                    return deepMix({}, defaultCfg, geomConfig.cfg[animationType]);
                  }
                  return defaultCfg;
                },
                registerAnimation: function registerAnimation(animationName, animationFun) {
                  var _extends2;
                  if (!this.Action) {
                    this.Action = {};
                  }
                  this.Action = _extends({}, this.Action, (_extends2 = {}, _extends2[animationName] = animationFun, _extends2));
                }
              };
              function getCoordInfo(coord) {
                var start2 = coord.start;
                var end2 = coord.end;
                return {
                  start: start2,
                  end: end2,
                  width: end2.x - start2.x,
                  height: Math.abs(end2.y - start2.y)
                };
              }
              function getScaledMatrix(shape, v, direct) {
                var scaledMatrix;
                shape.apply(v);
                var x = v[0];
                var y = v[1];
                if (direct === "x") {
                  shape.transform([["t", x, y], ["s", 0.01, 1], ["t", -x, -y]]);
                  var matrix = shape.getMatrix();
                  scaledMatrix = Matrix.transform(matrix, [["t", x, y], ["s", 100, 1], ["t", -x, -y]]);
                } else if (direct === "y") {
                  shape.transform([["t", x, y], ["s", 1, 0.01], ["t", -x, -y]]);
                  var _matrix = shape.getMatrix();
                  scaledMatrix = Matrix.transform(_matrix, [["t", x, y], ["s", 1, 100], ["t", -x, -y]]);
                } else if (direct === "xy") {
                  shape.transform([["t", x, y], ["s", 0.01, 0.01], ["t", -x, -y]]);
                  var _matrix2 = shape.getMatrix();
                  scaledMatrix = Matrix.transform(_matrix2, [["t", x, y], ["s", 100, 100], ["t", -x, -y]]);
                }
                return scaledMatrix;
              }
              function getAnimateParam(animateCfg, index, id) {
                var result = {};
                if (animateCfg.delay) {
                  result.delay = isFunction$1(animateCfg.delay) ? animateCfg.delay(index, id) : animateCfg.delay;
                }
                result.easing = animateCfg.easing;
                result.duration = animateCfg.duration;
                result.delay = animateCfg.delay;
                return result;
              }
              function doAnimation(shape, endState, animateCfg, callback) {
                var id = shape._id;
                var index = shape.get("index");
                var _getAnimateParam = getAnimateParam(animateCfg, index, id), easing = _getAnimateParam.easing, delay = _getAnimateParam.delay, duration = _getAnimateParam.duration;
                var anim = shape.animate().to({
                  attrs: endState,
                  duration,
                  delay,
                  easing
                });
                if (callback) {
                  anim.onEnd(function() {
                    callback();
                  });
                }
              }
              function fadeIn(shape, animateCfg) {
                var fillOpacity = isNil$1(shape.attr("fillOpacity")) ? 1 : shape.attr("fillOpacity");
                var strokeOpacity = isNil$1(shape.attr("strokeOpacity")) ? 1 : shape.attr("strokeOpacity");
                shape.attr("fillOpacity", 0);
                shape.attr("strokeOpacity", 0);
                var endState = {
                  fillOpacity,
                  strokeOpacity
                };
                doAnimation(shape, endState, animateCfg);
              }
              var ShapeAction = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                fadeIn
              });
              function _groupScaleIn(container, animateCfg, coord, zeroY, type) {
                var _getCoordInfo = getCoordInfo(coord), start2 = _getCoordInfo.start, end2 = _getCoordInfo.end, width = _getCoordInfo.width, height = _getCoordInfo.height;
                var x;
                var y;
                var clip = new Shape.Rect({
                  attrs: {
                    x: start2.x,
                    y: end2.y,
                    width,
                    height
                  }
                });
                if (type === "y") {
                  x = start2.x + width / 2;
                  y = zeroY.y < start2.y ? zeroY.y : start2.y;
                } else if (type === "x") {
                  x = zeroY.x > start2.x ? zeroY.x : start2.x;
                  y = start2.y + height / 2;
                } else if (type === "xy") {
                  if (coord.isPolar) {
                    x = coord.center.x;
                    y = coord.center.y;
                  } else {
                    x = (start2.x + end2.x) / 2;
                    y = (start2.y + end2.y) / 2;
                  }
                }
                var endMatrix = getScaledMatrix(clip, [x, y], type);
                clip.isClip = true;
                clip.endState = {
                  matrix: endMatrix
                };
                clip.set("canvas", container.get("canvas"));
                container.attr("clip", clip);
                var onEnd = function onEnd2() {
                  container.attr("clip", null);
                  clip.remove(true);
                };
                doAnimation(clip, clip.endState, animateCfg, onEnd);
              }
              function _shapeScale(container, animateCfg, type) {
                var shapes = container.get("children");
                var x;
                var y;
                var endMatrix;
                for (var i = 0, len = shapes.length; i < len; i++) {
                  var shape = shapes[i];
                  var box = shape.getBBox();
                  x = (box.minX + box.maxX) / 2;
                  y = (box.minY + box.maxY) / 2;
                  endMatrix = getScaledMatrix(shape, [x, y], type);
                  doAnimation(shape, {
                    matrix: endMatrix
                  }, animateCfg);
                }
              }
              function groupScaleInX(container, animateCfg, coord, zeroY) {
                _groupScaleIn(container, animateCfg, coord, zeroY, "x");
              }
              function groupScaleInY(container, animateCfg, coord, zeroY) {
                _groupScaleIn(container, animateCfg, coord, zeroY, "y");
              }
              function groupScaleInXY(container, animateCfg, coord, zeroY) {
                _groupScaleIn(container, animateCfg, coord, zeroY, "xy");
              }
              function shapesScaleInXY(container, animateCfg) {
                _shapeScale(container, animateCfg, "xy");
              }
              function groupWaveIn(container, animateCfg, coord) {
                var clip = getClip(coord);
                clip.set("canvas", container.get("canvas"));
                container.attr("clip", clip);
                var onEnd = function onEnd2() {
                  container.attr("clip", null);
                  clip.remove(true);
                };
                var endState = {};
                if (coord.isPolar) {
                  var startAngle = coord.startAngle, endAngle = coord.endAngle;
                  endState.endAngle = endAngle;
                  clip.attr("endAngle", startAngle);
                } else {
                  var start2 = coord.start, end2 = coord.end;
                  var width = Math.abs(start2.x - end2.x);
                  var height = Math.abs(start2.y - end2.y);
                  if (coord.isTransposed) {
                    clip.attr("height", 0);
                    endState.height = height;
                  } else {
                    clip.attr("width", 0);
                    endState.width = width;
                  }
                }
                doAnimation(clip, endState, animateCfg, onEnd);
              }
              var GroupAction = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                groupWaveIn,
                groupScaleInX,
                groupScaleInY,
                groupScaleInXY,
                shapesScaleInX: function shapesScaleInX(container, animateCfg) {
                  _shapeScale(container, animateCfg, "x");
                },
                shapesScaleInY: function shapesScaleInY(container, animateCfg) {
                  _shapeScale(container, animateCfg, "y");
                },
                shapesScaleInXY
              });
              var timeline;
              Element.prototype.animate = function() {
                var attrs = mix$1({}, this.get("attrs"));
                return new Animator(this, attrs, timeline);
              };
              Chart.prototype.animate = function(cfg) {
                this.set("animate", cfg);
                return this;
              };
              Animate.Action = ShapeAction;
              Animate.defaultCfg = {
                interval: {
                  enter: function enter(coord) {
                    if (coord.isPolar && coord.transposed) {
                      return function(shape) {
                        shape.set("zIndex", -1);
                        var container = shape.get("parent");
                        container.sort();
                      };
                    }
                    return fadeIn;
                  }
                },
                area: {
                  enter: function enter(coord) {
                    if (coord.isPolar)
                      return null;
                    return fadeIn;
                  }
                },
                line: {
                  enter: function enter(coord) {
                    if (coord.isPolar)
                      return null;
                    return fadeIn;
                  }
                },
                path: {
                  enter: function enter(coord) {
                    if (coord.isPolar)
                      return null;
                    return fadeIn;
                  }
                }
              };
              var GROUP_ANIMATION = {
                line: function line(coord) {
                  if (coord.isPolar) {
                    return groupScaleInXY;
                  }
                  return groupWaveIn;
                },
                area: function area(coord) {
                  if (coord.isPolar) {
                    return groupScaleInXY;
                  }
                  return groupWaveIn;
                },
                path: function path(coord) {
                  if (coord.isPolar) {
                    return groupScaleInXY;
                  }
                  return groupWaveIn;
                },
                point: function point() {
                  return shapesScaleInXY;
                },
                interval: function interval(coord) {
                  var result;
                  if (coord.isPolar) {
                    result = groupScaleInXY;
                    if (coord.transposed) {
                      result = groupWaveIn;
                    }
                  } else {
                    result = coord.transposed ? groupScaleInX : groupScaleInY;
                  }
                  return result;
                },
                schema: function schema() {
                  return groupWaveIn;
                }
              };
              function diff(fromAttrs, toAttrs) {
                var endState = {};
                for (var k in toAttrs) {
                  if (isNumber(fromAttrs[k]) && fromAttrs[k] !== toAttrs[k]) {
                    endState[k] = toAttrs[k];
                  } else if (isArray$1(fromAttrs[k]) && JSON.stringify(fromAttrs[k]) !== JSON.stringify(toAttrs[k])) {
                    endState[k] = toAttrs[k];
                  }
                }
                return endState;
              }
              function _getShapeId(geom, dataObj, geomIdx) {
                var type = geom.get("type");
                var id = "geom" + geomIdx + "-" + type;
                var xScale = geom.getXScale();
                var yScale = geom.getYScale();
                var xField = xScale.field || "x";
                var yField = yScale.field || "y";
                var yVal = dataObj[yField];
                var xVal;
                if (xScale.isIdentity) {
                  xVal = xScale.value;
                } else {
                  xVal = dataObj[xField];
                }
                if (type === "interval" || type === "schema") {
                  id += "-" + xVal;
                } else if (type === "line" || type === "area" || type === "path") {
                  id += "-" + type;
                } else {
                  id += xScale.isCategory ? "-" + xVal : "-" + xVal + "-" + yVal;
                }
                var groupScales = geom._getGroupScales();
                each$1(groupScales, function(groupScale) {
                  var field = groupScale.field;
                  if (groupScale.type !== "identity") {
                    id += "-" + dataObj[field];
                  }
                });
                return id;
              }
              function getShapes(geoms, chart, coord) {
                var shapes = [];
                each$1(geoms, function(geom, geomIdx) {
                  var geomContainer = geom.get("container");
                  var geomShapes = geomContainer.get("children");
                  var type = geom.get("type");
                  var animateCfg = isNil$1(geom.get("animateCfg")) ? _getAnimateCfgByShapeType(type, chart) : geom.get("animateCfg");
                  if (animateCfg !== false) {
                    each$1(geomShapes, function(shape, index) {
                      if (shape.get("className") === type) {
                        shape._id = _getShapeId(geom, shape.get("origin")._origin, geomIdx);
                        shape.set("coord", coord);
                        shape.set("animateCfg", animateCfg);
                        shape.set("index", index);
                        shapes.push(shape);
                      }
                    });
                  }
                  geom.set("shapes", geomShapes);
                });
                return shapes;
              }
              function cache(shapes) {
                var rst = {};
                for (var i = 0, len = shapes.length; i < len; i++) {
                  var shape = shapes[i];
                  if (!shape._id || shape.isClip)
                    continue;
                  var id = shape._id;
                  rst[id] = {
                    _id: id,
                    type: shape.get("type"),
                    attrs: mix$1({}, shape._attrs.attrs),
                    className: shape.get("className"),
                    geomType: shape.get("className"),
                    index: shape.get("index"),
                    coord: shape.get("coord"),
                    animateCfg: shape.get("animateCfg")
                  };
                }
                return rst;
              }
              function getAnimate(geomType, coord, animationType, animationName) {
                var result;
                if (isFunction$1(animationName)) {
                  result = animationName;
                } else if (isString(animationName)) {
                  result = Animate.Action[animationName];
                } else {
                  result = Animate.getAnimation(geomType, coord, animationType);
                }
                return result;
              }
              function getAnimateCfg(geomType, animationType, animateCfg) {
                if (animateCfg === false || isObject$1(animateCfg) && animateCfg[animationType] === false) {
                  return false;
                }
                var defaultCfg = Animate.getAnimateCfg(geomType, animationType);
                if (animateCfg && animateCfg[animationType]) {
                  return deepMix({}, defaultCfg, animateCfg[animationType]);
                }
                return defaultCfg;
              }
              function addAnimate(cache2, shapes, canvas) {
                var animate;
                var animateCfg;
                var updateShapes = [];
                var newShapes = [];
                each$1(shapes, function(shape) {
                  var result = cache2[shape._id];
                  if (!result) {
                    newShapes.push(shape);
                  } else {
                    shape.set("cacheShape", result);
                    updateShapes.push(shape);
                    delete cache2[shape._id];
                  }
                });
                each$1(cache2, function(deletedShape) {
                  var className = deletedShape.className, coord = deletedShape.coord, _id = deletedShape._id, attrs = deletedShape.attrs, index = deletedShape.index, type = deletedShape.type;
                  animateCfg = getAnimateCfg(className, "leave", deletedShape.animateCfg);
                  if (animateCfg === false)
                    return true;
                  animate = getAnimate(className, coord, "leave", animateCfg.animation);
                  if (isFunction$1(animate)) {
                    var tempShape = canvas.addShape(type, {
                      attrs,
                      index,
                      canvas,
                      className
                    });
                    tempShape._id = _id;
                    animate(tempShape, animateCfg, coord);
                  }
                });
                each$1(updateShapes, function(updateShape) {
                  var className = updateShape.get("className");
                  animateCfg = getAnimateCfg(className, "update", updateShape.get("animateCfg"));
                  if (animateCfg === false)
                    return true;
                  var coord = updateShape.get("coord");
                  var cacheAttrs = updateShape.get("cacheShape").attrs;
                  var endState = diff(cacheAttrs, updateShape._attrs.attrs);
                  if (Object.keys(endState).length) {
                    animate = getAnimate(className, coord, "update", animateCfg.animation);
                    if (isFunction$1(animate)) {
                      animate(updateShape, animateCfg, coord);
                    } else {
                      var startState = {};
                      each$1(endState, function(value, key) {
                        startState[key] = cacheAttrs[key];
                      });
                      updateShape.attr(startState);
                      updateShape.animate().to({
                        attrs: endState,
                        duration: animateCfg.duration,
                        easing: animateCfg.easing,
                        delay: animateCfg.delay
                      }).onEnd(function() {
                        updateShape.set("cacheShape", null);
                      });
                    }
                  }
                });
                each$1(newShapes, function(newShape) {
                  var className = newShape.get("className");
                  var coord = newShape.get("coord");
                  animateCfg = getAnimateCfg(className, "enter", newShape.get("animateCfg"));
                  if (animateCfg === false)
                    return true;
                  animate = getAnimate(className, coord, "enter", animateCfg.animation);
                  if (isFunction$1(animate)) {
                    if (className === "interval" && coord.isPolar && coord.transposed) {
                      var index = newShape.get("index");
                      var lastShape = updateShapes[index - 1];
                      animate(newShape, animateCfg, lastShape);
                    } else {
                      animate(newShape, animateCfg, coord);
                    }
                  }
                });
              }
              function _getAnimateCfgByShapeType(type, chart) {
                if (!type) {
                  return null;
                }
                var animateCfg = chart.get("animate");
                if (type.indexOf("guide-tag") > -1) {
                  type = "guide-tag";
                }
                if (isObject$1(animateCfg)) {
                  return animateCfg[type];
                }
                if (animateCfg === false) {
                  return false;
                }
                return null;
              }
              function afterCanvasInit() {
                timeline = new Timeline();
                timeline.play();
              }
              function beforeCanvasDraw(chart) {
                if (chart.get("animate") === false) {
                  return;
                }
                var isUpdate = chart.get("isUpdate");
                var canvas = chart.get("canvas");
                var coord = chart.get("coord");
                var geoms = chart.get("geoms");
                var caches = canvas.get("caches") || [];
                if (caches.length === 0) {
                  isUpdate = false;
                }
                var cacheShapes = getShapes(geoms, chart, coord);
                var _chart$get = chart.get("axisController"), frontPlot = _chart$get.frontPlot, backPlot = _chart$get.backPlot;
                var axisShapes = frontPlot.get("children").concat(backPlot.get("children"));
                var guideShapes = [];
                if (chart.get("guideController")) {
                  guideShapes = chart.get("guideController").guideShapes;
                }
                var componentShapes = [];
                axisShapes.concat(guideShapes).forEach(function(s) {
                  var className = s.get("className");
                  var animateCfg2 = _getAnimateCfgByShapeType(className, chart);
                  s.set("coord", coord);
                  s.set("animateCfg", animateCfg2);
                  componentShapes.push(s);
                  cacheShapes.push(s);
                });
                canvas.set("caches", cache(cacheShapes));
                if (isUpdate) {
                  addAnimate(caches, cacheShapes, canvas);
                } else {
                  var animateCfg;
                  var animate;
                  each$1(geoms, function(geom) {
                    var type = geom.get("type");
                    var geomCfg = isNil$1(geom.get("animateCfg")) ? _getAnimateCfgByShapeType(type, chart) : geom.get("animateCfg");
                    if (geomCfg !== false) {
                      animateCfg = getAnimateCfg(type, "appear", geomCfg);
                      animate = getAnimate(type, coord, "appear", animateCfg.animation);
                      if (isFunction$1(animate)) {
                        var shapes = geom.get("shapes");
                        each$1(shapes, function(shape) {
                          animate(shape, animateCfg, coord);
                        });
                      } else if (GROUP_ANIMATION[type]) {
                        animate = GroupAction[animateCfg.animation] || GROUP_ANIMATION[type](coord);
                        var yScale = geom.getYScale();
                        var zeroY = coord.convertPoint({
                          x: 0,
                          y: yScale.scale(geom.getYMinValue())
                        });
                        var container = geom.get("container");
                        animate && animate(container, animateCfg, coord, zeroY);
                      }
                    }
                  });
                  each$1(componentShapes, function(shape) {
                    var animateCfg2 = shape.get("animateCfg");
                    var className = shape.get("className");
                    if (animateCfg2 && animateCfg2.appear) {
                      var defaultCfg = Animate.getAnimateCfg(className, "appear");
                      var appearCfg = deepMix({}, defaultCfg, animateCfg2.appear);
                      var _animate = getAnimate(className, coord, "appear", appearCfg.animation);
                      if (isFunction$1(_animate)) {
                        _animate(shape, appearCfg, coord);
                      }
                    }
                  });
                }
              }
              function afterCanvasDestroyed() {
                timeline.stop();
              }
              var Animation = /* @__PURE__ */ Object.freeze({
                __proto__: null,
                afterCanvasInit,
                beforeCanvasDraw,
                afterCanvasDestroyed,
                "default": {
                  afterCanvasInit,
                  beforeCanvasDraw,
                  afterCanvasDestroyed
                }
              });
              Chart._Interactions = {};
              Chart.registerInteraction = function(type, constructor) {
                Chart._Interactions[type] = constructor;
              };
              Chart.getInteraction = function(type) {
                return Chart._Interactions[type];
              };
              Chart.prototype.interaction = function(type, cfg) {
                var interactions = this._interactions || {};
                if (interactions[type]) {
                  interactions[type].destroy();
                }
                var Ctor = Chart.getInteraction(type);
                var interact = new Ctor(cfg, this);
                interactions[type] = interact;
                this._interactions = interactions;
                return this;
              };
              Chart.prototype.clearInteraction = function(type) {
                var interactions = this._interactions;
                if (!interactions)
                  return;
                if (type) {
                  interactions[type] && interactions[type].destroy();
                  delete interactions[type];
                } else {
                  each$1(interactions, function(interaction, key) {
                    interaction.destroy();
                    delete interactions[key];
                  });
                }
                return this;
              };
              function isValuesEqual(values2, newValues) {
                if (values2.length !== newValues.length) {
                  return false;
                }
                var lastIndex = values2.length - 1;
                return values2[0] === newValues[0] && values2[lastIndex] === newValues[lastIndex];
              }
              var defaultRange = [0, 1];
              var Context = /* @__PURE__ */ function() {
                function Context2(chart) {
                  var _this = this;
                  _defineProperty(this, "chart", null);
                  _defineProperty(this, "values", null);
                  _defineProperty(this, "range", defaultRange);
                  _defineProperty(this, "startRange", defaultRange);
                  _defineProperty(this, "minCount", 10);
                  _defineProperty(this, "_afterinit", function() {
                    var scale = _this.getPinchScale();
                    var values2 = [].concat(scale.values);
                    _this.values = values2;
                    if (!_this.minScale) {
                      _this.minScale = _this.minCount / values2.length;
                    }
                    if (_this.range !== defaultRange) {
                      _this.updateRange(_this.range);
                      _this.updateTicks();
                    }
                  });
                  _defineProperty(this, "_afterdatachange", function() {
                    _this.updateRange(_this.range);
                  });
                  this.chart = chart;
                  this._initEvent(chart);
                }
                var _proto = Context2.prototype;
                _proto._initEvent = function _initEvent(chart) {
                  chart.on(EVENT_AFTER_INIT, this._afterinit);
                  chart.on(EVENT_AFTER_DATA_CHANGE, this._afterdatachange);
                };
                _proto.getPinchScale = function getPinchScale() {
                  var chart = this.chart;
                  var scale = chart.getXScale();
                  return scale;
                };
                _proto.getFollowScale = function getFollowScale() {
                  var chart = this.chart;
                  var scales = chart.getYScales() || [];
                  return scales[0];
                };
                _proto.start = function start2() {
                  var range = this.range;
                  var scale = this.getPinchScale();
                  var start3 = range[0], end2 = range[1];
                  this.startRange = [start3, end2];
                  this.lastTickCount = scale.tickCount;
                };
                _proto.doZoom = function doZoom(leftScale, rightScale, zoom) {
                  var range = this.startRange, minScale = this.minScale;
                  var start2 = range[0], end2 = range[1];
                  var zoomOffset = 1 - zoom;
                  var rangeLen = end2 - start2;
                  var rangeOffset = rangeLen * zoomOffset;
                  var leftOffset = rangeOffset * leftScale;
                  var rightOffset = rangeOffset * rightScale;
                  var newStart = Math.max(0, start2 - leftOffset);
                  var newEnd = Math.min(1, end2 + rightOffset);
                  var newRange = [newStart, newEnd];
                  if (newEnd - newStart < minScale) {
                    return;
                  }
                  this.updateRange(newRange);
                };
                _proto.doMove = function doMove(ratio) {
                  if (!ratio)
                    return;
                  var range = this.startRange;
                  var start2 = range[0], end2 = range[1];
                  var rangeLen = end2 - start2;
                  var rangeOffset = rangeLen * ratio;
                  var newStart = start2 - rangeOffset;
                  var newEnd = end2 - rangeOffset;
                  var newRange;
                  if (newStart < 0) {
                    newRange = [0, rangeLen];
                  } else if (newEnd > 1) {
                    newRange = [1 - rangeLen, 1];
                  } else {
                    newRange = [newStart, newEnd];
                  }
                  this.updateRange(newRange);
                };
                _proto.updateRange = function updateRange(range) {
                  var values2 = this.values;
                  var start2 = range[0], end2 = range[1];
                  start2 = Math.max(0, start2);
                  end2 = Math.min(1, end2);
                  this.range = [start2, end2];
                  var len = values2.length;
                  var valueStart = start2 * len;
                  var valueEnd = end2 * len;
                  var newValues = values2.slice(valueStart, valueEnd);
                  this.repaint(newValues);
                };
                _proto.repaint = function repaint2(newValues) {
                  var chart = this.chart;
                  var scale = this.getPinchScale();
                  var currentValues = scale.values, ticks = scale.ticks;
                  if (isValuesEqual(currentValues, newValues)) {
                    return;
                  }
                  this.updateScale(scale, {
                    ticks,
                    values: newValues
                  });
                  this.updateFollowScale(scale, newValues);
                  chart.repaint();
                };
                _proto.updateFollowScale = function updateFollowScale(pinchScale, pinchValues) {
                  var chart = this.chart;
                  var followScale = this.getFollowScale();
                  var pinchField = pinchScale.field, pinchScaleType = pinchScale.type;
                  var followField = followScale.field;
                  var values2 = [];
                  var pinchValueMap = {};
                  pinchValues.forEach(function(item) {
                    pinchValueMap[item] = true;
                  });
                  var data = chart.get("data");
                  data.forEach(function(item) {
                    if (pinchScaleType === "timeCat") {
                      var value = toTimeStamp$1(item[pinchField]);
                      if (pinchValueMap[value]) {
                        values2.push(item[followField]);
                      }
                    }
                  });
                  var _getRange = getRange(values2), min = _getRange.min, max = _getRange.max;
                  this.updateScale(followScale, {
                    min,
                    max,
                    nice: true
                  });
                };
                _proto.updateScale = function updateScale(scale, cfg) {
                  if (!scale) {
                    return;
                  }
                  scale.change(cfg);
                };
                _proto.updateTicks = function updateTicks() {
                  var chart = this.chart, values2 = this.values;
                  var scale = this.getPinchScale();
                  var currentValues = scale.values, tickCount = scale.tickCount;
                  var newTickCount = Math.round(tickCount * values2.length / currentValues.length);
                  var catTicks = getTickMethod("cat");
                  var ticks = catTicks({
                    tickCount: newTickCount,
                    values: values2
                  });
                  this.updateScale(scale, {
                    ticks,
                    values: currentValues
                  });
                  chart.repaint();
                };
                _proto.destroy = function destroy() {
                  var chart = this.chart;
                  chart.off(EVENT_AFTER_INIT, this._afterinit);
                  chart.off(EVENT_AFTER_DATA_CHANGE, this._afterdatachange);
                };
                return Context2;
              }();
              var Base = /* @__PURE__ */ function() {
                var _proto = Base2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {};
                };
                _proto.getInteractionContext = function getInteractionContext(chart) {
                  var interactionContext = chart.get("interactionContext");
                  if (interactionContext) {
                    return interactionContext;
                  }
                  interactionContext = new Context(chart);
                  chart.set("interactionContext", interactionContext);
                  return interactionContext;
                };
                function Base2(cfg, chart) {
                  var _this = this;
                  _defineProperty(this, "type", "");
                  _defineProperty(this, "startEvent", "touchstart");
                  _defineProperty(this, "processEvent", "touchmove");
                  _defineProperty(this, "endEvent", "touchend");
                  _defineProperty(this, "resetEvent", null);
                  _defineProperty(this, "context", null);
                  _defineProperty(this, "_start", function(ev) {
                    _this.preStart && _this.preStart(ev);
                    _this.start(ev);
                    _this.onStart && _this.onStart(ev);
                  });
                  _defineProperty(this, "_process", function(ev) {
                    _this.preProcess && _this.preProcess(ev);
                    _this.process(ev);
                    _this.onProcess && _this.onProcess(ev);
                  });
                  _defineProperty(this, "_end", function(ev) {
                    _this.preEnd && _this.preEnd(ev);
                    _this.end(ev);
                    _this.onEnd && _this.onEnd(ev);
                  });
                  _defineProperty(this, "_reset", function(ev) {
                    _this.preReset && _this.preReset(ev);
                    _this.reset(ev);
                    _this.onReset && _this.onReset(ev);
                  });
                  mix$1(this, this.getDefaultCfg(), cfg);
                  this.context = this.getInteractionContext(chart);
                  this.chart = chart;
                  var range = this.range;
                  if (range) {
                    this.context.range = range;
                  }
                  this._bindEvents(chart);
                }
                _proto._bindEvents = function _bindEvents(chart) {
                  var startEvent = this.startEvent, processEvent = this.processEvent, endEvent = this.endEvent, resetEvent = this.resetEvent;
                  var canvas = chart.get("canvas");
                  canvas.on(startEvent, this._start);
                  canvas.on(processEvent, this._process);
                  canvas.on(endEvent, this._end);
                  canvas.on(resetEvent, this._reset);
                };
                _proto._clearEvents = function _clearEvents() {
                  var chart = this.chart, startEvent = this.startEvent, processEvent = this.processEvent, endEvent = this.endEvent, resetEvent = this.resetEvent;
                  var canvas = chart.get("canvas");
                  canvas.off(startEvent, this._start);
                  canvas.off(processEvent, this._process);
                  canvas.off(endEvent, this._end);
                  canvas.off(resetEvent, this._start);
                };
                _proto.start = function start2() {
                };
                _proto.process = function process() {
                };
                _proto.end = function end2() {
                };
                _proto.reset = function reset() {
                };
                _proto.destroy = function destroy() {
                  this.context.destroy();
                  this._clearEvents();
                };
                return Base2;
              }();
              var Pan = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Pan2, _Base);
                function Pan2() {
                  return _Base.apply(this, arguments) || this;
                }
                var _proto = Pan2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {
                    type: "pan",
                    startEvent: "panstart",
                    processEvent: "pan",
                    endEvent: "panend"
                  };
                };
                _proto.start = function start2() {
                  var context = this.context;
                  context.start();
                };
                _proto.process = function process(e) {
                  var direction = e.direction, deltaX = e.deltaX;
                  if (direction === "up" || direction === "down") {
                    return;
                  }
                  e.preventDefault && e.preventDefault();
                  var context = this.context;
                  var chart = context.chart;
                  var coord = chart.get("coord");
                  var start2 = coord.start, end2 = coord.end;
                  var coordWidth = end2.x - start2.x;
                  var ratio = deltaX / coordWidth;
                  context.doMove(ratio);
                };
                return Pan2;
              }(Base);
              var Pinch = /* @__PURE__ */ function(_Base) {
                _inheritsLoose$3(Pinch2, _Base);
                var _proto = Pinch2.prototype;
                _proto.getDefaultCfg = function getDefaultCfg() {
                  return {
                    type: "pinch",
                    startEvent: "pinchstart",
                    processEvent: "pinch",
                    endEvent: "pinchend"
                  };
                };
                function Pinch2(cfg, chart) {
                  var _this;
                  _this = _Base.call(this, cfg, chart) || this;
                  var _assertThisInitialize = _assertThisInitialized(_this), context = _assertThisInitialize.context;
                  mix$1(context, cfg);
                  return _this;
                }
                _proto.start = function start2() {
                  var context = this.context;
                  context.start();
                };
                _proto.process = function process(e) {
                  e.preventDefault && e.preventDefault();
                  var zoom = e.zoom, center = e.center;
                  var context = this.context;
                  var chart = context.chart;
                  var coord = chart.get("coord");
                  var start2 = coord.start, end2 = coord.end;
                  var coordWidth = end2.x - start2.x;
                  var leftLen = Math.abs(center.x - start2.x);
                  var rightLen = Math.abs(end2.x - center.x);
                  var leftScale = leftLen / coordWidth;
                  var rightScale = rightLen / coordWidth;
                  context.doZoom(leftScale, rightScale, zoom);
                };
                _proto.end = function end2() {
                  var context = this.context;
                  context.updateTicks();
                };
                return Pinch2;
              }(Base);
              Chart.registerInteraction("pan", Pan);
              Chart.registerInteraction("pinch", Pinch);
              var Component = {
                Marker: Shape.Marker,
                Tooltip: Tooltip$1
              };
              Chart.plugins.register([Tooltip, Legend, Guide, Animation]);
              exports4.Animate = Animate;
              exports4.Chart = Chart;
              exports4.Component = Component;
              exports4.G = G;
              exports4.Global = Global;
              exports4.Helper = Helper;
              exports4.Shape = Shape$1;
              exports4.Util = Util;
              exports4["default"] = {
                Component,
                Global,
                Chart,
                Shape: Shape$1,
                G,
                Util,
                Helper,
                track,
                Animate
              };
              exports4.track = track;
              Object.defineProperty(exports4, "__esModule", {
                value: true
              });
            });
          },
          "./node_modules/@tuya-miniapp/rjs-adapter/esm/common/EventTarget.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              "default": () => EventTarget
            });
            function _defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            function _createClass(Constructor, protoProps, staticProps) {
              if (protoProps)
                _defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                _defineProperties(Constructor, staticProps);
              Object.defineProperty(Constructor, "prototype", { writable: false });
              return Constructor;
            }
            function _classCallCheck(instance, Constructor) {
              if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
              }
            }
            var _events = /* @__PURE__ */ new WeakMap();
            var Touch = /* @__PURE__ */ _createClass(function Touch2(touch) {
              _classCallCheck(this, Touch2);
              this.identifier = touch.identifier;
              this.force = touch.force === void 0 ? 1 : touch.force;
              this.pageX = touch.pageX || touch.x;
              this.pageY = touch.pageY || touch.y;
              this.clientX = touch.clientX || touch.x;
              this.clientY = touch.clientY || touch.y;
              this.screenX = this.pageX;
              this.screenY = this.pageY;
            });
            window.addEventListener;
            var EventTarget = /* @__PURE__ */ function() {
              function EventTarget2() {
                _classCallCheck(this, EventTarget2);
                _events.set(this, {});
              }
              _createClass(EventTarget2, [{
                key: "addEventListener",
                value: function addEventListener(type, listener, options) {
                  var events = _events.get(this);
                  if (!events) {
                    events = {};
                    _events.set(this, events);
                  }
                  if (!events[type]) {
                    events[type] = [];
                  }
                  events[type].push(listener);
                  if (!options) {
                    options = {};
                  }
                  if (options.capture) {
                  }
                  if (options.once) {
                  }
                  if (options.passive) {
                  }
                }
              }, {
                key: "removeEventListener",
                value: function removeEventListener(type, listener) {
                  var events = _events.get(this);
                  if (events) {
                    var listeners = events[type];
                    if (listeners && listeners.length > 0) {
                      for (var i = listeners.length; i--; i > 0) {
                        if (listeners[i] === listener) {
                          listeners.splice(i, 1);
                          break;
                        }
                      }
                    }
                  }
                }
              }, {
                key: "dispatchEvent",
                value: function dispatchEvent(event) {
                  if (!event) {
                    event = {};
                  }
                  if (typeof event.preventDefault !== "function") {
                    event.preventDefault = function() {
                    };
                  }
                  if (typeof event.stopPropagation !== "function") {
                    event.stopPropagation = function() {
                    };
                  }
                  var listeners = _events.get(this)[event.type];
                  if (listeners) {
                    for (var i = 0; i < listeners.length; i++) {
                      listeners[i](event);
                    }
                  }
                }
              }, {
                key: "dispatchTouchEvent",
                value: function dispatchTouchEvent(e) {
                  if (!e) {
                    e = {};
                  }
                  var target = Object.assign({}, this);
                  var event = {
                    changedTouches: e.changedTouches.map(function(touch) {
                      return new Touch(touch);
                    }),
                    touches: e.touches.map(function(touch) {
                      return new Touch(touch);
                    }),
                    targetTouches: Array.prototype.slice.call(e.touches.map(function(touch) {
                      return new Touch(touch);
                    })),
                    timeStamp: e.timeStamp,
                    target,
                    currentTarget: target,
                    type: e.type,
                    cancelBubble: false,
                    cancelable: false
                  };
                  this.dispatchEvent(event);
                }
              }]);
              return EventTarget2;
            }();
          },
          "./node_modules/@tuya-miniapp/rjs-adapter/esm/common/copyProperties.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              "default": () => copyProperties
            });
            function _createForOfIteratorHelper(o, allowArrayLike) {
              var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
              if (!it) {
                if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
                  if (it)
                    o = it;
                  var i = 0;
                  var F = function F2() {
                  };
                  return { s: F, n: function n() {
                    if (i >= o.length)
                      return { done: true };
                    return { done: false, value: o[i++] };
                  }, e: function e(_e) {
                    throw _e;
                  }, f: F };
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
              }
              var normalCompletion = true, didErr = false, err;
              return { s: function s() {
                it = it.call(o);
              }, n: function n() {
                var step = it.next();
                normalCompletion = step.done;
                return step;
              }, e: function e(_e2) {
                didErr = true;
                err = _e2;
              }, f: function f() {
                try {
                  if (!normalCompletion && it.return != null)
                    it.return();
                } finally {
                  if (didErr)
                    throw err;
                }
              } };
            }
            function _unsupportedIterableToArray(o, minLen) {
              if (!o)
                return;
              if (typeof o === "string")
                return _arrayLikeToArray(o, minLen);
              var n = Object.prototype.toString.call(o).slice(8, -1);
              if (n === "Object" && o.constructor)
                n = o.constructor.name;
              if (n === "Map" || n === "Set")
                return Array.from(o);
              if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return _arrayLikeToArray(o, minLen);
            }
            function _arrayLikeToArray(arr, len) {
              if (len == null || len > arr.length)
                len = arr.length;
              for (var i = 0, arr2 = new Array(len); i < len; i++) {
                arr2[i] = arr[i];
              }
              return arr2;
            }
            function copyProperties(target, source) {
              var _iterator = _createForOfIteratorHelper(Object.getOwnPropertyNames(source)), _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                  var key = _step.value;
                  if (key !== "constructor" && key !== "prototype" && key !== "name") {
                    var desc = Object.getOwnPropertyDescriptor(source, key);
                    desc && Object.defineProperty(target, key, desc);
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          },
          "./node_modules/@tuya-miniapp/rjs-adapter/esm/documentAdapter.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              "default": () => __WEBPACK_DEFAULT_EXPORT__
            });
            var _common_copyProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@tuya-miniapp/rjs-adapter/esm/common/copyProperties.js");
            var _common_EventTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@tuya-miniapp/rjs-adapter/esm/common/EventTarget.js");
            function __WEBPACK_DEFAULT_EXPORT__(callback) {
              Object.assign(document, {
                defaultView: {
                  getComputedStyle: getComputedStyle.bind(this)
                }
              });
              (0, _common_copyProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(document.constructor.prototype, _common_EventTarget__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
              if (callback && typeof callback === "function") {
                callback(document);
              }
            }
          },
          "./node_modules/@tuya-miniapp/rjs-adapter/esm/index.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              "documentAdapter": () => _documentAdapter__WEBPACK_IMPORTED_MODULE_1__["default"],
              "windowAdapter": () => _windowAdapter__WEBPACK_IMPORTED_MODULE_0__["default"]
            });
            var _windowAdapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@tuya-miniapp/rjs-adapter/esm/windowAdapter.js");
            var _documentAdapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@tuya-miniapp/rjs-adapter/esm/documentAdapter.js");
          },
          "./node_modules/@tuya-miniapp/rjs-adapter/esm/windowAdapter.js": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              "default": () => __WEBPACK_DEFAULT_EXPORT__
            });
            var _common_copyProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@tuya-miniapp/rjs-adapter/esm/common/copyProperties.js");
            var _common_EventTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@tuya-miniapp/rjs-adapter/esm/common/EventTarget.js");
            function __WEBPACK_DEFAULT_EXPORT__(callback) {
              Object.assign(window, {
                AudioContext: function AudioContext() {
                },
                URL: {}
              });
              (0, _common_copyProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(window.constructor.prototype, _common_EventTarget__WEBPACK_IMPORTED_MODULE_1__["default"].prototype);
              if (callback && typeof callback === "function") {
                callback(window);
              }
            }
          },
          "./src/components/g2-chart/index.rjs": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            __webpack_require__.d(__webpack_exports__, {
              "default": () => __WEBPACK_DEFAULT_EXPORT__
            });
            var _antv_f2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/@antv/f2/dist/f2.js");
            var _antv_f2__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(_antv_f2__WEBPACK_IMPORTED_MODULE_0__);
            var _tuya_miniapp_rjs_adapter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/@tuya-miniapp/rjs-adapter/esm/index.js");
            (0, _tuya_miniapp_rjs_adapter__WEBPACK_IMPORTED_MODULE_1__.documentAdapter)();
            let chart;
            const __WEBPACK_DEFAULT_EXPORT__ = Render({
              position: {
                x: 150,
                y: 150,
                vx: 2,
                vy: 2
              },
              x: -100,
              draw(data) {
                return __async(this, null, function* () {
                  if (chart) {
                    chart.clear();
                    chart.interval().position("genre*sold").color("genre");
                    chart.source(data);
                    chart.render();
                  } else {
                    let canvas = yield getCanvasById("myCanvas");
                    chart = new (_antv_f2__WEBPACK_IMPORTED_MODULE_0___default()).Chart({
                      el: canvas,
                      pixelRatio: getSystemInfo().pixelRatio || 2
                    });
                    chart.source(data);
                    chart.interval().position("genre*sold").color("genre");
                    chart.render();
                  }
                });
              }
            });
          }
        },
        (__webpack_require__) => {
          var __webpack_exec__ = (moduleId) => __webpack_require__(__webpack_require__.s = moduleId);
          var __webpack_exports__ = __webpack_exec__("./src/components/g2-chart/index.rjs");
          module22.exports = __webpack_exports__;
        }
      ]);
    });
    module2.exports = function(opts) {
      var uuid = opts.uuid;
      var hash = opts.hash;
      var __ViewRender_require = function _require2(mod) {
        return mod && mod.__esModule ? mod.default : mod;
      };
      var __ViewRender_export = __ViewRender_require(_ViewRender);
      var __ViewRender = new __ViewRender_export(opts);
      var __ViewRender_methods = ["position", "x", "draw"];
      __ViewRender_methods.forEach((method) => {
        ViewJSBridge.subscribe(hash + ":" + uuid + ":" + method, ({ args }) => {
          __ViewRender[method].apply(__ViewRender, args);
        });
      });
    };
  }
});
var index_rjs_default = require_g2_chart();

});
__appCode__['components/g2-chart/index.rjs'] = requireRenderScript("dist/tuya/components/g2-chart/index.rjs.js").default;
})(__appCode__, defineRenderScript, requireRenderScript);
//# sourceMappingURL=/view/render-script.js.map