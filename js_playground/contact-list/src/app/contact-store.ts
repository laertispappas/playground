import { List } from 'immutable';

import { createStore } from 'redux';
import { IContactAction } from './actions';
import { reducer } from './reducer';

export class Contact {
  id: number;
  name: String;
  star: boolean;
}

export class ContactStore {
  store = createStore(reducer, List<Contact>());

  get contacts(): List<Contact> {
    return this.store.getState();
  }

  dispatch(action: IContactAction) {
    this.store.dispatch(action);
  }
}
