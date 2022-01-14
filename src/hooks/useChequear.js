import React, { useRef, useState } from 'react';

const useChequear = (tareas, complete) => {
    const [completado, setCompletado] = useState(complete);
    const refDiv = useRef(null);
    const refContenido = useRef(null);
    const [filtrar, setFiltrar] = useState(tareas)
    
    const handleClick = () => {
        filtrar.forEach(el => {
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

    //funcion para borrar la tarea
    const handleClickDiv = () => {
        filtrar.forEach((el,indice) => {
            console.log(filtrar)
            if(el.id == refDiv.current.id) {
                setFiltrar(tareas.splice(indice, 1))
            }
        })
        console.log(filtrar)
        localStorage.setItem("tareas", JSON.stringify(filtrar));
    }

    return { 
        handleClick, 
        completado, 
        filtrar,
        refDiv, 
        handleClickDiv,
        refContenido
    }
}

export default useChequear
