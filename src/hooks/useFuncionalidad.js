import React, {useState} from 'react';


let tareasRealizar = [];
const useFuncionalidad = () => {
    const [tareasRealizar2, setTareasRealizar] = useState(JSON.parse(localStorage.getItem("tareas")) == "" || null || undefined ? [] : JSON.parse(localStorage.getItem("tareas")));

    const initialForm = {
        id:Date.now(),
        tarea:"",
        complete:false
    }
    const [form, setForm] = useState(initialForm);

    const guardarLS = () => {
        tareasRealizar=JSON.parse(localStorage.getItem("tareas")) == "" || null || undefined ? [] : JSON.parse(localStorage.getItem("tareas"));
        tareasRealizar.push(form);

        localStorage.setItem("tareas", JSON.stringify(tareasRealizar));
        setTareasRealizar(tareasRealizar);
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
