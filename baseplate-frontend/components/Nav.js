import Link from 'next/link';
import { forwardRef, useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';

import { StyledNav } from './styles/HeaderStyles';

export const Nav = forwardRef((props, ref) => {
  const { handleMouseEnter, handleMouseLeave, handleNavItemHover } =
    useContext(NavCtx);

  return (
    <StyledNav
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div onMouseEnter={handleNavItemHover}>
        <Link href="/products">Brands</Link>
      </div>
      <div onMouseEnter={handleNavItemHover}>
        <Link href="/">Shoes</Link>
      </div>
      <div onMouseEnter={handleNavItemHover}>
        <Link href="/">Clothing</Link>
      </div>
      <div onMouseEnter={handleNavItemHover}>
        <Link href="/">Accessories</Link>
      </div>
      <div onMouseEnter={handleNavItemHover}>
        <Link href="/">Sale</Link>
      </div>

      {/* <NavTriangle className="triangle" ref={ref} /> */}
    </StyledNav>
  );
});
