import { combineReducers } from "redux";
import { reducerPosts } from "./posts";
import { authReducer } from "./auth";
import { reducerUsers } from "./users";
import { reducerLikes } from "./likes";

const rootReducer = combineReducers({
  reducerPosts: reducerPosts,
  reducerUsers: reducerUsers,
  reducerLikes: reducerLikes,
  authReducer: authReducer,
});

export default rootReducer;
