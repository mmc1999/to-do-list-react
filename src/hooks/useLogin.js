import React, { useContext } from 'react'
import Swal from 'sweetalert2';
import {object, string} from 'yup';
import { useNavigate } from 'react-router-dom';
import ThemeContext from '../context/TemaContext';

const url = "http://localhost:8080/"
//let url = "https://tareas-register-login.herokuapp.com/"

const useLogin = () => {
    let {
        setId,
        setToken
    } = useContext(ThemeContext)
    const navigate = useNavigate();
    let schema = object({
        correo: string().email("Invalid email").required("required field"),
        password: string().min(4, "the minimum of characters must be 4").required("required field"),
    });

    const loginUser = async (values) => {
        try {
            let data = await fetch(`${url}auth/user`, {
                method: 'POST',
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(values),
            });
            let res = await data.json();
            if(!res.ok) {
                throw res
            }
            localStorage.setItem("token", res.token);
            localStorage.setItem("id", res.usuario._id);
            setId(res.usuario._id);
            setToken(res.token)
            navigate("/");
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: 'Error!',
                text: error.msg,
                icon: 'error',
                confirmButtonText: 'Cool'
            });
        }
    }

return {
    loginUser,
    schema
  }
}

export default useLogin