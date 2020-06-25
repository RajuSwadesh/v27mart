import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';
import * as _ from 'underscore';
import { ImagePicker } from '@ionic-native/image-picker';

declare var google:any;

/**
 * Generated class for the EditDonationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-donation',
  templateUrl: 'edit-donation.html',
  providers:[
    ImagePicker
  ]
})
export class EditDonationPage {
donation_detail:any;
category_list:any=[];
product_title:any='';
description:any='';
stock:any='';
product_condition:any='';
contact_person:any='';
contact_number:any='';
address:any='';
city:any='';
pincode:any='';
donation_img_length=6;
sub_cat_section:any=[];
sub_category:any='';
pro_cat:any='';
category:any='';
donation_images:any=[];
product_status:any='';

FormLocation :any = {
  address : '',
  latitude : '',
  longitude : ''
};

sub_cat_id : any;
cat_id : any = '';
subCat_id : any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceProvider,public api:ApiProvider,private imagePicker: ImagePicker) {
    this.donation_detail=this.navParams.get('detail');
    console.log(this.donation_detail);
    this.category=this.donation_detail.in_category;
    this.product_title=this.donation_detail.product_title;
    this.description=this.donation_detail.description;
    this.stock=this.donation_detail.stock;
    this.product_condition=this.donation_detail.product_condition;
    this.contact_person=this.donation_detail.contact_person;
    this.contact_number=this.donation_detail.contact_number;
    this.FormLocation.address=this.donation_detail.address;
    this.FormLocation.latitude=this.donation_detail.latitude;
    console.log(this.FormLocation.latitude);
    this.FormLocation.longitude=this.donation_detail.longitude;
    console.log(this.FormLocation.longitude);
    this.city=this.donation_detail.city;
    this.pincode=this.donation_detail.pin_code;

    this.sub_cat_id = this.navParams.get('catId');
    console.log(this.sub_cat_id);
     if(this.sub_cat_id.split(',')[0] != undefined){
       this.cat_id = this.sub_cat_id.split(',')[0];
       console.log(this.cat_id);
     }
     if(this.sub_cat_id.split(',')[1] != undefined){
       this.subCat_id = this.sub_cat_id.split(',')[1];
       console.log(this.subCat_id);
     }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditDonationPage');
    this.api.GET('/allCategories').then((res:any)=>{
      console.log(res)
      this.category_list=res.data;
      console.log(this.category_list);
    })
    this.initautocomplete();
  }

  initautocomplete(){
    let base = this;
    setTimeout(function(){ 
    console.log('--------------------------------------------------------------------------------')
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('GoForm'));    
    autocomplete.addListener('place_changed', function () {
      let place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert(this.TranslateService.instant('No details available for input') + place.name + "'");
        return;
      } else {
        console.log(place);
        // base.destination = false;
        base.FormLocation = {
          address: place.formatted_address,
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng()
        };
        console.log(base.FormLocation);
      }
    });
  },2000)
  }

  selectedVal(info)
  {
    console.log(info)
    console.log(this.category);
    this.pro_cat=this.category;
    console.log(this.pro_cat)
    var filtered_data=_.filter(this.category_list,(elem)=>{
      if(elem.id==this.category)
      {
        return elem;
      }
    })
    console.log(filtered_data);
    if(filtered_data[0].subCategories.length>0)
    {
      this.sub_cat_section=filtered_data[0].subCategories;
    }
    else{
      this.sub_cat_section=[];
    }
    
  }

  
  selectedVal1()
  {
    console.log(this.sub_category);
    this.pro_cat=this.category+','+this.sub_category;
    console.log(this.pro_cat)
  }

  chooseimg()
  {
    let base=this;
    let options={
      quality:20,
      outputType:1,
      maximumImagesCount:this.donation_img_length
    }
    base.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        var base64img='data:image/jpeg;base64,'+(results[i]);
        this.donation_images.push(base64img);
         console.log(this.donation_images)
      }

      if(this.donation_images.length==6)
      {
        this.donation_img_length=0;
      }
      else if(this.donation_images.length==5)
      {
        this.donation_img_length=1;
      }
      else if(this.donation_images.length==4)
      {
        this.donation_img_length=2;
      }
      else if(this.donation_images.length==3)
      {
        this.donation_img_length=3;
      }
      else if(this.donation_images.length==2)
      {
        this.donation_img_length=4;
      }
      else if(this.donation_images.length==1)
      {
        this.donation_img_length=5;
      }
      // this.donation_img_length=this.donation_img_length-(+this.donation_images.length);
      // console.log(this.donation_img_length)
    }, (err) => { });
  }

  donateUpdate()
  {
    
      if(this.category=='')
      {
        this.service.Warning('Please choose category');
      }
      else if(this.sub_cat_section.length>0)
      {
        if(this.sub_category=='')
        {
          this.service.Warning('Please choose subcategory');
        }
        else if(this.product_title=='')
        {
          this.service.Warning('Enter Product Title');
        }
        // else if(this.donation_images.length==0)
        // {
        //   this.service.Warning('Upload images');
        // }
        else if(this.description=='')
        {
          this.service.Warning("Enter description");
        }
        else if(this.stock=='')
        {
          this.service.Warning("Enter Stock");
        }
        else if(this.product_condition=='')
        {
          this.service.Warning("Enter Product Condition");
        }
        else if(this.contact_person=='')
        {
          this.service.Warning("Enter Contact Person Name");
        }
        else if(this.contact_number=='')
        {
          this.service.Warning("Enter Contact Person Number");
        }
        else if(this.address=='')
        {
          this.service.Warning("Enter Address");
        }
        else if(this.city=='')
        {
          this.service.Warning("Enter City");
        }
        else if(this.pincode=='')
        {
          this.service.Warning("Enter pincode");
        }
        else if(this.product_status=='')
        {
          this.service.Warning("Choose your product status");
        }
        else{
          this.save();
        }
      }
      else{
        if(this.product_title=='')
        {
          this.service.Warning('Enter Product Title');
        }
        // else if(this.donation_images.length==0)
        // {
        //   this.service.Warning('Upload images');
        // }
        else if(this.description=='')
        {
          this.service.Warning("Enter description");
        }
        else if(this.stock=='')
        {
          this.service.Warning("Enter Stock");
        }
        else if(this.product_condition=='')
        {
          this.service.Warning("Enter Product Condition");
        }
        else if(this.contact_person=='')
        {
          this.service.Warning("Enter Contact Person Name");
        }
        else if(this.contact_number=='')
        {
          this.service.Warning("Enter Contact Person Number");
        }
        else if(this.FormLocation.address=='')
        {
          this.service.Warning("Enter Address");
        }
        else if(this.city=='')
        {
          this.service.Warning("Enter City");
        }
        else if(this.pincode=='')
        {
          this.service.Warning("Enter pincode");
        }
        else if(this.product_status=='')
        {
          this.service.Warning("Choose your product status");
        }
        else{
          this.save();
        }
  }
}

save()
{
this.service.LoaderShowmsg('Submitting Product..');
    console.log(this.category,this.product_title,this.donation_images,this.description,this.stock,this.product_condition,this.contact_person,this.contact_number,this.address,this.city,this.pincode)
    if(this.cat_id != undefined && this.subCat_id != undefined){
    this.api.POST('/updateDonation/'+this.donation_detail.id,{
      in_category:this.sub_cat_id,
      product_title:this.product_title,
      more_images:this.donation_images,
      description:this.description,
      stock:this.stock,
      product_condition:this.product_condition,
      contact_person:this.contact_person,
      contact_number:this.contact_number,
      address:this.FormLocation.address,
      latitude:this.FormLocation.latitude,
      longitude:this.FormLocation.longitude,
      city:this.city,
      pin:this.pincode,
      product_status:this.product_status
    }).then((res:any)=>{
      console.log(res);
      this.service.LoaderHide();
      if(res.status=='success')
      {
        this.service.Success(res.data);
        this.navCtrl.pop();
      }
    }).catch((error)=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later');
    })
  }else{
    this.api.POST('/updateDonation/'+this.donation_detail.id,{
      in_category:this.cat_id,
      product_title:this.product_title,
      more_images:this.donation_images,
      description:this.description,
      stock:this.stock,
      product_condition:this.product_condition,
      contact_person:this.contact_person,
      contact_number:this.contact_number,
      address:this.FormLocation.address,
      latitude:this.FormLocation.latitude,
      longitude:this.FormLocation.longitude,
      city:this.city,
      pin:this.pincode,
      product_status:this.product_status
    }).then((res:any)=>{
      console.log(res);
      this.service.LoaderHide();
      if(res.status=='success')
      {
        this.service.Success(res.data);
        this.navCtrl.pop();
      }
    }).catch((error)=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later');
    })
  }
}
}
