import React, { useEffect, useRef, useState } from 'react'

const PreviousState = () => {
    
   const [count, setcount] = useState(0)

   let a = 0;

   const prevCountRef = useRef(0)
   
   useEffect(()=>{
       a = a + 1
       console.log(`rendering & the value of a is ${a}`);

       prevCountRef.current = count 

   })

   const myStyle = {
    padding: "10px",
    color: "#fff",
    borderRadius: "5px",
    backgroundColor: "red"
   }

  return (
    <div style={{textAlign: "center"}}>
        <h2>PreviousState</h2>
        <h3>count: {count}</h3>
        <h3>prevCountRef: {prevCountRef.current}</h3>
        {/* <button onClick={()=> setcount(count + 1)} style={{backgroundColor: "red"}}>button</button> */}
        <button onClick={()=> setcount(count + 1)} style={myStyle}>button</button>
    </div>
  )
}

export default PreviousState