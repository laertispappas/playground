import { MyModel } from '../../models';

export interface State {
  user: MyModel | null;
  isLoading: boolean;
  error: string;
}

export const initialState: State = {
  user: null,
  isLoading: false,
  error: null
};
