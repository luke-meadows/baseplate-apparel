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
  }
`;

export default function Home() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log({ data, error, loading });
  if (loading) return <h1 style={{ color: 'red' }}>Loading</h1>;
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
