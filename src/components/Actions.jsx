import { useContext } from 'react'
import CounterContext from '../context/CounterContext'

function Actions() {
    const {increment, decrement, setZero} = useContext(CounterContext)
    
  return (
    <div>
      <button onClick={()=> increment()}>+</button>
      <button onClick={()=> setZero()}>0</button>
      <button onClick={()=> decrement()}>-</button>
    </div>
  )
}

export default Actions
