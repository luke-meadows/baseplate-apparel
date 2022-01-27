import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
import Loading from '../../components/Loading';
import Pagination from '../../components/Pagination';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/HomepageProducts';
import {
  ProductsPageHeading,
  BottomPagination,
  ProductsCount,
} from '../../components/styles/ProductsPageStyles';
import { perPage } from '../../config';
import { DeliveryBanner } from '../../components/DeliveryBanner';
import ProductsFilter from '../../components/ProductsFilter';
import { PagePadding } from '../../components/Page';
export default function Products({ query }) {
  const [currentPage, updateCurrentPage] = useState(1);
  const PRODUCTS_PAGE_QUERY = gql`
    query DISPLAY_PRODUCTS_QUERY(
      $brand: String
      $type: String
      $color: String
      $collection: String
      $first: Int
      $skip: Int = 0
    ) {
      allProducts(
        first: $first
        skip: $skip
        where: {
          brand: { brand_i: $brand }
          productType: { productType: $type }
          color_contains_i: $color
          productCategory: $collection
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
      productCount: _allProductsMeta(
        where: {
          brand: { brand_i: $brand }
          productType: { productType: $type }
          color_contains_i: $color
          productCategory: $collection
        }
      ) {
        count
      }
      filterQuery: allProducts(
        where: {
          brand: { brand_i: $brand }
          productType: { productType: $type }
          color_contains_i: $color
          productCategory: $collection
        }
      ) {
        color
        brand {
          brand
        }
        productType {
          productType
        }
      }
    }
  `;
  const queryVariables = { ...query };
  if (query.collection === 'brands') {
    delete queryVariables.collection;
  }
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY, {
    variables: {
      ...queryVariables,
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
        <ProductsCount>{data?.productCount?.count} results</ProductsCount>
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
      <Pagination
        totalPages={Math.ceil(data.productCount.count / perPage)}
        currentPage={currentPage}
        updateCurrentPage={updateCurrentPage}
      />
    </PagePadding>
  );
}
