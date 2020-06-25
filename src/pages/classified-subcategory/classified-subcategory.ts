import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the ClassifiedSubcategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classified-subcategory',
  templateUrl: 'classified-subcategory.html',
})
export class ClassifiedSubcategoryPage {
  subcat_list:any;
  catName:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl:ViewController,public api:ApiProvider,public modalCtrl: ModalController){
    this.subcat_list=this.navParams.get('list');
    this.catName=this.navParams.get('name');
    console.log(this.subcat_list);
  }

  ionViewDidLoad() {

  }

  close()
  {
    this.viewCtrl.dismiss();
  }

  gotoDetail(cat)
  {
    this.api.GET('/getClassifiedSubCategory/'+cat.url).then((res:any)=>{
      console.log(res);
      if(res.status=='success')
      {
        if(res.data.length>0)
        {
           this.viewCtrl.dismiss();
           console.log(res.data)
           let subcatModal = this.modalCtrl.create('ClassifiedSubcategoryPage', { list: res.data });
           subcatModal.present();
        }
        else{
          // this.navCtrl.push('ClassifiedProductListPage',{cat_id:cat.id,cat_detail:cat})
          this.navCtrl.push('ClassifiedProductPage',{cat_id:cat.id,cat_detail:cat})
      }
      }
    })

  }

}
