(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-botones-botones-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/botones/botones.page.html":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/botones/botones.page.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Clases de botones</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n    <ion-item color=\"light\">\n        <ion-label color=\"primary\">\n          Tamaños:\n        </ion-label>\n      </ion-item>\n      <ion-button size=\"small\" color=\"danger\">Pequeño</ion-button>\n      <ion-button color=\"warning\">Normal</ion-button>\n      <ion-button size=\"large\" color=\"danger\">Grande</ion-button><br><br>\n\n\n      <ion-item color=\"light\">\n          <ion-label color=\"primary\">\n      Según sus colores:\n    </ion-label>\n  </ion-item>\n  <ion-button color=\"primary\">Azul</ion-button>\n  <ion-button color=\"secondary\">Turquesa</ion-button>\n  <ion-button color=\"tertiary\">Morado</ion-button><br>\n  <ion-button color=\"success\">Verde</ion-button>\n  <ion-button color=\"warning\">Amarillo</ion-button>\n  <ion-button color=\"danger\">Rojo</ion-button><br>\n  <ion-button color=\"light\">Gris claro</ion-button>\n  <ion-button color=\"medium\">Gris oscuro</ion-button>\n  <ion-button color=\"dark\">Negro</ion-button><br><br>\n\n  <ion-item color=\"light\">\n      <ion-label color=\"primary\">\n      Según su anchura:\n    </ion-label>\n  </ion-item>\n  <ion-button expand=\"full\">Completo</ion-button>\n  <ion-button expand=\"full\" fill=\"outline\">Completo con borde</ion-button>\n  <ion-button expand=\"block\">Bloque</ion-button>\n  <ion-button expand=\"block\" fill=\"outline\">Bloque con borde</ion-button>\n  <ion-button shape=\"round\">Redondeado</ion-button>\n  <ion-button shape=\"round\" fill=\"outline\">Redondeado con borde</ion-button><br><br>\n\n\n  <ion-item color=\"light\">\n      <ion-label color=\"primary\">\n      Con iconos:\n    </ion-label>\n  </ion-item>\n  <ion-button>\n    <ion-icon slot=\"start\" name=\"star\" color=\"danger\"></ion-icon>\n    izquierda\n  </ion-button>\n  <ion-button>\n    <ion-icon slot=\"icon-only\" size=\"small\" name=\"star\" color=\"warning\"></ion-icon>\n  </ion-button>\n  <ion-button>\n    <ion-icon slot=\"end\" name=\"star\" color=\"danger\"></ion-icon>\n    derecha\n  </ion-button>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/botones/botones.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.module.ts ***!
  \*************************************************/
/*! exports provided: BotonesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPageModule", function() { return BotonesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _botones_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./botones.page */ "./src/app/pages/botones/botones.page.ts");







var routes = [
    {
        path: '',
        component: _botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]
    }
];
var BotonesPageModule = /** @class */ (function () {
    function BotonesPageModule() {
    }
    BotonesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_botones_page__WEBPACK_IMPORTED_MODULE_6__["BotonesPage"]]
        })
    ], BotonesPageModule);
    return BotonesPageModule;
}());



/***/ }),

/***/ "./src/app/pages/botones/botones.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/botones/botones.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JvdG9uZXMvYm90b25lcy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/botones/botones.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/botones/botones.page.ts ***!
  \***********************************************/
/*! exports provided: BotonesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotonesPage", function() { return BotonesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BotonesPage = /** @class */ (function () {
    function BotonesPage() {
    }
    BotonesPage.prototype.ngOnInit = function () {
    };
    BotonesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-botones',
            template: __webpack_require__(/*! raw-loader!./botones.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/botones/botones.page.html"),
            styles: [__webpack_require__(/*! ./botones.page.scss */ "./src/app/pages/botones/botones.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BotonesPage);
    return BotonesPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-botones-botones-module-es5.js.map