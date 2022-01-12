import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import { CartCtxProvider } from '../lib/CartCtxProvider';

import ScrollContainer from './ScrollContainer';

export default function Page({ children }) {
  return (
    <StyledPage>
      <div>
        <GlobalStyles />
        <CartCtxProvider>
          <Header />
          <ScrollContainer>
            <InnerStyles>{children}</InnerStyles>
          </ScrollContainer>
        </CartCtxProvider>
      </div>
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const InnerStyles = styled.div`
  margin: auto;
`;
