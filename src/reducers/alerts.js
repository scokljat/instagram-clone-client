import { SET_ALERT, HIDE_ALERT } from "../constants/actionTypes";

const initialState = {
  message: "",
  isOpen: false,
};

export const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ALERT:
      return { ...state, message: payload, isOpen: true };

    case HIDE_ALERT:
      return initialState;

    default:
      return state;
  }
};
