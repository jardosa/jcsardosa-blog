import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import MantineProviderWrapper from './utils/providers/MantineProviderWrapper'
import { Loading } from './components/Loading'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPendingComponent: () => <Loading />,
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      networkMode: 'offlineFirst',
      staleTime: 60 * 1000,
      gcTime: 60 * 1000,
      refetchInterval: 60 * 1000,
    },
    mutations: {
      networkMode: 'offlineFirst'
    }
  },
});

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <MantineProviderWrapper>
      <QueryClientProvider client={queryClient}>
        <StrictMode>
          <RouterProvider router={router} />
        </StrictMode>
      </QueryClientProvider>
    </MantineProviderWrapper>
  )
}
