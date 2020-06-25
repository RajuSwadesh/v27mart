import { BrowserModule } from '@angular/platform-browser';
import { NewTransactionPage } from '../pages/instamojo/new_transaction';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import { OneSignal } from '@ionic-native/onesignal';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { AndroidPermissions } from '@ionic-native/android-permissions';
//import { HTTP } from '@ionic-native/http';


import { ErrorHandler, NgModule } from '@angular/core';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';


import { HttpClientModule } from '@angular/common/http';
import { ApiProvider } from '../providers/api/api';
import { ServiceProvider } from '../providers/service/service';
import { IonicStorageModule } from '@ionic/storage';
import { AuthProvider } from '../providers/auth/auth';
import { HTTP } from '@ionic-native/http';
import * as firebase from "firebase";
import { Camera, CameraOptions } from '@ionic-native/camera';
import { NativeStorage } from '@ionic-native/native-storage';
import { NativeGeocoder } from '@ionic-native/native-geocoder';
import {HomePage} from '../pages/home/home';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Deeplinks } from '@ionic-native/deeplinks';
// import {DonationdetailsPage} from '../pages/donationdetails/donationdetails'
import { AppAvailability } from '@ionic-native/app-availability';
import { Market } from '@ionic-native/market';

var firebaseConfig = {
  apiKey: "AIzaSyCsgoQK6TYF7phfEmRkU8g70Tww4aV2Wm0",
  authDomain: "v27chat.firebaseapp.com",
  databaseURL: "https://v27chat.firebaseio.com",
  projectId: "v27chat",
  storageBucket: "v27chat.appspot.com",
  messagingSenderId: "227283057804",
  appId: "1:227283057804:web:92ae1c0d7c330118d90fa9",
  measurementId: "G-8XD12L221Y"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
      NewTransactionPage,
    MyApp,
    HomePage,
    // DonationdetailsPage
  ],
  imports: [
    IonicImageViewerModule,
    BrowserModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
      NewTransactionPage,
    MyApp,
    // DonationdetailsPage
  //  HomePage
  ],
  providers: [
    InAppBrowser,
    AndroidPermissions,
    HTTP,
    GooglePlus,
    Facebook,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider,
    ServiceProvider,
    ApiProvider,
    ServiceProvider,
    AuthProvider,
    OneSignal,
    Camera,
    NativeStorage,NativeGeocoder,SocialSharing,Deeplinks,AppAvailability,Market
  ]
})
export class AppModule {}
