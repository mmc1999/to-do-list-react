import React, {useRef} from 'react';


const useLimpiarTodo = (tareas) => {
    const refLimpiar = useRef(null);

    const handleClickLimpiar = () => {
        localStorage.removeItem("tareas");
        localStorage.setItem("tareas", "[]");
        console.log(tareas)
    }    
    return {
        refLimpiar,
        handleClickLimpiar
    }
}

export default useLimpiarTodo
