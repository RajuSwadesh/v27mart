import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController, ModalController  } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiProvider } from '../../providers/api/api';
import { AuthProvider } from '../../providers/auth/auth';
import firebase from 'firebase';

import { NativeGeocoder,NativeGeocoderOptions,NativeGeocoderReverseResult } from '@ionic-native/native-geocoder';

declare var google : any;
/**
 * Generated class for the ClassifiedProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-classified-product',
  templateUrl: 'classified-product.html',
})
export class ClassifiedProductPage {

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
  userId : any;
  infos : any = [];
 chatList : any;

 own_location :any = {
  address : '',
  latitude : '',
  longitude : ''
};
geoencoderOptions: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};
alldata = false;
nodata = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public service:ServiceProvider,public http:HttpClient,public actionSheetCtrl: ActionSheetController,public auth:AuthProvider,public modalCtrl: ModalController,
    private nativeGeocoder : NativeGeocoder) {
    this.base_url=api.Base_Url;
    this.cat_id=this.navParams.get('cat_id');
    this.cat_detail=this.navParams.get('cat_detail');
    console.log(this.cat_id);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClassifiedProductPage');
    let base=this;
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
        base.own_location.latitude = position.coords.latitude;
        base.own_location.longitude = position.coords.longitude;
        console.log(base.own_location.latitude);
        console.log(base.own_location.longitude);
        base.nativeGeocoder.reverseGeocode(base.own_location.latitude, base.own_location.longitude, base.geoencoderOptions).then((result:NativeGeocoderReverseResult[])=>{
          console.log(result);
           base.own_location.address = base.generateAddress(result[0])
           console.log(base.own_location);
        }).catch((error: any) => {
          alert('Error getting location'+ JSON.stringify(error));
        });
    console.log(localStorage.getItem('api_token'));
    
    base.userId = localStorage.getItem('api_token');
    console.log(base.userId);
    
    base.service.LoaderShowmsg("Loading products...");
      let url = base.base_url+'/classifiedProducts/1?catID='+base.cat_id+'&latitude='+base.own_location.latitude+'&longitude='+base.own_location.longitude;
      console.log(url)
      base.http.get(url).subscribe((data:any) => {
        console.log(data)
        console.log(data.data.length);

        
        if(data.status=='success')
        {
          if(data.data.length > 0){
            base.alldata = true;
            base.nodata = false;
          console.log(data.data);
          base.field_data = data.data;
          console.log(base.field_data);
          for(let i=0;i<base.field_data.length;i++){
            console.log(base.field_data[i]);
          }
          base.service.LoaderHide();
          firebase.database().ref('users').on("value",getDets=>{
            console.log(getDets.val());
            base.infos=base.retriveDets(getDets);
            console.log(base.infos);
            for(let j=0;j<base.infos.length;j++){
              console.log(base.infos[j]);
              base.field_data.api_token = base.infos[j].api_token;
              base.field_data.mobileNo = base.infos[j].mobile;
              console.log(base.field_data);
            }
          })
          
         for(let i=0;i<data.data.length;i++){
           console.log(data.data[i].fields.length);
           console.log(data.data[i].fields[i].field_value);
            // for(let k=0;k<)
            base.fieldName = data.data[i].fields;
            console.log(base.fieldName)
            console.log(base.fieldName[i].field_value);

            if(base.fieldName[i].field_id == 'image'){
              console.log("ok");
            }

            console.log(data.data[i]);
            base.field_data[i].label = data.data[i].fields[0].field_details.label;
            console.log(base.field_data);
            base.field_data[i].value = data.data[i].fields[0].field_value;
            base.field_data[i].lang = data.data[i].fields[1].field_details.label;
            base.field_data[i].lang_value = data.data[i].fields[1].field_value;
            base.field_data[i].gender = data.data[i].fields[2].field_details.label;
            base.field_data[i].gender_value = data.data[i].fields[2].field_value;
            base.field_data[i].exp = data.data[i].fields[3].field_details.label;
            base.field_data[i].exp_value = data.data[i].fields[3].field_value;
            base.field_data[i].date = data.data[i].fields[4].field_details.label;
            base.field_data[i].date_value = data.data[i].fields[4].field_value;
            base.field_data[i].about = data.data[i].fields[5].field_details.label;
            base.field_data[i].about_value = data.data[i].fields[5].field_value;
           
            // base.field_data[i].image = data.data[i].fields[i].imageUrl;
            console.log("------label----");
            console.log(base.field_data);
            // base.product_list.push(base.fieldName);
            // console.log(base.product_list);
            console.log(base.fieldName.length);
            for(let k=0;k<base.fieldName.length;k++){
              console.log(base.fieldName[k].field_details.name);
              console.log(base.fieldName[k].field_details.label);
              // base.field_data[i].label = base.fieldName[k].field_details.field_type;
              console.log(base.field_data);
              if(base.fieldName[k].field_id == 'image'){
                base.field_data[i].image = base.fieldName[k].imageUrl;
                console.log(base.field_data);
              }
              base.product_list.push(base.fieldName[k]);
              console.log(base.product_list);
            }
          //  base.product_list.push(data.data[i].fields);
           console.log(base.product_list);
          //  base.service.LoaderHide();
           if(i==data.data.length-1)
           {
            console.log(base.product_list);
            // base.service.LoaderHide();
           }
         }

         

         console.log("---End data-------");
         console.log(base.field_data);
        }else{
          base.nodata = true;
          base.alldata = false;
          base.service.LoaderHide();
        }
       
      }
        else{
          base.service.LoaderHide();
        }
      },error=>{
        base.service.LoaderHide();
        console.log(error);
        base.service.Warning('Something went wrong. Try again later');
      })
      console.log("ok");
    })
  }
  this.initautocomplete();
  }

  initautocomplete(){
    let base = this;
    setTimeout(function(){ 
    console.log('--------------------------------------------------------------------------------')
    console.log((<HTMLInputElement>document.getElementById('ownLocation').getElementsByTagName('input')[0]).value);
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('ownLocation').getElementsByTagName('input')[0]);    
    autocomplete.addListener('place_changed', function () {
      let place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert(this.TranslateService.instant('No details available for input') + place.name + "'");
        return;
      } else {
        console.log(place);
        // base.destination = false;
        base.own_location = {
          address: place.formatted_address,
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng()
        };
        console.log(base.own_location);

        base.service.LoaderShowmsg("Searching..");
        let url2 = base.base_url+'/classifiedProducts/1?catID='+base.cat_id+'&latitude='+base.own_location.latitude+'&longitude='+base.own_location.longitude;
      console.log(url2);
      base.http.get(url2).subscribe((data2:any) => {
        console.log(data2);
        console.log(data2.data.length);

        
        if(data2.status=='success')
        {
          if(data2.data.length > 0){
            base.alldata = true;
            base.nodata = false;
          console.log(data2.data);
          base.field_data = data2.data;
          console.log(base.field_data);
          base.service.LoaderHide();
          firebase.database().ref('users').on("value",getDets=>{
            console.log(getDets.val());
            base.infos=base.retriveDets(getDets);
            console.log(base.infos);
            for(let j=0;j<base.infos.length;j++){
              console.log(base.infos[j]);
              base.field_data.api_token = base.infos[j].api_token;
              base.field_data.mobileNo = base.infos[j].mobile;
              console.log(base.field_data);
            }
          })
          
         for(let i=0;i<data2.data.length;i++){
           console.log(data2.data[i].fields.length);
           console.log(data2.data[i].fields[i].field_value);
            // for(let k=0;k<)
            base.fieldName = data2.data[i].fields;
            console.log(base.fieldName)
            console.log(base.fieldName[i].field_value);

            if(base.fieldName[i].field_id == 'image'){
              console.log("ok");
            }

            console.log(data2.data[i]);
            base.field_data[i].label = data2.data[i].fields[0].field_details.label;
            base.field_data[i].value = data2.data[i].fields[0].field_value;
            base.field_data[i].lang = data2.data[i].fields[1].field_details.label;
            base.field_data[i].lang_value = data2.data[i].fields[1].field_value;
            base.field_data[i].gender = data2.data[i].fields[2].field_details.label;
            base.field_data[i].gender_value = data2.data[i].fields[2].field_value;
            base.field_data[i].exp = data2.data[i].fields[3].field_details.label;
            base.field_data[i].exp_value = data2.data[i].fields[3].field_value;
            base.field_data[i].date = data2.data[i].fields[4].field_details.label;
            base.field_data[i].date_value = data2.data[i].fields[4].field_value;
            base.field_data[i].about = data2.data[i].fields[5].field_details.label;
            base.field_data[i].about_value = data2.data[i].fields[5].field_value;
           
            // base.field_data[i].image = data.data[i].fields[i].imageUrl;
            console.log("------label----");
            console.log(base.field_data);
            // base.product_list.push(base.fieldName);
            // console.log(base.product_list);
            console.log(base.fieldName.length);
            for(let k=0;k<base.fieldName.length;k++){
              console.log(base.fieldName[k].field_details.name);
              console.log(base.fieldName[k].field_details.label);
              // base.field_data[i].label = base.fieldName[k].field_details.field_type;
              console.log(base.field_data);
              if(base.fieldName[k].field_id == 'image'){
                base.field_data[i].image = base.fieldName[k].imageUrl;
                console.log(base.field_data);
              }
              base.product_list.push(base.fieldName[k]);
              console.log(base.product_list);
            }
          //  base.product_list.push(data.data[i].fields);
           console.log(base.product_list);
          //  base.service.LoaderHide();
           if(i==data2.data.length-1)
           {
            console.log(base.product_list);
            // base.service.LoaderHide();
           }
         }

         

         console.log("---End data-------");
         console.log(base.field_data);
        }else{
            base.nodata = true;
            base.alldata = false;
            base.service.LoaderHide();
        }
       
      }
        else{
          base.service.LoaderHide();
        }
      },error=>{
        base.service.LoaderHide();
        console.log(error);
        base.service.Warning('Something went wrong. Try again later');
      })
      }
    });
  },2000)
  }

  generateAddress(addressObj){
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
      console.log(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if(obj[val].length)
      address += obj[val]+', ';
      console.log(address);
    }
  return address.slice(0, -2);
}
  

  retriveDets(getDets){
    let returnArr = [];
    getDets.forEach(snapshot=>{
      let item = snapshot.val();
      console.log(item.api_token);
      item.key = snapshot.key;
      if(item.api_token != localStorage.getItem('api_token')){
      returnArr.push(item);
      }
    })
    return returnArr;
  }

  chat2(inf){
    console.log(inf);
    firebase.database().ref('users').orderByChild('mobile').equalTo(inf.mobileNo).on("value",(data)=>{
      console.log(data.val());
      this.chatList = [];
      this.chatList = this.retriveData(data)
      console.log(this.chatList);
      this.navCtrl.push('ChatMessagePage',{passInfo:this.chatList[0]});
    })
  }

  retriveData(data){
    let returnArr = [];
    data.forEach(snapshots => {
      let item = snapshots.val();
       console.log(item);
      item.key = snapshots.key;
      // console.log(item.key);
        returnArr.push(item);
    });
    return returnArr;
}

details(info)
  {
    this.navCtrl.push('ClassifiedProductDetailPage',{id:info.id})
    console.log(info)
  }

}
