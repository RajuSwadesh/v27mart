import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  User = {
    name : "",
    email : "",
    mobile : ""
  };


  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController,public api:ApiProvider,public service:ServiceProvider,public auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
    const base = this;
    base.service.LoaderShow();
    base.api.GET("/myProfile").then(function (success : any) {
      base.service.LoaderHide();
      console.log(success.data)
        base.User = success.data;
        console.log(base.User)

    }).catch( error => {
      base.service.LoaderHide();
      base.service.Warning(error)
    });
  }

  save(){
   let base=this;
   if(base.User.name=='')
   {
    base.service.Warning("Please enter your name")
   }
   else if(base.User.email=='')
   {
    base.service.Warning("Please enter your email")
   }
   else if(base.User.mobile=='')
   {
    base.service.Warning("Please enter your mobile")
   }
   else{
    base.service.LoaderShowmsg("Updating Profile");
      base.api.POST("/updateProfile", base.User).then(function (success : any) {
        base.service.LoaderHide();
        localStorage.setItem('user_data',JSON.stringify(success.data))
        base.service.Success('Profile Update Successfully');
      }).catch( error => {
        base.service.LoaderHide();
        base.service.Warning(error)
      });

   }
  }
}
