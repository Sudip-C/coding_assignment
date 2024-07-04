import React from 'react';
import { Link  as Navlink} from 'react-router-dom';
import '../css/Navbar.css'
const Navbar: React.FC = () => {
  return (
    <nav className='nav_items'>
        <h1 id='logo'>Ekart</h1>
        <section className="page_link">
        <Navlink  style={{textDecoration:"none"}} to="/"><h1 >Home</h1></Navlink>
        <h1>Wishlist</h1>
        <h1>Cart</h1>
        <h1>Login</h1>
        </section>
    </nav>
  );
};

export default Navbar;
