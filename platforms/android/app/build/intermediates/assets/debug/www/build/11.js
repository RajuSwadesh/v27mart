webpackJsonp([11],{

/***/ 598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerpagePageModule", function() { return SellerpagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sellerpage__ = __webpack_require__(662);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellerpagePageModule = /** @class */ (function () {
    function SellerpagePageModule() {
    }
    SellerpagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sellerpage__["a" /* SellerpagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sellerpage__["a" /* SellerpagePage */]),
            ],
        })
    ], SellerpagePageModule);
    return SellerpagePageModule;
}());

//# sourceMappingURL=sellerpage.module.js.map

/***/ }),

/***/ 662:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerpagePage; });
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


/**
 * Generated class for the SellerpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellerpagePage = /** @class */ (function () {
    function SellerpagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SellerpagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SellerpagePage');
    };
    SellerpagePage.prototype.reviews = function () {
        this.navCtrl.push('ReviewsPage');
    };
    SellerpagePage.prototype.products = function () {
        this.navCtrl.push('ProductsPage');
    };
    SellerpagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sellerpage',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\sellerpage\sellerpage.html"*/'<ion-header mode="md" no-border="">\n\n<ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">Seller Name</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="profile_area">\n    <img src="https://randomuser.me/api/portraits/men/94.jpg" width="80"/>\n    <!--<img src="assets/imgs/profilepic.svg" width="80"/>-->\n    <h3>Troy Hoffman</h3>\n    <p>(195)-821-5328</p>\n    <p>troy.hoffman18@example.com</p>\n\n  </div>\n\n\n  <div class="product_details animated fadeInUp">\n    <h4>Products\n      <button ion-button="" small clear mode="ios" text-capitalize="" no-margin="" (tap)="products()">\n        See All\n      </button>\n    </h4>\n    <ion-row no-padding="">\n\n      <ion-col style="max-width: 80px;padding-left: 0">\n        <img src="assets/imgs/product/shoes/1.jpg">\n      </ion-col>\n\n      <ion-col class="description">\n        <h6>Vans Ward Lo Suede Sneaker</h6>\n        <p>On the way</p>\n      </ion-col>\n\n    </ion-row>\n\n    <ion-row no-padding="">\n\n      <ion-col style="max-width: 80px;padding-left: 0">\n        <img src="assets/imgs/product/shoes/2.jpg">\n      </ion-col>\n\n      <ion-col class="description">\n        <h6>Vans Ward Lo Suede Sneaker</h6>\n        <p>Delivered</p>\n      </ion-col>\n    </ion-row>\n\n  </div>\n\n\n  <div class="product_details animated fadeInUp">\n    <h4>Reviews\n      <button ion-button="" small clear mode="ios" text-capitalize="" no-margin="" (tap)="reviews()">\n        See All\n      </button>\n    </h4>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/15.jpg">\n      </ion-avatar>\n      <h2>Steve West</h2>\n      <p>Best Seller!!</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/4.jpg">\n      </ion-avatar>\n      <h2>Karl Webb</h2>\n      <p>Perfect delivery, I will purchase again.</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/86.jpg">\n      </ion-avatar>\n      <h2>Steven Barnes</h2>\n      <p>quality and time are both fantastic.</p>\n    </ion-item>\n\n  </div>\n\n  <div class="product_details animated fadeInUp">\n    <h4>Address</h4>\n    <p no-margin="">\n      Kelley A. Fleming 196 Woodside Circle Mobile, FL 36602 Phone:240-256-1942 </p>\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\sellerpage\sellerpage.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], SellerpagePage);
    return SellerpagePage;
}());

//# sourceMappingURL=sellerpage.js.map

/***/ })

});
//# sourceMappingURL=11.js.map