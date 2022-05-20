import * as api from "../api/api";
import { FETCH_USER, UPDATE_USER, SET_ALERT } from "../constants/actionTypes";

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);

    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: "Error occurred while fetching the user",
    });
  }
};

export const updateUser = (user, id) => async (dispatch) => {
  try {
    const response = await api.updateUser(user, id);

    dispatch({ type: UPDATE_USER, payload: response.data });
    if (response.status === 200) {
      dispatch({
        type: SET_ALERT,
        payload: "User has been successfully edited",
      });
    }
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: "Error occurred while editing the user",
    });
  }
};
