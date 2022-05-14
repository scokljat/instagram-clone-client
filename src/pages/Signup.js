import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import {
  FormControl,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Flex,
} from "@chakra-ui/react";

import { registerUser } from "../actions/auth";

function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const users = useSelector((state) => state);
  const nav = useNavigate();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const isInvalid =
    watch("email", false) &&
    watch("firstName", false) &&
    watch("lastName", false) &&
    watch("userName", false) &&
    watch("password", false);

  const onSubmit = (values) => {
    dispatch(registerUser(values));
    if (users.authReducer.isLoggedIn) nav("/profile");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex justifyContent="center">
        <Flex flexDirection="column" alignItems="center">
          <Text as="i" fontSize={60}>
            Instagram
          </Text>
          <Text m={5}>Sign up to see photos and videos from your friends.</Text>
          <FormControl>
            <Input
              placeholder="Email"
              type={"email"}
              {...register("email", {
                required: "Email is required!",
              })}
              mb={5}
            />{" "}
            {errors.email && <Text pb={5}>{errors.email.message}</Text>}
          </FormControl>
          <FormControl>
            <Input
              {...register("firstName", {
                required: "First name is required!",
                minLength: {
                  value: 2,
                  message: "First name must be at least 2 charachters!",
                },
                maxLength: {
                  value: 20,
                  message: "First name must not exceed 20 characters!",
                },
              })}
              type="text"
              placeholder="First Name"
              mb={5}
            />
            {errors.firstName && <Text pb={5}>{errors.firstName.message}</Text>}
          </FormControl>
          <FormControl>
            <Input
              {...register("lastName", {
                required: "Last name is required!",
                minLength: {
                  value: 2,
                  message: "Last name must be at least 2 charachters!",
                },
                maxLength: {
                  value: 20,
                  message: "Last name must not exceed 20 characters!",
                },
              })}
              type="text"
              placeholder="Last Name"
              mb={5}
            />
            {errors.lastName && <Text pb={5}>{errors.lastName.message}</Text>}
          </FormControl>
          <FormControl>
            <Input
              {...register("userName", {
                required: "Username is required!",
                minLength: {
                  value: 2,
                  message: "Username must be at least 2 charachters!",
                },
                maxLength: {
                  value: 20,
                  message: "Username must not exceed 20 characters!",
                },
              })}
              type="text"
              placeholder="Username"
              mb={5}
            />
            {errors.userName && <Text pb={5}>{errors.userName.message}</Text>}
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                {...register("password", {
                  required: "Password is required!",
                  minLength: {
                    value: 5,
                    message: "Password must be at least 5 charachters!",
                  },
                  maxLength: {
                    value: 20,
                    message: "Password must not exceed 20 characters!",
                  },
                })}
                placeholder="Password"
                mb={5}
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
            {errors.password && <Text pb={5}>{errors.password.message}</Text>}
          </FormControl>
          <Button colorScheme="blue" type="submit" disabled={!isInvalid} mb={5}>
            Sign up
          </Button>
          <Flex>
            <Text>Have an account?</Text>
            <NavLink to="/">
              <Text color="#3182ce" fW="bold" pl={4}>
                Log in
              </Text>
            </NavLink>
          </Flex>
        </Flex>
      </Flex>
    </form>
  );
}

export default Signup;
