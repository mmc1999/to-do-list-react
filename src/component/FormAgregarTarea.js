import React from 'react';
import useFuncionalidad from '../hooks/useFuncionalidad';
import moduleForm from "./FormAgregarTarea.module.css"

const FormAgregarTarea = () => {
    const {
        form,
        handleClange,
        handleSubmit
    } = useFuncionalidad();
    
    return (
        <form className={moduleForm.formulario} onSubmit={handleSubmit}>
            <button className={moduleForm.boton}></button>
            <input 
                type="text" 
                placeholder='Crea una nueva tarea' 
                name='tarea' 
                value={form.tarea} 
                className={moduleForm.input} 
                onChange={handleClange}
                />
        </form>
    )
}

export default FormAgregarTarea
