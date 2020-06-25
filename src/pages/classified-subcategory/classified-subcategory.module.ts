import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClassifiedSubcategoryPage } from './classified-subcategory';

@NgModule({
  declarations: [
    ClassifiedSubcategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ClassifiedSubcategoryPage),
  ],
  exports:[
    ClassifiedSubcategoryPage
  ]
})
export class ClassifiedSubcategoryPageModule {}
