import { createContext, FC, ReactNode, useMemo, useState } from "react";

interface IErrorContext {
  error: { message: string } | null;
  setError: Function;
}

export const ErrorContext = createContext<IErrorContext>({
  error: null,
  setError: () => {},
});

interface ErrorContextProviderProps {
  children: ReactNode;
}

export const ErrorContextProvider: FC<ErrorContextProviderProps> = ({
  children,
}) => {
  const [error, setError] = useState(null);
  const ctx = useMemo(() => ({ error, setError }), [error]);
  return <ErrorContext.Provider value={ctx}>{children}</ErrorContext.Provider>;
};
