webpackJsonp([12],{

/***/ 597:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellerRegistrationPageModule", function() { return SellerRegistrationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__seller_registration__ = __webpack_require__(661);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SellerRegistrationPageModule = /** @class */ (function () {
    function SellerRegistrationPageModule() {
    }
    SellerRegistrationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__seller_registration__["a" /* SellerRegistrationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__seller_registration__["a" /* SellerRegistrationPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__seller_registration__["a" /* SellerRegistrationPage */]
            ]
        })
    ], SellerRegistrationPageModule);
    return SellerRegistrationPageModule;
}());

//# sourceMappingURL=seller-registration.module.js.map

/***/ }),

/***/ 661:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SellerRegistrationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
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
 * Generated class for the SellerRegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SellerRegistrationPage = /** @class */ (function () {
    function SellerRegistrationPage(navCtrl, navParams, service, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.api = api;
        this.file_type = [];
        this.file_name = [];
        this.total_file = 0;
        //attach_file:any=[];
        this.attach_file = '';
        this.nick_name = '';
        this.business_name = '';
        this.mobile = '';
        this.address1 = '';
        this.city = '';
        this.pin = '';
        this.landline = '';
        this.about = '';
        this.registered = 'false';
    }
    SellerRegistrationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SellerRegistrationPage');
        this.api.GET('/isSeller').then(function (res) {
            if (res.status == 'success') {
                if (res.data > 0) {
                    _this.registered = 'true';
                }
                else {
                    _this.registered = 'false';
                }
            }
            else {
                _this.registered = 'false;';
            }
        }).catch(function (error) {
            _this.service.Warning('Something went wrong. Try again later');
        });
    };
    SellerRegistrationPage.prototype.back = function () {
        this.navCtrl.pop();
    };
    SellerRegistrationPage.prototype.changeListener = function ($event) {
        this.service.LoaderShowmsg('Please wait..');
        console.log($event);
        this.readThis($event.target);
    };
    SellerRegistrationPage.prototype.readThis = function (inputValue) {
        console.log(inputValue.files);
        for (var i = 0; i < inputValue.files.length; i++) {
            // if(inputValue.files[i].name.split('.')[1]=='pdf' || inputValue.files[i].name.split('.')[1]=='jpg' || inputValue.files[i].name.split('.')[1]=='jpeg' || inputValue.files[i].name.split('.')[1]=='png')
            // {
            //  // console.log(inputValue.files.name.split('.')[1]);
            //   this.service.Warning(inputValue.files[i].name.split('.')[1]+' not supported');
            //   (<HTMLInputElement>document.getElementById("upfile")).value='';
            //   console.log(i,inputValue.files.length-1)
            //   if(i==inputValue.files.length)
            //   {
            //     this.service.LoaderHide();
            //   }
            // }
            // else{
            this.getBase64(inputValue.files[i]);
            // }
        }
    };
    SellerRegistrationPage.prototype.getBase64 = function (file) {
        var base = this;
        console.log(file);
        console.log(file.name.split('.')[1]);
        setTimeout(function () {
            var myReader = new FileReader();
            var base64_data;
            myReader.readAsDataURL(file);
            myReader.onloadend = function (e) {
                console.log(myReader.result);
                base64_data = myReader.result;
                //  var split_data=base64_data.split(';base64,').pop();
                // base.attach_file.push(base64_data);
                base.attach_file = base64_data;
                // base.file_type.push(file.name.split('.')[1]);
                // base.file_name.push(file.name);
                // base.total_file=base.file_name.length;
                console.log(base.attach_file);
                console.log(base.file_type);
                base.service.LoaderHide();
            };
        }, 1000);
    };
    SellerRegistrationPage.prototype.register = function () {
        var _this = this;
        if (this.nick_name == '') {
            this.service.Warning('Please enter nick name');
        }
        else if (this.business_name == '') {
            this.service.Warning('Please enter nick name');
        }
        else if (this.mobile == '') {
            this.service.Warning('Please enter mobile number');
        }
        else if (this.address1 == '') {
            this.service.Warning('Please enter your address');
        }
        else if (this.city == '') {
            this.service.Warning('Please enter your city');
        }
        else if (this.pin == '') {
            this.service.Warning('Please enter your postal code');
        }
        else if (this.attach_file == '') {
            this.service.Warning('Please upload document..');
        }
        else {
            this.service.LoaderShowmsg('Creating seller profile..');
            this.api.POST('/SellerRegistration', {
                nick_name: this.nick_name,
                business_name: this.business_name,
                mobile: this.mobile,
                address1: this.address1,
                city: this.city,
                pin: this.pin,
                documents: this.attach_file,
                landline: this.landline,
                address2: '',
                about: this.about
            }).then(function (res) {
                console.log(res);
                _this.service.LoaderHide();
                if (res.status == 'success') {
                    _this.registered = 'true';
                    _this.service.Success(res.data);
                }
                else {
                    _this.service.Warning(res.data);
                }
            }).catch(function (error) {
                _this.service.LoaderHide();
                _this.service.Warning('Something went wrong. Try again later');
            });
        }
    };
    SellerRegistrationPage.prototype.goToSeller = function () {
    };
    SellerRegistrationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-seller-registration',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\seller-registration\seller-registration.html"*/'<!--\n  Generated template for the SellerRegistrationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding *ngIf="registered==\'true\'">\n    <div class="upper-sec" style="margin-top: 50px;display: block;">\n        <img src="assets/imgs/sell-signup.png"/>\n        <p></p>\n        <p class="p2">Go To seller Portal</p>\n    </div>\n\n    <div style="text-align: center;">\n      <button ion-button (click)="goToSeller()">Continue</button>\n    </div>\n</ion-content>\n\n<ion-content padding *ngIf="registered==\'false\'">\n  <!-- <div class="back">\n    <ion-icon name="md-arrow-back" (click)="back()"></ion-icon>\n  </div> -->\n  <div class="upper-sec">\n    <img src="assets/imgs/sell-signup.png"/>\n    <p class="p1">Want To Sell?</p>\n    <p class="p2">Make a profile as Seller</p>\n  </div>\n\n  <div class="form-area">\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="nick_name" placeholder="Nick Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-input type="text" [(ngModel)]="business_name" placeholder="Business Name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-input type="text" [(ngModel)]="mobile" placeholder="Mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-input type="text" [(ngModel)]="address1" placeholder="Address"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-input type="text" [(ngModel)]="city" placeholder="City"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="number" [(ngModel)]="pin" placeholder="Postal Pin"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <ion-input type="tel" [(ngModel)]="landline" placeholder="Landline"></ion-input>\n    </ion-item>\n\n    <ion-item>\n        <textarea [(ngModel)]="about" placeholder="About"></textarea>\n    </ion-item>\n\n    <ion-item>\n        <!-- <ion-label position="stacked">Add Attachment</ion-label> -->\n        <!-- <span class="hiddenFileInput" style="background: url(assets/imgs/attach.png);">\n          <input type="file" name="theFile" #input  multiple id="upfile" (change)="changeListener($event)"/>\n        </span> -->\n        <p style="margin-bottom: 14px;">Documents</p>\n        <input type="file" name="theFile" #input  id="upfile" (change)="changeListener($event)" accept="image/*"/>\n        <span class="itemAdd" style="position: relative;top: -26px;right: -42px;" *ngIf="total_file>0">{{total_file}} items added</span>\n        <span class="itemAdd" style="position: relative;top: -26px;right: -42px;" *ngIf="total_file==0">No file choosen</span>\n      </ion-item>\n\n    <button ion-button block (click)="register()">Register</button>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\seller-registration\seller-registration.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */]])
    ], SellerRegistrationPage);
    return SellerRegistrationPage;
}());

//# sourceMappingURL=seller-registration.js.map

/***/ })

});
//# sourceMappingURL=12.js.map