import { assert } from 'chai';
import { createRequest } from './utils';


describe('createRequest', () => {
  const url = 'http://url';

  it('should throw error if config.method is undefined', () => {
    assert.throws(
      () => createRequest(url),
      'config method property must be a string.'
    );
  });

  it(`should throw error if config.method is not one of ['GET','POST','HEAD','PUT','DELETE']`, () => {
    assert.throws(
      () => createRequest(url, { method: 'foo' }),
      `config method property value most be one of ['GET','POST','HEAD','PUT','DELETE']`
    );
  });

  it(`should throw error if config.headers is not of type Headers`, () => {
    assert.throws(
      () => createRequest(url, { method: 'GET', headers: {} }),
      `config headers property must be of type Headers.`
    );
  });

  it(`should return instance of Request`, () => {
    assert.instanceOf(
      createRequest(url, { method: 'GET', headers: new Headers() }),
      Request
    );
  });
});
