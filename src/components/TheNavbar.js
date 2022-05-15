import { NavLink } from "react-router-dom";
import { FiUser, FiHome } from "react-icons/fi";
import { Flex, List, ListItem } from "@chakra-ui/react";

import ModalCreatePost from "./ModalCreatePost";

function TheNavbar() {
  return (
    <Flex justifyContent="center">
      <List>
        <Flex>
          <ListItem pr={10}>
            <ModalCreatePost />
          </ListItem>

          <ListItem pr={10}>
            <NavLink to="/profile">
              <FiUser size={30} />
            </NavLink>
          </ListItem>

          <ListItem>
            {" "}
            <NavLink to="/">
              <FiHome size={30} />
            </NavLink>
          </ListItem>
        </Flex>
      </List>
    </Flex>
  );
}

export default TheNavbar;
