import { HttpError } from '../error/HttpError';
import { URLS, HTTP_METHOD } from '../const';

export class Request {
  constructor(methods, urls) {
    this.methods = methods;
    this.urls = urls;
  }

  async sendAuthorization(body = null) {
    const headers = { 'Content-type': 'application/json; charset=utf-8' };
    const response = await fetch(this.urls.AUTHORIZATION, {
      method: this.methods.POST,
      body: JSON.stringify(body),
      headers,
    });
    if (response.ok) {
      return response.json();
    }
    throw new HttpError(response);
  }

  async sendChangeName(token, body = null) {
    const headers = {
      'Content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(this.urls.AUTHORIZATION, {
      method: this.methods.PATCH,
      body: JSON.stringify(body),
      headers,
    });
    if (response.ok) {
      return response.json();
    }
    throw new HttpError(response);
  }

  async getName(token) {
    const headers = {
      'Content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(this.urls.USER, {
      method: this.methods.GET,
      headers,
    });
    if (response.ok) {
      return response.json();
    }
    throw new HttpError(response);
  }

  async getMessageHistory(token) {
    const headers = {
      'Content-type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    };
    const response = await fetch(this.urls.MESSAGES, {
      method: this.methods.GET,
      headers,
    });
    if (response.ok) {
      return response.json();
    }
    throw new HttpError(response);
  }
}

export const request = new Request(HTTP_METHOD, URLS);
