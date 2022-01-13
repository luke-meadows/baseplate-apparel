import { useRouter } from 'next/dist/client/router';
import getFilterOptions from '../lib/getFilterOptions';

export default function ProductsFilter({ query, filterOptions }) {
  const router = useRouter();
  function handleQuery(e) {
    router.push({
      pathname: '/products/[id]',
      query: { id: query.id, brand: null, color: '' },
    });
  }
  const options = getFilterOptions(filterOptions);
  console.log(options);
  return (
    <>
      <form action=""></form>
      <button onClick={handleQuery}>click me bitch</button>
    </>
  );
}
