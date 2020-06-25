import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import * as _ from 'underscore';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImagePicker } from '@ionic-native/image-picker';

declare var google : any;

@IonicPage()
@Component({
  selector: 'page-edit-classified',
  templateUrl: 'edit-classified.html',
  providers:[
    Camera,
    ImagePicker
  ]
})

export class EditClassifiedPage {
  donation_detail:any;
  category_list:any=[];
  product_title:any='';
  description:any='';
  stock:any='';
  product_condition:any='';
  price:any='';
  donation_img_length=1;
  multiple_donation_img_length=6;
  pro_cat:any='';
  category:any='';
  donation_images:any=[];
  multipleImages : any = [];
  other_images:any=[];
  product_status:any='';

  featuredImage:any='';

  details_id : any ='';
  fieldDetails : any = '';
  Checkbox : any;
  checkArr : any;
  allImg : any = [];
  textField : any;
  numberField : any;
  dateField : any;
  textareaField : any;
  chkVal : any =[];
  checkField : any;
  checkedvalue : any='';
  selectValue : any ='';
  defaultSelectValue : any = '';
  newExp : any ='';
  name : any = '';
  updateData : any = [];
  base64Img : any;
  base64Imges : any;
  editImg = true;
  showSingleImg = false;
  showMultipleImg = false;

