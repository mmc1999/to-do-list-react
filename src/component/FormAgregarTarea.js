import React, { useContext } from 'react';
import useFuncionalidad from '../hooks/useFuncionalidad';
import moduleForm from "./FormAgregarTarea.module.css"
import listaTareaModule from "./ListaTarea.module.css";
import Tarea from './Tarea';
import CantidadTareasOLimpiar from './CantidadTareasOLimpiar';
import ThemeContext from '../context/TemaContext';


const FormAgregarTarea = () => {
    const {darkMode} = useContext(ThemeContext);
    const {
        form,
        tareas,
        handleChange,
        handleSubmit,
        handleClickLimpiar,
        handleClickDiv
    } = useFuncionalidad();

    return (
        <>
            <form className={darkMode ? moduleForm.formularioDarkMode : moduleForm.formulario} onSubmit={handleSubmit}>
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
            <section className={darkMode ? listaTareaModule.seccionListaDeTareasDarkMode : listaTareaModule.seccionListaDeTareas}>
                {tareas.length == 0 || null || "" 
                ?   <div className={darkMode ? listaTareaModule.divdarkMode : listaTareaModule.divSinTarea}>
                        <p className={darkMode ? listaTareaModule.sinTareaDarkMode : listaTareaModule.sinTarea}>Sin tareas pendientes</p>
                    </div>
                : tareas.map(el => 
                    <Tarea 
                        key={el.id} 
                        el={el}
                        tareas={tareas} 
                        handleClickDiv={handleClickDiv}
                    /> 
                )
                }
                {
                    tareas.length == 0 
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
