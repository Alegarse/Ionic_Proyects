(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-iconos-iconos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/iconos/iconos.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/iconos/iconos.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Iconos admitidos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color=\"light\">\n    <ion-label color=\"primary\">\n      De configuración\n    </ion-label>\n  </ion-item>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-icon name=\"airplane\" size=\"large\" color=\"success\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"bluetooth\" size=\"large\" color=\"danger\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"build\" size=\"large\" color=\"primary\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"flashlight\" size=\"large\"></ion-icon>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-icon name=\"volume-high\" size=\"large\" color=\"tertiary\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <ion-icon name=\"locate\" color=\"primary\" size=\"large\"></ion-icon>\n      </ion-col>\n      <ion-col>\n          <ion-icon name=\"finger-print\" size=\"large\" color=\"success\"></ion-icon>\n      </ion-col>\n      <ion-col>\n\n      </ion-col>\n    </ion-row>\n  </ion-grid><br>\n\n  <ion-item color=\"light\">\n      <ion-label color=\"primary\">\n        Logos\n      </ion-label>\n    </ion-item>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n            <ion-icon name=\"logo-angular\" size=\"large\" color=\"primary\"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name=\"logo-github\" size=\"large\" color=\"dark\"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name=\"logo-slack\" size=\"large\" color=\"danger\"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name=\"logo-tux\" size=\"large\" color=\"tertiary\"></ion-icon>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n            <ion-icon name=\"logo-android\" size=\"large\" color=\"success\"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name=\"logo-bitcoin\" size=\"large\" color=\"warning\"></ion-icon>\n        </ion-col>\n        <ion-col>\n            <ion-icon name=\"logo-css3\" size=\"large\" color=\"danger\"></ion-icon>\n        </ion-col>\n        <ion-col>\n  \n        </ion-col>\n      </ion-row>\n    </ion-grid><br>\n\n    <ion-item color=\"light\">\n        <ion-label color=\"primary\">\n          Miscelánea\n        </ion-label>\n      </ion-item>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n              <ion-icon name=\"beer\" size=\"large\" color=\"warning\"></ion-icon>\n          </ion-col>\n          <ion-col>\n              <ion-icon name=\"basketball\" size=\"large\" color=\"tertiary\"></ion-icon>\n          </ion-col>\n          <ion-col>\n              <ion-icon name=\"fitness\" size=\"large\" color=\"dark\"></ion-icon>\n          </ion-col>\n          <ion-col>\n              <ion-icon name=\"headset\" size=\"large\" color=\"success\"></ion-icon>\n          </ion-col>\n        </ion-row>\n        \n      </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/iconos/iconos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/iconos/iconos.module.ts ***!
  \***********************************************/
/*! exports provided: IconosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconosPageModule", function() { return IconosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _iconos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iconos.page */ "./src/app/pages/iconos/iconos.page.ts");







const routes = [
    {
        path: '',
        component: _iconos_page__WEBPACK_IMPORTED_MODULE_6__["IconosPage"]
    }
];
let IconosPageModule = class IconosPageModule {
};
IconosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_iconos_page__WEBPACK_IMPORTED_MODULE_6__["IconosPage"]]
    })
], IconosPageModule);



/***/ }),

/***/ "./src/app/pages/iconos/iconos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/iconos/iconos.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ljb25vcy9pY29ub3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/iconos/iconos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/iconos/iconos.page.ts ***!
  \*********************************************/
/*! exports provided: IconosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconosPage", function() { return IconosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IconosPage = class IconosPage {
    constructor() { }
    ngOnInit() {
    }
};
IconosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-iconos',
        template: __webpack_require__(/*! raw-loader!./iconos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/iconos/iconos.page.html"),
        styles: [__webpack_require__(/*! ./iconos.page.scss */ "./src/app/pages/iconos/iconos.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], IconosPage);



/***/ })

}]);
//# sourceMappingURL=pages-iconos-iconos-module-es2015.js.map