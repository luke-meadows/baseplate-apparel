import { gql, useMutation } from '@apollo/client';
import { useContext } from 'react';
import styled from 'styled-components';
import { NavCtx } from '../lib/NavCtxProvider';
import Error from './Error';
import { CURRENT_USER_QUERY } from './User';

export default function Logout({ user }) {
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
  }
  return (
    <StyledLogout>
      <p>
        Logged in as:<span>{user.name}</span>
      </p>
      <div className="buttons">
        <button type="button" onClick={handleLogout}>
          Orders
        </button>
        <button type="button" onClick={handleLogout}>
          Signout
        </button>
      </div>
    </StyledLogout>
  );
}

const StyledLogout = styled.div`
  min-width: 50rem;
  position: fixed;
  right: 0;
  top: 6rem;
  background: #ebebe6;
  padding: 3rem;
  color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  box-shadow: -2px 2px 10px 1px rgba(11, 11, 11, 0.323);
  p {
    margin-bottom: 1rem;
  }
  span {
    margin: 0 1rem 0 0.5rem;
    color: black;
    text-transform: capitalize;
  }
  .buttons {
    display: flex;
    width: 100%;
  }
  .buttons > :first-child {
    margin-right: 0.5rem;
  }
  .buttons > :last-child {
    margin-left: 0.5rem;
  }
  button {
    height: 4rem;
    flex: 1;
    background: var(--main-blue);
  }
`;
