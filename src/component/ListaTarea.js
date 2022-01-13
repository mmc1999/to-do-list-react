import React from 'react';
import CantidadTareasOLimpiar from './CantidadTareasOLimpiar';
import listaTarea from "./ListaTarea.module.css";
import Tarea from './Tarea';
import UltimaSeccionOrdenar from './UltimaSeccionOrdenar';

const ListaTarea = () => {
    
    let algo = JSON.parse(localStorage.getItem("tareas")) == null 
        ?  JSON.stringify(localStorage.setItem("tareas", "[]")) 
        :  JSON.parse(localStorage.getItem("tareas"));
    console.log(algo)
    return (
        <section className={listaTarea.seccionListaDeTareas}>
            {algo.length == 0 || null 
            ?    <div className={listaTarea.divSinTarea}><p className={listaTarea.sinTarea}>Sin tareas pendientes</p></div>
            : algo.map(el => 
                <Tarea key={el.id} tarea={el.tarea} complete={el.complete} id={el.id} />    
            )
            }
            {
                algo.length == 0 ? "" : <CantidadTareasOLimpiar cantidadTareas={algo.length} />
            }
            <UltimaSeccionOrdenar />
        </section>
    )
}

export default ListaTarea
