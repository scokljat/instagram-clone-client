import {
  FETCH_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  LIKE_POST,
} from "../constants/actionTypes";

const initialState = {
  posts: [],
};

export const reducerPosts = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS:
      return { ...state, posts: payload };
    case CREATE_POST:
      return { ...state, posts: [payload, ...state.posts] };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== payload.postId),
      };
    case UPDATE_POST:
      state.posts = state.posts.filter((post) => post.id !== payload.id);
      return { ...state, posts: [payload, ...state.posts] };

    case LIKE_POST: {
      return {
        ...state,
        posts: state.posts.map((post) => {
          return post.id === payload.id
            ? (post[post.id] = payload)
            : (post[post.id] = post);
        }),
      };
    }

    default:
      return state;
  }
};
