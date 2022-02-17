import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  Stack,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Image,
  Box,
  Grid,
  Flex,
  Text,
} from "@chakra-ui/react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isInvalid = userName === "" || password === "";

  const handleSignIn = (event) => {
    event.preventDefault();
  };
  return (
    <Grid templateColumns="repeat(2, 1fr)" marginTop={20}>
      <Flex justifyContent="center">
        <Box boxSize="sm">
          <Image src="/images/iphone-with-profile.jpg" alt="" />
        </Box>
      </Flex>
      <form method="POST" onSubmit={handleSignIn}>
        <Stack
          maxWidth={400}
          margin="auto"
          spacing={5}
          marginTop={10}
          marginStart={10}
        >
          <Box boxSize="sm" height={10}>
            <Image src="/images/logo.png" alt="" />
          </Box>

          <FormControl>
            <Input
              isRequired
              type="text"
              id="email"
              value={userName}
              placeholder="Phone number, username, or email"
              marginTop={10}
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
            <Button colorScheme="blue" type="submit" disabled={isInvalid}>
              Log In
            </Button>
          </FormControl>
          <Text>Don't have an account?</Text>
          <NavLink to="/signup">
            <Text color="blue" fontWeight="bold">
              Sign up
            </Text>
          </NavLink>
        </Stack>
      </form>
    </Grid>
  );
}

export default Login;
