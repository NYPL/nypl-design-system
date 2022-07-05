import React from "react";

/**
 * Context used for patron data.
 */
export const HeaderPatronContext = React.createContext(null);

/**
 * Context Provider used only in the Header component for patron data.
 */
export const HeaderPatronProvider = ({ children, patronName = "" }) => {
  return (
    <HeaderPatronContext.Provider value={patronName}>
      {children}
    </HeaderPatronContext.Provider>
  );
};
