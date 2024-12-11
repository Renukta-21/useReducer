import { useContext } from "react"
import CounterContext from "./context/CounterContext"
import Actions from "./components/Actions"

function App() {
  const {state} = useContext(CounterContext)
  
  return (
    <div>
      <h2>Counter</h2>
      <p>{state}</p>
      <Actions/>
    </div>
  )
}

export default App