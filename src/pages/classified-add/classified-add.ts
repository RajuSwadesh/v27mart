import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';;
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import * as _ from 'underscore';

declare var window:any;
declare var google: any;

@IonicPage()
@Component({
  selector: 'page-classified-add',
  templateUrl: 'classified-add.html',
  providers:[
    Camera,
    ImagePicker,
  ]
})

export class ClassifiedAddPage {
  donation_images:any=[];
  multiple_donation_images:any=[];
  category:any='';
  product_title:any='';
  description:any='';
  stock:any='';
  product_condition:any='';
  price:any='';
  file_url:any;
  donation_img_length=1;
  multiple_donation_img_length=6;
  category_list:any=[];
  sub_cat_section:any=[];
  sub_category:any='';
  pro_cat:any='';


  cameraSetting : CameraOptions = {
    quality: 30,
    sourceType : 1,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth:500,
    targetHeight:500,
  };
  cameraSettingGallery : CameraOptions = {
    quality: 30,
    sourceType : 2,
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
    targetWidth:500,
    targetHeight:500,
  };
  subCatField :any;
  Name : any={};
  formData : any =[];
  mainData : any = {}
  textField : any;
  numberField : any;
  textareaField : any;
  radioField : any;
  dateField : any;
  checkField : any;
  chkVal : any =[];
  base64Img : any;
  base64Imges : any;
  multipleImage : any = [];
  checkedvalue : any='';

  FormLocation :any = {
    address : '',
    latitude : '',
    longitude : ''
  };
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public api:ApiProvider,
    public service:ServiceProvider,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private imagePicker: ImagePicker
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatetoPage');
    this.api.GET('/allClassifiedCategories').then((res:any)=>{
      this.category_list=res.data;
      console.log(this.category_list);
    })
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

  chooseImage(){
    let base=this;
    let options={
      quality:20,
      outputType:1,
      maximumImagesCount:base.donation_img_length
    }
    base.imagePicker.getPictures(options).then((results) => {
      console.log(options);
      console.log(results);
      console.log(results.length);
      for (var k = 0; k < results.length; k++) {
        base.base64Img='data:image/jpeg;base64,'+(results[k]);
        base.donation_images.push(base.base64Img);
         console.log(this.donation_images)

      }
      }, (err) => { });
}

remove(index) {
  this.donation_images.splice(index,1);
  this.donation_img_length=this.donation_img_length+(+1);
}

chooseMultipleImage(){
  let base=this;
  let options={
    quality:20,
    outputType:1,
    maximumImagesCount:base.multiple_donation_img_length
  }
  base.imagePicker.getPictures(options).then((results) => {
    // multipleImage = [];
    for (var i = 0; i < results.length; i++) {
       base.base64Imges='data:image/jpeg;base64,'+(results[i]);
      base.multipleImage.push(base.base64Imges);
      console.log("-------multiple images---------");
      console.log(base.multipleImage);
      console.log("-------multiple images join pipe operator---------");
      // console.log(multipleImage.join('|'));
      base.multiple_donation_images.push(base.base64Imges);
       console.log(this.multiple_donation_images)

    }
    if(base.multiple_donation_images.length==6)
    {
      base.multiple_donation_img_length=0;
    }
    else if(base.multiple_donation_images.length==5)
    {
      base.multiple_donation_img_length=1;
    }
    else if(base.multiple_donation_images.length==4)
    {
      base.multiple_donation_img_length=2;
    }
    else if(base.multiple_donation_images.length==3)
    {
      base.multiple_donation_img_length=3;
    }
    else if(base.multiple_donation_images.length==2)
    {
      base.multiple_donation_img_length=4;
    }
    else if(base.multiple_donation_images.length==1)
    {
      base.multiple_donation_img_length=5;
    }
    }, (err) => { });
}

removeImages(index) {
  this.multiple_donation_images.splice(index,1);
  this.multiple_donation_img_length=this.multiple_donation_img_length+(+1);
}

