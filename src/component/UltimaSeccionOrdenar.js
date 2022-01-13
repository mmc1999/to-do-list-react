import React from 'react';
import { useRef } from 'react/cjs/react.development';
import moduleOrdenar from "./ultimaSeccionOrdenar.module.css"

const UltimaSeccionOrdenar = () => {
    let refDiv = useRef(null)

    const handleClick = () => {
        if(refDiv.current) {
            window.location.reload(true);
        }
    }

    return (
        <div ref={refDiv} className={moduleOrdenar.div} onClick={handleClick}>
            <p>Actualizar</p>
        </div>
    )
}

export default UltimaSeccionOrdenar
