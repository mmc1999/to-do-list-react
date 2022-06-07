import React from 'react';
import {ThemeProvider} from '../context/TemaContext';
import FormAgregarTarea from './FormAgregarTarea';
import Header from './Header';
import moduleMain from "./Main.module.css"

export const Main = () => {
    return (
        <main className={moduleMain.main}>
            <ThemeProvider>
                <Header />
                <FormAgregarTarea />
            </ThemeProvider>    
        </main>
    )
}
