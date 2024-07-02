import React, { useCallback, useState } from 'react'
import UsecallBackC from './UsecallBackC'

const UseCallBackP = () => {
    let [count, setCount] = useState(0);
    let [count1, setCount1] = useState([]);
    let incr = () => {
        setCount(count + 1)
    }
    let fun = useCallback(() => {
        console.log('hello')
    }, count1)
    return (
        <div>
            <UsecallBackC count1={count1} />
            <p>count : {count}</p>
            <button onClick={incr}>click</button>
        </div>
    )
}

export default UseCallBackP