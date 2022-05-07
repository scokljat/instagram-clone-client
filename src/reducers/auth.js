import { REGISTER, LOGIN, LOGOUT } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: Boolean(localStorage.getItem("token")),
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return { ...state, isLoggedIn: true, users: payload };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
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
