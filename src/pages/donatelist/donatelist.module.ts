import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DonatelistPage } from './donatelist';

@NgModule({
  declarations: [
    DonatelistPage,
  ],
  imports: [
    IonicPageModule.forChild(DonatelistPage),
  ],
  exports:[
    DonatelistPage
  ]
})
export class DonatelistPageModule {}
