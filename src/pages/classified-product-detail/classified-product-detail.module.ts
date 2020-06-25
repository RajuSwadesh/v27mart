import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifiedProductDetailPage } from './classified-product-detail';

@NgModule({
  declarations: [
    ClassifiedProductDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifiedProductDetailPage),
  ],
  exports:[
    ClassifiedProductDetailPage
  ]
})
export class ClassifiedProductDetailPageModule {}
