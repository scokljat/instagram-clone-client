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
} from "@chakra-ui/react";
import { FiPlus } from "react-icons/fi";

function ModalCreatePost() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (values) => {};
  return (
    <>
      <FiPlus size={30} onClick={onOpen} />

      <Modal isOpen={isOpen} onClose={onClose} background="#F9F3EE">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color="black">Create a new post</ModalHeader>
          <ModalCloseButton color="black" />
          <ModalBody>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl>
                <Input
                  color="black"
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
                  marginBottom={5}
                />
                {errors.description && <p>{errors.description.message}</p>}
              </FormControl>
              <FormControl>
                <Input
                  color="black"
                  _placeholder={{ color: "#D1D1D1" }}
                  borderColor="#D1D1D1"
                  {...register("url")}
                  placeholder="Image URL"
                  marginBottom={5}
                />
              </FormControl>

              <ModalFooter>
                <Button colorScheme="blue" type="submit" ml={60} mr={3}>
                  Share
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

export default ModalCreatePost;
