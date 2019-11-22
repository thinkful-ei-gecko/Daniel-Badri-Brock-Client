export default {
  API_ENDPOINT: "http://localhost:8080/api",
  TOKEN_KEY: "Petful-Client-Auth-Token",
  API_KEY: process.env.PETFUL_APP_API_KEY,
  JWT_SECRET: process.env.JWT_SECRET || 'change-this-secret',
};
