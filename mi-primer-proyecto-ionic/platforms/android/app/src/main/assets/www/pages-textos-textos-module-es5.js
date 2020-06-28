(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-textos-textos-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/textos/textos.page.html":
/*!*************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/textos/textos.page.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Textos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"home\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-item color=\"light\">\n        <ion-label color=\"primary\">\n          Tipo noticia:\n        </ion-label>\n      </ion-item>\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Subtitulo</ion-card-subtitle>\n          <ion-card-title>Título principal</ion-card-title>\n        </ion-card-header>\n      \n        <ion-card-content>\n          Aquí se redactaría todo el contenio de la noticia,\n           llamado cuerpo principal, con todo los datos pertinentes.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-item color=\"light\">\n          <ion-label color=\"primary\">\n            Tipo postal:\n          </ion-label>\n        </ion-item>\n      \n      <ion-card>\n        <ion-item>\n          <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n          <ion-label>Título a destacar</ion-label>\n          <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n        </ion-item>\n      \n        <ion-card-content>\n          Contenido de la postal.\n        </ion-card-content>\n      </ion-card>\n\n      <ion-item color=\"light\">\n          <ion-label color=\"primary\">\n            Con links:\n          </ion-label>\n        </ion-item>\n      \n      <ion-card>\n        <ion-item href=\"#\" class=\"activated\">\n          <ion-icon name=\"wifi\" slot=\"start\"></ion-icon>\n          <ion-label>Compartir por Wifi-Direct</ion-label>\n        </ion-item>\n      \n        <ion-item href=\"#\">\n          <ion-icon name=\"wine\" slot=\"start\"></ion-icon>\n          <ion-label>Reservar en restaurante</ion-label>\n        </ion-item>\n      \n        <ion-item class=\"activated\">\n          <ion-icon name=\"warning\" slot=\"start\"></ion-icon>\n          <ion-label>Aviso de zonas de peligro</ion-label>\n        </ion-item>\n      \n        <ion-item>\n          <ion-icon name=\"walk\" slot=\"start\"></ion-icon>\n          <ion-label>Calcular ruta andando</ion-label>\n        </ion-item>\n      </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/textos/textos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/textos/textos.module.ts ***!
  \***********************************************/
/*! exports provided: TextosPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextosPageModule", function() { return TextosPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _textos_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./textos.page */ "./src/app/pages/textos/textos.page.ts");







var routes = [
    {
        path: '',
        component: _textos_page__WEBPACK_IMPORTED_MODULE_6__["TextosPage"]
    }
];
var TextosPageModule = /** @class */ (function () {
    function TextosPageModule() {
    }
    TextosPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_textos_page__WEBPACK_IMPORTED_MODULE_6__["TextosPage"]]
        })
    ], TextosPageModule);
    return TextosPageModule;
}());



/***/ }),

/***/ "./src/app/pages/textos/textos.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/textos/textos.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3RleHRvcy90ZXh0b3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/textos/textos.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/textos/textos.page.ts ***!
  \*********************************************/
/*! exports provided: TextosPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextosPage", function() { return TextosPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TextosPage = /** @class */ (function () {
    function TextosPage() {
    }
    TextosPage.prototype.ngOnInit = function () {
    };
    TextosPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-textos',
            template: __webpack_require__(/*! raw-loader!./textos.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/textos/textos.page.html"),
            styles: [__webpack_require__(/*! ./textos.page.scss */ "./src/app/pages/textos/textos.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TextosPage);
    return TextosPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-textos-textos-module-es5.js.map