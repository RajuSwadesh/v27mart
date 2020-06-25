webpackJsonp([20],{

/***/ 591:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderPageModule", function() { return OrderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(655);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderPageModule = /** @class */ (function () {
    function OrderPageModule() {
    }
    OrderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__order__["a" /* OrderPage */]
            ]
        })
    ], OrderPageModule);
    return OrderPageModule;
}());

//# sourceMappingURL=order.module.js.map

/***/ }),

/***/ 655:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(65);
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
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderPage = /** @class */ (function () {
    function OrderPage(navCtrl, navParams, api, service, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.service = service;
        this.http = http;
        this.orders = [];
        this.page = 1;
    }
    OrderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OrderPage');
        var base = this;
        // base.Orders = [];
        base.service.LoaderShowmsg('Loading your orders...');
        base.api.GET("/AllOrdersLists?page=1").then(function (response) {
            console.log(response);
            base.service.LoaderHide();
            if (response.status == 'success') {
                base.otherDetails = response.data.paginate;
                base.orders = response.data.orders;
                console.log(base.orders);
            }
            else {
                base.service.Warning(response.msg);
            }
        }).catch(function (error) {
            base.service.LoaderHide();
            base.service.Warning('Something went wrong. Try again later');
            console.log(error);
        });
    };
    OrderPage.prototype.downloadProducts = function (infiniteScroll) {
        var base = this;
        setTimeout(function () {
            if (base.otherDetails.next_page_url != null) {
                base.page = base.page + 1;
                base.api.GET("/AllOrdersLists?page=" + base.page).then(function (response) {
                    console.log(response);
                    if (response.status == 'success') {
                        base.service.LoaderHide();
                        base.otherDetails = response.data.paginate;
                        base.orders = base.orders.concat(response.data.orders);
                        console.log(base.orders);
                        infiniteScroll.complete();
                        if (response.data.orders.length == 0) {
                            infiniteScroll.enable(false);
                        }
                    }
                }).catch(function (error) {
                });
            }
            else {
                infiniteScroll.enable(false);
            }
        }, 500);
    };
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\order\order.html"*/'<!--\n  Generated template for the OrderPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header mode="md">\n\n    <ion-navbar mode="md" color="primary">\n        <ion-buttons left="" style="margin-left: 6px" menuToggle="">\n            <button ion-button clear icon-only="">\n              <ion-icon name="menu"></ion-icon>\n            </button>\n          </ion-buttons>\n      <ion-title mode="ios" text-capitalize="">Order</ion-title>\n  \n    </ion-navbar>\n  \n  </ion-header>\n  \n\n<ion-content padding>\n    <!-- <div class="animated fadeInUp">\n\n        <div no-padding="" *ngFor="let Items of orders">\n          <ion-list mode="wp">\n            <ion-item mode="wp" class="animated fadeInUp" class="animated fadeInUp" (tap)="ProductPage(Item)">\n              <h2 style="margin-top:2px;">{{Items.id}} on {{Items.created_at.date}}</h2>\n              <p>Rs.{{Items.total}}</p>\n              <p>Order Status : {{Items.order_status}}</p>\n            </ion-item>\n          </ion-list>\n        </div>\n  \n      <ion-infinite-scroll (ionInfinite)="downloadProducts($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </div> -->\n\n    <div class="animated fadeInUp">\n\n      <div no-padding="" *ngFor="let Items of orders">\n        <ion-list mode="wp">\n          <ion-item mode="wp" class="animated fadeInUp" class="animated fadeInUp" *ngFor="let Item of Items.OrderDetails" (tap)="ProductPage(Item)">\n            <ion-avatar item-start mode="wp">\n              <img [src]="Item.product_image.small">\n            </ion-avatar>\n            <h2>{{Item.product_title}}</h2>\n            <p>Rs.{{Item.price}}</p>\n            <p>Shipping Status : {{Item.shipping_status}}</p>\n          </ion-item>\n        </ion-list>\n      </div>\n\n    <ion-infinite-scroll (ionInfinite)="downloadProducts($event)">\n      <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\order\order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ })

});
//# sourceMappingURL=20.js.map