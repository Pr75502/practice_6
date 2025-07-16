
import { createContext } from "react";
import { useReducer } from "react";
import reducer from "./reducer";
import { useContext } from "react";

export const TaskContext = createContext()
const initialState = []
 
export const TaskProvider = ({ children }) => {
  const [state,dispatch]=useReducer(reducer,initialState)  
    return (
        <TaskContext.Provider value={{state,dispatch}}>
            {children}
        </TaskContext.Provider>
    )
}


const useAuth = () => {
   return useContext(TaskContext)
}
    export default useAuth