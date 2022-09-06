import React, {useState} from 'react';

const useFuncionalidad = (complete) => {
    let tareasRealizar = Boolean(JSON.parse(localStorage.getItem("tareas"))) == false
    ? [] 
    : JSON.parse(localStorage.getItem("tareas"));

    localStorage.setItem("tareas", JSON.stringify(tareasRealizar));
    const initialForm = {
        id: Date.now(),
        tarea:"",
        complete:false
    }
    const [form, setForm] = useState(initialForm);
    const [tareas, setTareas] = useState(tareasRealizar);
    const [completado, setCompletado] = useState(complete);
    
    const getTareas = async () => {
        try {
            let data = await fetch("http://localhost:8080/api/tareas");
            let res = await data.json();
            if(Object.keys(res).length === 0) return setTareas([])
            setTareas(res);
        } catch (error) {
            console.log(error);
        }
    }

    const pushTarea = async (e) => {
        e.preventDefault();
        handleChange(e);
        try {
            let data = await fetch("http://localhost:8080/api/tareas", {
                method:"POST",
                body:JSON.stringify(form),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            let res = await data.json();
            setTareas([...tareas, res]);
        } catch (error) {
            console.log(error);
        }
        setForm(initialForm);
    }

    const putTarea = async (id, tarea) => {
        try {
            let data = await fetch(`http://localhost:8080/${id}`, {
                method:"PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id:form.id,
                    tarea:tarea.tarea,
                    complete: tarea.complete ? false : true
                })
            });
            let res = await data.json();
            setTareas(res);
            cambiarEstado(res);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTarea = async (el) => {
        try {
            let data = await fetch(`http://localhost:8080/${el.id}`, {method:"DELETE"});
            let res = await data.json();
            setTareas(res);
        } catch (error) {
            console.log(error)
        }
    }

    const cambiarEstado = (tarea) => {
        tareas.forEach(el => {
            if(el.id === tarea.id && tarea.complete === false){
                console.log("complete true")
                setCompletado(true);
                localStorage.setItem("tareas", JSON.stringify(tareas));
            } else if(el.id === tarea.id && tarea.complete === true) {
                console.log("complete false")
                setCompletado(false);
                localStorage.setItem("tareas", JSON.stringify(tareas));
            }
        });
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleClickLimpiar = async () => {
        try {
            let data = await fetch(`http://localhost:8080/eliminar/1`, {method:"DELETE"});
            let res = await data.json();
            setTareas(res);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }    

    return {
        form,
        tareas,
        handleChange,
        handleClickLimpiar,
        getTareas,
        pushTarea,
        putTarea,
        deleteTarea,
        completado
    }
}

export default useFuncionalidad
