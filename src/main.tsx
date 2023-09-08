import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import App from './App.tsx';

import { store } from './store/index.ts';
import { Provider } from 'react-redux';

import './assets/styles/index.scss';
import ThemeContextProvider from './context/Theme.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <Provider store={store}>
      <ThemeContextProvider>
        <GoogleOAuthProvider clientId="493125079778-45igjn7jp3rtik2oc5pkv6rk2btp24tv.apps.googleusercontent.com">
          <App />
        </GoogleOAuthProvider>
      </ThemeContextProvider>
    </Provider>
  </HashRouter>,
);
