import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { HttpClient } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';


@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  showList: boolean = false;
  searchQuery: string = '';
  items: string[];
  Keyword:any;
  Products:any=[];
  ClassifiedProducts:any=[];
  product_length:any;
  classified_product_length:any;
  infos :any = [];
  allDets : any = "";
  productId : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController,public http:HttpClient,public api:ApiProvider,public service:ServiceProvider,public auth:AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  //  this.initializeItems();
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }



  search(keyword : any){
    const base = this;
   console.log(keyword.data);
   console.log(base.Keyword);
    base.Products = [];
    base.api.GET("/searchProduct/"+base.Keyword+"?page=1").then(function (success : any) {
      console.log(success);
      let data = success.data;
      console.log(data);
      if(data.length==0)
      {
        base.product_length=0;
      }
      base.Products=data;
      base.product_length=base.Products.length;
    }).catch( error => {
      console.log(error);
    });


    base.ClassifiedProducts = [];
    base.infos = [];
    base.api.GET("/searchClassifiedProduct/"+base.Keyword+"?page=1").then(function (success : any) {
      let data = success.data;
      console.log(data);
      console.log(data.length);
      if(data.length==0)
      {
        base.classified_product_length=0;
      }else{
      // base.classified_product_length=base.ClassifiedProducts.length;
      for(let i=0;i<data.length;i++){
        console.log(data[i].id);
        base.productId = data[i].id;
        console.log(base.productId);
        base.ClassifiedProducts = data[i].fields;
        console.log(base.ClassifiedProducts);
        // console.log(data[i].id);
        // base.infos.push(data[i].id);
        // console.log(base.infos[i]);

        // base.ClassifiedProducts.push(base.infos[i]);
        // console.log(base.ClassifiedProducts);
      }
     }
    }).catch( error => {
       console.log(error);
    });

  }


  deatils(url)
  {
    this.navCtrl.push('ProductdetailsPage', {url : url})
  }

  classifiedDeatils(id){
    console.log(id);
    this.navCtrl.push('ClassifiedProductDetailPage',{id:id});
  }

  goBack(){
    this.navCtrl.push('CategoriesPage');
  }

}
