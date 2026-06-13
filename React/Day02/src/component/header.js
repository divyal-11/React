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
export default Header;  