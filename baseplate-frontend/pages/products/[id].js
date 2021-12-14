const slug =
  'http://localhost:3000/products/search?brand=nike%20sb&color=black';

const flatspot =
  'https://www.flatspot.com/collections/clothing/brand_brixton+colour_brown+category_bucket-hats';

export default function Products({ query }) {
  return <div>products {query.id}</div>;
}
