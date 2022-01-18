import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: process.env.GCMS_CONTENT_API,
  cache: new InMemoryCache(),
  ssrMode: typeof window === 'undefined',
});

export default client;
