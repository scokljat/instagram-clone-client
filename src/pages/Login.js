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

  const dispatch = useDispatch();
  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const isInvalid = watch("email", false) && watch("password", false);

  const onSubmit = (values) => {
    dispatch(login(values));
    console.log(users.authReducer.userId);
  };

  return (
    <Grid templateColumns="repeat(2, 1fr)" marginTop={20}>
      <Flex justifyContent="center">
        <Box boxSize="sm">
          <Image src="/images/instagram-login.jpg" alt="" borderRadius={5} />
        </Box>
      </Flex>
      <form method="POST" onSubmit={handleSubmit(onSubmit)}>
        <Stack
          maxWidth={400}
          margin="auto"
          spacing={5}
          marginTop={5}
          marginStart={10}
          alignItems="center"
        >
          <Text as="i" fontSize={60}>
            Instagram
          </Text>
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

          <Button
            disabled={!isInvalid}
            colorScheme="blue"
            type="submit"
            alignItems="center"
          >
            Log In
          </Button>

          <Flex>
            <Text>Don't have an account?</Text>
            <NavLink to="/signup">
              <Text color="#3182ce" fontWeight="bold" paddingLeft={4}>
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
