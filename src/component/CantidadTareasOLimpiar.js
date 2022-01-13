import React from 'react';
import useLimpiarTodo from '../hooks/useLimpiarTodo';
import cantidadTareasOLimpiar from "./CantidadTareasOLimpiar.module.css";

const CantidadTareasOLimpiar = ({cantidadTareas}) => {
    let {
        refLimpiar,
        handleClickLimpiar
    } = useLimpiarTodo()
    return (
        <div className={cantidadTareasOLimpiar.div}>
            <p>{cantidadTareas} items left</p>
            <p ref={refLimpiar} onClick={handleClickLimpiar}>Clear completed</p>
        </div>
    )
}

export default CantidadTareasOLimpiar
