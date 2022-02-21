import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";

import { getPosts } from "../../actions/posts";

function Home() {
  const posts = useSelector((state) => state);
  const state = useSelector((state) => state.reducerPosts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(posts);
  return <NavBar />;
}

export default Home;
