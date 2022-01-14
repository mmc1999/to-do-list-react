import React from 'react';
import useLimpiarTodo from '../hooks/useLimpiarTodo';
import cantidadTareasOLimpiar from "./CantidadTareasOLimpiar.module.css";
import Tarea from './Tarea';

const CantidadTareasOLimpiar = ({cantidadTareas, tareas, darkMode}) => {
    let {
        refLimpiar,
        handleClickLimpiar
    } = useLimpiarTodo()
    return (
        <>
            <div className={darkMode ? cantidadTareasOLimpiar.divDarkMode : cantidadTareasOLimpiar.div}>
                <p  className={darkMode ? cantidadTareasOLimpiar.tareasDarmode : cantidadTareasOLimpiar.tareas}>{cantidadTareas} items left</p>
                <p  ref={refLimpiar} onClick={handleClickLimpiar} 
                    className={darkMode ? cantidadTareasOLimpiar.limpiarTodoDarkMode : cantidadTareasOLimpiar.limpiarTodo}
                > Clear completed</p>
            </div>
        </>
        
    )
}

export default CantidadTareasOLimpiar
