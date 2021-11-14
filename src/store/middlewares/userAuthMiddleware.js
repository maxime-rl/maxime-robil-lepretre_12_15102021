import { axiosInstance } from "../../utils/api/axiosInstance";
import { endPoint } from "../../utils/api/apiEndPointList";
import {
  loginPending,
  loginSuccess,
  loginError,
} from "../actions/userAuthActions";

/**
 * User authentification management
 * @param {string} email
 * @param {string} password
 * @returns {object|undefined|error}
 */
export const userAuth = (email, password) => {
  return async (dispatch) => {
    dispatch(loginPending());
    try {
      const response = await axiosInstance.post(endPoint.login, {
        email,
        password,
      });
      dispatch(loginSuccess(email, password, response.data.body.token));
    } catch (error) {
      dispatch(loginError(error.response.data.message));
    }
  };
};
