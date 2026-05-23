import { createContext, useState } from "react"

const NewContext = createContext()

const ContextProvider = (props) => {

    const [sideNav, setSideNav] = useState(false);

    return (
        <NewContext.Provider value={{ sideNav, setSideNav}} >
            {props.children}
        </NewContext.Provider>
    )
}

export default ContextProvider
export {NewContext}
