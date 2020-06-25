webpackJsonp([13],{

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPageModule", function() { return SearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(660);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SearchPageModule = /** @class */ (function () {
    function SearchPageModule() {
    }
    SearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* SearchPage */]),
            ],
        })
    ], SearchPageModule);
    return SearchPageModule;
}());

//# sourceMappingURL=search.module.js.map

/***/ }),

/***/ 660:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(89);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, viewCtrl, http, api, service, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.http = http;
        this.api = api;
        this.service = service;
        this.auth = auth;
        this.showList = false;
        this.searchQuery = '';
        this.Products = [];
        this.ClassifiedProducts = [];
        this.infos = [];
        this.allDets = "";
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
        //  this.initializeItems();
    };
    SearchPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    SearchPage.prototype.search = function (keyword) {
        var base = this;
        console.log(keyword.data);
        console.log(base.Keyword);
        base.Products = [];
        base.api.GET("/searchProduct/" + base.Keyword + "?page=1").then(function (success) {
            console.log(success);
            var data = success.data;
            console.log(data);
            if (data.length == 0) {
                base.product_length = 0;
            }
            base.Products = data;
            base.product_length = base.Products.length;
        }).catch(function (error) {
            console.log(error);
        });
        base.ClassifiedProducts = [];
        base.infos = [];
        base.api.GET("/searchClassifiedProduct/" + base.Keyword + "?page=1").then(function (success) {
            var data = success.data;
            console.log(data);
            console.log(data.length);
            if (data.length == 0) {
                base.classified_product_length = 0;
            }
            else {
                // base.classified_product_length=base.ClassifiedProducts.length;
                for (var i = 0; i < data.length; i++) {
                    console.log(data[i].id);
                    base.productId = data[i].id;
                    console.log(base.productId);
                    base.ClassifiedProducts = data[i].fields;
                    console.log(base.ClassifiedProducts);
                    // console.log(data[i].id);
                    // base.infos.push(data[i].id);
                    // console.log(base.infos[i]);
                    // base.ClassifiedProducts.push(base.infos[i]);
                    // console.log(base.ClassifiedProducts);
                }
            }
        }).catch(function (error) {
            console.log(error);
        });
    };
    SearchPage.prototype.deatils = function (url) {
        this.navCtrl.push('ProductdetailsPage', { url: url });
    };
    SearchPage.prototype.classifiedDeatils = function (id) {
        console.log(id);
        this.navCtrl.push('ClassifiedProductDetailPage', { id: id });
    };
    SearchPage.prototype.goBack = function () {
        this.navCtrl.push('CategoriesPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\search\search.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons left (click)="dismiss()">\n      <button ion-button icon-left="">\n        <ion-icon name="arrow-back" (click)="goBack()"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-searchbar placeholder="Search products, brands..." (ionInput)="search($event)" [(ngModel)]="Keyword" (ionCancel)="onCancel($event)"></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <!--  <ion-list *ngIf="showList">\n      <ion-item *ngFor="let item of items" no-padding="">\n        {{ item }}\n      </ion-item>\n    </ion-list>-->\n\n  <!-- <ion-list *ngIf="showList" no-margin="" class="suggested_item" inset>\n    <ion-item o-padding="" *ngFor="let item of items" no-lines="">\n      {{ item }}\n    </ion-item>\n  </ion-list> -->\n\n  <!-- <ion-list-header mode="ios">Recent Search</ion-list-header> -->\n\n  <ion-list no-lines="">\n    <p *ngIf="product_length==0 && classified_product_length==0 && products!= undefined" style="text-align: center;">No Products Found</p>\n\n    <ion-item no-lines="" *ngFor="let item of Products" (tap)="deatils(item.url)">\n      <ion-avatar item-start>\n        <img *ngIf="item.product_image!= undefined" [src]="item.product_image.original" style="object-fit: contain;"/>\n      </ion-avatar>\n     {{item.product_title}}\n    </ion-item>\n\n    <ion-item no-lines="" *ngFor="let item2 of ClassifiedProducts | slice:0:1;" (tap)="classifiedDeatils(productId)">\n      <ion-avatar item-start *ngIf="item2.imageUrl != false" >\n        <img [src]="item2.imageUrl" style="object-fit: contain;"/>\n      </ion-avatar>\n      {{item2.field_value }}\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=13.js.map