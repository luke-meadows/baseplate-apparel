import Link from 'next/link';
import styled from 'styled-components';
import { StyledNav } from './styles/HeaderStyles';

export default function Nav() {
  return (
    <StyledNav>
      <Link href="/">Brands</Link>

      <Link href="/">Shoes</Link>

      <Link href="/">Clothing</Link>

      <Link href="/">Accessories</Link>

      <Link href="/">Sale</Link>
      {/* <NavTriangle className="triangle" ref={ref} /> */}
    </StyledNav>
  );
}
