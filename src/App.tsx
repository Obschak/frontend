import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import clsx from 'clsx';

import { Auth } from './pages/Auth';
import { Main } from './pages/Main';
import { useThemeContext } from './context/Theme';

const App = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div className={clsx('app', theme)}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/">Go main</Link>
      <Link to="/auth">Go auth</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
