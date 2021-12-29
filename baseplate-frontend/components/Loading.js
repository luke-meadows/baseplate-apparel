import NProgress from 'nprogress';
import { useEffect } from 'react';
export default function Loading() {
  useEffect(() => {
    NProgress.start();
    return NProgress.done();
  }, []);
  return (
    <div>
      <h1>loading</h1>
    </div>
  );
}
