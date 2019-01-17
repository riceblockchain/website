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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/blurbs.js":
/*!******************************!*\
  !*** ./components/blurbs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hedron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hedron */ "hedron");
/* harmony import */ var hedron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hedron__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/achal/Dropbox/2019/blockchain/website/components/blurbs.js";




var content = [{
  "icon": "../static/icons/calendar.svg",
  "title": "ON-CAMPUS EVENTS",
  "content": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Interested in learning more about crypto? View our calendar to see the events we\u2019re planning.  Current Rice students can join our club using ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "this form."))
}, {
  "icon": "../static/icons/triangle.svg",
  "title": "COMPANIES & PROJECTS",
  "content": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "Seeking engineers with smart contract and full-stack development experience for private or open-source work? Reach out ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "mailto:blockchain@rice.edu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "via email"), " with inquiries.")
}, {
  "icon": "../static/icons/book.svg",
  "title": "VIEW COURSE CONTENT",
  "content": react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "We\u2019re teaching a non-technical primer on blockchains and crypto this semester. Interested in following along? View the class content ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://medium.com/rice-blockchain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "on Medium."))
}];

var Blurbs = function Blurbs() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1929793604" + " " + "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(hedron__WEBPACK_IMPORTED_MODULE_2___default.a.Provider, {
    breakpoints: {
      mobile: "-500",
      tablet: "501-1100",
      wide: "+1100"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(hedron__WEBPACK_IMPORTED_MODULE_2___default.a.Bounds, {
    style: {
      "display": "flex",
      "align-items": "center",
      "justify-content": "space-between"
    },
    direction: "vertical",
    wide: {
      direction: "horizontal"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, content.map(function (_ref) {
    var icon = _ref.icon,
        title = _ref.title,
        content = _ref.content;
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(hedron__WEBPACK_IMPORTED_MODULE_2___default.a.Box, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1929793604" + " " + "blurb",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: icon,
      className: "jsx-1929793604",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1929793604" + " " + "text",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1929793604" + " " + "header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1929793604" + " " + "description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, content))));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1929793604",
    css: ".blurbbox.jsx-1929793604{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-pack:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;-webkit-align-content:center !important;-ms-flex-line-pack:center !important;align-content:center !important;-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.blurb.jsx-1929793604{text-align:left;margin:0.2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;max-width:350px;}.header.jsx-1929793604{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;font-weight:semibold;font-family:'Rhode';margin-bottom:1em;margin-top:0.5em;}.text.jsx-1929793604{margin-left:0.8em;}.description.jsx-1929793604{font-size:1em;line-height:1.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL2NvbXBvbmVudHMvYmx1cmJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCUyxBQUl5QyxBQU9SLEFBUUEsQUFRRSxBQUlKLGNBQ0ksRUFwQkwsRUFnQmpCLFdBZmlCLEdBb0JqQixxQ0FieUIscUJBQ0QsYUFQQyxPQVFILFFBakJnQixVQWtCakIsaUJBQ3JCLGlDQVRvQixnQkFDcEIsbUVBVm9DLDZHQUNGLHlJQUNsQyIsImZpbGUiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE5L2Jsb2NrY2hhaW4vd2Vic2l0ZS9jb21wb25lbnRzL2JsdXJicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmlkIGZyb20gXCJoZWRyb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgY29udGVudCA9IFtcbiAgICB7IFwiaWNvblwiOiBcIi4uL3N0YXRpYy9pY29ucy9jYWxlbmRhci5zdmdcIiwgXCJ0aXRsZVwiIDogXCJPTi1DQU1QVVMgRVZFTlRTXCIsIFwiY29udGVudFwiIDogPD5JbnRlcmVzdGVkIGluIGxlYXJuaW5nIG1vcmUgYWJvdXQgY3J5cHRvPyBWaWV3IG91ciBjYWxlbmRhciB0byBzZWUgdGhlIGV2ZW50cyB3ZeKAmXJlIHBsYW5uaW5nLiAgQ3VycmVudCBSaWNlIHN0dWRlbnRzIGNhbiBqb2luIG91ciBjbHViIHVzaW5nIDxMaW5rIGhyZWY9XCIjXCI+dGhpcyBmb3JtLjwvTGluaz48Lz59LFxuICAgIHsgXCJpY29uXCI6IFwiLi4vc3RhdGljL2ljb25zL3RyaWFuZ2xlLnN2Z1wiLCBcInRpdGxlXCIgOiBcIkNPTVBBTklFUyAmIFBST0pFQ1RTXCIsIFwiY29udGVudFwiIDogPD5TZWVraW5nIGVuZ2luZWVycyB3aXRoIHNtYXJ0IGNvbnRyYWN0IGFuZCBmdWxsLXN0YWNrIGRldmVsb3BtZW50IGV4cGVyaWVuY2UgZm9yIHByaXZhdGUgb3Igb3Blbi1zb3VyY2Ugd29yaz8gUmVhY2ggb3V0IDxMaW5rIGhyZWY9XCJtYWlsdG86YmxvY2tjaGFpbkByaWNlLmVkdVwiPnZpYSBlbWFpbDwvTGluaz4gd2l0aCBpbnF1aXJpZXMuPC8+fSxcbiAgICB7IFwiaWNvblwiOiBcIi4uL3N0YXRpYy9pY29ucy9ib29rLnN2Z1wiLCBcInRpdGxlXCIgOiBcIlZJRVcgQ09VUlNFIENPTlRFTlRcIiwgXCJjb250ZW50XCIgOiA8Pldl4oCZcmUgdGVhY2hpbmcgYSBub24tdGVjaG5pY2FsIHByaW1lciBvbiBibG9ja2NoYWlucyBhbmQgY3J5cHRvIHRoaXMgc2VtZXN0ZXIuIEludGVyZXN0ZWQgaW4gZm9sbG93aW5nIGFsb25nPyBWaWV3IHRoZSBjbGFzcyBjb250ZW50IDxMaW5rIGhyZWY9XCJodHRwczovL21lZGl1bS5jb20vcmljZS1ibG9ja2NoYWluXCI+b24gTWVkaXVtLjwvTGluaz48Lz59XG5dXG5cbmNvbnN0IEJsdXJicyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8R3JpZC5Qcm92aWRlciBicmVha3BvaW50cz17eyBtb2JpbGU6IFwiLTUwMFwiLCB0YWJsZXQ6IFwiNTAxLTExMDBcIiwgd2lkZTogXCIrMTEwMFwiIH19PlxuICAgICAgICAgICAgPEdyaWQuQm91bmRzIHN0eWxlPXt7XCJkaXNwbGF5XCI6IFwiZmxleFwiLCBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsIFwianVzdGlmeS1jb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwifX0gZGlyZWN0aW9uPVwidmVydGljYWxcIiB3aWRlPXt7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfX0+XG4gICAgICAgICAgICAgICAgeyBjb250ZW50Lm1hcCgoeyBpY29uLCB0aXRsZSwgY29udGVudCB9KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVyYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntjb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Cb3g+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvR3JpZC5Cb3VuZHM+XG4gICAgICAgIDwvR3JpZC5Qcm92aWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcblxuICAgICAgICAgICAgLmJsdXJiYm94IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibHVyYiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuMmVtO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHNlbWlib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmhvZGUnO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEJsdXJicyJdfQ== */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/components/blurbs.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Blurbs);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_icons_medium_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/icons/medium.svg */ "./static/icons/medium.svg");
/* harmony import */ var _static_icons_medium_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_icons_medium_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/icons/twitter.svg */ "./static/icons/twitter.svg");
/* harmony import */ var _static_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/Users/achal/Dropbox/2019/blockchain/website/components/footer.js";






var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1691411365" + " " + "footer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://medium.com/rice-blockchain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _static_icons_medium_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    className: "jsx-1691411365" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://twitter.com/riceblockchain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: _static_icons_twitter_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    className: "jsx-1691411365" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1691411365",
    css: ".footer.jsx-1691411365{width:10%;margin-left:45%;margin-right:45%;margin-top:1em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin-bottom:2em;}.icon.jsx-1691411365{margin-left:8px;margin-right:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL2NvbXBvbmVudHMvZm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVhLEFBRytCLEFBYU0sVUFaQSxNQWFDLFVBWkEsT0FhckIsVUFabUIsZUFDRiwwRUFDUSwyRUFDRiw2RkFDRSw0RUFDUSwySEFDWCxrQkFDdEIiLCJmaWxlIjoiL1VzZXJzL2FjaGFsL0Ryb3Bib3gvMjAxOS9ibG9ja2NoYWluL3dlYnNpdGUvY29tcG9uZW50cy9mb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcblxuaW1wb3J0IG1lZGl1bSBmcm9tICcuLi9zdGF0aWMvaWNvbnMvbWVkaXVtLnN2Zyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuLi9zdGF0aWMvaWNvbnMvdHdpdHRlci5zdmcnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9yaWNlLWJsb2NrY2hhaW5cIj48aW1nIHNyYz17bWVkaXVtfSBjbGFzc05hbWU9XCJpY29uXCIgLz48L0xpbms+XG4gICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL3JpY2VibG9ja2NoYWluXCI+PGltZyBzcmM9e3R3aXR0ZXJ9IGNsYXNzTmFtZT1cImljb25cIiAvPjwvTGluaz5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMCU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0NSU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNDUlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZmxvdzogcm93IG5vd3JhcDtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyIl19 */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/components/footer.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/signup.js":
/*!******************************!*\
  !*** ./components/signup.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/achal/Dropbox/2019/blockchain/website/components/signup.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var Signup =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Signup, _React$Component);

  function Signup(props) {
    var _this;

    _classCallCheck(this, Signup);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Signup).call(this, props));
    _this.state = {
      value: 'blockchain@rice.edu',
      disabled: false
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(Signup, [{
    key: "handleClick",
    value: function handleClick() {
      this.setState({
        value: ''
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      this.setState({
        value: event.target.value
      });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(event) {
      if (this.state.value == "blockchain@rice.edu") {
        event.preventDefault();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "mc_embed_signup",
        className: "jsx-613533154",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
        onSubmit: this.handleSubmit,
        action: "https://rice.us20.list-manage.com/subscribe/post?u=5293ceb5a05336e4f57faadf8&id=ddb11bd6ef",
        method: "post",
        id: "mc-embedded-subscribe-form",
        name: "mc-embedded-subscribe-form",
        target: "_blank",
        noValidate: true,
        className: "jsx-613533154" + " " + "validate",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "mc_embed_signup_scroll",
        className: "jsx-613533154",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        className: "jsx-613533154",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "We just launched our mailing list!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "email",
        value: this.state.value,
        onChange: this.handleChange,
        onClick: this.handleClick,
        name: "EMAIL",
        id: "mce-EMAIL",
        className: "jsx-613533154" + " " + "required email",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "mce-responses",
        className: "jsx-613533154" + " " + "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          "visibility": "hidden"
        },
        id: "mce-error-response",
        className: "jsx-613533154" + " " + "response",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          "visibility": "hidden"
        },
        id: "mce-success-response",
        className: "jsx-613533154" + " " + "response",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        "aria-hidden": "true",
        className: "jsx-613533154" + " " + "align",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "text",
        style: {
          "display": "none"
        },
        defaultValue: true,
        name: "b_5293ceb5a05336e4f57faadf8_ddb11bd6ef",
        tabIndex: "-1",
        className: "jsx-613533154",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-613533154" + " " + "clear",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "submit",
        value: "SUBSCRIBE",
        name: "submit",
        id: "mc-embedded-subscribe",
        className: "jsx-613533154" + " " + "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "613533154",
        css: "h3.jsx-613533154{font-weight:300;font-size:1em;margin-bottom:7px;margin-left:3px;-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;text-align:right;}#mc_embed_signup_scroll.jsx-613533154{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap;float:right;top:5%;right:0%;z-index:2;}@media screen and (max-width:1000px){#mc_embed_signup_scroll.jsx-613533154{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;top:10%;right:0%;left:0%;margin-bottom:2em;}h3.jsx-613533154{text-align:center;}}.button.jsx-613533154{height:30px;background:#FFFFFF;box-shadow:0px 0px 10px rgba(0,0,0,0.05);border-radius:6px;border:2px solid #EDEDED;font-family:'Axia',sans-serif;font-size:0.8em;margin-top:3px;padding-top:3px;margin-left:3px;color:#a8a8a8;-webkit-transition:color 0.1s ease-in-out,background 0.25s ease-in-out;transition:color 0.1s ease-in-out,background 0.25s ease-in-out;}.button.jsx-613533154:hover{color:#4F26F7;outline:none;}.button.jsx-613533154:active{background:#e9e9e9;outline:none;border:2px #e9e9e9 solid;}.button.jsx-613533154:focus{outline:none;}input.email.jsx-613533154{background:#FFFFFF;border:2px solid #EDEDED;box-sizing:border-box;border-radius:7px;padding:15px 10px;height:35px;font-family:'Axia',sans-serif;font-size:1em;font-weight:300;color:#c8c8c8;-webkit-transition:border 0.2s ease-in-out;transition:border 0.2s ease-in-out;}input.email.jsx-613533154:focus{color:#a8a8a8;outline:none;border:2px solid #D8D8D8;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL2NvbXBvbmVudHMvc2lnbnVwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDb0IsQUFHK0IsQUFTRSxBQVlPLEFBU0wsQUFLUixBQWdCRSxBQUtLLEFBTU4sQUFJTSxBQWNMLFlBNUNLLENBMkJyQixDQVhlLEFBNkJBLEVBaEZDLEVBU0QsQUFxQmIsQ0EwQmEsQUFVWSxRQWQzQixBQTZCMkIsR0FoRlAsQ0FtQzBCLENBcUJuQixZQVVILElBakVOLElBZ0ZsQixLQXhCQSxPQXZEa0IsRUFpRUUsTUEvQkEsWUFnQ0EsTUEvQk8sRUE1QkEsT0FXSixHQWlEVCxZQUNtQixDQWhDQSxrQkFuQ2QsV0FvRUgsQ0FoQ0UsS0FuQ2xCLFFBb0VrQixHQWhDRCxhQWlDRCxFQWhDRSxZQWlDbUIsQ0FoRWhCLEdBV1QsQUFxQk0sUUFwQkwsUUFxQkcsQ0FwQkosUUFDVSxLQW9CNEMsYUFuQmhFLHVCQWRZLFFBZ0VkLElBL0RTLE9BQ0UsU0FDQyxVQUNaLDREQStCQSIsImZpbGUiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE5L2Jsb2NrY2hhaW4vd2Vic2l0ZS9jb21wb25lbnRzL3NpZ251cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIFNpZ251cCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdmFsdWU6ICdibG9ja2NoYWluQHJpY2UuZWR1JywgZGlzYWJsZWQ6IGZhbHNlIH07XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNsaWNrID0gdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlQ2xpY2soKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbHVlOiAnJyB9KTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZShldmVudCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlIH0pO1xuICB9XG5cbiAgaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuc3RhdGUudmFsdWUgPT0gXCJibG9ja2NoYWluQHJpY2UuZWR1XCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibWNfZW1iZWRfc2lnbnVwXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gYWN0aW9uPVwiaHR0cHM6Ly9yaWNlLnVzMjAubGlzdC1tYW5hZ2UuY29tL3N1YnNjcmliZS9wb3N0P3U9NTI5M2NlYjVhMDUzMzZlNGY1N2ZhYWRmOCZhbXA7aWQ9ZGRiMTFiZDZlZlwiIG1ldGhvZD1cInBvc3RcIiBpZD1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZS1mb3JtXCIgbmFtZT1cIm1jLWVtYmVkZGVkLXN1YnNjcmliZS1mb3JtXCIgY2xhc3NOYW1lPVwidmFsaWRhdGVcIiB0YXJnZXQ9XCJfYmxhbmtcIiBub1ZhbGlkYXRlPlxuICAgICAgICAgIDxkaXYgaWQ9XCJtY19lbWJlZF9zaWdudXBfc2Nyb2xsXCI+XG4gICAgICAgICAgICA8aDM+V2UganVzdCBsYXVuY2hlZCBvdXIgbWFpbGluZyBsaXN0ITwvaDM+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImVtYWlsXCIgdmFsdWU9e3RoaXMuc3RhdGUudmFsdWV9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gbmFtZT1cIkVNQUlMXCIgY2xhc3NOYW1lPVwicmVxdWlyZWQgZW1haWxcIiBpZD1cIm1jZS1FTUFJTFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGlkPVwibWNlLXJlc3BvbnNlc1wiIGNsYXNzTmFtZT1cImNsZWFyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzcG9uc2VcIiBzdHlsZT17eyBcInZpc2liaWxpdHlcIjogXCJoaWRkZW5cIiB9fSBpZD1cIm1jZS1lcnJvci1yZXNwb25zZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3BvbnNlXCIgc3R5bGU9e3sgXCJ2aXNpYmlsaXR5XCI6IFwiaGlkZGVuXCIgfX0gaWQ9XCJtY2Utc3VjY2Vzcy1yZXNwb25zZVwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsaWduXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHN0eWxlPXt7IFwiZGlzcGxheVwiOiBcIm5vbmVcIiB9fSBkZWZhdWx0VmFsdWUgbmFtZT1cImJfNTI5M2NlYjVhMDUzMzZlNGY1N2ZhYWRmOF9kZGIxMWJkNmVmXCIgdGFiSW5kZXg9XCItMVwiIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU1VCU0NSSUJFXCIgbmFtZT1cInN1Ym1pdFwiIGlkPVwibWMtZW1iZWRkZWQtc3Vic2NyaWJlXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICBoMyB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA3cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAjbWNfZW1iZWRfc2lnbnVwX3Njcm9sbCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgd3JhcDtcbiAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICB0b3A6IDUlO1xuICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgICAjbWNfZW1iZWRfc2lnbnVwX3Njcm9sbCB7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB0b3A6IDEwJTtcbiAgICAgICAgICAgICAgICByaWdodDogMCU7XG4gICAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRURFREVEO1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0F4aWEnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzcHg7XG4gICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAzcHg7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYThhOGE4O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjFzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kIDAuMjVzIGVhc2UtaW4tb3V0O1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5idXR0b246aG92ZXIge1xuICAgICAgICAgICAgICBjb2xvcjogIzRGMjZGNztcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJ1dHRvbjphY3RpdmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTllOWU5O1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCAjZTllOWU5IHNvbGlkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYnV0dG9uOmZvY3VzIHtcbiAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQuZW1haWwge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRURFREVEO1xuICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XG4gICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0F4aWEnLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICNjOGM4Yzg7XG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IGJvcmRlciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpbnB1dC5lbWFpbDpmb2N1cyB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjYThhOGE4O1xuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjRDhEOEQ4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgYH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaWdudXAiXX0= */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/components/signup.js */",
        __self: this
      }));
    }
  }]);

  return Signup;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Signup);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_signup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/signup */ "./components/signup.js");
