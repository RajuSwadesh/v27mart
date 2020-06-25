webpackJsonp([17],{

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsPageModule", function() { return ProductsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__products__ = __webpack_require__(678);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductsPageModule = /** @class */ (function () {
    function ProductsPageModule() {
    }
    ProductsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__products__["a" /* ProductsPage */]),
            ],
        })
    ], ProductsPageModule);
    return ProductsPageModule;
}());

//# sourceMappingURL=products.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProductsPage = /** @class */ (function () {
    function ProductsPage(navCtrl, navParams, actionSheetCtrl, modalCtrl, http, api, service, events, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.api = api;
        this.service = service;
        this.events = events;
        this.auth = auth;
        this.product_list = [];
        this.PriceRange = "";
        this.MinPrice = '';
        this.MaxPrice = '';
        this.orderBy = 'newArrival';
        this.page = 2;
        this.AllSubcategory = [];
        this.type = '';
        this.filtered_data = '';
        this.base_url = api.Base_Url;
        this.type = this.navParams.get('type');
        console.log(this.type);
        if (this.type == undefined) {
            this.category_detail = this.navParams.get('detail');
            console.log(this.category_detail);
        }
        //this.page_title=this.navParams.get('name')
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        var base = this;
        if (base.type == undefined) {
            base.service.LoaderShowmsg("Loading products...");
            var url = base.base_url + '/getProductByCatID/' + base.category_detail.url + '/1/newArrival/0,999999999';
            base.http.get(url).subscribe(function (data) {
                if (data.status == 'success') {
                    base.service.LoaderHide();
                    base.product_list = data.data;
                    console.log(base.product_list);
                }
                else {
                    base.service.LoaderHide();
                }
            }, function (error) {
                base.service.LoaderHide();
                base.service.Warning('Something went wrong. Try again later');
            });
            var url1 = base.base_url + '/getCategoryMaxMinPrice/' + base.category_detail.url;
            base.http.get(url1).subscribe(function (response) {
                console.log(response);
                if (response.status == 'success') {
                    base.PriceRange = "/" + response.data.MinPrice + "," + response.data.MaxPrice;
                    base.MinPrice = response.data.MinPrice;
                    base.MaxPrice = response.data.MaxPrice;
                    base.filter_min = base.MinPrice;
                    base.filter_max = base.MaxPrice;
                }
            });
        }
        else {
            if (base.type == 'new_arrival') {
                base.api.GET("/newArrivalProduct/10").then(function (success) {
                    console.log(success);
                    if (success.status == 'success') {
                        base.product_list = success.data;
                    }
                }).catch(function (error) {
                    console.log(error);
                });
            }
        }
    };
    ProductsPage.prototype.deatils = function (url) {
        this.navCtrl.push('ProductdetailsPage', { url: url });
    };
    ProductsPage.prototype.sortby = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Sort By',
            buttons: [
                {
                    text: 'Newly Arrival',
                    handler: function () {
                        _this.sortingtype = "Newly Arrival";
                        _this.orderBy = 'newArrival';
                        _this.sortProduct();
                    }
                },
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
    ProductsPage.prototype.sortProduct = function () {
        var base = this;
        base.service.LoaderShowmsg('Sorting Products...');
        var url = base.base_url + '/getProductByCatID/' + base.category_detail.url + '/1/' + base.orderBy + '/' + base.MinPrice + ',' + base.MaxPrice;
        console.log(url);
        base.http.get(url).subscribe(function (response) {
            console.log(response);
            if (response.status == 'success') {
                base.service.LoaderHide();
                base.product_list = response.data;
            }
            else {
                base.service.LoaderHide();
            }
        }, function (err) {
            base.service.LoaderHide();
            base.service.Warning("Something went wrong. Try again later");
        });
    };
    ProductsPage.prototype.filterby = function () {
        var base = this;
        var profileModal = base.modalCtrl.create('FilterPage', { min: base.filter_min, max: base.filter_max, cat_url: base.category_detail.url });
        profileModal.present();
        profileModal.onDidDismiss(function (data) {
            base.filtered_data = data;
            console.log(data);
            if (localStorage.getItem('Price')) {
                var price = JSON.parse(localStorage.getItem('Price'));
                base.MinPrice = price.lower;
                base.MaxPrice = price.upper;
                base.PriceRange = "/" + price.lower + "," + price.upper;
                if (data) {
                    var url = base.base_url + '/getProductByCatID/' + base.category_detail.url + '/1/' + base.orderBy + '/' + price.lower + ',' + price.upper + '?' + data;
                }
                else {
                    var url = base.base_url + '/getProductByCatID/' + base.category_detail.url + '/1/' + base.orderBy + '/' + price.lower + ',' + price.upper;
                }
                console.log(url);
                var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
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
                        base.product_list = response.data;
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
    ProductsPage.prototype.search = function () {
        this.navCtrl.push('SearchPage');
    };
    ProductsPage.prototype.moreProducts = function (infiniteScroll) {
        var base = this;
        setTimeout(function () {
            var url;
            if (base.filtered_data) {
                url = base.base_url + '/getProductByCatID/' + base.category_detail.url + '/' + base.page + '/' + base.orderBy + base.PriceRange + '?' + base.filtered_data;
            }
            else {
                url = base.base_url + '/getProductByCatID/' + base.category_detail.url + '/' + base.page + '/' + base.orderBy + base.PriceRange;
            }
            base.http.get(url).subscribe(function (response) {
                console.log(response);
                if (response.status == 'success') {
                    base.service.LoaderHide();
                    base.product_list = base.product_list.concat(response.data);
                    infiniteScroll.complete();
                    if (response.data.length == 0) {
                        infiniteScroll.enable(false);
                    }
                    console.log(base.product_list);
                }
            });
            base.page = base.page + 1;
        }, 500);
    };
    ProductsPage.prototype.Categories = function () {
        var base = this;
        base.actionSheet = base.actionSheetCtrl.create({ title: 'Sub Categories' });
        base.api.GET("/getSubCategory/" + base.category_detail.url).then(function (Records) {
            var data = Records.data;
            console.log(data);
            if (data.length == 0) {
                base.addnoCat();
                base.actionSheet.present();
            }
            else {
                var i = void 0;
                for (i = 0; i < data.length; i++) {
                    base.addCategory(data[i]);
                    base.AllSubcategory.push(data[i]);
                }
                base.actionSheet.present();
            }
        }).catch(function (error) {
            base.service.LoaderHide();
            base.service.Warning(error);
        });
    };
    ProductsPage.prototype.addCategory = function (data) {
        console.log(data);
        var base = this;
        base.actionSheet.addButton({
            text: data.name,
            handler: function () {
                base.navCtrl.push('ProductsPage', { detail: data });
            }
        });
    };
    ProductsPage.prototype.addnoCat = function () {
        var base = this;
        base.actionSheet.addButton({
            text: 'No Sub Category belongs to this Category.',
            handler: function () {
            }
        });
    };
    ProductsPage.prototype.ionViewDidLeave = function () {
        console.log("Leave");
        localStorage.removeItem('Price');
        localStorage.removeItem('selectedFilter');
        localStorage.removeItem('choosen');
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\products\products.html"*/'<ion-header mode="md">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="" *ngIf="type==undefined">{{category_detail.name}}</ion-title>\n    <ion-title mode="ios" text-capitalize="" *ngIf="type==\'new_arrival\'">New Arrival Products</ion-title>\n    <ion-title mode="ios" text-capitalize="" *ngIf="type==\'featured\'">Featured Products</ion-title>\n\n    <ion-buttons right="" (tap)="search()" *ngIf="type==undefined">\n      <button ion-button clear icon-only="" >\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="product_list.length==0" class="no-product">\n      <img src="assets/imgs/no-product.png"/>\n      <p>No Products Available</p>\n  </div>\n\n  <div *ngIf="product_list.length>0">\n  <ion-grid style="padding: 8px 0">\n    <ion-row>\n      <ion-col col-6="" class="animated fadeInUp" *ngFor="let detail of product_list" (tap)="deatils(detail.url)" >\n        <div class="button_wrapper">\n          <img [src]="detail.product_image.small">\n          <h4>{{detail.product_title}}</h4>\n          <div class="price_area">\n            <h3>Rs. {{detail.sale_price}}</h3>\n            <!-- <h6>$120</h6>\n            <small>39%</small> -->\n          </div>\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-infinite-scroll (ionInfinite)="moreProducts($event)" *ngIf="type==undefined">\n    <ion-infinite-scroll-content loadingSpinner="bubbles"\n    loadingText="Loading more products..."></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n  </div>\n</ion-content>\n\n<ion-footer *ngIf="product_list.length>0 && type==undefined">\n  <ion-row>\n    <ion-col col-4 style="border-right: 1px solid #e2dede;">\n      <button ion-button="" full clear color="dark" icon-start (tap)="Categories()">\n        Category\n      </button>\n    </ion-col>\n    <ion-col col-4 style="border-right: 1px solid #e2dede;">\n      <button ion-button="" full clear color="dark" (tap)="sortby()">\n        Sort\n        <!-- <small>{{sortingtype}}</small> -->\n      </button>\n    </ion-col>\n    <ion-col col-4>\n      <button ion-button="" full clear color="dark" (tap)="filterby()">\n        Filters\n        <!-- <small>{{filtertype}}</small> -->\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Events */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ })

});
//# sourceMappingURL=17.js.map