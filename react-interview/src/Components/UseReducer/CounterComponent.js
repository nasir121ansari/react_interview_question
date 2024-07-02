import React, { useReducer } from 'react';

// Define the initial state
const initialState = { count: 0 };

// Create the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return initialState;
        default:
            throw new Error('Unknown action type');
    }
};

const CounterComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default CounterComponent


/*
The useReducer hook in React is an alternative to useState for managing state, especially when the state logic is complex or involves multiple sub-values. Here’s a simple and clear explanation you can give in an interview:

What is useReducer?
useReducer is a React hook that manages state by using a reducer function. A reducer function determines how the state changes in response to actions. It's similar to how state is managed in Redux.
*/