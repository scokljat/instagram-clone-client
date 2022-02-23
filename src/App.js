import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile";
import SideBar from "./mode/SideBar";
import NewPost from "./pages/NewPost";

import { isLogin } from "./actions/login";
import { getUsers } from "./actions/users";
import { getPosts } from "./actions/posts";
function App() {
  //const [data, setData] = useState({ posts: [] });
  //const data = useSelector((state) => state);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios(process.env.REACT_APP_API_URL);

  //     setData(response.data);
  //     console.log(data);
  //   };
  //   fetchData();
  // }, []);
  //const users = useSelector((state) => state);
  //const [novo, setNovo] = useState();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   //// dispatch(getUsers());
  //   // dispatch(getPosts());
  //   dispatch(isLogin());
  // }, [dispatch]);
  // console.log("KOrisnik ", users.loginReducer.isLoggedIn);
  // setNovo(users.loginReducer.isLoggedIn);
  const dispatch = useDispatch();
  const users = useSelector((state) => state);
  useEffect(() => {
    //// dispatch(getUsers());
    // dispatch(getPosts());
    dispatch(isLogin());
  }, [dispatch]);
  console.log(users.loginReducer.isLoggedIn);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <header>
          <SideBar />
        </header>
        <main>
          <Routes>
            {users.loginReducer.isLoggedIn ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route exact path="/" element={<Login />} />
            )}

            <Route path="/signup" element={<Signup />} />
            <Route path="/newpost" element={<NewPost />} />

            <Route path="/profile" element={<Profile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
