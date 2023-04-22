import { useDispatch } from 'react-redux';
import { searchUser } from '../store/usersSlice';
import { usersListContext } from '../providers/Content';
import { useContext } from 'react';

export const SearchBox = () => {
  const dispatch = useDispatch();

  const { setIsSearched } = useContext(usersListContext);

  const search = (e) => {
    if (e.target.value !== '') {
      setIsSearched(true);
      dispatch(searchUser(e.target.value));
    } else {
      setIsSearched(false);
    }
  };

  return <input type="text" onChange={(e) => search(e)} />;
};
