webpackJsonp([19],{

/***/ 592:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaytypePageModule", function() { return PaytypePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__paytype__ = __webpack_require__(656);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PaytypePageModule = /** @class */ (function () {
    function PaytypePageModule() {
    }
    PaytypePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__paytype__["a" /* PaytypePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__paytype__["a" /* PaytypePage */]),
            ],
        })
    ], PaytypePageModule);
    return PaytypePageModule;
}());

//# sourceMappingURL=paytype.module.js.map

/***/ }),

/***/ 656:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaytypePage; });
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
 * Generated class for the PaytypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaytypePage = /** @class */ (function () {
    function PaytypePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PaytypePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaytypePage');
    };
    PaytypePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-paytype',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\paytype\paytype.html"*/'<ion-header mode="md">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="" style="padding: 0">Payment</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n<!--\n  <ion-list radio-group padding-left="">\n\n    <ion-item no-padding="" no-lines="" mode="md">\n      <ion-label mode="md">E-Sewa</ion-label>\n      <ion-radio checked="true" value="esewa" mode="ios"></ion-radio>\n      <img src="assets/imgs/esewa.jpg" width="30" item-end="">\n    </ion-item>\n\n    <ion-item no-padding="" no-lines="" mode="md">\n      <ion-label mode="md">Ime Pay</ion-label>\n      <ion-radio value="imepay" mode="ios" checked="false"></ion-radio>\n      <img src="assets/imgs/imepay.jpg" width="30" item-end="">\n    </ion-item>\n\n  </ion-list>\n-->\n\n  <ion-list radio-group>\n\n    <!-- <ion-item no-lines="">\n      <ion-label>E-Sewa</ion-label>\n      <ion-radio checked="true" value="esewa"></ion-radio>\n      <img src="assets/imgs/esewa.jpg" width="30" item-end="">\n    </ion-item>\n\n    <ion-item no-lines="">\n      <ion-label>Ime Pay</ion-label>\n      <ion-radio value="imepay"></ion-radio>\n      <img src="assets/imgs/imepay.jpg" width="30" item-end="">\n    </ion-item>\n\n    <ion-item no-lines="">\n      <ion-label>khalti</ion-label>\n      <ion-radio value="khalti"></ion-radio>\n      <img src="assets/imgs/khalti.jpg" width="30" item-end="">\n    </ion-item> -->\n\n    <!-- <ion-item no-lines="">\n      <ion-label>Credit Debit Card</ion-label>\n      <ion-radio value="creditdebitcard"></ion-radio>\n      <img src="assets/imgs/creditdebitcard.jpg" width="30" item-end="">\n    </ion-item> -->\n\n    <ion-item no-lines="">\n      <ion-label>Cash on Delivery</ion-label>\n      <ion-radio value="cashondelivery"></ion-radio>\n      <img src="assets/imgs/cashondelivery.jpg" width="30" item-end="">\n    </ion-item>\n\n  </ion-list>\n\n  <button ion-button="" mode="ios" class="next_btn">\n    Next\n  </button>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\paytype\paytype.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], PaytypePage);
    return PaytypePage;
}());

//# sourceMappingURL=paytype.js.map

/***/ })

});
//# sourceMappingURL=19.js.map