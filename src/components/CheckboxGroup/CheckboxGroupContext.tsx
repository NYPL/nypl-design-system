import { createContext, useContext } from "react";

interface CheckboxGroupContextValue {
  isDisabled: boolean;
  isInvalid: boolean;
  isRequired: boolean;
  name: string;
}

export const CheckboxGroupContext = createContext<
  CheckboxGroupContextValue | undefined
>(undefined);

export const useCheckboxGroup = () => useContext(CheckboxGroupContext);
