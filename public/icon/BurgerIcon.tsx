import { Icon } from "@chakra-ui/react";
import React from "react";

const BurgerIcon = (props) => (
  <Icon
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 6H20V8H4V6Z" fill="#3D63A9" />
    <path d="M4 11H20V13H4V11Z" fill="#3D63A9" />
    <path d="M20 16H10V18H20V16Z" fill="#3D63A9" />
  </Icon>
);

export default BurgerIcon;
