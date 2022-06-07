import React, { useState } from 'react';

const useChequear = (tareas, complete, id) => {
    const [completado, setCompletado] = useState(complete);

    const handleClick = () => {
        tareas.forEach(el => {
            if(el.id == id && el.complete == false){
                setCompletado(true)
                el.complete = true;
                localStorage.setItem("tareas", JSON.stringify(tareas));
            }else if(el.id == id && el.complete == true) {
                setCompletado(false)
                el.complete = false;
                localStorage.setItem("tareas", JSON.stringify(tareas));
            }
        });
    }

    return { 
        handleClick, 
        completado, 
    }
}

export default useChequear
