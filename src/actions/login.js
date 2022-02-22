import * as api from "../api/api";

import { LOGIN_USER } from "../constants/actionTypes";

export const isLogin = (isLoggedIn) => ({
  type: "LOGIN",
  payload: isLoggedIn,
});

export const setLoginUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(user);
    console.log("this is my data", data);
    if (data) {
      console.log("I am here");
    }
    dispatch({ type: LOGIN_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
