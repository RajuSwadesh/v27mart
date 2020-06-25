import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
import { NativeGeocoder,NativeGeocoderOptions,NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

declare var google : any;
/**
 * Generated class for the ClassifiedProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classified-product-list',
  templateUrl: 'classified-product-list.html',
})
export class ClassifiedProductListPage {
  cat_id:any;
  base_url:any;
  product_list:any=[];
  page=2;
  PriceRange:any="";
  orderBy:any='asc';
  MinPrice:any='';
  MaxPrice:any='';
  sortingtype: any;
  filter_min:any;
  filter_max:any;
  cat_detail:any;

  fieldName : any = [];
  field_data : any = [];

 
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public service:ServiceProvider,public http:HttpClient,public actionSheetCtrl: ActionSheetController,public auth:AuthProvider,public modalCtrl: ModalController,
    private nativeGeocoder : NativeGeocoder) {
    this.base_url=api.Base_Url;
    this.cat_id=this.navParams.get('cat_id');
    this.cat_detail=this.navParams.get('cat_detail');
    console.log(this.cat_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifiedProductListPage');
    let base=this;
   
    console.log('ionViewDidLoad ExchangePage');
    base.service.LoaderShowmsg("Loading products...");
      //let url=base.base_url+'/classifiedProducts/'+base.cat_id;
      let url = base.base_url+'/classifiedProducts/1?catID='+base.cat_id;
      // let url=base.base_url+'/classifiedProducts/1?PriceRange='+base.MinPrice+','+base.MaxPrice+'&catID='+base.cat_id+'&ShortBy='+base.orderBy;
      console.log(url)
      base.http.get(url).subscribe((data:any) => {
        console.log(data)
        if(data.status=='success')
        {
          console.log(data.data);
          base.field_data = data.data;
          console.log(base.field_data);
         for(let i=0;i<data.data.length;i++){
           console.log(data.data[i].fields.length);
           console.log(data.data[i].fields[i].field_value);
            // for(let k=0;k<)
            base.fieldName = data.data[i].fields;
            console.log(base.fieldName)
            console.log(base.fieldName[i].field_id);

            console.log(data.data[i]);
            base.field_data[i].label = data.data[i].fields[0].field_details.label;
            base.field_data[i].value = data.data[i].fields[0].field_value;
            // base.field_data[i].image = data.data[i].fields[i].imageUrl;
            console.log("------label----");
            console.log(base.field_data);
            // base.product_list.push(base.fieldName);
            // console.log(base.product_list);
            console.log(base.fieldName.length);
            for(let k=0;k<base.fieldName.length;k++){
              console.log(base.fieldName[k].field_details.name);
              console.log(base.fieldName[k].field_value);
              base.product_list.push(base.fieldName[k]);
              console.log(base.product_list);
            }
          //  base.product_list.push(data.data[i].fields);
           console.log(base.product_list);
           base.service.LoaderHide();
           if(i==data.data.length-1)
           {
            console.log(base.product_list);
            base.service.LoaderHide();
           }
         }

         console.log("---End data-------");
         console.log(base.field_data);
         
         
          base.PriceRange = "/"+data.data.minprice+","+data.data.maxprice;
              base.MinPrice = data.data.minprice;
              base.MaxPrice = data.data.maxprice;
              base.filter_min=base.MinPrice;
              base.filter_max=base.MaxPrice;
              console.log(base.MinPrice,base.MaxPrice)
              base.service.LoaderHide();
      }
        else{
          base.service.LoaderHide();
        }
      },error=>{
        base.service.LoaderHide();
        base.service.Warning('Something went wrong. Try again later');
      })
  }

  

  

  moreProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {
      // let url=base.base_url+'/classifiedProducts/'+base.page+'/'+base.orderBy+'/'+base.MinPrice+','+base.MaxPrice;
      // let url=base.base_url+'/classifiedProducts/'+base.page+'?PriceRange='+base.MinPrice+','+base.MaxPrice+'&catID='+base.cat_id+'&ShortBy='+base.orderBy;
      let url = base.base_url+'/classifiedProducts/1?catID='+base.cat_id;
      base.http.get(url).subscribe((response:any)=> {
        console.log(response);
        if(response.status=='success')
        {
        base.service.LoaderHide();
        if(base.product_list != undefined){
        base.product_list=base.product_list.concat(response.data.records);
        }
        if(response.data.records.length==0)
        {
          infiniteScroll.enable(false);
        }
        console.log(base.product_list);
        }
        })
      base.page = base.page + 1;

    }, 500);
  }

  sortby() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Sort By',
      buttons: [
        // {
        //   text: 'New',
        //   handler: () => {
        //     this.sortingtype = "New"
        //   }
        // },
        // {
        //   text: 'Popular',
        //   handler: () => {
        //     this.sortingtype = "Popular"
        //   }
        // },
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
    let url=base.base_url+'/classifiedProducts/1?PriceRange='+base.MinPrice+','+base.MaxPrice+'&catID='+base.cat_id+'&ShortBy='+base.orderBy;
    console.log(url)
    base.http.get(url).subscribe((response:any)=>{
      console.log(response);
      if(response.status=='success')
      {
        base.service.LoaderHide();
        if(base.product_list != undefined){
        base.product_list=response.data.records;
        }
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
    let profileModal = base.modalCtrl.create('FilterPage', {min:base.filter_min,max:base.filter_max,cat_url:base.cat_detail.url});
    profileModal.present();
    profileModal.onDidDismiss((data:any)=>{
      console.log(data);
      if(localStorage.getItem('Price'))
      {
        var price=JSON.parse(localStorage.getItem('Price'));
        base.MinPrice=price.lower;
        base.MaxPrice=price.upper;
        base.PriceRange = "/"+price.lower+","+price.upper;
        if(data)
        {
          var url=base.base_url+'/classifiedProducts/1?PriceRange='+base.MinPrice+','+base.MaxPrice+'&catID='+base.cat_id+'&ShortBy='+base.orderBy+'&'+data;
        }
        else
        {
          var url=base.base_url+'/classifiedProducts/1?PriceRange='+base.MinPrice+','+base.MaxPrice+'&catID='+base.cat_id+'&ShortBy='+base.orderBy;
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
            if(base.product_list != undefined){
            base.product_list=response.data.records;
            }
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

  details(info)
  {
    this.navCtrl.push('ClassifiedProductDetailPage',{id:info.id})
    console.log(info)
  }

  ionViewDidLeave()
  {
    console.log("Leave");
    localStorage.removeItem('Price');
    localStorage.removeItem('selectedFilter');
    localStorage.removeItem('choosen');
  }

}
