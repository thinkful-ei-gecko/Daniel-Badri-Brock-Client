
const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem("name", token);
  },
  getAuthToken() {
    return window.localStorage.getItem("name");
  },
  clearAuthToken() {
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
