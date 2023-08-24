"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

import { extendTheme } from "@chakra-ui/react";

import "@fontsource/clicker-script";
import "@fontsource/jost";

const colors = {
  main: {
    100: "#b4c5d459",
    200: "#b4c5d4ad",
    400: "#b4c4d5",
  },
  text: {
    400: "#67544e",
  },
};

const fonts = {
  body: `"Jost", sans-serif`,
  heading: `"Clicker Script", cursive`,
};

export const theme = extendTheme({ colors, fonts });

export function Providers({ children }) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>{children}</ChakraProvider>
    </CacheProvider>
  );
}
