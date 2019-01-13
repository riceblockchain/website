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
        className: "jsx-605982085",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-605982085" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "jsx-605982085" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-605982085" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }, "Rice Blockchain")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "1em"
        },
        className: "jsx-605982085" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-605982085" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "605982085",
        css: "@import url(\"https://use.typekit.net/ben1ckd.css\");html.jsx-605982085,body.jsx-605982085{width:100%;height:100%;overflow:hidden !important;}.center.jsx-605982085{width:50%;margin-left:25%;margin-right:25%;margin-top:10%;text-align:center;}@media screen and (max-width:1000px){.logo.jsx-605982085{width:60% !important;}}.logo.jsx-605982085{width:40%;}.title.jsx-605982085{display:block;margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;font-family:'Rhode';font-weight:600;}.title.jsx-605982085,.description.jsx-605982085{text-align:center;}.row.jsx-605982085{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-605982085{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-605982085:hover{border-color:#067df7;}.card.jsx-605982085 h3.jsx-605982085{margin:0;color:#067df7;font-size:18px;}.card.jsx-605982085 p.jsx-605982085{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFHNkQsQUFHckMsQUFNRCxBQVNhLEFBS2IsQUFJSSxBQVlJLEFBSUYsQUFRTyxBQVNGLEFBSVosQUFNQSxTQUxLLEFBTUcsQ0E3REQsQUFjbEIsQ0FwQmMsR0F3QkgsRUFnQmEsRUFKeEIsR0FyQkUsQUEwQ0YsRUF4RDZCLEFBd0JoQixBQXVCQyxBQWNHLEdBdkRFLEFBNkRGLFFBMUNFLENBdUJELEdBUkgsQUFzQmYsR0FNYSxFQTdESSxPQU5qQixDQXlCbUIsQUF1QkksQ0FvQnZCLE1BN0RvQixVQW1CSCxRQWxCakIsT0FtQnNCLGtCQXNCTixFQXJCRSxTQVlHLEdBVU0sSUFyQjNCLHFCQXNCQSx5Q0FWK0IsMkhBQy9CIiwiZmlsZSI6Ii9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIi4uL2NvbXBvbmVudHMvaGVhZFwiO1xuaW1wb3J0IE5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy9uYXZcIjtcbmltcG9ydCBNYXJrZG93biBmcm9tIFwibWFya2Rvd24tdG8tanN4XCI7XG52YXIgZm0gPSByZXF1aXJlKFwiZnJvbnQtbWF0dGVyXCIpO1xuXG5pbXBvcnQgaWNvbiBmcm9tICcuLi9zdGF0aWMvaW1hZ2VzL2ljb24uc3ZnJztcblxuY29uc3QgaW1wb3J0QWxsQ29udGVudCA9IHIgPT4gci5rZXlzKCkubWFwKHIpO1xuY29uc3QgbWFya2Rvd25Db250ZW50ID0gaW1wb3J0QWxsQ29udGVudChyZXF1aXJlLmNvbnRleHQoJy4uL3Bvc3RzLycsIGZhbHNlLCAvXFwubWQkLykpLnNvcnQoKTtcblxuY2xhc3MgSG9tZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIHBvc3RzOiBtYXJrZG93bkNvbnRlbnQubWFwKGZpbGUgPT4gZm0oZmlsZSkpLFxuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZW50ZXJcIj5cbiAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2ljb259IC8+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGl0bGVcIj5SaWNlIEJsb2NrY2hhaW48L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIiBzdHlsZT17eyBtYXJnaW46IFwiMWVtXCIgfX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCI+XG4gICAgICAgICAgey8qIHsgdGhpcy5zdGF0ZS5wb3N0cy5tYXAoKHBvc3QsIGlkeCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIga2V5PXtpZHh9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1wiYm9yZGVyXCI6IFwiNXB4IHNvbGlkIGJsYWNrXCIsIFwicGFkZGluZ1wiOiBcIjJlbVwifX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGgxPntwb3N0LmF0dHJpYnV0ZXMudGl0bGV9PC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwb3N0LmF0dHJpYnV0ZXMuZGVzY3JpcHRpb259PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICAgICAgPE1hcmtkb3duPntwb3N0LmJvZHl9PC9NYXJrZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICB9ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgQGltcG9ydCB1cmwoXCJodHRwczovL3VzZS50eXBla2l0Lm5ldC9iZW4xY2tkLmNzc1wiKTtcblxuICAgICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgLmxvZ28ge1xuICAgICAgICAgICAgICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28geyBcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdSaG9kZSc7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/pages/index.js */",
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
//# sourceMappingURL=index.js.b17fc20465f0938a87b7.hot-update.js.map