  sub_cat_id : any;
  catId : any='';
  sub_catId : any='';
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
  FormLocation :any = {
    address : '',
    latitude : '',
    longitude : ''
  };


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public service:ServiceProvider,
    public api:ApiProvider,
    private alertCtrl: AlertController,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private imagePicker:ImagePicker
  ) {

    this.donation_detail=this.navParams.get('detailId');
    console.log(this.donation_detail);
    this.sub_cat_id = this.navParams.get('cat_id');
    console.log(this.sub_cat_id);
    // console.log(this.sub_cat_id.split(','));
    if(this.sub_catId){
    if(this.sub_cat_id.split(',')[0] != undefined){
    this.catId = this.sub_cat_id.split(',')[0];
    console.log(this.catId);
    }
    if(this.sub_cat_id.split(',')[1] != undefined){
    this.sub_catId = this.sub_cat_id.split(',')[1];
    console.log(this.sub_catId);
    }
  }
  }

  ionViewDidLoad() {
    var arr1 = [];
    var arr2 = [];
    this.Checkbox = [];
    this.api.GET('/editClassified/'+this.donation_detail).then((data:any)=>{
      console.log(data);
      if(data.status=='success'){
        this.fieldDetails = [];
        this.fieldDetails = data.data[0].fields;
        console.log(this.fieldDetails);
        
        this.FormLocation.address = data.data[0].address;
        console.log(this.FormLocation.address);
        this.FormLocation.latitude = data.data[0].latitude;
        console.log(this.FormLocation.latitude);
        this.FormLocation.longitude = data.data[0].longitude;
        console.log(this.FormLocation.longitude);

        for(let i=0;i<this.fieldDetails.length;i++){
          console.log(this.fieldDetails[i].field_details.field_type);
         if(this.fieldDetails[i].field_details.field_type == "Checkbox"){
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
           this.fieldDetails[i].field_details.checkval = this.Checkbox;
           console.log(this.fieldDetails[i].field_details);
           console.log(this.fieldDetails);
           console.log(this.Checkbox);
           console.log(this.checkArr);
           console.log(arr1);
          }
          else if(this.fieldDetails[i].field_details.field_type == "Radio"){
            this.defaultSelectValue = this.fieldDetails[i].field_value;
            console.log(this.defaultSelectValue);
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
            //  for(let k=0;k<this.allImg.length;k++){
            //    console.log(this.allImg[k]);
            //    var image_name = this.allImg[k].substring(this.allImg[k].lastIndexOf("/")+1,this.allImg[k].length);
            //  console.log(image_name.split('.')[1]);
            //    var fileExt = image_name.split('.')[1];
            //    console.log(fileExt);
            //    if(fileExt != undefined){
            //       console.log("ok");
            //    }
            //  }
          }
        }
      }
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


  getGender(arr1){
   this.selectValue = arr1.gender_values.toString();
   console.log(this.selectValue);
  }

  getNumber(event){
   console.log(event);
   if(event.target.value != ''){
     this.newExp = event.target.value;
     console.log(this.newExp);
   }
  }

  getName(event){
    console.log(event);
    if(event.target.value == ''){
      this.name = event.target.value;
    }
  }


  selectedVal(info) {
    this.pro_cat=this.category;
    var filtered_data=_.filter(this.category_list,(elem)=>{
      if(elem.id==this.category)
      {
        return elem;
      }
    });
  }

  remove(id,imgType,imgName){
    console.log(id);
    console.log(imgType);
    console.log(imgName.substring(imgName.lastIndexOf("/")+1,imgName.length));

    var image_name = imgName.substring(imgName.lastIndexOf("/")+1,imgName.length);
    console.log(image_name);
    const base = this;
    if(imgType == 'image'){
    let alert = this.alertCtrl.create({
      message: 'Do you want to delete this image?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'yes',
          handler: () => {
            base.api.GET('/deleteClassifiedImage/'+base.donation_detail+'/'+imgType+'/'+imgName).then((res:any)=>{
             console.log(res);
             if(res.status == "success"){
              base.service.Success(res.data);
              base.ionViewDidLoad();
             }
            })
          }
        }
      ]
    });
    alert.present();
  }else if(imgType == 'images'){
    let alert = base.alertCtrl.create({
      message: 'Do you want to delete this image?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {

          }
        },
        {
          text: 'yes',
          handler: () => {
            base.api.GET('/deleteClassifiedImage/'+base.donation_detail+'/'+imgType+'/'+image_name).then((res:any)=>{
              console.log(res);
              if(res.status == "success"){
               base.service.Success(res.data);
               base.ionViewDidLoad();
              }
             })
          //   var images = imgName.split(',');
          //   console.log(images);
          //   for(let i=0;i<images.length;i++){
          //     console.log(images[i]);
          //   base.api.GET('/deleteClassifiedImage/'+base.donation_detail+'/'+imgType+'/'+images[i]).then((res:any)=>{
          //    console.log(res);
          //    if(res.status == "success"){
          //     base.service.Success(res.data);
          //     base.ionViewDidLoad();
          //    }
          //   })
          // }
          }
        }
      ]
    });
    alert.present();
  }
  }


  chooseFeatureImage(type) {
    const actionSheet = this.actionSheetController.create({
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('camera clicked');
          this.featureImage(this.cameraSetting);
        }
      }, {
        text: 'Gallery',
        icon: 'image',
        handler: () => {
          console.log('gallery clicked');
          this.featureImage(this.cameraSettingGallery);
        }
      }]
    });
    actionSheet.present();
  }

  featureImage(options) {
    let base=this;
    base.camera.getPicture(options).then((imageData) => {
        base.featuredImage = 'data:image/jpeg;base64,' +imageData;
    }, (err) => {
      console.log(err)
    });
  }



  chooseOtherImage(type) {
    const actionSheet = this.actionSheetController.create({
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('camera clicked');
          this.otherImage(this.cameraSetting);
        }
      }, {
        text: 'Gallery',
        icon: 'image',
        handler: () => {
          console.log('gallery clicked');
          this.otherImage(this.cameraSettingGallery);
        }
      }]
    });
    actionSheet.present();
  }
  

  otherImage(options) {
    let base=this;
    base.camera.getPicture(options).then((imageData) => {
      if(base.donation_images.length >=6){
        base.service.Warning('you have cross the maximum limit of image');
      }else{
        base.donation_images.push('data:image/jpeg;base64,' +imageData);
      }
    }, (err) => {
      console.log(err)
    });
  }

    chooseImage(){
      let base=this;
      let options={
        quality:20,
        outputType:1,
        maximumImagesCount: base.donation_img_length
      }
      base.imagePicker.getPictures(options).then((results) => {
        console.log(results);
        for (var i = 0; i < results.length; i++) {

          base.base64Img='data:image/jpeg;base64,'+(results[i]);
          base.donation_images.push(base.base64Img);
          base.editImg = false;
          base.showSingleImg = true;
           console.log(base.donation_images);
           console.log(base.donation_images.length);
  
        }
        }, (err) => { console.log(err); });
  }

  removeSingleImage(index){
    this.donation_images.splice(index,1);
    this.donation_img_length=this.donation_img_length+(+1);
  }

  chooseImages(){
    let base=this;
    let options={
      quality:20,
      outputType:1,
      maximumImagesCount:base.multiple_donation_img_length
    }
    base.imagePicker.getPictures(options).then((results) => {
      console.log(results);
      for (var i = 0; i < results.length; i++) {

        base.base64Imges='data:image/jpeg;base64,'+(results[i]);
        base.multipleImages.push(base.base64Imges);
        base.editImg = false;
        base.showMultipleImg = true;
         console.log(base.multipleImages);
         console.log(base.multipleImages.length);

      }
      }, (err) => { console.log(err); });
}

