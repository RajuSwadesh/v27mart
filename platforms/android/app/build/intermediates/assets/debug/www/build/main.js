webpackJsonp([58],{

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthProvider = /** @class */ (function () {
    function AuthProvider(http, storage) {
        this.http = http;
        this.storage = storage;
        console.log('Hello AuthProvider Provider');
    }
    AuthProvider.prototype.getToken = function () {
        var userdata = (localStorage.getItem('api_token'));
        return userdata;
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewTransactionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_instamojo_nodejs__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_instamojo_nodejs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_instamojo_nodejs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_api_api__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewTransactionPage = /** @class */ (function () {
    function NewTransactionPage(iab, http, navParam, api, navCtrl, service) {
        this.iab = iab;
        this.http = http;
        this.navParam = navParam;
        this.api = api;
        this.navCtrl = navCtrl;
        this.service = service;
        this.fname = '';
        this.lname = '';
        this.email = '';
        this.phone = '';
        this.payment = '';
        this.shipping = '';
        this.address = '';
        this.cart_id = '';
        this.item_total = '';
        this.shipping_cost = '';
        this.CartID = '';
        this.NegHisID = '';
        this.NegID = '';
        this.address1 = '';
        this.u_email = '';
        this.firstname = '';
        this.lastname = '';
        this.mobile = '';
        this.orderAmt = '';
        this.u_payment = '';
        this.shippingAmt = '';
        this.page_type = '';
        this.user_data = localStorage.getItem('user_data');
        this.instamojoClient = new __WEBPACK_IMPORTED_MODULE_1_instamojo_nodejs___default.a(http, iab, 'https://marketplace-instamojo.herokuapp.com/token');
        //   browser.on('exit').subscribe(() => {
        //     console.log("hide")
        //     this.service.LoaderHide();
        // }, err => {
        //     console.error(err);
        // });
    }
    NewTransactionPage.prototype.ionViewDidLoad = function () {
        this.page_type = this.navParam.get('page');
        if (this.navParam.get('page') == 'checkout') {
            this.fname = this.navParam.get('fname');
            this.lname = this.navParam.get('lname');
            this.email = this.navParam.get('email');
            this.phone = this.navParam.get('mobile');
            this.payment = this.navParam.get('payment');
            this.amount = Math.round(parseFloat(this.navParam.get('total_amt')));
            this.shipping = this.navParam.get('shipping');
            this.address = this.navParam.get('address1');
            this.cart_id = this.navParam.get('CartID');
            this.item_total = this.navParam.get('item_total');
            this.shipping_cost = this.navParam.get('shipping_cost');
            console.log(this.amount);
            console.log(typeof (this.amount));
        }
        else {
            this.CartID = this.navParam.get('CartID');
            this.NegHisID = this.navParam.get('NegHisID');
            this.NegID = this.navParam.get('NegID');
            this.address1 = this.navParam.get('address1');
            //  this.address2=this.navParam.get('CartID');
            this.u_email = this.navParam.get('email');
            this.firstname = this.navParam.get('firstname');
            this.lastname = this.navParam.get('lastname');
            this.mobile = this.navParam.get('mobile');
            this.orderAmt = Math.round(parseFloat(this.navParam.get('orderAmt')));
            this.u_payment = this.navParam.get('payment');
            this.shippingAmt = this.navParam.get('shippingAmt');
            console.log(this.address1, this.mobile);
        }
    };
    NewTransactionPage.prototype.payNow = function () {
        var _this = this;
        this.service.LoaderShowmsg('Please wait..');
        var data = this.instamojoClient.getPaymentFields();
        console.log(data);
        data.purpose = "Order Place"; // REQUIRED
        data.amount = this.amount;
        console.log(this.instamojoClient); // REQUIRED
        // do not change this
        data.redirect_url = "http://localhost";
        var called = this.instamojoClient.payNow(data).then(function (response) {
            _this.service.LoaderHide();
            console.log(JSON.stringify(response));
            alert("Payment complete: " + JSON.stringify(response));
            _this.service.LoaderShowmsg('Placing order..');
            _this.api.POST('/AddOrder', {
                shipping: _this.shipping,
                firstname: _this.fname,
                lastname: _this.lname,
                email: _this.email,
                mobile: _this.phone,
                address1: _this.address,
                address2: "",
                payment: _this.payment,
                CartID: _this.cart_id,
                payment_detail: response.id,
                payment_id: response.id
            }).then(function (res) {
                if (res.status == 'success') {
                    _this.service.LoaderHide();
                    _this.navCtrl.setRoot('OrderPage');
                    _this.service.Success("Order placed successfully");
                }
                else {
                    _this.service.LoaderHide();
                    _this.service.Success(res.data);
                }
            });
        }).catch(function (err) {
            console.log(err);
            _this.service.LoaderHide();
            alert("Payment failed: " + JSON.stringify(err));
            throw err;
        });
        //call the Safari View Controller
    };
    NewTransactionPage.prototype.payNowOffer = function () {
        var _this = this;
        this.service.LoaderShowmsg('Please wait..');
        var data = this.instamojoClient.getPaymentFields();
        data.purpose = "Order Place"; // REQUIRED
        data.amount = this.orderAmt; // REQUIRED
        // data.buyer_name = 
        // this.service.LoaderHide();
        // do not change this
        data.redirect_url = "http://localhost";
        this.instamojoClient.payNow(data).then(function (response) {
            _this.service.LoaderHide();
            console.log(JSON.stringify(response));
            alert("Payment complete: " + JSON.stringify(response));
            _this.service.LoaderShowmsg('Placing order..');
            _this.api.POST('/PlaceOfferOrder', {
                CartID: _this.CartID,
                NegHisID: _this.NegHisID,
                NegID: _this.NegID,
                address1: _this.address1,
                address2: '',
                email: _this.u_email,
                firstname: _this.firstname,
                lastname: _this.lastname,
                mobile: _this.mobile,
                orderAmt: _this.orderAmt,
                payment: _this.u_payment,
                shippingAmt: _this.shippingAmt,
                payment_detail: response.id
            }).then(function (res) {
                if (res.status == 'success') {
                    _this.service.LoaderHide();
                    _this.navCtrl.setRoot('OrderPage');
                    _this.service.Success("Order placed successfully");
                }
                else {
                    _this.service.LoaderHide();
                    _this.service.Success(res.data);
                }
            });
        }).catch(function (err) {
            console.log(err);
            _this.service.LoaderHide();
            alert("Payment failed: " + JSON.stringify(err));
            throw err;
        });
        //call the Safari View Controller
        // end of safari view controller
    };
    NewTransactionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-new-transaction',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\instamojo\new_transaction.html"*/'<ion-header mode="md">\n  <ion-navbar mode="md" color="primary">\n    <ion-title mode="ios" text-capitalize="">Payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding *ngIf="page_type==\'checkout\'">\n    <div class="product_details">\n        <h4>Shipping Address </h4>\n        <div class="address_wrapper">\n          <ion-card class="animated fadeInRight" (click)="selectAddress(address)">\n            <ion-card-content no-padding="">\n              <p style="font-weight: 500;">{{fname}} {{lname}}</p>\n              <p>{{phone}}</p>\n              <p>{{address}}</p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n     </div>\n\n     <div class="product_details">\n        <h4>Cost Detail</h4>\n        <div class="address_wrapper">\n          <ion-card class="animated fadeInRight" (click)="selectAddress(address)">\n            <ion-card-content no-padding="">\n              <p style="font-weight: 500;">Item Total:{{item_total}}</p>\n              <p>Shipping Cost:{{shipping_cost}}</p>\n              <p>Grand Total:{{amount}}</p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n     </div>\n  \n  <button ion-button (click)="payNow()" *ngIf="page_type==\'checkout\'">Pay With Instamojo (amount Rs.{{amount}})</button>\n</ion-content>\n\n\n<ion-content padding *ngIf="page_type==\'offer-checkout\'">\n  <div class="product_details">\n      <h4>Shipping Address </h4>\n      <div class="address_wrapper">\n        <ion-card class="animated fadeInRight">\n          <ion-card-content no-padding="">\n            <p style="font-weight: 500;">{{firstname}} {{lastname}}</p>\n            <p>{{mobile}}</p>\n            <p>{{address1}}</p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n   </div>\n\n   <div class="product_details">\n      <h4>Cost Detail</h4>\n      <div class="address_wrapper">\n        <ion-card class="animated fadeInRight">\n          <ion-card-content no-padding="">\n            <!-- <p style="font-weight: 500;">Item Total:{{item_total}}</p> -->\n            <p>Shipping Cost:{{shippingAmt}}</p>\n            <p>Grand Total:{{orderAmt}}</p>\n          </ion-card-content>\n        </ion-card>\n      </div>\n   </div>\n\n<button ion-button (click)="payNowOffer()" *ngIf="page_type==\'offer-checkout\'">Pay With Instamojo (amount Rs.{{orderAmt}})</button>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\instamojo\new_transaction.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_http__["a" /* HTTP */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_7__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */]])
    ], NewTransactionPage);
    return NewTransactionPage;
}());

//# sourceMappingURL=new_transaction.js.map

/***/ }),

