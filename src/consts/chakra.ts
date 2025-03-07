import { extendTheme, ThemeConfig } from "@chakra-ui/react";

export const chakraThemeConfig: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const chakraTheme = extendTheme({
  config: chakraThemeConfig,
  fonts: {
    heading: `Montserrat, sans-serif`,
    body: `Montserrat, sans-serif`,
  },
});
