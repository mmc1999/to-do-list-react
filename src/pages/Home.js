import React from 'react'
import FormAgregarTarea from '../component/agregarTareas/FormAgregarTarea';
import Header from '../component/header/Header';
import {Navigate} from "react-router-dom"
import CerrarSesion from '../component/cerrarsesion/CerrarSesion';

const Home = () => {
  let token = localStorage.getItem("token");
  if(!token) {
    return <Navigate to="/register" />
  }
  return (
    <>
        <Header />
        <FormAgregarTarea />
        <CerrarSesion />
    </>
  )
}

export default Home