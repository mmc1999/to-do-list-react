import React from 'react';
import cantidadTareasOLimpiar from "./CantidadTareasOLimpiar.module.css";

const CantidadTareasOLimpiar = ({cantidadTareas, darkMode, refLimpiar, handleClickLimpiar}) => {

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
