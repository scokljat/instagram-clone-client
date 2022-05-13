import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  ChakraProvider,
  ColorModeScript,
  Button,
  Flex,
} from "@chakra-ui/react";

import ThemeSwitcher from "./components/ThemeSwitcher";
import TheNavbar from "./components/TheNavbar";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { logout } from "./actions/auth";
import EditProfile from "./pages/EditProfile";

function App() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  console.log(users.authReducer.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout);
    console.log(users.authReducer.isLoggedIn);
  };
  return (
    <ChakraProvider>
      <BrowserRouter>
        <header>
          <Flex justifyContent="space-between">
            <ColorModeScript initialColorMode="light" />
            <ThemeSwitcher />
            {users.authReducer.isLoggedIn ? (
              <Button onClick={handleLogout} margin={5}>
                Logout
              </Button>
            ) : (
              " "
            )}
          </Flex>
          {users.authReducer.isLoggedIn ? <TheNavbar /> : " "}
        </header>
        <main>
          <Routes>
            {users.authReducer.isLoggedIn ? (
              <Route path="/" element={<Home />} />
            ) : (
              <Route exact path="/" element={<Login />} />
            )}

            <Route path="/signup" element={<Signup />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
          </Routes>
        </main>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
