require('../../app.js');
require('./../../runtime.js');
require('./../../ray-vendors.js');
require('./../../ray-styles.js');
"use strict";
(wx["webpackChunkblended"] = wx["webpackChunkblended"] || []).push([["pages/index/index"],{

/***/ "./src/pages/index/index.entry.js":
/*!****************************************!*\
  !*** ./src/pages/index/index.entry.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ray-core/runtime */ "./node_modules/@ray-core/runtime/esm/index.js");
/* harmony import */ var _index_tsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.tsx */ "./src/pages/index/index.tsx");


Page((0,_ray_core_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_index_tsx__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/index/index'));

/***/ }),

/***/ "./src/pages/index/index.tsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@ray-js/ray */ "./node_modules/@ray-js/ray/index.js");
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




var _PageAnonymous = function () {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.View, null, "current page: index", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: function onClick() {
      return _Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.router.push('/index');
    }
  }, "to page home of sub package"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.Button, {
    onClick: function onClick() {
      return (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.navigateTo)({
        url: '/pages/index/index'
      });
    }
  }, "to page index of main package"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.Input, {
    placeholder: "\u8BF7\u8F93\u5165...",
    style: {
      backgroundColor: '#eee'
    },
    onInput: function onInput(e) {
      return console.log(e.value);
    }
  }));
};
var _PageAnonymous2 = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {
  var $instance = new _Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.PageInstance();
  (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.usePageEvent)('onLoad', function () {
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.addInstance($instance);
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.emit({
      name: 'onLoad',
      uniqueId: $instance.uniqueId
    });
  });
  (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.usePageEvent)('onUnload', function () {
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.emit({
      name: 'onUnload',
      uniqueId: $instance.uniqueId
    });
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.removeInstance($instance);
  });
  (0,_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.usePageEvent)('onShow', function () {
    _Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.lifecycle.emit({
      name: 'onShow',
      uniqueId: $instance.uniqueId
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Users_xsh_workspace_godzilla_ray_demos_examples_blended_pure_ray_ray_project_node_modules_ray_js_ray__WEBPACK_IMPORTED_MODULE_1__.PageInstanceContext.Provider, {
    value: {
      $instance: $instance
    }
  }, function (c) {
    return c.prototype && typeof c.prototype.render === 'function';
  }(_PageAnonymous) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PageAnonymous, _extends({
    ref: ref
  }, props)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_PageAnonymous, props));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_PageAnonymous2);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["ray-vendors","ray-styles"], () => (__webpack_exec__("./src/pages/index/index.entry.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ module.exports = __webpack_exports__["default"];
/******/ }
]);