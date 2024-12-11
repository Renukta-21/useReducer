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

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  )
}

export default CounterContext
