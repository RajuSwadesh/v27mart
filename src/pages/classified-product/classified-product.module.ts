import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifiedProductPage } from './classified-product';

@NgModule({
  declarations: [
    ClassifiedProductPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifiedProductPage),
  ],
})
export class ClassifiedProductPageModule {}
