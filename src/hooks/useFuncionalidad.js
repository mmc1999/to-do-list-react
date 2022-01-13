import React, {useEffect, useState} from 'react';

const initialForm = {
    id: Date.now(),
    tarea:"",
    complete:false
}

let tareasRealizar = [];
const useFuncionalidad = () => {
    const [form, setForm] = useState(initialForm);

  

    const guardarLS = () => {
        tareasRealizar=JSON.parse(localStorage.getItem("tareas")) == "" || null || undefined ? [] : JSON.parse(localStorage.getItem("tareas"));
        tareasRealizar.push(form);
        localStorage.setItem("tareas", JSON.stringify(tareasRealizar));
    }

    const handleClange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        guardarLS();
        setForm(initialForm);
    }

    return {
        form,
        handleClange,
        handleSubmit
    }
}

export default useFuncionalidad
