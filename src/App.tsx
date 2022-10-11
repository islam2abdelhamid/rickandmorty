import { Provider } from 'react-redux';
import { Header } from '~/components/Header';
import Characters from '~/containers/Characters';
import store from '~/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Characters />
      </Provider>
    </>
  );
}

export default App;
