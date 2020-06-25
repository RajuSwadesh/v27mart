import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';
import { ApiProvider } from '../../providers/api/api';
import { NativeGeocoder,NativeGeocoderOptions,NativeGeocoderReverseResult  } from '@ionic-native/native-geocoder';

declare var google : any;
@IonicPage()
@Component({
  selector: 'page-donateinfo',
  templateUrl: 'donateinfo.html',
})
export class DonateinfoPage {
allDonation:any=[];
donation_data:any;
search_location :any = {
  address : '',
  latitude : '',
  longitude : ''
};
geoencoderOptions: NativeGeocoderOptions = {
  useLocale: true,
  maxResults: 5
};
searchLoc : any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,public api:ApiProvider,public service:ServiceProvider,
    private nativeGeocoder : NativeGeocoder) {
  }

  ionViewWillEnter(){
    let base = this;
    console.log(base.search_location);
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(function(position) {
        console.log(position.coords.latitude);
        base.search_location.latitude = position.coords.latitude;
        base.search_location.longitude = position.coords.longitude;
        console.log(base.search_location.latitude);
        console.log(base.search_location.longitude);
        base.nativeGeocoder.reverseGeocode(base.search_location.latitude, base.search_location.longitude, base.geoencoderOptions).then((result:NativeGeocoderReverseResult[])=>{
          console.log(result);
           base.search_location.address = base.generateAddress(result[0])
           console.log(base.search_location);
        }).catch((error: any) => {
          alert('Error getting location'+ JSON.stringify(error));
        });
      
       console.log(base.search_location);
    base.service.LoaderShowmsg('Loading Products...');
    base.api.get('/allDonations?'+'latitude='+base.search_location.latitude+'&'+'longitude='+base.search_location.longitude).then((res:any)=>{
      if(res.status=='success')
      {
        base.allDonation=res.data.records;
        console.log(base.allDonation);
        base.donation_data=res.data.pagination;
        console.log(base.donation_data);
        base.service.LoaderHide();
      }
      else{
        base.service.Warning(res.data.message)
        base.service.LoaderHide();
      }
      console.log(res)
    }).catch((error)=>{
      base.service.LoaderHide();
      base.service.Warning('Something went wrong. Try again later')
    })
  })
}
    base.initautocomplete();
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad DonateinfoPage'); 
  // }

  initautocomplete(){
    let base = this;
    setTimeout(function(){ 
    console.log('--------------------------------------------------------------------------------')
    console.log((<HTMLInputElement>document.getElementById('GoForm').getElementsByTagName('input')[0]).value);
    let autocomplete = new google.maps.places.Autocomplete(document.getElementById('GoForm').getElementsByTagName('input')[0]);    
    autocomplete.addListener('place_changed', function () {
      let place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert(this.TranslateService.instant('No details available for input') + place.name + "'");
        return;
      } else {
        console.log(place);
        // base.destination = false;
        base.search_location = {
          address: place.formatted_address,
          latitude: place.geometry.location.lat(),
          longitude: place.geometry.location.lng()
        };
        console.log(base.search_location);
        base.searchLoc.push(place);
        base.service.LoaderShowmsg("Searching..");
        base.api.get('/allDonations?'+'latitude='+base.search_location.latitude+'&'+'longitude='+base.search_location.longitude).then((res2:any)=>{
          console.log(res2);
          if(res2.status == "success"){
          base.allDonation=res2.data.records;
          console.log(base.allDonation);
          base.donation_data=res2.data.pagination;
          console.log(base.donation_data);
          base.service.LoaderHide();
          }
        },error=>{
          console.log(error);
          base.service.Warning("Something went to wrong!!");
        })
      }
    });
  },2000)
  }

      //Return Comma saperated address
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


  donateto() {
    this.navCtrl.push('DonatetoPage')
  }

  goToFilter() {
    const modal = this.modalCtrl.create('DonationFilterPage');
    modal.present();
    modal.onDidDismiss(()=>{
      console.log("Modal dismiss")
      if(localStorage.getItem('donation_cat'))
      {
        this.api.get('/allDonations/1/'+localStorage.getItem('donation_cat')).then((res:any)=>{
          if(res.status=='success')
          {
            this.allDonation=res.data.records;
            console.log(this.allDonation);
            this.donation_data=res.data.pagination;
            console.log(this.donation_data);
          }
          else{
            this.service.Warning(res.data.message)
          }
          console.log(res)
        }).catch((error)=>{
          this.service.Warning('Something went wrong. Try again later')
        })
      }
      else{
        this.ionViewWillEnter();
      }
    })
  }

  view()
  {
    this.navCtrl.push('DonatelistPage')
  }

  moreProducts(infiniteScroll)
  {
    let base = this;
    setTimeout(() => {
      if(base.donation_data.next_page_url==null)
      {
        infiniteScroll.enable(false);
      }
      // let url=base.base_url+'/getProductByCatID/'+base.category_detail.url+'/'+base.page+'/'+base.orderBy+base.PriceRange;
      else{
        console.log(base.donation_data.next_page_url.split('v1/')[1])
        var url=base.donation_data.next_page_url.split('v1/')[1];
        base.api.get('/'+url).then((res:any)=> {
          console.log(res);
          if(res.status=='success')
          {
            this.allDonation=this.allDonation.concat(res.data.records);
            console.log(this.allDonation);
            this.donation_data=res.data.pagination;
            console.log(this.donation_data);
            infiniteScroll.complete();
          if (base.donation_data.next_page_url==null)
          {
            infiniteScroll.enable(false);
          }
          // console.log(base.product_list);
          }
          })
      }
     
     

    }, 500);
  }

  goToDetail(id,cat,type)
  {
    this.navCtrl.push('DonationdetailsPage',{id:id,cat:cat,type:'all'})
  }

  ionViewWillLeave()
  {
    localStorage.removeItem('donation_cat');
  }
  
}
