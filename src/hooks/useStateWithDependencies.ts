import { useEffect, useState } from "react";

/**
 * DS internal helper hook to use state with prop dependencies.
 *
 * This hook should NOT be used by consuming apps. DS components should use
 * this hook rather than useState() whenever a change in state is expected
 * for a given prop from a consuming app. The hook updates the DS component
 * with useEffect().
 */
function useStateWithDependencies(initialValue: any): typeof initialValue {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, setValue];
}

export default useStateWithDependencies;
