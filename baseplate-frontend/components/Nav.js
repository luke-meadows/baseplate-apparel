import Link from 'next/link';
import { forwardRef, useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';

import { StyledNav } from './styles/HeaderStyles';

export const Nav = forwardRef((props, ref) => {
  const { handleMouseLeave, handleNavItemHover } = useContext(NavCtx);

  return (
    <StyledNav ref={ref} onMouseLeave={handleMouseLeave}>
      <Link href="/products">
        <a onMouseEnter={handleNavItemHover}>Brands</a>
      </Link>
      <Link href="/">
        <a onMouseEnter={handleNavItemHover}>Shoes</a>
      </Link>
      <Link href="/">
        <a onMouseEnter={handleNavItemHover}>Clothing</a>
      </Link>
      <Link href="/">
        <a onMouseEnter={handleNavItemHover}>Accessories</a>
      </Link>
      <Link href="/">
        <a onMouseEnter={handleNavItemHover}>Sale</a>
      </Link>

      {/* <NavTriangle className="triangle" ref={ref} /> */}
    </StyledNav>
  );
});
