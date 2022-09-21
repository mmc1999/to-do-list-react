import React from 'react'
import { Link } from 'react-router-dom';
import loginModule from "./login.module.css"

const Formulario = ({values, errors, handleChange, handleSubmit}) => {
  return (
    <>
    <form className={loginModule.form} onSubmit={handleSubmit} >
        <div>
            <input 
                type="email" 
                placeholder='correo' 
                className={loginModule.input}
                value={values.correo}
                onChange={handleChange}
                name="correo"
            />
            {errors.correo && <p className={loginModule.msgError}>{errors.correo + "*"}</p>}
        </div>
        <div>
            <input 
                type="password" 
                placeholder='contraseña' 
                className={loginModule.input}
                value={values.password}
                onChange={handleChange}
                name="password"
            />
            {errors.password && <p className={loginModule.msgError}>{errors.password + "*"}</p>}
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
      <div>
        <Link to="/register" className={loginModule.login}>Registrese</Link>
      </div>
      </>
  )
}

export default Formulario