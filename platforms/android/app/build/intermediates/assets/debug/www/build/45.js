webpackJsonp([45],{

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedSubcategoryPageModule", function() { return ClassifiedSubcategoryPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classified_subcategory__ = __webpack_require__(630);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifiedSubcategoryPageModule = /** @class */ (function () {
    function ClassifiedSubcategoryPageModule() {
    }
    ClassifiedSubcategoryPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__classified_subcategory__["a" /* ClassifiedSubcategoryPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classified_subcategory__["a" /* ClassifiedSubcategoryPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__classified_subcategory__["a" /* ClassifiedSubcategoryPage */]
            ]
        })
    ], ClassifiedSubcategoryPageModule);
    return ClassifiedSubcategoryPageModule;
}());

//# sourceMappingURL=classified-subcategory.module.js.map

/***/ }),

/***/ 630:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedSubcategoryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
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
 * Generated class for the ClassifiedSubcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassifiedSubcategoryPage = /** @class */ (function () {
    function ClassifiedSubcategoryPage(navCtrl, navParams, viewCtrl, api, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.subcat_list = this.navParams.get('list');
        this.catName = this.navParams.get('name');
        console.log(this.subcat_list);
    }
    ClassifiedSubcategoryPage.prototype.ionViewDidLoad = function () {
    };
    ClassifiedSubcategoryPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ClassifiedSubcategoryPage.prototype.gotoDetail = function (cat) {
        var _this = this;
        this.api.GET('/getClassifiedSubCategory/' + cat.url).then(function (res) {
            console.log(res);
            if (res.status == 'success') {
                if (res.data.length > 0) {
                    _this.viewCtrl.dismiss();
                    console.log(res.data);
                    var subcatModal = _this.modalCtrl.create('ClassifiedSubcategoryPage', { list: res.data });
                    subcatModal.present();
                }
                else {
                    // this.navCtrl.push('ClassifiedProductListPage',{cat_id:cat.id,cat_detail:cat})
                    _this.navCtrl.push('ClassifiedProductPage', { cat_id: cat.id, cat_detail: cat });
                }
            }
        });
    };
    ClassifiedSubcategoryPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classified-subcategory',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\classified-subcategory\classified-subcategory.html"*/'<!--\n  Generated template for the ClassifiedSubcategoryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{catName}}</ion-title>\n    <ion-buttons end (click)="close()">\n      <button ion-button icon-only><ion-icon name="close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-grid style="padding: 8px 0">\n        <ion-row id="row">\n          <ion-col col-4="" class="animated fadeInUp"  *ngFor="let cat of subcat_list"  (click)="gotoDetail(cat)">\n            <div class="button_wrapper">\n              <img [src]="cat.image_path">\n              <h4>{{cat.name}}</h4>\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\classified-subcategory\classified-subcategory.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
    ], ClassifiedSubcategoryPage);
    return ClassifiedSubcategoryPage;
}());

//# sourceMappingURL=classified-subcategory.js.map

/***/ })

});
//# sourceMappingURL=45.js.map