webpackJsonp([36],{

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationdetailsPageModule", function() { return DonationdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donationdetails__ = __webpack_require__(667);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonationdetailsPageModule = /** @class */ (function () {
    function DonationdetailsPageModule() {
    }
    DonationdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donationdetails__["a" /* DonationdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donationdetails__["a" /* DonationdetailsPage */]),
            ],
        })
    ], DonationdetailsPageModule);
    return DonationdetailsPageModule;
}());

//# sourceMappingURL=donationdetails.module.js.map

/***/ }),

/***/ 667:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_market__ = __webpack_require__(324);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var DonationdetailsPage = /** @class */ (function () {
    function DonationdetailsPage(navCtrl, navParams, service, api, alertCtrl, socialsharing, deeplinks, market) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.socialsharing = socialsharing;
        this.deeplinks = deeplinks;
        this.market = market;
        this.donation_detail = '';
        this.cat_id = '';
        this.subCat_id = '';
        this.productImage = '';
        this.productTitle = '';
        this.productPrice = '';
        this.donate_id = '';
        this.appLink = '';
        this.id = this.navParams.get('id');
        console.log("------DonationId------");
        console.log(this.id);
        this.category = this.navParams.get('cat');
        this.type = this.navParams.get('type');
        console.log(this.type);
        console.log(this.category);
        this.sub_cat_id = this.navParams.get('cat_id');
        this.donate_id = this.navParams.get('donateId');
        console.log(this.donate_id);
    }
    DonationdetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DonationdetailsPage');
        if (this.type == 'all') {
            this.service.LoaderShowmsg('Loading detail...');
            this.api.GET('/viewDonation/' + this.id).then(function (res) {
                console.log("----Response data----");
                console.log(res);
                _this.service.LoaderHide();
                if (res.status == 'success') {
                    _this.donation_detail = res.data;
                    console.log(_this.donation_detail);
                }
                else {
                    _this.service.Warning(res.msg);
                }
            }).catch((function (error) {
                _this.service.LoaderHide();
                _this.service.Warning('Something went wrong. Try again later');
            }));
        }
        else {
            this.service.LoaderShowmsg('Loading donation list...');
            this.api.GET('/editDonation/' + this.id).then(function (res) {
                console.log(res);
                _this.service.LoaderHide();
                if (res.status == 'success') {
                    _this.donation_detail = res.data;
                    console.log(_this.donation_detail);
                }
                else {
                    _this.service.Warning('res.msg');
                }
            }).catch((function (error) {
                _this.service.LoaderHide();
                _this.service.Warning('Something went wrong. Try again later');
            }));
        }
    };
    DonationdetailsPage.prototype.update = function () {
        this.navCtrl.push('EditDonationPage', { detail: this.donation_detail, catId: this.sub_cat_id });
    };
    DonationdetailsPage.prototype.remove = function (info) {
        var _this = this;
        console.log(info);
        console.log(info.split("/"));
        var img_name = info.split("/")[8];
        console.log(img_name);
        var alert = this.alertCtrl.create({
            message: 'Do you want to delete this image?',
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
                        console.log('Buy clicked');
                        _this.api.GET('/deleteDonationImage/' + _this.donation_detail.id + '/' + img_name).then(function (res) {
                            console.log(res);
                            if (res.status == 'success') {
                                _this.service.Success(res.data);
                                _this.ionViewDidLoad();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    DonationdetailsPage.prototype.shareTo = function (data) {
        var _this = this;
        console.log(data);
        this.productImage = data.small_image[0];
        console.log(this.productImage);
        this.productTitle = data.product_title;
        console.log(this.productTitle);
        // this.appLink = this.market.open('com.gowebbi.v27market');
        // console.log(this.appLink);
        // this.socialsharing.share(this.productImage,'',this.productTitle,'');
        // this.socialsharing.share("Check this: https://v27market.com/donationdetails/"+data.id, this.productTitle, this.productImage,).then((res:any)=>{
        //   console.log(res);
        // }).catch((error:any)=>{
        //   console.log(error);
        // });
        this.service.LoaderShowmsg("Please wait....");
        // this.socialsharing.share(data.description+'...' + ' For more detail go to-', 'v27mart - '+data.product_title, this.productImage, 'https://v27market.com/donationdetails/'+data.id).then((res:any)=>{
        this.socialsharing.share('https://play.google.com/store/apps/details?id=com.gowebbi.v27market&hl=en', 'If app installed go to', this.productImage, 'https://v27market.com/donationdetails/' + data.id).then(function (res) {
            console.log(res);
            _this.service.LoaderHide();
        }).catch(function (error) {
            console.log(error);
            _this.service.Warning("Something went to wrong!!");
            _this.service.LoaderHide();
        });
    };
    DonationdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donationdetails',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\donationdetails\donationdetails.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Donation Details</ion-title>\n    <ion-buttons right="" style="margin-right: 8px" *ngIf="type==\'my\'">\n      <button ion-button clear icon-only="" style="font-size: 15px;" (click)="update()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="donation-info" *ngIf="donation_detail">\n    <img [src]="donation_detail.small_image[0]" id="front-img">\n    <h4>{{donation_detail.product_title}}</h4>\n    <h6>Category : {{category}}</h6>\n    <p style="float:right;"><ion-icon ios="ios-share-alt" md="md-share-alt" (click)="shareTo(donation_detail)" style="font-size: 25px;color:blue;margin-left:-25px;"></ion-icon></p>\n    <p class="stock in" *ngIf="donation_detail.stock>0">In stock \n    </p>\n    <p class="stock out" *ngIf="donation_detail.stock==0">Out of stock</p>\n    <p><span>Description :</span>{{donation_detail.description}}</p>\n    <h6><span>Product Condition :</span> {{donation_detail.product_condition}} </h6>\n    <h6><span>Contact person :</span>{{donation_detail.contact_person}}</h6>\n    <h6><span>Contact number :</span>{{donation_detail.contact_number}} <a href="tel:{{donation_detail.contact_number}}"style="margin-left: 10px;"><ion-icon style="font-size: 20px;color: green;" ios="ios-call" md="md-call" ></ion-icon></a></h6>\n    <h6><span>Address :</span> {{donation_detail.address}} </h6>\n    <h6><span>City :</span> {{donation_detail.city}} </h6>\n    <h6><span>Pin :</span> {{donation_detail.pin_code}} </h6>\n\n\n    <h5 *ngIf="donation_detail.small_image.length>1">More Pictures</h5>\n    <ion-row  *ngIf="donation_detail.small_image.length>1">\n      <ion-col col-4 *ngFor="let item of donation_detail.small_image | slice:1">\n        <div class="container">\n        <img [src]="item">\n        <div class="top-right" (click)="remove(item)" *ngIf="type!=\'all\'"><ion-icon name="close"></ion-icon></div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\donationdetails\donationdetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_deeplinks__["a" /* Deeplinks */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_market__["a" /* Market */]])
    ], DonationdetailsPage);
    return DonationdetailsPage;
}());

//# sourceMappingURL=donationdetails.js.map

/***/ })

});
//# sourceMappingURL=36.js.map