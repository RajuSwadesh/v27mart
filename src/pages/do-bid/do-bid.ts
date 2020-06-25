import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the DoBidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-do-bid',
  templateUrl: 'do-bid.html',
})
export class DoBidPage {
  amt:any;
  product_detail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceProvider,public api:ApiProvider,public viewCtrl:ViewController) {
    this.product_detail=this.navParams.get('detail');
    console.log(this.product_detail);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoBidPage');
  }

  Submit()
  {
    if(this.amt=='')
    {
      this.service.Warning('Enter your bidding amount')
    }
    else{
      if(this.product_detail.current_bid_price==null)
      {
        var min_bid_price=(this.product_detail.bid_start_price*this.product_detail.bid_increment_percent)/100;
        var min_bid_actual_price=+this.product_detail.bid_start_price+(+min_bid_price);
        console.log(min_bid_actual_price)
        if(this.amt>=min_bid_actual_price)
        {
          this.submitBid();
        }
        else{
          this.service.Warning('Minimum bidding amount should be '+min_bid_actual_price);
        }
      }
      else{
        var min_bid_price=(this.product_detail.current_bid_price*this.product_detail.bid_increment_percent)/100;
        var min_bid_actual_price=+this.product_detail.current_bid_price+(+min_bid_price);
        if(this.amt>=min_bid_actual_price)
        {
          this.submitBid();
        }
        else{
          this.service.Warning('Minimum bidding amount should be '+min_bid_actual_price);
        }
      }
    }
  }

  submitBid()
  {
    this.api.POST('/bidNow/'+this.product_detail.id,{
      bid_amount:this.amt
    }).then((res:any)=>{
      console.log(res);
      if(res.status=='success')
      {
        this.service.Success(res.data);
        this.viewCtrl.dismiss();
      }
      else
      {
        this.service.Warning(res.data);
      }
    })
  }

}
