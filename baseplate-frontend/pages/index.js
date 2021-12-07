import { useContext, useEffect } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { useQuery, gql } from '@apollo/client';

// I'm sure there is a better way to query this but I did this quick fix for the sake of progressing - I say quick it took me 4 hours lol
const INITIAL_STATE_QUERY = gql`
  query INITIAL_STATE_QUERY {
    allBrands {
      brand
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
  const { data, error, loading } = useQuery(INITIAL_STATE_QUERY);

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
    <div className="page">
      {/* {data.allProducts.map((data) => (
        <div key={data.id}>
          <p>{data.id}</p>
          <img src={data.photo.image.publicUrlTransformed} alt="" />
        </div>
      ))} */}
    </div>
  );
}
