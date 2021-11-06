import { axiosInstance } from "../../utils/api/axiosInstance";
import { endPoint } from "../../utils/api/apiEndPointList";
import {
  getUserInfosSuccess,
  getUserInfosError,
} from "../actions/userInfosActions";

/**
 * User informations management
 * @param {string} token
 * @returns {object|undefined|error}
 */
export const getUserInfos = (token) => {
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post(
        endPoint.profile,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch(
        getUserInfosSuccess(
          response.data.body.firstName,
          response.data.body.lastName
        )
      );
    } catch (error) {
      dispatch(getUserInfosError(error));
    }
  };
};
