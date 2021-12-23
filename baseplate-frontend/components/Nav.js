import Link from 'next/link';
import { forwardRef, useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledNav } from './styles/HeaderStyles';

export const Nav = forwardRef((props, ref) => {
  const {
    handleMouseLeave,
    handleNavItemHover,
    setSubNavOptions,
    subNavOptions,
  } = useContext(NavCtx);

  function handleClick() {
    setSubNavOptions({ ...subNavOptions, subNavOpen: false });
  }

  return (
    <StyledNav ref={ref} onMouseLeave={handleMouseLeave}>
      <Link href="/products/brands">
        <a onMouseEnter={handleNavItemHover} onClick={handleClick}>
          Brands
        </a>
      </Link>
      <Link href="/products/shoes">
        <a onMouseEnter={handleNavItemHover} onClick={handleClick}>
          Shoes
        </a>
      </Link>
      <Link href="/products/clothes">
        <a onMouseEnter={handleNavItemHover} onClick={handleClick}>
          Clothing
        </a>
      </Link>
      {/* <Link href="/products/accessories">
        <a onMouseEnter={handleNavItemHover} onClick={handleClick}>
          Accessories
        </a>
      </Link>
      <Link href="/">
        <a onMouseEnter={handleNavItemHover} onClick={handleClick}>
          Sale
        </a>
      </Link> */}
    </StyledNav>
  );
});
