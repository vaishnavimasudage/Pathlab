import './Offers.css'
import React from "react";
import exclusive_image from '../Asset/images/OFFER1.jpg';

 const Offer = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
                <h1>Exclusive</h1>
                <h1>Offers for your family</h1>
                <p>ONLY ON PREMIUM SUBSCRIPSTION</p>
                <button>Check now</button>
            </div>
            <div className='offers-right'>
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
 }

 export default Offer;