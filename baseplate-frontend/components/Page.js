import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import { CartCtxProvider } from '../lib/CartCtxProvider';
import { useRouter } from 'next/router';

import ScrollContainer from './ScrollContainer';
import { useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { useEffect } from 'react/cjs/react.development';

export default function Page({ children }) {
  // stops displaying products filters if page is changed from products.
  const { updateShowFilters } = useContext(NavCtx);
  const router = useRouter();
  useEffect(() => {
    if (router.route !== '/products/[id]') {
      updateShowFilters(false);
    }
  }, []);
  return (
    <StyledPage>
      <GlobalStyles />
      <CartCtxProvider>
        <Header />
        <ScrollContainer>
          {children}
          <Footer />
        </ScrollContainer>
      </CartCtxProvider>
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
