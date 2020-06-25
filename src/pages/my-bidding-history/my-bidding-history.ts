import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the MyBiddingHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-bidding-history',
  templateUrl: 'my-bidding-history.html',
})
export class MyBiddingHistoryPage {
  bidding_history:any=[];
  page:any=2;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceProvider,public api:ApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyBiddingHistoryPage');
    this.service.LoaderShowmsg('Loading my biddings...');
    this.api.GET('/myBidding').then((res:any)=>{
      console.log(res);
      this.service.LoaderHide();
      if(res.status=='success')
      {
           this.bidding_history=res.data;
        // this.donation_list=res.data.records;
        // this.donation_data=res.data.pagination;
        // console.log(this.donation_list);
      }
      else{
        this.service.Warning('res.msg')
      }
    }).catch((error=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later')
    }))
  }

  getName(name)
  {
    if(name.length>28)
    {
      return name.substring(0,28)+'...';
    }
    else{
      return name;
    }
  }

  moreProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {
     
     let url='/myDonations/'+this.page;
        base.api.GET(url).then((res:any)=> {
          console.log(res);
          if(res.status=='success')
          {
            if(res.data.length>0)
            {
              this.bidding_history=res.data;
              console.log(this.bidding_history);
              this.page=this.page++;
            }
            else{
              infiniteScroll.enable(false);
            }
          }
          else{
            infiniteScroll.enable(false);
          }
          })
     
     
     

    }, 500);
  }

}
