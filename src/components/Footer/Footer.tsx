import React from "react";
import { Text, Box } from "@chakra-ui/react";
import Social from "./Social";
import { footer } from "../../../data";

interface FooterProps {
  content: typeof footer;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <Box as="footer">
      <Social content={content}/>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={{ base: "138px", xl: "195px" }}
        bgColor="blue"
      >
        <Text
          fontSize={{ base: "32px", xl: "72px" }}
          textAlign="center"
          fontWeight="300"
          color="white"
          w="full"
        >
          {content.subText}
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
