import { LOGIN, LOGIN_USER } from "../constants/actionTypes";

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
      return {
        ...state,
        isLoggedIn: Boolean(window.localStorage.getItem("token")) || false,
      };

    default:
      return state;
  }
};
