import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditDonationPage } from './edit-donation';

@NgModule({
  declarations: [
    EditDonationPage,
  ],
  imports: [
    IonicPageModule.forChild(EditDonationPage),
  ],
  exports:[
    EditDonationPage
  ]
})
export class EditDonationPageModule {}
