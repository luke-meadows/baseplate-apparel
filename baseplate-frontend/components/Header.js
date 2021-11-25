import { NavCtx, NavCtxProvider } from '../public/NavCtxProvider';
import Link from 'next/link';
import { AnimateSharedLayout } from 'framer-motion';
import { Nav } from './Nav';
import { SubNav } from './SubNav';
import { Logo, StyledHeader } from './styles/HeaderStyles';
import { useContext, useEffect, useRef } from 'react';

export default function Header() {
  const [subNavOptions, setSubNavOptions] = useContext(NavCtx);
  const subNavRef = useRef();
  const navRef = useRef();

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
    <StyledHeader>
      <AnimateSharedLayout>
        <Logo id="logo">
          <Link href="/">Cobalt Apparel</Link>
        </Logo>

        <Nav ref={navRef} />
        <SubNav ref={subNavRef}>
          <div>hello</div>
        </SubNav>
        <p>hello</p>
      </AnimateSharedLayout>
    </StyledHeader>
  );
}
