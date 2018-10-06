import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MyModel } from './models';

import {
  RootStoreState,
  MyFeatureStoreActions,
  MyFeatureStoreSelectors
} from './root-store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myFeatureItems$: Observable<MyModel[]>;
  error$: Observable<string>;
  isLoading$: Observable<boolean>;

  title = 'ngrx-best-practice';

  constructor(private store$: Store<RootStoreState.RootState>) {}

  ngOnInit() {
    this.myFeatureItems$ = this.store$.select(
      MyFeatureStoreSelectors.selectAllMyFeatureItems
    );

    this.error$ = this.store$.select(
      MyFeatureStoreSelectors.selectMyFeatureError
    );

    this.isLoading$ = this.store$.select(
      MyFeatureStoreSelectors.selectMyFeatureIsLoading
    );

    this.store$.dispatch(new MyFeatureStoreActions.LoadRequestAction());
  }
}
