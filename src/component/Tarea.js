import React, {useContext, useRef} from 'react';
import moduleTarea from "./Tarea.module.css";
import imagen from "../images/icon-cross.svg"
import useChequear from '../hooks/useChequear';
import TemaContext from '../context/TemaContext';


const Tarea = ({tareas,tarea, complete, id, handleClickDiv}) => {
    const {darkMode} = useContext(TemaContext)
    const refDiv = useRef(null);
    let { 
        handleClick, 
        completado, 
        refContenido
    } = useChequear(tareas, complete, refDiv);
 
    return (
        <div ref={refDiv} className={darkMode ? moduleTarea.todoTemplateDarkMode : moduleTarea.todoTemplate} id={id} >
            <div className={moduleTarea.divTemplate} >
                <div onClick={handleClick} className={`${moduleTarea.tachaTarea} ${completado && moduleTarea.cheked }`}></div>
                <p className={`${darkMode ? moduleTarea.tareaDarkMode : moduleTarea.tarea} ${completado && moduleTarea.tareaCheked}`} 
                ref={refContenido}>{tarea}</p>
            </div>
            <img src={imagen} alt="icono de cierre" className={moduleTarea.btnborrarTarea} onClick={() => handleClickDiv(refDiv)}/>
        </div>
    )
}

export default Tarea
