import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, PopoverController} from 'ionic-angular';
import {PaytypePage} from "../paytype/paytype";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { AuthProvider } from '../../providers/auth/auth';
/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  base_url:any;
  cartData:any=[];
  cartDataLength:any;
  totalPrice:any=0;
  product:any = {
    quantity:0
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,public popoverCtrl: PopoverController,public http:HttpClient,public api:ApiProvider,public service:ServiceProvider,public auth:AuthProvider) {
    this.base_url=api.Base_Url;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
    this.fetchCart();
  }
  increment() {
    if(this.product.quantity < 10) {
      this.product.quantity++;
    }
  }

  decrement() {
    if(this.product.quantity > 0) {
      this.product.quantity--;
    }
  }

  paytype(){
    const popover = this.popoverCtrl.create('PaytypePage');
    popover.present();
  }

  fetchCart()
  {
    let base=this;
    base.service.LoaderShowmsg("Loading your cart items..")
    var url=base.base_url+'/GetCart?CartID='+base.api.getCartID();
    console.log(url);
    let httpHeaders = new HttpHeaders({
      'Accept' : 'application/json',
      'authorization' : "Bearer "+base.auth.getToken()
    });

    let options = {
      headers: httpHeaders
    };
    base.http.get(url,options).subscribe((response:any)=>{
      base.service.LoaderHide();
      console.log(response);
      base.cartData=response.data.CartDetails;
      base.cartDataLength=base.cartData.length;
      base.totalPrice=response.data.ReportDetails.totalAmount;
      //base.total_cart_item=response.data.CartDetails.length;
    })
  }

  UpdateCart(id, action)
  {
    const base = this;
   
    const QTY = (<HTMLInputElement>document.getElementById('QTY'+id)).value;
    console.log(QTY);
    let CurrentQTY = 0;
    if(action == 1){
      CurrentQTY = parseInt(QTY) + 1;
      console.log(CurrentQTY)
    } else {
      CurrentQTY = parseInt(QTY) - 1;
      console.log(CurrentQTY)
    }
    if(CurrentQTY>0)
    {
      base.service.LoaderShow();
      (<HTMLInputElement>document.getElementById('QTY'+id)).value=CurrentQTY.toString();
      var cart_update_url=base.base_url+'/updateCart/'+id;
      console.log(cart_update_url);
      let httpHeaders = new HttpHeaders({
        'Accept' : 'application/json',
        'authorization' : "Bearer "+base.auth.getToken()
      });
      let options = {
        headers: httpHeaders
      };
      base.http.post(cart_update_url,{
        CartID:base.api.getCartID(),
        qty:CurrentQTY
      },options).subscribe((response:any)=>{
        console.log(response);
        base.service.LoaderHide();
        base.fetchCart();
      })
    }
  }

  checkout()
  {
    this.navCtrl.push("CheckoutPage");
  }

  remove(product_id)
  {
    console.log("remove called");
  
    let base=this;
    base.service.LoaderShowmsg("Removing product from cart");
    console.log(base.api.getCartID())
    var url=base.base_url+"/removeCart/"+product_id+"?CartID="+base.api.getCartID();
    let httpHeaders = new HttpHeaders({
      'Accept' : 'application/json',
      'authorization' : "Bearer "+base.auth.getToken()
    });

    let options = {
      headers: httpHeaders
    };
    console.log(url)
    base.http.get(url,options).subscribe((response:any)=>{
      console.log(response);
      if(response.status=='success')
      {
        base.service.LoaderHide();
        base.fetchCart();
      }
      else{
        base.service.LoaderHide();
      }
    },err=>{
      base.service.LoaderHide();
      base.service.Warning("Something went wrong. Try again later");
    })
  }

  shop()
  {
    this.navCtrl.setRoot('CategoriesPage');
  }
}
