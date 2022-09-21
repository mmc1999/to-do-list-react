import React from 'react';
import registroModule from "./register.module.css";

const Registro = () => {
  return (
    <div className={registroModule.divPrincipal}>
      <h1 className={registroModule.h1}>Registrese</h1>
      <form className={registroModule.form}>
        <div>
          <input type="text" placeholder='Nombre de usuario' className={registroModule.input}/>
        </div>
        <div>
          <input type="email" placeholder='correo' className={registroModule.input}/>
        </div>
        <div>
          <input type="password" placeholder='contraseña' className={registroModule.input}/>
        </div>
      </form>
    </div>
  )
}

export default Registro