import { NavLink } from "react-router-dom";
import { FiHome } from "react-icons/fi";
import { Flex } from "@chakra-ui/react";

function SideBar() {
  return (
    <Flex justifyContent="flex-end" marginRight={8}>
      <NavLink to="/">
        <FiHome size={30} />
      </NavLink>
    </Flex>
  );
}
export default SideBar;
