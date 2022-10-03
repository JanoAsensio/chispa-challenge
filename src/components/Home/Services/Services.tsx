import React from "react";
import { Box, Flex, Heading, Hide, Show, Text } from "@chakra-ui/react";
import Card from "./Card";
import useWindowSize from "../../../hooks/useWindowSize";
import Carousel from "react-elastic-carousel";

import bgCard1 from "../../../../public/img/bg-card-1.png";
import bgCard2 from "../../../../public/img/bg-card-2.png";
import bgCard3 from "../../../../public/img/bg-card-3.png";

import bgCard1Desktop from "../../../../public/img/bg-card-1-desktop.png";
import bgCard2Desktop from "../../../../public/img/bg-card-2-desktop.png";
import bgCard3Desktop from "../../../../public/img/bg-card-3-desktop.png";

import textCard1 from "../../../../public/img/text-card-1.png";
import textCard2 from "../../../../public/img/text-card-2.png";
import textCard3 from "../../../../public/img/text-card-3.png";

import BedIcon from "../../../../public/icon/BedIcon";
import CutleryIcon from "../../../../public/icon/CutleryIcon";
import ActivityIcon from "../../../../public/icon/ActivityIcon";
import { home } from "../../../../data";

type ServicesProps = {
  servicesContent: typeof home.services;
};
const Services: React.FC<ServicesProps> = ({ servicesContent }) => {
  const { isMobile } = useWindowSize();

  const cardsInfo = [
    {
      img: isMobile() ? bgCard1 : bgCard1Desktop,
      bgColor: "blue",
      subtitle: textCard1,
      icons: [<BedIcon />, <ActivityIcon />],
    },
    {
      img: isMobile() ? bgCard2 : bgCard2Desktop,
      bgColor: "green",
      subtitle: textCard2,
      icons: [<CutleryIcon />, <BedIcon />, <ActivityIcon />],
    },
    {
      img: isMobile() ? bgCard3 : bgCard3Desktop,
      bgColor: "red",
      subtitle: textCard3,
      icons: [<CutleryIcon />, <ActivityIcon />],
    },
  ];

  return (
    <Box as="section" bgColor="white" textAlign="left">
      <Box
        bgColor="lightGrey"
        rounded={{ base: "16px", lg: "0" }}
        borderTopRightRadius={{ lg: "16px" }}
        borderBottomRightRadius={{ lg: "16px" }}
        display="flex"
        pb="20px"
        letterSpacing="-0.02em"
        pt="100px"
        paddingX="24px"
        w={{ base: "100%", lg: "1000px", xl: "1248px" }}
        h={{ xl: "776px" }}
        flexDir="column"
      >
        <Heading
          as="h3"
          fontSize="48px"
          fontWeight="600"
          lineHeight="56px"
          mb="24px"
        >
          {servicesContent.title}
        </Heading>
        <Text
          fontSize="20px"
          fontWeight="200"
          lineHeight="32px"
          mb="49px"
          maxWidth="520px"
        >
          {servicesContent.subtitle}
        </Text>{" "}
        <Hide breakpoint="(min-width: 1024px)">
          <Flex direction="column" alignItems="center">
            {cardsInfo.map((info, i) => {
              return (
                <Card
                  key={i}
                  img={info.img}
                  bgColor={info.bgColor}
                  location={servicesContent.card.location}
                  subtitle={info.subtitle}
                />
              );
            })}
          </Flex>
        </Hide>
        <Show breakpoint="(min-width: 1024px)">
          {/* @ts-ignore */}
          <Carousel itemsToShow={1} pagination={false}>
            {cardsInfo.map((info, index) => {
              return (
                <Card
                  location={servicesContent.card.location}
                  key={index}
                  img={info.img}
                  bgColor={info.bgColor}
                  text={servicesContent.card.text}
                  subtitle={info.subtitle}
                  icons={info.icons}
                />
              );
            })}
          </Carousel>
        </Show>
      </Box>
    </Box>
  );
};

export default Services;
