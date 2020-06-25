webpackJsonp([16],{

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(657);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 657:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, api, service, auth, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.service = service;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.userData = '';
        this.Orders = [];
        this.Address = [];
        console.log(localStorage.getItem('user_data'));
        // this.userData=JSON.parse(localStorage.getItem('user_data'));
        // console.log(this.userData);
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        this.getOrders();
        this.getProfile();
    };
    ProfilePage.prototype.ionViewWillEnter = function () {
        this.getAddress();
    };
    ProfilePage.prototype.edit = function () {
        this.navCtrl.push('EditprofilePage');
    };
    ProfilePage.prototype.mail = function () {
        this.navCtrl.push('MessegesPage');
    };
    ProfilePage.prototype.getOrders = function () {
        var base = this;
        base.api.GET("/AllOrdersLists?page=1").then(function (success) {
            console.log(success);
            base.Orders = success.data.orders;
            base.order_length = base.Orders.length;
            console.log(base.Orders);
            // if(success.data.orders.length > 0 ){
            //   for (let i = 0; i < success.data.orders.length; i++) {
            //     base.Orders.push(success.data.orders[i]);
            //   }
            // }
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProfilePage.prototype.getAddress = function () {
        var base = this;
        base.api.GET("/myAddresses").then(function (success) {
            console.log(success);
            base.Address = success.data;
            base.address_length = base.Address.length;
            // if(success.data.length > 0 ){
            //   for (let i = 0; i < success.data.length; i++) {
            //     base.Address.push(success.data[i]);
            //   }
            // }
        }).catch(function (error) {
            console.log(error);
        });
    };
    ProfilePage.prototype.getProfile = function () {
        var base = this;
        base.service.LoaderShowmsg("Loading..");
        base.api.GET("/myProfile").then(function (success) {
            base.service.LoaderHide();
            console.log(success.data);
            base.userData = success.data;
            console.log(base.userData);
        }).catch(function (error) {
            base.service.LoaderHide();
            base.service.Warning(error);
        });
    };
    ProfilePage.prototype.addnew = function () {
        console.log("add new");
        this.navCtrl.push('AddNewAddressPage');
    };
    ProfilePage.prototype.remove = function (id) {
        var _this = this;
        console.log("Remove called");
        var alert = this.alertCtrl.create({
            title: 'Confirm Delete',
            message: 'Do you want to remove this address?',
            mode: 'ios',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'yes',
                    handler: function () {
                        _this.service.LoaderShowmsg("Removing your address..");
                        _this.api.GET('/removeAddresses?id=' + id).then(function (response) {
                            console.log(response);
                            _this.service.LoaderHide();
                            if (response.status == 'success') {
                                _this.getAddress();
                                _this.service.Success('Your address is successfully removed');
                            }
                        }).catch(function (error) {
                            _this.service.LoaderHide();
                            console.log(error);
                            _this.service.Warning('Something went wrong try again later');
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    ProfilePage.prototype.seeAllOrders = function () {
        this.navCtrl.push('OrderPage');
    };
    ProfilePage.prototype.sell = function () {
        this.navCtrl.push('SellerRegistrationPage');
    };
    ProfilePage.prototype.exchangeList = function () {
        this.navCtrl.push('MyExchangePage');
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\profile\profile.html"*/'<ion-header mode="md" no-border="">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">profile</ion-title>\n\n    <ion-buttons right="" style="margin-right: 8px" (tap)="edit()">\n      <button ion-button clear icon-left="" color="extralight">\n        <ion-icon name="create"></ion-icon>\n        Edit\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="profile_area" >\n    <img [src]="userData.profile_photo.url" width="80" *ngIf="userData"/>\n    <h3 *ngIf="userData">{{userData.name}}</h3>\n    <p *ngIf="userData">{{userData.email}}</p>\n\n    <ion-row style="width: 100%" margin-top="">\n      <ion-col col-6>\n        <button ion-button="" full clear icon-left="" color="extralight" (tap)="sell()"\n                style="border-right: 1px solid rgba(255,255,255,0.26)">\n          <ion-icon name="cart"></ion-icon>\n          Sell\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button ion-button="" full clear icon-left="" color="extralight" (tap)="exchangeList()">\n          <span class="sell_wrapper">\n            <!-- <ion-badge color="danger">24</ion-badge> -->\n            <ion-icon name="chatbubbles"></ion-icon>\n              My Exchange\n             </span>\n        </button>\n      </ion-col>\n    </ion-row>\n\n\n  </div>\n\n\n  <div class="product_details animated fadeInUp">\n    <h4>My Order\n      <button ion-button="" small clear mode="ios" text-capitalize="" no-margin=""  *ngIf="order_length>0" (click)="seeAllOrders()">\n        See All\n      </button>\n    </h4>\n    <div *ngIf="order_length>0">\n    <ion-row no-padding="" *ngFor="let Items of Orders" (tap)="OrderInfo(Items)" >\n        <ion-col class="description">\n          <h6>Order ID : <span style="font-size: 14px;">{{Items.id}} on {{Items.created_at.date}}</span></h6>\n          <p>Amount : {{Items.total}}</p>\n        </ion-col>\n    </ion-row>\n    </div>\n    <p *ngIf="order_length==0"> You have no order </p>\n\n  </div>\n\n\n\n  <div class="product_details animated fadeInUp">\n    <h4>Address <span class="addnew" (click)="addnew()"><ion-icon name="add">Add</ion-icon></span></h4>\n    <div *ngIf="address_length>0">\n    <div no-margin="" *ngFor="let Item of Address" style="border-bottom: 1px solid #dedede; margin-bottom: 5px; padding-bottom: 5px;">\n      <p>{{Item.firstname}} {{Item.lastname}}</p>\n      <p style="line-height: 1px;">{{Item.mobile}}</p>\n      <p style="line-height: 18px;">{{Item.address1}}</p>\n      <p (click)="remove(Item.id)"><ion-icon name="trash" style="float:right;margin-top: -18px;\n        color: #948c8c;"></ion-icon></p>\n    </div>\n    </div>\n    <div *ngIf="address_length==0">\n      <p>You have no saved address</p>\n    </div>\n  </div>\n\n\n</ion-content>\n<!-- <ion-footer>\n    <div class="product_details animated fadeInUp">\n        <button ion-button="" clear full small color="danger">\n          Delete account\n        </button>\n    </div>\n</ion-footer> -->\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=16.js.map