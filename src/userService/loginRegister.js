import http from "./httpService";
import apiUrl from "../config.json";

const apiEndpoint = apiUrl.apiUrl;

export function register(user) {
  return http.post(apiEndpoint + "/users", {
    name: user.name,
    email: user.email,
    password: user.password,
    confirmPassword: user.repeat_password,
    address: user.address
  });
}

export function login(user) {
  return http.post(apiEndpoint + "/auth", {
    email: user.email,
    password: user.password
  }, {
    withCredentials: true
  });
}

export async function getUser() {
  const result = await http.get(apiEndpoint + "/users/me", {
    withCredentials: true
  });
  return result.data;
};