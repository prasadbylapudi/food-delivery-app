import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Stack,
  Heading,
  Flex,
  Text,
} from "@chakra-ui/react";

import Signin from "./LoginAsUser";

function ModalDialog() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        variant="outline"
        _hover={{ bg: "teal.700", borderColor: "teal.700" }}
        onClick={onOpen}
      >
        Login As user
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Signin />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={1} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalDialog;
