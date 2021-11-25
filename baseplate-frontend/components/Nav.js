import Link from 'next/link';
import { forwardRef, useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';

import { StyledNav } from './styles/HeaderStyles';

export const Nav = forwardRef((props, ref) => {
  const { handleMouseEnter, handleMouseLeave } = useContext(NavCtx);

  return (
    <StyledNav
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href="/">Brands</Link>
      <Link href="/">Shoes</Link>
      <Link href="/">Clothing</Link>
      <Link href="/">Accessories</Link>
      <Link href="/">Sale</Link>

      {/* <NavTriangle className="triangle" ref={ref} /> */}
    </StyledNav>
  );
});
