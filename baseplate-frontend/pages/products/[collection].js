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
  ProductsCount,
} from '../../components/styles/ProductsPageStyles';
import generateQuery from '../../lib/generateQuery';
import { perPage } from '../../config';
import { DeliveryBanner } from '../../components/DeliveryBanner';
import ProductsFilter from '../../components/ProductsFilter';
import { PageBreak, PagePadding } from '../../components/Page';
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
    <PagePadding>
      <ProductsPageHeading>
        <h4>
          {query.collection}
          {Object.keys(query)
            .filter((key) => key != 'collection')
            .map((key) => (
              <span key={key}>
                {' '}
                <span className="slash">/</span> {query[key]}{' '}
              </span>
            ))}
        </h4>
        <ProductsCount>{data.productCount.count} results</ProductsCount>
      </ProductsPageHeading>
      <ProductsFilter
        query={query}
        filterOptions={data.filterQuery}
        page="products"
        updateCurrentPage={updateCurrentPage}
      />
      <DeliveryBanner />
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
    </PagePadding>
  );
}
