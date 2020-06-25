webpackJsonp([46],{

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedProductPageModule", function() { return ClassifiedProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classified_product__ = __webpack_require__(671);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifiedProductPageModule = /** @class */ (function () {
    function ClassifiedProductPageModule() {
    }
    ClassifiedProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__classified_product__["a" /* ClassifiedProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classified_product__["a" /* ClassifiedProductPage */]),
            ],
        })
    ], ClassifiedProductPageModule);
    return ClassifiedProductPageModule;
}());

//# sourceMappingURL=classified-product.module.js.map

/***/ }),

/***/ 671:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__ = __webpack_require__(320);
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
 * Generated class for the ClassifiedProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassifiedProductPage = /** @class */ (function () {
    function ClassifiedProductPage(navCtrl, navParams, api, service, http, actionSheetCtrl, auth, modalCtrl, nativeGeocoder) {
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
        this.infos = [];
        this.own_location = {
            address: '',
            latitude: '',
            longitude: ''
        };
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.alldata = false;
        this.nodata = false;
        this.base_url = api.Base_Url;
        this.cat_id = this.navParams.get('cat_id');
        this.cat_detail = this.navParams.get('cat_detail');
        console.log(this.cat_id);
    }
    ClassifiedProductPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClassifiedProductPage');
        var base = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                base.own_location.latitude = position.coords.latitude;
                base.own_location.longitude = position.coords.longitude;
                console.log(base.own_location.latitude);
                console.log(base.own_location.longitude);
                base.nativeGeocoder.reverseGeocode(base.own_location.latitude, base.own_location.longitude, base.geoencoderOptions).then(function (result) {
                    console.log(result);
                    base.own_location.address = base.generateAddress(result[0]);
                    console.log(base.own_location);
                }).catch(function (error) {
                    alert('Error getting location' + JSON.stringify(error));
                });
                console.log(localStorage.getItem('api_token'));
                base.userId = localStorage.getItem('api_token');
                console.log(base.userId);
                base.service.LoaderShowmsg("Loading products...");
                var url = base.base_url + '/classifiedProducts/1?catID=' + base.cat_id + '&latitude=' + base.own_location.latitude + '&longitude=' + base.own_location.longitude;
                console.log(url);
                base.http.get(url).subscribe(function (data) {
                    console.log(data);
                    console.log(data.data.length);
                    if (data.status == 'success') {
                        if (data.data.length > 0) {
                            base.alldata = true;
                            base.nodata = false;
                            console.log(data.data);
                            base.field_data = data.data;
                            console.log(base.field_data);
                            for (var i = 0; i < base.field_data.length; i++) {
                                console.log(base.field_data[i]);
                            }
                            base.service.LoaderHide();
                            __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('users').on("value", function (getDets) {
                                console.log(getDets.val());
                                base.infos = base.retriveDets(getDets);
                                console.log(base.infos);
                                for (var j = 0; j < base.infos.length; j++) {
                                    console.log(base.infos[j]);
                                    base.field_data.api_token = base.infos[j].api_token;
                                    base.field_data.mobileNo = base.infos[j].mobile;
                                    console.log(base.field_data);
                                }
                            });
                            for (var i = 0; i < data.data.length; i++) {
                                console.log(data.data[i].fields.length);
                                console.log(data.data[i].fields[i].field_value);
                                // for(let k=0;k<)
                                base.fieldName = data.data[i].fields;
                                console.log(base.fieldName);
                                console.log(base.fieldName[i].field_value);
                                if (base.fieldName[i].field_id == 'image') {
                                    console.log("ok");
                                }
                                console.log(data.data[i]);
                                base.field_data[i].label = data.data[i].fields[0].field_details.label;
                                console.log(base.field_data);
                                base.field_data[i].value = data.data[i].fields[0].field_value;
                                base.field_data[i].lang = data.data[i].fields[1].field_details.label;
                                base.field_data[i].lang_value = data.data[i].fields[1].field_value;
                                base.field_data[i].gender = data.data[i].fields[2].field_details.label;
                                base.field_data[i].gender_value = data.data[i].fields[2].field_value;
                                base.field_data[i].exp = data.data[i].fields[3].field_details.label;
                                base.field_data[i].exp_value = data.data[i].fields[3].field_value;
                                base.field_data[i].date = data.data[i].fields[4].field_details.label;
                                base.field_data[i].date_value = data.data[i].fields[4].field_value;
                                base.field_data[i].about = data.data[i].fields[5].field_details.label;
                                base.field_data[i].about_value = data.data[i].fields[5].field_value;
                                // base.field_data[i].image = data.data[i].fields[i].imageUrl;
                                console.log("------label----");
                                console.log(base.field_data);
                                // base.product_list.push(base.fieldName);
                                // console.log(base.product_list);
                                console.log(base.fieldName.length);
                                for (var k = 0; k < base.fieldName.length; k++) {
                                    console.log(base.fieldName[k].field_details.name);
                                    console.log(base.fieldName[k].field_details.label);
                                    // base.field_data[i].label = base.fieldName[k].field_details.field_type;
                                    console.log(base.field_data);
                                    if (base.fieldName[k].field_id == 'image') {
                                        base.field_data[i].image = base.fieldName[k].imageUrl;
                                        console.log(base.field_data);
                                    }
                                    base.product_list.push(base.fieldName[k]);
                                    console.log(base.product_list);
                                }
                                //  base.product_list.push(data.data[i].fields);
                                console.log(base.product_list);
                                //  base.service.LoaderHide();
                                if (i == data.data.length - 1) {
                                    console.log(base.product_list);
                                    // base.service.LoaderHide();
                                }
                            }
                            console.log("---End data-------");
                            console.log(base.field_data);
                        }
                        else {
                            base.nodata = true;
                            base.alldata = false;
                            base.service.LoaderHide();
                        }
                    }
                    else {
                        base.service.LoaderHide();
                    }
                }, function (error) {
                    base.service.LoaderHide();
                    console.log(error);
                    base.service.Warning('Something went wrong. Try again later');
                });
                console.log("ok");
            });
        }
        this.initautocomplete();
    };
    ClassifiedProductPage.prototype.initautocomplete = function () {
        var base = this;
        setTimeout(function () {
            console.log('--------------------------------------------------------------------------------');
            console.log(document.getElementById('ownLocation').getElementsByTagName('input')[0].value);
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('ownLocation').getElementsByTagName('input')[0]);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    window.alert(this.TranslateService.instant('No details available for input') + place.name + "'");
                    return;
                }
                else {
                    console.log(place);
                    // base.destination = false;
                    base.own_location = {
                        address: place.formatted_address,
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng()
                    };
                    console.log(base.own_location);
                    base.service.LoaderShowmsg("Searching..");
                    var url2 = base.base_url + '/classifiedProducts/1?catID=' + base.cat_id + '&latitude=' + base.own_location.latitude + '&longitude=' + base.own_location.longitude;
                    console.log(url2);
                    base.http.get(url2).subscribe(function (data2) {
                        console.log(data2);
                        console.log(data2.data.length);
                        if (data2.status == 'success') {
                            if (data2.data.length > 0) {
                                base.alldata = true;
                                base.nodata = false;
                                console.log(data2.data);
                                base.field_data = data2.data;
                                console.log(base.field_data);
                                base.service.LoaderHide();
                                __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('users').on("value", function (getDets) {
                                    console.log(getDets.val());
                                    base.infos = base.retriveDets(getDets);
                                    console.log(base.infos);
                                    for (var j = 0; j < base.infos.length; j++) {
                                        console.log(base.infos[j]);
                                        base.field_data.api_token = base.infos[j].api_token;
                                        base.field_data.mobileNo = base.infos[j].mobile;
                                        console.log(base.field_data);
                                    }
                                });
                                for (var i = 0; i < data2.data.length; i++) {
                                    console.log(data2.data[i].fields.length);
                                    console.log(data2.data[i].fields[i].field_value);
                                    // for(let k=0;k<)
                                    base.fieldName = data2.data[i].fields;
                                    console.log(base.fieldName);
                                    console.log(base.fieldName[i].field_value);
                                    if (base.fieldName[i].field_id == 'image') {
                                        console.log("ok");
                                    }
                                    console.log(data2.data[i]);
                                    base.field_data[i].label = data2.data[i].fields[0].field_details.label;
                                    base.field_data[i].value = data2.data[i].fields[0].field_value;
                                    base.field_data[i].lang = data2.data[i].fields[1].field_details.label;
                                    base.field_data[i].lang_value = data2.data[i].fields[1].field_value;
                                    base.field_data[i].gender = data2.data[i].fields[2].field_details.label;
                                    base.field_data[i].gender_value = data2.data[i].fields[2].field_value;
                                    base.field_data[i].exp = data2.data[i].fields[3].field_details.label;
                                    base.field_data[i].exp_value = data2.data[i].fields[3].field_value;
                                    base.field_data[i].date = data2.data[i].fields[4].field_details.label;
                                    base.field_data[i].date_value = data2.data[i].fields[4].field_value;
                                    base.field_data[i].about = data2.data[i].fields[5].field_details.label;
                                    base.field_data[i].about_value = data2.data[i].fields[5].field_value;
                                    // base.field_data[i].image = data.data[i].fields[i].imageUrl;
                                    console.log("------label----");
                                    console.log(base.field_data);
                                    // base.product_list.push(base.fieldName);
                                    // console.log(base.product_list);
                                    console.log(base.fieldName.length);
                                    for (var k = 0; k < base.fieldName.length; k++) {
                                        console.log(base.fieldName[k].field_details.name);
                                        console.log(base.fieldName[k].field_details.label);
                                        // base.field_data[i].label = base.fieldName[k].field_details.field_type;
                                        console.log(base.field_data);
                                        if (base.fieldName[k].field_id == 'image') {
                                            base.field_data[i].image = base.fieldName[k].imageUrl;
                                            console.log(base.field_data);
                                        }
                                        base.product_list.push(base.fieldName[k]);
                                        console.log(base.product_list);
                                    }
                                    //  base.product_list.push(data.data[i].fields);
                                    console.log(base.product_list);
                                    //  base.service.LoaderHide();
                                    if (i == data2.data.length - 1) {
                                        console.log(base.product_list);
                                        // base.service.LoaderHide();
                                    }
                                }
                                console.log("---End data-------");
                                console.log(base.field_data);
                            }
                            else {
                                base.nodata = true;
                                base.alldata = false;
                                base.service.LoaderHide();
                            }
                        }
                        else {
                            base.service.LoaderHide();
                        }
                    }, function (error) {
                        base.service.LoaderHide();
                        console.log(error);
                        base.service.Warning('Something went wrong. Try again later');
                    });
                }
            });
        }, 2000);
    };
    ClassifiedProductPage.prototype.generateAddress = function (addressObj) {
        var obj = [];
        var address = "";
        for (var key in addressObj) {
            obj.push(addressObj[key]);
            console.log(addressObj[key]);
        }
        obj.reverse();
        for (var val in obj) {
            if (obj[val].length)
                address += obj[val] + ', ';
            console.log(address);
        }
        return address.slice(0, -2);
    };
    ClassifiedProductPage.prototype.retriveDets = function (getDets) {
        var returnArr = [];
        getDets.forEach(function (snapshot) {
            var item = snapshot.val();
            console.log(item.api_token);
            item.key = snapshot.key;
            if (item.api_token != localStorage.getItem('api_token')) {
                returnArr.push(item);
            }
        });
        return returnArr;
    };
    ClassifiedProductPage.prototype.chat2 = function (inf) {
        var _this = this;
        console.log(inf);
        __WEBPACK_IMPORTED_MODULE_6_firebase___default.a.database().ref('users').orderByChild('mobile').equalTo(inf.mobileNo).on("value", function (data) {
            console.log(data.val());
            _this.chatList = [];
            _this.chatList = _this.retriveData(data);
            console.log(_this.chatList);
            _this.navCtrl.push('ChatMessagePage', { passInfo: _this.chatList[0] });
        });
    };
    ClassifiedProductPage.prototype.retriveData = function (data) {
        var returnArr = [];
        data.forEach(function (snapshots) {
            var item = snapshots.val();
            console.log(item);
            item.key = snapshots.key;
            // console.log(item.key);
            returnArr.push(item);
        });
        return returnArr;
    };
    ClassifiedProductPage.prototype.details = function (info) {
        this.navCtrl.push('ClassifiedProductDetailPage', { id: info.id });
        console.log(info);
    };
    ClassifiedProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classified-product',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\classified-product\classified-product.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Classified Product List</ion-title>\n  </ion-navbar>\n  <ion-input class="srch-area" type="text" id="ownLocation" [(ngModel)]="own_location.address" placeholder="Search here.." ></ion-input>\n</ion-header>\n\n\n<ion-content padding>\n  <div *ngIf="alldata">\n  <div class="donate-list" *ngFor="let detail of field_data">\n    <!-- <ion-icon *ngIf="detail.api_token" (tap)="chat2(detail)" name="chatbubbles" style="float: right;color:green;font-size:30px;margin-right:12px;"></ion-icon> -->\n    <ion-row>\n        <ion-col col-3 (tap)="details(detail)"  *ngIf="detail.image">\n          <img [src]="detail.image" style="height: 100px;">\n        </ion-col>\n        <ion-col col-7 (tap)="details(detail)" >\n          <p><b>Category Name:</b> {{detail.category_names[1]}}</p>\n          <p><b>{{detail.label}}:</b> {{detail.value}}</p>\n          <p><b>{{detail.gender}}:</b> {{detail.gender_value}}</p>\n          <p><b>{{detail.lang}}:</b> {{detail.lang_value}}</p>\n          <p><b>{{detail.exp}}:</b> {{detail.exp_value}}</p>\n          <p><b>{{detail.date}}:</b> {{detail.date_value}}</p>\n          <p><b>{{detail.about}}:</b> {{detail.about_value}}</p>\n        </ion-col>\n      <ion-col col-2>\n        <!-- <button ion-button="" icon-only="" small (click)="deleteItem(item.id)" outline mode="ios" color="danger">\n          <ion-icon name="trash"></ion-icon>\n        </button> -->\n      </ion-col>\n    </ion-row>\n  </div>\n</div>\n<div *ngIf="nodata">\n  <div class="donate-list" style="margin-top: 36px;padding: 12px 7px;">\n    <p style="font-weight: bold;text-align: center;font-size:16px">No products available!!</p>\n  </div>\n</div>\n  <!-- <ion-infinite-scroll (ionInfinite)="moreProducts($event)">\n    <ion-infinite-scroll-content loadingSpinner="bubbles"></ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\classified-product\classified-product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], ClassifiedProductPage);
    return ClassifiedProductPage;
}());

//# sourceMappingURL=classified-product.js.map

/***/ })

});
//# sourceMappingURL=46.js.map