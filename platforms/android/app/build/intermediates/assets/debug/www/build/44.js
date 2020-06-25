webpackJsonp([44],{

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPageModule", function() { return ColorPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__color__ = __webpack_require__(631);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColorPageModule = /** @class */ (function () {
    function ColorPageModule() {
    }
    ColorPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__color__["a" /* ColorPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__color__["a" /* ColorPage */]),
            ],
        })
    ], ColorPageModule);
    return ColorPageModule;
}());

//# sourceMappingURL=color.module.js.map

/***/ }),

/***/ 631:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorPage = /** @class */ (function () {
    function ColorPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    ColorPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ColorPage');
    };
    ColorPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ColorPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-color',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\color\color.html"*/'<ion-header mode="md">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">Color</ion-title>\n    <ion-buttons right="">\n      <ion-buttons>\n        <button ion-button (tap)="dismiss()" color="extralight">\n          <ion-icon name="close"></ion-icon>\n        </button>\n      </ion-buttons>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list no-lines="">\n    <ion-item>\n      <div class="color" item-start style="background-color: red"></div>\n      Red\n    </ion-item>\n    <ion-item>\n      <div class="color" item-start style="background-color: blue"></div>\n      Blue\n    </ion-item>\n    <ion-item>\n      <div class="color" item-start style="background-color: green"></div>\n      Green\n    </ion-item>\n    <ion-item>\n      <div class="color" item-start style="background-color: yellowgreen"></div>\n      Yellow Green\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\color\color.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */]])
    ], ColorPage);
    return ColorPage;
}());

//# sourceMappingURL=color.js.map

/***/ })

});
//# sourceMappingURL=44.js.map