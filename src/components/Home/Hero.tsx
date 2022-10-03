import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import bgImageMobile from "../../../public/img/bg-home-mobile.png";
import bgImageDesktop from "../../../public/img/bg-home-desktop.png";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { home } from "../../../data";

type HeroProps = {
  heroContent: typeof home.hero;
};

const Hero: React.FC<HeroProps> = ({ heroContent }) => {
  const { isMobile } = useWindowSize();
  return (
    <Box as="section" w="100%" position="relative" h="800px">
      <Box w="100%" h="800px" position="fixed" zIndex="-10">
        <Image
          src={isMobile() ? bgImageMobile : bgImageDesktop}
          alt="background-hero"
          layout={isMobile() ? "responsive" : "fixed"}
        />
      </Box>

      <Heading
        as="h1"
        position="absolute"
        top="45%"
        color="white"
        fontSize={{ base: "60px", lg: "100px" }}
        fontWeight="700"
        textAlign="left"
        lineHeight={{ base: "68px", lg: "110px" }}
        px={{ base: "23px", xl: "84px" }}
        w={{ base: "320px", lg: "500px", xl: "650px" }}
      >
        {heroContent.title}
      </Heading>
    </Box>
  );
};

export default Hero;
