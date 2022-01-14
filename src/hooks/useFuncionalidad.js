import React, {useEffect, useState} from 'react';
import useChequear from './useChequear';


let tareasRealizar = JSON.parse(localStorage.getItem("tareas")) == "" || null || undefined ? [] : JSON.parse(localStorage.getItem("tareas"));

const useFuncionalidad = () => {
    const initialForm = {
        id: Date.now(),
        tarea:"",
        complete:false
    }
    const [form, setForm] = useState(initialForm);
    const [tareas, setTareas] = useState(tareasRealizar);

    const guardarLS = () => {
        tareasRealizar.push(form);
        localStorage.setItem("tareas", JSON.stringify(tareasRealizar));
        setTareas(tareasRealizar)
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
        //handleClange(e)
        guardarLS();
        setForm(initialForm);
    }

    return {
        form,
        tareas,
        handleClange,
        handleSubmit
    }
}

export default useFuncionalidad
