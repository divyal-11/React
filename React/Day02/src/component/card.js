function Card(props) {
    // Generate a mock original price that is higher than the discounted price
    const originalPrice = Math.round(props.price * 1.6);
    const discountPercent = 37; // 37% off

    return (
        <div className="myntra-card">
            <div className="image-container">
                <img 
                    src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQJzJToIN9uS6B1y-3KGlOq7cYt9lzsHBT2Hfzpu98OUybmlk7uZJkwjF6qkpaPqaHRq3IHddnWTpnX5q7LYOrWWZdQI3V2cb7WMVEYc0nj" 
                    alt={props.cloth}
                />
            </div>
            <div className="card-info">
                <h3 className="brand-name">Myntra Special</h3>
                <h4 className="product-title">{props.cloth} - {props.offer}</h4>
                <div className="price-container">
                    <span className="discount-price">Rs. {props.price}</span>
                    <span className="original-price">Rs. {originalPrice}</span>
                    <span className="discount-percentage">({discountPercent}% OFF)</span>
                </div>
                <button className="buy-button">
                    ADD TO BAG
                </button>
            </div>
        </div>
    );
}

export default Card;