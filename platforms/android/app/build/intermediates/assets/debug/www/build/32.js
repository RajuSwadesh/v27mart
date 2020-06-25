webpackJsonp([32],{

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangePageModule", function() { return ExchangePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange__ = __webpack_require__(676);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExchangePageModule = /** @class */ (function () {
    function ExchangePageModule() {
    }
    ExchangePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exchange__["a" /* ExchangePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchange__["a" /* ExchangePage */]),
            ],
        })
    ], ExchangePageModule);
    return ExchangePageModule;
}());

//# sourceMappingURL=exchange.module.js.map

/***/ }),

/***/ 676:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(65);
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






/**
 * Generated class for the ExchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExchangePage = /** @class */ (function () {
    function ExchangePage(navCtrl, navParams, api, service, http, actionSheetCtrl, auth, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.service = service;
        this.http = http;
        this.actionSheetCtrl = actionSheetCtrl;
        this.auth = auth;
        this.modalCtrl = modalCtrl;
        this.product_list = [];
        this.page = 2;
        this.PriceRange = "";
        this.orderBy = 'asc';
        this.MinPrice = '';
        this.MaxPrice = '';
        this.cat_id = '';
        this.base_url = api.Base_Url;
        // this.category_detail=this.navParams.get('detail');
        // console.log(this.category_detail);
    }
    ExchangePage.prototype.ionViewDidLoad = function () {
        var base = this;
        console.log('ionViewDidLoad ExchangePage');
        base.service.LoaderShowmsg("Loading products...");
        var url = base.base_url + '/exchangeProducts';
        // if(this.cat_id=='')
        // {
        //   console.log("inside if")
        //   url=base.base_url+'/exchangeProducts';
        //   console.log(url)
        // }
        // else{
        //   console.log("inside else")
        //   console.log(this.cat_id)
        //   console.log(typeof(this.cat_id))
        //   this.cat_id=this.cat_id.replace(/"/g,"");
        //   url=base.base_url+'/exchangeProducts/'+this.cat_id;
        //   console.log(url)
        // }
        base.http.get(url).subscribe(function (data) {
            console.log(data);
            if (data.status == 'success') {
                base.service.LoaderHide();
                base.product_list = data.data.records;
                console.log(base.product_list);
                base.PriceRange = "/" + data.data.minprice + "," + data.data.maxprice;
                base.MinPrice = data.data.minprice;
                base.MaxPrice = data.data.maxprice;
                base.filter_min = base.MinPrice;
                base.filter_max = base.MaxPrice;
                console.log(base.MinPrice, base.MaxPrice);
            }
            else {
                base.service.LoaderHide();
            }
        }, function (error) {
            base.service.LoaderHide();
            base.service.Warning('Something went wrong. Try again later');
        });
        // let url1=base.base_url+'/getCategoryMaxMinPrice/'+base.category_detail.url;
        // base.http.get(url1).subscribe((response:any)=>{
        //   console.log(response);
        //   if(response.status=='success')
        //   {
        //     base.PriceRange = "/"+response.data.MinPrice+","+response.data.MaxPrice;
        //     base.MinPrice = response.data.MinPrice;
        //     base.MaxPrice = response.data.MaxPrice;
        //     base.filter_min=base.MinPrice;
        //     base.filter_max=base.MaxPrice;
        //   }
        // })
    };
    ExchangePage.prototype.moreProducts = function (infiniteScroll) {
        var base = this;
        setTimeout(function () {
            var url = base.base_url + '/exchangeProducts/' + base.page + '/' + base.orderBy + '/' + base.MinPrice + ',' + base.MaxPrice;
            base.http.get(url).subscribe(function (response) {
                console.log(response);
                if (response.status == 'success') {
                    base.service.LoaderHide();
                    base.product_list = base.product_list.concat(response.data.records);
                    if (response.data.records.length == 0) {
                        infiniteScroll.enable(false);
                    }
                    console.log(base.product_list);
                }
            });
            base.page = base.page + 1;
        }, 500);
    };
    ExchangePage.prototype.sortby = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Sort By',
            buttons: [
                {
                    text: 'New',
                    handler: function () {
                        _this.sortingtype = "New";
                    }
                },
                {
                    text: 'Popular',
                    handler: function () {
                        _this.sortingtype = "Popular";
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
    ExchangePage.prototype.sortProduct = function () {
        var base = this;
        base.service.LoaderShowmsg('Sorting Products...');
        if (localStorage.getItem('cat')) {
            var url = base.base_url + '/exchangeProducts/1/' + base.orderBy + '/' + base.MinPrice + ',' + base.MaxPrice + '?catID=' + localStorage.getItem('cat');
        }
        else {
            var url = base.base_url + '/exchangeProducts/1/' + base.orderBy + '/' + base.MinPrice + ',' + base.MaxPrice;
        }
        console.log(url);
        base.http.get(url).subscribe(function (response) {
            console.log(response);
            if (response.status == 'success') {
                base.service.LoaderHide();
                base.product_list = response.data.records;
            }
            else {
                base.service.LoaderHide();
            }
        }, function (err) {
            base.service.LoaderHide();
            base.service.Warning("Something went wrong. Try again later");
        });
    };
    ExchangePage.prototype.filterby = function () {
        var base = this;
        var profileModal = base.modalCtrl.create('ExchangeFilterPage', { min: base.filter_min, max: base.filter_max });
        profileModal.present();
        profileModal.onDidDismiss(function (data) {
            var price = JSON.parse(localStorage.getItem('Price'));
            if (localStorage.getItem('cat')) {
                var url = base.base_url + '/exchangeProducts/1/' + base.orderBy + '/' + price.lower + ',' + price.upper + '?catID=' + localStorage.getItem('cat');
                // this.ionViewDidLoad();
            }
            else {
                var url = base.base_url + '/exchangeProducts/1/' + base.orderBy + '/' + price.lower + ',' + price.upper;
            }
            var httpHeaders = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpHeaders */]({
                'Accept': 'application/json',
                'authorization': "Bearer " + base.auth.getToken()
            });
            console.log(url);
            var options = {
                headers: httpHeaders
            };
            base.http.get(url, options).subscribe(function (response) {
                console.log(response);
                if (response.status == 'success') {
                    base.service.LoaderHide();
                    base.product_list = response.data.records;
                }
                else {
                    base.service.LoaderHide();
                }
            }, function (err) {
                base.service.LoaderHide();
                base.service.Warning("Something went wrong. Try again later");
            });
        });
    };
    /*filterby() {
      let base=this;
      let profileModal = base.modalCtrl.create('FilterPage', {min:base.filter_min,max:base.filter_max,cat_url:base.category_detail.url});
      profileModal.present();
      profileModal.onDidDismiss((data:any)=>{
        console.log(data);
        if(localStorage.getItem('Price'))
        {
          var price=JSON.parse(localStorage.getItem('Price'));
          base.MinPrice=price.lower;
          base.MaxPrice=price.upper;
          base.PriceRange = "/"+price.lower+","+price.upper;
          if(data)
          {
            var url=base.base_url+'/exchangeProducts/1/'+base.orderBy+'/'+price.lower+','+price.upper+'?'+data;
          }
          else
          {
            var url=base.base_url+'/exchangeProducts/1/'+base.orderBy+'/'+price.lower+','+price.upper;
          }
  
          console.log(url);
          let httpHeaders = new HttpHeaders({
            'Accept' : 'application/json',
            'authorization' : "Bearer "+base.auth.getToken()
          });
  
          let options = {
            headers: httpHeaders
          };
          base.http.get(url,options).subscribe((response:any)=>{
            console.log(response);
            if(response.status=='success')
            {
              base.service.LoaderHide();
              base.product_list=response.data;
            }
            else{
              base.service.LoaderHide();
            }
          },err=>{
            base.service.LoaderHide();
            base.service.Warning("Something went wrong. Try again later");
          })
        }
      })
    }*/
    ExchangePage.prototype.ionViewDidLeave = function () {
        console.log("Leave");
        localStorage.removeItem('cat');
        localStorage.removeItem('Price');
        localStorage.removeItem('selectedFilter');
        localStorage.removeItem('choosen');
    };
    ExchangePage.prototype.deatils = function (url) {
        this.navCtrl.push('ProductdetailsPage', { url: url });
    };
    ExchangePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchange',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\exchange\exchange.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Exchange</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="product_list.length==0" class="no-product">\n    <img src="assets/imgs/no-product.png"/>\n    <p>No Products Available</p>\n  </div>\n\n<div *ngIf="product_list.length>0">\n<ion-grid style="padding: 8px 0">\n  <ion-row>\n    <ion-col col-6="" class="animated fadeInUp" *ngFor="let detail of product_list" (tap)="deatils(detail.url)" >\n      <div class="button_wrapper">\n        <img [src]="detail.product_image.small">\n        <h4>{{detail.product_title}}</h4>\n        <div class="price_area">\n          <h3>Rs. {{detail.sale_price}}</h3>\n          <!-- <h6>$120</h6>\n          <small>39%</small> -->\n        </div>\n      </div>\n    </ion-col>\n  </ion-row>\n</ion-grid>\n<ion-infinite-scroll (ionInfinite)="moreProducts($event)" *ngIf="type==undefined">\n  <ion-infinite-scroll-content loadingSpinner="bubbles" loadingText="Loading more products..."></ion-infinite-scroll-content>\n</ion-infinite-scroll>\n</div>\n</ion-content>\n\n<ion-footer *ngIf="product_list.length>0">\n  <ion-row>\n    <ion-col col-6 style="border-right: 1px solid #e2dede;">\n      <button ion-button="" full clear color="dark" (tap)="sortby()">\n        Sort\n        <!-- <small>{{sortingtype}}</small> -->\n      </button>\n    </ion-col>\n    <ion-col col-6>\n      <button ion-button="" full clear color="dark" (tap)="filterby()">\n        Filters\n        <!-- <small>{{filtertype}}</small> -->\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\exchange\exchange.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */]])
    ], ExchangePage);
    return ExchangePage;
}());

//# sourceMappingURL=exchange.js.map

/***/ })

});
//# sourceMappingURL=32.js.map