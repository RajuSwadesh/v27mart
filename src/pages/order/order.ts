import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {
orders:any=[];
otherDetails:any;
page = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public service:ServiceProvider,public http:HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderPage');
    const base = this;
   // base.Orders = [];
   base.service.LoaderShowmsg('Loading your orders...');
    base.api.GET("/AllOrdersLists?page=1").then(function (response : any) {
     console.log(response)
     base.service.LoaderHide();
     if(response.status=='success')
     {
       base.otherDetails=response.data.paginate;
       base.orders=response.data.orders;
       console.log(base.orders)
     }
     else{
       base.service.Warning(response.msg);
     }
    }).catch( error => {
      base.service.LoaderHide();
      base.service.Warning('Something went wrong. Try again later');
      console.log(error)
    });
  }

  downloadProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {
      if(base.otherDetails.next_page_url!=null)
      {
        base.page = base.page+1;
        base.api.GET("/AllOrdersLists?page="+base.page).then(function (response : any) {
          console.log(response);
          if(response.status=='success')
          {
            base.service.LoaderHide();
            base.otherDetails=response.data.paginate;
            base.orders=base.orders.concat(response.data.orders);
            console.log(base.orders)

            infiniteScroll.complete();

            if(response.data.orders.length==0)
            {
              infiniteScroll.enable(false);
            }

          }
          }).catch( error => {

        });
      }


      else{
        infiniteScroll.enable(false);
      }
    }, 500);
  }

}
