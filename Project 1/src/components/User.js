import { useDispatch } from 'react-redux';
import { delUser } from '../store/usersSlice';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const StyledLink = styled.a`
  color: blue;
  font-weight: 600;
`;

export const User = (props) => {
  const dispatch = useDispatch();

  return (
    <li>
      <Link to={`/user/${props.id}`}>
        <StyledLink>
          {props.name} {props.username}
        </StyledLink>
      </Link>
      <button onClick={() => dispatch(delUser(props.id))}>Delete</button>
    </li>
  );
};
