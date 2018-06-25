// { "framework": "Vue" }
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = []

	/* styles */
	__vue_styles__.push(__webpack_require__(1)
	)

	/* script */
	__vue_exports__ = __webpack_require__(2)

	/* template */
	var __vue_template__ = __webpack_require__(3)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}
	__vue_options__.__file = "D:\\Android\\weex\\adMachineWeex\\src\\smartShelf\\near.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-18c95d4e"
	__vue_options__.style = __vue_options__.style || {}
	__vue_styles__.forEach(function (module) {
	  for (var name in module) {
	    __vue_options__.style[name] = module[name]
	  }
	})
	if (typeof __register_static_styles__ === "function") {
	  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
	}

	module.exports = __vue_exports__
	module.exports.el = 'true'
	new Vue(module.exports)


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = {
	  "left": {
	    "width": 200,
	    "backgroundColor": "#db9019",
	    "paddingTop": 10,
	    "paddingRight": 10,
	    "paddingBottom": 10,
	    "paddingLeft": 10
	  },
	  "intro_title": {
	    "color": "#000000",
	    "fontSize": 20,
	    "fontWeight": "100",
	    "fontStyle": "italic"
	  },
	  "intro": {
	    "color": "#008000",
	    "fontSize": 15
	  },
	  "wrapper": {
	    "flexDirection": "row",
	    "flexWrap": "nowrap",
	    "backgroundColor": "#000000"
	  },
	  "center": {
	    "width": 550,
	    "flexDirection": "column",
	    "backgroundColor": "#ff6e97"
	  },
	  "center_content": {
	    "width": 320
	  },
	  "center_title": {
	    "color": "#000000",
	    "fontSize": 20,
	    "fontWeight": "100"
	  },
	  "screen": {
	    "width": 550,
	    "height": 310,
	    "backgroundColor": "#000000"
	  },
	  "right": {
	    "width": 230,
	    "flexDirection": "column",
	    "backgroundColor": "#5ed5d1"
	  },
	  "icon": {
	    "width": 230,
	    "height": 120
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	"use strict";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_vm._m(0), _c('div', {
	    staticClass: ["center"]
	  }, [_c('div', {
	    staticClass: ["screen"]
	  }, [_c('SuperVideoView', {
	    staticClass: ["screen"]
	  })], 1), _vm._m(1)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["left"]
	  }, [_c('text', {
	    staticClass: ["intro_title"]
	  }, [_vm._v("This is the video template")]), _c('text', {
	    staticClass: ["intro"]
	  }, [_vm._v("The template can dynamic load, your can definition a Complex layout by this function")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["center_content"]
	  }, [_c('text', {
	    staticClass: ["center_title"]
	  }, [_vm._v("This is the people coming's video")])])
	}]}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);