import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";

import { isLogout } from "../actions/login";

function Logout() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state);

  const logoutUser = () => {
    console.log("click");
    dispatch(isLogout());
  };

  return <Button onClick={logoutUser}>Log out</Button>;
}

export default Logout;