  // chooseImage2(type) {
  //   const actionSheet = this.actionSheetController.create({
  //     buttons: [{
  //       text: 'Camera',
  //       icon: 'camera',
  //       handler: () => {
  //         console.log('camera clicked');
  //         this.getImage(this.cameraSetting);
  //       }
  //     }, {
  //       text: 'Gallery',
  //       icon: 'image',
  //       handler: () => {
  //         console.log('gallery clicked');
  //         this.getImage(this.cameraSettingGallery);
  //       }
  //     }]
  //   });
  //   actionSheet.present();
  // }

  // getImage(options) {
  //   let base=this;
  //   base.camera.getPicture(options).then((imageData) => {
  //     if(base.donation_images.length >=6){
  //       base.service.Warning('you have cross the maximum limit of image');
  //     }else{
  //       base.donation_images.push('data:image/jpeg;base64,' +imageData);
  //       // base.base64Img = 'data:image/jpeg;base64,' +imageData;
  //     }
  //   }, (err) => {
  //     console.log(err)
  //   });
  // }


  donatepayment() {
    this.navCtrl.push('DonatepaymentPage')
  }

  

donate(){
  this.formData = [];
  if(this.category=='')
  {
    this.service.Warning('Please choose category');
  }else if(this.sub_cat_section.length>0){
    if(this.sub_category=='')
      {
        this.service.Warning('Please choose subcategory');
      }else{
        // this.service.LoaderShowmsg("Please wait....");
        if(this.FormLocation.address == ''){
          this.service.Warning("Address field should not blank");
        }
        for(let i=0;i<this.subCatField.length;i++){
          console.log(this.textField);
          console.log(this.numberField);
          // if(this.textField == undefined){
          //   this.service.Warning(this.subCatField[i].name+" field should not be blank!!");
          //   this.service.LoaderHide();
          // }else if(this.numberField == undefined){
          //   this.service.Warning(this.subCatField[i].name+" field should not be blank!!");
          //   this.service.LoaderHide();
          // }
        console.log(this.subCatField[i].field_type);
        console.log(this.subCatField[i]);

    if(this.subCatField[i].field_type == "Text"){
         console.log(this.textField);
         console.log((<HTMLInputElement>document.getElementById(this.subCatField[i].name)).value);
         this.textField = (<HTMLInputElement>document.getElementById(this.subCatField[i].name)).value;
         console.log(this.textField);
          if(this.textField == ''){
              this.service.Warning(this.subCatField[i].name+" is required!!");
              // this.service.LoaderHide();
            }else {
              this.formData.push({
                id:this.subCatField[i].id,
                value:this.textField
              });
            console.log(this.formData);
            }
    }else if(this.subCatField[i].field_type == "Number"){
          console.log(this.subCatField[i].name);
          console.log((<HTMLInputElement>document.getElementById(this.subCatField[i].name)).value);
          this.numberField = (<HTMLInputElement>document.getElementById(this.subCatField[i].name)).value;
          if(this.numberField == ''){
            this.service.Warning(this.subCatField[i].name+" is required!!");
            // this.service.LoaderHide();
          }else {
            this.formData.push({
              id:this.subCatField[i].id,
              value:this.numberField
            });
            console.log(this.formData);
        }
    }else if(this.subCatField[i].field_type == "Date"){
          console.log(this.subCatField[i].name);
          console.log((<HTMLInputElement>document.getElementById(this.subCatField[i].name)).value);
          this.dateField = (<HTMLInputElement>document.getElementById(this.subCatField[i].name)).value;
          if(this.dateField == ''){
            this.service.Warning(this.subCatField[i].name+" is required!!");
            // this.service.LoaderHide();
          }else {
          this.formData.push({
            id:this.subCatField[i].id,
            value:this.dateField
          });
          console.log(this.formData);
        }
    }else if(this.subCatField[i].field_type == "Textarea"){
          console.log(this.subCatField[i].name);
          console.log((<HTMLInputElement>document.getElementById(this.subCatField[i].name)).value);
          this.textareaField = (<HTMLInputElement>document.getElementById(this.subCatField[i].name)).value;
          if(this.textareaField == ''){
            this.service.Warning(this.subCatField[i].name+" is required!!");
            // this.service.LoaderHide();
          }else {
          this.formData.push({
            id:this.subCatField[i].id,
            value:this.textareaField
          });
          console.log(this.formData);
        }
    }else if(this.subCatField[i].field_type == "Radio"){
          this.formData.push({
            id:this.subCatField[i].id,
            value:this.radioField
          });
          console.log(this.formData);
    }else if(this.subCatField[i].field_type == "Checkbox"){
          if(this.checkedvalue == ''){
            this.service.Warning(this.subCatField[i].name+" is required!!");
            // this.service.LoaderHide();
          }else {
          this.formData.push({
            id:this.subCatField[i].id,
            value:this.checkedvalue
          });
          console.log(this.formData);
        }
    }else if(this.subCatField[i].field_type == "Single_image" ){
      console.log("--------multipleimage upload----------");
          if(this.base64Img == undefined){
            this.service.Warning(this.subCatField[i].name+" is required!!");
          }else {
          this.formData.push({
            id:"image",
            value:this.base64Img
          });
          console.log(this.formData);
        }
    }else if(this.subCatField[i].field_type == "Multiple_image"){
      console.log("--------singleimage upload----------");

      if(this.base64Imges == undefined){
        this.service.Warning(this.subCatField[i].name+" is required!!");
        // this.service.LoaderHide();
      }else {
      this.formData.push({
        id:"images",
        value:this.multiple_donation_images
      });
      console.log(this.formData);
    }
    console.log("-------textfield------");
    console.log(this.textField);
         
      }
     }

     /**************** End forloop ***************/
     if(this.textField != '' && this.numberField != '' && this.dateField != '' && this.textareaField != '' && this.checkedvalue != '' ){
      console.log("---------getFormData------------");
      // this.category+','+this.sub_category
      console.log(this.pro_cat);
      console.log(this.formData);
      if(this.category != undefined && this.sub_category != undefined){
         this.service.LoaderShowmsg("Saving product..");
          this.api.POST('/saveClassified',{in_category : this.pro_cat,data:this.formData,address : this.FormLocation.address,latitude : this.FormLocation.latitude,
          longitude : this.FormLocation.longitude}).then((res:any)=>{
            console.log(res);
            if(res.status == "success"){
              console.log(res);
              this.formData = [];
              this.service.Success(res.data);
              this.navCtrl.push('MyClassifiedPage');
              this.service.LoaderHide();
              // this.textField = '';
              // this.numberField = '';
              // this.checkField = '';
              // this.dateField = '';
              // this.textareaField = '';
              // this.base64Img = '';
              // this.multipleImage = '';
            }else{
              this.service.Warning(res.data);
              this.service.LoaderHide();
            }
          }),error=>{
            console.log(error);
            this.service.Warning("Something went wrong!!!");
            this.service.LoaderShow();
          }
        }else{
          this.service.LoaderShowmsg("Saving product..");
          this.api.POST('/saveClassified',{in_category : this.category,data:this.formData,address : this.FormLocation.address,latitude : this.FormLocation.latitude,
          longitude : this.FormLocation.longitude}).then((res:any)=>{
            console.log(res);
            if(res.status == "success"){
              console.log(res);
              this.formData = [];
              this.service.Success(res.data);
              this.navCtrl.push('MyClassifiedPage');
              this.service.LoaderHide();
              // this.textField = '';
              // this.numberField = '';
              // this.checkField = '';
              // this.dateField = '';
              // this.textareaField = '';
              // this.base64Img = '';
              // this.multipleImage = '';
            }else{
              this.service.Warning(res.data);
              this.service.LoaderHide();
            }
          }),error=>{
            console.log(error);
            this.service.Warning("Something went wrong!!!");
            this.service.LoaderShow();
          }
        }
       }
    }
  }
 }

// getCheck(data){
//   console.log("------subcategory-------");
//   console.log(this.subCatField);
//   console.log(data);
//   this.chkVal.push(data);
//   console.log(this.chkVal.join());
//   this.checkField = this.chkVal.join();
//   console.log(this.checkField);
// }

getCheck(arr,data){
  console.log("check");
  var x = document.getElementsByClassName("mycheck");
  console.log(x.length);
  var str='';
  for(let i=0;i<x.length;i++){
    if((<HTMLInputElement>x[i]).checked === true){
      str +=(<HTMLInputElement>x[i]).value+",";
      console.log(str); 
      this.checkedvalue= str.replace(/,\s*$/, "");
      console.log(this.checkedvalue);
    }
  }
}

getGender(data2){
  console.log(data2.fld);
  this.radioField = data2.fld;
}
  donate2() {
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
      else if(this.price=='')
      {
        this.service.Warning("Enter Price");
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
      else if(this.product_condition=='')
      {
        this.service.Warning("Enter Product Condition");
      }
      else if(this.price=='')
      {
        this.service.Warning("Enter Price");
      }
      else{
        this.save();
      }
    }
  }

