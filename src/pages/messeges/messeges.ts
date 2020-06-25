import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-messeges',
  templateUrl: 'messeges.html',
})
export class MessegesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessegesPage');
  }

  compose(){
    this.navCtrl.push('ComposePage')
  }

  inbox() {
    this.navCtrl.push('InboxPage')
  }
}
