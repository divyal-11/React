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
    // 2. Initialize state with our array of clothes
    const [items, setItems] = useState(arr);
    
    // 3. Keep track of sort direction ('default', 'asc', or 'desc')
    const [sortOrder, setSortOrder] = useState("default");
    // 4. Function that handles the sorting logic
    const handleSort = () => {
        let sortedItems = [...items]; // Create a copy of the list first
        
        if (sortOrder === "default" || sortOrder === "desc") {
            // Sort ascending (Low to High)
            sortedItems.sort((a, b) => a.price - b.price);
            setSortOrder("asc");
        } else {
            // Sort descending (High to Low)
            sortedItems.sort((a, b) => b.price - a.price);
            setSortOrder("desc");
        }
        
        setItems(sortedItems); // Update state to trigger UI update
    };

    return (<>

        <Header />
        
        {/* Sort Button styled like Myntra's Dropdown */}
        <div className="myntra-sort-container">
            <button onClick={handleSort} className="myntra-sort-btn">
                Sort by: <strong>{sortOrder === "asc" ? "Price: Low to High" : sortOrder === "desc" ? "Price: High to Low" : "Recommended"}</strong>
            </button>
        </div>

        <div className="middle" style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {items.map((item, index) => {
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
