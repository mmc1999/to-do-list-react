import React from 'react';
import moduleOrdenar from "./ultimaSeccionOrdenar.module.css"

const UltimaSeccionOrdenar = () => {
    return (
        <div className={moduleOrdenar.div}>
            <p>Todas</p>
            <p>Activas</p>
            <p>Completadas</p>
        </div>
    )
}

export default UltimaSeccionOrdenar
