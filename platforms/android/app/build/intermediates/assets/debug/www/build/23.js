webpackJsonp([23],{

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyExchangePageModule", function() { return MyExchangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_exchange__ = __webpack_require__(651);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyExchangePageModule = /** @class */ (function () {
    function MyExchangePageModule() {
    }
    MyExchangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_exchange__["a" /* MyExchangePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_exchange__["a" /* MyExchangePage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__my_exchange__["a" /* MyExchangePage */]
            ]
        })
    ], MyExchangePageModule);
    return MyExchangePageModule;
}());

//# sourceMappingURL=my-exchange.module.js.map

/***/ }),

/***/ 651:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyExchangePage; });
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
 * Generated class for the MyExchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyExchangePage = /** @class */ (function () {
    function MyExchangePage(navCtrl, navParams, api, service, zone) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.service = service;
        this.zone = zone;
        this.myExchange_list = [];
        this.paginate_info = [];
    }
    MyExchangePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyExchangePage');
        var base = this;
        base.service.LoaderShowmsg('Loading...');
        base.api.GET('/allPriceNegotiation').then(function (res) {
            //console.log(res);
            base.service.LoaderHide();
            base.zone.run(function () {
                base.myExchange_list = res.data.records;
                base.paginate_info = res.data.paginate;
                console.log(base.myExchange_list);
                console.log(base.paginate_info);
            });
        });
    };
    MyExchangePage.prototype.goToNegotiate = function (info) {
        this.navCtrl.push('NegotiatePage', { id: info.id });
    };
    MyExchangePage.prototype.moreData = function (infiniteScroll) {
        var base = this;
        if (base.paginate_info.nextPageUrl != null) {
            setTimeout(function () {
                var url = base.paginate_info.nextPageUrl;
                base.api.GET(url).then(function (response) {
                    console.log(response);
                    if (response.status == 'success') {
                        base.service.LoaderHide();
                        base.myExchange_list = base.myExchange_list.concat(response.data.records);
                        if (response.data.length == 0) {
                            infiniteScroll.enable(false);
                        }
                        console.log(base.myExchange_list);
                    }
                });
            }, 500);
        }
    };
    MyExchangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-exchange',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\my-exchange\my-exchange.html"*/'<!--\n  Generated template for the MyExchangePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>My Exchange</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item *ngFor="let item of myExchange_list" (click)="goToNegotiate(item)">\n    <ion-avatar item-start>\n      <img [src]="item.product_image.original"/>\n    </ion-avatar>\n    <p style="white-space: normal;font-weight: 500;\n    color: black;">{{item.product_title}}</p>\n    <p>Seller:{{item.seller_name}}</p>\n  </ion-item>\n\n  <ion-infinite-scroll (ionInfinite)="moreData($event)"> \n    <ion-infinite-scroll-content loadingSpinner="bubbles"\n    loadingText="Loading..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\my-exchange\my-exchange.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */]])
    ], MyExchangePage);
    return MyExchangePage;
}());

//# sourceMappingURL=my-exchange.js.map

/***/ })

});
//# sourceMappingURL=23.js.map