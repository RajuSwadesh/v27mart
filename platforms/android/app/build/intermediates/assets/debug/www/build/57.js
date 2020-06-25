webpackJsonp([57],{

/***/ 558:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiddingPageModule", function() { return BiddingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bidding__ = __webpack_require__(622);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BiddingPageModule = /** @class */ (function () {
    function BiddingPageModule() {
    }
    BiddingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__bidding__["a" /* BiddingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bidding__["a" /* BiddingPage */]),
            ],
        })
    ], BiddingPageModule);
    return BiddingPageModule;
}());

//# sourceMappingURL=bidding.module.js.map

/***/ }),

/***/ 622:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiddingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BiddingPage = /** @class */ (function () {
    function BiddingPage(navCtrl, navParams, api, http, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.http = http;
        this.service = service;
        this.bid_view = "current";
        this.base_url = '';
        this.PriceRange = "";
        this.orderBy = 'asc';
        this.MinPrice = '';
        this.MaxPrice = '';
        this.page = 2;
        this.base_url = api.Base_Url;
        this.category_detail = this.navParams.get('detail');
        console.log(this.category_detail);
    }
    BiddingPage.prototype.ionViewWillEnter = function () {
        var base = this;
        console.log('ionViewDidLoad BiddingPage');
        var url = base.base_url + '/biddingProducts';
        console.log(url);
        base.service.LoaderShowmsg('Loading...');
        base.http.get(url).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                base.service.LoaderHide();
                base.product_list = data.data.records;
                console.log(base.product_list);
                base.PriceRange = "/" + data.data.minprice + "," + data.data.maxprice;
                base.MinPrice = data.data.minprice;
                base.MaxPrice = data.data.maxprice;
                //   base.filter_min=base.MinPrice;
                //   base.filter_max=base.MaxPrice;
                console.log(base.MinPrice, base.MaxPrice);
            }
            else {
                base.service.LoaderHide();
            }
        }, function (error) {
            base.service.LoaderHide();
            base.service.Warning('Something went wrong. Try again later');
        });
    };
    BiddingPage.prototype.moreProducts = function (infiniteScroll) {
        var base = this;
        setTimeout(function () {
            var url = base.base_url + '/biddingProducts/' + base.page;
            base.http.get(url).subscribe(function (response) {
                console.log(response);
                if (response.status == 'success') {
                    // base.service.LoaderHide();
                    base.product_list = base.product_list.concat(response.data.records);
                    if (response.data.records.length == 0) {
                        infiniteScroll.enable(false);
                    }
                    console.log(base.product_list);
                }
            });
            base.page = base.page + 1;
        }, 500);
    };
    BiddingPage.prototype.getName = function (name) {
        if (name.length > 28) {
            return name.substring(0, 28) + '...';
        }
        else {
            return name;
        }
    };
    BiddingPage.prototype.biddingdetails = function (info) {
        this.navCtrl.push('BiddingdetailsPage', { id: info.id });
    };
    BiddingPage.prototype.goToMyBidding = function () {
        this.navCtrl.push('MyBiddingHistoryPage');
    };
    BiddingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bidding',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\bidding\bidding.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Bidding</ion-title>\n    <ion-buttons right="" style="margin-right: 8px">\n        <button ion-button clear icon-left="" color="extralight" (tap)="goToMyBidding()">\n          My Bidding\n        </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n  <!-- <ion-segment [(ngModel)]="bid_view">\n    <ion-segment-button value="current">\n      Current\n    </ion-segment-button>\n    <ion-segment-button value="outbit">\n      Outbid\n    </ion-segment-button>\n    <ion-segment-button value="won">\n      Won\n    </ion-segment-button>\n  </ion-segment> -->\n\n\n  <!-- <div [ngSwitch]="bid_view" class="segment-display">\n    <ion-list *ngSwitchCase="\'current\'">\n\n      <div class="bid-wrapper">\n        <ion-row class="no-wrap" (tap)="biddingdetails()">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/1.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Radwagon Electric cargo bike</h4>\n            <span class="status active">Active</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$18.99</h6>\n              </li>\n              <li>\n                <p>ends</p>\n                <h6>Thursday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/2.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Sturdy bike duel suspensive</h4>\n            <span class="status won">Won</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/3.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>KTM 1920 Super bike</h4>\n            <span class="status lost">lost</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$204.04</h6>\n              </li>\n              <li>\n                <p>ends</p>\n                <h6>Yesterday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/4.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Handheld garment steamer</h4>\n            <span class="status won">Won</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/5.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Spiceberry Stone granite bowl</h4>\n            <span class="status inactive">Inactive</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$18.99</h6>\n              </li>\n              <li>\n                <p>ends</p>\n                <h6>Thursday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/6.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Sankheda Wooden dinning table</h4>\n            <span class="status active">Active</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/7.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>King living furniture collection</h4>\n            <span class="status active">Active</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$132.89</h6>\n              </li>\n              <li>\n                <p>ends</p>\n                <h6>Thursday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/8.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Clearance furniture</h4>\n            <span class="status lost">Lost</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'outbit\'">\n\n      <div class="bid-wrapper">\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/8.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Clearance furniture</h4>\n            <span class="status inactive">Inactive</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/1.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Radwagon Electric cargo bike</h4>\n            <span class="status active">Active</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$18.99</h6>\n              </li>\n              <li>\n                <p>ends</p>\n                <h6>Thursday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/6.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Sankheda Wooden dinning table</h4>\n            <span class="status active">Active</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/5.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Spiceberry Stone granite bowl</h4>\n            <span class="status inactive">Inactive</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$18.99</h6>\n              </li>\n              <li>\n                <p>ends</p>\n                <h6>Thursday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/7.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>King living furniture collection</h4>\n            <span class="status active">Active</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$132.89</h6>\n              </li>\n              <li>\n                <p>ends</p>\n                <h6>Thursday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n      </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'won\'">\n      <div class="bid-wrapper">\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/2.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Sturdy bike duel suspensive</h4>\n            <span class="status won">Won</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/4.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Handheld garment steamer</h4>\n            <span class="status won">Won</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n        <ion-row class="no-wrap">\n          <ion-col col-4 class="no-wrap">\n            <img src="assets/imgs/bidding/product/8.jpg" alt="">\n          </ion-col>\n          <ion-col col-8>\n            <h4>Clearance furniture</h4>\n            <span class="status won">Won</span>\n            <ul>\n              <li>\n                <p>max bid</p>\n                <h6 style="color: #0ec0ed;">$199.99</h6>\n              </li>\n              <li>\n                <p>ended</p>\n                <h6>friday</h6>\n              </li>\n              <li>\n                <p>bids</p>\n                <h6>0</h6>\n              </li>\n            </ul>\n          </ion-col>\n        </ion-row>\n      </div>\n    </ion-list> \n\n  </div>-->\n\n  <ion-list *ngFor="let item of product_list">\n\n    <div class="bid-wrapper">\n      <ion-row class="no-wrap" (tap)="biddingdetails(item)">\n        <ion-col col-4 class="no-wrap">\n          <img [src]="item.product_image.original" alt="">\n        </ion-col>\n        <ion-col col-8>\n          <h4>{{getName(item.product_title)}}</h4>\n          <span class="status active">{{item.status}}</span>\n          <ul>\n            <li>\n              <p>Bid Start Price</p>\n              <h6 style="color: #0ec0ed;">${{item.bid_start_price}}</h6>\n            </li>\n            <li *ngIf="item.current_bid_price">\n              <p>Current Price</p>\n              <h6>{{item.current_bid_price}}</h6>\n            </li>\n            <li>\n              <p>bids</p>\n              <h6>{{item.bid_count}}</h6>\n            </li>\n          </ul>\n        </ion-col>\n      </ion-row>\n      </div>\n    </ion-list>\n    <ion-infinite-scroll (ionInfinite)="moreProducts($event)"> \n      <ion-infinite-scroll-content loadingSpinner="bubbles"\n      loadingText="Loading more products..."></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\bidding\bidding.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], BiddingPage);
    return BiddingPage;
}());

//# sourceMappingURL=bidding.js.map

/***/ })

});
//# sourceMappingURL=57.js.map