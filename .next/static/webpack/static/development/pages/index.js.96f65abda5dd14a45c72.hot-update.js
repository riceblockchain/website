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
        className: "jsx-2574488426",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2574488426" + " " + "center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "jsx-2574488426" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "1em"
        },
        className: "jsx-2574488426" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-2574488426" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "2574488426",
        css: "html.jsx-2574488426,body.jsx-2574488426{width:100%;height:100%;overflow:hidden !important;}.center.jsx-2574488426{width:50%;margin-left:25%;margin-right:25%;margin-top:10%;text-align:center;}@media screen and (min-width:1000px){}.logo.jsx-2574488426{width:40%;}.title.jsx-2574488426{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-2574488426,.description.jsx-2574488426{text-align:center;}.row.jsx-2574488426{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-2574488426{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-2574488426:hover{border-color:#067df7;}.card.jsx-2574488426 h3.jsx-2574488426{margin:0;color:#067df7;font-size:18px;}.card.jsx-2574488426 p.jsx-2574488426{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0IsQUFJd0IsQUFNRCxBQVlBLEFBSUQsQUFTUyxBQUlGLEFBUU8sQUFTRixBQUlaLEFBTUEsU0F2Q0UsQUFrQ0csQUFNRyxDQXhERCxBQVlsQixDQWxCYyxLQW1DVSxFQUp4QixFQVJtQixDQTZCbkIsRUFuRDZCLEFBMENmLEFBY0csR0FsREUsQUF3REYsU0FuQkMsRUFwQkMsQ0FZSixBQXNCZixHQU1hLEVBeERJLE9BTmpCLENBMkN1QixDQW9CdkIsRUF4Q2lCLElBaEJHLFdBaUJwQixPQWhCQSx5QkFvQ2dCLFdBVEssR0FVTSx5QkFDM0IseUNBVitCLDJIQUMvQiIsImZpbGUiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE5L2Jsb2NrY2hhaW4vd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2XCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIm1hcmtkb3duLXRvLWpzeFwiO1xudmFyIGZtID0gcmVxdWlyZShcImZyb250LW1hdHRlclwiKTtcblxuaW1wb3J0IGljb24gZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9pY29uLnN2Zyc7XG5cbmNvbnN0IGltcG9ydEFsbENvbnRlbnQgPSByID0+IHIua2V5cygpLm1hcChyKTtcbmNvbnN0IG1hcmtkb3duQ29udGVudCA9IGltcG9ydEFsbENvbnRlbnQocmVxdWlyZS5jb250ZXh0KCcuLi9wb3N0cy8nLCBmYWxzZSwgL1xcLm1kJC8pKS5zb3J0KCk7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBwb3N0czogbWFya2Rvd25Db250ZW50Lm1hcChmaWxlID0+IGZtKGZpbGUpKSxcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VudGVyXCI+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJsb2dvXCIgc3JjPXtpY29ufSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjFlbVwiIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVyb1wiPlxuICAgICAgICAgIHsvKiB7IHRoaXMuc3RhdGUucG9zdHMubWFwKChwb3N0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcImJvcmRlclwiOiBcIjVweCBzb2xpZCBibGFja1wiLCBcInBhZGRpbmdcIjogXCIyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT57cG9zdC5hdHRyaWJ1dGVzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cG9zdC5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZG93bj57cG9zdC5ib2R5fTwvTWFya2Rvd24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgfSAqL31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcblxuICAgICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNlbnRlciB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMDBweCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmxvZ28geyBcbiAgICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDgwcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGl0bGUsXG4gICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgICAgICBtYXJnaW46IDgwcHggYXV0byA0MHB4O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4IDE4cHggMjRweDtcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogIzQzNDM0MztcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM5YjliOWI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQ6aG92ZXIge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDY3ZGY3O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIHAge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMTJweCAwIDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/pages/index.js */",
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
//# sourceMappingURL=index.js.96f65abda5dd14a45c72.hot-update.js.map