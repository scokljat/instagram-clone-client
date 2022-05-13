import * as api from "../api/api";
import { FETCH_LIKES, LIKE_POST } from "../constants/actionTypes";

export const likePost = (like) => async (dispatch) => {
  try {
    const { data } = await api.likePost(like);

    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getLikes = () => async (dispatch) => {
  try {
    const { data } = await api.getLikes();

    dispatch({ type: FETCH_LIKES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
