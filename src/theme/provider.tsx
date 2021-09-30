import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./index";

const DSProvider = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default DSProvider;
