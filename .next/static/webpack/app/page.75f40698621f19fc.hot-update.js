"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/atoms/IntroCard/IntroCard.tsx":
/*!******************************************************!*\
  !*** ./src/components/atoms/IntroCard/IntroCard.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IntroCard; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _IntroCard_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IntroCard.module.scss */ \"(app-pages-browser)/./src/components/atoms/IntroCard/IntroCard.module.scss\");\n/* harmony import */ var _IntroCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_IntroCard_module_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/atoms/Button/Button */ \"(app-pages-browser)/./src/components/atoms/Button/Button.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nfunction IntroCard(param) {\n    let { title, description, image, linkTo, ...props } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        className: (_IntroCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default()[\"intro-card\"]),\n        ...props,\n        initial: {\n            opacity: 0,\n            y: 50\n        },\n        whileInView: {\n            opacity: 1,\n            y: 0\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_IntroCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default()[\"image-container\"]),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: image,\n                    alt: title,\n                    className: (_IntroCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().image)\n                }, void 0, false, {\n                    fileName: \"D:\\\\personal_programming_work\\\\honeypot-landing\\\\src\\\\components\\\\atoms\\\\IntroCard\\\\IntroCard.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\personal_programming_work\\\\honeypot-landing\\\\src\\\\components\\\\atoms\\\\IntroCard\\\\IntroCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: (_IntroCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().title),\n                children: title\n            }, void 0, false, {\n                fileName: \"D:\\\\personal_programming_work\\\\honeypot-landing\\\\src\\\\components\\\\atoms\\\\IntroCard\\\\IntroCard.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_IntroCard_module_scss__WEBPACK_IMPORTED_MODULE_1___default().description),\n                children: description\n            }, void 0, false, {\n                fileName: \"D:\\\\personal_programming_work\\\\honeypot-landing\\\\src\\\\components\\\\atoms\\\\IntroCard\\\\IntroCard.tsx\",\n                lineNumber: 33,\n                columnNumber: 23\n            }, this),\n            linkTo && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_atoms_Button_Button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                linkTo: linkTo.href,\n                children: linkTo.display\n            }, void 0, false, {\n                fileName: \"D:\\\\personal_programming_work\\\\honeypot-landing\\\\src\\\\components\\\\atoms\\\\IntroCard\\\\IntroCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 18\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\personal_programming_work\\\\honeypot-landing\\\\src\\\\components\\\\atoms\\\\IntroCard\\\\IntroCard.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = IntroCard;\nvar _c;\n$RefreshReg$(_c, \"IntroCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F0b21zL0ludHJvQ2FyZC9JbnRyb0NhcmQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ087QUFDYjtBQUNlO0FBRXZDLFNBQVNJLFVBQVUsS0FjaEM7UUFkZ0MsRUFDaENDLEtBQUssRUFDTEMsV0FBVyxFQUNYQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTixHQUFHQyxPQVNILEdBZGdDO0lBZWhDLHFCQUNFLDhEQUFDUCxpREFBTUEsQ0FBQ1EsR0FBRztRQUNUQyxXQUFXWCw2RUFBb0I7UUFDOUIsR0FBR1MsS0FBSztRQUNURyxTQUFTO1lBQUVDLFNBQVM7WUFBR0MsR0FBRztRQUFHO1FBQzdCQyxhQUFhO1lBQUVGLFNBQVM7WUFBR0MsR0FBRztRQUFFOzswQkFFaEMsOERBQUNKO2dCQUFJQyxXQUFXWCxrRkFBeUI7MEJBQ3ZDLDRFQUFDQyxrREFBS0E7b0JBQUNlLEtBQUtUO29CQUFPVSxLQUFLWjtvQkFBT00sV0FBV1gscUVBQWU7Ozs7Ozs7Ozs7OzBCQUUzRCw4REFBQ2tCO2dCQUFHUCxXQUFXWCxxRUFBZTswQkFBR0s7Ozs7OztZQUNoQ0MsNkJBQWUsOERBQUNhO2dCQUFFUixXQUFXWCwyRUFBcUI7MEJBQUdNOzs7Ozs7WUFDckRFLHdCQUFVLDhEQUFDTCx1RUFBTUE7Z0JBQUNLLFFBQVFBLE9BQU9ZLElBQUk7MEJBQUdaLE9BQU9hLE9BQU87Ozs7Ozs7Ozs7OztBQUc3RDtLQTlCd0JqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdG9tcy9JbnRyb0NhcmQvSW50cm9DYXJkLnRzeD81NWI0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL0ludHJvQ2FyZC5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UsIHsgU3RhdGljSW1hZ2VEYXRhIH0gZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiQC9jb21wb25lbnRzL2F0b21zL0J1dHRvbi9CdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEludHJvQ2FyZCh7XHJcbiAgdGl0bGUsXHJcbiAgZGVzY3JpcHRpb24sXHJcbiAgaW1hZ2UsXHJcbiAgbGlua1RvLFxyXG4gIC4uLnByb3BzXHJcbn06IFJlYWRvbmx5PHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIGltYWdlOiBTdGF0aWNJbWFnZURhdGE7XHJcbiAgbGlua1RvPzoge1xyXG4gICAgaHJlZjogc3RyaW5nO1xyXG4gICAgZGlzcGxheT86IHN0cmluZztcclxuICB9O1xyXG59Pikge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImludHJvLWNhcmRcIl19XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwLCB5OiA1MCB9fVxyXG4gICAgICB3aGlsZUluVmlldz17eyBvcGFjaXR5OiAxLCB5OiAwIH19XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJpbWFnZS1jb250YWluZXJcIl19PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSBjbGFzc05hbWU9e3N0eWxlc1tcImltYWdlXCJdfSAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGgzIGNsYXNzTmFtZT17c3R5bGVzW1widGl0bGVcIl19Pnt0aXRsZX08L2gzPlxyXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgPHAgY2xhc3NOYW1lPXtzdHlsZXNbXCJkZXNjcmlwdGlvblwiXX0+e2Rlc2NyaXB0aW9ufTwvcD59XHJcbiAgICAgIHtsaW5rVG8gJiYgPEJ1dHRvbiBsaW5rVG89e2xpbmtUby5ocmVmfT57bGlua1RvLmRpc3BsYXl9PC9CdXR0b24+fVxyXG4gICAgPC9tb3Rpb24uZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwibW90aW9uIiwiQnV0dG9uIiwiSW50cm9DYXJkIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwibGlua1RvIiwicHJvcHMiLCJkaXYiLCJjbGFzc05hbWUiLCJpbml0aWFsIiwib3BhY2l0eSIsInkiLCJ3aGlsZUluVmlldyIsInNyYyIsImFsdCIsImgzIiwicCIsImhyZWYiLCJkaXNwbGF5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/atoms/IntroCard/IntroCard.tsx\n"));

/***/ })

});