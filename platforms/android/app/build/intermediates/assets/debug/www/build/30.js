webpackJsonp([30],{

/***/ 580:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InboxPageModule", function() { return InboxPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__inbox__ = __webpack_require__(644);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InboxPageModule = /** @class */ (function () {
    function InboxPageModule() {
    }
    InboxPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__inbox__["a" /* InboxPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__inbox__["a" /* InboxPage */]),
            ],
        })
    ], InboxPageModule);
    return InboxPageModule;
}());

//# sourceMappingURL=inbox.module.js.map

/***/ }),

/***/ 644:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InboxPage; });
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


/**
 * Generated class for the InboxPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InboxPage = /** @class */ (function () {
    function InboxPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    InboxPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad InboxPage');
    };
    InboxPage.prototype.msgdetails = function () {
        this.navCtrl.push('MessagedetailsPage');
    };
    InboxPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-inbox',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\inbox\inbox.html"*/'<ion-header mode="md" no-border="">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">Inbox</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list mode="wp">\n    <ion-item mode="wp" class="animated fadeInUp" class="animated fadeInUp" (tap)="msgdetails()">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/14.jpg">\n      </ion-avatar>\n      <h2>Jeremiah Stephens</h2>\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/45.jpg">\n      </ion-avatar>\n      <h2>Franklin Garcia</h2>\n      <p>It is a long established fact that a reader will be distracted by the readable</p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/women/48.jpg">\n      </ion-avatar>\n      <h2>Christina Steward</h2>\n      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/14.jpg">\n      </ion-avatar>\n      <h2>Jeremiah Stephens</h2>\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/45.jpg">\n      </ion-avatar>\n      <h2>Franklin Garcia</h2>\n      <p>It is a long established fact that a reader will be distracted by the readable</p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/women/48.jpg">\n      </ion-avatar>\n      <h2>Christina Steward</h2>\n      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/14.jpg">\n      </ion-avatar>\n      <h2>Jeremiah Stephens</h2>\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/45.jpg">\n      </ion-avatar>\n      <h2>Franklin Garcia</h2>\n      <p>It is a long established fact that a reader will be distracted by the readable</p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/women/48.jpg">\n      </ion-avatar>\n      <h2>Christina Steward</h2>\n      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/14.jpg">\n      </ion-avatar>\n      <h2>Jeremiah Stephens</h2>\n      <p>I\'ve had a pretty messed up day. If we just...</p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/men/45.jpg">\n      </ion-avatar>\n      <h2>Franklin Garcia</h2>\n      <p>It is a long established fact that a reader will be distracted by the readable</p>\n    </ion-item>\n    <ion-item mode="wp" class="animated fadeInUp">\n      <ion-avatar item-start mode="wp">\n        <img src="https://randomuser.me/api/portraits/women/48.jpg">\n      </ion-avatar>\n      <h2>Christina Steward</h2>\n      <p>Contrary to popular belief, Lorem Ipsum is not simply random text. </p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\inbox\inbox.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], InboxPage);
    return InboxPage;
}());

//# sourceMappingURL=inbox.js.map

/***/ })

});
//# sourceMappingURL=30.js.map