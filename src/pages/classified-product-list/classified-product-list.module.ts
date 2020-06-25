import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifiedProductListPage } from './classified-product-list';

@NgModule({
  declarations: [
    ClassifiedProductListPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifiedProductListPage),
  ],
  exports:[
    ClassifiedProductListPage
  ]
})
export class ClassifiedProductListPageModule {}
