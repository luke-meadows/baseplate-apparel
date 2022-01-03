import { gql, useQuery } from '@apollo/client';
import Loading from '../../components/Loading';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import { ProductPageHeading } from '../../components/styles/ProductPageStyles';
import { ProductsPage } from '../../components/styles/ProductsPageStyles';
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
  if (loading) return <Loading />;
  return (
    <ProductsPage>
      <ProductPageHeading>Search Results: '{query.id}'</ProductPageHeading>
      <ProductsContainer>
        {data.searchResults.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </ProductsPage>
  );
}
