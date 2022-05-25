import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Input,
  FormControl,
  Text,
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

import { createPost } from "../actions/posts";
import FormatUtils from "../utils/FormatUtils";

function ModalCreatePost() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (values) => {
    dispatch(
      createPost({
        userId: FormatUtils.formatToken(),
        description: values.description,
        url: values.url,
      })
    );
    reset();
  };

  return (
    <>
      <FiPlus cursor="pointer" size={30} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} background="#F9F3EE">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a new post</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <Input
                  _placeholder={{ color: "#D1D1D1" }}
                  borderColor="#D1D1D1"
                  placeholder="Description"
                  type="text"
                  {...register("description", {
                    required: "Description is required!",
                    maxLength: {
                      value: 50,
                      message: "Description must not exceed 50 characters!",
                    },
                  })}
                  mb={5}
                />
                {errors.description && (
                  <Text p={5}>{errors.description.message}</Text>
                )}
              </FormControl>
              <FormControl>
                <Input
                  isRequired
                  _placeholder={{ color: "#D1D1D1" }}
                  borderColor="#D1D1D1"
                  {...register("url")}
                  placeholder="Image URL"
                  mb={5}
                />
              </FormControl>
              <ModalFooter>
                <Button
                  colorScheme="blue"
                  type="submit"
                  ml={60}
                  mr={3}
                  onClick={() => {
                    onClose();
                  }}
                >
                  Share
                </Button>
                <Button
                  colorScheme="blue"
                  onClick={() => {
                    onClose();
                    reset();
                  }}
                >
                  Close
                </Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCreatePost;
