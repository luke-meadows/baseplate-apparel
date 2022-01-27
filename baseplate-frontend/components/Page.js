import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import { useRouter } from 'next/router';
import ScrollContainer from './ScrollContainer';
import { useContext } from 'react';
import { Ctx } from '../lib/CtxProvider';
import { useEffect } from 'react';

export default function Page({ children }) {
  // stops displaying products filters if page is changed from products.
  const { setShowFilters, stopScrolling } = useContext(Ctx);
  const router = useRouter();
  useEffect(() => {
    if (router.route !== '/products/[id]') {
      setShowFilters(false);
    }
  }, [router.pathname]);

  return (
    <StyledPage>
      <GlobalStyles />
      <Header />
      <ScrollContainer>
        <InnerScrollContainer
          className={stopScrolling ? 'pointer-events-off' : ''}
        >
          {children}
          <Footer />
        </InnerScrollContainer>
      </ScrollContainer>
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const PagePadding = styled.main`
  padding: 6rem 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (min-width: 1500px) {
    padding: 6rem 12rem;
  }
`;
export const PageBreak = styled.div`
  margin: 3rem 0;
`;
const InnerScrollContainer = styled.div`
  &.pointer-events-off {
    pointer-events: none;
  }
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: space-between;
`;
