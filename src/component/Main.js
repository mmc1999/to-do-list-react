import React, {useState, useEffect} from 'react';
import FormAgregarTarea from './FormAgregarTarea';
import moduleMain from "./Main.module.css"

const Main = () => {
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")));
    useEffect(() => {
        if (darkMode) {
            localStorage.setItem("darkMode", true)
            document.body.classList.add("darkMode");
        } else {
            localStorage.setItem("darkMode", false)
            document.body.classList.remove("darkMode");
        }
    }, [darkMode]);
    return (
        <main className={moduleMain.main}>
            <section className={moduleMain.primerSection}>
                <h1 className={moduleMain.titulo}>TODO</h1>
                <p>
                    { 
                        darkMode == false
                        ? <i className={`${moduleMain.iconoModo} fas fa-moon`} onClick={()=> setDarkMode(true)}></i>
                        : <i className={`${moduleMain.iconoModo} fas fa-sun`} onClick={()=> setDarkMode(false)}></i>
                    }
                </p>
            </section>
            <FormAgregarTarea darkMode={darkMode} />
            
        </main>
    )
}

export default Main