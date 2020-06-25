import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Deeplinks } from '@ionic-native/deeplinks';
import { Market } from '@ionic-native/market';

@IonicPage()
@Component({
  selector: 'page-donationdetails',
  templateUrl: 'donationdetails.html',
})
export class DonationdetailsPage {
id:any;
donation_detail:any='';
category:any;
type:any;
sub_cat_id : any;
cat_id : any='';
subCat_id : any = '';
productImage : any = '';
productTitle : any = '';
productPrice : any = '';
donate_id : any = '';
appLink : any = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceProvider,public api:ApiProvider,private alertCtrl: AlertController,
    public socialsharing : SocialSharing,private deeplinks: Deeplinks,private market: Market) {
    this.id=this.navParams.get('id');
    console.log("------DonationId------");
    console.log(this.id);
    this.category=this.navParams.get('cat');
    this.type=this.navParams.get('type');
    console.log(this.type);
    console.log(this.category)

    this.sub_cat_id = this.navParams.get('cat_id');
    this.donate_id = this.navParams.get('donateId');
    console.log(this.donate_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonationdetailsPage');
    if(this.type=='all')
    {
      this.service.LoaderShowmsg('Loading detail...');
      this.api.GET('/viewDonation/'+this.id).then((res:any)=>{
        console.log("----Response data----");
        console.log(res);
        this.service.LoaderHide();
        if(res.status=='success')
        {
          this.donation_detail=res.data;
          console.log(this.donation_detail);
        }
        else{
          this.service.Warning("Something went to wrong!!");
        }
      }).catch((error=>{
        this.service.LoaderHide();
        this.service.Warning('Something went wrong. Try again later')
      }))
    }
    else{
      this.service.LoaderShowmsg('Loading donation list...');
      this.api.GET('/editDonation/'+this.id).then((res:any)=>{
      console.log(res);
      this.service.LoaderHide();
      if(res.status=='success')
      {
        this.donation_detail=res.data;
        console.log(this.donation_detail);
      }
      else{
        this.service.Warning('res.msg')
      }
    }).catch((error=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later')
    }))
    }
    
  }

  update()
  {
    this.navCtrl.push('EditDonationPage',{detail:this.donation_detail,catId : this.sub_cat_id})
  }

  remove(info)
  {
    console.log(info)
    console.log(info.split("/"))
    var img_name=info.split("/")[8];
    console.log(img_name)
    let alert = this.alertCtrl.create({
      
      message: 'Do you want to delete this image?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'yes',
          handler: () => {
            console.log('Buy clicked');
            this.api.GET('/deleteDonationImage/'+this.donation_detail.id+'/'+img_name).then((res:any)=>{
              console.log(res);
              if(res.status=='success')
              {
                this.service.Success(res.data);
                this.ionViewDidLoad();
              }
            })
          }
        }
      ]
    });
    alert.present();
  }

  shareTo(data){
    console.log(data);
    this.productImage = data.small_image[0];
    console.log(this.productImage);
    this.productTitle = data.product_title;
    console.log(this.productTitle);
    // this.appLink = this.market.open('com.gowebbi.v27market');
    // console.log(this.appLink);
    // this.socialsharing.share(this.productImage,'',this.productTitle,'');
    // this.socialsharing.share("Check this: https://v27market.com/donationdetails/"+data.id, this.productTitle, this.productImage,).then((res:any)=>{
    //   console.log(res);
    // }).catch((error:any)=>{
    //   console.log(error);
    // });
    this.service.LoaderShowmsg("Please wait....");
    // this.socialsharing.share(data.description+'...' + ' For more detail go to-', 'v27mart - '+data.product_title, this.productImage, 'https://v27market.com/donationdetails/'+data.id).then((res:any)=>{
    this.socialsharing.share('https://play.google.com/store/apps/details?id=com.gowebbi.v27market&hl=en','If app installed go to', this.productImage, 'https://v27market.com/donationdetails/'+data.id).then((res:any)=>{
      console.log(res);
      this.service.LoaderHide();
    }).catch((error:any)=>{
      console.log(error);
      this.service.Warning("Something went to wrong!!");
      this.service.LoaderHide();
    });
  }
}
