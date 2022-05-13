import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  FormControl,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Flex,
} from "@chakra-ui/react";
import { getUser, updateUser } from "../actions/users";
import jwtDecode from "jwt-decode";

function EditProfile() {
  const [showPassword, setShowPassword] = useState(false);
  const user = useSelector((state) => state.reducerUsers.user);

  const dispatch = useDispatch();
  const token = jwtDecode(localStorage.getItem("token"));

  useEffect(() => {
    dispatch(getUser(token.id));
  }, [token.id, dispatch]);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: user.image,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      userName: user.userName,
      password: user.password,
    },
  });

  const onSubmit = (values) => {
    dispatch(updateUser(values, token.id));
  };

  return (
    <Flex justifyContent="center" padding={30}>
      <Flex flexDirection="column" alignItems="center">
        <Text
          marginBottom={5}
          fontSize={{ base: "20px", md: "25px", lg: "40px" }}
        >
          Edit account information
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            _placeholder={{ color: "#D1D1D1" }}
            borderColor="#D1D1D1"
            {...register("image")}
            placeholder="Image URL"
            marginBottom={5}
          />
          <FormControl>
            <Input
              {...register("email", {
                required: "Email is required!",
              })}
              placeholder="Email"
              type={"email"}
              mb={5}
            />
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
                  value: 10,
                  message: "First name must not exceed 10 characters!",
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
                  value: 10,
                  message: "Last name must not exceed 10 characters!",
                },
              })}
              type="text"
              placeholder="Last Name"
              marginBottom={5}
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
                  value: 10,
                  message: "Username must not exceed 10 characters!",
                },
              })}
              type="text"
              placeholder="Username"
              marginBottom={5}
            />
            {errors.userName && <Text pb={5}>{errors.userName.message}</Text>}
          </FormControl>
          <FormControl>
            <InputGroup>
              <Input
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
                type={showPassword ? "text" : "password"}
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
          <Button
            colorScheme="blue"
            type="submit"
            //  disabled={isInvalid}
            marginBottom={5}
          >
            Edit
          </Button>
        </form>
      </Flex>
    </Flex>
  );
}

export default EditProfile;
