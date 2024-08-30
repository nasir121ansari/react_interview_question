import React, {useRef, useImperativeHandle, forwardRef } from 'react';
const Parent = () => {
    const inputRef = useRef(null)
    const hanldefocus = () => {
  
      if (inputRef.current) {
        inputRef.current?.focus()
      }
    }
    console.log("parent", inputRef.current)
    return (
      <div>
  
        <Child
          ref={inputRef}
        />
        <button onClick={hanldefocus}>onClic</button>
      </div>
    );
}
const Child = forwardRef((props, ref) => {
    const inputref = useRef(null)
    useImperativeHandle(ref, () => {
      return {
        focus: fn
      }
    }, [])
    let fn = () => {
      if (inputref.current) {
        inputref.current?.focus()
      }
    }
    return (
      <div>
        <input ref={inputref} />
      </div>
    )
  }
  )

export default Parent