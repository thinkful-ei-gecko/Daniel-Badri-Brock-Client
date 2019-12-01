import config from "../config";

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem("name", token);
  },
  getAuthToken() {
    return window.localStorage.getItem("name");
  },
  clearAuthToken() {
    console.log('clearing')
    window.localStorage.removeItem("name");
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(fullname) {
    return window(`${fullname}`);
  }
};

export default TokenService;