/* harmony import */ var _components_blurbs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/blurbs */ "./components/blurbs.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/icon.svg */ "./static/images/icon.svg");
/* harmony import */ var _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_icons_hr_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/icons/hr.svg */ "./static/icons/hr.svg");
/* harmony import */ var _static_icons_hr_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_static_icons_hr_svg__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/achal/Dropbox/2019/blockchain/website/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var Home =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, _getPrototypeOf(Home).apply(this, arguments));
  }

  _createClass(Home, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2437713358" + " " + "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2437713358" + " " + "signup",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_signup__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2437713358" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "jsx-2437713358" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2437713358" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Rice Blockchain"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2437713358" + " " + "subtitle",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, "Our mission is to demystify the world of blockchains & cryptocurrencies."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_icons_hr_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
        className: "jsx-2437713358" + " " + "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2437713358" + " " + "row-wide",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_blurbs__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2437713358",
        css: "@import url(\"https://use.typekit.net/ben1ckd.css\");html,body{width:100%;height:100%;font-family:'Axia',sans-serif;}.container{margin:1%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:column nowrap;-ms-flex-flow:column nowrap;flex-flow:column nowrap;}a{-webkit-text-decoration:none;text-decoration:none;color:rgba(3,190,194,0.9);-webkit-transition:border 0.15s ease-in-out;transition:border 0.15s ease-in-out;background:rgba(3,190,194,0.1);}a:hover{border-bottom:1px solid rgba(3,190,194,0.9);-webkit-text-decoration:none;text-decoration:none;}.signup{font-family:'Axia',sans-serif !important;position:fixed;right:8%;top:8%;}.line{margin-top:5%;}.center{width:50%;margin-left:25%;margin-right:25%;margin-top:7%;text-align:center;}@media screen and (max-width:1000px){.signup{position:relative;left:0%;right:0%;margin-top:5%;}}@media screen and (max-width:800px){.center{width:75%;margin:10% 12.5%;}.title{font-size:1.6em !important;}.subtitle{font-size:1.3em !important;width:90% !important;margin:5% 5% !important;}.logo{width:30% !important;margin:1em;}}.logo{width:22%;}.title{text-transform:uppercase;width:100%;padding-top:4%;line-height:1.15;font-size:2rem;font-family:'Rhode';font-weight:600;}.subtitle{font-family:axia,sans-serif;font-size:1.6rem;font-weight:300;width:75%;margin:0.5em 12.5%;}.title,.subtitle{display:block;}.card{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card:hover{border-color:#067df7;}.card h3{margin:0;color:#067df7;font-size:18px;}.card p{margin:0;padding:12px 0 0;font-size:13px;color:#333;}.row-wide{margin-left:7.5%;margin-right:7.5%;margin-top:3%;max-width:85%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBCMkIsQUFHNkQsQUFHckMsQUFNRCxBQU1XLEFBTzBCLEFBS0wsQUFPNUIsQUFJSixBQVNVLEFBU1IsQUFLaUIsQUFJQSxBQU1OLEFBT2IsQUFJZSxBQVVJLEFBU2YsQUFJUyxBQVNGLEFBSVosQUFNQSxBQU9RLFNBWkgsQUFNRyxDQW5ISixBQTZCRyxBQWtCRyxBQXNCckIsQ0EzRWMsR0ErQmQsQUFtRUEsR0E4Qm9CLENBcEZSLEdBd0JHLEFBMkNmLEVBOUdpQyxBQXFHbkIsQUFjRyxFQXJDSixDQTNDTSxBQVNOLEFBNkVJLENBcEVmLEFBSUEsQUFJdUIsQ0EyQk4sSUFwQmpCLEdBdkJnQixBQXlEQSxBQTBCRixDQWpEQyxFQXFDakIsR0E3RmlCLEFBbUdKLEVBdEZHLENBbEJPLENBdUVMLEdBM0JVLENBaEIxQixBQW1GYyxDQXRIZSxDQXFFWixBQXVCSSxDQW9CdkIsQ0ExSEEsR0F1QlcsQ0FhUyxJQXFEUixFQXdDWixFQXpHUyxHQXdEUSxHQVVJLENBakVyQixBQXFDRSxHQXpCRixDQTFCc0MsT0FzRWhCLENBNUVJLE1Bc0YxQixJQXpFQSxPQXFGZ0IsRUFyQkUsWUFzQlMsSUFyQjNCLHFCQXNCQSxnQkE1RkQsWUFQQyxtQkFPQSIsImZpbGUiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE5L2Jsb2NrY2hhaW4vd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBTaWdudXAgZnJvbSBcIi4uL2NvbXBvbmVudHMvc2lnbnVwXCI7XG5pbXBvcnQgQmx1cmJzIGZyb20gXCIuLi9jb21wb25lbnRzL2JsdXJic1wiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIjtcbmltcG9ydCBpY29uIGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvaWNvbi5zdmcnO1xuaW1wb3J0IGxpbmUgZnJvbSAnLi4vc3RhdGljL2ljb25zL2hyLnN2Zyc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lnbnVwXCI+XG4gICAgICAgICAgPFNpZ251cCAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2ljb259IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5SaWNlIEJsb2NrY2hhaW48L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3VidGl0bGVcIj5PdXIgbWlzc2lvbiBpcyB0byBkZW15c3RpZnkgdGhlIHdvcmxkIG9mIGJsb2NrY2hhaW5zICYgY3J5cHRvY3VycmVuY2llcy48L3NwYW4+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsaW5lXCIgc3JjPXtsaW5lfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3ctd2lkZVwiPlxuICAgICAgICAgIDxCbHVyYnMgLz5cbiAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG5cbiAgICAgICAgICBAaW1wb3J0IHVybChcImh0dHBzOi8vdXNlLnR5cGVraXQubmV0L2JlbjFja2QuY3NzXCIpO1xuXG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXhpYScsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDElO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZmxvdzogY29sdW1uIG5vd3JhcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDMsIDE5MCwgMTk0LCAwLjkpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYm9yZGVyIDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgzLCAxOTAsIDE5NCwgMC4xKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMywgMTkwLCAxOTQsIDAuOSk7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNpZ251cCB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0F4aWEnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICByaWdodDogOCU7XG4gICAgICAgICAgICB0b3A6IDglO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5saW5lIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDclO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLnNpZ251cCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgbGVmdDogMCU7XG4gICAgICAgICAgICAgIHJpZ2h0OiAwJTtcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgICAgICBtYXJnaW46IDEwJSAxMi41JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjZlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEuM2VtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWFyZ2luOiA1JSA1JSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubG9nbyB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgbWFyZ2luOiAxZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubG9nbyB7IFxuICAgICAgICAgICAgd2lkdGg6IDIyJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQlO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1Job2RlJztcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBheGlhLCBzYW5zLXNlcmlmO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgICAgIG1hcmdpbjogMC41ZW0gMTIuNSU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucm93LXdpZGUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDcuNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDcuNSU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogODUlO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./static/icons/hr.svg":
/*!*****************************!*\
  !*** ./static/icons/hr.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjc2IiBoZWlnaHQ9IjEiIHZpZXdCb3g9IjAgMCAyNzYgMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI3NiIgaGVpZ2h0PSIxIiBmaWxsPSIjRTFFMUUxIi8+Cjwvc3ZnPgo="

/***/ }),

