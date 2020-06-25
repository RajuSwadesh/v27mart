import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController, ModalController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ExchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-exchange',
  templateUrl: 'exchange.html',
})
export class ExchangePage {
  base_url:any;
  product_list:any=[];
  page=2;
  PriceRange:any="";
  orderBy:any='asc';
  MinPrice:any='';
  MaxPrice:any='';
  sortingtype: any;
  category_detail:any;
  filter_min:any;
  filter_max:any;
  cat_id:any='';

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public service:ServiceProvider,public http:HttpClient,public actionSheetCtrl: ActionSheetController,public auth:AuthProvider,public modalCtrl: ModalController) {
    this.base_url=api.Base_Url;
    // this.category_detail=this.navParams.get('detail');
    // console.log(this.category_detail);
  }

  ionViewDidLoad() {
    let base=this;
    console.log('ionViewDidLoad ExchangePage');
    base.service.LoaderShowmsg("Loading products...");
    let url=base.base_url+'/exchangeProducts';
    // if(this.cat_id=='')
    // {
    //   console.log("inside if")
    //   url=base.base_url+'/exchangeProducts';
    //   console.log(url)
    // }
    // else{
    //   console.log("inside else")
    //   console.log(this.cat_id)
    //   console.log(typeof(this.cat_id))
    //   this.cat_id=this.cat_id.replace(/"/g,"");
    //   url=base.base_url+'/exchangeProducts/'+this.cat_id;
    //   console.log(url)
    // }

      base.http.get(url).subscribe((data:any) => {
        console.log(data)
        if(data.status=='success')
        {
          base.service.LoaderHide();
          base.product_list=data.data.records;
          console.log(base.product_list);
          base.PriceRange = "/"+data.data.minprice+","+data.data.maxprice;
              base.MinPrice = data.data.minprice;
              base.MaxPrice = data.data.maxprice;
              base.filter_min=base.MinPrice;
              base.filter_max=base.MaxPrice;
              console.log(base.MinPrice,base.MaxPrice)
        }
        else{
          base.service.LoaderHide();
        }
      },error=>{
        base.service.LoaderHide();
        base.service.Warning('Something went wrong. Try again later');
      })

      // let url1=base.base_url+'/getCategoryMaxMinPrice/'+base.category_detail.url;
      // base.http.get(url1).subscribe((response:any)=>{
      //   console.log(response);
      //   if(response.status=='success')
      //   {
      //     base.PriceRange = "/"+response.data.MinPrice+","+response.data.MaxPrice;
      //     base.MinPrice = response.data.MinPrice;
      //     base.MaxPrice = response.data.MaxPrice;
      //     base.filter_min=base.MinPrice;
      //     base.filter_max=base.MaxPrice;
      //   }
      // })
  }

  moreProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {
      let url=base.base_url+'/exchangeProducts/'+base.page+'/'+base.orderBy+'/'+base.MinPrice+','+base.MaxPrice;
      base.http.get(url).subscribe((response:any)=> {
        console.log(response);
        if(response.status=='success')
        {
        base.service.LoaderHide();
        base.product_list=base.product_list.concat(response.data.records);
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
        {
          text: 'New',
          handler: () => {
            this.sortingtype = "New"
          }
        },
        {
          text: 'Popular',
          handler: () => {
            this.sortingtype = "Popular"
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
    base.service.LoaderShowmsg('Sorting Products...');
    if(localStorage.getItem('cat'))
    {
      var url=base.base_url+'/exchangeProducts/1/'+base.orderBy+'/'+base.MinPrice+','+base.MaxPrice+'?catID='+localStorage.getItem('cat');
    }
    else{
      var url=base.base_url+'/exchangeProducts/1/'+base.orderBy+'/'+base.MinPrice+','+base.MaxPrice;

    }
    console.log(url)
    base.http.get(url).subscribe((response:any)=>{
      console.log(response);
      if(response.status=='success')
      {
        base.service.LoaderHide();
        base.product_list=response.data.records;
      }
      else{
        base.service.LoaderHide();
      }
    },err=>{
      base.service.LoaderHide();
      base.service.Warning("Something went wrong. Try again later");
    })
  }

  filterby()
  {
    let base=this;
    let profileModal = base.modalCtrl.create('ExchangeFilterPage',{min:base.filter_min,max:base.filter_max});
    profileModal.present();
    profileModal.onDidDismiss((data:any)=>{
      var price=JSON.parse(localStorage.getItem('Price'));
      if(localStorage.getItem('cat'))
      {
        var url=base.base_url+'/exchangeProducts/1/'+base.orderBy+'/'+price.lower+','+price.upper+'?catID='+localStorage.getItem('cat');
       // this.ionViewDidLoad();
      }
      else{
        var url=base.base_url+'/exchangeProducts/1/'+base.orderBy+'/'+price.lower+','+price.upper;
      }
      let httpHeaders = new HttpHeaders({
        'Accept' : 'application/json',
        'authorization' : "Bearer "+base.auth.getToken()
      });
      console.log(url)
      let options = {
        headers: httpHeaders
      };
      base.http.get(url,options).subscribe((response:any)=>{
        console.log(response);
        if(response.status=='success')
        {
          base.service.LoaderHide();
          base.product_list=response.data.records;
        }
        else{
          base.service.LoaderHide();
        }
      },err=>{
        base.service.LoaderHide();
        base.service.Warning("Something went wrong. Try again later");
      })
    })
  }

  /*filterby() {
    let base=this;
    let profileModal = base.modalCtrl.create('FilterPage', {min:base.filter_min,max:base.filter_max,cat_url:base.category_detail.url});
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
          var url=base.base_url+'/exchangeProducts/1/'+base.orderBy+'/'+price.lower+','+price.upper+'?'+data;
        }
        else
        {
          var url=base.base_url+'/exchangeProducts/1/'+base.orderBy+'/'+price.lower+','+price.upper;
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
  }*/

  ionViewDidLeave()
  {
    console.log("Leave");
    localStorage.removeItem('cat');
    localStorage.removeItem('Price');
    localStorage.removeItem('selectedFilter');
    localStorage.removeItem('choosen');
  }

  deatils(url){
    this.navCtrl.push('ProductdetailsPage',{url:url})
  }

}
