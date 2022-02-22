import { useEffect } from "react";
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
  const users = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(isLogin());
  }, [dispatch]);
  console.log("App jss", users.loginReducer.isLoggedIn);

  return (
    <ChakraProvider>
      <BrowserRouter>
        <header>
          <SideBar />
        </header>
        <main>
          <Routes>
            {users.loginReducer.isLoggedIn ? (
              <Route path="/home" element={<Home />} />
            ) : (
              <Route
                exact
                path="/"
                element={<Login isLoggedIn={users.loginReducer.isLoggedIn} />}
              />
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
