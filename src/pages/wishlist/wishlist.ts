import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the WishlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wishlist',
  templateUrl: 'wishlist.html',
})
export class WishlistPage {
  product:any = {
    quantity:0
  }
  wishList:any=[];
  wishlist_length:any;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public api : ApiProvider,
    public service:ServiceProvider
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishlistPage');
    this.getWishlist();
  }

  getWishlist()
  {
    let base=this;
    base.service.LoaderShowmsg("Loading your wishlist...")
    base.api.GET('/GetWishlist').then((response:any)=>{
      base.service.LoaderHide();
      base.wishList=response.data;
      base.wishlist_length=base.wishList.length;
      console.log(base.wishList);
    }).catch(error=>{
      base.service.LoaderHide();
    })
    
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

  remove(id)
  {
    let base=this;
    base.api.POST('/RemoveWishlist',{
      id:id
    }).then((response:any)=>{
      if(response.status == "error"){
        base.service.Warning(response.data)
      } else {
        base.getWishlist();
        base.service.Success(response.data)
      }
    }).catch((error)=>{
      base.service.Warning(error)
    })
  }

  viewDetail(url)
  {
    this.navCtrl.push('ProductdetailsPage',{url:url});
  }

  shop()
  {
    this.navCtrl.setRoot('CategoriesPage');
  }
}
