import { createContext, useContext } from "react";

interface ButtonGroupContextValue {
  isDisabled: boolean;
}

export const ButtonGroupContext = createContext<
  ButtonGroupContextValue | undefined
>(undefined);

export const useButtonGroup = () => useContext(ButtonGroupContext);
