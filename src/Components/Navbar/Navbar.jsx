import React, { useContext, useState } from "react";
import './Navbar.css'
import logo from '../Asset/images/LOGONEW2.jpg';
import cart from '../Asset/images/cart.png';
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const { getTotalCartItems }= useContext(ShopContext);
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt=""/>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("home")}}><Link className="link" to='/home'>Home</Link>{menu==="home"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("about")}}><Link className="link" to='/about'>About Us</Link>{menu==="about"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("contact")}}><Link className="link" to='/contact'>Contact Us</Link>{menu==="contact"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Log In</button></Link>
                <Link to='/register'><button>Register</button></Link>
                <Link to='/admin'><button>admin</button></Link>
                <Link to='/cart'><img src={cart} alt=""/></Link>
               <div className="nav-cart-count">{ getTotalCartItems() }</div>
            </div>

            
            

        </div>
    )
}

export default Navbar;