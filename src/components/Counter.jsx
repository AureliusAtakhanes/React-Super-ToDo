import React from "react";
import { useState } from "react";

const Counter = function () {
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('текст');

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>

            <h1>{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)} />
        </div>
    )
}

export default Counter;