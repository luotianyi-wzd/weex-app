// { "framework": "Vue"} 

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*global Vue*/

/* weex initialized here, please do not move this line */
var router = __webpack_require__(1);
var App = __webpack_require__(18);
/* eslint-disable no-new */
new Vue(Vue.util.extend({ el: '#root', router: router }, App));
router.push('/');

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueRouter = __webpack_require__(2);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _HelloWorld = __webpack_require__(3);

var _HelloWorld2 = _interopRequireDefault(_HelloWorld);

var _About = __webpack_require__(10);

var _About2 = _interopRequireDefault(_About);

var _Topic = __webpack_require__(14);

var _Topic2 = _interopRequireDefault(_Topic);

var _Detail = __webpack_require__(26);

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

Vue.use(_vueRouter2.default); /*global Vue*/


module.exports = new _vueRouter2.default({
  routes: [{ path: '/', redirect: '/topic' }, {
    path: '/home',
    name: 'HelloWorld',
    component: _HelloWorld2.default
  }, {
    path: '/about',
    name: 'About',
    component: _About2.default
  }, {
    path: '/topic',
    name: 'Topic',
    component: _Topic2.default
  }, {
    path: '/detail',
    name: 'Detail',
    component: _Detail2.default
  }]
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open 'G:\\weex\\weex-app\\node_modules\\vue-router\\dist\\vue-router.esm.js'");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(9)
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
__vue_options__.__file = "G:\\weex\\weex-app\\src\\components\\HelloWorld.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
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


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _test = __webpack_require__(5);

var _test2 = _interopRequireDefault(_test);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	components: {
		Test: _test2.default
	}
}; //
//
//
//
//
//
//

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(6)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(8)
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
__vue_options__.__file = "G:\\weex\\weex-app\\src\\components\\test.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-555c2582"
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


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  "input": {
    "fontSize": "60",
    "height": "80",
    "width": "750"
  },
  "button": {
    "fontSize": 36,
    "width": 200,
    "color": "#41B883",
    "textAlign": "center",
    "paddingTop": 10,
    "paddingBottom": 10,
    "borderWidth": 2,
    "borderStyle": "solid",
    "marginRight": 20,
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "list": {
    "paddingBottom": "100"
  },
  "panel": {
    "width": "600",
    "height": "250",
    "marginLeft": "75",
    "marginTop": "35",
    "marginBottom": "35",
    "flexDirection": "column",
    "justifyContent": "center",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "loadingDisplay": {
    "width": "750",
    "paddingTop": "120",
    "paddingBottom": "120"
  },
  "indicator-text": {
    "textAlign": "center"
  },
  "text": {
    "fontSize": "50",
    "textAlign": "center",
    "color": "#41B883"
  },
  "loading": {
    "font": "30",
    "textAlign": "center"
  },
  "refresh": {
    "textAlign": "center"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
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

var modal = weex.requireModule('modal');
exports.default = {
	name: 'test',
	data: function data() {
		return {
			isLoading: false,
			isRefresh: false,
			lists: [1, 2, 3, 4, 5]
		};
	},

	methods: {
		loadMore: function loadMore(event) {
			var _this = this;

			modal.toast({ message: 'loading...', duration: 1 });
			this.isLoading = true;
			setTimeout(function () {
				var length = _this.lists.length;
				for (var i = length; i < length + 4; ++i) {
					_this.lists.push(i + 1);
				}
				_this.isLoading = false;
			}, 1800);
		},
		onrefresh: function onrefresh(event) {
			var _this2 = this;

			this.isRefresh = true;
			setTimeout(function () {
				_this2.isRefresh = false;
			}, 1000);
			this.lists = [1, 2, 3, 4, 5];
		}
	}
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('list', {
    staticClass: ["list"],
    attrs: {
      "loadmoreoffset": "20"
    },
    on: {
      "loadmore": _vm.loadMore
    }
  }, [_c('refresh', {
    attrs: {
      "display": _vm.isRefresh ? 'show' : 'hide'
    },
    on: {
      "refresh": _vm.onrefresh
    }
  }, [_c('text', {
    staticClass: ["refresh"]
  }, [_vm._v("refresh...")])]), _vm._l((_vm.lists), function(num) {
    return _c('cell', {
      staticClass: ["cell"],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('div', {
      staticClass: ["panel"]
    }, [_c('text', {
      staticClass: ["text"]
    }, [_vm._v(_vm._s(num))])])])
  }), (_vm.isLoading) ? _c('cell', {
    staticClass: ["item-loading"],
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('div', {
    staticClass: ["loadingDisplay"],
    style: _vm.loadingDisplay
  }, [_c('text', {
    staticClass: ["indicator-text"]
  }, [_vm._v("Loading ...")])])]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["text"]
  }, [_c('Test')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(12)

/* template */
var __vue_template__ = __webpack_require__(13)
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
__vue_options__.__file = "G:\\weex\\weex-app\\src\\components\\About.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-728ee9a6"
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


/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = {
  "image": {
    "width": "700",
    "height": "700"
  },
  "slider": {
    "marginTop": "25",
    "marginLeft": "25",
    "width": "700",
    "height": "700",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#41B883"
  },
  "frame": {
    "width": "700",
    "height": "700",
    "position": "relative"
  },
  "btn_list": {
    "display": "flex",
    "flexWrap": "nowrap",
    "flexDirection": "row"
  },
  "btn": {
    "width": "100",
    "height": "50",
    "backgroundColor": "#985846",
    "borderRadius": "10",
    "marginTop": "10",
    "marginLeft": "20"
  },
  "btn1": {
    "backgroundColor": "#254685"
  },
  "btn_text": {
    "lineHeight": "50",
    "textAlign": "center",
    "color": "#ffffff"
  },
  "wrapper": {
    "position": "relative",
    "top": 0,
    "left": 0,
    "flexDirection": "column",
    "justifyContent": "center"
  },
  "box": {
    "width": "100",
    "height": "100",
    "backgroundColor": "#696854",
    "top": "10"
  },
  "group": {
    "flexDirection": "row",
    "justifyContent": "center",
    "marginBottom": "40",
    "alignItems": "center"
  },
  "label": {
    "fontSize": "40",
    "color": "#888888"
  },
  "title": {
    "fontSize": "80",
    "color": "#41B883"
  },
  "button": {
    "fontSize": "36",
    "width": "280",
    "color": "#41B883",
    "textAlign": "center",
    "paddingTop": "25",
    "paddingBottom": "25",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "rgb(162,217,192)",
    "backgroundColor": "rgba(162,217,192,0.2)"
  },
  "about": {
    "paddingBottom": "100"
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
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

var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
var picker = weex.requireModule('picker');
exports.default = {
	name: 'about',
	data: function data() {
		return {
			isLoading: false,
			isRefresh: false,
			imageList: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }],
			value: ''
		};
	},

	methods: {
		hadnleZoom: function hadnleZoom() {
			var box = this.$refs.box;
			animation.transition(box, {
				styles: {
					width: '200px',
					height: '300px'
				},
				duration: 800,
				timingFunction: 'ease',
				delay: 0
			}, function () {
				modal.toast({ message: '变换完成' });
			});
		},
		handleRotate: function handleRotate() {
			var box = this.$refs.box;
			animation.transition(box, {
				styles: {
					backgroundColor: '#ff000',
					transform: 'rotate(45)'
				},
				duration: 800,
				timingFunction: 'ease-in-out',
				delay: 0
			}, function () {
				modal.toast({ message: '变换完成' });
			});
		},
		pickTime: function pickTime() {
			var _this = this;

			picker.pickTime({
				value: this.value
			}, function (event) {
				if (event.result === 'success') {
					_this.value = event.data;
				}
			});
		}
	}
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["about"]
  }, [_c('slider', {
    staticClass: ["slider"],
    attrs: {
      "autoPlay": "true",
      "interval": "10000",
      "infinite": "true",
      "scrollable": "true"
    }
  }, _vm._l((_vm.imageList), function(item) {
    return _c('div', {
      staticClass: ["frame"]
    }, [_c('image', {
      staticClass: ["image"],
      attrs: {
        "src": item.src
      }
    })])
  })), _c('div', {
    staticClass: ["btn_list"]
  }, [_c('div', {
    staticClass: ["btn", "btn1"],
    on: {
      "click": _vm.hadnleZoom
    }
  }, [_c('text', {
    staticClass: ["btn_text"]
  }, [_vm._v("放大")])]), _c('div', {
    staticClass: ["btn", "btn2"]
  }, [_c('text', {
    staticClass: ["btn_text"],
    on: {
      "click": _vm.handleRotate
    }
  }, [_vm._v("旋转")])])]), _c('div', {
    ref: "box",
    staticClass: ["box"]
  }), _c('div', {
    staticClass: ["box"]
  }), _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["label"]
  }, [_vm._v("Time: ")]), _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.value))])]), _c('div', {
    staticClass: ["group"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.pickTime
    }
  }, [_vm._v("Pick Time")])])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(15)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(17)
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
__vue_options__.__file = "G:\\weex\\weex-app\\src\\components\\Topic.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2db893cf"
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


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {
  "topic": {
    "paddingBottom": "100"
  },
  "wrapper": {
    "justifyContent": "center",
    "flexDirection": "column"
  },
  "button": {
    "width": "450",
    "borderWidth": "2",
    "borderStyle": "solid",
    "fontSize": "30",
    "marginLeft": "150",
    "borderColor": "#dddddd",
    "textAlign": "center",
    "paddingTop": "25",
    "paddingBottom": "25"
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var animation = weex.requireModule('animation');
var picker = weex.requireModule('picker');
exports.default = {
	name: 'about',
	data: function data() {
		return {
			isLoading: false,
			isRefresh: false,
			imageList: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }],
			value: ''
		};
	},

	methods: {
		jump: function jump(event) {
			var url = this.$getConfig().bundleUrl;
			modal.toast({ message: url, duration: 5 });
			navigator.push({
				url: 'http://www.baidu.com',
				animated: 'true'
			}, function (event) {
				modal.toast({ message: 'jump', duration: 1 });
			});
		}
	}
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["wrapper"]
  }, [_c('text', {
    staticClass: ["button"],
    on: {
      "click": _vm.jump
    }
  }, [_vm._v("Jump")])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(19)
)

