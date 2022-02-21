import * as api from "../api/api";

import { FETCH_ALL_POSTS } from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({ type: FETCH_ALL_POSTS, payload: data.posts });
  } catch (error) {
    console.log(error);
  }
};
