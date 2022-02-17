import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import axios from "axios";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile";
import SideBar from "./mode/SideBar";
import NewPost from "./pages/NewPost";

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
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/newpost" element={<NewPost />} />
            <Route path="/home" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
