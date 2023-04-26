import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { UserList } from "./components/UserList";
import { AppWrapper } from "./components/AppWrapper";
import { useEffect, useState } from "react";
import { filterUserByQuery } from "./utils/filterUserByQuery";
import { ErrorAlert } from "./components/ErrorAlert";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAzmVCG3zVoQZbJGk57GR2X6tHF9gvqp70",
  authDomain: "mati-10d63.firebaseapp.com",
  projectId: "mati-10d63",
  storageBucket: "mati-10d63.appspot.com",
  messagingSenderId: "695105336254",
  appId: "1:695105336254:web:6cbccac834b9b0265a3fef",
  measurementId: "G-5E6T7JTB8V"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);
function App() {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    const usersRef = collection(db, "List");
    getDocs(usersRef).then((querySnapshot) => {
      const users = querySnapshot.docs.map((queryDocumentSnapshot) => {
        return queryDocumentSnapshot.data();
      });
      setUsers(users);
      setIsLoading(false);
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