removeMultiImage(index){
  this.multipleImages.splice(index,1);
  this.multiple_donation_img_length=this.multiple_donation_img_length+(+1);
}

  removeOther(index) {
    this.donation_images.splice(index,1);
    this.donation_img_length=this.donation_img_length+(+1);
  }


  donateUpdate(){
    let base = this;
    base.updateData = [];
    console.log(base.fieldDetails.length);
    for(let j=0;j<base.fieldDetails.length;j++){
    if(base.fieldDetails[j].field_details.field_type == "Text"){
      console.log(base.fieldDetails[j].field_value);
      base.textField = base.fieldDetails[j].field_value;
      if(base.textField == ''){
        base.service.Warning(base.fieldDetails[j].field_details.name+" field is required!!");
      }else{
        console.log(base.textField);
        base.updateData.push({
          id : base.fieldDetails[j].field_details.id,
          value : base.textField
        });
        console.log(base.updateData);
      }
     }else if(base.fieldDetails[j].field_details.field_type == "Checkbox"){
      //  var chval = (<HTMLInputElement>document.getElementById(base.fieldDetails[j].field_details.name)).checked;
       if(base.checkedvalue == ''){
          console.log(base.checkArr.toString());
          base.updateData.push({
            id : base.fieldDetails[j].field_details.id,
            value : base.checkArr.toString()
          })
        }else{
          console.log(base.checkedvalue);
          base.updateData.push({
            id : base.fieldDetails[j].field_details.id,
            value : base.checkedvalue
          });
          console.log(base.updateData);
        }
     }else if(base.fieldDetails[j].field_details.field_type == "Radio"){
       if(base.selectValue == ''){
         console.log(base.defaultSelectValue);
         base.updateData.push({
           id : base.fieldDetails[j].field_details.id,
           value : base.defaultSelectValue
         })
       }else{
         console.log(base.selectValue);
         base.updateData.push({
          id : base.fieldDetails[j].field_details.id,
          value : base.selectValue
        });
        console.log(base.updateData);
       }
     }else if(base.fieldDetails[j].field_details.field_type == "Number"){
          console.log(base.fieldDetails[j].field_value);
          base.numberField = base.fieldDetails[j].field_value;
        if(base.numberField == ''){
          base.service.Warning(base.fieldDetails[j].field_details.name+" field is required!!");
         }else{
          console.log(base.numberField);
          base.updateData.push({
            id : base.fieldDetails[j].field_details.id,
            value : base.numberField
          });
          console.log(base.updateData);
         }
     }else if(base.fieldDetails[j].field_details.field_type == "Date"){
      console.log(base.fieldDetails[j].field_value);
      base.dateField = base.fieldDetails[j].field_value;
    if(base.dateField == '' || base.dateField == undefined){
      base.service.Warning(base.fieldDetails[j].field_details.name+" field is required!!");
     }else{
      console.log(base.dateField);
      base.updateData.push({
        id : base.fieldDetails[j].field_details.id,
        value : base.dateField
      });
      console.log(base.updateData);
     }
 }else if(base.fieldDetails[j].field_details.field_type == "Textarea"){
       console.log(base.fieldDetails[j].field_value);
       base.textareaField = base.fieldDetails[j].field_value;
       if(base.textareaField == ''){
         base.service.Warning(base.fieldDetails[j].field_details.name+" field is required!!");
       }else{
         console.log(base.textareaField);
         base.updateData.push({
          id : base.fieldDetails[j].field_details.id,
          value : base.textareaField
        });
        console.log(base.updateData);
       } 
     }else if(base.fieldDetails[j].field_id == "image"){
       console.log("------image upload ready-----------");
       console.log(base.fieldDetails[j].imageUrl);
       console.log(base.base64Img);
      if(base.base64Img == undefined || base.base64Img == null || base.base64Img == ''){
        // base.service.Warning(base.fieldDetails[j].name+" is required!!");
        console.log(base.fieldDetails[j].imageUrl);
        base.updateData.push({
          id : 'image',
          value : base.fieldDetails[j].imageUrl
        })
      }else{
        base.updateData.push({
         id : 'image',
         value : base.base64Img
        })
      }
     }else if(base.fieldDetails[j].field_id == "images"){
       console.log("------multiple image upload ready---------");
       console.log(base.base64Imges);
       if(base.base64Imges == undefined || base.base64Imges == null || base.base64Imges == ''){
         console.log(base.fieldDetails[j].imageUrl);
        //  base.service.Warning(base.fieldDetails[j].name+" is required2");
         base.updateData.push({
           id : 'images',
           value : base.fieldDetails[j].imageUrl
         })
        //  base.updateData = base.fieldDetails[j].imageUrl;
       }else{
         base.updateData.push({
           id : 'images',
           value : base.multipleImages
         })
         console.log(base.updateData);
       }
       console.log(base.updateData);
     }
    }
    console.log(base.updateData);
    // if(base.textField != '' && base.checkField != '' && base.numberField != '' && base.textareaField != ''){
    //   console.log(base.updateData);
    //   console.log(base.catId);
    //   console.log(base.sub_catId);
    //   console.log(base.FormLocation);
    //   if(base.catId != undefined && base.sub_catId != undefined){
    //   console.log(base.sub_cat_id);
    //   base.service.LoaderShowmsg("Updating product..");
    //   base.api.POST('/updateClassified/'+base.donation_detail,{in_category:base.sub_cat_id,data:base.updateData,address : base.FormLocation.address,latitude: base.FormLocation.latitude,
    //   longitude:base.FormLocation.longitude}).then((res:any)=>{
    //     console.log(res);
    //     if(res.status == "success"){
    //       base.service.Success(res.data);
    //       base.service.LoaderHide();
    //     }else{
    //       base.service.Warning(res.data);
    //       base.service.LoaderHide();
    //     }
    //   },error=>{
    //     console.log(error);
    //     base.service.Warning("Something went to wrong!!");
    //     base.service.LoaderHide();
    //   })
    // }else{
    //   base.service.LoaderShowmsg("Updating product..");
    //   base.api.POST('/updateClassified/'+base.donation_detail,{in_category:base.catId,data:base.updateData,address : base.FormLocation.address,latitude: base.FormLocation.latitude,
    //   longitude:base.FormLocation.longitude}).then((res:any)=>{
    //     console.log(res);
    //     if(res.status == "success"){
    //       base.service.Success(res.data);
    //       base.service.LoaderHide();
    //     }else{
    //       base.service.Warning(res.data);
    //       base.service.LoaderHide();
    //     }
    //   },error=>{
    //     console.log(error);
    //     base.service.Warning("Something went to wrong!!");
    //     base.service.LoaderHide();
    //   })
    // }
    // }
    console.log(base.textField);

  }


  save(){
    const base = this;
    this.service.LoaderShowmsg('Submitting Product..');
     this.api.POST('/updateClassified/'+this.donation_detail.id,{
      in_category:this.category,
      product_title:this.product_title,
      description:this.description,
      stock:this.stock,
      price:this.price,
      product_condition:this.product_condition,
      status:this.product_status,
      more_images:this.donation_images,
      feature_images:this.featuredImage,
    }).then((res:any)=>{
      console.log(res);
      if(res.status=='success')
      {
        this.api.GET('/editClassified/'+this.donation_detail.id).then((details:any)=>{
          base.donation_detail = details.data;
          base.other_images = details.data.other_images;
        });

        this.service.Success(res.data);
      }
    }).catch((error)=>{
      this.service.Warning('Something went wrong. Try again later');
    })
  }
}
