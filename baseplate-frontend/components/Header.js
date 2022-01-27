import { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';
import { Ctx } from '../lib/NavCtxProvider';
import { Nav } from './Nav';
import { SubNav } from './SubNav';
import { AnimateSharedLayout } from 'framer-motion';
import {
  IconContainer,
  Logo,
  Placeholder,
  StyledHeader,
} from './styles/HeaderStyles';
import SearchBar from './SearchBar';
import HeaderIcon from './HeaderIcon';
import Cart from './Cart';
import populateSubnavOptions from '../lib/populateSubnavOptions';
import { AccountSection } from './AccountSection';

export default function Header() {
  const {
    searchActive,
    setSearchActive,
    setNavCategories,
    accountActive,
    setAccountActive,
    cartActive,
    setCartActive,
    cartItems,
    setSubNavRect,
    setNavRect,
  } = useContext(Ctx);

  const NAV_DATA_QUERY = gql`
    query NAV_DATA_QUERY {
      allShoeBrands: allProducts(where: { productCategory: "shoes" }) {
        brand {
          brand
        }
      }
      allClothingTypes: allProducts(where: { productCategory: "clothes" }) {
        productType {
          productType
        }
      }
      allBrands: allProducts {
        brand {
          brand
        }
      }
    }
  `;

  const subNavRef = useRef();
  const navRef = useRef();

  // fetches the Rect for nav & subnav and stores them to be used in onMouseEnter calculations.
  useEffect(() => {
    const subRect = subNavRef?.current?.getBoundingClientRect();
    const navRect = navRef?.current?.getBoundingClientRect();
    setSubNavRect(subRect);
    setNavRect(navRect);
  }, []);

  // fetches nav options from backend
  const { data } = useQuery(NAV_DATA_QUERY);
  useEffect(() => {
    populateSubnavOptions(data, setNavCategories);
  }, [data]);

  return (
    <StyledHeader>
      <AnimateSharedLayout>
        <Logo id="logo">
          <Link href="/">Baseplate</Link>
        </Logo>
        <Nav ref={navRef} />
        <SubNav ref={subNavRef} />
      </AnimateSharedLayout>

      <IconContainer>
        {searchActive && (
          <SearchBar
            searchActive={searchActive}
            setSearchActive={setSearchActive}
          />
        )}
        <HeaderIcon
          iconName="search"
          iconActive={searchActive}
          setIconActive={setSearchActive}
          otherIconActive={cartActive}
        />

        <HeaderIcon
          iconName="person"
          iconActive={accountActive}
          setIconActive={setAccountActive}
        />
        {cartActive && (
          <Cart cartActive={cartActive} setCartActive={setCartActive} />
        )}
        {accountActive && <AccountSection />}
        <HeaderIcon
          iconName="shopping_cart"
          iconActive={cartActive}
          otherIconActive={searchActive}
          setIconActive={setCartActive}
          quantity={cartItems}
        />
      </IconContainer>
      {/* {to make the nav centered using the flex} */}
      <Placeholder />
    </StyledHeader>
  );
}
