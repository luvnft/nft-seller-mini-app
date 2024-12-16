import { useEffect, useState } from "react";

export function useInitialize<T>(func: () => T, deps: unknown[] = []) {
  const [state, setState] = useState<T | undefined>();
  useEffect(() => {
    setState(func());
  }, deps);

  return state;
}
