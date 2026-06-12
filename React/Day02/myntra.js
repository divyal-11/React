import React from "react";
import ReactDOM from "react-dom/client";

//header
//body 
//footer

function Card(props) {

    return (
        <div className="card"style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJzJToIN9uS6B1y-3KGlOq7cYt9lzsHBT2Hfzpu98OUybmlk7uZJkwjF6qkpaPqaHRq3IHddnWTpnX5q7LYOrWWZdQI3V2cb7WMVEYc0nj" height="200px" width="200px"></img>
            <div style={{ textAlign: "center" }}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <h2>SHOP NOW</h2>
            </div>
        </div>
    )
}

function Header() {
    return (
        <div className="heading">
            <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd82KddH8iXj7onDwq5Y4--1lqKd_eHjtEiSvC9YFAlA&s=10" height="80px" width="80px" />
            <div className="options">
                <button className="btn">Men</button>
                <button className="btn">Women</button>
                <button className="btn">Kids</button>
                <button className="btn">Home & Living</button>
                <button className="btn">Beauty</button>
                <button className="btn">Studio</button>
            </div>
            <input className="searchbar" placeholder="search for products, brands and more"></input>
            <div className="Profile">
                <button className="profile-btn">Profile</button>
                <button className="profile-btn">Wishlist</button>
                <button className="profile-btn">Bag</button>
            </div>


        </div>
    )
}

const arr = [{ cloth: "T-shirts", offer: "20-80% off" }, { cloth: "Jeans ", offer: "10-70% off" }, { cloth: "Dresses", offer: "30-90% off" }, { cloth: "Shoes", offer: "20-80% off" }, { cloth: "Bags", offer: "20-80% off" }, { cloth: "Accessories", offer: "20-80% off" }, { cloth: "Jewellery", offer: "20-80% off" }, { cloth: "Sports wear", offer: "20-80% off" }, { cloth: "Ethnic wear", offer: "20-80% off" }]

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

        <Footer/>
        

    </>
    )
}

const Root = ReactDOM.createRoot(document.getElementById("root"));
Root.render(<App />);
