const slug =
  'http://localhost:3000/products/search?brand=nike%20sb&color=black';

export default function Products({ query }) {
  return <div>products {query.id}</div>;
}
