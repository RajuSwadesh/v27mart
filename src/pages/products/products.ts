import { Component } from '@angular/core';
import {ActionSheetController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { Events } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';


@IonicPage()
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {
  sortingtype: any;
  filtertype: any;
  category_detail:any;
  base_url:any;
  product_list:any=[];
  PriceRange:any="";
  MinPrice:any='';
  MaxPrice:any='';
  orderBy:any='newArrival';
  page=2;
  actionSheet: any;
  AllSubcategory:any=[];
  page_title:any;
  filter_min:any;
  filter_max:any;
  type:any='';
  filtered_data:any='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public actionSheetCtrl: ActionSheetController,public modalCtrl: ModalController,public http:HttpClient,public api:ApiProvider,public service:ServiceProvider,public events: Events,public auth:AuthProvider) {

    this.base_url=api.Base_Url;
    this.type=this.navParams.get('type');
    console.log(this.type)
    if(this.type==undefined)
    {
      this.category_detail=this.navParams.get('detail');
      console.log(this.category_detail);
    }

    //this.page_title=this.navParams.get('name')
  }

  ionViewDidLoad() {
    let base=this;
    if(base.type==undefined)
    {
      base.service.LoaderShowmsg("Loading products...");
      let url=base.base_url+'/getProductByCatID/'+base.category_detail.url+'/1/newArrival/0,999999999';
      base.http.get(url).subscribe((data:any) => {
        if(data.status=='success')
        {
          base.service.LoaderHide();
          base.product_list=data.data;
          console.log(base.product_list);
        }
        else{
          base.service.LoaderHide();
        }
      },error=>{
        base.service.LoaderHide();
        base.service.Warning('Something went wrong. Try again later');
      })

      let url1=base.base_url+'/getCategoryMaxMinPrice/'+base.category_detail.url;
      base.http.get(url1).subscribe((response:any)=>{
        console.log(response);
        if(response.status=='success')
        {
          base.PriceRange = "/"+response.data.MinPrice+","+response.data.MaxPrice;
          base.MinPrice = response.data.MinPrice;
          base.MaxPrice = response.data.MaxPrice;
          base.filter_min=base.MinPrice;
          base.filter_max=base.MaxPrice;
        }
      })
    }
    else{
      if(base.type=='new_arrival')
      {
        base.api.GET("/newArrivalProduct/10").then(function (success : any) {
          console.log(success)
          if(success.status=='success')
          {
            base.product_list=success.data;
          }
        }).catch( error => {
          console.log(error)
        });

      }
    }

  }

  deatils(url) {
    this.navCtrl.push('ProductdetailsPage',{url:url})
  }

  sortby() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Sort By',
      buttons: [
        {
          text: 'Newly Arrival',
          handler: () => {
            this.sortingtype = "Newly Arrival";
            this.orderBy='newArrival';
            this.sortProduct();
          }
        },
        {
          text: 'Price Low To High',
          handler: () => {
            this.sortingtype = "Price Low To High";
            this.orderBy='asc';
           this.sortProduct();
          }
        },
        {
          text: 'Price High To Low',
          handler: () => {
            this.sortingtype = "Price High To Low";
            this.orderBy='desc';
            this.sortProduct();
          }
        },

        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }

  sortProduct()
  {
    let base=this;
    base.service.LoaderShowmsg('Sorting Products...')
    let url=base.base_url+'/getProductByCatID/'+base.category_detail.url+'/1/'+base.orderBy+'/'+base.MinPrice+','+base.MaxPrice;
    console.log(url)
    base.http.get(url).subscribe((response:any)=>{
      console.log(response);
      if(response.status=='success')
      {
        base.service.LoaderHide();
        base.product_list=response.data;
      }
      else{
        base.service.LoaderHide();
      }
    },err=>{
      base.service.LoaderHide();
      base.service.Warning("Something went wrong. Try again later");
    })
  }

  filterby() {
    let base=this;
    let profileModal = base.modalCtrl.create('FilterPage', {min:base.filter_min,max:base.filter_max,cat_url:base.category_detail.url});
    profileModal.present();
    profileModal.onDidDismiss((data:any)=>{
      base.filtered_data=data;
      console.log(data);
      if(localStorage.getItem('Price'))
      {
        var price=JSON.parse(localStorage.getItem('Price'));
        base.MinPrice=price.lower;
        base.MaxPrice=price.upper;
        base.PriceRange = "/"+price.lower+","+price.upper;
        if(data)
        {
          var url=base.base_url+'/getProductByCatID/'+base.category_detail.url+'/1/'+base.orderBy+'/'+price.lower+','+price.upper+'?'+data;
        }
        else
        {
          var url=base.base_url+'/getProductByCatID/'+base.category_detail.url+'/1/'+base.orderBy+'/'+price.lower+','+price.upper;
        }

        console.log(url);
        let httpHeaders = new HttpHeaders({
          'Accept' : 'application/json',
          'authorization' : "Bearer "+base.auth.getToken()
        });

        let options = {
          headers: httpHeaders
        };
        base.http.get(url,options).subscribe((response:any)=>{
          console.log(response);
          if(response.status=='success')
          {
            base.service.LoaderHide();
            base.product_list=response.data;
          }
          else{
            base.service.LoaderHide();
          }
        },err=>{
          base.service.LoaderHide();
          base.service.Warning("Something went wrong. Try again later");
        })
      }
    })
  }

  search(){
    this.navCtrl.push('SearchPage')
  }

  moreProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {
      let url;
      if(base.filtered_data)
      {
        url=base.base_url+'/getProductByCatID/'+base.category_detail.url+'/'+base.page+'/'+base.orderBy+base.PriceRange+'?'+base.filtered_data;
      }
      else{
        url=base.base_url+'/getProductByCatID/'+base.category_detail.url+'/'+base.page+'/'+base.orderBy+base.PriceRange;
      }

      base.http.get(url).subscribe((response:any)=> {
        console.log(response);
        if(response.status=='success')
        {
        base.service.LoaderHide();
        base.product_list=base.product_list.concat(response.data);
        infiniteScroll.complete();
        if(response.data.length==0)
        {
          infiniteScroll.enable(false);
        }
        console.log(base.product_list);
        }
        })
      base.page = base.page + 1;

    }, 500);
  }

  Categories(){
    const base = this;
    base.actionSheet = base.actionSheetCtrl.create({ title: 'Sub Categories' });
    base.api.GET("/getSubCategory/"+base.category_detail.url).then(function (Records : any) {
      const data = Records.data;
      console.log(data)
      if(data.length==0)
      {
        base.addnoCat();
        base.actionSheet.present();
      }
      else{
        let i;
        for (i = 0; i < data.length; i++) {
          base.addCategory(data[i]);
          base.AllSubcategory.push(data[i]);
        }
        base.actionSheet.present();
      }

    }).catch( error => {
      base.service.LoaderHide();
      base.service.Warning(error);
    });
  }

  addCategory(data){
    console.log(data)
    const base = this;
    base.actionSheet.addButton({
      text: data.name,
      handler: () => {
        base.navCtrl.push('ProductsPage', {detail:data})
      }
    });
  }

  addnoCat()
  {
    const base = this;
    base.actionSheet.addButton({
      text: 'No Sub Category belongs to this Category.',
      handler: () => {

      }
    });
  }

  ionViewDidLeave()
  {
    console.log("Leave");
    localStorage.removeItem('Price');
    localStorage.removeItem('selectedFilter');
    localStorage.removeItem('choosen');
  }
}
