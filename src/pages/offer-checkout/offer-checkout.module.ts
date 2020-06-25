import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferCheckoutPage } from './offer-checkout';

@NgModule({
  declarations: [
    OfferCheckoutPage,
  ],
  imports: [
    IonicPageModule.forChild(OfferCheckoutPage),
  ],
  exports:[
    OfferCheckoutPage
  ]
})
export class OfferCheckoutPageModule {}
