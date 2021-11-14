import { axiosInstance } from "../../utils/api/axiosInstance";
import { endPoint } from "../../utils/api/apiEndPointList";
import {
  handleUserInfoSuccess,
  handleUserInfoError,
} from "../actions/userInfoActions";

/**
 * Retrieving user information
 * @param {string} token
 * @returns {object|undefined|error}
 */
export const getUserInfo = (token) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post(
        endPoint.profile,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(
        handleUserInfoSuccess(
          response.data.body.firstName,
          response.data.body.lastName
        )
      );
    } catch (error) {
      dispatch(handleUserInfoError(error.response.data.message));
    }
  };
};

/**
 * Editing user information
 * @param {string} firstName
 * @param {string} lastName
 * @param {string} token
 * @returns {object|undefined|error}
 */
export const editUserInfo = (firstName, lastName, token) => {
  return async (dispatch) => {
    try {
      await axiosInstance.put(
        endPoint.profile,
        { firstName, lastName },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(handleUserInfoSuccess(firstName, lastName));
    } catch (error) {
      dispatch(handleUserInfoError(error));
    }
  };
};
