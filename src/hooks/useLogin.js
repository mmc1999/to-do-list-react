import React from 'react'
import {object, string} from 'yup';

const url = "http://localhost:8080";

const useLogin = () => {
    let schema = object({
        nombreUsuario: string().min(3, "El minimo de caracteres para el nombre de usuario es 3").required("El campo es obligatorio"),
        correo: string().email("El correo debe ser valido").required("El campo es obligatorio"),
        password: string().min(4, "El minimo de caracteres es 4").required("El campo es obligatorio"),
    });

    const loginUser = async (values) => {
        try {
            let data = await fetch(`${url}/register/user`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            });
            let res = await data.json();
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

return {
    loginUser
  }
}

export default useLogin