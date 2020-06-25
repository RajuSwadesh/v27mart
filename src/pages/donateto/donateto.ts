import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { ApiProvider } from '../../providers/api/api';
import { File } from '@ionic-native/file';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { ServiceProvider } from '../../providers/service/service';
import * as _ from 'underscore';

declare var window:any;
declare var google:any;

@IonicPage()
@Component({
  selector: 'page-donateto',
  templateUrl: 'donateto.html',
  providers:[
    ImagePicker,File,FileTransfer
  ]
})
export class DonatetoPage {
donation_images:any=[];
category:any='';
product_title:any='';
description:any='';
stock:any='';
product_condition:any='';
contact_person:any='';
contact_number:any='';
address:any='';
city:any='';
pincode:any='';
file_url:any;
donation_img_length=6;
category_list:any=[];
sub_cat_section:any=[];
sub_category:any='';
pro_cat:any='';
FormLocation :any = {
  address : '',
  latitude : '',
  longitude : ''
};
  constructor(public navCtrl: NavController, public navParams: NavParams,private imagePicker: ImagePicker,public api:ApiProvider,private file: File,private transfer: FileTransfer,public service:ServiceProvider) {
    this.initautocomplete();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatetoPage');
    this.api.GET('/allCategories').then((res:any)=>{
      console.log(res)
      this.category_list=res.data;
      console.log(this.category_list);
    })
  }


  initautocomplete(){
    let base = this;
    setTimeout(function(){ 
    console.log('--------------------------------------------------------------------------------')
    console.log((<HTMLInputElement>document.getElementById('donateAddress').getElementsByTagName('input')[0]));
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('donateAddress').getElementsByTagName('input')[0]);    
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

  donatepayment() {
    this.navCtrl.push('DonatepaymentPage')
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
      console.log(results);
      console.log(results.length);
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

  donate()
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
    else if(this.donation_images.length==0)
    {
      this.service.Warning('Upload images');
    }
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
    // else if(this.address=='')
    // {
    //   this.service.Warning("Enter Address");
    // }
    else if(this.city=='')
    {
      this.service.Warning("Enter City");
    }
    else if(this.pincode=='')
    {
      this.service.Warning("Enter pincode");
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
    else if(this.donation_images.length==0)
    {
      this.service.Warning('Upload images');
    }
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
    else{
      this.save();
    }
  }

  }

  save()
  { 
    console.log(this.donation_images);
    console.log(this.category,this.product_title,this.donation_images,this.description,this.stock,this.product_condition,this.contact_person,this.contact_number,this.address,this.city,this.pincode)
   
    if(this.category != undefined && this.sub_category != undefined){
    this.service.LoaderShowmsg('Submitting Product..');
    this.api.POST('/saveDonation',{
      in_category:this.pro_cat,
      product_title:this.product_title,
      more_images:this.donation_images,
      description:this.description,
      stock:this.stock,
      product_condition:this.product_condition,
      contact_person:this.contact_person,
      contact_number:this.contact_number,
      address:this.FormLocation.address,
      latitude: this.FormLocation.latitude,
      longitude:this.FormLocation.longitude,
      city:this.city,
      pin:this.pincode
    }).then((res:any)=>{
      console.log(res);
      if(res.status=='success')
      {
        this.service.Success(res.data);
        this.navCtrl.pop();
        this.service.LoaderHide();
      }
    }).catch((error)=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later');
    })
  }else{
    this.service.LoaderShowmsg('Submitting Product..');
    this.api.POST('/saveDonation',{
      in_category:this.category,
      product_title:this.product_title,
      more_images:this.donation_images,
      description:this.description,
      stock:this.stock,
      product_condition:this.product_condition,
      contact_person:this.contact_person,
      contact_number:this.contact_number,
      address:this.FormLocation.address,
      latitude: this.FormLocation.latitude,
      longitude:this.FormLocation.longitude,
      city:this.city,
      pin:this.pincode
    }).then((res:any)=>{
      console.log(res);
      if(res.status=='success')
      {
        this.service.Success(res.data);
        this.navCtrl.pop();
        this.service.LoaderHide();
      }
    }).catch((error)=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later');
    })
    
  }
  }

  remove(index)
  {
    this.donation_images.splice(index,1);
    this.donation_img_length=this.donation_img_length+(+1);
    console.log(this.donation_img_length);
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
  

}
