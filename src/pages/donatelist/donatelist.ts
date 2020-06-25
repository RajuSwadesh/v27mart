import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';


@IonicPage()
@Component({
  selector: 'page-donatelist',
  templateUrl: 'donatelist.html',
})
export class DonatelistPage {
  donation_list:any=[];
  donation_data:any;
  page=2;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceProvider,public api:ApiProvider,private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonatelistPage');
    this.service.LoaderShowmsg('Loading donation list...');
    this.api.GET('/myDonations').then((res:any)=>{
      console.log(res);
      this.service.LoaderHide();
      if(res.status=='success')
      {
        this.donation_list=res.data;
        console.log(this.donation_list);
      }
      else{
        this.service.Warning('res.msg')
      }
    }).catch((error=>{
      this.service.LoaderHide();
      this.service.Warning('Something went wrong. Try again later')
    }))
  }
  donationdetails(id,cat,catId) {
    console.log(cat)
    console.log(catId);
    this.navCtrl.push('DonationdetailsPage',{id:id,cat:cat,cat_id:catId,type:'my'})
  }

  moreProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {

     let url='/myDonations/'+this.page;
        base.api.GET(url).then((res:any)=> {
          console.log(res);
          if(res.status=='success')
          {
            if(res.data.length>0)
            {
              this.donation_list=res.data;
              console.log(this.donation_list);
              console.log(this.donation_data);
              this.page=this.page++;
              infiniteScroll.complete();
            }
            else{
              infiniteScroll.enable(false);
            }

          // if (base.donation_data.next_page_url==null)
          // {
          //   infiniteScroll.enable(false);
          // }
          // console.log(base.product_list);
          }
          else{
            infiniteScroll.enable(false);
          }
          })
    }, 500);
  }


  deleteItem(id){
    const base = this;
    let alert = this.alertCtrl.create({
      message: 'Do you want to delete this donation product?',
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
            this.api.GET('/deleteDonation/'+id).then((res:any)=>{
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

}
