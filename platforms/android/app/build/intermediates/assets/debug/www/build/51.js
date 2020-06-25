webpackJsonp([51],{

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(627);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 627:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
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
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, navParams, http, api, service, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.api = api;
        this.service = service;
        this.auth = auth;
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
        var base = this;
        base.api.GET("/GetCart?CartID=" + base.api.getCartID()).then(function (Cart) {
            console.log(Cart);
            base.ReportDetails = Cart.data;
            base.ShippingCost = Cart.data.ReportDetails.totalShipping;
            base.ItemCost = (Cart.data.ReportDetails.totalAmount) - (Cart.data.ReportDetails.totalShipping);
            base.TotalAmount = Cart.data.ReportDetails.totalAmount;
        }).catch(function (error) {
        });
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
        this.getAllAddress();
    };
    CheckoutPage.prototype.getAllAddress = function () {
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
    CheckoutPage.prototype.selectAddress = function (info) {
        this.fname = info.firstname;
        this.lname = info.lastname;
        this.email = info.email;
        this.address = info.address1;
        this.city = info.city;
        this.pin = info.pin;
        this.mobile = info.mobile;
    };
    CheckoutPage.prototype.shippingChange = function () {
        var base = this;
        if (base.shipping == "inside_katmandu_ringroad") {
            base.ShippingCost = base.ShippingInfo.inside_katmandu_ringroad;
            base.TotalAmount = +base.ItemCost + (+base.ShippingInfo.inside_katmandu_ringroad);
        }
        else if (base.shipping == "inside_katmandu_valley") {
            base.ShippingCost = base.ShippingInfo.inside_katmandu_valley;
            base.TotalAmount = +base.ItemCost + (+base.ShippingInfo.inside_katmandu_valley);
        }
        else {
            base.ShippingCost = base.ShippingInfo.outside_katmandu_valley;
            base.TotalAmount = +base.ItemCost + (+base.ShippingInfo.outside_katmandu_valley);
        }
    };
    CheckoutPage.prototype.Checkout = function () {
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
                base_1.api.POST("/AddOrder", {
                    shipping: base_1.address,
                    firstname: base_1.fname,
                    lastname: base_1.lname,
                    email: base_1.email,
                    mobile: base_1.mobile,
                    address1: base_1.address,
                    address2: "",
                    pin: base_1.pin,
                    city: base_1.city,
                    payment: base_1.payment,
                    CartID: base_1.api.getCartID(),
                    payment_id: '',
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
                base_1.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__instamojo_new_transaction__["a" /* NewTransactionPage */], { page: 'checkout', fname: base_1.fname, lname: base_1.lname, email: base_1.email, mobile: base_1.mobile, payment: base_1.payment, total_amt: base_1.TotalAmount, shipping: base_1.address, address1: base_1.address, CartID: base_1.api.getCartID(), item_total: base_1.ItemCost, shipping_cost: base_1.ShippingCost });
            }
        }
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\checkout\checkout.html"*/'<ion-header mode="md">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">Ship to</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div class="product_details">\n    <h4>Suggested Address </h4>\n\n    <div class="address_wrapper">\n      <ion-card class="animated fadeInRight" *ngFor="let address of AllAddress" (click)="selectAddress(address)">\n        <ion-card-content no-padding="">\n          <p style="font-weight: 500;">{{address.firstname}} {{address.lastname}}</p>\n          <p>{{address.mobile}}</p>\n          <p>{{address.address1}}</p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </div>\n\n  <div class="product_details">\n      <h4>Cart Information </h4>\n      <ion-list>\n        <ion-item> Item Cost : <span item-end="">Rs.{{ItemCost}}</span> </ion-item>\n        <ion-item> Shipping Cost : <span item-end="">Rs.{{ShippingCost}}</span></ion-item>\n        <ion-item> Total Payable : <span item-end="">Rs.{{TotalAmount}}</span></ion-item>\n      </ion-list>\n    </div>\n\n  <div class="product_details">\n    <h4>Shipping Method </h4>\n    <div class="form_area">\n      <!-- <ion-item no-lines="" mode="md" class="animated fadeInUp">\n        <ion-label mode="md">Delivery Location</ion-label>\n        <ion-select [(ngModel)]="shipping" mode="md" (ionChange)="shippingChange()">\n          <ion-option mode="md" value="1">Inside Kathmandu Ringroad</ion-option>\n          <ion-option mode="md" value="2">Inside Kathmandu Valley</ion-option>\n          <ion-option mode="md" value="3">Outside Kathmandu Valley</ion-option>\n        </ion-select>\n      </ion-item> -->\n\n      <input type="text" placeholder="First Name" [(ngModel)]="fname" class="animated fadeInUp">\n\n      <input type="text" placeholder="Last Name" [(ngModel)]="lname" class="animated fadeInUp">\n\n      <input type="email" placeholder="Email Address" [(ngModel)]="email" class="animated fadeInUp">\n      <input type="tel" placeholder="Phone Number" [(ngModel)]="mobile" class="animated fadeInUp">\n      <input type="text" placeholder="Address" [(ngModel)]="address" class="animated fadeInUp">\n\n      <input type="text" placeholder="City" [(ngModel)]="city" class="animated fadeInUp">\n      <input type="number" placeholder="Postal Pin Code" [(ngModel)]="pin" class="animated fadeInUp">\n\n\n      <ion-item no-lines="" mode="md">\n        <ion-label mode="md">Payment</ion-label>\n        <ion-select [(ngModel)]="payment" mode="md">\n          <ion-option mode="md" value="Cash On Delivery">Cash On Delivery</ion-option>\n          <ion-option mode="md" value="instamojo">Instamojo</ion-option>\n        </ion-select>\n      </ion-item>\n\n    </div>\n\n  </div>\n\n\n</ion-content>\n\n<ion-footer class="animated fadeInUp">\n  <button ion-button="" full mode="ios" no-margin="" (click)="Checkout()">\n    Checkout\n  </button>\n</ion-footer>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\checkout\checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=51.js.map