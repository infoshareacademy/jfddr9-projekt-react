import { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../api/firebase";
import { Button } from "../Button";
import { SmallButton } from "../SmallButton";
import { NewDiv } from "../Divider";
import { Paragraph } from "../NewParagraph";
import { NewColumnDiv } from "../NewColumnDiv";
import { SmallButtoni } from "../SmallButtoni";

export const Form = () => {
  const [architects, setArchitects] = useState([]);
  const [draftId, setDraftId] = useState(null);
  const architectsCollection = collection(db, "architects");

  const getArchitects = (querySnapshot) => {
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  };

  const getFormData = (event) => {
    event.preventDefault();

    const { username, name, email } = event.currentTarget.elements;
    const architect = {
      username: username.value,
      name: name.value,
      email: email.value,
    };

    event.currentTarget.reset();
    return architect;
  };

  const handleSubmit = (event) => {
    addDoc(architectsCollection, getFormData(event));
  };

  const handleDelete = (id) => {
    const docRef = doc(db, "architects", id);
    deleteDoc(docRef);
  };

  const handleUpdate = async (event, docId) => {
    const docRef = doc(db, "architects", docId);
    await updateDoc(docRef, getFormData(event));

    setDraftId(null);
  };

  useEffect(() => {
    onSnapshot(architectsCollection, (querySnapshot) => {
      const architects = getArchitects(querySnapshot);
      setArchitects(architects);
    });
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Podaj username:</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="name">Podaj imię:</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Podaj email:</label>
          <input type="text" name="email" id="email" />
        </div>
        <Button
          colorTegoButtona="#5970FC"
          nazwaTegoButtona="Dodaj architekta"
        />
      </form>
      <ul>
        {architects.map(({ id, username, name, email }) => (
          <li data-id={id} key={id}>
            {draftId !== id ? (
              <>
                <NewColumnDiv>
                  <Paragraph textContent={`Username: ${username}`} />
                  <Paragraph textContent={`Imię: ${name}`} />
                  <Paragraph textContent={`Email: ${email}`} />
                </NewColumnDiv>
                <NewDiv>
                  {" "}
                  <SmallButton
                    colorTegoSmallButtona="#FF9300"
                    nazwaTegoSmallButtona="Usuń architekta"
                    onClick={() => handleDelete(id)}
                  />
                  <SmallButton
                    colorTegoSmallButtona="#FF9300"
                    nazwaTegoSmallButtona="Zaktualizuj dane architekta"
                    onClick={() => setDraftId(id)}
                  />
                </NewDiv>
              </>
            ) : (
              <form onSubmit={(e) => handleUpdate(e, id)}>
                <div>
                  <label htmlFor="username">Podaj username:</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    defaultValue={username}
                  />
                </div>
                <div>
                  <label htmlFor="name">Podaj imię:</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={name}
                  />
                </div>
                <div>
                  <label htmlFor="age">Podaj email:</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    defaultValue={email}
                  />
                </div>
                <SmallButtoni
                  name='Zatwierdź'
                  color='green'
                  type="submit"
                >
                  Zatwierdź
                </SmallButtoni>
                <SmallButtoni
                name='Anuluj edycję'
                color='red'
                  type="button"
                  onClick={() => setDraftId(null)}
                />
              </form>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};
