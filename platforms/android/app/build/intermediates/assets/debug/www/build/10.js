webpackJsonp([10],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(663);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 663:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl, navParams, http, api, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.api = api;
        this.service = service;
        this.name = '';
        this.email = '';
        this.phno = '';
        this.password = '';
        this.c_password = '';
        this.base64Image = "assets/img/man.svg";
        this.base_url = api.Base_Url;
        console.log(this.base_url);
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.signUp = function () {
        var base = this;
        if (base.name == '') {
            base.service.Warning('Please Enter Your Name');
        }
        else if (base.email == '') {
            base.service.Warning('Please Enter Your Email');
        }
        else if (base.phno == '') {
            base.service.Warning('Please Enter Your Phone Number');
        }
        else if (base.password == '') {
            base.service.Warning('Please Enter Your Password');
        }
        else if (base.c_password == '') {
            base.service.Warning('Please Enter Password Again');
        }
        else if (base.password != base.c_password) {
            base.service.Warning('Your Password and Confirm Password Is Not Same. Check it.');
        }
        else {
            base.service.LoaderShowmsg('Crating Your Profile');
            var url = base.base_url + '/registration?name=' + base.name + '&email=' + base.email + '&password=' + base.password + '&confirm_password=' + base.c_password + '&mobile=' + base.phno;
            base.http.post(url, '').subscribe(function (data) {
                console.log(data);
                if (data.status == 'success') {
                    base.service.LoaderHide();
                    base.service.Success(data.message);
                    base.navCtrl.setRoot('LoginPage');
                    __WEBPACK_IMPORTED_MODULE_5_firebase__["database"]().ref('users/' + data.data.id).set({
                        api_token: data.data.api_token,
                        email: data.data.email,
                        password: base.password,
                        mobile: data.data.mobile,
                        name: data.data.name,
                        id: data.data.id,
                        created_at: data.data.created_at,
                    });
                }
                else {
                    base.service.LoaderHide();
                    base.service.Warning(data.message);
                }
            }, function (error) {
                base.service.LoaderHide();
                base.service.Warning('Something went wrong. Try again later');
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\signup\signup.html"*/'<ion-content>\n  <ion-header no-border="">\n    <ion-navbar transparent="" color="primary">\n\n    </ion-navbar>\n  </ion-header>\n  <div class="wrapper">\n    <div class="top_area">\n      <div class="abstract_shape"></div>\n    </div>\n    <div class="bottom_area">\n      <div class="form_area">\n        <ion-list no-margin>\n          <ion-list-header text-uppercase no-lines text-center no-margin no-padding>\n            <h2>SIGNUP</h2>\n          </ion-list-header>\n          <ion-item no-padding class="animated fadeInLeft" style="animation-delay: 0.2s" color="transparent">\n            <ion-label floating>Name</ion-label>\n            <ion-input type="text" [(ngModel)]="name"></ion-input>\n          </ion-item>\n          <ion-item no-padding class="animated fadeInLeft" style="animation-delay: 0.4s" color="transparent">\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding class="animated fadeInLeft" style="animation-delay: 0.4s" color="transparent">\n            <ion-label floating>Phone</ion-label>\n            <ion-input type="phno" [(ngModel)]="phno"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding class="animated fadeInLeft" style="animation-delay: 0.6s" color="transparent">\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding class="animated fadeInLeft" style="animation-delay: 0.6s" color="transparent">\n            <ion-label floating>Confirm Password</ion-label>\n            <ion-input type="password" [(ngModel)]="c_password"></ion-input>\n          </ion-item>\n        </ion-list>\n        <div class="btn_area">\n          <button ion-button color="primary" full class="animated fadeInLeft" style="animation-delay: 0.8s" (click)="signUp()">Create Account\n          </button>\n        </div>\n      </div>\n    </div>\n    <button ion-button="" clear small color="lightdark" text-capitalize="">\n      Terms and Conditions\n    </button>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=10.js.map