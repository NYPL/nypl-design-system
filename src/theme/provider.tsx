import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./index";

const DSProvider = ({ children }: React.PropsWithChildren<{}>) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
);

export default DSProvider;
