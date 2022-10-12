import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { Header } from '~/components/Header';
import Characters from '~/containers/Characters';
import store from '~/store';
import { theme } from '~/themes';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Header />
          <Characters />
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
