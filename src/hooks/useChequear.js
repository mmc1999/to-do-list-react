import React, { useRef, useState } from 'react';

const useChequear = () => {
    const [completado, setCompletado] = useState(false);
    const refDiv = useRef(null);
    const refContenido = useRef(null);

    const handleClick = () => {
        completado == false ? setCompletado(true)  : setCompletado(false);
        let tareas = JSON.parse(localStorage.getItem("tareas"));

        //funcion para tachar la tarea
        tareas.forEach(el => {
            //console.log(refDiv.current.id == el.id && refContenido.current.textContent == el.tarea && el.complete == false)
            if(refDiv.current.id == el.id && refContenido.current.textContent == el.tarea && el.complete == false){
                //setCompletado(true)
                el.complete = true;
                localStorage.setItem("tareas", JSON.stringify(tareas));
            }else if(refDiv.current.id == el.id && refContenido.current.textContent == el.tarea && el.complete == true) {
                //setCompletado(false);
                el.complete = false;
                localStorage.setItem("tareas", JSON.stringify(tareas));
            }
        });
    }

    //funcion para borrar la tarea
    const handleClickDiv = () => {
        let tareas = JSON.parse(localStorage.getItem("tareas"));
        let filtrarTarea = tareas.filter(tarea => tarea.id != refDiv.current.id);
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
