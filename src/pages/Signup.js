import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Stack,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Flex,
} from "@chakra-ui/react";

function Signup() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isInvalid = userName === "" || fullName === "" || password === "";

  return (
    <Flex justifyContent="center" padding={10}>
      <Flex flexDirection="column">
        <Text>Sign up to see photos and videos from your friends.</Text>

        <FormControl>
          <Input
            isRequired
            type="email"
            id="email"
            value={email}
            placeholder="Email"
            marginTop={10}
            marginBottom={5}
            onChange={({ target }) => setEmail(target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            isRequired
            type="text"
            id="fullName"
            value={fullName}
            placeholder="Full Name"
            marginBottom={5}
            onChange={({ target }) => setFullName(target.value)}
          />
        </FormControl>
        <FormControl>
          <Input
            isRequired
            type="text"
            id="userName"
            value={userName}
            placeholder="Userame"
            marginBottom={5}
            onChange={({ target }) => setUserName(target.value)}
          />
        </FormControl>
        <FormControl>
          <InputGroup>
            <Input
              isRequired
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
              marginBottom={5}
            />
            <InputRightElement width="4.5rem">
              <Button
                height="1.75rem"
                size="sm"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? "Hide" : "Show"}
              </Button>
            </InputRightElement>
          </InputGroup>
        </FormControl>
        <FormControl>
          <Button
            colorScheme="blue"
            type="submit"
            disabled={isInvalid}
            marginBottom={5}
          >
            Sign up
          </Button>
        </FormControl>
        <Text>Have an account?</Text>
        <NavLink to="/">
          <Text color="blue" fontWeight="bold">
            Log in
          </Text>
        </NavLink>
      </Flex>
    </Flex>
  );
}

export default Signup;
