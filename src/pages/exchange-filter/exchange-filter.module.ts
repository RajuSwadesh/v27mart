import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeFilterPage } from './exchange-filter';

@NgModule({
  declarations: [
    ExchangeFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeFilterPage),
  ],
  exports:[
    ExchangeFilterPage
  ]
})
export class ExchangeFilterPageModule {}
