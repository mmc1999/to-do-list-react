import React, {useState, useRef} from 'react';

const useFuncionalidad = () => {
    let tareasRealizar = JSON.parse(localStorage.getItem("tareas")) == "" || null || undefined 
    ? []
    : JSON.parse(localStorage.getItem("tareas"));
    const initialForm = {
        id: Date.now(),
        tarea:"",
        complete:false
    }
    const [form, setForm] = useState(initialForm);
    const [tareas, setTareas] = useState(tareasRealizar);
    const refLimpiar = useRef(null);
    
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
        handleClange(e);
        guardarLS();
        setForm(initialForm);
    }


   
    const handleClickDiv = (refDiv) => {
        tareas.forEach((el, indice) => {
            if(el.id == refDiv.current.id) {
                tareasRealizar.splice(indice, 1)
                localStorage.setItem("tareas", JSON.stringify(tareasRealizar));
            }
        })
        setTareas(tareasRealizar);
        console.log(tareas)
    }
    
    const handleClickLimpiar = () => {
        setTareas([])
        localStorage.removeItem("tareas");
        localStorage.setItem("tareas", "[]");
        console.log(tareas)
    }    

    return {
        form,
        tareas,
        handleClange,
        handleSubmit,
        handleClickDiv,
        refLimpiar,
        handleClickLimpiar,
    }
}

export default useFuncionalidad
