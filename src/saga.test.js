import { runSaga } from 'redux-saga';
import { REQUESTING_PAYMENTS, ADD_PAYMENT, REQUESTING_INVOICES, ADD_INVOICE } from './constants';
import * as sagas from './saga';
import * as commonSagas from './commonSaga';
import * as helpers from './utils';

describe('requestPayments', () => {
    it('should call dispatch', async () => {
        commonSagas.makeRequest = jest
        .fn()
        .mockImplementationOnce(() => ({ status: 200 }));
      helpers.parseJSON = jest
        .fn()
        .mockImplementationOnce(() => ({ foo: 'bar' }));
      const dispatched = [];
  
      await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => ({ state: 'test' }),
        },
        sagas.requestPayments,
        { payload: { foo: 'bar' } }
      ).toPromise();
  
      expect(dispatched).toEqual([
        { type: REQUESTING_PAYMENTS },
        { type: ADD_PAYMENT, payload: { foo: 'bar' } },
      ]);
    });
})

describe('requestInvoices', () => {
    it('should call dispatch', async () => {
        commonSagas.makeRequest = jest
        .fn()
        .mockImplementationOnce(() => ({ status: 200 }));
      helpers.parseJSON = jest
        .fn()
        .mockImplementationOnce(() => ({ foo: 'bar' }));
      const dispatched = [];
  
      await runSaga(
        {
          dispatch: action => dispatched.push(action),
          getState: () => ({ state: 'test' }),
        },
        sagas.requestInvoices,
        { payload: { foo: 'bar' } }
      ).toPromise();
  
      expect(dispatched).toEqual([
        { type: REQUESTING_INVOICES},
        { type: ADD_INVOICE, payload: { foo: 'bar' } },
      ]);
    });
})