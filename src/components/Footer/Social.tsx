import React from "react";
import { Box, Flex, HStack, Show, Text } from "@chakra-ui/react";
import logo from "../../../public/img/logo.png";
import Image from "next/image";
import NextLink from "next/link";
import YoutubeIcon from "../../../public/icon/YoutubeIcon";
import FacebookIcon from "../../../public/icon/FacebookIcon";
import TwitterIcon from "../../../public/icon/TwitterIcon";
import InstagramIcon from "../../../public/icon/InstagramIcon";
import { footer } from "../../../data";

type SocialProps = {
  content: typeof footer;
};

const Social: React.FC<SocialProps> = ({ content }) => {
  const colors = ["blue", "green", "red", "blueSky", "orange"];

  const socialIcon = [
    { title: "youtube", icon: <YoutubeIcon />, color: "#c4302b" },
    { title: "facebook", icon: <FacebookIcon />, color: "#3b5998" },
    { title: "twitter", icon: <TwitterIcon />, color: "#00acee" },
    { title: "instagram", icon: <InstagramIcon />, color: "#e1306c" },
  ];

  return (
    <Flex
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      paddingY="80px"
      paddingX={{ base: "24px", lg: "84px" }}
      bgColor="white"
    >
      <Flex marginBottom="80px" width="100%" justifyContent="center">
        {colors.map((color, i) => {
          return <Flex key={i} border="1px" borderColor={color} width="20%" />;
        })}
      </Flex>
      <Flex
        direction={{ base: "column", lg: "row" }}
        justifyContent={{ lg: "space-between" }}
        width={{ lg: "100%" }}
        alignItems={{ lg: "center" }}
      >
        <Flex direction="column" alignItems="center" width={{ lg: "300px" }}>
          <Image src={logo} />
          <Text
            fontSize="15px"
            fontWeight="400"
            lineHeight="24px"
            textAlign="center"
            marginTop="26px"
            marginBottom="24px"
          >
            {content.text}
          </Text>
          <HStack
            marginBottom={{ base: "80px", lg: "0" }}
            width="192px"
            marginX="auto"
            spacing="auto"
          >
            {content.social.map((item, i) => {
              return (
                <NextLink key={i} href={item.url} passHref>
                  <a target="_blank">
                    {socialIcon.map((i) => {
                      return <Box>{item.title === i.title && i.icon}</Box>;
                    })}
                  </a>
                </NextLink>
              );
            })}
          </HStack>
        </Flex>
        <Flex width={{ lg: "300px" }} direction="column" alignItems="center">
          <Text
            fontSize="24px"
            fontWeight="600"
            lineHeight="32px"
            marginBottom="16px"
          >
            {content.contact.title}
          </Text>
          <Text fontSize="17px" fontWeight="400" lineHeight="28px">
            T: {content.contact.tel}
          </Text>
          <NextLink href={`mailto:${content.contact.email}`}>
            <a target="_blank">
              <Text
                fontSize="17px"
                fontWeight="400"
                lineHeight="28px"
                cursor="pointer"
              >
                E: {content.contact.email}
              </Text>
            </a>
          </NextLink>
        </Flex>
        <Show breakpoint="(min-width: 1024px)">
          <Flex
            paddingLeft="60px"
            width={{ lg: "300px" }}
            direction="column"
            textAlign="start"
          >
            {content.proposition.map((item, i) => {
              return (
                <NextLink key={i} href={item.url}>
                  {item.title}
                </NextLink>
              );
            })}
          </Flex>
        </Show>
      </Flex>
    </Flex>
  );
};

export default Social;