/***/ "./static/icons/medium.svg":
/*!*********************************!*\
  !*** ./static/icons/medium.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjYiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAyNiAyNSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik0yNi4wMDAxIDBIMC45NzA3MDNWMjVIMjYuMDAwMVYwWiIgZmlsbD0iIzFGMUYxRiIvPgo8cGF0aCBkPSJNNi45NDM2IDguMzYxQzYuOTY0NDkgOC4xNTQ4NCA2Ljg4NTc4IDcuOTUxMDcgNi43MzE2NSA3LjgxMjMxTDUuMTYxNjYgNS45MjMyMlY1LjY0MTA0SDEwLjAzNjVMMTMuODA0NSAxMy44OTVMMTcuMTE3MiA1LjY0MTA0SDIxLjc2NDNWNS45MjMyMkwyMC40MjIgNy4yMDg3NEMyMC4zMDYzIDcuMjk2ODUgMjAuMjQ4OSA3LjQ0MTY2IDIwLjI3MjggNy41ODQ5OVYxNy4wMzA0QzIwLjI0ODkgMTcuMTczNyAyMC4zMDYzIDE3LjMxODYgMjAuNDIyIDE3LjQwNjdMMjEuNzMyOSAxOC42OTIyVjE4Ljk3NDRIMTUuMTM5VjE4LjY5MjJMMTYuNDk3IDE3LjM3NTNDMTYuNjMwNSAxNy4yNDIxIDE2LjYzMDUgMTcuMjAyOSAxNi42MzA1IDE2Ljk5OTFWOS4zNjQzNEwxMi44NTQ2IDE4Ljk0M0gxMi4zNDQ0TDcuOTQ4MzkgOS4zNjQzNFYxNS43ODQxQzcuOTExNzQgMTYuMDU0IDguMDAxNDkgMTYuMzI1NyA4LjE5MTc0IDE2LjUyMDlMOS45NTc5OSAxOC42NjA4VjE4Ljk0M0g0Ljk0OTcxVjE4LjY2MDhMNi43MTU5NSAxNi41MjA5QzYuOTA0ODIgMTYuMzI1NCA2Ljk4OTMzIDE2LjA1MTkgNi45NDM2IDE1Ljc4NDFWOC4zNjFaIiBmaWxsPSJ3aGl0ZSIvPgo8L2c+CjxkZWZzPgo8Y2xpcFBhdGggaWQ9ImNsaXAwIj4KPHJlY3Qgd2lkdGg9IjI1LjAyOTQiIGhlaWdodD0iMjUiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjk3MDcwMykiLz4KPC9jbGlwUGF0aD4KPC9kZWZzPgo8L3N2Zz4K"

/***/ }),

