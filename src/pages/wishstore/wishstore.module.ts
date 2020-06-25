import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishstorePage } from './wishstore';

@NgModule({
  declarations: [
    WishstorePage,
  ],
  imports: [
    IonicPageModule.forChild(WishstorePage),
  ],
})
export class WishstorePageModule {}
