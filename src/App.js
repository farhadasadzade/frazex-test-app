import { Routes, Route } from 'react-router';

import './App.css';

import Header from './Components/Header';
import Users from './Components/Pages/Users';
import Posts from './Components/Pages/Posts';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/users' element={<Users />} />
        <Route path='/posts' element={<Posts />} />
      </Routes>
    </>
  );
}

export default App;
