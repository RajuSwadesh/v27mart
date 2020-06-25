webpackJsonp([21],{

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferCheckoutPageModule", function() { return OfferCheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offer_checkout__ = __webpack_require__(654);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferCheckoutPageModule = /** @class */ (function () {
    function OfferCheckoutPageModule() {
    }
    OfferCheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offer_checkout__["a" /* OfferCheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offer_checkout__["a" /* OfferCheckoutPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__offer_checkout__["a" /* OfferCheckoutPage */]
            ]
        })
    ], OfferCheckoutPageModule);
    return OfferCheckoutPageModule;
}());

//# sourceMappingURL=offer-checkout.module.js.map

/***/ }),

/***/ 654:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferCheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__instamojo_new_transaction__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__(65);
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
 * Generated class for the OfferCheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferCheckoutPage = /** @class */ (function () {
    function OfferCheckoutPage(navCtrl, navParams, http, api, service, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.api = api;
        this.service = service;
        this.auth = auth;
        this.offer_id = '';
        this.accepted_id = '';
        this.AllAddress = [];
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.mobile = '';
        this.address = '';
        this.city = '';
        this.pin = '';
        this.ItemCost = 0;
        this.TotalAmount = 0;
        this.ShippingCost = 0;
        this.location = '';
        this.payment = '';
        this.offer_id = this.navParams.get('offer_id');
        this.accepted_id = this.navParams.get('accepted_id');
        console.log(this.offer_id, this.accepted_id);
        var base = this;
        base.api.GET("/GetOfferPayment/" + base.offer_id + '/' + base.accepted_id).then(function (res) {
            console.log(res);
            // base.ReportDetails = Cart.data;
            base.cart_detail = res.data.CartDetails;
            base.ShippingCost = res.data.ShippingCost;
            base.ItemCost = (res.data.ReportDetails.totalAmount) - (res.data.ReportDetails.totalShipping);
            base.TotalAmount = res.data.ReportDetails.totalAmount + (+base.ShippingCost);
        }).catch(function (error) {
        });
    }
    OfferCheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferCheckoutPage');
        this.getAllAddress();
    };
    OfferCheckoutPage.prototype.getAllAddress = function () {
        var base = this;
        base.service.LoaderShow();
        base.api.GET("/myAddresses").then(function (address) {
            base.service.LoaderHide();
            if (address.status == 'success') {
                base.AllAddress = address.data;
                console.log(base.AllAddress);
            }
        }).catch(function (error) {
            base.service.LoaderHide();
            base.service.Warning('error');
        });
    };
    OfferCheckoutPage.prototype.selectAddress = function (info) {
        this.fname = info.firstname;
        this.lname = info.lastname;
        this.email = info.email;
        this.address = info.address1;
        this.city = info.city;
        this.pin = info.pin;
        this.mobile = info.mobile;
    };
    OfferCheckoutPage.prototype.Checkout = function () {
        if (this.shipping == '') {
            this.service.Warning("Choose your shipping location");
        }
        if (this.fname == '') {
            this.service.Warning("Enter your first name");
        }
        else if (this.lname == '') {
            this.service.Warning("Enter your last name");
        }
        else if (this.email == '') {
            this.service.Warning("Enter your email");
        }
        else if (this.mobile == '') {
            this.service.Warning("Enter your mobile");
        }
        else if (this.address == '') {
            this.service.Warning("Enter your address");
        }
        else if (this.city == '') {
            this.service.Warning("Enter your city");
        }
        else if (this.pin == '') {
            this.service.Warning("Enter your postal pin");
        }
        else {
            var base_1 = this;
            if (base_1.payment == "Cash On Delivery") {
                base_1.service.LoaderShowmsg("Placing your order");
                base_1.api.POST("/PlaceOfferOrder", {
                    CartID: base_1.cart_detail[0].cart_id,
                    NegHisID: base_1.accepted_id,
                    NegID: base_1.offer_id,
                    address1: base_1.address,
                    address2: '',
                    pin: base_1.pin,
                    city: base_1.city,
                    email: base_1.email,
                    firstname: base_1.fname,
                    lastname: base_1.lname,
                    mobile: base_1.mobile,
                    orderAmt: base_1.TotalAmount,
                    payment: "Cash On Delivery",
                    shippingAmt: base_1.ShippingCost,
                    payment_detail: ''
                }).then(function (success) {
                    base_1.service.LoaderHide();
                    if (success.status == 'success') {
                        base_1.navCtrl.setRoot('OrderPage');
                        base_1.service.Success("Order placed successfully");
                    }
                    else {
                        base_1.service.Warning(success.data);
                    }
                }).catch(function (error) {
                    base_1.service.LoaderHide();
                    base_1.service.Warning("Something went wrong. Try again later");
                });
            }
            else {
                base_1.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__instamojo_new_transaction__["a" /* NewTransactionPage */], {
                    page: 'offer-checkout',
                    CartID: base_1.cart_detail[0].cart_id,
                    NegHisID: base_1.accepted_id,
                    NegID: base_1.offer_id,
                    address1: base_1.address,
                    address2: '',
                    email: base_1.email,
                    firstname: base_1.fname,
                    lastname: base_1.lname,
                    mobile: base_1.mobile,
                    orderAmt: base_1.TotalAmount,
                    payment: "instamojo",
                    shippingAmt: base_1.ShippingCost
                });
            }
        }
    };
    OfferCheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer-checkout',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\offer-checkout\offer-checkout.html"*/'<!--\n  Generated template for the OfferCheckoutPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header mode="md">\n  <ion-navbar mode="md" color="primary">\n    <ion-title mode="ios" text-capitalize="">Ship to</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div class="product_details">\n    <h4>Suggested Address </h4>\n\n    <div class="address_wrapper">\n      <ion-card class="animated fadeInRight" *ngFor="let address of AllAddress" (click)="selectAddress(address)">\n        <ion-card-content no-padding="">\n          <p style="font-weight: 500;">{{address.firstname}} {{address.lastname}}</p>\n          <p>{{address.mobile}}</p>\n          <p>{{address.address1}}</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n  <div class="product_details">\n      <h4>Cart Information </h4>\n      <ion-list>\n        <ion-item> Item Cost : <span item-end="">Rs.{{ItemCost}}</span> </ion-item>\n        <ion-item> Shipping Cost : <span item-end="">Rs.{{ShippingCost}}</span></ion-item>\n        <ion-item> Total Payable : <span item-end="">Rs.{{TotalAmount}}</span></ion-item>\n      </ion-list>\n    </div>\n\n  <div class="product_details">\n    <h4>Shipping Method </h4>\n    <div class="form_area">\n\n      <input type="text" placeholder="First Name" [(ngModel)]="fname" class="animated fadeInUp">\n      <input type="text" placeholder="Last Name" [(ngModel)]="lname" class="animated fadeInUp">\n      <input type="email" placeholder="Email Address" [(ngModel)]="email" class="animated fadeInUp">\n      <input type="tel" placeholder="Phone Number" [(ngModel)]="mobile" class="animated fadeInUp">\n      <input type="text" placeholder="Address" [(ngModel)]="address" class="animated fadeInUp">\n\n      <input type="text" placeholder="City" [(ngModel)]="city" class="animated fadeInUp">\n      <input type="number" placeholder="Postal Pin Code" [(ngModel)]="pin" class="animated fadeInUp">\n\n      <ion-item no-lines="" mode="md">\n        <ion-label mode="md">Payment</ion-label>\n        <ion-select [(ngModel)]="payment" mode="md">\n          <ion-option mode="md" value="Cash On Delivery">Cash On Delivery</ion-option>\n          <ion-option mode="md" value="instamojo">Instamojo</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </div>\n\n  </div>\n\n\n</ion-content>\n\n<ion-footer class="animated fadeInUp">\n  <button ion-button="" full mode="ios" no-margin="" (click)="Checkout()">\n    Checkout\n  </button>\n</ion-footer>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\offer-checkout\offer-checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], OfferCheckoutPage);
    return OfferCheckoutPage;
}());

//# sourceMappingURL=offer-checkout.js.map

/***/ })

});
//# sourceMappingURL=21.js.map