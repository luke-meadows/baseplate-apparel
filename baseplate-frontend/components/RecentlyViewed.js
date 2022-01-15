import styled from 'styled-components';
import HomepageProducts from './HomepageProducts';

export default function RecentlyViewed() {
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
