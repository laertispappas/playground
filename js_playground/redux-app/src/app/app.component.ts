import { Component } from '@angular/core';
import {Operation} from "./common/operation.model";
import {State, Store} from "@ngrx/store";

import {ADD_OPERATION, REMOVE_OPERATION, INCREMENT_OPERATION, DECREMENT_OPERATION} from "./common/operations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public id:number = 0 ;
  public operations;

  constructor(private _store: Store<State<Array<Operation>>>) {
    this.operations = _store.select('operations')
  }

  addOperation(operation) {
    this._store.dispatch({ type: ADD_OPERATION, payload: {
      id: ++ this.id, // Simulate id increment
      reason: operation.reason,
      amount: operation.amount
    }});
  }

  incrementOperation(operation){
    this._store.dispatch({type: INCREMENT_OPERATION, payload: operation}) 
  }
  
  decrementOperation(operation) {
    this._store.dispatch({type: DECREMENT_OPERATION, payload: operation})
  } 
    
  deleteOperation(operation) {
    this._store.dispatch({type: REMOVE_OPERATION, payload: operation})
  }

}
