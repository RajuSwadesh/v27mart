webpackJsonp([38],{

/***/ 573:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatepaymentPageModule", function() { return DonatepaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatepayment__ = __webpack_require__(637);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonatepaymentPageModule = /** @class */ (function () {
    function DonatepaymentPageModule() {
    }
    DonatepaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donatepayment__["a" /* DonatepaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donatepayment__["a" /* DonatepaymentPage */]),
            ],
        })
    ], DonatepaymentPageModule);
    return DonatepaymentPageModule;
}());

//# sourceMappingURL=donatepayment.module.js.map

/***/ }),

/***/ 637:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatepaymentPage; });
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
 * Generated class for the DonatepaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonatepaymentPage = /** @class */ (function () {
    function DonatepaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DonatepaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DonatepaymentPage');
    };
    DonatepaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donatepayment',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\donatepayment\donatepayment.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="card-payment">\n    <h4>Credit/debit card</h4>\n    <div class="card-details">\n      <ion-row>\n        <ion-col col-12>\n          <input type="text" placeholder="xxxx-xxxx-xxxx-xxxx">\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-5>\n          <input type="text" placeholder="valid thru">\n        </ion-col>\n        <ion-col col-5>\n          <input type="number" placeholder="cvv">\n        </ion-col>\n        <ion-col col-2>\n          &nbsp;\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n          <input type="text" value="Tyrone Price">\n        </ion-col>\n      </ion-row>\n    </div>\n    <div class="card-footer">\n      <ion-row>\n        <ion-col col-8>\n          <ion-checkbox></ion-checkbox> Save card securely\n        </ion-col>\n        <ion-col col-4>\n          <button ion-button>proceed</button>\n        </ion-col>\n      </ion-row>\n    </div>\n  </div>\n\n  <div class="paymentgate" style="padding-bottom: 20px;">\n    <h4>Wallets <span> <button ion-button>more wallet</button></span></h4>\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/paytm.png" alt="" >\n        </ion-avatar>\n        <h2>Paytm</h2>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/airtel.png" alt="" >\n        </ion-avatar>\n        <h2>Airtel Money</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class="paymentgate" style="padding-bottom: 20px;">\n    <h4>UPI Payment Options</h4>\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/googlepay.png" alt="" >\n        </ion-avatar>\n        <h2>Google Pay</h2>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/bhim.png" alt="" >\n        </ion-avatar>\n        <h2>Bhim</h2>\n      </ion-item>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/phonepe.png" alt="" >\n        </ion-avatar>\n        <h2>PhonePe</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class="paymentgate" style="padding-bottom: 20px;">\n    <h4>Net Banking <span> <button ion-button>more banks</button></span></h4>\n    <div class="list-payment">\n      <ul>\n        <li>\n          <img src="assets/imgs/axis.png" alt="" >\n          <h2>Axis</h2>\n        </li>\n        <li>\n          <img src="assets/imgs/hdfc.png" alt="" >\n          <h2>HDFC</h2>\n        </li>\n        <li>\n          <img src="assets/imgs/icici.png" alt="" >\n          <h2>ICICI</h2>\n        </li>\n        <li>\n          <img src="assets/imgs/kotak.png" alt="" >\n          <h2>Kotak</h2>\n        </li>\n        <li>\n          <img src="assets/imgs/sbi.png" alt="" >\n          <h2>SBI</h2>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class="paymentgate" style="padding-bottom: 20px;">\n    <h4>EMI Options <span> <button ion-button>more banks</button></span></h4>\n    <div class="list-payment">\n      <ul>\n        <li>\n          <img src="assets/imgs/axis.png" alt="" >\n          <h2>Axis</h2>\n        </li>\n        <li>\n          <img src="assets/imgs/hdfc.png" alt="" >\n          <h2>HDFC</h2>\n        </li>\n        <li>\n          <img src="assets/imgs/icici.png" alt="" >\n          <h2>ICICI</h2>\n        </li>\n        <li>\n          <img src="assets/imgs/kotak.png" alt="" >\n          <h2>Kotak</h2>\n        </li>\n        <li>\n          <img src="assets/imgs/sbi.png" alt="" >\n          <h2>SBI</h2>\n        </li>\n      </ul>\n    </div>\n  </div>\n\n  <div class="paymentgate" style="padding-bottom: 20px;">\n    <h4>Other Options</h4>\n    <ion-list>\n      <ion-item>\n        <ion-avatar item-start>\n          <img src="assets/imgs/payu.png" alt="" >\n        </ion-avatar>\n        <h2>PayU Money</h2>\n      </ion-item>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\donatepayment\donatepayment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], DonatepaymentPage);
    return DonatepaymentPage;
}());

//# sourceMappingURL=donatepayment.js.map

/***/ })

});
//# sourceMappingURL=38.js.map