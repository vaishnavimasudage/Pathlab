import React from "react";
import './Newsletter.css'
import { Link } from "react-router-dom";

const Newsletter = () => {
    return (
        <div className="newsletter">
            <h1>Get your premium subscription on your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                {/* <Link to="/register"></Link> */}
                 <button >Subscribe</button> 

                
            </div>
        </div>
    )
}

export default Newsletter;