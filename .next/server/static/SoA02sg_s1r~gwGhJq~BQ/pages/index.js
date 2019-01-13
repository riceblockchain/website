module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icon-dc12b9a13aada751e702e63e3140538d.svg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("markdown-to-jsx");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("front-matter");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./01-20-12.md": 10,
	"./01-21-12.md": 11
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 9;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "---\ntitle: january 20, 2012\ndescription: this is the file description\n---\n\nThe content of this file goes here.\n\n-[ ] here is a component\n\n** here is rich media **"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "---\ntitle: january 21, 2012\ndescription: this is the file description\n---\n\nThe content of this file goes here.\n\n-[ ] here is a component\n\n** here is rich media **"

/***/ }),
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(1);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(3);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(6);

// CONCATENATED MODULE: ./components/head.js



var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var head_Head = function Head(props) {
  return external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("meta", {
    charSet: "UTF-8"
  }), external_react_default.a.createElement("title", null, props.title || ''), external_react_default.a.createElement("meta", {
    name: "description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    sizes: "192x192",
    href: "/static/touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "apple-touch-icon",
    href: "/static/touch-icon.png"
  }), external_react_default.a.createElement("link", {
    rel: "mask-icon",
    href: "/static/favicon-mask.svg",
    color: "#49B882"
  }), external_react_default.a.createElement("link", {
    rel: "icon",
    href: "/static/favicon.ico"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: props.url || defaultOGURL
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: props.title || ''
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: props.description || defaultDescription
  }), external_react_default.a.createElement("meta", {
    name: "twitter:site",
    content: props.url || defaultOGURL
  }), external_react_default.a.createElement("meta", {
    name: "twitter:card",
    content: "summary_large_image"
  }), external_react_default.a.createElement("meta", {
    name: "twitter:image",
    content: props.ogImage || defaultOGImage
  }), external_react_default.a.createElement("meta", {
    property: "og:image",
    content: props.ogImage || defaultOGImage
  }), external_react_default.a.createElement("meta", {
    property: "og:image:width",
    content: "1200"
  }), external_react_default.a.createElement("meta", {
    property: "og:image:height",
    content: "630"
  }));
};

/* harmony default export */ var head = (head_Head);
// CONCATENATED MODULE: ./components/nav.js



var links = [{
  href: 'https://github.com/segmentio/create-next-app',
  label: 'Github'
}].map(function (link) {
  link.key = "nav-link-".concat(link.href, "-").concat(link.label);
  return link;
});

var nav_Nav = function Nav() {
  return external_react_default.a.createElement("nav", {
    className: "jsx-2055897931"
  }, external_react_default.a.createElement("ul", {
    className: "jsx-2055897931"
  }, external_react_default.a.createElement("li", {
    className: "jsx-2055897931"
  }, external_react_default.a.createElement(link_default.a, {
    prefetch: true,
    href: "/"
  }, external_react_default.a.createElement("a", {
    className: "jsx-2055897931"
  }, "Home"))), external_react_default.a.createElement("ul", {
    className: "jsx-2055897931"
  }, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return external_react_default.a.createElement("li", {
      key: key,
      className: "jsx-2055897931"
    }, external_react_default.a.createElement(link_default.a, {
      href: href
    }, external_react_default.a.createElement("a", {
      className: "jsx-2055897931"
    }, label)));
  }))), external_react_default.a.createElement(style_default.a, {
    styleId: "2055897931",
    css: ["body{margin:0;font-family:-apple-system,BlinkMacSystemFont,Avenir Next,Avenir, Helvetica,sans-serif;}", "nav.jsx-2055897931{text-align:center;}", "ul.jsx-2055897931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}", "nav.jsx-2055897931>ul.jsx-2055897931{padding:4px 16px;}", "li.jsx-2055897931{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;padding:6px 8px;}", "a.jsx-2055897931{color:#067df7;-webkit-text-decoration:none;text-decoration:none;font-size:13px;}"]
  }));
};

/* harmony default export */ var nav = (nav_Nav);
// EXTERNAL MODULE: external "markdown-to-jsx"
var external_markdown_to_jsx_ = __webpack_require__(7);

// EXTERNAL MODULE: ./static/images/icon.svg
var icon = __webpack_require__(4);
var icon_default = /*#__PURE__*/__webpack_require__.n(icon);

// CONCATENATED MODULE: ./pages/index.js


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var fm = __webpack_require__(8);



var importAllContent = function importAllContent(r) {
  return r.keys().map(r);
};

var markdownContent = importAllContent(__webpack_require__(9)).sort();

var pages_Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Home)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      posts: markdownContent.map(function (file) {
        return fm(file);
      })
    });

    return _this;
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "jsx-3258385893"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3258385893" + " " + "center"
      }, external_react_default.a.createElement("img", {
        src: icon_default.a,
        className: "jsx-3258385893" + " " + "logo"
      }), external_react_default.a.createElement("span", {
        className: "jsx-3258385893" + " " + "title"
      }, "Rice Blockchain"), external_react_default.a.createElement("span", {
        className: "jsx-3258385893" + " " + "description"
      }, "Our mission is to demystify the world of blockchains & cryptocurrencies.")), external_react_default.a.createElement("div", {
        style: {
          margin: "1em"
        },
        className: "jsx-3258385893" + " " + "hero"
      }, external_react_default.a.createElement("div", {
        className: "jsx-3258385893" + " " + "hero"
      })), external_react_default.a.createElement(style_default.a, {
        styleId: "3258385893",
        css: ["@import url(\"https://use.typekit.net/ben1ckd.css\");", "html.jsx-3258385893,body.jsx-3258385893{width:100%;height:100%;overflow:hidden !important;}", ".center.jsx-3258385893{width:50%;margin-left:25%;margin-right:25%;margin-top:8%;text-align:center;}", "@media screen and (max-width:800px){.logo.jsx-3258385893{width:50% !important;margin:1em;}.center.jsx-3258385893{width:75%;margin:10% 12.5%;}}", ".logo.jsx-3258385893{width:30%;}", ".title.jsx-3258385893{text-transform:uppercase;width:100%;padding-top:7%;line-height:1.15;font-size:2rem;font-family:'Rhode';font-weight:600;}", ".description.jsx-3258385893{font-family:axia,sans-serif;font-size:1.6rem;font-weight:300;width:75%;margin:0.5em 12.5%;}", ".title.jsx-3258385893,.description.jsx-3258385893{display:block;}", ".row.jsx-3258385893{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}", ".card.jsx-3258385893{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}", ".card.jsx-3258385893:hover{border-color:#067df7;}", ".card.jsx-3258385893 h3.jsx-3258385893{margin:0;color:#067df7;font-size:18px;}", ".card.jsx-3258385893 p.jsx-3258385893{margin:0;padding:12px 0 0;font-size:13px;color:#333;}"]
      }));
    }
  }]);

  return Home;
}(external_react_default.a.Component);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Home);

/***/ })
/******/ ]);