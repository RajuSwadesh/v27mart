webpackJsonp([41],{

/***/ 570:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoBidPageModule", function() { return DoBidPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__do_bid__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DoBidPageModule = /** @class */ (function () {
    function DoBidPageModule() {
    }
    DoBidPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__do_bid__["a" /* DoBidPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__do_bid__["a" /* DoBidPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__do_bid__["a" /* DoBidPage */]
            ]
        })
    ], DoBidPageModule);
    return DoBidPageModule;
}());

//# sourceMappingURL=do-bid.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DoBidPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
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
 * Generated class for the DoBidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DoBidPage = /** @class */ (function () {
    function DoBidPage(navCtrl, navParams, service, api, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.api = api;
        this.viewCtrl = viewCtrl;
        this.product_detail = this.navParams.get('detail');
        console.log(this.product_detail);
    }
    DoBidPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DoBidPage');
    };
    DoBidPage.prototype.Submit = function () {
        if (this.amt == '') {
            this.service.Warning('Enter your bidding amount');
        }
        else {
            if (this.product_detail.current_bid_price == null) {
                var min_bid_price = (this.product_detail.bid_start_price * this.product_detail.bid_increment_percent) / 100;
                var min_bid_actual_price = +this.product_detail.bid_start_price + (+min_bid_price);
                console.log(min_bid_actual_price);
                if (this.amt >= min_bid_actual_price) {
                    this.submitBid();
                }
                else {
                    this.service.Warning('Minimum bidding amount should be ' + min_bid_actual_price);
                }
            }
            else {
                var min_bid_price = (this.product_detail.current_bid_price * this.product_detail.bid_increment_percent) / 100;
                var min_bid_actual_price = +this.product_detail.current_bid_price + (+min_bid_price);
                if (this.amt >= min_bid_actual_price) {
                    this.submitBid();
                }
                else {
                    this.service.Warning('Minimum bidding amount should be ' + min_bid_actual_price);
                }
            }
        }
    };
    DoBidPage.prototype.submitBid = function () {
        var _this = this;
        this.api.POST('/bidNow/' + this.product_detail.id, {
            bid_amount: this.amt
        }).then(function (res) {
            console.log(res);
            if (res.status == 'success') {
                _this.service.Success(res.data);
                _this.viewCtrl.dismiss();
            }
            else {
                _this.service.Warning(res.data);
            }
        });
    };
    DoBidPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-do-bid',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\do-bid\do-bid.html"*/'<!--\n  Generated template for the DoBidPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>doBid</ion-title>\n  </ion-navbar>\n</ion-header> -->\n\n<ion-content padding>\n  <ion-input type="tel" placeholder="Enter Bidding Amount" [(ngModel)]="amt" class="input-area"></ion-input>\n  <button ion-button (click)="Submit()" block>Submit</button>\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\do-bid\do-bid.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */]])
    ], DoBidPage);
    return DoBidPage;
}());

//# sourceMappingURL=do-bid.js.map

/***/ })

});
//# sourceMappingURL=41.js.map