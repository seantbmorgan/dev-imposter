import React from 'react';
import { ApolloProvider } from '@apollo/client';
import '@styles/globals.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import type { AppProps } from 'next/app';
import client from '../graphClient';

library.add(fab, faCoffee);

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  const ReactDOM = require('react-dom'); // eslint-disable-line global-require, @typescript-eslint/no-var-requires
  const axe = require('@axe-core/react'); // eslint-disable-line import/no-extraneous-dependencies, global-require, @typescript-eslint/no-var-requires
  // const config = {} // https://github.com/dequelabs/axe-core-npm/tree/develop/packages/react
  axe(React, ReactDOM, 1000);
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
