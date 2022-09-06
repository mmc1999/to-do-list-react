import React, {useContext} from 'react';
import moduleTarea from "./Tarea.module.css";
import imagen from "../images/icon-cross.svg"
import TemaContext from '../context/TemaContext';
import useFuncionalidad from '../hooks/useFuncionalidad';


const Tarea = ({el, handleClickDiv}) => {
    const {darkMode} = useContext(TemaContext);
    let {
        id,
        tarea,
        complete
    } = el
    let { 
        putTarea, 
        completado, 
    } = useFuncionalidad(complete)
    return (
        <div className={darkMode ? moduleTarea.todoTemplateDarkMode : moduleTarea.todoTemplate}  >
            <div className={moduleTarea.divTemplate} >
                <div onClick={() => putTarea(id, el)} className={`${moduleTarea.tachaTarea} ${completado ? moduleTarea.cheked : ""}`}></div>
                <p className={`${darkMode ? moduleTarea.tareaDarkMode : moduleTarea.tarea} ${completado ? moduleTarea.tareaCheked : ""}`} 
                >{tarea}</p>
            </div>
            <img src={imagen} alt="icono de cierre" className={moduleTarea.btnborrarTarea} onClick={() => handleClickDiv(el)}/>
        </div>
    )
}

export default Tarea
