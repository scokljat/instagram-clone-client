import { LOGIN_USER, LOGOUT_USER } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  if (payload) {
    window.localStorage.setItem("token", payload);
    console.log("I am in login ", payload);
  }
  if (window.localStorage.getItem("token")) state.isLoggedIn = true;
  switch (type) {
    case LOGIN_USER:
      //if (window.localStorage.getItem("token")) state.isLoggedIn = true;
      return {
        ...state,
        isLoggedIn: Boolean(window.localStorage.getItem("token")) || false,
      };
    case LOGOUT_USER:
      window.localStorage.removeItem("token");
      state.isLoggedIn = false;
      return {
        ...state,
      };
    default:
      return state;
  }
};
