import React from 'react'
import {object, string} from 'yup';

const url = "http://localhost:8080";

const useLogin = () => {
    let schema = object({
        correo: string().email("Invalid email").required("required field"),
        password: string().min(4, "the minimum of characters must be 4").required("required field"),
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
    loginUser,
    schema
  }
}

export default useLogin