import React from "react";
import { Box, Button, Flex, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { useToast } from "@chakra-ui/react";

type CardBookingProps = {
  img: string;
  iconType: string;
  title: string;
  activity: string;
  price: string;
};

const CardBooking: React.FC<CardBookingProps> = ({
  img,
  iconType,
  title,
  activity,
  price,
}) => {
  const { isMobile } = useWindowSize();
  const imgCardWidth = isMobile() ? "327px" : "250px";
  const imgCardHeight = isMobile() ? "200px" : "274px";
  const toast = useToast();
  return (
    <Box
      w="100%"
      position="relative"
      borderTop="1px"
      borderColor="lightGrey"
      py="32px"
      display="flex"
      flexDir={{ base: "column", md: "row" }}
      alignItems="center"
      maxW={{ base: "327px", md: "100%" }}
      mx={{ base: "auto", md: "0" }}
    >
      <Flex w={{ md: "250px" }} h={{ md: "262px" }}>
        <Image
          src={img}
          alt="hotel image"
          objectFit="cover"
          style={{ borderRadius: "8px" }}
          layout="fixed"
          width={imgCardWidth}
          height={imgCardHeight}
        />
      </Flex>
      <VStack
        display="flex"
        w={{ md: "300px" }}
        ml={{ md: "24px" }}
        h={{ md: "262px" }}
        justifyContent={{ md: "space-between" }}
      >
        <Box alignSelf="self-start" mt={{ base: "32px", md: "0" }}>
          <Image src={iconType} layout="fixed" width="86px" height="30px" />
        </Box>
        <Text
          mt="12px"
          fontSize="15px"
          fontWeight="400"
          lineHeight="24px"
          alignSelf="start"
        >
          {title}
        </Text>
        <Text
          alignSelf="start"
          mt="16px"
          fontSize="13px"
          fontWeight="400"
          lineHeight="20px"
          color="black"
        >
          {activity}
        </Text>
        <Text
          alignSelf="start"
          my="24px"
          fontSize="15px"
          fontWeight="400"
          lineHeight="24px"
        >
          Desde <Text as="b">${price}/Noche </Text>
        </Text>
        <Button
          bgColor="blue"
          _hover={{ bgColor: "hoverBlue" }}
          color="white"
          w={{ base: "full", md: "137px" }}
          h={{ base: "48px", md: "48px" }}
          fontSize="15px"
          fontWeight="600"
          alignSelf={{ md: "start" }}
          onClick={() =>
            toast({
              description: "Aun no habilitamos esta funcionalidad",
              status: "info",
              duration: 9000,
              isClosable: true,
              containerStyle: {
                backgroundColor: "#ffa040",
                borderRadius: "8px",
              },
            })
          }
        >
          Reservar Ahora
        </Button>
      </VStack>
    </Box>
  );
};

export default CardBooking;
