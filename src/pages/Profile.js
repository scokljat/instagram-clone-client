import { useSelector } from "react-redux";
import { Flex, Text, Image } from "@chakra-ui/react";
import SideBar from "./SideBar";

function Profile() {
  const newState = useSelector((state) => state);
  const user = newState.reducerUsers.users;
  return (
    <>
      <SideBar />
      <Text>{user.userName}</Text>
      <Text>{user.firstName}</Text>
      <Text>{user.lastName}</Text>
      <Image boxSize="500px" src={user.image} />
    </>
  );
}

export default Profile;
