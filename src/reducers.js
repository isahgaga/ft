import { combineReducers } from 'redux';
import {
    ADD_INVOICE,
    ADD_PAYMENT
} from './constants';

export const tokenSelector = state => state.token;
export const dataSelector = state => state.data;

export const invoices = (state = [], { type, payload }) => {
  switch (type) {
    case ADD_INVOICE:
      return payload.data;
    default:
      return state;
  }
};

export const payments = (state = [], { type, payload }) => {
    switch (type) {
      case ADD_PAYMENT:
        return payload.data;
      default:
        return state;
    }
  };



const rootReducer = combineReducers({
  payments,
  invoices
});

export default rootReducer;