  save() {
    this.service.LoaderShowmsg('Submitting Product..');
    this.api.POST('/saveClassified',{
      in_category:this.category,
      product_title:this.product_title,
      more_images:this.donation_images,
      description:this.description,
      stock:this.stock,
      product_condition:this.product_condition,
      price:this.price
    }).then((res:any)=>{
      // this.service.LoaderHide();
      if(res.status=='success')
      {
        this.service.Success(res.data);
        this.navCtrl.pop();
      }
    }).catch((error)=>{
      // this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later');
    })
  }

  

  selectedVal(info) {
    this.pro_cat=this.category;
    var filtered_data=_.filter(this.category_list,(elem)=>{
      if(elem.id==this.category)
      {
        return elem;
      }
    });
    if(filtered_data[0].subCategories.length>0)
    {
      this.sub_cat_section=filtered_data[0].subCategories;
      console.log(this.sub_cat_section[0].name);
      this.initautocomplete();
    }
    else{
      this.sub_cat_section=[];
    }
  }

  selectedVal1() {
    
    console.log(this.sub_category);
    this.pro_cat=this.category+','+this.sub_category;
    console.log(this.pro_cat)
    
    this.api.GET('/getClassifiedFields/'+this.sub_category).then((res:any)=>{
     console.log(res);

     var arr1 = [];

     if(res.status == "success"){
       console.log(res.data);
       this.subCatField = [];
      this.subCatField =res.data;
      
       for(let i=0;i<this.subCatField.length;i++){
         var labelName = this.subCatField[i].name.toLowerCase();
        //  console.log(labelName.replace(/\s/g,''));
        this.subCatField[i].ngmodel = labelName.replace(/\s/g,'');
       
        console.log(this.subCatField[i]);
        if(this.subCatField[i].field_type == "Checkbox"){
          console.log(this.subCatField[i].field_values);
          var array = this.subCatField[i].field_values.split(',');
          this.subCatField[i].arrayField = array;
          console.log(array);
          // this.subCatField[i].field_type.push(array);
          console.log(this.subCatField[i].arrayField)
        }else if(this.subCatField[i].field_type == "Radio"){
          console.log(this.subCatField[i].field_values);
          var arrValues = this.subCatField[i].field_values.split(',');
          for(let j=0;j<arrValues.length;j++){
            console.log(arrValues[j]);

            arr1.push({
              fld : arrValues[j]
            })
            console.log(arr1);
          }
          
          this.subCatField[i].radioField = arr1;
          console.log(this.subCatField[i].radioField.length);
        }
       }
      // console.log(this.subCatField);
     }
    })
  }

  // retriveData(res){
  //   const returnArr = [];
  //   res.forEach(snpshot=>{
  //     const item = snpshot;
  //     item.key = snpshot.key;
  //     returnArr.push(item);
  //   })
  //   return returnArr;
  // }


}


