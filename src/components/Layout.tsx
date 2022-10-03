import React, { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import { Flex, useDisclosure } from "@chakra-ui/react";
import useWindowSize from "../hooks/useWindowSize";
import NavDesktop from "./Nav/NavDesktop";
import DrawerBooking from "./Nav/DrawerBooking";
import ModalNavMobile from "./Nav/ModalNavMobile";
import { footer, home, nav } from "../../data";

interface LayoutProps {
  navProps: typeof nav;
  homeProps: typeof home;
  footerProps: typeof footer;
}

const Layout: React.FC<LayoutProps> = ({
  navProps,
  homeProps,
  footerProps,
}) => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  // show Booking Drawer
  const { isOpen, onOpen, onClose } = useDisclosure();
  const showDrawerBooking = () => {
    onOpen();
  };

  // show Modal Nav
  const {
    isOpen: isOpenModalNav,
    onOpen: onOpenModalNav,
    onClose: onCloseModalNav,
  } = useDisclosure();

  // logica para ocultar el Nav al scrollear hacia abajo, y mostrarlo al scrollear hacia arriba:
  const [showNav, setShowNav] = useState(true);
  let lastScroll = 0;
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        setShowNav(true);
      }
      if (currentScroll > lastScroll) {
        setShowNav(false);
      }
      if (currentScroll < lastScroll) {
        setShowNav(true);
      }
      lastScroll = currentScroll;
    });
  }, [lastScroll, setShowNav]);

  return (
    <Flex direction="column" padding="0" justify="center" position="relative">
      {(isMobile() || isTablet()) && !isDesktop() && (
        <Nav
          content={navProps}
          openNav={() => onOpenModalNav()}
          showDrawerBooking={() => showDrawerBooking()}
          showNav={showNav}
        />
      )}
      {isDesktop() && (
        <NavDesktop
          showDrawerBooking={() => showDrawerBooking()}
          showNav={showNav}
          content={navProps}
        />
      )}
      <Home content={homeProps} />
      <Footer content={footerProps} />
      <DrawerBooking isOpen={isOpen} onClose={onClose} />
      <ModalNavMobile
        isOpen={isOpenModalNav}
        onClose={onCloseModalNav}
        showDrawerBooking={() => showDrawerBooking()}
        content={navProps}
      />
    </Flex>
  );
};

export default Layout;
