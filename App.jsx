import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

// Tema
import { theme } from './src/theme/index';

// Rotas
import { MovieRoutes } from './src/routes/MoviesRoutes';

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <MovieRoutes />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

