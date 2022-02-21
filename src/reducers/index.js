import { combineReducers } from "redux";
import { reducerUsers } from "./users";
import { reducersPosts } from "./posts";

const rootReducer = combineReducers({
  reducerUsers: reducerUsers,
  reducerPosts: reducersPosts,
});

export default rootReducer;
