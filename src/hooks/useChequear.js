import React, { useRef, useState } from 'react';

const useChequear = () => {
    const [completado, setCompletado] = useState(false);
    const refDiv = useRef(null);
    const refContenido = useRef(null);

    const handleClick = () => {
        completado == false ? setCompletado(true) : setCompletado(false);
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        tareas.forEach(el => {
            if(refDiv.current.id === el.id && refContenido.current.textContent === el.tarea && el.complete == false){
                el.complete = true;
                console.log(tareas)
                localStorage.setItem("tareas", JSON.stringify(tareas))
            }else if(refDiv.current.id === el.id && refContenido.current.textContent === el.tarea && el.complete == true) {
                el.complete = false;
                console.log(tareas)
                localStorage.setItem("tareas", JSON.stringify(tareas))
            }
        });
        
    }
    const handleClickDiv = () => {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        let filtrarTarea = tareas.filter(tarea => tarea.id != refDiv.current.id);
        //console.log(filtrarTarea)
        localStorage.setItem("tareas", JSON.stringify(filtrarTarea));
    }

    return { 
        handleClick, 
        completado, 
        refDiv, 
        handleClickDiv,
        refContenido
    }
}

export default useChequear
