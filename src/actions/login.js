import * as api from "../api/api";

import { LOGIN_USER, LOGOUT_USER, LOGIN } from "../constants/actionTypes";

export const isLogin = (isLoggedIn) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN, payload: isLoggedIn });
  } catch (error) {
    console.log(error);
  }
};

export const isLogout = (isLoggedIn) => async (dispatch) => {
  try {
    dispatch({ type: LOGOUT_USER, payload: isLoggedIn });
  } catch (error) {
    console.log(error);
  }
};

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
