import { useContext, useEffect } from 'react';
import { NavCtx } from '../lib/NavCtxProvider';
import { useQuery, gql } from '@apollo/client';
import HomepageProducts from '../components/HomepageProducts';
import { ImageSlider } from '../components/ImageSlider';
import Loading from '../components/Loading';

const INITIAL_STATE_QUERY = gql`
  query INITIAL_STATE_QUERY {
    allProducts {
      id
      name
      latest
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
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(INITIAL_STATE_QUERY);

  if (loading) return <Loading />;
  console.log(data);
  return (
    <>
      <ImageSlider />
      <HomepageProducts products={data.allProducts} heading="latest" />
      <HomepageProducts products={data.allProducts} heading="recommended" />
    </>
  );
}
