import { combineReducers } from "redux";
import { reducerPosts } from "./posts";
import { authReducer } from "./auth";

const rootReducer = combineReducers({
  reducerPosts: reducerPosts,
  authReducer: authReducer,
});

export default rootReducer;
