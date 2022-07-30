import { Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import ProductsList from './ProductsList';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <CssBaseline />
        <ProductsList />
      </Container>
    </ThemeProvider>
  )
}

export default App
