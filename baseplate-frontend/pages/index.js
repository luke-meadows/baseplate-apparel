import { useQuery, gql } from '@apollo/client';
import HomepageProducts from '../components/HomepageProducts';
import { ImageSlider } from '../components/ImageSlider';
import Loading from '../components/Loading';
import SubscribeBanner from '../components/SubscribeBanner';

const INITIAL_STATE_QUERY = gql`
  query INITIAL_STATE_QUERY {
    allProducts(where: { OR: [{ recommended: true }, { latest: true }] }) {
      id
      name
      latest
      recommended
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
      <HomepageProducts
        products={data.allProducts.filter((product) => product.latest)}
        heading="latest"
      />
      <HomepageProducts
        products={data.allProducts.filter((product) => product.recommended)}
        heading="recommended"
      />
      <SubscribeBanner />
    </>
  );
}
