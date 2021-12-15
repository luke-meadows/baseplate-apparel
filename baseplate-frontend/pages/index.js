import { useContext, useEffect } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { useQuery, gql } from '@apollo/client';
import HomepageProducts from '../components/HomepageProducts';

const INITIAL_STATE_QUERY = gql`
  query INITIAL_STATE_QUERY($price: Int!) {
    allBrands {
      brand
    }
    allProducts(where: { price: $price }) {
      id
      name
      new
      description
      color
      price
      sizes
      photo {
        image {
          publicUrlTransformed
        }
      }
    }
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
  }
`;

export default function Home() {
  const { setNavCategories, navCategories } = useContext(NavCtx);
  const { data, error, loading } = useQuery(INITIAL_STATE_QUERY, {
    variables: { price: 5003450, name: 'blah' },
  });

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

  if (loading) return <h1 style={{ color: 'red' }}>Loading</h1>;

  return (
    <>
      <HomepageProducts products={data.allProducts} heading="latest" />
      <HomepageProducts products={data.allProducts} heading="recommended" />
    </>
  );
}
