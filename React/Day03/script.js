import React, { useState } from "react";
import ReactDOM from "react-dom/client";

function Counter() {
    let [count, setCount] = useState(1);

    function incrementnumber() {
        // count = count + 1;
        setCount(count + 1);
        //console.log("Increment",count);
        // document.querySelector("h1").innerHTML= `Count is: ${count}`;     
    }

    function decrementnumber() {
        // count = count - 1;
        setCount(count-1);
        //console.log("Decrement",count);
        // document.querySelector("h1").innerHTML= `Count is: ${count}`;  
    }
    return (
        <div className="first">
            <h1>Count is: {count}</h1>
            <button onClick={incrementnumber}>Increment {count}</button>
            <button onClick={decrementnumber}>Decrement {count}</button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Counter />)