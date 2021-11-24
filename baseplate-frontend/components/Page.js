import { GlobalStyles, InnerStyles } from './GlobalStyles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Page({ children }) {
  const router = useRouter();
  const [path, updatePath] = useState('/');

  useEffect(() => {
    updatePath(router.pathname);
  }, [router]);

  return (
    <div className="page">
      <GlobalStyles />
      <p>Header</p>
      {path === '/' && ( // conditional render of home img slider
        <div>
          <p>hello</p>
        </div>
      )}
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
