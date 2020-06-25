import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';
import { NewTransactionPage } from '../instamojo/new_transaction'
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the OfferCheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer-checkout',
  templateUrl: 'offer-checkout.html',
})
export class OfferCheckoutPage {
  offer_id:any='';
  accepted_id:any='';
  AllAddress:any=[];
  fname:any='';
  lname:any='';
  email:any='';
  mobile:any='';
  address:any='';
  city:any='';
  pin:any='';
  ShippingInfo:any;
  ReportDetails:any;
  ItemCost:any=0;
  TotalAmount:any=0;
  ShippingCost = 0;
  location:any='';
  payment:any='';
  shipping: string;
  cart_detail:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public api:ApiProvider,public service:ServiceProvider,public auth:AuthProvider) {

    this.offer_id=this.navParams.get('offer_id');
    this.accepted_id=this.navParams.get('accepted_id');
    console.log(this.offer_id,this.accepted_id);

    let base=this;
    base.api.GET("/GetOfferPayment/"+base.offer_id+'/'+base.accepted_id).then((res:any)=> {
      console.log(res)
      // base.ReportDetails = Cart.data;
      base.cart_detail= res.data.CartDetails;
      base.ShippingCost = res.data.ShippingCost;
      base.ItemCost = (res.data.ReportDetails.totalAmount)-(res.data.ReportDetails.totalShipping);
      base.TotalAmount = res.data.ReportDetails.totalAmount+(+ base.ShippingCost);
  }).catch( error => {

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferCheckoutPage');
    this.getAllAddress();
  }

  getAllAddress(){
    const base = this;
    base.service.LoaderShow();
    base.api.GET("/myAddresses").then(function (address : any) {
      base.service.LoaderHide();
      if(address.status=='success')
      {
        base.AllAddress=address.data;
        console.log(base.AllAddress);
      }

    }).catch( error => {
      base.service.LoaderHide();
      base.service.Warning('error');
    });
  }

  selectAddress(info)
  {
    this.fname=info.firstname;
    this.lname=info.lastname;
    this.email=info.email;
    this.address=info.address1;
    this.city=info.city;
    this.pin=info.pin;
    this.mobile=info.mobile;
  }

  Checkout()
  {
    if(this.shipping=='')
    {
      this.service.Warning("Choose your shipping location")
    }

    if(this.fname=='')
    {
      this.service.Warning("Enter your first name")
    }
    else if(this.lname=='')
    {
      this.service.Warning("Enter your last name")
    }
    else if(this.email=='')
    {
      this.service.Warning("Enter your email")
    }
    else if(this.mobile=='')
    {
      this.service.Warning("Enter your mobile")
    }
    else if(this.address=='')
    {
      this.service.Warning("Enter your address")
    }
    else if(this.city=='')
    {
      this.service.Warning("Enter your city")
    }
    else if(this.pin=='')
    {
      this.service.Warning("Enter your postal pin")
    }
    else{
      let base=this;
      if(base.payment == "Cash On Delivery")
      {
        base.service.LoaderShowmsg("Placing your order");
        base.api.POST("/PlaceOfferOrder", {
          CartID: base.cart_detail[0].cart_id,
          NegHisID:base.accepted_id,
          NegID: base.offer_id,
          address1:base.address,
          address2: '',
          pin :base.pin,
          city : base.city,
          email: base.email,
          firstname: base.fname,
          lastname:base.lname,
          mobile: base.mobile,
          orderAmt:base.TotalAmount,
          payment: "Cash On Delivery",
          shippingAmt: base.ShippingCost,
          payment_detail :''
        }).then(function (success : any) {
          base.service.LoaderHide();
          if(success.status=='success')
          {
              base.navCtrl.setRoot('OrderPage');
              base.service.Success("Order placed successfully");
          }
          else{
            base.service.Warning(success.data)
          }


        }).catch( error => {
          base.service.LoaderHide();
          base.service.Warning("Something went wrong. Try again later")
        });
      }
      else{
          base.navCtrl.push(NewTransactionPage,{
          page:'offer-checkout',
          CartID: base.cart_detail[0].cart_id,
          NegHisID:base.accepted_id,
          NegID: base.offer_id,
          address1:base.address,
          address2: '',
          email: base.email,
          firstname: base.fname,
          lastname:base.lname,
          mobile: base.mobile,
          orderAmt:base.TotalAmount,
          payment: "instamojo",
          shippingAmt: base.ShippingCost})
      }
    }
  }

}
