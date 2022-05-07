import * as api from "../api/api";
import { LOGIN, REGISTER } from "../constants/actionTypes";

export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.register(user);

    localStorage.setItem("token", data);
    dispatch({ type: REGISTER, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const { data } = await api.login(user);
    localStorage.setItem("token", data);

    dispatch({ type: LOGIN, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
