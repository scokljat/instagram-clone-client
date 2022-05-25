import { REGISTER, LOGIN, LOGOUT } from "../constants/actionTypes";

const initialState = {
  isLoggedIn: false,
  userId: null,
};

export const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      return {
        ...state,
        isLoggedIn: true,
        userId: payload.decoded,
      };
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        userId: payload.decoded,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};
