import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFeatureStoreModule } from './my-feature-store/my-feature-store.module';
import { OtherFeatureStoreModule } from './other-feature-store/other-feature-store.module';

@NgModule({
  imports: [
    CommonModule,
    MyFeatureStoreModule,
    OtherFeatureStoreModule
  ],
  declarations: []
})
export class RootStoreModule { }
