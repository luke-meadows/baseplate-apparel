import { useQuery, gql } from '@apollo/client';
import { DeliveryBanner } from '../components/DeliveryBanner';
import Head from 'next/head';
import HomepageProducts from '../components/HomepageProducts';
import { ImageSlider } from '../components/ImageSlider';
import Loading from '../components/Loading';
import SubscribeBanner from '../components/SubscribeBanner';
import { PageBreak, PagePadding } from '../components/Page';
import { useUser } from '../components/User';

const INITIAL_STATE_QUERY = gql`
  query INITIAL_STATE_QUERY {
    allProducts(where: { OR: [{ recommended: true }, { latest: true }] }) {
      id
      name
      latest
      recommended
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
  const user = useUser();
  console.log(user);
  if (loading) return <Loading />;
  return (
    <>
      <Head>
        <title>Baseplate</title>
      </Head>
      <ImageSlider />
      <PagePadding>
        <HomepageProducts
          products={data?.allProducts.filter((product) => product.latest)}
          heading="latest"
        />
        <PageBreak />
        <HomepageProducts
          products={data?.allProducts.filter((product) => product.recommended)}
          heading="recommended"
        />
      </PagePadding>
      <SubscribeBanner />
      <DeliveryBanner />
    </>
  );
}
