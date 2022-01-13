import React from 'react';
import cantidadTareasOLimpiar from "./CantidadTareasOLimpiar.module.css";

const CantidadTareasOLimpiar = ({cantidadTareas}) => {
    return (
        <div className={cantidadTareasOLimpiar.div}>
            <p>{cantidadTareas} items left</p>
            <p>Clear completed</p>
        </div>
    )
}

export default CantidadTareasOLimpiar
