import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';

/**
 * Generated class for the ContactUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-us',
  templateUrl: 'contact-us.html',
})
export class ContactUsPage {

  title:any='';
  description:any='';
  base_url:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service:ServiceProvider, public api:ApiProvider, public http:HttpClient,) {
    this.base_url=api.Base_Url;
  }

  ionViewDidLoad() {
  }


  sendQuery(){
    let base=this;
    if(base.title==''){
      base.service.Warning('Please Enter Your Title');
    }else if(base.description==''){
      base.service.Warning('Please Enter Your Description');
    }else{
      base.service.LoaderShowmsg('Crating Your Query');
      this.api.POST('/contactUs',{
        title : base.title,
        message : base.description
      }).then((res:any)=>{
        if(res.status=='success')
        {
          this.service.LoaderHide();
          this.navCtrl.setRoot('CategoriesPage');
          this.service.Success("Your query has been placed");
        }
        else{
          this.service.LoaderHide();
          this.service.Success(res.data);
        }
      });
    }

  }
}
