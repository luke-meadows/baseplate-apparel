import styled from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './Header';
import Footer from './Footer';

export default function Page({ children }) {
  return (
    <StyledPage>
      <div>
        <GlobalStyles />
        <Header />
        <InnerStyles>{children}</InnerStyles>
      </div>
      <Footer />
    </StyledPage>
  );
}

const StyledPage = styled.div`
  /* min-height: 100vh; */
  /* display: flex;
  flex-direction: column;
  justify-content: space-between; */
`;
const InnerStyles = styled.div`
  margin: auto;
`;
