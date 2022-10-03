import React, { useRef } from "react";
import logo from "../../../public/img/logo.png";
import Image from "next/image";
import BurgerIcon from "../../../public/icon/BurgerIcon";
import CalendarIcon from "../../../public/icon/CalendarIcon";
import useScrollToTop from "../../hooks/useScrollToTop";
import { nav } from "../../../data";
import { Box, Button, HStack, Stack } from "@chakra-ui/react";

type NavProps = {
  showDrawerBooking?: () => void;
  openNav?: () => void;
  showNav?: boolean;
  content?: typeof nav;
};
const Nav: React.FC<NavProps> = ({
  showDrawerBooking,
  openNav,
  showNav,
  content,
}) => {
  const btnRef = useRef();
  return (
    <HStack
      as="nav"
      position="fixed"
      top="56px"
      zIndex="10"
      paddingX="23px"
      w="100%"
      justifyContent="space-between"
      transition="all 300ms ease-in-out"
      transform={!showNav && "translate3d(0, -100px, 0)"}
    >
      <Box
        boxShadow="lg"
        h="44px"
        bgColor="white"
        w="103px"
        borderRadius="8px"
        padding="10px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        onClick={() => useScrollToTop()}
      >
        <Image src={logo} />
      </Box>
      <HStack>
        <Stack>
          <Button
            boxShadow="lg"
            onClick={() => showDrawerBooking()}
            leftIcon={<CalendarIcon color="#3D63A9" />}
            bgColor="White"
            color="blue"
            variant="solid"
            h="44px"
            w="117px"
            fontWeight="600"
            fontSize="15px"
            borderRadius="8px"
          >
            {content[4].title}
          </Button>
        </Stack>
        <Button
          ref={btnRef}
          onClick={() => openNav()}
          h="44px"
          bgColor="white"
          w="44px"
          borderRadius="8px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          boxShadow="lg"
        >
          <BurgerIcon />
        </Button>
      </HStack>
    </HStack>
  );
};

export default Nav;
