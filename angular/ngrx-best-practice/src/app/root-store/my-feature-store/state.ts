import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { MyModel } from '../../models';

export const featureAdapter: EntityAdapter<MyModel> = createEntityAdapter<
  MyModel
>({
  selectId: model => model.id,
  sortComparer: (a: MyModel, b: MyModel): number =>
    b.id.toString().localeCompare(a.id.toString())
});

export interface State extends EntityState<MyModel> {
  isLoading?: boolean;
  error?: any;
}

export const initialState: State = featureAdapter.getInitialState({
  isLoading: false,
  error: null
});
