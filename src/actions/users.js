import * as api from "../api/api";

import {
  FETCH_ALL_USERS,
  REGISTER_USER,
  LOGIN_USER,
} from "../constants/actionTypes";

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();
    dispatch({ type: FETCH_ALL_USERS, payload: data.users });
  } catch (error) {
    console.log(error);
  }
};
export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(user);
    dispatch({ type: REGISTER_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
export const loginUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(user);
    dispatch({ type: LOGIN_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
