import React from 'react';
import FormAgregarTarea from './FormAgregarTarea';
import ListaTarea from './ListaTarea';
import moduleMain from "./Main.module.css"

const Main = () => {
    return (
        <main className={moduleMain.main}>
            <section className={moduleMain.primerSection}>
                <h1 className={moduleMain.titulo}>TODO</h1>
                <p><i className={`${moduleMain.iconoModo} fas fa-moon`}></i></p>
            </section>
            <FormAgregarTarea />
            <ListaTarea />
        </main>
    )
}

export default Main