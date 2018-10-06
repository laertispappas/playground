import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import * as featureActions from './actions';
import { AuthService } from '../../services/auth.service';
import { Session } from '../../models';

@Injectable()
export class MyFeatureStoreEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  @Effect()
  loginRequestEffect$: Observable<Action> = this.actions$.pipe(
    ofType<featureActions.LoginRequestAction>(
      featureActions.ActionTypes.LOGIN_REQUEST
    ),
    switchMap(action =>
      this.authService
        .create(new Session(action.payload.userName, action.payload.password))
        .pipe(
          map(
            user =>
              new featureActions.LoginSuccessAction({
                user
              })
          ),
          catchError(error =>
            observableOf(new featureActions.LoginFailureAction({ error }))
          )
        )
    )
  );
}
