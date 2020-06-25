import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the MyClassifiedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-classified',
  templateUrl: 'my-classified.html',
})

export class MyClassifiedPage {
  donation_list:any=[];
  donation_data:any;
  page=1;
  showProduct = false;
  noProduct = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public service:ServiceProvider,public api:ApiProvider,private alertCtrl: AlertController,) {
  }

  ionViewWillEnter() {
    this.service.LoaderShowmsg("Loading classified..");
    this.api.GET('/myClassifieds/'+this.page).then((res:any)=>{
      console.log(res);
      if(res.status=='success')
      { 
        this.donation_list=res.data;
        if(this.donation_list.length > 0){
          this.showProduct = true;
        }else{
          this.noProduct = true;
        }
        this.service.LoaderHide();
        console.log(this.donation_list);
      }
      else{
        this.service.Warning('res.msg');
        this.service.LoaderHide();
      }
    }).catch((error=>{
      console.log(error);
      this.service.LoaderHide();
    }))
  }

  // ionViewWillEnter(){
  //   this.ionViewDidLoad();
  // }


  postAd(){
    this.navCtrl.push('ClassifiedAddPage');
  }


  donationdetails(id,cat,catId) {
    console.log(id);
    console.log(cat);
    console.log(catId);
    this.navCtrl.push('ClassifiedDetailsPage',{id:id,cat:cat,cat_id :catId,type:'my'})
  }

  moreProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {

      let url='/myClassifieds/'+this.page;
      base.api.GET(url).then((res:any)=> {
        console.log(res);
        if(res.status=='success')
        {
          console.log(res.data.length);
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
      message: 'Do you want to delete this classified?',
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
            this.api.GET('/deleteClassified/'+id).then((res:any)=>{
              if(res.status=='success')
              {
                this.service.Success(res.data);
                this.ionViewWillEnter();
              }
            })
          }
        }
      ]
    });
    alert.present();
  }

}
