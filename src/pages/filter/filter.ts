import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';
import * as _ from 'underscore';

@IonicPage()
@Component({
  selector: 'page-filter',
  templateUrl: 'filter.html',
})
export class FilterPage {
  filtermodel: any;
  price: any = { lower: 0, upper: 0 };
  min: any = 0;
  max: any = 0;
  catUrl: any;
  Filters: any = [];
  price_arr: any;
  selectedVal: any = [];
  search_str = '&';
  result: any;

  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public api: ApiProvider,
    public service: ServiceProvider) {
    if (localStorage.getItem('Price')) {
      var data = JSON.parse(localStorage.getItem('Price'));
      this.price.lower = data.lower;
      this.price.upper = data.upper;
      this.min = this.navParams.get('min');
      this.max = this.navParams.get('max');
    }
    else {
      this.min = this.navParams.get('min');
      this.max = this.navParams.get('max');
      this.price.lower = this.min;
      this.price.upper = this.max;
    }


    this.catUrl = this.navParams.get('cat_url');
    console.log(this.catUrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterPage');
    const base = this;
    base.service.LoaderShow();
    base.api.GET("/getAttributesByUrl/" + base.catUrl).then(function (Items: any) {
      base.service.LoaderHide();

      base.Filters = Items.data;
      base.filtermodel = 'price';
      console.log(base.Filters)

    }).catch(error => {
      base.service.LoaderHide();
      base.service.Warning(error);
    });
  }

  // close()
  // {
  //   this.viewCtrl.dismiss();
  // }

  // submit()
  // {
  //   console.log(this.category);
  //   localStorage.setItem('cat_id',this.category);
  //   this.viewCtrl.dismiss();
  // }

  // dismiss() {
  //   localStorage.setItem('Price',JSON.stringify(this.price))
  //   this.viewCtrl.dismiss();
  // }

  dismiss() {
    // console.log(this.search_str)
    
    let base = this;
    if(base.result)
    {
      base.search_str = '&';
      for (var i = 0; i < base.result.length; i++) {
        var str = 'v' + base.result[i][0] + '=';
        console.log(JSON.stringify(base.result[i][1]))
        var str1 = JSON.stringify(base.result[i][1]);
        var str2 = str1.replace(/\[|\]|\"|\"/g, "");
        var str3 = str + str2;
        base.search_str = base.search_str + str3 + '&';
        console.log(base.search_str.slice(1, -1));
        localStorage.setItem('selectedFilter',base.search_str.slice(1, -1));
        localStorage.setItem('Price',JSON.stringify(this.price))
        this.viewCtrl.dismiss(base.search_str.slice(1, -1));
        // search_str.push(str3)
        // console.log(search_str)
        // console.log(JSON.stringify(search_str))
        localStorage.setItem('choosen',JSON.stringify(this.selectedVal));
      }
    }
    else{
      localStorage.setItem('Price',JSON.stringify(this.price));
      this.viewCtrl.dismiss();
    }

  }

  selectedsegment(info) {
    console.log(info);
    this.filtermodel = info.name;
  }

  selectedCheckbox(info, val) {
    // console.log(info);
    // console.log(val);
    var temparr = [];
    temparr.push({
      id: info.id,
      name: info.name,
      value: val
    })
    console.log(temparr);

    var exists = _.filter(this.selectedVal, (elem) => {
      if (elem.value == temparr[0].value) {
        return elem;
      }
    })
    console.log(exists);
    if (exists.length > 0) {
      var index = this.selectedVal.findIndex(function (item, i) {
        return item.value === exists[0].value
      });
      console.log(index);
      this.selectedVal.splice(index, 1);
    }
    else {
      this.selectedVal.push({
        id: info.id,
        name: info.name,
        value: val
      })
    }
    var x = {};
    let base = this;
    for (var k in base.selectedVal) {
      if (x[base.selectedVal[k]["id"]] == undefined)
        x[base.selectedVal[k]["id"]] = [];
      x[base.selectedVal[k]["id"]].push(base.selectedVal[k]["value"])
    }

    // console.log(JSON.stringify(x))
    // var filtered_item=JSON.stringify(x);
    // var str2=filtered_item.replace(/\[|\]|\"|\"/g,"");
    // console.log(str2)
    console.log(x);
    var result = Object.keys(x).map(function (key) {
      return [Number(key), x[key]];
    });
    console.log(result);

    this.result = result;




    console.log(this.selectedVal)
  

  }

  getChecked(val)
  {
   
    var selected=JSON.parse(localStorage.getItem('choosen'));
    var exist= _.filter(selected,(elem)=>{
      if(elem.value==val)
      {
        return elem;
      }
    })
    if(exist.length>0)
    {
      return true;
    }
    else{
      return false;
    }
  }


  close()
  {
    this.viewCtrl.dismiss();
  }

}
