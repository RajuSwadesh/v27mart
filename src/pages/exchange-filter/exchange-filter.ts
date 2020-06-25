import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ExchangeFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-filter',
  templateUrl: 'exchange-filter.html',
})
export class ExchangeFilterPage {
  category_list:any=[];
  cat_id:any='';
  price: any = { lower: 0, upper: 0 };
  min: any = 0;
  max: any = 0;
  filtermodel='price';
  prev_id:any='';
  selected_cat_id:any='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public service: ServiceProvider, public viewCtrl: ViewController) {
    if (localStorage.getItem('Price')) {
      var data = JSON.parse(localStorage.getItem('Price'));
      this.price.lower = data.lower;
      this.price.upper = data.upper;
      this.min = this.navParams.get('min');
      this.max = this.navParams.get('max');
    }
    else {
      this.min = this.navParams.get('min');
      this.max = this.navParams.get('max');
      this.price.lower = this.min;
      this.price.upper = this.max;
    }

   

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangeFilterPage');
  }

  apply()
  {
    // if(this.cat_id=='')
    // {
    //   this.service.Warning('Choose a category');
    // }
    // else{ 
    //   localStorage.setItem('cat',JSON.stringify(this.cat_id));
    //   this.viewCtrl.dismiss();
    // }
    console.log(this.selected_cat_id);
    if(this.selected_cat_id!='')
    {
      console.log("insie if")
      localStorage.setItem('cat',this.selected_cat_id);
      localStorage.setItem('Price',JSON.stringify(this.price));
      this.viewCtrl.dismiss();
    }
    else{
      console.log("Inside else");
      localStorage.removeItem('cat');
      localStorage.setItem('Price',JSON.stringify(this.price));
      this.viewCtrl.dismiss();
    }
  }

  close()
  {
    this.viewCtrl.dismiss();
  }

  onSegmentChange()
  {
    console.log(this.filtermodel);
    if(this.filtermodel=='category')
    {
      this.api.GET('/allCategories').then((res:any)=>{
        console.log(res);
        this.category_list=res.data;
        console.log(this.category_list);
        if(localStorage.getItem('cat'))
        {
          this.selected_cat_id=localStorage.getItem('cat');
          this.prev_id=this.selected_cat_id;
          console.log(this.prev_id);
          setTimeout(()=>{
            document.getElementById(this.prev_id).style.visibility='visible';
          },500)
          
        }
      })
    }
  }

  selectedVal(id)
  {
    console.log(id);
   
    if(this.prev_id=='')
    {
      document.getElementById(id).style.visibility='visible';
      this.prev_id=id;
      this.selected_cat_id=id;
    }
    else{
      document.getElementById(id).style.visibility='visible';
      document.getElementById(this.prev_id).style.visibility='hidden';
      if(this.prev_id!=id)
      {
        this.prev_id=id;
        this.selected_cat_id=id;
      }
      else{
        this.prev_id=id;
        this.selected_cat_id='';
      }
    
    }
   
  }

}
