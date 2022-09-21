import React from 'react'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {object, string} from 'yup';


const url = "http://localhost:8080";

const useRegister = () => {
    const navigate = useNavigate();
    let schema = object({
        nombreUsuario: string().min(3, "El minimo de caracteres para el nombre de usuario es 3").required("El campo es obligatorio"),
        correo: string().email("El correo debe ser valido").required("El campo es obligatorio"),
        password: string().min(4, "El minimo de caracteres es 4").required("El campo es obligatorio"),
    });

    const createUser = async (values) => {
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
            if(!res.usuario) throw res
            navigate("/login")
            Swal.fire(
                'usuario creado',
                `el usuario ${res.usuario.nombreUsuario} ha sido`,
                'success'
            );
        } catch (errors) {
            console.log(errors)
            //poner sweet alert de que el correo ya existe en base de datos
            /*Swal.fire({
                title: 'Error!',
                text: errors.errors[0].msg,
                icon: 'error',
                confirmButtonText: 'Cool'
            });*/
        }
    }

    return {
        createUser,
        schema,
    }
}

export default useRegister