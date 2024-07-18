import React, { useMemo, useState } from 'react'

const UseMemo = () => {
    let [incr, setIncr] = useState(0)
    let [decr, setdecr] = useState(0)

    let onIncr = () => {
        setIncr(incr + 1)
    }
    let onDecr = () => {
        setdecr(decr + 1)
    }
    const even = useMemo(() => {
        console.log('called');
        return incr % 2 === 0;
    }, [incr]);
    // const even = () => {
    //     console.log('called')
    //     return incr % 2 === 0
    // }
    return (
        <div>
            <button onClick={onIncr}>incr {incr}</button>
            {/* <span>{even() ? "even" : "odd"}</span> */}
            <span>{even ? "even" : "odd"}</span>
            <button onClick={onDecr}>decr {decr}</button>
        </div>
    )
}

export default UseMemo