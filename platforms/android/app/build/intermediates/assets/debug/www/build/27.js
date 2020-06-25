webpackJsonp([27],{

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagedetailsPageModule", function() { return MessagedetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagedetails__ = __webpack_require__(648);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagedetailsPageModule = /** @class */ (function () {
    function MessagedetailsPageModule() {
    }
    MessagedetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messagedetails__["a" /* MessagedetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messagedetails__["a" /* MessagedetailsPage */]),
            ],
        })
    ], MessagedetailsPageModule);
    return MessagedetailsPageModule;
}());

//# sourceMappingURL=messagedetails.module.js.map

/***/ }),

/***/ 648:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagedetailsPage; });
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
 * Generated class for the MessagedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MessagedetailsPage = /** @class */ (function () {
    function MessagedetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessagedetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessagedetailsPage');
    };
    MessagedetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messagedetails',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\messagedetails\messagedetails.html"*/'<ion-header mode="md" no-border="">\n\n  <ion-navbar mode="md" color="primary">\n\n\n    <ion-buttons right="" style="margin-right: 8px">\n      <button ion-button clear icon-left="" color="extralight">\n        <ion-icon name="ios-undo" style="transform: scaleX(-1);margin-right: 8px;"></ion-icon>\n        Reply\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div class="product_details animated fadeInUp">\n    <ion-item mode="wp" no-padding="">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/14.jpg">\n      </ion-avatar>\n      <h2>Jeremiah Stephens</h2>\n      <p>20.07.2018 - 12:53 P.M</p>\n    </ion-item>\n  </div>\n\n  <div class="product_details animated fadeInUp">\n    <p><b>It is a long established fact</b></p></div>\n\n  <div class="product_details animated fadeInUp">\n    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at\n      its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as\n      opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing\n      packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will\n      uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by\n      accident, sometimes on purpose (injected humour and the like). </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\messagedetails\messagedetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], MessagedetailsPage);
    return MessagedetailsPage;
}());

//# sourceMappingURL=messagedetails.js.map

/***/ })

});
//# sourceMappingURL=27.js.map