import { NavCtx } from '../lib/NavCtxProvider';
import Link from 'next/link';
import { AnimateSharedLayout } from 'framer-motion';
import { Nav } from './Nav';
import { SubNav } from './SubNav';
import { Logo, StyledHeader } from './styles/HeaderStyles';
import { useContext, useEffect, useRef } from 'react';

export default function Header() {
  const { subNavOptions, setSubNavOptions } = useContext(NavCtx);
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
    <StyledHeader>
      <Logo id="logo">
        <Link href="/">Baseplate</Link>
      </Logo>

      <Nav ref={navRef} />
      <AnimateSharedLayout>
        <SubNav ref={subNavRef}>
          <div>NavItem</div>
          <div>NavItem</div>
          <div>NavItem</div>
          <div>NavItem</div>
          <div>NavItem</div>
          <div>NavItem</div>
          <div>NavItem</div>
        </SubNav>
      </AnimateSharedLayout>
      <p>Nav Buttons</p>
    </StyledHeader>
  );
}
