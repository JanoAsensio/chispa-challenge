import { extendTheme } from "@chakra-ui/react";
import { theme as chakraTheme } from "@chakra-ui/react";

const colors = {
  blue: "#3D63A9",
  hoverBlue: "#5c80c4",
  red: "#AA2275",
  green: "#ADC22F",
  black: "#2B2B2BCC",
  white: "#FFF",
  darkGrey: "#676767",
  lightGrey: "#F4F4F4",
  blueSky: "#17A3AB",
  orange: "#FF8429",
};

const styles = {
  global: {
    "html, body, #root": {
      height: "100%",
    },
  },
};

const fonts = {
  heading: `'canada-type-gibson', sans-serif`,
  body: `'canada-type-gibson', sans-serif`,
};

const breakpoints = {
  md: '768px',
  lg: '1024px',
  xl: "1440px",
};

const overrides = {
  ...chakraTheme,
  colors,
  styles,
  fonts,
  breakpoints,
};

const theme = extendTheme(overrides);

export default theme;
