import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.tsx';

import { store } from './store/index.ts';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import ThemeContextProvider from './context/Theme.tsx';

const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider store={store}>
      <ThemeContextProvider>
        <GoogleOAuthProvider clientId={CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
      </ThemeContextProvider>
    </Provider>
  </HashRouter>,
);
