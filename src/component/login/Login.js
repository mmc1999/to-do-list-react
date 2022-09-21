import React from 'react'
import {Formik} from "formik";
import Formulario from './Formulario';

const Login = () => {
  return (
    <div>
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