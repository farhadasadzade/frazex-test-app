import { Routes, Route } from 'react-router';

import './App.css';

import Header from './Components/Header';
import Users from './Components/Pages/Users';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/users' element={<Users />} />
      </Routes>
    </>
  );
}

export default App;
