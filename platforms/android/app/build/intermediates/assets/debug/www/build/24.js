webpackJsonp([24],{

/***/ 586:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyClassifiedPageModule", function() { return MyClassifiedPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_classified__ = __webpack_require__(650);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyClassifiedPageModule = /** @class */ (function () {
    function MyClassifiedPageModule() {
    }
    MyClassifiedPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_classified__["a" /* MyClassifiedPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_classified__["a" /* MyClassifiedPage */]),
            ],
        })
    ], MyClassifiedPageModule);
    return MyClassifiedPageModule;
}());

//# sourceMappingURL=my-classified.module.js.map

/***/ }),

/***/ 650:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyClassifiedPage; });
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
 * Generated class for the MyClassifiedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyClassifiedPage = /** @class */ (function () {
    function MyClassifiedPage(navCtrl, navParams, service, api, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.donation_list = [];
        this.page = 1;
        this.showProduct = false;
        this.noProduct = false;
    }
    MyClassifiedPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.service.LoaderShowmsg("Loading classified..");
        this.api.GET('/myClassifieds/' + this.page).then(function (res) {
            console.log(res);
            if (res.status == 'success') {
                _this.donation_list = res.data;
                if (_this.donation_list.length > 0) {
                    _this.showProduct = true;
                }
                else {
                    _this.noProduct = true;
                }
                _this.service.LoaderHide();
                console.log(_this.donation_list);
            }
            else {
                _this.service.Warning('res.msg');
                _this.service.LoaderHide();
            }
        }).catch((function (error) {
            console.log(error);
            _this.service.LoaderHide();
        }));
    };
    // ionViewWillEnter(){
    //   this.ionViewDidLoad();
    // }
    MyClassifiedPage.prototype.postAd = function () {
        this.navCtrl.push('ClassifiedAddPage');
    };
    MyClassifiedPage.prototype.donationdetails = function (id, cat, catId) {
        console.log(id);
        console.log(cat);
        console.log(catId);
        this.navCtrl.push('ClassifiedDetailsPage', { id: id, cat: cat, cat_id: catId, type: 'my' });
    };
    MyClassifiedPage.prototype.moreProducts = function (infiniteScroll) {
        var _this = this;
        var base = this;
        setTimeout(function () {
            var url = '/myClassifieds/' + _this.page;
            base.api.GET(url).then(function (res) {
                console.log(res);
                if (res.status == 'success') {
                    console.log(res.data.length);
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
    MyClassifiedPage.prototype.deleteItem = function (id) {
        var _this = this;
        var base = this;
        var alert = this.alertCtrl.create({
            message: 'Do you want to delete this classified?',
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
                        _this.api.GET('/deleteClassified/' + id).then(function (res) {
                            if (res.status == 'success') {
                                _this.service.Success(res.data);
                                _this.ionViewWillEnter();
                            }
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    MyClassifiedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-classified',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\my-classified\my-classified.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>My Classified Ad</ion-title>\n    <button ion-button right="" color="danger" (click)="postAd()">Post Ad</button>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="showProduct">\n  <div class="donate-list" *ngFor="let item of donation_list">\n    <ion-row>\n        <ion-col col-3 (click)="donationdetails(item.id,item.category_names[0],item.in_category)" *ngIf="item.image != false">\n          <img [src]="item.image" style="height: 100px;">\n        </ion-col>\n        <ion-col col-7 (click)="donationdetails(item.id,item.category_names[0],item.in_category)">\n          <!-- <h4>ID: {{item.id}}</h4> -->\n          <p><b>Category Name:</b> {{item.category_names[0]}}</p>\n          <!-- <p>{{item.product_condition}}</p> -->\n          <p><b>Status:</b> {{item.status}}</p>\n          <!-- <p>In Stock: {{item.stock}}</p> -->\n          <p><b>Expire On:</b> {{item.expire_date}}</p>\n        </ion-col>\n      <ion-col col-2>\n        <button ion-button="" icon-only="" small (click)="deleteItem(item.id)" outline mode="ios" color="danger">\n          <ion-icon name="trash"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n </div>\n <div *ngIf="noProduct">\n  <p class="blank-product">No product is available</p>\n </div>\n  <ion-infinite-scroll (ionInfinite)="moreProducts($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles"></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\my-classified\my-classified.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], MyClassifiedPage);
    return MyClassifiedPage;
}());

//# sourceMappingURL=my-classified.js.map

/***/ })

});
//# sourceMappingURL=24.js.map