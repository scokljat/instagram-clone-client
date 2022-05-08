import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Image } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

import { getPosts } from "../actions/posts";

function Home() {
  const posts = useSelector((state) => state);
  const user = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  console.log(user.authReducer.userId);
  return (
    <>
      {posts.reducerPosts.posts.map((post) => {
        return (
          <Flex justifyContent="center">
            <Flex flexDirection="column" key={post.id}>
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
