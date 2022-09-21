import { Formik } from 'formik';
import React from 'react';
import useRegister from '../../hooks/useRegister';
import Formulario from './Formulario';
import registroModule from "./register.module.css";

const Registro = () => {
  const {
    createUser,
    schema
  } = useRegister();
  return (
    <div className={registroModule.divPrincipal}>
      <h1 className={registroModule.h1}>Registrese</h1>
      <Formik 
        initialValues={{ nombreUsuario:"",correo: "", password: ""}}
        validationSchema={schema}
        onSubmit={(values,{resetForm}) => {
          createUser(values);
          resetForm();
          
        }}
      >
        {
          ({values,errors,handleChange,handleSubmit}) => (
            <Formulario values={values} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
          )
        }
      </Formik>
    </div>
  )
}

export default Registro