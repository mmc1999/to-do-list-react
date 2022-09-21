import { useContext } from "react"
import TemaContext from "../../context/TemaContext";
import HeaderModule from "./Header.module.css"

export default function Header() {
    const {darkMode, setDarkMode} = useContext(TemaContext)
    return(
        <section className={HeaderModule.primerSection}>
            <h1 className={HeaderModule.titulo}>TODO</h1>
            <p>
                { 
                    darkMode == false
                        ? <i className={`${HeaderModule.iconoModo} fas fa-moon`} onClick={() => setDarkMode(true)}></i>
                        : <i className={`${HeaderModule.iconoModo} fas fa-sun`} onClick={() => setDarkMode(false)}></i>
                }
            </p>
        </section>
    )
}