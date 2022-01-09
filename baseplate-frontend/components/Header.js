import { useContext, useEffect, useRef } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import Link from 'next/link';
// import SearchBar from './SearchBar';
import { Nav } from './Nav';
import { SubNav } from './SubNav';
import { AnimateSharedLayout } from 'framer-motion';
import { Logo, SearchBar, StyledHeader } from './styles/HeaderStyles';
import { useQuery, gql } from '@apollo/client';
import { useRouter } from 'next/router';

export default function Header() {
  const { subNavOptions, setSubNavOptions, searchActive, setSearchActive } =
    useContext(NavCtx);
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

  const searchbarRef = useRef();
  const router = useRouter();
  useEffect(() => {
    searchbarRef.current?.focus();
  }, [searchActive]);

  function handleSubmit(e) {
    e.preventDefault();
    const { value } = e.target.search;
    setSearchActive(false);
    router.push(`/search/${value}`);
  }
  return (
    <AnimateSharedLayout>
      <StyledHeader>
        <Logo id="logo">
          <Link href="/">Baseplate</Link>
        </Logo>
        <Nav ref={navRef} />
        <SubNav ref={subNavRef} />
        <div
          style={{
            display: 'flex',
            position: 'absolute',
            right: '6rem',
          }}
        >
          <div
            className="search"
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <span
              style={{
                fontSize: '2rem',
              }}
              onClick={() => setSearchActive(!searchActive)}
              className={
                searchActive ? 'blue material-icons' : 'material-icons'
              }
            >
              search
            </span>
            <SearchBar layout onSubmit={(e) => handleSubmit(e)}>
              {searchActive && (
                <input
                  autoComplete="off"
                  ref={searchbarRef}
                  name="search"
                  type="search"
                  placeholder="search"
                  type="search"
                />
              )}
            </SearchBar>
          </div>
          <div className="cart">
            <span
              style={{ fontSize: '2rem', lineHeight: 2 }}
              className="material-icons"
            >
              shopping_cart
            </span>
          </div>
        </div>
        {/* {to make the nav centered using the flex} */}
        <div style={{ width: '10rem' }} />
      </StyledHeader>
    </AnimateSharedLayout>
  );
}
