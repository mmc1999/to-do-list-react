import React, { useState, useEffect } from 'react';
import CantidadTareasOLimpiar from './CantidadTareasOLimpiar';
import listaTarea from "./ListaTarea.module.css";
import Tarea from './Tarea';
import UltimaSeccionOrdenar from './UltimaSeccionOrdenar';

if(localStorage.getItem("tareas") == "" || localStorage.getItem("tareas") == null) {
    localStorage.setItem("tareas", "[]")
}
const ListaTarea = () => {
    let algo = JSON.parse(localStorage.getItem("tareas"));
    
    return (
        <section className={listaTarea.seccionListaDeTareas}>
            {algo.length == 0 || null || "" 
            ?    <div className={listaTarea.divSinTarea}><p className={listaTarea.sinTarea}>Sin tareas pendientes</p></div>
            : algo.map(el => 
                <Tarea key={el.id} tarea={el.tarea} complete={el.complete} id={el.id} />    
            )
            }
            {
                algo.length == 0 ? "" : <CantidadTareasOLimpiar cantidadTareas={algo.length} />
            }
            <UltimaSeccionOrdenar tareas={algo} />
        </section>
    )
}

export default ListaTarea
