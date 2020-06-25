webpackJsonp([50],{

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedAdsPageModule", function() { return ClassifiedAdsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classified_ads__ = __webpack_require__(628);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifiedAdsPageModule = /** @class */ (function () {
    function ClassifiedAdsPageModule() {
    }
    ClassifiedAdsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__classified_ads__["a" /* ClassifiedAdsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classified_ads__["a" /* ClassifiedAdsPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__classified_ads__["a" /* ClassifiedAdsPage */]
            ]
        })
    ], ClassifiedAdsPageModule);
    return ClassifiedAdsPageModule;
}());

//# sourceMappingURL=classified-ads.module.js.map

/***/ }),

/***/ 628:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedAdsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(89);
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
 * Generated class for the ClassifiedAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassifiedAdsPage = /** @class */ (function () {
    function ClassifiedAdsPage(navCtrl, navParams, api, modalCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.categoryList = [];
    }
    ClassifiedAdsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ClassifiedAdsPage');
        this.service.LoaderShowmsg("Loading categories..");
        this.api.GET('/allClassifiedCategories').then(function (res) {
            // this.service.LoaderShowmsg("Loading categories..");
            console.log(res);
            if (res.status == 'success') {
                var category = res.data;
                // this.categoryList=category.slice(3);
                _this.categoryList = category;
                console.log(_this.categoryList);
                _this.service.LoaderHide();
            }
        }, function (error) {
            console.log(error);
            _this.service.Warning("Something went to wrong!!");
            _this.service.LoaderHide();
        });
        // this.service.LoaderHide();
    };
    ClassifiedAdsPage.prototype.gotoDetail = function (cat) {
        var _this = this;
        console.log(cat.id);
        // this.api.GET('/classifiedProducts?catID='+cat.id).then((res:any)=>{
        //   console.log(res);
        //   if(res.status == "success"){
        //     if(res.data.length>0)
        //         {
        //           let subcatModal = this.modalCtrl.create('ClassifiedSubcategoryPage', { list: res.data, name: cat.name });
        //                  subcatModal.present();
        //         }else{
        //                   this.navCtrl.push('ClassifiedProductListPage',{cat_id:cat.id,cat_detail:cat})
        //               }
        //   }
        // })
        // this.api.GET('/classifiedProducts?'+)
        this.api.GET('/getClassifiedSubCategory/' + cat.url).then(function (res) {
            console.log(res);
            if (res.status == 'success') {
                if (res.data.length > 0) {
                    console.log(res.data);
                    var subcatModal = _this.modalCtrl.create('ClassifiedSubcategoryPage', { list: res.data, name: cat.name });
                    subcatModal.present();
                }
                else {
                    _this.navCtrl.push('ClassifiedProductListPage', { cat_id: cat.id, cat_detail: cat });
                }
            }
        });
    };
    ClassifiedAdsPage.prototype.postAdd = function () {
        this.navCtrl.push('ClassifiedAddPage');
    };
    ClassifiedAdsPage.prototype.chat = function () {
        this.navCtrl.push('ChatPage');
    };
    ClassifiedAdsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classified-ads',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\classified-ads\classified-ads.html"*/'<!--\n  Generated template for the ClassifiedAdsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Classified Ads</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid style="padding: 8px 0">\n        <ion-row id="row">\n          <ion-col col-4="" class="animated fadeInUp"  *ngFor="let cat of categoryList"  (click)="gotoDetail(cat)">\n            <div class="button_wrapper">\n              <img [src]="cat.image_path">\n              <h4>{{cat.name}}</h4>\n            </div>\n          </ion-col>    \n          <ion-col col-4="" class="animated fadeInUp" (click)="postAdd()" >\n            <div class="button_wrapper">\n              <img src="assets/imgs/lineicon/ads.svg">\n              <h4>Post Add</h4>\n            </div>\n          </ion-col>    \n          <!-- <ion-col col-4="" class="animated fadeInUp" (click)="chat()">\n            <div class="button_wrapper">\n              <ion-icon ios="ios-chatbubbles" md="md-chatbubbles" style="font-size: 30px;color:green;"></ion-icon>\n               <h4>Chat</h4>\n            </div>\n          </ion-col> -->\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\classified-ads\classified-ads.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */]])
    ], ClassifiedAdsPage);
    return ClassifiedAdsPage;
}());

//# sourceMappingURL=classified-ads.js.map

/***/ })

});
//# sourceMappingURL=50.js.map