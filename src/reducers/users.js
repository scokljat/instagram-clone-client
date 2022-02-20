import { FETCH_ALL_USERS, REGISTER_USER } from "../constants/actionTypes";

const reducers = (users = [], action) => {
  switch (action.type) {
    case FETCH_ALL_USERS:
      return action.payload;
    case REGISTER_USER:
      return [...users, action.payload];
    default:
      return users;
  }
};
export default reducers;
