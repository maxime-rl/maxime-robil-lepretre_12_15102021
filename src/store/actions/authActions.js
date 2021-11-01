import { LOGIN_PENDING, LOGIN_SUCCESS, LOGIN_ERROR, LOGOUT } from "./types";

export const loginPending = () => {
  return {
    type: LOGIN_PENDING,
  };
};

export const loginSuccess = (email, password, token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      email,
      password,
      token,
    },
  };
};

export const loginError = (error) => {
  return {
    type: LOGIN_ERROR,
    error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};
