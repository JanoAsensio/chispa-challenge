import React from "react";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import LocationIcon from "../../../../public/icon/LocationIcon";
import Image, { StaticImageData } from "next/image";
import useWindowSize from "../../../hooks/useWindowSize";

type IncomingProps = {
  location: string;
  img: StaticImageData;
  bgColor: string;
  subtitle: StaticImageData;
  text?: string;
  icons?: any; //TODO: corregir tipado
};

const Card: React.FC<IncomingProps> = ({
  location,
  img,
  bgColor,
  subtitle,
  text,
  icons,
}) => {
  const { isDesktop } = useWindowSize();
  return (
    <Box
      w={{ base: "327px", lg: "624px" }}
      h={{ base: "400px", lg: "432px" }}
      mb="80px"
      boxShadow={"0px 12px 32px rgba(0, 0, 0, 0.25)"}
      rounded="16px"
      position="relative"
    >
      <Image src={img} alt="tribu" />
      <Stack
        position="absolute"
        bgColor={bgColor}
        borderRadius="12px"
        textAlign="left"
        color="white"
        w={{ base: "295px", lg: "356px" }}
        p="16px"
        bottom={{ base: "16px", lg: "42px" }}
        left={{ base: "16px", lg: "auto" }}
        right={{ lg: "-24px" }}
        transition="background-color 300ms linear, height 200ms ease-in"
        _hover={
          isDesktop() && {
            bgColor: "black",
            height: "295px",
            w: "368px",
            right: "-36px",
            backdropFilter: "blur(10px)",
          }
        }
        overflow="hidden"
        h="130px"
        display="flex"
      >
        <Flex flexDir="column">
          <Stack display="flex" flexDir="row" alignItems="center">
            <LocationIcon marginRight="4px" />
            {/* TODO: I'm sorry for this style inline :B */}
            <Text size="17px" fontWeight="400" style={{ marginTop: "0" }}>
              {location}
            </Text>
          </Stack>
          <Stack
            display="flex"
            mt="10px"
            w="180px"
            h="60px"
            justifyContent="center"
          >
            <Image src={subtitle} layout="responsive" />
          </Stack>
        </Flex>
        <Flex
          overflow="hidden"
          height="100%"
          justifyContent="end"
          pb="8px"
          flexDir="column"
        >
          <Text fontSize="15px" lineHeight="24px" fontWeight="400">
            {text}
          </Text>
          <Box marginY="16px" border="1px" borderColor="green" />
          <Text fontSize="13px" lineHeight="20px" fontWeight="400">
            {text}
          </Text>
          <HStack marginTop="10px" spacing="8px">
            {icons}
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Card;
