import Cookies from "cookies-ts";
import { URL } from './const.js';

const cookies = new Cookies();

class ServerError extends Error {
    constructor(message: string) {
      super(message);
      this.name = 'ValidationError';
    }
  }

export function saveCoockies(key: string, value: string): void {
  cookies.set(key, `${value}`);
}

export async function getHistoryUser(url: string) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${cookies.get('authorization')}`
        }
      });
  
      if (!response.ok) {
        throw new ServerError('data fetch error');
      }
  
      return await response.json();
    } catch (err) {
      if (err instanceof ServerError) {
        console.log(err.message);
      } else {
        throw err;
      }
    }
  }

export async function sendEmail(email: string, method: string) {
    try {
      const response = await fetch(URL.ACCEPT, {
        method: method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Bearer ${cookies.get('authorization')}`
        },
        body: JSON.stringify({ email })
      });
  
      if (!response.ok) {
        throw new ServerError('request not sent');
      }
      
      return await response.json();
    } catch (err) {
      if (err instanceof ServerError) {
        console.log(err.message);
      } else {
        throw err;
      }
    }
  }

export async function addName(name: string, method: string) {
  try {
    const response = await fetch(URL.ACCEPT, {
      method: method,
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Bearer ${cookies.get('authorization')}`
      },
      body: JSON.stringify({ name })
    });

    if (!response.ok) {
      throw new ServerError('request not sent');
    }
    
    return await response.json();
  } catch (err) {
    if (err instanceof ServerError) {
      console.log(err.message);
    } else {
      throw err;
    }
  }
}


