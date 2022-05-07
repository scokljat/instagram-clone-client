import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack margin={5}>
      <IconButton
        icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
        isRound="true"
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
    </VStack>
  );
}

export default ThemeSwitcher;
