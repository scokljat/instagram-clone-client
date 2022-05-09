import { combineReducers } from "redux";
import { reducerPosts } from "./posts";
import { authReducer } from "./auth";
import { reducerUsers } from "./users";

const rootReducer = combineReducers({
  reducerPosts: reducerPosts,
  reducerUsers: reducerUsers,
  authReducer: authReducer,
});

export default rootReducer;
