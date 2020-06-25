import {Component, ViewChild} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, Slides, ToastController} from 'ionic-angular';
import {ColorPage} from "../color/color";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { AuthProvider } from '../../providers/auth/auth';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ImageViewerController } from 'ionic-img-viewer';

@IonicPage()
@Component({
  selector: 'page-productdetails',
  templateUrl: 'productdetails.html',
  providers:[SocialSharing]
})
export class ProductdetailsPage {
  @ViewChild(Slides) slides: Slides;
  appTitle = '';
  msgtoast: any;
  visible = false;
  base_url:any;
  product_url:any;
  product_detail:any;
  img_length:any;
  images:any=[];
  variations:any='';
  SelectedVariations = [];
  relatedProducts:any=[];
  total_cart_item=0;

  size: string;
  public slidenumber: number = 1;
  public totalslidernumber: number;
  _imageViewerCtrl: ImageViewerController;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController,public modalCtrl: ModalController,public http:HttpClient,public api:ApiProvider,public service:ServiceProvider,public auth:AuthProvider,private socialSharing: SocialSharing,imageViewerCtrl: ImageViewerController) {
    this.base_url=api.Base_Url;
    console.log(this.base_url);
    this.product_url=this.navParams.get('url');
    console.log(this.product_url);
    this._imageViewerCtrl = imageViewerCtrl;
  }

  ionViewWillEnter()
  {
    this.fetchCart();
  }

  ionViewDidLoad() {
    let base=this;
    base.service.LoaderShowmsg("Loading products...");
    let url=base.base_url+'/getproductbyurl/'+base.product_url;
    console.log(url);
    base.http.get(url).subscribe((data:any) => {
      if(data.status=='success')
      {
        base.service.LoaderHide();
        base.product_detail=data.data;
        base.appTitle = data.data.product_title;
        base.images.push(base.product_detail.product_image.original);
       if(base.product_detail.images.length>0)
       {
         for(var i=0;i<base.product_detail.images.length;i++)
         {
           base.images.push(base.product_detail.images[i].imageurl.original)
         }
       }
       base.variations = Object.keys(base.product_detail.variations);
      }
      else{
        base.service.LoaderHide();
      }
    },error=>{
      base.service.LoaderHide();
      base.service.Warning('Something went wrong. Try again later');
    });
    base.fetchSimilarProducts();
  }

  ionViewDidEnter(){

  }

  bookmark() {
    this.visible = !this.visible;
    if (this.visible) {
      this.msgtoast = "This item is saved in your wishlist";
    }
    else {
      this.msgtoast = "This item is remove from your wishlist";
    }
    this.toast();
  }


  toast() {
    let toast = this.toastCtrl.create({
      message: this.msgtoast,
      duration: 2000,
    });
    toast.present();
  }

  imgchange(id) {
   // console.log(this.productsArray[id]);
    this.slides.slideTo(id)
  }

  cart(){
    this.navCtrl.push('CartPage')
  }

  becameSeller(){
    this.navCtrl.push('SellerRegistrationPage')
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log(currentIndex)
    if (currentIndex == this.images.length){
      console.log('that is the last')
    }
    else{
      console.log("inside else")
      this.slidenumber = currentIndex+1;
    }
  }


  sellerprofile() {
    this.navCtrl.push('SellerpagePage')
  }

  deatils(url : any) {
    this.navCtrl.push('ProductdetailsPage', {url : url})
  }

  fetchSimilarProducts()
  {
    let base=this;
    let url=base.base_url+'/getRelatedProductbyURL/'+base.product_url;
    console.log(url);
    base.http.get(url).subscribe((data:any) => {
      if(data.status=='success')
      {
        base.relatedProducts=data.data;
        console.log(base.relatedProducts);
      }
    })
  }

  addToWishlist()
  {
    let base=this;
    base.service.LoaderShow();
    let url=base.base_url+'/AddToWishlist';
    console.log(url);
    let httpHeaders = new HttpHeaders({
      'Accept' : 'application/json',
      'authorization' : "Bearer "+base.auth.getToken()
    });
    let options = {
      headers: httpHeaders
    };
    base.http.post(url,{
      product_id:base.product_detail.id
    },options).subscribe((response:any)=>{
      base.service.LoaderHide();
      if(response.status=='success')
      {
        base.service.Success(response.data)
      }
      else{
        base.service.Warning(response.data);
      }
    },err=>{
      base.service.LoaderHide();
      base.service.Warning('Something went wrong. Try again later;')
    })
  }

  addToCart()
  {
    const base = this;
    let variation_id = "";
    let variation_value = "";
    base.SelectedVariations.forEach(function (value, index, array) {
      const data = value.split('|');
      if(index == 0){
        variation_id = data[1];
        variation_value = data[0];
        console.log(variation_id,variation_value);
      } else {
        variation_id = variation_id+","+data[1];
        variation_value = variation_value+","+data[0];
        console.log(variation_id,variation_value);
      }
    });
    console.log(base.product_detail.id,base.api.getCartID(),variation_id)
    console.log('Variations Length:'+base.product_detail.variations);

    if(base.product_detail.variations==''){

      base.api.POST('/AddToCart', {
        product_id : base.product_detail.id,
        CartID : base.api.getCartID(),
        qty : 1,
        variation_id : '',
        variation_value : ''
      }).then((response:any)=>{
        if(response.status=='success')
        {
          base.service.Success(response.data);
          base.fetchCart();
        }
        else{
          base.service.Warning(response.data)
        }
      },error=>{
        base.service.Warning(error)
      })

    }else{
      if(base.variations.length>0)
      {
        if(base.SelectedVariations.length==0)
        {
          base.service.Warning("Please choose a variation")
        }
        else{
          base.api.POST('/AddToCart', {
            product_id : base.product_detail.id,
            CartID : base.api.getCartID(),
            qty : 1,
            variation_id : variation_id,
            variation_value : variation_value}).then((response:any)=>{
            console.log(response)
            if(response.status=='success')
            {
              base.service.Success(response.data);
              base.fetchCart();
            }
            else{
              base.service.Warning(response.data)
            }
          },error=>{
            base.service.Warning(error)
          })
        }
      }
    }
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


  share()
  {
    console.log(this.product_detail);
    this.service.LoaderShowmsg("Please wait....");
    // this.socialSharing.share(this.product_detail.product_title,'',this.product_detail.product_image.original, 'https://v27market.com/productdetails/'+this.product_detail.url).then(()=>{
    this.socialSharing.share('https://play.google.com/store/apps/details?id=com.gowebbi.v27market&hl=en','If app is installed',this.product_detail.product_image.original, 'https://v27market.com/productdetails/'+this.product_detail.url).then(()=>{
      this.service.LoaderHide();
    }).catch((error=>{
      this.service.Warning("Something went to wrong!!");
      this.service.LoaderHide();
    }))
    // this.socialSharing.share(this.product_detail.product_title+'...' + ' For more detail go to-',this.product_detail.sale_price, 'v27mart - '+this.product_detail.product_image.original,'https://v27market.com/donationdetails/'+this.product_detail.url);
  }

  getDiscount(item)
  {
    var discount=100-(item.sale_price/item.regular_price*100);
    return discount.toFixed(2);
  }

  exchange()
  {
    let base=this;
    let variation_id = "";
    let variation_value = "";
    base.SelectedVariations.forEach(function (value, index, array) {
      const data = value.split('|');
      if(index == 0){
        variation_id = data[1];
        variation_value = data[0];
        console.log(variation_id,variation_value);
      } else {
        variation_id = variation_id+","+data[1];
        variation_value = variation_value+","+data[0];
        console.log(variation_id,variation_value);
      }
    });

    if(base.variations.length>0)
    {
      if(base.SelectedVariations.length==0)
      {
        base.service.Warning("Please choose a variation")
      }
      else{
        let exchangeModal=base.modalCtrl.create('ExchangeRequestPage',{product_id:base.product_detail.id,name:base.product_detail.product_title,qty:1,price:this.product_detail.sale_price,variation_id:variation_id,variation_value:variation_value,img:base.product_detail.product_image.small});
        exchangeModal.present();
      }
    }
  }


  viewImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
  }
}
