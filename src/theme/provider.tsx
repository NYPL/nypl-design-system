import React from "react";
import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import theme from "./index";

const DSProvider = ({
  children,
  colorModeManager,
}: React.PropsWithChildren<ChakraProviderProps>) => (
  <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
    {children}
  </ChakraProvider>
);

export default DSProvider;
