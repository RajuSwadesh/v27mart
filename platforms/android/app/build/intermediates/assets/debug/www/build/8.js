webpackJsonp([8],{

/***/ 601:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishstorePageModule", function() { return WishstorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishstore__ = __webpack_require__(665);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WishstorePageModule = /** @class */ (function () {
    function WishstorePageModule() {
    }
    WishstorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wishstore__["a" /* WishstorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wishstore__["a" /* WishstorePage */]),
            ],
        })
    ], WishstorePageModule);
    return WishstorePageModule;
}());

//# sourceMappingURL=wishstore.module.js.map

/***/ }),

/***/ 665:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishstorePage; });
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


var WishstorePage = /** @class */ (function () {
    function WishstorePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    WishstorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WishstorePage');
    };
    WishstorePage.prototype.wishstorelist = function () {
        this.navCtrl.push('WishstorelistPage');
    };
    WishstorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wishstore',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\wishstore\wishstore.html"*/'<ion-header mode="ios">\n  <ion-navbar color="primary">\n    <ion-title>Wish Store</ion-title>\n    <ion-buttons right>\n      <button ion-button="" color="light" style="font-size: 36px; margin-right: 8px;" (tap)="wishstorelist()">\n        <ion-icon name="ios-list"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="wish-form">\n    <img src="assets/imgs/wishstorefull.png" alt="">\n    <h5>Add item to your Wish Store</h5>\n    <ion-list>\n      <ion-item>\n        <ion-input placeholder="Your Item"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-textarea placeholder="Description"></ion-textarea>\n      </ion-item>\n      <button ion-button class="btn-transparent"><ion-icon name="camera"></ion-icon> Add image</button>\n\n     <div style="text-align: center;">\n       <button ion-button color="primary" class="animated fadeInLeft">Submit</button>\n     </div>\n\n    </ion-list>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\wishstore\wishstore.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], WishstorePage);
    return WishstorePage;
}());

//# sourceMappingURL=wishstore.js.map

/***/ })

});
//# sourceMappingURL=8.js.map