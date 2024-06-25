// life cyle method in class based component
// import React, { Component } from 'react'

// export class LifeCycle extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 };
//         console.log('Constructor: Initializes the state ');
//     }

//     componentDidMount() {
//         console.log('componentDidMount: Executes after the component is mounted into the DOM');
//     }

//     componentDidUpdate(prevProps, prevState, snapshot) {
//         console.log('componentDidUpdate: Executes after the component updates');
//     }

//     componentWillUnmount() {
//         console.log('componentWillUnmount: Executes right before the component is unmounted and destroyed');
//     }

//     handleClick = () => {
//         this.setState({ count: this.state.count + 1 });
//     }
//     render() {
//         console.log('Render: Rendering component');
//         return (
//             <div>
//                 <h1>Count: {this.state.count}</h1>
//                 <button onClick={this.handleClick}>Increment</button>
//             </div>
//         )
//     }
// }

// export default LifeCycle



// Life cycle method in functional component

import React, { useState, useEffect } from 'react';

export const LifeCycle = () => {
    const [count, setCount] = useState(0);

    // Equivalent to componentDidMount and componentDidUpdate:
    useEffect(() => {
        console.log('useEffect: Component has been mounted or updated');

        // Equivalent to componentWillUnmount:
        return () => {
            console.log('useEffect cleanup: Component is about to be unmounted');
        };
    }, [count]); // This effect depends on 'count'

    const handleClick = () => {
        setCount(count + 1);
    };
    console.log('Render: Rendering component');
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleClick}>Increment</button>
        </div>
    )
}

