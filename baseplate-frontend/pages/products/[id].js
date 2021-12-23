import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import { ProductsPage } from '../../components/styles/ProductsPageStyles';
import generateQuery from '../../lib/generateQuery';

export default function Products({ query }) {
  const [queryVariables, setQueryVariables] = useState({
    collection: query.id,
    brand: '',
    category: '',
    color: '',
    // size: 'M',
  });

  const PRODUCTS_PAGE_QUERY = gql`
    ${generateQuery(queryVariables)}
  `;

  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY);
  const res = useQuery(PRODUCTS_PAGE_QUERY);
  console.log(res);

  if (loading) return <div>Loading...</div>;
  return (
    <ProductsPage>
      <h4>{query.id}</h4>
      <form
        onChange={(e) => {
          const [variable, value] = e.target.value.split('_');
          setQueryVariables({ ...queryVariables, [variable]: value });
          console.log(queryVariables);
        }}
      >
        <select name="category" id="category" placeholder="category">
          <option value="category_T-Shirt">T-Shirt</option>
          <option value="category_Jeans">Jeans</option>
          <option value="category_Shirt">Shirt</option>
        </select>
      </form>
      <ProductsContainer>
        {data.allProducts.map((product) => (
          <ProductThumbnail product={product} key={product.id} />
        ))}
      </ProductsContainer>
    </ProductsPage>
  );
}
