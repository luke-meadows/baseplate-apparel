import Link from 'next/link';
import { forwardRef, useContext, useEffect, useRef } from 'react';
import { NavCtx } from '../public/NavCtxProvider';
import { wait } from './lib/wait';
import { StyledNav } from './styles/HeaderStyles';

export const Nav = forwardRef((props, ref) => {
  // const navRef = useRef();
  // const [subNavOptions, setSubNavOptions] = useContext(NavCtx);

  // useEffect(() => {
  //   const rect = navRef?.current?.getBoundingClientRect();
  //   setSubNavOptions({ navRect: rect });
  // }, []);

  return (
    <StyledNav ref={ref}>
      <Link href="/">Brands</Link>
      <Link href="/">Shoes</Link>
      <Link href="/">Clothing</Link>
      <Link href="/">Accessories</Link>
      <Link href="/">Sale</Link>

      {/* <NavTriangle className="triangle" ref={ref} /> */}
    </StyledNav>
  );
});
