"use client";
// ^ this file needs the "use client" pragma

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";
import { setContext } from '@apollo/client/link/context';

// have a function to create a client for you
const makeClient = (authToken: string) => () => {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: process.env.NEXT_PUBLIC_EXTERNAL_GRAPHQL_URL,
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" },
  });

  const authLink = setContext(() => {

    if (authToken) {
      return { headers: { authorization: `Bearer ${authToken}` } }
    }
    return { headers: {} }
  })

  return new NextSSRApolloClient({
    // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
    cache: new NextSSRInMemoryCache(),
    link: authLink.concat((httpLink))
    // TODO: Remove after further testing on above link object
    // link:
    //   typeof window === "undefined"
    //     ? ApolloLink.from([
    //       // in a SSR environment, if you use multipart features like
    //       // @defer, you need to decide how to handle these.
    //       // This strips all interfaces with a `@defer` directive from your queries.
    //       new SSRMultipartLink({
    //         stripDefer: true,
    //       }),
    //       httpLink,
    //       // authLink
    //     ])
    //     : ApolloLink.from([httpLink, authLink]),
  }
  );

}

// you need to create a component to wrap your app in
export function ApolloWrapper({ children, authToken }: React.PropsWithChildren<{ authToken: string }>) {
  return (
    <ApolloNextAppProvider makeClient={makeClient(authToken)}>
      {children}
    </ApolloNextAppProvider>
  );
}
