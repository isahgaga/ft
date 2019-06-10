import {
    REQUEST_INVOICES,
     ADD_INVOICE,
     REQUEST_INVOICES_URI,
     REQUEST_INVOICES_ERROR,
     REQUESTING_INVOICES,
     REQUEST_PAYMENTS,
     REQUESTING_PAYMENTS,
     ADD_PAYMENT,
     REQUEST_PAYMENTS_ERROR,
     REQUEST_PAYMENTS_URI,
     POST,
     GET,
     REQUEST_ADD_INVOICE,
     REQUESTING_ADD_INVOICE,
     REQUEST_ADD_INVOICES_URI,
     REQUEST_ADD_INVOICES_ERROR
  } from './constants';
  import { parseJSON } from './utils';
  import { call, put, takeLatest, all } from 'redux-saga/effects';
  import { makeRequest } from './commonSaga';
  
  
  
  export function* addInvoices({ payload }) {
    //dispatch REQUESTING_ADD_INVOICE action
    yield put({ type: REQUESTING_ADD_INVOICE });
    try {
      // make fetch request
      const res = yield call(
        makeRequest,
        REQUEST_ADD_INVOICES_URI,
        { method: POST },
        payload
      );
  
      if (res.status === 200) {
        const resJson = yield call(parseJSON, res);
        // dispatch ADD_INVOICE action
        yield put({ type: ADD_INVOICE, payload: resJson });
        return;
      }
      if (res.status >= 400) {
        /**
         * handle errors
         * form error
         * server error
         * 404
         */
  
        // dispatch REQUEST_ADD_INVOICES_ERROR action
        yield put({ type: REQUEST_ADD_INVOICES_ERROR });
        return;
      }
    } catch (error) {
      yield put({ type: REQUEST_ADD_INVOICES_ERROR });
    }
  }
  // subscribe for REQUEST_ADD_INVOICE events/ actions
  export function* addInvoicesWatcher() {
    yield takeLatest(REQUEST_ADD_INVOICE, addInvoices);
  }

  export function* requestInvoices({ payload }) {
    //dispatch REQUESTING_INVOICES action
    yield put({ type: REQUESTING_INVOICES });
    try {
      // make fetch request
      const res = yield call(
        makeRequest,
        REQUEST_INVOICES_URI,
        { method: GET },
        payload
      );
  
      if (res.status === 200) {
        const resJson = yield call(parseJSON, res);
        // dispatch ADD_INVOICE action
        yield put({ type: ADD_INVOICE, payload: resJson });
        return;
      }
      if (res.status >= 400) {
        /**
         * handle errors
         * form error
         * server error
         * 404
         */
  
        // dispatch REQUEST_INVOICES_ERROR action
        yield put({ type: REQUEST_INVOICES_ERROR });
        return;
      }
    } catch (error) {
      yield put({ type: REQUEST_INVOICES_ERROR });
    }
  }
  // subscribe for REQUEST_INVOICES events/ actions
  export function* requestInvoicesWatcher() {
    yield takeLatest(REQUEST_INVOICES, requestInvoices);
  }
  
  
  
  export function* requestPayments({ payload, token }) {
  
  
    //dispatch REQUESTING_PAYMENTS action
    yield put({ type: REQUESTING_PAYMENTS });
  
    try {
      // make fetch request
      const res = yield call(
        makeRequest,
        REQUEST_PAYMENTS_URI,
        { method: POST },
        payload
      );
  
      if (res.status === 200) {
        const resJson = yield call(parseJSON, res);
  
        // dispatch ADD_PAYMENT action
        yield put({ type: ADD_PAYMENT, payload: resJson });
        return;
      }
      if (res.status >= 400) {
        /**
         * handle errors
         * form error
         * server error
         * 404
         */
  
        // dispatch REQUEST_PAYMENTS_ERROR action
        yield put({ type: REQUEST_PAYMENTS_ERROR });
        return;
      }
    } catch (error) {
      yield put({ type: REQUEST_PAYMENTS_ERROR });
    }
  }
  
  // subscribe for REQUEST_PAYMENTS events/ actions
  export function* requestPaymentsWatcher() {
    yield takeLatest(REQUEST_PAYMENTS, requestPayments);
  }
  
  
  
  export default function* rootSaga() {
    yield all([
        requestInvoicesWatcher(),
        requestPaymentsWatcher(),
        addInvoicesWatcher()
    ]);
  }
  