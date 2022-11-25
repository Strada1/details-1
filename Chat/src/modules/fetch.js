import { getToken } from './getToken';

export class Fetch {
  constructor(url, method, ...body) {
    this.url = url;
    this.method = method;
    this.body = JSON.stringify(body);

    if (method === 'GET') {
      return fetch(this.url, {
        method: this.method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: 'Bearer ' + getToken(),
        },
      });
    } else {
      return fetch(this.url, {
        method: this.method,
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          Authorization: 'Bearer ' + getToken(),
        },
        body: this.body,
      });
    }
  }
}
