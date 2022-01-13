import React, {useState} from 'react';
//const [tareasRealizar, setTareasRealizar] = useState([])

let tareasRealizar = [];
const useFuncionalidad = () => {
    const initialForm = {
        id:uuid.v1(),
        tarea:"",
        complete:false
    }
    const [form, setForm] = useState(initialForm);

    const guardarLS = () => {
        tareasRealizar=JSON.parse(localStorage.getItem("tareas")) || [];
        tareasRealizar.push(form);
        localStorage.setItem("tareas", JSON.stringify(tareasRealizar));
        console.log(localStorage.getItem("tareas"))
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
