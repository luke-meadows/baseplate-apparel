import { useContext, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useQuery, gql } from '@apollo/client';
import { NavCtx } from '../lib/NavCtxProvider';
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
import { CartCtx } from '../lib/CartCtxProvider';
import Cart from './Cart';
import populateSubnavOptions from '../lib/populateSubnavOptions';

export default function Header() {
  const { subNavOptions, setSubNavOptions, searchActive, setSearchActive } =
    useContext(NavCtx);
  const { cartActive, setCartActive, cartItems } = useContext(CartCtx);

  const NAV_DATA_QUERY = gql`
    query NAV_DATA_QUERY {
      allShoeBrands: allProducts(where: { productCategory: shoes }) {
        brand {
          brand
        }
      }
      allClothingTypes: allProducts(where: { productCategory: clothes }) {
        productType {
          productType
        }
      }
      allAccessoryTypes: allProducts(where: { productCategory: accessory }) {
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
    setSubNavOptions({
      ...subNavOptions,
      subNavRect: subRect,
      navRect: navRect,
    });
  }, []);

  // fetches nav options from backend
  const { setNavCategories } = useContext(NavCtx);
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
        />
        {cartActive && (
          <Cart cartActive={cartActive} setCartActive={setCartActive} />
        )}

        <HeaderIcon
          iconName="shopping_cart"
          iconActive={cartActive}
          setIconActive={setCartActive}
          quantity={cartItems}
        />
      </IconContainer>
      {/* {to make the nav centered using the flex} */}
      <Placeholder />
    </StyledHeader>
  );
}
