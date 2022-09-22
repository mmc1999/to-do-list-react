import React from 'react'
import {Formik} from "formik";
import Formulario from './Formulario';
import LoginModule from "./login.module.css"
import useLogin from '../../hooks/useLogin';

const Login = () => {
  let {
    schema,
    loginUser
  } = useLogin()
  return (
    <div className={LoginModule.divPrincipal}>
        <h1 className={LoginModule.h1}>Login</h1>
        <Formik
            initialValues={{correo:"", password:""}}
            validationSchema={schema}
            onSubmit={(values, resetForm) => {
              loginUser(values);
              resetForm();
            }}
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