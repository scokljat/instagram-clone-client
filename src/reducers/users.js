import { FETCH_ALL_USERS, REGISTER_USER } from "../constants/actionTypes";

const initialState = {
  users: [],
};
export const reducerUsers = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ALL_USERS:
      return { ...state, users: payload };
    case REGISTER_USER:
      return { ...state, users: payload };
    default:
      return state;
  }
};
