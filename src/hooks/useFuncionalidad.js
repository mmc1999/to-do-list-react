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
            console.log(res)
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
                body: JSON.stringify(tarea)
            });
            let res = await data.json();
            cambiarEstado(res)
        } catch (error) {
            console.log(error)
        }
    }

    const cambiarEstado = (tarea) => {
        console.log(tarea)
        /*tareas.forEach(el => {
            if(el.id === tarea.id && tarea.complete === false){
                el.complete = true
                setCompletado(true);
                localStorage.setItem("tareas", JSON.stringify(tareas));
            } else if(el.id === tarea.id && tarea.complete === true) {
                el.complete = false
                setCompletado(false);
                localStorage.setItem("tareas", JSON.stringify(tareas));
            }
        });*/
    }
    const guardarLS = () => {
        tareasRealizar.push(form);
        localStorage.setItem("tareas", JSON.stringify(tareasRealizar));
        setTareas([...tareas, form]);
    }
    
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleClickDiv = (elemento) => {
        let nuevoArray = tareas.filter(el => el.id !== elemento.id);
        localStorage.setItem("tareas", JSON.stringify(nuevoArray));
        setTareas(nuevoArray);
    }
    
    const handleClickLimpiar = () => {
        setTareas([])
        localStorage.removeItem("tareas");
        localStorage.setItem("tareas", "[]");
    }    

    return {
        form,
        tareas,
        handleChange,
        handleClickDiv,
        handleClickLimpiar,
        getTareas,
        pushTarea,
        putTarea,
        completado
    }
}

export default useFuncionalidad
