import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

import { registerUser } from "../actions/users";
import { getUsers } from "../actions/users";

function Signup() {
  const users = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const [showPassword, setShowPassword] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (values) => {
    dispatch(registerUser(values));
  };

  return (
    <Flex justifyContent="center" padding={10}>
      <Flex flexDirection="column">
        <Text marginBottom={5}>
          Sign up to see photos and videos from your friends.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl>
            <Input
              placeholder="Email"
              type={"email"}
              {...register("email", {
                required: "Email is required!",
              })}
              marginBottom={5}
            />{" "}
            {errors.email && <p>{errors.email.message}</p>}
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
                  value: 10,
                  message: "First name must not exceed 10 characters!",
                },
              })}
              type="text"
              placeholder="First Name"
              marginBottom={5}
            />
            {errors.firstName && <p>{errors.firstName.message}</p>}
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
                  value: 10,
                  message: "Last name must not exceed 10 characters!",
                },
              })}
              type="text"
              placeholder="Last Name"
              marginBottom={5}
            />
            {errors.lastName && <p>{errors.lastName.message}</p>}
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
                  value: 10,
                  message: "Username must not exceed 10 characters!",
                },
              })}
              type="text"
              placeholder="Username"
              marginBottom={5}
            />
            {errors.userName && <p>{errors.userName.message}</p>}
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
                    value: 10,
                    message: "Password must not exceed 10 characters!",
                  },
                })}
                placeholder="Password"
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

            {errors.password && <p>{errors.password.message}</p>}
          </FormControl>

          <FormControl>
            <Button
              colorScheme="blue"
              type="submit"
              //  disabled={isInvalid}
              marginBottom={5}
            >
              Sign up
            </Button>
          </FormControl>
        </form>
        <Flex>
          <Text>Have an account?</Text>
          <NavLink to="/">
            <Text color="blue" fontWeight="bold" paddingLeft={4}>
              Log in
            </Text>
          </NavLink>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default Signup;
