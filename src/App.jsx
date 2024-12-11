import { useContext, useReducer } from 'react'
import CounterContext from './context/CounterContext'


function App() {
  const [state, dispatch] = useReducer(counterReducer, 5)
  const context = useContext(CounterContext)
  console.log(context.name)


  return (
    <div>
      <h2>useReducer usage</h2>
      <p>{state}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <button onClick={() => dispatch({ type: 'ZERO' })}>0</button>
    </div>
  )
}

export default App
