webpackJsonp([34],{

/***/ 576:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeFilterPageModule", function() { return ExchangeFilterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange_filter__ = __webpack_require__(640);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExchangeFilterPageModule = /** @class */ (function () {
    function ExchangeFilterPageModule() {
    }
    ExchangeFilterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exchange_filter__["a" /* ExchangeFilterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchange_filter__["a" /* ExchangeFilterPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__exchange_filter__["a" /* ExchangeFilterPage */]
            ]
        })
    ], ExchangeFilterPageModule);
    return ExchangeFilterPageModule;
}());

//# sourceMappingURL=exchange-filter.module.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeFilterPage; });
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
 * Generated class for the ExchangeFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExchangeFilterPage = /** @class */ (function () {
    function ExchangeFilterPage(navCtrl, navParams, api, service, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.service = service;
        this.viewCtrl = viewCtrl;
        this.category_list = [];
        this.cat_id = '';
        this.price = { lower: 0, upper: 0 };
        this.min = 0;
        this.max = 0;
        this.filtermodel = 'price';
        this.prev_id = '';
        this.selected_cat_id = '';
        if (localStorage.getItem('Price')) {
            var data = JSON.parse(localStorage.getItem('Price'));
            this.price.lower = data.lower;
            this.price.upper = data.upper;
            this.min = this.navParams.get('min');
            this.max = this.navParams.get('max');
        }
        else {
            this.min = this.navParams.get('min');
            this.max = this.navParams.get('max');
            this.price.lower = this.min;
            this.price.upper = this.max;
        }
    }
    ExchangeFilterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExchangeFilterPage');
    };
    ExchangeFilterPage.prototype.apply = function () {
        // if(this.cat_id=='')
        // {
        //   this.service.Warning('Choose a category');
        // }
        // else{ 
        //   localStorage.setItem('cat',JSON.stringify(this.cat_id));
        //   this.viewCtrl.dismiss();
        // }
        console.log(this.selected_cat_id);
        if (this.selected_cat_id != '') {
            console.log("insie if");
            localStorage.setItem('cat', this.selected_cat_id);
            localStorage.setItem('Price', JSON.stringify(this.price));
            this.viewCtrl.dismiss();
        }
        else {
            console.log("Inside else");
            localStorage.removeItem('cat');
            localStorage.setItem('Price', JSON.stringify(this.price));
            this.viewCtrl.dismiss();
        }
    };
    ExchangeFilterPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ExchangeFilterPage.prototype.onSegmentChange = function () {
        var _this = this;
        console.log(this.filtermodel);
        if (this.filtermodel == 'category') {
            this.api.GET('/allCategories').then(function (res) {
                console.log(res);
                _this.category_list = res.data;
                console.log(_this.category_list);
                if (localStorage.getItem('cat')) {
                    _this.selected_cat_id = localStorage.getItem('cat');
                    _this.prev_id = _this.selected_cat_id;
                    console.log(_this.prev_id);
                    setTimeout(function () {
                        document.getElementById(_this.prev_id).style.visibility = 'visible';
                    }, 500);
                }
            });
        }
    };
    ExchangeFilterPage.prototype.selectedVal = function (id) {
        console.log(id);
        if (this.prev_id == '') {
            document.getElementById(id).style.visibility = 'visible';
            this.prev_id = id;
            this.selected_cat_id = id;
        }
        else {
            document.getElementById(id).style.visibility = 'visible';
            document.getElementById(this.prev_id).style.visibility = 'hidden';
            if (this.prev_id != id) {
                this.prev_id = id;
                this.selected_cat_id = id;
            }
            else {
                this.prev_id = id;
                this.selected_cat_id = '';
            }
        }
    };
    ExchangeFilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchange-filter',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\exchange-filter\exchange-filter.html"*/'<!--\n  Generated template for the ExchangeFilterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar color="primary">\n      <ion-title>Filter</ion-title>\n      <ion-buttons right="" style="margin-right: 8px" (click)="close()">\n          <button ion-button clear icon-left="" color="extralight">\n            <ion-icon name="close" style="font-size: 30px;\n            font-weight: bold;"></ion-icon>\n          </button>\n     </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n  \n\n<!-- <ion-content padding>\n    <ion-list radio-group [(ngModel)]="cat_id">\n        <ion-list-header>\n           Filter By Category\n          </ion-list-header>\n          <ion-item *ngFor="let item of category_list">\n            <ion-label>{{item.name}}</ion-label>\n            <ion-radio slot="start" value={{item.id}}></ion-radio>\n          </ion-item>\n    </ion-list>\n</ion-content> -->\n\n<ion-content>\n    <ion-row no-padding="">\n      <ion-col col-3 no-padding="">\n        <ion-segment [(ngModel)]="filtermodel" mode="wp" (ionChange)="onSegmentChange()">\n            <ion-segment-button value="price" mode="wp">\n                Price\n              </ion-segment-button>\n                  <ion-segment-button value="category" mode="wp">\n                      Category\n              </ion-segment-button>\n        </ion-segment>\n      </ion-col>\n    \n      <ion-col col-9 [ngSwitch]="filtermodel" no-padding="">\n          <ion-list *ngSwitchCase="\'price\'" no-border="">\n              <ion-list-header mode="md" padding-horizontal="">\n                <div class="value">\n                  <small>Min</small>\n                  <input type="tel" ngModel="${{price.lower}}">\n                </div>\n                <div class="value">\n                  <small>Max.</small>\n                  <input type="tel" ngModel="${{price.upper}}">\n                </div>\n              </ion-list-header>\n              <ion-item no-lines="" no-padding="">\n                <ion-range [(ngModel)]="price" dualKnobs="true" [min]="min" [max]="max" mode="ios"></ion-range>\n              </ion-item>\n            </ion-list>\n\n            <ion-list *ngSwitchCase="\'category\'" no-border="">\n                <!-- <ion-list radio-group [(ngModel)]="cat_id">\n                    <ion-list-header>\n                       Filter By Category\n                      </ion-list-header>\n                      <ion-item *ngFor="let item of category_list">\n                        <ion-label>{{item.name}}</ion-label>\n                        <ion-radio slot="start" value={{item.id}}></ion-radio>\n                        <ion-list radio-group [(ngModel)]="cat">\n                              <ion-item >\n                                <ion-label>AAAAA</ion-label>\n                                <ion-radio slot="start" value=\'AAA\'></ion-radio>\n                              </ion-item>\n                        </ion-list>\n                      </ion-item>\n                </ion-list> -->\n                <div *ngFor="let item of category_list">\n                  <p style="font-size: 15px;font-weight: 400;" (click)="selectedVal(item.id)">{{item.name}}<span style="float:right;color: skyblue;\n                    padding-right: 15px;"><ion-icon name="md-checkmark" style="visibility:hidden"  id="{{item.id}}"></ion-icon></span></p>\n                  <div *ngIf="item.subCategories.length>0" style="padding-left: 25px;font-weight: 100;">\n                    <div *ngFor="let item1 of item.subCategories">\n                      <p (click)="selectedVal(item1.id)">{{item1.name}}<span style="float:right;color: skyblue;\n                        padding-right: 15px;"><ion-icon name="md-checkmark" style="visibility:hidden;"  id="{{item1.id}}"></ion-icon></span></p>\n\n                    </div>\n\n                  </div>\n                </div>\n            </ion-list>\n    \n        <!-- <div *ngFor="let item of Filters">\n          <ion-list *ngSwitchCase="item.name">\n            <ion-item no-lines="" *ngFor="let val of item.values_array;let i=index;">\n              <ion-label>{{val}}</ion-label>\n              <ion-checkbox (ionChange)="selectedCheckbox(item,val)" [checked]="getChecked(val)"></ion-checkbox>\n            </ion-item>\n          </ion-list>\n        </div> -->\n      </ion-col> \n    \n    </ion-row>\n    </ion-content>\n<ion-footer>\n  <button ion-button block (click)="apply()">Apply</button>\n</ion-footer>'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\exchange-filter\exchange-filter.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */]])
    ], ExchangeFilterPage);
    return ExchangeFilterPage;
}());

//# sourceMappingURL=exchange-filter.js.map

/***/ })

});
//# sourceMappingURL=34.js.map