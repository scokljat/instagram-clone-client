import { useSelector, useDispatch } from "react-redux";
import { Flex, Alert } from "@chakra-ui/react";

import { HIDE_ALERT } from "../constants/actionTypes";

function AppAlert() {
  const isOpen = useSelector((state) => state.alertReducer.isOpen);
  const message = useSelector((state) => state.alertReducer.message);

  const dispatch = useDispatch();

  setTimeout(() => dispatch({ type: HIDE_ALERT }), 2000);

  return (
    <>
      {isOpen && message ? (
        <Flex justifyContent="center" p={5}>
          <Alert w={400} height={16} borderRadius={5} pl={20}>
            {message}
          </Alert>
        </Flex>
      ) : (
        " "
      )}
    </>
  );
}

export default AppAlert;
