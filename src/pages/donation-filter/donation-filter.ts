import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DonationFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-donation-filter',
  templateUrl: 'donation-filter.html',
})
export class DonationFilterPage {
  category_list:any=[];
  selected_cat_id:any='';
  prev_id:any='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController,public api:ApiProvider,public service: ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationFilterPage');
    this.service.LoaderShowmsg('Loading all filters...');
    this.api.GET('/allCategories').then((res:any)=>{
      console.log(res);
      this.service.LoaderHide();
      this.category_list=res.data;
      console.log(this.category_list);
      if(localStorage.getItem('donation_cat'))
      {
        this.selected_cat_id=localStorage.getItem('donation_cat');
        // this.prev_id=this.selected_cat_id;
        // console.log(this.prev_id);
        // setTimeout(()=>{
        //   document.getElementById(this.prev_id).style.visibility='visible';
        // },500)
        
      }
    }).catch((error)=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later')
    })
  }

  apply()
  {
    if(this.selected_cat_id=='')
    {
      this.service.Warning('Choose a category');
    }
    else{ 
      localStorage.setItem('donation_cat',this.selected_cat_id);
      this.viewCtrl.dismiss();
    }
    // console.log(this.selected_cat_id);
    // if(this.selected_cat_id!='')
    // {
    //   console.log("insie if")
    //   localStorage.setItem('donation_cat',this.selected_cat_id);
    //   this.viewCtrl.dismiss();
    // }
    // else{
    //   console.log("Inside else");
    //   localStorage.removeItem('donation_cat');
    //   this.viewCtrl.dismiss();
    // }
  }

  remove()
  {
    localStorage.removeItem('donation_cat');
    this.viewCtrl.dismiss();
  }

  close()
  {
    this.viewCtrl.dismiss();
  }

}
