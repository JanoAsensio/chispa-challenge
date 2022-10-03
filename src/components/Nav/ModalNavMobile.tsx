import React from "react";
import logo from "../../../public/img/logo.png";
import Image from "next/image";
import CalendarIcon from "../../../public/icon/CalendarIcon";
import LenguageIcon from "../../../public/icon/LenguageIcon";
import PlusIcon from "../../../public/icon/PlusIcon";
import LessIcon from "../../../public/icon/LessIcon";
import { useToast } from "@chakra-ui/react";
import { nav } from "../../../data";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from "@chakra-ui/react";

type ModalNavMobileProps = {
  onClose: () => void;
  isOpen: boolean;
  showDrawerBooking: () => void;
  content: typeof nav;
};
const ModalNavMobile: React.FC<ModalNavMobileProps> = ({
  onClose,
  isOpen,
  showDrawerBooking,
  content,
}) => {
  const toast = useToast();
  const disabled = () => {
    toast({
      description: "Aun no habilitamos esta funcionalidad",
      status: "info",
      duration: 9000,
      isClosable: true,
      containerStyle: {
        backgroundColor: "#ffa040",
        borderRadius: "8px",
      },
    });
  };

  return (
    <Box h="auto" overflow="hidden">
      <Drawer placement={"top"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton mt="49px" mr="12px" />

          <DrawerHeader
            border="none"
            maxHeight="124px"
            pb="24px"
            mt="56px"
            py="0"
          >
            <Image src={logo} height="14px" width="80px" />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing="0">
              <ItemNav
                contents={content[0].title}
                disabled={() => disabled()}
              />
              <Box w="full" borderBottom="2px" borderColor="lightGrey" />
              <ItemNav
                contents={content[1].title}
                disabled={() => disabled()}
              />
              <Accordion allowMultiple w="full">
                <AccordionItem width="full">
                  {({ isExpanded }) => (
                    <>
                      <AccordionButton
                        border="none"
                        display="flex"
                        justifyContent="space-between"
                        p="0"
                        w="full"
                        h="73px"
                        fontSize="32px"
                        fontWeight="600"
                        lineHeight="40"
                        letterSpacing="-0.02em"
                        bgColor="white"
                      >
                        {content[2].title}
                        {isExpanded ? (
                          <LessIcon mr="4px" />
                        ) : (
                          <PlusIcon mr="4px" />
                        )}
                      </AccordionButton>

                      <AccordionPanel pb="16px">
                        {content[2].submenuDesk.map((item, i) => {
                          return (
                            <ItemNav
                              key={i}
                              contents={item.title}
                              disabled={() => disabled()}
                            />
                          );
                        })}
                      </AccordionPanel>
                    </>
                  )}
                </AccordionItem>
              </Accordion>
            </VStack>
            <VStack pb="40px">
              <Button
                leftIcon={<LenguageIcon />}
                bgColor="white"
                fontSize="17px"
                fontWeight="400"
                alignSelf="start"
                mt="24px"
                mb="37px"
                onClick={() => disabled()}
              >
                {content[3].title}
              </Button>
              <Button
                leftIcon={<CalendarIcon color="white" />}
                w="full"
                h="64px"
                color="white"
                bgColor="blue"
                _hover={{ bgColor: "hoverBlue" }}
                onClick={() => showDrawerBooking()}
              >
                {content[4].title}
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default ModalNavMobile;

type IncomingProps = {
  contents: string;
  disabled?: () => void;
};

const ItemNav = ({ contents, disabled }: IncomingProps) => {
  return (
    <Button
      display="flex"
      justifyContent="start"
      p="0"
      w="full"
      h="73px"
      fontSize="32px"
      fontWeight="600"
      lineHeight="40"
      letterSpacing="-0.02em"
      bgColor="white"
      onClick={() => disabled()}
    >
      {contents}
    </Button>
  );
};
