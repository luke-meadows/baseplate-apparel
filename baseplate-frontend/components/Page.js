import { GlobalStyles, InnerStyles } from './styles/GlobalStyles';
import Header from './Header';

export default function Page({ children }) {
  return (
    <div className="page">
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
