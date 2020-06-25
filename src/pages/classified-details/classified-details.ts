import { Component, ViewChild } from '@angular/core';
import {IonicPage, NavController, NavParams, Slides, PopoverController} from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ClassifiedDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classified-details',
  templateUrl: 'classified-details.html',
})

export class ClassifiedDetailsPage {
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

  fieldDetails : any;
  editId : any = '';
  checkArr : any;
  Checkbox : any;
  allImg : any = [];
  cat_sub_id : any;
  address : any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public http:HttpClient,public popoverCtrl: PopoverController,public service:ServiceProvider) {
    this.base_url=api.Base_Url;
    this.product_id=this.navParams.get('id');
    console.log(this.product_id);
    this.cat_sub_id = this.navParams.get('cat_id');
    console.log(this.cat_sub_id);
  }

  ionViewDidLoad() {
    let base=this;
    console.log(base.product_id);
    base.service.LoaderShowmsg("Loading details..");
    this.api.GET('/editClassified/'+this.product_id).then((data:any)=>{
      if(data.status=='success'){
        base.product_detail=data.data;
        console.log(base.product_detail[0].id);
        base.editId = base.product_detail[0].id;
        base.fieldDetails = [];
        base.fieldDetails = base.product_detail[0].fields;
        console.log(base.product_detail);
        console.log(base.fieldDetails);

        base.address = base.product_detail[0].address;
        console.log(base.address);
        
        var arr1 = [];
        this.Checkbox = [];
        var arr2 = [];
        for(let i=0;i<this.fieldDetails.length;i++){
          console.log(this.fieldDetails[i].field_details.field_type);
          if(this.fieldDetails[i].field_details.field_type == "Checkbox"){
            console.log(this.fieldDetails[i].field_details.name);
            var array = this.fieldDetails[i].field_details.field_values.split(',');
            console.log(array);
            for(let j=0;j<array.length;j++){
              arr1.push({
                field_values : array[j],
              })
            }
            this.fieldDetails[i].field_details.checkValue=arr1;
            console.log(this.fieldDetails[i].field_details.checkValue);
            this.checkArr = this.fieldDetails[i].field_value.split(',');
           console.log(this.checkArr);
           for(let a=0;a<this.checkArr.length;a++){
             this.Checkbox.push({
               check : this.checkArr[a],
             })
           }
          }
          else if(this.fieldDetails[i].field_details.field_type == "Radio"){
            var array1 = this.fieldDetails[i].field_details.field_values.split(',');
            console.log(array1);
            for(let k=0;k<array1.length;k++){
              arr2.push({
                gender_values : array1[k],
              })
            }
            this.fieldDetails[i].field_details.genderValue = arr2;
            console.log(this.fieldDetails[i].field_details.genderValue);
          }else if(this.fieldDetails[i].field_id == "images"){
            this.allImg = this.fieldDetails[i].imageUrl;
            console.log(this.allImg);
         }
        }


        if(data.data.product_image != undefined) {
          base.product_images.push({
            "original": data.data.product_image.original,
            "name": data.data.product_image.name,
          });
        }

        if(data.data.other_images != undefined) {
          data.data.other_images.forEach(function (images) {
            base.product_images.push({
              "original": images.original,
              "name": images.name,
            });
          });
        }
        base.service.LoaderHide();
      }
    },error=>{
      console.log(error);
      base.service.Warning('Something went wrong. Try again later');
      base.service.LoaderHide();
    })
  }


  ionViewDidEnter(){
    if(this.slides.length()!=undefined){
    let totalslide = this.slides.length();
    this.totalslidernumber = totalslide-1
    }
    this.ionViewDidLoad();
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


  updateAd(id,catId){
    console.log(id);
    console.log(catId);
    this.navCtrl.push('EditClassifiedPage',{detailId:id,cat_id : catId})
  }


}
