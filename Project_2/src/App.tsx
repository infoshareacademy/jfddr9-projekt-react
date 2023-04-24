import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { UserList } from "./components/UserList";
import { AppWrapper } from "./components/AppWrapper";
import { useEffect, useState } from "react";
import { filterUserByQuery } from "./utils/filterUserByQuery";
import { ErrorAlert } from "./components/ErrorAlert";

function App() {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data as any);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(true);
      });
  }, []);

  const [query, setQuery] = useState("");
  return (
    <AppWrapper>
      <Header />
      <SearchField setQuery={setQuery} />
      {isLoading && <LoadingSpinner />}
      {!isLoading && users && !error && (
        <UserList users={filterUserByQuery(users, query)} />
      )}
      {!isLoading && error && <ErrorAlert />}
    </AppWrapper>
  );
}

export default App;
