import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SellerRegistrationPage } from './seller-registration';

@NgModule({
  declarations: [
    SellerRegistrationPage,
  ],
  imports: [
    IonicPageModule.forChild(SellerRegistrationPage),
  ],
  exports:[
    SellerRegistrationPage
  ]
})
export class SellerRegistrationPageModule {}
