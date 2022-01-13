import React, { useRef } from 'react';
import moduleOrdenar from "./ultimaSeccionOrdenar.module.css"

const UltimaSeccionOrdenar = () => {
    let refDivv = useRef(null)
    
    const handleClick = () => {
        if(refDivv.current) {
            window.location.reload(true);
        }
    }

    return (
        <div ref={refDivv} className={moduleOrdenar.div} onClick={handleClick}>
            <p>Actualizar</p>
        </div>
    )
}

export default UltimaSeccionOrdenar
