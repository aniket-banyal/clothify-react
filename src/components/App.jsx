import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from './HomePage';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategoryPage from './CategoryPage';
import { Suspense } from 'react';
import CenteredCircularProgress from './CenteredCircularProgress';
import ErrorFallback from './ErrorFallback';
import { ErrorBoundary } from 'react-error-boundary';
import OutletWrapper from './OutletWrapper';
import ClothesPage from './ClothesPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
    },
  },
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container maxWidth={'xl'}>
          <CssBaseline />


          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="clothes" element={
                  <ErrorBoundary FallbackComponent={ErrorFallback}>
                    <ClothesPage />
                  </ErrorBoundary>
                }
                />

                <Route path="categories" element={<OutletWrapper />}>

                  <Route
                    path=":categoryId"
                    element={
                      <ErrorBoundary FallbackComponent={ErrorFallback}>
                        <Suspense fallback={<CenteredCircularProgress />}>
                          <CategoryPage />
                        </Suspense>
                      </ErrorBoundary>
                    }
                  />
                </Route>
              </Route>
            </Routes>
          </BrowserRouter>


          <ReactQueryDevtools />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
