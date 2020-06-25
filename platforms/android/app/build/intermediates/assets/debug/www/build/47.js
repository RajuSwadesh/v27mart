webpackJsonp([47],{

/***/ 606:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedProductListPageModule", function() { return ClassifiedProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classified_product_list__ = __webpack_require__(670);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifiedProductListPageModule = /** @class */ (function () {
    function ClassifiedProductListPageModule() {
    }
    ClassifiedProductListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__classified_product_list__["a" /* ClassifiedProductListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classified_product_list__["a" /* ClassifiedProductListPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__classified_product_list__["a" /* ClassifiedProductListPage */]
            ]
        })
    ], ClassifiedProductListPageModule);
    return ClassifiedProductListPageModule;
}());

//# sourceMappingURL=classified-product-list.module.js.map

/***/ }),

/***/ 670:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__ = __webpack_require__(320);
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
 * Generated class for the ClassifiedProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassifiedProductListPage = /** @class */ (function () {
    function ClassifiedProductListPage(navCtrl, navParams, api, service, http, actionSheetCtrl, auth, modalCtrl, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.service = service;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.nativeGeocoder = nativeGeocoder;
        this.product_list = [];
        this.page = 2;
        this.PriceRange = "";
        this.orderBy = 'asc';
        this.MinPrice = '';
        this.MaxPrice = '';
        this.fieldName = [];
        this.field_data = [];
        this.base_url = api.Base_Url;
        this.cat_id = this.navParams.get('cat_id');
        this.cat_detail = this.navParams.get('cat_detail');
        console.log(this.cat_id);
    }
    ClassifiedProductListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassifiedProductListPage');
        var base = this;
        console.log('ionViewDidLoad ExchangePage');
        base.service.LoaderShowmsg("Loading products...");
        //let url=base.base_url+'/classifiedProducts/'+base.cat_id;
        var url = base.base_url + '/classifiedProducts/1?catID=' + base.cat_id;
        // let url=base.base_url+'/classifiedProducts/1?PriceRange='+base.MinPrice+','+base.MaxPrice+'&catID='+base.cat_id+'&ShortBy='+base.orderBy;
        console.log(url);
        base.http.get(url).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                console.log(data.data);
                base.field_data = data.data;
                console.log(base.field_data);
                for (var i = 0; i < data.data.length; i++) {
                    console.log(data.data[i].fields.length);
                    console.log(data.data[i].fields[i].field_value);
                    // for(let k=0;k<)
                    base.fieldName = data.data[i].fields;
                    console.log(base.fieldName);
                    console.log(base.fieldName[i].field_id);
                    console.log(data.data[i]);
                    base.field_data[i].label = data.data[i].fields[0].field_details.label;
                    base.field_data[i].value = data.data[i].fields[0].field_value;
                    // base.field_data[i].image = data.data[i].fields[i].imageUrl;
                    console.log("------label----");
                    console.log(base.field_data);
                    // base.product_list.push(base.fieldName);
                    // console.log(base.product_list);
                    console.log(base.fieldName.length);
                    for (var k = 0; k < base.fieldName.length; k++) {
                        console.log(base.fieldName[k].field_details.name);
                        console.log(base.fieldName[k].field_value);
                        base.product_list.push(base.fieldName[k]);
                        console.log(base.product_list);
                    }
                    //  base.product_list.push(data.data[i].fields);
                    console.log(base.product_list);
                    base.service.LoaderHide();
                    if (i == data.data.length - 1) {
                        console.log(base.product_list);
                        base.service.LoaderHide();
                    }
                }
                console.log("---End data-------");
                console.log(base.field_data);
                base.PriceRange = "/" + data.data.minprice + "," + data.data.maxprice;
                base.MinPrice = data.data.minprice;
                base.MaxPrice = data.data.maxprice;
                base.filter_min = base.MinPrice;
                base.filter_max = base.MaxPrice;
                console.log(base.MinPrice, base.MaxPrice);
                base.service.LoaderHide();
            }
            else {
                base.service.LoaderHide();
            }
        }, function (error) {
            base.service.LoaderHide();
            base.service.Warning('Something went wrong. Try again later');
        });
    };
    ClassifiedProductListPage.prototype.moreProducts = function (infiniteScroll) {
        var base = this;
        setTimeout(function () {
            // let url=base.base_url+'/classifiedProducts/'+base.page+'/'+base.orderBy+'/'+base.MinPrice+','+base.MaxPrice;
            // let url=base.base_url+'/classifiedProducts/'+base.page+'?PriceRange='+base.MinPrice+','+base.MaxPrice+'&catID='+base.cat_id+'&ShortBy='+base.orderBy;
            var url = base.base_url + '/classifiedProducts/1?catID=' + base.cat_id;
            base.http.get(url).subscribe(function (response) {
                console.log(response);
                if (response.status == 'success') {
                    base.service.LoaderHide();
                    if (base.product_list != undefined) {
                        base.product_list = base.product_list.concat(response.data.records);
                    }
                    if (response.data.records.length == 0) {
                        infiniteScroll.enable(false);
                    }
                    console.log(base.product_list);
                }
            });
            base.page = base.page + 1;
        }, 500);
    };
    ClassifiedProductListPage.prototype.sortby = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Sort By',
            buttons: [
                // {
                //   text: 'New',
                //   handler: () => {
                //     this.sortingtype = "New"
                //   }
                // },
                // {
                //   text: 'Popular',
                //   handler: () => {
                //     this.sortingtype = "Popular"
                //   }
                // },
                {
                    text: 'Price Low To High',
                    handler: function () {
                        _this.sortingtype = "Price Low To High";
                        _this.orderBy = 'asc';
                        _this.sortProduct();
                    }
                },
                {
                    text: 'Price High To Low',
                    handler: function () {
                        _this.sortingtype = "Price High To Low";
                        _this.orderBy = 'desc';
                        _this.sortProduct();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ClassifiedProductListPage.prototype.sortProduct = function () {
        var base = this;
        base.service.LoaderShowmsg('Sorting Products...');
        var url = base.base_url + '/classifiedProducts/1?PriceRange=' + base.MinPrice + ',' + base.MaxPrice + '&catID=' + base.cat_id + '&ShortBy=' + base.orderBy;
        console.log(url);
        base.http.get(url).subscribe(function (response) {
            console.log(response);
            if (response.status == 'success') {
                base.service.LoaderHide();
                if (base.product_list != undefined) {
                    base.product_list = response.data.records;
                }
            }
            else {
                base.service.LoaderHide();
            }
        }, function (err) {
            base.service.LoaderHide();
            base.service.Warning("Something went wrong. Try again later");
        });
    };
    ClassifiedProductListPage.prototype.filterby = function () {
        var base = this;
        var profileModal = base.modalCtrl.create('FilterPage', { min: base.filter_min, max: base.filter_max, cat_url: base.cat_detail.url });
        profileModal.present();
        profileModal.onDidDismiss(function (data) {
            console.log(data);
            if (localStorage.getItem('Price')) {
                var price = JSON.parse(localStorage.getItem('Price'));
                base.MinPrice = price.lower;
                base.MaxPrice = price.upper;
                base.PriceRange = "/" + price.lower + "," + price.upper;
                if (data) {
                    var url = base.base_url + '/classifiedProducts/1?PriceRange=' + base.MinPrice + ',' + base.MaxPrice + '&catID=' + base.cat_id + '&ShortBy=' + base.orderBy + '&' + data;
                }
                else {
                    var url = base.base_url + '/classifiedProducts/1?PriceRange=' + base.MinPrice + ',' + base.MaxPrice + '&catID=' + base.cat_id + '&ShortBy=' + base.orderBy;
                }
                console.log(url);
                var httpHeaders = new __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpHeaders */]({
                    'Accept': 'application/json',
                    'authorization': "Bearer " + base.auth.getToken()
                });
                var options = {
                    headers: httpHeaders
                };
                base.http.get(url, options).subscribe(function (response) {
                    console.log(response);
                    if (response.status == 'success') {
                        base.service.LoaderHide();
                        if (base.product_list != undefined) {
                            base.product_list = response.data.records;
                        }
                    }
                    else {
                        base.service.LoaderHide();
                    }
                }, function (err) {
                    base.service.LoaderHide();
                    base.service.Warning("Something went wrong. Try again later");
                });
            }
        });
    };
    ClassifiedProductListPage.prototype.details = function (info) {
        this.navCtrl.push('ClassifiedProductDetailPage', { id: info.id });
        console.log(info);
    };
    ClassifiedProductListPage.prototype.ionViewDidLeave = function () {
        console.log("Leave");
        localStorage.removeItem('Price');
        localStorage.removeItem('selectedFilter');
        localStorage.removeItem('choosen');
    };
    ClassifiedProductListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classified-product-list',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\classified-product-list\classified-product-list.html"*/'<!--\n  Generated template for the ClassifiedProductListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Classified Product List</ion-title>\n  </ion-navbar>\n  <ion-icon ios="ios-pin" md="md-pin"></ion-icon>\n  <ion-input class="srch-area" type="text" id="ownLocation" [(ngModel)]="own_location.address" placeholder="Search here.."></ion-input>\n</ion-header>\n\n<ion-content>\n  <div *ngIf="product_list.length==0 && product_list != undefined" class="no-product">\n    <img src="assets/imgs/no-product.png" />\n    <p>No Products Available</p>\n  </div>\n\n  <!-- <div *ngIf="product_list.length>0">\n        <ion-grid style="padding: 8px 0">\n          <ion-row>\n            <ion-col col-6="" class="animated fadeInUp" *ngFor="let detail of product_list" (tap)="details(detail)" >\n              <div class="button_wrapper">\n                <img *ngIf="detail.imageUrl != false" [src]="detail.imageUrl">\n                <p >{{detail.field_details.label}}</p>\n                <div class="price_area">\n                  <h4 *ngIf="detail.field_value != \'\'">{{detail.field_value}}</h4>\n                </div>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n        <ion-infinite-scroll (ionInfinite)="moreProducts($event)" *ngIf="type==undefined"> \n          <ion-infinite-scroll-content loadingSpinner="bubbles"\n          loadingText="Loading more products..."></ion-infinite-scroll-content>\n        </ion-infinite-scroll>\n    </div> -->\n\n  <ion-list>\n    <ion-item *ngFor="let detail of field_data">\n      <!-- <ion-avatar item-start *ngIf="detail.field_id == \'image\'">\n        <h2 style="font-size:13px;font-weight: bold;text-transform: uppercase;color:#4a4a4a;">Image</h2>\n        <img style="width:145px;height:122px;border-radius: 0%;" src="{{detail.imageUrl}}" alt="">\n      </ion-avatar> -->\n      <h2>{{detail.label}}</h2>\n      <h3>{{detail.value}}</h3>\n    </ion-item>\n    <!-- <ion-item *ngFor="let detail of product_list">\n      <ion-avatar item-start *ngIf="detail.imageUrl != false" >\n        <img src="{{detail.imageUrl}}" alt="">\n      </ion-avatar>\n      <h2>{{detail.field_details.label}}</h2>\n      <h3>{{detail.field_value}}</h3>\n    </ion-item> -->\n<!-- \n    <ion-item>\n      <ion-avatar item-start>\n        <img src="https://randomuser.me/api/portraits/men/49.jpg" alt="">\n      </ion-avatar>\n      <h2>Name</h2>\n      <h3>John Doe</h3>\n    </ion-item>\n    <ion-item>\n      <h2>Name</h2>\n      <h3>John Doe</h3>\n    </ion-item>\n    <ion-item>\n      <h2>Name</h2>\n      <h3>John Doe</h3>\n    </ion-item> -->\n\n  </ion-list>\n</ion-content>'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\classified-product-list\classified-product-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], ClassifiedProductListPage);
    return ClassifiedProductListPage;
}());

//# sourceMappingURL=classified-product-list.js.map

/***/ })

});
//# sourceMappingURL=47.js.map