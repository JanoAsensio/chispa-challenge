import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { home } from "../../../data";

type AboutProps = {
  aboutContent: typeof home.about;
};
const About: React.FC<AboutProps> = ({ aboutContent }) => {
  return (
    <Box
      as="section"
      w="100%"
      h="800px"
      paddingX="16px"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgColor="white"
    >
      <Heading
        as="h2"
        fontSize={{ base: "40px", lg: "72px" }}
        fontWeight="200"
        textAlign="center"
        lineHeight={{ base: "56px", lg: "98px" }}
        maxWidth="1055px"
        letterSpacing={{ base: "-0.02em", lg: "-0.04em" }}
        display="flex"
        flexDir="column"
      >
        <Text>
          {aboutContent.text1}{" "}
          <Text
            as="span"
            bgColor="blue"
            color="white"
            fontWeight="600"
            px="3"
            py="1"
          >
            {aboutContent.text2}
          </Text>{" "}
          <br />
          {aboutContent.text3}
        </Text>
      </Heading>
    </Box>
  );
};

export default About;
