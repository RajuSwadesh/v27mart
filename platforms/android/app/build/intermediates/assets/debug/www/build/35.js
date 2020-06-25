webpackJsonp([35],{

/***/ 575:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditprofilePageModule", function() { return EditprofilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__editprofile__ = __webpack_require__(639);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditprofilePageModule = /** @class */ (function () {
    function EditprofilePageModule() {
    }
    EditprofilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__editprofile__["a" /* EditprofilePage */]),
            ],
        })
    ], EditprofilePageModule);
    return EditprofilePageModule;
}());

//# sourceMappingURL=editprofile.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(161);
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





/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditprofilePage = /** @class */ (function () {
    function EditprofilePage(navCtrl, navParams, toastCtrl, api, service, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.service = service;
        this.auth = auth;
        this.User = {
            name: "",
            email: "",
            mobile: ""
        };
    }
    EditprofilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditprofilePage');
        var base = this;
        base.service.LoaderShow();
        base.api.GET("/myProfile").then(function (success) {
            base.service.LoaderHide();
            console.log(success.data);
            base.User = success.data;
            console.log(base.User);
        }).catch(function (error) {
            base.service.LoaderHide();
            base.service.Warning(error);
        });
    };
    EditprofilePage.prototype.save = function () {
        var base = this;
        if (base.User.name == '') {
            base.service.Warning("Please enter your name");
        }
        else if (base.User.email == '') {
            base.service.Warning("Please enter your email");
        }
        else if (base.User.mobile == '') {
            base.service.Warning("Please enter your mobile");
        }
        else {
            base.service.LoaderShowmsg("Updating Profile");
            base.api.POST("/updateProfile", base.User).then(function (success) {
                base.service.LoaderHide();
                localStorage.setItem('user_data', JSON.stringify(success.data));
                base.service.Success('Profile Update Successfully');
            }).catch(function (error) {
                base.service.LoaderHide();
                base.service.Warning(error);
            });
        }
    };
    EditprofilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofile',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\editprofile\editprofile.html"*/'<ion-header mode="md" no-border="">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">Edit Profile</ion-title>\n\n    <ion-buttons right="" style="margin-right: 8px" (tap)="save()">\n      <button ion-button clear icon-left="" color="extralight">\n        <ion-icon name="checkmark"></ion-icon>\n        Save\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <!-- <div class="profile_area">\n    <img src="https://randomuser.me/api/portraits/men/61.jpg" width="80"/>\n    <button ion-button="" icon-left="" clear small color="extralight">\n      <ion-icon name="camera"></ion-icon>\n      Upload\n    </button>\n  </div> -->\n\n  <div class="product_details animated fadeInUp">\n    <input type="text" [(ngModel)]="User.name">\n  </div>\n\n  <div class="product_details animated fadeInUp">\n    <input type="tel" [(ngModel)]="User.mobile">\n  </div>\n\n  <div class="product_details animated fadeInUp">\n    <input type="email" [(ngModel)]="User.email">\n  </div>\n\n  <!-- <div class="product_details animated fadeInUp">\n    <textarea rows="3">Kelley A. Fleming 196 Woodside Circle Mobile, FL 36602 Phone:240-256-1942</textarea>\n  </div> -->\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\editprofile\editprofile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], EditprofilePage);
    return EditprofilePage;
}());

//# sourceMappingURL=editprofile.js.map

/***/ })

});
//# sourceMappingURL=35.js.map