const URL = 'http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/30.json?';
const API_Key = 'Ga2zJNG0tqmyLPGaFGWFiZgaHiZzun7Z';
const Base_URL = `${URL}&api-key=${API_Key}`;

// const Base_URL = require('./APIS.js');
/* eslint-disable prettier/prettier */
export class Proxy {
  constructor() {
    this.APIBaseUrl = Base_URL;
    this.url = '';

  }
  api(url) {
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  apiGet(url, data) {
    return fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    });
  }
  async Get_News_by_Query(query) {
    //console.log(Base_URL)
    const result = await this.apiGet(
      Base_URL
    )
      .then(async resp => {
        return resp;
      });
    return result;
  }
  async Get_by_search(keyword) {
    const result = await this.apiGet(
      Base_URL + `&q=${keyword}`
    ).then(async resp => {
      return resp;
    });
    return result;
  }
}
