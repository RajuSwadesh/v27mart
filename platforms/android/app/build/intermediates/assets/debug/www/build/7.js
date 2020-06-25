webpackJsonp([7],{

/***/ 602:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishstorelistPageModule", function() { return WishstorelistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishstorelist__ = __webpack_require__(666);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WishstorelistPageModule = /** @class */ (function () {
    function WishstorelistPageModule() {
    }
    WishstorelistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wishstorelist__["a" /* WishstorelistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wishstorelist__["a" /* WishstorelistPage */]),
            ],
        })
    ], WishstorelistPageModule);
    return WishstorelistPageModule;
}());

//# sourceMappingURL=wishstorelist.module.js.map

/***/ }),

/***/ 666:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishstorelistPage; });
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


var WishstorelistPage = /** @class */ (function () {
    function WishstorelistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WishstorelistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WishstorelistPage');
    };
    WishstorelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wishstorelist',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\wishstorelist\wishstorelist.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Wish Store List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="wrapper">\n    <ion-row>\n      <ion-col col-4>\n        <img src="assets/imgs/product/exchange/2.jpg">\n      </ion-col>\n      <ion-col col-8>\n        <h5>Classic English shirt</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci doloribus harum.</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="wrapper">\n    <ion-row>\n      <ion-col col-4>\n        <img src="assets/imgs/product/exchange/4.jpg">\n      </ion-col>\n      <ion-col col-8>\n        <h5>Classic English shirt</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci doloribus harum.</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="wrapper">\n    <ion-row>\n      <ion-col col-4>\n        <img src="assets/imgs/product/exchange/3.jpg">\n      </ion-col>\n      <ion-col col-8>\n        <h5>Mufti Mens Rust Slim Fit Casual Shirts</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci doloribus harum.</p>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="wrapper">\n    <ion-row>\n      <ion-col col-4>\n        <img src="assets/imgs/product/exchange/1.jpg">\n      </ion-col>\n      <ion-col col-8>\n        <h5>Classic English shirt</h5>\n        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci doloribus harum.</p>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\wishstorelist\wishstorelist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], WishstorelistPage);
    return WishstorelistPage;
}());

//# sourceMappingURL=wishstorelist.js.map

/***/ })

});
//# sourceMappingURL=7.js.map