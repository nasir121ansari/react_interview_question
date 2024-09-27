import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, Increment } from '../../ReduxConfig/actions'

const ReduxCounter = () => {
    const count = useSelector((state) => state.count)
    const dispatch = useDispatch()
  return (
    <div>
        <p>Count : {count}</p>
        <button onClick={() => dispatch(Increment())}>Incr</button>
        <button onClick={() => dispatch(decrement())}>decr</button>
    </div>
  )
}

export default ReduxCounter