import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Page from '../components/Page';
import { CtxProvider } from '../lib/CtxProvider';

import '../public/fontello/css/fontello.css';
import 'swiper/css/bundle';
import '../components/styles/nprogress.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/api/graphql',
  credentials: 'include',
  cache: new InMemoryCache({}),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <CtxProvider>
        <Page>
          <Component {...pageProps} />
        </Page>
      </CtxProvider>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};

export default MyApp;
