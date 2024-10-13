'use client'

import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client/react";
import { setContext } from '@apollo/client/link/context';

// have a function to create a client for you
const makeClient = (authToken: string) => {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: import.meta.env.VITE_EXTERNAL_GRAPHQL_URL,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" },
  });

  const authLink = setContext(() => {
    if (authToken) {
      return { headers: { authorization: `Bearer ${authToken}` } }
    }
    return { headers: {} }
  });

  return new ApolloClient({
    cache: new InMemoryCache(),
    // link: authLink.concat(httpLink),
  });
}

// you need to create a component to wrap your app in
export function ApolloClientWrapper({ children, authToken }: React.PropsWithChildren<{ authToken: string }>) {
  const client = makeClient(authToken);
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}