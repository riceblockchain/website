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
/* harmony import */ var _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/images/icon.svg */ "./static/images/icon.svg");
/* harmony import */ var _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6__);
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
console.log(markdownContent);

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
        className: "jsx-3130366399",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3130366399" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "jsx-3130366399" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "1em"
        },
        className: "jsx-3130366399" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-3130366399" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "3130366399",
        css: ".center.jsx-3130366399{width:100%;text-align:center;margin-top:15%;}@media screen and (min-width:1000px){.logo.jsx-3130366399{width:15rem;}}.logo.jsx-3130366399{width:12rem;}.hero.jsx-3130366399{width:100%;color:#333;}.title.jsx-3130366399{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-3130366399,.description.jsx-3130366399{text-align:center;}.row.jsx-3130366399{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-3130366399{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-3130366399:hover{border-color:#067df7;}.card.jsx-3130366399 h3.jsx-3130366399{margin:0;color:#067df7;font-size:18px;}.card.jsx-3130366399 p.jsx-3130366399{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFJd0IsQUFPRyxBQUtGLEFBSUQsQUFLRixBQVNTLEFBSUYsQUFRTyxBQVNGLEFBSVosQUFNQSxTQXZDRSxBQWtDRyxBQU1HLEVBN0RDLEFBZ0JQLENBVFgsQUFLRixJQXNCd0IsRUFKeEIsRUFSbUIsQ0E2Qm5CLENBbENBLENBeUJjLEFBY0csR0FNQSxHQTdEQSxNQTBDQyxFQXBCQyxDQVlKLEFBc0JmLEdBTWEsR0E3RGIsT0EwQ3VCLENBb0J2QixFQXhDaUIsZUFDakIsZ0NBb0JnQixXQVRLLEdBVU0seUJBQzNCLHlDQVYrQiwySEFDL0IiLCJmaWxlIjoiL1VzZXJzL2FjaGFsL0Ryb3Bib3gvMjAxOS9ibG9ja2NoYWluL3dlYnNpdGUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwiLi4vY29tcG9uZW50cy9oZWFkXCI7XG5pbXBvcnQgTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL25hdlwiO1xuaW1wb3J0IE1hcmtkb3duIGZyb20gXCJtYXJrZG93bi10by1qc3hcIjtcbnZhciBmbSA9IHJlcXVpcmUoXCJmcm9udC1tYXR0ZXJcIik7XG5cbmltcG9ydCBpY29uIGZyb20gJy4uL3N0YXRpYy9pbWFnZXMvaWNvbi5zdmcnO1xuXG5jb25zdCBpbXBvcnRBbGxDb250ZW50ID0gciA9PiByLmtleXMoKS5tYXAocik7XG5jb25zdCBtYXJrZG93bkNvbnRlbnQgPSBpbXBvcnRBbGxDb250ZW50KHJlcXVpcmUuY29udGV4dCgnLi4vcG9zdHMvJywgZmFsc2UsIC9cXC5tZCQvKSkuc29ydCgpO1xuY29uc29sZS5sb2cobWFya2Rvd25Db250ZW50KTtcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBvc3RzOiBtYXJrZG93bkNvbnRlbnQubWFwKGZpbGUgPT4gZm0oZmlsZSkpLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2ljb259IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIiBzdHlsZT17eyBtYXJnaW46IFwiMWVtXCIgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgICAgey8qIHsgdGhpcy5zdGF0ZS5wb3N0cy5tYXAoKHBvc3QsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1wiYm9yZGVyXCI6IFwiNXB4IHNvbGlkIGJsYWNrXCIsIFwicGFkZGluZ1wiOiBcIjJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxPntwb3N0LmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwb3N0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPE1hcmtkb3duPntwb3N0LmJvZHl9PC9NYXJrZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICB9ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1JTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIHtcbiAgICAgICAgICAgIC5sb2dvIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIC5sb2dvIHsgXG4gICAgICAgICAgICB3aWR0aDogMTJyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmhlcm8ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/pages/index.js */",
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

/***/ })

})
//# sourceMappingURL=index.js.d859706e838fe0d9474b.hot-update.js.map