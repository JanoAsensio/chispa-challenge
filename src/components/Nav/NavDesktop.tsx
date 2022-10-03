import React, { useState } from "react";
import logo from "../../../public/img/logo.png";
import Image from "next/image";
import CalendarIcon from "../../../public/icon/CalendarIcon";
import useScrollToTop from "../../hooks/useScrollToTop";
import { nav } from "../../../data";
import {
  Box,
  Button,
  HStack,
  VStack,
  Flex,
  Tooltip,
  useToast,
} from "@chakra-ui/react";

type NavDesktopProps = {
  showDrawerBooking: () => void;
  showNav: boolean;
  content: typeof nav;
};
const NavDesktop: React.FC<NavDesktopProps> = ({
  showDrawerBooking,
  showNav,
  content,
}) => {
  const toast = useToast();
  const disabled = () => {
    toast({
      description: "Aun no habilitamos esta funcionalidad",
      status: "info",
      duration: 9000,
      isClosable: true,
      containerStyle: {
        backgroundColor: "#ffa040",
        borderRadius: "8px",
      },
    });
  };
  return (
    <HStack
      as="nav"
      top="56px"
      zIndex="10"
      px={{ lg: "23px", xl: "84px" }}
      w="100%"
      justifyContent="space-between"
      position="fixed"
      transition="all 300ms ease-in-out"
      transform={!showNav && "translate3d(0, -120px, 0)"}
    >
      <Tooltip
        hasArrow
        label="Click para subir!"
        zIndex="20"
        bg="lightGrey"
        color="black"
        mt="6px"
      >
        <Box
          h="64px"
          bgColor="white"
          w="143px"
          borderRadius="16px"
          p="10px"
          display="flex"
          justifyContent="center"
          alignItems="center"
          _hover={{ transition: "all 1s", transform: "scale(1.2)" }}
          onClick={() => useScrollToTop()}
          boxShadow="lg"
          cursor="pointer"
        >
          <Image src={logo} />
        </Box>
      </Tooltip>
      <VStack position="relative" boxShadow="lg" borderRadius="16px">
        <Box
          bgColor="white"
          borderRadius="16px"
          px="8px"
          h="64px"
          alignItems="center"
          display="flex"
        >
          <NavButton contents={content[0].title} disabled={() => disabled()} />
          <NavButton contents={content[1].title} disabled={() => disabled()} />
          <NavButton
            contents={content[2].title}
            showBooking={showDrawerBooking}
            isExperimentaItem
            subModal={content[2].submenuDesk}
          />
          <NavButton contents={content[5].title} disabled={() => disabled()} />
          <NavButton contents={content[6].title} disabled={() => disabled()} />
          <NavButton
            contents={content[4].title}
            bookingButton
            showBooking={showDrawerBooking}
          />
        </Box>
      </VStack>
    </HStack>
  );
};

export default NavDesktop;

type IncomingProps = {
  contents: string;
  bookingButton?: boolean;
  showBooking?: () => void;
  isExperimentaItem?: boolean;
  subModal?: any;
  disabled?: () => void;
};

const NavButton = ({
  contents,
  bookingButton,
  showBooking,
  isExperimentaItem,
  subModal,
  disabled,
}: IncomingProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const showMenu = () => {
    if (isVisible) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  return (
    <Button
      mx="2px"
      fontSize="15px"
      lineHeight="24px"
      borderRadius="8px"
      h="48px"
      fontWeight={bookingButton ? "600" : "400"}
      bgColor={bookingButton ? "blue" : "white"}
      _hover={bookingButton && { bgColor: "hoverBlue" }}
      color={bookingButton && "white"}
      leftIcon={bookingButton && <CalendarIcon color="white" />}
      onClick={
        bookingButton
          ? showBooking
          : !isExperimentaItem
          ? () => disabled()
          : null
      }
      onMouseOver={isExperimentaItem && showMenu}
      onMouseOut={isExperimentaItem && showMenu}
    >
      {contents}
      <Flex
        bgColor="white"
        position="absolute"
        top="76px"
        flexDir="column"
        h="208px"
        w="146px"
        borderRadius="16px"
        justifyContent="space-around"
        alignItems="center"
        display={isVisible ? "flex" : "none"}
        boxShadow="lg"
      >
        {subModal?.map((items, i) => {
          return (
            <Box key={i} fontSize="15px" fontWeight="400">
              {items.title}
            </Box>
          );
        })}
      </Flex>
    </Button>
  );
};
