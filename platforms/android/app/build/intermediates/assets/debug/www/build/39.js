webpackJsonp([39],{

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonatelistPageModule", function() { return DonatelistPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donatelist__ = __webpack_require__(636);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonatelistPageModule = /** @class */ (function () {
    function DonatelistPageModule() {
    }
    DonatelistPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donatelist__["a" /* DonatelistPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donatelist__["a" /* DonatelistPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__donatelist__["a" /* DonatelistPage */]
            ]
        })
    ], DonatelistPageModule);
    return DonatelistPageModule;
}());

//# sourceMappingURL=donatelist.module.js.map

/***/ }),

/***/ 636:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonatelistPage; });
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




var DonatelistPage = /** @class */ (function () {
    function DonatelistPage(navCtrl, navParams, service, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.donation_list = [];
        this.page = 2;
    }
    DonatelistPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DonatelistPage');
        this.service.LoaderShowmsg('Loading donation list...');
        this.api.GET('/myDonations').then(function (res) {
            console.log(res);
            _this.service.LoaderHide();
            if (res.status == 'success') {
                _this.donation_list = res.data;
                console.log(_this.donation_list);
            }
            else {
                _this.service.Warning('res.msg');
            }
        }).catch((function (error) {
            _this.service.LoaderHide();
            _this.service.Warning('Something went wrong. Try again later');
        }));
    };
    DonatelistPage.prototype.donationdetails = function (id, cat, catId) {
        console.log(cat);
        console.log(catId);
        this.navCtrl.push('DonationdetailsPage', { id: id, cat: cat, cat_id: catId, type: 'my' });
    };
    DonatelistPage.prototype.moreProducts = function (infiniteScroll) {
        var _this = this;
        var base = this;
        setTimeout(function () {
            var url = '/myDonations/' + _this.page;
            base.api.GET(url).then(function (res) {
                console.log(res);
                if (res.status == 'success') {
                    if (res.data.length > 0) {
                        _this.donation_list = res.data;
                        console.log(_this.donation_list);
                        console.log(_this.donation_data);
                        _this.page = _this.page++;
                        infiniteScroll.complete();
                    }
                    else {
                        infiniteScroll.enable(false);
                    }
                    // if (base.donation_data.next_page_url==null)
                    // {
                    //   infiniteScroll.enable(false);
                    // }
                    // console.log(base.product_list);
                }
                else {
                    infiniteScroll.enable(false);
                }
            });
        }, 500);
    };
    DonatelistPage.prototype.deleteItem = function (id) {
        var _this = this;
        var base = this;
        var alert = this.alertCtrl.create({
            message: 'Do you want to delete this donation product?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                },
                {
                    text: 'yes',
                    handler: function () {
                        _this.api.GET('/deleteDonation/' + id).then(function (res) {
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
    DonatelistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donatelist',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\donatelist\donatelist.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Donation List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="donate-list" *ngFor="let item of donation_list">\n    <ion-row>\n\n        <ion-col col-3 (click)="donationdetails(item.id,item.category_names[0],item.in_category)">\n          <img [src]="item.small_image[0]">\n        </ion-col>\n        <ion-col col-7 (click)="donationdetails(item.id,item.category_names[0],item.in_category)">\n          <h4>{{item.product_title}}</h4>\n          <p>{{item.category_names[0]}}</p>\n          <p>{{item.product_condition}}</p>\n          <p>In Stock: {{item.stock}}</p>\n        </ion-col>\n\n      <ion-col col-2>\n        <button ion-button="" icon-only="" small (click)="deleteItem(item.id)" outline mode="ios" color="danger">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-col>\n\n    </ion-row>\n  </div>\n\n  <ion-infinite-scroll (ionInfinite)="moreProducts($event)">\n      <ion-infinite-scroll-content loadingSpinner="bubbles"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\donatelist\donatelist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], DonatelistPage);
    return DonatelistPage;
}());

//# sourceMappingURL=donatelist.js.map

/***/ })

});
//# sourceMappingURL=39.js.map