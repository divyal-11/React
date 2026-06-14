import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Card from "./component/card";
import Header from "./component/header";
import arr from "./utils/dummy";
// import { greet, meeting } from "./utils/dummy"; 



//header
//body 
//footer






function App() {

    let [A,setA] = useState(arr);

    function sortArr(){
        A.sort((a,b)=>a.price-b.price);
        setA([...A]);
        // console.log(arr);
    }

    function priceAbove500(){
        const b = A.filter((value)=>value.price>500);
        setA(b);

    }
    return (<>

       

        <Header />

        <button onClick={sortArr}>
            Sort by Price
        </button>
        <button onClick={priceAbove500}>Price Above 500</button>

        <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {A.map((item, index) => {
                return (
                    <Card key={index} cloth={item.cloth} offer={item.offer} price={item.price} />
                )
            })}
        </div>


    </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
