import {useState, useEffect, useContext, useCallback} from 'react';
import ThemeContext from '../context/TemaContext';

//const urlBase = "https://primerfullstack.herokuapp.com/"
let urlBase = "https://tareas-register-login.herokuapp.com/"

const initialForm = {
        tarea:"",
        complete:false
    };

const useFetchTask = (complete) => {
    const [form, setForm] = useState(initialForm);
    const [tareas, setTareas] = useState([]);
    let {
        id,
        token
    } = useContext(ThemeContext);
    
    //aca hay que mandar el id del usuario para traer las tareas del usuario

    useEffect(() => {
        let mounted = true
        const getTareas = async () => {
            try {
                let data = await fetch(`${urlBase}api/task`, {
                    headers: {
                        "id":id
                        }
                });
                let res = await data.json();
                if(mounted){
                    setTareas(res);
                }
            } catch (error) {
                console.log(error);
            }
        }
        getTareas();
        return () => mounted = false
    }, [tareas])
    

    const pushTarea = async (e) => {
        e.preventDefault();
        handleChange(e);
        try {
            let data = await fetch(`${urlBase}api/task`, {
                method:"POST",
                body:JSON.stringify(form),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                    "id":id,
                    "token":token
                }
            });
            let res = await data.json();
            setTareas([...tareas, res.task]);
            setForm(initialForm);
        } catch (error) {
            console.log(error);
        }
        
    }

    const putTarea = async (tarea) => {
        try {
             await fetch(`${urlBase}api/task/${tarea.id}`, {
                method:"PUT",
                headers: { 
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    id:tarea.id,
                    tarea:tarea.tarea,
                    complete: tarea.complete 
                })
            })
            
        } catch (error) {
            console.log(error)
        }
    }

    const deleteTarea = async (el) => {
        try {
            await fetch(`${urlBase}api/task/${el.id}`, {method:"DELETE"});
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
            await fetch(`${urlBase}api/task/eliminartodo/1`, {method:"DELETE"});
        } catch (error) {
            console.log(error)
        }
    }    

    /*useEffect(() => {
        let mounted = true;
        if(mounted){
            getTareas()
        }
        return () => mounted = false
    },[setTareas])*/

    return {
        form,
        tareas,
        handleChange,
        handleClickLimpiar,
        pushTarea,
        putTarea,
        deleteTarea,
        setTareas,
        //getTareas
    
    }
}
export default useFetchTask

