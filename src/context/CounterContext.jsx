import { createContext, useState } from "react";

const CounterContext = createContext()

export const CounterContextProvider = ({children})=>{
  const [count, setCount] = useState(0)

  return(
    <CounterContext.Provider value={{count, setCount}}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContext