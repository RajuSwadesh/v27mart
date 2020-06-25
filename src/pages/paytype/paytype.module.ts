import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaytypePage } from './paytype';

@NgModule({
  declarations: [
    PaytypePage,
  ],
  imports: [
    IonicPageModule.forChild(PaytypePage),
  ],
})
export class PaytypePageModule {}
