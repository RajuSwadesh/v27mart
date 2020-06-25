import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationFilterPage } from './donation-filter';

@NgModule({
  declarations: [
    DonationFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationFilterPage),
  ],
  exports:[
    DonationFilterPage
  ]
})
export class DonationFilterPageModule {}
