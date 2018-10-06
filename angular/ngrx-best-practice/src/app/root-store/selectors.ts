import { createSelector, MemoizedSelector } from '@ngrx/store';
import { MyFeatureStoreSelectors } from './my-feature-store';

import { OtherFeatureStoreSelectors } from './other-feature-store';

export const selectError: MemoizedSelector<object, string> = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureError,
  OtherFeatureStoreSelectors.selectOtherFeatureError,
  (myFeatureError: string, myOtherFeatureError: string) => {
    return myFeatureError || myOtherFeatureError;
  }
);

export const selectIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(
  MyFeatureStoreSelectors.selectMyFeatureIsLoading,
  OtherFeatureStoreSelectors.selectOtherFeatureIsLoading,
  (myFeature: boolean, myOtherFeature: boolean) => {
    return myFeature || myOtherFeature;
  }
);
