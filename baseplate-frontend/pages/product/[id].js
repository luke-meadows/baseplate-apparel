import { gql, useQuery } from '@apollo/client';
import { ProductThumbnail } from '../../components/ProductThumbnail';

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
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

export default function Product({ query }) {
  const { data, error, loading } = useQuery(PRODUCT_QUERY, {
    variables: { id: query.id },
  });
  if (loading) return <p>Loading....</p>;
  return <ProductThumbnail product={data.Product} />;
}
