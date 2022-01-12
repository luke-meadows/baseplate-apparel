import { useContext, useEffect, useRef } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import styled from 'styled-components';

export default function ScrollContainer({ children }) {
  const containerRef = useRef();
  const { stopScrolling, scrollTop } = useContext(NavCtx);
  useEffect(() => {
    if (stopScrolling) {
      const activeScrollTop = `activeScrollTop${scrollTop}`;
      console.log(activeScrollTop);
      containerRef.current.style = `position: fixed;
          width: 100vw; top: ${scrollTop - scrollTop * 2 + 12}px;`;
    } else {
      const inActiveScrollTop = `inActiveScrollTop${scrollTop}`;
      console.log(inActiveScrollTop);
      containerRef.current.style = `position: initial`;
      window.scrollTo(0, scrollTop);
    }
  }, [stopScrolling]);
  return (
    <StyledScrollContainer ref={containerRef} aria-disabled={stopScrolling}>
      <>{children}</>
    </StyledScrollContainer>
  );
}

const StyledScrollContainer = styled.div`
  &[aria-disabled='true'] {
    filter: blur(20px);
  }
`;
