webpackJsonp([55],{

/***/ 560:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(624);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]
            ]
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 624:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, popoverCtrl, http, api, service, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.api = api;
        this.service = service;
        this.auth = auth;
        this.cartData = [];
        this.totalPrice = 0;
        this.product = {
            quantity: 0
        };
        this.base_url = api.Base_Url;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
        this.fetchCart();
    };
    CartPage.prototype.increment = function () {
        if (this.product.quantity < 10) {
            this.product.quantity++;
        }
    };
    CartPage.prototype.decrement = function () {
        if (this.product.quantity > 0) {
            this.product.quantity--;
        }
    };
    CartPage.prototype.paytype = function () {
        var popover = this.popoverCtrl.create('PaytypePage');
        popover.present();
    };
    CartPage.prototype.fetchCart = function () {
        var base = this;
        base.service.LoaderShowmsg("Loading your cart items..");
        var url = base.base_url + '/GetCart?CartID=' + base.api.getCartID();
        console.log(url);
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'authorization': "Bearer " + base.auth.getToken()
        });
        var options = {
            headers: httpHeaders
        };
        base.http.get(url, options).subscribe(function (response) {
            base.service.LoaderHide();
            console.log(response);
            base.cartData = response.data.CartDetails;
            base.cartDataLength = base.cartData.length;
            base.totalPrice = response.data.ReportDetails.totalAmount;
            //base.total_cart_item=response.data.CartDetails.length;
        });
    };
    CartPage.prototype.UpdateCart = function (id, action) {
        var base = this;
        var QTY = document.getElementById('QTY' + id).value;
        console.log(QTY);
        var CurrentQTY = 0;
        if (action == 1) {
            CurrentQTY = parseInt(QTY) + 1;
            console.log(CurrentQTY);
        }
        else {
            CurrentQTY = parseInt(QTY) - 1;
            console.log(CurrentQTY);
        }
        if (CurrentQTY > 0) {
            base.service.LoaderShow();
            document.getElementById('QTY' + id).value = CurrentQTY.toString();
            var cart_update_url = base.base_url + '/updateCart/' + id;
            console.log(cart_update_url);
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
                'Accept': 'application/json',
                'authorization': "Bearer " + base.auth.getToken()
            });
            var options = {
                headers: httpHeaders
            };
            base.http.post(cart_update_url, {
                CartID: base.api.getCartID(),
                qty: CurrentQTY
            }, options).subscribe(function (response) {
                console.log(response);
                base.service.LoaderHide();
                base.fetchCart();
            });
        }
    };
    CartPage.prototype.checkout = function () {
        this.navCtrl.push("CheckoutPage");
    };
    CartPage.prototype.remove = function (product_id) {
        console.log("remove called");
        var base = this;
        base.service.LoaderShowmsg("Removing product from cart");
        console.log(base.api.getCartID());
        var url = base.base_url + "/removeCart/" + product_id + "?CartID=" + base.api.getCartID();
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'authorization': "Bearer " + base.auth.getToken()
        });
        var options = {
            headers: httpHeaders
        };
        console.log(url);
        base.http.get(url, options).subscribe(function (response) {
            console.log(response);
            if (response.status == 'success') {
                base.service.LoaderHide();
                base.fetchCart();
            }
            else {
                base.service.LoaderHide();
            }
        }, function (err) {
            base.service.LoaderHide();
            base.service.Warning("Something went wrong. Try again later");
        });
    };
    CartPage.prototype.shop = function () {
        this.navCtrl.setRoot('CategoriesPage');
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\cart\cart.html"*/'<ion-header mode="md">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">Cart</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="cartDataLength==0" id="no-data-cart" class="animated fadeInUp">\n    <img src="assets/imgs/empty-whishlist-icon.png"/>\n    <p style="font-weight: bolder;\n      font-size: 18px;\n      color: #545353;">Cart Is Empty</p>\n      <p>Looks like you have no items in your shopping cart</p>\n      <button ion-button (click)="shop()" >Continue Shopping</button>\n  </div>\n\n  <div class="product_details" *ngIf="cartDataLength>0">\n    <ion-row no-padding="" *ngFor="let Item of cartData">\n\n      <ion-col style="max-width: 120px;padding-left: 0">\n        <img [src]="Item.product_image.small">\n        <div class="product_value">\n          <button ion-button="" small icon-only="" clear (tap)="UpdateCart(Item.cart_id, 0)">\n            <ion-icon name="remove"></ion-icon>\n          </button>\n          <input type="number" value="{{Item.qty}}" id="QTY{{Item.cart_id}}">\n          <button ion-button="" small icon-only="" clear (tap)="UpdateCart(Item.cart_id, 1)">\n            <ion-icon name="add"></ion-icon>\n          </button>\n        </div>\n      </ion-col>\n\n      <ion-col class="description">\n        <h4>{{Item.product_title}}</h4>\n        <div class="price_area">\n          <p style="font-size: 15px;">&#8377; {{Item.total_cart_price}}<span class="no-discount" *ngIf="Item.discount_amount==0">No Discount</span></p>\n          <!-- <h6>$120</h6>\n          <small>39%</small> -->\n        </div>\n        <p class="rmv-btn" (click)="remove(Item.cart_id)"><ion-icon name="ios-trash"></ion-icon>Remove</p>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n</ion-content>\n\n<ion-footer class="animated fadeInUp" no-border="" *ngIf="cartDataLength>0">\n  <button ion-button="" full mode="ios" no-margin="" (tap)="checkout()">\n    Checkout <span style="margin-left:6px;">with <span style="font-weight: 600;">{{totalPrice}}/-</span> </span>\n  </button>\n</ion-footer>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=55.js.map