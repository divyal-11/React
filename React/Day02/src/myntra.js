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
        {/* 5. The Sort Button */}
            <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
                <button 
                    onClick={handleSort} 
                    style={{ 
                        padding: "10px 20px", 
                        backgroundColor: "#1a1a1a", 
                        color: "white", 
                        border: "none", 
                        borderRadius: "5px", 
                        cursor: "pointer", 
                        fontSize: "16px", 
                        fontWeight: "bold" 
                    }}
                >
                    {/* Toggle the button text based on the sort direction */}
                    Sort by Price: {sortOrder === "asc" ? "High to Low" : "Low to High"}
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
