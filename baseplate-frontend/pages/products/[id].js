import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import {
  ProductsPage,
  ProductsPageHeading,
  BottomPagination,
} from '../../components/styles/ProductsPageStyles';
import generateQuery from '../../lib/generateQuery';
import { perPage } from '../../config';
export default function Products({ query }) {
  const [queryVariables, setQueryVariables] = useState({ ...query });
  const [currentPage, updateCurrentPage] = useState(1);

  useEffect(() => {
    setQueryVariables({ ...query });
  }, [query]);

  const PRODUCTS_PAGE_QUERY = gql`
    ${generateQuery(queryVariables, currentPage)}
  `;
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY, {
    variables: {
      skip: currentPage * perPage - perPage,
      first: perPage,
    },
  });
  if (loading) return <Loading />;
  return (
    <ProductsPage>
      <ProductsPageHeading>
        <h4>{query.id}</h4>

        <Pagination
          totalPages={Math.ceil(data.productCount.count / perPage)}
          currentPage={currentPage}
          updateCurrentPage={updateCurrentPage}
        />
      </ProductsPageHeading>
      <ProductsContainer>
        {data.allProducts.map((product) => (
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
  );
}
