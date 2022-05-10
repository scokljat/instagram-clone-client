import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
} from "../constants/actionTypes";

const initialState = {
  posts: [],
};

export const reducerPosts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, posts: payload };
    case CREATE_POST:
      return { ...state, posts: [...state.posts, payload] };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload),
      };
    default:
      return state;
  }
};
