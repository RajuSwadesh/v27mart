webpackJsonp([14],{

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reviews__ = __webpack_require__(659);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReviewsPageModule = /** @class */ (function () {
    function ReviewsPageModule() {
    }
    ReviewsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__reviews__["a" /* ReviewsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__reviews__["a" /* ReviewsPage */]),
            ],
        })
    ], ReviewsPageModule);
    return ReviewsPageModule;
}());

//# sourceMappingURL=reviews.module.js.map

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReviewsPage; });
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
 * Generated class for the ReviewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReviewsPage = /** @class */ (function () {
    function ReviewsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ReviewsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReviewsPage');
    };
    ReviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-reviews',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\reviews\reviews.html"*/'<ion-header mode="md">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">reviews</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="product_details animated fadeInUp">\n    <h4>Reviews </h4>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/15.jpg">\n      </ion-avatar>\n      <h2>Steve West</h2>\n      <p>Best Seller!!</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/4.jpg">\n      </ion-avatar>\n      <h2>Karl Webb</h2>\n      <p>Perfect delivery, I will purchase again.</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/86.jpg">\n      </ion-avatar>\n      <h2>Steven Barnes</h2>\n      <p>quality and time are both fantastic.</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/15.jpg">\n      </ion-avatar>\n      <h2>Steve West</h2>\n      <p>Best Seller!!</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/4.jpg">\n      </ion-avatar>\n      <h2>Karl Webb</h2>\n      <p>Perfect delivery, I will purchase again.</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/86.jpg">\n      </ion-avatar>\n      <h2>Steven Barnes</h2>\n      <p>quality and time are both fantastic.</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/15.jpg">\n      </ion-avatar>\n      <h2>Steve West</h2>\n      <p>Best Seller!!</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/4.jpg">\n      </ion-avatar>\n      <h2>Karl Webb</h2>\n      <p>Perfect delivery, I will purchase again.</p>\n    </ion-item>\n\n    <ion-item no-lines="" no-padding="">\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/86.jpg">\n      </ion-avatar>\n      <h2>Steven Barnes</h2>\n      <p>quality and time are both fantastic.</p>\n    </ion-item>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\reviews\reviews.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], ReviewsPage);
    return ReviewsPage;
}());

//# sourceMappingURL=reviews.js.map

/***/ })

});
//# sourceMappingURL=14.js.map