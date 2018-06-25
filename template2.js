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
	__vue_options__.__file = "D:\\Android\\weex\\adMachineWeex\\src\\template3.vue"
	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-33245378"
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
	  "image": {
	    "width": 200,
	    "height": 100,
	    "marginLeft": 20,
	    "marginBottom": 20,
	    "position": "absolute",
	    "bottom": 20
	  },
	  "wrapper": {
	    "position": "relative",
	    "flex": 1,
	    "backgroundColor": "#ff6200"
	  },
	  "screen": {
	    "width": 300,
	    "height": 300,
	    "top": 0,
	    "bottom": 0,
	    "fliex": 1,
	    "background": "black",
	    "position": "absolute"
	  },
	  "text": {
	    "width": 750,
	    "fontSize": 40,
	    "color": "#ff6200"
	  },
	  "videoText": {
	    "backgroundColor": "rgba(0,0,0,0.5)",
	    "height": 100,
	    "lineHeight": 100,
	    "width": 750,
	    "fontSize": 32,
	    "position": "absolute",
	    "top": 0,
	    "left": 0,
	    "justifyContent": "center",
	    "alignItems": "center",
	    "zIndex": 10
	  }
	}

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	"use strict";

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

	var content222 = JSON.parse(weex.config.content);

	module.exports = {
	    data: {
	        size: 55,
	        title: content222.picCont,
	        image: "http://www.haitaismart.com/wp-content/uploads/2017/10/htlogo.png"
	    }

	    /*export default {+
	        data: function () {
	            return {
	                size: 55,
	            }
	        }
	    }*/

	};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: ["wrapper"]
	  }, [_c('SuperVideoView', {
	    staticClass: ["screen"]
	  }), _c('div', {
	    staticClass: ["videoText"]
	  }, [_c('text', {
	    staticClass: ["text"]
	  }, [_vm._v("模板3" + _vm._s(_vm.title))])]), _c('image', {
	    staticClass: ["image"],
	    attrs: {
	      "src": _vm.image
	    }
	  })], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ })
/******/ ]);