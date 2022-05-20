import * as api from "../api/api";
import jwtDecode from "jwt-decode";
import { LOGIN, REGISTER, SET_ALERT } from "../constants/actionTypes";

export const registerUser = (user) => async (dispatch) => {
  try {
    const response = await api.register(user);

    localStorage.setItem("token", response.data);

    const decoded = jwtDecode(response.data);

    dispatch({
      type: REGISTER,
      payload: { data: response.data, decoded: decoded.id },
    });
    if (response.status === 200) {
      dispatch({ type: SET_ALERT, payload: "You are successfully signed up" });
    }
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: "Something went wrong,try again" });
  }
};

export const login = (user) => async (dispatch) => {
  try {
    const response = await api.login(user);

    localStorage.setItem("token", response.data);

    const decoded = jwtDecode(response.data);

    dispatch({
      type: LOGIN,
      payload: { data: response.data, decoded: decoded.id },
    });

    if (response.status === 200) {
      dispatch({ type: SET_ALERT, payload: "You are successfully logged in" });
    }
  } catch (error) {
    dispatch({ type: SET_ALERT, payload: "Something went wrong,try again" });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
};
