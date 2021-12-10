import { GlobalStyles, InnerStyles } from './styles/GlobalStyles';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Header from './Header';
import { NavCtxProvider } from '../lib/NavCtxProvider';
import { ImageSlider } from './ImageSlider';
import SearchBar from './SearchBar';

export default function Page({ children }) {
  const router = useRouter();
  const [path, updatePath] = useState('/');

  useEffect(() => {
    updatePath(router.pathname);
  }, [router]);

  return (
    <div className="page">
      <GlobalStyles />
      <Header />
      <SearchBar />
      {path === '/' && ( // conditional render of home img slider
        <ImageSlider />
      )}
      <InnerStyles>{children}</InnerStyles>
    </div>
  );
}
