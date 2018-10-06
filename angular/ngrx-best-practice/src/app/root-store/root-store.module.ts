import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { MyFeatureStoreModule } from './my-feature-store/';
import { OtherFeatureStoreModule } from './other-feature-store/';

@NgModule({
  imports: [
    CommonModule,
    MyFeatureStoreModule,
    OtherFeatureStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([])
  ],
  declarations: []
})
export class RootStoreModule {}
