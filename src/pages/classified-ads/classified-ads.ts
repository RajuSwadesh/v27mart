import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the ClassifiedAdsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classified-ads',
  templateUrl: 'classified-ads.html',
})
export class ClassifiedAdsPage {
  categoryList:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public api:ApiProvider,public modalCtrl: ModalController,public service:ServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifiedAdsPage');
    this.service.LoaderShowmsg("Loading categories..");
    this.api.GET('/allClassifiedCategories').then((res:any)=>{
      // this.service.LoaderShowmsg("Loading categories..");
      console.log(res);
      if(res.status=='success')
      {
        var category=res.data;
        // this.categoryList=category.slice(3);
        this.categoryList=category;
        console.log(this.categoryList)
        this.service.LoaderHide();
      }
    },error=>{
      console.log(error);
      this.service.Warning("Something went to wrong!!");
      this.service.LoaderHide();
    })
    // this.service.LoaderHide();
  }

  gotoDetail(cat)
  {
    console.log(cat.id);
    // this.api.GET('/classifiedProducts?catID='+cat.id).then((res:any)=>{
    //   console.log(res);
    //   if(res.status == "success"){
    //     if(res.data.length>0)
    //         {
    //           let subcatModal = this.modalCtrl.create('ClassifiedSubcategoryPage', { list: res.data, name: cat.name });
    //                  subcatModal.present();
    //         }else{
    //                   this.navCtrl.push('ClassifiedProductListPage',{cat_id:cat.id,cat_detail:cat})
    //               }
    //   }
    // })

    // this.api.GET('/classifiedProducts?'+)
    this.api.GET('/getClassifiedSubCategory/'+cat.url).then((res:any)=>{
      console.log(res);
      if(res.status=='success')
      {
        if(res.data.length>0)
        {
          console.log(res.data)
           let subcatModal = this.modalCtrl.create('ClassifiedSubcategoryPage', { list: res.data, name: cat.name });
           subcatModal.present();
        }
        else{
            this.navCtrl.push('ClassifiedProductListPage',{cat_id:cat.id,cat_detail:cat})
        }
      }
    })

  }

  postAdd(){
    this.navCtrl.push('ClassifiedAddPage');
  }

  chat(){
    this.navCtrl.push('ChatPage');
  }

}
