import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import HomePage from './HomePage';
import Navbar from './Navbar';

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
        <Container>
          <CssBaseline />

          <Navbar />
          <HomePage />

          <ReactQueryDevtools />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
