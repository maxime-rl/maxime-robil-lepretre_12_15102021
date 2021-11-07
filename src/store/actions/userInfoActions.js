import { HANDLE_USER_INFO_SUCCESS, HANDLE_USER_INFO_ERROR } from "./types";

export const handleUserInfoSuccess = (firstName, lastName) => {
  return {
    type: HANDLE_USER_INFO_SUCCESS,
    payload: {
      firstName,
      lastName,
    },
  };
};

export const handleUserInfoError = (error) => {
  return {
    type: HANDLE_USER_INFO_ERROR,
    error,
  };
};
