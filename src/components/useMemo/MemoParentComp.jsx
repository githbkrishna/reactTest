import React, { useState } from 'react'
import { useMemo } from 'react';

const ExpensiveComp = () => {

    const sum = () => {
        console.log("calculating sum...");
        let i = 0;
        for (let j = 0; j <= 10000000; j++) {
            i = i + 1;
        }
        return i;
    }

    // Calling the sum function and rendering its result

    const total = sum();

    // const total = useMemo(() => sum(), [])

    return <p>Sum: {total}</p>

}

const MemoParentComp = () => {

    const [count, setCount] = useState(0);

    const myStyle = {
        padding: "10px",
        color: "#fff",
        borderRadius: "5px",
        backgroundColor: "green"
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h2>MemoParentComp</h2>

            <ExpensiveComp />

            <button onClick={() => setCount(count + 1)} style={myStyle}>button</button>
            
            <h3>parent count: {count}</h3>
        </div>
    )
}

export default MemoParentComp;
