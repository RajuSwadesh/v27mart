import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { Storage } from '@ionic/storage';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  base_url:any;
  email:any='';
  password:any='';
  FB_APP_ID: number = 608843466619453;
  googleMail: any='';
  displayName: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public api:ApiProvider,public service:ServiceProvider,private storage: Storage,private fb: Facebook,private googlePlus: GooglePlus) {
    this.base_url=api.Base_Url;
    console.log(this.base_url);
    //this.fb.api("v2.8");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  googleLogin(){
    let base=this;
    this.googlePlus.login({}).then(res =>{

      console.log(res.email);
      base.googleMail=res.email;
      base.displayName=res.displayName;


      base.service.LoaderShowmsg('Logging you in');
      let url=base.base_url+'/social-login?email='+base.googleMail+'&name='+base.displayName;
      console.log(url);
      base.http.post(url,'').subscribe((data:any) => {
        console.log(data)
        if(data.status=='success')
        {
          base.service.LoaderHide();
          this.navCtrl.push('CategoriesPage');
          localStorage.setItem('user_data',JSON.stringify(data.data));
          localStorage.setItem('api_token',data.data.api_token);
          base.api.GET("/myProfile").then(function (success : any) {
             // base.service.LoaderHide();
              console.log(success.data)
              localStorage.setItem('user_data',JSON.stringify(success.data))
  
            }).catch( error => {
              base.service.LoaderHide();
              base.service.Warning(error)
            });
         // base.storage.set('user_data', data.data);
  
  
        }
        else{
          base.service.LoaderHide();
          base.service.Warning(data.data[0])
        }
     })

     
      //console.log(this.googleMail)
      //base.googleLogin=

    })
  }

  fbLogin(){
    let permissions = new Array<string>();
    let nav = this.navCtrl;

    //the permissions your facebook app needs from the user
    permissions = ['public_profile', 'user_photos', 'email', 'user_birthday'];

    this.fb.login(permissions)
    .then((response) => {
      let userId = response.authResponse.userID;
      let params = new Array<string>();
let base=this;
      //Getting name and gender properties
      this.fb.api("/me?fields=name,gender,email", params)
      .then((user) => {
        user.picture = "https://graph.facebook.com/" + userId + "/picture?type=large";
        //now we have the users info, let's save it in the NativeStorage
        console.log(user.name);
        console.log(user.gender);
        console.log(user.picture)
        console.log(user.email);


        base.service.LoaderShowmsg('Logging you in');
        let url=base.base_url+'/social-login?email='+user.email+'&name='+user.name;
        console.log(url);
        base.http.post(url,'').subscribe((data:any) => {
          console.log(data)
          if(data.status=='success')
          {
            base.service.LoaderHide();
            this.navCtrl.push('CategoriesPage');
            localStorage.setItem('user_data',JSON.stringify(data.data));
            localStorage.setItem('api_token',data.data.api_token);
            base.api.GET("/myProfile").then(function (success : any) {
               // base.service.LoaderHide();
                console.log(success.data)
                localStorage.setItem('user_data',JSON.stringify(success.data))
    
              }).catch( error => {
                base.service.LoaderHide();
                base.service.Warning(error)
              });
           // base.storage.set('user_data', data.data);
    
    
          }
          else{
            base.service.LoaderHide();
            base.service.Warning(data.data[0])
          }
       })

        // this.nativeStorage.setItem('user',
        // {
        //   name: user.name,
        //   gender: user.gender,
        //   picture: user.picture
        // })
        // .then(() => {
        //   nav.push('CategoriesPage');
        // },(error) => {
        //   console.log(error);
        // })
      })
    }, (error) => {
      console.log(error);
    });
  
  }

  login() {
   // this.navCtrl.push('CategoriesPage')
   let base=this;
   if(base.email=='')
   {
    base.service.Warning('Please Enter Your Registered Email address');
   }
   else if(base.password=='')
   {
    base.service.Warning('Please Enter Your Password');
   }
   else{
    base.service.LoaderShowmsg('Logging you in');
    let url=base.base_url+'/auth?email='+base.email+'&password='+base.password;
    base.http.post(url,'').subscribe((data:any) => {
      console.log(data)
      if(data){
      if(data.status=='success')
      {
        base.service.LoaderHide();
        this.navCtrl.push('CategoriesPage');
        localStorage.setItem('user_data',JSON.stringify(data.data));
        localStorage.setItem('api_token',data.data.api_token);
        base.api.GET("/myProfile").then(function (success : any) {
           base.service.LoaderHide();
           console.log(success);
            console.log(success.data)
            localStorage.setItem('user_data',JSON.stringify(success.data))

          }).catch( error => {
            base.service.LoaderHide();
            base.service.Warning(error)
          });
       // base.storage.set('user_data', data.data);


      }
      else{
        base.service.LoaderHide();
        console.log(data.data[0]);
        base.service.Warning(data.data[0])
      }
    }else{
      base.service.LoaderHide();
      base.service.Warning("Invalid username & password!!");
    }
   })
  }
}

  gotosignup() {
    this.navCtrl.push('SignupPage')
  }

  forgotPass()
  {
    this.navCtrl.push('ForgotPasswordPage')
  }
}
