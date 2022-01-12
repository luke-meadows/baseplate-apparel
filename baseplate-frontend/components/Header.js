import { useContext, useEffect, useRef } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import Link from 'next/link';
// import SearchBar from './SearchBar';
import { Nav } from './Nav';
import { SubNav } from './SubNav';
import { AnimateSharedLayout } from 'framer-motion';
import { IconContainer, Logo, StyledHeader } from './styles/HeaderStyles';
import { useQuery, gql } from '@apollo/client';
import SearchBar from './SearchBar';
import HeaderIcon from './HeaderIcon';
import { CartCtx } from '../lib/CartCtxProvider';

export default function Header() {
  const { subNavOptions, setSubNavOptions, searchActive, setSearchActive } =
    useContext(NavCtx);
  const { cartActive, setCartActive } = useContext(CartCtx);

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
    const allBrands = [
      ...new Set(data?.allBrands.map((brand) => brand.brand.brand)),
    ];
    const shoeBrands = [
      ...new Set(data?.allShoeBrands.map((brand) => brand.brand.brand)),
    ];
    const clothingTypes = [
      ...new Set(
        data?.allClothingTypes.map((type) => type.productType.productType)
      ),
    ];
    const accessoryTypes = [
      ...new Set(
        data?.allAccessoryTypes.map((type) => type.productType.productType)
      ),
    ];

    setNavCategories({
      brands: allBrands,
      shoes: shoeBrands,
      clothing: clothingTypes,
      accessories: accessoryTypes,
    });
  }, [data]);

  return (
    <AnimateSharedLayout>
      <StyledHeader>
        <Logo id="logo">
          <Link href="/">Baseplate</Link>
        </Logo>
        <Nav ref={navRef} />
        <SubNav ref={subNavRef} />
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

          <HeaderIcon
            iconName="shopping_cart"
            iconActive={cartActive}
            setIconActive={setCartActive}
          />
        </IconContainer>

        {/* {to make the nav centered using the flex} */}
        <div style={{ width: '9rem' }} />
      </StyledHeader>
    </AnimateSharedLayout>
  );
}
