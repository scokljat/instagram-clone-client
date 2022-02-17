import { NavLink } from "react-router-dom";
import { FiUser, FiPlus } from "react-icons/fi";
import { Flex, List, ListItem } from "@chakra-ui/react";

function NavBar() {
  return (
    <Flex justifyContent="center">
      <List>
        <Flex>
          <ListItem paddingRight={10}>
            <NavLink to="/newpost">
              <FiPlus size={30} />
            </NavLink>
          </ListItem>

          <ListItem>
            <NavLink to="/profile">
              <FiUser size={30} />
            </NavLink>
          </ListItem>
        </Flex>
      </List>
    </Flex>
  );
}

export default NavBar;
