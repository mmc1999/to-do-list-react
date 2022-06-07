import React, {useState} from 'react';

const useFuncionalidad = () => {
    let tareasRealizar = Boolean(JSON.parse(localStorage.getItem("tareas"))) == false
    ? [] 
    : JSON.parse(localStorage.getItem("tareas"));
    localStorage.setItem("tareas", JSON.stringify(tareasRealizar)) 
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
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        handleChange(e);
        guardarLS();
        setForm(initialForm);
    }


   
    const handleClickDiv = (elemento) => {
        let nuevoArray = tareas.filter(el => el.id !== elemento.id);
        localStorage.setItem("tareas", JSON.stringify(nuevoArray));
        setTareas(nuevoArray);
    }
    
    const handleClickLimpiar = () => {
        setTareas([])
        localStorage.removeItem("tareas");
        localStorage.setItem("tareas", "[]");
    }    

    return {
        form,
        tareas,
        handleChange,
        handleSubmit,
        handleClickDiv,
        handleClickLimpiar,
    }
}

export default useFuncionalidad
