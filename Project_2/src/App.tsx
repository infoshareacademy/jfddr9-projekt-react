import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { UserList } from "./components/UserList";
import { AppWrapper } from "./components/AppWrapper";
import { filterUserByQuery } from "./utils/filterUserByQuery";
import { ErrorAlert } from "./components/ErrorAlert";
import { useContext, useState } from "react";
import { AppContext } from "./context/AppContext";

function App() {
  const [query, setQuery] = useState<string>("");
  const context = useContext(AppContext);
  return (
    <AppWrapper>
      <Header />
      <SearchField setQuery={setQuery} />
      {context?.isLoading && <LoadingSpinner />}
      {!context?.isLoading && context?.users && !context?.error && (
        <UserList users={filterUserByQuery(context?.users, query)} />
      )}
      {!context?.isLoading && context?.error && <ErrorAlert />}
    </AppWrapper>
  );
}

export default App;
