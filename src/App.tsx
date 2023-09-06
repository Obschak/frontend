import { Suspense } from 'react';
import { Link, Route, Routes } from 'react-router-dom';

import { Auth } from './pages/Auth';
import { Main } from './pages/Main';

import './App.css';

const App = () => {
  return (
    <>
      <Link to="/">Go main</Link>
      <Link to="/auth">Go auth</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
