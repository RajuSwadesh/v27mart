import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyClassifiedPage } from './my-classified';

@NgModule({
  declarations: [
    MyClassifiedPage,
  ],
  imports: [
    IonicPageModule.forChild(MyClassifiedPage),
  ],
})
export class MyClassifiedPageModule {}
