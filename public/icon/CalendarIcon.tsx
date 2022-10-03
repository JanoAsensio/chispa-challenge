import { Icon } from "@chakra-ui/react";
import React from "react";

const CalendarIcon = (props) => (
  <Icon
    svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7 3H8.5V5H15.5V3H17V5H21V9.5V11V21H3V11V9.5V5H7V3ZM15.5 6.5V8H17V6.5H19.5V9.5H4.5V6.5H7V8H8.5V6.5H15.5ZM4.5 11V19.5H19.5V11H4.5Z"
      fill={`${props.color}`}
    />
  </Icon>
);

export default CalendarIcon;
