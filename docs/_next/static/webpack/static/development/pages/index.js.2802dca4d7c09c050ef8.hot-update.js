webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/head */ "./components/head.js");
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var markdown_to_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! markdown-to-jsx */ "./node_modules/markdown-to-jsx/dist/esm.js");
/* harmony import */ var _static_images_logo_wordmark_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/logo-wordmark.svg */ "./static/images/logo-wordmark.svg");
/* harmony import */ var _static_images_logo_wordmark_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_logo_wordmark_svg__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/Users/achal/Dropbox/2019/blockchain/website/pages/index.js";


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







var fm = __webpack_require__(/*! front-matter */ "./node_modules/front-matter/index.js");



var importAllContent = function importAllContent(r) {
  return r.keys().map(r);
};

var markdownContent = importAllContent(__webpack_require__("./posts sync \\.md$")).sort();

var Home =
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
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4016101384",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4016101384" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_images_logo_wordmark_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "jsx-4016101384" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "1em"
        },
        className: "jsx-4016101384" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-4016101384" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "4016101384",
        css: "html.jsx-4016101384,body.jsx-4016101384{width:100%;height:100%;overflow:hidden !important;}.center.jsx-4016101384{width:50%;margin-left:25%;margin-right:25%;margin-top:10%;text-align:center;}@media screen and (max-width:1000px){.logo.jsx-4016101384{width:60% !important;}}.logo.jsx-4016101384{width:40%;}.title.jsx-4016101384{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-4016101384,.description.jsx-4016101384{text-align:center;}.row.jsx-4016101384{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-4016101384{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-4016101384:hover{border-color:#067df7;}.card.jsx-4016101384 h3.jsx-4016101384{margin:0;color:#067df7;font-size:18px;}.card.jsx-4016101384 p.jsx-4016101384{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFJd0IsQUFNRCxBQVNhLEFBS2IsQUFJRCxBQVNTLEFBSUYsQUFRTyxBQVNGLEFBSVosQUFNQSxTQXZDRSxBQWtDRyxBQU1HLENBMURELEFBY2xCLENBcEJjLEtBcUNVLEVBSnhCLEVBUm1CLENBVmpCLEFBdUNGLEVBckQ2QixBQTRDZixBQWNHLEdBcERFLEFBMERGLFNBbkJDLEVBcEJDLENBWUosQUFzQmYsR0FNYSxFQTFESSxPQU5qQixDQTZDdUIsQ0FvQnZCLEVBeENpQixJQWxCRyxXQW1CcEIsT0FsQkEseUJBc0NnQixXQVRLLEdBVU0seUJBQzNCLHlDQVYrQiwySEFDL0IiLCJmaWxlIjoiL1VzZXJzL2FjaGFsL0Ryb3Bib3gvMjAxOS9ibG9ja2NoYWluL3dlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJtYXJrZG93bi10by1qc3hcIjtcbnZhciBmbSA9IHJlcXVpcmUoXCJmcm9udC1tYXR0ZXJcIik7XG5cbmltcG9ydCBpY29uIGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvbG9nby13b3JkbWFyay5zdmcnO1xuXG5jb25zdCBpbXBvcnRBbGxDb250ZW50ID0gciA9PiByLmtleXMoKS5tYXAocik7XG5jb25zdCBtYXJrZG93bkNvbnRlbnQgPSBpbXBvcnRBbGxDb250ZW50KHJlcXVpcmUuY29udGV4dCgnLi4vcG9zdHMvJywgZmFsc2UsIC9cXC5tZCQvKSkuc29ydCgpO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcG9zdHM6IG1hcmtkb3duQ29udGVudC5tYXAoZmlsZSA9PiBmbShmaWxlKSksXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbnRlclwiPlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwibG9nb1wiIHNyYz17aWNvbn0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiIHN0eWxlPXt7IG1hcmdpbjogXCIxZW1cIiB9fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgICB7LyogeyB0aGlzLnN0YXRlLnBvc3RzLm1hcCgocG9zdCwgaWR4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiBrZXk9e2lkeH0+XG4gICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7XCJib3JkZXJcIjogXCI1cHggc29saWQgYmxhY2tcIiwgXCJwYWRkaW5nXCI6IFwiMmVtXCJ9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aDE+e3Bvc3QuYXR0cmlidXRlcy50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Bvc3QuYXR0cmlidXRlcy5kZXNjcmlwdGlvbn08L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgICA8TWFya2Rvd24+e3Bvc3QuYm9keX08L01hcmtkb3duPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgIH0gKi99XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG5cbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbiAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jZW50ZXIge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNSU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDYwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvIHsgXG4gICAgICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA4MHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgICBmb250LXNpemU6IDQ4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlLFxuICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICAgICAgbWFyZ2luOiA4MHB4IGF1dG8gNDBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQge1xuICAgICAgICAgICAgcGFkZGluZzogMThweCAxOHB4IDI0cHg7XG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICM0MzQzNDM7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjOWI5YjliO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzA2N2RmNztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCBoMyB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBjb2xvcjogIzA2N2RmNztcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEycHggMCAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/pages/index.js */",
        __self: this
      }));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./static/images/icon.svg":
false,

/***/ "./static/images/logo-wordmark.svg":
/*!*****************************************!*\
  !*** ./static/images/logo-wordmark.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-wordmark-2b2bc7c2337405fff505d5ca0d4c7319.svg";

/***/ })

})
//# sourceMappingURL=index.js.2802dca4d7c09c050ef8.hot-update.js.map