import styled from 'styled-components';
import { GlobalStyles, InnerStyles } from './styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

export default function Page({ children }) {
  return (
    <StyledPage>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  min-height: 100vh;
`;
