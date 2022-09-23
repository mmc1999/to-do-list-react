import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import CerrarSesionModule from "./CerrarSesion.module.css"
import ThemeContext from '../../context/TemaContext';

const CerrarSesion = () => {
  const {setId} = useContext(ThemeContext);
    const handleClick = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("id");
        setId(null)
    }
  return (
    <div className={CerrarSesionModule.div}>
        <Link onClick={handleClick} to="/login" className={CerrarSesionModule.link}>Sign off</Link>
    </div>
  )
}

export default CerrarSesion