import { useContext, useEffect } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { useQuery, gql } from '@apollo/client';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
    allBrands {
      brand
    }
  }
`;

export default function Home() {
  const { setNavCategories } = useContext(NavCtx);
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);

  useEffect(() => {
    setNavCategories(data?.allBrands);
  }, [data]);

  if (loading) return <h1 style={{ color: 'red' }}>Loading</h1>;

  console.log({ data, error, loading });
  return (
    <div className="page">
      {data.allProducts.map((data) => (
        <div key={data.id}>
          <p>{data.id}</p>
          <img src={data.photo.image.publicUrlTransformed} alt="" />
        </div>
      ))}
    </div>
  );
}