/***/ 173:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 173;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/add-new-address/add-new-address.module": [
		557,
		4
	],
	"../pages/bidding/bidding.module": [
		558,
		57
	],
	"../pages/biddingdetails/biddingdetails.module": [
		559,
		56
	],
	"../pages/cart/cart.module": [
		560,
		55
	],
	"../pages/categories/categories.module": [
		561,
		54
	],
	"../pages/chat-message/chat-message.module": [
		604,
		53
	],
	"../pages/chat/chat.module": [
		562,
		52
	],
	"../pages/checkout/checkout.module": [
		563,
		51
	],
	"../pages/classified-add/classified-add.module": [
		613,
		3
	],
	"../pages/classified-ads/classified-ads.module": [
		564,
		50
	],
	"../pages/classified-details/classified-details.module": [
		565,
		49
	],
	"../pages/classified-product-detail/classified-product-detail.module": [
		605,
		48
	],
	"../pages/classified-product-list/classified-product-list.module": [
		606,
		47
	],
	"../pages/classified-product/classified-product.module": [
		607,
		46
	],
	"../pages/classified-subcategory/classified-subcategory.module": [
		566,
		45
	],
	"../pages/color/color.module": [
		567,
		44
	],
	"../pages/compose/compose.module": [
		568,
		43
	],
	"../pages/contact-us/contact-us.module": [
		569,
		42
	],
	"../pages/do-bid/do-bid.module": [
		570,
		41
	],
	"../pages/donateinfo/donateinfo.module": [
		571,
		40
	],
	"../pages/donatelist/donatelist.module": [
		572,
		39
	],
	"../pages/donatepayment/donatepayment.module": [
		573,
		38
	],
	"../pages/donateto/donateto.module": [
		608,
		0
	],
	"../pages/donation-filter/donation-filter.module": [
		574,
		37
	],
	"../pages/donationdetails/donationdetails.module": [
		603,
		36
	],
	"../pages/edit-classified/edit-classified.module": [
		614,
		2
	],
	"../pages/edit-donation/edit-donation.module": [
		609,
		1
	],
	"../pages/editprofile/editprofile.module": [
		575,
		35
	],
	"../pages/exchange-filter/exchange-filter.module": [
		576,
		34
	],
	"../pages/exchange-request/exchange-request.module": [
		577,
		33
	],
	"../pages/exchange/exchange.module": [
		610,
		32
	],
	"../pages/filter/filter.module": [
		578,
		6
	],
	"../pages/forgot-password/forgot-password.module": [
		579,
		31
	],
	"../pages/inbox/inbox.module": [
		580,
		30
	],
	"../pages/jobs/jobs.module": [
		581,
		29
	],
	"../pages/login/login.module": [
		582,
		28
	],
	"../pages/messagedetails/messagedetails.module": [
		584,
		27
	],
	"../pages/messeges/messeges.module": [
		583,
		26
	],
	"../pages/my-bidding-history/my-bidding-history.module": [
		585,
		25
	],
	"../pages/my-classified/my-classified.module": [
		586,
		24
	],
	"../pages/my-exchange/my-exchange.module": [
		587,
		23
	],
	"../pages/nearby-ads/nearby-ads.module": [
		588,
		22
	],
	"../pages/negotiate/negotiate.module": [
		589,
		5
	],
	"../pages/offer-checkout/offer-checkout.module": [
		590,
		21
	],
	"../pages/order/order.module": [
		591,
		20
	],
	"../pages/paytype/paytype.module": [
		592,
		19
	],
	"../pages/productdetails/productdetails.module": [
		611,
		18
	],
	"../pages/products/products.module": [
		612,
		17
	],
	"../pages/profile/profile.module": [
		593,
		16
	],
	"../pages/property/property.module": [
		594,
		15
	],
	"../pages/reviews/reviews.module": [
		595,
		14
	],
	"../pages/search/search.module": [
		596,
		13
	],
	"../pages/seller-registration/seller-registration.module": [
		597,
		12
	],
	"../pages/sellerpage/sellerpage.module": [
		598,
		11
	],
	"../pages/signup/signup.module": [
		599,
		10
	],
	"../pages/wishlist/wishlist.module": [
		600,
		9
	],
	"../pages/wishstore/wishstore.module": [
		601,
		8
	],
	"../pages/wishstorelist/wishstorelist.module": [
		602,
		7
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 327:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(335);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_instamojo_new_transaction__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__ = __webpack_require__(326);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(323);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_http__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_storage__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_home_home__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_social_sharing__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_deeplinks__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_availability__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_market__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { HTTP } from '@ionic-native/http';

















// import {DonationdetailsPage} from '../pages/donationdetails/donationdetails'


var firebaseConfig = {
    apiKey: "AIzaSyCsgoQK6TYF7phfEmRkU8g70Tww4aV2Wm0",
    authDomain: "v27chat.firebaseapp.com",
    databaseURL: "https://v27chat.firebaseio.com",
    projectId: "v27chat",
    storageBucket: "v27chat.appspot.com",
    messagingSenderId: "227283057804",
    appId: "1:227283057804:web:92ae1c0d7c330118d90fa9",
    measurementId: "G-8XD12L221Y"
};
// Initialize Firebase
__WEBPACK_IMPORTED_MODULE_19_firebase__["initializeApp"](firebaseConfig);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_9__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__pages_instamojo_new_transaction__["a" /* NewTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_23__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_ionic_img_viewer__["b" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/add-new-address/add-new-address.module#AddNewAddressPageModule', name: 'AddNewAddressPage', segment: 'add-new-address', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bidding/bidding.module#BiddingPageModule', name: 'BiddingPage', segment: 'bidding', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/biddingdetails/biddingdetails.module#BiddingdetailsPageModule', name: 'BiddingdetailsPage', segment: 'biddingdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/categories/categories.module#CategoriesPageModule', name: 'CategoriesPage', segment: 'categories', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat/chat.module#ChatPageModule', name: 'ChatPage', segment: 'chat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classified-ads/classified-ads.module#ClassifiedAdsPageModule', name: 'ClassifiedAdsPage', segment: 'classified-ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classified-details/classified-details.module#ClassifiedDetailsPageModule', name: 'ClassifiedDetailsPage', segment: 'classified-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classified-subcategory/classified-subcategory.module#ClassifiedSubcategoryPageModule', name: 'ClassifiedSubcategoryPage', segment: 'classified-subcategory', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/color/color.module#ColorPageModule', name: 'ColorPage', segment: 'color', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/compose/compose.module#ComposePageModule', name: 'ComposePage', segment: 'compose', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/do-bid/do-bid.module#DoBidPageModule', name: 'DoBidPage', segment: 'do-bid', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donateinfo/donateinfo.module#DonateinfoPageModule', name: 'DonateinfoPage', segment: 'donateinfo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donatelist/donatelist.module#DonatelistPageModule', name: 'DonatelistPage', segment: 'donatelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donatepayment/donatepayment.module#DonatepaymentPageModule', name: 'DonatepaymentPage', segment: 'donatepayment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donation-filter/donation-filter.module#DonationFilterPageModule', name: 'DonationFilterPage', segment: 'donation-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exchange-filter/exchange-filter.module#ExchangeFilterPageModule', name: 'ExchangeFilterPage', segment: 'exchange-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exchange-request/exchange-request.module#ExchangeRequestPageModule', name: 'ExchangeRequestPage', segment: 'exchange-request', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/filter/filter.module#FilterPageModule', name: 'FilterPage', segment: 'filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/forgot-password/forgot-password.module#ForgotPasswordPageModule', name: 'ForgotPasswordPage', segment: 'forgot-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/inbox/inbox.module#InboxPageModule', name: 'InboxPage', segment: 'inbox', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/jobs/jobs.module#JobsPageModule', name: 'JobsPage', segment: 'jobs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messeges/messeges.module#MessegesPageModule', name: 'MessegesPage', segment: 'messeges', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/messagedetails/messagedetails.module#MessagedetailsPageModule', name: 'MessagedetailsPage', segment: 'messagedetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-bidding-history/my-bidding-history.module#MyBiddingHistoryPageModule', name: 'MyBiddingHistoryPage', segment: 'my-bidding-history', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-classified/my-classified.module#MyClassifiedPageModule', name: 'MyClassifiedPage', segment: 'my-classified', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-exchange/my-exchange.module#MyExchangePageModule', name: 'MyExchangePage', segment: 'my-exchange', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/nearby-ads/nearby-ads.module#NearbyAdsPageModule', name: 'NearbyAdsPage', segment: 'nearby-ads', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/negotiate/negotiate.module#NegotiatePageModule', name: 'NegotiatePage', segment: 'negotiate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer-checkout/offer-checkout.module#OfferCheckoutPageModule', name: 'OfferCheckoutPage', segment: 'offer-checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/order/order.module#OrderPageModule', name: 'OrderPage', segment: 'order', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/paytype/paytype.module#PaytypePageModule', name: 'PaytypePage', segment: 'paytype', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/property/property.module#PropertyPageModule', name: 'PropertyPage', segment: 'property', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reviews/reviews.module#ReviewsPageModule', name: 'ReviewsPage', segment: 'reviews', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/seller-registration/seller-registration.module#SellerRegistrationPageModule', name: 'SellerRegistrationPage', segment: 'seller-registration', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sellerpage/sellerpage.module#SellerpagePageModule', name: 'SellerpagePage', segment: 'sellerpage', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishlist/wishlist.module#WishlistPageModule', name: 'WishlistPage', segment: 'wishlist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishstore/wishstore.module#WishstorePageModule', name: 'WishstorePage', segment: 'wishstore', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/wishstorelist/wishstorelist.module#WishstorelistPageModule', name: 'WishstorelistPage', segment: 'wishstorelist', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donationdetails/donationdetails.module#DonationdetailsPageModule', name: 'DonationdetailsPage', segment: 'donationdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/chat-message/chat-message.module#ChatMessagePageModule', name: 'ChatMessagePage', segment: 'chat-message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classified-product-detail/classified-product-detail.module#ClassifiedProductDetailPageModule', name: 'ClassifiedProductDetailPage', segment: 'classified-product-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classified-product-list/classified-product-list.module#ClassifiedProductListPageModule', name: 'ClassifiedProductListPage', segment: 'classified-product-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classified-product/classified-product.module#ClassifiedProductPageModule', name: 'ClassifiedProductPage', segment: 'classified-product', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/donateto/donateto.module#DonatetoPageModule', name: 'DonatetoPage', segment: 'donateto', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-donation/edit-donation.module#EditDonationPageModule', name: 'EditDonationPage', segment: 'edit-donation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/exchange/exchange.module#ExchangePageModule', name: 'ExchangePage', segment: 'exchange', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/productdetails/productdetails.module#ProductdetailsPageModule', name: 'ProductdetailsPage', segment: 'productdetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/products/products.module#ProductsPageModule', name: 'ProductsPage', segment: 'products', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/classified-add/classified-add.module#ClassifiedAddPageModule', name: 'ClassifiedAddPage', segment: 'classified-add', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-classified/edit-classified.module#EditClassifiedPageModule', name: 'EditClassifiedPage', segment: 'edit-classified', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_1__pages_instamojo_new_transaction__["a" /* NewTransactionPage */],
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* MyApp */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_http__["a" /* HTTP */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_9__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_14__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_14__providers_api_api__["a" /* ApiProvider */],
                __WEBPACK_IMPORTED_MODULE_15__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_onesignal__["a" /* OneSignal */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_22__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_24__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_25__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_26__ionic_native_app_availability__["a" /* AppAvailability */], __WEBPACK_IMPORTED_MODULE_27__ionic_native_market__["a" /* Market */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_deeplinks__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_availability__ = __webpack_require__(317);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    //rootPage: any = 'LoginPage';
    function MyApp(platform, statusBar, splashScreen, storage, zone, menuCtrl, api, service, oneSignal, androidPermissions, deeplinks, appAvailability) {
        var _this = this;
        this.platform = platform;
        this.storage = storage;
        this.zone = zone;
        this.menuCtrl = menuCtrl;
        this.api = api;
        this.service = service;
        this.oneSignal = oneSignal;
        this.androidPermissions = androidPermissions;
        this.deeplinks = deeplinks;
        this.appAvailability = appAvailability;
        this.onesignal_app_id = '9ea63606-c06b-4413-8e07-6a5e458d1244';
        this.firebase_id = '759438951919';
        this.checkAppAvailability();
        platform.ready().then(function () {
            // this.androidPermissions.requestPermissions([
            //   this.androidPermissions.PERMISSION.GET_ACCOUNTS,
            // ]);
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            //Deeplinks
            _this.deeplinks.routeWithNavController(_this.nav, {
                '/donationdetails/:id': 'DonationdetailsPage',
                '/classified-product-detail/:id': 'ClassifiedProductDetailPage',
                '/productdetails/:url': 'ProductdetailsPage'
            }).subscribe(function (match) {
                console.log("Successfully routed", match);
                // this.nav.push
            }, function (nomatch) {
                console.log("Unmatched Route", nomatch);
            });
            if (localStorage.getItem('user_data')) {
                _this.service.LoaderShowmsg("Logged in..");
                _this.nav.setRoot('CategoriesPage');
                // this.nav.push('CategoriesPage');
                _this.service.LoaderHide();
            }
            else {
                _this.nav.setRoot('LoginPage');
            }
        });
        this.AfterApplicationInit();
    }
    MyApp.prototype.AfterApplicationInit = function () {
        var base = this;
        base.oneSignal.startInit(base.onesignal_app_id, base.firebase_id);
        base.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
        base.oneSignal.enableVibrate(true);
        base.oneSignal.enableSound(true);
        //Update Device ID
        base.oneSignal.getIds().then(function (ides) {
            if (localStorage.getItem('user_data')) {
                base.api.POST('/updateOnesignalUIDD', { UIDD: ides.userId }).then(function (res) {
                }).catch(function (e) {
                });
            }
        }, function (errors) {
            console.log(errors);
        });
        /*
        base.oneSignal.handleNotificationReceived().subscribe((res) => {
          // do something when notification is received
          console.log('notification is opened',res);
        });
    
        base.oneSignal.handleNotificationOpened().subscribe((res) => {
          // do something when a notification is opened
          console.log('notification is opened',res);
        });
        */
        base.oneSignal.endInit();
    };
    MyApp.prototype.profile = function () {
        this.nav.push('ProfilePage');
        this.closeMenu();
    };
    MyApp.prototype.wishstore = function () {
        this.nav.push('WishstorePage');
        this.closeMenu();
    };
    MyApp.prototype.home = function () {
        this.nav.setRoot('CategoriesPage');
        this.closeMenu();
    };
    MyApp.prototype.goToProfile = function () {
        this.nav.push('ProfilePage');
        this.closeMenu();
    };
    MyApp.prototype.wishlist = function () {
        this.nav.push('WishlistPage');
        this.closeMenu();
    };
    MyApp.prototype.logout = function () {
        localStorage.clear();
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.contactUs = function () {
        this.nav.push('ContactUsPage');
        this.closeMenu();
    };
    MyApp.prototype.menuOpened = function () {
        var _this = this;
        this.zone.run(function () {
            console.log(_this.userData);
            _this.userData = JSON.parse(localStorage.getItem('user_data'));
            console.log(_this.userData);
            _this.proPic = _this.userData.profile_photo.url;
            _this.name = _this.userData.name;
            console.log(_this.name);
            console.log(localStorage.getItem('api_token'));
        });
        // let base=this;
        // base.service.LoaderShowmsg("Loading..")
        // base.api.GET("/myProfile").then(function (success : any) {
        //   base.service.LoaderHide();
        //   console.log(success.data)
        //   base.userData=success.data;
        //   console.log(base.userData)
        // }).catch( error => {
        //   base.service.LoaderHide();
        //   base.service.Warning(error)
        // });
    };
    MyApp.prototype.closeMenu = function () {
        this.menuCtrl.close();
    };
    MyApp.prototype.goToClassifiedAds = function () {
        this.nav.push('ClassifiedAddPage');
        this.closeMenu();
    };
    MyApp.prototype.goToMyClassifiedAds = function () {
        this.nav.push('MyClassifiedPage');
        this.closeMenu();
    };
    MyApp.prototype.goToMyDonation = function () {
        this.nav.push('DonatelistPage');
        this.closeMenu();
    };
    MyApp.prototype.goToSellerregistration = function () {
        this.nav.push('SellerRegistrationPage');
        this.closeMenu();
    };
    MyApp.prototype.checkAppAvailability = function () {
        var app;
        if (this.platform.is('ios')) {
            app = 'com.gowebbi.v27market';
        }
        else if (this.platform.is('android')) {
            app = 'com.gowebbi.v27market';
        }
        this.appAvailability.check(app)
            .then(function (yes) { return console.log(app + ' is available'); }, function (no) { return console.log(app + ' is NOT available'); });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\app\app.html"*/'<ion-menu [content]="content" id="menu" (ionOpen)="menuOpened()">\n    <ion-content>\n      <ion-list>\n        <div class="first_child">\n          <button ion-item menuClose no-padding="" (click)="profile()">\n            <img [src]="proPic" alt="" *ngIf="proPic">\n            <h4 *ngIf="name">{{name}}</h4>\n          </button>\n        </div>\n        <div class="middle_child">\n          <button ion-item menuClose (tap)="home()">\n                <ion-avatar item-start>\n                  <img src="assets/imgs/home.svg">\n                </ion-avatar>\n                <h3>Home</h3>\n          </button>\n\n          <button ion-item menuClose (tap)="goToProfile()">\n                  <ion-avatar item-start>\n                    <img src="assets/imgs/profile.svg">\n                  </ion-avatar>\n                  <h3>Profile</h3>\n          </button>\n          <button ion-item menuClose (tap)="goToSellerregistration()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/lineicon/sell_menu.svg">\n            </ion-avatar>\n            <h3>Sell</h3>\n          </button>\n          <!-- <button ion-item menuClose>\n            <ion-avatar item-start>\n              <img src="assets/imgs/lineicon/chat_menu.svg">\n            </ion-avatar>\n            <h3>Chat</h3>\n          </button> -->\n\n          <button ion-item menuClose (tap)="wishlist()">\n              <ion-avatar item-start>\n                <img src="assets/imgs/lineicon/wishstore.svg">\n              </ion-avatar>\n              <h3>My WishList</h3>\n            </button>\n\n          <!--<button ion-item menuClose (click)="goToClassifiedAds()">-->\n            <!--<ion-avatar item-start>-->\n              <!--<img src="assets/imgs/lineicon/my-ad.svg">-->\n            <!--</ion-avatar>-->\n            <!--<h3>Classified Ads</h3>-->\n          <!--</button>-->\n\n          <button ion-item menuClose (click)="goToMyClassifiedAds()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/lineicon/my-ad.svg">\n            </ion-avatar>\n            <h3>My Classified Ads</h3>\n          </button>\n\n          <button ion-item menuClose (click)="goToMyDonation()">\n            <ion-avatar item-start>\n              <img src="assets/imgs/lineicon/charity.svg">\n            </ion-avatar>\n            <h3>My Donations</h3>\n          </button>\n\n\n          <!--<button ion-item menuClose (tap)="wishstore()">-->\n            <!--<ion-avatar item-start>-->\n              <!--<img src="assets/imgs/lineicon/wishstore.svg">-->\n            <!--</ion-avatar>-->\n            <!--<h3>WishStore</h3>-->\n          <!--</button>-->\n\n        </div>\n\n        <div class="last_child">\n          <button ion-item menuClose (tap)="contactUs()">\n            <h3>Contact Us</h3>\n          </button>\n          <button ion-item menuClose (tap)="logout()">\n            <h3>Sign out</h3>\n          </button>\n        </div>\n\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["w" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* MenuController */], __WEBPACK_IMPORTED_MODULE_6__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_onesignal__["a" /* OneSignal */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_android_permissions__["a" /* AndroidPermissions */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_10__ionic_native_app_availability__["a" /* AppAvailability */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 556:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__instamojo_new_transaction__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.newTransaction = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__instamojo_new_transaction__["a" /* NewTransactionPage */], {
            amount: 10
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  The world is your oyster.\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will be your guide.\n  </p>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["t" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http, toastCtrl, loadingCtrl, alertCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        console.log('Hello ServiceProvider Provider');
    }
    ServiceProvider.prototype.Success = function (Message) {
        var toast = this.toastCtrl.create({
            message: Message,
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            cssClass: 'successToast'
        });
        toast.present();
    };
    ServiceProvider.prototype.Warning = function (Message) {
        var toast = this.toastCtrl.create({
            message: Message,
            duration: 4000,
            position: 'top',
            showCloseButton: true,
            cssClass: 'warningToast'
        });
        toast.present();
    };
    ServiceProvider.prototype.LoaderShow = function () {
        this.Loaders = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'process',
        });
        this.Loaders.present();
    };
    ServiceProvider.prototype.LoaderShowmsg = function (Message) {
        this.Loaders = this.loadingCtrl.create({
            spinner: 'bubbles',
            cssClass: 'process',
            content: Message
        });
        this.Loaders.present();
    };
    ServiceProvider.prototype.LoaderHide = function () {
        this.Loaders.dismiss();
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ApiProvider = /** @class */ (function () {
    function ApiProvider(http, auth) {
        this.http = http;
        this.auth = auth;
        //Base_Url="https://laravel.gowebbidemo.com/demoMeroStuff/public/api/v1";
        this.Base_Url = "https://v27market.com/api/v1";
        console.log('Hello ApiProvider Provider');
        console.log("-----------gettoken------------");
        console.log(this.auth.getToken());
    }
    ApiProvider.prototype.POST = function (url, PostData, token) {
        if (token === void 0) { token = null; }
        var base = this;
        var URL = base.Base_Url + url;
        console.log(URL);
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'authorization': "Bearer " + base.auth.getToken()
        });
        var options = {
            headers: httpHeaders
        };
        return new Promise(function (resolve, reject) {
            base.http.post(URL, PostData, options)
                .subscribe(function (data) {
                console.log(URL, data);
                resolve(data);
            }, function (error) {
                reject(error);
            });
        });
    };
    ApiProvider.prototype.GET = function (url) {
        var base = this;
        var URL = base.Base_Url + url;
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'authorization': "Bearer " + base.getToken()
        });
        var options = {
            headers: httpHeaders
        };
        return new Promise(function (resolve, reject) {
            base.http.get(URL, options).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    ApiProvider.prototype.get = function (url) {
        var base = this;
        console.log(url);
        var URL = base.Base_Url + url;
        console.log(URL);
        // let httpHeaders = new HttpHeaders({
        //   'Accept' : 'application/json',
        //   'authorization' : "Bearer "+base.auth.getToken()
        // });
        // let options = {
        //   headers: httpHeaders
        // };
        return new Promise(function (resolve, reject) {
            base.http.get(URL).subscribe(function (data) {
                console.log(data);
                resolve(data);
            }, function (error) {
                console.log(error);
                reject(error);
            });
        });
    };
    ApiProvider.prototype.getToken = function () {
        if (localStorage.getItem('api_token') == null || localStorage.getItem('api_token') == "") {
            return '';
        }
        else {
            console.log('My Data', localStorage.getItem('api_token'));
            return localStorage.getItem('api_token');
            //return JSON.parse(userData).api_token;
        }
    };
    ApiProvider.prototype.getCartID = function () {
        if (localStorage.getItem('CartID') == null || localStorage.getItem('CartID') == "") {
            var id = new Date().valueOf().toString();
            localStorage.setItem('CartID', id);
            return id;
        }
        else {
            return localStorage.getItem('CartID');
        }
    };
    ApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__auth_auth__["a" /* AuthProvider */]])
    ], ApiProvider);
    return ApiProvider;
}());

//# sourceMappingURL=api.js.map

/***/ })

},[327]);
//# sourceMappingURL=main.js.map