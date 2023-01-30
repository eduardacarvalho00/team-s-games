/* eslint-disable react/style-prop-object */
/* eslint-disable camelcase */
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/Loading';
import { StatusBar } from 'expo-status-bar';
import { Players } from '@screens/Players';
import theme from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        style="light"
      />
     { fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
