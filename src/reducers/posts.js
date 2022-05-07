import { FETCH_POSTS } from "../constants/actionTypes";

const initialState = {
  posts: [],
};

export const reducerPosts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, posts: payload };

    default:
      return state;
  }
};
