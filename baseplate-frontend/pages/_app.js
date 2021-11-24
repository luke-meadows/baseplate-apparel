import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Page from '../components/Page';

const client = new ApolloClient({
  uri: 'http://localhost:5000/admin/api',
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // TODO: We will add this together!
          // allProducts: paginationField(),
        },
      },
    },
  }).restore(),
});

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Page>
        <Component {...pageProps} />
      </Page>
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
