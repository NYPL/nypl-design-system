import { extendTheme } from "@chakra-ui/react";
import { mergeWith } from "@chakra-ui/utils";
import React from "react";

import { ChakraProvider, ChakraProviderProps } from "./internalChakraProvider";
import nyplTheme from "./index";

const DSProvider = ({
  children,
  colorModeManager,
  disableGlobalStyle = false,
  resetCSS = true,
  theme = {},
}: React.PropsWithChildren<ChakraProviderProps>) => {
  const newTheme = extendTheme(mergeWith(nyplTheme, theme));
  return (
    <ChakraProvider
      colorModeManager={colorModeManager}
      theme={newTheme}
      resetCSS={resetCSS}
      disableGlobalStyle={disableGlobalStyle}
    >
      {children}
    </ChakraProvider>
  );
};

export default DSProvider;
