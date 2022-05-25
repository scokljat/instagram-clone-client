import * as api from "../api/api";
import { LIKE_POST } from "../constants/actionTypes";

export const likePost = (like) => async (dispatch) => {
  try {
    const { data } = await api.likePost(like);

    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const dislikePost = (dislike) => async (dispatch) => {
  try {
    const { data } = await api.dislikePost(dislike);

    dispatch({ type: LIKE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};
