import React from 'react'
import useCustomHook from './CustomHook'

const Counter = () => {
    const { count, increment, decrement } = useCustomHook();
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Counter