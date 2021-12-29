import { useContext, useEffect, useRef } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import Link from 'next/link';
import SearchBar from './SearchBar';
import { Nav } from './Nav';
import { SubNav } from './SubNav';
import { AnimateSharedLayout } from 'framer-motion';
import { Logo, StyledHeader } from './styles/HeaderStyles';
import disableScroll from 'disable-scroll';
import { useQuery, gql } from '@apollo/client';

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
      allBrands {
        brand
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

  // disables scroll while search active
  useEffect(() => {
    if (searchActive) disableScroll.on();
    if (!searchActive) disableScroll.off();
  }, [searchActive]);

  // fetches nav options from backend
  const { setNavCategories } = useContext(NavCtx);
  const { data, error, loading } = useQuery(NAV_DATA_QUERY);
  useEffect(() => {
    const allBrands = data?.allBrands.map((brand) => brand.brand);
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
        <div>
          <span
            style={{ padding: '0 2rem', fontSize: '2rem', lineHeight: 2 }}
            className="material-icons"
            onClick={() => setSearchActive(!searchActive)}
          >
            search
          </span>
          <span
            style={{ fontSize: '2rem', lineHeight: 2 }}
            className="material-icons"
          >
            shopping_cart
          </span>
        </div>
      </StyledHeader>
      {searchActive && <SearchBar />}
    </AnimateSharedLayout>
  );
}
