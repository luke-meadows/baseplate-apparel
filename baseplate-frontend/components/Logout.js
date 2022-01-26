import { gql, useMutation } from '@apollo/client';
import { useContext } from 'react';
import styled from 'styled-components';
import { NavCtx } from '../lib/NavCtxProvider';
import { CURRENT_USER_QUERY } from './User';

export default function Logout({ user }) {
  const { setAccountActive, setStopScrolling } = useContext(NavCtx);
  const LOGOUT_MUTATION = gql`
    mutation {
      endSession
    }
  `;
  const [endSession, { data, error, loading }] = useMutation(LOGOUT_MUTATION, {
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  console.log(data);
  async function handleLogout() {
    await endSession();
    setAccountActive(false);
    setStopScrolling(false);
  }
  return (
    <StyledLogout>
      <p>
        Logged in as: <span>{user.name}</span>
      </p>
      <button type="button" onClick={handleLogout}>
        Signout
      </button>
    </StyledLogout>
  );
}

const StyledLogout = styled.div`
  position: fixed;
  right: 0;
  top: 6rem;
  background: #ebebe6;
  padding: 3rem;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    margin: 0 1rem 0 0.5rem;
    color: black;
  }
  button {
    background: var(--main-blue);
    display: block;
    width: 100%;
    padding: 0.59rem 3rem;
    font-size: 1.3rem;
    margin-top: 1rem;
  }
`;
