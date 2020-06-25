import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessegesPage } from './messeges';

@NgModule({
  declarations: [
    MessegesPage,
  ],
  imports: [
    IonicPageModule.forChild(MessegesPage),
  ],
})
export class MessegesPageModule {}
