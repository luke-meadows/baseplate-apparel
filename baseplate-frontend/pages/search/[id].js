import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import { DeliveryBanner } from '../../components/DeliveryBanner';
import Loading from '../../components/Loading';
import { PagePadding } from '../../components/Page';
import Pagination from '../../components/Pagination';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import {
  BottomPagination,
  ProductsCount,
  ProductsPage,
  ProductsPageHeading,
} from '../../components/styles/ProductsPageStyles';
import { perPage } from '../../config';

export default function Search({ query }) {
  const SEARCH_QUERY = gql`
    query SEARCH_QUERY($searchTerm: String!, $skip: Int = 0, $first: Int) {
      searchResults: allProducts(
        where: {
          OR: [
            { name_contains_i: $searchTerm }
            { description_contains_i: $searchTerm }
            { brand: { brand_contains_i: $searchTerm } }
          ]
        }
        first: $first
        skip: $skip
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
      productCount: _allProductsMeta(
        where: {
          OR: [
            { name_contains_i: $searchTerm }
            { description_contains_i: $searchTerm }
            { brand: { brand_contains_i: $searchTerm } }
          ]
        }
      ) {
        count
      }
    }
  `;
  const [currentPage, updateCurrentPage] = useState(1);
  const { data, loading, error } = useQuery(SEARCH_QUERY, {
    variables: {
      searchTerm: query.id,
      skip: currentPage * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <Loading />;
  return (
    <>
      {data.productCount.count > 0 && (
        <ProductsCount>{data.productCount.count} results</ProductsCount>
      )}
      <PagePadding>
        <ProductsPage>
          <ProductsPageHeading>
            {data.productCount.count > 0 ? (
              <h4>Search Results: '{query.id}'</h4>
            ) : (
              <h4 style={{ marginTop: '9rem' }}>
                No Results Found For: '${query.id}'
              </h4>
            )}
          </ProductsPageHeading>
          {data.productCount.count > 0 && <DeliveryBanner />}
          <ProductsContainer>
            {data?.searchResults.map((product) => (
              <ProductThumbnail product={product} key={product.id} />
            ))}
          </ProductsContainer>
          <BottomPagination>
            <Pagination
              totalPages={Math.ceil(data.productCount.count / perPage)}
              currentPage={currentPage}
              updateCurrentPage={updateCurrentPage}
            />
          </BottomPagination>
        </ProductsPage>
      </PagePadding>
    </>
  );
}
