import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import App from './App.tsx';

import { store } from './store/index.ts';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import ThemeContextProvider from './context/Theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider store={store}>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </Provider>
  </HashRouter>,
);
