import React from 'react'
import { Link } from 'react-router-dom';
import loginModule from "./login.module.css"
import correoImage from "../../images/correo-electronico.png";
import passwordImage from "../../images/iconPassword.png";

const Formulario = ({values, errors, handleChange, handleSubmit}) => {
  return (
    <>
    <form className={loginModule.form} onSubmit={handleSubmit} >
        <div className={loginModule.divInput}>
            <label id='correo' className={loginModule.label}>Email</label>
            <input 
                type="email" 
                placeholder='Type your Email' 
                className={`${loginModule.input} ${loginModule.inputCorreo}`}
                value={values.correo}
                onChange={handleChange}
                name="correo"
            />
            <img src={correoImage} alt="Imagen del usuario" className={loginModule.icono} />
            {errors.correo && <p className={loginModule.msgError}>{errors.correo + "*"}</p>}
        </div>
        <div className={loginModule.divInput}>
            <label id='password' className={loginModule.label}>Password</label>
            <input 
                type="password" 
                placeholder='Type your password' 
                className={`${loginModule.input} ${loginModule.inputPassword}`}
                value={values.password}
                onChange={handleChange}
                name="password"
            />
            <img src={passwordImage} alt="Imagen del usuario" className={loginModule.icono} />
            {errors.password && <p className={loginModule.msgError}>{errors.password + "*"}</p>}
        </div>
        <div>
          <button type='submit' className={loginModule.buton}>LOGIN</button>
        </div>
      </form>
      <p className={loginModule.or}>or</p>
      <div className={loginModule.divLink}>
        <Link to="/register" className={loginModule.login}>Register</Link>
      </div>
      </>
  )
}

export default Formulario