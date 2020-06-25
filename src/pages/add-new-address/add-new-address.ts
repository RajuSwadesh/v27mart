import { Component, NgZone } from '@angular/core';
import { NewTransactionPage } from '../instamojo/new_transaction';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ServiceProvider } from '../../providers/service/service';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { ApiProvider } from '../../providers/api/api';
import { Diagnostic } from '@ionic-native/diagnostic';
declare var  google:any;
/**
 * Generated class for the AddNewAddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-address',
  templateUrl: 'add-new-address.html',
  providers:[Geolocation,LocationAccuracy,Diagnostic]
})
export class AddNewAddressPage {

  newTransaction() {
    this.navCtrl.push(NewTransactionPage, {
      amount: 10
    });
  }
  address:any='';
  fname:any='';
  lname:any='';
  phno:any='';
  city:any='';
  pin:any='';
  type:any='';
  constructor(public navCtrl: NavController, public navParams: NavParams,private geolocation: Geolocation,public zone:NgZone,public service:ServiceProvider,private locationAccuracy: LocationAccuracy,public api:ApiProvider,private diagnostic: Diagnostic) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewAddressPage');
    let base=this;
    setTimeout(function(){
      let autocomplete = new google.maps.places.Autocomplete(document.getElementById('myloc'));
      autocomplete.addListener('place_changed', function () {
        let place = autocomplete.getPlace();
        if (!place.geometry) {
          window.alert(this.TranslateService.instant('No details available for input') + place.name + "'");
          return;
        } else {
             base.address=place.formatted_address;
        }
      });
    },2000)

  }

  getLocation()
  {
    this.diagnostic.isLocationEnabled().then((enabled: any) => {
    if (enabled) {
    let options = { enableHighAccuracy: true };
    this.service.LoaderShowmsg("Getting your location...")
    this.geolocation.getCurrentPosition(options).then((success) => {
      console.log(success)
      var center = new google.maps.LatLng(success.coords.latitude, success.coords.longitude);
      var geocoder = new google.maps.Geocoder();
      let base = this;
      geocoder.geocode({ 'latLng': center }, function (results, status) {
        console.log(status)
        console.log(results)
        base.service.LoaderHide();
        if (status == google.maps.GeocoderStatus.OK) {
          base.zone.run(()=>{
            base.address=results[0].formatted_address;
            console.log(base.address)
          })

        }
      })

    })
  }
  else{
    this.locationAccuracy.canRequest().then((canRequest: boolean) => {

      if(canRequest) {
      // the accuracy option will be ignored by iOS
      this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(
      () => {this.getLocation();},
      error => console.log(JSON.stringify(error))
      );
      }

      });
  }
})
}

  save()
  {
    if(this.fname=='')
    {
      this.service.Warning("Enter your first name");
    }
    else if(this.lname=='')
    {
      this.service.Warning("Enter your last name");
    }
    else if(this.address=='')
    {
      this.service.Warning("Enter your address");
    }
    else if(this.phno=='')
    {
      this.service.Warning("Enter your phone number");
    }
    else if(this.city=='')
    {
      this.service.Warning("Enter your city");
    }
    else if(this.pin=='')
    {
      this.service.Warning("Enter your pin");
    }

    else if(this.type=='')
    {
      this.service.Warning("Choose your address type");
    }
    else{
      let base=this;
      base.service.LoaderShowmsg("Adding your address");
      base.api.POST("/addAddresses",{
        firstname:base.fname,
        lastname:base.lname,
        mobile:base.phno,
        address1:base.address,
        city:base.city,
        pin:base.pin,
        type:base.type
      }).then(function (success : any) {
        console.log(success);
        base.service.LoaderHide();
        if(success.status=='success')
        {
          base.service.Success(success.data);
          base.fname='';
          base.lname='';
          base.phno='';
          base.address='';
          base.type='';
        }

      }).catch( error => {
        base.service.LoaderHide();
        base.service.Success('Something went wrong. Try again later')
      });
    }
  }

}
