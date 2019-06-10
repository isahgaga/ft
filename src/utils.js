
/**
 * create instance of Request
 *
 * @param {string} url - A valid url
 * @param {object} config - config object
 * @param {string} config.method - config object
 * @param {string} config.headers - config object
 * @return {Request}
 *
 */
export const createRequest = (url = '', config = {}) => {
  const validMethods = ['GET', 'POST', 'HEAD', 'PUT', 'DELETE', 'PATCH'];
  const defaultconfig = {
    mode: 'cors',
    cache: 'default',
    credentials: 'same-origin',
  };
  const defaultHeaders = new Headers();
  defaultHeaders.set('Content-Type', 'application/json');

  defaultHeaders.set('Accept', `application/json`);

  if (typeof config.method !== 'string') {
    throw new TypeError('config method property must be a string.');
  }

  if (validMethods.indexOf(config.method.toUpperCase()) === -1) {
    throw Error(
      "config method property value most be one of ['GET','POST','HEAD','PUT','DELETE']"
    );
  }

  config.headers = config.headers || defaultHeaders;

  if (config.headers && !(config.headers instanceof Headers)) {
    throw new TypeError('config headers property must be of type Headers.');
  }

  const requestConfig = {
    ...defaultconfig,
    ...config,
  };
  return new Request(url, requestConfig);
};

export const parseJSON = response => response.json();
