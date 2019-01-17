webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/blurbs.js":
/*!******************************!*\
  !*** ./components/blurbs.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hedron__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hedron */ "./node_modules/hedron/dist/hedron.js");
/* harmony import */ var hedron__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hedron__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, "this form.")))
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, "via email")), " with inquiries.")
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, "on Medium.")))
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
    css: ".blurbbox.jsx-1929793604{display:-webkit-box !important;display:-webkit-flex !important;display:-ms-flexbox !important;display:flex !important;-webkit-box-pack:center !important;-webkit-justify-content:center !important;-ms-flex-pack:center !important;justify-content:center !important;-webkit-align-content:center !important;-ms-flex-line-pack:center !important;align-content:center !important;-webkit-align-items:center !important;-webkit-box-align:center !important;-ms-flex-align:center !important;align-items:center !important;}.blurb.jsx-1929793604{text-align:left;margin:0.2em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:row nowrap;-ms-flex-flow:row nowrap;flex-flow:row nowrap;max-width:350px;}.header.jsx-1929793604{-webkit-flex-basis:100%;-ms-flex-preferred-size:100%;flex-basis:100%;font-weight:semibold;font-family:'Rhode';margin-bottom:1em;margin-top:0.5em;}.text.jsx-1929793604{margin-left:0.8em;}.description.jsx-1929793604{font-size:1em;line-height:1.3em;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hY2hhbC9Ecm9wYm94LzIwMTkvYmxvY2tjaGFpbi93ZWJzaXRlL2NvbXBvbmVudHMvYmx1cmJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCUyxBQUl5QyxBQU9SLEFBUUEsQUFRRSxBQUlKLGNBQ0ksRUFwQkwsRUFnQmpCLFdBZmlCLEdBb0JqQixxQ0FieUIscUJBQ0QsYUFQQyxPQVFILFFBakJnQixVQWtCakIsaUJBQ3JCLGlDQVRvQixnQkFDcEIsbUVBVm9DLDZHQUNGLHlJQUNsQyIsImZpbGUiOiIvVXNlcnMvYWNoYWwvRHJvcGJveC8yMDE5L2Jsb2NrY2hhaW4vd2Vic2l0ZS9jb21wb25lbnRzL2JsdXJicy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHcmlkIGZyb20gXCJoZWRyb25cIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgY29udGVudCA9IFtcbiAgICB7IFwiaWNvblwiOiBcIi4uL3N0YXRpYy9pY29ucy9jYWxlbmRhci5zdmdcIiwgXCJ0aXRsZVwiIDogXCJPTi1DQU1QVVMgRVZFTlRTXCIsIFwiY29udGVudFwiIDogPD5JbnRlcmVzdGVkIGluIGxlYXJuaW5nIG1vcmUgYWJvdXQgY3J5cHRvPyBWaWV3IG91ciBjYWxlbmRhciB0byBzZWUgdGhlIGV2ZW50cyB3ZeKAmXJlIHBsYW5uaW5nLiAgQ3VycmVudCBSaWNlIHN0dWRlbnRzIGNhbiBqb2luIG91ciBjbHViIHVzaW5nIDxMaW5rIGhyZWY9XCIjXCI+PGE+dGhpcyBmb3JtLjwvYT48L0xpbms+PC8+fSxcbiAgICB7IFwiaWNvblwiOiBcIi4uL3N0YXRpYy9pY29ucy90cmlhbmdsZS5zdmdcIiwgXCJ0aXRsZVwiIDogXCJDT01QQU5JRVMgJiBQUk9KRUNUU1wiLCBcImNvbnRlbnRcIiA6IDw+U2Vla2luZyBlbmdpbmVlcnMgd2l0aCBzbWFydCBjb250cmFjdCBhbmQgZnVsbC1zdGFjayBkZXZlbG9wbWVudCBleHBlcmllbmNlIGZvciBwcml2YXRlIG9yIG9wZW4tc291cmNlIHdvcms/IFJlYWNoIG91dCA8TGluayBocmVmPVwibWFpbHRvOmJsb2NrY2hhaW5AcmljZS5lZHVcIj48YT52aWEgZW1haWw8L2E+PC9MaW5rPiB3aXRoIGlucXVpcmllcy48Lz59LFxuICAgIHsgXCJpY29uXCI6IFwiLi4vc3RhdGljL2ljb25zL2Jvb2suc3ZnXCIsIFwidGl0bGVcIiA6IFwiVklFVyBDT1VSU0UgQ09OVEVOVFwiLCBcImNvbnRlbnRcIiA6IDw+V2XigJlyZSB0ZWFjaGluZyBhIG5vbi10ZWNobmljYWwgcHJpbWVyIG9uIGJsb2NrY2hhaW5zIGFuZCBjcnlwdG8gdGhpcyBzZW1lc3Rlci4gSW50ZXJlc3RlZCBpbiBmb2xsb3dpbmcgYWxvbmc/IFZpZXcgdGhlIGNsYXNzIGNvbnRlbnQgPExpbmsgaHJlZj1cImh0dHBzOi8vbWVkaXVtLmNvbS9yaWNlLWJsb2NrY2hhaW5cIj48YT5vbiBNZWRpdW0uPC9hPjwvTGluaz48Lz59XG5dXG5cbmNvbnN0IEJsdXJicyA9ICgpID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8R3JpZC5Qcm92aWRlciBicmVha3BvaW50cz17eyBtb2JpbGU6IFwiLTUwMFwiLCB0YWJsZXQ6IFwiNTAxLTExMDBcIiwgd2lkZTogXCIrMTEwMFwiIH19PlxuICAgICAgICAgICAgPEdyaWQuQm91bmRzIHN0eWxlPXt7XCJkaXNwbGF5XCI6IFwiZmxleFwiLCBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsIFwianVzdGlmeS1jb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwifX0gZGlyZWN0aW9uPVwidmVydGljYWxcIiB3aWRlPXt7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfX0+XG4gICAgICAgICAgICAgICAgeyBjb250ZW50Lm1hcCgoeyBpY29uLCB0aXRsZSwgY29udGVudCB9KSA9PiBcbiAgICAgICAgICAgICAgICAgICAgPEdyaWQuQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVyYlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjcmlwdGlvblwiPntjb250ZW50fTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvR3JpZC5Cb3g+KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvR3JpZC5Cb3VuZHM+XG4gICAgICAgIDwvR3JpZC5Qcm92aWRlcj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcblxuICAgICAgICAgICAgLmJsdXJiYm94IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ibHVyYiB7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAuMmVtO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMzUwcHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgICAgICAgIGZsZXgtYmFzaXM6IDEwMCU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHNlbWlib2xkO1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnUmhvZGUnO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjhlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICAgIDwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IEJsdXJicyJdfQ== */\n/*@ sourceURL=/Users/achal/Dropbox/2019/blockchain/website/components/blurbs.js */",
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Blurbs);

/***/ })

})
//# sourceMappingURL=index.js.1ebf9aafc7a964ea3897.hot-update.js.map