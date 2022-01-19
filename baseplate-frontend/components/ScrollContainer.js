import { useContext, useEffect, useRef } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import styled from 'styled-components';
import { useState } from 'react/cjs/react.development';
import { CartCtx } from '../lib/CartCtxProvider';

export default function ScrollContainer({ children }) {
  const containerRef = useRef();
  const { stopScrolling, setSearchActive, setStopScrolling } =
    useContext(NavCtx);
  const { setCartActive } = useContext(CartCtx);
  const [scrollTo, updateScrollTo] = useState(0);

  useEffect(() => {
    const scrollY = window.scrollY;
    updateScrollTo(scrollY);
    if (stopScrolling) {
      containerRef.current.style = `position: fixed;
          width: 100vw; top: -${scrollY}px;`;
    } else {
      containerRef.current.style = `position: initial`;
      window.scrollTo(0, scrollTo);
    }
  }, [stopScrolling]);

  function handleClick(e) {
    if (!stopScrolling) return;
    setSearchActive(false);
    setStopScrolling(false);
    setCartActive(false);
  }
  return (
    <StyledScrollContainer
      ref={containerRef}
      className={stopScrolling ? 'page-disabled' : ''}
      onClick={handleClick}
    >
      {children}
    </StyledScrollContainer>
  );
}

const StyledScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
