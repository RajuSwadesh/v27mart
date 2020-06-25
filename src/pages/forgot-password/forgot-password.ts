import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-forgot-password',
  templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {
  base_url:any;
  email:any='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public api:ApiProvider,public service:ServiceProvider) {
    this.base_url=api.Base_Url;
    console.log(this.base_url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPasswordPage');
  }

  forgot()
  {
    let base=this;
    if(this.email=='')
    {
      base.service.Warning('Please Enter Your Registered Email address');
    }
    else{
      base.service.LoaderShowmsg('Sending Reset Password Link');
      let url=base.base_url+'/forgotPassword?email='+base.email;
      base.http.post(url,'').subscribe((data:any) => {
        console.log(data)
       if(data.status=='success')
       {
          base.service.LoaderHide();
          base.service.Success(data.data);
          base.navCtrl.setRoot('LoginPage');
       }
       else{
        base.service.LoaderHide();
        base.service.Warning(data.data);
       }  
      },error=>{
        base.service.LoaderHide();
        base.service.Warning('Something went wrong. Try again later');
      });
    }
  }

}
