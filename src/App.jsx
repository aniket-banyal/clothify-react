import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ClothesList from './ClothesList';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Container>
          <CssBaseline />

          <ClothesList />

          <ReactQueryDevtools />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
