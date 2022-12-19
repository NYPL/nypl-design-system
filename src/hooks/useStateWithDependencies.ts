import { useEffect, useState } from "react";

/**
 * DS internal helper hook to use state with prop dependencies.
 */
function useStateWithDependencies(initialValue: any): typeof initialValue {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, setValue];
}

export default useStateWithDependencies;
