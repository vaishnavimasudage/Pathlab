import React from "react";
import Slider from '../Components/Slider/Slider';
import Popular from "../Components/Test/Test";
import Offers from "../Components/Offers/Offers";
import Newcollections from "../Components/NewTests/NewTests";
import Newsletter from "../Components/Newsletter/Newsletter";
import { Link } from "react-router-dom";


const Home = () => {

    const customerId = sessionStorage.getItem('customerid');
    const name = sessionStorage.getItem('name');
    return(
        <div>
             
            <Slider/>
            <h1>Welcome back  {name}</h1>
            <Link to={`/profile/${customerId}`}></Link>
            <Popular/>
            <Offers/>
            <Newcollections/>
            <Newsletter/>
        </div>

    )
}

export default Home;