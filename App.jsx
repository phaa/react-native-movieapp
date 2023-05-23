import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

// Tema
import { theme } from './src/theme/index';

// Rotas
import { GoalsRoutes } from './src/routes/GoalsRoutes';

export default function App() {
  return (
    <ThemeProvider theme={theme.light}>
      <GoalsRoutes />
      <StatusBar style="light" />
    </ThemeProvider>
  );
}

