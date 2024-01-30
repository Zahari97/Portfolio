import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/navigation';
import Investment from './pages/Investment';
import Settings from './pages/Settings';
import './global.scss';
import MyContext from './services/context';

function App(): JSX.Element {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className="App" data-theme={isDark ? 'dark' : 'light'}>
      <MyContext.Provider value={{ isDark, setIsDark }}>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Investment />} />
            <Route path='/settings' element={<Settings />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
