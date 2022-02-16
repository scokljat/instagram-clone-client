import { useEffect, useState } from "react";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import axios from "axios";

//import api from "./api";
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
  //const [data, setData] = useState({ posts: [] });

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(process.env.REACT_APP_API_URL);
      console.log(response.data);

      //   const result = await axios
      //     .get(process.env.REACT_APP_API_URL)
      //     .then((res) => {
      //       console.log(res);
      //       console.log(res.data);
      //     });
      //   //   setData(result.data);
      //   console.log(result);
      // }
    }

    fetchData();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <SignUp />
    </ChakraProvider>
  );
}

export default App;
