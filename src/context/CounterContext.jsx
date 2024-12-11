import { createContext, useReducer } from 'react'

const CounterContext = createContext()

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}

export const CounterContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, 0)

  const increment=()=>dispatch({type:'INC'})
  const decrement=()=>dispatch({type:'DEC'})
  const setZero=()=>dispatch({type:'ZERO'})

  return (
    <CounterContext.Provider value={{ state, increment, decrement, setZero }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContext
