import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyExchangePage } from './my-exchange';

@NgModule({
  declarations: [
    MyExchangePage,
  ],
  imports: [
    IonicPageModule.forChild(MyExchangePage),
  ],
  exports:[
    MyExchangePage
  ]
})
export class MyExchangePageModule {}
