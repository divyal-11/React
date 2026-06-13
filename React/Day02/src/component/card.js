function Card(props) {

    return (
        <div className="card"style={{ border: "2px solid black", padding: "10px", margin: "10px" }}>
            <img src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJzJToIN9uS6B1y-3KGlOq7cYt9lzsHBT2Hfzpu98OUybmlk7uZJkwjF6qkpaPqaHRq3IHddnWTpnX5q7LYOrWWZdQI3V2cb7WMVEYc0nj" height="200px" width="200px"></img>
            <div style={{ textAlign: "center" }}>
                <h2>{props.cloth}</h2>
                <h1>{props.offer}</h1>
                <button style={{ 
                    backgroundColor: "#ff3f6c", 
                    color: "white", 
                    border: "none", 
                    padding: "8px 16px", 
                    fontWeight: "bold", 
                    cursor: "pointer", 
                    marginTop: "10px",
                    borderRadius: "4px"
                }}>Rs. {props.price}
                </button>
            </div>
        </div>
    )
}

export default Card;