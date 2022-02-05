import React from "react";
import { useHistory, Link, NavLink } from "react-router-dom";
import ModalDialog from "./ModalDialog";
import {
  Box,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Login from "./LoginAsUser";
import SignupUser from "./RegisterUser";
import SignUpRestaurant from "./RegisterRestaurant";
import LoginRestaurant from "./LoginAsRestaurant";
import ModalDialogRestaurantSignin from "./ModalDialogRestaurantSignin";
import ModalDialogRegisterUser from "./ModalDialogRegisterUser";
import ModalDialogRestaurantLogin from "./ModalDialogRestaurantLogin";
const Header = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={6}
      bg="blue.500"
      color="white"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={"tighter"}>
          Food Delivery App
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <HamburgerIcon />
      </Box>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            user Registration
          </Button>

          <Box>
            New User singup Here?{" "}
            <NavLink to="/userSignup">
              <Link color="red.500">Sign Up</Link>
            </NavLink>
          </Box>

          <Button
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            user Login
          </Button>
          <Button
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            Restaurant Signup
          </Button>
          <Button
            variant="outline"
            _hover={{ bg: "teal.700", borderColor: "teal.700" }}
          >
            Restaurant Login
          </Button>

          {/* <ModalDialogRegisterUser/>
        <ModalDialogRestaurantSignin/>
        <ModalDialog/>
        <ModalDialogRestaurantLogin/> */}
          {/* <SignUpRestaurant/>
        <SignupUser/>
        <LoginRestaurant/> */}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Header;
