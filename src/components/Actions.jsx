import { useContext } from 'react'
import CounterContext from '../context/CounterContext'

function Actions() {
    const {dispatch} = useContext(CounterContext)
    
  return (
    <div>
      <button onClick={()=> dispatch({type:'INC'})}>+</button>
      <button onClick={()=> dispatch({type:'ZERO'})}>0</button>
      <button onClick={()=> dispatch({type:'DEC'})}>-</button>
    </div>
  )
}

export default Actions
