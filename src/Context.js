import React, {useContext,useState, useEffect} from "react"

const Context = React.createContext()
function ContextProvider({children}) {
const[gameStarted, setGameStarted] = useState("false")

return (
<Context.Provider value = {{gameStarted, setGameStarted}}>
{children}
</Context.Provider>



)





}
export {ContextProvider, Context}