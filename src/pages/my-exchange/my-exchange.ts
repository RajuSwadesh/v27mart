import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';

/**
 * Generated class for the MyExchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-exchange',
  templateUrl: 'my-exchange.html',
})
export class MyExchangePage {
  myExchange_list:any=[];
  paginate_info:any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public service:ServiceProvider,public zone:NgZone) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyExchangePage');
    let base=this;
    base.service.LoaderShowmsg('Loading...')
    base.api.GET('/allPriceNegotiation').then((res:any)=>{
      //console.log(res);
      base.service.LoaderHide();
      base.zone.run(()=>{
        base.myExchange_list=res.data.records;
        base.paginate_info=res.data.paginate;
        console.log(base.myExchange_list);
        console.log(base.paginate_info);
      })
      
    })
  }

  goToNegotiate(info)
  {
    this.navCtrl.push('NegotiatePage',{id:info.id});
  }

  moreData(infiniteScroll)
  {
    let base = this;
    if(base.paginate_info.nextPageUrl!=null)
    {
      setTimeout(() => {
        let url=base.paginate_info.nextPageUrl;
        base.api.GET(url).then((response:any)=> {
          console.log(response);
          if(response.status=='success')
          {
          base.service.LoaderHide();
          base.myExchange_list=base.myExchange_list.concat(response.data.records);
          if(response.data.length==0)
          {
            infiniteScroll.enable(false);
          }
          console.log(base.myExchange_list);
          }
          })
      }, 500);
    }  
  }
    
}
