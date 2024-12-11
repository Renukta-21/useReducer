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
    </div>
  )
}

export default App
