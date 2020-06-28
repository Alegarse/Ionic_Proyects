(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-links-links-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/links/links.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/links/links.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Barras de progreso</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item color=\"light\">\n    <ion-label color=\"primary\">\n      Normal\n    </ion-label>\n  </ion-item>\n\n  <ion-progress-bar color=\"danger\"></ion-progress-bar><br>\n\n  <ion-item color=\"light\">\n    <ion-label color=\"primary\">\n      Al 50 %\n    </ion-label>\n  </ion-item>\n  <ion-progress-bar value=\"0.5\"></ion-progress-bar><br><br>\n\n  <ion-item color=\"light\">\n      <ion-label color=\"primary\">\n        Colores\n      </ion-label>\n    </ion-item>\n  <ion-progress-bar color=\"primary\" value=\"0.05\"></ion-progress-bar>\n  <ion-progress-bar color=\"secondary\" value=\"0.1\"></ion-progress-bar>\n  <ion-progress-bar color=\"tertiary\" value=\"0.15\"></ion-progress-bar>\n  <ion-progress-bar color=\"success\" value=\"0.2\"></ion-progress-bar>\n  <ion-progress-bar color=\"warning\" value=\"0.25\"></ion-progress-bar>\n  <ion-progress-bar color=\"danger\" value=\"0.3\"></ion-progress-bar>\n  <ion-progress-bar color=\"medium\" value=\"0.4\"></ion-progress-bar>\n  <ion-progress-bar color=\"dark\" value=\"0.5\"></ion-progress-bar><br><br>\n\n  <ion-item color=\"light\">\n      <ion-label color=\"primary\">\n        Animadas:\n      </ion-label>\n    </ion-item>\n  <!-- Other types -->\n  <ion-progress-bar value=\"0.4\" buffer=\"0.6\" color=\"dark\"></ion-progress-bar>\n  <ion-progress-bar type=\"indeterminate\" color=\"danger\"></ion-progress-bar>\n  <ion-progress-bar type=\"indeterminate\" reversed=\"true\" color=\"warning\"></ion-progress-bar>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/links/links.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/links/links.module.ts ***!
  \*********************************************/
/*! exports provided: LinksPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPageModule", function() { return LinksPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _links_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./links.page */ "./src/app/pages/links/links.page.ts");







const routes = [
    {
        path: '',
        component: _links_page__WEBPACK_IMPORTED_MODULE_6__["LinksPage"]
    }
];
let LinksPageModule = class LinksPageModule {
};
LinksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_links_page__WEBPACK_IMPORTED_MODULE_6__["LinksPage"]]
    })
], LinksPageModule);



/***/ }),

/***/ "./src/app/pages/links/links.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/links/links.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpbmtzL2xpbmtzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/links/links.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/links/links.page.ts ***!
  \*******************************************/
/*! exports provided: LinksPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksPage", function() { return LinksPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LinksPage = class LinksPage {
    constructor() { }
    ngOnInit() {
    }
};
LinksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-links',
        template: __webpack_require__(/*! raw-loader!./links.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/links/links.page.html"),
        styles: [__webpack_require__(/*! ./links.page.scss */ "./src/app/pages/links/links.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], LinksPage);



/***/ })

}]);
//# sourceMappingURL=pages-links-links-module-es2015.js.map