/***/ "./static/icons/twitter.svg":
/*!**********************************!*\
  !*** ./static/icons/twitter.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyOCAyMyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwKSI+CjxwYXRoIGQ9Ik04LjgxODkxIDIyLjkwNjVDMTkuMjg5NSAyMi45MDY1IDI1LjAxNSAxNC4xOTc0IDI1LjAxNSA2LjY0NTQ2QzI1LjAxNSA2LjM5ODA5IDI1LjAxIDYuMTUxODQgMjQuOTk5IDUuOTA2N0MyNi4xMTA0IDUuMDk5OTcgMjcuMDc2NSA0LjA5MzIzIDI3LjgzODQgMi45NDcyQzI2LjgxODUgMy40MDIzOCAyNS43MjA5IDMuNzA4ODEgMjQuNTY5NSAzLjg0Njk4QzI1Ljc0NDggMy4xMzk0MiAyNi42NDcgMi4wMjAxMyAyNy4wNzI3IDAuNjg1Nzk4QzI1Ljk3MjggMS4zNDA0MyAyNC43NTQ4IDEuODE2MjMgMjMuNDU4IDIuMDczMDZDMjIuNDE5MiAwLjk2MjEzOCAyMC45NDA0IDAuMjY3Mzk1IDE5LjMwMjggMC4yNjczOTVDMTYuMTU5MyAwLjI2NzM5NSAxMy42MSAyLjgyNjg3IDEzLjYxIDUuOTgxOTJDMTMuNjEgNi40MzA0MSAxMy42NiA2Ljg2NjY0IDEzLjc1NzYgNy4yODUwNUM5LjAyNjQ3IDcuMDQ2MDQgNC44MzEzNiA0Ljc3MTgyIDIuMDI0MDcgMS4zMTM2OUMxLjUzNTIgMi4xNTgzMSAxLjI1MzMxIDMuMTM5NDIgMS4yNTMzMSA0LjE4NjI3QzEuMjUzMzEgNi4xNjkxMSAyLjI1ODI0IDcuOTE5NjIgMy43ODY0NiA4Ljk0MzY0QzIuODUyNTUgOC45MTQ2NyAxLjk3NTI0IDguNjU3MjcgMS4yMDgzNiA4LjIyODg0QzEuMjA3NTIgOC4yNTI4MiAxLjIwNzUyIDguMjc2MTkgMS4yMDc1MiA4LjMwMTgyQzEuMjA3NTIgMTEuMDY5NyAzLjE2OTY4IDEzLjM4MDYgNS43NzQ0MiAxMy45MDQ0QzUuMjk2MDkgMTQuMDM1MyA0Ljc5Mjc5IDE0LjEwNTUgNC4yNzMzOSAxNC4xMDU1QzMuOTA3MTUgMTQuMTA1NSAzLjU1MDM0IDE0LjA2OTMgMy4yMDM1MiAxNC4wMDI0QzMuOTI4MjQgMTYuMjczMyA2LjAyOTY4IDE3LjkyNTcgOC41MjEyMiAxNy45NzJDNi41NzI5MyAxOS41MDUyIDQuMTE4NTcgMjAuNDE4NCAxLjQ1MTEzIDIwLjQxODRDMC45OTIyMTUgMjAuNDE4NCAwLjUzODg1NCAyMC4zOTIyIDAuMDkzMjYxNyAyMC4zMzkyQzIuNjEyNTUgMjEuOTYwNSA1LjYwNDA2IDIyLjkwNjUgOC44MTkyIDIyLjkwNjUiIGZpbGw9IiMxRjFGMUYiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMCI+CjxyZWN0IHdpZHRoPSIyNy45MzE0IiBoZWlnaHQ9IjIyLjgyNjEiIGZpbGw9IndoaXRlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDAuMTczOTIpIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg=="

/***/ }),

/***/ "./static/images/icon.svg":
/*!********************************!*\
  !*** ./static/images/icon.svg ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/icon-dc12b9a13aada751e702e63e3140538d.svg";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "hedron":
/*!*************************!*\
  !*** external "hedron" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("hedron");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map