import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, PopoverController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-biddingdetails',
  templateUrl: 'biddingdetails.html',
})
export class BiddingdetailsPage {
  @ViewChild(Slides) slides: Slides;
  productsArray = [
    {"src": "1.jpg","id": 0},
    {"src": "2.jpg","id": 1},
    {"src": "3.jpg","id": 2},
    {"src": "4.jpg","id": 3},
  ];

  size: string;
  public slidenumber: number = 1;
  public totalslidernumber: number;
  product_id:any;
  base_url:any;
  product_detail:any;
  product_images:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public http:HttpClient,public popoverCtrl: PopoverController,public service:ServiceProvider) {
    this.base_url=api.Base_Url;
    this.product_id=this.navParams.get('id');
    console.log(this.product_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BiddingdetailsPage');
    let base=this;
    console.log('ionViewDidLoad BiddingPage');
    base.service.LoaderShowmsg('Loading detail...')
    let url=base.base_url+'/biddingProductsDetails/'+this.product_id;
    console.log(url)
    base.http.get(url).subscribe((data:any) => {
      console.log(data)
      if(data.status=='success')
      {
        base.service.LoaderHide();
        base.product_detail=data.data;
        console.log(base.product_detail);
        var url1=base.base_url+'/biddingProductImages/'+this.product_id;
        console.log(url1)
        base.http.get(url1).subscribe((res:any) => {
          console.log(res)
          var new_arr=[{
            id:0,
            imageurl:{
              original:base.product_detail.product_image.original
            },
            product_id:base.product_detail.id
          }]
          this.product_images=res.data.concat(new_arr);
          console.log(this.product_images)
        })
      }
      else{
       base.service.LoaderHide();
      }
    },error=>{
      base.service.LoaderHide();
      base.service.Warning('Something went wrong. Try again later');
    })
  }

  ionViewDidEnter(){
    let totalslide = this.slides.length();
    this.totalslidernumber = totalslide-1
  }

  imgchange(id) {
    console.log(this.productsArray[id]);
    this.slides.slideTo(id)
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex == this.product_images.length){
    }
    else{
      this.slidenumber = currentIndex+1;
    }
  }

  doBid(){
    let popover = this.popoverCtrl.create('DoBidPage',{detail:this.product_detail});
    popover.present({

    });
    popover.onDidDismiss(()=>{
      this.ionViewDidLoad();
    })
  }

}
