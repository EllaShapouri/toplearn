import http from "./Httpservices";

import config from "./applicationAPI.json";

export const registerUser = (user) => {
  return http.post(`${config.toplearnapi}/api/register`, JSON.stringify(user));
};

export const loginUser = (user) => {
  return http.post(`${config.toplearnapi}/api/login`, JSON.stringify(user));
};
