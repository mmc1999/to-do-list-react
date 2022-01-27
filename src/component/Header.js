import { useContext } from "react"
import TemaContext from "../context/TemaContext";
import moduleMain from "./Main.module.css"

export default function Header() {
    const {darkMode, setDarkMode} = useContext(TemaContext)
    return(
        <section className={moduleMain.primerSection}>
            <h1 className={moduleMain.titulo}>TODO</h1>
            <p>
                { 
                    darkMode == false
                        ? <i className={`${moduleMain.iconoModo} fas fa-moon`} onClick={() => setDarkMode(true)}></i>
                        : <i className={`${moduleMain.iconoModo} fas fa-sun`} onClick={() => setDarkMode(false)}></i>
                }
            </p>
        </section>
    )
}