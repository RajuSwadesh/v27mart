import {Component, ViewChild, NgZone} from '@angular/core';
import {Platform, MenuController} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage';
import { ServiceProvider } from '../providers/service/service';
import { ApiProvider } from '../providers/api/api';
import { OneSignal } from '@ionic-native/onesignal';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Deeplinks } from '@ionic-native/deeplinks';
import {DonationdetailsPage} from '../pages/donationdetails/donationdetails';
import {ClassifiedProductDetailPage} from '../pages/classified-product-detail/classified-product-detail';
import{ProductdetailsPage} from '../pages/productdetails/productdetails';
import { AppAvailability } from '@ionic-native/app-availability';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') nav;
  userData:any;
  proPic:any;
  name:any;
  onesignal_app_id:string = '9ea63606-c06b-4413-8e07-6a5e458d1244';
  firebase_id:string = '759438951919';
  //rootPage: any = 'LoginPage';

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,private storage: Storage, public zone:NgZone, public menuCtrl:MenuController,public api:ApiProvider,public service:ServiceProvider, private oneSignal:OneSignal,private androidPermissions: AndroidPermissions,
    public deeplinks: Deeplinks,public appAvailability: AppAvailability) {
      this.checkAppAvailability();
    platform.ready().then(() => {

      // this.androidPermissions.requestPermissions([
      //   this.androidPermissions.PERMISSION.GET_ACCOUNTS,
     
      // ]);

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      //Deeplinks
      this.deeplinks.routeWithNavController(this.nav, {
        '/donationdetails/:id': 'DonationdetailsPage',
        '/classified-product-detail/:id': 'ClassifiedProductDetailPage',
        '/productdetails/:url': 'ProductdetailsPage'
      }).subscribe((match)=>{
        console.log("Successfully routed", match);
        // this.nav.push
      },(nomatch)=>{
        console.log("Unmatched Route", nomatch)
      });
      if(localStorage.getItem('user_data'))
      {
        this.service.LoaderShowmsg("Logged in..");
        this.nav.setRoot('CategoriesPage');
        // this.nav.push('CategoriesPage');
        this.service.LoaderHide();
      }
      else{
        this.nav.setRoot('LoginPage');
      }
    });

    this.AfterApplicationInit();
  }
  

  AfterApplicationInit(){
    let base = this;

    base.oneSignal.startInit(base.onesignal_app_id, base.firebase_id);
    base.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);
    base.oneSignal.enableVibrate(true);
    base.oneSignal.enableSound(true);

    //Update Device ID
    base.oneSignal.getIds().then(function (ides: any) {
      if(localStorage.getItem('user_data'))
      {
        base.api.POST('/updateOnesignalUIDD', {UIDD: ides.userId}).then((res:any)=>{

        }).catch(e => {

        });
      }
    },function (errors: any) {
      console.log(errors);
    });

    /*
    base.oneSignal.handleNotificationReceived().subscribe((res) => {
      // do something when notification is received
      console.log('notification is opened',res);
    });

    base.oneSignal.handleNotificationOpened().subscribe((res) => {
      // do something when a notification is opened
      console.log('notification is opened',res);
    });
    */

    base.oneSignal.endInit();
  }

  profile() {
    this.nav.push('ProfilePage');
    this.closeMenu();
  }
  wishstore() {
    this.nav.push('WishstorePage');
    this.closeMenu();
  }

  home()
  {
    this.nav.setRoot('CategoriesPage');
    this.closeMenu();
  }

  goToProfile()
  {
    this.nav.push('ProfilePage');
    this.closeMenu();
  }

  wishlist()
  {
    this.nav.push('WishlistPage');
    this.closeMenu();
  }

  logout()
  {
    localStorage.clear();
    this.nav.setRoot('LoginPage');
  }

  contactUs() {
    this.nav.push('ContactUsPage');
    this.closeMenu();
  }

  menuOpened()
  {
    this.zone.run(()=>{
      console.log(this.userData);
      this.userData=JSON.parse(localStorage.getItem('user_data'));
      console.log(this.userData);
       this.proPic=this.userData.profile_photo.url
       this.name=this.userData.name;
       console.log(this.name);
       console.log(localStorage.getItem('api_token'));
    })
    // let base=this;
    // base.service.LoaderShowmsg("Loading..")
    // base.api.GET("/myProfile").then(function (success : any) {
    //   base.service.LoaderHide();
    //   console.log(success.data)
    //   base.userData=success.data;
    //   console.log(base.userData)

    // }).catch( error => {
    //   base.service.LoaderHide();
    //   base.service.Warning(error)
    // });

  }

  closeMenu() {
    this.menuCtrl.close();
  }


  goToClassifiedAds()
  {
    this.nav.push('ClassifiedAddPage');
    this.closeMenu();
  }

  goToMyClassifiedAds()
  {
    this.nav.push('MyClassifiedPage');
    this.closeMenu();
  }

  goToMyDonation()
  {
    this.nav.push('DonatelistPage');
    this.closeMenu();
  }

  goToSellerregistration()
  {
    this.nav.push('SellerRegistrationPage');
    this.closeMenu();
  }

  checkAppAvailability(){
    let app;

    if (this.platform.is('ios')) {
      app = 'com.gowebbi.v27market';
    } else if (this.platform.is('android')) {
      app = 'com.gowebbi.v27market';
    }
    this.appAvailability.check(app)
  .then(
    (yes: boolean) => console.log(app + ' is available'),
    (no: boolean) => console.log(app + ' is NOT available')
  );
  }
}

