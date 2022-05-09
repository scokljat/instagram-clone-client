import * as api from "../api/api";
import { FETCH_USER } from "../constants/actionTypes";

export const getUser = (id) => async (dispatch) => {
  try {
    const { data } = await api.getUser(id);

    dispatch({ type: FETCH_USER, payload: data });
  } catch (error) {
    console.log(error);
  }
};
