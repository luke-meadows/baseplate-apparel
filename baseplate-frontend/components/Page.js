import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';
import { CartCtxProvider } from '../lib/CartCtxProvider';
import Cart from './Cart';

export default function Page({ children }) {
  return (
    <StyledPage>
      <div>
        <GlobalStyles />
        <CartCtxProvider>
          <Header />
          <Cart />
          <InnerStyles>{children}</InnerStyles>
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
