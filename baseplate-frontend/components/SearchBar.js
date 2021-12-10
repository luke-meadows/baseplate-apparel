import styled from 'styled-components';
import { NavCtx } from '../lib/NavCtxProvider';
import { useContext, useEffect, useRef } from 'react';

export default function SearchBar() {
  const { searchActive, setSearchActive } = useContext(NavCtx);
  const searchbarRef = useRef();

  useEffect(() => {
    searchbarRef.current.focus();
  }, [searchActive]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target.search.value);
    setSearchActive(false);
  }

  return (
    <Outer>
      <Bar onSubmit={handleSubmit}>
        <span className="material-icons">search</span>
        <input
          autoComplete="off"
          ref={searchbarRef}
          name="search"
          type="search"
          placeholder="search"
        ></input>
      </Bar>
    </Outer>
  );
}

const Bar = styled.form`
  color: white;
  background: var(--Transparent-black);
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 1rem;
  width: 50rem;
  position: absolute;
  top: 6rem;
  right: 50%;
  transform: translateX(50%);
  z-index: 2;
  input {
    background: none;
    outline: none;
    border: none;
    font-size: 2rem;
    color: white;
    padding-left: 1rem;
    font-family: 'Poppins';
    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
`;

const Outer = styled.div`
  z-index: 2;
  position: absolute;
  height: calc(100vh - 6rem);
  width: 100vw;
  top: 6rem;
  background: #02e1f5a3;
`;
