import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyBiddingHistoryPage } from './my-bidding-history';

@NgModule({
  declarations: [
    MyBiddingHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(MyBiddingHistoryPage),
  ],
  exports:[
    MyBiddingHistoryPage
  ]
})
export class MyBiddingHistoryPageModule {}
