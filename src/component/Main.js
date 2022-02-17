import React from 'react';
import {ThemeProvider} from '../context/TemaContext';
import FormAgregarTarea from './FormAgregarTarea';
import Header from './Header';
import moduleMain from "./Main.module.css"

const Main = () => {
    //localStorage.setItem("tareas", "[]") 
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