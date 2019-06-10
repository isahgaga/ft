import { createRequest } from './utils';
import { call } from 'redux-saga/effects';

//create instance of Request and make fetch request
export function* makeRequest(url, config, payload) {
  try {
    const req = yield call(createRequest, url, { ...config, body: payload });
    const res = yield call(fetch, req);
    return res;
  } catch (error) {
    console.log(error);
  }
}
