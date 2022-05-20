import * as api from "../api/api";
import {
  CREATE_POST,
  FETCH_POSTS,
  DELETE_POST,
  UPDATE_POST,
  SET_ALERT,
} from "../constants/actionTypes";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await api.getPosts();

    dispatch({ type: FETCH_POSTS, payload: response.data });
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: "Error occurred while fetching all posts",
    });
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const response = await api.createPost(post);

    dispatch({ type: CREATE_POST, payload: response.data });

    if (response.status === 200) {
      dispatch({
        type: SET_ALERT,
        payload: "Post has been successfully created",
      });
    }
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: "Error occurred while creating the post",
    });
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const response = await api.deletePost(id);

    dispatch({ type: DELETE_POST, payload: id });

    if (response.status === 200) {
      dispatch({
        type: SET_ALERT,
        payload: "Post has been successfully deleted",
      });
    }
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: "Error occurred while deleting the post",
    });
  }
};

export const updatePost = (post, id) => async (dispatch) => {
  try {
    const response = await api.updatePost(post, id);

    dispatch({ type: UPDATE_POST, payload: response.data });

    if (response.status === 200) {
      dispatch({
        type: SET_ALERT,
        payload: "Post has been successfully edited",
      });
    }
  } catch (error) {
    dispatch({
      type: SET_ALERT,
      payload: "Error occurred while editing the post",
    });
  }
};
