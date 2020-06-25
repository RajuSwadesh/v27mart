webpackJsonp([26],{

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessegesPageModule", function() { return MessegesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messeges__ = __webpack_require__(647);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessegesPageModule = /** @class */ (function () {
    function MessegesPageModule() {
    }
    MessegesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messeges__["a" /* MessegesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__messeges__["a" /* MessegesPage */]),
            ],
        })
    ], MessegesPageModule);
    return MessegesPageModule;
}());

//# sourceMappingURL=messeges.module.js.map

/***/ }),

/***/ 647:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessegesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessegesPage = /** @class */ (function () {
    function MessegesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MessegesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MessegesPage');
    };
    MessegesPage.prototype.compose = function () {
        this.navCtrl.push('ComposePage');
    };
    MessegesPage.prototype.inbox = function () {
        this.navCtrl.push('InboxPage');
    };
    MessegesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-messeges',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\messeges\messeges.html"*/'<ion-header mode="md" no-border="">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">Messeges</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-row>\n    <ion-col col-6="" class="animated fadeInUp">\n      <ion-badge color="danger">24</ion-badge>\n      <div class="btn_wrapper" (tap)="inbox()">\n        <img src="assets/imgs/all_mail.svg" alt="">\n        <p>All Messages</p>\n      </div>\n    </ion-col>\n    <ion-col col-6="" class="animated fadeInUp" style="animation-delay:0.2s ">\n      <div class="btn_wrapper">\n        <img src="assets/imgs/send_mail.svg" alt="">\n        <p>Send Mail</p>\n      </div>\n    </ion-col>\n    <ion-col col-6="" class="animated fadeInUp" style="animation-delay:0.3s ">\n      <div class="btn_wrapper">\n        <img src="assets/imgs/recyclebin_mail.svg" alt="">\n        <p>Recycle Bin</p>\n      </div>\n    </ion-col>\n  </ion-row>\n\n  <ion-fab right bottom>\n    <button ion-fab color="" (tap)="compose()">\n      <ion-icon name="create"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\messeges\messeges.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], MessegesPage);
    return MessegesPage;
}());

//# sourceMappingURL=messeges.js.map

/***/ })

});
//# sourceMappingURL=26.js.map