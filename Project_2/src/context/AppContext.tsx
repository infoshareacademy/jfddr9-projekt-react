import { createContext, useEffect, useState, ReactNode } from "react";
import { UserType } from "../components/User";

type AppContextProps = {
  children: ReactNode;
};

export type AppContextProviderType = {
  users: UserType[];
  error: boolean;
  isLoading: boolean;
};

export const AppContext = createContext<AppContextProviderType | undefined>(
  undefined
);

export const AppContextProvider = ({ children }: AppContextProps) => {
  const [users, setUsers] = useState<UserType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data as UserType[]);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, []);

  return (
    <AppContext.Provider value={{ users, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
};
