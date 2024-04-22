import React from "react";
import './Test.css'
import data_product from "../Asset/images/data";
import Item from "../Item/Item";

const Test = () => {
    return (
        <div className="test">
            <h1>TESTS</h1>
            <hr />
            <div className="test-item">
               {data_product.map((item,i)=>{
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
               })}
            </div>
        </div>
    )
}

export default Test;