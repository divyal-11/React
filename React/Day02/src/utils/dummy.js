const arr = [
    { cloth: "T-shirts", offer: "20-80% off", price: 499 },
    { cloth: "Jeans ", offer: "10-70% off", price: 1299 },
    { cloth: "Dresses", offer: "30-90% off", price: 1899 },
    { cloth: "Shoes", offer: "20-80% off", price: 1999 },
    { cloth: "Bags", offer: "20-80% off", price: 899 },
    { cloth: "Accessories", offer: "20-80% off", price: 299 },
    { cloth: "Jewellery", offer: "20-80% off", price: 599 },
    { cloth: "Sports wear", offer: "20-80% off", price: 1199 },
    { cloth: "Ethnic wear", offer: "20-80% off", price: 1499 }
];


export function greet() {
    return <h1>Hey there</h1>;
}

//jab export default ho tab curlybraces lgana
// jab default na ho to curly braces nhi lgana

export function meeting() {
    return <h1>Meet the team</h1>;
}
export default arr;