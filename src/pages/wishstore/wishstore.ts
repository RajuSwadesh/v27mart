import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-wishstore',
  templateUrl: 'wishstore.html',
})
export class WishstorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WishstorePage');
  }
  wishstorelist() {
    this.navCtrl.push('WishstorelistPage');
  }
}
