import React from 'react';
import useFuncionalidad from '../hooks/useFuncionalidad';
import moduleForm from "./FormAgregarTarea.module.css"
import ListaTarea from './ListaTarea';

const FormAgregarTarea = ({darkMode}) => {
    const {
        tareas,
        handleClange,
        handleSubmit
    } = useFuncionalidad();
    
    return (
        <>
            <form className={darkMode ? moduleForm.formularioDarkMode : moduleForm.formulario} onSubmit={handleSubmit}>
                <button className={moduleForm.boton}></button>
                <input 
                    type="text" 
                    placeholder='Crea una nueva tarea' 
                    name='tarea' 
                    value={tareas.tarea} 
                    className={darkMode ? moduleForm.inputDarkMode : moduleForm.input} 
                    onChange={handleClange}
                    />
            </form>
            <ListaTarea tareas={tareas} darkMode={darkMode} />
        </>
        
    )
}

export default FormAgregarTarea
