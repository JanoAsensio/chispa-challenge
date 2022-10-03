import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Text,
} from "@chakra-ui/react";
import CardBooking from "./CardBooking";

import useWindowSize from "../../hooks/useWindowSize";

import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../../constants/config";

type DrawerBookingProps = {
  isOpen: boolean;
  onClose: () => void;
};
const DrawerBooking: React.FC<DrawerBookingProps> = ({ onClose, isOpen }) => {
  const { isMobile, isTablet, isDesktop } = useWindowSize();

  const size = (isMobile() || isTablet()) && !isDesktop() ? "full" : "lg";

  //TODO incorporar manejadores de estado isLoading, error ...
  const { data, isLoading, error } = useQuery(
    ["booking"],
    () =>
      fetch(`${API_URL}/api/hotels/availability`).then((response) =>
        response.json()
      ),
    { enabled: isOpen }
  );

  return (
    <Drawer onClose={onClose} isOpen={isOpen} size={size}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton mt="56px" mr="12px" />
        <DrawerHeader
          fontSize="32px"
          fontWeight="600"
          letterSpacing="-0.02em"
          pt="54px"
          pb="38px"
          pl="40px"
        >
          <Text>Reservar</Text>
        </DrawerHeader>
        <DrawerBody>
          {data?.map((info, i) => {
            return (
              <CardBooking
                key={i}
                img={info.img}
                iconType={info.iconType}
                title={info.title}
                activity={info.activity}
                price={info.price}
              />
            );
          })}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerBooking;
