webpackJsonp([54],{

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesPageModule", function() { return CategoriesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__categories__ = __webpack_require__(625);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CategoriesPageModule = /** @class */ (function () {
    function CategoriesPageModule() {
    }
    CategoriesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__categories__["a" /* CategoriesPage */]),
            ],
        })
    ], CategoriesPageModule);
    return CategoriesPageModule;
}());

//# sourceMappingURL=categories.module.js.map

/***/ }),

/***/ 625:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(161);
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
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CategoriesPage = /** @class */ (function () {
    function CategoriesPage(navCtrl, navParams, http, api, service, events, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.api = api;
        this.service = service;
        this.events = events;
        this.auth = auth;
        this.sliderList = [];
        this.categoryList = [];
        this.fetchData = false;
        this.total_cart_item = 0;
        this.new_arrival_products = [];
        this.featured_products = [];
        this.visible = false;
        this.base_url = api.Base_Url;
        console.log(this.base_url);
    }
    CategoriesPage.prototype.ionViewWillEnter = function () {
        this.fetchCart();
    };
    CategoriesPage.prototype.ionViewDidLoad = function () {
        var base = this;
        var url = base.base_url + '/getSlider';
        base.http.get(url).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                base.sliderList = data.data;
                console.log(base.sliderList);
            }
            else {
            }
        }, function (error) {
            base.service.Warning('Something went wrong. Try again later');
        });
        var url1 = base.base_url + '/headerCategory';
        base.http.get(url1).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                base.categoryList = data.data;
                console.log(base.categoryList);
            }
            else {
            }
        }, function (error) {
            base.service.Warning('Something went wrong. Try again later');
        });
        base.api.GET("/featuredProduct/10").then(function (success) {
            console.log(success);
            if (success.status == 'success') {
                base.featured_products = success.data;
            }
            // if(success.data.length > 0 ){
            //   for (let i = 0; i < success.data.length; i++) {
            //     base.Products.push(success.data[i]);
            //   }
            // }
        }).catch(function (error) {
            console.log(error);
        });
        base.api.GET("/newArrivalProduct/10").then(function (success) {
            console.log(success);
            if (success.status == 'success') {
                base.new_arrival_products = success.data;
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    CategoriesPage.prototype.search = function () {
        this.navCtrl.push('SearchPage');
    };
    CategoriesPage.prototype.productdetails = function () {
        this.navCtrl.push('ProductsPage');
    };
    CategoriesPage.prototype.bidding = function () {
        this.navCtrl.push('BiddingPage');
    };
    CategoriesPage.prototype.donateinfo = function () {
        this.navCtrl.push('DonateinfoPage');
    };
    CategoriesPage.prototype.exchange = function () {
        this.navCtrl.push('ExchangePage');
    };
    CategoriesPage.prototype.wishlist = function () {
        this.navCtrl.push('WishlistPage');
    };
    CategoriesPage.prototype.categoryshowhide = function () {
        this.visible = !this.visible;
        var row = document.getElementById('row');
        var gradient = document.getElementById('gradient');
        if (!this.visible) {
            row.style.height = "300px";
        }
        else {
            row.style.height = "420px";
        }
    };
    CategoriesPage.prototype.gotoDetail = function (info) {
        console.log(info);
        // if(info.id==4 || info.id==5 || info.id==6 || info.id==9 || info.id==10 || info.id==12 || info.id==13 || info.id==14 || info.id==15 || info.id==16 || info.id==17)
        // {
        //  this.navCtrl.push('ProductsPage',{detail:info})
        // }
        if (info.id == 3) {
            this.navCtrl.push('DonateinfoPage');
        }
        else if (info.id == 4) {
            this.navCtrl.push('BiddingPage', { detail: info });
        }
        else if (info.id == 5) {
            this.navCtrl.push('ExchangePage', { detail: info });
        }
        else if (info.id == 12) {
            this.navCtrl.push('JobsPage');
        }
        else if (info.id == 9) {
            this.navCtrl.push('PropertyPage');
        }
        else {
            console.log("inside else");
            this.navCtrl.push('ProductsPage', { detail: info });
        }
    };
    CategoriesPage.prototype.gotoDonation = function () {
        this.navCtrl.push('DonateinfoPage');
    };
    CategoriesPage.prototype.gotobidding = function () {
        this.navCtrl.push('BiddingPage');
    };
    CategoriesPage.prototype.gotoexchange = function () {
        this.navCtrl.push('ExchangePage');
    };
    CategoriesPage.prototype.gotoClassified = function () {
        this.navCtrl.push('ClassifiedAdsPage');
    };
    CategoriesPage.prototype.fetchCart = function () {
        var base = this;
        var url = base.base_url + '/GetCart?CartID=' + base.api.getCartID();
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'authorization': "Bearer " + base.auth.getToken()
        });
        var options = {
            headers: httpHeaders
        };
        base.http.get(url, options).subscribe(function (response) {
            console.log(response);
            base.total_cart_item = response.data.CartDetails.length;
        });
    };
    CategoriesPage.prototype.cart = function () {
        this.navCtrl.push('CartPage');
    };
    CategoriesPage.prototype.calculateDiscount = function (item) {
        var discount = (item.sale_price / item.regular_price) * 100;
        return discount;
    };
    CategoriesPage.prototype.viewAll = function (type) {
        this.navCtrl.push('ProductsPage', { type: type });
    };
    CategoriesPage.prototype.deatils = function (url) {
        this.navCtrl.push('ProductdetailsPage', { url: url });
    };
    CategoriesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-categories',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\categories\categories.html"*/'<ion-header mode="md">\n\n    <ion-toolbar mode="md" color="primary">\n\n    <ion-buttons left="" style="margin-left: 6px" menuToggle="">\n      <button ion-button clear icon-only="">\n        <ion-icon name="menu"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-title mode="ios" text-capitalize="">V27 mart</ion-title>\n\n    <ion-buttons right="" style="margin-right: 8px" (click)="search()">\n      <button ion-button clear icon-only="">\n        <ion-icon name="ios-search"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons right="" (tap)="cart()" style="margin-right: 8px">\n      <button ion-button clear icon-only="">\n        <ion-icon name="ios-cart-outline"></ion-icon>\n        <ion-badge item-end color="danger">{{total_cart_item}}</ion-badge>\n      </button>\n    </ion-buttons>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n<ion-content >\n\n  <div class="slider_wrapper">\n    <ion-slides *ngIf="sliderList && sliderList.length" pager autoplay="5000" loop="true" speed="500">\n      <ion-slide *ngFor="let banner of sliderList">\n        <img src="{{banner.banner_image.url}}" alt="">\n      </ion-slide>\n    </ion-slides>\n  </div>\n\n\n  <div class="top-fixed">\n      <ion-row id="row1">\n        <!--<ion-col col-4="" class="animated fadeInUp" (click)="gotoexchange()">-->\n          <!--<div class="button_wrapper">-->\n            <!--<img src="assets/imgs/lineicon/ic_exchange.svg"/>-->\n            <!--<h4>Exchange Goods</h4>-->\n          <!--</div>-->\n        <!--</ion-col>-->\n          <!--<ion-col col-4="" class="animated fadeInUp" (click)="gotobidding()">-->\n              <!--<div class="button_wrapper">-->\n                <!--<img src="assets/imgs/lineicon/ic_auction.svg"/>-->\n                <!--<h4>Bidding</h4>-->\n              <!--</div>-->\n            <!--</ion-col>-->\n\n      </ion-row>\n  </div>\n\n  <ion-grid style="padding: 0 0 8px">\n\n    <ion-row id="row">\n\n\n      <ion-col col-4="" class="animated fadeInUp" (click)="gotoDonation()">\n      <div class="button_wrapper">\n      <img src="assets/imgs/lineicon/ic_heart.svg"/>\n      <h4>Donations</h4>\n      </div>\n      </ion-col>\n\n      <ion-col col-4="" class="animated fadeInUp" (click)="gotoClassified()">\n        <div class="button_wrapper">\n          <img src="assets/imgs/lineicon/ads.svg"/>\n          <h4>Classified</h4>\n        </div>\n      </ion-col>\n\n      <ion-col col-4="" class="animated fadeInUp"  *ngFor="let cat of categoryList"  (click)="gotoDetail(cat)">\n        <div class="button_wrapper">\n          <img [src]="cat.image_path">\n          <h4>{{cat.name}}</h4>\n        </div>\n      </ion-col>\n      <div id="gradient" *ngIf="!visible" (tap)="categoryshowhide()"></div>\n\n    </ion-row>\n    <button ion-button="" small icon-only="" (tap)="categoryshowhide()" class="hideshow_btn" mode="ios"\n            color="extralight">\n      <ion-icon [name]="visible ? \'ios-arrow-up\' :\'ios-arrow-down\'"></ion-icon>\n    </button>\n\n  </ion-grid>\n\n  <div padding-horizontal="" *ngIf="featured_products.length>0">\n    <div class="product_details">\n      <h4>Featured Products\n        <button ion-button="" small clear mode="ios" text-capitalize="" no-margin="" (click)="viewAll(\'featured\')">\n          View All\n        </button>\n      </h4>\n      <ion-slides slidesPerView="2.1" spaceBetween="8">\n        <ion-slide *ngFor="let item of featured_products">\n          <div class="product_wrapper">\n            <img [src]="item.product_image.original" style="height: 150px;object-fit: contain;">\n            <h4>{{item.product_title}}</h4>\n            <div class="price_area">\n              <h3>&#x20B9;{{item.sale_price}}</h3>\n              <h6 *ngIf="item.regular_price>item.sale_price">{{item.regular_price}}</h6>\n              <small *ngIf="item.regular_price>item.sale_price">{{calculateDiscount(item)}}%</small>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n  <div padding-horizontal="" *ngIf="new_arrival_products.length>0">\n    <div class="product_details">\n      <h4>New Arrival Products\n        <button ion-button="" small clear mode="ios" text-capitalize="" no-margin="" (click)="viewAll(\'new_arrival\')">\n          View All\n        </button>\n      </h4>\n      <ion-slides slidesPerView="2" spaceBetween="6">\n        <ion-slide  *ngFor="let item of new_arrival_products"  (tap)="deatils(item.url)">\n          <div class="product_wrapper">\n            <img [src]="item.product_image.original" style="height: 150px;object-fit: contain;">\n            <h4>{{item.product_title}}</h4>\n            <div class="price_area">\n              <h3>&#x20B9;{{item.sale_price}}</h3>\n              <h6 *ngIf="item.regular_price>item.sale_price">{{item.regular_price}}</h6>\n            </div>\n          </div>\n        </ion-slide>\n      </ion-slides>\n    </div>\n  </div>\n\n</ion-content>\n\n<!-- <ion-content *ngIf="fetchData==false">\n  <div class="slider_wrapper">\n    <ion-slides pager>\n      <ion-slide *ngFor="let banner of sliderList">\n        <img src="" alt="">\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content> -->\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\categories\categories.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], CategoriesPage);
    return CategoriesPage;
}());

//# sourceMappingURL=categories.js.map

/***/ })

});
//# sourceMappingURL=54.js.map