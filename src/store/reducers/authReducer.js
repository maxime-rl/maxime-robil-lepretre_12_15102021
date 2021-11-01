import { initialState } from "./initialState";
import {
  LOGIN_PENDING,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
} from "../actions/types";

/**
 * Authentification reducer
 * @param {object} state
 * @param {object} action
 * @returns {array}
 */
export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN_PENDING:
      return {
        ...state,
        isLogging: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLogging: false,
        isLogged: true,
        error: null,
        email: payload.email,
        password: payload.password,
        token: payload.token,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
