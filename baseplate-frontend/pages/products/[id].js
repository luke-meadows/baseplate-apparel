import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import {
  ProductsPage,
  ProductsPageHeading,
} from '../../components/styles/ProductsPageStyles';
import generateQuery from '../../lib/generateQuery';

export default function Products({ query }) {
  const [queryVariables, setQueryVariables] = useState({ ...query });

  useEffect(() => {
    setQueryVariables({ ...query });
  }, [query]);

  const PRODUCTS_PAGE_QUERY = gql`
    ${generateQuery(queryVariables)}
  `;
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY);

  if (loading) return <Loading />;

  return (
    <ProductsPage>
      <ProductsPageHeading>
        <h4>{query.id}</h4>
        <Pagination totalPages={7} currentPage={1} />
      </ProductsPageHeading>
      <ProductsContainer>
        {data.allProducts.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </ProductsPage>
  );
}
