import { GlobalStyles, InnerStyles } from './GlobalStyles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from './Header';
import { NavCtxProvider } from '../public/NavCtxProvider';
export default function Page({ children }) {
  const router = useRouter();
  const [path, updatePath] = useState('/');

  useEffect(() => {
    updatePath(router.pathname);
  }, [router]);

  return (
    <div className="page">
      <GlobalStyles />
      <NavCtxProvider>
        <Header />
      </NavCtxProvider>

      {path === '/' && ( // conditional render of home img slider
        <div>
          <p>home page slider</p>
        </div>
      )}
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
