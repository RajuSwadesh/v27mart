webpackJsonp([33],{

/***/ 577:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeRequestPageModule", function() { return ExchangeRequestPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__exchange_request__ = __webpack_require__(641);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ExchangeRequestPageModule = /** @class */ (function () {
    function ExchangeRequestPageModule() {
    }
    ExchangeRequestPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__exchange_request__["a" /* ExchangeRequestPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__exchange_request__["a" /* ExchangeRequestPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__exchange_request__["a" /* ExchangeRequestPage */]
            ]
        })
    ], ExchangeRequestPageModule);
    return ExchangeRequestPageModule;
}());

//# sourceMappingURL=exchange-request.module.js.map

/***/ }),

/***/ 641:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExchangeRequestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__ = __webpack_require__(319);
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
 * Generated class for the ExchangeRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ExchangeRequestPage = /** @class */ (function () {
    function ExchangeRequestPage(navCtrl, navParams, viewCtrl, camera, actionSheetController, api, service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.camera = camera;
        this.actionSheetController = actionSheetController;
        this.api = api;
        this.service = service;
        this.product_id = '';
        this.qty = 1;
        this.price = '';
        this.variation_id = '';
        this.variation_value = '';
        this.pro_img = '';
        this.name = '';
        this.comment = '';
        this.image1 = '';
        this.image2 = '';
        this.image3 = '';
        this.image4 = '';
        this.image_data = [];
        this.cameraSetting = {
            quality: 30,
            sourceType: 1,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 500,
            targetHeight: 500,
        };
        this.cameraSettingGallery = {
            quality: 30,
            sourceType: 2,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            targetWidth: 500,
            targetHeight: 500,
        };
        this.product_id = this.navParams.get('product_id');
        this.price = this.navParams.get('price');
        this.variation_id = this.navParams.get('variation_id');
        this.variation_value = this.navParams.get('variation_value');
        this.pro_img = this.navParams.get('img');
        this.name = this.navParams.get('name');
        console.log(this.name, this.product_id, this.price, this.variation_id, this.variation_value);
    }
    ExchangeRequestPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ExchangeRequestPage');
    };
    ExchangeRequestPage.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    ExchangeRequestPage.prototype.chooseImage = function (type) {
        var _this = this;
        var actionSheet = this.actionSheetController.create({
            buttons: [{
                    text: 'Camera',
                    icon: 'camera',
                    handler: function () {
                        console.log('camera clicked');
                        _this.getImage(_this.cameraSetting, type);
                    }
                }, {
                    text: 'Gallery',
                    icon: 'image',
                    handler: function () {
                        console.log('gallery clicked');
                        _this.getImage(_this.cameraSettingGallery, type);
                    }
                }]
        });
        actionSheet.present();
    };
    ExchangeRequestPage.prototype.getImage = function (options, type) {
        var base = this;
        base.camera.getPicture(options).then(function (imageData) {
            if (type == 'img1') {
                base.image1 = 'data:image/jpeg;base64,' + imageData;
                base.image_data.push(base.image1);
            }
            else if (type == "img2") {
                base.image2 = 'data:image/jpeg;base64,' + imageData;
                base.image_data.push(base.image2);
            }
            else if (type == 'img3') {
                base.image3 = 'data:image/jpeg;base64,' + imageData;
                base.image_data.push(base.image3);
            }
            else if (type == 'img4') {
                base.image4 = 'data:image/jpeg;base64,' + imageData;
                base.image_data.push(base.image4);
            }
        }, function (err) {
            console.log(err);
        });
    };
    ExchangeRequestPage.prototype.submit = function () {
        var _this = this;
        if (this.image_data.length == 0) {
            this.service.Warning("Upload your Product Image...");
        }
        else if (this.comment == '') {
            this.service.Warning("Write your comment before submit...");
        }
        else {
            this.service.LoaderShowmsg('Submitting your request...');
            console.log(this.image_data);
            console.log(this.product_id, this.qty, this.price, this.variation_id, this.variation_value, this.comment);
            this.api.POST('/AddPriceNegotiation', {
                product_id: this.product_id,
                qty: this.qty,
                price: this.price,
                variation_id: this.variation_id,
                variation_value: this.variation_value,
                comments: this.comment,
                images: this.image_data
            }).then(function (response) {
                console.log(response);
                _this.service.LoaderHide();
                if (response.status == 'success') {
                    _this.service.Success(response.data);
                    _this.viewCtrl.dismiss();
                }
                else {
                    _this.service.Success(response.data);
                }
            }).catch(function (error) {
                _this.service.LoaderHide();
                _this.service.Warning("Something went wrong. Try again later");
            });
        }
    };
    ExchangeRequestPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-exchange-request',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\exchange-request\exchange-request.html"*/'<!--\n  Generated template for the ExchangeRequestPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header mode="md">\n  <ion-navbar mode="md" color="primary">\n    <ion-title mode="ios" text-capitalize="" style="">Exchange</ion-title>\n    <ion-buttons right="" (tap)="close()" style="margin-right: 8px">\n      <button ion-button clear icon-only="">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card class="ex-card">\n  <ion-item>\n    <ion-row>\n      <ion-col cols-2>\n        <img [src]="pro_img"/>\n      </ion-col>\n      <ion-col cols-10>\n        <h4 style="white-space:normal;">{{name}}</h4>\n        <p>Qty:{{qty}}</p>\n        <p>Variation:{{variation_value}}</p>\n      </ion-col>\n    </ion-row>\n  </ion-item>\n  <p class="upload-txt">Upload Images Of Your Product:</p>\n  <ion-row>\n    <ion-col cols-6 class="img1" (click)="chooseImage(\'img1\')">\n      <img src="assets/imgs/up1.png" class="up" *ngIf="image1==\'\'"/>\n      <img [src]="image1" *ngIf="image1" class="proimg"/>\n    </ion-col>\n    <ion-col cols-6 class="img2" (click)="chooseImage(\'img2\')">\n        <img src="assets/imgs/up1.png" class="up" *ngIf="image2==\'\'"/>\n        <img [src]="image2" *ngIf="image2" class="proimg"/>\n      </ion-col>\n  </ion-row>\n  <ion-row>\n      <ion-col cols-6 class="img1" (click)="chooseImage(\'img3\')">\n          <img src="assets/imgs/up1.png" class="up" *ngIf="image3==\'\'"/>\n          <img [src]="image3" *ngIf="image3" class="proimg"/>\n      </ion-col>\n      <ion-col cols-6 class="img2" (click)="chooseImage(\'img4\')">\n          <img src="assets/imgs/up1.png" class="up" *ngIf="image4==\'\'"/>\n          <img [src]="image4" *ngIf="image4" class="proimg"/>\n        </ion-col>\n    </ion-row>\n  <ion-textarea rows="5" placeholder="Write your comment.." [(ngModel)]="comment">\n\n  </ion-textarea>\n\n  <button ion-button block class="btn" (click)="submit()">Submit</button>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\exchange-request\exchange-request.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["B" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], ExchangeRequestPage);
    return ExchangeRequestPage;
}());

//# sourceMappingURL=exchange-request.js.map

/***/ })

});
//# sourceMappingURL=33.js.map