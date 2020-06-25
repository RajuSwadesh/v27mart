import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the ExchangeRequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange-request',
  templateUrl: 'exchange-request.html',
  providers:[Camera]
})
export class ExchangeRequestPage {
product_id:any='';
qty:any=1;
price:any='';
variation_id:any='';
variation_value:any='';
pro_img:any='';
name:any='';
comment:any='';

image1:any='';
image2:any='';
image3:any='';
image4:any='';
image_data:any=[];
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

  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl:ViewController,private camera: Camera,public actionSheetController: ActionSheetController,public api:ApiProvider,public service:ServiceProvider) {
    this.product_id=this.navParams.get('product_id');
    this.price=this.navParams.get('price');
    this.variation_id=this.navParams.get('variation_id');
    this.variation_value=this.navParams.get('variation_value');
    this.pro_img=this.navParams.get('img');
    this.name=this.navParams.get('name');
    console.log(this.name,this.product_id,this.price,this.variation_id,this.variation_value);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExchangeRequestPage');
  }

  close()
  {
    this.viewCtrl.dismiss();
  }

  chooseImage(type)
  {
      const actionSheet = this.actionSheetController.create({
        buttons: [{
          text: 'Camera',
          icon: 'camera',
          handler: () => {
            console.log('camera clicked');
            this.getImage(this.cameraSetting,type);
          }
        }, {
          text: 'Gallery',
          icon: 'image',
          handler: () => {
            console.log('gallery clicked');
            this.getImage(this.cameraSettingGallery,type);
          }
        }]
      });
      actionSheet.present();
  }

  getImage(options,type) {
    let base = this;
    base.camera.getPicture(options).then((imageData) => {
      if(type=='img1')
      {
        base.image1='data:image/jpeg;base64,' +imageData;
        base.image_data.push(base.image1)
      }
      else if(type=="img2")
      {
        base.image2='data:image/jpeg;base64,' +imageData;
        base.image_data.push(base.image2)
      }
      else if(type=='img3')
      {
        base.image3='data:image/jpeg;base64,' +imageData;
        base.image_data.push(base.image3)
      }
      else if(type=='img4')
      {
        base.image4='data:image/jpeg;base64,' +imageData;
        base.image_data.push(base.image4)
      }
    }, (err) => {
      console.log(err)
    });
  }

  submit()
  {
    if(this.image_data.length==0)
    {
      this.service.Warning("Upload your Product Image...");
    }
    else if(this.comment=='')
    {
      this.service.Warning("Write your comment before submit...");
    }
    else{
      this.service.LoaderShowmsg('Submitting your request...')
      console.log(this.image_data);
      console.log(this.product_id,this.qty,this.price,this.variation_id,this.variation_value,this.comment)
      this.api.POST('/AddPriceNegotiation',{
        product_id:this.product_id,
        qty:this.qty,
        price:this.price,
        variation_id:this.variation_id,
        variation_value:this.variation_value,
        comments:this.comment,
        images:this.image_data
      }).then((response:any)=>{
        console.log(response);
        this.service.LoaderHide();
        if(response.status=='success')
        {
          this.service.Success(response.data);
          this.viewCtrl.dismiss();
        }
        else{
          this.service.Success(response.data) 
        }
      }).catch((error)=>{
        this.service.LoaderHide();
        this.service.Warning("Something went wrong. Try again later")
      })
    }
  }


}
