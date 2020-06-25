import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonationdetailsPage } from './donationdetails';

@NgModule({
  declarations: [
    DonationdetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(DonationdetailsPage),
  ],
})
export class DonationdetailsPageModule {}
