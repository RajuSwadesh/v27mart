webpackJsonp([49],{

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedDetailsPageModule", function() { return ClassifiedDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classified_details__ = __webpack_require__(629);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifiedDetailsPageModule = /** @class */ (function () {
    function ClassifiedDetailsPageModule() {
    }
    ClassifiedDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__classified_details__["a" /* ClassifiedDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classified_details__["a" /* ClassifiedDetailsPage */]),
            ],
        })
    ], ClassifiedDetailsPageModule);
    return ClassifiedDetailsPageModule;
}());

//# sourceMappingURL=classified-details.module.js.map

/***/ }),

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
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
 * Generated class for the ClassifiedDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassifiedDetailsPage = /** @class */ (function () {
    function ClassifiedDetailsPage(navCtrl, navParams, api, http, popoverCtrl, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.http = http;
        this.popoverCtrl = popoverCtrl;
        this.service = service;
        this.productsArray = [
            { "src": "1.jpg", "id": 0 },
            { "src": "2.jpg", "id": 1 },
            { "src": "3.jpg", "id": 2 },
            { "src": "4.jpg", "id": 3 },
        ];
        this.slidenumber = 1;
        this.product_images = [];
        this.editId = '';
        this.allImg = [];
        this.address = '';
        this.base_url = api.Base_Url;
        this.product_id = this.navParams.get('id');
        console.log(this.product_id);
        this.cat_sub_id = this.navParams.get('cat_id');
        console.log(this.cat_sub_id);
    }
    ClassifiedDetailsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        var base = this;
        console.log(base.product_id);
        base.service.LoaderShowmsg("Loading details..");
        this.api.GET('/editClassified/' + this.product_id).then(function (data) {
            if (data.status == 'success') {
                base.product_detail = data.data;
                console.log(base.product_detail[0].id);
                base.editId = base.product_detail[0].id;
                base.fieldDetails = [];
                base.fieldDetails = base.product_detail[0].fields;
                console.log(base.product_detail);
                console.log(base.fieldDetails);
                base.address = base.product_detail[0].address;
                console.log(base.address);
                var arr1 = [];
                _this.Checkbox = [];
                var arr2 = [];
                for (var i = 0; i < _this.fieldDetails.length; i++) {
                    console.log(_this.fieldDetails[i].field_details.field_type);
                    if (_this.fieldDetails[i].field_details.field_type == "Checkbox") {
                        console.log(_this.fieldDetails[i].field_details.name);
                        var array = _this.fieldDetails[i].field_details.field_values.split(',');
                        console.log(array);
                        for (var j = 0; j < array.length; j++) {
                            arr1.push({
                                field_values: array[j],
                            });
                        }
                        _this.fieldDetails[i].field_details.checkValue = arr1;
                        console.log(_this.fieldDetails[i].field_details.checkValue);
                        _this.checkArr = _this.fieldDetails[i].field_value.split(',');
                        console.log(_this.checkArr);
                        for (var a = 0; a < _this.checkArr.length; a++) {
                            _this.Checkbox.push({
                                check: _this.checkArr[a],
                            });
                        }
                    }
                    else if (_this.fieldDetails[i].field_details.field_type == "Radio") {
                        var array1 = _this.fieldDetails[i].field_details.field_values.split(',');
                        console.log(array1);
                        for (var k = 0; k < array1.length; k++) {
                            arr2.push({
                                gender_values: array1[k],
                            });
                        }
                        _this.fieldDetails[i].field_details.genderValue = arr2;
                        console.log(_this.fieldDetails[i].field_details.genderValue);
                    }
                    else if (_this.fieldDetails[i].field_id == "images") {
                        _this.allImg = _this.fieldDetails[i].imageUrl;
                        console.log(_this.allImg);
                    }
                }
                if (data.data.product_image != undefined) {
                    base.product_images.push({
                        "original": data.data.product_image.original,
                        "name": data.data.product_image.name,
                    });
                }
                if (data.data.other_images != undefined) {
                    data.data.other_images.forEach(function (images) {
                        base.product_images.push({
                            "original": images.original,
                            "name": images.name,
                        });
                    });
                }
                base.service.LoaderHide();
            }
        }, function (error) {
            console.log(error);
            base.service.Warning('Something went wrong. Try again later');
            base.service.LoaderHide();
        });
    };
    ClassifiedDetailsPage.prototype.ionViewDidEnter = function () {
        if (this.slides.length() != undefined) {
            var totalslide = this.slides.length();
            this.totalslidernumber = totalslide - 1;
        }
        this.ionViewDidLoad();
    };
    ClassifiedDetailsPage.prototype.imgchange = function (id) {
        console.log(this.productsArray[id]);
        this.slides.slideTo(id);
    };
    ClassifiedDetailsPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        if (currentIndex == this.product_images.length) {
        }
        else {
            this.slidenumber = currentIndex + 1;
        }
    };
    ClassifiedDetailsPage.prototype.updateAd = function (id, catId) {
        console.log(id);
        console.log(catId);
        this.navCtrl.push('EditClassifiedPage', { detailId: id, cat_id: catId });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], ClassifiedDetailsPage.prototype, "slides", void 0);
    ClassifiedDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classified-details',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\classified-details\classified-details.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>View Details</ion-title>\n\n    <ion-buttons right="" style="margin-right: 8px">\n      <button ion-button clear icon-only="" style="font-size: 15px;" (click)="updateAd(editId,cat_sub_id)">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div class="product_imgs animated fadeInUp">\n\n    <p class="current_index" *ngIf="product_images">\n      {{slidenumber}} / {{product_images.length}}\n    </p>\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide pager *ngFor="let item of product_images;">\n        <img [src]="item.original">\n      </ion-slide>\n    </ion-slides>\n\n  </div>\n\n  <div class="bidding_details animated fadeInUp" *ngIf="fieldDetails">\n    <div class="row header" style=" margin-top: 40px;">\n      <div class="custom" *ngFor="let subfield of fieldDetails;let i=index">\n        <div class="subcustom"  *ngIf="subfield.field_details.field_type == \'Text\'">\n         <label>{{subfield.field_details.label}}</label>\n         <input type="{{subfield.field_details.field_type}}" name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}"  value="{{subfield.field_value}}" placeholder="name...." readonly>\n        </div>\n  \n        <div *ngIf="subfield.field_details.field_type == \'Checkbox\'" class="input_fields">\n          <b>{{subfield.field_details.label}}</b>\n             <div class="item" *ngFor="let arr of subfield.field_details.checkValue;let i=index">\n               <label> <span>{{arr.field_values}}</span>\n               <input *ngIf="arr.field_values == checkArr[i]" type="checkbox" checked name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}" [value]="arr.field_values" readonly>\n              </label>\n             </div>\n        </div>\n  \n        <div *ngIf="subfield.field_details.field_type == \'Radio\'" class="input_fields">\n          <b>{{subfield.field_details.label}}</b>\n             <div class="item" *ngFor="let arr1 of subfield.field_details.genderValue;" >\n               <label> <span>{{arr1.gender_values}}</span>\n               <input *ngIf="arr1.gender_values == subfield.field_value" checked type="radio" name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}" [value]="arr1.gender_values" readonly>\n              </label>\n             </div>\n        </div>\n  \n        <div class="subcustom"  *ngIf="subfield.field_details.field_type == \'Number\'">\n          <label>{{subfield.field_details.label}}</label>\n          <input type="{{subfield.field_details.field_type}}" name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}" [value]="subfield.field_value" placeholder="experince...." readonly>\n         </div>\n  \n         <div class="subcustom"  *ngIf="subfield.field_details.field_type == \'Textarea\'">\n          <label>{{subfield.field_details.label}}</label>\n          <input type="{{subfield.field_details.field_type}}" name="{{subfield.field_details.name}}" id="{{subfield.field_details.name}}" [value]="subfield.field_value" placeholder="about...." readonly>\n         </div>\n  \n        <ion-row>\n          <ion-col col-4 *ngIf="subfield.imageUrl != false && subfield.field_id == \'image\'">\n            <div class="container">\n              <img [src]="subfield.imageUrl"/>\n            </div>\n          </ion-col>\n        </ion-row>\n\n        <ion-row *ngIf="subfield.field_id == \'images\' && subfield.imageUrl != false">\n          <ion-col col-4 *ngFor="let img of allImg">\n            <div class="container">\n              <img [src]="img"/>\n            </div>\n          </ion-col>\n        </ion-row>\n  \n      </div>\n      <div class="custom">\n      <div class="subcustom">\n          <label>Address</label>\n          <input type="text" [value]="address" readonly>\n      </div>\n    </div>\n    </div>\n    <!-- <div class="row" *ngFor="let field of fieldDetails">\n       <div class="col">{{field.field_value}}</div>\n    </div> -->\n    <!-- <ion-grid>\n      <ion-row>\n        <ion-col col-2 *ngFor="let field of fieldDetails">\n          <p>{{(field.field_details.label)?.substring(0,5)}}</p>\n          <h6>{{field.field_value}}</h6>\n        </ion-col>\n      </ion-row>\n    </ion-grid> -->\n      <!-- <h4>{{product_detail.product_title}}</h4>\n      <span class="status active">{{product_detail.status}}</span> -->\n    <!-- <ul>\n      <li *ngFor="let field of fieldDetails">\n        <p>{{field.field_details.label}}</p>\n      </li> -->\n      <!-- <li>\n        <p>item</p>\n        <h6>165378TX85</h6>\n      </li> -->\n      <!-- <li>\n        <p>price</p>\n        <h6>{{product_detail.price}}</h6>\n      </li>\n\n      <li>\n        <p>ends</p>\n        <h6>{{product_detail.expire_date}}</h6>\n      </li>\n      <li>\n        <p>stock</p>\n        <h6>{{product_detail.stock}}</h6>\n      </li> -->\n\n    <!-- </ul> -->\n    <!-- <ion-list>\n      <ion-item>\n        <h3>Product Condition<span>{{product_detail.product_condition}}</span></h3>\n      </ion-item>\n      <ion-item>\n        <p>{{product_detail.description}}</p>\n      </ion-item>\n    </ion-list> -->\n   </div>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\classified-details\classified-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["x" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], ClassifiedDetailsPage);
    return ClassifiedDetailsPage;
}());

//# sourceMappingURL=classified-details.js.map

/***/ })

});
//# sourceMappingURL=49.js.map