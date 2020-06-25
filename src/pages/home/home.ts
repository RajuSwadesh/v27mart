import { Component } from '@angular/core';
import { NewTransactionPage } from '../instamojo/new_transaction';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  newTransaction() {
    this.navCtrl.push(NewTransactionPage, {
      amount: 10
    });
  }

  constructor(public navCtrl: NavController) {

  }

}
