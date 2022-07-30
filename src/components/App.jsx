import { Container, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import ClothesList from './ClothesList';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import CenteredCircularProgress from './CenteredCircularProgress';
import Navbar from './Navbar';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <Typography>Something went wrong</Typography>
  )
}

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
        <Container>
          <CssBaseline />

          <Navbar />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<CenteredCircularProgress />}>
              <ClothesList />
            </Suspense>
          </ErrorBoundary>


          <ReactQueryDevtools />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
