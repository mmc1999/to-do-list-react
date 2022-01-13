import React from 'react';
import moduleTarea from "./Tarea.module.css";
import imagen from "../images/icon-cross.svg"
import useChequear from '../hooks/useChequear';

const Tarea = ({tarea, complete, id}) => {
    let { 
        handleClick, 
        completado, 
        refDiv, 
        handleClickDiv,
        refContenido
    } = useChequear()
    console.log(completado)
    return (
        <div ref={refDiv} className={moduleTarea.todoTemplate} id={id} >
            <div className={moduleTarea.divTemplate}>
                <div onClick={handleClick} className={`${moduleTarea.tachaTarea} ${completado || complete && moduleTarea.cheked }` }></div>
                <p className={`${moduleTarea.tarea} ${completado || complete && moduleTarea.tareaCheked}`} ref={refContenido}>{tarea}</p>
            </div>
            <img src={imagen} alt="icono de cierre" className={moduleTarea.btnborrarTarea} onClick={handleClickDiv}/>
        </div>
    )
}

export default Tarea
