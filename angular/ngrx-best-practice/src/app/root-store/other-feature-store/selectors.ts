import {
  createFeatureSelector,
  createSelector,
  MemoizedSelector
} from '@ngrx/store';

import { MyModel } from '../../models';

import { State } from './state';

const getError = (state: State): any => state.error;

const getIsLoading = (state: State): boolean => state.isLoading;

const getUser = (state: State): any => state.user;

export const selectMyFeatureState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('otherFeature');

export const selectMyFeatureError: MemoizedSelector<
  object,
  any
> = createSelector(selectMyFeatureState, getError);

export const selectMyFeatureIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectMyFeatureState, getIsLoading);

export const selectMyFeatureUser: MemoizedSelector<
  object,
  MyModel
> = createSelector(selectMyFeatureState, getUser);
