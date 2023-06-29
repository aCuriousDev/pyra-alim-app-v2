import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props) => ({
    body: {
      bg: mode("#e6e3e1", "#121215")(props),
    },
  }),
};

const components = {
  Text: {
    variants: {
      "section-paragraph": {
        textAlign: "justify",
        textIndent: ".6em",
      },
    },
  },
  Link: {
    baseStyle: (props) => ({
      color: mode("blue.500", "teal.400")(props),
      textUnderlineOffset: 3,
    }),
  },
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components });
export default theme;
