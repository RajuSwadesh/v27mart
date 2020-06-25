import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SellerpagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sellerpage',
  templateUrl: 'sellerpage.html',
})
export class SellerpagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerpagePage');
  }

  reviews() {
    this.navCtrl.push('ReviewsPage')
  }

  products() {
    this.navCtrl.push('ProductsPage')

  }
}
