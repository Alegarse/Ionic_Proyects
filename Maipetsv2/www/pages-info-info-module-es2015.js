(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-info-info-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/info/info.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/info/info.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title text-center>Información de la app</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/list\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col>\n        <ion-img src=\"https://firebasestorage.googleapis.com/v0/b/maipetsionic.appspot.com/o/imgs%2Flogo.png?alt=media&token=57a34494-4269-4ccb-a590-e3d956efefba\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"2\"></ion-col>\n      <ion-col size=\"8\">\n        <ion-img src=\"https://firebasestorage.googleapis.com/v0/b/maipetsionic.appspot.com/o/imgs%2Fcap.png?alt=media&token=2d70292f-d6fb-4778-b95f-d75b08b44bae\"></ion-img>\n      </ion-col>\n      <ion-col size=\"2\"></ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <ion-img src=\"https://firebasestorage.googleapis.com/v0/b/maipetsionic.appspot.com/o/imgs%2Fslogan.png?alt=media&token=08c93bfd-32f4-4269-ac3d-aa38ae4602be\"></ion-img>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col>\n        <p>\n          <strong>Aplicación de gestión de mascotas con conexion a Firebase y uso de camara</strong><br/><br/>\n\n        ## Version 2.0<br/>\n        Implementado el uso multiusuario,con registro a través de email en Firebase.<br/>\n        La version actual consiste en un muestrario de las mascotas y sus datos más significativos a través de cards,en las que cada mascota puede tener su propia imagen, o en caso deno existir ninguna, se mostrará una imagen predeterminada.<br/>\n        Incorpora un menú de la aplicación desde el cual se accede al perfil de usuario, a la página de información acerca de la app, y por último, a la posibilidad de hacer logout y salir del perfil de usuario.<br/>\n        Para cada mascota, mostrada en un card independiente, se puede acceder a las opciones de borrado a través de una ventana modal de confirmación.<br/>\n        A la hora de añadir o en la edición de los datos de una mascota, accedemos a una nueva pagina, en la que se distingue entre si es unanueva entrada o estamos actualizano datos, a través de la recpción de el id de dicha mascota en caso de su edición; En el caso de no recibirse, el sistema interpreta que es una nueva.<br/>\n        Creada una página de perfil de usuario, con acceso a la camara, parapoder tomar una fotografía de perfil.<br/>\n        </p>\n      </ion-col>\n    </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pages/info/info-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/info/info-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InfoPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageRoutingModule", function() { return InfoPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info.page */ "./src/app/pages/info/info.page.ts");




const routes = [
    {
        path: '',
        component: _info_page__WEBPACK_IMPORTED_MODULE_3__["InfoPage"]
    }
];
let InfoPageRoutingModule = class InfoPageRoutingModule {
};
InfoPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InfoPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/info/info.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/info/info.module.ts ***!
  \*******************************************/
/*! exports provided: InfoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPageModule", function() { return InfoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _info_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./info-routing.module */ "./src/app/pages/info/info-routing.module.ts");
/* harmony import */ var _info_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./info.page */ "./src/app/pages/info/info.page.ts");







let InfoPageModule = class InfoPageModule {
};
InfoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _info_routing_module__WEBPACK_IMPORTED_MODULE_5__["InfoPageRoutingModule"]
        ],
        declarations: [_info_page__WEBPACK_IMPORTED_MODULE_6__["InfoPage"]]
    })
], InfoPageModule);



/***/ }),

/***/ "./src/app/pages/info/info.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/info/info.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luZm8vaW5mby5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/info/info.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/info/info.page.ts ***!
  \*****************************************/
/*! exports provided: InfoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoPage", function() { return InfoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let InfoPage = class InfoPage {
    constructor() { }
    ngOnInit() {
    }
};
InfoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-info',
        template: __webpack_require__(/*! raw-loader!./info.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/info/info.page.html"),
        styles: [__webpack_require__(/*! ./info.page.scss */ "./src/app/pages/info/info.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], InfoPage);



/***/ })

}]);
//# sourceMappingURL=pages-info-info-module-es2015.js.map