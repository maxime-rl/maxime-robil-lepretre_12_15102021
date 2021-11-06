import { GET_USER_SUCCESS, GET_USER_ERROR } from "./types";

export const getUserInfosSuccess = (firstName, lastName) => {
  return {
    type: GET_USER_SUCCESS,
    payload: {
      firstName,
      lastName,
    },
  };
};

export const getUserInfosError = (error) => {
  return {
    type: GET_USER_ERROR,
    error,
  };
};
