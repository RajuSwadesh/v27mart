webpackJsonp([25],{

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBiddingHistoryPageModule", function() { return MyBiddingHistoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_bidding_history__ = __webpack_require__(649);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyBiddingHistoryPageModule = /** @class */ (function () {
    function MyBiddingHistoryPageModule() {
    }
    MyBiddingHistoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_bidding_history__["a" /* MyBiddingHistoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_bidding_history__["a" /* MyBiddingHistoryPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__my_bidding_history__["a" /* MyBiddingHistoryPage */]
            ]
        })
    ], MyBiddingHistoryPageModule);
    return MyBiddingHistoryPageModule;
}());

//# sourceMappingURL=my-bidding-history.module.js.map

/***/ }),

/***/ 649:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBiddingHistoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(89);
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
 * Generated class for the MyBiddingHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyBiddingHistoryPage = /** @class */ (function () {
    function MyBiddingHistoryPage(navCtrl, navParams, service, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.api = api;
        this.bidding_history = [];
        this.page = 2;
    }
    MyBiddingHistoryPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MyBiddingHistoryPage');
        this.service.LoaderShowmsg('Loading my biddings...');
        this.api.GET('/myBidding').then(function (res) {
            console.log(res);
            _this.service.LoaderHide();
            if (res.status == 'success') {
                _this.bidding_history = res.data;
                // this.donation_list=res.data.records;
                // this.donation_data=res.data.pagination;
                // console.log(this.donation_list);
            }
            else {
                _this.service.Warning('res.msg');
            }
        }).catch((function (error) {
            _this.service.LoaderHide();
            _this.service.Warning('Something went wrong. Try again later');
        }));
    };
    MyBiddingHistoryPage.prototype.getName = function (name) {
        if (name.length > 28) {
            return name.substring(0, 28) + '...';
        }
        else {
            return name;
        }
    };
    MyBiddingHistoryPage.prototype.moreProducts = function (infiniteScroll) {
        var _this = this;
        var base = this;
        setTimeout(function () {
            var url = '/myDonations/' + _this.page;
            base.api.GET(url).then(function (res) {
                console.log(res);
                if (res.status == 'success') {
                    if (res.data.length > 0) {
                        _this.bidding_history = res.data;
                        console.log(_this.bidding_history);
                        _this.page = _this.page++;
                    }
                    else {
                        infiniteScroll.enable(false);
                    }
                }
                else {
                    infiniteScroll.enable(false);
                }
            });
        }, 500);
    };
    MyBiddingHistoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-bidding-history',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\my-bidding-history\my-bidding-history.html"*/'<!--\n  Generated template for the MyBiddingHistoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>My Bidding</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <ion-list *ngFor="let item of bidding_history">\n\n        <div class="bid-wrapper">\n          <ion-row class="no-wrap" (tap)="biddingdetails(item)">\n            <ion-col col-4 class="no-wrap">\n              <img [src]="item.productDetails.product_images.original" alt="">\n            </ion-col>\n            <ion-col col-8>\n              <h4>{{getName(item.productDetails.product_title)}}</h4>\n              <span class="status active">{{item.bidDetails.bid_status}}</span>\n              <p>Your Bid Price: {{item.bidDetails.bid_amount}}</p>\n              <p>Current Bid Price: {{item.productDetails.current_bid_price}}</p>\n              \n              <!-- <ul>\n                <li>\n                  <p>Bid Start Price</p>\n                  <h6 style="color: #0ec0ed;">${{item.bid_start_price}}</h6>\n                </li>\n                <li *ngIf="item.current_bid_price">\n                  <p>Current Price</p>\n                  <h6>{{item.current_bid_price}}</h6>\n                </li>\n                <li>\n                  <p>bids</p>\n                  <h6>{{item.bid_count}}</h6>\n                </li>\n              </ul> -->\n            </ion-col>\n          </ion-row>\n          <ion-row style="border-bottom: 1px solid #bfbbbb;line-height: 1px;">\n              <p>Start Date:{{item.bidDetails.created_at}}</p>\n              <p>Bid Status: <span style="color:green;">{{item.productDetails.status}}</span></p>\n          </ion-row>\n          </div>\n        </ion-list>\n        <ion-infinite-scroll (ionInfinite)="moreProducts($event)"> \n            <ion-infinite-scroll-content loadingSpinner="bubbles"\n            loadingText="Loading more products..."></ion-infinite-scroll-content>\n          </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\my-bidding-history\my-bidding-history.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */]])
    ], MyBiddingHistoryPage);
    return MyBiddingHistoryPage;
}());

//# sourceMappingURL=my-bidding-history.js.map

/***/ })

});
//# sourceMappingURL=25.js.map