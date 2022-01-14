import React, { useRef } from 'react';
import moduleOrdenar from "./ultimaSeccionOrdenar.module.css"

const UltimaSeccionOrdenar = ({darkMode}) => {
    let refDivv = useRef(null)
    
    const handleClick = () => {
        if(refDivv.current) {
            window.location.reload(true);
        }
    }

    return (
        <div ref={refDivv} className={darkMode ? moduleOrdenar.divDarkMode : moduleOrdenar.div} onClick={handleClick}>
            <p className={darkMode ? moduleOrdenar.actualizarDarkMode : moduleOrdenar.actualizar}>Actualizar</p>
        </div>
    )
}

export default UltimaSeccionOrdenar
