import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SimpleGrid, Text, Flex, Image, Button } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import jwtDecode from "jwt-decode";
import { getUser } from "../actions/users";
import { getPosts, deletePost } from "../actions/posts";
import FormatUtils from "../utils/FormatUtils";

function Profile() {
  const user = useSelector((state) => state.reducerUsers.user);
  const posts = useSelector((state) => state.reducerPosts.posts);
  const dispatch = useDispatch();
  const token = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    dispatch(getUser(token.id));
    dispatch(getPosts());
  }, [token.id, dispatch]);

  return (
    <>
      <Flex ml={20} mt={10}>
        <Image boxSize="100px" src={user.image} borderRadius={50} />
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
        <SimpleGrid columns={5}>
          {posts?.map((post, index) => {
            return (
              <>
                {post.userId === token.id ? (
                  <Flex flexDirection="column" mr={10} key={index}>
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
                      <Button
                        mt={3}
                        onClick={() => {
                          dispatch(deletePost(post.id));
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
