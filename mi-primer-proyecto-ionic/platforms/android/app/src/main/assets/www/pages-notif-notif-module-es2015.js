(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-notif-notif-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/notif/notif.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/notif/notif.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Notificaciones</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-app>\n    <ion-content fullscreen>\n      <ion-list>\n        <ion-list-header>Indicadores</ion-list-header>\n        <ion-item>\n          <ion-label>Seguidores</ion-label>\n          <ion-badge slot=\"end\">13k</ion-badge>\n        </ion-item>\n        <ion-item>\n          <ion-label>Likes</ion-label>\n          <ion-badge color=\"secondary\" slot=\"end\">53k</ion-badge>\n        </ion-item>\n        <ion-item>\n          <ion-label>Estrellas</ion-label>\n          <ion-badge color=\"tertiary\" slot=\"end\">5k</ion-badge>\n        </ion-item>\n        <ion-item>\n          <ion-label>No leidos</ion-label>\n          <ion-badge color=\"light\" slot=\"end\">67</ion-badge>\n        </ion-item>\n        <ion-item>\n          <ion-label>Borradores</ion-label>\n          <ion-badge color=\"medium\" slot=\"end\">8</ion-badge>\n        </ion-item>\n        <ion-item>\n          <ion-label>Borrados</ion-label>\n          <ion-badge color=\"dark\" slot=\"end\">12</ion-badge>\n        </ion-item>\n        <ion-item>\n          <ion-label>Realizados</ion-label>\n          <ion-badge color=\"success\" slot=\"end\">89</ion-badge>\n        </ion-item>\n        <ion-item>\n          <ion-label>Avisos</ion-label>\n          <ion-badge color=\"warning\" slot=\"end\">34</ion-badge>\n        </ion-item>\n        <ion-item>\n          <ion-label>Notificationes</ion-label>\n          <ion-badge color=\"danger\" slot=\"end\">+99</ion-badge>\n        </ion-item>\n\n      </ion-list>\n    </ion-content>\n  </ion-app>\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/notif/notif.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/notif/notif.module.ts ***!
  \*********************************************/
/*! exports provided: NotifPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPageModule", function() { return NotifPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _notif_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./notif.page */ "./src/app/pages/notif/notif.page.ts");







const routes = [
    {
        path: '',
        component: _notif_page__WEBPACK_IMPORTED_MODULE_6__["NotifPage"]
    }
];
let NotifPageModule = class NotifPageModule {
};
NotifPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_notif_page__WEBPACK_IMPORTED_MODULE_6__["NotifPage"]]
    })
], NotifPageModule);



/***/ }),

/***/ "./src/app/pages/notif/notif.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/notif/notif.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGlmL25vdGlmLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/notif/notif.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/notif/notif.page.ts ***!
  \*******************************************/
/*! exports provided: NotifPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifPage", function() { return NotifPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotifPage = class NotifPage {
    constructor() { }
    ngOnInit() {
    }
};
NotifPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-notif',
        template: __webpack_require__(/*! raw-loader!./notif.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/notif/notif.page.html"),
        styles: [__webpack_require__(/*! ./notif.page.scss */ "./src/app/pages/notif/notif.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], NotifPage);



/***/ })

}]);
//# sourceMappingURL=pages-notif-notif-module-es2015.js.map