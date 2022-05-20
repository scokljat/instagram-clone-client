import { combineReducers } from "redux";
import { reducerPosts } from "./posts";
import { authReducer } from "./auth";
import { reducerUsers } from "./users";
import { reducerLikes } from "./likes";
import { alertReducer } from "./alerts";

const rootReducer = combineReducers({
  reducerPosts: reducerPosts,
  reducerUsers: reducerUsers,
  reducerLikes: reducerLikes,
  authReducer: authReducer,
  alertReducer: alertReducer,
});

export default rootReducer;
