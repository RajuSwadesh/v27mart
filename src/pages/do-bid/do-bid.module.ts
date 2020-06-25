import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DoBidPage } from './do-bid';

@NgModule({
  declarations: [
    DoBidPage,
  ],
  imports: [
    IonicPageModule.forChild(DoBidPage),
  ],
  exports:[
    DoBidPage
  ]
})
export class DoBidPageModule {}
