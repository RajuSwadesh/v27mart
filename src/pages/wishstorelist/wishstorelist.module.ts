import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WishstorelistPage } from './wishstorelist';

@NgModule({
  declarations: [
    WishstorelistPage,
  ],
  imports: [
    IonicPageModule.forChild(WishstorelistPage),
  ],
})
export class WishstorelistPageModule {}
