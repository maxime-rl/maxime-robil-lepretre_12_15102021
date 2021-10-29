import { LOGIN, LOGOUT } from "../actions/types";

const initialState = {
  isLoggedIn: false,
  email: "",
  password: "",
  id: "",
  firstName: "",
  lastName: "",
  token: "",
};

export default function authReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        email: payload.email,
        password: payload.password,
        token: payload.token,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
