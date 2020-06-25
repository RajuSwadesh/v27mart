import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifiedAddPage } from './classified-add';

@NgModule({
  declarations: [
    ClassifiedAddPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifiedAddPage),
  ],
})
export class ClassifiedAddPageModule {}
