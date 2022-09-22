import React from 'react'
import {Formik} from "formik";
import Formulario from './Formulario';
import LoginModule from "./login.module.css"

const Login = () => {
  return (
    <div className={LoginModule.divPrincipal}>
        <h1 className={LoginModule.h1}>Login</h1>
        <Formik
            initialValues={{correo:"", password:""}}
            validationSchema={"ee"}
            onSubmit={{}}
        >
        {
            ({values, handleChange, handleSubmit, errors}) => (
                <Formulario values={values} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} />
            )
        }
        </Formik>
    </div>
  )
}

export default Login