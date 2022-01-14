import React from 'react';
import useChequear from '../hooks/useChequear';
import CantidadTareasOLimpiar from './CantidadTareasOLimpiar';
import listaTareaModule from "./ListaTarea.module.css";
import Tarea from './Tarea';
import UltimaSeccionOrdenar from './UltimaSeccionOrdenar';

if(localStorage.getItem("tareas") == "" || localStorage.getItem("tareas") == null) {
    localStorage.setItem("tareas", "[]")
}
const ListaTarea = ({tareas, darkMode}) => {
    return (
        <section className={darkMode ? listaTareaModule.seccionListaDeTareasDarkMode : listaTareaModule.seccionListaDeTareas}>
            {tareas.length == 0 || null || "" 
            ?   <div className={darkMode ? listaTareaModule.divdarkMode : listaTareaModule.divSinTarea}>
                    <p className={darkMode ? listaTareaModule.sinTareaDarkMode : listaTareaModule.sinTarea}>Sin tareas pendientes</p>
                </div>
            : tareas.map(el => 
                <Tarea key={el.id} tarea={el.tarea} complete={el.complete} tareas={tareas} id={el.id} darkMode={darkMode} /> 
            )
            }
            {
                tareas.length == 0 ? "" : <CantidadTareasOLimpiar cantidadTareas={tareas.length} tareas={tareas} darkMode={darkMode}  />
            }
            <UltimaSeccionOrdenar darkMode={darkMode} />
        </section>
    )
}

export default ListaTarea
