import { Action } from '@ngrx/store';
import { MyModel } from '../../models';

export enum ActionTypes {
  LOGIN_REQUEST = '[Other Feature] Login Request',
  LOGIN_FAILURE = '[Other Feature] Login Failure',
  LOGIN_SUCCESS = '[Other Feature] Login Success'
}

export class LoginRequestAction implements Action {
  readonly type = ActionTypes.LOGIN_REQUEST;
  constructor(public payload: { userName: string; password: string }) {}
}

export class LoginFailureAction implements Action {
  readonly type = ActionTypes.LOGIN_FAILURE;
  constructor(public payload: { error: string }) {}
}

export class LoginSuccessAction implements Action {
  readonly type = ActionTypes.LOGIN_SUCCESS;
  constructor(public payload: { user: MyModel }) {}
}

export type Actions =
  | LoginRequestAction
  | LoginFailureAction
  | LoginSuccessAction;
