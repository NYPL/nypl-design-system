import { createContext, useContext } from "react";

export const ButtonGroupContext = createContext<boolean | undefined>(undefined);

export const useButtonGroup = () => useContext(ButtonGroupContext);
