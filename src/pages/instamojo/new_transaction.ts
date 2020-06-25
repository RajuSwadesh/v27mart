import {Component} from '@angular/core';
import Instamojo from 'instamojo-nodejs';
import {InAppBrowser} from '@ionic-native/in-app-browser';
import {HTTP} from '@ionic-native/http';
import 'rxjs/add/operator/map';
import { ServiceProvider } from '../../providers/service/service';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
declare var browser:any;

@Component({
  selector: 'page-new-transaction',
  templateUrl: 'new_transaction.html'
})
export class NewTransactionPage {
  amount;
  instamojoClient;
  fname:any='';
  lname:any='';
  email:any='';
  phone:any='';
  payment:any='';
  shipping:any='';
  address:any='';
  cart_id:any='';
  item_total:any='';
  shipping_cost:any='';
  user_data:any;

  CartID:any='';
  NegHisID:any='';
  NegID:any='';
  address1:any='';
  u_email:any='';
  firstname:any='';
  lastname:any='';
  mobile:any='';
  orderAmt:any='';
  u_payment:any='';
  shippingAmt:any='';

  page_type:any='';
  constructor(private iab: InAppBrowser, private http: HTTP,public navParam:NavParams,public api:ApiProvider,public navCtrl:NavController,public service:ServiceProvider) {
    this.user_data=localStorage.getItem('user_data');
    this.instamojoClient = new Instamojo(http, iab, 'https://marketplace-instamojo.herokuapp.com/token');
  //   browser.on('exit').subscribe(() => {
  //     console.log("hide")
  //     this.service.LoaderHide();
  // }, err => {
  //     console.error(err);
  // });
 
  }

  ionViewDidLoad()
  {
    this.page_type=this.navParam.get('page');
    if(this.navParam.get('page')=='checkout')
    {
    this.fname=this.navParam.get('fname');
    this.lname=this.navParam.get('lname');
    this.email=this.navParam.get('email');
    this.phone=this.navParam.get('mobile');
    this.payment=this.navParam.get('payment');
    this.amount=Math.round(parseFloat(this.navParam.get('total_amt')));
    this.shipping=this.navParam.get('shipping');
    this.address=this.navParam.get('address1');
    this.cart_id=this.navParam.get('CartID');
    this.item_total=this.navParam.get('item_total');
    this.shipping_cost=this.navParam.get('shipping_cost');
    console.log(this.amount);
    console.log(typeof(this.amount));
    }
    else{
      this.CartID=this.navParam.get('CartID');
      this.NegHisID=this.navParam.get('NegHisID');
      this.NegID=this.navParam.get('NegID');
      this.address1=this.navParam.get('address1');
    //  this.address2=this.navParam.get('CartID');
      this.u_email=this.navParam.get('email');
      this.firstname=this.navParam.get('firstname');
      this.lastname=this.navParam.get('lastname');
      this.mobile=this.navParam.get('mobile');
      this.orderAmt=Math.round(parseFloat(this.navParam.get('orderAmt')));
      this.u_payment=this.navParam.get('payment');
      this.shippingAmt=this.navParam.get('shippingAmt');
      console.log(this.address1,this.mobile)
    }
  }

  payNow() {
    this.service.LoaderShowmsg('Please wait..')
    var data = this.instamojoClient.getPaymentFields();
    console.log(data)
    data.purpose = "Order Place";            // REQUIRED
    data.amount =  this.amount;    
    console.log(this.instamojoClient)              // REQUIRED
    
    // do not change this
    data.redirect_url = "http://localhost";
    var called=this.instamojoClient.payNow(data).then(response => {
      this.service.LoaderHide();
      console.log(JSON.stringify(response))
      alert("Payment complete: " + JSON.stringify(response));
      this.service.LoaderShowmsg('Placing order..');
      this.api.POST('/AddOrder',{
        shipping : this.shipping,
          firstname : this.fname,
          lastname : this.lname,
          email : this.email,
          mobile : this.phone,
          address1 : this.address,
          address2 : "",
          payment : this.payment,
          CartID : this.cart_id,
          payment_detail:response.id,
          payment_id:response.id
      }).then((res:any)=>{
        if(res.status=='success')
        {
            this.service.LoaderHide();
            this.navCtrl.setRoot('OrderPage');
            this.service.Success("Order placed successfully");  
        }
        else{
          this.service.LoaderHide();
          this.service.Success(res.data);  
        }
      })
    }).catch(err => {
      console.log(err)
      this.service.LoaderHide();
      alert("Payment failed: " + JSON.stringify(err));
     throw err;
    });
    
    //call the Safari View Controller
  }

  payNowOffer() {
    this.service.LoaderShowmsg('Please wait..')
    var data = this.instamojoClient.getPaymentFields();
    data.purpose = "Order Place";            // REQUIRED
    data.amount =  this.orderAmt;             // REQUIRED
   // data.buyer_name = 
   // this.service.LoaderHide();

    // do not change this
    data.redirect_url = "http://localhost";
   
    this.instamojoClient.payNow(data).then(response => {
      this.service.LoaderHide();
      console.log(JSON.stringify(response))
      alert("Payment complete: " + JSON.stringify(response));
      this.service.LoaderShowmsg('Placing order..')
      this.api.POST('/PlaceOfferOrder',{
          CartID: this.CartID,
          NegHisID:this.NegHisID,
          NegID: this.NegID,
          address1:this.address1,
          address2: '',
          email: this.u_email,
          firstname: this.firstname,
          lastname:this.lastname,
          mobile: this.mobile,
          orderAmt:this.orderAmt,
          payment: this.u_payment,
          shippingAmt: this.shippingAmt,
          payment_detail :response.id
      }).then((res:any)=>{
        if(res.status=='success')
        {
            this.service.LoaderHide();
            this.navCtrl.setRoot('OrderPage');
            this.service.Success("Order placed successfully");  
        }
        else{
          this.service.LoaderHide();
          this.service.Success(res.data);  
        }
      })
    }).catch(err => {
       console.log(err)
       this.service.LoaderHide();
       alert("Payment failed: " + JSON.stringify(err));
      throw err;
    });
    //call the Safari View Controller

    // end of safari view controller


  }

}
