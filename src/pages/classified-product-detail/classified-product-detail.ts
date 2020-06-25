import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ServiceProvider } from '../../providers/service/service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';
import * as firebase from 'firebase';
/**
 * Generated class for the ClassifiedProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classified-product-detail',
  templateUrl: 'classified-product-detail.html',
  providers:[SocialSharing]
})
export class ClassifiedProductDetailPage {
  @ViewChild(Slides) slides: Slides;
  proid:any;
  product_detail:any;
  public slidenumber: number = 1;
  public totalslidernumber: number;
  images:any=[];
  base_url: string;

  productDetail : any = [];
  infos : any = [];
  
  apiToken : any = '';
  user_api_token : any = '';
  fieldName : any = [];
  field_data : any = [];
  userId : any;
  infos2 : any = [];
 chatList : any;
  mobileNo : any = '';
  name : any;
  fieldVal : any = [];
  fieldVal2 : any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,private socialSharing: SocialSharing,public service:ServiceProvider,public auth:AuthProvider,public http:HttpClient) {
    this.base_url=api.Base_Url;
    // this.proid=this.navParams.get('id');
    this.proid=this.navParams.get('id');
    console.log(this.proid);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifiedProductDetailPage');
    this.user_api_token = localStorage.getItem('api_token');
    console.log(this.user_api_token);
    this.api.GET('/classifiedProductsDetails/'+this.proid).then((res:any)=>{
      console.log(res);
      if(res.status=='success')
      {
        this.apiToken = res.data[0].seller_api_token;
        console.log(this.apiToken);
        this.product_detail=res.data;
        console.log(this.product_detail);
        // console.log(this.product_detail);
        firebase.database().ref('users').orderByChild('api_token').equalTo(this.apiToken).on("value",getDets=>{
          console.log(getDets.val());
          this.infos2=this.retriveDets(getDets);
          console.log(this.infos2);
          for(let j=0;j<this.infos2.length;j++){
            console.log(this.infos2[j]);
            this.userId = this.infos2[j].id;
            console.log(this.userId);
            this.mobileNo = this.infos2[j].mobile;
            this.name = this.infos2[j].name;
          }
          console.log(this.userId);
          console.log(this.mobileNo);
        
        })
        for(let i=0;i<this.product_detail.length;i++){
          console.log(this.product_detail[i]);
          console.log(this.product_detail[i].fields.length);
           this.productDetail = this.product_detail[i].fields;
          //  this.productDetail.prod_id = this.product_detail[i].id;
           for(let k=0;k<this.productDetail.length;k++){
              this.infos.push(this.productDetail[k]);
              console.log(this.infos);
           }
           console.log(this.infos);
        }
        // this.images.push(this.product_detail.product_image.original)
        // console.log(this.product_detail);
        // this.api.GET('/classifiedProductImages/'+this.proid).then((res:any)=>{
        //   console.log(res);
        //   if(res.status=='success')
        //   {
        //     for(var i=0;i<res.data.length;i++)
        //     {
        //       this.images.push(res.data[i].imageurl.original)
        //     }
        //   }
        //   console.log(this.images)
        // })
      }
    })
  }

  retriveDets(getDets){
    let returnArr = [];
    getDets.forEach(snapshot=>{
      let item = snapshot.val();
      console.log(item.api_token);
      item.key = snapshot.key;
      // if(item.api_token != localStorage.getItem('api_token')){
      // returnArr.push(item);
      // }
      returnArr.push(item);
    })
    return returnArr;
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

  share()
  {
    this.socialSharing.share(this.product_detail.product_title,'',this.product_detail.product_image.original,'');
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
      if(response.status=='success')
      {
        base.service.Success(response.data)
        base.service.LoaderHide();
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
    console.log(base.product_detail.id);
    // base.SelectedVariations.forEach(function (value, index, array) {
    //   const data = value.split('|');
    //   if(index == 0){
    //     variation_id = data[1];
    //     variation_value = data[0];
    //     console.log(variation_id,variation_value);
    //   } else {
    //     variation_id = variation_id+","+data[1];
    //     variation_value = variation_value+","+data[0];
    //     console.log(variation_id,variation_value);
    //   }
    // });
    // console.log(base.product_detail.id,base.api.getCartID(),variation_id)
    // if(base.variations.length>0)
    // {
    //   if(base.SelectedVariations.length==0)
    //   {
    //     base.service.Warning("Please choose a variation")
    //   }
    //   else{
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
             // base.fetchCart();
            }
            else{
              base.service.Warning(response.data)
            }
          },error=>{
            base.service.Warning(error)
          })
      }
  //  }
   
 // }

 chat2(inf){
  console.log(inf);
  if(inf != ''){
  firebase.database().ref('users').orderByChild('mobile').equalTo(inf).on("value",(data)=>{
    console.log(data.val());
    this.chatList = [];
    this.chatList = this.retriveData(data)
    console.log(this.chatList);
    this.navCtrl.push('ChatMessagePage',{passInfo:this.chatList[0]});
  })
 }else{
   this.service.Warning("Please re-signup for using chat feature!!");
 }
}

retriveData(data){
  let returnArr = [];
  data.forEach(snapshots => {
    let item = snapshots.val();
     console.log(item);
    item.key = snapshots.key;
    // console.log(item.key);
      returnArr.push(item);
  });
  return returnArr;
}

shareTo(data,productId){
  console.log(data);
  console.log(productId);
  for(let k=0;k<data.length;k++){
     console.log(data[k].field_details.label);
     if(data[k].field_details.label == "About You" ){
          this.fieldVal.push({about:data[k].field_value});
          console.log(this.fieldVal);
     }
     if(data[k].field_details.label == "Name" ){
      this.fieldVal.push({devloper_name:data[k].field_value});
      console.log(this.fieldVal);
 }
     
     console.log(data[k].field_value);
  }
  console.log(this.fieldVal[0].devloper_name);
  console.log(this.fieldVal[1].about);
  this.service.LoaderShowmsg("Please wait....");
  // this.socialSharing.share("Name: "+this.fieldVal[0].devloper_name,"Profession: "+this.fieldVal[1].about+" for more detail click on ",'','https://v27market.com/classified-product-detail/'+productId).then((res:any)=>{
  this.socialSharing.share('https://play.google.com/store/apps/details?id=com.gowebbi.v27market&hl=en',"Profession: "+this.fieldVal[1].about+" for more detail click on ",'','https://v27market.com/classified-product-detail/'+productId).then((res:any)=>{
    console.log(res);
    this.service.LoaderHide();
  }).catch((error=>{
    console.log(error);
    this.service.Warning("Something went to wrong!!");
    this.service.LoaderHide();
  }))
  // this.productImage = data.small_image[0];
  // console.log(this.productImage);
  // this.productTitle = data.product_title;
  // console.log(this.productTitle);
  // this.socialsharing.share(this.productImage,'',this.productTitle,'');
}

}
