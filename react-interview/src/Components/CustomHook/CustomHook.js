import React, { useState } from "react";

const useCustomHook = (initialValue = 0) => {
    let [count, setCount] = useState(initialValue);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count = count > 0 ? count - 1 : count);

    return { count, increment, decrement };

}

export default useCustomHook;


/* 
Custom hooks are functions in React that allow you to reuse stateful logic across different components. They start with the prefix use and can use other hooks like useState and useEffect.

Why Use Custom Hooks?
Reusability: Extract logic into reusable functions.
Clean Code: Keep your components simple by moving logic into hooks.
Separation of Concerns: Separate the logic from the UI code.
*/