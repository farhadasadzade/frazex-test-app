import { Routes, Route } from 'react-router';

import './App.css';

import Header from './Components/Header';
import Users from './Components/Pages/Users';
import Posts from './Components/Pages/Posts';
import Home from './Components/Pages/Home';
import { useState } from 'react';

function App() {

  const [theme, setTheme] = useState(false)

  return (
    <div className={theme ? `dark-theme` : ``}>
      <Header setTheme={setTheme} theme={theme} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </div>
  );
}

export default App;
