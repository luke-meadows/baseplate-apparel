import { useEffect } from 'react/cjs/react.development';
import styled from 'styled-components';
import HomepageProducts from './HomepageProducts';

export default function RecentlyViewed({ data }) {
  useEffect(() => {
    const existingRecentlyViewed = JSON.parse(localStorage.getItem('recent'));

    if (!existingRecentlyViewed) {
      localStorage.setItem('recent', JSON.stringify([data.Product]));
      return;
    }
    const productAlreadyExistsIdx = existingRecentlyViewed.findIndex(
      (product) => product.id === data.Product.id
    );

    if (productAlreadyExistsIdx >= 0) {
      existingRecentlyViewed.splice(productAlreadyExistsIdx, 1);
      existingRecentlyViewed.push(data.Product);
      localStorage.setItem('recent', JSON.stringify(existingRecentlyViewed));
    } else {
      existingRecentlyViewed.push(data.Product);
      localStorage.setItem('recent', JSON.stringify(existingRecentlyViewed));
    }
    if (existingRecentlyViewed.length > 5) {
      existingRecentlyViewed.shift();
      localStorage.setItem('recent', JSON.stringify(existingRecentlyViewed));
    }
  }, [data]);

  const recentlyViewedProducts = JSON.parse(localStorage.getItem('recent'));
  if (!recentlyViewedProducts) return <div />;
  return (
    <RecentlyViewedContainer>
      <HomepageProducts
        products={recentlyViewedProducts}
        heading="Recently Viewed"
      />
    </RecentlyViewedContainer>
  );
}

const RecentlyViewedContainer = styled.div`
  margin-top: 6rem;
`;
