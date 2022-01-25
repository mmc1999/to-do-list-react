import React, { useRef, useState } from 'react';

const useChequear = (tareas, complete, refDiv) => {
    const [completado, setCompletado] = useState(complete);
    const refContenido = useRef(null);
    //const refDiv = useRef(null);

    const handleClick = () => {
        tareas.forEach(el => {
            if(el.id == refDiv.current.id && el.complete == false){
                setCompletado(true)
                el.complete = true;
                localStorage.setItem("tareas", JSON.stringify(tareas));
                console.log(completado)
            }else if(el.id == refDiv.current.id && el.complete == true) {
                setCompletado(false)
                el.complete = false;
                localStorage.setItem("tareas", JSON.stringify(tareas));
                console.log(completado)
            }
        });
    }

    return { 
        handleClick, 
        completado, 
        refContenido
    }
}

export default useChequear
