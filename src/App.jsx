import { useReducer } from 'react'

const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    case 'ZERO':
      return 0
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(counterReducer, 5)
  
  return (
    <div>
      <h2>useReducer usage</h2>
      <p>{state}</p>
      <button onClick={()=> dispatch({type:'INCREMENT'})}>+</button>
      <button onClick={()=> dispatch({type:'DECREMENT'})}>-</button>
      <button onClick={()=> dispatch({type:'ZERO'})}>0</button>
    </div>
  )
}

export default App
