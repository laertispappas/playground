import { MyFeatureStoreState } from './my-feature-store';

/*
  Root state interface to hold all our application state.
*/
export interface RootState {
  myFeature: MyFeatureStoreState.State;
}
