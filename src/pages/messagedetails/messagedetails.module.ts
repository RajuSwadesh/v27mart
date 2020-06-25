import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagedetailsPage } from './messagedetails';

@NgModule({
  declarations: [
    MessagedetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MessagedetailsPage),
  ],
})
export class MessagedetailsPageModule {}
