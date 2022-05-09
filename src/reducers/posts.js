import {
  FETCH_POSTS,
  FETCH_USER_POSTS,
  CREATE_POST,
} from "../constants/actionTypes";

const initialState = {
  posts: [],
  userPosts: [],
};

export const reducerPosts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, posts: payload };
    case FETCH_USER_POSTS:
      return { ...state, userPosts: payload };
    case CREATE_POST:
      return [...state.posts, payload];
    default:
      return state;
  }
};
