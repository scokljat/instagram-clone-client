import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import Mode from "./Mode";

function SideBar() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
      <Mode />
    </ChakraProvider>
  );
}

export default SideBar;
