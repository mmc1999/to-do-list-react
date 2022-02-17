import React from 'react';
import {ThemeProvider} from '../context/TemaContext';
import FormAgregarTarea from './FormAgregarTarea';
import Header from './Header';
import moduleMain from "./Main.module.css"

const Main = () => {
    localStorage.setItem("tareas", JSON.stringify([]))
    return (
        <main className={moduleMain.main}>
            <ThemeProvider>
                <Header />
                <FormAgregarTarea />
            </ThemeProvider>    
        </main>
        
    )
}

export default Main