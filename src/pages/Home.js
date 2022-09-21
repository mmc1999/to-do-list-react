import React from 'react'
import FormAgregarTarea from '../component/agregarTareas/FormAgregarTarea';
import Header from '../component/header/Header';
import {Navigate} from "react-router-dom"

const Home = () => {
  let token = localStorage.getItem("token");
  if(!token) {
    return <Navigate to="/register" />
  }
  return (
    <>
        <Header />
        <FormAgregarTarea />
    </>
  )
}

export default Home