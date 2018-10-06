import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeatureStoreModule } from './my-feature-store/my-feature-store.module';

@NgModule({
  imports: [
    CommonModule,
    MyFeatureStoreModule
  ],
  declarations: []
})
export class RootStoreModule { }
