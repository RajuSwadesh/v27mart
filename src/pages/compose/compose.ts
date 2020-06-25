import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ComposePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-compose',
  templateUrl: 'compose.html',
})
export class ComposePage {

  showList: boolean = false;
  items: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComposePage');
  }

  initializeItems() {
    this.items = [
      {img:"https://randomuser.me/api/portraits/men/9.jpg",name:"Timmothy Evans"},
      {img:"https://randomuser.me/api/portraits/men/15.jpg",name:"Reginald Fox"},
      {img:"https://randomuser.me/api/portraits/women/51.jpg",name:"Rosemary Burke"},
      {img:"https://randomuser.me/api/portraits/women/79.jpg",name:"Marian Reid"},
      {img:"https://randomuser.me/api/portraits/men/75.jpg",name:"Wesley Hernandez"},
      {img:"https://randomuser.me/api/portraits/men/19.jpg",name:"Dwayne Bishop"}
    ]
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {

      // Filter the items
 /*     this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });*/

      // Show the results
      this.showList = true;
    } else {

      // hide the results when the query is empty
      this.showList = false;
    }
  }

}
