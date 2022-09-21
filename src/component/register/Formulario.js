import React from 'react'
import { Link } from 'react-router-dom';
import registroModule from "./register.module.css";

const Formulario = ({values,errors,handleChange, handleSubmit}) => {
  return (
    <>
    <form className={registroModule.form} onSubmit={handleSubmit} >
        <div>
            <input 
                type="text" 
                placeholder='Nombre de usuario' 
                className={registroModule.input}
                value={values.nombreUsuario}
                onChange={handleChange}
                name="nombreUsuario"
            />
            {errors.nombreUsuario && <p className={registroModule.msgError}>{errors.nombreUsuario + "*"}</p>}
        </div>
        <div>
            <input 
                type="email" 
                placeholder='correo' 
                className={registroModule.input}
                value={values.correo}
                onChange={handleChange}
                name="correo"
            />
            {errors.correo && <p className={registroModule.msgError}>{errors.correo + "*"}</p>}
        </div>
        <div>
            <input 
                type="password" 
                placeholder='contraseña' 
                className={registroModule.input}
                value={values.password}
                onChange={handleChange}
                name="password"
            />
            {errors.password && <p className={registroModule.msgError}>{errors.password + "*"}</p>}
        </div>
        <div>
          <button type='submit'>Enviar</button>
        </div>
      </form>
      <div>
        <Link to="/login" className={registroModule.login}>Loguearse</Link>
      </div>
      </>
  )
}

export default Formulario