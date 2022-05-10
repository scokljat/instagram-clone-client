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
  console.log(posts);
  return (
    <>
      {posts.map((post, index) => {
        return (
          <Flex justifyContent="center">
            <Flex flexDirection="column" key={index} mt={10}>
              <Text mb={3}>{post.user.userName}</Text>
              <Image boxSize="500px" src={post.url} />
              <Text mb={1}>{post.description}</Text>
              <Text mb={3}>
                {FormatUtils.formatDate(
                  post.createdAt,
                  "HH:mm  'h' dd MMM yyyy"
                )}
              </Text>
              <FaRegHeart fontSize={20} />
            </Flex>
          </Flex>
        );
      })}
    </>
  );
}

export default Home;
