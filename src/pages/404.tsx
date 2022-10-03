import { Box, HStack, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../../public/img/logo.png";
import Image from "next/image";
import NextLink from "next/link";

const Custom404 = ({ globalData }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <HStack
        as="nav"
        position="fixed"
        top="56px"
        zIndex="10"
        paddingX="23px"
        w="100%"
        justifyContent="space-between"
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
        >
          <Image src={logo} />
        </Box>
      </HStack>
      <Box
        border="8px"
        borderColor="blue"
        borderRadius="16px"
        padding="10px"
        width={{ base: "300px", lg: "600px" }}
        height={{ base: "300px", lg: "300px" }}
        position="relative"
      >
        <Box
          position="absolute"
          left="auto"
          right="0"
          top="-51px"
          fontSize="40px"
          fontWeight="600"
          color="blue"
        >
          ERROR 404
        </Box>
        <Text fontSize="40px" fontWeight="600" mt="10px">
          Upsi :/{" "}
        </Text>
        <Text mt="24px" fontSize="20px">
          No encontramos la pagina que estabas buscando...
        </Text>
        <NextLink href="/">
          <Text
            mt="46px"
            decoration="underline"
            color="hoverBlue"
            cursor="pointer"
          >
            Volver al inicio :D
          </Text>
        </NextLink>
      </Box>
    </Box>
  );
};
export default Custom404;
