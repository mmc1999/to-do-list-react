import React, {useContext} from 'react';
import appModule from './App.module.css';
import "./index.css"
import { Routes, Route } from "react-router-dom";
import Home from '../src/pages/Home';
import Login from '../src/pages/Login';
import Register from '../src/pages/Register';
import Error from '../src/pages/Error';
import TemaContext from './context/TemaContext';

function App() {
  const {darkMode} = useContext(TemaContext);
  return (
  <main className={`${appModule.main} ${darkMode && appModule.mainDarkMode}`}>
    <div className={appModule.div}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<Error />} />
        </Routes>
    </div>
  </main>)
  
}

export default App;
