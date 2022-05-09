import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Text, Flex, Image } from "@chakra-ui/react";
import jwtDecode from "jwt-decode";
import { getUser } from "../actions/users";

function Profile() {
  const user = useSelector((state) => state.reducerUsers.user);
  const dispatch = useDispatch();
  const token = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    dispatch(getUser(token.id));
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
    </>
  );
}

export default Profile;
