import React, {useContext} from 'react';
import moduleTarea from "./Tarea.module.css";
import imagen from "../../images/icon-cross.svg"
import TemaContext from '../../context/TemaContext';


const Tarea = ({el, deleteTarea, putTarea}) => {
    const {darkMode} = useContext(TemaContext);
    let { tarea, complete } = el
    return (
        <div className={darkMode ? moduleTarea.todoTemplateDarkMode : moduleTarea.todoTemplate}  >
            <div className={moduleTarea.divTemplate} >
                <div onClick={() => putTarea(el)} className={`${moduleTarea.tachaTarea} ${complete && moduleTarea.cheked }`}></div>
                <p className={`${darkMode ? moduleTarea.tareaDarkMode : moduleTarea.tarea} ${complete && moduleTarea.tareaCheked}`} 
                >{tarea}</p>
            </div>
            <img src={imagen} alt="icono de cierre" className={moduleTarea.btnborrarTarea} onClick={() => deleteTarea(el)}/>
        </div>
    )
}

export default Tarea
