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
        className: "jsx-1789348878",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_head__WEBPACK_IMPORTED_MODULE_3__["default"], {
        title: "Home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: _static_images_icon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        className: "jsx-1789348878" + " " + "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_nav__WEBPACK_IMPORTED_MODULE_4__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          margin: "1em"
        },
        className: "jsx-1789348878" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "jsx-1789348878" + " " + "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, "Welcome to Next!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-1789348878" + " " + "description",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, "To get started, edit ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("code", {
        className: "jsx-1789348878",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, "pages/index.js"), " and save to reload."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "jsx-1789348878" + " " + "hero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, this.state.posts.map(function (post, idx) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          key: idx,
          className: "jsx-1789348878" + " " + "row",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            "border": "5px solid black",
            "padding": "2em"
          },
          className: "jsx-1789348878",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "jsx-1789348878",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
          className: "jsx-1789348878",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35
          },
          __self: this
        }, post.attributes.title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
          className: "jsx-1789348878",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          },
          __self: this
        }, post.attributes.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(markdown_to_jsx__WEBPACK_IMPORTED_MODULE_5__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          },
          __self: this
        }, post.body))));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
        styleId: "1789348878",
        css: ".logo.jsx-1789348878{position:absolute;width:25%;height:25%;top:25%;margin:auto 40%;}.hero.jsx-1789348878{width:100%;color:#333;}.title.jsx-1789348878{margin:0;width:100%;padding-top:80px;line-height:1.15;font-size:48px;}.title.jsx-1789348878,.description.jsx-1789348878{text-align:center;}.row.jsx-1789348878{max-width:880px;margin:80px auto 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}.card.jsx-1789348878{padding:18px 18px 24px;width:220px;text-align:left;-webkit-text-decoration:none;text-decoration:none;color:#434343;border:1px solid #9b9b9b;}.card.jsx-1789348878:hover{border-color:#067df7;}.card.jsx-1789348878 h3.jsx-1789348878{margin:0;color:#067df7;font-size:18px;}.card.jsx-1789348878 p.jsx-1789348878{margin:0;padding:12px 0 0;font-size:13px;color:#333;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDb0IsQUFJK0IsQUFRUCxBQUlGLEFBU1MsQUFJRixBQVFPLEFBU0YsQUFJWixBQU1BLFNBdkNFLEFBa0NHLEFBTUcsRUE1Q04sS0FpQlcsRUF6QlosQUFxQlosRUFSbUIsQ0E2Qm5CLENBakNBLENBd0JjLEFBY0csR0FNQSxFQXBESixPQWlDSyxFQXBCQyxDQVlKLEFBc0JmLENBOUNVLEVBb0RHLE1BbkRLLElBZ0NLLENBb0J2QixFQXhDaUIsU0FYakIsTUFZQSxnQ0FvQmdCLFdBVEssR0FVTSx5QkFDM0IseUNBVitCLDJIQUMvQiIsImZpbGUiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE5L2Jsb2NrY2hhaW4vd2Vic2l0ZS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBIZWFkIGZyb20gXCIuLi9jb21wb25lbnRzL2hlYWRcIjtcbmltcG9ydCBOYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvbmF2XCI7XG5pbXBvcnQgTWFya2Rvd24gZnJvbSBcIm1hcmtkb3duLXRvLWpzeFwiO1xudmFyIGZtID0gcmVxdWlyZShcImZyb250LW1hdHRlclwiKTtcblxuaW1wb3J0IGljb24gZnJvbSAnLi4vc3RhdGljL2ltYWdlcy9pY29uLnN2Zyc7XG5cbmNvbnN0IGltcG9ydEFsbENvbnRlbnQgPSByID0+IHIua2V5cygpLm1hcChyKTtcbmNvbnN0IG1hcmtkb3duQ29udGVudCA9IGltcG9ydEFsbENvbnRlbnQocmVxdWlyZS5jb250ZXh0KCcuLi9wb3N0cy8nLCBmYWxzZSwgL1xcLm1kJC8pKS5zb3J0KCk7XG5jb25zb2xlLmxvZyhtYXJrZG93bkNvbnRlbnQpO1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcG9zdHM6IG1hcmtkb3duQ29udGVudC5tYXAoZmlsZSA9PiBmbShmaWxlKSksXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8SGVhZCB0aXRsZT1cIkhvbWVcIiAvPlxuICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImxvZ29cIiBzcmM9e2ljb259IC8+XG4gICAgICAgIDxOYXYgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZXJvXCIgc3R5bGU9e3sgbWFyZ2luOiBcIjFlbVwiIH19PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPldlbGNvbWUgdG8gTmV4dCE8L2gxPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICBUbyBnZXQgc3RhcnRlZCwgZWRpdCA8Y29kZT5wYWdlcy9pbmRleC5qczwvY29kZT4gYW5kIHNhdmUgdG8gcmVsb2FkLlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlcm9cIj5cbiAgICAgICAgICB7IHRoaXMuc3RhdGUucG9zdHMubWFwKChwb3N0LCBpZHgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiIGtleT17aWR4fT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcImJvcmRlclwiOiBcIjVweCBzb2xpZCBibGFja1wiLCBcInBhZGRpbmdcIjogXCIyZW1cIn19PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxoMT57cG9zdC5hdHRyaWJ1dGVzLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cG9zdC5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9ufTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgICAgIDxNYXJrZG93bj57cG9zdC5ib2R5fTwvTWFya2Rvd24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuXG4gICAgICAgICAgLmxvZ28geyBcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyNSU7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1JTtcbiAgICAgICAgICAgIHRvcDogMjUlO1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDQwJTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuaGVybyB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogODBweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC50aXRsZSxcbiAgICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgICAgIG1hcmdpbjogODBweCBhdXRvIDQwcHg7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5jYXJkIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHggMThweCAyNHB4O1xuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAjNDM0MzQzO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzliOWI5YjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuY2FyZDpob3ZlciB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMwNjdkZjc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgY29sb3I6ICMwNjdkZjc7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNhcmQgcCB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMnB4IDAgMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl19 */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/pages/index.js */",
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
//# sourceMappingURL=index.js.7586104a288ad75e1716.hot-update.js.map