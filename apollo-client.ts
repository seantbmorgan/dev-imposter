import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-us-east-1.graphcms.com/v2/cky9lua4w07is01xx14jl857q/master',
  cache: new InMemoryCache(),
});

export default client;
