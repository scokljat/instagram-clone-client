import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

import { getUsers } from "./actions/users";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile";
import SideBar from "./mode/SideBar";
import NewPost from "./pages/NewPost";

function App() {
  //const [data, setData] = useState({ posts: [] });
  const data = useSelector((state) => state);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios(process.env.REACT_APP_API_URL);

  //     setData(response.data);
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  console.log(data);

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
