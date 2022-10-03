import React from "react";
import { Text } from "@chakra-ui/react";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services/Services";
import { home } from "../../../data";

interface HomeProps {
  content: typeof home;
}

const Home: React.FC<HomeProps> = ({ content }) => {
  return (
    <>
      <Hero heroContent={content.hero} />
      <About aboutContent={content.about} />
      <Services servicesContent={content.services} />
    </>
  );
};

export default Home;
