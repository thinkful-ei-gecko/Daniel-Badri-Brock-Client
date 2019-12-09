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
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
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
      .then(res => {
        if (!res.ok) {
          return res.json().then(error => {
            throw error;
          });
        }
      })
      .catch(error => {
        console.error(error);
      });
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
