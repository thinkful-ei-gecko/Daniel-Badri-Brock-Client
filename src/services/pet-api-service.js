import TokenService from "../services/token-service";
import config from "../config";

const PetApiService = {
  getCats() {
    return fetch(`${config.API_ENDPOINT}/cats`, {
      headers: {
        // Authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // getCat(cat_id) {
  //   return fetch(`${config.API_ENDPOINT}/cats/${cat_id}`, {
  //     headers: {
  //       Authorization: `bearer ${TokenService.getAuthToken()}`
  //     }
  //   }).then(res =>
  //     !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
  //   );
  // },
  getDogs() {
    return fetch(`${config.API_ENDPOINT}/dogs`, {
      headers: {
        //Authorization: `bearer ${TokenService.getAuthToken()}`
        "Content-type": "application.json"
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  // getdog(dog_id) {
  //   return fetch(`${config.API_ENDPOINT}/dogs/${dog_id}`, {
  //     headers: {
  //       Authorization: `bearer ${TokenService.getAuthToken()}`
  //     }
  //   }).then(res =>
  //     !res.osk ? res.json().then(e => Promise.reject(e)) : res.json()
  //   );
  // },
  
};

export default PetApiService;
