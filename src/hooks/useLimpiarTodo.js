import React, {useRef} from 'react';


const useLimpiarTodo = () => {
    const refLimpiar = useRef(null)
    
    const handleClickLimpiar = () => {
        localStorage.removeItem("tareas");
        localStorage.setItem("tareas", "[]");
    }    
    return {
        refLimpiar,
        handleClickLimpiar
    }
}

export default useLimpiarTodo
