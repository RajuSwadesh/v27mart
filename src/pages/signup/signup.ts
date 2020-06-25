import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public base64Image: string;
  name:any='';
  email:any='';
  phno:any='';
  password:any='';
  c_password:any='';
  base_url:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:HttpClient, public api:ApiProvider,public service:ServiceProvider) {
    this.base64Image = "assets/img/man.svg";
    this.base_url=api.Base_Url;
    console.log(this.base_url);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signUp()
  {
    let base=this;
    if(base.name=='')
    {
      base.service.Warning('Please Enter Your Name');
    }
    else if(base.email=='')
    {
      base.service.Warning('Please Enter Your Email');
    }
    else if(base.phno=='')
    {
      base.service.Warning('Please Enter Your Phone Number');
    }
    else if(base.password=='')
    {
      base.service.Warning('Please Enter Your Password');
    }
    else if(base.c_password=='')
    {
      base.service.Warning('Please Enter Password Again');
    }
    else if(base.password!=base.c_password)
    {
      base.service.Warning('Your Password and Confirm Password Is Not Same. Check it.');
    }
    else{
      base.service.LoaderShowmsg('Crating Your Profile');
      let url=base.base_url+'/registration?name='+base.name+'&email='+base.email+'&password='+base.password+'&confirm_password='+base.c_password+'&mobile='+base.phno;
      base.http.post(url,'').subscribe((data:any) => {
        console.log(data)
       if(data.status=='success')
       {
          base.service.LoaderHide();
          base.service.Success(data.message);
          base.navCtrl.setRoot('LoginPage');
          firebase.database().ref('users/'+data.data.id).set({
            api_token : data.data.api_token,
            email : data.data.email,
            password : base.password,
            mobile : data.data.mobile,
            name : data.data.name,
            id : data.data.id,
            created_at : data.data.created_at,
          });
       }
       else{
        base.service.LoaderHide();
        base.service.Warning(data.message);
       }  
      },error=>{
        base.service.LoaderHide();
        base.service.Warning('Something went wrong. Try again later');
      });

    }
  }
}
