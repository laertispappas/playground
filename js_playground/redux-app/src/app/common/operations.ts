import { ActionReducer, Action, State } from '@ngrx/store';
import { Operation } from './operation.model';



// Action definition
export const ADD_OPERATION = 'Add an operation';
export const REMOVE_OPERATION = 'Removes an operation';
export const INCREMENT_OPERATION = 'Increment an operation';
export const DECREMENT_OPERATION = 'Decrement an operation';

// const initialState: State<any>[] = new Array<any>();
const initialState = Array<Operation>();

export const operationsReducer: ActionReducer<Array<Operation>> = (state: Array<Operation> = initialState, action: Action) => {
    switch (action.type) {
        case ADD_OPERATION:
            const payload: Operation = action.payload
            return [...state, payload];

        case INCREMENT_OPERATION:
            const amount = ++action.payload.amount;
            return state.map(item => {
                return item.id === action.payload.id ? Object.assign({}, item, amount) : item;
            });

        case DECREMENT_OPERATION:
            const operation = --action.payload.amount;
            return state.map(item => {
                return item.id === action.payload.id ? Object.assign({}, item, operation) : item;
            });

        case REMOVE_OPERATION:
            return state.filter(operation => {
                return operation.id !== action.payload.id;
            });

        default:
            return state;
    }
} 