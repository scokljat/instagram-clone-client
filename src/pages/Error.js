import React from "react";
import { Text, Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { FaFrown } from "react-icons/fa";

function Error() {
  return (
    <>
      <Flex justifyContent="center" mt={20} pt={20}>
        <Flex flexDirection="column" alignItems="center">
          <Text fontSize={40}>404</Text>
          <FaFrown fontSize={150} />
          <Text fontSize={40}>Page not found</Text>
          <NavLink to="/">
            <Text color="#3182ce" fW="bold" pl={4}>
              Home
            </Text>
          </NavLink>
        </Flex>
      </Flex>
    </>
  );
}

export default Error;
