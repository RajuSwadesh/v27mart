import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NearbyAdsPage } from './nearby-ads';

@NgModule({
  declarations: [
    NearbyAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(NearbyAdsPage),
  ],
  exports:[
    NearbyAdsPage
  ]
})
export class NearbyAdsPageModule {}
