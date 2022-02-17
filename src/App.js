import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";

import SignUp from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import SideBar from "./mode/SideBar";

function App() {
  //const [data, setData] = useState({ posts: [] });

  return (
    <ChakraProvider>
      <BrowserRouter>
        <header>
          <SideBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
