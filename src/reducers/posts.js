import { FETCH_POSTS, CREATE_POST } from "../constants/actionTypes";

const initialState = {
  posts: [],
};

export const reducerPosts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, posts: payload };
    case CREATE_POST:
      return [...state.posts, payload];
    default:
      return state;
  }
};
