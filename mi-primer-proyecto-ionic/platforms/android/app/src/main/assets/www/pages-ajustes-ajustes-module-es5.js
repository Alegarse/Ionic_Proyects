(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-ajustes-ajustes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/ajustes/ajustes.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/ajustes/ajustes.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Ajustes</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item color=\"light\">\n    <ion-label color=\"primary\">\n      Ajustes de Volumen:\n    </ion-label>\n  </ion-item>\n  <ion-list>\n    <ion-item color=\"\">Llamadas\n      <ion-range color=\"secondary\" pin=\"true\" min=\"0\" max=\"100\" value=\"50\"></ion-range>\n    </ion-item>\n    <ion-item color=\"\">Mensajes\n      <ion-range color=\"secondary\" pin=\"true\" min=\"0\" max=\"100\" value=\"40\"></ion-range>\n    </ion-item><br>\n\n    <ion-item color=\"light\">\n      <ion-label color=\"primary\">\n        Ajustes de Pantalla:\n      </ion-label>\n    </ion-item>\n\n    <ion-item>Brillo\n      <ion-range min=\"20\" max=\"80\" step=\"2\" value=\"45\" color=\"secondary\">\n        <ion-icon size=\"small\" slot=\"start\" name=\"sunny\"></ion-icon>\n        <ion-icon slot=\"end\" name=\"sunny\"></ion-icon>\n      </ion-range>\n    </ion-item>\n\n    <ion-item>Contraste\n      <ion-range min=\"-100\" max=\"100\" step=\"100\" snaps=\"true\" color=\"secondary\" value=\"0\"></ion-range>\n    </ion-item>\n\n    <ion-item>Tamaño texto\n      <ion-range min=\"0\" max=\"25\" step=\"3\" snaps=\"true\" value=\"12\" color=\"secondary\"></ion-range>\n    </ion-item>\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/ajustes/ajustes.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/ajustes/ajustes.module.ts ***!
  \*************************************************/
/*! exports provided: AjustesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesPageModule", function() { return AjustesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ajustes_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ajustes.page */ "./src/app/pages/ajustes/ajustes.page.ts");







var routes = [
    {
        path: '',
        component: _ajustes_page__WEBPACK_IMPORTED_MODULE_6__["AjustesPage"]
    }
];
var AjustesPageModule = /** @class */ (function () {
    function AjustesPageModule() {
    }
    AjustesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_ajustes_page__WEBPACK_IMPORTED_MODULE_6__["AjustesPage"]]
        })
    ], AjustesPageModule);
    return AjustesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/ajustes/ajustes.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/ajustes/ajustes.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FqdXN0ZXMvYWp1c3Rlcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/ajustes/ajustes.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/ajustes/ajustes.page.ts ***!
  \***********************************************/
/*! exports provided: AjustesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjustesPage", function() { return AjustesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AjustesPage = /** @class */ (function () {
    function AjustesPage() {
    }
    AjustesPage.prototype.ngOnInit = function () {
    };
    AjustesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ajustes',
            template: __webpack_require__(/*! raw-loader!./ajustes.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/ajustes/ajustes.page.html"),
            styles: [__webpack_require__(/*! ./ajustes.page.scss */ "./src/app/pages/ajustes/ajustes.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AjustesPage);
    return AjustesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-ajustes-ajustes-module-es5.js.map