import React, {useState, useEffect} from 'react';

//const urlBase = "https://primerfullstack.herokuapp.com/"
let urlBase = "http://localhost:8080/"

const initialForm = {
        tarea:"",
        complete:false
    };

const useFetchTask = (complete) => {
    const [form, setForm] = useState(initialForm);
    const [tareas, setTareas] = useState([]);
    const [completado, setCompletado] = useState(complete);
    
    //aca hay que mandar el id del usuario para traer las tareas del usuario
    const getTareas = async () => {
        try {
            let data = await fetch(`${urlBase}api/task`);
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
            let data = await fetch(`${urlBase}api/tareas`, {
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

    const putTarea = async (tarea) => {
        console.log(tarea)
        try {
            let data = await fetch(`${urlBase}api/tareas/${tarea.id}`, {
                method:"PUT",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id:tarea._id,
                    tarea:tarea.tarea,
                    complete: tarea.complete
                })
            });
            let res = await data.json();
            setTareas([...tareas, res]);
            setCompletado(res.complete);
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTarea = async (el) => {
        try {
            await fetch(`${urlBase}api/tareas/tarea/${el.id}`, {method:"DELETE"});
        } catch (error) {
            console.log(error)
        }
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
            await fetch(`${urlBase}api/tareas/eliminar/1`, {method:"DELETE"});
        } catch (error) {
            console.log(error)
        }
    }    


    useEffect(() => {
        getTareas();
        console.log(tareas)
    }, [getTareas])

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
export default useFetchTask

