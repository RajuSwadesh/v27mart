webpackJsonp([48],{

/***/ 605:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassifiedProductDetailPageModule", function() { return ClassifiedProductDetailPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classified_product_detail__ = __webpack_require__(669);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ClassifiedProductDetailPageModule = /** @class */ (function () {
    function ClassifiedProductDetailPageModule() {
    }
    ClassifiedProductDetailPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__classified_product_detail__["a" /* ClassifiedProductDetailPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__classified_product_detail__["a" /* ClassifiedProductDetailPage */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__classified_product_detail__["a" /* ClassifiedProductDetailPage */]
            ]
        })
    ], ClassifiedProductDetailPageModule);
    return ClassifiedProductDetailPageModule;
}());

//# sourceMappingURL=classified-product-detail.module.js.map

/***/ }),

/***/ 669:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassifiedProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_api_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_firebase__);
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
 * Generated class for the ClassifiedProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClassifiedProductDetailPage = /** @class */ (function () {
    function ClassifiedProductDetailPage(navCtrl, navParams, api, socialSharing, service, auth, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.socialSharing = socialSharing;
        this.service = service;
        this.auth = auth;
        this.http = http;
        this.slidenumber = 1;
        this.images = [];
        this.productDetail = [];
        this.infos = [];
        this.apiToken = '';
        this.user_api_token = '';
        this.fieldName = [];
        this.field_data = [];
        this.infos2 = [];
        this.mobileNo = '';
        this.fieldVal = [];
        this.fieldVal2 = '';
        this.base_url = api.Base_Url;
        // this.proid=this.navParams.get('id');
        this.proid = this.navParams.get('id');
        console.log(this.proid);
    }
    ClassifiedProductDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ClassifiedProductDetailPage');
        this.user_api_token = localStorage.getItem('api_token');
        console.log(this.user_api_token);
        this.api.GET('/classifiedProductsDetails/' + this.proid).then(function (res) {
            console.log(res);
            if (res.status == 'success') {
                _this.apiToken = res.data[0].seller_api_token;
                console.log(_this.apiToken);
                _this.product_detail = res.data;
                console.log(_this.product_detail);
                // console.log(this.product_detail);
                __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('users').orderByChild('api_token').equalTo(_this.apiToken).on("value", function (getDets) {
                    console.log(getDets.val());
                    _this.infos2 = _this.retriveDets(getDets);
                    console.log(_this.infos2);
                    for (var j = 0; j < _this.infos2.length; j++) {
                        console.log(_this.infos2[j]);
                        _this.userId = _this.infos2[j].id;
                        console.log(_this.userId);
                        _this.mobileNo = _this.infos2[j].mobile;
                        _this.name = _this.infos2[j].name;
                    }
                    console.log(_this.userId);
                    console.log(_this.mobileNo);
                });
                for (var i = 0; i < _this.product_detail.length; i++) {
                    console.log(_this.product_detail[i]);
                    console.log(_this.product_detail[i].fields.length);
                    _this.productDetail = _this.product_detail[i].fields;
                    //  this.productDetail.prod_id = this.product_detail[i].id;
                    for (var k = 0; k < _this.productDetail.length; k++) {
                        _this.infos.push(_this.productDetail[k]);
                        console.log(_this.infos);
                    }
                    console.log(_this.infos);
                }
                // this.images.push(this.product_detail.product_image.original)
                // console.log(this.product_detail);
                // this.api.GET('/classifiedProductImages/'+this.proid).then((res:any)=>{
                //   console.log(res);
                //   if(res.status=='success')
                //   {
                //     for(var i=0;i<res.data.length;i++)
                //     {
                //       this.images.push(res.data[i].imageurl.original)
                //     }
                //   }
                //   console.log(this.images)
                // })
            }
        });
    };
    ClassifiedProductDetailPage.prototype.retriveDets = function (getDets) {
        var returnArr = [];
        getDets.forEach(function (snapshot) {
            var item = snapshot.val();
            console.log(item.api_token);
            item.key = snapshot.key;
            // if(item.api_token != localStorage.getItem('api_token')){
            // returnArr.push(item);
            // }
            returnArr.push(item);
        });
        return returnArr;
    };
    ClassifiedProductDetailPage.prototype.slideChanged = function () {
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
    ClassifiedProductDetailPage.prototype.share = function () {
        this.socialSharing.share(this.product_detail.product_title, '', this.product_detail.product_image.original, '');
    };
    ClassifiedProductDetailPage.prototype.addToWishlist = function () {
        var base = this;
        base.service.LoaderShow();
        var url = base.base_url + '/AddToWishlist';
        console.log(url);
        var httpHeaders = new __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpHeaders */]({
            'Accept': 'application/json',
            'authorization': "Bearer " + base.auth.getToken()
        });
        var options = {
            headers: httpHeaders
        };
        base.http.post(url, {
            product_id: base.product_detail.id
        }, options).subscribe(function (response) {
            if (response.status == 'success') {
                base.service.Success(response.data);
                base.service.LoaderHide();
            }
            else {
                base.service.Warning(response.data);
            }
        }, function (err) {
            base.service.LoaderHide();
            base.service.Warning('Something went wrong. Try again later;');
        });
    };
    ClassifiedProductDetailPage.prototype.addToCart = function () {
        var base = this;
        var variation_id = "";
        var variation_value = "";
        console.log(base.product_detail.id);
        // base.SelectedVariations.forEach(function (value, index, array) {
        //   const data = value.split('|');
        //   if(index == 0){
        //     variation_id = data[1];
        //     variation_value = data[0];
        //     console.log(variation_id,variation_value);
        //   } else {
        //     variation_id = variation_id+","+data[1];
        //     variation_value = variation_value+","+data[0];
        //     console.log(variation_id,variation_value);
        //   }
        // });
        // console.log(base.product_detail.id,base.api.getCartID(),variation_id)
        // if(base.variations.length>0)
        // {
        //   if(base.SelectedVariations.length==0)
        //   {
        //     base.service.Warning("Please choose a variation")
        //   }
        //   else{
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
                // base.fetchCart();
            }
            else {
                base.service.Warning(response.data);
            }
        }, function (error) {
            base.service.Warning(error);
        });
    };
    //  }
    // }
    ClassifiedProductDetailPage.prototype.chat2 = function (inf) {
        var _this = this;
        console.log(inf);
        if (inf != '') {
            __WEBPACK_IMPORTED_MODULE_7_firebase__["database"]().ref('users').orderByChild('mobile').equalTo(inf).on("value", function (data) {
                console.log(data.val());
                _this.chatList = [];
                _this.chatList = _this.retriveData(data);
                console.log(_this.chatList);
                _this.navCtrl.push('ChatMessagePage', { passInfo: _this.chatList[0] });
            });
        }
        else {
            this.service.Warning("Please re-signup for using chat feature!!");
        }
    };
    ClassifiedProductDetailPage.prototype.retriveData = function (data) {
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
    ClassifiedProductDetailPage.prototype.shareTo = function (data, productId) {
        var _this = this;
        console.log(data);
        console.log(productId);
        for (var k = 0; k < data.length; k++) {
            console.log(data[k].field_details.label);
            if (data[k].field_details.label == "About You") {
                this.fieldVal.push({ about: data[k].field_value });
                console.log(this.fieldVal);
            }
            if (data[k].field_details.label == "Name") {
                this.fieldVal.push({ devloper_name: data[k].field_value });
                console.log(this.fieldVal);
            }
            console.log(data[k].field_value);
        }
        console.log(this.fieldVal[0].devloper_name);
        console.log(this.fieldVal[1].about);
        this.service.LoaderShowmsg("Please wait....");
        // this.socialSharing.share("Name: "+this.fieldVal[0].devloper_name,"Profession: "+this.fieldVal[1].about+" for more detail click on ",'','https://v27market.com/classified-product-detail/'+productId).then((res:any)=>{
        this.socialSharing.share('https://play.google.com/store/apps/details?id=com.gowebbi.v27market&hl=en', "Profession: " + this.fieldVal[1].about + " for more detail click on ", '', 'https://v27market.com/classified-product-detail/' + productId).then(function (res) {
            console.log(res);
            _this.service.LoaderHide();
        }).catch((function (error) {
            console.log(error);
            _this.service.Warning("Something went to wrong!!");
            _this.service.LoaderHide();
        }));
        // this.productImage = data.small_image[0];
        // console.log(this.productImage);
        // this.productTitle = data.product_title;
        // console.log(this.productTitle);
        // this.socialsharing.share(this.productImage,'',this.productTitle,'');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["y" /* Slides */])
    ], ClassifiedProductDetailPage.prototype, "slides", void 0);
    ClassifiedProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-classified-product-detail',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\classified-product-detail\classified-product-detail.html"*/'<!-- <ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Classified Product Detail</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Classfied Product Details</ion-title>\n    <!-- <ion-buttons right="" style="margin-right: 8px" *ngIf="type==\'my\'">\n      <button ion-button clear icon-only="" style="font-size: 15px;" (click)="update()">\n        <ion-icon name="create"></ion-icon>\n      </button>\n    </ion-buttons> -->\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <ion-icon *ngIf="apiToken != user_api_token" (tap)="chat2(mobileNo)" name="chatbubbles" style="float: right;color:green;font-size:30px;margin-right:12px;"></ion-icon>\n  <div class="donation-info" *ngFor="let inf of infos ">\n    <img *ngIf="inf.field_id == \'image\'" [src]="inf.imageUrl" id="front-img">\n    <h6 *ngIf="inf.field_id != \'image\'"><span>{{inf.field_details.label}} :</span> {{inf.field_value}} </h6>\n  </div>\n  <p style="float:right;"><ion-icon ios="ios-share-alt" md="md-share-alt" (click)="shareTo(infos,proid)" style="font-size: 30px;color:blue;margin-left:-25px;"></ion-icon></p>\n</ion-content>\n<!-- <ion-content>\n      <div class="product_details animated fadeInUp" *ngFor="let inf of infos ">\n        <h4>{{inf.field_details.label}}</h4>\n        <p *ngIf="inf.field_id != \'image\' || inf.field_id != \'images\'">{{inf.field_value}}</p>\n        <h4 *ngIf="inf.field_id == \'image\'">Image</h4>\n        <p *ngIf="inf.field_id == \'image\'"><img style="height:150px;" src="{{inf.imageUrl}}" alt="images"></p>\n      </div>\n</ion-content> -->\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\classified-product-detail\classified-product-detail.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_api_api__["a" /* ApiProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_auth_auth__["a" /* AuthProvider */], __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HttpClient */]])
    ], ClassifiedProductDetailPage);
    return ClassifiedProductDetailPage;
}());

//# sourceMappingURL=classified-product-detail.js.map

/***/ })

});
//# sourceMappingURL=48.js.map