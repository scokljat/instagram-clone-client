import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "./NavBar";
import { Flex, Text, Image } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import { getPosts } from "../../actions/posts";
import { getUsers } from "../../actions/users";
import Logout from "../Logout";

function Home() {
  const posts = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUsers());
  }, [dispatch]);
  console.log(posts);
  return (
    <>
      <Logout />
      <NavBar />
      {posts.reducerPosts.posts.map((post) => {
        return (
          <Flex justifyContent="center">
            <Flex flexDirection="column">
              <Text>{post.user.userName}</Text>
              <Text>{post.createdAt}</Text>
              <Image boxSize="500px" src={post.url} />
              <Text>{post.description}</Text>
              <FaRegHeart />
            </Flex>
          </Flex>
        );
      })}
    </>
  );
}

export default Home;
