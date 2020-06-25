webpackJsonp([18],{

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductdetailsPageModule", function() { return ProductdetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__productdetails__ = __webpack_require__(677);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductdetailsPageModule = /** @class */ (function () {
    function ProductdetailsPageModule() {
    }
    ProductdetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__productdetails__["a" /* ProductdetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__productdetails__["a" /* ProductdetailsPage */]),
            ],
        })
    ], ProductdetailsPageModule);
    return ProductdetailsPageModule;
}());

//# sourceMappingURL=productdetails.module.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__ = __webpack_require__(326);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ProductdetailsPage = /** @class */ (function () {
    function ProductdetailsPage(navCtrl, navParams, toastCtrl, modalCtrl, http, api, service, auth, socialSharing, imageViewerCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.api = api;
        this.service = service;
        this.auth = auth;
        this.socialSharing = socialSharing;
        this.appTitle = '';
        this.visible = false;
        this.images = [];
        this.variations = '';
        this.SelectedVariations = [];
        this.relatedProducts = [];
        this.total_cart_item = 0;
        this.slidenumber = 1;
        this.base_url = api.Base_Url;
        console.log(this.base_url);
        this.product_url = this.navParams.get('url');
        console.log(this.product_url);
        this._imageViewerCtrl = imageViewerCtrl;
    }
    ProductdetailsPage.prototype.ionViewWillEnter = function () {
        this.fetchCart();
    };
    ProductdetailsPage.prototype.ionViewDidLoad = function () {
        var base = this;
        base.service.LoaderShowmsg("Loading products...");
        var url = base.base_url + '/getproductbyurl/' + base.product_url;
        console.log(url);
        base.http.get(url).subscribe(function (data) {
            if (data.status == 'success') {
                base.service.LoaderHide();
                base.product_detail = data.data;
                base.appTitle = data.data.product_title;
                base.images.push(base.product_detail.product_image.original);
                if (base.product_detail.images.length > 0) {
                    for (var i = 0; i < base.product_detail.images.length; i++) {
                        base.images.push(base.product_detail.images[i].imageurl.original);
                    }
                }
                base.variations = Object.keys(base.product_detail.variations);
            }
            else {
                base.service.LoaderHide();
            }
        }, function (error) {
            base.service.LoaderHide();
            base.service.Warning('Something went wrong. Try again later');
        });
        base.fetchSimilarProducts();
    };
    ProductdetailsPage.prototype.ionViewDidEnter = function () {
    };
    ProductdetailsPage.prototype.bookmark = function () {
        this.visible = !this.visible;
        if (this.visible) {
            this.msgtoast = "This item is saved in your wishlist";
        }
        else {
            this.msgtoast = "This item is remove from your wishlist";
        }
        this.toast();
    };
    ProductdetailsPage.prototype.toast = function () {
        var toast = this.toastCtrl.create({
            message: this.msgtoast,
            duration: 2000,
        });
        toast.present();
    };
    ProductdetailsPage.prototype.imgchange = function (id) {
        // console.log(this.productsArray[id]);
        this.slides.slideTo(id);
    };
    ProductdetailsPage.prototype.cart = function () {
        this.navCtrl.push('CartPage');
    };
    ProductdetailsPage.prototype.becameSeller = function () {
        this.navCtrl.push('SellerRegistrationPage');
    };
    ProductdetailsPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        console.log(currentIndex);
        if (currentIndex == this.images.length) {
            console.log('that is the last');
        }
        else {
            console.log("inside else");
            this.slidenumber = currentIndex + 1;
        }
    };
    ProductdetailsPage.prototype.sellerprofile = function () {
        this.navCtrl.push('SellerpagePage');
    };
    ProductdetailsPage.prototype.deatils = function (url) {
        this.navCtrl.push('ProductdetailsPage', { url: url });
    };
    ProductdetailsPage.prototype.fetchSimilarProducts = function () {
        var base = this;
        var url = base.base_url + '/getRelatedProductbyURL/' + base.product_url;
        console.log(url);
        base.http.get(url).subscribe(function (data) {
            if (data.status == 'success') {
                base.relatedProducts = data.data;
                console.log(base.relatedProducts);
            }
        });
    };
    ProductdetailsPage.prototype.addToWishlist = function () {
        var base = this;
        base.service.LoaderShow();
        var url = base.base_url + '/AddToWishlist';
        console.log(url);
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'authorization': "Bearer " + base.auth.getToken()
        });
        var options = {
            headers: httpHeaders
        };
        base.http.post(url, {
            product_id: base.product_detail.id
        }, options).subscribe(function (response) {
            base.service.LoaderHide();
            if (response.status == 'success') {
                base.service.Success(response.data);
            }
            else {
                base.service.Warning(response.data);
            }
        }, function (err) {
            base.service.LoaderHide();
            base.service.Warning('Something went wrong. Try again later;');
        });
    };
    ProductdetailsPage.prototype.addToCart = function () {
        var base = this;
        var variation_id = "";
        var variation_value = "";
        base.SelectedVariations.forEach(function (value, index, array) {
            var data = value.split('|');
            if (index == 0) {
                variation_id = data[1];
                variation_value = data[0];
                console.log(variation_id, variation_value);
            }
            else {
                variation_id = variation_id + "," + data[1];
                variation_value = variation_value + "," + data[0];
                console.log(variation_id, variation_value);
            }
        });
        console.log(base.product_detail.id, base.api.getCartID(), variation_id);
        console.log('Variations Length:' + base.product_detail.variations);
        if (base.product_detail.variations == '') {
            base.api.POST('/AddToCart', {
                product_id: base.product_detail.id,
                CartID: base.api.getCartID(),
                qty: 1,
                variation_id: '',
                variation_value: ''
            }).then(function (response) {
                if (response.status == 'success') {
                    base.service.Success(response.data);
                    base.fetchCart();
                }
                else {
                    base.service.Warning(response.data);
                }
            }, function (error) {
                base.service.Warning(error);
            });
        }
        else {
            if (base.variations.length > 0) {
                if (base.SelectedVariations.length == 0) {
                    base.service.Warning("Please choose a variation");
                }
                else {
                    base.api.POST('/AddToCart', {
                        product_id: base.product_detail.id,
                        CartID: base.api.getCartID(),
                        qty: 1,
                        variation_id: variation_id,
                        variation_value: variation_value
                    }).then(function (response) {
                        console.log(response);
                        if (response.status == 'success') {
                            base.service.Success(response.data);
                            base.fetchCart();
                        }
                        else {
                            base.service.Warning(response.data);
                        }
                    }, function (error) {
                        base.service.Warning(error);
                    });
                }
            }
        }
    };
    ProductdetailsPage.prototype.fetchCart = function () {
        var base = this;
        var url = base.base_url + '/GetCart?CartID=' + base.api.getCartID();
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'authorization': "Bearer " + base.auth.getToken()
        });
        var options = {
            headers: httpHeaders
        };
        base.http.get(url, options).subscribe(function (response) {
            console.log(response);
            base.total_cart_item = response.data.CartDetails.length;
        });
    };
    ProductdetailsPage.prototype.share = function () {
        var _this = this;
        console.log(this.product_detail);
        this.service.LoaderShowmsg("Please wait....");
        // this.socialSharing.share(this.product_detail.product_title,'',this.product_detail.product_image.original, 'https://v27market.com/productdetails/'+this.product_detail.url).then(()=>{
        this.socialSharing.share('https://play.google.com/store/apps/details?id=com.gowebbi.v27market&hl=en', 'If app is installed', this.product_detail.product_image.original, 'https://v27market.com/productdetails/' + this.product_detail.url).then(function () {
            _this.service.LoaderHide();
        }).catch((function (error) {
            _this.service.Warning("Something went to wrong!!");
            _this.service.LoaderHide();
        }));
        // this.socialSharing.share(this.product_detail.product_title+'...' + ' For more detail go to-',this.product_detail.sale_price, 'v27mart - '+this.product_detail.product_image.original,'https://v27market.com/donationdetails/'+this.product_detail.url);
    };
    ProductdetailsPage.prototype.getDiscount = function (item) {
        var discount = 100 - (item.sale_price / item.regular_price * 100);
        return discount.toFixed(2);
    };
    ProductdetailsPage.prototype.exchange = function () {
        var base = this;
        var variation_id = "";
        var variation_value = "";
        base.SelectedVariations.forEach(function (value, index, array) {
            var data = value.split('|');
            if (index == 0) {
                variation_id = data[1];
                variation_value = data[0];
                console.log(variation_id, variation_value);
            }
            else {
                variation_id = variation_id + "," + data[1];
                variation_value = variation_value + "," + data[0];
                console.log(variation_id, variation_value);
            }
        });
        if (base.variations.length > 0) {
            if (base.SelectedVariations.length == 0) {
                base.service.Warning("Please choose a variation");
            }
            else {
                var exchangeModal = base.modalCtrl.create('ExchangeRequestPage', { product_id: base.product_detail.id, name: base.product_detail.product_title, qty: 1, price: this.product_detail.sale_price, variation_id: variation_id, variation_value: variation_value, img: base.product_detail.product_image.small });
                exchangeModal.present();
            }
        }
    };
    ProductdetailsPage.prototype.viewImage = function (myImage) {
        var imageViewer = this._imageViewerCtrl.create(myImage);
        imageViewer.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], ProductdetailsPage.prototype, "slides", void 0);
    ProductdetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-productdetails',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\productdetails\productdetails.html"*/'<ion-header mode="md">\n\n  <ion-navbar mode="md" color="primary">\n\n    <ion-title mode="ios" text-capitalize="" style="">{{appTitle}}</ion-title>\n\n    <!-- <ion-buttons right="" (tap)="bookmark()" style="margin-right: 8px">\n      <button ion-button clear icon-only="">\n        <ion-icon [name]="visible ? \'ios-heart\' :\'ios-heart-outline\'">\n        </ion-icon>\n      </button>\n    </ion-buttons> -->\n\n    <ion-buttons right="" (tap)="cart()" style="margin-right: 8px">\n      <button ion-button clear icon-only="">\n        <ion-icon name="ios-cart-outline"></ion-icon>\n        <ion-badge item-end color="danger">{{total_cart_item}}</ion-badge>\n      </button>\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content *ngIf="product_detail">\n  <div class="product_imgs animated fadeInUp" *ngIf="product_detail">\n\n    <p class="current_index">\n      {{slidenumber}} / {{images.length}}\n    </p>\n\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide pager *ngFor="let img of images;">\n        <img src="{{img}}" style="padding-top:16%;" #myImage (click)="viewImage(myImage)"> \n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <div class="product_details animated fadeInUp"  *ngIf="product_detail">\n    <h4>{{product_detail.product_title}}</h4>\n    <p *ngIf="product_detail.stock>0 && product_detail.stock<5" style="color: red;">Only a few lefts</p>\n\n    <h3>Rs.{{product_detail.sale_price}} <span class="reg_price" *ngIf="product_detail.regular_price>product_detail.sale_price">{{product_detail.regular_price}}</span><span class="discount" *ngIf="product_detail.regular_price>product_detail.sale_price">{{getDiscount(product_detail)}}% off</span>\n\n    </h3>\n    <small>Inclusive all taxes</small>\n\n    <button ion-button="" mode="ios" text-capitalize="" clear small class="more_btn" color="secondary">\n      More from this seller >\n    </button>\n  </div>\n\n  <div class="product_details animated fadeInUp" *ngFor="let item of variations; let i=index">\n    <h4>Select {{item}}</h4>\n    <ion-segment [(ngModel)]="SelectedVariations[i]" mode="wp">\n      <ion-segment-button value="{{Items.value}}|{{Items.variation_id}}" *ngFor="let Items of product_detail.variations[item]">\n        {{Items.value}}\n      </ion-segment-button>\n    </ion-segment>\n  </div>\n\n  <div class="product_details animated fadeInUp" style="padding: 8px 0">\n    <ion-row *ngIf="product_detail.is_exchange_available==\'No\'">\n      <ion-col style="border-right: 1px dashed #e8e8e8;" (click)="share()">\n        <button ion-button="" clear full no-margin="" color="dark" icon-start>\n          <ion-icon name="md-share"></ion-icon>\n          Share\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button="" clear full no-margin="" color="dark"  (click)="addToWishlist()" icon-start>\n            <ion-icon name="ios-bookmark"></ion-icon>\n          Wishlist\n        </button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngIf="product_detail.is_exchange_available==\'Yes\'">\n      <ion-col style="border-right: 1px dashed #e8e8e8;" (click)="share()">\n        <button ion-button="" clear full no-margin="" color="dark" icon-start>\n          <ion-icon name="md-share"></ion-icon>\n          Share\n        </button>\n      </ion-col>\n      <ion-col style="border-right: 1px dashed #e8e8e8;">\n        <button ion-button="" clear full no-margin="" color="dark"  (click)="addToWishlist()" icon-start>\n            <ion-icon name="ios-bookmark"></ion-icon>\n          Wishlist\n        </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button="" clear full no-margin="" color="dark"  (click)="exchange()" icon-start>\n            <ion-icon name="md-repeat"></ion-icon>\n          Exchange\n        </button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class="product_details animated fadeInUp">\n    <h4>Product Details</h4>\n    <p>{{product_detail.short_desc}}</p>\n    <p>{{product_detail.description}}</p>\n    <table>\n      <tbody>\n\n      <tr *ngFor="let Info of product_detail.attributes">\n        <td>{{Info.name}}</td>\n        <td>{{Info.value}}</td>\n      </tr>\n\n      </tbody>\n    </table>\n  </div>\n\n  <div class="product_details payment_area">\n    <h4>Payment method</h4>\n\n    <ion-list no-margin="">\n\n      <ion-item no-padding="" no-lines="">\n        <ion-avatar item-start>\n          <img src="assets/imgs/cashondelivery.jpg">\n        </ion-avatar>\n        <p>pay on delivery</p>\n      </ion-item>\n\n    </ion-list>\n\n  </div>\n\n  <div class="product_details">\n    <h4>Seller profile</h4>\n    <ion-card>\n      <ion-item no-padding="">\n        <ion-avatar item-start *ngIf="product_detail.sellerDetails.profile_photo">\n          <img src="{{product_detail.sellerDetails.profile_photo.url}}">\n        </ion-avatar>\n        <h2>{{product_detail.sellerDetails.name}}</h2>\n        <small>{{product_detail.SellerProfile.business_name+\', \'+product_detail.SellerProfile.city}}</small>\n      </ion-item>\n\n    </ion-card>\n  </div>\n\n  <!-- <div [ngClass]="paddingClass"> -->\n  <div class="product_details animated fadeInUp">\n    <h4>Became Seller\n      <button ion-button="" small clear mode="ios" text-capitalize="" no-margin="" (click)="becameSeller()">\n        Apply\n      </button>\n    </h4>\n    <div style="padding-bottom:50px;">\n    <p>\n      Want to sell your own product like this one? No problem just click on the apply button.\n    </p>\n  </div>\n  </div>\n\n\n  <div class="product_details" style="padding-bottom: 0" *ngIf="relatedProducts.length > 0">\n    <h4>Similar Products</h4>\n    <ion-slides slidesPerView="1.8" spaceBetween="6">\n      <ion-slide *ngFor="let item of relatedProducts" (tap)="deatils(item.url)">\n        <div class="button_wrapper">\n          <img [src]="item.product_image.small">\n          <h4>{{item.product_title}}</h4>\n          <div class="price_area">\n            <h3>Rs.{{item.sale_price}}</h3>\n            <h6 *ngIf="item.sale_price != item.regular_price">Rs.{{item.regular_price}}</h6>\n          </div>\n        </div>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</ion-content>\n\n\n<ion-footer class="animated fadeInUp" style="background-color: white" no-border="" *ngIf="product_detail">\n  <ion-row *ngIf="product_detail.stock>0">\n    <ion-col col-12>\n      <button ion-button="" full mode="ios" no-margin="" (tap)="addToCart()" style="border-radius: 6px">\n        Add to Cart\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n\n<ion-footer class="animated fadeInUp" style="background-color: white" no-border="" *ngIf="product_detail">\n  <ion-row *ngIf="product_detail.stock==0">\n    <ion-col col-12>\n      <button ion-button="" outline block mode="ios" no-margin="" (tap)="cart()" style="border-radius: 6px;color: red;\n      border-color: red;">\n        Out Of Stock\n      </button>\n    </ion-col>\n  </ion-row>\n</ion-footer>\n\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\productdetails\productdetails.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["z" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_7_ionic_img_viewer__["a" /* ImageViewerController */]])
    ], ProductdetailsPage);
    return ProductdetailsPage;
}());

//# sourceMappingURL=productdetails.js.map

/***/ })

});
//# sourceMappingURL=18.js.map