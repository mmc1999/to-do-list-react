import { createContext, useEffect, useState } from "react";

const TemaContext = createContext();
let initialTema = JSON.parse(localStorage.getItem("darkMode"))
let idN = localStorage.getItem("id")
let tokenn = localStorage.getItem("token")

const ThemeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(initialTema);
    const [id, setId] = useState(idN); 
    const [token, setToken] = useState(tokenn); 

    useEffect(() => {
            if (darkMode) {
                localStorage.setItem("darkMode", true)
                setDarkMode(true)
                document.body.classList.add("darkMode");
            } else {
                localStorage.setItem("darkMode", false);
                setDarkMode(false)
                document.body.classList.remove("darkMode");
            }
    }, [darkMode]);
    
    const data = {darkMode, setDarkMode, setId, id, token, setToken};

    return (<TemaContext.Provider value={data}>{children}</TemaContext.Provider>)
    
}


export {ThemeProvider};
export default TemaContext