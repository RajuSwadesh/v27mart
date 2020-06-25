webpackJsonp([28],{

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(646);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]
            ]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 646:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(323);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, http, api, service, storage, fb, googlePlus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.api = api;
        this.service = service;
        this.storage = storage;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.email = '';
        this.password = '';
        this.FB_APP_ID = 608843466619453;
        this.googleMail = '';
        this.base_url = api.Base_Url;
        console.log(this.base_url);
        //this.fb.api("v2.8");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        var base = this;
        this.googlePlus.login({}).then(function (res) {
            console.log(res.email);
            base.googleMail = res.email;
            base.displayName = res.displayName;
            base.service.LoaderShowmsg('Logging you in');
            var url = base.base_url + '/social-login?email=' + base.googleMail + '&name=' + base.displayName;
            console.log(url);
            base.http.post(url, '').subscribe(function (data) {
                console.log(data);
                if (data.status == 'success') {
                    base.service.LoaderHide();
                    _this.navCtrl.push('CategoriesPage');
                    localStorage.setItem('user_data', JSON.stringify(data.data));
                    localStorage.setItem('api_token', data.data.api_token);
                    base.api.GET("/myProfile").then(function (success) {
                        // base.service.LoaderHide();
                        console.log(success.data);
                        localStorage.setItem('user_data', JSON.stringify(success.data));
                    }).catch(function (error) {
                        base.service.LoaderHide();
                        base.service.Warning(error);
                    });
                    // base.storage.set('user_data', data.data);
                }
                else {
                    base.service.LoaderHide();
                    base.service.Warning(data.data[0]);
                }
            });
            //console.log(this.googleMail)
            //base.googleLogin=
        });
    };
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        var permissions = new Array();
        var nav = this.navCtrl;
        //the permissions your facebook app needs from the user
        permissions = ['public_profile', 'user_photos', 'email', 'user_birthday'];
        this.fb.login(permissions)
            .then(function (response) {
            var userId = response.authResponse.userID;
            var params = new Array();
            var base = _this;
            //Getting name and gender properties
            _this.fb.api("/me?fields=name,gender,email", params)
                .then(function (user) {
                user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
                //now we have the users info, let's save it in the NativeStorage
                console.log(user.name);
                console.log(user.gender);
                console.log(user.picture);
                console.log(user.email);
                base.service.LoaderShowmsg('Logging you in');
                var url = base.base_url + '/social-login?email=' + user.email + '&name=' + user.name;
                console.log(url);
                base.http.post(url, '').subscribe(function (data) {
                    console.log(data);
                    if (data.status == 'success') {
                        base.service.LoaderHide();
                        _this.navCtrl.push('CategoriesPage');
                        localStorage.setItem('user_data', JSON.stringify(data.data));
                        localStorage.setItem('api_token', data.data.api_token);
                        base.api.GET("/myProfile").then(function (success) {
                            // base.service.LoaderHide();
                            console.log(success.data);
                            localStorage.setItem('user_data', JSON.stringify(success.data));
                        }).catch(function (error) {
                            base.service.LoaderHide();
                            base.service.Warning(error);
                        });
                        // base.storage.set('user_data', data.data);
                    }
                    else {
                        base.service.LoaderHide();
                        base.service.Warning(data.data[0]);
                    }
                });
                // this.nativeStorage.setItem('user',
                // {
                //   name: user.name,
                //   gender: user.gender,
                //   picture: user.picture
                // })
                // .then(() => {
                //   nav.push('CategoriesPage');
                // },(error) => {
                //   console.log(error);
                // })
            });
        }, function (error) {
            console.log(error);
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        // this.navCtrl.push('CategoriesPage')
        var base = this;
        if (base.email == '') {
            base.service.Warning('Please Enter Your Registered Email address');
        }
        else if (base.password == '') {
            base.service.Warning('Please Enter Your Password');
        }
        else {
            base.service.LoaderShowmsg('Logging you in');
            var url = base.base_url + '/auth?email=' + base.email + '&password=' + base.password;
            base.http.post(url, '').subscribe(function (data) {
                console.log(data);
                if (data) {
                    if (data.status == 'success') {
                        base.service.LoaderHide();
                        _this.navCtrl.push('CategoriesPage');
                        localStorage.setItem('user_data', JSON.stringify(data.data));
                        localStorage.setItem('api_token', data.data.api_token);
                        base.api.GET("/myProfile").then(function (success) {
                            base.service.LoaderHide();
                            console.log(success);
                            console.log(success.data);
                            localStorage.setItem('user_data', JSON.stringify(success.data));
                        }).catch(function (error) {
                            base.service.LoaderHide();
                            base.service.Warning(error);
                        });
                        // base.storage.set('user_data', data.data);
                    }
                    else {
                        base.service.LoaderHide();
                        console.log(data.data[0]);
                        base.service.Warning(data.data[0]);
                    }
                }
                else {
                    base.service.LoaderHide();
                    base.service.Warning("Invalid username & password!!");
                }
            });
        }
    };
    LoginPage.prototype.gotosignup = function () {
        this.navCtrl.push('SignupPage');
    };
    LoginPage.prototype.forgotPass = function () {
        this.navCtrl.push('ForgotPasswordPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\login\login.html"*/'<ion-content>\n  <div class="wrapper">\n    <div class="top_area">\n      <div class="abstract_shape"></div>\n    </div>\n    <div class="bottom_area">\n      <div class="form_area">\n        <ion-list no-margin>\n          <ion-list-header text-uppercase no-lines text-center no-margin no-padding>\n            <img src="assets/imgs/logo.png" height="35">\n          </ion-list-header>\n         \n          <!-- <ion-item no-padding class="animated fadeInLeft" style="animation-delay: 0.2s" color="transparent">\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n          </ion-item>\n\n          <ion-item no-padding class="animated fadeInLeft" style="animation-delay: 0.4s" color="transparent">\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n          </ion-item> -->\n          <!-- <ion-item no-padding>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="email" [(ngModel)]="email"></ion-input>\n          </ion-item>\n          <ion-item no-padding>\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" [(ngModel)]="password"></ion-input>\n          </ion-item> -->\n          <input type="email" placeholder="Email" [(ngModel)]="email"/>\n          <input type="password" placeholder="Password" [(ngModel)]="password"/>\n          \n        </ion-list>\n        \n\n        <div class="btn_area">\n          <button ion-button color="primary" full class="animated fadeInLeft" style="animation-delay: 0.6s"\n                  (tap)="login()">Login\n          </button>\n        </div>\n        <!-- <div class="btn_area">\n          <button ion-button color="primary" full class="animated fadeInLeft" style="animation-delay: 0.6s"\n                  (tap)="fbLogin()">Facebook Login\n          </button>\n        </div>\n        <div class="btn_area">\n          <button ion-button color="primary" full class="animated fadeInLeft" style="animation-delay: 0.6s"\n                  (tap)="googleLogin()">Google Login\n          </button>\n        </div> -->\n        <div class="others_btn">\n          <div>\n            <button ion-button no-margin clear color="dark" text-left="" text-capitalize="" no-padding="" (click)="forgotPass()">Forgot\n              Password ?\n            </button>\n            <button ion-button no-margin clear color="dark" float-right="" text-capitalize="" no-padding=""\n                    (tap)="gotosignup()">\n              Create Account\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class="social_login">\n     <p class="social_text">Login with</p>\n    <button ion-button="" icon-only="" color="fb" mode="ios" (tap)="fbLogin()">\n       <ion-icon name="logo-facebook"></ion-icon>\n      </button>\n\n     <button ion-button="" icon-only="" color="google" mode="ios" (tap)="googleLogin()">\n        <ion-icon name="logo-google"></ion-icon>\n     </button>\n  </div>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=28.js.map