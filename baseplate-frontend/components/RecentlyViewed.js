import HomepageProducts from './HomepageProducts';

export default function RecentlyViewed() {
  const recentlyViewedProducts = JSON.parse(localStorage.getItem('recent'));
  return (
    <HomepageProducts
      products={recentlyViewedProducts}
      heading="Recently Viewed"
    />
  );
}
