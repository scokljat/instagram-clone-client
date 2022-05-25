import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
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
import { EditIcon } from "@chakra-ui/icons";

import { updatePost } from "../actions/posts";
import FormatUtils from "../utils/FormatUtils";

function ModalEditPost(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      description: props.description,
      url: props.url,
    },
  });

  const onSubmit = (values) => {
    const updatedPost = {
      id: props.id,
      userId: FormatUtils.formatToken(),
      description: values.description,
      url: values.url,
    };

    dispatch(updatePost(updatedPost, props.id));
  };

  return (
    <>
      <EditIcon size={30} onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose} background="#F9F3EE">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit this post</ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <Input
                  _placeholder={{ color: "#D1D1D1" }}
                  borderColor="#D1D1D1"
                  placeholder="Description"
                  type="text"
                  {...register("description", {
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
                  onClick={onClose}
                >
                  Edit
                </Button>
                <Button colorScheme="blue" onClick={onClose}>
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

export default ModalEditPost;
