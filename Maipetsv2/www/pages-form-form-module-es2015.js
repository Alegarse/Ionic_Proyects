(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-form-form-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/form/form.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/form/form.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar color=\"dark\">\n    <ion-title class=\"title\">{{ pageTitle}}</ion-title>\n    <ion-buttons class=\"title\" slot=\"start\">\n      <ion-back-button defaultHref=\"list\"></ion-back-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\" class=\"ion-padding\">\n      <ion-button>\n        <ion-icon slot=\"end\" size=\"medium\" name=\"paw\" class=\"ion-padding\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n\n  <ion-list>\n\n    <ion-item>\n      <ion-label position=\"floating\">Nombre</ion-label>\n      <ion-input color=\"warning\" [(ngModel)]=\"mascota.nombre\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Especie</ion-label>\n      <ion-input color=\"warning\" [(ngModel)]=\"mascota.especie\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Raza</ion-label>\n      <ion-input color=\"warning\" [(ngModel)]=\"mascota.raza\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Color</ion-label>\n      <ion-input color=\"warning\" [(ngModel)]=\"mascota.color\"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Fecha de nacimiento</ion-label>\n      <ion-input color=\"warning\" [(ngModel)]=\"mascota.fechaN\"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Añadir Fotografía</ion-label>\n      <br>\n      <ion-grid>\n        <ion-row className=\"ion-align-items-center\">\n            <div class=\"fileUpload\">\n              <ion-button color=\"primary\"><input type=\"file\" \n                class=\"upload\" \n                (change)=\"onUpload($event)\" \n                [(ngModel)]=\"mascota.imageUrl\" />Galería</ion-button>\n            </div>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n\n  </ion-list>\n  <br>\n\n  <ion-button\n  *ngIf=\"loading == false; else btnDisabled\" \n  class=\"text capitalize\" \n  shape=\"round\" \n  strong=\"true\"\n  color=\"success\" \n  (click)=\"addItem()\" \n  expand=\"block\">{{ action }}</ion-button>\n\n  <ng-template #btnDisabled>\n    <ion-button \n  class=\"text capitalize\"\n  disabled=\"true\" \n  shape=\"round\" \n  strong=\"true\"\n  color=\"light\" \n  (click)=\"addItem()\" \n  expand=\"block\">{{ action }}</ion-button>\n  </ng-template>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/form/form-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/form/form-routing.module.ts ***!
  \***************************************************/
/*! exports provided: FormPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageRoutingModule", function() { return FormPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.page */ "./src/app/pages/form/form.page.ts");




const routes = [
    {
        path: '',
        component: _form_page__WEBPACK_IMPORTED_MODULE_3__["FormPage"]
    }
];
let FormPageRoutingModule = class FormPageRoutingModule {
};
FormPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FormPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/form/form.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.module.ts ***!
  \*******************************************/
/*! exports provided: FormPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPageModule", function() { return FormPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/pages/form/form-routing.module.ts");
/* harmony import */ var _form_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./form.page */ "./src/app/pages/form/form.page.ts");







let FormPageModule = class FormPageModule {
};
FormPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _form_routing_module__WEBPACK_IMPORTED_MODULE_5__["FormPageRoutingModule"]
        ],
        declarations: [_form_page__WEBPACK_IMPORTED_MODULE_6__["FormPage"]]
    })
], FormPageModule);



/***/ }),

/***/ "./src/app/pages/form/form.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/form/form.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host ion-content {\n  --background: url('tileback.png');\n}\n\n.fileUpload {\n  position: relative;\n  overflow: hidden;\n  margin: 10px;\n}\n\n.fileUpload input.upload {\n  position: absolute;\n  top: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  font-size: 20px;\n  cursor: pointer;\n  opacity: 0;\n  filter: alpha(opacity=0);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9ybS9EOlxcRlBJREFNXFwyREFNXFxBRFxcUHJveWVjdG9zIElvbmljXFxNYWlwZXRzdjIvc3JjXFxhcHBcXHBhZ2VzXFxmb3JtXFxmb3JtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZm9ybS9mb3JtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGlDQUFBO0FDQVI7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0RKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esd0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Zvcm0vZm9ybS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBpb24tY29udGVudCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RpbGViYWNrLnBuZycpO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZmlsZVVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG59XHJcbi5maWxlVXBsb2FkIGlucHV0LnVwbG9hZCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgZmlsdGVyOiBhbHBoYShvcGFjaXR5PTApO1xyXG59IiwiOmhvc3QgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWdzL3RpbGViYWNrLnBuZ1wiKTtcbn1cblxuLmZpbGVVcGxvYWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLmZpbGVVcGxvYWQgaW5wdXQudXBsb2FkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9MCk7XG59Il19 */"

/***/ }),

/***/ "./src/app/pages/form/form.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/form/form.page.ts ***!
  \*****************************************/
/*! exports provided: FormPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormPage", function() { return FormPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/item.service */ "./src/app/services/item.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/es2015/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/es2015/index.js");






let FormPage = class FormPage {
    constructor(itemService, router, activatedRoute, afs, storage) {
        this.itemService = itemService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.afs = afs;
        this.storage = storage;
        this.pageTitle = "Nueva mascota";
        this.action = "Guardar";
        this.mascota = {
            nombre: '',
            especie: '',
            raza: '',
            color: '',
            fechaN: '',
            imageUrl: ''
        };
    }
    ngOnInit() {
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        if (this.id != null) {
            this.itemService.getItemById(this.id).subscribe(data => {
                this.mascota = data;
                this.pageTitle = "Editar mascota";
                this.action = "Actualizar mascota";
            });
        }
    }
    addItem() {
        if (this.action == "Guardar") {
            this.itemService.addItem(this.mascota);
        }
        else {
            this.itemService.updateItemById(this.id, this.mascota);
        }
        this.router.navigateByUrl('/list');
    }
    onUpload(event) {
        this.loading = true;
        if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = (e) => {
                // Para subir la imagen a Firebase
                const fileraw = event.target.files[0];
                console.log(fileraw);
                const idf = Math.random().toString(36).substring(2);
                const filePath = `uploads/file_${idf}`;
                const result = this.SaveImageRef(filePath, fileraw);
                const ref = result.ref;
                result.task.then(a => {
                    ref.getDownloadURL().subscribe(a => {
                        console.log(a);
                        this.loading = false;
                        // Asocio la url a laimagen de la mascota
                        this.mascota.imageUrl = a;
                    });
                });
            }, error => {
                alert("Error en la subida");
            };
        }
    }
    SaveImageRef(filePath, file) {
        return {
            task: this.storage.upload(filePath, file),
            ref: this.storage.ref(filePath)
        };
    }
};
FormPage.ctorParameters = () => [
    { type: src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"] }
];
FormPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form',
        template: __webpack_require__(/*! raw-loader!./form.page.html */ "./node_modules/raw-loader/index.js!./src/app/pages/form/form.page.html"),
        styles: [__webpack_require__(/*! ./form.page.scss */ "./src/app/pages/form/form.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _angular_fire_storage__WEBPACK_IMPORTED_MODULE_4__["AngularFireStorage"]])
], FormPage);



/***/ })

}]);
//# sourceMappingURL=pages-form-form-module-es2015.js.map