import Link from 'next/link';
import { Logo, StyledHeader } from './styles/HeaderStyles';

export default function Header() {
  return (
    <StyledHeader>
      <Logo id="logo">
        <Link href="/">Cobalt Apparel</Link>
      </Logo>
    </StyledHeader>
  );
}
