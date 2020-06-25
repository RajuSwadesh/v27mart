webpackJsonp([40],{

/***/ 571:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DonateinfoPageModule", function() { return DonateinfoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__donateinfo__ = __webpack_require__(635);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DonateinfoPageModule = /** @class */ (function () {
    function DonateinfoPageModule() {
    }
    DonateinfoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__donateinfo__["a" /* DonateinfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__donateinfo__["a" /* DonateinfoPage */]),
            ],
        })
    ], DonateinfoPageModule);
    return DonateinfoPageModule;
}());

//# sourceMappingURL=donateinfo.module.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DonateinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DonateinfoPage = /** @class */ (function () {
    function DonateinfoPage(navCtrl, navParams, modalCtrl, api, service, nativeGeocoder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.service = service;
        this.nativeGeocoder = nativeGeocoder;
        this.allDonation = [];
        this.search_location = {
            address: '',
            latitude: '',
            longitude: ''
        };
        this.geoencoderOptions = {
            useLocale: true,
            maxResults: 5
        };
        this.searchLoc = [];
    }
    DonateinfoPage.prototype.ionViewWillEnter = function () {
        var base = this;
        console.log(base.search_location);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                console.log(position.coords.latitude);
                base.search_location.latitude = position.coords.latitude;
                base.search_location.longitude = position.coords.longitude;
                console.log(base.search_location.latitude);
                console.log(base.search_location.longitude);
                base.nativeGeocoder.reverseGeocode(base.search_location.latitude, base.search_location.longitude, base.geoencoderOptions).then(function (result) {
                    console.log(result);
                    base.search_location.address = base.generateAddress(result[0]);
                    console.log(base.search_location);
                }).catch(function (error) {
                    alert('Error getting location' + JSON.stringify(error));
                });
                console.log(base.search_location);
                base.service.LoaderShowmsg('Loading Products...');
                base.api.get('/allDonations?' + 'latitude=' + base.search_location.latitude + '&' + 'longitude=' + base.search_location.longitude).then(function (res) {
                    if (res.status == 'success') {
                        base.allDonation = res.data.records;
                        console.log(base.allDonation);
                        base.donation_data = res.data.pagination;
                        console.log(base.donation_data);
                        base.service.LoaderHide();
                    }
                    else {
                        base.service.Warning(res.data.message);
                        base.service.LoaderHide();
                    }
                    console.log(res);
                }).catch(function (error) {
                    base.service.LoaderHide();
                    base.service.Warning('Something went wrong. Try again later');
                });
            });
        }
        base.initautocomplete();
    };
    // ionViewDidLoad() {
    //   console.log('ionViewDidLoad DonateinfoPage'); 
    // }
    DonateinfoPage.prototype.initautocomplete = function () {
        var base = this;
        setTimeout(function () {
            console.log('--------------------------------------------------------------------------------');
            console.log(document.getElementById('GoForm').getElementsByTagName('input')[0].value);
            var autocomplete = new google.maps.places.Autocomplete(document.getElementById('GoForm').getElementsByTagName('input')[0]);
            autocomplete.addListener('place_changed', function () {
                var place = autocomplete.getPlace();
                if (!place.geometry) {
                    window.alert(this.TranslateService.instant('No details available for input') + place.name + "'");
                    return;
                }
                else {
                    console.log(place);
                    // base.destination = false;
                    base.search_location = {
                        address: place.formatted_address,
                        latitude: place.geometry.location.lat(),
                        longitude: place.geometry.location.lng()
                    };
                    console.log(base.search_location);
                    base.searchLoc.push(place);
                    base.service.LoaderShowmsg("Searching..");
                    base.api.get('/allDonations?' + 'latitude=' + base.search_location.latitude + '&' + 'longitude=' + base.search_location.longitude).then(function (res2) {
                        console.log(res2);
                        if (res2.status == "success") {
                            base.allDonation = res2.data.records;
                            console.log(base.allDonation);
                            base.donation_data = res2.data.pagination;
                            console.log(base.donation_data);
                            base.service.LoaderHide();
                        }
                    }, function (error) {
                        console.log(error);
                        base.service.Warning("Something went to wrong!!");
                    });
                }
            });
        }, 2000);
    };
    //Return Comma saperated address
    DonateinfoPage.prototype.generateAddress = function (addressObj) {
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
    DonateinfoPage.prototype.donateto = function () {
        this.navCtrl.push('DonatetoPage');
    };
    DonateinfoPage.prototype.goToFilter = function () {
        var _this = this;
        var modal = this.modalCtrl.create('DonationFilterPage');
        modal.present();
        modal.onDidDismiss(function () {
            console.log("Modal dismiss");
            if (localStorage.getItem('donation_cat')) {
                _this.api.get('/allDonations/1/' + localStorage.getItem('donation_cat')).then(function (res) {
                    if (res.status == 'success') {
                        _this.allDonation = res.data.records;
                        console.log(_this.allDonation);
                        _this.donation_data = res.data.pagination;
                        console.log(_this.donation_data);
                    }
                    else {
                        _this.service.Warning(res.data.message);
                    }
                    console.log(res);
                }).catch(function (error) {
                    _this.service.Warning('Something went wrong. Try again later');
                });
            }
            else {
                _this.ionViewWillEnter();
            }
        });
    };
    DonateinfoPage.prototype.view = function () {
        this.navCtrl.push('DonatelistPage');
    };
    DonateinfoPage.prototype.moreProducts = function (infiniteScroll) {
        var _this = this;
        var base = this;
        setTimeout(function () {
            if (base.donation_data.next_page_url == null) {
                infiniteScroll.enable(false);
            }
            else {
                console.log(base.donation_data.next_page_url.split('v1/')[1]);
                var url = base.donation_data.next_page_url.split('v1/')[1];
                base.api.get('/' + url).then(function (res) {
                    console.log(res);
                    if (res.status == 'success') {
                        _this.allDonation = _this.allDonation.concat(res.data.records);
                        console.log(_this.allDonation);
                        _this.donation_data = res.data.pagination;
                        console.log(_this.donation_data);
                        infiniteScroll.complete();
                        if (base.donation_data.next_page_url == null) {
                            infiniteScroll.enable(false);
                        }
                        // console.log(base.product_list);
                    }
                });
            }
        }, 500);
    };
    DonateinfoPage.prototype.goToDetail = function (id, cat, type) {
        this.navCtrl.push('DonationdetailsPage', { id: id, cat: cat, type: 'all' });
    };
    DonateinfoPage.prototype.ionViewWillLeave = function () {
        localStorage.removeItem('donation_cat');
    };
    DonateinfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-donateinfo',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\donateinfo\donateinfo.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Donation</ion-title>\n    <ion-buttons right="" style="margin-right: 8px">\n        <button ion-button clear icon-left="" color="extralight" (tap)="view()">\n          <!-- <ion-icon name="ios-list" style="font-size: 30px;\n          font-weight: bold;"></ion-icon> -->\n          My Donation\n        </button>\n        \n        <button ion-button clear icon-left="" color="extralight" (click)="goToFilter()">\n            <ion-icon name="md-funnel" style="font-size: 22px;\n            font-weight: bold;"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n  <!-- <ion-icon ios="ios-pin" md="md-pin"></ion-icon> -->\n  <ion-input class="srch-area" type="text" id="GoForm" [(ngModel)]="search_location.address" placeholder="Search here.." ></ion-input>\n</ion-header>\n\n\n<ion-content padding>\n  <img src="assets/imgs/social-care.svg" height="70" class="logo">\n  <h4>V27mart charity fund</h4>\n\n  <!-- <ul>\n    <li><img src="assets/imgs/donation-1.jpg"></li>\n    <li><img src="assets/imgs/donation-2.jpg"></li>\n    <li><img src="assets/imgs/donation-3.jpg"></li>\n    <li><img src="assets/imgs/donation-4.jpg"></li>\n    <li><img src="assets/imgs/donation-5.jpg"></li>\n    <li><img src="assets/imgs/donation-6.jpg"></li>\n    <li><img src="assets/imgs/donation-7.jpg"></li>\n    <li><img src="assets/imgs/donation-8.jpg"></li>\n  </ul> -->\n\n  <div class="donation-list">\n    <ion-row *ngIf="allDonation.length>0">\n      <ion-col col-4 *ngFor="let item of allDonation" (click)="goToDetail(item.id,item.category_names[0],\'all\')">\n        <img [src]="item.small_image[0]">\n        <h5>{{item.product_title}}</h5>\n      </ion-col>\n    </ion-row>\n  </div>\n  <div *ngIf="allDonation.length==0" class="no-prod">\n      <p style="text-align: center;">No product Belong To This Category</p>\n  </div>\n  <ion-infinite-scroll (ionInfinite)="moreProducts($event)"> \n      <ion-infinite-scroll-content loadingSpinner="bubbles"></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n<!-- \n  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias amet aperiam \n    blanditiis ea, id minus nesciunt quasi rem unde voluptatum. A aperiam at \n    distinctio dolores dolorum in magni molestias quas, repellendus? \n    Illum incidunt ipsam itaque rem sit-.</p> -->\n  \n</ion-content>\n\n<ion-footer>\n    <button ion-button color="primary" full class="animated fadeInLeft" style="animation-delay: 0.6s" (tap)="donateto()">Donate Now</button>\n</ion-footer>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\donateinfo\donateinfo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_native_geocoder__["a" /* NativeGeocoder */]])
    ], DonateinfoPage);
    return DonateinfoPage;
}());

//# sourceMappingURL=donateinfo.js.map

/***/ })

});
//# sourceMappingURL=40.js.map