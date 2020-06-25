webpackJsonp([56],{

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BiddingdetailsPageModule", function() { return BiddingdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__biddingdetails__ = __webpack_require__(623);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BiddingdetailsPageModule = /** @class */ (function () {
    function BiddingdetailsPageModule() {
    }
    BiddingdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__biddingdetails__["a" /* BiddingdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__biddingdetails__["a" /* BiddingdetailsPage */]),
            ],
        })
    ], BiddingdetailsPageModule);
    return BiddingdetailsPageModule;
}());

//# sourceMappingURL=biddingdetails.module.js.map

/***/ }),

/***/ 623:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiddingdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
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





var BiddingdetailsPage = /** @class */ (function () {
    function BiddingdetailsPage(navCtrl, navParams, api, http, popoverCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.productsArray = [
            { "src": "1.jpg", "id": 0 },
            { "src": "2.jpg", "id": 1 },
            { "src": "3.jpg", "id": 2 },
            { "src": "4.jpg", "id": 3 },
        ];
        this.slidenumber = 1;
        this.product_images = [];
        this.base_url = api.Base_Url;
        this.product_id = this.navParams.get('id');
        console.log(this.product_id);
    }
    BiddingdetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad BiddingdetailsPage');
        var base = this;
        console.log('ionViewDidLoad BiddingPage');
        base.service.LoaderShowmsg('Loading detail...');
        var url = base.base_url + '/biddingProductsDetails/' + this.product_id;
        console.log(url);
        base.http.get(url).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                base.service.LoaderHide();
                base.product_detail = data.data;
                console.log(base.product_detail);
                var url1 = base.base_url + '/biddingProductImages/' + _this.product_id;
                console.log(url1);
                base.http.get(url1).subscribe(function (res) {
                    console.log(res);
                    var new_arr = [{
                            id: 0,
                            imageurl: {
                                original: base.product_detail.product_image.original
                            },
                            product_id: base.product_detail.id
                        }];
                    _this.product_images = res.data.concat(new_arr);
                    console.log(_this.product_images);
                });
            }
            else {
                base.service.LoaderHide();
            }
        }, function (error) {
            base.service.LoaderHide();
            base.service.Warning('Something went wrong. Try again later');
        });
    };
    BiddingdetailsPage.prototype.ionViewDidEnter = function () {
        var totalslide = this.slides.length();
        this.totalslidernumber = totalslide - 1;
    };
    BiddingdetailsPage.prototype.imgchange = function (id) {
        console.log(this.productsArray[id]);
        this.slides.slideTo(id);
    };
    BiddingdetailsPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex == this.product_images.length) {
        }
        else {
            this.slidenumber = currentIndex + 1;
        }
    };
    BiddingdetailsPage.prototype.doBid = function () {
        var _this = this;
        var popover = this.popoverCtrl.create('DoBidPage', { detail: this.product_detail });
        popover.present({});
        popover.onDidDismiss(function () {
            _this.ionViewDidLoad();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], BiddingdetailsPage.prototype, "slides", void 0);
    BiddingdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-biddingdetails',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\biddingdetails\biddingdetails.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Bidding Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n  <div class="product_imgs animated fadeInUp">\n\n    <p class="current_index" *ngIf="product_images">\n      {{slidenumber}} / {{product_images.length}}\n    </p>\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide pager *ngFor="let item of product_images;">\n        <img [src]="item.imageurl.original">\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <div class="bidding_details animated fadeInUp" *ngIf="product_detail">\n    <h4>{{product_detail.product_title}}</h4>\n    <span class="status active">{{product_detail.status}}</span>\n    <ul>\n      <!-- <li>\n        <p>item</p>\n        <h6>165378TX85</h6>\n      </li> -->\n      <li>\n        <p>max bid</p>\n        <h6 style="color: #0ec0ed;" *ngIf="product_detail.current_bid_price!=null">${{product_detail.current_bid_price}}</h6>\n        <h6 style="color: #0ec0ed;" *ngIf="product_detail.current_bid_price==null">0</h6>\n      </li>\n      <li>\n        <p>ends</p>\n        <h6>{{product_detail.biding_end}}</h6>\n      </li>\n      <li>\n        <p>bids</p>\n        <h6>{{product_detail.bid_count}}</h6>\n      </li>\n    </ul>\n    <ion-list>\n        <ion-item>\n            <h3>Bid Increment Percent<span>{{product_detail.bid_increment_percent}}</span></h3>\n          </ion-item>\n      <ion-item>\n        <h3>Product Condition<span>{{product_detail.product_condition}}</span></h3>\n      </ion-item>\n      <ion-item>\n        <h3>Shipping Charge<span>{{product_detail.shipping_charge}}</span></h3>\n      </ion-item>\n      <ion-item>\n        <h3>Stock<span>{{product_detail.stock}}</span></h3>\n      </ion-item>\n    </ion-list>\n\n    <button ion-button color="primary" full class="animated fadeInLeft" style="animation-delay: 0.6s" *ngIf="product_detail.status==\'Active\'" (click)="doBid()">Bid</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\biddingdetails\biddingdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], BiddingdetailsPage);
    return BiddingdetailsPage;
}());

//# sourceMappingURL=biddingdetails.js.map

/***/ })

});
//# sourceMappingURL=56.js.map