webpackJsonp([9],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistPageModule", function() { return WishlistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__wishlist__ = __webpack_require__(664);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WishlistPageModule = /** @class */ (function () {
    function WishlistPageModule() {
    }
    WishlistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* WishlistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__wishlist__["a" /* WishlistPage */]),
            ],
        })
    ], WishlistPageModule);
    return WishlistPageModule;
}());

//# sourceMappingURL=wishlist.module.js.map

/***/ }),

/***/ 664:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WishlistPage; });
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
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WishlistPage = /** @class */ (function () {
    function WishlistPage(navCtrl, navParams, api, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.service = service;
        this.product = {
            quantity: 0
        };
        this.wishList = [];
    }
    WishlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WishlistPage');
        this.getWishlist();
    };
    WishlistPage.prototype.getWishlist = function () {
        var base = this;
        base.service.LoaderShowmsg("Loading your wishlist...");
        base.api.GET('/GetWishlist').then(function (response) {
            base.service.LoaderHide();
            base.wishList = response.data;
            base.wishlist_length = base.wishList.length;
            console.log(base.wishList);
        }).catch(function (error) {
            base.service.LoaderHide();
        });
    };
    WishlistPage.prototype.increment = function () {
        if (this.product.quantity < 10) {
            this.product.quantity++;
        }
    };
    WishlistPage.prototype.decrement = function () {
        if (this.product.quantity > 0) {
            this.product.quantity--;
        }
    };
    WishlistPage.prototype.remove = function (id) {
        var base = this;
        base.api.POST('/RemoveWishlist', {
            id: id
        }).then(function (response) {
            if (response.status == "error") {
                base.service.Warning(response.data);
            }
            else {
                base.getWishlist();
                base.service.Success(response.data);
            }
        }).catch(function (error) {
            base.service.Warning(error);
        });
    };
    WishlistPage.prototype.viewDetail = function (url) {
        this.navCtrl.push('ProductdetailsPage', { url: url });
    };
    WishlistPage.prototype.shop = function () {
        this.navCtrl.setRoot('CategoriesPage');
    };
    WishlistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-wishlist',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\wishlist\wishlist.html"*/'<ion-header mode="md">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">WishList</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div *ngIf="wishlist_length==0" id="no-data-wish" class="animated fadeInUp">\n    <img src="assets/imgs/empty-whishlist-icon.png" />\n    <p style="font-weight: bolder;\n      font-size: 18px;\n      color: #545353;">WishList Is Empty</p>\n    <p>Looks like you have no items in your wishlist</p>\n    <button ion-button (click)="shop()">Continue Shopping</button>\n  </div>\n\n  <div class="product_details" *ngIf="wishlist_length>0">\n    <ion-row no-padding="" *ngFor="let item of wishList">\n      <ion-col style="max-width: 120px;padding-left: 0">\n        <img [src]="item.product_image.small">\n        <p class="out" *ngIf="item.status==\'Active\' && item.stock==0">Out Of Stock</p>\n        <p class="out" style="font-size: 10px;" *ngIf="item.status==\'Inactive\'">Currently Unavailable</p>\n      </ion-col>\n      <ion-col class="description" (click)="viewDetail(item.url)">\n        <h4>{{item.product_title}}</h4>\n        <p class="few-left" *ngIf=" item.status==\'Active\' && (item.stock>0 && item.stock<5)">Only a few lefts</p>\n        <div class="price_area">\n          <h3>&#x20B9;{{item.sale_price}}</h3>\n        </div>\n      </ion-col>\n\n      <ion-col style="max-width: 30px;padding-left: 0;margin-top: -15px;">\n        <p style="float: right;" (click)="remove(item.id)">\n          <ion-icon name="trash" style="color: grey;\n          font-size: 22px;"></ion-icon>\n        </p>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\wishlist\wishlist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], WishlistPage);
    return WishlistPage;
}());

//# sourceMappingURL=wishlist.js.map

/***/ })

});
//# sourceMappingURL=9.js.map