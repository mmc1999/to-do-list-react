import React, {useContext, useEffect} from 'react';
import { Routes, Route } from "react-router-dom";

import appModule from './App.module.css';
import TemaContext from './context/TemaContext';
import "./index.css"

import Home from '../src/pages/Home';
import Register from '../src/pages/Register';
import Error from '../src/pages/Error';
import Logo from './pages/Logo';

function App() {
  const {darkMode, id} = useContext(TemaContext);  
  return (
  <main className={`${appModule.main} ${darkMode && appModule.mainDarkMode} ${!id && appModule.mainBackground}`}>
    <div className={appModule.div}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Logo />} />
          <Route path='/register' element={<Register/>} />
          <Route path='*' element={<Error />} />
        </Routes>
    </div>
  </main>)
  
}

export default App;
