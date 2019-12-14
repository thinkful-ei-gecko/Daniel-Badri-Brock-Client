
const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem("id", token);
  },
  getAuthToken() {
    return window.localStorage.getItem("id");
  },
  clearAuthToken() {
    window.localStorage.removeItem("id");
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(fullname) {
    return window(`${fullname}`);
  }
};

export default TokenService;
