import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifiedDetailsPage } from './classified-details';

@NgModule({
  declarations: [
    ClassifiedDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifiedDetailsPage),
  ],
})
export class ClassifiedDetailsPageModule {}
