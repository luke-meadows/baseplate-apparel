import { useContext, useEffect, useRef } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import styled from 'styled-components';
import { useState } from 'react/cjs/react.development';

export default function ScrollContainer({ children }) {
  const containerRef = useRef();
  const { stopScrolling } = useContext(NavCtx);
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

  return (
    <StyledScrollContainer
      ref={containerRef}
      className={stopScrolling ? 'disabled' : ''}
    >
      {children}
    </StyledScrollContainer>
  );
}

const StyledScrollContainer = styled.div``;
