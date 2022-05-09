import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, Flex, Image } from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { getUser } from "../actions/users";
import { getPostsByUser } from "../actions/posts";
import FormatUtils from "../utils/FormatUtils";

function Profile() {
  const user = useSelector((state) => state.reducerUsers.user);
  const userPosts = useSelector((state) => state.reducerPosts.userPosts);
  const dispatch = useDispatch();
  const token = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    dispatch(getUser(token.id));
    dispatch(getPostsByUser(token.id));
  }, [token.id, dispatch]);
  console.log(userPosts);
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
      <Flex flexDirection="row" justifyContent="center">
        {userPosts.map((post, index) => {
          return (
            <Flex
              flexDirection="column"
              alignItems="center"
              key={index}
              mt={10}
              ml={20}
            >
              <Image height="350px" widht="300px" src={post.url} />
              <Text mb={1}>{post.description}</Text>
              <Text mb={3}>
                {FormatUtils.formatDate(post.createdAt, "HH:mm dd MMM yyyy")}
              </Text>
            </Flex>
          );
        })}
      </Flex>
    </>
  );
}

export default Profile;
