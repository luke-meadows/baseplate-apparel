import { gql, useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import { ProductThumbnail } from '../../components/ProductThumbnail';
import { ProductsContainer } from '../../components/styles/HomepageStyles';
import { ProductsPage } from '../../components/styles/ProductsPageStyles';
import generateQuery from '../../lib/generateQuery';

export default function Products({ query }) {
  const [queryVariables, setQueryVariables] = useState({
    id: query.id,
    brand: query.brand || '',
    category: query.category || '',
    color: query.color || '',
  });

  useEffect(() => {
    setQueryVariables({ ...query });
  }, [query]);

  const PRODUCTS_PAGE_QUERY = gql`
    ${generateQuery(queryVariables)}
  `;
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY);

  if (loading) return <div>Loading...</div>;
  return (
    <ProductsPage>
      <h4>{query.id}</h4>
      <form
        onChange={(e) => {
          e.preventDefault();
          if (!e.target.value) return;
          const [variable, value] = e.target.value.split('_');
          setQueryVariables({ ...queryVariables, [variable]: value });
        }}
      >
        <select name="category" id="category">
          <option value="category_T-Shirt">T-Shirt</option>
          <option value="category_Jeans">Jeans</option>
          <option value="category_Shirt">Shirt</option>
        </select>
        <select name="brand" id="brand">
          <option value="brand_adidas">Adidas</option>
          <option value="brand_nike sb">Nike SB</option>
          <option value="brand_parlez">Parlez</option>
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
