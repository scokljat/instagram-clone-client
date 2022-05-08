import { REGISTER, LOGIN, LOGOUT } from "../constants/actionTypes";
import jwtDecode from "jwt-decode";

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
  userId: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        isLoggedIn: true,
        users: payload,
        userId: jwtDecode(payload),
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userId: payload.decoded,
      };
    // case LOGOUT:
    //   return {
    //     ...state,
    //     isLoggedIn: false,
    //   };
    default:
      return state;
  }
};
