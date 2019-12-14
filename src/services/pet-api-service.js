import TokenService from '../services/token-service';
import config from '../config';

const PetApiService = {
  getCats() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      headers: {
        Authorization: `bearer ${TokenService.getAuthToken()}`,
        'Content-type': 'application.json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  adoptCat() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      method: 'DELETE',
      headers: {
        Authorization: `${TokenService.getAuthToken()}`,
      },
    })
    .then(res => 
      !res.ok ? res.json().then(e => Promise.reject(e)) : undefined)
},
    
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      headers: {
        'Content-type': 'application.json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  adoptDog() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      method: 'DELETE',
      headers: {
        Authorization: `${TokenService.getAuthToken()}`,
      },
    })
      .then(res => 
        !res.ok ? res.json().then(e => Promise.reject(e)) : undefined
      )
  },
  getLine() {
    return fetch(`${config.API_ENDPOINT}/queue`, {
      headers: {
        Authorization: `${TokenService.getAuthToken()}`,
        'Content-type': 'application.json',
      },
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
};

export default PetApiService;
