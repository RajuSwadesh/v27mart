import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { AuthProvider } from '../../providers/auth/auth';


/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  base_url:any;
  sliderList:any=[];
  categoryList:any=[];
  fetchData=false;
  total_cart_item=0;
  new_arrival_products:any=[];
  featured_products:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:HttpClient, public api:ApiProvider,public service:ServiceProvider,public events: Events,public auth:AuthProvider) {
    this.base_url=api.Base_Url;
    console.log(this.base_url);
  
  }

  ionViewWillEnter()
  {
    this.fetchCart();
  }

  ionViewDidLoad() {
    let base=this;
    let url=base.base_url+'/getSlider';
      base.http.get(url).subscribe((data:any) => {
        console.log(data);
        if(data.status=='success')
        {
          base.sliderList=data.data;
          console.log(base.sliderList);
        }
        else{
  
        }
      },error=>{
        base.service.Warning('Something went wrong. Try again later');
      })
      
      let url1=base.base_url+'/headerCategory';
      base.http.get(url1).subscribe((data:any) => {
        console.log(data);
        if(data.status=='success')
        {
          base.categoryList=data.data;
          console.log(base.categoryList)
        }
        else{

        }
      },error=>{
        base.service.Warning('Something went wrong. Try again later');
      })

      base.api.GET("/featuredProduct/10").then(function (success : any) {
        console.log(success)
        if(success.status=='success')
        {
          base.featured_products=success.data;
        }
        // if(success.data.length > 0 ){
        //   for (let i = 0; i < success.data.length; i++) {
        //     base.Products.push(success.data[i]);
        //   }
       // }
      }).catch( error => {
        console.log(error)
      });

      base.api.GET("/newArrivalProduct/10").then(function (success : any) {
        console.log(success)
        if(success.status=='success')
        { 
          base.new_arrival_products=success.data;
        }
      }).catch( error => {
        console.log(error)
      });
  }

  search(){
    this.navCtrl.push('SearchPage')
  }

  productdetails(){
    this.navCtrl.push('ProductsPage');

  }
  bidding() {
    this.navCtrl.push('BiddingPage')
  }

  donateinfo() {
    this.navCtrl.push('DonateinfoPage');
  }
  exchange() {
    this.navCtrl.push('ExchangePage');
  }
  wishlist(){
    this.navCtrl.push('WishlistPage')
  }

  visible = false;
  categoryshowhide() {
    this.visible = !this.visible;
    let row = document.getElementById('row');
    let gradient = document.getElementById('gradient');
    if (!this.visible){
      row.style.height = "300px";
    }else {
      row.style.height = "420px";
    }
  }

  gotoDetail(info)
  {
    console.log(info)
    // if(info.id==4 || info.id==5 || info.id==6 || info.id==9 || info.id==10 || info.id==12 || info.id==13 || info.id==14 || info.id==15 || info.id==16 || info.id==17)
    // {
    //  this.navCtrl.push('ProductsPage',{detail:info})
    // }
    if(info.id==3)
    {
      this.navCtrl.push('DonateinfoPage');
    }
    else if(info.id==4)
    {
      this.navCtrl.push('BiddingPage',{detail:info});
    }
    else if(info.id==5)
    {
      this.navCtrl.push('ExchangePage',{detail:info});
    }
    // else if(info.id==7)
    // {
    //   this.navCtrl.push('NearbyAdsPage');
    // }
    else if(info.id==12)
    {
      this.navCtrl.push('JobsPage');
    }
    else if(info.id==9)
    {
      this.navCtrl.push('PropertyPage');
    }
    else{
      console.log("inside else")
      this.navCtrl.push('ProductsPage',{detail:info})
    }

  }

  gotoDonation()
  {
    this.navCtrl.push('DonateinfoPage');
  }

  gotobidding()
  {
    this.navCtrl.push('BiddingPage');
  }

  gotoexchange()
  {
    this.navCtrl.push('ExchangePage');
  }

  gotoClassified()
  {
    this.navCtrl.push('ClassifiedAdsPage');
  }

  fetchCart()
  {
    let base=this;
    var url=base.base_url+'/GetCart?CartID='+base.api.getCartID();
    let httpHeaders = new HttpHeaders({
      'Accept' : 'application/json',
      'authorization' : "Bearer "+base.auth.getToken()
    });

    let options = {
      headers: httpHeaders
    };
    base.http.get(url,options).subscribe((response:any)=>{
      console.log(response);
      base.total_cart_item=response.data.CartDetails.length;
    })
  }

  cart()
  {
    this.navCtrl.push('CartPage');
  }

  calculateDiscount(item)
  {
    var discount=(item.sale_price/item.regular_price)*100;
    return discount;
  }

  viewAll(type)
  {
    this.navCtrl.push('ProductsPage',{type:type})
  }


  deatils(url) {
    this.navCtrl.push('ProductdetailsPage',{url:url})
  }

}
