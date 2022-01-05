import { gql, useQuery } from '@apollo/client';
import Loading from '../../components/Loading';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import {
  ProductsPage,
  ProductsPageHeading,
} from '../../components/styles/ProductsPageStyles';

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
      <ProductsPageHeading>Search Results: '{query.id}'</ProductsPageHeading>
      <ProductsContainer>
        {data?.searchResults.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </ProductsPage>
  );
}
