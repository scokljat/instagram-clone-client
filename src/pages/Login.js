import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
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

import { login } from "../actions/auth";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const users = useSelector((state) => state);

  //const isInvalid = userName === "" || password === "";

  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {
    dispatch(login(values));
    console.log(users.authReducer.userId);
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" marginTop={20}>
      <Flex justifyContent="center">
        <Box boxSize="sm">
          <Image src="/images/iphone-with-profile.jpg" alt="" />
        </Box>
      </Flex>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
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
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required!",
              })}
              marginTop={10}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
                isRequired
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 charachters!",
                  },
                  maxLength: {
                    value: 10,
                    message: "Password must not exceed 10 characters!",
                  },
                })}
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
            {errors.password && <p>{errors.password.message}</p>}
          </FormControl>
          <FormControl>
            <Button colorScheme="blue" type="submit">
              Log In
            </Button>
          </FormControl>
          <Flex>
            <Text>Don't have an account?</Text>
            <NavLink to="/signup">
              <Text color="blue" fontWeight="bold" paddingLeft={4}>
                Sign up
              </Text>
            </NavLink>
          </Flex>
        </Stack>
      </form>
    </Grid>
  );
}

export default Login;
