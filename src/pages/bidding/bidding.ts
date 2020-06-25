import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient } from '@angular/common/http';
import { ServiceProvider } from '../../providers/service/service';

@IonicPage()
@Component({
  selector: 'page-bidding',
  templateUrl: 'bidding.html',
})
export class BiddingPage {
  bid_view: string = "current";
  base_url:any='';
  category_detail: any;
  product_list:any;
  PriceRange:any="";
  orderBy:any='asc';
  MinPrice:any='';
  MaxPrice:any='';
  page=2;

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public http:HttpClient,public service:ServiceProvider) {
    this.base_url=api.Base_Url;
    this.category_detail=this.navParams.get('detail');
    console.log(this.category_detail);
  }

  ionViewWillEnter() {
    let base=this;
    console.log('ionViewDidLoad BiddingPage');
    let url=base.base_url+'/biddingProducts';
    console.log(url);
    base.service.LoaderShowmsg('Loading...')
    base.http.get(url).subscribe((data:any) => {
      console.log(data)
      if(data.status=='success')
      {
         base.service.LoaderHide();
         base.product_list=data.data.records;
        console.log(base.product_list);
        base.PriceRange = "/"+data.data.minprice+","+data.data.maxprice;
            base.MinPrice = data.data.minprice;
            base.MaxPrice = data.data.maxprice;
         //   base.filter_min=base.MinPrice;
         //   base.filter_max=base.MaxPrice;
            console.log(base.MinPrice,base.MaxPrice)
      }
      else{
        base.service.LoaderHide();
      }
    },error=>{
      base.service.LoaderHide();
      base.service.Warning('Something went wrong. Try again later');
    })


  }

  moreProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {
      let url=base.base_url+'/biddingProducts/'+base.page;
      base.http.get(url).subscribe((response:any)=> {
        console.log(response);
        if(response.status=='success')
        {
       // base.service.LoaderHide();
        base.product_list=base.product_list.concat(response.data.records);
        if(response.data.records.length==0)
        {
          infiniteScroll.enable(false);
        }
        console.log(base.product_list);
        }
        })
      base.page = base.page + 1;

    }, 500);
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
  biddingdetails(info) {
     this.navCtrl.push('BiddingdetailsPage',{id:info.id});
  }

  goToMyBidding()
  {
    this.navCtrl.push('MyBiddingHistoryPage');
  }

}
