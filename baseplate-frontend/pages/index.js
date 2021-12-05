import { useContext, useEffect } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { useQuery, gql } from '@apollo/client';

// I'm sure there is a better way to query this but I did this quick fix for the sake of progressing - I say quick it took me 4 hours lol
const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allBrands {
      brand
    }
    allProducts(where: { productCategory: shoes }) {
      brand {
        brand
      }
    }
  }
`;

export default function Home() {
  const { setNavCategories, navCategories } = useContext(NavCtx);
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  useEffect(() => {
    const shoeBrands = [
      ...new Set(data?.allProducts.map((shoes) => shoes.brand.brand)),
    ];
    const allBrands = data?.allBrands.map((brand) => brand.brand);
    setNavCategories({ shoes: shoeBrands, brands: allBrands });
    console.log(navCategories);
  }, [data]);

  if (loading) return <h1 style={{ color: 'red' }}>Loading</h1>;

  console.log({ data, error, loading });
  console.log({ data, error, loading });
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
