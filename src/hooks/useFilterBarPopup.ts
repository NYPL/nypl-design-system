import { useState } from "react";

/**
 * The `useFilterBarPopup` hook returns an object containing all the functions and state needed to control a FilterBarPopup component and its child components.
 * The returned object includes props to handle a filter module overlay: a boolean value representing the current module state: `isModalOpen`,
 * an `onToggle` function to change the module state or alternatively `onOpen` and `onClose` functions.
 */

export default function useFilterBarPopup() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleToggle = () => setIsModalOpen(!isModalOpen);

  return {
    isModalOpen,
    onOpen: () => setIsModalOpen(true),
    onClose: () => setIsModalOpen(false),
    onToggle: handleToggle,
  };
}
