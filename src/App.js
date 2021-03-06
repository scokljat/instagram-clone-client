import { Route, Routes, useNavigate } from "react-router-dom";
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
import Error from "./pages/Error";
import EditProfile from "./pages/EditProfile";
import AppAlert from "./components/AppAlert";
import { logout } from "./actions/auth";
import { SET_ALERT } from "./constants/actionTypes";

function App() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout);
    navigate("/");
    dispatch({ type: SET_ALERT, payload: "You are successfully logged out" });
  };

  return (
    <ChakraProvider>
      <header>
        <Flex justifyContent="space-between">
          <ColorModeScript initialColorMode="light" />
          <ThemeSwitcher />
          {isLoggedIn ? (
            <Button onClick={handleLogout} margin={5}>
              Logout
            </Button>
          ) : (
            " "
          )}
        </Flex>
        {isLoggedIn ? <TheNavbar /> : " "}
        <AppAlert />
      </header>
      <main>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </ChakraProvider>
  );
}

export default App;
