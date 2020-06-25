import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import * as _ from 'underscore';

/**
 * Generated class for the NegotiatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-negotiate',
  templateUrl: 'negotiate.html',
})
export class NegotiatePage {
  id:any;
  records:any=[];
  uid:any;
  product_detail:any=[];
  price:number;
  message:any='';
  seller_offer:any='';
  my_offer:any='';
  pay=false;
  order_accepted=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public service:ServiceProvider,public zone:NgZone) {
    this.id=this.navParams.get('id')
    var user_data=JSON.parse(localStorage.getItem('user_data'));
    this.uid=user_data.user_id;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NegotiatePage');
    let base=this;
    base.fetchHistory();
    base.fetchNegotiateCount();
    
  }

  fetchHistory()
  {
    let base=this;
    base.api.GET('/PriceNegotiationHistory/'+base.id).then((res:any)=>{
      console.log(res);
      base.service.LoaderHide();
      base.zone.run(()=>{
        base.product_detail=res.data.ProductDetails;
        base.records=res.data.records;
        var checkAccept= _.filter(base.records,(elem)=>{
          if(elem.status=='Accept')
          {
            base.pay=true;
          }
          if(elem.status=='Order Placed')
          {
            base.order_accepted=true;
          }
        })
        console.log(base.records);
        console.log(base.product_detail);
      })
      
    })
  }

  fetchNegotiateCount()
  {
    let base=this;
    base.api.GET('/CountPriceNegotiationHistory/'+this.id).then((res:any)=>{
      console.log(res);
     if(res.status=='success')
     {
       base.seller_offer=res.data.SellerOfferPlace;
       base.my_offer=res.data.myOfferPlace;
     }
      
    })
  }

  send()
  {
    if(this.message=='')
    {
      this.service.Warning("Write your message")
    }
    else if(!this.price)
    {
      this.service.Warning("Write your price")
    }
    else{
      this.service.LoaderShowmsg('Submitting...')
      this.api.POST('/ReplyPriceNegotiation',{
        comments:this.message,
        negotiation_id:this.id,
        offer_price:this.price
      }).then((res:any)=>{
        console.log(res);
        this.service.LoaderHide();
        if(res.status=='success')
        {
          this.service.Success(res.data);
          this.message='';
          this.price=null;
          this.fetchHistory();
        }
      }).catch((error)=>{
        this.service.Warning("Something went wrong. Try again later")
      })
    }
  }

  payOffer()
  {
    this.navCtrl.push('OfferCheckoutPage',{offer_id:this.id,accepted_id:this.product_detail.accepted_id})
  }

}
