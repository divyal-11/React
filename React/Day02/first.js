import React from "react";
import ReactDOM from "react-dom/client";

const element1 = <h1>Hello React</h1>

let obj = { name: "divyal", age: 23 }

function Greet(name) {
    return <h1>hello brother {obj.name}</h1>
};

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(Greet("divyal"));
