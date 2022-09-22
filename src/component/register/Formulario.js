import React from 'react'
import { Link } from 'react-router-dom';
import registroModule from "./register.module.css";
import userImage from "../../images/user.png";
import passwordImage from "../../images/iconPassword.png";
import correoImage from "../../images/correo-electronico.png";

const Formulario = ({values,errors,handleChange, handleSubmit}) => {
  return (
    <>
    <form className={registroModule.form} onSubmit={handleSubmit} >
        <div className={registroModule.divInput}>
            <label id='nombreUsuario' className={registroModule.label}>Username</label>
            <input 
                type="text" 
                placeholder='Type your username' 
                className={registroModule.input}
                value={values.nombreUsuario}
                onChange={handleChange}
                name="nombreUsuario"
            />
            <img src={userImage} alt="Imagen del usuario" className={registroModule.icono} />
            {errors.nombreUsuario && <p className={registroModule.msgError}>{errors.nombreUsuario + "*"}</p>}
        </div>
        <div className={registroModule.divInput}>
            <label id='correo' className={registroModule.label}>Email</label>
            <input 
                type="email" 
                placeholder='Type your email' 
                className={registroModule.input}
                value={values.correo}
                onChange={handleChange}
                name="correo"
            />
            <img src={correoImage} alt="Imagen del usuario" className={registroModule.icono} />
            {errors.correo && <p className={registroModule.msgError}>{errors.correo + "*"}</p>}
        </div>
        <div className={registroModule.divInput}>
            <label id='password' className={registroModule.label}>Password</label>
            <input 
                type="password" 
                placeholder='Type your password' 
                className={registroModule.input}
                value={values.password}
                onChange={handleChange}
                name="password"
            />
            <img src={passwordImage} alt="Imagen del usuario" className={registroModule.icono} />
            {errors.password && <p className={registroModule.msgError}>{errors.password + "*"}</p>}
        </div>
        <div>
          <button type='submit' className={registroModule.buton}>Register</button>
        </div>
      </form>
      <p className={registroModule.or}>or</p>
      <div className={registroModule.divLink}>
        <Link to="/login" className={registroModule.login}>Log in</Link>
      </div>
      </>
  )
}

export default Formulario