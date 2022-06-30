import React from "react";

/**
 * Context used for patron data.
 */
export const PatronContext = React.createContext(null);

/**
 * Context Provider used only in the Header component for patron data.
 */
export const PatronProvider = ({ children, patronName = "" }) => {
  return (
    <PatronContext.Provider value={patronName}>
      {children}
    </PatronContext.Provider>
  );
};
