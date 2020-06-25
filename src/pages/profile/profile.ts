import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { ServiceProvider } from '../../providers/service/service';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
userData:any='';
Orders:any=[];
order_length:any;
Address:any=[];
address_length:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public api:ApiProvider,public service:ServiceProvider,public auth:AuthProvider,private alertCtrl: AlertController) {
    console.log(localStorage.getItem('user_data'));
    // this.userData=JSON.parse(localStorage.getItem('user_data'));
    // console.log(this.userData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.getOrders();
    this.getProfile();
  }

  ionViewWillEnter()
  {
    this.getAddress();
  }

  edit() {
     this.navCtrl.push('EditprofilePage')
  }

  mail() {
    this.navCtrl.push('MessegesPage')
  }

  getOrders()
  {
    const base = this;

    base.api.GET("/AllOrdersLists?page=1").then(function (success : any) {
      console.log(success);
      base.Orders=success.data.orders;
      base.order_length=base.Orders.length;
      console.log(base.Orders);
      // if(success.data.orders.length > 0 ){
      //   for (let i = 0; i < success.data.orders.length; i++) {
      //     base.Orders.push(success.data.orders[i]);
      //   }
      // }
    }).catch( error => {
      console.log(error)
    });
  }

  getAddress()
  {
    const base = this;
    base.api.GET("/myAddresses").then(function (success : any) {
      console.log(success);
      base.Address=success.data;
      base.address_length=base.Address.length;
      // if(success.data.length > 0 ){
      //   for (let i = 0; i < success.data.length; i++) {
      //     base.Address.push(success.data[i]);
      //   }
      // }
    }).catch( error => {
      console.log(error)
    });
  }

  getProfile()
  {
    let base=this;
    base.service.LoaderShowmsg("Loading..")
    base.api.GET("/myProfile").then(function (success : any) {
      base.service.LoaderHide();
      console.log(success.data)
      base.userData=success.data;
      console.log(base.userData)

    }).catch( error => {
      base.service.LoaderHide();
      base.service.Warning(error)
    });
  }

  addnew()
  {
    console.log("add new")
    this.navCtrl.push('AddNewAddressPage');
  }

  remove(id)
  {
    console.log("Remove called");
    let alert = this.alertCtrl.create({
      title: 'Confirm Delete',
      message: 'Do you want to remove this address?',
      mode:'ios',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'yes',
          handler: () => {
            this.service.LoaderShowmsg("Removing your address..")
           this.api.GET('/removeAddresses?id='+id).then((response:any)=>{
            console.log(response)
            this.service.LoaderHide();
            if(response.status=='success')
            {
              this.getAddress();
              this.service.Success('Your address is successfully removed');
            }
           }).catch( error => {
            this.service.LoaderHide();
            console.log(error)
            this.service.Warning('Something went wrong try again later')
          });
          }
        }
      ]
    });
    alert.present();
  }
  seeAllOrders()
  {
    this.navCtrl.push('OrderPage')
  }

  sell()
  {
    this.navCtrl.push('SellerRegistrationPage')
  }

  exchangeList()
  {
    this.navCtrl.push('MyExchangePage')
  }
}
