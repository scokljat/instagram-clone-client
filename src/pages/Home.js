import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Flex, Text, Image } from "@chakra-ui/react";
import { FaRegHeart } from "react-icons/fa";
import jwtDecode from "jwt-decode";
import { getPosts } from "../actions/posts";
import FormatUtils from "../utils/FormatUtils";
import { likePost, getLikes } from "../actions/likes";

function Home() {
  const posts = useSelector((state) => state.reducerPosts.posts);
  const likes = useSelector((state) => state.reducerLikes.likes);
  const newArray = useSelector((state) => state.reducerLikes.newArray);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    dispatch(getLikes());
  }, [dispatch]);

  const token = jwtDecode(localStorage.getItem("token"));

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
              <FaRegHeart
                fontSize={20}
                onClick={() => {
                  dispatch(likePost({ postId: post.id, userId: token.id }));
                }}
              />
            </Flex>
          </Flex>
        );
      })}
    </>
  );
}

export default Home;
