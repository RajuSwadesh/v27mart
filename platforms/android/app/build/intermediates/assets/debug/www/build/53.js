webpackJsonp([53],{

/***/ 604:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessagePageModule", function() { return ChatMessagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chat_message__ = __webpack_require__(668);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChatMessagePageModule = /** @class */ (function () {
    function ChatMessagePageModule() {
    }
    ChatMessagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__chat_message__["a" /* ChatMessagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__chat_message__["a" /* ChatMessagePage */]),
            ],
        })
    ], ChatMessagePageModule);
    return ChatMessagePageModule;
}());

//# sourceMappingURL=chat-message.module.js.map

/***/ }),

/***/ 668:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatMessagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__ = __webpack_require__(325);
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
 * Generated class for the ChatMessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatMessagePage = /** @class */ (function () {
    function ChatMessagePage(navCtrl, navParams, service, zone, camera, storage, actionSheetCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.zone = zone;
        this.camera = camera;
        this.storage = storage;
        this.actionSheetCtrl = actionSheetCtrl;
        this.loadingCtrl = loadingCtrl;
        this.message = '';
        this.cameraSetting = {
            quality: 100,
            sourceType: 1,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            //targetWidth:500,
            // targetHeight:500,
            allowEdit: true
        };
        this.cameraSettingGallery = {
            quality: 100,
            sourceType: 2,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            //targetWidth:500,
            //targetHeight:500,
            allowEdit: true
        };
    }
    ChatMessagePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ChatMessagePage');
        console.log(localStorage.getItem('api_token'));
        this.token = localStorage.getItem('api_token');
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('users').orderByChild('api_token').equalTo(this.token).on("value", function (userDets) {
            console.log(userDets.val());
            _this.infos = [];
            _this.infos = _this.retriveData(userDets);
            console.log(_this.infos);
            if (_this.infos[0] != undefined) {
                _this.ownerId = _this.infos[0].id;
            }
            else {
                _this.service.Warning("Please re signup for use chatting feature!!");
                _this.navCtrl.push('CategoriesPage');
            }
        });
        this.dets = this.navParams.get('passInfo');
        console.log(this.dets);
        if (this.dets != undefined) {
            this.chatUserId = this.dets.id;
            console.log(this.chatUserId);
            this.name = this.dets.name;
            console.log(this.name);
        }
        else {
            this.navCtrl.push('ChatPage');
        }
        this.fetchMsg = this.fetchChat().subscribe(function (res) {
            setTimeout(function () {
            }, 1000);
            _this.zone.run(function () {
                _this.messageList = res;
                _this.messageLength = _this.messageList.length;
                console.log(_this.messageList);
                _this.scrollto();
            });
        });
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('users').on("value", function (check) {
            _this.infos2 = [];
            _this.infos2 = _this.retriveData(check);
        });
    };
    ChatMessagePage.prototype.retriveData = function (data) {
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
    ChatMessagePage.prototype.scrollto = function () {
        var _this = this;
        setTimeout(function () {
            _this.content.scrollToBottom();
        }, 1000);
    };
    ChatMessagePage.prototype.sendMessage = function () {
        var _this = this;
        console.log(this.message);
        if (this.message == undefined || this.message == '') {
            this.service.Warning("Cannot send empty message!!");
        }
        else {
            console.log(this.message);
            console.log(this.ownerId);
            console.log(this.chatUserId);
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user_chat/' + this.ownerId + '/' + this.chatUserId + '/').push({
                class: 'my-message',
                message: this.message,
                sentBy: this.ownerId,
                imageurl: "",
                timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase__["database"].ServerValue.TIMESTAMP
            }).then(function () {
                console.log(_this.message);
                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user_chat/' + _this.chatUserId + '/' + _this.ownerId + '/').push({
                    class: 'other-message',
                    message: _this.message,
                    imageurl: "",
                    sentBy: _this.chatUserId,
                    timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase__["database"].ServerValue.TIMESTAMP
                }).then(function () {
                    _this.message = '';
                });
            });
        }
        this.scrollto();
    };
    ChatMessagePage.prototype.fetchChat = function () {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user_chat/' + _this.ownerId + '/' + _this.chatUserId).on("value", function (data) {
                var val = data.val();
                console.log(val);
                var array = [];
                for (var i in val) {
                    array.push(val[i]);
                }
                observer.next(array);
            });
        });
    };
    ChatMessagePage.prototype.attachFile = function () {
        var _this = this;
        var base = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Upload Image from Photo Gallery',
            buttons: [
                {
                    text: 'Upload Image from Gallery',
                    icon: 'image',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        //loading.present();
                        base.getImage(base.cameraSettingGallery).then(function (res) {
                            console.log(res);
                            base.photo = res;
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user_chat/' + _this.ownerId + '/' + _this.chatUserId + '/').push({
                                class: 'my-message',
                                message: "",
                                imageurl: res,
                                sentBy: _this.ownerId,
                                timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase__["database"].ServerValue.TIMESTAMP
                            }).then(function () {
                                console.log(_this.message);
                                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user_chat/' + _this.chatUserId + '/' + _this.ownerId + '/').push({
                                    class: 'other-message',
                                    message: "",
                                    imageurl: res,
                                    sentBy: _this.chatUserId,
                                    timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase__["database"].ServerValue.TIMESTAMP
                                }).then(function () {
                                    _this.message = '';
                                });
                            });
                        });
                    }
                },
                {
                    text: 'Upload Image from Camera',
                    icon: 'camera',
                    handler: function () {
                        var loading = _this.loadingCtrl.create({
                            content: 'Please wait...'
                        });
                        // loading.present();
                        base.getImage(base.cameraSetting).then(function (res) {
                            console.log(res);
                            base.photo = res;
                            __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user_chat/' + _this.ownerId + '/' + _this.chatUserId + '/').push({
                                class: 'my-message',
                                message: "",
                                imageurl: res,
                                sentBy: _this.ownerId,
                                timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase__["database"].ServerValue.TIMESTAMP
                            }).then(function () {
                                console.log(_this.message);
                                __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('user_chat/' + _this.chatUserId + '/' + _this.ownerId + '/').push({
                                    class: 'other-message',
                                    message: "",
                                    imageurl: res,
                                    sentBy: _this.chatUserId,
                                    timestamp: __WEBPACK_IMPORTED_MODULE_3_firebase__["database"].ServerValue.TIMESTAMP
                                }).then(function () {
                                    _this.message = '';
                                });
                            });
                            // base.datas.push({
                            // imageurl:res,
                            // timestamp:firebase.database.ServerValue.TIMESTAMP
                            // })
                            // console.log(base.user_id);
                            //  if(base.photo != null){
                            //    this.navCtrl.push("AttachfilePage",{photo:base.photo,chatUserId:base.chatUserId});
                            //  }
                            //  loading.dismiss();
                        });
                        // loading.dismiss();
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ChatMessagePage.prototype.getImage = function (options) {
        var _this = this;
        var base = this;
        return new Promise(function (resolve, reject) {
            base.camera.getPicture(options).then(function (imageData) {
                var loading = _this.loadingCtrl.create({
                    content: 'Please wait...'
                });
                loading.present();
                _this.base64Image = "data:image/png;base64," + imageData;
                console.log(_this.base64Image);
                var imgName = _this.newGuid() + 'document.jpg';
                _this.uploadImage(imageData, imgName).then(function (url) {
                    loading.dismiss();
                    resolve(url);
                });
                // console.log(imageData());
                _this.image = imageData;
            }, function (err) {
                console.log(err);
                // Handle error
            });
        });
    };
    ChatMessagePage.prototype.newGuid = function () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };
    ChatMessagePage.prototype.uploadImage = function (blobData, ImageName) {
        //let base = this;
        return new Promise(function (resolve, reject) {
            var storageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref('assets/AttachFile');
            var ref = storageRef.child(ImageName);
            ref.putString(blobData, 'base64', { contentType: 'image/jpeg' }).then(function (snapshot) {
                ref.getDownloadURL().then(function (url) {
                    resolve(url);
                });
            }, function (error) {
                reject({
                    status: "failed",
                    URL: error.code
                });
            });
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Content */])
    ], ChatMessagePage.prototype, "content", void 0);
    ChatMessagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-chat-message',template:/*ion-inline-start:"E:\SWADESH\Marketplace\src\pages\chat-message\chat-message.html"*/'<!-- <ion-header>\n  <ion-navbar>\n    <ion-title>chat-message</ion-title>\n  </ion-navbar>\n</ion-header> -->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>{{this.name}}</ion-title>\n    <!-- <p>Last seen 4 min ago</p> -->\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  #content>\n  <div class="chat-history" >\n    <!-- <ul>\n      <li class="clearfix">\n        <div class="message-data" >\n          <span class="message-data-time" >10:14 AM, Today</span> &nbsp; &nbsp;\n          <span class="message-data-name" >Me</span>\n        </div>\n        <div class="message other-message">\n          Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems at the last phase of the project?\n        </div>\n      </li>\n      <li>\n        <div class="message-data">\n          <span class="message-data-name">Charles</span>\n          <span class="message-data-time">10:20 AM, Today</span>\n        </div>\n        <div class="message my-message">\n          Actually everything was fine. I\'m very excited to show this to our team.\n        </div>\n      </li>\n\n      <li>\n        <div class="message-data">\n          <span class="message-data-name"> Charles</span>\n          <span class="message-data-time">10:31 AM, Today</span>\n        </div>\n        <div class="message my-message">\n           I\'m very excited to show this to our team.\n        </div>\n      </li>\n    </ul> -->\n \n    <ul *ngIf="messageLength>0">\n      <li *ngFor="let m of messageList" class="clearfix">\n          <div *ngIf="m.class == \'my-message\'">\n             <div class="message-data" >\n               <span class="message-data-name">Me</span>\n               <span class="message-data-time">{{m.timestamp | date:\'h:mm a\'}}</span>\n             </div>\n             <div ngClass="message my-message" *ngIf="m.message != \'\'">\n              {{m.message}}\n             </div>\n             <div ngClass="message my-message" *ngIf="m.message== \'\'" >\n              <img [src]="m.imageurl" class="img-fluid" >\n             </div>\n            </div>\n            <div *ngIf="m.class == \'other-message\'">\n                <div class="message-data" text-right>\n                    <span class="message-data-time" >{{m.timestamp | date:\'h:mm a\'}} </span> &nbsp; &nbsp;\n                    <span class="message-data-name">{{name}}</span>\n                  </div>\n                  <div ngClass="message other-message" *ngIf="m.message != \'\'">\n                   {{m.message}}\n                 </div>\n                 <div ngClass="message other-message" *ngIf="m.message == \'\'" >\n                   <img [src]="m.imageurl" class="img-fluid" >\n                 </div>\n            </div>\n        </li>\n        </ul>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-input [(ngModel)]="message" placeholder="Write Here..."></ion-input>\n  <button ion-button><ion-icon name="ios-attach" (click)="attachFile()"></ion-icon></button>\n  <button ion-button (click)="sendMessage()"><ion-icon name="paper-plane"></ion-icon></button>\n</ion-footer>\n'/*ion-inline-end:"E:\SWADESH\Marketplace\src\pages\chat-message\chat-message.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["t" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["u" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* LoadingController */]])
    ], ChatMessagePage);
    return ChatMessagePage;
}());

//# sourceMappingURL=chat-message.js.map

/***/ })

});
//# sourceMappingURL=53.js.map