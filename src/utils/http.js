import { Observable } from 'rxjs/Rx';

let instance = null;

class Http {
  constructor() {
    if(!instance){
      instance = this;
    }
    return instance;
  }

  request({url, queryParams, method = 'get', body, headers }) {
    url += this.getQueryParams(queryParams);

    let ok = true;

    let request = Observable.fromPromise(
      fetch(url)
        .then(
          (result) => {
            return result.json();
          },
          (error) => {
            console.log('Something unexpected happened');
            throw error;
          }
        )
      );

    return request;
  }

  get(url, queryParams = {}, headers = {}) {
    return this.request({url, queryParams, headers});
  }

  post(url, body, queryParams = {}, headers = {}) {
    return this.request({url, queryParams, method: 'post', body, headers});
  }

  put(url, body, queryParams = {}, headers = {}) {
    return this.request({url, queryParams, method: 'put', body, headers});
  }

  delete(url, queryParams = {}, headers = {}) {
    return this.request({url, queryParams, method: 'delete', headers})
  }

  getQueryParams(params = {}) {
    let queryParams = Object.keys(params).map(key => !!params[key] ? `${key}=${window.encodeURIComponent(params[key])}` : '').join('&');
    return !!queryParams ? '?' + queryParams : '';
  }

  getHeaders(headers) {
    headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...headers
    };
    return headers;
  }
}

export const http = new Http();
