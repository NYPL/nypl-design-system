import { createContext, useContext } from "react";

interface RadioGroupContextValue {
  isDisabled: boolean;
  isInvalid: boolean;
  isRequired: boolean;
  name: string;
}

export const RadioGroupContext = createContext<
  RadioGroupContextValue | undefined
>(undefined);

export const useRadioGroup = () => useContext(RadioGroupContext);