/* script */
__vue_exports__ = __webpack_require__(20)

/* template */
var __vue_template__ = __webpack_require__(25)
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
__vue_options__.__file = "G:\\weex\\weex-app\\src\\index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1a4d8e3c"
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


/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _TabBar = __webpack_require__(21);

var _TabBar2 = _interopRequireDefault(_TabBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
  name: 'App',
  components: {
    tabBar: _TabBar2.default
  },
  data: function data() {
    return {
      logo: 'https://gw.alicdn.com/tfs/TB1yopEdgoQMeJjy1XaXXcSsFXa-640-302.png'
    };
  },

  methods: {
    onTabTo: function onTabTo(data) {
      // modal.toast({message: data, duration: 1})
      this.$router.push('/' + data.data.type);
    }
  }
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(23)

/* template */
var __vue_template__ = __webpack_require__(24)
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
__vue_options__.__file = "G:\\weex\\weex-app\\src\\components\\TabBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9f279d64"
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


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "position": "fixed",
    "bottom": 0,
    "width": "750",
    "height": "100",
    "display": "flex",
    "justifyContent": "space-around",
    "flexDirection": "row",
    "flexWrap": "nowrap",
    "borderTopWidth": "1",
    "borderTopColor": "#d9d9d9",
    "backgroundColor": "#fafafa"
  },
  "item": {
    "flex": 1
  },
  "bar-txt": {
    "color": "#666666",
    "textAlign": "center",
    "lineHeight": "90"
  },
  "bar-active": {
    "color": "#b4282d"
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
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

var modal = weex.requireModule('modal');
exports.default = {
	name: 'tab-bar',
	data: function data() {
		return {
			currentTab: 'home'
		};
	},

	methods: {
		isActive: function isActive(type) {
			return this.currentTab == type ? 'bar-active' : '';
		},
		tabTo: function tabTo(type) {
			if (this.currentTab == type) return;
			this.currentTab = type;
			this.$emit('tabTo', {
				status: 'tabTo',
				data: {
					type: type
				}
			});
		}
	}
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.tabTo('home')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('home')]
  }, [_vm._v("首页")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.tabTo('about')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('about')]
  }, [_vm._v("关于")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.tabTo('topic')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('topic')]
  }, [_vm._v("专题")])]), _c('div', {
    staticClass: ["item"],
    on: {
      "click": function($event) {
        _vm.tabTo('my')
      }
    }
  }, [_c('text', {
    staticClass: ["bar-txt"],
    class: [this.isActive('my')]
  }, [_vm._v("我的")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('router-view'), _c('tab-bar', {
    on: {
      "tabTo": _vm.onTabTo
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(28)

/* template */
var __vue_template__ = __webpack_require__(29)
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
__vue_options__.__file = "G:\\weex\\weex-app\\src\\components\\Detail.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-7fef67e1"
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


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "topic": {
    "paddingBottom": "100"
  },
  "wrapper": {
    "justifyContent": "center",
    "flexDirection": "column"
  },
  "button": {
    "width": "450",
    "borderWidth": "2",
    "borderStyle": "solid",
    "fontSize": "30",
    "marginLeft": "150",
    "borderColor": "#dddddd",
    "textAlign": "center",
    "paddingTop": "25",
    "paddingBottom": "25"
  }
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
//
//
//
//
//
//

var modal = weex.requireModule('modal');
var navigator = weex.requireModule('navigator');
var animation = weex.requireModule('animation');
var picker = weex.requireModule('picker');
exports.default = {
	name: 'detail',
	data: function data() {
		return {
			isLoading: false,
			isRefresh: false,
			imageList: [{ src: 'https://gd2.alicdn.com/bao/uploaded/i2/T14H1LFwBcXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd1.alicdn.com/bao/uploaded/i1/TB1PXJCJFXXXXciXFXXXXXXXXXX_!!0-item_pic.jpg' }, { src: 'https://gd3.alicdn.com/bao/uploaded/i3/TB1x6hYLXXXXXazXVXXXXXXXXXX_!!0-item_pic.jpg' }],
			value: ''
		};
	},

	methods: {
		jump: function jump(event) {
			navigator.push({
				url: '',
				animated: 'true'
			}, function (event) {
				modal.toast({ message: 'jump', duration: 1 });
			});
		}
	}
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["wrapper"]
  }, [_vm._v("\n\t\tDetail\n")])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);