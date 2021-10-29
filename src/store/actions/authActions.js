import { LOGIN, LOGOUT } from "./types";

export const login = (email, password, token) => {
  return {
    type: LOGIN,
    email,
    password,
    token,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
