import { LOGIN } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
};

export const loginReducer = (state = initialState, { type, payload }) => {
  if (payload) {
    window.localStorage.setItem("token", payload);
    console.log("I am in login ", payload);
  }
  switch (type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: Boolean(window.localStorage.getItem("token")) || false,
      };

    default:
      return state;
  }
};
