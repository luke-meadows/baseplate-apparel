import { gql, useQuery } from '@apollo/client';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
export default function Search({ query }) {
  const SEARCH_QUERY = gql`
    query SEARCH_QUERY($searchTerm: String!) {
      searchResults: allProducts(
        where: {
          OR: [
            { name_contains_i: $searchTerm }
            { description_contains_i: $searchTerm }
            { brand: { brand_contains_i: $searchTerm } }
          ]
        }
      ) {
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
    }
  `;
  const { data, loading, error } = useQuery(SEARCH_QUERY, {
    variables: { searchTerm: query.id },
  });
  if (loading) return <h1>Loading....</h1>;
  if (data) console.log(data);
  return (
    <div className="search">
      <h1>Search Results: '{query.id}'</h1>
      <ProductsContainer>
        {data.searchResults.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </div>
  );
}
