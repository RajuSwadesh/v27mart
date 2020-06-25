import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';
import { NewTransactionPage } from '../instamojo/new_transaction'
import { HttpClient } from '@angular/common/http';
 declare var Instamojo:any;
/**
 * Generated class for the CheckoutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient,public api:ApiProvider,public service:ServiceProvider,public auth:AuthProvider) {
    let base=this;
    base.api.GET("/GetCart?CartID="+base.api.getCartID()).then(function (Cart : any) {
      console.log(Cart)
      base.ReportDetails = Cart.data;
      base.ShippingCost = Cart.data.ReportDetails.totalShipping;
      base.ItemCost = (Cart.data.ReportDetails.totalAmount)-(Cart.data.ReportDetails.totalShipping);
      base.TotalAmount = Cart.data.ReportDetails.totalAmount;
  }).catch( error => {

  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
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

  shippingChange()
  {
    const base = this;
    if(base.shipping == "inside_katmandu_ringroad"){
        base.ShippingCost = base.ShippingInfo.inside_katmandu_ringroad;
        base.TotalAmount = +base.ItemCost + (+base.ShippingInfo.inside_katmandu_ringroad);
    } else if (base.shipping == "inside_katmandu_valley"){
        base.ShippingCost = base.ShippingInfo.inside_katmandu_valley;
        base.TotalAmount = +base.ItemCost +(+base.ShippingInfo.inside_katmandu_valley);
    } else {
        base.ShippingCost = base.ShippingInfo.outside_katmandu_valley
        base.TotalAmount = +base.ItemCost +(+base.ShippingInfo.outside_katmandu_valley);
    }
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
    }else{
      let base=this;
      if(base.payment == "Cash On Delivery")
      {
        base.service.LoaderShowmsg("Placing your order");
        base.api.POST("/AddOrder", {
        shipping : base.address,
        firstname : base.fname,
        lastname : base.lname,
        email : base.email,
        mobile : base.mobile,
        address1 : base.address,
        address2 : "",
        pin :base.pin,
        city : base.city,
        payment : base.payment,
        CartID : base.api.getCartID(),
        payment_id:'',
        payment_detail:''
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
        base.navCtrl.push(NewTransactionPage,{page:'checkout',fname:base.fname,lname:base.lname,email:base.email,mobile:base.mobile,payment:base.payment,total_amt:base.TotalAmount,shipping:base.address,address1:base.address,CartID:base.api.getCartID(),item_total:base.ItemCost,shipping_cost:base.ShippingCost})
      }


    }
  }

}
