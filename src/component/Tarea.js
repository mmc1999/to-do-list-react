import React from 'react';
import moduleTarea from "./Tarea.module.css";
import imagen from "../images/icon-cross.svg"
import useChequear from '../hooks/useChequear';

const Tarea = ({tareas,tarea, complete, id, darkMode}) => {
    let { 
        handleClick, 
        completado, 
        filtrar,
        refDiv, 
        handleClickDiv,
        refContenido
    } = useChequear(tareas, complete);

    return (
        <div ref={refDiv} className={darkMode ? moduleTarea.todoTemplateDarkMode : moduleTarea.todoTemplate} id={id} >
            <div className={moduleTarea.divTemplate} >
                <div onClick={handleClick} className={`${moduleTarea.tachaTarea} ${completado && moduleTarea.cheked }`}></div>
                <p className={`${darkMode ? moduleTarea.tareaDarkMode : moduleTarea.tarea} ${completado && moduleTarea.tareaCheked}`} 
                ref={refContenido}>{tarea}</p>
            </div>
            <img src={imagen} alt="icono de cierre" className={moduleTarea.btnborrarTarea} onClick={handleClickDiv}/>
        </div>
    )
}

export default Tarea
