import { useContext, useEffect, useRef } from 'react';
import { Ctx } from '../lib/CtxProvider';
import styled from 'styled-components';
import { useState } from 'react/cjs/react.development';

export default function ScrollContainer({ children }) {
  const containerRef = useRef();
  const {
    setCartActive,
    stopScrolling,
    setSearchActive,
    setStopScrolling,
    setAccountActive,
  } = useContext(Ctx);
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

  function handleClick() {
    if (!stopScrolling) return;
    setSearchActive(false);
    setStopScrolling(false);
    setCartActive(false);
    setAccountActive(false);
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

const StyledScrollContainer = styled.div``;
