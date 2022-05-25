import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { SimpleGrid, Text, Flex, Image, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

import ModalEditPost from "../components/ModalEditPost";
import { getUser } from "../actions/users";
import { getPosts, deletePost } from "../actions/posts";
import FormatUtils from "../utils/FormatUtils";

function Profile() {
  const user = useSelector((state) => state.reducerUsers.user);
  const posts = useSelector((state) => state.reducerPosts.posts);

  const dispatch = useDispatch();
  const userId = FormatUtils.formatToken();

  useEffect(() => {
    dispatch(getUser(userId));
    dispatch(getPosts());
  }, [userId, dispatch]);

  return (
    <>
      <Flex ml={20} mt={10}>
        <Flex flexDirection="column">
          <Image boxSize="100px" src={user.image} borderRadius={50} />
          <NavLink to="/edit-profile">
            <Button mt={5}>Edit profile</Button>
          </NavLink>
        </Flex>
        <Flex flexDirection="column" ml={10}>
          <Text
            textTransform="uppercase"
            fontSize="lg"
            fontWeight="bold"
            mt={5}
          >
            {user.firstName} {user.lastName}
          </Text>
          <Text>Username: {user.userName}</Text>
        </Flex>
      </Flex>
      <Flex flexDirection="row" justifyContent="center" m={20}>
        <SimpleGrid columns={{ sm: "2", md: "3", lg: "5" }} spacing={10}>
          {posts?.map((post, index) => {
            return (
              <>
                {post.userId === userId ? (
                  <Flex flexDirection="column" key={index}>
                    <Image height="350px" widht="300px" src={post.url} />
                    <Flex justifyContent="space-between">
                      <Flex flexDirection="column">
                        <Text mb={1}>{post.description}</Text>
                        <Text mb={3}>
                          {FormatUtils.formatDate(
                            post.createdAt,
                            "HH:mm 'h' dd MMM yyyy"
                          )}
                        </Text>
                      </Flex>
                      <Button mt={3} mr={1} ml={1} p={2}>
                        <ModalEditPost id={post.id} />
                      </Button>
                      <Button
                        mt={3}
                        p={2}
                        type="submit"
                        onClick={() => {
                          dispatch(deletePost({ postId: post.id }));
                        }}
                      >
                        <DeleteIcon fontSize={20} />
                      </Button>
                    </Flex>
                  </Flex>
                ) : (
                  ""
                )}
              </>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
}

export default Profile;
