import React, {useContext, useRef} from 'react';
import moduleTarea from "./Tarea.module.css";
import imagen from "../images/icon-cross.svg"
import useChequear from '../hooks/useChequear';
import TemaContext from '../context/TemaContext';


const Tarea = ({el, tareas, handleClickDiv}) => {
    const {darkMode} = useContext(TemaContext);
    let {
        id,
        tarea,
        complete
    } = el
    let { 
        handleClick, 
        completado, 
    } = useChequear(tareas, complete, id);
 
    return (
        <div className={darkMode ? moduleTarea.todoTemplateDarkMode : moduleTarea.todoTemplate}  >
            <div className={moduleTarea.divTemplate} >
                <div onClick={handleClick} className={`${moduleTarea.tachaTarea} ${completado && moduleTarea.cheked }`}></div>
                <p className={`${darkMode ? moduleTarea.tareaDarkMode : moduleTarea.tarea} ${completado && moduleTarea.tareaCheked}`} 
                >{tarea}</p>
            </div>
            <img src={imagen} alt="icono de cierre" className={moduleTarea.btnborrarTarea} onClick={() => handleClickDiv(el)}/>
        </div>
    )
}

export default Tarea
