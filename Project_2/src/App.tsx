import { Header } from "./components/Header";
import { SearchField } from "./components/SearchField";
import { LoadingSpinner } from "./components/LoadingSpinner";
import { UserList } from "./components/UserList";
import { AppWrapper } from "./components/AppWrapper";
import { useEffect, useState } from "react";
import { filterUserByQuery } from "./utils/filterUserByQuery";
import { ErrorAlert } from "./components/ErrorAlert";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore/lite";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDsiLn8pVDat30jCvJCxSId1mwMos1ISww",
  authDomain: "project02-af967.firebaseapp.com",
  projectId: "project02-af967",
  storageBucket: "project02-af967.appspot.com",
  messagingSenderId: "446581265582",
  appId: "1:446581265582:web:8f14d25eaa5b5ddffcc93f",
  measurementId: "G-T1S6YC0DFC",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

function App() {
  const [users, setUsers] = useState<any>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const usersRef = collection(db, "usersList");
    getDocs(usersRef).then((querySnapshot) => {
      const usersList = querySnapshot.docs.map((queryDocumentSnapshot) => {
        return queryDocumentSnapshot.data();
      });
      setUsers(usersList);
      setIsLoading(false);
    });
  }, []);

  const [name, setName] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const [query, setQuery] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const usersRef = collection(db, "usersList");
    addDoc(usersRef, {name, username})
  }

  return (
    <AppWrapper>
      <form onSubmit={handleSubmit}>
        <input name="name" onChange={(e) => {setName(e.target.value)}}/>
        <input name="username" onChange={(e) => {setUsername(e.target.value)}}/>
        <button type="submit">Dodaj</button>
      </form>
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
