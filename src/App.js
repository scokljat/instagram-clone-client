import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import SignUp from "./sign-up";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "#fafafa",
      },
    },
  },
});
function App() {
  return (
    <ChakraProvider theme={theme}>
      <SignUp />
    </ChakraProvider>
  );
}

export default App;
