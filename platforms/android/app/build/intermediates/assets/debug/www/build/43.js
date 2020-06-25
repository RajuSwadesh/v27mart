webpackJsonp([43],{

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComposePageModule", function() { return ComposePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compose__ = __webpack_require__(632);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComposePageModule = /** @class */ (function () {
    function ComposePageModule() {
    }
    ComposePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__compose__["a" /* ComposePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__compose__["a" /* ComposePage */]),
            ],
        })
    ], ComposePageModule);
    return ComposePageModule;
}());

//# sourceMappingURL=compose.module.js.map

/***/ }),

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComposePage; });
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
 * Generated class for the ComposePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ComposePage = /** @class */ (function () {
    function ComposePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.showList = false;
    }
    ComposePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ComposePage');
    };
    ComposePage.prototype.initializeItems = function () {
        this.items = [
            { img: "https://randomuser.me/api/portraits/men/9.jpg", name: "Timmothy Evans" },
            { img: "https://randomuser.me/api/portraits/men/15.jpg", name: "Reginald Fox" },
            { img: "https://randomuser.me/api/portraits/women/51.jpg", name: "Rosemary Burke" },
            { img: "https://randomuser.me/api/portraits/women/79.jpg", name: "Marian Reid" },
            { img: "https://randomuser.me/api/portraits/men/75.jpg", name: "Wesley Hernandez" },
            { img: "https://randomuser.me/api/portraits/men/19.jpg", name: "Dwayne Bishop" }
        ];
    };
    ComposePage.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            // Filter the items
            /*     this.items = this.items.filter((item) => {
                   return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
                 });*/
            // Show the results
            this.showList = true;
        }
        else {
            // hide the results when the query is empty
            this.showList = false;
        }
    };
    ComposePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-compose',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\compose\compose.html"*/'<ion-header mode="md" no-border="">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="">Compose</ion-title>\n\n\n    <ion-buttons right="" style="margin-right: 12px">\n      <button ion-button clear icon-only="">\n        <ion-icon name="attach"></ion-icon>\n      </button>\n    </ion-buttons>\n\n\n    <ion-buttons right="" style="margin-right: 8px">\n      <button ion-button clear icon-only="">\n        <ion-icon name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <div class="product_details animated fadeInUp">\n    <input type="text" placeholder="TO" (input)="getItems($event)">\n    <ion-list *ngIf="showList" class="suggested_item" inset>\n      <ion-item no-padding="" *ngFor="let item of items" no-lines="">\n        <ion-avatar item-start>\n          <img src="{{item.img}}">\n        </ion-avatar>\n        {{ item.name }}\n      </ion-item>\n    </ion-list>\n  </div>\n\n  <div class="product_details animated fadeInUp">\n    <input type="text" placeholder="Subject">\n  </div>\n\n  <div class="product_details animated fadeInUp">\n    <textarea rows="3" placeholder="Compose mail"></textarea>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\compose\compose.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */]])
    ], ComposePage);
    return ComposePage;
}());

//# sourceMappingURL=compose.js.map

/***/ })

});
//# sourceMappingURL=43.js.map