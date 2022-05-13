import { FETCH_LIKES, LIKE_POST } from "../constants/actionTypes";

const initialState = {
  likes: [],
  numbersOfLikes: [],
};

export const reducerLikes = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_LIKES:
      return {
        ...state,
        likes: payload,
        numbersOfLikes: state.likes.map((like) => {
          var counter = 0;
          if (like.postId === payload.postId) {
            counter += 1;
            state.numbersOfLikes.state.likes[like] = counter;
          }
          return state.numbersOfLikes;
        }),
      };
    case LIKE_POST:
      return {
        ...state,
        likes: [...state.likes, payload],
        //newArray: state.likes.filter((like) => like.postId === payload.postId),
      };

    default:
      return state;
  }
};
