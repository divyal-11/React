import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/card";
import Header from "./component/header";
import arr from "./utils/dummy";
import { greet, meeting } from "./utils/dummy"; 


//header
//body 
//footer






function App() {
    return (<>

        <Header />

        <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {arr.map((item, index) => {
                return (
                    <Card key={index} cloth={item.cloth} offer={item.offer} />
                )
            })}
        </div>


    </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
