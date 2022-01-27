import Link from 'next/link';
import { forwardRef, useContext } from 'react';
import { Ctx } from '../lib/CtxProvider';
import { StyledNav } from './styles/HeaderStyles';
import { useNav } from '../lib/useNav';

export const Nav = forwardRef((props, ref) => {
  const { handleMouseLeave, handleNavItemHover } = useNav();
  const {
    setCartActive,
    stopScrolling,
    setSearchActive,
    setStopScrolling,
    setSubNavOpen,
  } = useContext(Ctx);

  function handleClick() {
    setSubNavOpen(false);
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
