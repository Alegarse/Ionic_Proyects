(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-list-list-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/list/list.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/list/list.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header class=\"title-background\">\n  <ion-toolbar color=\"dark\">\n    <ion-title class=\"title\">Mascotas</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-menu-button menu=\"main-menu\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  \n\n  <ion-card *ngFor=\"let m of mascotas | async\" color=\"light\">\n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n              <img *ngIf=\"m.imageUrl\" [src]=\"m.imageUrl\">\n              <img *ngIf=\"!m.imageUrl\" src=\"assets/imgs/noimage.png\">\n          </ion-col>\n\n          <ion-col>\n            <ion-row>\n              <ion-col size=\"5\">\n                <ion-card-title class=\"nombre\"><strong>{{m.nombre}}</strong></ion-card-title>\n              </ion-col>\n              <ion-col size=\"7\">\n                <ion-icon (click)=\"goEditItem(m.itemId)\" name=\"create\" color=\"success\" size=\"large\">\n                </ion-icon>\n                <ion-icon name=\"blank\"></ion-icon>\n                <ion-icon (click)=\"presentAlertConfirm(m.itemId, m.nombre)\" name=\"trash\" color=\"danger\" size=\"large\">\n                </ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-col>\n        </ion-row>\n\n        \n\n      </ion-grid>\n    </ion-card-header>\n    <ion-card-content text-center>\n      Es un {{m.especie}} de raza {{m.raza}}, color {{m.color}}\n      <ion-card-subtitle text-center>Fecha de nacimiento: {{m.fechaN}}</ion-card-subtitle>\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button class=\"text-capitalize\" color=\"dark\" (click)=\"addItem()\" size=\"large\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n\n  </ion-fab>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/list/list-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/list/list-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ListPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageRoutingModule", function() { return ListPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/list/list.page.ts");




const routes = [
    {
        path: '',
        component: _list_page__WEBPACK_IMPORTED_MODULE_3__["ListPage"]
    }
];
let ListPageRoutingModule = class ListPageRoutingModule {
};
ListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/list/list.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.module.ts ***!
  \*******************************************/
/*! exports provided: ListPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPageModule", function() { return ListPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-routing.module */ "./src/app/pages/list/list-routing.module.ts");
/* harmony import */ var _list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list.page */ "./src/app/pages/list/list.page.ts");







let ListPageModule = class ListPageModule {
};
ListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListPageRoutingModule"]
        ],
        declarations: [_list_page__WEBPACK_IMPORTED_MODULE_6__["ListPage"]]
    })
], ListPageModule);



/***/ }),

/***/ "./src/app/pages/list/list.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/list/list.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: url('tile.png');\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC9EOlxcRlBJREFNXFwyREFNXFxBRFxcUHJveWVjdG9zIElvbmljXFxNYWlwZXRzdjIvc3JjXFxhcHBcXHBhZ2VzXFxsaXN0XFxsaXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGlzdC9saXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLDZCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXN0L2xpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgaW9uLWNvbnRlbnQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1ncy90aWxlLnBuZycpO1xyXG4gICAgfVxyXG59XHJcbiIsIjpob3N0IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1ncy90aWxlLnBuZ1wiKTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/pages/list/list.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/list/list.page.ts ***!
  \*****************************************/
/*! exports provided: ListPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListPage", function() { return ListPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






let ListPage = class ListPage {
    constructor(itemService, router, authService, alertController) {
        this.itemService = itemService;
        this.router = router;
        this.authService = authService;
        this.alertController = alertController;
    }
    ngOnInit() {
        this.authService.getCurrentUser().subscribe(() => this.mascotas = this.itemService.getItems());
    }
    addItem() {
        this.router.navigateByUrl('/create-item');
    }
    goEditItem(id) {
        this.router.navigateByUrl('/edit-item/' + id);
    }
    // Aviso de cofirmación para borrado
    presentAlertConfirm(id, nombre) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Eliminar mascota',
                message: `Vas a borrar la mascota <strong>${nombre}</strong>, ¿Estás seguro?`,
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary'
                    }, {
                        text: 'Si',
                        handler: () => this.itemService.deleteItemById(id)
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ListPage.ctorParameters = () => [
    { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] }
];
ListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-list',
        template: __webpack_require__(/*! raw-loader!./list.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/list/list.page.html"),
        styles: [__webpack_require__(/*! ./list.page.scss */ "./src/app/pages/list/list.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
], ListPage);



/***/ })

}]);
//# sourceMappingURL=pages-list-list-module-es2015.js.map