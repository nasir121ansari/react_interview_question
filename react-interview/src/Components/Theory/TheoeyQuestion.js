import React from 'react'

export const TheoeyQuestion = () => {
    return (
        <div>
            <ol>
                <li>
                    <strong>What are the features of react ?</strong>
                    <p>Ans:
                        <ol>
                            <li><strong>JSX (JavaScript XML):</strong></li>
                            <p>JSX is a syntax extension that allows you to write HTML-like code within JavaScript. It makes the code easier to read and write by combining HTML and JavaScript.</p>
                        </ol>
                        <ol>
                            <li><strong>Virtual DOM:</strong></li>
                            <p><strong>Description:</strong> React uses a virtual DOM to optimize updates and rendering. Instead of updating the entire DOM with every change, React updates a virtual representation of the DOM, which then updates only the necessary parts of the actual DOM.</p>
                            <p><strong>Benefits:</strong> Improves performance and efficiency.</p>
                        </ol>
                        <ol>
                            <li><strong>Components:</strong></li>
                            <p>React is built around components, which are reusable, self-contained pieces of UI. Components can be functional or class-based.</p>
                        </ol>
                        <ol>
                            <li><strong>State and Props:</strong></li>
                            <p>State and props are used to manage data within components. State (Mutable) is internal to the component, while props(Immutable) are external and passed down from parent to child components.</p>
                        </ol>
                    </p>
                </li>
                <li>
                    <strong>What is the DOM?</strong>
                    <p>Ans: </p>
                    <p>The Document Object Model (DOM) is like a blueprint for a webpage. It turns the structure of the HTML  documents into a tree of objects, making it easy for JavaScript to access and manipulate the content, structure, and styles of the webpage.</p>
                </li>
                <li>
                    <strong>What is the Fragment?</strong>
                    <p>Ans: </p>
                    <p >Fragment is a wrapper used to group a list of children elements without adding extra nodes to the DOM.</p>
                </li>
                <li>
                    <strong>What is react Synthetic Events?</strong>
                    <p>Ans: </p>
                    <p >React has its own event handling system which is very similar to handling events on DOM elements. The react event handling system is known as Synthetic Events.
                    </p>
                    <p>
                        React provides synthetic events for all common event types, including mouse events (onClick, onMouseOver), keyboard events (onKeyDown, onKeyUp), form events (onChange, onSubmit), and more."
                    </p>
                    <p>
                        when the button is clicked, the handleClick function is called, receiving a synthetic event object. This object contains the same properties and methods as the native DOM event but with additional cross-browser compatibility features.
                    </p>
                    <p>
                        Synthetic events have the same properties as native events, such as event.target (the element that triggered the event), event.currentTarget (the element that the event handler is attached to), event.preventDefault (to prevent the default action), and event.stopPropagation (to stop the event from propagating up the DOM tree)."

                    </p>
                </li>
                <li>
                    <strong>What is the diffrence between package.json and package-lock.json?</strong>
                    <p>Ans: </p>
                    <p><strong>package.json : </strong>This file lists the basic information about the project and the high-level dependencies.</p>
                    <p><strong>package-lock.json : </strong>This file locks down the exact versions of every dependency and sub-dependency.</p>
                </li>
                <li>
                    <strong>What is the diffrence between Client-Side Rendering (CSR) and Server-Side Rendering (SSR):?</strong>
                    <p>Ans: </p>
                    <p><strong>Client-Side Rendering (CSR) : </strong>When you visit a website using CSR, your browser downloads a basic page structure first, then JavaScript code. The JavaScript then runs in your browser, which builds the full webpage dynamically. This method is fast after the initial load because it only fetches data and updates parts of the page as needed.</p>
                    <p><strong>Server-Side Rendering (SSR): : </strong>With SSR, when you request a webpage, the server generates the complete HTML for that page and sends it to your browser. This means the browser gets a fully-formed webpage right away, which can be faster for displaying content initially.</p>
                </li>
                <li>
                    <strong>What is the diffrence between Stateless Functional Components  Stateful Class Components?</strong>
                    <p>Ans: </p>
                    <p><strong>Stateless Functional Components : </strong>Also known as Functional Components.
                        Defined as JavaScript functions that accept props (inputs) and return React elements describing what should appear on the screen.
                        Do not manage state or have access to lifecycle methods (such as componentDidMount, componentDidUpdate, etc.).
                        Typically used for presenting UI based solely on props received from parent components.
                        Easier to read, write, and test because they are plain JavaScript functions.</p>
                    <p><strong>Stateful Class Components : </strong>Also known as Class Components.
                        Defined as ES6 classes that extend React.Component.
                        Can maintain a private internal state (this.state) and update it using setState().
                        Have access to lifecycle methods, allowing them to perform actions when the component mounts, updates, or unmounts.
                        Used when a component needs to manage complex UI state or interact with lifecycle methods and local state.</p>
                </li>
                <li>
                    <strong>What is Pure Component in React?</strong>
                    <p>Ans: </p>
                    <p>A Pure Component in React is a special type of component that automatically implements a performance optimization. It helps to avoid unnecessary re-renders by comparing the current props and state with the next ones. If they haven’t changed, the component won’t re-render.</p>
                    <p> Pure Components only re-render when their props or state change, which can make your app faster.</p>
                </li>
                <li>
                    <strong>What are Refs in React?</strong>
                    <p>Ans: </p>
                    <p>Refs should be used when you need to interact with the DOM directly and cannot achieve the same effect through state and props alone.</p>
                    <p> Refs in React are a feature that allows you to directly access and manipulate DOM elements or React elements created in the render method.</p>
                </li>
                <li>
                    <strong>what forward ref is in React?</strong>
                    <p>Ans: </p>
                    <p>Forward ref in React is a feature that allows you to pass a ref through a component to one of its children. This is useful when you need to access a child component's DOM node or React instance directly from the parent component.</p>
                </li>
                <li>
                    <strong>What are error boundaries in React?</strong>
                    <p>Ans: </p>
                    <p>Error boundaries in React are components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of crashing the whole application. They help improve the user experience by preventing a complete app breakdown due to unexpected errors.</p>
                </li>
                <li>
                    <strong>What are Higher-Order Components in React?</strong>
                    <p>Ans: </p>
                    <p>Higher-Order Components (HOCs) in React are a pattern used to share common functionality between components. An HOC is a function that takes a component and returns a new component with enhanced behavior or added logic.</p>
                </li>
                <li>
                    <strong>What is the difference between controlled and uncontrolled components in React?</strong>
                    <p>Ans: </p>
                    <p> <strong>Controlled Components:</strong> In controlled components, form data is handled by the React component's state. (using useState())</p>
                    <p> <strong>Uncontrolled Components:</strong> In uncontrolled components, form data is handled by the DOM itself. (using useRef())</p>
                </li>
                <li>
                    <strong>What are keys in React?</strong>
                    <p>Ans: </p>
                    <p> Keys in React are special attributes you add to list items to help React keep track of which items have changed, been added, or been removed.</p>
                </li>
                <li>
                    <strong> What is lazy loading in React?</strong>
                    <p>Ans: </p>
                    <p> Lazy loading in React is a technique used to load components only when they are needed. This helps improve the performance of your application by reducing the initial load time and only loading components as the user navigates to them.</p>
                    <p><strong>Code Splitting:</strong> It allows for code splitting, which means only the necessary code is loaded initially, and additional code is loaded dynamically as needed.</p>
                    <p><strong>React.lazy:</strong> This function is used to dynamically import the MyComponent only when it is needed.</p>
                    <p><strong>Suspense:</strong> This component is used to wrap the lazy-loaded component and provide a fallback (e.g., a loading spinner) while the component is being loaded.</p>
                </li>
            </ol>
        </div>
    )
}
