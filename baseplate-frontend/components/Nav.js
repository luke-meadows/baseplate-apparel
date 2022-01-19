import Link from 'next/link';
import { forwardRef, useContext } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { StyledNav } from './styles/HeaderStyles';
import { CartCtx } from '../lib/CartCtxProvider';

export const Nav = forwardRef((props, ref) => {
  const {
    handleMouseLeave,
    handleNavItemHover,
    setSubNavOptions,
    subNavOptions,
    stopScrolling,
    setSearchActive,
    setStopScrolling,
  } = useContext(NavCtx);

  const { setCartActive } = useContext(CartCtx);

  function handleClick() {
    setSubNavOptions({ ...subNavOptions, subNavOpen: false });
    if (!stopScrolling) return;
    setSearchActive(false);
    setStopScrolling(false);
    setCartActive(false);
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
    </StyledNav>
  );
});
