(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-not-found-not-found-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/not-found/not-found.page.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"text ion-padding center\">\n  <br>\n<h1 class=\"tit\">Error 404</h1>\n<h2>Página no encontrada</h2>\n<ion-icon class=\"tit\" name=\"warning\"></ion-icon>\n\n<ion-grid>\n  <ion-row>\n    <ion-col size=\"3\"></ion-col>\n    <ion-col>\n      <ion-img src=\"assets/imgs/404.png\"></ion-img>\n    </ion-col>\n    <ion-col size=\"3\"></ion-col>\n  </ion-row>\n</ion-grid>\n<br>\n<a class=\"center\" href=\"/login\">Exit</a>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/not-found/not-found-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/not-found/not-found-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageRoutingModule", function() { return NotFoundPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./not-found.page */ "./src/app/pages/not-found/not-found.page.ts");




var routes = [
    {
        path: '',
        component: _not_found_page__WEBPACK_IMPORTED_MODULE_3__["NotFoundPage"]
    }
];
var NotFoundPageRoutingModule = /** @class */ (function () {
    function NotFoundPageRoutingModule() {
    }
    NotFoundPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], NotFoundPageRoutingModule);
    return NotFoundPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.module.ts ***!
  \*****************************************************/
/*! exports provided: NotFoundPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPageModule", function() { return NotFoundPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _not_found_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found-routing.module */ "./src/app/pages/not-found/not-found-routing.module.ts");
/* harmony import */ var _not_found_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./not-found.page */ "./src/app/pages/not-found/not-found.page.ts");







var NotFoundPageModule = /** @class */ (function () {
    function NotFoundPageModule() {
    }
    NotFoundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _not_found_routing_module__WEBPACK_IMPORTED_MODULE_5__["NotFoundPageRoutingModule"]
            ],
            declarations: [_not_found_page__WEBPACK_IMPORTED_MODULE_6__["NotFoundPage"]]
        })
    ], NotFoundPageModule);
    return NotFoundPageModule;
}());



/***/ }),

/***/ "./src/app/pages/not-found/not-found.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tit {\n  font-size: 2.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL0Q6XFxGUElEQU1cXDJEQU1cXEFEXFxQcm95ZWN0b3MgSW9uaWNcXE1haXBldHN2Mi9zcmNcXGFwcFxccGFnZXNcXG5vdC1mb3VuZFxcbm90LWZvdW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbm90LWZvdW5kL25vdC1mb3VuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGl0IHtcclxuICAgIGZvbnQtc2l6ZTogMi41ZW07XHJcbn0iLCIudGl0IHtcbiAgZm9udC1zaXplOiAyLjVlbTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/not-found/not-found.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/not-found/not-found.page.ts ***!
  \***************************************************/
/*! exports provided: NotFoundPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundPage", function() { return NotFoundPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundPage = /** @class */ (function () {
    function NotFoundPage() {
    }
    NotFoundPage.prototype.ngOnInit = function () {
    };
    NotFoundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! raw-loader!./not-found.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/not-found/not-found.page.html"),
            styles: [__webpack_require__(/*! ./not-found.page.scss */ "./src/app/pages/not-found/not-found.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundPage);
    return NotFoundPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-not-found-not-found-module-es5.js.map