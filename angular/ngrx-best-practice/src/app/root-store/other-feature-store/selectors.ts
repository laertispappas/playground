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

export const selectOtherFeatureState: MemoizedSelector<
  object,
  State
> = createFeatureSelector<State>('otherFeature');

export const selectOtherFeatureError: MemoizedSelector<
  object,
  any
> = createSelector(selectOtherFeatureState, getError);

export const selectOtherFeatureIsLoading: MemoizedSelector<
  object,
  boolean
> = createSelector(selectOtherFeatureState, getIsLoading);

export const selectOtherFeatureUser: MemoizedSelector<
  object,
  MyModel
> = createSelector(selectOtherFeatureState, getUser);
