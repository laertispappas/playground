import { RootStoreModule } from './root-store.module';
import * as RootStoreSelectors from './selectors';
import * as RootStoreState from './root-state';

export * from './my-feature-store';
export * from './other-feature-store';

export { RootStoreState, RootStoreSelectors, RootStoreModule };
