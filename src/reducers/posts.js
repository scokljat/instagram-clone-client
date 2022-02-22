import { FETCH_ALL_POSTS } from "../constants/actionTypes";

const initialState = {
  posts: [],
};

export const reducerPosts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_POSTS:
      return { ...state, posts: payload };

    default:
      return state;
  }
};
