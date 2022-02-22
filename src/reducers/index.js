import { combineReducers } from "redux";
import { reducerUsers } from "./users";
import { reducerPosts } from "./posts";
import { loginReducer } from "./login";

const rootReducer = combineReducers({
  reducerUsers: reducerUsers,
  reducerPosts: reducerPosts,
  loginReducer: loginReducer,
});

export default rootReducer;
