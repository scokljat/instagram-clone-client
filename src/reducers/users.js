import { FETCH_USER } from "../constants/actionTypes";

const initialState = {
  user: {},
};

export const reducerUsers = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_USER:
      return { ...state, user: payload };

    default:
      return state;
  }
};
