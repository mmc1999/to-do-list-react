import React, {useRef} from 'react';
import useFuncionalidad from '../hooks/useFuncionalidad';
import moduleForm from "./FormAgregarTarea.module.css"
import listaTareaModule from "./ListaTarea.module.css";
import Tarea from './Tarea';
import CantidadTareasOLimpiar from './CantidadTareasOLimpiar';
import UltimaSeccionOrdenar from './UltimaSeccionOrdenar';


const FormAgregarTarea = ({darkMode}) => {
    
    const {
        form,
        tareas,
        handleClange,
        handleSubmit,
        refLimpiar,
        handleClickLimpiar,
        handleClickDiv
    } = useFuncionalidad();

    console.log(tareas)
    
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
                    onChange={handleClange}
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
                        tarea={el.tarea} 
                        complete={el.complete} 
                        tareas={tareas} 
                        id={el.id} 
                        darkMode={darkMode}  
                        handleClickDiv={handleClickDiv}
                    /> 
                )
                }
                {
                    tareas.length == 0 
                    ? "" 
                    : <CantidadTareasOLimpiar 
                        cantidadTareas={tareas.length} 
                        darkMode={darkMode}  
                        refLimpiar={refLimpiar}
                        handleClickLimpiar={handleClickLimpiar}
                    />
                }
                {/*<UltimaSeccionOrdenar  darkMode={darkMode} />*/}
            </section>
        </>
        
    )
}

export default FormAgregarTarea
