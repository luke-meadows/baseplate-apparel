import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import Loading from '../../components/Loading';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import { ProductPageHeading } from '../../components/styles/ProductPageStyles';
import { ProductsPage } from '../../components/styles/ProductsPageStyles';
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
      <ProductPageHeading>{query.id}</ProductPageHeading>
      <ProductsContainer>
        {data.allProducts.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </ProductsPage>
  );
}
