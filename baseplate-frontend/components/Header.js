import { useContext, useEffect, useRef } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Nav } from './Nav';
import { SubNav } from './SubNav';
import { AnimateSharedLayout } from 'framer-motion';
import { Logo, StyledHeader } from './styles/HeaderStyles';

export default function Header() {
  const { subNavOptions, setSubNavOptions, searchActive, setSearchActive } =
    useContext(NavCtx);
  const subNavRef = useRef();
  const navRef = useRef();

  // Fetches the Rect for nav & subnav and stores them to be used in onMouseEnter calculations.
  useEffect(() => {
    const subRect = subNavRef?.current?.getBoundingClientRect();
    const navRect = navRef?.current?.getBoundingClientRect();
    setSubNavOptions({
      ...subNavOptions,
      subNavRect: subRect,
      navRect: navRect,
    });
  }, []);

  return (
    <AnimateSharedLayout>
      <StyledHeader>
        <Logo id="logo">
          <Link href="/">Baseplate</Link>
        </Logo>
        <Nav ref={navRef} />
        <SubNav ref={subNavRef} />
        <div>
          <span
            style={{ padding: '0 2rem', fontSize: '2rem', lineHeight: 2 }}
            className="material-icons"
            onClick={() => {
              setSearchActive(!searchActive);
            }}
          >
            search
          </span>
          <span
            style={{ fontSize: '2rem', lineHeight: 2 }}
            className="material-icons"
          >
            shopping_cart
          </span>
        </div>
      </StyledHeader>
      {searchActive && <SearchBar />}
    </AnimateSharedLayout>
  );
}
