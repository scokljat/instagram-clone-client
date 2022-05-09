import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Image } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";

import { getPosts } from "../actions/posts";
import FormatUtils from "../utils/FormatUtils";

function Home() {
  const posts = useSelector((state) => state.reducerPosts.posts);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      {posts.map((post, index) => {
        return (
          <Flex justifyContent="center">
            <Flex flexDirection="column" key={index}>
              <Text>{post.user.userName}</Text>
              <Image boxSize="500px" src={post.url} />
              <Text>{post.description}</Text>
              <Text>
                {FormatUtils.formatDate(post.createdAt, "HH:mm dd MMM yyyy")}
              </Text>
              <FaRegHeart />
            </Flex>
          </Flex>
        );
      })}
    </>
  );
}

export default Home;
