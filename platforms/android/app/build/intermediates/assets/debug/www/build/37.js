webpackJsonp([37],{

/***/ 574:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonationFilterPageModule", function() { return DonationFilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donation_filter__ = __webpack_require__(638);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonationFilterPageModule = /** @class */ (function () {
    function DonationFilterPageModule() {
    }
    DonationFilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donation_filter__["a" /* DonationFilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donation_filter__["a" /* DonationFilterPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__donation_filter__["a" /* DonationFilterPage */]
            ]
        })
    ], DonationFilterPageModule);
    return DonationFilterPageModule;
}());

//# sourceMappingURL=donation-filter.module.js.map

/***/ }),

/***/ 638:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonationFilterPage; });
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
 * Generated class for the DonationFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DonationFilterPage = /** @class */ (function () {
    function DonationFilterPage(navCtrl, navParams, viewCtrl, api, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.service = service;
        this.category_list = [];
        this.selected_cat_id = '';
        this.prev_id = '';
    }
    DonationFilterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad DonationFilterPage');
        this.service.LoaderShowmsg('Loading all filters...');
        this.api.GET('/allCategories').then(function (res) {
            console.log(res);
            _this.service.LoaderHide();
            _this.category_list = res.data;
            console.log(_this.category_list);
            if (localStorage.getItem('donation_cat')) {
                _this.selected_cat_id = localStorage.getItem('donation_cat');
                // this.prev_id=this.selected_cat_id;
                // console.log(this.prev_id);
                // setTimeout(()=>{
                //   document.getElementById(this.prev_id).style.visibility='visible';
                // },500)
            }
        }).catch(function (error) {
            _this.service.LoaderHide();
            _this.service.Warning('Something went wrong. Try again later');
        });
    };
    DonationFilterPage.prototype.apply = function () {
        if (this.selected_cat_id == '') {
            this.service.Warning('Choose a category');
        }
        else {
            localStorage.setItem('donation_cat', this.selected_cat_id);
            this.viewCtrl.dismiss();
        }
        // console.log(this.selected_cat_id);
        // if(this.selected_cat_id!='')
        // {
        //   console.log("insie if")
        //   localStorage.setItem('donation_cat',this.selected_cat_id);
        //   this.viewCtrl.dismiss();
        // }
        // else{
        //   console.log("Inside else");
        //   localStorage.removeItem('donation_cat');
        //   this.viewCtrl.dismiss();
        // }
    };
    DonationFilterPage.prototype.remove = function () {
        localStorage.removeItem('donation_cat');
        this.viewCtrl.dismiss();
    };
    DonationFilterPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    DonationFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donation-filter',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\donation-filter\donation-filter.html"*/'<!--\n  Generated template for the DonationFilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Filter</ion-title>\n    <ion-buttons right="" style="margin-right: 8px" (click)="close()">\n        <button ion-button clear icon-left="" color="extralight">\n          <ion-icon name="close" style="font-size: 30px;\n          font-weight: bold;"></ion-icon>\n        </button>\n   </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list radio-group [(ngModel)]="selected_cat_id">\n    <ion-list-header>\n       Filter By Category\n      </ion-list-header>\n      <ion-item *ngFor="let item of category_list">\n        <ion-label>{{item.name}}</ion-label>\n        <ion-radio slot="start" value={{item.id}}></ion-radio>\n      </ion-item>\n</ion-list>\n</ion-content>\n<ion-footer>\n  <button ion-button block (click)="remove()" class="ftr-btn">Remove Filter</button>\n  <button ion-button block (click)="apply()" class="ftr-btn">Apply</button>\n</ion-footer>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\donation-filter\donation-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], DonationFilterPage);
    return DonationFilterPage;
}());

//# sourceMappingURL=donation-filter.js.map

/***/ })

});
//# sourceMappingURL=37.js.map