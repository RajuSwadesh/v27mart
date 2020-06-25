import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifiedAdsPage } from './classified-ads';

@NgModule({
  declarations: [
    ClassifiedAdsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifiedAdsPage),
  ],
  exports:[
    ClassifiedAdsPage
  ]
})
export class ClassifiedAdsPageModule {}
