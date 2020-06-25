import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExchangeRequestPage } from './exchange-request';

@NgModule({
  declarations: [
    ExchangeRequestPage,
  ],
  imports: [
    IonicPageModule.forChild(ExchangeRequestPage),
  ],
  exports:[
    ExchangeRequestPage
  ]
})
export class ExchangeRequestPageModule {}
