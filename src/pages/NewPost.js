import { useForm } from "react-hook-form";
import { Text, Input, FormControl, Button } from "@chakra-ui/react";
import SideBar from "./SideBar";

function NewPost() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {};
  return (
    <>
      <SideBar />
      <Text>Create new post</Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl>
          <Input
            placeholder="Description"
            type="text"
            {...register("description", {
              maxLength: {
                value: 50,
                message: "Description must not exceed 50 characters!",
              },
            })}
            marginBottom={5}
          />
          {errors.description && <p>{errors.description.message}</p>}
        </FormControl>
        <FormControl>
          <Input
            {...register("url")}
            placeholder="Image URL"
            marginBottom={5}
          />
        </FormControl>
        <Button colorScheme="blue" type="submit">
          Share
        </Button>
      </form>
    </>
  );
}

export default NewPost;
