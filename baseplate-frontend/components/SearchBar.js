import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useRouter } from 'next/router';

export default function SearchBar({ searchActive, setSearchActive }) {
  //   const { searchActive, setSearchActive } = useContext(NavCtx);
  const searchbarRef = useRef();
  const router = useRouter();
  useEffect(() => {
    searchbarRef.current?.focus();
  }, [searchActive]);

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = e.target.search;
    setSearchActive(false);
    router.push(`/search/${value}`);
  }
  return (
    <StyledSearchBar layout onSubmit={(e) => handleSubmit(e)}>
      <input
        autoComplete="off"
        ref={searchbarRef}
        name="search"
        type="search"
        placeholder="search"
        type="search"
      />
    </StyledSearchBar>
  );
}

export const StyledSearchBar = styled(motion.form)`
  input {
    color: white;
    background: var(--Transparent-black);
    display: flex;
    align-items: center;
    border-radius: 0.5rem;
    border: 2px solid grey;
    font-size: 1.5rem;
    outline: none;
    padding: 0.5rem 1rem;
  }
`;
