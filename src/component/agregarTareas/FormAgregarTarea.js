import React, { useContext, useEffect } from 'react';
import useFetchTask from '../../hooks/useFetchTask';
import moduleForm from "./FormAgregarTarea.module.css"
import Tarea from '../tarea/Tarea';
import CantidadTareasOLimpiar from '../limpiarTareas/CantidadTareasOLimpiar';
import ThemeContext from '../../context/TemaContext';


const FormAgregarTarea = () => {
    const {darkMode} = useContext(ThemeContext);
    const {
        form,
        tareas,
        handleChange,
        pushTarea,
        handleClickLimpiar,
        deleteTarea,
        getTareas,
        putTarea,
        completado
    } = useFetchTask();
    
    useEffect(() => {
        getTareas()
    }, [tareas])

    return (
        <>
            <form className={darkMode ? moduleForm.formularioDarkMode : moduleForm.formulario} onSubmit={pushTarea}>
                <button className={moduleForm.boton}></button>
                <input 
                    type="text" 
                    placeholder='Crea una nueva tarea' 
                    name='tarea' 
                    value={form.tarea} 
                    className={darkMode ? moduleForm.inputDarkMode : moduleForm.input} 
                    onChange={handleChange}
                    />
            </form>
            <section className={darkMode ? moduleForm.seccionListaDeTareasDarkMode : moduleForm.seccionListaDeTareas}>
                {tareas.length === 0 || null || "" | {}
                ?   <div className={darkMode ? moduleForm.divdarkMode : moduleForm.divSinTarea}>
                        <p className={darkMode ? moduleForm.sinTareaDarkMode : moduleForm.sinTarea}>Sin tareas pendientes</p>
                    </div>
                : tareas.map(el => 
                    <Tarea 
                        key={el.id} 
                        el={el}
                        tareas={tareas} 
                        putTarea={putTarea}
                        deleteTarea={deleteTarea}
                    />
                )}
                {
                    tareas.length === 0 || null || "" 
                    ? "" 
                    : <CantidadTareasOLimpiar 
                        cantidadTareas={tareas.length} 
                        handleClickLimpiar={handleClickLimpiar}
                    />
                }
            </section>
        </>
        
    )
}

export default FormAgregarTarea
