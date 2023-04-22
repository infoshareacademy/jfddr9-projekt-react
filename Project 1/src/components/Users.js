import { useSelector } from 'react-redux';
import { User } from './User';
import { usersListContext } from '../providers/Content';
import { useContext } from 'react';

export const Users = () => {
  const usersArray = useSelector((state) => state.users.users);
  const usersSearchArray = useSelector((state) => state.users.searchUsers);

  const { isSearched } = useContext(usersListContext);

  const currentArray = isSearched ? usersSearchArray : usersArray;

  return (
    <ol>
      {currentArray.length > 0 ? (
        currentArray.map((user) => {
          return <User key={user.id} name={user.name} username={user.username} id={user.id} />;
        })
      ) : (
        <span>Users List Empty!</span>
      )}
    </ol>
  );
};
