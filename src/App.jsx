import { useContext } from "react"
import CounterContext from "./context/CounterContext"

function App() {
  const {count, setCount} = useContext(CounterContext)

  return (
    <div>
      <h2>Counter</h2>
      <p>{count}</p>
      <button onClick={()=> setCount(count+1)}>+</button>
    </div>
  )
}

export default App